export const defaultLang = 'fr' as const;
export type Lang = 'fr' | 'en';

export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.maison': 'Maison',
    'nav.services': 'Services',
    'nav.collection': 'Collection',
    'nav.contact': 'Contact',
    'nav.label': 'Navigation principale',
    'lang.selector': 'Sélecteur de langue',
    'notFound.title': 'Page introuvable',
    'notFound.body': "La page que vous cherchez n'existe pas ou a été déplacée.",
    'notFound.cta': "Retour à l'accueil",
  },
  en: {
    'nav.home': 'Home',
    'nav.maison': 'Our House',
    'nav.services': 'Services',
    'nav.collection': 'Collection',
    'nav.contact': 'Contact',
    'nav.label': 'Main navigation',
    'lang.selector': 'Language selector',
    'notFound.title': 'Page not found',
    'notFound.body': "The page you're looking for doesn't exist or has been moved.",
    'notFound.cta': 'Back to home',
  },
} as const;
