output "resource_group_name" {
  description = "Name of the resource group holding the Static Web App."
  value       = azurerm_resource_group.this.name
}

output "static_web_app_name" {
  description = "Name of the Static Web App. Needed by the app deploy workflow to fetch the deployment token at run time."
  value       = azurerm_static_web_app.this.name
}

output "static_web_app_id" {
  description = "Full ARM resource ID of the Static Web App."
  value       = azurerm_static_web_app.this.id
}

output "default_host_name" {
  description = "Azure-assigned hostname, e.g. 'polite-sand-0123abc.6.azurestaticapps.net'. Also the CNAME target for a custom subdomain."
  value       = azurerm_static_web_app.this.default_host_name
}

output "default_url" {
  description = "Browsable URL of the deployed app."
  value       = "https://${azurerm_static_web_app.this.default_host_name}"
}

# The deployment API key. Marked sensitive so Terraform redacts it from plan
# and apply output and from the PR plan comment.
#
# Read it deliberately with:  terraform output -raw static_web_app_api_key
#
# NOTE: sensitive() hides it from the CONSOLE, not from STATE. It is stored in
# plaintext in the state file. That is one of the reasons the state backend
# uses a private storage account with Entra-ID-only auth and no public access.
output "static_web_app_api_key" {
  description = "Deployment token for Azure/static-web-apps-deploy. Prefer fetching this at run time via `az staticwebapp secrets list` rather than copying it into a GitHub secret - see infra/README.md."
  value       = azurerm_static_web_app.this.api_key
  sensitive   = true
}

output "custom_domain_validation_token" {
  description = "TXT challenge value for dns-txt-token validation. Empty for cname-delegation, and cleared by Azure once the domain is validated."
  value       = try(azurerm_static_web_app_custom_domain.this[0].validation_token, null)
}
