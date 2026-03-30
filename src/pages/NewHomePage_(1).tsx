import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Zap, Target, Users, Shield, X } from 'lucide-react';
import { ROUTES } from '../constants/paths';
import UnternehmenMainContent from '../components/UnternehmenMainContent';
import ProductsSection from '../components/ProductsSection';
import QuickScan4C from '../components/QuickScan4C';
import logoImage from '../assets/UVM_Institut_HighRes.png';

function NewHomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [quickScanOpen, setQuickScanOpen] = useState(false);
  const [textExpanded, setTextExpanded] = useState(false);
  const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(null);
  const unternehmenDropdownRef = useRef<HTMLDivElement>(null);
  const heroBackgroundUrl = 'data:image/webp;base64,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';

  const scrollToExpandedSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleIntroClick = (targetId: string) => {
    if (textExpanded) {
      scrollToExpandedSection(targetId);
    } else {
      setPendingScrollTarget(targetId);
      setTextExpanded(true);
    }
  };

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
    if (textExpanded && pendingScrollTarget) {
      const timer = setTimeout(() => {
        scrollToExpandedSection(pendingScrollTarget);
        setPendingScrollTarget(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [textExpanded, pendingScrollTarget]);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#101420] shadow-[0_1px_0_rgba(13,148,136,0.15)] ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className="max-w-container mx-auto px-md flex items-center justify-between">
          <Link to={ROUTES.HOME} className="flex items-center">
            <img
              src={logoImage}
              alt="UVM Institut"
              className="h-10 md:h-12 w-auto object-contain"
            />
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#101420] border border-accent/20 shadow-xl">
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
                    Werte und Haltung
                  </a>
                  <a
                    href="#netzwerk"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-xs text-white/70 hover:bg-accent/10 hover:text-white transition-colors border-b border-white/5"
                  >
                    Netzwerk
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
              Beratungsansatz
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
        <div className="fixed inset-0 z-40 bg-[#101420] flex items-center justify-center">
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
                  Werte und Haltung
                </a>
                <a
                  href="#netzwerk"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-white/70 tracking-[0.08em] font-light"
                >
                  Netzwerk
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
                Beratungsansatz
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

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060c17]">
        <div
          className="absolute inset-0 pointer-events-none bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBackgroundUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,12,23,0.16),rgba(6,12,23,0.08)_26%,rgba(6,12,23,0.20))]"></div>

        <div className="relative z-10 px-md py-[8.5rem] md:py-[9.5rem] w-full">
          <div className="max-w-4xl mx-auto text-center mb-2xl">
            <div className="text-lg md:text-2xl lg:text-3xl font-semibold uppercase tracking-[0.15em] text-accent mb-md drop-shadow-[0_3px_14px_rgba(0,0,0,0.35)]">
              UVM Consulting Group
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.38)]">
              Zukunftsfähigkeit ist kein Zufall.{' '}
              <span className="text-accent italic">
                Sie ist der Mut, funktionierende Systeme zu hinterfragen
              </span>{' '}
              – bevor es der Markt tut.
            </h1>
          </div>

          <div className="w-full max-w-5xl mx-auto text-lg font-light leading-relaxed text-white/80 text-center">
            <div className="flex flex-wrap justify-center items-center gap-3 mb-md">
              {[
                { label: 'Disruption strategisch gestalten', target: 'intro-disruption' },
                { label: 'Trust & KI-Strategie', target: 'intro-trust-ki' },
                { label: 'Trustful Leadership', target: 'intro-trustful-leadership' },
                { label: 'Female Leadership', target: 'intro-female-leadership' }
              ].map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => handleIntroClick(chip.target)}
                  aria-label={`Springe zu ${chip.label}`}
                  aria-controls="expanded-content"
                  className="inline-block px-5 py-2.5 text-base font-medium border border-[#4E9188]/30 bg-[#4E9188]/10 text-[#4E9188] tracking-wide hover:bg-[#4E9188]/20 hover:border-[#4E9188]/50 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4E9188]/50"
                  style={{ color: '#4E9188' }}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 mb-lg">
              {[
                { label: 'Beratung', target: 'intro-beratung' },
                { label: 'Workshops', target: 'intro-workshops' },
                { label: 'Coachings', target: 'intro-coachings' },
                { label: 'Vorträge', target: 'intro-vortraege' },
                { label: 'Schulungen', target: 'intro-schulungen' }
              ].map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => handleIntroClick(chip.target)}
                  aria-label={`Springe zu ${chip.label}`}
                  aria-controls="expanded-content"
                  className="inline-block px-5 py-2.5 text-base font-medium border border-[#3070B0]/30 bg-[#3070B0]/10 tracking-wide hover:bg-[#3070B0]/20 hover:border-[#3070B0]/50 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3070B0]/50"
                  style={{ color: '#3070B0' }}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            <div
              id="expanded-content"
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                textExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg pt-lg border-t border-white/10 text-left">
                <div className="space-y-2xl">
                  <div id="intro-disruption" className="space-y-md scroll-mt-32 md:scroll-mt-36">
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

                  <div id="intro-trust-ki" className="space-y-md scroll-mt-32 md:scroll-mt-36">
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
                  <div id="intro-trustful-leadership" className="space-y-md scroll-mt-32 md:scroll-mt-36">
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

                  <div id="intro-female-leadership" className="space-y-md scroll-mt-32 md:scroll-mt-36">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-2xl mt-2xl border-t border-white/10 text-left">
                <div id="intro-beratung" className="space-y-md scroll-mt-32 md:scroll-mt-36">
                  <h3 className="text-lg md:text-xl font-semibold" style={{ color: '#3070B0' }}>Beratung</h3>
                  <p className="text-white/80 leading-relaxed">
                    Wir begleiten Vorstände, Geschäftsführungen und Führungsteams bei strategischen Fragen zu Disruption, Digitalisierung, KI und Führung. Gemeinsam klären wir Ausgangslage, Zielbild und Prioritäten und übersetzen komplexe Entwicklungen in belastbare Entscheidungen, klare Verantwortlichkeiten und realistische nächste Schritte.
                  </p>
                </div>

                <div id="intro-workshops" className="space-y-md scroll-mt-32 md:scroll-mt-36">
                  <h3 className="text-lg md:text-xl font-semibold" style={{ color: '#3070B0' }}>Workshops</h3>
                  <p className="text-white/80 leading-relaxed">
                    Unsere Workshops schaffen einen strukturierten Raum, um Perspektiven zu bündeln, Spannungen sichtbar zu machen und tragfähige Lösungen zu erarbeiten. So entstehen nicht nur gute Diskussionen, sondern konkrete Entscheidungen, belastbare Roadmaps und eine gemeinsame Grundlage für wirksame Umsetzung.
                  </p>
                </div>

                <div id="intro-coachings" className="space-y-md scroll-mt-32 md:scroll-mt-36">
                  <h3 className="text-lg md:text-xl font-semibold" style={{ color: '#3070B0' }}>Coachings</h3>
                  <p className="text-white/80 leading-relaxed">
                    In unseren Coachings begleiten wir Führungskräfte und Schlüsselpersonen in Phasen hoher Dynamik, Unsicherheit oder persönlicher Neuorientierung. Im vertraulichen Sparring stärken wir Entscheidungsfähigkeit, kommunikative Klarheit und Führungswirksamkeit, besonders im Zusammenspiel von KI, Veränderung und Verantwortung.
                  </p>
                </div>

                <div id="intro-vortraege" className="space-y-md scroll-mt-32 md:scroll-mt-36">
                  <h3 className="text-lg md:text-xl font-semibold" style={{ color: '#3070B0' }}>Vorträge</h3>
                  <p className="text-white/80 leading-relaxed">
                    Unsere Vorträge verbinden wissenschaftliche Fundierung mit strategischer Relevanz und klarer Sprache. Wir geben Impulse zu KI, Trustful Leadership, Disruption, Kulturwandel und Female Leadership, die Orientierung geben, Diskussionen öffnen und den Blick auf konkrete Handlungsfelder lenken.
                  </p>
                </div>

                <div id="intro-schulungen" className="space-y-md md:col-span-2 scroll-mt-32 md:scroll-mt-36">
                  <h3 className="text-lg md:text-xl font-semibold" style={{ color: '#3070B0' }}>Schulungen</h3>
                  <p className="text-white/80 leading-relaxed">
                    Unsere Schulungen vermitteln Wissen praxisnah, anschlussfähig und auf die Realität Ihrer Organisation zugeschnitten. Wir qualifizieren Führungskräfte, Mitarbeitende und Multiplikatoren in Themen wie KI-Kompetenz, Veränderungsfähigkeit, Kommunikation und Führung, damit aus Erkenntnis tatsächlich neue Praxis entsteht.
                  </p>
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

      <section className="py-3xl bg-[#101420]">
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

          <div className="relative mb-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 md:auto-rows-fr gap-0.5 bg-light">
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
                  className={`fade-in p-xl bg-white relative overflow-hidden h-full transition-all hover:-translate-y-0.5 hover:shadow-xl before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-${card.color} hover:bg-${card.color}-light`}
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

            <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none z-20">
              <div className="w-20 h-20 bg-[#101420] rounded-full flex items-center justify-center shadow-[0_0_0_6px_white,0_4px_20px_rgba(0,0,0,0.15)]">
                <span className="font-sans text-lg font-bold text-accent tracking-wider">4C</span>
              </div>
            </div>
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
      </section>

      <ProductsSection />

      <section id="prozess" className="py-3xl bg-[#101420]">
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

      <section id="kontakt" className="py-3xl bg-[#101420]">
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
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+498915900075"
                    className="font-serif text-lg text-white/60 transition-colors hover:text-white"
                  >
                    +49 89 15 9000 75
                  </a>
                  <div className="text-xs text-white/40 font-light leading-relaxed">
                    <div>Büro Erding: Pater-Alois-Weg 12</div>
                    <div>Büro Olching: Josef-Bergmann-Weg 1</div>
                  </div>
                </div>
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

      <footer className="bg-[#101420] py-xl border-t border-accent/15">
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
          className="fixed inset-0 z-[100] overflow-y-auto bg-[#101420]"
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
