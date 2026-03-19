#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$script_dir/common.sh"

root="$(repo_root)"
cd "$root"

test -f build/blabla_agency_presentation.pdf
test -f site/index.html
test -f site/storybook/index.html
test -f site/artifacts/blabla_agency_presentation.pdf
test -f playwright-report/index.html

mkdir -p artifacts
manifest_path="artifacts/blabla-agency-artifact-manifest.md"
pdf_sha="$(sha256sum build/blabla_agency_presentation.pdf | awk '{print $1}')"
site_sha="$(sha256sum site/index.html | awk '{print $1}')"
storybook_sha="$(sha256sum site/storybook/index.html | awk '{print $1}')"
site_pdf_sha="$(sha256sum site/artifacts/blabla_agency_presentation.pdf | awk '{print $1}')"
playwright_report_sha="$(sha256sum playwright-report/index.html | awk '{print $1}')"
pdf_size="$(wc -c < build/blabla_agency_presentation.pdf | tr -d ' ')"

cat > "$manifest_path" <<EOF
# Artifact Manifest

- PDF path: \`build/blabla_agency_presentation.pdf\`
- PDF size bytes: \`$pdf_size\`
- PDF sha256: \`$pdf_sha\`
- Site index sha256: \`$site_sha\`
- Storybook index sha256: \`$storybook_sha\`
- Published PDF sha256: \`$site_pdf_sha\`
- Playwright report sha256: \`$playwright_report_sha\`
EOF

cat "$manifest_path"
