#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ge 1 ]]; then
  REPO="$1"
else
  remote_url="$(git remote get-url origin 2>/dev/null || true)"
  if [[ "$remote_url" =~ github\.com[:/]([^/]+)/([^/.]+)(\.git)?$ ]]; then
    REPO="${BASH_REMATCH[1]}/${BASH_REMATCH[2]}"
  else
    REPO="Adminrealagi/blabla_agency"
  fi
fi

WORKFLOW_FILE="${2:-presentation.yml}"
OWNER="${REPO%/*}"
REPO_NAME="${REPO#*/}"
OWNER_LOWER="$(printf '%s' "$OWNER" | tr '[:upper:]' '[:lower:]')"
SITE_URL="${3:-https://${OWNER_LOWER}.github.io/${REPO_NAME}/}"
PDF_URL="${4:-${SITE_URL}artifacts/blabla_agency_presentation.pdf}"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is required." >&2
  exit 1
fi

if ! command -v jq >/dev/null 2>&1; then
  echo "jq is required." >&2
  exit 1
fi

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
