import { useState, useRef } from 'react';
import { ArrowDown, Cpu, Users, Building2, Shield } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

type SegmentId = 'culture' | 'competences' | 'conduct' | 'strategy';

type SegmentConfig = {
  id: SegmentId;
  title: string;
  titleLines?: string[];
  subtitle: string;
  sloganLines: [string, string];
  positionClass: string;
  bgClass: string;
  roundedClass: string;
  originClass: string;
  subtitleClass?: string;
  /** Padding on outer edges to pull text toward center */
  innerPaddingClass?: string;
};

const SEGMENTS: SegmentConfig[] = [
  {
    id: 'culture',
    title: 'Culture',
    subtitle: 'Kultur',
    sloganLines: ['Kultur legt die Basis', 'und prägt Verhalten.'],
    positionClass: 'top-0 left-0',
    bgClass: 'bg-gradient-to-br from-primary-400 to-primary-500',
    roundedClass: 'rounded-tl-full',
    originClass: 'origin-bottom-right',
    innerPaddingClass: 'pt-10 pl-10 md:pt-12 md:pl-12',
  },
  {
    id: 'competences',
    title: 'Competences',
    subtitle: 'Kompetenzen',
    sloganLines: ['Kompetenzen machen Können', 'wirksam und messbar.'],
    positionClass: 'top-0 right-0',
    bgClass: 'bg-gradient-to-bl from-secondary-400 to-secondary-500',
    roundedClass: 'rounded-tr-full',
    originClass: 'origin-bottom-left',
    innerPaddingClass: 'pt-10 pr-10 md:pt-12 md:pr-12',
  },
  {
    id: 'conduct',
    title: 'Code of Conduct',
    titleLines: ['Code of', 'Conduct'],
    subtitle: 'Verhaltensgrundsätze',
    sloganLines: ['Grundsätze schaffen Klarheit', 'und schützen Vertrauen.'],
    positionClass: 'bottom-0 left-0',
    bgClass: 'bg-gradient-to-tr from-quaternary-500 to-quaternary-400',
    roundedClass: 'rounded-bl-full',
    originClass: 'origin-top-right',
    subtitleClass: 'break-words hyphens-auto',
    innerPaddingClass: 'pb-10 pl-10 md:pb-12 md:pl-12',
  },
  {
    id: 'strategy',
    title: 'Corporate Strategy',
    titleLines: ['Corporate', 'Strategy'],
    subtitle: 'Unternehmensstrategie',
    sloganLines: ['Strategie gibt Richtung', 'und fokussiert Ressourcen.'],
    positionClass: 'bottom-0 right-0',
    bgClass: 'bg-gradient-to-tl from-tertiary-400 to-tertiary-300',
    roundedClass: 'rounded-br-full',
    originClass: 'origin-top-left',
    subtitleClass: 'break-words hyphens-auto',
    innerPaddingClass: 'pb-10 pr-10 md:pb-12 md:pr-12',
  },
];

export default function HeroSection() {
  const [active, setActive] = useState<SegmentId | null>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const { scrollProgress } = useScrollProgress({
    elementRef: diagramRef as React.RefObject<HTMLElement>,
    startTrigger: 0.8,
    endTrigger: 0.4,
  });

  const getSegmentTransform = (segmentId: SegmentId) => {
    const maxDistance = 150;
    const distance = maxDistance * (1 - scrollProgress);
    const rotation = 45 * (1 - scrollProgress);

    const offsets = {
      culture: { x: -1, y: -1, rotate: -1 },
      competences: { x: 1, y: -1, rotate: 1 },
      conduct: { x: -1, y: 1, rotate: 1 },
      strategy: { x: 1, y: 1, rotate: -1 },
    };

    const offset = offsets[segmentId];
    const x = offset.x * distance;
    const y = offset.y * distance;
    const rotate = offset.rotate * rotation;

    return `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-primary-50/30 pt-32 overflow-x-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(6,182,212,0.08),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 fade-in-up py-2">
            Zukunftsfähigkeit ist kein Zufall.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mt-2 pb-4">Sie ist das Ergebnis eines Systems.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up delay-100">
            Das 4C-Modell ist unser Framework, um die vier entscheidenden Dimensionen Ihres
            Unternehmenserfolgs systematisch zu verbinden: Kompetenzen, Kultur,
            Verhaltensprinzipien und Strategie.
          </p>

          <div className="mb-32">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 fade-in-up delay-200">
              Der größte Treiber des Fortschritts ist die Disruption.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up delay-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                    <Cpu className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Digitale Disruption & KI</h3>
                    <p className="text-primary-700 text-sm leading-relaxed">
                      KI ändert alles - wie stellen Sie sicher, dass Ihr Geschäftsmodell zukunftsfähig
                      bleibt?
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-secondary-50 to-secondary-100 border border-secondary-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up delay-400">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-lg shadow-md">
                    <Users className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      Future Skills & Fachkräftemangel
                    </h3>
                    <p className="text-secondary-700 text-sm leading-relaxed">
                      Die benötigten Kernkompetenzen verändern sich rasant. Wie bauen Sie die
                      Fähigkeiten von morgen auf, statt einen leergefegten Markt abzusuchen?
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-quaternary-50 to-quaternary-100 border border-quaternary-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up delay-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-quaternary-600 to-quaternary-600 rounded-lg shadow-md">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-quaternary-900 mb-2">
                      Kulturwandel & New Work
                    </h3>
                    <p className="text-quaternary-700 text-sm leading-relaxed">
                      Flexibilität und Selbstbestimmung dominieren die neue Arbeitswelt. Wie schaffen
                      Sie eine Kultur, die Top-Talente anzieht, bindet und in hybriden Arbeitswelten
                      leistungsfähig bleibt?
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-tertiary-50 to-tertiary-100 border border-tertiary-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up delay-600">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-tertiary-600 to-tertiary-700 rounded-lg shadow-md">
                    <Shield className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-tertiary-900 mb-2">
                      Krisenfestigkeit & tiefgreifender Wandel
                    </h3>
                    <p className="text-tertiary-700 text-sm leading-relaxed">
                      Wie führen Sie Ihr Unternehmen sicher durch unruhige Zeiten?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-16 fade-in-up delay-600">
            <div ref={diagramRef} className="relative w-[400px] h-[400px] md:w-[448px] md:h-[448px] lg:w-[560px] lg:h-[560px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="absolute inset-0 w-full h-full rounded-full bg-white shadow-2xl transition-opacity duration-700"
                  style={{ opacity: scrollProgress * 0.5 + 0.5 }}
                  aria-hidden="true"
                />

                <div className="w-full h-full relative isolate" onMouseLeave={() => setActive(null)}>
                  {SEGMENTS.map((seg) => {
                    const isActive = active === seg.id;
                    const isDimmed = active !== null && active !== seg.id;

                    return (
                      <button
                        key={seg.id}
                        type="button"
                        aria-label={`${seg.title} – ${seg.subtitle}`}
                        onClick={() => setActive(active === seg.id ? null : seg.id)}
                        onMouseEnter={() => setActive(seg.id)}
                        onMouseLeave={() => setActive(null)}
                        onFocus={() => setActive(seg.id)}
                        onBlur={() => setActive(null)}
                        style={{
                          transform: getSegmentTransform(seg.id),
                          opacity: 0.3 + (scrollProgress * 0.7),
                        }}
                        className={
                          [
                            'absolute',
                            seg.positionClass,
                            'w-1/2 h-1/2',
                            seg.bgClass,
                            seg.roundedClass,
                            'transform-gpu',
                            seg.originClass,
                            'flex items-center justify-center',
                            seg.innerPaddingClass ?? '',
                            'cursor-pointer',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
                            'transition-all duration-700 ease-out',
                            'motion-reduce:transition-none motion-reduce:transform-none',
                            isActive
                              ? 'z-20 brightness-110 saturate-110'
                              : isDimmed
                                ? 'z-10 opacity-60'
                                : 'z-10',
                          ].join(' ')
                        }
                      >
                        {/* Gegenläufig skalieren: Segment wächst, Text bleibt gleich groß */}
                        <div
                          className={
                            [
                              'text-center text-white drop-shadow-md',
                              'transition-transform duration-200 ease-out',
                              isActive ? 'scale-[0.77] md:scale-[0.71] lg:scale-[0.69]' : 'scale-100',
                            ].join(' ')
                          }
                        >
                          <div className="w-[82%] max-w-[9.5rem] md:max-w-[12rem] lg:max-w-[14rem] mx-auto px-2 md:px-3">
                            {/* Title - hidden on hover */}
                            <div
                              className={[
                                'font-semibold text-xs md:text-sm lg:text-base leading-tight',
                                'transition-all duration-200 ease-out',
                                isActive
                                  ? 'opacity-0 max-h-0 overflow-hidden'
                                  : 'opacity-100 max-h-20',
                              ].join(' ')}
                            >
                              {seg.titleLines ? (
                                seg.titleLines.map((line) => (
                                  <span key={line} className="block">
                                    {line}
                                  </span>
                                ))
                              ) : (
                                seg.title
                              )}
                            </div>

                            {/* Subtitle - hidden on hover */}
                            <div
                              className={[
                                'text-white/90 text-xs mt-0.5 leading-tight',
                                seg.subtitleClass ?? 'break-words',
                                'transition-all duration-200 ease-out',
                                isActive
                                  ? 'opacity-0 max-h-0 overflow-hidden mt-0'
                                  : 'opacity-100 max-h-10',
                              ].join(' ')}
                            >
                              {seg.subtitle}
                            </div>

                            {/* Description - shown on tap (mobile) or hover (desktop) with larger font */}
                            <div
                              className={
                                [
                                  'leading-snug',
                                  'text-white/95',
                                  'transition-all duration-200 ease-out',
                                  isActive
                                    ? 'opacity-100 translate-y-0 max-h-40 md:max-h-32'
                                    : 'opacity-0 translate-y-1 max-h-0 overflow-hidden',
                                ].join(' ')
                              }
                            >
                              <div className={isActive ? 'text-base md:text-base lg:text-lg font-medium px-2' : 'text-xs md:text-xs lg:text-sm'}>
                                <span className="block">{seg.sloganLines[0]}</span>
                                <span className="block">{seg.sloganLines[1]}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}

                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 transition-all duration-700"
                    style={{
                      opacity: scrollProgress,
                      transform: `scale(${0.5 + (scrollProgress * 0.5)}) rotate(${360 * scrollProgress}deg)`,
                    }}
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <span className="text-gray-800 font-bold text-base md:text-xl">4C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#modell"
            className="inline-flex items-center gap-2 mt-12 text-gray-500 hover:text-primary-600 transition-all duration-300 group fade-in-up delay-600"
          >
            <span className="text-base font-medium">Mehr erfahren</span>
            <ArrowDown size={20} className="animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
