import Link from 'next/link';

const stats = [
  { value: '120+', label: 'інтерактивних уроків' },
  { value: '35 000', label: 'активних студентів' },
  { value: '98%', label: 'задоволених випускників' }
];

const courses = [
  {
    title: 'UI/UX дизайн',
    category: 'Дизайн',
    description: 'Створюйте зручні інтерфейси, працюйте з прототипами та тестуванням користувачів.',
    badge: 'Популярний курс'
  },
  {
    title: 'Frontend розробка',
    category: 'Програмування',
    description:
      'Навчіться працювати з HTML, CSS, TypeScript та сучасними фреймворками для створення веб-додатків.',
    badge: 'Новий курс'
  },
  {
    title: 'Маркетинг в соцмережах',
    category: 'Маркетинг',
    description: 'Освойте контент-стратегії, аналітику та рекламні кампанії для розвитку бренду.',
    badge: 'Навчання у міні-групах'
  },
  {
    title: 'Data Science',
    category: 'Аналітика',
    description:
      'Працюйте з даними, будуйте моделі машинного навчання та приймайте рішення на основі аналітики.',
    badge: 'Проєкти з менторами'
  },
  {
    title: 'Project Management',
    category: 'Менеджмент',
    description: 'Опануйте планування, роботу з командами та впровадження Agile-підходів.',
    badge: 'Практичні кейси'
  },
  {
    title: 'Англійська для ІТ',
    category: 'Мови',
    description: 'Покращуйте комунікацію в міжнародних командах та готуйтеся до технічних інтерв'ю.',
    badge: 'Живі розмовні клуби'
  }
];

const reasons = [
  {
    title: 'Живі онлайн заняття',
    description:
      'Приєднуйтесь до інтерактивних сесій з досвідченими викладачами та спілкуйтесь у чаті в режимі реального часу.'
  },
  {
    title: 'Індивідуальні плани',
    description:
      'Складіть власний маршрут навчання, комбінуючи модулі різної складності та напрямів.'
  },
  {
    title: 'Підтримка наставників',
    description:
      'Отримуйте фідбек щодо домашніх завдань, кар'єрні поради та допомогу у створенні портфоліо.'
  }
];

const steps = [
  {
    title: 'Обирайте напрям',
    description: 'Порівнюйте програми, знайомтесь з планами занять і відгуками студентів.'
  },
  {
    title: 'Реєструйтесь на курс',
    description: 'Заповніть коротку заявку та отримайте доступ до першого безкоштовного уроку.'
  },
  {
    title: 'Навчайтесь у власному темпі',
    description: 'Комбінуйте відео, практичні завдання та живі зустрічі з експертами.'
  }
];

const testimonials = [
  {
    quote:
      'Після проходження курсу з дизайну я зібрала перше портфоліо та отримала пропозицію стажування вже за два тижні.',
    name: 'Олена, Київ',
    role: 'Випускниця курсу «UI/UX дизайн»'
  },
  {
    quote:
      'Платформа дуже зручна: записи, конспекти та перевірені завдання завжди під рукою. Ментор допоміг підготуватися до співбесіди.',
    name: 'Максим, Львів',
    role: 'Студент програми «Frontend розробка»'
  },
  {
    quote:
      'Сподобались практичні завдання та спільнота. Завдяки підтримці кураторів я зміг змінити професію на маркетолога.',
    name: 'Ірина, Дніпро',
    role: 'Випускниця курсу «Маркетинг в соцмережах»'
  }
];

const faqs = [
  {
    question: 'Як проходять заняття на платформі?',
    answer:
      'Усі курси містять відеоуроки, практичні завдання та живі зустрічі. Ви можете навчатися у зручний час і ставити питання викладачам у спільноті.'
  },
  {
    question: 'Чи є розстрочка або можливість оплати частинами?',
    answer:
      'Так, ви можете обрати помісячну оплату або скористатися програмою розстрочки від наших фінансових партнерів.'
  },
  {
    question: 'Чи отримую я сертифікат після завершення?',
    answer:
      'Після успішного виконання всіх модулів та фінального проєкту ви отримуєте сертифікат EduWay, який підтверджує нові навички.'
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="topbar">
        <Link className="topbar__brand" href="#hero">
          <span className="brand-mark" aria-hidden>EW</span>
          EduWay School
        </Link>
        <nav className="topbar__nav" aria-label="Основна навігація">
          <Link href="#courses">Курси</Link>
          <Link href="#reasons">Переваги</Link>
          <Link href="#testimonials">Відгуки</Link>
          <Link href="#faq">FAQ</Link>
        </nav>
        <Link className="topbar__cta" href="mailto:hello@eduway.school">
          Написати нам
        </Link>
      </header>

      <section id="hero" className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Онлайн освіта для підлітків та дорослих</p>
          <h1 className="hero__title">Навчайтесь із задоволенням</h1>
          <p className="hero__subtitle">
            EduWay — це сучасна платформа з інтерактивними курсами, менторами та дружньою спільнотою.
            Обирайте напрям, прокачуйте навички та отримуйте підтримку на кожному етапі.
          </p>
          <div className="hero__actions">
            <Link className="button" href="#courses">
              Переглянути курси
            </Link>
            <Link className="button button--secondary" href="#contact">
              Консультація
            </Link>
          </div>
          <ul className="hero__stats">
            {stats.map((item) => (
              <li key={item.label}>
                <span>{item.value}</span>
                <p>{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__visual" aria-hidden>
          <div className="hero-card hero-card--accent">
            <span className="hero-card__badge">Новий потік</span>
            <h3>Курс «Frontend розробка»</h3>
            <p>Старт 12 серпня · 4 міс.</p>
            <div className="hero-card__avatars">
              <span className="avatar" />
              <span className="avatar" />
              <span className="avatar" />
            </div>
          </div>
          <div className="hero-card hero-card--secondary">
            <h4>Сесія з ментором</h4>
            <p>Заплановано на п'ятницю, 18:00</p>
            <button type="button">Долучитись</button>
          </div>
          <div className="hero__shape" />
        </div>
      </section>

      <section id="courses" className="section courses" aria-labelledby="courses-title">
        <div className="section__heading">
          <h2 id="courses-title">Наші курси</h2>
          <p>
            Обирайте програму, що відповідає вашим цілям, — від стартових модулів до професійних програм з
            менторською підтримкою.
          </p>
        </div>
        <div className="courses__grid">
          {courses.map((course) => (
            <article key={course.title} className="course-card">
              <div className="course-card__badge">{course.badge}</div>
              <div className="course-card__category">{course.category}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link className="course-card__link" href="#contact">
                Дізнатися більше
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="reasons" className="section reasons" aria-labelledby="reasons-title">
        <div className="section__heading">
          <h2 id="reasons-title">Чому варто обрати нас?</h2>
          <p>Створюємо комфортні умови для навчання та зростання кожного студента.</p>
        </div>
        <div className="reasons__grid">
          {reasons.map((reason) => (
            <article key={reason.title} className="reason-card">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section steps" aria-labelledby="steps-title">
        <div className="section__heading">
          <h2 id="steps-title">Зробіть перший крок вже сьогодні!</h2>
          <p>Простий шлях від знайомства з платформою до нової професії.</p>
        </div>
        <div className="steps__grid">
          {steps.map((step, index) => (
            <article key={step.title} className="step-card">
              <span className="step-card__index">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="section testimonials" aria-labelledby="testimonials-title">
        <div className="section__heading">
          <h2 id="testimonials-title">Що говорять наші студенти?</h2>
          <p>Справжні історії тих, хто вже втілив свою мрію з EduWay.</p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="testimonial-card">
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="faq" className="section faq" aria-labelledby="faq-title">
        <div className="section__heading">
          <h2 id="faq-title">Маєте питання?</h2>
          <p>Зібрали відповіді на найпоширеніші запитання щодо навчання.</p>
        </div>
        <div className="faq__list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact__content">
          <h2>Готові приєднатися до EduWay?</h2>
          <p>
            Залиште заявку на консультацію, і ми допоможемо обрати програму, що найкраще відповідає вашим
            цілям.
          </p>
        </div>
        <Link className="button" href="mailto:hello@eduway.school">
          Залишити заявку
        </Link>
      </section>

      <footer className="footer">
        <div>
          <span className="brand-mark" aria-hidden>
            EW
          </span>
          <p>EduWay School · Онлайн освіта для сучасних професій</p>
        </div>
        <div className="footer__info">
          <a href="tel:+380441234567">+38 (044) 123 45 67</a>
          <a href="mailto:hello@eduway.school">hello@eduway.school</a>
          <p>© {new Date().getFullYear()} EduWay. Усі права захищено.</p>
        </div>
      </footer>
    </main>
  );
}
