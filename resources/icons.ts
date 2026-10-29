import type { IconType } from 'react-icons';
import { HiArrowUpRight, HiEnvelope, HiOutlineGlobeAsiaAustralia } from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import {
  SiPython,
  SiGo,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiPytorch,
  SiHuggingface,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiVite,
  SiTailwindcss,
  SiLinux,
  SiGithubactions,
  SiFigma,
  SiThreedotjs,
} from 'react-icons/si';

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  github: FaGithub,
  linkedin: FaLinkedin,
  python: SiPython,
  go: SiGo,
  typescript: SiTypescript,
  javascript: SiJavascript,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  docker: SiDocker,
  pytorch: SiPytorch,
  huggingface: SiHuggingface,
  react: SiReact,
  nextjs: SiNextdotjs,
  fastapi: SiFastapi,
  vite: SiVite,
  tailwindcss: SiTailwindcss,
  linux: SiLinux,
  githubactions: SiGithubactions,
  figma: SiFigma,
  threedotjs: SiThreedotjs,
};

export type IconLibrary = typeof iconLibrary;
