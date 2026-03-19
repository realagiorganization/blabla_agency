#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$script_dir/common.sh"

port="${1:-4173}"
root="$(repo_root)"

require_command python
"$script_dir/prepare_playwright_preview.sh"

cd "$root"
python -m http.server "$port" --bind 127.0.0.1 --directory preview
