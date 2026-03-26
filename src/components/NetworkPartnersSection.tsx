import { ChevronDown, ExternalLink, Users } from 'lucide-react';

type NetworkPartner = {
  name: string;
  meta?: string;
  topics: string[];
  website?: {
    url: string;
  };
};

// Quelle: https://www.uvm-consultinggroup.de/netzwerk
const networkPartners: NetworkPartner[] = [
  
  {
    name: 'Ask.Us',
    meta: 'Klaus Augustin und Angelika Malinowski',
    topics: ['Projektmanagement'],
    website: {
      url: 'https://ask-us-consulting.de/',
    },
   },
  {
    name: 'Stephan Greif',
    topics: ['Outdoor-Training', 'Projektmanagement'],
  website: {
      url: 'https://stephangreif.de/',
    },
     },
  {
    name: 'Ilona Dittner - com motus Leaders Academy GmbH',
    topics: ['Konstruktive Schlagfertigkeit', 'Verhandlungsführung'],
    website: {
      url: 'https://www.leaders-academy.eu/',
    },
  },
  {
    name: 'Verena Diews',
    topics: ['Coaching', 'Changemanagement' ],
    
     
  },
  {
    name: 'Tim Kumpat',
    topics: ['KI', 'Digitalisierung'],
  },
  {
    name: 'Prof. Dr. Stephanie Rascher',
    topics: ['Institut für Human Factors'],
    website: {
      url: 'https://www.institut-hf.de/',
    },
  },
  {
    name: 'Prof. Dr. Matthias Spörrle',
    topics: ['Psychologie', 'KI'],
      },
  {
    name: 'Ralf Wittmann',
    topics: ['Erfolgreiches Arbeiten im Homeoffice'],
    website: {
      url: 'https://p3-consult.com/',
    },
  },
];

function TopicBadges({ topics }: { topics: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((t) => (
        <span
          key={t}
          className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm text-primary-800 border border-primary-100"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function NetworkPartnersSection() {
  const sortedPartners = [...networkPartners].sort((a, b) =>
    a.name.localeCompare(b.name, 'de', { sensitivity: 'base' })
  );

  return (
    <section id="netzwerk" className="py-20 bg-white text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-primary-600 rounded-lg">
            <Users size={32} className="text-white" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Netzwerk</h2>
            <p className="mt-2 text-base text-gray-700 leading-relaxed">
              Durch unsere langjährige Tätigkeit an Hochschulen und Universitäten verfügen wir über ein Netzwerk
              an Kooperationspartnern und Spezialisten, die wir bei Bedarf zu unseren Projekten hinzuziehen.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-primary-100 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hier finden Sie eine Übersicht der Netzwerkpartnerinnen und -partner. Jeder Eintrag ist als Dropdown aufgebaut.
              Falls eine Webseite hinterlegt ist, führt der Button direkt dorthin.
            </p>
          </div>

          <div className="p-4 md:p-6 space-y-3">
            {sortedPartners.map((p) => (
              <details key={p.name} className="group rounded-xl border border-gray-100 bg-white shadow-sm">
                <summary className="list-none cursor-pointer select-none p-5 md:p-6">
                  <div className="flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <h3 className="text-2xl font-bold text-gray-900">{p.name}</h3>
                      {p.meta && <p className="mt-1 text-sm text-gray-600">{p.meta}</p>}
                      <div className="mt-3">
                        <TopicBadges topics={p.topics} />
                      </div>
                    </div>

                    <ChevronDown
                      size={20}
                      className="mt-1 flex-shrink-0 text-gray-500 transition-transform group-[open]:rotate-180"
                    />
                  </div>
                </summary>

                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-base text-gray-700 leading-relaxed">Schwerpunkte: {p.topics.join(' · ')}</p>

                    {p.website && (
                      <div className="mt-5">
                        <a
                          href={p.website.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-white text-base font-medium hover:bg-primary-700 transition-colors"
                        >
                          Zur Webseite
                          <ExternalLink size={16} className="text-white" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
