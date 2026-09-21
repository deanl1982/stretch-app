#!/usr/bin/env bash
#
# One-time bootstrap for the Groundwork Azure infrastructure.
#
# Creates the things Terraform cannot create for itself:
#   1. Registers the Microsoft.Web resource provider
#   2. A storage account + container to hold Terraform remote state
#   3. An Entra ID app registration + service principal for GitHub Actions
#   4. Federated credentials (OIDC) for that app - one per subject
#   5. Role assignments: Contributor on the subscription, Storage Blob Data
#      Contributor on the state container
#
# Run this ONCE, from your laptop, logged in as a subscription Owner.
#
#   chmod +x infra/bootstrap/bootstrap.sh
#   ./infra/bootstrap/bootstrap.sh
#
# It is idempotent-ish: re-running will skip things that already exist, but
# read the output rather than assuming.
#
# COST: everything here is free EXCEPT the storage account. A Standard_LRS
# account holding a ~30 KB state file with a handful of transactions per week
# costs well under GBP 0.05/month - realistically it rounds to zero on the
# bill, but it is not *strictly* GBP 0.00. Decide before running. To stay at
# strict zero, skip the storage account (pass --no-state) and use local state;
# see infra/README.md "State backend".

set -euo pipefail

# --- Configuration -----------------------------------------------------------
PREFIX="${PREFIX:-groundwork}"
LOCATION="${LOCATION:-westeurope}"
GITHUB_OWNER="${GITHUB_OWNER:-TypicalLawrence}"
GITHUB_REPO="${GITHUB_REPO:-stretch-app}"
DEFAULT_BRANCH="${DEFAULT_BRANCH:-main}"

STATE_RG="rg-${PREFIX}-tfstate"
STATE_CONTAINER="tfstate"
APP_NAME="gh-${PREFIX}-terraform"

CREATE_STATE=1
if [[ "${1:-}" == "--no-state" ]]; then
  CREATE_STATE=0
fi

say() { printf '\n\033[1;36m==> %s\033[0m\n' "$*"; }
warn() { printf '\033[1;33m[!] %s\033[0m\n' "$*"; }

# --- Preflight ---------------------------------------------------------------
command -v az >/dev/null || { echo "az CLI not found"; exit 1; }

say "Current Azure context"
az account show --query '{subscription:name, id:id, tenant:tenantId, user:user.name}' -o table

SUBSCRIPTION_ID="$(az account show --query id -o tsv)"
TENANT_ID="$(az account show --query tenantId -o tsv)"

read -r -p "Use this subscription? [y/N] " ok
[[ "$ok" == "y" || "$ok" == "Y" ]] || {
  echo "Run 'az account set --subscription <name-or-id>' and re-run."
  exit 1
}

# --- 1. Resource provider ----------------------------------------------------
say "Registering Microsoft.Web resource provider (no-op if already registered)"
az provider register --namespace Microsoft.Web --wait
az provider show -n Microsoft.Web --query registrationState -o tsv

# --- 2. State storage --------------------------------------------------------
if [[ "$CREATE_STATE" == "1" ]]; then
  # Storage account names are globally unique, 3-24 chars, lowercase
  # alphanumeric only. Derive a stable suffix from the subscription ID so
  # re-running produces the same name instead of littering new accounts.
  SUFFIX="$(printf '%s' "$SUBSCRIPTION_ID" | shasum | cut -c1-6)"
  STATE_SA="st$(printf '%s' "${PREFIX}tfstate" | tr -cd 'a-z0-9' | cut -c1-16)${SUFFIX}"

  say "Creating state resource group ${STATE_RG}"
  az group create -n "$STATE_RG" -l "$LOCATION" \
    --tags managed_by=bootstrap application="$PREFIX" purpose=tfstate -o none

  say "Creating state storage account ${STATE_SA}"
  az storage account create \
    -n "$STATE_SA" \
    -g "$STATE_RG" \
    -l "$LOCATION" \
    --sku Standard_LRS \
    --kind StorageV2 \
    --access-tier Hot \
    --min-tls-version TLS1_2 \
    --https-only true \
    --allow-blob-public-access false \
    --allow-shared-key-access false \
    -o none
  # --allow-shared-key-access false is what forces Entra ID auth and pairs with
  # use_azuread_auth = true in the Terraform backend block. No access key is
  # ever issued, so no access key can ever leak.

  say "Enabling blob versioning (cheap undo for a clobbered state file)"
  az storage account blob-service-properties update \
    --account-name "$STATE_SA" \
    -g "$STATE_RG" \
    --enable-versioning true \
    -o none

  say "Granting yourself Storage Blob Data Contributor on the account"
  MY_OID="$(az ad signed-in-user show --query id -o tsv)"
  az role assignment create \
    --assignee-object-id "$MY_OID" \
    --assignee-principal-type User \
    --role "Storage Blob Data Contributor" \
    --scope "/subscriptions/${SUBSCRIPTION_ID}/resourceGroups/${STATE_RG}/providers/Microsoft.Storage/storageAccounts/${STATE_SA}" \
    -o none || warn "Role assignment may already exist"

  warn "Role assignments take 1-5 minutes to propagate. If the next step 403s, wait and retry."
  say "Creating container ${STATE_CONTAINER}"
  az storage container create \
    -n "$STATE_CONTAINER" \
    --account-name "$STATE_SA" \
    --auth-mode login \
    -o none
else
  say "Skipping state storage (--no-state). You are using local state."
  STATE_SA="(none)"
fi

# --- 3. App registration + service principal ---------------------------------
say "Creating Entra ID app registration ${APP_NAME}"
APP_ID="$(az ad app list --display-name "$APP_NAME" --query '[0].appId' -o tsv)"
if [[ -z "$APP_ID" ]]; then
  APP_ID="$(az ad app create --display-name "$APP_NAME" --query appId -o tsv)"
  echo "Created app registration: $APP_ID"
else
  warn "App registration already exists: $APP_ID"
fi

SP_OID="$(az ad sp list --filter "appId eq '$APP_ID'" --query '[0].id' -o tsv)"
if [[ -z "$SP_OID" ]]; then
  SP_OID="$(az ad sp create --id "$APP_ID" --query id -o tsv)"
  echo "Created service principal: $SP_OID"
else
  warn "Service principal already exists: $SP_OID"
fi

# NOTE: no client secret is ever created. That is the whole point of OIDC.

# --- 4. Federated credentials ------------------------------------------------
# A federated credential matches ONE exact subject string. GitHub sends a
# different subject for a branch push, a pull_request run, and an environment
# deployment - so you need a SEPARATE credential for each. This is the single
# most common OIDC setup mistake ("AADSTS70021: No matching federated identity
# record found").
say "Creating federated credentials"

add_fic() {
  local name="$1" subject="$2"
  if az ad app federated-credential list --id "$APP_ID" \
       --query "[?name=='$name'] | [0].name" -o tsv | grep -q .; then
    warn "Federated credential '$name' already exists"
    return
  fi
  az ad app federated-credential create --id "$APP_ID" --parameters "{
    \"name\": \"$name\",
    \"issuer\": \"https://token.actions.githubusercontent.com\",
    \"subject\": \"$subject\",
    \"description\": \"GitHub Actions OIDC for ${GITHUB_OWNER}/${GITHUB_REPO}\",
    \"audiences\": [\"api://AzureADTokenExchange\"]
  }" -o none
  echo "  + $name -> $subject"
}

add_fic "github-${DEFAULT_BRANCH}"  "repo:${GITHUB_OWNER}/${GITHUB_REPO}:ref:refs/heads/${DEFAULT_BRANCH}"
add_fic "github-pull-request"       "repo:${GITHUB_OWNER}/${GITHUB_REPO}:pull_request"
# Uncomment if you later gate apply behind a GitHub Environment named 'production':
# add_fic "github-env-production"   "repo:${GITHUB_OWNER}/${GITHUB_REPO}:environment:production"

# --- 5. Role assignments -----------------------------------------------------
say "Assigning roles to the service principal"

# Contributor at SUBSCRIPTION scope, because Terraform creates the resource
# group itself. Least-privilege alternative: create rg-groundwork-prod by hand,
# scope Contributor to just that RG, and import it into state. For a personal
# subscription with one app, subscription-scope Contributor is a reasonable
# trade; note it grants the ability to create anything billable, so the GitHub
# repo's Actions permissions are the real control here.
az role assignment create \
  --assignee-object-id "$SP_OID" \
  --assignee-principal-type ServicePrincipal \
  --role "Contributor" \
  --scope "/subscriptions/${SUBSCRIPTION_ID}" \
  -o none || warn "Contributor assignment may already exist"

if [[ "$CREATE_STATE" == "1" ]]; then
  az role assignment create \
    --assignee-object-id "$SP_OID" \
    --assignee-principal-type ServicePrincipal \
    --role "Storage Blob Data Contributor" \
    --scope "/subscriptions/${SUBSCRIPTION_ID}/resourceGroups/${STATE_RG}/providers/Microsoft.Storage/storageAccounts/${STATE_SA}" \
    -o none || warn "Storage role assignment may already exist"
fi

# --- Done --------------------------------------------------------------------
cat <<SUMMARY

================================================================================
BOOTSTRAP COMPLETE

Create these as GitHub repository VARIABLES (Settings > Secrets and variables >
Actions > Variables). None of them is a credential on its own - the federated
trust relationship is what grants access, so they do not need to be secrets.

  AZURE_CLIENT_ID          ${APP_ID}
  AZURE_TENANT_ID          ${TENANT_ID}
  AZURE_SUBSCRIPTION_ID    ${SUBSCRIPTION_ID}
  TFSTATE_RESOURCE_GROUP   ${STATE_RG}
  TFSTATE_STORAGE_ACCOUNT  ${STATE_SA}
  TFSTATE_CONTAINER        ${STATE_CONTAINER}

And after your first \`terraform apply\`, add:

  SWA_RESOURCE_GROUP       <terraform output -raw resource_group_name>
  SWA_NAME                 <terraform output -raw static_web_app_name>

Local backend config - write infra/backend.hcl:

  resource_group_name  = "${STATE_RG}"
  storage_account_name = "${STATE_SA}"
  container_name       = "${STATE_CONTAINER}"
  key                  = "${PREFIX}-prod.tfstate"

Then:

  cd infra
  terraform init -backend-config=backend.hcl
  terraform plan
================================================================================
SUMMARY
