import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lessons } from '../../course';
import LessonPlayer from '../lesson-player';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return lessons.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lesson = lessons.find((entry) => entry.slug === slug);
  if (!lesson) notFound();
  return {
    title: lesson.title + ' чеською',
    description: lesson.scene,
    alternates: { canonical: '/uroky/' + slug },
  };
}

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;
  const index = lessons.findIndex((entry) => entry.slug === slug);
  if (index === -1) notFound();
  const lesson = lessons[index];
  const next = lessons[index + 1];

  return (
    <main id="main" className="lesson-shell">
      <Link className="back" href="/uroky">
        ← Усі уроки
      </Link>
      <div className="lesson-intro">
        <p className="eyebrow">
          <span className="line" /> Урок {index + 1} із {lessons.length} ·{' '}
          {lesson.topic}
        </p>
        <h1>{lesson.title}</h1>
        <p lang="cs" className="czech-title">
          {lesson.subtitle}
        </p>
      </div>
      <LessonPlayer
        key={slug}
        lesson={lesson}
        next={next && { slug: next.slug, title: next.title }}
      />
    </main>
  );
}
