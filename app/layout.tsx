import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css';

import classNames from 'classnames';
import type { Metadata } from 'next';

import { Background, Column, Flex, RevealFx } from '@once-ui-system/core';
import type { Opacity } from '@once-ui-system/core';
import { Providers } from '@/components/Providers';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { effects, fonts, style, siteUrl, person } from '@/resources/site';
import { resume } from '@/content/resume';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${resume.header.name} · ${resume.header.shortAbout}`,
  description: resume.summary,
  authors: [{ name: resume.header.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: `${siteUrl}/`,
    title: resume.header.name,
    description: resume.summary,
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: resume.header.name,
    description: resume.summary,
    images: ['/og.png'],
  },
};

// The reference resolves system preference, but the brief for this site is
// light mode specifically, so the theme is pinned rather than resolved.
const themeInit = `
  (function() {
    try {
      const root = document.documentElement;
      const config = ${JSON.stringify({
        brand: style.brand,
        accent: style.accent,
        neutral: style.neutral,
        solid: style.solid,
        'solid-style': style.solidStyle,
        border: style.border,
        surface: style.surface,
        transition: style.transition,
        scaling: style.scaling,
      })};
      Object.entries(config).forEach(function (e) {
        root.setAttribute('data-' + e[0], e[1]);
      });
      root.setAttribute('data-theme', 'light');
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: resume.header.name,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: resume.header.shortAbout,
    description: resume.summary,
    email: `mailto:${resume.header.contacts.email}`,
    url: `${siteUrl}/`,
    sameAs: [
      `https://github.com/${resume.header.contacts.github}`,
      `https://www.linkedin.com/in/${resume.header.contacts.linkedin}`,
    ],
    knowsAbout: resume.header.skills,
    alumniOf: resume.education.map((e) => ({
      '@type': 'CollegeOrUniversity',
      name: e.school,
    })),
  };

  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      data-theme="light"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <script id="theme-init" dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link rel="icon" href={person.avatar} type="image/jpeg" />
        <link rel="apple-touch-icon" href={person.avatar} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          style={{ minHeight: '100vh' }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          <RevealFx fill position="absolute">
            <Background
              mask={{ x: effects.mask.x, y: effects.mask.y, radius: effects.mask.radius, cursor: effects.mask.cursor }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as Opacity,
                size: effects.dots.size,
                color: effects.dots.color,
              }}
              gradient={{ display: false }}
              grid={{ display: false }}
              lines={{ display: false }}
            />
          </RevealFx>
          <Flex fillWidth minHeight="16" s={{ hide: true }} />
          <Header />
          <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1}>
            <Flex horizontal="center" fillWidth minHeight="0">
              {children}
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}
