import { Geist, Geist_Mono } from 'next/font/google';
import { resume } from '@/content/resume';

const heading = Geist({ variable: '--font-heading', subsets: ['latin'], display: 'swap' });
const body = Geist({ variable: '--font-body', subsets: ['latin'], display: 'swap' });
const label = Geist({ variable: '--font-label', subsets: ['latin'], display: 'swap' });
const code = Geist_Mono({ variable: '--font-code', subsets: ['latin'], display: 'swap' });

export const fonts = { heading, body, label, code };

export const style = {
  theme: 'light' as const,
  neutral: 'gray',
  brand: 'cyan',
  accent: 'red',
  solid: 'contrast',
  solidStyle: 'flat',
  border: 'playful',
  surface: 'translucent',
  transition: 'all',
  scaling: '100',
};

export const effects = {
  mask: { cursor: false, x: 50, y: 0, radius: 100 },
  gradient: { display: false },
  dots: { display: true, opacity: 40, size: '2' as const, color: 'brand-background-strong' },
  grid: { display: false },
  lines: { display: false },
};

export const person = {
  name: resume.header.name,
  role: resume.header.shortAbout,
  location: resume.header.location ?? '',
  avatar: '/profile.jpg',
  email: resume.header.contacts.email ?? '',
};

export const social = [
  { name: 'GitHub', link: `https://github.com/${resume.header.contacts.github}`, icon: 'github' },
  { name: 'LinkedIn', link: `https://www.linkedin.com/in/${resume.header.contacts.linkedin}`, icon: 'linkedin' },
  { name: 'Email', link: `mailto:${person.email}`, icon: 'email' },
];

export const languages = ['Kazakh', 'Russian', 'English'];

export const skillGroups = [
  {
    title: 'Languages',
    tags: ['Python', 'Go', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    title: 'ML / AI',
    tags: ['PyTorch', 'MONAI', 'Hugging Face Transformers', 'RAG pipelines', 'LLM APIs', 'STT / NLP', 'Computer Vision'],
  },
  {
    title: 'Frameworks',
    tags: ['FastAPI', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'ShadCN UI'],
  },
  {
    title: 'Data & Infrastructure',
    tags: ['PostgreSQL', 'MongoDB', 'Docker', 'Linux', 'CI/CD (GitHub Actions)', 'WebRTC'],
  },
  {
    title: 'Design',
    tags: ['Figma', 'UI/UX', 'Design systems'],
  },
];

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://va11eyard.github.io';
