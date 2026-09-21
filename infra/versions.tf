terraform {
  # Pin the Terraform CLI to the 1.x line. 1.16.3 is current as of 2026-09.
  required_version = "~> 1.16"

  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      # azurerm 5.x. Pinned to the 5.6+ patch line: 5.6.0 is current as of 2026-09.
      # Do NOT float to 6.x unattended - azurerm majors carry breaking changes.
      version = "~> 5.6"
    }
  }

  # ---------------------------------------------------------------------------
  # State backend: PARTIAL configuration.
  #
  # The values (resource_group_name / storage_account_name / container_name /
  # key) are deliberately not hard-coded here. They are supplied at init time:
  #
  #   locally:  terraform init -backend-config=backend.hcl
  #   in CI:    terraform init -backend-config="resource_group_name=..." ...
  #
  # See infra/README.md "State backend" for the chicken-and-egg discussion and
  # infra/bootstrap/bootstrap.sh to create the storage account.
  #
  # To run with LOCAL state instead (strict GBP 0.00), comment out this whole
  # backend block and run `terraform init` with no -backend-config.
  # ---------------------------------------------------------------------------
  backend "azurerm" {
    # use_azuread_auth = true means the backend authenticates with the caller's
    # Entra ID identity (your az login, or the workflow's OIDC service
    # principal) rather than a storage account access key. No key is ever
    # written to disk, to CI, or into a GitHub secret.
    use_azuread_auth = true
  }
}
