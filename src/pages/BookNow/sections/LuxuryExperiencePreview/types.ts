
import { StaticImageData } from 'next/image';

export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  image?: StaticImageData | string;
}

export interface GalleryImageProps {
  original: string;
  thumbnail: string;
  description?: string;
  alt: string;
  hotspots?: {
    x: number;
    y: number;
    label: string;
    description: string;
  }[];
}

export interface ExperienceFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SafetyInfoProps {
  title: string;
  description: string;
  items: {
    heading: string;
    content: string;
  }[];
}
  