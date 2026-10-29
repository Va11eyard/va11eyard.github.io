import { FullResume } from '@/components/resume/FullResume';
import { resume } from '@/content/resume';
import { ResumeDataSchema } from '@/lib/resume';

// Fail the build on content that violates the schema rather than rendering a
// half-empty section: `satisfies` only checks TS types, not the zod rules.
const data = ResumeDataSchema.parse(resume);

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://va11eyard.github.io';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.header.name,
    image: `${siteUrl}${basePath}/profile.jpg`,
    jobTitle: data.header.shortAbout,
    description: data.summary,
    url: `${siteUrl}${basePath}/`,
    sameAs: [
      `https://github.com/${data.header.contacts.github}`,
      `https://www.linkedin.com/in/${data.header.contacts.linkedin}`,
    ],
    knowsAbout: data.header.skills,
    alumniOf: data.education.map((e) => ({
      '@type': 'CollegeOrUniversity',
      name: e.school,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <FullResume resume={data} profilePicture={`${basePath}/profile.jpg`} />
    </>
  );
}
