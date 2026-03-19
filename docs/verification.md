# Verification

## English

### Checks

- Markdown, YAML, shell, and content policy checks
- React type safety
- React/Vitest tests
- Playwright browser smoke tests
- Beamer PDF build
- React production site build
- Storybook static build
- staged GitHub Pages output
- artifact manifest generation
- live website HTTP 200
- live Storybook HTTP 200
- live PDF HTTP 200

### Local commands

```bash
make lint
npm run test:run
make e2e
make verify
make monitor
```

`make e2e` runs Playwright against the staged site and Storybook and keeps screenshots in the test artifacts.

`make verify` is the full local proof. It rebuilds the PDF, runs unit and browser tests, stages the site and Storybook, checks outputs, and writes the artifact manifest.

### GitHub Actions

- `presentation.yml` builds PDF + React site + Storybook, runs Playwright, uploads artifacts, and deploys Pages
- `verification-monitor.yml` verifies that the published website, Storybook, and PDF remain reachable

## Русский

### Проверки

- проверки Markdown, YAML, shell и content policy
- type safety React
- тесты React/Vitest
- browser smoke-тесты Playwright
- сборка Beamer PDF
- production-сборка React-сайта
- статическая сборка Storybook
- staged-выход GitHub Pages
- генерация манифеста артефактов
- HTTP 200 для живого сайта
- HTTP 200 для живого Storybook
- HTTP 200 для живого PDF

### Локальные команды

```bash
make lint
npm run test:run
make e2e
make verify
make monitor
```

`make e2e` запускает Playwright по staged-сайту и Storybook и сохраняет скриншоты в тестовых артефактах.

`make verify` является полным локальным доказательством. Он пересобирает PDF, запускает unit- и browser-тесты, подготавливает сайт и Storybook, проверяет выход и пишет манифест артефактов.

### GitHub Actions

- `presentation.yml` собирает PDF + React-сайт + Storybook, запускает Playwright, загружает артефакты и деплоит Pages
- `verification-monitor.yml` проверяет, что опубликованные сайт, Storybook и PDF остаются доступными
