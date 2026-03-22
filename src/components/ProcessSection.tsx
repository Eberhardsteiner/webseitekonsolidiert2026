import { Search, Target, Rocket, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    number: 1,
    title: 'Analyse & Assessment',
    description: 'Wir analysieren Ihre aktuelle Situation mit dem 4C QuickScan und identifizieren die größten Hebel für Ihre Zukunftsfähigkeit.',
    icon: Search,
  },
  {
    number: 2,
    title: 'Strategie & Planung',
    description: 'Gemeinsam entwickeln wir eine maßgeschneiderte Roadmap, die alle vier Dimensionen des 4C-Modells integriert.',
    icon: Target,
  },
  {
    number: 3,
    title: 'Umsetzung & Begleitung',
    description: 'Wir unterstützen Sie bei der konkreten Umsetzung mit Workshops, Trainings und kontinuierlicher Begleitung.',
    icon: Rocket,
  },
  {
    number: 4,
    title: 'Verankerung & Optimierung',
    description: 'Durch regelmäßige Reviews und Anpassungen stellen wir sicher, dass die Veränderungen nachhaltig wirken.',
    icon: CheckCircle,
  },
];

export default function ProcessSection() {
  return (
    <section id="prozess" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vom Modell zur Umsetzung:
            <span className="text-primary-600 block mt-2">Die „4C Navigator" Produktfamilie</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Wir übersetzen das 4C-Modell in einen klaren, schrittweisen Prozess, der Sie von
            der Analyse bis zur nachhaltigen Verankerung begleitet. Jede Phase wird durch
            konkrete, produktisierte Dienstleistungen unterstützt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <Icon className="text-primary-600 flex-shrink-0" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
