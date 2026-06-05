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

## Styling conventions

- **Prefer Tailwind scale utilities over arbitrary values** — use `h-1` not `h-[4px]`, `text-sm` not `text-[14px]`, `gap-4` not `gap-[16px]`, etc.
- Only use `[arbitrary]` syntax when no Tailwind scale value maps to the design spec exactly.
- **Never pair a standalone `leading-*` with a `text-*` size utility** — In Tailwind v4, `text-*`
  utilities bundle `line-height`; a separate `leading-*` can be silently beaten by the cascade. Use
  the slash shorthand: `text-base/6` not `text-base leading-6`, `text-[22px]/7` not
  `text-[22px] leading-7`, `md:text-5xl/14` not `md:text-5xl md:leading-14`. The only exception is
  `leading-none` / `leading-tight` used on an element with *no* explicit `text-*` size utility
  (e.g. inheriting size from a parent).

## Linting & Formatting

Biome (not ESLint/Prettier). Key rules enforced:
- `useImportType`: `error` — use `import type` for type-only imports
- `useConsistentArrayType`: `error` — prefer `Type[]` over `Array<Type>`
- Single quotes, 2-space indent, 100 char line width, trailing commas everywhere except JSON

TypeScript extends `astro/tsconfigs/strict`.
