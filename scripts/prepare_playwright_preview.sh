#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$script_dir/common.sh"

root="$(repo_root)"
cd "$root"

if [[ ! -f site/index.html ]]; then
  echo "Expected staged site output in site/ before preparing Playwright preview." >&2
  exit 1
fi

rm -rf preview
mkdir -p preview/blabla_agency
cp -R site/. preview/blabla_agency/
