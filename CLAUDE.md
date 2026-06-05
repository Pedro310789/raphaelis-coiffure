# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
pnpm dev          # dev server at localhost:4321
pnpm build        # production build to ./dist/
pnpm preview      # preview production build
pnpm lint         # Biome lint
pnpm format       # Biome format (writes in place)
pnpm astro check  # TypeScript/Astro type checking
```

## Architecture

Astro 6 static site with MDX, sitemap, and Tailwind CSS v4.

- **Routing**: file-based from `src/pages/` — `.astro` and `.md`/`.mdx` files become routes
- **Styling**: Tailwind v4 loaded via `@import "tailwindcss"` in `src/styles/global.css`; configured as a Vite plugin (no `tailwind.config.*` file)
- **Content**: MDX integration enabled — pages can use `.mdx` and import/render components
- **Sitemap**: auto-generated at build time; update `site` in `astro.config.mjs` from `https://example.com`

## Component system

Two-tier hierarchy, all server-rendered Astro components (zero client JS by default):

- **`src/components/primitives/`** — shadcn-style building blocks: `Button`, `Card`, `Input`, `Badge`, `Container`, `Heading`. All variants use `class-variance-authority` (CVA).
- **`src/components/modules/`** — marketing compositions that accept plain typed props: `Hero`, `CTA`, `FeatureGrid`, `FAQ`, `RichText`.
- **`src/types/modules.ts`** — shared UI types (`CTALink`, `ImageProps`). When adding a CMS, map CMS content shapes to these types in your page.
- **`src/styles/global.css`** — all design tokens as CSS custom properties (`--primary`, `--background`, etc.). Rebrand by editing this file only.

## CMS integration (per-project)

This starter ships with no CMS. To integrate one:
1. Add the CMS SDK as a dependency.
2. Create `src/lib/cms.ts` (or a provider module of your choice) that fetches content and maps it to the types in `src/types/modules.ts`.
3. Import and call it in your page frontmatter — modules accept plain props and are CMS-agnostic.

## Typography

Defined in Figma style guide (node 3388-5788). CSS tokens live in `src/styles/global.css`. Fonts loaded via Astro's Google Fonts provider in `astro.config.mjs`.

| Role | Family | CSS variable | Tailwind utility |
|---|---|---|---|
| Display / Heading | Cormorant Garamond | `--font-display` | `font-display` |
| Body / UI | Montserrat | `--font-sans` | `font-sans` |

Use the `<Heading>` component for all headings — its `size` prop encodes font, weight, size, and line-height per the Figma spec. Do not manually override `font-weight` or `font-style` on a `<Heading>` unless intentional.

**Heading scale** (`font-display` — Cormorant Garamond)

| `size` | Style | px | Line-height | Tracking | Tailwind classes |
|---|---|---|---|---|---|
| `h1` | Regular | 88 | 100% | 3% | `text-[88px]/none tracking-[0.03em]` |
| `h2` | Regular | 56 | 100% | — | `text-[56px]/none` |
| `h3` | Regular | 46 | 100% | — | `text-[46px]/none` |
| `h4` | Regular | 28 | 120% | — | `text-[28px]/[1.2]` |
| `h5` | SemiBold | 24 | 120% | — | `text-2xl/[1.2] font-semibold` |
| `h6` | Italic | 20 | 130% | — | `text-xl/[1.3] italic` |
| `h7` | Regular | 16 | 130% | — | `text-base/[1.3]` |

**Body / UI scale** (`font-sans` — Montserrat)

| Token | Style | px | Line-height | Tracking | Tailwind classes |
|---|---|---|---|---|---|
| Text/L/Regular | Regular | 18 | 150% | — | `text-lg/[1.5]` |
| Text/L/SemiBold | SemiBold | 18 | 150% | — | `text-lg/[1.5] font-semibold` |
| Text/M/Regular | Regular | 16 | 150% | — | `text-base/[1.5]` |
| Text/M/SemiBold | SemiBold | 16 | 150% | — | `text-base/[1.5] font-semibold` |
| Button | Regular | 14 | 120% | 3% | `text-sm/[1.2] font-normal tracking-[0.03em] uppercase` |
| Text/S/Regular | Regular | 14 | 150% | 1% | `text-sm/[1.5] tracking-[0.01em]` |
| Text/S/SemiBold | SemiBold | 14 | 150% | 1% | `text-sm/[1.5] font-semibold tracking-[0.01em]` |
| Overline | Regular | 12 | 130% | 5% | `text-xs/[1.3] tracking-wider uppercase` |
| Text/XS/Regular | Regular | 12 | 150% | 1% | `text-xs/[1.5] tracking-[0.01em]` |
| Text/XS/SemiBold | SemiBold | 12 | 150% | 1% | `text-xs/[1.5] font-semibold tracking-[0.01em]` |

> **Mobile type scale:** Not yet defined in Figma. Confirm responsive sizes for H1–H3 with the designer before implementing pages.

## Styling conventions

- **Prefer Tailwind scale utilities over arbitrary values** — use `h-1` not `h-[4px]`, `text-sm` not `text-[14px]`, `gap-4` not `gap-[16px]`, etc.
- Only use `[arbitrary]` syntax when no Tailwind scale value maps to the design spec exactly.
- **Never pair a standalone `leading-*` with a `text-*` size utility** — In Tailwind v4, `text-*`
  utilities bundle `line-height`; a separate `leading-*` can be silently beaten by the cascade. Use
  the slash shorthand: `text-base/6` not `text-base leading-6`, `text-[22px]/7` not
  `text-[22px] leading-7`, `md:text-5xl/14` not `md:text-5xl md:leading-14`. The only exception is
  `leading-none` / `leading-tight` used on an element with *no* explicit `text-*` size utility
  (e.g. inheriting size from a parent).

## Grid layout

Defined in Figma style guide (node 3005-2997). CSS tokens live in `src/styles/global.css`.

|  | Desktop | Mobile |
|---|---|---|
| Columns | 12 | 4 |
| Margin | 72 px (`px-18`) | 16 px (`px-4`) |
| Gutter | 24 px (`gap-6`) | 16 px (`gap-4`) |
| Max width | 1440 px | — |

Use `<Container size="page">` for full-width sections that span the design grid (hero, galleries, etc.).
All other Container sizes (`default`, `lg`, `xl`) keep their existing narrower widths for text-heavy content.

## Spacing scale

Defined in Figma style guide (node 3005-3155). CSS tokens live in `src/styles/global.css`. All values map 1:1 to Tailwind's default 4px-base scale — use the Tailwind class in markup, reference the CSS token when writing raw CSS.

| Token | px | Tailwind (`p-*`, `gap-*`, `m-*`, …) |
|---|---|---|
| `--spacing-xxx-sm` | 2 px | `*-0.5` |
| `--spacing-xx-sm` | 4 px | `*-1` |
| `--spacing-x-sm` | 8 px | `*-2` |
| `--spacing-sm` | 12 px | `*-3` |
| `--spacing-md` | 16 px | `*-4` |
| `--spacing-big` | 20 px | `*-5` |
| `--spacing-x-big` | 24 px | `*-6` |
| `--spacing-xx-big` | 32 px | `*-8` |
| `--spacing-xxx-big` | 40 px | `*-10` |
| `--spacing-lg` | 48 px | `*-12` |
| `--spacing-x-lg` | 64 px | `*-16` |
| `--spacing-xx-lg` | 80 px | `*-20` |
| `--spacing-xxx-lg` | 96 px | `*-24` |
| `--spacing-huge` | 120 px | `*-30` |
| `--spacing-x-huge` | 144 px | `*-36` |
| `--spacing-xx-huge` | 160 px | `*-40` |
| `--spacing-xxx-huge` | 200 px | `*-50` |

## Linting & Formatting

Biome (not ESLint/Prettier). Key rules enforced:
- `useImportType`: `error` — use `import type` for type-only imports
- `useConsistentArrayType`: `error` — prefer `Type[]` over `Array<Type>`
- Single quotes, 2-space indent, 100 char line width, trailing commas everywhere except JSON

TypeScript extends `astro/tsconfigs/strict`.
