# Verification

## English

### What is verified

- Markdown formatting, YAML syntax, and shell syntax still pass linting
- the Beamer presentation still compiles into `build/blabla_agency_presentation.pdf`
- the MkDocs site still builds into `site/`
- a build manifest is emitted for the generated artifacts
- the deployed public site returns HTTP 200
- the deployed public PDF returns HTTP 200

### Local flow

Run:

```bash
make lint
make verify
make monitor
```

`make lint` checks Markdown, YAML, and shell sources.

`make verify` creates or refreshes `.venv`, installs the documentation and lint dependencies, rebuilds the PDF and site, confirms that the expected artifacts exist, and writes a build manifest.

`make monitor` uses GitHub CLI plus `curl` to report:

- the latest presentation workflow status
- the live website HTTP status
- the live PDF HTTP status

### GitHub Actions flow

Two workflows now cover the publishing surface:

- `presentation.yml` lints the repository, builds the PDF, builds the site, uploads artifacts, and deploys GitHub Pages
- `verification-monitor.yml` runs on a schedule and on demand to confirm that the deployed site and PDF remain reachable

## Русский

### Что проверяется

- lint для Markdown, YAML и shell по-прежнему проходит успешно
- Beamer-презентация по-прежнему компилируется в `build/blabla_agency_presentation.pdf`
- MkDocs-сайт по-прежнему собирается в `site/`
- для сгенерированных артефактов создается build manifest
- опубликованный публичный сайт возвращает HTTP 200
- опубликованный публичный PDF возвращает HTTP 200

### Локальный процесс

Запуск:

```bash
make lint
make verify
make monitor
```

`make lint` проверяет Markdown, YAML и shell-источники.

`make verify` создает или обновляет `.venv`, устанавливает зависимости документации и lint, пересобирает PDF и сайт, подтверждает, что ожидаемые артефакты существуют, и записывает build manifest.

`make monitor` использует GitHub CLI и `curl`, чтобы показать:

- статус последнего workflow презентации
- HTTP-статус живого сайта
- HTTP-статус живого PDF

### Поток GitHub Actions

Теперь поверхность публикации покрывают два workflow:

- `presentation.yml` выполняет lint репозитория, собирает PDF, собирает сайт, загружает артефакты и деплоит GitHub Pages
- `verification-monitor.yml` запускается по расписанию и вручную, чтобы подтверждать доступность опубликованных сайта и PDF
