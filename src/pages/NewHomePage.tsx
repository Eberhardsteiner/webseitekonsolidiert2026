import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Zap, Target, Users, Shield, X } from 'lucide-react';
import { ROUTES } from '../constants/paths';
import UnternehmenMainContent from '../components/UnternehmenMainContent';
import ProductsSection from '../components/ProductsSection';
import QuickScan4C from '../components/QuickScan4C';

function NewHomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [quickScanOpen, setQuickScanOpen] = useState(false);
  const [textExpanded, setTextExpanded] = useState(false);
  const unternehmenDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        unternehmenDropdownRef.current &&
        !unternehmenDropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (quickScanOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [quickScanOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-dark shadow-[0_1px_0_rgba(13,148,136,0.15)] ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className="max-w-container mx-auto px-md flex items-center justify-between">
          <Link to={ROUTES.HOME} className="flex items-center gap-3">
            <span className="font-sans text-xs font-bold text-accent border-2 border-accent px-2.5 py-1 tracking-[0.15em]">
              UVM
            </span>
            <span className="text-sm font-medium text-white tracking-wide">Consulting Group</span>
          </Link>

          <div className="hidden md:flex items-center gap-lg">
            <div className="relative" ref={unternehmenDropdownRef}>
              <button
                type="button"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen((open) => !open)}
                className="text-xs font-medium text-white/60 tracking-[0.1em] uppercase transition-colors hover:text-white flex items-center gap-1"
              >
                Unternehmen
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-dark border border-accent/20 shadow-xl">
                  <a
                    href="#uvm-consulting"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-xs text-white/70 hover:bg-accent/10 hover:text-white transition-colors border-b border-white/5"
                  >
                    UVM Consulting Group
                  </a>
                  <a
                    href="#geschaeftsfuehrung"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-xs text-white/70 hover:bg-accent/10 hover:text-white transition-colors border-b border-white/5"
                  >
                    Geschäftsführung
                  </a>
                  <a
                    href="#werte"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-xs text-white/70 hover:bg-accent/10 hover:text-white transition-colors border-b border-white/5"
                  >
                    Werte und Beratungsansatz
                  </a>
                  <a
                    href="#netzwerk"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-xs text-white/70 hover:bg-accent/10 hover:text-white transition-colors border-b border-white/5"
                  >
                    Netzwerkpartner
                  </a>
                  <a
                    href="#referenzen"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-xs text-white/70 hover:bg-accent/10 hover:text-white transition-colors border-b border-white/5"
                  >
                    Referenzen
                  </a>
                  <a
                    href="#publikationen"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-xs text-white/70 hover:bg-accent/10 hover:text-white transition-colors"
                  >
                    Publikationen
                  </a>
                </div>
              )}
            </div>
            <a
              href="#ansatz"
              className="text-xs font-medium text-white/60 tracking-[0.1em] uppercase transition-colors hover:text-white"
            >
              4C-Modell
            </a>
            <a
              href="#leistungen"
              className="text-xs font-medium text-white/60 tracking-[0.1em] uppercase transition-colors hover:text-white"
            >
              Leistungen
            </a>
            <a
              href="#kontakt"
              className="bg-accent text-white px-5 py-2.5 text-xs font-semibold tracking-[0.08em] uppercase transition-all hover:bg-accent-light"
            >
              Kontakt
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-white transition-all"></span>
            <span className="block w-6 h-0.5 bg-white transition-all"></span>
            <span className="block w-6 h-0.5 bg-white transition-all"></span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark flex items-center justify-center">
          <div className="text-center">
            <div className="flex flex-col gap-lg">
              <div className="flex flex-col gap-3">
                <span className="text-sm text-accent uppercase tracking-[0.15em] font-semibold">
                  Unternehmen
                </span>
                <a
                  href="#uvm-consulting"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-white/70 tracking-[0.08em] font-light"
                >
                  UVM Consulting Group
                </a>
                <a
                  href="#geschaeftsfuehrung"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-white/70 tracking-[0.08em] font-light"
                >
                  Geschäftsführung
                </a>
                <a
                  href="#werte"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-white/70 tracking-[0.08em] font-light"
                >
                  Werte und Beratungsansatz
                </a>
                <a
                  href="#netzwerk"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-white/70 tracking-[0.08em] font-light"
                >
                  Netzwerkpartner
                </a>
                <a
                  href="#referenzen"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-white/70 tracking-[0.08em] font-light"
                >
                  Referenzen
                </a>
                <a
                  href="#publikationen"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-white/70 tracking-[0.08em] font-light"
                >
                  Publikationen
                </a>
              </div>
              <a
                href="#ansatz"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl text-white uppercase tracking-[0.1em] font-light"
              >
                4C-Modell
              </a>
              <a
                href="#leistungen"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl text-white uppercase tracking-[0.1em] font-light"
              >
                Leistungen
              </a>
              <a
                href="#kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl text-white uppercase tracking-[0.1em] font-light"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
      )}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0f172a] to-[#132030]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_75%,rgba(13,148,136,0.1)_0%,transparent_55%),radial-gradient(ellipse_at_75%_25%,rgba(217,119,6,0.06)_0%,transparent_50%)]"></div>
        </div>

        <div className="relative z-10 px-md py-3xl w-full">
          <div className="max-w-3xl mx-auto text-center mb-2xl">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accent mb-md">
              UVM Consulting Group
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-white">
              Zukunftsfähigkeit ist kein Zufall.{' '}
              <span className="text-accent italic">
                Sie ist der Mut, funktionierende Systeme zu hinterfragen
              </span>{' '}
              – bevor es der Markt tut.
            </h1>
          </div>

          <div className="w-full max-w-6xl mx-auto text-lg font-light leading-relaxed text-white/80 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-lg">
              <div className="md:clamp-8-lines">
                <p>
                  Unser 4C-Modell verbindet Corporate Strategy, Culture & Change, Code of Conduct und Competences zu einem klaren Navigationsrahmen für Organisationen im Umbruch. Es hilft, Disruption früh zu erkennen und Veränderung wirksam zu gestalten, bevor äußerer Druck den Takt vorgibt.
                </p>
              </div>
              <div className="md:clamp-8-lines">
                <p>
                  Vertrauen ist dabei kein weiches Thema, sondern die Voraussetzung für Führung in Zeiten von KI, Unsicherheit und Perspektivenvielfalt. Der 4C-Navigator macht sichtbar, wie KI-ready Ihre Organisation ist und welche Entscheidungen jetzt Orientierung geben.
                </p>
              </div>
            </div>

            <div
              id="expanded-content"
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                textExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg pt-lg border-t border-white/10">
                <div className="space-y-2xl">
                  <div className="space-y-md">
                    <h3 className="text-2xl font-semibold text-accent">Disruption strategisch gestalten</h3>
                    <p className="italic text-white/70">
                      Wie bereite ich meine Organisation auf Umbrüche vor, die noch niemand kommen sieht?
                    </p>
                    <p>
                      Disruption trifft die, die sich für unverwundbar halten. Viele Organisationen investieren in Innovationsprogramme, agile Methoden und digitale Transformation. Dennoch scheitern Veränderungsprozesse regelmäßig – nicht an der Strategie, sondern an der Fähigkeit, Gewohntes loszulassen.
                    </p>
                    <p>
                      Wer Disruption nur als technologisches Phänomen begreift, übersieht ihren eigentlichen Hebel: die Bereitschaft von Führungskräften, das eigene Geschäftsmodell radikal zu hinterfragen. Der 4C-Navigator beginnt bei der Corporate Strategy – nicht als Planungsübung, sondern als ehrliche Standortbestimmung: Wie weit tragen Ihre Prozesse, wenn sich die Spielregeln ändern?
                    </p>
                  </div>

                  <div className="space-y-md">
                    <h3 className="text-2xl font-semibold text-accent">Trust & KI-Strategie</h3>
                    <p className="italic text-white/70">
                      Wie schaffe ich Vertrauen in einer Organisation, die zunehmend von Algorithmen mitgesteuert wird?
                    </p>
                    <p>
                      Künstliche Intelligenz verändert nicht nur Prozesse – sie verschiebt die Grundlagen, auf denen Vertrauen in Organisationen entsteht. Die entscheidende Hürde ist nicht die Technologie, sondern die Akzeptanz. Mitarbeitende fragen sich, ob Entscheidungen noch nachvollziehbar sind. Führungskräfte stehen vor der Herausforderung, Verantwortung zu übernehmen für Ergebnisse, die sie nicht vollständig durchdringen.
                    </p>
                    <p>
                      Im 4C-Modell greifen hier zwei Dimensionen ineinander: Corporate Strategy liefert den Rahmen für den KI-Einsatz – von der Digitalisierungsstrategie über People Analytics bis zur Prozessoptimierung. Der Code of Conduct stellt sicher, dass dieser Einsatz ethisch fundiert und nachvollziehbar bleibt. Vertrauenswürdige KI-Strategie beginnt nicht im Serverraum, sondern dort, wo Prinzipien auf Entscheidungen treffen – in der Führungsetage.
                    </p>
                  </div>
                </div>

                <div className="space-y-2xl">
                  <div className="space-y-md">
                    <h3 className="text-2xl font-semibold text-accent">Trustful Leadership</h3>
                    <p className="italic text-white/70">
                      Wie führe ich so, dass Menschen mir auch dann folgen, wenn der Weg unsicher ist?
                    </p>
                    <p>
                      In Zeiten permanenter Veränderung wird Vertrauen zur knappsten Ressource in Organisationen. Klassische Führungsmodelle setzen auf Kontrolle, Zielvorgaben und Reporting. Diese Instrumente verlieren ihre Wirksamkeit, wenn Märkte sich schneller verändern als Planungszyklen reichen.
                    </p>
                    <p>
                      Trustful Leadership ist im 4C-Modell kein Einzelbaustein, sondern das verbindende Prinzip: Culture & Change schafft die psychologische Sicherheit, in der Offenheit möglich wird. Die Competences-Dimension entwickelt die Fähigkeiten, die vertrauensbasierte Führung im Alltag braucht – von systemischer Gesprächsführung bis zur Fähigkeit, Verletzlichkeit als Stärke zu begreifen. Nicht als weiches Kulturprogramm, sondern als strategische Kernkompetenz.
                    </p>
                  </div>

                  <div className="space-y-md">
                    <h3 className="text-2xl font-semibold text-accent">Female Leadership</h3>
                    <p className="italic text-white/70">
                      Wie entfaltet Führung ihre volle Wirkung, wenn Perspektivenvielfalt kein Lippenbekenntnis bleibt?
                    </p>
                    <p>
                      Diversity in Führungspositionen ist kein Fairness-Thema – es ist eine Frage der strategischen Intelligenz. Diverse Führungsteams treffen bessere Entscheidungen, erkennen Risiken früher und reagieren flexibler auf Veränderungen. Dennoch verharren viele Organisationen in homogenen Strukturen – nicht aus bösem Willen, sondern weil Systeme sich selbst reproduzieren.
                    </p>
                    <p>
                      Hier zeigt der 4C-Navigator, warum isolierte Maßnahmen scheitern: Mentoring allein ändert keine Culture, Quoten allein ersetzen keine Competence-Entwicklung, und Leitbilder bleiben wirkungslos ohne einen Code of Conduct, der Perspektivenvielfalt in konkretes Führungshandeln übersetzt. Female Leadership strategisch zu fördern bedeutet, alle vier Dimensionen gleichzeitig in den Blick zu nehmen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-lg">
              <button
                type="button"
                onClick={() => setTextExpanded(!textExpanded)}
                aria-expanded={textExpanded}
                aria-controls="expanded-content"
                className="px-8 py-3 bg-accent/20 text-accent hover:bg-accent hover:text-white transition-all font-semibold text-base border-2 border-accent uppercase tracking-[0.1em]"
              >
                {textExpanded ? 'Weniger anzeigen' : 'Weiterlesen'}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-lg left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/25">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent animate-pulse"></div>
        </div>
      </section>

      <section className="py-3xl bg-dark-blue">
        <div className="max-w-container mx-auto px-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {[
              {
                icon: Zap,
                title: 'KI verändert jede Branche',
                text: 'Wer KI nicht als strategischen Hebel begreift, verliert den Anschluss. Nicht morgen – jetzt.',
              },
              {
                icon: Target,
                title: 'Skills von heute sind morgen obsolet',
                text: 'Die Hälfte Ihrer Mitarbeiterkompetenzen muss neu gedacht werden. Die Frage ist: Haben Sie einen Plan?',
              },
              {
                icon: Users,
                title: 'Kultur entscheidet über Überleben',
                text: 'Transformation scheitert nie an der Technik. Sie scheitert an Menschen, die nicht mitgenommen werden.',
              },
              {
                icon: Shield,
                title: 'Krisen kommen schneller als geplant',
                text: 'Restrukturierung, Nachfolge, Marktumbruch – wer nicht vorbereitet ist, reagiert. Wer vorbereitet ist, gestaltet.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="fade-in p-lg bg-white/[0.03] border border-white/[0.06] text-center transition-all hover:border-accent hover:bg-accent/5 hover:-translate-y-1"
              >
                <card.icon className="w-10 h-10 text-accent mx-auto mb-md" />
                <h3 className="font-sans text-lg font-medium text-white mb-sm leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-white/45">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ansatz" className="py-3xl bg-white">
        <div className="max-w-container mx-auto px-md">
          <div className="text-center mb-2xl max-w-3xl mx-auto">
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-sm px-3.5 py-1.5 border border-accent/30">
              Unser Ansatz
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mt-sm leading-tight">
              Ein System statt Einzelmaßnahmen.
            </h2>
            <p className="text-lg font-light leading-relaxed text-slate-muted mt-md">
              Isolierte Workshops und Strategiepapiere ändern nichts. Echte Zukunftsfähigkeit
              entsteht nur, wenn Strategie, Kultur, Kompetenzen und Verhaltensgrundsätze
              zusammenwirken. Dafür haben wir das 4C-Modell entwickelt.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-light mb-xl">
              {[
                {
                  id: 'strategy',
                  label: 'C1',
                  title: 'Corporate Strategy',
                  text: 'Digitalisierungsstrategie · KI-Integration · People Analytics · Prozessoptimierung',
                  color: 'strategy',
                },
                {
                  id: 'culture',
                  label: 'C2',
                  title: 'Culture & Change',
                  text: 'Digitale Kultur · Behavioral Design · KI Change Readiness · Arbeitgeber-Zertifizierung',
                  color: 'culture',
                },
                {
                  id: 'conduct',
                  label: 'C3',
                  title: 'Code of Conduct',
                  text: 'Leadership Principles · Core Values · KI-Governance · Green Culture & Nachhaltigkeit',
                  color: 'conduct',
                },
                {
                  id: 'competence',
                  label: 'C4',
                  title: 'Competences',
                  text: 'Future Skills · Führungskräftequalifizierung · Business Gaming · KI-Ready Leadership',
                  color: 'competence',
                },
              ].map((card) => (
                <div
                  key={card.id}
                  className={`fade-in p-xl bg-white relative overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-xl before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-${card.color} hover:bg-${card.color}-light`}
                >
                  <span
                    className={`text-[0.65rem] font-bold uppercase tracking-[0.15em] text-${card.color} block mb-2`}
                  >
                    {card.label}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-gray-900 mb-sm">
                    {card.title}
                  </h3>
                  <p className="text-sm font-normal leading-relaxed text-slate-muted">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-dark rounded-full flex items-center justify-center shadow-[0_0_0_6px_white,0_4px_20px_rgba(0,0,0,0.15)] hidden md:flex">
              <span className="font-sans text-lg font-bold text-accent tracking-wider">4C</span>
            </div>

            <div className="text-center pt-lg">
              <button
                type="button"
                onClick={() => setQuickScanOpen(true)}
                className="px-10 py-5 bg-accent text-white text-2xl font-semibold tracking-[0.08em] transition-all hover:bg-accent-light text-center leading-snug"
              >
                Prüfen Sie Ihre Zukunftsfähigkeit
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProductsSection />

      <section id="prozess" className="py-3xl bg-gray-800">
        <div className="max-w-container mx-auto px-md">
          <div className="text-center mb-2xl max-w-3xl mx-auto">
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent-light mb-sm px-3.5 py-1.5 border border-accent/30">
              Wie wir arbeiten
            </span>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-normal text-white mt-sm leading-tight">
              Nicht beraten. Gemeinsam umsetzen.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {[
              {
                number: '01',
                title: 'Verstehen',
                text: 'Unverbindliches Erstgespräch. Wir hören zu, stellen die richtigen Fragen und verstehen Ihre Situation.',
              },
              {
                number: '02',
                title: 'Analysieren',
                text: 'Unser 4C QuickScan gibt Ihnen in zwei Wochen Klarheit über Ihre Zukunftsfähigkeit – datenbasiert, nicht aus dem Bauch.',
              },
              {
                number: '03',
                title: 'Umsetzen',
                text: 'Maßgeschneiderte Roadmap. Workshops, Trainings, Coaching – alles aus einer Hand, bis die Veränderung sitzt.',
              },
              {
                number: '04',
                title: 'Verankern',
                text: 'Regelmäßige Reviews, Erfolgsmessung und Nachjustierung. Damit Transformation keine Eintagsfliege bleibt.',
              },
            ].map((step, i) => (
              <div key={i} className="fade-in text-center p-lg">
                <span className="font-serif text-5xl font-semibold text-accent/20 leading-none block mb-sm">
                  {step.number}
                </span>
                <h3 className="font-sans text-lg font-medium text-white mb-sm">{step.title}</h3>
                <p className="text-sm font-light leading-relaxed text-white/50">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-xl bg-light-white border-t border-b border-light">
        <div className="max-w-container mx-auto px-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl text-center">
            {[
              {
                title: 'Wissenschaftlich fundiert',
                text: 'Data Science trifft Psychologie – wir sehen den Menschen hinter den Daten.',
              },
              {
                title: 'Systematisch & Messbar',
                text: 'Was man misst, kann man managen. Unser 4C-Modell macht Fortschritt sichtbar.',
              },
              {
                title: 'Praktisch & Umsetzbar',
                text: 'Keine Strategiepapiere für die Schublade. Praxiserprobte Lösungen, die wirken.',
              },
            ].map((value, i) => (
              <div key={i} className="fade-in">
                <h3 className="font-sans text-lg font-medium text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-muted leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UnternehmenMainContent />

      <section id="kontakt" className="py-3xl bg-dark">
        <div className="max-w-container mx-auto px-md">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-3xl items-center">
            <div className="fade-in">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-md leading-tight">
                In 2 Wochen wissen, wo Sie stehen.
              </h2>
              <p className="text-base font-light leading-relaxed text-white/60 mb-sm">
                Unser <strong className="text-accent-light font-semibold">4C Navigator QuickScan</strong>{' '}
                analysiert die Zukunftsfähigkeit Ihres Unternehmens – mit Self-Assessments,
                Interviews und einem detaillierten Report mit konkreten Handlungsempfehlungen.
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-lg">
                Kostenlos. Vertraulich. Unverbindlich.
              </p>
              <div className="flex items-center gap-lg flex-wrap">
                <a
                  href="mailto:info@uvm-cg.de"
                  className="inline-block px-8 py-3.5 bg-accent text-white text-[0.85rem] font-semibold uppercase tracking-[0.08em] transition-all hover:bg-accent-light"
                >
                  Jetzt QuickScan anfragen
                </a>
                <a
                  href="tel:+498915900075"
                  className="font-serif text-lg text-white/60 transition-colors hover:text-white"
                >
                  +49 89 15 9000 75
                </a>
              </div>
            </div>

            <div className="fade-in bg-accent/[0.08] border border-accent/20 p-xl">
              <h3 className="font-serif text-lg font-medium text-white mb-md">So starten wir:</h3>
              <ul className="flex flex-col gap-md">
                {[
                  { title: 'Erstgespräch', desc: '30 Min. – Ihre Herausforderung verstehen' },
                  { title: 'QuickScan', desc: '2 Wochen – Analyse & Report' },
                  { title: 'Roadmap', desc: 'Maßgeschneiderter Plan für Ihre Transformation' },
                ].map((step, i) => (
                  <li key={i} className="flex flex-col gap-0.5 pl-lg relative">
                    <span className="absolute left-0 top-0 font-serif text-xl font-semibold text-accent leading-none">
                      {i + 1}
                    </span>
                    <strong className="text-[0.95rem] font-semibold text-white">
                      {step.title}
                    </strong>
                    <span className="text-xs text-white/45">{step.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark py-xl border-t border-accent/15">
        <div className="max-w-container mx-auto px-md">
          <div className="flex flex-wrap justify-between items-start gap-xl pb-lg border-b border-white/[0.06]">
            <div>
              <span className="font-sans text-[0.95rem] font-semibold text-white block mb-1">
                UVM Consulting Group
              </span>
              <p className="text-xs text-white/35 leading-relaxed">
                Wissenschaftlich fundierte Beratung für zukunftsfähige Organisationen
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <a
                href="mailto:info@uvm-cg.de"
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                info@uvm-cg.de
              </a>
              <a
                href="tel:+498915900075"
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                +49 89 15 9000 75
              </a>
            </div>
            <div className="flex gap-lg">
              <Link
                to={ROUTES.IMPRESSUM}
                className="text-xs text-white/35 uppercase tracking-[0.1em] transition-colors hover:text-white"
              >
                Impressum
              </Link>
              <Link
                to={ROUTES.DATENSCHUTZ}
                className="text-xs text-white/35 uppercase tracking-[0.1em] transition-colors hover:text-white"
              >
                Datenschutz
              </Link>
            </div>
          </div>
          <div className="pt-md">
            <p className="text-[0.7rem] text-white/20 text-center">
              © 2026 UVM Consulting Group. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>

      {quickScanOpen && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-[#0d1b2a]"
          role="dialog"
          aria-modal="true"
          aria-label="4C Navigator Quickscan"
        >
          <button
            type="button"
            onClick={() => setQuickScanOpen(false)}
            className="fixed top-4 right-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
            aria-label="Schließen"
          >
            <X size={20} />
          </button>
          <QuickScan4C />
        </div>
      )}

      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

export default NewHomePage;
