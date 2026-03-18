# Verification

## English

### What is verified

- the Beamer presentation still compiles into `build/blabla_agency_presentation.pdf`
- the MkDocs site still builds into `site/`
- the deployed public site returns HTTP 200
- the deployed public PDF returns HTTP 200

### Local flow

Run:

```bash
make verify
make monitor
```

`make verify` creates or refreshes `.venv`, installs the documentation dependencies, rebuilds the PDF and site, and confirms that the expected artifacts exist.

`make monitor` uses GitHub CLI plus `curl` to report:

- the latest presentation workflow status
- the live website HTTP status
- the live PDF HTTP status

### GitHub Actions flow

Two workflows now cover the publishing surface:

- `presentation.yml` builds the PDF, builds the site, uploads artifacts, and deploys GitHub Pages
- `verification-monitor.yml` runs on a schedule and on demand to confirm that the deployed site and PDF remain reachable

## Русский

### Что проверяется

- Beamer-презентация по-прежнему компилируется в `build/blabla_agency_presentation.pdf`
- MkDocs-сайт по-прежнему собирается в `site/`
- опубликованный публичный сайт возвращает HTTP 200
- опубликованный публичный PDF возвращает HTTP 200

### Локальный процесс

Запуск:

```bash
make verify
make monitor
```

`make verify` создает или обновляет `.venv`, устанавливает зависимости документации, пересобирает PDF и сайт и подтверждает, что ожидаемые артефакты существуют.

`make monitor` использует GitHub CLI и `curl`, чтобы показать:

- статус последнего workflow презентации
- HTTP-статус живого сайта
- HTTP-статус живого PDF

### Поток GitHub Actions

Теперь поверхность публикации покрывают два workflow:

- `presentation.yml` собирает PDF, собирает сайт, загружает артефакты и деплоит GitHub Pages
- `verification-monitor.yml` запускается по расписанию и вручную, чтобы подтверждать доступность опубликованных сайта и PDF
