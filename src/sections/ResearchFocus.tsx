import { useState, useRef, useEffect } from 'react';
import { Cpu, Scan, Activity, Brain } from 'lucide-react';

const researchAreas = [
  {
    id: 1,
    title: 'AI in Neurology',
    description:
      'Applying machine learning and deep learning to neuroimaging data for improved diagnosis and prognosis in dementia, stroke, and other neurological conditions.',
    icon: Cpu,
    details: [
      'Dementia classification',
      'Stroke recovery prediction',
      'Deep graph learning',
      'Clinical decision support',
    ],
  },
  {
    id: 2,
    title: 'Stroke Research',
    description:
      'Developing lesion-aware automated processing frameworks for clinical stroke MRI. Investigating group-derived and individual disconnection patterns for recovery prediction.',
    icon: Activity,
    details: [
      'Lesion-aware processing',
      'Disconnection analysis',
      'Recovery prediction',
      'Clinical stroke MRI',
    ],
  },
  {
    id: 3,
    title: 'Neuroimaging Analysis',
    description:
      'Advanced processing and analysis of multi-modal neuroimaging data including fMRI, structural MRI, and PET imaging for clinical and research applications.',
    icon: Scan,
    details: [
      'fMRI signal processing',
      'Structural MRI analysis',
      'PET imaging integration',
      'Multi-modal fusion',
    ],
  },
  {
    id: 4,
    title: 'Translational Neuroscience',
    description:
      'Bridging preclinical and clinical research through graph-based approaches. Our work on serotonin and social behavior in mice demonstrates how network models derived from animal studies can inform human neuroscience, developing validation frameworks that translate findings across species.',
    icon: Brain,
    details: [
      'Graph models in animal studies',
      'Serotonin-behavior networks',
      'Cross-species validation frameworks',
      'Preclinical to clinical translation',
    ],
  },
];

export default function ResearchFocus() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="research"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <span
            className={`inline-block text-xs font-medium text-gray-400 uppercase tracking-widest mb-4 transition-all duration-700 ease-expo-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Research Focus
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight transition-all duration-700 delay-100 ease-expo-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Areas of <span className="font-medium">Investigation</span>
          </h2>
        </div>

        {/* Research cards - Horizontal accordion */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 lg:h-[500px]">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            const isActive = activeCard === area.id;

            return (
              <div
                key={area.id}
                className={`relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50 cursor-pointer transition-all duration-700 ease-expo-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } ${
                  isActive
                    ? 'lg:flex-[3] flex-auto'
                    : 'lg:flex-1 flex-none'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100 + 200}ms` : '0ms',
                }}
                onMouseEnter={() => setActiveCard(area.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card content */}
                <div className="p-6 lg:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-6 transition-all duration-500 ${
                      isActive ? 'scale-110' : ''
                    }`}
                  >
                    <Icon className="w-5 h-5 text-gray-700" />
                  </div>

                  {/* Title - vertical on collapsed, horizontal on expanded */}
                  <h3
                    className={`font-medium text-black mb-4 transition-all duration-500 ${
                      isActive
                        ? 'text-xl lg:text-2xl'
                        : 'text-lg lg:text-xl lg:writing-mode-vertical'
                    }`}
                    style={
                      !isActive
                        ? { writingMode: 'horizontal-tb' }
                        : undefined
                    }
                  >
                    {isActive ? (
                      area.title
                    ) : (
                      <span className="lg:writing-mode-vertical lg:rotate-180 lg:[writing-mode:vertical-rl]">
                        {area.title}
                      </span>
                    )}
                  </h3>

                  {/* Expanded content */}
                  <div
                    className={`flex-1 overflow-hidden transition-all duration-500 ${
                      isActive
                        ? 'opacity-100 max-h-[400px]'
                        : 'opacity-0 max-h-0 lg:max-h-0'
                    }`}
                  >
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {area.description}
                    </p>

                    {/* Details list */}
                    <ul className="space-y-2">
                      {area.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <span className="w-1 h-1 rounded-full bg-gray-400" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Collapsed indicator */}
                  <div
                    className={`mt-auto transition-opacity duration-300 ${
                      isActive ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <div className="w-8 h-0.5 bg-gray-200" />
                  </div>
                </div>

                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom stats */}
        <div
          className={`mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 delay-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <div className="text-3xl lg:text-4xl font-light text-black mb-1">11+</div>
            <div className="text-sm text-gray-400">Publications</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-light text-black mb-1">50+</div>
            <div className="text-sm text-gray-400">Citations</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-light text-black mb-1">4</div>
            <div className="text-sm text-gray-400">Research Areas</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-light text-black mb-1">8+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
