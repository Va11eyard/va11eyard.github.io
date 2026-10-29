import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { resume } from '@/content/resume';

const mono = JetBrains_Mono({ subsets: ['latin'], display: 'swap' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://va11eyard.github.io';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${resume.header.name} · ${resume.header.shortAbout}`,
  description: resume.summary,
  authors: [{ name: resume.header.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: `${siteUrl}${basePath}/`,
    title: resume.header.name,
    description: resume.summary,
    images: [`${basePath}/og.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: resume.header.name,
    description: resume.summary,
    images: [`${basePath}/og.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mono.className} min-h-screen flex flex-col`}>
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
