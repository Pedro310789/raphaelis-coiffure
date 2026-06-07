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

export const servicesSchema = z.object({
  overline: z.string(),
  heading: z.array(z.string()),
  cards: z.array(
    z.object({
      numeral: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      title: z.string(),
      body: z.string(),
      cta: z.object({
        label: z.string(),
        href: z.string(),
      }),
    }),
  ),
});

export const testimonialsSchema = z.object({
  overline: z.string(),
  heading: z.object({
    line1: z.string(),
    line2: z.string(),
  }),
  cards: z.array(
    z.object({
      quote: z.string(),
      author: z.string(),
      location: z.string(),
    }),
  ),
});

export const partnersSchema = z.object({
  overline: z.string(),
  logos: z.array(
    z.object({
      src: z.string(),
      alt: z.string(),
    }),
  ),
});

export const collectionSchema = z.object({
  overline: z.string(),
  heading: z.string(),
  images: z.array(
    z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string(),
    }),
  ),
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

const services = defineCollection({
  loader: glob({ pattern: '**/services.mdx', base: './src/content/pages' }),
  schema: servicesSchema,
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/testimonials.mdx', base: './src/content/pages' }),
  schema: testimonialsSchema,
});

const collection = defineCollection({
  loader: glob({ pattern: '**/collection.mdx', base: './src/content/pages' }),
  schema: collectionSchema,
});

const partners = defineCollection({
  loader: glob({ pattern: '**/partners.mdx', base: './src/content/pages' }),
  schema: partnersSchema,
});

export const collections = { hero, founders, services, testimonials, collection, partners };
