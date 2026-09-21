provider "azurerm" {
  features {}

  # Required for plan/apply in azurerm v4+ (not required for `terraform
  # validate`). Falls back to ARM_SUBSCRIPTION_ID, then to the az CLI's default
  # subscription, when var.subscription_id is null.
  subscription_id = var.subscription_id

  # azurerm 5.x already defaults this to "none"; stated explicitly so an
  # upgrade from a version with a different default cannot silently start
  # trying to register resource providers subscription-wide. Microsoft.Web is
  # registered once by hand during bootstrap - see infra/README.md.
  resource_provider_registrations = "none"
}
