import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-base text-primary-600 hover:text-primary-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Impressum</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Geschäftsführer und verantwortlich gemäß § 5 TMG
            </h2>
            <p className="text-base text-gray-700 mb-2">
              Prof. Dr. Eberhard Steiner & Prof. Dr. Miriam Landes
            </p>
            <p className="text-base text-gray-700 mb-2">
              UVM-Institut
            </p>
            <p className="text-base text-gray-700 mb-4">
              Prof. Steiner & Prof. Landes Partnerschaftsgesellschaft Beratender Betriebswirt - Diplom-Psychologin
            </p>

            <div className="space-y-2 text-base text-gray-700">
              <p>
                <strong>Büro Erding:</strong> Pater-Alois-Weg 12, 85435 Erding
              </p>
              <p>
                <strong>Büro Olching bei München:</strong> Josef-Bergmann-Weg 1, 82140 Olching
              </p>
              <p>
                <strong>Postanschrift:</strong> UVM-Institut, Postfach 440327, 80752 München
              </p>
            </div>

            <div className="mt-4 space-y-1 text-base text-gray-700">
              <p><strong>Telefon:</strong> 089-15900075</p>
              <p><strong>Telefax:</strong> 089-3612713</p>
              <p><strong>Email:</strong> info(at)uvm-institut.de</p>
            </div>

            <div className="mt-4 space-y-1 text-base text-gray-700">
              <p><strong>Amtsgericht München PR 997</strong></p>
              <p><strong>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</strong> DE255167385</p>
              <p><strong>Wirtschafts-Identifikationsnummer gemäß § 139c Abgabenordnung:</strong> 47033281592</p>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              HAFTUNGSAUSSCHLUSS (DISCLAIMER) - RECHTLICHE HINWEISE
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  1. Haftungsbeschränkung
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Mit der reinen Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  2. Externe Links
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle dieser externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  3. Urheber- und Leistungsschutzrechte
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
              Quellen und Copyrights
            </h2>
            <p className="text-gray-600 text-sm">
              Disclaimer: Juraforum.de Experten-Branchenbuch.de
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
