export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

export interface HeroBannerProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
  backgroundImage?: string;
}

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export interface ContactFormProps {
  onSubmit?: (data: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export interface ContactCardProps {
  logo: React.ReactNode;
  company: string;
  address: string;
  phone: string;
  email: string;
}

export interface TeamProfileProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface IconGridProps {
  icons: {
    id: number;
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface FuelGalleryProps {
  fuels: {
    id: number;
    name: string;
    spec: string;
    imageUrl: string;
  }[];
}

export interface CaseStudyProps {
  title: string;
  summary: string;
  imageUrl: string;
  slug: string;
}

export interface FAQAccordionProps {
  faqs: {
    id: number;
    question: string;
    answer: string;
  }[];
}

export interface ProductGalleryProps {
  products: {
    id: number;
    name: string;
    category: string;
    imageUrl: string;
  }[];
}

export interface TimelineProps {
  items: {
    date: string;
    title: string;
    description: string;
  }[];
}

export interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}