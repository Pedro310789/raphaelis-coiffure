import { getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLang, type Lang } from './translations';

/**
 * Single source of truth for page slugs across locales.
 *
 * Slugs differ per language (e.g. FR `/maison` ↔ EN `/our-house`). Astro's
 * built-in i18n only prefixes the locale — it does not translate slugs — so we
 * map a stable page key to a localized, locale-prefix-free slug here. Add every
 * new page in this object only; the nav and language switcher derive from it.
 */
export const routes = {
  home: { fr: '/', en: '/' },
  maison: { fr: '/maison', en: '/our-house' },
  services: { fr: '/services', en: '/services' },
  collection: { fr: '/collection', en: '/collection' },
  contact: { fr: '/contact', en: '/contact' },
  'legal-notice': { fr: '/mentions-legales', en: '/legal-notice' },
  'privacy-policy': { fr: '/politique-de-confidentialite', en: '/privacy-policy' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/** Locales that carry a URL prefix (every locale except the default). */
const prefixedLocales = (Object.keys(routes.home) as Lang[]).filter(
  (locale) => locale !== defaultLang,
);

/** Strip a trailing slash (but keep the root `/`). */
function normalizePath(path: string): string {
  const trimmed = path.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/** Remove a leading `/{locale}` segment for prefixed locales, then normalize. */
function stripLocalePrefix(pathname: string): string {
  for (const locale of prefixedLocales) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return normalizePath(pathname.slice(locale.length + 1));
    }
  }
  return normalizePath(pathname);
}

/** Locale-aware href for a known page key — use for forward navigation. */
export function localizedPath(key: RouteKey, locale: Lang): string {
  return getRelativeLocaleUrl(locale, routes[key][locale]);
}

/**
 * Same page, other locale — use for the language switcher.
 *
 * Matches the current path against the registry to find its page key, then
 * returns that key's slug in `toLocale`. Falls back to the locale home when the
 * path isn't registered, since FR/EN slugs can differ and guessing is unsafe.
 */
export function alternateLocalePath(pathname: string, fromLocale: Lang, toLocale: Lang): string {
  const current = stripLocalePrefix(pathname);
  const match = (Object.entries(routes) as [RouteKey, Record<Lang, string>][]).find(
    ([, slugs]) => normalizePath(slugs[fromLocale]) === current,
  );
  return getRelativeLocaleUrl(toLocale, match ? match[1][toLocale] : '/');
}
