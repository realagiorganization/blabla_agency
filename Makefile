SHELL := /bin/bash

.PHONY: deps venv node content-policy lint pdf site artifacts verify ci monitor clean

deps: venv node

venv:
	./scripts/setup_venv.sh

node:
	./scripts/setup_node.sh

content-policy:
	./scripts/setup_venv.sh
	./.venv/bin/python scripts/check_content_policy.py

lint:
	./scripts/lint_repo.sh

pdf:
	./scripts/build_pdf.sh

site:
	./scripts/build_site.sh

artifacts:
	./scripts/write_artifact_manifest.sh

verify:
	./scripts/verify_build.sh

ci: lint verify

monitor:
	./scripts/monitor_verification.sh

clean:
	rm -rf artifacts build dist site storybook-static
