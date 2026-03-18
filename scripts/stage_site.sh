#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$script_dir/common.sh"

root="$(repo_root)"
ensure_venv

cd "$root"

if [[ ! -f build/blabla_agency_presentation.pdf ]]; then
  echo "Expected build/blabla_agency_presentation.pdf before staging the site." >&2
  exit 1
fi

PATH="$root/.venv/bin:$PATH" mkdocs build --strict --site-dir site
mkdir -p site/artifacts
cp build/blabla_agency_presentation.pdf site/artifacts/blabla_agency_presentation.pdf
