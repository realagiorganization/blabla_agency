#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$script_dir/common.sh"

if [[ $# -ge 1 ]]; then
  REPO="$1"
else
  if ! REPO="$(repo_slug_from_remote origin)"; then
    REPO="Adminrealagi/blabla_agency"
  fi
fi

WORKFLOW_FILE="${2:-presentation.yml}"
SITE_URL="${3:-$(pages_base_url_from_repo "$REPO")}"
PDF_URL="${4:-${SITE_URL}artifacts/blabla_agency_presentation.pdf}"

require_command gh
require_command jq
require_command curl

latest_run_json="$(gh run list --repo "$REPO" --workflow "$WORKFLOW_FILE" --limit 1 --json databaseId,displayTitle,status,conclusion,url,createdAt)"

if [[ "$latest_run_json" == "[]" ]]; then
  echo "No workflow runs found for $REPO / $WORKFLOW_FILE" >&2
  exit 1
fi

site_status="$(curl -L -s -o /dev/null -w '%{http_code}' "$SITE_URL")"
pdf_status="$(curl -L -s -o /dev/null -w '%{http_code}' "$PDF_URL")"

echo "Latest workflow run:"
echo "$latest_run_json" | jq -r '.[0] | "  title: \(.displayTitle)\n  id: \(.databaseId)\n  status: \(.status)\n  conclusion: \(.conclusion // "pending")\n  created_at: \(.createdAt)\n  url: \(.url)"'
echo
echo "Live endpoint checks:"
echo "  site_status: $site_status $SITE_URL"
echo "  pdf_status:  $pdf_status $PDF_URL"

if [[ "$site_status" != "200" || "$pdf_status" != "200" ]]; then
  exit 1
fi
