# Kabuto Lab — Project Reference

## 1. Project Overview

**Kabuto Lab** is a portfolio and product/service marketplace focused on immersive experience design, particularly the Narrative Immersion Protocol (NIP). The site showcases digital products, courses, eBooks, templates, consulting services, and research related to immersive experiences (VR, AR, spatial computing, and conversational AI).

Key site sections:
- **Home** — animated hero, product scroll, services, transmissions preview, credential strip, about strip
- **Work** (`/work`) — filtered view of Transmissions showing only posts tagged `work`
- **Systems** (`/systems`) — catalog of free and paid digital products (replaces `/products`)
- **Transmissions** (`/transmissions`) — all long-form content with tag filtering (replaces `/blog`)
- **Tutorials** (`/tutorials`) — YouTube-linked tutorial series
- **Connect** (`/connect`) — contact page (replaces `/contact`)
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
| Framer Motion | ^12.23.24 |
| Lucide React | ^0.552.0 |
| gray-matter | ^4.0.3 |
| remark | ^15.0.1 |
| remark-html | ^16.0.1 |
| ESLint | ^9 |
| PostCSS | via `@tailwindcss/postcss` ^4 |

Both `dev` and `build` use `--webpack` explicitly (not Turbopack).

---

## 3. Folder Structure

```
kabuto-lab/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (fonts, Header, Footer, GA, Cookie)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles + Tailwind base
│   ├── blog/[slug]/            # Dynamic blog post pages
│   ├── products/[slug]/        # Dynamic product pages
│   ├── tutorials/[slug]/       # Dynamic tutorial pages
│   ├── about/
│   ├── contact/
│   └── privacy/
│
├── components/
│   ├── home/                   # Homepage sections (Hero, Services, CTASection, etc.)
│   ├── products/               # ProductsClient (client-side filtering)
│   ├── tutorials/              # Tutorial-specific components
│   ├── shared/                 # Layout components (Header, Footer, GoogleAnalytics, CookieConsent)
│   └── ui/                     # Reusable cards (ProductCard, ServiceCard, TutorialCard)
│
├── lib/                        # Data fetching and static data
│   ├── blog.ts                 # getAllPosts, getPostBySlug, markdownToHtml
│   ├── productUtils.ts         # getAllProducts, getProductBySlug, getHighlightedProducts, etc.
│   ├── products.ts             # Hardcoded product array (legacy/supplemental)
│   ├── tutorials.ts            # getAllTutorials, getTutorialBySlug, getFeaturedTutorials, etc.
│   ├── services.tsx            # Services data
│   └── cta.ts                  # CTA configuration
│
├── content/                    # Markdown content (file-based CMS)
│   ├── blog/                   # Blog posts (*.md)
│   ├── products/               # Product definitions (*.md)
│   └── tutorials/              # Tutorial definitions (*.md)
│
├── public/                     # Static assets
│   ├── shared/                 # Logos (logo.svg, logo-white.svg, logo-icon.svg, etc.)
│   ├── hero/
│   ├── products/
│   ├── blog/
│   ├── services/
│   └── tutorials/
│
├── next.config.ts              # Webpack config for markdown watching
├── tailwindcss.config.mjs      # Tailwind content paths + font family theme
├── postcss.config.mjs          # @tailwindcss/postcss plugin
├── tsconfig.json               # TypeScript config (strict, bundler resolution, @/* alias)
└── eslint.config.mjs           # ESLint with next/core-web-vitals + typescript rules
```

---

## 4. Patterns and Conventions

### File Naming
- **Components**: PascalCase (`ProductCard.tsx`, `Hero.tsx`)
- **Route directories**: kebab-case (`/blog`, `/products`)
- **Markdown files**: kebab-case (`complete-immersion-system.md`)
- **Lib/utilities**: camelCase (`productUtils.ts`, `markdownToHtml`)

### Component Patterns
- Components that need browser APIs or state are marked `'use client'`
- Server Components are the default for data-fetching pages
- Props interfaces are defined above the component
- TypeScript is used throughout — no `any` types in component props

### Import Aliases
- `@/*` maps to the project root (configured in `tsconfig.json`)
- All internal imports use `@/` — never relative paths across directories

### Styling
- **Tailwind CSS v4** via PostCSS; no `tailwind.config.js` class list — content scanning is configured in `tailwindcss.config.mjs`
- **Theme system**: light and dark themes defined as CSS custom properties in `globals.css`. `[data-theme="dark"]` is the default. Toggle persists to `localStorage` via `ThemeProvider`. An inline script in `layout.tsx` reads `localStorage` before hydration to prevent flash.
- **CSS variables — always use these, never hardcode colors**:
  - `--background` / `bg-[--background]` — page and section backgrounds (never `bg-black` or `bg-[#030014]`)
  - `--foreground` / `text-[--foreground]` — body and heading text (never `text-white` on prose)
  - `--surface`, `--surface-alt` — card and panel backgrounds
  - `--border` — border colors
  - `--muted` — secondary/muted text
- **Fonts** loaded via Next.js font optimization in `layout.tsx`:
  - `--font-geist-sans` (sans-serif default)
  - `--font-jetbrains-mono` (monospace — note: not `--font-geist-mono`)
  - `--font-newsreader-serif` (serif)
- **Global utilities** in `globals.css`: scrollbar hiding, `mix-blend-mode: exclusion` for the header, footer parallax, smooth scroll

### Content Management (File-based CMS)
All content lives in `content/` as Markdown with YAML frontmatter, parsed using `gray-matter` + `remark`.

**Blog frontmatter fields:** `title`, `date`, `excerpt`, `image`, `published`, `tags[]` (string array, defaults to `[]`), `lang` (string, defaults to `'en'`)

**Product frontmatter fields:** `name`, `price`, `category` (template | course | ebook | toolkit | service), `type` (free | paid | custom), `highlighted`, `published`, `benefit`, `description`, `image`, `buyUrl`, `features[]`, `relatedProducts[]`

**Tutorial frontmatter fields:** `title`, `description`, `duration`, `lessons`, `level` (beginner | intermediate | advanced), `category`, `tags[]`, `thumbnail`, `youtubePlaylistId`, `videos[]`, `featured`, `published`, `relatedProducts[]`

Items with `published: false` are excluded from all listings. Highlighted/featured items surface on the homepage.

### Tag System
All blog/transmission posts are tagged for filtering. The five canonical tags are:

| Tag | Use |
|---|---|
| `work` | Case studies and professional projects — surfaces in `/work` |
| `research` | HCI research, academic writing, study notes |
| `builds` | Build logs, technical explorations, prototypes |
| `galea` | Music project posts and releases |
| `process` | Workflow, tools, methodology writing |

Tags are defined in post frontmatter as a YAML array: `tags: [work, research]`. The `/transmissions` filter UI exposes all five tags plus `All`. The `/work` page is a server-side filtered view (`tags.includes('Work')`).

### Analytics and Privacy
- GA4 is loaded only in `production` and only after cookie consent is granted
- The `NEXT_PUBLIC_GA_ID` env var must be set for GA to fire
- Cookie consent uses a custom banner component (`CookieConsent.tsx`) that sets consent before loading the GA script

---

## 5. Environment Variables

Defined in `.env.local` (not committed):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXX`) |

`NEXT_PUBLIC_` prefix exposes the variable to the browser bundle. No server-only secrets are currently in use.

---

## 6. NPM Scripts

```json
"dev":   "next dev --webpack"    // Start local dev server (webpack mode)
"build": "next build --webpack"  // Production build (webpack mode)
"start": "next start"            // Serve the production build
"lint":  "eslint"                // Run ESLint across the project
```

No test runner is configured.

---

## 7. Route Structure

| Route | Description | Replaces |
|---|---|---|
| `/` | Home — hero, product scroll, signal strip, services, transmissions preview, about strip | — |
| `/work` | Filtered view of Transmissions — posts tagged `work` only | — |
| `/systems` | Product catalog (file-based, markdown-driven) | `/products` |
| `/systems/[slug]` | Individual product/system page | `/products/[slug]` |
| `/transmissions` | All long-form content with tag filter UI | `/blog` |
| `/transmissions/[slug]` | Individual post page | `/blog/[slug]` |
| `/tutorials` | YouTube-linked tutorial series | — |
| `/tutorials/[slug]` | Individual tutorial page | — |
| `/connect` | Contact / get in touch | `/contact` |
| `/about` | Static about page | — |
| `/privacy` | Static privacy policy | — |

Old routes redirect permanently via `next.config.ts`:
- `/blog` → `/transmissions`
- `/blog/:slug` → `/transmissions/:slug`
- `/products` → `/systems`
- `/products/:slug` → `/systems/:slug`
- `/contact` → `/connect`

---

## 8. i18n Readiness

No i18n library is installed yet. The following conventions are in place so future translation work is clean:

- **UI copy**: All hardcoded UI strings go in `lib/content.ts` — never scattered across components. This makes extraction to `next-intl` or similar straightforward.
- **Content file naming**: When translations are added, use the locale suffix pattern: `post-title.pt.md`, `post-title.es.md`. Current files use no suffix (implies `en`).
- **Frontmatter lang field**: All blog posts include `lang: en` in frontmatter. Zod schema defaults to `'en'` if omitted.
- **No files renamed**: Existing files stay as-is until a translation is actually ready.
- **Library**: Add `next-intl` or equivalent only when the first non-English translation is committed.
