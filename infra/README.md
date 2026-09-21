# Groundwork Flexibility infrastructure

Terraform for hosting **Groundwork Flexibility** on **Azure Static Web Apps, Free tier**.

Verified 2026-09-20 against Terraform 1.16.3 and azurerm 5.6.0:
`terraform fmt -check -recursive` clean, `terraform validate` Success.

---

## The one thing people get wrong

**Terraform creates the app. Terraform does not deploy the app.**

| | Owned by | Workflow |
| --- | --- | --- |
| Resource group, Static Web App resource, SKU, custom domain | Terraform | `.github/workflows/infra.yml` |
| The actual HTML/JS/CSS in `dist/` | `Azure/static-web-apps-deploy` | `.github/workflows/azure-static-web-apps.yml` |

`terraform apply` gives you an empty app on a `*.azurestaticapps.net` hostname
that returns a placeholder page. Content only appears after the **App**
workflow runs. `terraform destroy` deletes the app and everything in it; it
does not touch your Git history or your `dist/`.

These are two separate pipelines on purpose. Infra changes roughly never; the
app changes constantly. Coupling them would mean every commit ran a
`terraform apply`.

---

## Cost

**GBP 0.00/month** for the app itself. Free tier is hard-capped rather than
metered: at 100 GB of bandwidth per subscription per month the Free plan's
overage is listed as *Unavailable*, not billed. It cannot generate an invoice.

Free tier limits (verified against
[Azure SWA quotas](https://learn.microsoft.com/azure/static-web-apps/quotas)
and the [pricing page](https://azure.microsoft.com/en-gb/pricing/details/app-service/static/)):

| | Free |
| --- | --- |
| Bandwidth | 100 GB/month, per **subscription** |
| Apps | 10 per subscription |
| Preview environments | **3** per app (PR previews work on Free) |
| Custom domains | **2** per app |
| Storage | 500 MB total, 250 MB per environment |
| File count | 15,000 |
| SLA | **None** |
| Private endpoints, IP restrictions | Unavailable |

> The task brief said 1 custom domain. Microsoft's current published limit is
> **2**. Two is what you get, and it is enough for apex + `www`.

The **only** thing in this repo that can cost money is the Terraform state
storage account (see below), at a few pence a month. Nothing else here bills.
There is deliberately no Front Door, no App Service Plan, no Application
Insights, no Key Vault, no Azure DNS zone.

---

## Region

Static Web Apps has a control plane in **five regions only**. Verified on your
subscription with:

```bash
az provider show -n Microsoft.Web \
  --query "resourceTypes[?resourceType=='staticSites'].locations | [0]"
# -> Central US, East US 2, West US 2, West Europe, East Asia
```

Default is `westeurope`, the only European option. This is where the *resource*
lives; static content is served from Azure's global edge regardless, so a UK
audience is not penalised. If you pass any other region, `terraform validate`
rejects it before you can waste an apply on it.

---

## State backend

### The chicken and egg

Remote state needs a storage account. The storage account needs provisioning.
Terraform cannot provision the thing that holds its own state, so something
outside Terraform has to go first. Here that is `bootstrap/bootstrap.sh`.

### Is remote state even worth it here?

Honestly: for a solo operator applying from one laptop, **no**. One resource
group and one free Static Web App is a near-zero blast radius; state locking
protects against a concurrency problem you do not have, and if the state file
were lost you could re-import both resources in about five minutes.
Cargo-culting an enterprise state backend onto a one-person hobby project is
usually a waste of money and setup time.

**But** the moment you want `terraform apply` to run in GitHub Actions — which
you do, it is in the brief — local state is untenable. The runner is ephemeral.
Every run would start with empty state, try to create a resource group that
already exists, and fail. Committing state to Git is not an option either: the
state file contains the Static Web App deployment API key in plaintext.

### Recommendation

**Use remote state in Azure Storage.** Not because the project is big, but
because CI apply requires shared state and there is no cheaper coherent way to
get it.

Cost: a `Standard_LRS` StorageV2 account holding a ~30 KB blob with a handful
of transactions a week. Storage is roughly GBP 0.0004/month; transactions are
fractions of a penny. Realistically **under GBP 0.05/month and usually
rounding to zero on the bill** — but it is not *strictly* zero, so it is your
call.

The bootstrap script creates it with `--allow-shared-key-access false`, which
pairs with `use_azuread_auth = true` in `versions.tf`. No storage access key is
ever issued, so no key can leak into CI or onto your disk. Blob versioning is
enabled as a cheap undo.

### If you want strict GBP 0.00 instead

1. Run `./infra/bootstrap/bootstrap.sh --no-state`.
2. Comment out the `backend "azurerm"` block in `versions.tf`.
3. Delete the `apply` and `plan` steps from `.github/workflows/infra.yml`,
   leaving `fmt -check` and `validate` as PR checks only.
4. Run `terraform apply` from your laptop, and back up `terraform.tfstate`
   somewhere private that is not Git.

You lose CI apply. You keep every penny.

---

## First-time bootstrap, from nothing

### 0. Prerequisites

```bash
brew install terraform          # 1.16.x
brew install azure-cli          # already installed
```

### 1. Log in and pick a subscription

```bash
az login
az account list --output table
az account set --subscription "<name or id>"
az account show
```

You need **Owner** on the subscription for this bootstrap, because it creates
role assignments. Day-to-day operation only needs Contributor.

### 2. Register the resource provider

Static Web Apps lives under `Microsoft.Web`. A subscription that has never
hosted a web app will not have it registered, and the first apply fails with
`MissingSubscriptionRegistration`.

```bash
az provider register --namespace Microsoft.Web --wait
az provider show -n Microsoft.Web --query registrationState -o tsv   # Registered
```

The bootstrap script does this for you. It is called out separately because it
is the single most common first-apply failure.

> This is deliberately *not* done by Terraform.
> `resource_provider_registrations = "none"` is set explicitly in
> `providers.tf` — registration is a subscription-wide side effect that
> Terraform should not perform implicitly.

### 3. Run the bootstrap script

```bash
chmod +x infra/bootstrap/bootstrap.sh
./infra/bootstrap/bootstrap.sh
```

It creates:

- the Terraform state resource group, storage account and container
- an Entra ID **app registration** `gh-groundwork-terraform` and its service
  principal — **with no client secret**
- **federated credentials** for GitHub OIDC
- role assignments: `Contributor` on the subscription for the SP,
  `Storage Blob Data Contributor` on the state account for the SP and for you

and prints every value you need to paste into GitHub.

#### What the app registration / federated credential is, and why

A federated credential tells Entra ID: *"trust an OIDC token issued by
`token.actions.githubusercontent.com` whose `sub` claim exactly matches this
string."* GitHub mints that token per workflow run. No password is stored
anywhere, nothing expires, nothing to rotate.

**You need a separate federated credential per subject.** This trips up
everyone. GitHub sends a different `sub` for each trigger type:

| Trigger | Subject |
| --- | --- |
| Push to `main` | `repo:TypicalLawrence/stretch-app:ref:refs/heads/main` |
| Any pull request | `repo:TypicalLawrence/stretch-app:pull_request` |
| A named environment | `repo:TypicalLawrence/stretch-app:environment:production` |
| A tag | `repo:TypicalLawrence/stretch-app:ref:refs/tags/v1.0.0` |

One credential matching `...:ref:refs/heads/main` will **not** authenticate a
pull request run. You get `AADSTS70021: No matching federated identity record
found`, which does not tell you that the subject is the problem. If OIDC login
fails, compare the `sub` in the run log against your credential list:

```bash
az ad app federated-credential list --id <AZURE_CLIENT_ID> -o table
```

The script creates the first two. The environment one is commented out — add it
only if you later gate `apply` behind a GitHub Environment with a manual
approval.

Doing it by hand instead:

```bash
APP_ID=$(az ad app create --display-name gh-groundwork-terraform --query appId -o tsv)
az ad sp create --id "$APP_ID"
az ad app federated-credential create --id "$APP_ID" --parameters '{
  "name": "github-main",
  "issuer": "https://token.actions.githubusercontent.com",
  "subject": "repo:TypicalLawrence/stretch-app:ref:refs/heads/main",
  "audiences": ["api://AzureADTokenExchange"]
}'
```

### 4. Create the GitHub repository

The remote is not configured yet. Create it, then:

```bash
git remote add origin https://github.com/TypicalLawrence/stretch-app.git
```

If you use a different owner or name, re-run the bootstrap with
`GITHUB_OWNER=... GITHUB_REPO=... ./infra/bootstrap/bootstrap.sh` — the
federated credential subject must match the real repo path exactly — and set
`repository_url` in `terraform.tfvars`.

### 5. Create GitHub repository *variables*

**Settings → Secrets and variables → Actions → Variables** (the *Variables*
tab, not *Secrets*).

| Variable | Where it comes from |
| --- | --- |
| `AZURE_CLIENT_ID` | bootstrap output (app registration appId) |
| `AZURE_TENANT_ID` | bootstrap output / `az account show --query tenantId` |
| `AZURE_SUBSCRIPTION_ID` | bootstrap output / `az account show --query id` |
| `TFSTATE_RESOURCE_GROUP` | bootstrap output |
| `TFSTATE_STORAGE_ACCOUNT` | bootstrap output |
| `TFSTATE_CONTAINER` | `tfstate` |
| `SWA_NAME` | **after** step 6: `terraform output -raw static_web_app_name` |
| `SWA_RESOURCE_GROUP` | **after** step 6: `terraform output -raw resource_group_name` |
| `VITE_REQUIRE_LOGIN` | *optional* — set to `false` to ship the app publicly |
| `VITE_ADMIN_PASSWORD_HASH` | *optional* — sha256 of the gate password |

The two `VITE_*` entries are optional; leave them unset and the build uses the
defaults in `src/auth/gate.ts`. They are **variables, not secrets, on purpose**:
Vite inlines every `VITE_`-prefixed value into the public JavaScript bundle, so
the password hash is readable by anyone who opens devtools. The gate is a
doormat, not a lock. If you want real protection, use Static Web Apps' built-in
edge authentication — a role-gated route in `staticwebapp.config.json`, enforced
before any content is served, and free on the Free tier.

**These are variables, not secrets, deliberately.** A client ID, tenant ID and
subscription ID are identifiers, not credentials — on their own they grant
nothing. What grants access is the federated trust bound to your specific repo
and subject. Keeping them as variables makes them visible in logs, which makes
OIDC failures debuggable instead of a wall of `***`.

**In the recommended setup there are no repository secrets at all.**

### 6. First apply, from your laptop

Run the first apply locally so you can see exactly what is created before CI
ever touches it.

```bash
cd infra
cp backend.hcl.example backend.hcl        # paste the bootstrap values
terraform init -backend-config=backend.hcl
terraform plan          # expect: 2 to add (resource group, static web app)
terraform apply
```

Then:

```bash
terraform output -raw static_web_app_name       # -> SWA_NAME
terraform output -raw resource_group_name       # -> SWA_RESOURCE_GROUP
terraform output -raw default_url               # browsable, shows a placeholder
```

Go back to step 5 and add those last two variables.

### 7. First deploy

```bash
git add -A
git commit -m "feat: add Azure infrastructure and deployment workflows"
git push -u origin main
```

The **App** workflow runs: typecheck → test → build → deploy. A minute or two
later `default_url` serves the real app.

---

## The deployment token

The SWA deployment token is a Terraform *output*, but the app workflow needs it
as an *input*. Three ways to bridge that:

### Option A — copy it into a GitHub secret by hand

```bash
terraform output -raw static_web_app_api_key   # paste into AZURE_STATIC_WEB_APPS_API_TOKEN
```

Simple, and it is what `Azure/static-web-apps-deploy` was designed around.
But: a long-lived credential sits in GitHub indefinitely, it grants the ability
to publish arbitrary content to your site, nobody ever rotates it, and if you
reset the token in the portal the workflow silently breaks until you remember
to re-paste.

### Option B — let Terraform write the GitHub secret

Add the `integrations/github` provider and a `github_actions_secret` resource
fed from `azurerm_static_web_app.this.api_key`.

Fully automated, but: Terraform now needs a GitHub PAT with `repo` scope, which
is *itself* a long-lived secret you have to store somewhere, so you have traded
one long-lived credential for a more powerful one. It also drags a second
provider and a second failure mode into an infra stack that otherwise has two
resources.

### Option C — fetch it at run time (**recommended, and what is implemented**)

The workflow already authenticates to Azure with OIDC. So ask Azure for the
token at the moment of deploy:

```yaml
- uses: azure/login@v3
  with:
    client-id: ${{ vars.AZURE_CLIENT_ID }}
    tenant-id: ${{ vars.AZURE_TENANT_ID }}
    subscription-id: ${{ vars.AZURE_SUBSCRIPTION_ID }}

- id: swa_token
  run: |
    token="$(az staticwebapp secrets list \
      --name "${{ vars.SWA_NAME }}" \
      --resource-group "${{ vars.SWA_RESOURCE_GROUP }}" \
      --query properties.apiKey -o tsv)"
    echo "::add-mask::$token"
    echo "token=$token" >> "$GITHUB_OUTPUT"
```

**Why this one.** There is no long-lived deployment token anywhere: not in
GitHub, not on your laptop, not in a password manager. Resetting the token in
the portal is a no-op — the next run just fetches the new one. Access is
governed by Entra ID RBAC and the federated subject, so revoking the app
registration instantly kills deploys. And it needs no second provider, no PAT,
and no repository secrets at all.

**The trade-off, stated plainly.** The token still materialises in the runner's
memory and in a step output for the duration of the job, so a malicious step in
the same job could read it. `::add-mask::` keeps it out of logs but masking is
best-effort, not a security boundary. This is strictly better than Option A
(where the same exposure exists *plus* a permanent stored copy) but it is not
zero exposure. Microsoft have an open request
([Azure/static-web-apps#1359](https://github.com/Azure/static-web-apps/issues/1359))
to let the deploy action use RBAC directly and skip the token entirely; until
that ships, fetching at run time is the best available.

Also note: **fork PRs cannot do this**, because GitHub does not issue an
`id-token` to fork pull requests. Fork PRs cannot read secrets either, so
Options A and B fail the same way. Single-owner repo, so it does not bite here.

---

## Ongoing workflow

```text
branch  ->  PR  ->  checks  ->  merge to main  ->  deploy
```

**App changes** (`src/**`, `public/**`, `package.json`, `staticwebapp.config.json`)

1. PR → **App** workflow runs typecheck, test, build, and deploys a **preview
   environment**. The SWA bot comments the preview URL on the PR.
2. Merge → deploys to production.
3. Close/merge → `close_preview` tears the preview down. This matters: Free
   tier allows 3 concurrent previews and leaked ones block new PRs.

**Infra changes** (`infra/**`)

1. PR → **Infra** workflow runs `fmt -check`, `init`, `validate`, `plan`, and
   posts the plan as a single PR comment that updates in place on each push.
2. Read the plan. `~` on the Static Web App is normal after a deploy has
   happened — see the `lifecycle` note below.
3. Merge → `terraform apply` on `main`.

The two workflows are mutually exclusive by path filter, so an app commit never
runs Terraform and an infra commit never redeploys the app.

---

## Gotchas

**`skip_app_build` changes what `app_location` means.** With
`skip_app_build: true`, `app_location` is the path to the *already-built*
output and `output_location` is ignored. The previous workflow had
`app_location: '/'` + `output_location: 'dist'` + `skip_app_build: true`, which
uploads the whole repository root instead of `dist/` — and on Free tier's
250 MB per-environment cap, that fails. Now: `app_location: 'dist'`,
`output_location: ''`.

**Oryx will rebuild your app if you let it.** Oryx is SWA's build system. Left
alone it re-detects the project and rebuilds inside the deployment container
with its own Node version — not Node 24, and without having run your typecheck
or tests. `skip_app_build: true` and `skip_api_build: true` stop it. The
symptom when it goes wrong is a deployed build that differs from the one CI
approved.

**`staticwebapp.config.json` must be inside the uploaded folder.** It lives at
the repo root but only `dist/` is uploaded, so the workflow copies it in before
deploy. Without it: no `navigationFallback`, and every client-side route 404s on
a hard refresh — which for a SPA means the app works until someone bookmarks a
page.

**Terraform will show drift on `repository_url` / `repository_branch`.** When
the SWA action deploys with the API key, Azure writes those fields onto the
resource server-side. Terraform does not set them, so it would try to null them
out on every plan. `main.tf` has a `lifecycle { ignore_changes = [...] }` block
for exactly this; it is documented in the provider docs.

**Preview environments *do* work on Free tier** — 3 per app. The common claim
that they are Standard-only is out of date. They are enabled by
`preview_environments_enabled = true` (the provider default, set explicitly).

**Free tier has no SLA.** Fine for this. Do not put anything load-bearing on it.

**Bandwidth is per subscription, not per app.** 100 GB/month is shared across
every SWA in the subscription.

**The deployment API key is in plaintext in the state file.** `sensitive = true`
hides it from console output, not from state. Hence the private storage account
with shared-key access disabled, and `*.tfstate` in `.gitignore`.

**Commit `.terraform.lock.hcl`.** It is deliberately not gitignored, so CI
resolves the identical provider build you tested against.

---

## Custom domain

Off by default. Read the long comment at the top of `custom_domain.tf` — it
covers the CNAME-vs-TXT validation dance and why apex domains need
`dns-txt-token` plus an ALIAS/ANAME record.

Short version:

- **Subdomain** (`groundwork.example.com`): create the CNAME at your registrar
  pointing at `default_host_name`, wait for it to resolve, *then* set
  `enable_custom_domain = true` and apply. Terraform polls for validation and
  hangs for 30 minutes if the CNAME is not live yet.
- **Apex** (`example.com`): use `dns-txt-token`. Apply, read
  `custom_domain_validation_token`, create `TXT _dnsauth.example.com` with that
  value, and point the apex at the app with an ALIAS/ANAME record. Terraform
  does not wait; validation completes out of band and the token output goes
  empty once it succeeds.

Cost on the Azure side: **zero** — 2 custom domains and a free auto-renewing
managed TLS certificate are included in Free tier. You pay your registrar for
the domain (~GBP 8–15/year). This config does **not** create an
`azurerm_dns_zone`, because an Azure DNS zone bills about USD 0.50/month per
zone plus USD 0.40 per million queries. Keep DNS at your existing registrar.

---

## Teardown

```bash
cd infra
terraform destroy
```

**Deletes:** the Static Web App (and with it all deployed content, every preview
environment, the deployment token, the `*.azurestaticapps.net` hostname, and any
custom domain binding), and the resource group.

**Does not delete:**

- The **state storage account and its resource group** — created by bootstrap,
  outside Terraform's state. Remove manually:

  ```bash
  az group delete -n rg-groundwork-tfstate --yes
  ```

- The **app registration, service principal and federated credentials**:

  ```bash
  az ad app delete --id <AZURE_CLIENT_ID>
  ```

  (Deleting the app registration removes the SP and its federated credentials.
  Role assignments become orphaned and should be tidied with
  `az role assignment delete --assignee <AZURE_CLIENT_ID>`.)
- **GitHub variables and workflows** — repo-side, delete by hand.
- **Your DNS records** at the registrar. Delete the CNAME/TXT yourself or you
  leave a dangling record pointing at a hostname anyone can re-claim.
- **`Microsoft.Web` provider registration** — harmless, leave it.

The hostname is released on destroy and a fresh `apply` gets a **new** one, so
you will need to update any DNS records afterwards.

---

## File map

| File | Purpose |
| --- | --- |
| `versions.tf` | `required_version`, pinned azurerm, partial state backend |
| `providers.tf` | azurerm provider config |
| `variables.tf` | Inputs, with region and naming validation |
| `main.tf` | Resource group + Free tier Static Web App, limits documented |
| `custom_domain.tf` | Optional custom domain, off by default |
| `outputs.tf` | Hostname, URL, names, sensitive API key |
| `terraform.tfvars.example` | Copy to `terraform.tfvars` |
| `backend.hcl.example` | Copy to `backend.hcl` after bootstrap |
| `bootstrap/bootstrap.sh` | One-time out-of-band setup |
| `.terraform.lock.hcl` | Provider lock — **commit this** |
