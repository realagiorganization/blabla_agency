export type Bilingual = {
  en: string;
  ru: string;
};

export type LinkItem = {
  label: Bilingual;
  href: string;
  external?: boolean;
};

export type HeroLink = LinkItem & {
  tone: "primary" | "secondary";
};

export type SectionCopy = {
  eyebrow: Bilingual;
  title: Bilingual;
  description: Bilingual;
  sources?: string[];
};

export type Metric = {
  label: Bilingual;
  value: string;
};

export type Capability = {
  title: Bilingual;
  body: Bilingual;
};

export type Blueprint = {
  slug: string;
  label: string;
  title: Bilingual;
  scope: Bilingual;
  inputs: Bilingual[];
  outputs: Bilingual[];
  proofs: Bilingual[];
};

export type EndeavorTrack = {
  title: Bilingual;
  body: Bilingual;
  proofs: Bilingual[];
};

export type RepositorySource = {
  title: Bilingual;
  body: Bilingual;
  filePath: string;
  repoHref: string;
  liveHref?: string;
  liveLabel?: Bilingual;
  proofs: Bilingual[];
};

export type CadenceStep = {
  label: string;
  title: Bilingual;
  summary: Bilingual;
  outputs: Bilingual[];
};

export type CadenceExplorerFrame = {
  label: string;
  title: Bilingual;
  summary: Bilingual;
  contextAdds: Bilingual[];
  ships: Bilingual[];
};

export type ContextSource = {
  title: Bilingual;
  body: Bilingual;
  note: Bilingual;
};

export type Deliverable = {
  title: Bilingual;
  body: Bilingual;
  sourcePath: string;
  links: LinkItem[];
};

const organizationRepo = "https://github.com/realagiorganization/blabla_agency";
const organizationBlob = `${organizationRepo}/blob/master`;
const organizationTree = `${organizationRepo}/tree/master`;
const organizationWorkflow = `${organizationRepo}/actions/workflows`;
const organizationPages = "https://realagiorganization.github.io/blabla_agency";

function repoFile(path: string) {
  return `${organizationBlob}/${path}`;
}

function repoTree(path: string) {
  return `${organizationTree}/${path}`;
}

export const navigationLinks: LinkItem[] = [
  {
    href: "#endeavor",
    label: {
      en: "Endeavor",
      ru: "Начинание",
    },
  },
  {
    href: "#sources",
    label: {
      en: "Repo sources",
      ru: "Источники репозитория",
    },
  },
  {
    href: "#surfaces",
    label: {
      en: "Service surface",
      ru: "Поверхность сервиса",
    },
  },
  {
    href: "#blueprints",
    label: {
      en: "Blueprints",
      ru: "Сценарии поставки",
    },
  },
  {
    href: "#cadence",
    label: {
      en: "Cadence",
      ru: "Каденс",
    },
  },
  {
    href: "#context",
    label: {
      en: "Context",
      ru: "Контекст",
    },
  },
  {
    href: "#deliverables",
    label: {
      en: "Outputs",
      ru: "Выходы",
    },
  },
  {
    href: "./storybook/",
    label: {
      en: "Storybook",
      ru: "Storybook",
    },
  },
];

export const hero = {
  eyebrow: {
    en: "Systems, programs, websites, apps, and automation for any complexity.",
    ru: "Системы, программы, сайты, приложения и автоматизация любой сложности.",
  },
  title: {
    en: "blabla agency turns evolving discussions into deployed software.",
    ru: "blabla agency превращает развивающиеся обсуждения в задеплоенный софт.",
  },
  summary: {
    en: "The client starts with a rough spec. Calls, Zoom, chat, comments, and demo review fill the gaps. That recorded context plus the latest demo becomes AI working memory for the next deployed iteration.",
    ru: "Клиент начинает с грубого ТЗ. Звонки, Zoom, чат, комментарии и ревью демо заполняют пробелы. Этот записанный контекст вместе с последним демо становится AI-памятью для следующей задеплоенной итерации.",
  },
};

export const heroLinks: HeroLink[] = [
  {
    href: "./agency_advertisement_scenario.fountain.md",
    label: {
      en: "Open ad script",
      ru: "Открыть рекламный сценарий",
    },
    tone: "secondary",
  },
  {
    href: "./storybook/",
    label: {
      en: "Open Storybook",
      ru: "Открыть Storybook",
    },
    tone: "primary",
  },
  {
    href: "./artifacts/blabla_agency_presentation.pdf",
    label: {
      en: "Open PDF",
      ru: "Открыть PDF",
    },
    tone: "secondary",
  },
  {
    href: organizationRepo,
    label: {
      en: "Organization repo",
      ru: "Репозиторий организации",
    },
    tone: "secondary",
    external: true,
  },
];

export const sectionCopy = {
  endeavor: {
    eyebrow: {
      en: "Endeavor",
      ru: "Начинание",
    },
    title: {
      en: "This repository is the public, versioned, and continuously built surface of the agency effort.",
      ru: "Этот репозиторий является публичной, версионируемой и непрерывно собираемой поверхностью агентского начинания.",
    },
    description: {
      en: "The method stays public: explained in markdown, rendered with reusable React components, reviewed in Storybook, deployed on Pages, and checked by CI plus live monitors.",
      ru: "Метод остается публичным: объясняется в markdown, рендерится переиспользуемыми React-компонентами, проверяется в Storybook, деплоится на Pages и контролируется CI плюс live-мониторами.",
    },
    sources: ["README.md", "docs/endeavor.md", "src/App.tsx"],
  },
  sources: {
    eyebrow: {
      en: "Repository-sourced briefing",
      ru: "Брифинг, собранный из репозитория",
    },
    title: {
      en: "The site explains itself from repository evidence instead of generic claims.",
      ru: "Сайт объясняет себя через доказательства из репозитория, а не через общие заявления.",
    },
    description: {
      en: "Each card below points to a real file or public artifact. Together they show the method, the spec logic, the sample shapes, and the verification surface.",
      ru: "Каждая карточка ниже ведет к реальному файлу или публичному артефакту. Вместе они показывают метод, логику спецификации, формы примеров и поверхность верификации.",
    },
    sources: ["README.md", "docs/*.md", "public/agency_advertisement_scenario.fountain.md"],
  },
  surfaces: {
    eyebrow: {
      en: "Service surface",
      ru: "Поверхность сервиса",
    },
    title: {
      en: "The agency handles product-facing and internal engineering work of any complexity.",
      ru: "Агентство ведет и продуктовые, и внутренние инженерные работы любой сложности.",
    },
    description: {
      en: "The same cadence works from marketing surfaces to internal systems because the spec stays alive instead of freezing at intake.",
      ru: "Один и тот же cadence работает от маркетинговых поверхностей до внутренних систем, потому что спецификация остается живой, а не замерзает на входе.",
    },
    sources: ["docs/use-cases.md", "docs/specification.md"],
  },
  blueprints: {
    eyebrow: {
      en: "Delivery blueprints",
      ru: "Сценарии поставки",
    },
    title: {
      en: "Different project shapes still run through the same agency loop.",
      ru: "Разные формы проектов все равно проходят через один и тот же агентский цикл.",
    },
    description: {
      en: "These blueprints come from the repo use cases. Switch between them to compare context inputs, shipped outputs, and public proof.",
      ru: "Эти сценарии взяты из use case'ов репозитория. Переключайтесь между ними, чтобы сравнить входящий контекст, поставляемые выходы и публичное доказательство.",
    },
    sources: ["docs/use-cases.md", "docs/specification.md", "docs/verification.md"],
  },
  cadence: {
    eyebrow: {
      en: "Cadence",
      ru: "Каденс",
    },
    title: {
      en: "Draft spec first. Long discussion second. Deployed demo third.",
      ru: "Сначала черновик ТЗ. Потом длинное обсуждение. Затем задеплоенное демо.",
    },
    description: {
      en: "A draft starts the loop, discussion sharpens it, the pipeline deploys, and the next conversation starts from the real demo.",
      ru: "Черновик запускает цикл, обсуждение его точит, конвейер деплоит, а следующий разговор начинается уже от реального демо.",
    },
    sources: ["docs/delivery-model.md", "docs/specification.md"],
  },
  diagrams: {
    eyebrow: {
      en: "Mermaid maps",
      ru: "Mermaid-схемы",
    },
    title: {
      en: "Recorded discussion is the fuel, not just a project archive.",
      ru: "Записанное обсуждение является топливом, а не просто архивом проекта.",
    },
    description: {
      en: "The diagrams show how conversation context, demo state, and deploy traces become the AI ledger for each generation pass.",
      ru: "Схемы показывают, как контекст разговоров, состояние демо и deploy-трейсы становятся AI-реестром для каждого прохода генерации.",
    },
    sources: ["docs/specification.md", "slides/blabla_agency_presentation.tex"],
  },
  context: {
    eyebrow: {
      en: "Context ledger",
      ru: "Реестр контекста",
    },
    title: {
      en: "The AI pipeline generates from recorded reality, not from hand-waved summaries.",
      ru: "AI-конвейер генерирует из записанной реальности, а не из расплывчатых пересказов.",
    },
    description: {
      en: "Calls, chats, comments, the current demo, and deploy traces are all part of what the agent sees. Better records make better iterations.",
      ru: "Звонки, чаты, комментарии, текущее демо и deploy-трейсы входят в то, что видит агент. Чем лучше запись, тем лучше итерация.",
    },
    sources: ["docs/specification.md", "docs/use-cases.md"],
  },
  deliverables: {
    eyebrow: {
      en: "Visible outputs",
      ru: "Видимые выходы",
    },
    title: {
      en: "Every iteration leaves behind client-readable, machine-readable, and deployable artifacts.",
      ru: "Каждая итерация оставляет после себя клиентопонятные, машиночитаемые и деплоимые артефакты.",
    },
    description: {
      en: "This is why the process scales: the repo keeps the latest explanation, demo surface, presentation, screenplay, and verification flow in one place.",
      ru: "Именно поэтому процесс масштабируется: репозиторий держит в одном месте последнее объяснение, демо-поверхность, презентацию, сценарий и поток верификации.",
    },
    sources: [
      ".github/workflows/presentation.yml",
      ".github/workflows/verification-monitor.yml",
      "public/agency_advertisement_scenario.fountain.md",
    ],
  },
} satisfies Record<string, SectionCopy>;

export const metrics: Metric[] = [
  {
    label: {
      en: "Bilingual markdown briefings in repo",
      ru: "Двуязычные markdown-брифинги в репозитории",
    },
    value: "07",
  },
  {
    label: {
      en: "Published client-facing surfaces",
      ru: "Опубликованные клиентские поверхности",
    },
    value: "04",
  },
  {
    label: {
      en: "Automated workflow tracks",
      ru: "Автоматизированные workflow-треки",
    },
    value: "02",
  },
  {
    label: {
      en: "Feedback-driven iterations",
      ru: "Итерации, движимые фидбеком",
    },
    value: "∞",
  },
];

export const capabilities: Capability[] = [
  {
    title: {
      en: "Custom systems",
      ru: "Кастомные системы",
    },
    body: {
      en: "Internal tools, orchestration layers, ops panels, and business systems that only become clear after operators walk through the work.",
      ru: "Внутренние инструменты, оркестрационные слои, ops-панели и бизнес-системы, которые проясняются только после реального прохода работы с операторами.",
    },
  },
  {
    title: {
      en: "Programs and automations",
      ru: "Программы и автоматизации",
    },
    body: {
      en: "CLI tools, workers, parsers, agent loops, and automation stacks shaped by repeated discussion and demo evidence.",
      ru: "CLI-инструменты, workers, парсеры, агентные циклы и стеки автоматизации, которые формируются повторным обсуждением и доказательствами из демо.",
    },
  },
  {
    title: {
      en: "Websites and apps",
      ru: "Сайты и приложения",
    },
    body: {
      en: "Marketing sites, product surfaces, dashboards, portals, and frontends kept in sync with the latest approved narrative and deployable state.",
      ru: "Маркетинговые сайты, продуктовые поверхности, дашборды, порталы и фронтенды, синхронизированные с последним утвержденным нарративом и деплоимым состоянием.",
    },
  },
  {
    title: {
      en: "Delivery governance",
      ru: "Управление поставкой",
    },
    body: {
      en: "Versioned specs, recorded decisions, linked demo context, deploy notes, verification workflows, and AI-ready context packs.",
      ru: "Версионируемые спецификации, записанные решения, связанный контекст демо, deploy-заметки, workflow верификации и AI-ready контекст-паки.",
    },
  },
];

export const blueprints: Blueprint[] = [
  {
    slug: "internal-system",
    label: "01",
    title: {
      en: "Internal operating system",
      ru: "Внутренняя операционная система",
    },
    scope: {
      en: "A client needs an internal tool that coordinates operators, queues, files, approvals, and escalations. The real workflow only becomes visible when the team walks through the work on calls and screen shares.",
      ru: "Клиенту нужен внутренний инструмент, который координирует операторов, очереди, файлы, согласования и эскалации. Реальный workflow становится видимым только когда команда проходит работу на созвонах и через screen share.",
    },
    inputs: [
      {
        en: "operator walkthrough calls",
        ru: "созвоны с разбором работы операторов",
      },
      {
        en: "approval edge cases from chat",
        ru: "краевые кейсы согласований из чатов",
      },
      {
        en: "current queue and file handling pain",
        ru: "текущая боль с очередями и файлами",
      },
    ],
    outputs: [
      {
        en: "ops dashboard or internal portal",
        ru: "операционный дашборд или внутренний портал",
      },
      {
        en: "role-aware workflow automation",
        ru: "автоматизация workflow с учетом ролей",
      },
      {
        en: "versioned scope and acceptance notes",
        ru: "версионируемый scope и acceptance-заметки",
      },
    ],
    proofs: [
      {
        en: "repo diffs plus deploy notes",
        ru: "diff'ы репозитория и заметки по деплою",
      },
      {
        en: "Storybook-reviewed admin components",
        ru: "админ-компоненты, проверенные в Storybook",
      },
      {
        en: "monitorable demo environment",
        ru: "мониторируемое demo-окружение",
      },
    ],
  },
  {
    slug: "automation-program",
    label: "02",
    title: {
      en: "Program and automation stack",
      ru: "Программа и стек автоматизации",
    },
    scope: {
      en: "A service team needs scripts, parsers, data movers, agent loops, and long-running automation. The nuance lives in clarifications, failures, and post-demo notes more than in the opening brief.",
      ru: "Команде сервиса нужны скрипты, парсеры, переносчики данных, агентные циклы и долгоживущая автоматизация. Нюансы живут в уточнениях, фейлах и заметках после демо сильнее, чем в стартовом брифе.",
    },
    inputs: [
      {
        en: "failure traces and run logs",
        ru: "трейсы падений и логи запусков",
      },
      {
        en: "chat clarifications around edge cases",
        ru: "чатовые уточнения по edge case'ам",
      },
      {
        en: "demo recordings of manual work",
        ru: "записи демо ручной работы",
      },
    ],
    outputs: [
      {
        en: "CLI and service automation stack",
        ru: "CLI и стек сервисной автоматизации",
      },
      {
        en: "repeatable operator runbooks",
        ru: "повторяемые runbook'и для операторов",
      },
      {
        en: "tracked generation-ready context packs",
        ru: "отслеживаемые контекст-паки для генерации",
      },
    ],
    proofs: [
      {
        en: "artifact manifests and CI logs",
        ru: "манифесты артефактов и CI-логи",
      },
      {
        en: "versioned automation behavior",
        ru: "версионируемое поведение автоматизации",
      },
      {
        en: "public explanation of the loop",
        ru: "публичное объяснение рабочего цикла",
      },
    ],
  },
  {
    slug: "website-and-app",
    label: "03",
    title: {
      en: "Website plus application surface",
      ru: "Сайт плюс прикладная поверхность",
    },
    scope: {
      en: "A company needs a public website, a client-facing app layer, and supporting dashboards. Narrative, UI behavior, and release scope sharpen together through recorded review sessions.",
      ru: "Компании нужны публичный сайт, прикладной слой для клиента и поддерживающие дашборды. Нарратив, поведение UI и release-scope уточняются вместе через записанные review-сессии.",
    },
    inputs: [
      {
        en: "review call recordings",
        ru: "записи review-созвонов",
      },
      {
        en: "comments on copy and interaction",
        ru: "комментарии по копирайту и взаимодействию",
      },
      {
        en: "demo deltas versus approved narrative",
        ru: "дельты демо относительно утвержденного нарратива",
      },
    ],
    outputs: [
      {
        en: "public site and client-facing app shell",
        ru: "публичный сайт и каркас клиентского приложения",
      },
      {
        en: "reusable React component system",
        ru: "переиспользуемая React-компонентная система",
      },
      {
        en: "presentation and screenplay layers",
        ru: "слои презентации и сценария",
      },
    ],
    proofs: [
      {
        en: "live Pages site and Storybook",
        ru: "живой Pages-сайт и Storybook",
      },
      {
        en: "PDF presentation artifact",
        ru: "PDF-артефакт презентации",
      },
      {
        en: "client-readable bilingual docs",
        ru: "клиентопонятные двуязычные docs",
      },
    ],
  },
  {
    slug: "high-complexity-platform",
    label: "04",
    title: {
      en: "High-complexity technical platform",
      ru: "Техническая платформа высокой сложности",
    },
    scope: {
      en: "A platform with integrations, environments, and reliability constraints cannot be frozen by a single spec pass. The next implementation round has to inherit both the latest discussion and the latest demo reality.",
      ru: "Платформу с интеграциями, окружениями и ограничениями надежности нельзя заморозить одним проходом по спецификации. Следующий раунд реализации должен наследовать и последнее обсуждение, и последнюю реальность демо.",
    },
    inputs: [
      {
        en: "environment notes and deployment traces",
        ru: "environment-заметки и deployment-трейсы",
      },
      {
        en: "integration concerns from deep calls",
        ru: "интеграционные concerns из глубоких созвонов",
      },
      {
        en: "staging behavior under real load",
        ru: "поведение staging под реальной нагрузкой",
      },
    ],
    outputs: [
      {
        en: "iterated platform specification",
        ru: "итерированная спецификация платформы",
      },
      {
        en: "deployable platform slices",
        ru: "деплоимые срезы платформы",
      },
      {
        en: "recovery and reliability work queue",
        ru: "очередь работ по recovery и reliability",
      },
    ],
    proofs: [
      {
        en: "live verification workflow",
        ru: "workflow живой верификации",
      },
      {
        en: "current demo and artifact trail",
        ru: "текущая демо-версия и цепочка артефактов",
      },
      {
        en: "recorded decision memory in repo",
        ru: "записанная память решений в репозитории",
      },
    ],
  },
];

export const endeavorTracks: EndeavorTrack[] = [
  {
    title: {
      en: "Public organization repository",
      ru: "Публичный репозиторий организации",
    },
    body: {
      en: "The canonical remote is public because the agency surface is part of the deliverable. Clients can inspect how narrative, components, and workflows change over time.",
      ru: "Канонический remote является публичным, потому что поверхность агентства входит в поставку. Клиенты могут видеть, как со временем меняются нарратив, компоненты и workflow.",
    },
    proofs: [
      {
        en: "canonical organization remote",
        ru: "канонический remote организации",
      },
      {
        en: "public commit trail",
        ru: "публичная цепочка коммитов",
      },
      {
        en: "inspectable Pages deployment",
        ru: "проверяемый деплой Pages",
      },
    ],
  },
  {
    title: {
      en: "Side-by-side bilingual surface",
      ru: "Двуязычная поверхность бок о бок",
    },
    body: {
      en: "English and Russian stay together so the same explanation can be read and compared without switching to a separate translation.",
      ru: "Английский и русский держатся рядом, чтобы одно и то же объяснение можно было читать и сравнивать без отдельной переводной версии.",
    },
    proofs: [
      {
        en: "paired section headings",
        ru: "парные заголовки разделов",
      },
      {
        en: "side-by-side bilingual panels",
        ru: "двуязычные панели бок о бок",
      },
      {
        en: "shared React content model",
        ru: "общая React-модель контента",
      },
    ],
  },
  {
    title: {
      en: "Storybook review surface",
      ru: "Поверхность ревью через Storybook",
    },
    body: {
      en: "The public site is built from reusable React blocks with isolated stories, so the explanation can evolve without turning into a one-off page.",
      ru: "Публичный сайт собирается из переиспользуемых React-блоков с изолированными story, поэтому объяснение может развиваться без превращения в одноразовую страницу.",
    },
    proofs: [
      {
        en: "component stories for review",
        ru: "component stories для ревью",
      },
      {
        en: "same components used in production Pages",
        ru: "те же компоненты используются в production Pages",
      },
      {
        en: "content and UI evolve independently",
        ru: "контент и UI могут развиваться независимо",
      },
    ],
  },
  {
    title: {
      en: "Verification-backed publication",
      ru: "Публикация, подкрепленная верификацией",
    },
    body: {
      en: "This repo rebuilds the site, Storybook, PDF, and screenplay, then checks that the public endpoints still respond.",
      ru: "Этот репозиторий пересобирает сайт, Storybook, PDF и сценарий, а затем проверяет, что публичные endpoint'ы все еще отвечают.",
    },
    proofs: [
      {
        en: "local make verify flow",
        ru: "локальный поток make verify",
      },
      {
        en: "build and deploy workflow",
        ru: "workflow сборки и деплоя",
      },
      {
        en: "live monitor for site, storybook, PDF, and script",
        ru: "живой мониторинг сайта, storybook, PDF и сценария",
      },
    ],
  },
];

export const repositorySources: RepositorySource[] = [
  {
    title: {
      en: "README as the public contract",
      ru: "README как публичный контракт",
    },
    body: {
      en: "The root README states the model, the loop, the canonical deployment, and the local verification commands.",
      ru: "Корневой README фиксирует модель, цикл, канонический деплой и локальные команды верификации.",
    },
    filePath: "README.md",
    repoHref: repoFile("README.md"),
    proofs: [
      {
        en: "canonical deployment links",
        ru: "ссылки на канонический деплой",
      },
      {
        en: "repo layout summary",
        ru: "описание структуры репозитория",
      },
      {
        en: "local workflow commands",
        ru: "команды локального процесса",
      },
    ],
  },
  {
    title: {
      en: "Endeavor brief",
      ru: "Документ о начинании",
    },
    body: {
      en: "This brief states why the repo is public and why the site exists as a versioned delivery surface for the agency.",
      ru: "Этот brief фиксирует, почему репозиторий публичный и почему сайт существует как версионируемая поверхность поставки для агентства.",
    },
    filePath: "docs/endeavor.md",
    repoHref: repoFile("docs/endeavor.md"),
    proofs: [
      {
        en: "public repo rationale",
        ru: "обоснование публичности репозитория",
      },
      {
        en: "site purpose statement",
        ru: "объяснение назначения сайта",
      },
      {
        en: "verification framing",
        ru: "рамка для верификации",
      },
    ],
  },
  {
    title: {
      en: "Delivery model",
      ru: "Модель поставки",
    },
    body: {
      en: "This file captures the flow from draft spec through discussion, recorded context, generation, deployment, and review.",
      ru: "Этот файл фиксирует поток от черновика спецификации через обсуждение, записанный контекст, генерацию, деплой и ревью.",
    },
    filePath: "docs/delivery-model.md",
    repoHref: repoFile("docs/delivery-model.md"),
    proofs: [
      {
        en: "five-stage service cadence",
        ru: "пятишаговый сервисный cadence",
      },
      {
        en: "discussion before implementation freeze",
        ru: "обсуждение до заморозки реализации",
      },
      {
        en: "deployable demo expectation",
        ru: "ожидание деплоимого демо",
      },
    ],
  },
  {
    title: {
      en: "Specification logic",
      ru: "Логика спецификации",
    },
    body: {
      en: "The spec brief explains why the real spec is assembled from calls, chat, demo state, and deploy traces instead of a one-time intake form.",
      ru: "Документ о спецификации объясняет, почему реальная спецификация собирается из звонков, чатов, состояния демо и deploy-трейсов, а не из одноразовой intake-формы.",
    },
    filePath: "docs/specification.md",
    repoHref: repoFile("docs/specification.md"),
    proofs: [
      {
        en: "moving specification model",
        ru: "модель движущейся спецификации",
      },
      {
        en: "AI context inputs",
        ru: "входы для AI-контекста",
      },
      {
        en: "agent needs by iteration",
        ru: "потребности агентов по итерациям",
      },
    ],
  },
  {
    title: {
      en: "Use-case coverage",
      ru: "Покрытие use case'ов",
    },
    body: {
      en: "The use-case document shows the same cadence across internal systems, automations, sites, apps, and high-complexity products.",
      ru: "Документ с use case'ами показывает один и тот же cadence для внутренних систем, автоматизаций, сайтов, приложений и сложных продуктов.",
    },
    filePath: "docs/use-cases.md",
    repoHref: repoFile("docs/use-cases.md"),
    proofs: [
      {
        en: "internal operating systems",
        ru: "внутренние операционные системы",
      },
      {
        en: "automation-heavy services",
        ru: "сервисы с тяжелой автоматизацией",
      },
      {
        en: "web plus app projects",
        ru: "проекты сайт плюс приложение",
      },
    ],
  },
  {
    title: {
      en: "Sample scenarios",
      ru: "Примерные сценарии",
    },
    body: {
      en: "The samples brief compresses the method into short rows: intake, recorded context, shipped output, and public proof.",
      ru: "Документ с примерами сжимает метод в короткие строки: вход, записанный контекст, поставляемый выход и публичное доказательство.",
    },
    filePath: "docs/samples.md",
    repoHref: repoFile("docs/samples.md"),
    proofs: [
      {
        en: "site refresh sample",
        ru: "пример обновления сайта",
      },
      {
        en: "internal tool sample",
        ru: "пример внутреннего инструмента",
      },
      {
        en: "automation repair sample",
        ru: "пример починки автоматизации",
      },
    ],
  },
  {
    title: {
      en: "Verification brief",
      ru: "Документ о верификации",
    },
    body: {
      en: "Verification is documented in markdown and implemented in workflows. The repo states what is linted, unit-tested, browser-tested, built, staged, and monitored.",
      ru: "Верификация задокументирована в markdown и реализована в workflow. Репозиторий прямо описывает, что lint'ится, unit-тестируется, browser-тестируется, собирается, staging'уется и мониторится.",
    },
    filePath: "docs/verification.md",
    repoHref: repoFile("docs/verification.md"),
    proofs: [
      {
        en: "local proof commands",
        ru: "команды локального доказательства",
      },
      {
        en: "CI build coverage",
        ru: "покрытие CI-сборкой",
      },
      {
        en: "Playwright smoke plus live checks",
        ru: "Playwright smoke плюс live-проверки",
      },
    ],
  },
  {
    title: {
      en: "Screenplay/manual asset",
      ru: "Сценарный/manual-артефакт",
    },
    body: {
      en: "The published Fountain script stages the workflow with Zoom, ChatGPT, VS Code, and iterative client review.",
      ru: "Опубликованный Fountain-сценарий разыгрывает workflow через Zoom, ChatGPT, VS Code и итеративное клиентское ревью.",
    },
    filePath: "public/agency_advertisement_scenario.fountain.md",
    repoHref: repoFile("public/agency_advertisement_scenario.fountain.md"),
    liveHref: `${organizationPages}/agency_advertisement_scenario.fountain.md`,
    liveLabel: {
      en: "Published script",
      ru: "Опубликованный сценарий",
    },
    proofs: [
      {
        en: "Zoom and ChatGPT workflow scenes",
        ru: "сцены с workflow через Zoom и ChatGPT",
      },
      {
        en: "VS Code execution moments",
        ru: "моменты исполнения в VS Code",
      },
      {
        en: "step-by-step agency manual framing",
        ru: "рамка пошагового manual для агентства",
      },
    ],
  },
];

export const cadence: CadenceStep[] = [
  {
    label: "01",
    title: {
      en: "Draft specification arrives",
      ru: "Поступает черновая спецификация",
    },
    summary: {
      en: "The client sends a rough spec, backlog, or goal. It is enough to start and intentionally not enough to freeze.",
      ru: "Клиент присылает грубое ТЗ, backlog или цель. Этого хватает, чтобы стартовать, и намеренно не хватает, чтобы все заморозить.",
    },
    outputs: [
      {
        en: "initial scope map",
        ru: "начальная карта scope",
      },
      {
        en: "open questions list",
        ru: "список открытых вопросов",
      },
    ],
  },
  {
    label: "02",
    title: {
      en: "Discussion expands the real spec",
      ru: "Обсуждение раскрывает реальную спецификацию",
    },
    summary: {
      en: "Calls, chats, comments, issue threads, and screen shares reveal the real requirements, constraints, objections, and priorities.",
      ru: "Созвоны, чаты, комментарии, issue-треды и screen share раскрывают реальные требования, ограничения, возражения и приоритеты.",
    },
    outputs: [
      {
        en: "decision log",
        ru: "журнал решений",
      },
      {
        en: "captured unresolved edges",
        ru: "зафиксированные незакрытые края",
      },
    ],
  },
  {
    label: "03",
    title: {
      en: "Recorded context populates the AI ledger",
      ru: "Записанный контекст наполняет AI-реестр",
    },
    summary: {
      en: "Recordings, transcripts, chat exports, comments, deploy notes, and current demo state become a structured context pack for the agents.",
      ru: "Записи, транскрипты, выгрузки чатов, комментарии, deploy-заметки и текущее демо складываются в структурированный контекст-пак для агентов.",
    },
    outputs: [
      {
        en: "agent-ready context bundle",
        ru: "agent-ready пакет контекста",
      },
      {
        en: "traceable artifact trail",
        ru: "прослеживаемая цепочка артефактов",
      },
    ],
  },
  {
    label: "04",
    title: {
      en: "AI pipeline generates and deploys demos",
      ru: "AI-конвейер генерирует и деплоит демо",
    },
    summary: {
      en: "The pipeline writes code, config, UI, tests, pages, and deploy assets, then ships a demo or staging version the client can inspect.",
      ru: "Конвейер пишет код, конфиг, UI, тесты, страницы и deploy-артефакты, а затем поставляет демо или staging-версию, которую клиент может проверить.",
    },
    outputs: [
      {
        en: "deployable demo",
        ru: "задеплоенное демо",
      },
      {
        en: "fresh implementation diff",
        ru: "свежий implementation diff",
      },
    ],
  },
  {
    label: "05",
    title: {
      en: "Feedback folds back into the next iteration",
      ru: "Фидбек замыкается в следующую итерацию",
    },
    summary: {
      en: "The client reviews the demo, comments on behavior and fidelity, and that discussion becomes the next context layer.",
      ru: "Клиент смотрит демо, комментирует поведение и точность, и этот разговор становится следующим слоем контекста.",
    },
    outputs: [
      {
        en: "new acceptance edits",
        ru: "новые acceptance-правки",
      },
      {
        en: "next-generation queue",
        ru: "очередь следующей генерации",
      },
    ],
  },
];

export const cadenceExplorerFrames: CadenceExplorerFrame[] = [
  {
    label: "01",
    title: {
      en: "Intake and rough scope",
      ru: "Приемка и грубый scope",
    },
    summary: {
      en: "The first artifact is deliberately rough. The agency needs enough structure to start the dialogue, not fake completeness.",
      ru: "Первый артефакт намеренно остается грубым. Агентству нужна структура для старта диалога, а не ложная завершенность.",
    },
    contextAdds: [
      {
        en: "draft spec and backlog dump",
        ru: "черновик спецификации и выгрузка backlog",
      },
      {
        en: "named priorities and unknowns",
        ru: "названные приоритеты и неизвестные",
      },
    ],
    ships: [
      {
        en: "initial scope map",
        ru: "начальная карта scope",
      },
      {
        en: "question list for the first call",
        ru: "список вопросов для первого созвона",
      },
    ],
  },
  {
    label: "02",
    title: {
      en: "Discussion and decision pressure",
      ru: "Обсуждение и давление решений",
    },
    summary: {
      en: "Calls, Zoom sessions, chats, and inline comments expose what the client really means and which edge cases shape the build.",
      ru: "Созвоны, Zoom-сессии, чаты и inline-комментарии показывают, что клиент реально имеет в виду и какие edge case'ы влияют на сборку.",
    },
    contextAdds: [
      {
        en: "recorded calls and screen shares",
        ru: "записанные созвоны и screen share",
      },
      {
        en: "chat clarifications and objections",
        ru: "чатовые уточнения и возражения",
      },
    ],
    ships: [
      {
        en: "decision log",
        ru: "журнал решений",
      },
      {
        en: "updated acceptance criteria",
        ru: "обновленные acceptance-критерии",
      },
    ],
  },
  {
    label: "03",
    title: {
      en: "Context ledger assembly",
      ru: "Сборка реестра контекста",
    },
    summary: {
      en: "The agency folds transcripts, comments, demo evidence, and deploy notes into a structured pack the agents can operate on.",
      ru: "Агентство складывает транскрипты, комментарии, доказательства из демо и deploy-заметки в структурированный пакет, с которым агенты могут работать.",
    },
    contextAdds: [
      {
        en: "transcripts, notes, and issue comments",
        ru: "транскрипты, заметки и комментарии в issues",
      },
      {
        en: "current demo and environment traces",
        ru: "текущее демо и environment-трейсы",
      },
    ],
    ships: [
      {
        en: "AI-ready context bundle",
        ru: "AI-ready пакет контекста",
      },
      {
        en: "traceable artifact ledger",
        ru: "прослеживаемый реестр артефактов",
      },
    ],
  },
  {
    label: "04",
    title: {
      en: "Generation and deployment",
      ru: "Генерация и деплой",
    },
    summary: {
      en: "Code, content, tests, pages, and automation updates are generated from the context ledger and shipped as a reviewable version.",
      ru: "Код, контент, тесты, страницы и обновления автоматизации генерируются из реестра контекста и выкатываются как версия для ревью.",
    },
    contextAdds: [
      {
        en: "implementation diffs and test outcomes",
        ru: "implementation diff'ы и результаты тестов",
      },
      {
        en: "deployment URLs and artifact manifests",
        ru: "deployment URL и манифесты артефактов",
      },
    ],
    ships: [
      {
        en: "deployable demo or staging surface",
        ru: "деплоимое демо или staging-поверхность",
      },
      {
        en: "updated docs, Storybook, and PDF",
        ru: "обновленные docs, Storybook и PDF",
      },
    ],
  },
  {
    label: "05",
    title: {
      en: "Review, delta, repeat",
      ru: "Ревью, дельта, повтор",
    },
    summary: {
      en: "Once the client reacts to the real build, the next iteration starts from evidence. The repo becomes running memory.",
      ru: "Когда клиент реагирует на реальную сборку, следующая итерация начинается от фактов. Репозиторий становится рабочей памятью.",
    },
    contextAdds: [
      {
        en: "client review commentary",
        ru: "клиентские комментарии по ревью",
      },
      {
        en: "demo deltas versus the last expectation",
        ru: "дельты демо относительно последнего ожидания",
      },
    ],
    ships: [
      {
        en: "next-generation priority queue",
        ru: "очередь приоритетов следующей генерации",
      },
      {
        en: "sharpened specification revision",
        ru: "заостренная ревизия спецификации",
      },
    ],
  },
];

export const contextSources: ContextSource[] = [
  {
    title: {
      en: "Call recordings",
      ru: "Записи созвонов",
    },
    body: {
      en: "Long technical conversations reveal why choices are made and where the client hesitates.",
      ru: "Длинные технические разговоры показывают, почему выбираются решения и где клиент сомневается.",
    },
    note: {
      en: "Used for decision extraction and tradeoff memory.",
      ru: "Используются для извлечения решений и памяти о trade-off'ах.",
    },
  },
  {
    title: {
      en: "Chat and comments",
      ru: "Чаты и комментарии",
    },
    body: {
      en: "Async clarifications, scope shifts, bug notes, and edge cases usually appear here before anywhere else.",
      ru: "Асинхронные уточнения, сдвиги scope, заметки о багах и edge case'ы обычно появляются здесь раньше всего.",
    },
    note: {
      en: "Used for live backlog shaping.",
      ru: "Используются для живой сборки backlog.",
    },
  },
  {
    title: {
      en: "Demo state snapshots",
      ru: "Снимки состояния демо",
    },
    body: {
      en: "The actual behavior of the current build is part of the context. The AI pipeline does not reason from text alone.",
      ru: "Фактическое поведение текущей сборки тоже входит в контекст. AI-конвейер не рассуждает только по тексту.",
    },
    note: {
      en: "Used for delta planning against the latest visible version.",
      ru: "Используются для планирования дельты относительно последней видимой версии.",
    },
  },
  {
    title: {
      en: "Deployment and error traces",
      ru: "Deployment- и error-трейсы",
    },
    body: {
      en: "Logs, failures, infra notes, and environment issues ground the next generation cycle in reality.",
      ru: "Логи, сбои, infra-заметки и проблемы окружения приземляют следующий цикл генерации в реальность.",
    },
    note: {
      en: "Used for reliability and recovery work.",
      ru: "Используются для reliability- и recovery-работы.",
    },
  },
  {
    title: {
      en: "Client review narratives",
      ru: "Нарративы клиентского ревью",
    },
    body: {
      en: "What the client points to in review often matters more than the original written spec. That narrative is recorded too.",
      ru: "То, на что клиент указывает на ревью, часто важнее исходной письменной спецификации. Этот нарратив тоже записывается.",
    },
    note: {
      en: "Used for prioritizing what actually moves the project forward.",
      ru: "Используются для приоритизации того, что реально двигает проект вперед.",
    },
  },
];

export const deliverables: Deliverable[] = [
  {
    title: {
      en: "GitHub Pages site",
      ru: "Сайт на GitHub Pages",
    },
    body: {
      en: "The public React site is the front door. It turns repository evidence into a client-readable explanation of the agency model.",
      ru: "Публичный React-сайт является фронт-дверью. Он превращает доказательства из репозитория в клиентопонятное объяснение модели агентства.",
    },
    sourcePath: "src/App.tsx + src/content/siteContent.ts",
    links: [
      {
        href: `${organizationPages}/`,
        label: {
          en: "Open live site",
          ru: "Открыть живой сайт",
        },
      },
      {
        href: organizationRepo,
        label: {
          en: "Open repository",
          ru: "Открыть репозиторий",
        },
        external: true,
      },
    ],
  },
  {
    title: {
      en: "Storybook review surface",
      ru: "Поверхность ревью в Storybook",
    },
    body: {
      en: "Reusable bilingual components stay reviewable outside the full page, which makes the site safer to extend and easier to critique.",
      ru: "Переиспользуемые двуязычные компоненты остаются пригодными для ревью вне полной страницы, что делает сайт безопаснее для расширения и проще для критики.",
    },
    sourcePath: "src/components/ + .storybook/",
    links: [
      {
        href: `${organizationPages}/storybook/`,
        label: {
          en: "Open Storybook",
          ru: "Открыть Storybook",
        },
      },
      {
        href: repoTree("src/components"),
        label: {
          en: "View components",
          ru: "Посмотреть компоненты",
        },
        external: true,
      },
    ],
  },
  {
    title: {
      en: "Presentation PDF",
      ru: "PDF-презентация",
    },
    body: {
      en: "The Beamer deck packages the agency logic into a formal artifact for presentation, review, and sharing outside the browser.",
      ru: "Beamer-дек упаковывает логику агентства в формальный артефакт для презентации, ревью и передачи вне браузера.",
    },
    sourcePath: "slides/blabla_agency_presentation.tex",
    links: [
      {
        href: `${organizationPages}/artifacts/blabla_agency_presentation.pdf`,
        label: {
          en: "Open PDF",
          ru: "Открыть PDF",
        },
      },
      {
        href: repoFile("slides/blabla_agency_presentation.tex"),
        label: {
          en: "View LaTeX source",
          ru: "Посмотреть LaTeX-исходник",
        },
        external: true,
      },
    ],
  },
  {
    title: {
      en: "Advertisement screenplay/manual",
      ru: "Рекламный screenplay/manual",
    },
    body: {
      en: "The Fountain script demonstrates the service as a staged scenario with Zoom, ChatGPT, and VS Code inside the same cadence.",
      ru: "Fountain-сценарий показывает сервис как постановочный сценарий с Zoom, ChatGPT и VS Code внутри того же cadence.",
    },
    sourcePath: "public/agency_advertisement_scenario.fountain.md",
    links: [
      {
        href: `${organizationPages}/agency_advertisement_scenario.fountain.md`,
        label: {
          en: "Open screenplay",
          ru: "Открыть сценарий",
        },
      },
      {
        href: repoFile("public/agency_advertisement_scenario.fountain.md"),
        label: {
          en: "View markdown source",
          ru: "Посмотреть markdown-источник",
        },
        external: true,
      },
    ],
  },
  {
    title: {
      en: "Automated publication and monitoring",
      ru: "Автоматизированная публикация и мониторинг",
    },
    body: {
      en: "The repo includes explicit workflows for build, deploy, browser verification, and live monitoring, so publication stays audited instead of manual.",
      ru: "Репозиторий включает явные workflow для сборки, деплоя, browser-верификации и live-мониторинга, поэтому публикация остается проверяемой, а не ручной.",
    },
    sourcePath: ".github/workflows/presentation.yml + .github/workflows/verification-monitor.yml",
    links: [
      {
        href: `${organizationWorkflow}/presentation.yml`,
        label: {
          en: "Build and deploy workflow",
          ru: "Workflow сборки и деплоя",
        },
        external: true,
      },
      {
        href: `${organizationWorkflow}/verification-monitor.yml`,
        label: {
          en: "Live verification workflow",
          ru: "Workflow живой верификации",
        },
        external: true,
      },
    ],
  },
];

export const footerCopy: Bilingual = {
  en: "Side-by-side bilingual narrative. Storybook-tested React components. GitHub Pages deploy. PDF and screenplay artifacts. Repo-sourced explanation of the agency loop.",
  ru: "Двуязычный нарратив бок о бок. React-компоненты, проверенные в Storybook. Деплой на GitHub Pages. PDF- и screenplay-артефакты. Объяснение агентского цикла, собранное из репозитория.",
};

export const footerLinks: LinkItem[] = [
  {
    href: "./agency_advertisement_scenario.fountain.md",
    label: {
      en: "Ad script",
      ru: "Рекламный сценарий",
    },
  },
  {
    href: "./storybook/",
    label: {
      en: "Storybook",
      ru: "Storybook",
    },
  },
  {
    href: "./artifacts/blabla_agency_presentation.pdf",
    label: {
      en: "Presentation PDF",
      ru: "PDF-презентация",
    },
  },
  {
    href: organizationRepo,
    label: {
      en: "GitHub repository",
      ru: "GitHub-репозиторий",
    },
    external: true,
  },
];

export const recordedContextCallout = {
  en: "Recorded context is not archive noise. It is the memory layer that gives the AI pipeline real decisions, real objections, and the live state of the demo.",
  ru: "Записанный контекст не является архивным шумом. Это слой памяти, который дает AI-конвейеру реальные решения, реальные возражения и живое состояние демо.",
};

export const contextDiagram = `flowchart LR
    A[Client draft spec] --> B[Calls and video calls]
    A --> C[Chat threads and comments]
    B --> D[Transcripts and decision notes]
    C --> D
    E[Current demo state] --> D
    F[Deploy and error traces] --> D
    D --> G[AI context ledger]
    G --> H[Generation pipeline]
    H --> I[Deployable demo]
    I --> J[Client feedback]
    J --> B
    J --> C`;

export const deliverDiagram = `flowchart TD
    S[Scope draft] --> X[Discussion]
    X --> Q[Question resolution]
    Q --> P[Prompted generation]
    P --> R[Repo diffs]
    R --> D[Deployed demo]
    D --> F[Feedback capture]
    F --> L[Next iteration ledger]
    L --> P`;
