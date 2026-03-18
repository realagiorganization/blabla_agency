#!/usr/bin/env python3
from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
README = ROOT / "README.md"
DOCS_DIR = ROOT / "docs"
SLIDES = ROOT / "slides" / "blabla_agency_presentation.tex"


def github_repo_slugs() -> list[str]:
    result = subprocess.run(
        ["git", "-C", str(ROOT), "remote", "-v"],
        check=True,
        capture_output=True,
        text=True,
    )
    seen: set[str] = set()
    slugs: list[str] = []
    pattern = re.compile(r"github\.com[:/]([^/]+)/([^/.]+?)(?:\.git)?$")

    for line in result.stdout.splitlines():
        parts = line.split()
        if len(parts) < 2:
            continue
        match = pattern.search(parts[1])
        if not match:
            continue
        slug = f"{match.group(1)}/{match.group(2)}"
        if slug not in seen:
            seen.add(slug)
            slugs.append(slug)

    return slugs


def require_bilingual_markdown(path: Path, errors: list[str]) -> None:
    text = path.read_text(encoding="utf-8")
    english = re.search(r"^## English\s*$", text, re.MULTILINE)
    russian = re.search(r"^## Русский\s*$", text, re.MULTILINE)

    if english is None or russian is None:
        errors.append(f"{path.relative_to(ROOT)} must contain both '## English' and '## Русский'.")
        return

    if english.start() > russian.start():
        errors.append(f"{path.relative_to(ROOT)} must place English before Russian.")


def require_readme_links(path: Path, slugs: list[str], errors: list[str]) -> None:
    text = path.read_text(encoding="utf-8")

    for slug in slugs:
        owner, repo = slug.split("/", 1)
        owner_lower = owner.lower()
        expected_links = [
            f"https://{owner_lower}.github.io/{repo}/",
            f"https://{owner_lower}.github.io/{repo}/artifacts/blabla_agency_presentation.pdf",
            f"https://github.com/{owner}/{repo}/actions/workflows/presentation.yml",
            f"https://github.com/{owner}/{repo}/actions/workflows/verification-monitor.yml",
        ]
        for link in expected_links:
            if link not in text:
                errors.append(f"README.md is missing repository link: {link}")


def forbid_repo_specific_pages_links(path: Path, slugs: list[str], errors: list[str]) -> None:
    text = path.read_text(encoding="utf-8")

    for slug in slugs:
        owner, repo = slug.split("/", 1)
        pages_url = f"https://{owner.lower()}.github.io/{repo}/"
        if pages_url in text:
            errors.append(
                f"{path.relative_to(ROOT)} should avoid hardcoded Pages URLs like {pages_url}; "
                "use relative paths or a repository-agnostic pattern."
            )


def require_bilingual_slides(path: Path, errors: list[str]) -> None:
    text = path.read_text(encoding="utf-8")
    required_fragments = [
        r"\setotherlanguage{russian}",
        r"\textbf{English}",
        r"\textbf{Русский}",
    ]

    for fragment in required_fragments:
        if fragment not in text:
            errors.append(f"{path.relative_to(ROOT)} is missing required bilingual slide marker: {fragment}")


def main() -> int:
    errors: list[str] = []
    slugs = github_repo_slugs()
    markdown_targets = [README, *sorted(DOCS_DIR.glob("*.md"))]

    for path in markdown_targets:
        require_bilingual_markdown(path, errors)

    require_readme_links(README, slugs, errors)

    for path in [*sorted(DOCS_DIR.glob("*.md")), SLIDES]:
        forbid_repo_specific_pages_links(path, slugs, errors)

    require_bilingual_slides(SLIDES, errors)

    if errors:
        print("Content policy checks failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    print("Content policy checks passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
