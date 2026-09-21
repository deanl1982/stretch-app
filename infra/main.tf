locals {
  # Azure CAF abbreviations: rg- for resource group, stapp- for static web app.
  base = "${var.name_prefix}-${var.environment}"

  resource_group_name = "rg-${local.base}"
  static_web_app_name = "stapp-${local.base}"

  tags = merge(
    {
      application = var.name_prefix
      environment = var.environment
      managed_by  = "terraform"
      repository  = var.repository_url
      cost_centre = "personal"
    },
    var.tags,
  )
}

resource "azurerm_resource_group" "this" {
  name     = local.resource_group_name
  location = var.location
  tags     = local.tags
}

# -----------------------------------------------------------------------------
# Azure Static Web App - FREE tier.
#
# Free tier limits, verified 2026-09-20 against
# https://learn.microsoft.com/azure/static-web-apps/quotas and
# https://azure.microsoft.com/en-gb/pricing/details/app-service/static/
#
#   Bandwidth ............ 100 GB/month, per SUBSCRIPTION (not per app).
#                          Overage on Free is UNAVAILABLE, not billed - the app
#                          is throttled/stops serving rather than charging you.
#                          This is precisely why Free cannot generate a bill.
#   Apps ................. 10 per subscription
#   Custom domains ....... 2 per app (Standard: 5-6)
#   Preview environments . 3 per app  <- PR previews DO work on Free
#   Storage .............. 500 MB total, 250 MB per environment
#   File count ........... 15,000
#   Request size ......... 30 MB
#   SLA .................. NONE. The Free tier carries no SLA whatsoever.
#                          Acceptable for a personal mobility app; not for
#                          anything anyone is relying on.
#   Managed Functions .... available but NOT used here (no backend in this app)
#   Private endpoints /
#   IP restrictions ...... unavailable on Free
#
# CONTENT IS NOT DEPLOYED BY TERRAFORM. This resource creates an empty app and
# a deployment API key. The built `dist/` is uploaded by the
# Azure/static-web-apps-deploy GitHub Action. See infra/README.md.
# -----------------------------------------------------------------------------
resource "azurerm_static_web_app" "this" {
  name                = local.static_web_app_name
  resource_group_name = azurerm_resource_group.this.name
  location            = azurerm_resource_group.this.location

  # Both must be "Free". They are separate arguments and both default to
  # "Free", but they are set explicitly so that a future provider default
  # change cannot silently promote this to Standard and start billing.
  sku_tier = "Free"
  sku_size = "Free"

  # Honour staticwebapp.config.json shipped in the deployment payload
  # (navigationFallback for the SPA, immutable caching for /assets/*).
  # If this were false, the platform would ignore the config file and the
  # SPA's client-side routes would 404 on hard refresh.
  configuration_file_changes_enabled = true

  preview_environments_enabled = var.preview_environments_enabled

  public_network_access_enabled = true

  tags = local.tags

  # We deliberately do NOT set repository_url / repository_branch /
  # repository_token here.
  #
  # Setting them would make Terraform own the GitHub integration, which means
  # handing Terraform a GitHub PAT with admin scope and letting Azure commit a
  # workflow file into the repo. We keep the workflow hand-written and under
  # review instead.
  #
  # However: when the SWA GitHub Action deploys using the api_key, Azure writes
  # repository_url and repository_branch onto the resource server-side. Without
  # this lifecycle block Terraform would see that as drift and try to null them
  # out on every subsequent plan. This is called out explicitly in the provider
  # docs for azurerm_static_web_app.
  lifecycle {
    ignore_changes = [
      repository_url,
      repository_branch,
    ]
  }
}
