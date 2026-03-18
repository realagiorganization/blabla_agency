export type Bilingual = {
  en: string;
  ru: string;
};

export type Metric = {
  label: Bilingual;
  value: string;
};

export type Capability = {
  title: Bilingual;
  body: Bilingual;
};

export type CadenceStep = {
  label: string;
  title: Bilingual;
  summary: Bilingual;
  outputs: Bilingual[];
};

export type ContextSource = {
  title: Bilingual;
  body: Bilingual;
  note: Bilingual;
};

export type Deliverable = {
  title: Bilingual;
  body: Bilingual;
};

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

export const metrics: Metric[] = [
  {
    label: {
      en: "Canonical draft in motion",
      ru: "Канонический черновик в движении",
    },
    value: "01",
  },
  {
    label: {
      en: "Recorded context channels",
      ru: "Каналы записанного контекста",
    },
    value: "05",
  },
  {
    label: {
      en: "Deploy-feedback loops",
      ru: "Циклы деплоя и фидбека",
    },
    value: "∞",
  },
  {
    label: {
      en: "Client-visible artifacts",
      ru: "Артефакты, видимые клиенту",
    },
    value: "24/7",
  },
];

export const capabilities: Capability[] = [
  {
    title: {
      en: "Custom systems",
      ru: "Кастомные системы",
    },
    body: {
      en: "Internal tools, orchestration layers, ops panels, and business systems driven by evolving real-world requirements.",
      ru: "Внутренние инструменты, оркестрационные слои, операционные панели и бизнес-системы, которые развиваются вместе с реальными требованиями.",
    },
  },
  {
    title: {
      en: "Programs and automations",
      ru: "Программы и автоматизации",
    },
    body: {
      en: "CLI tools, service workers, data movers, parsers, agent workflows, and long-running automation stacks.",
      ru: "CLI-инструменты, service workers, переносчики данных, парсеры, агентные workflow и долгоживущие стеки автоматизации.",
    },
  },
  {
    title: {
      en: "Websites and apps",
      ru: "Сайты и приложения",
    },
    body: {
      en: "Marketing sites, product surfaces, dashboards, portals, and frontends that stay synchronized with the latest demo state.",
      ru: "Маркетинговые сайты, продуктовые поверхности, дашборды, порталы и фронтенды, синхронизированные с актуальным состоянием демо.",
    },
  },
  {
    title: {
      en: "Delivery governance",
      ru: "Управление поставкой",
    },
    body: {
      en: "Versioned specifications, captured decisions, linked demo context, deployment notes, and AI-ready context packs.",
      ru: "Версионируемые спецификации, зафиксированные решения, связанный контекст демо, заметки по деплою и AI-ready контекст-паки.",
    },
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
      en: "Deployable demo versions",
      ru: "Деплоимые demo-версии",
    },
    body: {
      en: "The client always sees something concrete: staging URLs, runnable services, or reviewable UI surfaces.",
      ru: "Клиент всегда видит что-то конкретное: staging URL, запускаемые сервисы или reviewable UI-поверхности.",
    },
  },
  {
    title: {
      en: "Versioned specification updates",
      ru: "Версионируемые обновления спецификации",
    },
    body: {
      en: "The specification is maintained as a living artifact shaped by the latest discussion and the latest shipped state.",
      ru: "Спецификация поддерживается как живой артефакт, сформированный последним обсуждением и последним поставленным состоянием.",
    },
  },
  {
    title: {
      en: "Context packs for the next generation pass",
      ru: "Контекст-паки для следующего прохода генерации",
    },
    body: {
      en: "Every round leaves behind a richer machine-readable context set for the next AI agent run.",
      ru: "Каждый раунд оставляет после себя более богатый machine-readable набор контекста для следующего запуска AI-агента.",
    },
  },
  {
    title: {
      en: "Public-facing communication layers",
      ru: "Публичные коммуникационные слои",
    },
    body: {
      en: "The same cadence can output websites, technical explainers, demos, product copy, internal tooling, or application shells.",
      ru: "Тот же cadence может выпускать сайты, технические объясняющие материалы, демо, продуктовый копирайтинг, внутренние инструменты или каркасы приложений.",
    },
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
