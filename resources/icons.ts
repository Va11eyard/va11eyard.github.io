import type { IconType } from 'react-icons';
import { HiArrowUpRight, HiEnvelope, HiOutlineGlobeAsiaAustralia } from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  github: FaGithub,
  linkedin: FaLinkedin,
};

export type IconLibrary = typeof iconLibrary;
