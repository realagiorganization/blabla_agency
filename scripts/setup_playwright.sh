#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$script_dir/common.sh"

root="$(repo_root)"
ensure_node_modules
cd "$root"

if [[ -n "${CI:-}" ]]; then
  npx playwright install --with-deps chromium
else
  npx playwright install chromium
fi
