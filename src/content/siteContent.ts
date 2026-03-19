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
    en: "The client starts with a draft technical specification. Then the real work happens in calls, video calls, chats, comments, and demo reviews. That recorded context becomes the working memory for an AI generation pipeline that ships deployable demos, collects feedback, and repeats until the product is production-ready.",
    ru: "Клиент начинает с черновика технической спецификации. Дальше реальная работа происходит в звонках, видеозвонках, чатах, комментариях и разборах демо. Этот записанный контекст становится рабочей памятью AI-конвейера генерации, который поставляет задеплоенные демо, собирает обратную связь и повторяет цикл до production-ready результата.",
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
      en: "The endeavor is not hidden behind private notes. It is explained in markdown, rendered through reusable React components, reviewed in Storybook, deployed on GitHub Pages, and checked through build plus live monitor workflows.",
      ru: "Это начинание не скрыто в приватных заметках. Оно объясняется в markdown, рендерится через переиспользуемые React-компоненты, проверяется в Storybook, деплоится на GitHub Pages и контролируется через сборочные и live-monitor workflow.",
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
      en: "Each card below points to an actual file or public artifact in this repository. Together they document the agency model, the evolving specification logic, the verification surface, and the published materials that clients can inspect.",
      ru: "Каждая карточка ниже указывает на реальный файл или публичный артефакт этого репозитория. Вместе они документируют модель агентства, логику эволюции спецификации, поверхность верификации и опубликованные материалы, которые клиент может проверить.",
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
      en: "The same cadence can move from marketing sites to internal operating systems because the specification is treated as a living conversation rather than a frozen intake form.",
      ru: "Один и тот же cadence может двигаться от маркетинговых сайтов до внутренних операционных систем, потому что спецификация рассматривается как живой разговор, а не как застывшая intake-форма.",
    },
    sources: ["docs/use-cases.md", "docs/specification.md"],
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
      en: "That is the operating loop: a client sends a draft, the draft is argued through at length, the AI pipeline generates and deploys, and the next discussion starts from the real demo instead of a theoretical document.",
      ru: "Так выглядит рабочий цикл: клиент присылает черновик, этот черновик подробно разбирается, AI-конвейер генерирует и деплоит, а следующее обсуждение стартует уже от реального демо, а не от теоретического документа.",
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
      en: "The diagrams show how conversation context, demo state, and deployment traces are folded into an AI context ledger that drives each generation pass.",
      ru: "Эти схемы показывают, как контекст разговоров, состояние демо и deployment-трейсы складываются в AI-реестр контекста, который ведет каждый проход генерации.",
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
      en: "Calls, chats, comments, the current demo version, and deployment traces are all part of what the agent sees. The richer the record, the sharper the next generation pass.",
      ru: "Звонки, чаты, комментарии, текущая версия демо и deployment-трейсы входят в то, что видит агент. Чем богаче запись, тем точнее следующий проход генерации.",
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
      en: "This is why the process scales: the repo always exposes the latest explanation, the latest demo surface, the latest presentation, the latest screenplay, and the workflows that publish and verify them.",
      ru: "Именно поэтому процесс масштабируется: репозиторий всегда показывает последнее объяснение, последнюю демо-поверхность, последнюю презентацию, последний сценарий и workflow, которые публикуют и проверяют эти слои.",
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
    value: "06",
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
      en: "Internal tools, orchestration layers, ops panels, and business systems that become clearer only after operators walk through the work in detail.",
      ru: "Внутренние инструменты, оркестрационные слои, операционные панели и бизнес-системы, которые проясняются только после того, как операторы подробно проходят реальный рабочий процесс.",
    },
  },
  {
    title: {
      en: "Programs and automations",
      ru: "Программы и автоматизации",
    },
    body: {
      en: "CLI tools, service workers, data movers, parsers, agent workflows, and long-running automation stacks shaped by repeated discussion and demo evidence.",
      ru: "CLI-инструменты, service workers, переносчики данных, парсеры, агентные workflow и долгоживущие стеки автоматизации, которые формируются через повторяющееся обсуждение и доказательства из демо.",
    },
  },
  {
    title: {
      en: "Websites and apps",
      ru: "Сайты и приложения",
    },
    body: {
      en: "Marketing sites, product surfaces, dashboards, portals, and frontends that stay synchronized with the latest approved narrative and the latest deployable state.",
      ru: "Маркетинговые сайты, продуктовые поверхности, дашборды, порталы и фронтенды, синхронизированные с последним утвержденным нарративом и последним деплоимым состоянием.",
    },
  },
  {
    title: {
      en: "Delivery governance",
      ru: "Управление поставкой",
    },
    body: {
      en: "Versioned specifications, recorded decisions, linked demo context, deployment notes, verification workflows, and AI-ready context packs.",
      ru: "Версионируемые спецификации, записанные решения, связанный контекст демо, заметки по деплою, workflow верификации и AI-ready контекст-паки.",
    },
  },
];

export const endeavorTracks: EndeavorTrack[] = [
  {
    title: {
      en: "Public organization repository",
      ru: "Публичный репозиторий организации",
    },
    body: {
      en: "The canonical remote is public because the agency surface itself is part of the deliverable. Clients can inspect how the narrative, components, and build workflows evolve over time.",
      ru: "Канонический remote является публичным, потому что сама поверхность агентства является частью поставки. Клиенты могут видеть, как со временем развиваются нарратив, компоненты и workflow сборки.",
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
      en: "English and Russian are presented together so the same service explanation can be read, reviewed, and compared without switching to a separate translated version.",
      ru: "Английский и русский показываются вместе, чтобы одно и то же объяснение сервиса можно было читать, проверять и сопоставлять без переключения на отдельную переводную версию.",
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
      en: "The public site is built from reusable React blocks with isolated stories, so the explanation can evolve without turning the interface into an opaque one-off marketing page.",
      ru: "Публичный сайт собирается из переиспользуемых React-блоков с изолированными story, поэтому объяснение может развиваться, не превращая интерфейс в непрозрачную одноразовую маркетинговую страницу.",
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
      en: "This repo does not only describe the agency. It rebuilds the site, Storybook, PDF, and screenplay, then verifies that the public endpoints are still reachable.",
      ru: "Этот репозиторий не только описывает агентство. Он пересобирает сайт, Storybook, PDF и сценарий, а затем проверяет, что публичные endpoint'ы по-прежнему доступны.",
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
      en: "The root README explains the agency model, the delivery cadence, the canonical organization deployment, and the local verification commands that keep the repo honest.",
      ru: "Корневой README объясняет модель агентства, cadence поставки, канонический деплой организации и локальные команды верификации, которые удерживают репозиторий в честном состоянии.",
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
      en: "The endeavor brief states why the repository is public and why the site exists as a versioned delivery surface for the agency itself.",
      ru: "Документ о начинании фиксирует, почему репозиторий публичный и почему сам сайт существует как версионируемая поверхность поставки для агентства.",
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
      en: "This markdown file captures the step-by-step flow from draft specification through discussion, recorded context, generation, deployment, and repeated review.",
      ru: "Этот markdown-файл фиксирует пошаговый поток от черновой спецификации через обсуждение, записанный контекст, генерацию, деплой и повторяющееся ревью.",
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
      en: "The specification brief explains why the real spec is assembled from calls, chat, demo state, and deployment traces instead of being treated as a one-time intake form.",
      ru: "Документ о спецификации объясняет, почему реальная спецификация собирается из звонков, чатов, состояния демо и deployment-трейсов, а не рассматривается как одноразовая intake-форма.",
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
      en: "The use-case document shows that the same operating cadence applies to internal systems, automations, websites, application surfaces, and high-complexity technical products.",
      ru: "Документ с use case'ами показывает, что один и тот же рабочий cadence применим к внутренним системам, автоматизациям, сайтам, прикладным поверхностям и техническим продуктам высокой сложности.",
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
      en: "Verification brief",
      ru: "Документ о верификации",
    },
    body: {
      en: "Verification is documented in markdown and implemented in workflows. The repo states exactly what is linted, tested, built, staged, and monitored after publication.",
      ru: "Верификация задокументирована в markdown и реализована в workflow. Репозиторий прямо описывает, что именно lint'ится, тестируется, собирается, staging'уется и мониторится после публикации.",
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
        en: "live endpoint checks",
        ru: "проверки живых endpoint'ов",
      },
    ],
  },
  {
    title: {
      en: "Screenplay/manual asset",
      ru: "Сценарный/manual-артефакт",
    },
    body: {
      en: "The published Fountain markdown script demonstrates how the agency workflow looks in staged scenes that include Zoom, ChatGPT, VS Code, and iterative client review.",
      ru: "Опубликованный Fountain markdown-сценарий показывает, как выглядит рабочий процесс агентства в постановочных сценах с Zoom, ChatGPT, VS Code и итеративным клиентским ревью.",
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
      en: "The client sends a rough technical spec, backlog, or ambition statement. It is incomplete on purpose: enough to start, not enough to freeze.",
      ru: "Клиент присылает грубую техническую спецификацию, backlog или формулировку замысла. Она намеренно неполная: ее достаточно, чтобы стартовать, но недостаточно, чтобы зацементировать решение.",
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
      en: "Calls, video calls, chats, inline comments, issue threads, and screen shares reveal the actual requirements, constraints, objections, priorities, and operating reality.",
      ru: "Созвоны, видеозвонки, чаты, inline-комментарии, issue-треды и screen share раскрывают реальные требования, ограничения, возражения, приоритеты и операционную реальность.",
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
      en: "Meeting recordings, transcripts, chat exports, comments, deployment notes, and the current demo state are turned into a structured context pack for the generation agents.",
      ru: "Записи встреч, транскрипты, выгрузки чатов, комментарии, заметки о деплое и текущее состояние демо превращаются в структурированный контекст-пак для агентов генерации.",
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
      en: "The pipeline writes code, config, interfaces, tests, pages, and deployment assets, then ships a demo or staging version the client can actually inspect.",
      ru: "Конвейер пишет код, конфиг, интерфейсы, тесты, страницы и deployment-артефакты, после чего поставляет демо или staging-версию, которую клиент может реально посмотреть.",
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
      en: "The client reviews the demo, comments on behavior and fidelity, and the resulting conversation becomes the next context layer. The specification keeps sharpening with every loop.",
      ru: "Клиент смотрит демо, комментирует поведение и точность, а получившийся разговор становится следующим слоем контекста. Спецификация продолжает заостряться на каждом цикле.",
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
      en: "The first artifact is deliberately rough. The agency needs enough structure to start the dialogue, not a fake sense of completeness.",
      ru: "Первый артефакт намеренно остается грубым. Агентству нужна достаточная структура, чтобы начать диалог, а не фальшивое ощущение завершенности.",
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
      en: "Calls, Zoom sessions, chats, and inline comments expose what the client really means, where they disagree internally, and which edge cases matter enough to shape the build.",
      ru: "Созвоны, Zoom-сессии, чаты и inline-комментарии показывают, что клиент реально имеет в виду, где у него внутренние расхождения и какие edge case'ы достаточно важны, чтобы влиять на сборку.",
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
      en: "The agency folds transcripts, comments, demo evidence, and deployment notes into a structured pack that the generation agents can actually operate on.",
      ru: "Агентство складывает транскрипты, комментарии, доказательства из демо и deployment-заметки в структурированный пакет, с которым агенты генерации действительно могут работать.",
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
      en: "Code, content, tests, pages, and automation updates are generated against the context ledger and shipped as a real reviewable version.",
      ru: "Код, контент, тесты, страницы и обновления автоматизации генерируются по реестру контекста и выкатываются как реальная версия для ревью.",
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
      en: "Once the client reacts to the real build, the next iteration starts from evidence. The repo becomes a running memory rather than a pile of disconnected drafts.",
      ru: "Когда клиент реагирует на реальную сборку, следующая итерация начинается от фактов. Репозиторий становится бегущей памятью, а не кучей несвязанных черновиков.",
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
      en: "Long-form technical conversations reveal the why behind architectural choices and show where the client is hesitating.",
      ru: "Длинные технические разговоры раскрывают, почему выбирается та или иная архитектура, и показывают, где клиент сомневается.",
    },
    note: {
      en: "Used for decision extraction and tradeoff memory.",
      ru: "Используются для извлечения решений и памяти о компромиссах.",
    },
  },
  {
    title: {
      en: "Chat and comments",
      ru: "Чаты и комментарии",
    },
    body: {
      en: "Async clarifications, scope shifts, bug notes, and edge cases usually appear here before they are formalized anywhere else.",
      ru: "Асинхронные уточнения, сдвиги scope, заметки о багах и edge case'ы обычно появляются здесь раньше, чем где-либо формализуются.",
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
      ru: "Фактическое поведение текущей сборки тоже является частью контекста. AI-конвейер не рассуждает только по тексту.",
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
      en: "Logs, failures, infra notes, and environment-specific issues ground the next generation cycle in reality.",
      ru: "Логи, фейлы, infra-заметки и environment-specific проблемы приземляют следующий цикл генерации в реальность.",
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
      en: "What the client points to in a review often matters more than the original written spec. That narrative gets recorded too.",
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
      en: "The public React site is the front door for the endeavor. It turns repository evidence into a client-readable explanation of the agency model.",
      ru: "Публичный React-сайт является фронт-дверью этого начинания. Он превращает доказательства из репозитория в клиентопонятное объяснение модели агентства.",
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
      en: "Reusable bilingual components stay reviewable outside the full-page composition, which makes the site safer to extend and easier to critique.",
      ru: "Переиспользуемые двуязычные компоненты остаются пригодными для ревью вне полной композиции страницы, что делает сайт безопаснее для расширения и проще для критики.",
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
      en: "The Beamer deck packages the agency logic into a formal artifact for presentation, review, and distribution outside the browser.",
      ru: "Beamer-дек упаковывает логику агентства в формальный артефакт для презентации, ревью и распространения вне браузера.",
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
      en: "The Fountain markdown script demonstrates the service as a staged scenario with Zoom, ChatGPT, and VS Code interfaces inside the same delivery cadence.",
      ru: "Fountain markdown-сценарий показывает сервис как постановочный сценарий с интерфейсами Zoom, ChatGPT и VS Code внутри того же рабочего cadence.",
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
      en: "The repo includes explicit workflows for build, deploy, and live verification, so publication is an audited process rather than a manual side step.",
      ru: "Репозиторий включает явные workflow для сборки, деплоя и живой верификации, поэтому публикация является проверяемым процессом, а не ручным побочным шагом.",
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
  en: "Side-by-side bilingual narrative. Storybook-tested React components. GitHub Pages deploy. PDF and screenplay artifacts. Repository-sourced explanation of the agency cadence.",
  ru: "Двуязычный нарратив бок о бок. React-компоненты, проверенные в Storybook. Деплой на GitHub Pages. PDF- и screenplay-артефакты. Объяснение агентского cadence, собранное из репозитория.",
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
  en: "Recorded context is not archival overhead. It is the memory substrate that populates the AI generation context with real decisions, real objections, and the live state of the demo version.",
  ru: "Записанный контекст не является архивным шумом. Это слой памяти, который наполняет AI-контекст генерации реальными решениями, реальными возражениями и живым состоянием demo-версии.",
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
