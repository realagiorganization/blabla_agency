# Verification

## English

### What is verified now

- Markdown, YAML, shell, and content policy checks
- React type safety
- React/Vitest tests
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
make verify
make monitor
```

`make verify` is the full local proof: it rebuilds the PDF, runs tests, stages the React site and Storybook, checks the generated output, and writes the artifact manifest.

### GitHub Actions

- `presentation.yml` builds PDF + React site + Storybook, uploads artifacts, and deploys Pages
- `verification-monitor.yml` verifies that the published website, Storybook, and PDF remain reachable

## Русский

### Что теперь проверяется

- проверки Markdown, YAML, shell и content policy
- type safety React
- тесты React/Vitest
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
make verify
make monitor
```

`make verify` является полным локальным доказательством: он пересобирает PDF, запускает тесты, подготавливает React-сайт и Storybook, проверяет сгенерированный выход и пишет манифест артефактов.

### GitHub Actions

- `presentation.yml` собирает PDF + React-сайт + Storybook, загружает артефакты и деплоит Pages
- `verification-monitor.yml` проверяет, что опубликованные сайт, Storybook и PDF остаются доступными
