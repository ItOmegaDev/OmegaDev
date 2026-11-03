# Omega — Landing

A single-page portfolio for **Omega (`ItOmegaDev`)** — Software Engineer, Full-Stack & Infrastructure.
Light editorial layout: large serif typography, real project screenshots, no gimmicks.

**Live:** https://dev.0mega.pp.ua

---

## Why it looks like this

- **One screen, one action.** The hero says who I am and offers a single obvious next step — message on Telegram.
- **Proof before claims.** Two real interfaces (ControlPanel, OmegaOS) are shown as screenshots; the other two projects use typographic panels so the grid never looks broken.
- **Readable, not loud.** Serif headings, generous whitespace, one accent colour. The page should still look fine printed in black and white.
- **Fast by default.** One HTML file, one CSS file, one JS bundle, two JPEGs. No fonts, no analytics, no third-party scripts.

## Stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19, TypeScript, Vite |
| Styling | hand-written CSS with custom properties (light + dark) |
| Content | `src/content.ts` — bilingual (UA / EN) |
| Serving | nginx (unprivileged image) in Docker |
| Edge | Caddy — TLS, HSTS, CSP |

Everything is static: no backend, no database, no runtime configuration.

## Structure

```
src/
  content.ts     all copy, projects, services, links (UA + EN)
  App.tsx        page layout and sections
  styles.css     design tokens, layout, light/dark themes
public/
  work/*.jpg     project screenshots
  avatar.jpg     fallback portrait
Dockerfile       multi-stage: build with Node, serve with nginx-unprivileged
docker-compose.yml
deploy/          Caddy site block
```

## Features

- Bilingual UA / EN switch, remembered in `localStorage`.
- Light / dark theme toggle (defaults to light), also remembered.
- Scroll reveal via `IntersectionObserver`, disabled under `prefers-reduced-motion`.
- Responsive down to 360 px; navigation collapses on mobile.
- No external requests: fonts are system stacks, images are local.

## Local development

```bash
npm install
npm run dev      # http://127.0.0.1:5174
npm run build    # tsc --noEmit + vite build
npm run preview  # serve the production build
```

## Editing content

Everything lives in `src/content.ts`:

| Export | What it controls |
| --- | --- |
| `PROFILE` | name, role, intro, status, facts, email |
| `LINKS` | Telegram, email, GitHub, Fiverr, channel |
| `PROJECTS` | four project cards (summary, outcome, stack, screenshot) |
| `SERVICES` | price list and delivery times |
| `STACK` | technology groups |
| `ABOUT` | paragraphs and experience list |

To add a screenshot, drop a 1400×875 JPEG into `public/work/` and reference it as
`image: '/work/name.jpg'` in the project entry.

## Deployment

```bash
rsync -az -e ssh --exclude node_modules --exclude dist --exclude .git \
  ./ 0mega:~/apps/omegadev/

ssh 0mega 'cd ~/apps/omegadev && docker compose up -d --build'
```

The Caddy block lives in `deploy/Caddyfile.snippet` and must be appended to
`~/apps/caddy/Caddyfile` on the server, then:

```bash
ssh 0mega 'docker exec caddy caddy reload --config /etc/caddy/Caddyfile'
```

## Security notes

- The container runs as a non-root user, with `read_only`, `cap_drop: ALL` and
  `no-new-privileges`.
- No port is published to the host; Caddy reaches the container over the shared
  `web` Docker network.
- No secrets, no environment variables, no build-time tokens.
- All assets are same-origin, which keeps the CSP strict.

## License

All rights reserved. Contact the author before reusing the content or the design.
