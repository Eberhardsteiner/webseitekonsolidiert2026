// src/components/BooksSection.tsx
import { BookOpen } from 'lucide-react';

type Book = {
  title: string;
  authors: string;
  cover: string;
  summary: string[];
};

const books: Book[] = [
  {
    title: 'Psychologie der Wirtschaft (2013)',
    authors: 'Miriam Landes & Eberhard Steiner (Hrsg.)',
    cover: 'https://media.springernature.com/w153/springer-static/cover/book/978-3-531-18957-4.jpg',
    summary: [
      'Umfassende Einführung in die Wirtschaftspsychologie.',
      'Verbindet psychologische Perspektiven von Individuen und Organisationen mit betriebswirtschaftlichen Sichtweisen.',
      'Kombiniert Theorie und Fallbeispiele für Praktiker und Studierende.'
    ],
  },
  {
    title: 'Kreativität und Innovation in Organisationen (2022)',
    authors: 'Miriam Landes, Eberhard Steiner & Tatjana Utz (Hrsg.)',
    cover: 'https://media.springernature.com/w153/springer-static/cover/book/978-3-662-63117-1.jpg',
    summary: [
      'Tiefe Einblicke in Prozesse und Rahmenbedingungen zur Förderung von Kreativität und Innovation.',
      'Vereint Erkenntnisse aus Psychologie, Kunst, Wirtschaft, Neurowissenschaften und KI.',
      'Stellt praxisorientierte Methoden und Tools vor.'
    ],
  },
   {
    title: 'New Work, Neues Arbeiten virtuell und in Präsenz (2023)',
    authors: 'Marc Helmold, Miriam Landes, Eberhard Steiner, Tracy Dathe & Lars Jeschio',
    cover: 'https://media.springernature.com/w153/springer-static/cover/book/978-3-658-41289-0.jpg',
    summary: [
      'Bietet einen umfassenden Überblick über New Work und virtuelle Führung.',
      'Beschreibt praxisorientiert Tools und Methoden für langfristigen Erfolg und die Demokratisierung von Entscheidungen.',
      'Behandelt Themen wie Agilität, Kollaboration, Homeoffice, Ambidextrie und Complexity Leadership.'
    ],
  },
  {
    title: 'Führung von Mitarbeitenden im Home Office (2020)',
    authors: 'Miriam Landes & Eberhard Steiner',
    cover: 'https://media.springernature.com/w153/springer-static/cover/book/978-3-658-30053-1.jpg',
    summary: [
      'Analysiert psychologische, wirtschaftliche und praktische Aspekte der Führung auf Distanz.',
      'Beleuchtet die Perspektiven der Führungskraft und des Unternehmens.',
      'Liefert Empfehlungen und Rahmenbedingungen für erfolgreiches Arbeiten im Home Office.'
    ],
  },
  {
    title: 'Erfolgreich und gesund im Homeoffice arbeiten (2021)',
    authors: 'Miriam Landes & Eberhard Steiner',
    cover: 'https://media.springernature.com/w153/springer-static/cover/book/978-3-658-32633-3.jpg',
    summary: [
      'Zeigt, wie Mitarbeitende und Teams die Herausforderungen der Heimarbeit meistern.',
      'Vermittelt, wie man die Arbeit effizient organisiert und dabei Gesundheit und Wohlbefinden wahrt.',
      'Gibt praktische Tipps für erfolgreiche Fernarbeit.'
    ],
  },
  {
    title: 'Psychologische Auswirkungen von Change Prozessen (2014)',
    authors: 'Miriam Landes & Eberhard Steiner',
    cover: 'https://media.springernature.com/w153/springer-static/cover/book/978-3-658-05642-1.jpg',
    summary: [
      'Betont, dass Veränderungen unvermeidbar sind und rechtzeitig gesteuert werden müssen.',
      'Ordnet Veränderungsarten in neun typische Situationen ein und analysiert Widerstände.',
      'Zeigt Wege auf, wie Führungskräfte Veränderungen erfolgreich gestalten können.'
    ],
  },
  {
    title: 'Meta‑Führung – Besonderheiten bei der Führung von Führungskräften (2015)',
    authors: 'Miriam Landes & Eberhard Steiner',
    cover: 'https://media.springernature.com/w153/springer-static/cover/book/978-3-658-10850-2.jpg',
    summary: [
      'Analysiert Unterschiede zwischen der Führung von Mitarbeitenden und der Führung von Führungskräften.',
      'Untersucht geeignete Führungsstile für das Führen von Führungskräften.',
      'Stellt ein „hemisphärisches Modell“ vor und beschreibt Trends für die Führungsausbildung.'
    ],
  },
  {
    title: 'Leistungsorientierte Vergütung – Anreizsysteme wirkungsvoll gestalten (2017)',
    authors: 'Eberhard Steiner & Miriam Landes',
    cover: 'https://exlibris.azureedge.net/covers/9783/6480/7951/5/9783648079515xl.jpg',
    summary: [
      'Zeigt, wie leistungsabhängige Entlohnungssysteme aufgebaut und optimiert werden.',
      'Beleuchtet arbeitspsychologische und ökonomische Grundlagen sowie Gerechtigkeitsaspekte.',
      'Erklärt, wie Motivation, Selektion, Kostensenkung und Mitarbeiterbindung erreicht werden können.'
    ],
  },
 
];

export default function BooksSection() {
  return (
    <section id="publikationen" className="py-20 bg-[#101420]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12 text-white">
          <div className="p-3 bg-primary-600 rounded-lg">
            <BookOpen size={32} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Publikationen</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {books.map((book) => (
            <div key={book.title} className="bg-white p-6 rounded-xl shadow-sm flex">
              {/* Cover */}
              <div className="w-24 h-32 flex-shrink-0 mr-4">
                <img
                  src={book.cover}
                  alt={`${book.title} Cover`}
                  className="w-full h-full object-contain rounded"
                  loading="lazy"
                />
              </div>
              {/* Details */}
              <div>
                <h3 className="text-xl font-bold text-gray-900">{book.title}</h3>
                <p className="text-primary-600 text-sm">{book.authors}</p>
                <div className="mt-2 text-gray-700 text-sm leading-snug">
                  {book.summary.map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
