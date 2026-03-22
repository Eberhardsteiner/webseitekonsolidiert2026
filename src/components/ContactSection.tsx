import { Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Unverbindliches Erstgespräch',
    description: 'Wir diskutieren Ihre aktuellen Herausforderungen und Ziele.',
  },
  {
    number: 2,
    title: 'Konkreter Vorschlag',
    description: 'Sie erhalten ein maßgeschneidertes Angebot, oft beginnend mit dem 4C QuickScan.',
  },
  {
    number: 3,
    title: 'Start der Transformation',
    description: 'Wir beginnen die gemeinsame Reise zu Ihrer zukunftsfähigen Organisation.',
  },
];

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.08),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white shadow-xl hover:shadow-2xl hover-lift transition-all duration-500 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 animate-pulse">
                Einstiegsprodukt
              </span>
              <h3 className="text-2xl font-bold mb-4">4C Navigator QuickScan</h3>
              <p className="text-base text-white/90 mb-6">
                In 2 Wochen zu Klarheit über Ihre Zukunftsfähigkeit. Eine kompakte, datengestützte
                Analyse Ihres Unternehmens über alle vier Dimensionen des 4C-Modells.
              </p>
              <a
                href="mailto:info@uvm-cg.de"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg text-base font-medium hover:bg-white/90 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
              >
                QuickScan anfragen
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <p className="text-base font-medium">Online-Self-Assessment für Führungskräfte</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <p className="text-base font-medium">Strukturierte Kurzinterviews mit Schlüsselpersonen</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <p className="text-base font-medium">10-seitiger Score-Report mit Benchmark-Vergleich</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <p className="text-base font-medium">90-minütiger Ergebnis-Call zur Einordnung</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Beginnen wir das Gespräch.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lassen Sie uns gemeinsam herausfinden, wie das 4C-Modell den Weg für Ihre
            zukunftsfähige Organisation ebnen kann.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-8 animate-fade-in-up delay-100">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-4 group animate-slide-in-left" style={{ animationDelay: `${100 + index * 100}ms` }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 text-primary-600 flex items-center justify-center font-bold shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 animate-fade-in-up delay-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktdaten</h3>
            <div className="space-y-4">
              <a href="mailto:info@uvm-cg.de" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-all duration-200 group">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-lg">info@uvm-cg.de</span>
              </a>
              <a href="tel:+498915900075" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-all duration-200 group">
                <Phone size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-lg">+49 89 15 9000 75</span>
              </a>
              <a href="https://www.linkedin.com/company/uvm-consulting" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-all duration-200 group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-lg">linkedin.com/company/uvm-consulting</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
