#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

"$script_dir/lint_repo.sh"
"$script_dir/build_pdf.sh"
"$script_dir/stage_site.sh"
"$script_dir/verify_outputs.sh"
"$script_dir/write_artifact_manifest.sh"
