export interface Project {
  kind: 'programming' | 'design';
  slug: string;
  title: string;
  description: string;
  details: string[];
  achievements: string[];
  technologies: {
    languages: string[];
    libraries: string[];
  };
  image: string;
  images?: string[];
  github?: string;
  site?: string;
}
