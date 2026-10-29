import { ResumeDataSchemaType } from '@/lib/resume';
import { Education } from './Education';
import { Header } from './Header';
import { Projects } from './Projects';
import { Publications } from './Publications';
import { Skills } from './Skills';
import { Summary } from './Summary';
import { WorkExperience } from './WorkExperience';

export const FullResume = ({
  resume,
  profilePicture,
}: {
  resume: ResumeDataSchemaType;
  profilePicture?: string;
}) => {
  return (
    <section
      className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4 my-8 px-4"
      aria-label="Resume Content"
    >
      <Header header={resume.header} picture={profilePicture} />

      <div className="flex flex-col gap-6">
        <Summary summary={resume.summary} />

        <WorkExperience work={resume.workExperience} />

        <Education educations={resume.education} />

        <Publications publications={resume.publications} />

        <Projects projects={resume.projects} />

        <Skills skills={resume.header.skills} />
      </div>
    </section>
  );
};
