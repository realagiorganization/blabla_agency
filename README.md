# blabla agency

## English

This repository is a bilingual LaTeX + Markdown publishing scaffold for **blabla agency**: an AI agency that turns Zoom talks, recorded video and audio conversations, chats, and dumped files into a continuously versioned website, an evolving specification, linked use cases, and a Beamer presentation.

The operating promise is straightforward: no matter how raw the source material is, the agency continuously distills it into a structured web presence with promotion-ready messaging and ongoing maintenance.

### Live artifact links

- Personal website: <https://adminrealagi.github.io/blabla_agency/>
- Personal latest presentation PDF: <https://adminrealagi.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf>
- Personal workflow runs and downloadable CI artifacts: <https://github.com/Adminrealagi/blabla_agency/actions/workflows/presentation.yml>
- Personal live verification monitor: <https://github.com/Adminrealagi/blabla_agency/actions/workflows/verification-monitor.yml>
- Organization website: <https://realagiorganization.github.io/blabla_agency/>
- Organization latest presentation PDF: <https://realagiorganization.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf>
- Organization workflow runs and downloadable CI artifacts: <https://github.com/realagiorganization/blabla_agency/actions/workflows/presentation.yml>
- Organization live verification monitor: <https://github.com/realagiorganization/blabla_agency/actions/workflows/verification-monitor.yml>
- Generic GitHub Pages pattern for any mirror: `https://<owner>.github.io/blabla_agency/`
- Generic PDF pattern for any mirror: `https://<owner>.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf`

These links become live after the first successful GitHub Actions build and GitHub Pages deployment.

### Repository layout

- `slides/` contains the Beamer presentation source.
- `docs/` contains the bilingual Markdown site content.
- `scripts/` contains the modular local automation used by both humans and CI.
- `.github/workflows/` contains CI/CD for PDF builds, site builds, artifact uploads, and GitHub Pages deployment.

### Local build

```bash
make venv
make pdf
make site
```

### Local verification and monitoring

```bash
make content-policy
make lint
make verify
make monitor
```

`make content-policy` checks bilingual section order and deployment-safe public links. `make lint` checks Markdown formatting, YAML structure, shell syntax, and the content policy. `make verify` rebuilds the PDF and site, verifies the generated outputs, and writes an artifact manifest. `make monitor` checks the latest workflow result plus the live site and PDF URLs.

### CI pipeline

- `presentation.yml` runs staged lint and build jobs, uses pip caching, uploads PDF/site/manifest artifacts, and deploys Pages on `master`.
- `verification-monitor.yml` checks that the live site and live PDF remain reachable after deployment.

## Русский

Этот репозиторий представляет собой двуязычный LaTeX + Markdown каркас публикации для **blabla agency**: AI-агентства, которое превращает разговоры в Zoom, записанные видео- и аудиобеседы, чаты и выгруженные файлы в непрерывно версионируемый сайт, развивающуюся спецификацию, связанные use case'ы и Beamer-презентацию.

Базовое обещание простое: каким бы сырым ни был исходный материал, агентство непрерывно превращает его в структурированное веб-представительство с готовым к продвижению сообщением и постоянной поддержкой.

### Ссылки на артефакты

- Персональный сайт: <https://adminrealagi.github.io/blabla_agency/>
- Персональный актуальный PDF презентации: <https://adminrealagi.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf>
- Персональные запуски workflow и скачиваемые CI-артефакты: <https://github.com/Adminrealagi/blabla_agency/actions/workflows/presentation.yml>
- Персональный workflow мониторинга живой публикации: <https://github.com/Adminrealagi/blabla_agency/actions/workflows/verification-monitor.yml>
- Сайт организации: <https://realagiorganization.github.io/blabla_agency/>
- Актуальный PDF презентации организации: <https://realagiorganization.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf>
- Запуски workflow организации и скачиваемые CI-артефакты: <https://github.com/realagiorganization/blabla_agency/actions/workflows/presentation.yml>
- Workflow организации для мониторинга живой публикации: <https://github.com/realagiorganization/blabla_agency/actions/workflows/verification-monitor.yml>
- Общий шаблон GitHub Pages для любого зеркала: `https://<owner>.github.io/blabla_agency/`
- Общий шаблон PDF для любого зеркала: `https://<owner>.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf`

Эти ссылки начнут работать после первой успешной сборки GitHub Actions и деплоя GitHub Pages.

### Структура репозитория

- `slides/` содержит исходник Beamer-презентации.
- `docs/` содержит двуязычный Markdown-сайт.
- `scripts/` содержит модульную локальную автоматизацию, используемую и людьми, и CI.
- `.github/workflows/` содержит CI/CD для сборки PDF, сборки сайта, загрузки артефактов и деплоя на GitHub Pages.

### Локальная сборка

```bash
make venv
make pdf
make site
```

### Локальная верификация и мониторинг

```bash
make content-policy
make lint
make verify
make monitor
```

`make content-policy` проверяет порядок двуязычных секций и безопасные для деплоя публичные ссылки. `make lint` проверяет форматирование Markdown, структуру YAML, синтаксис shell-скриптов и content policy. `make verify` пересобирает PDF и сайт, проверяет сгенерированные результаты и записывает манифест артефактов. `make monitor` проверяет последний результат workflow и живые URL сайта и PDF.

### CI-конвейер

- `presentation.yml` запускает поэтапные jobs для lint и build, использует pip cache, загружает артефакты PDF/сайта/манифеста и деплоит Pages на `master`.
- `verification-monitor.yml` проверяет, что опубликованные сайт и PDF остаются доступными после деплоя.
