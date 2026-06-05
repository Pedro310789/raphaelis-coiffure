export interface CTALink {
  label: string;
  href: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  /** Renders target="_blank" rel="noopener noreferrer" */
  external?: boolean;
}

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
