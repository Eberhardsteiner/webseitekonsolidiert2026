import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ModelSection from '../components/ModelSection';
import ProcessSection from '../components/ProcessSection';
import ProductsSection from '../components/ProductsSection';
import ContactSection from '../components/ContactSection';
import ValuesSection from '../components/ValuesSection';
import Footer from '../components/Footer';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const scrollToElement = () => {
        // Sanitize hash to prevent XSS: only allow alphanumeric, hyphens, and underscores
        const id = location.hash.replace('#', '').replace(/[^a-zA-Z0-9_-]/g, '');
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      };

      setTimeout(scrollToElement, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
        <HeroSection />
        <ModelSection />
        <ProcessSection />
        <ProductsSection />
        <ContactSection />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  );
}
