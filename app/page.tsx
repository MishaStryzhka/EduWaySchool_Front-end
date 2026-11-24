import Image from 'next/image';
import Link from 'next/link';
import { lessonPath } from './course';

export default function Home() {
  return (
    <main id="main" className="site-width">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="line" /> Онлайн-школа чеської
          </p>
          <h1>
            Чеська для
            <br />
            <em>реального</em>
            <br />
            життя.
          </h1>
          <p className="lead">
            Слухай розмови чеською, розбирай складні фрази українською й тренуй
            власну відповідь.
          </p>
          <Link className="action" href={lessonPath}>
            Почати перший урок <span aria-hidden="true">↗</span>
          </Link>
          <p className="small-note">Безкоштовно · без реєстрації</p>
        </div>
        <figure className="postcard">
          <div className="photo-frame">
            <Image
              src="/praha-tram.webp"
              alt="Червоний трамвай на площі в Празі"
              fill
              priority
              sizes="(max-width: 700px) 94vw, 48vw"
            />
          </div>
          <figcaption>
            <span lang="cs">Praha, Česko</span>
            <span>Прага, Чехія</span>
          </figcaption>
        </figure>
      </section>

      <section className="route-section" id="uroky">
        <p className="eyebrow">
          <span className="line" /> Уроки
        </p>
        <h2>Перша розмова</h2>
        <Link href={lessonPath} className="lesson-card">
          <div className="lesson-stamp" aria-hidden="true">
            <span lang="cs">pátek</span>
            <strong>
              15<span>:</span>30
            </strong>
          </div>
          <div className="card-copy">
            <span className="meta">A1–A2 · Побут і робота</span>
            <h3>Домовитися про час</h3>
            <p>
              Майстер і клієнт узгоджують візит. Послухай, на який час вони
              домовилися, і запропонуй свій варіант.
            </p>
          </div>
          <span className="card-go" aria-hidden="true">
            ↗
          </span>
        </Link>
      </section>

      <section className="method" id="metod">
        <div>
          <p className="eyebrow">
            <span className="line" /> Метод
          </p>
          <h2>Як проходить урок</h2>
        </div>
        <ol className="method-list">
          <li>
            <strong>Послухай</strong>
            <p>
              Спочатку почуй діалог чеською. За потреби відкрий текст і
              український переклад.
            </p>
          </li>
          <li>
            <strong>Розберися</strong>
            <p>Дай відповідь і прочитай пояснення саме до обраного варіанта.</p>
          </li>
          <li>
            <strong>Скажи по-своєму</strong>
            <p>
              Напиши власну репліку та звір її зі зразком. Її можна одразу
              використати в розмові.
            </p>
          </li>
        </ol>
      </section>
    </main>
  );
}
