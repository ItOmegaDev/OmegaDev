export type Lang = 'uk' | 'en';
export type Localized = Record<Lang, string>;

export interface Project {
  id: string;
  name: string;
  category: Localized;
  year: string;
  summary: Localized;
  outcome: Localized;
  stack: string[];
  image?: string;
  href?: string;
}

export interface Service {
  id: string;
  name: Localized;
  description: Localized;
  price: number;
  monthly?: boolean;
  term: Localized;
}

export interface Link {
  id: string;
  label: Localized;
  url: string;
  handle: string;
  primary?: boolean;
}

export const PROFILE = {
  name: 'Omega',
  handle: 'ItOmegaDev',
  email: 'ome9adev@gmail.com',
  role: {
    uk: 'Software Engineer — Full-Stack & Infrastructure',
    en: 'Software Engineer — Full-Stack & Infrastructure',
  },
  intro: {
    uk: 'Проєктую, розробляю та розгортаю вебзастосунки повного циклу: від інтерфейсу до сервера, бази й сертифікатів. Люблю системи, які передбачувано працюють, і код, який легко читати через пів року.',
    en: 'I design, build and deploy full-cycle web applications: from the interface down to the server, the database and the certificates. I like systems that behave predictably and code that is still readable six months later.',
  },
  status: {
    uk: 'Відкритий до нових проєктів',
    en: 'Open to new projects',
  },
  location: {
    uk: 'Україна · віддалено',
    en: 'Ukraine · remote',
  },
  facts: [
    {
      label: { uk: 'Що роблю', en: 'What I do' },
      value: {
        uk: 'Вебзастосунки, REST API, серверна інфраструктура',
        en: 'Web applications, REST APIs, server infrastructure',
      },
    },
    {
      label: { uk: 'Стек', en: 'Stack' },
      value: {
        uk: 'React, Next.js, Node.js, Go, PostgreSQL, MongoDB',
        en: 'React, Next.js, Node.js, Go, PostgreSQL, MongoDB',
      },
    },
    {
      label: { uk: 'Інфраструктура', en: 'Infrastructure' },
      value: {
        uk: 'Linux, Docker, Nginx, Caddy, TLS, бекапи',
        en: 'Linux, Docker, Nginx, Caddy, TLS, backups',
      },
    },
  ],
};

export const LINKS: Link[] = [
  {
    id: 'telegram',
    label: { uk: 'Telegram', en: 'Telegram' },
    url: 'https://t.me/ItOmega',
    handle: '@ItOmega',
    primary: true,
  },
  {
    id: 'email',
    label: { uk: 'Email', en: 'Email' },
    url: 'mailto:ome9adev@gmail.com',
    handle: 'ome9adev@gmail.com',
  },
  {
    id: 'github',
    label: { uk: 'GitHub', en: 'GitHub' },
    url: 'https://github.com/ItOmegaDev',
    handle: 'ItOmegaDev',
  },
  {
    id: 'fiverr',
    label: { uk: 'Fiverr', en: 'Fiverr' },
    url: 'https://www.fiverr.com/s/d0pRVwa',
    handle: 'Order a gig',
  },
  {
    id: 'channel',
    label: { uk: 'Канал', en: 'Channel' },
    url: 'https://t.me/DevOmegaTgk',
    handle: '@DevOmegaTgk',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'controlpanel',
    name: 'ControlPanel',
    category: { uk: 'SaaS · панель хостингу', en: 'SaaS · hosting panel' },
    year: '2026',
    summary: {
      uk: 'Панель керування ігровими серверами: ноди, черги задач, маркетплейс eggs, білінг і мультитенантність. Швидкий пошук, командна палітра Cmd+K, live-метрики CPU та RAM по кожному серверу.',
      en: 'Game server control panel: nodes, task queues, an eggs marketplace, billing and multi-tenancy. Fast search, a Cmd+K palette and live CPU/RAM metrics per server.',
    },
    outcome: {
      uk: 'Замінює ручне керування контейнерами на один інтерфейс з аудитом дій.',
      en: 'Replaces manual container management with a single audited interface.',
    },
    stack: ['React 19', 'TypeScript', 'Tailwind v4', 'Express', 'Docker'],
    image: '/work/controlpanel.jpg',
    href: 'https://github.com/ItOmegaDev/ControlPanel',
  },
  {
    id: 'omegaos',
    name: 'OmegaOS',
    category: { uk: 'Експеримент · браузерна ОС', en: 'Experiment · browser OS' },
    year: '2026',
    summary: {
      uk: 'Операційна система в браузері на чистому HTML, CSS і JavaScript: віконний менеджер, термінал із віртуальною файловою системою, редактор, браузер і генеративна музика на Web Audio API.',
      en: 'An operating system in the browser built with plain HTML, CSS and JavaScript: a window manager, a terminal with a virtual file system, an editor, a browser and generative music on the Web Audio API.',
    },
    outcome: {
      uk: 'Показує розуміння браузерних API, стану та архітектури без жодної бібліотеки.',
      en: 'Demonstrates browser APIs, state and architecture without a single library.',
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'Web Audio', 'localStorage'],
    image: '/work/omegaos.jpg',
    href: 'https://github.com/ItOmegaDev/OmegaOS',
  },
  {
    id: 'edgeproxy',
    name: 'EdgeProxy',
    category: { uk: 'Мережі · проксі', en: 'Networking · proxy' },
    year: '2026',
    summary: {
      uk: 'Edge-проксі на Go з власним фреймованим протоколом тунелю (SYN/DATA/FIN/PING), TLS-термінацією, ACME-сертифікатами та контролем навантаження. Дашборд на React + WebSocket.',
      en: 'A Go edge proxy with a custom framed tunnel protocol (SYN/DATA/FIN/PING), TLS termination, ACME certificates and load control. The dashboard runs on React + WebSocket.',
    },
    outcome: {
      uk: 'Трафік іде через один публічний вхід, а внутрішні сервіси не дивляться в інтернет.',
      en: 'Traffic goes through a single public entry while internal services stay off the internet.',
    },
    stack: ['Go', 'Node.js', 'React', 'PostgreSQL', 'Docker'],
    href: 'https://github.com/ItOmegaDev/EdgeProxy',
  },
  {
    id: 'discordauth',
    name: 'DiscordAuth',
    category: { uk: 'Java-плагіни', en: 'Java plugins' },
    year: '2025—2026',
    summary: {
      uk: 'Velocity-плагін, що зв’язує Minecraft-акаунт із Discord і вимагає пароль до входу у світ. Паролі в BCrypt, ліміти спроб, перевірка в limbo-світі й перекидання без повторного логіну.',
      en: 'A Velocity plugin that links a Minecraft account to Discord and requires a password before entering the world. BCrypt hashes, attempt limits, limbo verification and a transfer flow that avoids re-login.',
    },
    outcome: {
      uk: 'Закриває вхід на сервер до авторизації — без нього в offline-режимі будь-хто міг би зайти під чужим ніком.',
      en: 'Blocks access before authorization — without it, offline mode lets anyone join under any nickname.',
    },
    stack: ['Java 25', 'Velocity', 'JDA', 'BCrypt', 'PlaceholderAPI'],
    href: 'https://github.com/ItOmegaDev/discord-auth',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'page',
    name: { uk: 'Проста сторінка', en: 'Simple page' },
    description: {
      uk: 'Односторінковий сайт: структура, верстка, адаптивність, базова SEO-розмітка.',
      en: 'A single-page site: structure, layout, responsiveness, basic SEO markup.',
    },
    price: 30,
    term: { uk: '1—2 дні', en: '1—2 days' },
  },
  {
    id: 'card',
    name: { uk: 'Візитка або портфоліо', en: 'Business card or portfolio' },
    description: {
      uk: 'Кілька розділів, контакти, форма зв’язку, деплой на ваш домен.',
      en: 'Several sections, contacts, a contact form, deployment to your domain.',
    },
    price: 50,
    term: { uk: '2—3 дні', en: '2—3 days' },
  },
  {
    id: 'landing',
    name: { uk: 'Лендинг', en: 'Landing page' },
    description: {
      uk: 'Промо-сторінка з логікою переконання: офер, переваги, заклики до дії.',
      en: 'A promotional page built to persuade: offer, benefits, calls to action.',
    },
    price: 60,
    term: { uk: '2—4 дні', en: '2—4 days' },
  },
  {
    id: 'api',
    name: { uk: 'REST API та база', en: 'REST API and database' },
    description: {
      uk: 'Серверна логіка, схема даних, авторизація, валідація, документація.',
      en: 'Server logic, data schema, authorization, validation, documentation.',
    },
    price: 90,
    term: { uk: '4—7 днів', en: '4—7 days' },
  },
  {
    id: 'app',
    name: { uk: 'Вебзастосунок', en: 'Web application' },
    description: {
      uk: 'Кастомний функціонал: кабінети, ролі, адмін-панель, інтеграції з API.',
      en: 'Custom functionality: accounts, roles, an admin panel, API integrations.',
    },
    price: 150,
    term: { uk: '7—14 днів', en: '7—14 days' },
  },
  {
    id: 'deploy',
    name: { uk: 'Деплой і сервер', en: 'Deployment and server' },
    description: {
      uk: 'Docker, Nginx або Caddy, TLS-сертифікат, домен, автоперезапуск, діагностика.',
      en: 'Docker, Nginx or Caddy, TLS certificate, domain, auto-restart, diagnostics.',
    },
    price: 40,
    term: { uk: '1—2 дні', en: '1—2 days' },
  },
  {
    id: 'fix',
    name: { uk: 'Правки та виправлення', en: 'Revisions and fixes' },
    description: {
      uk: 'Точкові зміни в готовому сайті, виправлення верстки або логіки.',
      en: 'Targeted changes to an existing site, layout or logic fixes.',
    },
    price: 5,
    term: { uk: 'від 1 год', en: 'from 1 hour' },
  },
];

export const STACK = [
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vite'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express', 'Go', 'REST API', 'JWT'],
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    group: 'Infrastructure',
    items: ['Linux', 'Docker', 'Nginx', 'Caddy', 'TLS', 'SSH'],
  },
];

export const ABOUT = {
  paragraphs: [
    {
      uk: 'Починав із власних проєктів: Minecraft-сервер, приватна хмара на Nextcloud, скрипти для автоматизації. Далі — вебзастосунки на замовлення: від лендінгу до повноцінної панелі керування з бекендом і базою.',
      en: 'I started with my own projects: a Minecraft server, a private Nextcloud cloud, automation scripts. Then moved to client work: from landing pages to a full management panel with a backend and a database.',
    },
    {
      uk: 'Працюю так: спочатку зрозуміти задачу і обмеження, потім найпростіше рішення, яке витримає реальне навантаження. Розгортаю сам — тому відповідаю і за код, і за те, що сайт відкривається.',
      en: 'How I work: understand the problem and its constraints first, then pick the simplest solution that survives real load. I deploy it myself, so I am responsible both for the code and for the site actually loading.',
    },
  ],
  experience: [
    {
      title: { uk: 'Omega Web Workshop', en: 'Omega Web Workshop' },
      text: {
        uk: 'Кастомні сайти та серверні REST API під замовлення.',
        en: 'Custom websites and backend REST APIs for clients.',
      },
    },
    {
      title: { uk: 'Self-Hosted Cloud', en: 'Self-Hosted Cloud' },
      text: {
        uk: 'Приватна хмара на Nextcloud: зберігання, доступи, бекапи, TLS.',
        en: 'Private Nextcloud cloud: storage, access, backups, TLS.',
      },
    },
    {
      title: { uk: 'OmegaSMP', en: 'OmegaSMP' },
      text: {
        uk: 'Публічна Minecraft-мережа: проксі, бекенди, плагіни, експлуатація.',
        en: 'A public Minecraft network: proxy, backends, plugins, operations.',
      },
    },
  ],
};
