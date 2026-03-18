#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Shared helper functions for local automation and CI.
source "$script_dir/common.sh"

ensure_venv
