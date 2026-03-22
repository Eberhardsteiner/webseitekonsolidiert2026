import Header from '../components/Header';
import Footer from '../components/Footer';
import UnternehmenMainContent from '../components/UnternehmenMainContent';

export default function UnternehmenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" className="pt-16 md:pt-20">
        <UnternehmenMainContent />
      </main>
      <Footer />
    </div>
  );
}
