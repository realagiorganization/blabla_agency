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

run_title="$(echo "$latest_run_json" | jq -r '.[0].displayTitle')"
run_id="$(echo "$latest_run_json" | jq -r '.[0].databaseId')"
run_status="$(echo "$latest_run_json" | jq -r '.[0].status')"
run_conclusion="$(echo "$latest_run_json" | jq -r '.[0].conclusion // "pending"')"
run_created_at="$(echo "$latest_run_json" | jq -r '.[0].createdAt')"
run_url="$(echo "$latest_run_json" | jq -r '.[0].url')"

site_status="$(curl -L -s -o /dev/null -w '%{http_code}' "$SITE_URL")"
pdf_status="$(curl -L -s -o /dev/null -w '%{http_code}' "$PDF_URL")"

summary="$(
  cat <<EOF
# Live verification summary

- Repository: \`$REPO\`
- Workflow file: \`$WORKFLOW_FILE\`
- Latest run title: \`$run_title\`
- Latest run id: \`$run_id\`
- Latest run status: \`$run_status\`
- Latest run conclusion: \`$run_conclusion\`
- Latest run created at: \`$run_created_at\`
- Latest run URL: $run_url
- Site URL: $SITE_URL
- Site status: \`$site_status\`
- PDF URL: $PDF_URL
- PDF status: \`$pdf_status\`
EOF
)"

echo "$summary"

if [[ -n "${MONITOR_OUTPUT_DIR:-}" ]]; then
  mkdir -p "$MONITOR_OUTPUT_DIR"
  printf '%s\n' "$summary" > "$MONITOR_OUTPUT_DIR/summary.md"
  printf '%s\n' "$latest_run_json" > "$MONITOR_OUTPUT_DIR/latest-run.json"
fi

if [[ "$run_status" != "completed" || "$run_conclusion" != "success" ]]; then
  exit 1
fi

if [[ "$site_status" != "200" || "$pdf_status" != "200" ]]; then
  exit 1
fi
