#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$script_dir/common.sh"

root="$(repo_root)"
ensure_node_modules

cd "$root"

if [[ ! -f site/index.html ]]; then
  echo "Expected staged site output in site/ before running Playwright." >&2
  exit 1
fi

"$script_dir/setup_playwright.sh"
npm run test:e2e
