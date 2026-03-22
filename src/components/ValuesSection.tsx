import { Search, Map, Rocket } from 'lucide-react';

export default function ValuesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-50 flex items-center justify-center">
                <Search className="text-primary-600" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Wissenschaftlich fundiert</h4>
              <p className="text-gray-600 text-sm">
                Wir verbinden Data Science mit Psychologie und betrachten den Menschen hinter den Daten.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tertiary-50 flex items-center justify-center">
                <Map className="text-tertiary-600" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Systematisch & Messbar</h4>
              <p className="text-gray-600 text-sm">
                Unser 4C-Modell bietet einen konsistenten Rahmen. Was man misst, kann man managen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary-50 flex items-center justify-center">
                <Rocket className="text-secondary-600" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Praktisch & Umsetzbar</h4>
              <p className="text-gray-600 text-sm">
                Vom QuickScan bis zur Zertifizierung bieten wir praxiserprobte Lösungen statt Strategiepapiere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
