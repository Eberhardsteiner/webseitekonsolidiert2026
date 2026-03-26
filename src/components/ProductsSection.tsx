import { useState, ReactNode, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollProgress } from '../hooks/useScrollProgress';
import {
  BarChart3,
  Users,
  Brain,
  Award,
  Cpu,
  Gamepad2,
  Sparkles,
  Workflow,
  Target,
  Shield,
  GraduationCap,
  TrendingUp,
  Radar,
  Leaf,
  Info,
  X,
} from 'lucide-react';

const quadrants = [
  {
    title: 'Corporate Strategy',
    position: 'top-left',
    color: 'amber',
    products: [
      {
        name: 'Digitalisierungsstrategie und KI',
        description: [
          'Digitalisierung und KI sind heute kein reines IT‑Projekt, sondern eine Antwort auf Disruption: Märkte, Prozesse und Erwartungen verändern sich schneller als klassische Einzelmaßnahmen wirken.',
          'Unser Produkt liefert dafür einen klaren, umsetzbaren Fahrplan:',
          'Wir analysieren Reifegrad und Wertschöpfung, priorisieren die Use Cases mit dem größten Business‑Impact und übersetzen sie in eine Roadmap sowie einem Change‑ und Kompetenzaufbauplan. Ergebnis: eine Strategie, die messbar umgesetzt wird – synchron mit Kultur, Kompetenzen und klaren Leitplanken.',
        ],
        icon: Target,
      },
      {
        name: 'People Analytics & HR-Tech',
        description: [
          'In disruptiven Zeiten reichen Bauchgefühl und Excel‑Listen nicht mehr aus, um Talente zu gewinnen, zu entwickeln und zu halten.',
        'Unser Produkt macht HR‑Entscheidungen datengestützt, schneller und fairer: Wir klären die wichtigsten Use Cases (z. B. Recruiting‑Funnel, Fluktuationsrisiken, Skill‑Gaps, Lernwirksamkeit), schaffen eine belastbare Datenbasis und setzen ein schlankes KPI‑/Dashboard‑Setup auf, das Führungskräfte wirklich nutzen.',
        'Gleichzeitig sorgen wir für Governance und Vertrauen (Datenschutz, Rollenrechte, Mitbestimmung, Bias‑Checks), damit KI‑gestützte Insights nicht nur möglich, sondern auch akzeptiert und nachhaltig einsetzbar sind.',
          ],
        icon: BarChart3,
      },
      {
        name: 'Prozessoptimierung für Digitalisierung und KI-Einsatz',
        description: [
          'Digitale Transformation und KI wirken nur dann , wenn die zugrunde liegenden Prozesse klar, stabil und datenfähig sind – sonst automatisiert man nur Ineffizienz.',
          'Unser Produkt schafft Transparenz über End‑to‑End‑Abläufe, identifiziert Engpässe, Medienbrüche und Reibungsverluste und übersetzt das in ein zielorientiertes Soll‑Prozessdesign.',
          'Darauf aufbauend priorisieren wir konkrete Quick‑Wins und KI-/Automatisierungs‑Use‑Cases (inkl. Rollen, Schnittstellen, Datenanforderungen und KPI‑Set), sodass die Umsetzung nicht im Konzept steckenbleibt, sondern messbar in den Betrieb übergeht.',
          ],
        icon: Workflow,
      },
      {
        name: 'KI-Ready Organisation',
        description: [
          'KI entfaltet nur dann Wirkung, wenn Organisation, Prozesse und Menschen „ready“ sind – nicht nur die Technologie.',
          'Mit diesem Produkt schaffen wir die Voraussetzungen für erfolgreichen KI‑Einsatz: Wir prüfen Reifegrad und Einsatzfelder, klären Daten‑/Prozess‑Grundlagen, definieren Governance (z. B. Rollen, Datenschutz, Sicherheit, Ethik) und bauen die nötigen Kompetenzen sowie Akzeptanz im Alltag auf.',
          'Ergebnis ist ein umsetzbarer Fahrplan von Pilot‑Use‑Cases bis Skalierung – integriert in Strategie, Kultur und klare Leitplanken, damit KI nachhaltig, verantwortungsvoll und messbar wirkt.',
          <>Weitere Informationen: <a href="https://uvm-cg.de/ki/dist/index.html" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-medium">uvm-cg.de/ki</a></>,
          ],
        icon: TrendingUp,
      },
    ],
  },
  {
    title: 'Culture & Change',
    position: 'top-right',
    color: 'teal',
    products: [
      {
        name: 'Digitale Kultur',
        description: ['Digitale Transformation scheitert selten an Tools – sondern daran, ob Menschen neue Arbeitsweisen wirklich leben.',
                      'Mit „Digitale Kultur“ begleiten wir Ihren Wandel so, dass Vertrauen, Zusammenarbeit und Innovationsfreude im Alltag entstehen: klare gemeinsame Prinzipien, offene Kommunikation und Führung, die Orientierung gibt.',
                      'Dabei stärken wir gezielt kulturelle Erfolgsfaktoren wie Werteorientierung & Vertrauen, Diversity & Inclusion sowie Employee Wellbeing – weil genau diese Themen die Leistungsfähigkeit in hybriden und dynamischen Umfeldern tragen.',
                      ],
        icon: Sparkles,
      },
      {
        name: 'Behavioral Design & Nudging',
        description:[
          'Veränderung scheitert selten am „Wissen“, sondern an der Lücke zwischen Absicht und Alltag. Mit Behavioral Design & Nudging gestalten wir Prozesse, Kommunikation und digitale Tools so, dass das gewünschte Verhalten leicht, naheliegend und selbstverständlich wird – ohne Druck, aber mit Wirkung.',
          'Dazu analysieren wir konkrete Verhaltenshürden (z. B. Reibung, Unklarheit, fehlende Feedbackschleifen), entwickeln passende „Choice‑Architecture“-Interventionen (z. B. sinnvolle Defaults, Micro‑Prompts, Vereinfachung, Commitments, soziale Normen) und testen diese pragmatisch in Pilotbereichen. Ergebnis: höhere Akzeptanz, bessere Umsetzung und messbar weniger Reibungsverluste – im Einklang mit Kultur und klaren Leitplanken für fairen, transparenten Einsatz.',
          ],
        icon: Brain,
      },
      {
        name: 'Zertifikat „Empfehlenswerter Arbeitgeber"',
        description: [
          'In Zeiten von Fachkräftemangel und wachsender Arbeitgeberbewertung reicht es nicht, sich nur intern als attraktiv zu sehen – entscheidend ist, ob Mitarbeitende ihr Unternehmen wirklich weiterempfehlen würden.',
          'Mit dem Zertifikat „Empfehlenswerter Arbeitgeber" führen wir ein wissenschaftlich fundiertes Audit durch, das auf echte Mitarbeiterorientierung, Führungsqualität, Entwicklungsmöglichkeiten und Weiterempfehlungsbereitschaft prüft.',
          'Das Ergebnis: eine unabhängige Auszeichnung, die nach außen Glaubwürdigkeit schafft und nach innen konkrete Verbesserungsfelder aufzeigt – mit klaren Empfehlungen für nachhaltige Arbeitgeberattraktivität.',
          <>Weitere Informationen unter: <a href="https://www.empfehlenswerter-arbeitgeber.de" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-medium">www.empfehlenswerter-arbeitgeber.de</a></>,
        ],
        icon: Award,
      },
      {
        name: 'KI Change Readyness Radar',
        description: ['KI-Transformation scheitert selten an der Technologie – sondern daran, ob Menschen, Führung und Organisation bereit sind, neue Arbeitsweisen wirklich zu übernehmen.',
                      'Der KI Change Readiness Radar macht diese Bereitschaft systematisch sichtbar: Wir messen Akzeptanz, Kompetenzlücken, Vertrauen/Transparenz, Führungsfähigkeit und die organisatorischen Voraussetzungen (z. B. Prozesse, Verantwortlichkeiten, Governance).',
                      'Ergebnis ist eine klare „Heatmap“ mit den größten Hebeln und Risiken sowie einer priorisierten Roadmap, wie Sie von Pilot‑Use‑Cases zur Skalierung kommen – ohne Reibungsverluste und mit messbarem Fortschritt.',
                      ],
        icon: Radar,
      },
    ],
  },
  {
    title: 'Code of Conduct',
    position: 'bottom-left',
    color: 'rose',
    products: [
      {
        name: 'Leadership Principles & Sensegiving',
        description: [

'In Zeiten von Disruption brauchen Menschen Orientierung: Was ist uns wichtig, wie entscheiden wir, und wie arbeiten wir zusammen – auch wenn sich Rahmenbedingungen ständig ändern.',
                      'Mit diesem Produkt entwickeln wir gemeinsam moderne Führungs- und Zusammenarbeitsprinzipien (konkret als beobachtbare Verhaltensanker) und verankern sie systematisch im Alltag: in Kommunikation, Meetings, Feedback, Talentprozessen und Führungskräfteentwicklung.',
                      '„Sensegiving" sorgt dafür, dass Führung nicht nur Regeln vermittelt, sondern Sinn stiftet – durch klare Narrative, Leitplanken und konsistente Vorbildwirkung (Empowerment, offene Kommunikation, kontinuierliches Feedback), damit Zusammenarbeit spürbar leichter, schneller und verlässlicher wird.',
                      <div className="mt-4 flex items-start gap-4">
                        <a href="https://link.springer.com/book/10.1007/978-3-662-69652-1" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                          <img src="https://media.springernature.com/w153/springer-static/cover-hires/book/978-3-662-69652-1" alt="Buchcover" className="w-24 h-auto rounded shadow-lg hover:shadow-xl transition-shadow" />
                        </a>
                        <div className="flex-1">
                          <p className="text-sm">Unser Buch zum Thema: <a href="https://link.springer.com/book/10.1007/978-3-662-69652-1" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-medium">Springer-Verlag</a></p>
                        </div>
                      </div>,
                      ],
        icon: Shield,
      },
      {
        name: 'Core Values & Purpose',
        description: ['In Zeiten von Disruption brauchen Organisationen einen stabilen „Nordstern“: Werte und Purpose geben Orientierung, wenn sich Märkte, Technologien und Erwartungen schnell verändern.',
                      'Wir entwickeln Werte und Purpose nicht als schöne Worte, sondern als konkrete Entscheidungsleitplanken und beobachtbare Verhaltensanker (Was heißt das im Alltag – in Führung, Zusammenarbeit, Kundenkontakt?).',
                      'Anschließend verankern wir das systematisch in Kommunikation, HR‑Prozessen (Recruiting, Performance, Entwicklung), Ritualen und Governance – damit Entscheidungen konsistenter werden, Verhalten sich angleicht und Kultur gezielt gestaltbar wird. .',
                      ],
        icon: Target,
      },
      {
        name: 'KI in Führung und Organisation',
        description: ['KI kann Führung deutlich stärken – wenn sie als Entscheidungsunterstützung eingesetzt wird und nicht als „Black Box“, die Verantwortung ersetzt.',
                      'In diesem Produkt identifizieren wir sinnvolle Führungs‑ und Organisations‑Use‑Cases (z. B. Priorisierung, Risikoabschätzung, People‑Themen, Wissensmanagement), bauen AI‑Literacy und neue Routinen auf und begleiten die Einführung so, dass Akzeptanz entsteht.',
                      'Gleichzeitig setzen wir klare Leitplanken im Sinne eines Code of Conduct (Transparenz, Datenschutz/Informationssicherheit, Fairness/Bias‑Checks, Human‑in‑the‑Loop), damit KI‑Einsatz Vertrauen schafft – statt es zu gefährden.',
                      ],
        icon: Cpu,
      },
      {
        name: 'Green Culture und Nachhaltigkeit',
        description:[
          'Nachhaltigkeit und ESG sind längst kein „Nice to have“ mehr, sondern ein echter Wettbewerbsfaktor – und wirken nur dann, wenn sie im Alltag gelebt werden, nicht nur im Bericht stehen.',
          'Mit diesem Produkt übersetzen wir ökologische Verantwortung in konkrete Leitplanken und Routinen: Welche Entscheidungen werden künftig anders getroffen (z. B. Einkauf, Reisen, Projekte, Produkt-/Serviceentwicklung), welche Verhaltensanker braucht es – und wie wird Führung dabei zum Vorbild.',
          'Ergebnis ist eine „Green Culture“, die messbar verankert ist (z. B. klare Prinzipien, Verantwortlichkeiten, Ziele/KPIs und Kommunikation), sodass Nachhaltigkeit Teil der Kultur und Steuerung wird – nicht ein Parallelprogramm. ',
          ],
        icon: Leaf,
      },
    ],
  },
  {
    title: 'Competences',
    position: 'bottom-right',
    color: 'cyan',
    products: [
      {
        name: 'Kompetenzmanagement, Future Skills & Coaching',
        description: [
          'Wenn sich Anforderungen durch Disruption so schnell verschieben, entscheidet nicht „mehr Training“, sondern die richtigen Fähigkeiten zur richtigen Zeit.',
          'Mit diesem Produkt machen wir Kompetenzen steuerbar: Wir leiten Future Skills aus Strategie und Rollen ab, erfassen den Ist‑Stand (Skill‑Profil, Skill‑Gap, kritische Rollen) und priorisieren die größten Hebel. Durch 270- oder 360 Grad-Feedbacks evaluieren wir Kompetenzen und empfehlen in individuellen Feedbackgesprächen Entwicklungsmaßnahmen.',
          'Wir bauen eine unternehmensspezifische Lernumgebung, die wirklich wirkt (Praxisprojekte, Peer‑Learning, kurze Lernformate, Transfer in den Alltag) – inklusive Messgrößen, damit Entwicklung sichtbar wird und die Organisation dauerhaft lernfähig bleibt. Durch unsere zertifizierten Coaches begleichten wir Führungskräfte in ihrer Entwicklung auch langfristig.',
  <>Weitere Informationen unter: <a href="https://www.uvm-coaching.de" target="_blank" rel="noopener noreferrer" className="text-tertiary-600 hover:text-tertiary-700 underline font-medium">www.uvm-coaching.de</a></>,],

        icon: Users,
      },
      {
        name: 'Führungskräftequalifizierung',
        description: 'Gezielte Entwicklung von Führungskompetenzen für die Anforderungen der digitalen Arbeitswelt.',
        icon: GraduationCap,
      },
      {
        name: 'Business Gaming & Outdoor Learning',
        description: [ 'In disruptiven Zeiten braucht es Lernformate, die nicht nur Wissen vermitteln, sondern Handeln trainieren und dadurch Handlungskompetenz aufbauen.',
                      'Mit Business Gaming & Outdoor Learning schaffen wir realitätsnahe Simulationen und herausfordernde Settings, in denen Teams Entscheidungen unter Unsicherheit treffen, Rollen klären, kommunizieren und zusammenarbeiten – mit unmittelbarem Feedback.',
                      'Der entscheidende Teil ist der Transfer: Wir reflektieren gemeinsam, was funktioniert hat, wo Reibungsverluste entstanden sind und welche konkreten Routinen/Prinzipien daraus in den Arbeitsalltag übernommen werden. So werden Kompetenzen, Zusammenarbeit und Führungsverhalten spürbar weiterentwickelt – praxisnah und wirksam.',
                      <>Weitere Informationen unter: <a href="https://www.uvm-active.de" target="_blank" rel="noopener noreferrer" className="text-tertiary-600 hover:text-tertiary-700 underline font-medium">www.uvm-active.de</a></>,
                      ],
        icon: Gamepad2,
      },
      {
        name: 'KI-Ready Leader & Augmented Leadership',
        description: [
          'KI verändert Führung nicht nur technisch, sondern im Kern: Entscheidungen, Kommunikation und Mitarbeiterentwicklung können deutlich schneller und besser vorbereitet werden – wenn Führungskräfte wissen, wie man KI sinnvoll, sicher und verantwortungsvoll einsetzt.',
          'In diesem Produkt qualifizieren wir Führungskräfte in AI‑Literacy, identifizieren die wirksamsten Führungs‑Use‑Cases (z. B. Entscheidungs‑Vorbereitung, Meeting‑Design, Coaching/Feedback, Talent- & Skill‑Entwicklung) und integrieren passende KI‑Tools als „Co‑Pilot“ in die tägliche Führungspraxis.',
          'Gleichzeitig setzen wir klare Leitplanken (Transparenz, Datenschutz/DSGVO, Fairness/Bias, Human‑in‑the‑Loop) und begleiten den Change, damit Akzeptanz, Vertrauen und Compliance nicht leiden, sondern gestärkt werden.',
          ],
        icon: Cpu,
      },
    ],
  },
];

const colorClasses = {
  teal: {
    bg: 'bg-[rgba(78,145,136,0.05)]',
    border: 'border-[rgba(78,145,136,0.42)]',
    text: 'text-[#233238]',
    accent: 'text-[#4E9188]',
  },
  cyan: {
    bg: 'bg-[rgba(78,145,136,0.05)]',
    border: 'border-[rgba(78,145,136,0.42)]',
    text: 'text-[#233238]',
    accent: 'text-[#4E9188]',
  },
  amber: {
    bg: 'bg-[rgba(78,145,136,0.05)]',
    border: 'border-[rgba(78,145,136,0.42)]',
    text: 'text-[#233238]',
    accent: 'text-[#4E9188]',
  },
  rose: {
    bg: 'bg-[rgba(78,145,136,0.05)]',
    border: 'border-[rgba(78,145,136,0.42)]',
    text: 'text-[#233238]',
    accent: 'text-[#4E9188]',
  },
};

export default function ProductsSection() {
  const [modalContent, setModalContent] = useState<{ title: string; description: string | Array<string | ReactNode> } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const { scrollProgress } = useScrollProgress({
    elementRef: sectionRef,
    startTrigger: 0.8,
    endTrigger: 0.2,
  });

  const openModal = (title: string, description: string | Array<string | ReactNode>) => {
    setModalContent({ title, description });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const goToLeadershipDetails = () => {
    closeModal();
    navigate('/fuehrungskraeftequalifizierung');
  };

  const getQuadrantTransform = (index: number) => {
    const maxDistance = 100;
    const distance = maxDistance * (1 - scrollProgress);
    
    // Left side (index 0, 2) slides from left, right side (index 1, 3) slides from right
    const isLeftSide = index % 2 === 0;
    const x = isLeftSide ? -distance : distance;
    
    return `translateX(${x}px)`;
  };

  return (
    <section ref={sectionRef} id="leistungen" className="pt-28 pb-20 md:pt-40 md:pb-32 bg-white relative overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-96 h-96 rounded-full transition-opacity duration-700"
              style={{
                background: 'conic-gradient(from 0deg, rgba(78,145,136,0.12), rgba(78,145,136,0.22), rgba(78,145,136,0.10), rgba(78,145,136,0.18), rgba(78,145,136,0.15), rgba(78,145,136,0.12))',
                maskImage: 'radial-gradient(circle, transparent 168px, black 168px)',
                WebkitMaskImage: 'radial-gradient(circle, transparent 168px, black 168px)',
                opacity: scrollProgress * 0.75,
              }}
            ></div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
            {quadrants.map((quadrant, index) => {
              const colors = colorClasses[quadrant.color as keyof typeof colorClasses];
              return (
                <div
                  key={quadrant.title}
                  className={`${colors.bg} rounded-2xl p-8 border-2 ${colors.border} relative z-10 hover:shadow-xl transition-all duration-700`}
                  style={{
                    transform: getQuadrantTransform(index),
                    opacity: scrollProgress,
                  }}
                >
                  <h3
                    className={`text-3xl font-bold mb-6 border-b ${colors.border} pb-4 transition-transform duration-300 ${colors.text}`}
                  >
                    {quadrant.title}
                  </h3>
                  <div className="space-y-4">
                    {quadrant.products.map((product) => (
                      <div
                        key={product.name}
                        className="rounded-lg p-4 hover:scale-[1.02] transition-all duration-300 group border border-[rgba(78,145,136,0.24)] bg-[rgba(78,145,136,0.07)] hover:bg-[rgba(78,145,136,0.11)] hover:border-[rgba(78,145,136,0.35)]"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 bg-[rgba(78,145,136,0.12)]">
                              <product.icon
                                size={20}
                                className="text-[#4E9188]"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-bold font-sans text-[#233238]">
                                {product.name}
                              </h4>
                            </div>
                          </div>
                          <button
                            onClick={() => openModal(product.name, product.description)}
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform bg-[rgba(78,145,136,0.14)] hover:bg-[rgba(78,145,136,0.24)] text-[#4E9188]"
                            aria-label="Mehr Informationen"
                          >
                            <Info size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {modalContent && (
        <div
          className="fixed inset-0 bg-[#101420] bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Schließen"
            >
              <X size={18} className="text-gray-600" />
            </button>

            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{modalContent.title}</h3>
            </div>

            <div className="text-base text-gray-700 leading-relaxed space-y-4">
              {Array.isArray(modalContent.description) ? (
                modalContent.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{modalContent.description}</p>
              )}
              {modalContent.title === 'Führungskräftequalifizierung' && (
                <p className="text-sm text-gray-600">
                  Für eine strukturierte Übersicht der Module (Kommunikation, Leadership, Fit-für-Führung, Healthy
                  Leadership etc.) klicken Sie auf <span className="font-medium">Details</span>.
                </p>
              )}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
              {modalContent.title === 'Führungskräftequalifizierung' && (
                <button
                  onClick={goToLeadershipDetails}
                  className="px-6 py-2 rounded-lg text-base font-medium transition-colors border border-primary-600 text-primary-700 hover:bg-primary-50"
                >
                  Details
                </button>
              )}

              <button
                onClick={closeModal}
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
