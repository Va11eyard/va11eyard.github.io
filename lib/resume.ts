import { z } from 'zod';

const MAX_STRING = 2000;
const MAX_SHORT_STRING = 500;
const MAX_NAME_LENGTH = 200;
const MAX_URL_LENGTH = 500;

const HeaderContactsSchema = z.object({
  website: z
    .string()
    .max(MAX_URL_LENGTH)
    .nullable()
    .describe('Personal website or portfolio URL')
    .optional(),
  email: z.string().max(200).nullable().describe('Email address').optional(),
  phone: z.string().max(200).nullable().describe('Phone number').optional(),
  twitter: z
    .string()
    .max(200)
    .nullable()
    .describe('Twitter/X username')
    .optional(),
  linkedin: z
    .string()
    .max(200)
    .nullable()
    .describe('LinkedIn username')
    .optional(),
  github: z
    .string()
    .max(200)
    .nullable()
    .describe('GitHub username')
    .optional(),
});

const HeaderSection = z.object({
  name: z.string().max(MAX_NAME_LENGTH),
  shortAbout: z
    .string()
    .max(MAX_SHORT_STRING)
    .describe('Short description of your profile'),
  location: z
    .string()
    .max(MAX_SHORT_STRING)
    .describe("Location with format 'City, Country'")
    .optional(),
  contacts: HeaderContactsSchema,
  skills: z
    .array(z.string().max(100))
    .max(100)
    .describe('Skills used within the different jobs the user has had.'),
});

const SummarySection = z
  .string()
  .max(MAX_STRING)
  .describe('Summary of your profile');

const WorkExperienceSection = z.array(
  z.object({
    company: z.string().max(MAX_SHORT_STRING).describe('Company name'),
    link: z
      .string()
      .max(MAX_URL_LENGTH)
      .optional()
      .describe('Company website URL'),
    location: z
      .string()
      .max(MAX_SHORT_STRING)
      .describe(
        "Location with format 'City, Country' or could be Hybrid or Remote",
      ),
    contract: z
      .string()
      .max(100)
      .describe('Type of work contract like Full-time, Part-time, Contract'),
    title: z.string().max(MAX_SHORT_STRING).describe('Job title'),
    start: z.string().max(20).describe("Start date in format 'YYYY-MM-DD'"),
    end: z
      .string()
      .max(20)
      .nullable()
      .describe("End date in format 'YYYY-MM-DD' or null if current"),
    description: z.string().max(MAX_STRING).describe('Job description'),
  }),
);

const EducationSection = z.array(
  z.object({
    school: z.string().max(MAX_SHORT_STRING).describe('School or university name'),
    degree: z
      .string()
      .max(MAX_SHORT_STRING)
      .describe('Degree or certification obtained'),
    start: z.string().max(20).describe('Start year'),
    end: z.string().max(20).describe('End year'),
  }),
);

/**
 * Statuses are a closed set so an unverified manuscript cannot render as a
 * published paper. `published` requires a citable venue.
 */
export const PublicationStatus = z.enum([
  'published',
  'preprint',
  'submitted',
  'in preparation',
]);

export const STATUS_LABEL: Record<
  z.infer<typeof PublicationStatus>,
  string
> = {
  published: 'Published',
  preprint: 'Preprint',
  submitted: 'Submitted',
  'in preparation': 'In preparation',
};

const PublicationsSection = z.array(
  z.object({
    title: z.string().max(MAX_STRING),
    authors: z.array(z.string().max(200)).max(50),
    venue: z
      .string()
      .max(MAX_SHORT_STRING)
      .describe('Conference, journal or repository name'),
    date: z.string().max(20).describe("Publication date in 'YYYY-MM-DD'"),
    status: PublicationStatus,
    link: z.string().max(MAX_URL_LENGTH).optional(),
    identifier: z
      .string()
      .max(200)
      .optional()
      .describe('DOI or ISBN, verbatim'),
  }),
);

const ProjectsSection = z.array(
  z.object({
    name: z.string().max(MAX_SHORT_STRING),
    role: z.string().max(MAX_SHORT_STRING).optional(),
    period: z.string().max(100).optional(),
    description: z.string().max(MAX_STRING),
    stack: z.array(z.string().max(100)).max(30).optional(),
    link: z.string().max(MAX_URL_LENGTH).optional(),
  }),
);

export const ResumeDataSchema = z.object({
  header: HeaderSection,
  summary: SummarySection,
  workExperience: WorkExperienceSection,
  education: EducationSection,
  publications: PublicationsSection,
  projects: ProjectsSection,
});

export type ResumeDataSchemaType = z.infer<typeof ResumeDataSchema>;
