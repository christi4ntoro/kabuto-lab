# Kabuto Lab — Sprint Tracker

> Guide: prompts written in Claude chat, executed in Claude Code.
> Rule: one item per Claude Code session. Run `npm run build` after every item.
> Language: English only for now. Structure must support future i18n (en, pt, es).
> Reference: CLAUDE.md for all naming and architectural decisions.

---

## Status legend
- ✅ Done
- 🔄 In progress
- ⬜ Queued
- ❌ Blocked
- ⚠️ Bug confirmed

---

## Sprint 1 — Route Migration & Homepage Restructure
**Goal:** Rename routes to match agreed structure. Rewrite homepage sections.
**Status: ✅ Complete**

| # | Item | Status | Notes |
|---|---|---|---|
| 1.1 | Rename `/blog` → `/transmissions` | ✅ Done | Redirect in place |
| 1.2 | Rename `/products` → `/systems` | ✅ Done | Redirect in place |
| 1.3 | Rename `/contact` → `/connect` | ✅ Done | Redirect in place |
| 1.4 | Update all internal links to new routes | ✅ Done | All components updated |
| 1.5 | Rewrite Hero copy — Kabuto first, 0 ego | ✅ Done | |
| 1.6 | Add SignalStrip section to homepage | ✅ Done | 3 credential lines |
| 1.7 | Add AboutStrip section to homepage | ✅ Done | One paragraph, name once |
| 1.8 | Update BlogSection → Transmissions, 3 posts | ✅ Done | Heading + subheading updated |
| 1.9 | Remove CTASection from homepage | ✅ Done | |

---

## Sprint 2 — Content Model: Transmissions
**Goal:** Extend Transmissions to support tags and lang. Make it the single home for all long-form content including case studies.

| # | Item | Status | Priority | Notes |
|---|---|---|---|---|
| 2.1 | Add `tags[]` and `lang` to blog frontmatter Zod schema in `lib/schemas.ts` | ✅ Done | P0 | `tags` is string array, defaults to []. `lang` defaults to 'en'. |
| 2.2 | Update `lib/blog.ts` to parse and expose `tags` and `lang` fields | ✅ Done | P0 | Pass through to all post objects. |
| 2.3 | Update all existing `content/blog/*.md` files with `tags` and `lang` fields | ✅ Done | P0 | Add to frontmatter. Do not change content. Tags: #work #research #builds #galea |
| 2.4 | Add tag filter UI to `/transmissions` page | ✅ Done | P1 | Filter buttons: All · Work · Research · Builds · Galea. Client component. Active state styled. |
| 2.5 | Create `/work` as a filtered view of Transmissions | ✅ Done | P1 | Server component. Fetches posts where tags includes 'work'. Same card layout as /transmissions. No separate content. |
| 2.6 | Add `/work` redirect note to nav — visible entry point for hiring managers | ✅ Done | P1 | Add Work to nav links pointing to /work. |
| 2.7 | Update `content/blog/*.md` file naming convention for future i18n | ✅ Done | P2 | Documented. Pattern: post-title.pt.md when translations are added. No files renamed. |

---

## Sprint 3 — Theme System (P0 Bug)
**Goal:** Make the existing theme toggle functional. Design for light and dark from the start.

| # | Item | Status | Priority | Notes |
|---|---|---|---|---|
| 3.1 | Fix font variable mismatch — `--font-jetbrains-mono` vs `--font-geist-mono` | ✅ Done | P0 | layout.tsx defines jetbrains, tailwindcss.config.mjs references geist-mono. Fix before theme work. |
| 3.2 | Define light and dark CSS custom properties in `globals.css` | ✅ Done | P0 | `[data-theme='dark']` and `[data-theme='light']` blocks. Colors, backgrounds, text. Never hardcode #030014 or #ffffff in components again. |
| 3.3 | Wire theme toggle in Header to `data-theme` on `<html>` | ✅ Done | P0 | Toggle sets attribute + persists to localStorage. Inline script in layout.tsx reads localStorage before hydration to prevent flash. |
| 3.4 | Audit all components for hardcoded dark colors | ✅ Done | P1 | Replace `bg-black`, `text-white`, `bg-[#030014]` etc. with CSS variable equivalents. |
| 3.5 | Audit `mix-blend-mode: exclusion` on header for WCAG AA contrast in both themes | ⬜ Queued | P1 | Unblocked: scrolled-state now uses `--background`/`--foreground` via `.header-scrolled`. Blend mode only active at scroll=0. Test at scroll=0 in both themes. |

---

## Sprint 4 — SEO, Metadata & Infrastructure
**Goal:** Fix silent infrastructure issues before the site grows.

| # | Item | Status | Priority | Notes |
|---|---|---|---|---|
| 4.1 | Set `metadataBase` in `app/layout.tsx` | ✅ Done | P0 | Fixes OG/Twitter image URL warnings. Value: `https://kabutolab.tech` |
| 4.2 | `generateMetadata()` on all `[slug]` routes | ✅ Done | P0 | transmissions, systems, tutorials. Also added static metadata to /work. |
| 4.3 | `app/sitemap.ts` + `app/robots.ts` | ✅ Done | P1 | sitemap updated: /work, /transmissions, /systems added; /blog, /products, /contact removed. |
| 4.4 | Add CSP + security headers in `next.config.ts` | ✅ Done | P1 | X-Frame-Options, X-Content-Type-Options, Referrer-Policy, poweredByHeader: false |
| 4.5 | Add `.env.example` to repo root | ⬜ Queued | P2 | Document NEXT_PUBLIC_GA_ID. Never commit actual values. |
| 4.6 | Document webpack flag rationale in CLAUDE.md | ⬜ Queued | P2 | One line explaining why --webpack. If reason is gone, test Turbopack. |

---

## Sprint 5 — Accessibility & Motion
**Goal:** Meet WCAG AA. Respect user preferences.

| # | Item | Status | Priority | Notes |
|---|---|---|---|---|
| 5.1 | Add skip-to-content link + ARIA landmarks | ✅ Done | P1 | First focusable element. main, nav, footer landmarks in layout.tsx. |
| 5.2 | Wrap all Framer Motion animations in `prefers-reduced-motion` | ✅ Done | P1 | useReducedMotion() in Hero and any animated components. |
| 5.3 | Audit all `next/image` usage — width, height, priority props | ✅ Done | P1 | Hero image must have priority={true}. No raw `<img>` tags. |

---

## Sprint 6 — CSS Architecture & Design System
**Goal:** Establish consistent, maintainable CSS that supports theming and future i18n without fighting you.

| # | Item | Status | Priority | Notes |
|---|---|---|---|---|
| 6.1 | Define CSS naming convention in CLAUDE.md | ⬜ Queued | P1 | Pattern: `kl-[component]-[element]`. Document before writing new classes. |
| 6.2 | Define typography token system | ⬜ Queued | P1 | `.kl-body`, `.kl-body-sm`, `.kl-display-*`. Never redefine p/h styles per-component. |
| 6.3 | Audit globals.css — remove duplicate rules | ⬜ Queued | P1 | Verify no duplicated selectors. |
| 6.4 | Enforce mobile-first media queries | ⬜ Queued | P2 | Replace `max-width` with `min-width` throughout. |
| 6.5 | Zero inline styles audit | ⬜ Queued | P2 | Remove all `style={{}}` from JSX. All styles in globals.css. |

---

## Sprint 7 — Code Quality & Type Safety
**Goal:** Prevent regressions. Raise the floor on type safety.

| # | Item | Status | Priority | Notes |
|---|---|---|---|---|
| 7.1 | Zod frontmatter validation on all lib/ parsers | ⬜ Queued | P1 | schemas in lib/schemas.ts. Covers blog, products, tutorials. |
| 7.2 | Enable `noUncheckedIndexedAccess` in tsconfig.json | ⬜ Queued | P1 | Fix resulting TS errors — most in lib/ content fetchers. |
| 7.3 | Enforce `'use client'` boundary — page.tsx server only | ⬜ Queued | P2 | Audit home/, systems/, tutorials/ pages. |
| 7.4 | Add ESLint rules for `@/` aliases and `'use client'` placement | ⬜ Queued | P2 | No relative cross-directory imports. |
| 7.5 | Add Vitest + smoke tests for all lib/ utilities | ⬜ Queued | P2 | getAllPosts, getProductBySlug, getTutorialBySlug. |

---

## Sprint 8 — Content Integrity
**Goal:** Make all content production-ready and schema-validated.

| # | Item | Status | Priority | Notes |
|---|---|---|---|---|
| 8.1 | Confirm `lib/products.ts` is fully dead — delete it | ✅ Done | P0 | Verified clean in Sprint 4/5 build pass. |
| 8.2 | Audit all product markdown files against Zod schema | ✅ Done | P1 | Verified clean in Sprint 4/5 build pass. |
| 8.3 | Audit all blog markdown files against updated Zod schema | ✅ Done | P1 | Verified clean in Sprint 4/5 build pass. |
| 8.4 | Audit all tutorial markdown files against Zod schema | ✅ Done | P1 | Verified clean in Sprint 4/5 build pass. |
| 8.5 | Image audit — all content images exist in public/ | ⬜ Queued | P2 | Cross-check every image field in markdown against public/ subfolders. |

---

## i18n Readiness (non-blocking, design decisions only)

These are not sprints — they are structural decisions made now so future translation work is clean.

| Decision | Approach |
|---|---|
| Hardcoded UI copy | All UI strings go in a single `lib/content.ts` constants file — not scattered across components. Ready for extraction to i18n library later. |
| Content files | Naming pattern for translations: `post-title.pt.md`. No files created yet — pattern documented only. |
| Language default | `lang: 'en'` in all frontmatter. |
| No i18n library yet | next-intl or similar added only when first translation is ready. |

---

## Build log

| Sprint | Date | Result | Notes |
|---|---|---|---|
| Sprint 1 | — | ✅ Clean | All routes migrated, homepage restructured |
| Sprint 2 | 2026-05-01 | ✅ Clean | Tags + lang schema, /transmissions filter UI, /work page, nav updated |
| Sprint 3 (partial) | 2026-05-01 | ✅ Clean | Theme system complete (3.2–3.4). 3.1 font mismatch still open in tailwindcss.config.mjs |
| Sprint 4 (partial) | 2026-05-01 | ✅ Clean | metadataBase set, generateMetadata on all slug routes + /work |
| Sprint 4 (complete) | 2026-05-01 | ✅ Clean | sitemap updated, security headers added |
| Sprint 5 | 2026-05-01 | ✅ Clean | Accessibility, motion, image audit complete. Zero Zod errors in content files. |

---

## Conventions reference (quick access)

- File naming: PascalCase components, kebab-case routes + markdown, camelCase lib
- Imports: always `@/` — never relative cross-directory
- Components: `'use client'` only when browser API or state needed
- CSS: all styles in globals.css, no `style={{}}` in JSX, no `<style>` tags in components
- Tailwind: layout/grid utilities only — responsiveness via `min-width` media queries
- Content: markdown in content/, images in public/ matching the content subfolder
- No `any` types in component props
- TypeScript strict mode throughout
- i18n: all UI copy in `lib/content.ts`, content files use lang frontmatter field