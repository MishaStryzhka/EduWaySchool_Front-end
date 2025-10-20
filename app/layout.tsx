import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EduWay School | Online Learning Platform',
  description:
    'EduWay School is a modern learning platform that helps students and professionals master new skills through curated courses and interactive cohorts.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
