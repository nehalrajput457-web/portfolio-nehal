export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: number;
  client: string;
  metric: string;
  description: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}