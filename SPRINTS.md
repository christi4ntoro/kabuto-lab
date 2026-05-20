# Kabuto Lab — Sprint Tracker

> Guide: prompts written in Claude chat, executed in Claude Code.
> Rule: one item per Claude Code session. Run `npm run build` after every item.
> Language: English only.
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
**Status: ✅ Complete**

---

## Sprint 2 — Content Model: Transmissions
**Status: ✅ Complete**

---

## Sprint 3 — Theme System
**Status: ✅ Complete**

| # | Item | Status |
|---|---|---|
| 3.1 | Fix font variable mismatch | ✅ |
| 3.2 | Define light/dark CSS custom properties | ✅ |
| 3.3 | Wire theme toggle to `data-theme` on `<html>` | ✅ |
| 3.4 | Audit components for hardcoded dark colors | ✅ |
| 3.5 | Fix privacy page — CSS variables + real email | ✅ |
| 3.6 | Full light/dark audit across all pages | ✅ |
| 3.7 | Audit `mix-blend-mode: exclusion` on header for WCAG AA | ⬜ P2 |

---

## Sprint 4 — SEO, Metadata & Infrastructure
**Status: ✅ Complete**

| # | Item | Status |
|---|---|---|
| 4.1–4.4 | metadataBase, generateMetadata, sitemap, security headers | ✅ |
| 4.5 | Add `.env.example` | ⬜ P2 |
| 4.6 | Document webpack flag rationale | ⬜ P2 |

---

## Sprint 5 — MDX Pipeline
**Status: ✅ Complete**

| # | Item | Status | Notes |
|---|---|---|---|
| 5.1 | MDX pipeline confirmed working | ✅ | @mdx-js/mdx + renderToStaticMarkup |
| 5.2 | `<YouTube>` wired via useMDXComponents | ✅ | Renders correctly |
| 5.3 | @tailwindcss/typography installed + prose CSS vars | ✅ | Backed by design tokens |
| 5.4 | YouTube renders in article | ✅ | designing-wellbeing-by-evidence.mdx |
| 5.5 | Tutorials pipeline check | ✅ | Separate remark pipeline, acceptable |
| 5.6 | Register BinauralDiagram + TrackList in MDX components map | ✅ | Both in useMDXComponents, no import needed in MDX |

---

## Sprint 6 — Mobile First
**Status: ✅ Complete**

| # | Item | Status | Priority | Notes |
|---|---|---|---|---|
| 6.1 | Audit globals.css — max-width → min-width | ✅ | P0 | Already mobile-first, no changes needed |
| 6.2 | Audit components for max-width media queries | ✅ | P0 | None found — Image sizes= attributes are correct per spec |
| 6.3 | Test all pages on 375px viewport | ✅ | P1 | Full audit completed, punch list generated |
| 6.3.1 | Fix hard overflows | ✅ | P0 | Transmissions h1, article slug h1, Connect email, Systems CTA |
| 6.3.2 | Fix p-8 outer padding on all prose pages + cards | ✅ | P0 | p-4 md:p-8 applied across 7 files |
| 6.3.3 | Responsive headings — About h1, Systems slug | ✅ | P1 | text-4xl md:text-6xl, break-words added |
| 6.3.4 | Services grid — mobile single-column layout | ✅ | P1 | grid-cols-1 sm:grid-cols-3 |
| 6.3.5 | Safety nets — overflow-wrap, prose text scale | ✅ | P2 | break-words on dynamic headings, prose-p:text-base md:text-xl |
| 6.4 | Audit globals.css — remove duplicate rules | ✅ | P1 | No duplicates found |

---

## Sprint 7 — Article Layout & Design
**Status: ✅ Complete**

| # | Item | Status | Priority | Notes |
|---|---|---|---|---|
| 7.1 | Article layout — full-width cover image + narrow column | ✅ | P1 | max-w-[65ch], px-4 md:px-0 |
| 7.2 | Typography scale — prose base size, heading scale | ✅ | P1 | prose-p:text-base md:text-xl |
| 7.3 | Article header — title, date, tag badges with per-tag tints | ✅ | P1 | work/research/builds/galea/process tints |
| 7.4 | YouTube embed inside articles — aspect-video | ✅ | P1 | w-full aspect-video my-8 rounded-lg |

---

## Sprint 8 — Systems (Products) Cleanup
**Status: ✅ Complete**

| # | Item | Status | Priority | Notes |
|---|---|---|---|---|
| 8.1 | Placeholder product cleanup | ✅ | P0 | 9 files kept as published:false scaffold, not deleted |
| 8.2 | Create Avatar Lab product MD | ✅ | P0 | avatar-lab.md — €197, paid, published:true |
| 8.3 | Add avatar-lab.jpg to public/products/ | ⬜ | P1 | Blocked on image asset — use Koji hero from production file |
| 8.4 | Verify Avatar Lab renders at /systems and /systems/avatar-lab | ⬜ | P1 | Do after image added |

---

## Sprint 9 — Languages (EN + ES)
**Status: ❌ Voided — ES support removed 2026-05-20**

All Sprint 9 work was reversed: lang-context.tsx deleted, content.es removed, *.es.mdx files deleted, useLang hooks removed, getAllPostsAll() removed. Site is English only.

---

## Cleanup + Immediate Fixes — 2026-05-20
**Status: ✅ Complete**

| # | Item | Status | Notes |
|---|---|---|---|
| C1 | Remove all ES language support | ✅ | lang-context.tsx deleted, content.es removed, 6 *.es.mdx files deleted, useLang hooks removed from 16 components, getAllPostsAll() removed |
| C2 | Remove @next/mdx from next.config.ts | ✅ | nextConfig exported directly; custom @mdx-js/mdx pipeline unchanged |
| C3 | Fix hardcoded bg-[#160078] in ProductCard | ✅ | → bg-[--surface] |
| C4 | Fix hardcoded bg-[#0A0014] in ProductScrollSection | ✅ | → bg-[--background] |
| C5 | Fix bg-white/5 in connect + about pages | ✅ | → bg-[--surface] |
| C6 | Fix border-white/10 in connect, about, WorkContent | ✅ | → border-[--border] |
| C7 | Fix text-white/60 / hover:text-white in AboutStrip, SignalStrip | ✅ | → text-[--muted] / hover:text-[--foreground] |
| C8 | Fix hover:bg-neutral-700 in SystemsClient | ✅ | → hover:bg-[--surface-alt] |
| C9 | Fix TutorialCard level badge colors | ✅ | → bg-*-900/30 text-*-400 (dark-theme compatible) |
| C10 | Replace inline fontFamily styles with font-mono class | ✅ | AboutStrip, SignalStrip, WorkContent, TransmissionsClient |
| C11 | Remove newsletter form from Footer | ✅ | Removed email state, handleSubmit, form/input/button, ArrowRight import |
| C12 | Remove dead buttonUrl fields from lib/services.tsx | ✅ | Removed buttonUrl from Service interface and all objects; removed servicesContent export |

---

## ⚠️ Known Issues

| # | Item | Status | Priority | Notes |
|---|---|---|---|---|
| B1 | Dark theme not defaulting correctly on first load | ⚠️ | P1 | Inline script in layout.tsx handles it; verify in prod |
| B2 | EN + ES articles both visible — lang filter not active | ✅ | P0 | Resolved: ES support removed, getAllPosts() always filters lang === 'en' |
| B3 | Hero gradient blobs are dark-only | ⚠️ | P2 | bg-gradient-to-br with hardcoded colors — revisit in design sprint |
| B4 | ~25 text-blue-* accent instances need --accent token | ⚠️ | P2 | Deferred to Sprint 11 |
| B5 | generateStaticParams should be audited after design sprint | ⚠️ | P2 | Covers transmissions, systems, tutorials |

---

## Sprint 10 — Design Implementation
**Goal:** Implement Figma redesign. Blocked until Figma frames are ready.

| # | Item | Status | Priority | Notes |
|---|---|---|---|---|
| 10.0 | Receive Figma frames from Chris | ⬜ | P0 | Unblocks everything below |
| 10.1 | Homepage redesign — Hero, ProductScroll, Services, BlogSection | ⬜ | P1 | |
| 10.2 | Work + Transmissions list — visual hierarchy, breathing room | ⬜ | P1 | Currently flat card stack |
| 10.3 | Connect page — reduce emptiness, better space usage | ⬜ | P1 | |
| 10.4 | Systems page — single product layout improvement | ⬜ | P1 | |
| 10.5 | Article page — validate against Figma | ⬜ | P2 | Already redesigned in Sprint 7 |

---

## Sprint 11 — CSS Architecture & Design System
**Goal:** Establish consistent CSS. Do AFTER design implementation.

| # | Item | Status | Priority | Notes |
|---|---|---|---|---|
| 11.1 | Define CSS naming convention in CLAUDE.md | ⬜ | P1 | Pattern: `kl-[component]-[element]` |
| 11.2 | Define typography token system | ⬜ | P1 | `.kl-body`, `.kl-display-*` etc. |
| 11.3 | Add `--surface-hover` token | ⬜ | P2 | Fix CookieConsent decline hover |
| 11.4 | Define `--accent` color token | ⬜ | P2 | ~25 text-blue-* / bg-blue-* instances need this |
| 11.5 | Zero inline styles audit | ⬜ | P2 | BinauralDiagram #4ade80, TrackList badge tints — replace with --accent once token exists |

---

## Sprint 12 — Component Consolidation

| # | Item | Status | Priority | Notes |
|---|---|---|---|---|
| 12.1 | Consolidate PostCard — TransmissionsClient and WorkContent share identical article card markup | ⬜ | P1 | Extract shared PostCard component |
| 12.2 | Consolidate markdownToHtml — same function exists in blog.ts and productUtils.ts | ⬜ | P1 | Move to shared lib/markdown.ts |
| 12.3 | Audit generateStaticParams across all dynamic routes | ⬜ | P2 | After design sprint settles route structure |

---

## Sprint 13 — Code Quality

| # | Item | Status | Priority |
|---|---|---|---|
| 13.1 | Zod frontmatter validation on all lib/ parsers | ✅ | P0 | Already done |
| 13.2 | Enable `noUncheckedIndexedAccess` in tsconfig.json | ⬜ | P1 | |
| 13.3 | Enforce `'use client'` boundary audit | ⬜ | P2 | |
| 13.4 | Add ESLint rules for `@/` aliases | ⬜ | P2 | |
| 13.5 | Add Vitest + smoke tests for lib/ utilities | ⬜ | P2 | |
| 13.6 | Image audit — all content images exist in public/ | ⬜ | P2 | |

---

## Build log

| Sprint | Date | Result | Notes |
|---|---|---|---|
| Sprint 1 | — | ✅ Clean | Routes migrated, homepage restructured |
| Sprint 2 | 2026-05-01 | ✅ Clean | Tags + lang, /transmissions filter, /work page |
| Sprint 3 (partial) | 2026-05-01 | ✅ Clean | Theme system |
| Sprint 4 | 2026-05-01 | ✅ Clean | SEO, metadata, security headers |
| Sprint 5 | 2026-05-05 | ✅ Clean | MDX pipeline, typography plugin |
| Sprint 3.5 | 2026-05-05 | ✅ Clean | Privacy page (was already fixed) |
| Sprint 3.6 | 2026-05-05 | ✅ Clean | Full light/dark audit, 27 pages |
| Sprint 5.6 | 2026-05-19 | ✅ Clean | BinauralDiagram + TrackList MDX components |
| Sprint 6 | 2026-05-19 | ✅ Clean | Mobile first audit + all fixes |
| Sprint 7 | 2026-05-19 | ✅ Clean | Article layout redesign |
| Sprint 8 | 2026-05-19 | ✅ Clean | Avatar Lab product, placeholder cleanup |
| Sprint 9 | 2026-05-19 | ✅ Clean | EN/ES i18n system, all articles translated |
| ES removal | 2026-05-20 | ✅ Clean | Removed all ES support, lang-context, getAllPostsAll |
| Cleanup fixes | 2026-05-20 | ✅ Clean | @next/mdx removed, hardcoded colors fixed, newsletter form removed |

---

## Execution order (next sessions)

1. **Figma redesign** — Chris, in progress — unblocks Sprint 10
2. **Sprint 10** — design implementation (blocked on Figma)
3. **Sprint 11** — CSS architecture cleanup after design pass
4. **Sprint 12** — component consolidation (PostCard, markdownToHtml)
5. **Sprint 13** — code quality