# blabla agency

## English

This repository is a bilingual React + Storybook + Beamer delivery surface for **blabla agency**: an agency that builds systems, programs, websites, apps, automations, and software of any complexity by turning a moving client conversation into versioned implementation.

The operating cadence is explicit:

1. The client sends a draft technical specification.
1. That draft is discussed at length in calls, video calls, chats, comments, and demo reviews.
1. Those discussions are recorded, summarized, linked to the current demo state, and folded into an AI-ready context ledger.
1. The AI pipeline generates code, interfaces, tests, content, and deployment updates, then ships a deployable demo or staging version.
1. Client feedback is collected against the real demo, and the process repeats until the product is ready for the next production threshold.

The key point is that recorded context is not treated as meeting residue. Recordings, transcripts, chat threads, issue comments, deployment traces, and the current demo version are all part of the working memory that populates the next AI generation pass.

### Canonical organization deployment

- Website: <https://realagiorganization.github.io/blabla_agency/>
- Storybook: <https://realagiorganization.github.io/blabla_agency/storybook/>
- Latest presentation PDF: <https://realagiorganization.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf>
- Build and deploy workflow: <https://github.com/realagiorganization/blabla_agency/actions/workflows/presentation.yml>
- Live verification workflow: <https://github.com/realagiorganization/blabla_agency/actions/workflows/verification-monitor.yml>
- Organization repository: <https://github.com/realagiorganization/blabla_agency>

### Personal mirror

- Website: <https://adminrealagi.github.io/blabla_agency/>
- Storybook: <https://adminrealagi.github.io/blabla_agency/storybook/>
- Latest presentation PDF: <https://adminrealagi.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf>
- Build and deploy workflow: <https://github.com/Adminrealagi/blabla_agency/actions/workflows/presentation.yml>
- Live verification workflow: <https://github.com/Adminrealagi/blabla_agency/actions/workflows/verification-monitor.yml>

### Repository layout

- `src/` contains the React GitHub Pages site and the bilingual agency narrative rendered through reusable components.
- `public/` contains published static assets, including the Fountain-style advertisement screenplay/manual for the agency workflow.
- `.storybook/` contains Storybook configuration for component-level review of the published UI building blocks.
- `docs/` contains bilingual repository documentation that explains cadence, specification logic, use cases, and verification.
- `slides/` contains the bilingual Beamer presentation source.
- `scripts/` contains shared local automation for linting, tests, React builds, Storybook builds, PDF builds, staging, artifact manifests, and live verification.

### Published screenplay/manual

- Fountain screenplay/manual: `public/agency_advertisement_scenario.fountain.md`

### Local workflow

```bash
make node
make venv
make lint
npm run test:run
make verify
make monitor
```

- `make lint` checks Markdown, workflow YAML, shell syntax, content policy, and React type safety.
- `npm run test:run` runs the React/Vitest test suite.
- `make verify` rebuilds the PDF, runs tests, stages the React site and Storybook, verifies outputs, and writes an artifact manifest.
- `make monitor` verifies the latest workflow result plus the live website, Storybook, and PDF endpoints.

### CI pipeline

- `presentation.yml` builds the Beamer PDF, runs the React typecheck and test flow, builds the React site, builds Storybook, uploads artifacts, and deploys GitHub Pages.
- `verification-monitor.yml` reuses the repository monitor script to check the deployed site, Storybook, and PDF on a schedule or on demand.

## Русский

Этот репозиторий представляет собой двуязычную React + Storybook + Beamer поверхность поставки для **blabla agency**: агентства, которое делает системы, программы, сайты, приложения, автоматизации и софт любой сложности, превращая развивающийся разговор с клиентом в версионируемую реализацию.

Рабочий cadence здесь зафиксирован явно:

1. Клиент присылает черновую техническую спецификацию.
1. Этот черновик подробно обсуждается в звонках, видеозвонках, чатах, комментариях и ревью демо.
1. Эти обсуждения записываются, суммируются, связываются с текущим состоянием демо и складываются в AI-ready реестр контекста.
1. AI-конвейер генерирует код, интерфейсы, тесты, контент и deployment-обновления, а затем выкатывает deployable demo или staging-версию.
1. Фидбек клиента собирается уже по реальному демо, и процесс повторяется до следующего production-порога.

Ключевой момент в том, что записанный контекст не считается побочным следом встреч. Записи, транскрипты, чат-треды, комментарии в issues, deployment-трейсы и текущая версия демо входят в рабочую память, которая наполняет следующий AI-проход генерации.

### Канонический деплой организации

- Сайт: <https://realagiorganization.github.io/blabla_agency/>
- Storybook: <https://realagiorganization.github.io/blabla_agency/storybook/>
- Актуальный PDF презентации: <https://realagiorganization.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf>
- Workflow сборки и деплоя: <https://github.com/realagiorganization/blabla_agency/actions/workflows/presentation.yml>
- Workflow живой верификации: <https://github.com/realagiorganization/blabla_agency/actions/workflows/verification-monitor.yml>
- Репозиторий организации: <https://github.com/realagiorganization/blabla_agency>

### Персональное зеркало

- Сайт: <https://adminrealagi.github.io/blabla_agency/>
- Storybook: <https://adminrealagi.github.io/blabla_agency/storybook/>
- Актуальный PDF презентации: <https://adminrealagi.github.io/blabla_agency/artifacts/blabla_agency_presentation.pdf>
- Workflow сборки и деплоя: <https://github.com/Adminrealagi/blabla_agency/actions/workflows/presentation.yml>
- Workflow живой верификации: <https://github.com/Adminrealagi/blabla_agency/actions/workflows/verification-monitor.yml>

### Структура репозитория

- `src/` содержит React-сайт для GitHub Pages и двуязычный нарратив агентства, собранный через переиспользуемые компоненты.
- `public/` содержит публикуемые статические артефакты, включая Fountain-style рекламный screenplay/manual о рабочем процессе агентства.
- `.storybook/` содержит конфигурацию Storybook для покомпонентного ревью публикуемых UI-блоков.
- `docs/` содержит двуязычную документацию репозитория, объясняющую cadence, логику спецификации, use case'ы и верификацию.
- `slides/` содержит исходник двуязычной Beamer-презентации.
- `scripts/` содержит общую локальную автоматизацию для lint, тестов, React-сборки, Storybook-сборки, PDF-сборки, staging, манифеста артефактов и живой верификации.

### Опубликованный screenplay/manual

- Fountain screenplay/manual: `public/agency_advertisement_scenario.fountain.md`

### Локальный процесс

```bash
make node
make venv
make lint
npm run test:run
make verify
make monitor
```

- `make lint` проверяет Markdown, workflow YAML, shell-синтаксис, content policy и type safety React-сайта.
- `npm run test:run` запускает тестовый набор React/Vitest.
- `make verify` пересобирает PDF, запускает тесты, подготавливает React-сайт и Storybook, проверяет выходы и пишет манифест артефактов.
- `make monitor` проверяет последний результат workflow и живые endpoint'ы сайта, Storybook и PDF.

### CI-конвейер

- `presentation.yml` собирает Beamer PDF, запускает React typecheck и тесты, собирает React-сайт, собирает Storybook, загружает артефакты и деплоит GitHub Pages.
- `verification-monitor.yml` переиспользует monitor-скрипт репозитория, чтобы по расписанию и вручную проверять опубликованные сайт, Storybook и PDF.
