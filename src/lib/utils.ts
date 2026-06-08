import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with proper conflict resolution.
 *
 * cn('px-2 py-1', 'px-4') → 'py-1 px-4'  (later px-4 wins)
 * cn('text-sm', condition && 'text-lg') → conditional classes
 *
 * Standard shadcn/ui helper, identical to what `npx shadcn init` generates.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * True for absolute http(s) URLs — used to decide whether a link should open in
 * a new tab (`target="_blank" rel="noopener noreferrer"`). Internal paths like
 * `/contact` return false.
 */
export function isExternalUrl(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
