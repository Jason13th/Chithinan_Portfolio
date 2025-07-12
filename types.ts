
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  detail: string;
  imageUrl: string;
}
