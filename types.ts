export interface Project {
  id: string;
  title: string;
  location: string;
  type: string;
  highlight: string;
  imageUrl: string;
  size: 'large' | 'medium' | 'small';
  description?: string;
  year?: string;
  area?: string;
  services?: string[];
  gallery?: string[];
  narrative?: string;
  tags?: string[];
  challenges?: string;
  solutions?: string;
  craftDetails?: { image: string; caption: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  location: string;
  image?: string;
}