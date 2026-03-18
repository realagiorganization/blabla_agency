#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$script_dir/common.sh"

root="$(repo_root)"
ensure_venv
cd "$root"

PATH="$root/.venv/bin:$PATH"

mdformat --check README.md AGENTS.md AGENTS.md.d/*.md docs/*.md
yamllint -c .yamllint.yml mkdocs.yml .github/workflows
python scripts/check_content_policy.py

for script in scripts/*.sh; do
  bash -n "$script"
done
