#!/usr/bin/env bash

repo_root() {
  local script_dir
  script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
  cd "$script_dir/.." && pwd
}

repo_slug_from_remote() {
  local remote_url
  remote_url="$(git -C "$(repo_root)" remote get-url "${1:-origin}" 2>/dev/null || true)"
  if [[ "$remote_url" =~ github\.com[:/]([^/]+)/([^/.]+)(\.git)?$ ]]; then
    printf '%s/%s\n' "${BASH_REMATCH[1]}" "${BASH_REMATCH[2]}"
  else
    return 1
  fi
}

pages_base_url_from_repo() {
  local repo owner repo_name owner_lower
  repo="${1:?repository slug required}"
  owner="${repo%/*}"
  repo_name="${repo#*/}"
  owner_lower="$(printf '%s' "$owner" | tr '[:upper:]' '[:lower:]')"
  printf 'https://%s.github.io/%s/\n' "$owner_lower" "$repo_name"
}

require_command() {
  local cmd
  cmd="${1:?command required}"
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "$cmd is required." >&2
    exit 1
  fi
}

ensure_venv() {
  local root venv_dir venv_bin stamp
  root="$(repo_root)"
  venv_dir="$root/.venv"
  venv_bin="$venv_dir/bin"
  stamp="$venv_dir/.deps_stamp"

  require_command python

  if [[ ! -x "$venv_bin/python" ]]; then
    python -m venv "$venv_dir"
  fi

  if [[ ! -f "$stamp" || "$root/requirements-docs.txt" -nt "$stamp" || "$root/requirements-dev.txt" -nt "$stamp" ]]; then
    "$venv_bin/pip" install --upgrade pip
    "$venv_bin/pip" install -r "$root/requirements-docs.txt" -r "$root/requirements-dev.txt"
    touch "$stamp"
  fi
}

ensure_node_modules() {
  local root stamp
  root="$(repo_root)"
  stamp="$root/.node_modules_stamp"

  require_command npm

  if [[ ! -f "$root/package.json" ]]; then
    echo "package.json is required for the React site toolchain." >&2
    exit 1
  fi

  cd "$root"

  if [[ ! -d "$root/node_modules" || ! -f "$stamp" || "$root/package.json" -nt "$stamp" || "$root/package-lock.json" -nt "$stamp" ]]; then
    if [[ -n "${CI:-}" && -f "$root/package-lock.json" ]]; then
      npm ci
    else
      npm install
    fi
    touch "$stamp"
  fi
}
