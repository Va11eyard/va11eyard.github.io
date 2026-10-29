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
import { basePath, languages, person, privateRepos, skillGroups, social } from '@/resources/site';
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

// Only brands with a real logo get one; everything else renders as plain text.
const skillIcon: Record<string, string> = {
  Python: 'python',
  Go: 'go',
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  SQL: '',
  PyTorch: 'pytorch',
  MONAI: '',
  'Hugging Face Transformers': 'huggingface',
  'RAG pipelines': '',
  'LLM APIs': '',
  'STT / NLP': '',
  'Computer Vision': '',
  FastAPI: 'fastapi',
  React: 'react',
  'Next.js': 'nextjs',
  Vite: 'vite',
  'Tailwind CSS': 'tailwindcss',
  'ShadCN UI': '',
  PostgreSQL: 'postgresql',
  MongoDB: 'mongodb',
  Docker: 'docker',
  Linux: 'linux',
  'CI/CD (GitHub Actions)': 'githubactions',
  WebRTC: '',
  Figma: 'figma',
  'UI/UX': '',
  'Design systems': '',
  'Next.js 16': 'nextjs',
  'React 19': 'react',
  'Three.js': 'threedotjs',
  MediaPipe: '',
  Embeddings: '',
  CUSUM: '',
  'Clean Architecture': '',
  'Docker Compose': 'docker',
  'Kazakh NLP': '',
  STT: '',
  'Retinal imaging': '',
  'Open data': '',
  'Go API': 'go',
};

// Projects without a public repository link to the GitHub profile instead of
// staying dead, so every card is clickable somewhere real.
const GITHUB_PROFILE = `https://github.com/${resume.header.contacts.github}`;

async function getGitHubStats() {
  const fallback = { repos: 44, stars: 2 };
  try {
    const headers = { 'User-Agent': 'personal-site-build' };
    const [user, repos] = await Promise.all([
      fetch('https://api.github.com/users/Va11eyard', { headers }).then((r) => r.json()),
      fetch('https://api.github.com/users/Va11eyard/repos?per_page=100', { headers }).then((r) => r.json()),
    ]);
    return {
      repos: typeof user.public_repos === 'number' ? user.public_repos : fallback.repos,
      stars: Array.isArray(repos)
        ? repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
        : fallback.stars,
    };
  } catch {
    return fallback;
  }
}

// Turn bare DOI strings in an identifier line into real doi.org links.
function withDoiLinks(text: string) {
  return text.split(/(10\.\d{4,9}\/[\w.\-/]+)/g).map((part, i) =>
    /^10\.\d{4,9}\//.test(part) ? (
      <a
        key={i}
        href={`https://doi.org/${part}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3 }}
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export default async function Home() {
  const stats = await getGitHubStats();

  const dashboard = [
    { value: '2', label: 'Publications', sub: 'IEEE SIST · Zenodo', href: '#publications' },
    { value: '6', label: 'Platforms shipped', sub: 'Galamat Group · DAISY', href: '#experience' },
    {
      value: String(stats.repos),
      label: 'Public repositories',
      sub: 'owned · GitHub',
      href: `${GITHUB_PROFILE}?tab=repositories`,
      external: true,
    },
    {
      value: String(privateRepos),
      label: 'Private repositories',
      sub: 'owned · in development',
      href: GITHUB_PROFILE,
      external: true,
    },
    {
      value: String(stats.stars),
      label: 'GitHub stars',
      sub: 'across public work',
      href: 'https://github.com/Va11eyard/turnshift',
      external: true,
    },
    { value: '2027', label: 'MSc Applied AI', sub: 'Astana IT University', href: '#studies' },
  ];

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      {/* Person */}
      <Column fillWidth horizontal="center" align="center" gap="m">
        <Avatar src={img(person.avatar)} size="xl" />
        <Column horizontal="center" align="center" gap="8">
          <Heading variant="display-strong-l">{person.name}</Heading>
          <Text variant="heading-default-m" onBackground="neutral-weak">
            {person.role}
          </Text>
          <Row gap="8" vertical="center" marginTop="4">
            <Icon onBackground="brand-weak" name="globe" size="s" />
            <Text variant="body-default-s" onBackground="neutral-weak">
              {person.location}
            </Text>
          </Row>
        </Column>
        <Row wrap gap="8" horizontal="center">
          {languages.map((language) => (
            <Tag key={language} size="l">
              {language}
            </Tag>
          ))}
        </Row>
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
            />
          ))}
        </Row>
      </Column>

      {/* Dashboard */}
      <Column fillWidth gap="m">
        <RevealFx translateY="12">
          <Heading as="h2" variant="display-strong-s">
            At a glance
          </Heading>
        </RevealFx>
        <Line />
        <RevealFx translateY="12">
          <Row wrap gap="12" fillWidth>
            {dashboard.map((tile) => (
              <a
                key={tile.label}
                href={tile.href}
                {...('external' in tile && tile.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <Column
                  background="surface"
                  border="neutral-alpha-medium"
                  radius="l"
                  padding="20"
                  gap="4"
                  fitWidth
                >
                  <Text variant="display-strong-xl">{tile.value}</Text>
                  <Text variant="heading-strong-xs">{tile.label}</Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {tile.sub}
                  </Text>
                </Column>
              </a>
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
      <Column fillWidth gap="l" id="studies">
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
                {publication.identifier ? (
                  <>
                    {' · '}
                    {withDoiLinks(publication.identifier)}
                  </>
                ) : null}
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
        {resume.projects.map((project, index) => {
          const link = project.link ?? GITHUB_PROFILE;
          const isRepo = Boolean(project.link);
          return (
            <RevealFx key={project.name} translateY="12" delay={index * 0.04}>
              <Column fillWidth gap="8" paddingY="8">
                <Row fillWidth gap="8" vertical="center" horizontal="between" wrap>
                  <Row gap="8" vertical="center">
                    <Text variant="heading-strong-m">
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        {project.name}
                        <Icon
                          name="arrowUpRight"
                          size="xs"
                          onBackground={isRepo ? 'brand-weak' : 'neutral-weak'}
                          marginLeft="4"
                          style={{ verticalAlign: 'baseline' }}
                        />
                      </a>
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
                      <Tag key={tech} size="s" prefixIcon={skillIcon[tech] || undefined}>
                        {tech}
                      </Tag>
                    ))}
                  </Row>
                )}
              </Column>
            </RevealFx>
          );
        })}
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
                  <Tag key={tag} size="l" prefixIcon={skillIcon[tag] || undefined}>
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
