import type { Blueprint, CadenceExplorerFrame, RepositorySource } from "./siteContent";

export const mockPanelSample = {
  english: "Draft in. Context recorded. Demo shipped.",
  russian: "Черновик на входе. Контекст записан. Демо поставлено.",
};

export const mockSectionHeadingSample = {
  eyebrow: {
    en: "Sample section",
    ru: "Пример секции",
  },
  title: {
    en: "Short bilingual copy should stay easy to scan.",
    ru: "Короткий двуязычный текст должен легко читаться.",
  },
  description: {
    en: "Use concise copy, visible sources, and side-by-side translation.",
    ru: "Используйте короткий текст, видимые источники и перевод бок о бок.",
  },
  sources: ["docs/samples.md", "src/content/mockSamples.ts"],
};

export const mockRepositorySourceSample: RepositorySource = {
  title: {
    en: "Sample pack",
    ru: "Пакет примеров",
  },
  body: {
    en: "A short sample pack shows inputs, outputs, and proof without reading the whole repo.",
    ru: "Короткий пакет примеров показывает входы, выходы и proof без чтения всего репозитория.",
  },
  filePath: "docs/samples.md",
  repoHref: "https://github.com/realagiorganization/blabla_agency/blob/master/docs/samples.md",
  liveHref: "https://realagiorganization.github.io/blabla_agency/",
  liveLabel: {
    en: "Published surface",
    ru: "Опубликованная поверхность",
  },
  proofs: [
    {
      en: "sample scope",
      ru: "пример scope",
    },
    {
      en: "sample outputs",
      ru: "пример выходов",
    },
    {
      en: "sample proof trail",
      ru: "пример proof-цепочки",
    },
  ],
};

export const mockCadenceFrames: CadenceExplorerFrame[] = [
  {
    label: "01",
    title: {
      en: "Draft",
      ru: "Черновик",
    },
    summary: {
      en: "Start with a rough brief.",
      ru: "Стартуйте с грубого брифа.",
    },
    contextAdds: [
      {
        en: "draft spec",
        ru: "черновик ТЗ",
      },
      {
        en: "open questions",
        ru: "открытые вопросы",
      },
    ],
    ships: [
      {
        en: "scope map",
        ru: "карта scope",
      },
      {
        en: "call agenda",
        ru: "повестка созвона",
      },
    ],
  },
  {
    label: "02",
    title: {
      en: "Review",
      ru: "Ревью",
    },
    summary: {
      en: "Use the live demo to decide the next pass.",
      ru: "Используйте живое демо, чтобы определить следующий проход.",
    },
    contextAdds: [
      {
        en: "review notes",
        ru: "заметки ревью",
      },
      {
        en: "demo delta",
        ru: "дельта демо",
      },
    ],
    ships: [
      {
        en: "next queue",
        ru: "следующая очередь",
      },
      {
        en: "updated spec",
        ru: "обновленная спецификация",
      },
    ],
  },
];

export const mockBlueprints: Blueprint[] = [
  {
    slug: "mock-site",
    label: "01",
    title: {
      en: "Site refresh",
      ru: "Обновление сайта",
    },
    scope: {
      en: "A short site refresh needs a tighter narrative, cleaner UI, and public proof.",
      ru: "Короткое обновление сайта требует более точного нарратива, чище UI и публичного proof.",
    },
    inputs: [
      {
        en: "review call",
        ru: "ревью-созвон",
      },
      {
        en: "copy comments",
        ru: "комментарии к тексту",
      },
    ],
    outputs: [
      {
        en: "updated site",
        ru: "обновленный сайт",
      },
      {
        en: "storybook samples",
        ru: "storybook-примеры",
      },
    ],
    proofs: [
      {
        en: "live Pages build",
        ru: "живой Pages-билд",
      },
      {
        en: "tested components",
        ru: "протестированные компоненты",
      },
    ],
  },
  {
    slug: "mock-automation",
    label: "02",
    title: {
      en: "Automation tune-up",
      ru: "Настройка автоматизации",
    },
    scope: {
      en: "A small automation pass turns manual notes into a repeatable flow.",
      ru: "Небольшой проход по автоматизации превращает ручные заметки в повторяемый поток.",
    },
    inputs: [
      {
        en: "error log",
        ru: "лог ошибок",
      },
      {
        en: "operator notes",
        ru: "заметки оператора",
      },
    ],
    outputs: [
      {
        en: "automation patch",
        ru: "патч автоматизации",
      },
      {
        en: "runbook",
        ru: "runbook",
      },
    ],
    proofs: [
      {
        en: "artifact log",
        ru: "лог артефактов",
      },
      {
        en: "verification run",
        ru: "прогон верификации",
      },
    ],
  },
];
