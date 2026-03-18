SHELL := /bin/bash

.PHONY: deps venv lint pdf site artifacts verify ci monitor clean

deps: venv

venv:
	./scripts/setup_venv.sh

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
	rm -rf build site
