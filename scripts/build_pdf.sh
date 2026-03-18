#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$script_dir/common.sh"

root="$(repo_root)"

require_command lualatex

cd "$root"
mkdir -p build
lualatex -interaction=nonstopmode -halt-on-error -file-line-error -output-directory=build slides/blabla_agency_presentation.tex
lualatex -interaction=nonstopmode -halt-on-error -file-line-error -output-directory=build slides/blabla_agency_presentation.tex
