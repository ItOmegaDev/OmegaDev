import { useEffect, useState } from 'react';
import {
  ABOUT,
  LINKS,
  PROFILE,
  PROJECTS,
  SERVICES,
  STACK,
  type Lang,
  type Localized,
} from './content';

type Theme = 'light' | 'dark';

const UI = {
  uk: {
    navWork: 'Роботи',
    navServices: 'Послуги',
    navAbout: 'Про мене',
    navContact: 'Контакти',
    ctaPrimary: 'Написати в Telegram',
    ctaSecondary: 'Дивитись роботи',
    kickerWork: '01 — Роботи',
    titleWork: 'Обрані проєкти',
    noteWork:
      'Чотири проєкти, які найкраще показують підхід: від браузерної ОС до мережевого проксі.',
    moreWork: 'Усі репозиторії на GitHub',
    kickerServices: '02 — Послуги',
    titleServices: 'Що я можу зробити',
    noteServices:
      'Фіксована ціна за проєкт; точний розрахунок — після обговорення ТЗ. Передоплата 50%, повний вихідний код і 3 дні безоплатних правок після здачі.',
    kickerAbout: '03 — Про мене',
    titleAbout: 'Як я працюю',
    kickerContact: '04 — Контакти',
    contactTitle: 'Давай зробимо щось робоче.',
    contactNote: 'Відповідаю протягом дня. Найшвидше — у Telegram.',
    stackLabel: 'Технології',
    expLabel: 'Досвід',
    from: 'від',
    perMonth: '/міс',
    projectLink: 'Код на GitHub',
    built: 'Зроблено на React · Розгорнуто в Docker',
    langLabel: 'Мова',
    themeLabel: 'Тема',
  },
  en: {
    navWork: 'Work',
    navServices: 'Services',
    navAbout: 'About',
    navContact: 'Contact',
    ctaPrimary: 'Message on Telegram',
    ctaSecondary: 'See the work',
    kickerWork: '01 — Work',
    titleWork: 'Selected projects',
    noteWork:
      'Four projects that show the approach best: from a browser OS to a network proxy.',
    moreWork: 'All repositories on GitHub',
    kickerServices: '02 — Services',
    titleServices: 'What I can do',
    noteServices:
      'Fixed price per project; the exact quote follows a scope discussion. 50% upfront, full source code and 3 days of free revisions after delivery.',
    kickerAbout: '03 — About',
    titleAbout: 'How I work',
    kickerContact: '04 — Contact',
    contactTitle: "Let's build something that works.",
    contactNote: 'I reply within a day. Telegram is the fastest way.',
    stackLabel: 'Stack',
    expLabel: 'Experience',
    from: 'from',
    perMonth: '/mo',
    projectLink: 'Source on GitHub',
    built: 'Built with React · Deployed with Docker',
    langLabel: 'Language',
    themeLabel: 'Theme',
  },
} as const;

function readStored<T extends string>(
  key: string,
  allowed: readonly T[],
  fallback: T,
): T {
  try {
    const value = window.localStorage.getItem(key);
    if (value && (allowed as readonly string[]).includes(value)) return value as T;
  } catch {
    // storage may be blocked
  }
  return fallback;
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() =>
    readStored<Lang>('omega.lang', ['uk', 'en'], 'uk'),
  );
  const [theme, setTheme] = useState<Theme>(() =>
    readStored<Theme>('omega.theme', ['light', 'dark'], 'light'),
  );

  const t = (value: Localized) => value[lang] ?? value.uk;
  const ui = UI[lang];
  const telegram = LINKS.find((link) => link.id === 'telegram');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem('omega.lang', lang);
      window.localStorage.setItem('omega.theme', theme);
    } catch {
      // ignore
    }
  }, [lang, theme]);

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [lang]);

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">
          <span className="mark">Ω</span>
          <span>Omega</span>
        </a>

        <nav className="nav-links" aria-label="Main">
          <a href="#work">{ui.navWork}</a>
          <a href="#services">{ui.navServices}</a>
          <a href="#about">{ui.navAbout}</a>
          <a href="#contact">{ui.navContact}</a>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            title={ui.themeLabel}
            aria-label={`${ui.themeLabel}: ${theme}`}
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>
          <button
            type="button"
            className="icon-btn icon-btn--text"
            onClick={() => setLang(lang === 'uk' ? 'en' : 'uk')}
            title={ui.langLabel}
            aria-label={ui.langLabel}
          >
            {lang.toUpperCase()}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <p className="pill">
            <span className="dot" aria-hidden="true" />
            {t(PROFILE.status)} · {t(PROFILE.location)}
          </p>

          <h1 className="hero-title">{PROFILE.name}</h1>
          <p className="hero-role">{t(PROFILE.role)}</p>
          <p className="hero-lede">{t(PROFILE.intro)}</p>

          <div className="hero-actions">
            <a
              className="btn btn--solid"
              href={telegram?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ui.ctaPrimary}
              <span aria-hidden="true">↗</span>
            </a>
            <a className="btn btn--ghost" href="#work">
              {ui.ctaSecondary}
            </a>
          </div>

          <dl className="facts">
            {PROFILE.facts.map((fact) => (
              <div className="fact" key={fact.label.uk}>
                <dt>{t(fact.label)}</dt>
                <dd>{t(fact.value)}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="work" className="section">
          <header className="section-head" data-reveal>
            <p className="kicker">{ui.kickerWork}</p>
            <h2>{ui.titleWork}</h2>
            <p className="note">{ui.noteWork}</p>
          </header>

          <div className="works">
            {PROJECTS.map((project, index) => (
              <article
                className={`work${index % 2 === 1 ? ' work--flip' : ''}`}
                key={project.id}
                data-reveal
              >
                <div className="work-media">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} interface`}
                      width={1400}
                      height={875}
                      decoding="async"
                    />
                  ) : (
                    <div className="work-fallback" aria-hidden="true">
                      <span className="work-letter">
                        {project.name.slice(0, 1)}
                      </span>
                      <span className="work-stack">
                        {project.stack.slice(0, 3).join(' · ')}
                      </span>
                    </div>
                  )}
                </div>

                <div className="work-body">
                  <p className="work-meta">
                    {t(project.category)}
                    <span className="sep">·</span>
                    {project.year}
                  </p>
                  <h3>{project.name}</h3>
                  <p className="work-text">{t(project.summary)}</p>
                  <p className="work-outcome">{t(project.outcome)}</p>
                  <ul className="chips">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {project.href ? (
                    <a
                      className="work-link"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ui.projectLink}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <a
            className="more-link"
            href="https://github.com/ItOmegaDev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            {ui.moreWork}
            <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section id="services" className="section section--split">
          <header className="aside" data-reveal>
            <p className="kicker">{ui.kickerServices}</p>
            <h2>{ui.titleServices}</h2>
            <p className="note">{ui.noteServices}</p>
          </header>

          <div className="services" data-reveal>
            {SERVICES.map((service) => (
              <div className="service" key={service.id}>
                <div className="service-main">
                  <h3>{t(service.name)}</h3>
                  <p>{t(service.description)}</p>
                </div>
                <p className="service-term">{t(service.term)}</p>
                <p className="service-price">
                  {ui.from} ${service.price}
                  {service.monthly ? ui.perMonth : ''}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section section--split">
          <header className="aside" data-reveal>
            <p className="kicker">{ui.kickerAbout}</p>
            <h2>{ui.titleAbout}</h2>
          </header>

          <div className="about" data-reveal>
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph.uk}>{t(paragraph)}</p>
            ))}

            <p className="label">{ui.stackLabel}</p>
            <div className="stack">
              {STACK.map((group) => (
                <div className="stack-group" key={group.group}>
                  <p className="stack-name">{group.group}</p>
                  <ul className="chips">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="label">{ui.expLabel}</p>
            <ul className="experience">
              {ABOUT.experience.map((item) => (
                <li key={item.title.uk}>
                  <strong>{t(item.title)}</strong>
                  <span>{t(item.text)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section contact" data-reveal>
          <p className="kicker">{ui.kickerContact}</p>
          <h2 className="contact-title">{ui.contactTitle}</h2>
          <p className="note">{ui.contactNote}</p>

          <a className="contact-mail" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
            <span aria-hidden="true">↗</span>
          </a>

          <div className="contact-links">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-label">{t(link.label)}</span>
                <span className="contact-handle">{link.handle}</span>
                <span className="contact-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {PROFILE.name}
        </span>
        <span className="footer-sep">·</span>
        <span>{ui.built}</span>
      </footer>
    </>
  );
}
