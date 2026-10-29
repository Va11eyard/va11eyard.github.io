import { Section } from '@/components/ui/section';
import { ResumeDataSchemaType } from '@/lib/resume';
import { STATUS_LABEL } from '@/lib/resume';
import { getShortMonth, getYear } from './resumeUtils';
import { useMemo } from 'react';

export function Publications({
  publications,
}: {
  publications: ResumeDataSchemaType['publications'];
}) {
  const items = useMemo(
    () =>
      publications.map((item) => ({
        ...item,
        formattedDate: `${getShortMonth(item.date)} ${getYear(item.date)}`,
      })),
    [publications],
  );

  if (items.length === 0) return null;

  return (
    <Section>
      <h2 className="text-xl font-bold" id="publications-section">
        Publications
      </h2>
      <div
        className="flex flex-col gap-4"
        role="feed"
        aria-labelledby="publications-section"
      >
        {items.map((item) => {
          const titleId = `publication-${getYear(item.date)}-${item.title
            .slice(0, 24)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')}`;

          return (
            <article
              key={item.title}
              className="font-mono flex flex-col justify-start items-start gap-1 print:mb-4"
            >
              <div className="flex flex-wrap justify-between items-start self-stretch gap-2">
                <h3
                  className="text-base font-semibold text-left text-[#050914] max-w-xl text-pretty"
                  id={titleId}
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-sm text-right text-[#54575e] tabular-nums">
                  {item.formattedDate}
                </p>
              </div>

              <p className="self-stretch text-sm text-left text-[#54575e]">
                {item.authors.join(', ')}
              </p>

              <div className="flex flex-wrap justify-start items-center gap-2">
                <p className="text-sm font-medium text-left text-[#6c737f]">
                  {item.venue}
                </p>
                <div className="flex justify-center items-center relative overflow-hidden gap-2.5 px-[7px] py-0.5 rounded bg-[#eeeff0]">
                  <p className="text-[12px] font-semibold text-center text-[#54575e]">
                    {STATUS_LABEL[item.status]}
                  </p>
                </div>
              </div>

              {item.identifier && (
                <p className="self-stretch text-xs text-left text-[#9CA0A8]">
                  {item.identifier}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
