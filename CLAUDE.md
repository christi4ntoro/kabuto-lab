# Kabuto Lab — Project Reference

## 1. Project Overview

**Kabuto Lab** is a portfolio and product/service marketplace focused on immersive experience design. The site showcases digital products, courses, research, and long-form writing.

Key site sections:
- **Home** — animated hero, product scroll, services, transmissions preview, credential strip, about strip
- **Work** (`/work`) — filtered view of Transmissions showing only posts tagged `work`
- **Systems** (`/systems`) — catalog of free and paid digital products
- **Transmissions** (`/transmissions`) — all long-form content with tag filtering
- **Tutorials** (`/tutorials`) — YouTube-linked tutorial series
- **Connect** (`/connect`) — contact page
- **About / Privacy** — static informational pages

Old routes (`/blog`, `/products`, `/contact`) redirect permanently via `next.config.ts`.

---

## 2. Tech Stack

| Tool | Version |
|---|---|
| Next.js | ^16.0.7 |
| React | ^19.2.1 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 |
| @tailwindcss/typography | latest |
| Framer Motion | ^12.23.24 |
| Lucide React | ^0.552.0 |
| gray-matter | ^4.0.3 |
| remark | ^15.0.1 |
| remark-html | ^16.0.1 |
| @mdx-js/mdx | installed |
| @mdx-js/react | installed |
| ESLint | ^9 |
| PostCSS | via `@tailwindcss/postcss` ^4 |

Both `dev` and `build` use `--webpack` explicitly (not Turbopack).

---

## 3. Folder Structure
```
kabuto-lab/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/
│   ├── connect/
│   ├── privacy/
│   ├── systems/[slug]/
│   ├── transmissions/[slug]/
│   ├── tutorials/[slug]/
│   ├── work/
│   └── (legacy redirect folders: blog/, products/, contact/)
│
├── components/
│   ├── home/         # Hero, Services, BlogSection, AboutStrip, SignalStrip, ProductScrollSection
│   ├── systems/      # SystemsClient
│   ├── tutorials/    # CustomVideoPlayer
│   ├── transmissions/ # TransmissionsClient
│   ├── shared/       # Header, Footer (nav + social only, no newsletter form), GoogleAnalytics, CookieConsent
│   └── ui/           # ProductCard, TutorialCard, YouTube, BinauralDiagram, TrackList
│
├── lib/
│   ├── blog.ts
│   ├── productUtils.ts
│   ├── tutorials.ts
│   ├── services.tsx
│   ├── cta.ts
│   └── content.ts        # All UI strings — source of truth
│
├── content/
│   ├── blog/         # *.mdx files (lang: en)
│   ├── products/     # avatar-lab.md (published: true) + 9 scaffold placeholders (published: false)
│   └── tutorials/    # *.md
│
├── public/
│   ├── shared/
│   ├── hero/
│   ├── products/     # avatar-lab.jpg MISSING — needed
│   ├── blog/
│   ├── services/
│   └── tutorials/
│
├── next.config.ts
├── tailwindcss.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── eslint.config.mjs
```

---

## 4. Patterns and Conventions

### File Naming
- **Components**: PascalCase
- **Route directories**: kebab-case
- **Markdown files**: kebab-case
- **Lib/utilities**: camelCase

### Component Patterns
- `'use client'` only when browser APIs or state needed
- Server Components default for data-fetching pages
- TypeScript throughout — no `any` in component props
- All imports use `@/` alias — never relative cross-directory

### Styling — CSS Variables (critical)
All colors use CSS custom properties. Never hardcode color values.

| Variable | Use |
|---|---|
| `--background` | Page and section backgrounds |
| `--foreground` | Body and heading text |
| `--surface` | Card and panel backgrounds |
| `--surface-alt` | Hover states, secondary surfaces |
| `--border` | All border colors |
| `--muted` | Secondary/muted text |

**Inverted button pattern:** `bg-[--foreground] text-[--background]` — never `bg-white text-black`

**Opacity overlays** (`bg-white/10`, `bg-black/50`) are intentional dark-theme design elements in specific contexts (hero, blog cards) — do not convert to tokens.

**Accent colors** (`text-blue-*`, `bg-blue-*`) are not yet tokenized — leave as-is until Sprint 11 defines `--accent`.

**Known deferred CSS violations:**
- Hero gradient blobs use `bg-gradient-to-br` with hardcoded colors — dark-only, deferred to design sprint
- ~25 `text-blue-*` / `bg-blue-*` accent instances — not yet tokenized, deferred to Sprint 11 (`--accent`)
- `BinauralDiagram` uses inline `#4ade80` — deferred to Sprint 11

**Light mode:** Dark mode is current production theme. Light mode will be enabled by editing CSS variable values in `globals.css` only — no component changes should ever be needed.

### Typography
- `@tailwindcss/typography` is installed and registered
- `.prose` CSS variable overrides are defined in `globals.css`
- Prose modifier classes use design tokens: `prose-headings:text-[--foreground]`, `prose-p:text-[--muted]`, etc.
- Fonts via Next.js font optimization:
  - `--font-geist-sans`
  - `--font-jetbrains-mono`
  - `--font-newsreader-serif`

### MDX Pipeline
- Transmissions articles: `@mdx-js/mdx` evaluate + `react-dom/server` renderToStaticMarkup
- Components map passed via `useMDXComponents({})` — registered in `components/mdx-components.tsx`
- Available globally in MDX (no import needed): `<YouTube>`, `<BinauralDiagram>`, `<TrackList>`
- Tutorials: separate remark/remark-html pipeline — video driven by frontmatter fields, no MDX needed
- **Do NOT add `next-mdx-remote`** — existing `@mdx-js/mdx` pipeline works. `@next/mdx` has been intentionally removed.

### Custom MDX Components

**`<BinauralDiagram>`**
Props: `leftHz` (number), `rightHz` (number), `resultHz` (number), `waveLabel` (string)
Renders: left ear → right ear → perceived frequency flow diagram. Green accent via inline style (#4ade80) until `--accent` token exists.

**`<TrackList>`**
Props: `tracks` (array of `{ number, title, bpm, tag }`)
Tag values: `"abstract"` | `"feeling"` | `"hybrid"`
Renders: styled table with per-tag badge tints (abstract=indigo, feeling=pink, hybrid=green) via inline styles.

### UI Strings
- **All UI strings live in `lib/content.ts`** — never hardcode user-facing strings in components
- `content` is a flat object with 19 sections. Use directly: `content.section.key`
- `navLinks` is exported separately for Header/Footer

### Content Management
All content in `content/` as Markdown/MDX with YAML frontmatter, parsed via `gray-matter`.

**Blog frontmatter:** `title`, `date`, `excerpt`, `image`, `published`, `tags[]`, `lang`

**Product frontmatter:** `name`, `price`, `category`, `type`, `highlighted`, `published`, `benefit`, `description`, `image`, `buyUrl`, `features[]`, `relatedProducts[]`

**Tutorial frontmatter:** `title`, `description`, `duration`, `lessons`, `level`, `category`, `tags[]`, `thumbnail`, `youtubePlaylistId`, `videos[]`, `featured`, `published`, `relatedProducts[]`

### Tag System
| Tag | Use |
|---|---|
| `work` | Case studies — surfaces in `/work` |
| `research` | HCI research, academic writing |
| `builds` | Build logs, prototypes |
| `galea` | Music project posts |
| `process` | Workflow, methodology |

### Article Layout
- Cover image: full viewport width, `max-height: 480px`, `object-cover`
- Header column: `max-w-[65ch] mx-auto px-4 md:px-0`
- Title: `text-3xl md:text-5xl font-bold break-words`
- Tag badges: per-tag tint (work=indigo, research=cyan, builds=green, galea=amber, process=slate) via inline styles
- Prose body: `max-w-[65ch]`, `prose-p:text-base md:prose-p:text-xl`
- YouTube embeds: `w-full aspect-video my-8 rounded-lg overflow-hidden`

### Mobile First
- `min-width` media queries only — never `max-width`
- Mobile is base, desktop is enhancement
- Next.js `<Image sizes>` attributes use max-width per spec — this is correct, do not change

---

## 5. Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID |

---

## 6. NPM Scripts

```json
"dev":   "next dev --webpack"
"build": "next build --webpack"
"start": "next start"
"lint":  "eslint"
```

---

## 7. Route Structure

| Route | Description |
|---|---|
| `/` | Home |
| `/work` | Transmissions filtered by `work` tag |
| `/systems` | Product catalog |
| `/systems/[slug]` | Individual product page |
| `/transmissions` | All long-form content |
| `/transmissions/[slug]` | Individual article |
| `/tutorials` | Tutorial series |
| `/tutorials/[slug]` | Individual tutorial |
| `/connect` | Contact |
| `/about` | About |
| `/privacy` | Privacy policy |

Redirects via `next.config.ts`: `/blog` → `/transmissions`, `/products` → `/systems`, `/contact` → `/connect`

---

## 8. Language

Site is English only. No i18n planned.
