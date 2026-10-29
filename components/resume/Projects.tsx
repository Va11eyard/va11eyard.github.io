import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { ResumeDataSchemaType } from '@/lib/resume';
import { cn } from '@/lib/utils';

export function Projects({
  projects,
}: {
  projects: ResumeDataSchemaType['projects'];
}) {
  if (projects.length === 0) return null;

  return (
    <Section>
      <h2 className="text-xl font-bold" id="projects-section">
        Projects
      </h2>
      <div
        className="flex flex-col gap-4"
        role="feed"
        aria-labelledby="projects-section"
      >
        {projects.map((item) => (
          <article
            key={item.name}
            className="font-mono flex flex-col justify-start items-start gap-1 print:mb-4"
          >
            <div className="flex flex-wrap justify-between items-start self-stretch gap-2">
              <div className="flex flex-wrap justify-start items-center gap-2">
                <h3 className="text-base font-semibold text-left text-[#050914]">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.name}
                    </a>
                  ) : (
                    item.name
                  )}
                </h3>
                {item.role && (
                  <div className="flex justify-center items-center relative overflow-hidden gap-2.5 px-[7px] py-0.5 rounded bg-[#eeeff0]">
                    <p className="text-[12px] font-semibold text-center text-[#54575e]">
                      {item.role}
                    </p>
                  </div>
                )}
              </div>
              {item.period && (
                <p className="text-sm text-right text-[#54575e] tabular-nums">
                  {item.period}
                </p>
              )}
            </div>

            <p className="self-stretch text-sm font-medium text-left text-[#6c737f] whitespace-pre-line">
              {item.description}
            </p>

            {item.stack && item.stack.length > 0 && (
              <ul
                className={cn('flex list-none flex-wrap gap-1 p-0 pt-1')}
                aria-label={`${item.name} technologies`}
              >
                {item.stack.map((tech) => (
                  <li key={tech}>
                    <Badge
                      variant="secondary"
                      className="print:text-[10px] font-mono text-[11px]"
                    >
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
