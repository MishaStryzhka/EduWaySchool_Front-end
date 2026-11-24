import type { Metadata } from 'next';
import LessonList from '../lesson-list';

export const metadata: Metadata = {
  title: 'Щоденні розмови чеською — усі уроки',
  description:
    'Шість безкоштовних діалогів для рівня A1–A2 з аудіо, українським перекладом і практикою.',
  alternates: { canonical: '/uroky' },
};

export default function CoursePage() {
  return (
    <main id="main" className="site-width course-page">
      <div className="lesson-intro">
        <p className="eyebrow">
          <span className="line" /> Курс чеської · A1–A2
        </p>
        <h1>Щоденні розмови</h1>
        <p className="course-lead">
          Шість ситуацій для життя в Чехії. Почни з першої або вибери ту, яка
          потрібна тобі сьогодні.
        </p>
      </div>
      <LessonList heading="h2" />
    </main>
  );
}
