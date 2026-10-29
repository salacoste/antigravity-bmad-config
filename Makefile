PRESET ?= english
BMAD_VERSION := $(shell tr -d '[:space:]' < .bmad-version)

.PHONY: help setup update verify-pin smoke-test

help: ## Show available targets
	@grep -E '^[a-zA-Z_-]+:.*## ' $(MAKEFILE_LIST) | awk 'BEGIN{FS=":.*## "}{printf "  \033[1m%-14s\033[0m %s\n", $$1, $$2}'

setup: ## Install pinned BMAD + apply preset (PRESET=english|russian)
	./setup.sh $(PRESET)

update: ## Update in place — same as setup; the installer detects an existing install
	./setup.sh $(PRESET)

verify-pin: ## Check the pinned bmad-method version still exists on npm
	@echo "pinned: $(BMAD_VERSION)  latest: $$(npm view bmad-method version)"
	@test "$$(npm view bmad-method@$(BMAD_VERSION) version)" = "$(BMAD_VERSION)"

smoke-test: ## Full setup in a scratch dir; asserts the layout a fresh user gets
	./scripts/smoke-test.sh
