import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DatenschutzPage() {
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

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Zuständige Behörde im Sinne der Datenschutz-Grundverordnung (DSGVO)
            </h2>
            <p className="text-base text-gray-700">
              Bayerisches Landesamt für Datenschutzaufsicht, Promenade 27, 91522 Ansbach
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Benutzerrechte</h2>
            <p className="text-base text-gray-700 mb-3">Sie haben folgende Rechte:</p>
            <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
              <li>Eine Bestätigung, ob und inwieweit Ihre personenbezogenen Daten verwendet und verarbeitet werden, sowie den Zugriff auf die über Sie gespeicherten personenbezogenen Daten und zusätzliche Informationen anfordern</li>
              <li>Eine Kopie der personenbezogenen Daten, die Sie uns freiwillig bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format anfordern</li>
              <li>Eine Berichtigung der personenbezogenen Daten, die wir von Ihnen gespeichert haben, anfordern</li>
              <li>Das Löschen Ihrer personenbezogenen Daten beantragen</li>
              <li>Der Verarbeitung Ihrer personenbezogenen Daten durch uns widersprechen</li>
              <li>Die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten durch uns beantragen</li>
              <li>Eine Beschwerde bei einer Aufsichtsbehörde einreichen</li>
            </ul>
            <p className="text-base text-gray-700 mt-4">
              Beachten Sie jedoch, dass diese Rechte nicht uneingeschränkt gelten, sondern unseren eigenen rechtmäßigen Interessen sowie behördlichen Vorschriften unterliegen.
            </p>
            <p className="text-base text-gray-700 mt-4">
              Wenn Sie eines der hier aufgeführten Rechte in Anspruch nehmen möchten oder weitere Informationen wünschen, wenden Sie sich an Prof. Dr. Eberhard Steiner oder Prof. Dr. Miriam Landes, UVM-Institut Partnerschaft Beratender Betriebswirt - Diplom-Psychologin
            </p>
            <div className="mt-3 text-base text-gray-700 space-y-1">
              <p><strong>Büro Olching bei München:</strong> Josef-Bergmann-Weg 1, 82140 Olching</p>
              <p><strong>Postanschrift:</strong> UVM-Institut, Postfach 440327, 80752 München</p>
              <p><strong>Email:</strong> info@uvm-institut.de</p>
            </div>
            <p className="text-base text-gray-700 mt-3">
              <strong>Geschäftsführer:</strong> Miriam Landes, Eberhard Steiner
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Speicherung</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Wir speichern Ihre personenbezogenen Daten so lange, wie es für die Bereitstellung unserer Services, die Einhaltung rechtlicher Verpflichtungen sowie die Beilegung von Streitigkeiten und die Durchsetzung unserer Richtlinien erforderlich ist. Die Aufbewahrungsfristen richten sich nach der Art der erfassten Daten und dem Zweck, für den diese Daten erfasst wurden, wobei sowohl die fallspezifischen Gegebenheiten als auch die Notwendigkeit berücksichtigt werden, veraltete, nicht genutzte Informationen baldmöglichst zu löschen. Datensätze mit personenbezogenen Daten von Kunden, Dokumente über die Kontoeinrichtung, Mitteilungen und andere Daten speichern wir gemäß geltender Gesetze und Vorschriften.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mt-3">
              Wir können jederzeit und in unserem alleinigen Ermessen unvollständige oder unrichtige Daten korrigieren, vervollständigen oder entfernen.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Grundlage für die Datenerfassung</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              Die Verarbeitung Ihrer personenbezogenen Daten (d. h. jegliche Daten, die mit vertretbaren Mitteln eine Identifizierung Ihrer Person zulassen; „personenbezogene Daten") ist erforderlich, um unseren vertraglichen Verpflichtungen Ihnen gegenüber nachzukommen und damit wir Ihnen unsere Services bereitstellen, unser legitimes Interesse schützen sowie rechtlichen und finanziellen Regulierungsverpflichtungen, denen wir unterworfen sind, nachkommen können.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              Durch die Nutzung dieser Webseite stimmen Sie der Erfassung, Speicherung, Verwendung, Offenlegung und sonstigen Nutzung Ihrer personenbezogenen Daten wie in diesen Datenschutzbestimmungen beschrieben zu.
            </p>
            <p className="text-base text-gray-700 leading-relaxed font-semibold">
              Bitte lesen Sie sich die Datenschutzbestimmungen sorgfältig durch, bevor Sie Entscheidungen treffen.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Welche Daten werden erfasst?</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              Wir erfassen zwei Arten von Daten und Informationen von Benutzern.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              Zur ersten Kategorie gehören nicht identifizierende und nicht identifizierbare Benutzerdaten, die durch die Nutzung der Webseite bereitgestellt oder erfasst werden („Nicht personenbezogene Daten"). Wir kennen die Identität des Benutzers nicht, von dem nicht personenbezogene Daten erfasst wurden. Zu den nicht personenbezogenen Daten, die erfasst werden können, gehören aggregierte Nutzungsdaten und technische Daten, die von Ihrem Gerät übermittelt werden, einschließlich bestimmter Informationen bezüglich Software und Hardware (z. B. auf dem Gerät verwendeter Browser und verwendetes Betriebssystem, Spracheinstellung, Zugriffszeit usw.). Anhand dieser Daten verbessern wir die Funktionalität unserer Webseite. Wir können auch Daten über Ihre Aktivität auf der Webseite erfassen (z. B. aufgerufene Seiten, Surfverhalten, Klicks, Aktionen usw.).
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-2">
              Zur zweiten Kategorie gehören personenbezogene Daten, also Daten, die eine Einzelperson identifizieren oder durch angemessene Maßnahmen identifizieren können. Zu solchen Daten gehören:
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              <strong>Gerätedaten:</strong> Wir erfassen personenbezogene Daten von Ihrem Gerät. Solche Daten umfassen Geolocation-Daten, IP-Adresse, eindeutige Kennungen (z. B. MAC-Adresse und UUID) sowie andere Daten, die sich aus Ihrer Aktivität auf der Webseite ergeben.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Wie erhalten wir Daten über Sie?</h2>
            <p className="text-base text-gray-700 mb-2">Wir beziehen Ihre personenbezogenen Daten aus verschiedenen Quellen:</p>
            <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
              <li>Sie stellen uns solche Daten freiwillig bereit, zum Beispiel bei der Registrierung auf unserer Webseite.</li>
              <li>Wir erhalten solche Daten, wenn Sie unsere Webseite nutzen oder in Verbindung mit einem unserer Services darauf zugreifen.</li>
              <li>Wir erhalten solche Daten von anderen Anbietern, Services und aus öffentlichen Registern (zum Beispiel von Datentraffic-Analyseanbietern).</li>
            </ul>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Wie werden die Daten genutzt? An wen werden die Daten weitergegeben?</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              Wir geben Benutzerdaten nicht an Dritte weiter, außer wie in diesen Datenschutzbestimmungen beschrieben.
            </p>
            <p className="text-base text-gray-700 mb-2">Wir verwenden Daten für folgende Zwecke:</p>
            <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4 mb-4">
              <li>Zur Kommunikation mit Ihnen (Senden von Hinweisen bezüglich unserer Services, Bereitstellen von technischen Informationen und ggf. Bearbeiten von Kundendienstanfragen)</li>
              <li>Zur Information über neue Updates und Services</li>
              <li>Zu statistischen und Analysezwecken, die der Verbesserung der Webseite dienen</li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              Neben den verschiedenen, oben aufgeführten Verwendungszwecken können wir personenbezogene Daten auch an unsere Tochtergesellschaften, verbundenen Unternehmen und Subunternehmer weitergeben.
            </p>
            <p className="text-base text-gray-700 mb-2">
              Zusätzlich zu den in diesen Datenschutzbestimmungen aufgeführten Zwecken können wir personenbezogene Daten aus folgenden Gründen an unsere vertrauenswürdigen externen Anbieter weiterleiten, die ihren Sitz in unterschiedlichen Rechtsprechungen auf der ganzen Welt haben:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4 mb-4">
              <li>Hosten und Betreiben unserer Webseite</li>
              <li>Bereitstellen von Marketingangeboten und Werbematerialien in Zusammenhang mit unserer Webseite und unseren Services</li>
              <li>Durchführen von Studien, technischen Diagnosen oder Analysen</li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed">
              Wir können Daten auch offenlegen, wenn wir im guten Glauben sind, dies ist hilfreich oder angemessen, um: (i) geltenden Gesetzen, Vorschriften, Gerichtsverfahren oder behördlichen Anfragen zu entsprechen; (ii) unsere Richtlinien (einschließlich unserer Vereinbarung) durchzusetzen und ggf. diesbezügliche mögliche Verletzungen zu untersuchen; (iii) illegale Aktivitäten oder anderes Fehlverhalten, Betrugsverdacht oder Sicherheitsprobleme zu untersuchen, zu erkennen, zu verhindern oder Maßnahmen dagegen zu ergreifen; (iv) eigene Rechtsansprüche geltend zu machen oder durchzusetzen bzw. uns gegen die Ansprüche anderer zu verteidigen; (v) die Rechte, das Eigentum oder unsere Sicherheit, die Sicherheit unserer Benutzer, Ihre Sicherheit oder die Sicherheit von Dritten zu schützen; oder um (vi) mit Strafverfolgungsbehörden zusammenzuarbeiten und/oder geistiges Eigentum oder andere Rechtsansprüche zu schützen.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Cookies</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              Für die Bereitstellung entsprechender Services verwenden wir und unsere Partner Cookies. Dies gilt auch, wenn Sie unsere Webseite besuchen oder auf unsere Services zugreifen.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              Bei einem „Cookie" handelt es sich um ein kleines Datenpaket, das Ihrem Gerät beim Besuch einer Webseite von dieser Webseite zugeordnet wird. Cookies sind nützlich und können für unterschiedliche Zwecke eingesetzt werden. Dazu gehören z. B. die erleichterte Navigation zwischen verschiedenen Seiten, die automatische Aktivierung bestimmter Funktionen, das Speichern Ihrer Einstellungen sowie ein optimierter Zugriff auf unsere Services. Die Verwendung von Cookies ermöglicht uns außerdem, Ihnen relevante, auf Ihre Interessen abgestimmte Werbung einzublenden und statistische Informationen zu Ihrer Nutzung unserer Services zu sammeln.
            </p>
            <p className="text-base text-gray-700 mb-3">Diese Webseite verwendet folgende Arten von Cookies:</p>
            <div className="space-y-3">
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>a. „Sitzungscookies"</strong>, die für eine normale Systemnutzung sorgen. Sitzungscookies werden nur für begrenzte Zeit während einer Sitzung gespeichert und von Ihrem Gerät gelöscht, sobald Sie Ihren Browser schließen.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>b. „Permanente Cookies"</strong>, die nur von der Webseite gelesen und beim Schließen des Browserfensters nicht gelöscht, sondern für eine bestimmte Dauer auf Ihrem Computer gespeichert werden. Diese Art von Cookie ermöglicht uns, Sie bei Ihrem nächsten Besuch zu identifizieren und beispielsweise Ihre Einstellungen zu speichern.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>c. „Drittanbieter-Cookies"</strong>, die von anderen Online-Diensten gesetzt werden, die mit eigenen Inhalten auf der von Ihnen besuchten Seite vertreten sind. Dies können z. B. externe Web-Analytics-Unternehmen sein, die den Zugriff auf unsere Webseite erfassen und analysieren.
              </p>
            </div>
            <p className="text-base text-gray-700 leading-relaxed mt-3">
              Cookies enthalten keine personenbezogenen Daten, die Sie identifizieren, doch die von uns gespeicherten personenbezogenen Daten werden möglicherweise von uns mit den in den Cookies enthaltenen Daten verknüpft. Sie können Cookies über die Geräteeinstellungen Ihres Gerät entfernen. Folgen Sie dabei den entsprechenden Anweisungen. Beachten Sie, dass die Deaktivierung von Cookies zur Einschränkung bestimmter Funktionen bei der Nutzung unserer Webseite führen kann.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mt-3">
              Das von uns verwendete Tool basiert auf der Technologie von Snowplow Analytics. Zu den von uns erfassten Daten zur Nutzung unserer Webseite gehören beispielsweise, wie häufig Benutzer die Webseite besuchen oder welche Bereiche aufgerufen werden. Das von uns verwendete Tool erfasst keine personenbezogenen Daten und wird von unserem Webhosting-Anbieter und Service-Provider ausschließlich zur Verbesserung des eigenen Angebots verwendet.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Verwendung von Skriptbibliotheken (Google Web Fonts)</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              Damit unsere Inhalte in jedem Browser korrekt und grafisch ansprechend dargestellt werden, verwenden wir für diese Webseite Skript- und Schriftbibliotheken wie Google Web Fonts (https://www.google.com/webfonts). Google Web Fonts werden in den Cache Ihres Browsers übertragen, sodass sie nur einmal geladen werden müssen. Wenn Ihr Browser Google Web Fonts nicht unterstützt oder den Zugriff verweigert, werden die Inhalte in einer Standardschriftart dargestellt.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              Beim Aufrufen von Skript- oder Schriftbibliotheken wir automatisch eine Verbindung zum Betreiber der Bibliothek hergestellt. Es besteht hierbei theoretisch die Möglichkeit für diesen Betreiber, Daten zu erfassen. Derzeit ist nicht bekannt, ob und zu welchem Zweck die Betreiber der entsprechenden Bibliotheken tatsächlich Daten erfassen.
            </p>
            <p className="text-base text-gray-700">
              Hier finden Sie die Datenschutzbestimmungen des Betreibers der Google-Bibliothek: <a href="https://www.google.com/policies/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">https://www.google.com/policies/privacy</a>.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Erfassung von Daten durch Dritte</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              In dieser Richtlinie werden nur die Nutzung und Offenlegung von Daten, die wir von Ihnen erfassen, behandelt. Wenn Sie Daten auf anderen Webseiten veröffentlichen oder Dritten im Internet offenlegen, gelten möglicherweise andere Bestimmungen. Lesen Sie sich daher die allgemeinen Geschäftsbedingungen und Datenschutzbestimmungen immer sorgfältig durch, wenn Sie Daten offenlegen.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Diese Datenschutzbestimmungen beziehen sich nicht auf Geschäftspraktiken von Unternehmen, die sich nicht in unserem Besitz befinden bzw. nicht unter unserer Kontrolle stehen, oder auf andere Personen als unsere Angestellten und Mitarbeiter, einschließlich Dritter, denen wir diese Daten wie in diesen Datenschutzbestimmungen beschrieben offenlegen.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Wie schützen wir Ihre Daten?</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Wir setzen die Sicherheitsmaßnahmen auf der Webseite mit großer Sorgfalt um und schützen Ihre Daten. Wir verwenden in der Branche übliche Verfahren und Richtlinien, um den Schutz der erfassten und gespeicherten Daten sicherzustellen, und verhindern die unbefugte Verwendung solcher Daten. Wir verlangen außerdem von Dritten, dass sie sich gemäß diesen Datenschutzbestimmungen an ähnliche Sicherheitsanforderungen halten. Obwohl wir angemessene Schritte für den Schutz von Daten unternehmen, können wir nicht verantwortlich gemacht werden für Handlungen von jenen, die sich unbefugten Zugang zu unserer Webseite verschafft haben oder diese missbräuchlich verwenden, und wir geben keine ausdrückliche noch stillschweigende Gewähr, dass wir einen solchen Zugriff verhindern können.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Übermittlung von Daten außerhalb des Europäischen Wirtschaftsraums</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              Beachten Sie, dass einige Empfänger ihren Sitz möglicherweise nicht im Europäischen Wirtschaftsraum haben. Ist dies der Fall, werden wir Ihre Daten nur in von der Europäischen Kommission genehmigte Länder mit angemessenem Datenschutzniveau übermitteln oder durch eine rechtliche Vereinbarung ein angemessenes Datenschutzniveau sicherstellen.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder Offenlegung, bzw. Übermittlung von Daten an Dritte geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung oder auf Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich gesetzlicher oder vertraglicher Erlaubnisse, verarbeiten oder lassen wir die Daten in einem Drittland nur beim Vorliegen der besonderen Voraussetzungen der Art. 44 ff. DSGVO verarbeiten. D.h. die Verarbeitung erfolgt z.B. auf Grundlage besonderer Garantien, wie der offiziell anerkannten Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B. für die USA durch das „Privacy Shield") oder Beachtung offiziell anerkannter spezieller vertraglicher Verpflichtungen (so genannte „Standardvertragsklauseln").
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Google Maps</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Wir binden die Landkarten des Dienstes "Google Maps" des Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein. Zu den verarbeiteten Daten können insbesondere IP-Adressen und Standortdaten der Nutzer gehören, die jedoch nicht ohne deren Einwilligung (im Regelfall im Rahmen der Einstellungen ihrer Mobilgeräte vollzogen), erhoben werden. Die Daten können in den USA verarbeitet werden. Datenschutzerklärung: <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">https://www.google.com/policies/privacy/</a>, Opt-Out: <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">https://adssettings.google.com/authenticated</a>.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Werbung</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Wir schalten keine Werbeanzeigen auf unserer Webseite.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Marketing</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              Wir können Ihre personenbezogenen Daten wie Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer usw. selbst verwenden oder an einen externen Untervertragsnehmer weiterleiten, um Ihnen Werbematerialien bezüglich unserer Services bereitzustellen, die Sie möglicherweise interessieren.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              Wir respektieren Ihr Recht auf Privatsphäre. Daher erhalten Sie in diesen Marketingmaterialien stets die Möglichkeit, sich von weiteren Zusendungen abzumelden. Wenn Sie sich abmelden, wird Ihre E-Mail-Adresse oder Telefonnummer aus unseren Marketing-Verteilerlisten entfernt.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Beachten Sie, dass wir Ihnen auch nach einer Abmeldung vom Erhalt unserer Marketing-E-Mails weiterhin E-Mails mit wichtigen Informationen senden, die keine Abmeldeoption enthalten. Dazu gehören Wartungsmeldungen oder administrative Benachrichtigungen.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Unternehmenstransaktion</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Wir können Daten im Fall einer Unternehmenstransaktion (z. B. beim Verkauf wesentlicher Unternehmensteile, bei einer Fusion, einer Konsolidierung oder einem Anlagenverkauf) weitergeben. Falls ein oben genannter Fall eintritt, übernimmt der Erwerber oder das entsprechende Unternehmen die in dieser Datenschutzerklärung dargelegten Rechte und Pflichten.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Minderjährige</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Der Schutz der Daten von Kindern ist insbesondere im Online-Bereich sehr wichtig. Die Webseite ist nicht für Kinder konzipiert und richtet sich nicht an diese. Die Nutzung unserer Services durch Minderjährige ist nur mit der vorherigen Einwilligung oder Autorisierung von einem Elternteil oder Erziehungsberechtigten zulässig. Wir erfassen personenbezogene Daten von Minderjährigen nicht wissentlich. Wenn ein Elternteil oder Erziehungsberechtigter Kenntnis davon erlangt, dass sein oder ihr Kind uns personenbezogene Daten ohne deren Einwilligung bereitgestellt hat, kann er/sie sich unter info@uvm-institut.de an uns wenden.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Aktualisierungen oder Änderungen dieser Datenschutzbestimmungen</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Wir behalten uns das Recht vor, diese Datenschutzbestimmungen von Zeit zu Zeit zu ändern oder zu prüfen. Sie finden das Datum der aktuellen Version unter „Zuletzt geändert am". Ihre fortgesetzte Nutzung der Plattform nach der Bekanntmachung solcher Änderungen auf unserer Webseite stellt Ihre Zustimmung zu solchen Änderungen an den Datenschutzbestimmungen dar und gilt als Ihr Einverständnis der Bindung an die geänderten Bestimmungen.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">So erreichen Sie uns</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Wenden Sie sich bei allgemeinen Fragen zur Webseite, zu den von uns über Sie erfassten Daten oder der Verwendung dieser Daten unter info@uvm-institut.de an uns.
            </p>
            <div className="text-base text-gray-700 space-y-1">
              <p><strong>UVM-Institut</strong></p>
              <p>Prof. Dr. Eberhard Steiner & Prof. Dr. Miriam Landes</p>
              <p>Partnerschaft Beratender Betriebswirt - Diplom-Psychologin</p>
              <p className="mt-3"><strong>Büro Erding:</strong> Pater-Alois-Weg 12, 85435 Erding</p>
              <p><strong>Büro Olching bei München:</strong> Josef-Bergmann-Weg 1, 82140 Olching</p>
              <p><strong>Postanschrift:</strong> UVM-Institut, Postfach 440327, 80752 München</p>
              <p className="mt-3"><strong>E-Mail:</strong> info@uvm-institut.de</p>
              <p><strong>Telefon:</strong> +49 089 15 9000 75</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
