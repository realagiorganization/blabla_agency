#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$script_dir/common.sh"

root="$(repo_root)"
cd "$root"

test -s build/blabla_agency_presentation.pdf
test -s site/index.html
test -s site/storybook/index.html
test -s site/artifacts/blabla_agency_presentation.pdf

cmp -s build/blabla_agency_presentation.pdf site/artifacts/blabla_agency_presentation.pdf
grep -q "blabla agency" site/index.html
grep -q "/blabla_agency/assets/" site/index.html
grep -q "storybook - Storybook" site/storybook/index.html
