import Link from 'next/link';
import { lessons } from './course';

export default function LessonList({
  heading: Heading = 'h3',
}: {
  heading?: 'h2' | 'h3';
}) {
  return (
    <ol className="lesson-list">
      {lessons.map((lesson, index) => (
        <li key={lesson.slug}>
          <Link href={'/uroky/' + lesson.slug} className="lesson-card">
            <span className="lesson-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="card-copy">
              <span className="meta">{lesson.topic}</span>
              <Heading>{lesson.title}</Heading>
              <p lang="cs">{lesson.subtitle}</p>
            </div>
            <span className="card-go" aria-hidden="true">
              ↗
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
