# Agent Instructions

- Always keep repository-facing content bilingual: English first, Russian second, with matching meaning and section order.
- Follow the bilingual writing convention in `AGENTS.md.d/bilingual-content.md`.
- Keep the README, React Pages site, Markdown docs, Storybook, and Beamer presentation aligned when claims, scope, or deliverables change.
- Treat Zoom calls, recorded audio/video conversations, chat exports, and dumped files as raw source material for the evolving specification and website narrative.
- Keep the repository allowlisted to agent-managed files only; expand `.gitignore` intentionally when new tracked paths are added.
- Track `.codex/skills`, `.codex/logs`, and crash logs in git; keep other `.codex/*` files ignored.
- Never track AppImages, ISO files, VM disk images, or other large installer artifacts.
- Prefer repository-provided `Makefile` targets, npm scripts, and GitHub Actions workflows over ad-hoc commands once they exist.
- Preserve stable GitHub Pages and workflow links in `README.md`; update them if the owner, repository name, or deployment branch changes.
- Code, filenames, and build tooling should remain English unless there is a strong technical reason otherwise; the bilingual rule applies to human-facing content.
- Commit and push after each completed turn; commit messages must describe the work and quote the verbatim user prompt.
