import { useRef } from 'react';
import { Heart, Brain, Shield, Target, Users, Lightbulb, Scale, TrendingUp, Cpu, Sparkles } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

const dimensions = [
  {
    id: 'strategy',
    title: 'Corporate Strategy',
    subtitle: 'Unternehmensstrategie',
    description: 'Die Organisation zukunftsorientiert ausrichten und richtungsweisend führen.',
    bgColor: 'bg-tertiary-500',
    lightBg: 'bg-tertiary-50',
    borderColor: 'border-tertiary-200',
    textColor: 'text-tertiary-700',
    accentColor: 'text-tertiary-600',
    icon: Target,
    features: [
      { icon: TrendingUp, text: 'Marktorientierung & Innovation' },
      { icon: Target, text: 'Change-Management' },
      { icon: Lightbulb, text: 'Nachhaltigkeit & Environmental, Social and Corporate Governance (ESG)' },
    ],
  },
  {
    id: 'culture',
    title: 'Culture',
    subtitle: 'Kultur',
    description: 'Das Fundament für Werte, Zusammenarbeit und Innovationsfreude.',
    bgColor: 'bg-primary-500',
    lightBg: 'bg-primary-50',
    borderColor: 'border-primary-200',
    textColor: 'text-primary-700',
    accentColor: 'text-primary-500',
    icon: Heart,
    features: [
      { icon: Heart, text: 'Werteorientierung & Vertrauen' },
      { icon: Users, text: 'Innovationsfreude, Ambidextrie & Veränderungsbereitschaft' },
      { icon: Sparkles, text: 'Employee Wellbeing, Diversity & Inklusion' },
    ],
  },
  {
    id: 'conduct',
    title: 'Code of Conduct',
    subtitle: 'Verhaltensgrundsätze',
    description: 'Das Regelwerk für integres und faires Handeln, für wertschätzende Führung & Zusammenarbeit.',
    bgColor: 'bg-quaternary-500',
    lightBg: 'bg-quaternary-50',
    borderColor: 'border-quaternary-200',
    textColor: 'text-quaternary-700',
    accentColor: 'text-quaternary-600',
    icon: Shield,
    features: [
      { icon: Shield, text: 'Ethik & Transparenz' },
      { icon: Scale, text: 'Anti-Diskriminierung' },
      { icon: Users, text: 'Leadership Principles' },
    ],
  },
  {
    id: 'competences',
    title: 'Competences',
    subtitle: 'Kompetenzen',
    description: 'Die entscheidenden Fähigkeiten für morgen entwickeln.',
    bgColor: 'bg-secondary-500',
    lightBg: 'bg-secondary-50',
    borderColor: 'border-secondary-200',
    textColor: 'text-secondary-700',
    accentColor: 'text-secondary-500',
    icon: Brain,
    features: [
      { icon: Cpu, text: 'Technologische Kompetenzen' },
      { icon: Lightbulb, text: 'Digitale Schlüsselkompetenzen' },
      { icon: Users, text: 'Menschliche Fähigkeiten' },
    ],
  },
];

export default function ModelSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollProgress } = useScrollProgress({
    elementRef: sectionRef,
    startTrigger: 0.7,
    endTrigger: 0.3,
  });

  const getQuadrantTransform = (index: number) => {
    const maxDistance = 100;
    const distance = maxDistance * (1 - scrollProgress);
    
    // Left side (index 0, 2) slides from left, right side (index 1, 3) slides from right
    const isLeftSide = index % 2 === 0;
    const x = isLeftSide ? -distance : distance;
    
    return `translateX(${x}px)`;
  };

  return (
    <section ref={sectionRef} id="modell" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.05),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Die Lösung ist ein integriertes System:
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 block mt-2">Das 4C-Modell.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Erfolg in der Zukunft erfordert, die entscheidenden Handlungsfelder nicht mehr getrennt,
            sondern als vernetztes System zu betrachten. Das 4C-Modell schafft die nötige Klarheit
            und Synchronität.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {dimensions.map((dim, index) => (
              <div
                key={dim.id}
                className={`relative group rounded-2xl border-2 ${dim.borderColor} bg-white overflow-hidden hover:shadow-2xl transition-all duration-700`}
                style={{
                  transform: getQuadrantTransform(index),
                  opacity: scrollProgress,
                }}
              >
                <div className={`${dim.bgColor} h-2 group-hover:h-3 transition-all duration-300`}></div>

                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className={`w-16 h-16 rounded-xl ${dim.lightBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                      <dim.icon className={dim.accentColor} size={32} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${dim.textColor}`}>{dim.title}</h3>
                      <p className="text-gray-500 text-base lg:text-lg mt-1">{dim.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base lg:text-lg mb-6 leading-relaxed">
                    {dim.description}
                  </p>

                  <div className="space-y-3">
                    {dim.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${dim.lightBg} ${dim.textColor} hover:scale-105 transition-transform duration-200 cursor-default`}
                      >
                        <feature.icon size={20} className="flex-shrink-0" />
                        <span className="text-base font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-700"
            style={{
              opacity: scrollProgress,
              transform: `translate(-50%, -50%) scale(${0.5 + (scrollProgress * 0.5)}) rotate(${360 * scrollProgress}deg)`,
            }}
          >
            <div className="w-32 h-32 rounded-full bg-white shadow-2xl border-4 border-gray-100 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 via-secondary-400 via-tertiary-400 to-quaternary-400 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">4C</span>
              </div>
            </div>
          </div>

          <svg
            className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-4rem)] h-[calc(100%-4rem)] pointer-events-none transition-opacity duration-700"
            style={{
              zIndex: 5,
              opacity: scrollProgress * 0.6,
            }}
          >
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="8 4" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="8 4" />
          </svg>
        </div>

        <div className="mt-16 max-w-4xl mx-auto animate-fade-in-up delay-500">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10 border border-gray-200 hover:shadow-xl transition-all duration-300 hover-lift">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 relative">
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary-400 rounded-tl-full"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary-400 rounded-tr-full"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-quaternary-400 rounded-bl-full"></div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-tertiary-400 rounded-br-full"></div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Warum ein integriertes System?
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Disruption ist heute der Normalfall: neue Technologien, neue Wettbewerber und veränderte Erwartungen verschieben Anforderungen schneller, als Einzelmaßnahmen greifen. 
                   </p>
                  <br />
                 <p className="text-gray-600 text-lg leading-relaxed"> Das World Economic Forum geht davon aus, dass bis 2027 rund 44% der Kernkompetenzen neu ausgerichtet oder aktualisiert werden müssen. 
                                        </p>
                  <p className="text-gray-600 text-lg leading-relaxed">  
                     </p> <br />
                   <p className="text-gray-600 text-lg leading-relaxed">  
                  Wenn Kompetenzen, Kultur, Verhaltensgrundsätze und Strategie getrennt entwickelt werden, entstehen Reibungsverluste: Initiativen laufen nebeneinander, Prioritäten widersprechen sich, Umsetzung bleibt zufällig. <br /> <br /> Das 4C-Modell verbindet alle vier Dimensionen zu einem abgestimmten System, das Veränderung beschleunigt und konsequent in den Alltag übersetzt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
