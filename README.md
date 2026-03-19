# blabla agency

## English

This repo is the public delivery surface for **blabla agency**.

The agency takes a draft spec, expands it through recorded discussion, feeds that record into an AI context ledger, ships a demo, and repeats from feedback.

### Loop

1. Client sends a draft spec.
1. Calls, chat, comments, and demo review sharpen it.
1. Recordings, notes, and demo state become AI context.
1. The pipeline ships a demo or staging pass.
1. Feedback starts the next round.

### Canonical deployment

- Website: <https://realagiorganization.github.io/blabla_agency/>
- Storybook: <https://realagiorganization.github.io/blabla_agency/storybook/>
- PDF: <https://realagiorganization.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf>
- Build workflow: <https://github.com/realagiorganization/blabla_agency/actions/workflows/presentation.yml>
- Monitor workflow: <https://github.com/realagiorganization/blabla_agency/actions/workflows/verification-monitor.yml>
- Repository: <https://github.com/realagiorganization/blabla_agency>

### Personal mirror

- Website: <https://adminrealagi.github.io/blabla_agency/>
- Storybook: <https://adminrealagi.github.io/blabla_agency/storybook/>
- PDF: <https://adminrealagi.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf>
- Build workflow: <https://github.com/Adminrealagi/blabla_agency/actions/workflows/presentation.yml>
- Monitor workflow: <https://github.com/Adminrealagi/blabla_agency/actions/workflows/verification-monitor.yml>

### Repo map

- `src/`: React site, components, tests, and content
- `docs/`: short bilingual docs
- `public/`: published static assets
- `.storybook/`: component review surface
- `slides/`: Beamer source
- `scripts/`: lint, build, stage, and monitor automation

### Key docs

- Overview: `docs/index.md`
- Delivery model: `docs/delivery-model.md`
- Specification: `docs/specification.md`
- Use cases: `docs/use-cases.md`
- Samples: `docs/samples.md`
- Verification: `docs/verification.md`
- Endeavor brief: `docs/endeavor.md`
- Screenplay/manual: `public/agency_advertisement_scenario.fountain.md`

### Local flow

```bash
make lint
npm run test:run
make e2e
make verify
make monitor
```

- `make lint`: lint plus typecheck
- `npm run test:run`: Vitest suite
- `make e2e`: Playwright smoke checks for the staged site and Storybook
- `make verify`: PDF, site, Storybook, Playwright, staging, manifest
- `make monitor`: latest workflow plus live endpoints

## Русский

Этот репозиторий является публичной поверхностью поставки для **blabla agency**.

Агентство берет черновик ТЗ, раскрывает его через записанное обсуждение, превращает эту запись в AI-реестр контекста, выкатывает демо и повторяет цикл от фидбека.

### Цикл

1. Клиент присылает черновик ТЗ.
1. Звонки, чат, комментарии и ревью демо уточняют его.
1. Записи, заметки и состояние демо становятся AI-контекстом.
1. Конвейер выкатывает демо или staging-проход.
1. Фидбек запускает следующий раунд.

### Канонический деплой

- Сайт: <https://realagiorganization.github.io/blabla_agency/>
- Storybook: <https://realagiorganization.github.io/blabla_agency/storybook/>
- PDF: <https://realagiorganization.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf>
- Workflow сборки: <https://github.com/realagiorganization/blabla_agency/actions/workflows/presentation.yml>
- Workflow мониторинга: <https://github.com/realagiorganization/blabla_agency/actions/workflows/verification-monitor.yml>
- Репозиторий: <https://github.com/realagiorganization/blabla_agency>

### Персональное зеркало

- Сайт: <https://adminrealagi.github.io/blabla_agency/>
- Storybook: <https://adminrealagi.github.io/blabla_agency/storybook/>
- PDF: <https://adminrealagi.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf>
- Workflow сборки: <https://github.com/Adminrealagi/blabla_agency/actions/workflows/presentation.yml>
- Workflow мониторинга: <https://github.com/Adminrealagi/blabla_agency/actions/workflows/verification-monitor.yml>

### Карта репозитория

- `src/`: React-сайт, компоненты, тесты и контент
- `docs/`: короткие двуязычные документы
- `public/`: публикуемые статические артефакты
- `.storybook/`: поверхность ревью компонентов
- `slides/`: Beamer-исходник
- `scripts/`: автоматизация lint, сборки, staging и мониторинга

### Основные документы

- Обзор: `docs/index.md`
- Модель поставки: `docs/delivery-model.md`
- Спецификация: `docs/specification.md`
- Use case'ы: `docs/use-cases.md`
- Примеры: `docs/samples.md`
- Верификация: `docs/verification.md`
- Документ о начинании: `docs/endeavor.md`
- Screenplay/manual: `public/agency_advertisement_scenario.fountain.md`

### Локальный процесс

```bash
make lint
npm run test:run
make e2e
make verify
make monitor
```

- `make lint`: lint плюс typecheck
- `npm run test:run`: набор Vitest
- `make e2e`: Playwright smoke-проверки staged-сайта и Storybook
- `make verify`: PDF, сайт, Storybook, Playwright, staging, манифест
- `make monitor`: последний workflow и живые endpoint'ы
