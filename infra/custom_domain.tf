# -----------------------------------------------------------------------------
# OPTIONAL custom domain. Off by default (var.enable_custom_domain = false).
#
# Cost: the Azure side is GBP 0.00 - Free tier includes 2 custom domains and a
# free auto-renewing managed TLS certificate. You pay your registrar for the
# domain name itself. This config does NOT create an azurerm_dns_zone, because
# an Azure DNS zone bills ~USD 0.50/month; keep DNS at your existing registrar.
#
# THE DNS VALIDATION DANCE
# ------------------------
# Subdomain (e.g. groundwork.example.com) -> validation_type "cname-delegation"
#   1. terraform apply once with enable_custom_domain = false.
#   2. Read the `default_url` / `default_host_name` output.
#   3. At your registrar, create:
#        CNAME  groundwork  ->  <default_host_name>
#   4. Wait for the CNAME to resolve publicly (dig +short groundwork.example.com).
#   5. Set enable_custom_domain = true and apply. Terraform POLLS for CNAME
#      validation and will block until Azure confirms it, then Azure issues the
#      TLS cert (a few minutes more).
#   If you apply before the CNAME resolves, the apply hangs and eventually
#   times out (30 min default). That is the single most common failure here.
#
# Apex domain (e.g. example.com) -> validation_type "dns-txt-token"
#   You cannot CNAME an apex record (RFC 1034), so Azure uses a TXT challenge.
#   1. Set enable_custom_domain = true, validation_type = "dns-txt-token",
#      custom_domain_name = "example.com". Apply.
#   2. Terraform does NOT wait - the resource is marked created immediately.
#      Read the `custom_domain_validation_token` output.
#   3. At your registrar create:
#        TXT  _dnsauth  ->  <that token>
#      (i.e. _dnsauth.example.com)
#   4. Separately, point the apex itself at the app. Azure Static Web Apps
#      needs an ALIAS / ANAME / CNAME-flattening record at the apex pointing to
#      <default_host_name>. Cloudflare, Route 53 and most modern registrars
#      support this; a registrar that only offers plain A records cannot do
#      apex on SWA, because SWA does not publish a stable IP.
#   5. Validation completes out of band. `validation_token` is cleared by Azure
#      once validated, so the output goes empty afterwards - that is success,
#      not an error.
#
# Both: the app remains reachable on its *.azurestaticapps.net hostname too.
# -----------------------------------------------------------------------------
resource "azurerm_static_web_app_custom_domain" "this" {
  count = var.enable_custom_domain ? 1 : 0

  static_web_app_id = azurerm_static_web_app.this.id
  domain_name       = var.custom_domain_name
  validation_type   = var.custom_domain_validation_type

  lifecycle {
    precondition {
      condition     = var.custom_domain_name != null && var.custom_domain_name != ""
      error_message = "enable_custom_domain = true requires custom_domain_name to be set."
    }

    # An apex domain has exactly one dot (example.com); anything with two or
    # more labels before the TLD is a subdomain. Apex MUST use dns-txt-token.
    precondition {
      condition = (
        length(split(".", var.custom_domain_name)) > 2
        || var.custom_domain_validation_type == "dns-txt-token"
      )
      error_message = "Apex domains must use validation_type = \"dns-txt-token\"; cname-delegation only works for subdomains."
    }
  }
}
