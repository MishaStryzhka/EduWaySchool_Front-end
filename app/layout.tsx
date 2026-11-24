import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://eduwayschool.com'),
  title: {
    default: 'EduWay School — чеська для українців',
    template: '%s | EduWay School',
  },
  description:
    'Практичні уроки чеської для життя і роботи. Слухай чеські діалоги, тренуй відповіді та отримуй пояснення українською.',
  icons: { icon: '/eduway-logo.svg' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <a className="skip" href="#main">
          До основного вмісту
        </a>
        <header className="site-header">
          <div className="site-width header-inner">
            <Link
              href="/"
              className="brand"
              aria-label="EduWay School — на головну"
            >
              <span className="brand-mark" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              EduWay<span className="brand-school">School</span>
            </Link>
            <nav aria-label="Головне меню">
              <Link href="/uroky">Уроки</Link>
              <Link href="/#metod">Як навчаємося</Link>
            </nav>
            <Link className="header-action" href="/uroky">
              До курсу <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </header>
        {children}
        <footer className="site-width footer">
          <Link className="foot-brand" href="/">
            EduWay School
          </Link>
          <span>Чеська для українців</span>
        </footer>
      </body>
    </html>
  );
}
