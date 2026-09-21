variable "subscription_id" {
  description = <<-DESC
    Azure subscription ID to deploy into. Leave null to inherit from the
    ARM_SUBSCRIPTION_ID environment variable or the az CLI's current
    subscription. Set explicitly if you have more than one subscription.
  DESC
  type        = string
  default     = null
}

variable "name_prefix" {
  description = "Short lowercase prefix for all resource names."
  type        = string
  default     = "groundwork"

  validation {
    condition     = can(regex("^[a-z][a-z0-9-]{1,20}$", var.name_prefix))
    error_message = "name_prefix must be 2-21 chars, lowercase alphanumeric or hyphen, starting with a letter."
  }
}

variable "environment" {
  description = "Environment name, used in resource names and tags."
  type        = string
  default     = "prod"

  validation {
    condition     = can(regex("^[a-z0-9]{2,10}$", var.environment))
    error_message = "environment must be 2-10 lowercase alphanumeric characters."
  }
}

variable "location" {
  description = <<-DESC
    Azure region for the resource group and the Static Web App.

    Static Web Apps is a regional control plane in only FIVE regions. Verified
    2026-09-20 with:
      az provider show -n Microsoft.Web \
        --query "resourceTypes[?resourceType=='staticSites'].locations | [0]"
    which returned: Central US, East US 2, West US 2, West Europe, East Asia.

    This region is where the app RESOURCE lives, not where content is served
    from - static content is served from Azure's global edge regardless, so a
    UK audience is not penalised by choosing westeurope. westeurope is the only
    European option and is the default here.
  DESC
  type        = string
  default     = "westeurope"

  validation {
    condition = contains([
      "centralus",
      "eastus2",
      "westus2",
      "westeurope",
      "eastasia",
    ], var.location)
    error_message = "Static Web Apps is only available in centralus, eastus2, westus2, westeurope or eastasia."
  }
}

variable "repository_url" {
  description = <<-DESC
    GitHub repository URL for this app. Recorded as a tag only - Terraform does
    NOT wire the repo to the Static Web App (see main.tf for why). Configurable
    so the repo can be renamed or moved without editing resource code.
  DESC
  type        = string
  default     = "https://github.com/TypicalLawrence/stretch-app"
}

variable "tags" {
  description = "Extra tags merged over the computed defaults."
  type        = map(string)
  default     = {}
}

variable "preview_environments_enabled" {
  description = <<-DESC
    Whether pull-request preview (staging) environments are enabled.

    Free tier DOES support these: 3 preview environments per app (verified
    2026-09-20 at https://learn.microsoft.com/azure/static-web-apps/quotas).
    They cost nothing, so this defaults to true. The app workflow relies on it.
  DESC
  type        = bool
  default     = true
}

# -----------------------------------------------------------------------------
# Custom domain - OPTIONAL, DEFAULTED OFF.
#
# The custom domain resource itself is free on the Free tier (2 custom domains
# per app, free managed TLS certificate). What is NOT free is the domain
# registration itself (typically GBP 8-15/year from a registrar) and, if you
# choose to host DNS in Azure, an Azure DNS zone at ~USD 0.50/month per zone
# plus ~USD 0.40 per million queries. This config does NOT create an Azure DNS
# zone - point your existing registrar's DNS at the app instead, which keeps
# the Azure side at GBP 0.00.
# -----------------------------------------------------------------------------
variable "enable_custom_domain" {
  description = "Create an azurerm_static_web_app_custom_domain. Requires custom_domain_name."
  type        = bool
  default     = false
}

variable "custom_domain_name" {
  description = "Fully-qualified custom domain, e.g. 'groundwork.example.com' or apex 'example.com'."
  type        = string
  default     = null
}

variable "custom_domain_validation_type" {
  description = <<-DESC
    One of "cname-delegation" or "dns-txt-token".

    Use "cname-delegation" for a subdomain (www, app, groundwork...): create a
    CNAME at your registrar pointing the subdomain at the app's
    default_host_name BEFORE applying. Terraform polls CNAME validation.

    Use "dns-txt-token" for an APEX domain (example.com), because you cannot
    CNAME an apex. Apply first, read the `custom_domain_validation_token`
    output, create a TXT record at `_dnsauth.<domain>` with that value, then
    point the apex at the app with an ALIAS/ANAME A-record at your registrar.
    Terraform does NOT wait for TXT validation - it marks the resource created
    immediately and validation completes out of band.
  DESC
  type        = string
  default     = "cname-delegation"

  validation {
    condition     = contains(["cname-delegation", "dns-txt-token"], var.custom_domain_validation_type)
    error_message = "custom_domain_validation_type must be cname-delegation or dns-txt-token."
  }
}
