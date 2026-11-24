import type { Metadata } from 'next';
import Link from 'next/link';
import Lesson from './lesson';
import { lessonPath } from '../../course';

export const metadata: Metadata = {
  title: 'Домовитися про час чеською — пробний урок',
  description:
    'Послухай чеський діалог про час візиту, розбери вислів «v půl čtvrté» й запропонуй інший день.',
  alternates: { canonical: lessonPath },
};

export default function LessonPage() {
  return (
    <main id="main" className="lesson-shell">
      <Link className="back" href="/#uroky">
        ← До уроків
      </Link>
      <div className="lesson-intro">
        <p className="eyebrow">
          <span className="line" /> A1–A2 · Побут і робота
        </p>
        <h1>Домовитися про час</h1>
        <p lang="cs" className="czech-title">
          Domluvíme se na termínu
        </p>
      </div>
      <Lesson />
    </main>
  );
}
