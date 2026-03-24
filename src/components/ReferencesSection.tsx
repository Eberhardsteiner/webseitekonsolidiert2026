import { Award, ExternalLink } from 'lucide-react';

type ReferenceEntry = {
  name: string;
  // Optional für später: falls Sie einzelne Referenzen künftig mit URLs versehen möchten.
  websiteUrl?: string;
};

type ReferenceGroup = {
  letter: string;
  entries: ReferenceEntry[];
};

// Quelle: https://www.uvm-consultinggroup.de/referenzen6ddf2bed
const referenceGroups: ReferenceGroup[] = [
  {
    letter: 'A',
    entries: [
      { name: 'Academy of Finance Bonn' },
      { name: 'AKDB - Anstalt für kommunale Datenverarbeitung Bayern, München' },
      { name: 'Apprendi Professional Development Ludwig-Maximilians-Universität München' },
      { name: 'Atec, Palmela' },
      { name: 'Autoeuropa Lissabon' },
      { name: 'Autovision GmbH Wolfsburg, Brüssel und Györ' },
    ],
  },
  {
    letter: 'B',
    entries: [
      { name: 'Bayerischer Landtag München' },
      { name: 'Bezirk Oberbayern München' }, { name: 'Berufsfeuerwehr München' },
      { name: 'Berufsfeuerwehr Ingolstadt' },
      { name: 'Bildungscampus Nürnberg' },
      { name: 'BES Brunold GmbH Schwandorf' },
    ],
  },
  {
    letter: 'C',
    entries: [
      { name: 'Caritas München' }, { name: 'Cardo Door Production GmbH Moosburg' },
      { name: 'Centour Centrum für Tourismus, Management & Reiseverkehrssicherheit e.V. München' },
      { name: 'Consalco GmbH Erding' },
    ],
  },
  {
    letter: 'D',
    entries: [{ name: 'DATEV Nürnberg' }, { name: 'DG Hyp Hamburg' }, { name: 'DZ Hyp Hamburg / Münster' }],
  },
  {
    letter: 'E',
    entries: [
      { name: '1&1 Internet AG Karlsruhe' },
      { name: 'EDF Engineering und Design im Fahrzeugbau GmbH München' },
      { name: 'Egencia GmbH Berlin' },
      { name: 'Excellence Dialogue Ludwig-Maximilians-Universität München' },
    ],
  },
  {
    letter: 'F',
    entries: [ { name: 'Flughafen München GmbH FMG München' }, { name: 'Friedhöfe und Bestattung München' }],
  },
  {
    letter: 'G',
    entries: [{ name: 'Gesundheitsbetriebe Dornbirn' }, { name: 'Gesundheitswelt Chiemgau' }],
  },
  {
    letter: 'H',
    entries: [
      { name: 'Hamberger Industriewerke GmbH' },
      { name: 'Hexal AG Holzkirchen' },
      ,
    ],
  },
  {
    letter: 'I',
    entries: [
      { name: 'Stadt Ingolstadt' },
      { name: 'Integrata GmbH München' },
      { name: 'Institut für Medizinische Psychologie Ludwig-Maximilians-Universität München' },
      { name: 'IT@M IT-Dienstleister der Stadt München' },
    ],
  },
  {
    letter: 'K',
    entries: [
      { name: 'Kreisjugendring München' }, { name: 'Knauber GmbH Bonn' },
      { name: 'Kompetenzzentrum Sport, Gesundheit und Technologie Garmisch-Partenkirchen' },
    ],
  },
  {
    letter: 'L',
    entries: [
      { name: 'Landeshauptstadt München' }, { name: 'Landratsamt München' },  { name: 'Landratsamt Roth' },
      { name: 'Altfett Lesch GmbH' },
      { name: 'Lebenshilfe Tirol gGmbH' },
      { name: 'LHI Leasing GmbH' },
    ],
  },
  {
    letter: 'M',
    entries: [
            { name: 'Max-Planck-Gesellschaft München' },
      { name: 'Medigene AG München' },
      { name: 'Münchenstift' }, { name: 'Münchner Wohnen' },
      { name: 'Münchner Stadtentwässerung MSE' }, { name: 'Münchner Stadtmuseum' },
    ],
  },
  {
    letter: 'N',
    entries: [{ name: 'NS-Dokumentationszentrum München' }],
  },
  {
    letter: 'O',
    entries: [{ name: 'OTLG - Volkswagen Originalteilelogistik München' }],
  },
  {
    letter: 'P',
    entries: [
      { name: 'Pädagogische Hochschule Zürich' }, { name: 'PMS Elektro- und Automationstechnik GmbH Kärnten' },
      { name: 'Private Sector Participation Consult GmbH Berlin' },
      { name: 'Privatuniversität Schloss Seeburg Seekirchen bei Salzburg' },
      { name: 'Promotion & Service Olching' },
      { name: 'Proteros GmbH Martinsried' },
    ],
  },
  {
    letter: 'Q',
    entries: [
      { name: 'Quentus Gesellschaft für Forschung zur Gesundheit, Umwelt und Lebensqualität mbH München' },
    ],
  },
  {
    letter: 'R',
    entries: [{ name: 'Stadt Rosenheim' }, { name: 'Rücker AG München' }],
  },
  {
    letter: 'S',
    entries: [
      { name: 'Sciencia Gesellschaft für Forschung im Gesundheitswesen GmbH München' },
      { name: 'Siedlungsgesellschaft Bavaria GmbH & Co KG München' },
      { name: 'Siemens AG München' },
       { name: 'Spacenet AG München' },
        { name: 'Staatliche Feuerwehrschule Geretsried' },
      { name: 'Stadtbibliothek München' },
      { name: 'Stadtwerke München' },
      { name: 'Ströer Out-of-Home Media AG Köln' },
       { name: 'Studentenwerk München' },
    ],
  },
  {
    letter: 'T',
    entries: [{ name: 'Technische Hochschule Augsburg' }, { name: 'Trend Interior GmbH Greding' }],
  },
  {
    letter: 'U',
    entries: [{ name: 'Uhlenbruch Verlag' }, { name: 'Universität Hohenheim' }],
  },
  {
    letter: 'V',
    entries: [
      { name: 'VDW GmbH München' },
      { name: 'Viking GmbH Kufstein' },
      { name: 'Volkswagen Group Services GmbH Wolfsburg' },
      { name: 'Volkswagen Qualifizierungsgesellschaft mbH Wolfsburg' },
      { name: 'Volkswagen Academy' },
    ],
  },
  {
    letter: 'Z',
    entries: [
      { name: 'Zahnärztlicher Bezirksverband Oberbayern ZBV Obb München' },
      { name: 'ZSE – Wert schaffen durch Veränderung – Zumtobel – Steger OEG Dornbirn' },
      { name: 'Zeyko Küchen Manufaktur GmbH Mönchweiler' },
    ],
  },
];

export default function ReferencesSection() {

  return (
    <section id="referenzen" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-primary-600 rounded-lg">
            <Award size={32} className="text-white" />
          </div>
          <div className="min-w-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Referenzen</h2>
            <p className="mt-2 text-base text-gray-700 leading-relaxed">
              Auswahl an Organisationen, für die die UVM Consulting Group tätig war (alphabetisch):
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {referenceGroups.map((group) => (
            <div key={group.letter}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {group.letter}
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base text-gray-700">
                {group.entries.map((entry) => (
                  <li key={entry.name} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 bg-primary-600 rounded-full flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="break-words">{entry.name}</div>
                      {entry.websiteUrl && (
                        <div className="mt-2">
                          <a
                            href={entry.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
                          >
                            Webseite
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
