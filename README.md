# Astro Starter

A minimal, production-ready Astro starter for static client sites. Ships with
Tailwind v4, shadcn-style design tokens, six core primitives and five marketing
modules built as pure `.astro` components, and Biome for lint + format.

**No UI framework runtime by default.** All components are server-rendered. Add
Vue or React only when a specific project needs client-side interactivity.

## Quick start

```sh
pnpm install
pnpm dev
```

## Primitives

Six core components in `src/components/primitives/` — zero client JS:

| Component | Purpose |
| --- | --- |
| `Button` | `default`, `destructive`, `outline`, `secondary`, `ghost`, `link` variants |
| `Card` (+ sub-components) | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` |
| `Input` | Styled form input with focus + invalid states |
| `Badge` | `default`, `secondary`, `destructive`, `outline` variants |
| `Container` | Layout wrapper, `sm` / `default` / `lg` / `xl` / `full` widths |
| `Heading` | Decouples semantic level (`as="h1"`) from visual size (`size="3xl"`) |

```astro
---
import Button from '@/components/primitives/button.astro';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/primitives/card';
---

<Card>
  <CardHeader>
    <CardTitle as="h2">Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Button variant="outline">Action</Button>
  </CardContent>
</Card>
```

## Modules

Five marketing compositions in `src/components/modules/` — accept plain typed
props, server-rendered:

| Module | Purpose |
| --- | --- |
| `Hero` | Page hero with headline, body, and CTA links |
| `FeatureGrid` | Grid of labelled feature items |
| `CTA` | Call-to-action section with heading and links |
| `FAQ` | Accordion-style FAQ list |
| `RichText` | Prose wrapper for long-form content |

```astro
---
import { Hero, FeatureGrid, CTA } from '@/components/modules';
---

<Hero
  headline="Ship faster"
  body="A production-ready Astro starter."
  ctas={[{ label: 'Get started', href: '/start' }]}
/>
```

Shared prop types (`CTALink`, `ImageProps`) live in `src/types/modules.ts`.

## Design tokens

Everything visual is driven by CSS variables in `src/styles/global.css`.
Per-project branding = editing that one file. Hex color values, same tokens
as shadcn/ui v4 (`--primary`, `--muted-foreground`, `--radius`, etc.), so when
you install shadcn components they inherit your tokens automatically.

## Fonts

Two Google Fonts are configured via Astro's font API in `astro.config.mjs`:

- **Inter** (`--font-sans`) — weights 400, 500, 600
- **Sofia Sans Condensed** (`--font-serif`) — weights 400, 600

Swap or remove them in `astro.config.mjs` under the `fonts` key.

## Relationship to shadcn/ui

This starter adopts shadcn's **design language** (tokens, variant patterns,
`cn()` helper) but renders primitives as pure Astro components — no React
runtime, no hydration.

**When a project needs a complex interactive component** (Dialog, DropdownMenu,
Popover, Combobox, Tooltip — anything built on Radix):

```sh
pnpm astro add react
npx shadcn@latest init    # detects existing tokens, doesn't overwrite
npx shadcn@latest add dialog
```

The shadcn CLI will install the React component next to your primitives. It
uses the same `--primary`, `--border`, `--radius` variables already defined in
`global.css`, so visual consistency is free. Use the React component as a
`client:*` island where you need it; keep using the Astro primitives everywhere
else.

## Adding interactivity

For simple UI (menus, accordions, toggles, small forms), a `<script>` tag
inside an `.astro` component ships zero framework runtime:

```astro
<button id="menu-toggle">Menu</button>
<script>
  document.getElementById('menu-toggle')?.addEventListener('click', () => {
    document.documentElement.classList.toggle('menu-open');
  });
</script>
```

Reach for a framework when state gets complex or you need a specific library.

## CMS integration (per-project)

This starter ships with no CMS. To integrate one:

1. Add the CMS SDK as a dependency.
2. Create `src/lib/cms.ts` that fetches content and maps it to the types in
   `src/types/modules.ts`.
3. Import and call it in your page frontmatter — modules accept plain props
   and are CMS-agnostic.

## Project structure

```
src/
├── types/modules.ts                # Shared UI types (CTALink, ImageProps)
├── lib/utils.ts                    # cn() helper
├── styles/global.css               # Tokens + Tailwind v4 + base layer
├── components/
│   ├── primitives/                 # Six Astro primitives
│   │   ├── button.astro
│   │   ├── card/
│   │   ├── input.astro
│   │   ├── badge.astro
│   │   ├── container.astro
│   │   └── heading.astro
│   └── modules/                   # Five marketing modules
│       ├── hero.astro
│       ├── feature-grid.astro
│       ├── cta.astro
│       ├── faq.astro
│       ├── rich-text.astro
│       └── index.ts               # Barrel re-export
├── layouts/base-layout.astro       # Imports global.css
└── pages/                         # Thin compositions
```

## Conventions

- **Primitives** (`src/components/primitives/`): styling-only Astro components.
  No data fetching, no business logic.
- **Modules** (`src/components/modules/`): marketing compositions that accept
  typed props. Server-rendered.
- **Islands** (`src/components/islands/`, only if framework added): Vue or
  React components, hydrated with `client:*` directives.
- **Pages** (`src/pages/`): thin compositions — fetch data, pass props to modules.

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start dev server |
| `pnpm build` | Type-check + build production |
| `pnpm preview` | Preview production build |
| `pnpm check` | Astro type check |
| `pnpm lint` | Biome lint |
| `pnpm format` | Biome format (write) |
| `pnpm check:all` | Biome lint + format + fix |
