# blabla agency

[![Build and deploy presentation](https://github.com/Adminrealagi/blabla_agency/actions/workflows/presentation.yml/badge.svg)](https://github.com/Adminrealagi/blabla_agency/actions/workflows/presentation.yml)

## English

This repository is a bilingual LaTeX + Markdown publishing scaffold for **blabla agency**: an AI agency that turns Zoom talks, recorded video and audio conversations, chats, and dumped files into a continuously versioned website, an evolving specification, linked use cases, and a Beamer presentation.

The operating promise is straightforward: no matter how raw the source material is, the agency continuously distills it into a structured web presence with promotion-ready messaging and ongoing maintenance.

### Live artifact links

- Website: <https://Adminrealagi.github.io/blabla_agency/>
- Latest presentation PDF: <https://Adminrealagi.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf>
- Workflow runs and downloadable CI artifacts: <https://github.com/Adminrealagi/blabla_agency/actions/workflows/presentation.yml>

These links become live after the first successful GitHub Actions build and GitHub Pages deployment.

### Repository layout

- `slides/` contains the Beamer presentation source.
- `docs/` contains the bilingual Markdown site content.
- `.github/workflows/` contains CI/CD for PDF builds, site builds, artifact uploads, and GitHub Pages deployment.

### Local build

```bash
python -m pip install -r requirements-docs.txt
make pdf
make site
```

## Русский

Этот репозиторий представляет собой двуязычный LaTeX + Markdown каркас публикации для **blabla agency**: AI-агентства, которое превращает разговоры в Zoom, записанные видео- и аудиобеседы, чаты и выгруженные файлы в непрерывно версионируемый сайт, развивающуюся спецификацию, связанные use case'ы и Beamer-презентацию.

Базовое обещание простое: каким бы сырым ни был исходный материал, агентство непрерывно превращает его в структурированное веб-представительство с готовым к продвижению сообщением и постоянной поддержкой.

### Ссылки на артефакты

- Сайт: <https://Adminrealagi.github.io/blabla_agency/>
- Актуальный PDF презентации: <https://Adminrealagi.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf>
- Запуски workflow и скачиваемые CI-артефакты: <https://github.com/Adminrealagi/blabla_agency/actions/workflows/presentation.yml>

Эти ссылки начнут работать после первой успешной сборки GitHub Actions и деплоя GitHub Pages.

### Структура репозитория

- `slides/` содержит исходник Beamer-презентации.
- `docs/` содержит двуязычный Markdown-сайт.
- `.github/workflows/` содержит CI/CD для сборки PDF, сборки сайта, загрузки артефактов и деплоя на GitHub Pages.

### Локальная сборка

```bash
python -m pip install -r requirements-docs.txt
make pdf
make site
```
