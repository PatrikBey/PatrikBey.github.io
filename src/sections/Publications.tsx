import { useRef, useEffect, useState } from 'react';
import { ExternalLink, Quote, BookOpen } from 'lucide-react';

const publications = [
  {
    id: 1,
    title:
      'Brain simulation augments machine-learning-based classification of dementia',
    authors:
      'Triebkorn P, Stefanovski L, Dhindsa K, Diaz-Cortes MA, Bey P, Bülau K, et al.',
    journal: "Alzheimer's & Dementia: Translational Research & Clinical Interventions",
    year: '2022',
    citations: 30,
    doi: '10.1002/trc2.12303',
    abstract:
      'Computational brain network modeling using The Virtual Brain (TVB) acts synergistically with machine learning and multi-modal neuroimaging to reveal mechanisms and improve diagnostics in Alzheimer\'s disease.',
  },
  {
    id: 2,
    title:
      'A lesion-aware automated processing framework for clinical stroke magnetic resonance imaging',
    authors: 'Bey P, Dhindsa K, Kashyap A, Schirner M, Feldheim J, Bönstrup M, et al.',
    journal: 'Human Brain Mapping',
    year: '2024',
    citations: 7,
    doi: '10.1002/hbm.26701',
    abstract:
      'Development of an automated processing pipeline for pathologically altered brains, enabling personalized brain network modeling for stroke patient populations.',
  },
  {
    id: 3,
    title: 'Using an ordinary differential equation model to separate rest and task signals in fMRI',
    authors:
      'Kashyap A, Geenjaar E, Bey P, Dhindsa K, Glomb K, Plis S, Keilholz S, Ritter P.',
    journal: 'Nature Communications',
    year: '2025',
    citations: 2,
    doi: '10.1038/s41467-025-62491-6',
    abstract:
      'Novel ODE model approach to disentangle resting-state and task-evoked signals in functional MRI, providing clearer insights into brain activity patterns.',
  },
  {
    id: 4,
    title:
      'Group-derived and individual disconnection in stroke: recovery prediction and deep graph learning',
    authors:
      'Bey P, Dhindsa K, Rackoll T, Feldheim J, Bönstrup M, Thomalla G, Schulz R, Cheng B, Gerloff C, Endres M, Nave AH, Ritter P.',
    journal: 'medRxiv',
    year: '2025',
    citations: 0,
    doi: '10.1101/2025.07.02.25330753',
    abstract:
      'Investigating group-derived and individual disconnection patterns in stroke patients using deep graph learning for recovery prediction.',
  },
  {
    id: 5,
    title:
      'Serotonin drives aggression and social behaviors of laboratory male mice in a semi-natural environment',
    authors:
      'Rivalan M, Alonso L, Mosienko V, Bey P, Hyde A, Bader M, Winter Y, Södersten E, Pilsner M, Wöhr M, Bannai M, Sakurai T, Kiser DP, Schmitt-Böhrer A, Lesch KP.',
    journal: 'Frontiers in Behavioral Neuroscience',
    year: '2024',
    citations: 5,
    doi: '10.3389/fnbeh.2024.1450540',
    abstract:
      'Study on the role of serotonin in driving aggression and social behaviors in laboratory mice within semi-natural environments.',
  },
];

export default function Publications() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
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
      id="publications"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gray-50/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20">
          <div>
            <span
              className={`inline-block text-xs font-medium text-gray-400 uppercase tracking-widest mb-4 transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Publications
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight transition-all duration-700 delay-100 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Selected <span className="font-medium">Works</span>
            </h2>
          </div>
          <p
            className={`mt-4 lg:mt-0 text-gray-500 max-w-md transition-all duration-700 delay-200 ease-expo-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Cited 50+ times across 11 peer-reviewed publications in leading
            neuroscience journals.
          </p>
        </div>

        {/* Publications list */}
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <article
              key={pub.id}
              className={`group relative bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-700 ease-expo-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } ${
                hoveredId === pub.id
                  ? 'shadow-soft border-gray-200'
                  : 'hover:border-gray-200'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100 + 300}ms` : '0ms',
              }}
              onMouseEnter={() => setHoveredId(pub.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                  {/* Year badge */}
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 text-xs font-medium text-gray-500">
                      <BookOpen className="w-3 h-3" />
                      {pub.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg lg:text-xl font-medium text-black mb-2 leading-snug group-hover:text-gray-700 transition-colors">
                      {pub.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-3 line-clamp-1">
                      {pub.authors}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4">
                      <span className="font-medium text-gray-500">
                        {pub.journal}
                      </span>
                      <span>·</span>
                      <span>{pub.citations} citations</span>
                      <span>·</span>
                      <span className="font-mono">DOI: {pub.doi}</span>
                    </div>

                    {/* Abstract - shown on hover */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-expo-out ${
                        hoveredId === pub.id
                          ? 'max-h-32 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="flex gap-3 pt-2 border-t border-gray-100">
                        <Quote className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {pub.abstract}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Link button */}
                  <div className="flex-shrink-0">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      View
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Progress bar on hover */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-700 ease-expo-out ${
                  hoveredId === pub.id ? 'w-full' : 'w-0'
                }`}
              />
            </article>
          ))}
        </div>

        {/* View all link */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="https://scholar.google.com/citations?user=55CSb_AAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors link-underline"
          >
            View all publications on Google Scholar
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
