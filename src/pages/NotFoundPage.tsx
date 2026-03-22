import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" className="pt-16 md:pt-20">
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Seite nicht gefunden</h1>
            <p className="mt-3 text-base text-gray-700 leading-relaxed">
              Die angeforderte Seite existiert nicht oder wurde verschoben.
            </p>
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-primary-700 transition-colors"
              >
                Zur Startseite
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
