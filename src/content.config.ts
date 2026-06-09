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

export const maisonHeroSchema = z.object({
  seo: z.object({
    title: z.string(),
    description: z.string(),
  }),
  heading: z.string(),
  body: z.string(),
  discover: z.object({
    label: z.string(),
    slogan: z.string(),
    address: z.string(),
  }),
});

export const servicesHeroSchema = z.object({
  seo: z.object({
    title: z.string(),
    description: z.string(),
  }),
  heading: z.string(),
  body: z.string(),
  discover: z.object({
    label: z.string(),
    slogan: z.string(),
    address: z.string(),
  }),
});

export const collectionHeroSchema = z.object({
  seo: z.object({
    title: z.string(),
    description: z.string(),
  }),
  heading: z.string(),
  body: z.string(),
  discover: z.object({
    label: z.string(),
    slogan: z.string(),
    address: z.string(),
  }),
});

export const maisonAboutSchema = z.object({
  overline: z.string(),
  heading: z.string(),
  body: z.array(z.string()),
  imageAlt: z.string(),
  cta: z.object({
    label: z.string(),
    href: z.string(),
  }),
});

export const maisonVisionSchema = z.object({
  overline: z.string(),
  heading: z.string(),
  body: z.string(),
  leftImageAlt: z.string(),
  rightImageAlt: z.string(),
});

export const maisonFoundersSchema = z.object({
  overline: z.string(),
  heading: z.string(),
  body: z.array(z.string()),
  imageAlt: z.string(),
});

export const maisonStrengthsSchema = z.object({
  overline: z.string(),
  heading: z.string(),
  items: z.array(
    z.object({
      numeral: z.string(),
      title: z.string(),
      body: z.string(),
    }),
  ),
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

export const servicesDisciplinesSchema = z.object({
  overline: z.string(),
  heading: z.array(z.string()),
  disciplines: z.array(
    z.object({
      numeral: z.string(),
      title: z.string(),
      body: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      items: z.array(z.string()),
    }),
  ),
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
      // Booking href is global (src/data/settings.json `bookingUrl`); only the
      // translatable label lives per-card here.
      cta: z.object({
        label: z.string(),
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

export const visitCtaSchema = z.object({
  overline: z.string(),
  heading: z.object({
    line1: z.string(),
    line2: z.string(),
  }),
  body: z.string(),
  address: z.object({
    label: z.string(),
    line1: z.string(),
    line2: z.string(),
  }),
  contact: z.object({
    label: z.string(),
    email: z.string(),
    phone: z.string(),
  }),
  hours: z.object({
    label: z.string(),
    rows: z.array(
      z.object({
        day: z.string(),
        time: z.string(),
        muted: z.boolean().optional(),
      }),
    ),
  }),
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

const maisonHero = defineCollection({
  loader: glob({ pattern: '**/maison-hero.mdx', base: './src/content/pages' }),
  schema: maisonHeroSchema,
});

const servicesHero = defineCollection({
  loader: glob({ pattern: '**/services-hero.mdx', base: './src/content/pages' }),
  schema: servicesHeroSchema,
});

const collectionHero = defineCollection({
  loader: glob({ pattern: '**/collection-hero.mdx', base: './src/content/pages' }),
  schema: collectionHeroSchema,
});

const maisonAbout = defineCollection({
  loader: glob({ pattern: '**/maison-about.mdx', base: './src/content/pages' }),
  schema: maisonAboutSchema,
});

const maisonVision = defineCollection({
  loader: glob({ pattern: '**/maison-vision.mdx', base: './src/content/pages' }),
  schema: maisonVisionSchema,
});

const maisonFounders = defineCollection({
  loader: glob({ pattern: '**/maison-founders.mdx', base: './src/content/pages' }),
  schema: maisonFoundersSchema,
});

const maisonStrengths = defineCollection({
  loader: glob({ pattern: '**/maison-strengths.mdx', base: './src/content/pages' }),
  schema: maisonStrengthsSchema,
});

const founders = defineCollection({
  loader: glob({ pattern: '**/founders.mdx', base: './src/content/pages' }),
  schema: foundersSchema,
});

const servicesDisciplines = defineCollection({
  loader: glob({ pattern: '**/services-disciplines.mdx', base: './src/content/pages' }),
  schema: servicesDisciplinesSchema,
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

const visitCta = defineCollection({
  loader: glob({ pattern: '**/visit-cta.mdx', base: './src/content/pages' }),
  schema: visitCtaSchema,
});

export const footerSchema = z.object({
  brandName: z.string(),
  tagline: z.string(),
  nav: z.object({
    label: z.string(),
    links: z.array(z.object({ label: z.string(), href: z.string() })),
  }),
  contact: z.object({
    label: z.string(),
    address: z.object({ line1: z.string(), line2: z.string() }),
    email: z.string(),
    phone: z.string(),
  }),
  social: z.object({
    label: z.string(),
    links: z.array(z.object({ label: z.string(), href: z.string() })),
  }),
  legal: z.object({
    copyright: z.string(),
    links: z.array(z.object({ label: z.string(), href: z.string() })),
  }),
});

const footer = defineCollection({
  loader: glob({ pattern: '**/footer.mdx', base: './src/content/pages' }),
  schema: footerSchema,
});

export const collections = {
  hero,
  'services-hero': servicesHero,
  'collection-hero': collectionHero,
  'services-disciplines': servicesDisciplines,
  'maison-hero': maisonHero,
  'maison-about': maisonAbout,
  'maison-vision': maisonVision,
  'maison-founders': maisonFounders,
  'maison-strengths': maisonStrengths,
  founders,
  services,
  testimonials,
  collection,
  partners,
  'visit-cta': visitCta,
  footer,
};
