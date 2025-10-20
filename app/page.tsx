import Image from 'next/image';
import Link from 'next/link';

const featuredCourses = [
  {
    title: 'Frontend Engineering Fundamentals',
    category: 'Web Development',
    level: 'Beginner',
    description:
      'Master the essentials of HTML, CSS, and TypeScript while building responsive interfaces from scratch.'
  },
  {
    title: 'Product Design Studio',
    category: 'Design',
    level: 'Intermediate',
    description:
      'Blend user research with prototyping techniques to craft experiences that learners love to use.'
  },
  {
    title: 'Data Science with Python',
    category: 'Data & AI',
    level: 'Advanced',
    description:
      'Work with real-world datasets to uncover insights, build predictive models, and deploy analytics pipelines.'
  }
];

const learningTracks = [
  {
    title: 'STEM Foundations',
    description: 'Interactive science and math pathways for middle and high school learners.'
  },
  {
    title: 'Career Switch Accelerators',
    description: 'Fast-track bootcamps with mentor feedback and career coaching for professionals.'
  },
  {
    title: 'Campus Partnerships',
    description: 'White-label portals that let schools launch blended programs in weeks, not months.'
  }
];

export default function HomePage() {
  return (
    <main className="landing">
      <header className="hero">
        <div className="hero__badge">New cohort enrollments are now open</div>
        <div className="hero__grid">
          <div className="hero__content">
            <Image
              src="/eduway-logo.svg"
              width={160}
              height={40}
              alt="EduWay School logo"
              className="hero__logo"
              priority
            />
            <h1 className="hero__title">Learning that adapts to every student</h1>
            <p className="hero__subtitle">
              EduWay School brings together expert-led courses, adaptive practice, and real-time
              mentorship so your community can learn, build, and grow—wherever they are.
            </p>
            <div className="hero__actions">
              <Link className="button" href="#courses">
                Browse courses
              </Link>
              <Link className="button button--secondary" href="#tracks">
                Explore learning tracks
              </Link>
            </div>
          </div>
          <div className="hero__summary">
            <div className="summary-card">
              <h2>Launch a digital campus in days</h2>
              <p>
                Configure cohorts, enroll students, and monitor progress with dashboards designed for
                academic teams and administrators.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="stats" aria-label="EduWay impact metrics">
        <article className="stat-card">
          <h3>120+</h3>
          <p>Modular lessons crafted with subject-matter experts</p>
        </article>
        <article className="stat-card">
          <h3>35K</h3>
          <p>Learners leveling up their skills across our programs</p>
        </article>
        <article className="stat-card">
          <h3>98%</h3>
          <p>Instructor satisfaction with our teaching toolkit</p>
        </article>
      </section>

      <section id="courses" className="course-grid" aria-labelledby="course-heading">
        <div className="section-heading">
          <h2 id="course-heading">Featured courses</h2>
          <p>Mix and match on-demand lessons with live sessions to fit any learning journey.</p>
        </div>
        <div className="course-grid__items">
          {featuredCourses.map((course) => (
            <article key={course.title} className="course-card">
              <p className="course-card__meta">
                <span>{course.category}</span>
                <span>&bull;</span>
                <span>{course.level}</span>
              </p>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button type="button" className="link-button">
                View syllabus
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="tracks" className="tracks" aria-labelledby="track-heading">
        <div className="section-heading">
          <h2 id="track-heading">Learning tracks for every stage</h2>
          <p>
            Curated pathways combine foundational theory, practical projects, and community feedback
            to drive meaningful outcomes.
          </p>
        </div>
        <div className="tracks__items">
          {learningTracks.map((track) => (
            <article key={track.title} className="track-card">
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta__inner">
          <h2>Ready to create your EduWay experience?</h2>
          <p>
            Partner with us to deliver a branded platform, personalized analytics, and integrations
            that plug into your existing systems.
          </p>
          <Link className="button" href="mailto:hello@eduway.school">
            Talk to our team
          </Link>
        </div>
      </section>
    </main>
  );
}
