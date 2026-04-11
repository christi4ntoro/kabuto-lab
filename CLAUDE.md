# Kabuto Lab — Project Reference

## 1. Project Overview

**Kabuto Lab** is a portfolio and product/service marketplace focused on immersive experience design, particularly the Narrative Immersion Protocol (NIP). The site showcases digital products, courses, eBooks, templates, consulting services, and research related to immersive experiences (VR, AR, spatial computing, and conversational AI).

Key site sections:
- **Home** — animated hero, product scroll, services, blog preview, CTA
- **Products** — catalog of free and paid digital products
- **Tutorials** — YouTube-linked tutorial series
- **Blog (Transmissions)** — research notes and articles
- **About / Contact / Privacy** — static informational pages

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
- **Dark theme by default**: `--background: #030014`, `--foreground: #ffffff`
- **Fonts** loaded via Next.js font optimization in `layout.tsx`:
  - `--font-geist-sans` (sans-serif default)
  - `--font-geist-mono` (monospace)
  - `--font-newsreader-serif` (serif)
- **Global utilities** in `globals.css`: scrollbar hiding, `mix-blend-mode: exclusion` for the header, footer parallax, smooth scroll

### Content Management (File-based CMS)
All content lives in `content/` as Markdown with YAML frontmatter, parsed using `gray-matter` + `remark`.

**Blog frontmatter fields:** `title`, `date`, `excerpt`, `image`, `published`

**Product frontmatter fields:** `name`, `price`, `category` (template | course | ebook | toolkit | service), `type` (free | paid | custom), `highlighted`, `published`, `benefit`, `description`, `image`, `buyUrl`, `features[]`, `relatedProducts[]`

**Tutorial frontmatter fields:** `title`, `description`, `duration`, `lessons`, `level` (beginner | intermediate | advanced), `category`, `tags[]`, `thumbnail`, `youtubePlaylistId`, `videos[]`, `featured`, `published`, `relatedProducts[]`

Items with `published: false` are excluded from all listings. Highlighted/featured items surface on the homepage.

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
