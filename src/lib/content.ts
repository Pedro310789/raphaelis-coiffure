import { getEntry } from 'astro:content';
import type { CollectionKey } from 'astro:content';
import type { Lang } from '@/i18n/translations';

/**
 * Fetch one page section for a locale.
 *
 * Content lives at `src/content/pages/{locale}/{page}/{section}.mdx`, and the
 * glob loader derives the entry id from that path (minus extension). Since each
 * collection's files are named after the collection (`hero.mdx` for the `hero`
 * collection), the id is always `{locale}/{page}/{collection}`. This helper owns
 * that convention so pages never hand-write ids.
 *
 * Throws on a miss: a missing section is a build-time content error, not a
 * runtime 404.
 */
export async function getSection<C extends CollectionKey>(
  collection: C,
  locale: Lang,
  page: string,
) {
  const entry = await getEntry(collection, `${locale}/${page}/${collection}`);
  if (!entry) {
    throw new Error(`Missing "${collection}" content for ${locale}/${page}`);
  }
  return entry;
}
