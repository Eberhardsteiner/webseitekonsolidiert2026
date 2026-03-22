import type { ComponentType } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  ChevronDown,
  Globe2,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  MessageSquare,
  Shield,
  Users,
} from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { ROUTES, SECTIONS } from '../constants/paths';

type TopicGroup = {
  title: string;
  items: string[];
};

type Category = {
  id: string;
  title: string;
  summary: string;
  // lucide-react Icons akzeptieren size als number oder string
  icon: ComponentType<{ size?: number | string; className?: string }>;
  accent: 'teal' | 'cyan' | 'amber' | 'violet';
  items?: string[];
  groups?: TopicGroup[];
};

const accentClasses: Record<Category['accent'], { iconBg: string; border: string }> = {
  teal: { iconBg: 'bg-primary-500', border: 'border-primary-100' },
  cyan: { iconBg: 'bg-secondary-500', border: 'border-secondary-100' },
  amber: { iconBg: 'bg-tertiary-500', border: 'border-tertiary-100' },
  violet: { iconBg: 'bg-violet-600', border: 'border-violet-100' },
};

// Zusammenfassung aus dem Fortbildungskatalog (B1–B8)
const categories: Category[] = [
  {
    id: '3k',
    title: 'Kommunikation, Konfliktmanagement, Kollaboration (3K)',
    summary:
      'Professionelle Gesprächsführung, Konfliktkompetenz und Zusammenarbeit, inklusive virtueller Kommunikation und Feedback.',
    icon: MessageSquare,
    accent: 'teal',
    items: [
      'Wirksam kommunizieren als Führungskraft',
      'Konfliktmanagement als Führungskraft I & II',
      'Umgang mit schwierigen Führungssituationen',
      'Kommunikation im virtuellen Raum',
      'Feedback im virtuellen Raum',
    ],
  },
  {
    id: 'iup',
    title: 'Innovation und Problemlösung (IuP)',
    summary:
      'Zielklarheit, Kreativität und strukturierte Problemlösung, inklusive Design Thinking und Prozessmanagement.',
    icon: Lightbulb,
    accent: 'amber',
    items: [
      'Ziele erreichen (achtsam und empathisch führen)',
      'Innovation und Kreativität für Führungskräfte',
      'Analytisch Probleme lösen',
      'Design Thinking und Innovation',
      'Prozessmanagement für Führungskräfte',
    ],
  },
  {
    id: 'res',
    title: 'Resilienz und Selbstorganisation (RES)',
    summary:
      'Selbststeuerung, gesundes Arbeiten und psychische Widerstandskraft, insbesondere in hybriden Settings.',
    icon: Shield,
    accent: 'cyan',
    items: ['Effektiv und gesund im Homeoffice arbeiten', 'Resilienz'],
  },
  {
    id: 'ful',
    title: 'Führung und Leadership (FUL)',
    summary:
      'Führung im Alltag: Gespräche führen, Teams entwickeln, Ziele setzen, Entscheidungen treffen und Wandel gestalten.',
    icon: Users,
    accent: 'violet',
    groups: [
      {
        title: 'Führungskommunikation & Gespräche',
        items: [
          'Kommunikativ führen',
          'Mitarbeitendengespräche führen (I: Grundlagen, II: Praxis)',
          'Feedback geben und annehmen',
          'Wertschätzend führen',
          'Führen durch Fragen',
        ],
      },
      {
        title: 'Team & Entwicklung',
        items: [
          'Das Team als Führungskraft entwickeln',
          'Mitarbeitende entwickeln',
          'Kollegiale Beratung',
          'Die ersten hundert Tage als Führungskraft',
        ],
      },
      {
        title: 'Modern führen (digital, Fehlerkultur, New Leadership)',
        items: ['Leadership 4.0', 'Digital Leadership', 'Fehlerkultur etablieren'],
      },
      {
        title: 'Entscheidung, Ziele & Veränderung',
        items: [
          'Entscheidungen treffen',
          'Führen mit Zielen',
          'Als Führungskraft mit Konflikten und Mobbing umgehen',
          'Veränderungen anstoßen und gestalten',
        ],
      },
    ],
  },
  {
    id: 'fff',
    title: 'Fit für Führung (FFF)',
    summary:
      'Modulare Programme für unterschiedliche Führungsebenen, mit Transfer über kollegiale Beratung und Praxisfälle.',
    icon: GraduationCap,
    accent: 'teal',
    groups: [
      {
        title: 'Fit für Führung: Basic, Advanced, Experienced',
        items: [
          'Basic: Selbstführung, Mitarbeitende führen, Team führen (Innovation vs. Routine) + kollegiale Beratung',
          'Advanced: Selbstorganisation & Entscheidungskraft, Organisationseinheit führen, in die Organisation wirken + kollegiale Beratung',
          'Experienced: Führung der Zukunft, Abteilung führen + kollegiale Beratung',
        ],
      },
      {
        title: 'Fit für Stellvertretung',
        items: [
          'Grundlagen der Führung',
          'Kommunikation und Motivation',
          'Organisation, Gerechtigkeit und Vertrauen',
          'Entscheidungskompetenz',
        ],
      },
    ],
  },
  {
    id: 'mm',
    title: 'Managementmethoden (MM)',
    summary:
      'Handwerkszeug für Verhandlung, Präsentation, Moderation sowie Projekt- und Selbstmanagement.',
    icon: Briefcase,
    accent: 'amber',
    items: [
      'Erfolgreich verhandeln',
      'Wirkungsvoll präsentieren',
      'Überzeugend moderieren',
      'Projektmanagement für Führungskräfte',
      'Selbstmanagement & Zeitmanagement',
      'Selbstvertrauen und souveränes Auftreten',
      'Teammeetings in Präsenz und digital kreativ und strukturiert gestalten',
    ],
  },
  {
    id: 'gf',
    title: 'Gesund führen',
    summary:
      'Stress, Ressourcen, Ergonomie und mentale Gesundheit als Bestandteil wirksamer Führung und nachhaltiger Leistungsfähigkeit.',
    icon: HeartPulse,
    accent: 'cyan',
    items: [
      'Antreiber: Ressourcen und Stressoren',
      'Stressmanagement',
      'Healthy Leadership (gesundes Arbeitsumfeld & BGM)',
      'Rückengesundheit & Ergonomie',
      'Achtsamkeit',
      'Mental Health für Führungskräfte',
      'Innere Stärke in Veränderungszeiten (Resilienz & Change)',
    ],
  },
  {
    id: 'vk',
    title: 'Vielfaltskompetenz (VK)',
    summary:
      'Diversity-Kompetenz: gender- und interkulturell sensibel führen, Diskriminierung erkennen und vorbeugen.',
    icon: Globe2,
    accent: 'violet',
    items: ['Vielfaltskompetenz'],
  },
];

export default function FuehrungskraeftequalifizierungPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main id="main-content" className="pt-16 md:pt-20">
        <section className="py-16 md:py-20 bg-gradient-to-br from-violet-50 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-base text-gray-600 hover:text-violet-700 transition-colors font-medium"
            >
              <ArrowLeft size={18} />
              Zurück
            </button>

            <div className="mt-8 flex items-start gap-4">
              <div className="p-3 bg-violet-600 rounded-xl">
                <GraduationCap size={30} className="text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Führungskräftequalifizierung
                </h1>
                <p className="mt-2 text-lg text-gray-700 leading-relaxed">
                  Die Qualifizierung ist modular aufgebaut. Je nach Rolle, Erfahrung und Zielsetzung lassen
                  sich einzelne Trainings oder komplette Lernpfade kombinieren.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Orientierung</h2>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Die Module sind in thematische Bereiche gegliedert, von Kommunikation und Konfliktmanagement über
                Innovation und Problemlösung bis zu Leadership, Methodenkompetenz, Gesundheit und Vielfalt.
              </p>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                Für die Praxis bewährt ist eine Kombination aus (1) Führungsgrundlagen, (2) Kommunikations- und
                Konfliktkompetenz, (3) Ziel- und Entscheidungsfähigkeit sowie (4) Transferformaten.
              </p>
            </div>

            <div className="mt-10 space-y-5">
              {categories.map((category) => {
                const c = accentClasses[category.accent];
                const Icon = category.icon;

                return (
                  <details
                    key={category.id}
                    className={`group bg-white rounded-2xl border ${c.border} shadow-sm overflow-hidden`}
                  >
                    <summary className="list-none cursor-pointer select-none p-6 md:p-7">
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${c.iconBg} flex-shrink-0`}>
                            <Icon size={22} className="text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                            <p className="mt-2 text-base text-gray-600 leading-relaxed">{category.summary}</p>
                          </div>
                        </div>

                        <ChevronDown
                          size={20}
                          className="text-gray-500 flex-shrink-0 mt-2 transition-transform group-open:rotate-180"
                        />
                      </div>
                    </summary>

                    <div className="px-6 md:px-7 pb-6 md:pb-7">
                      {category.groups ? (
                        <div className="space-y-5">
                          {category.groups.map((g) => (
                            <div key={g.title} className="bg-gray-50 rounded-xl p-4 md:p-5">
                              <h4 className="text-xl font-bold text-gray-900">{g.title}</h4>
                              <ul className="mt-3 space-y-2 text-base text-gray-700">
                                {g.items.map((item) => (
                                  <li key={item} className="flex items-start gap-3">
                                    <span className="mt-2 w-2 h-2 bg-gray-400 rounded-full flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-2 text-base text-gray-700">
                          {(category.items ?? []).map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span className="mt-2 w-2 h-2 bg-gray-400 rounded-full flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </details>
                );
              })}
            </div>

            <div className="mt-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-10 text-white">
              <h3 className="text-2xl font-bold">Details besprechen</h3>
              <p className="mt-3 text-base text-white/90 leading-relaxed max-w-2xl">
                Wenn Sie Zielgruppe, Führungslevel und Kontext nennen, lässt sich daraus ein passender Lernpfad
                ableiten und priorisieren.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-white text-primary-700 px-6 py-3 rounded-lg text-base font-medium hover:bg-primary-50 transition-colors"
                >
                  Zur Startseite
                </Link>
                <Link
                  to={`${ROUTES.HOME}${SECTIONS.KONTAKT}`}
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-white/20 transition-colors"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
