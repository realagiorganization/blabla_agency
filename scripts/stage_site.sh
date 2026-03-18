#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$script_dir/common.sh"

root="$(repo_root)"
ensure_venv
ensure_node_modules

cd "$root"

if [[ ! -f build/blabla_agency_presentation.pdf ]]; then
  echo "Expected build/blabla_agency_presentation.pdf before staging the site." >&2
  exit 1
fi

npm run build
npm run build-storybook

rm -rf site
mkdir -p site/artifacts site/storybook
cp -R dist/. site/
cp -R storybook-static/. site/storybook/
cp build/blabla_agency_presentation.pdf site/artifacts/blabla_agency_presentation.pdf
