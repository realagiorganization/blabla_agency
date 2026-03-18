SHELL := /bin/bash

PRESENTATION_TEX := slides/blabla_agency_presentation.tex
BUILD_DIR := build
SITE_DIR := site
PRESENTATION_PDF := $(BUILD_DIR)/blabla_agency_presentation.pdf
TEX_FLAGS := -interaction=nonstopmode -halt-on-error -file-line-error -output-directory=$(BUILD_DIR)
VENV_DIR := .venv
VENV_BIN := $(VENV_DIR)/bin

.PHONY: deps venv pdf site verify monitor clean

deps:
	python -m pip install -r requirements-docs.txt

$(VENV_BIN)/mkdocs: requirements-docs.txt
	python -m venv $(VENV_DIR)
	$(VENV_BIN)/pip install -r requirements-docs.txt

venv: $(VENV_BIN)/mkdocs

pdf:
	mkdir -p $(BUILD_DIR)
	lualatex $(TEX_FLAGS) $(PRESENTATION_TEX)
	lualatex $(TEX_FLAGS) $(PRESENTATION_TEX)

site: pdf
	mkdocs build --strict --site-dir $(SITE_DIR)
	mkdir -p $(SITE_DIR)/artifacts
	cp $(PRESENTATION_PDF) $(SITE_DIR)/artifacts/blabla_agency_presentation.pdf

verify: venv
	PATH="$(PWD)/$(VENV_BIN):$$PATH" $(MAKE) clean site
	test -f $(PRESENTATION_PDF)
	test -f $(SITE_DIR)/index.html
	test -f $(SITE_DIR)/artifacts/blabla_agency_presentation.pdf

monitor:
	./scripts/monitor_verification.sh

clean:
	rm -rf $(BUILD_DIR) $(SITE_DIR)
