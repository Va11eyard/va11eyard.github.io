import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  Line,
  RevealFx,
  Row,
  Tag,
  Text,
} from '@once-ui-system/core';
import { basePath, languages, person, skillGroups, social } from '@/resources/site';
import { resume } from '@/content/resume';
import { STATUS_LABEL } from '@/lib/resume';

const month = (d: string) =>
  isNaN(new Date(d).getFullYear())
    ? ''
    : new Date(d).toLocaleDateString('en-us', { month: 'short' });
const year = (d: string) =>
  isNaN(new Date(d).getFullYear()) ? '' : new Date(d).getFullYear();

const timeframe = (start: string, end: string | null | undefined) =>
  `${month(start)} ${year(start)} · ${
    end ? `${month(end)} ${year(end)}` : 'Present'
  }`;

const bullets = (description: string) =>
  description
    .split('\n')
    .map((line) => line.replace(/^•\s*/, '').trim())
    .filter(Boolean);

const img = (src: string) => `${basePath}${src}`;

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="20" horizontal="center" fillWidth>
      {/* Person */}
      <Column fillWidth horizontal="center" align="center" gap="m">
        <RevealFx translateY="12">
          <Avatar src={img(person.avatar)} size="xl" />
        </RevealFx>
        <Column horizontal="center" align="center" gap="8">
          <RevealFx translateY="12" delay={0.05}>
            <Heading variant="display-strong-l">{person.name}</Heading>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Text variant="heading-default-m" onBackground="neutral-weak">
              {person.role}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.15}>
            <Row gap="8" vertical="center" marginTop="4">
              <Icon onBackground="brand-weak" name="globe" size="s" />
              <Text variant="body-default-s" onBackground="neutral-weak">
                {person.location}
              </Text>
            </Row>
          </RevealFx>
        </Column>
        <RevealFx translateY="12" delay={0.2}>
          <Row wrap gap="8" horizontal="center">
            {languages.map((language) => (
              <Tag key={language} size="l">
                {language}
              </Tag>
            ))}
          </Row>
        </RevealFx>
        <RevealFx translateY="12" delay={0.25}>
          <Row wrap gap="8" horizontal="center" paddingTop="4">
            {social.map((item) => (
              <Button
                key={item.name}
                href={item.link}
                prefixIcon={item.icon}
                label={item.name}
                size="s"
                weight="default"
                variant="secondary"
                arrowIcon={false}
              />
            ))}
          </Row>
        </RevealFx>
      </Column>

      {/* Intro */}
      <Column fillWidth gap="m">
        <RevealFx translateY="12">
          <Heading as="h2" variant="display-strong-s">
            Introduction
          </Heading>
        </RevealFx>
        <Line />
        <RevealFx translateY="12">
          <Text variant="body-default-l">{resume.summary}</Text>
        </RevealFx>
      </Column>

      {/* Work Experience */}
      <Column fillWidth gap="l" id="experience">
        <RevealFx translateY="12">
          <Heading as="h2" variant="display-strong-s">
            Work Experience
          </Heading>
        </RevealFx>
        <Line />
        {resume.workExperience.map((experience, index) => (
          <RevealFx key={experience.company} translateY="12" delay={index * 0.05}>
            <Column fillWidth gap="8" paddingY="8">
              <Row
                fillWidth
                gap="4"
                horizontal="between"
                vertical="end"
                s={{ direction: 'column', horizontal: 'start', vertical: 'start' }}
              >
                <Text variant="heading-strong-l">{experience.company}</Text>
                <Text variant="heading-default-xs" onBackground="neutral-weak">
                  {timeframe(experience.start, experience.end)}
                </Text>
              </Row>
              <Text variant="body-default-s" onBackground="brand-weak" marginBottom="8">
                {experience.title} · {experience.contract} · {experience.location}
              </Text>
              <Column as="ul" gap="12">
                {bullets(experience.description).map((achievement, achIndex) => (
                  <Text as="li" variant="body-default-m" key={achIndex}>
                    {achievement}
                  </Text>
                ))}
              </Column>
            </Column>
          </RevealFx>
        ))}
      </Column>

      {/* Education */}
      <Column fillWidth gap="l">
        <RevealFx translateY="12">
          <Heading as="h2" variant="display-strong-s">
            Studies
          </Heading>
        </RevealFx>
        <Line />
        {resume.education.map((institution) => (
          <RevealFx key={institution.degree} translateY="12">
            <Column fillWidth gap="8" paddingY="4">
              <Row
                fillWidth
                gap="4"
                horizontal="between"
                vertical="end"
                s={{ direction: 'column', horizontal: 'start', vertical: 'start' }}
              >
                <Text variant="heading-strong-l">{institution.school}</Text>
                <Text variant="heading-default-xs" onBackground="neutral-weak">
                  {`${year(institution.start)} · ${year(institution.end)}`}
                </Text>
              </Row>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {institution.degree}
              </Text>
            </Column>
          </RevealFx>
        ))}
      </Column>

      {/* Publications */}
      <Column fillWidth gap="l" id="publications">
        <RevealFx translateY="12">
          <Heading as="h2" variant="display-strong-s">
            Publications
          </Heading>
        </RevealFx>
        <Line />
        {resume.publications.map((publication, index) => (
          <RevealFx key={publication.title} translateY="12" delay={index * 0.05}>
            <Column fillWidth gap="8" paddingY="8">
              <Row fillWidth gap="8" vertical="center" wrap>
                <Text variant="heading-strong-m">
                  {publication.link ? (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit' }}
                    >
                      {publication.title}
                    </a>
                  ) : (
                    publication.title
                  )}
                </Text>
                <Tag size="s">{STATUS_LABEL[publication.status]}</Tag>
              </Row>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {publication.authors.join(', ')}
              </Text>
              <Text variant="body-default-m" onBackground="brand-weak">
                {publication.venue}
                {publication.identifier ? ` · ${publication.identifier}` : ''}
              </Text>
            </Column>
          </RevealFx>
        ))}
      </Column>

      {/* Projects */}
      <Column fillWidth gap="l" id="projects">
        <RevealFx translateY="12">
          <Heading as="h2" variant="display-strong-s">
            Projects
          </Heading>
        </RevealFx>
        <Line />
        {resume.projects.map((project, index) => (
          <RevealFx key={project.name} translateY="12" delay={index * 0.04}>
            <Column fillWidth gap="8" paddingY="8">
              <Row fillWidth gap="8" vertical="center" horizontal="between" wrap>
                <Row gap="8" vertical="center">
                  <Text variant="heading-strong-m">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit' }}
                      >
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </Text>
                  {project.role && (
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {project.role}
                    </Text>
                  )}
                </Row>
                {project.period && (
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {project.period}
                  </Text>
                )}
              </Row>
              <Text variant="body-default-m">{project.description}</Text>
              {project.stack && project.stack.length > 0 && (
                <Row wrap gap="8" paddingTop="4">
                  {project.stack.map((tech) => (
                    <Tag key={tech} size="s">
                      {tech}
                    </Tag>
                  ))}
                </Row>
              )}
            </Column>
          </RevealFx>
        ))}
      </Column>

      {/* Skills */}
      <Column fillWidth gap="l" id="stack">
        <RevealFx translateY="12">
          <Heading as="h2" variant="display-strong-s">
            Technical Skills
          </Heading>
        </RevealFx>
        <Line />
        {skillGroups.map((skill, index) => (
          <RevealFx key={skill.title} translateY="12" delay={index * 0.04}>
            <Column fillWidth gap="12" paddingY="8">
              <Column fillWidth gap="4">
                <Text variant="heading-strong-m">{skill.title}</Text>
              </Column>
              <Row wrap gap="8">
                {skill.tags.map((tag) => (
                  <Tag key={tag} size="l">
                    {tag}
                  </Tag>
                ))}
              </Row>
            </Column>
          </RevealFx>
        ))}
      </Column>
    </Column>
  );
}
