export interface CTALink {
  label: string;
  href: string;
  variant?: 'main' | 'main-light' | 'tertiary' | 'tertiary-light';
  /** Renders target="_blank" rel="noopener noreferrer" */
  external?: boolean;
}

