import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// --- Section schemas ---

export const heroSchema = z.object({
  seo: z.object({
    title: z.string(),
    description: z.string(),
  }),
  heading: z.string(),
  subtitle: z.string(),
  cta: z.object({
    label: z.string(),
    href: z.string(),
  }),
  discover: z.object({
    label: z.string(),
    slogan: z.string(),
    address: z.string(),
  }),
});

export const foundersSchema = z.object({
  overline: z.string(),
  heading: z.array(z.string()),
  body: z.array(z.string()),
  imageCaption: z.string(),
  cta: z.object({
    label: z.string(),
    href: z.string(),
  }),
});

// --- Section collections ---

const hero = defineCollection({
  loader: glob({ pattern: '**/hero.mdx', base: './src/content/pages' }),
  schema: heroSchema,
});

const founders = defineCollection({
  loader: glob({ pattern: '**/founders.mdx', base: './src/content/pages' }),
  schema: foundersSchema,
});

export const collections = { hero, founders };
