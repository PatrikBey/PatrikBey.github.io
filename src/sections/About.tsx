import { useRef, useEffect, useState } from 'react';
import { MapPin, Mail, GraduationCap, Building2, ExternalLink } from 'lucide-react';

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image column */}
          <div
            className={`relative transition-all duration-1000 ease-expo-out ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="sticky top-32">
              {/* Portrait */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src="/portrait.jpg"
                  alt="Patrik Bey"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Contact info card */}
              <div
                className={`mt-6 p-6 rounded-xl bg-gray-50 border border-gray-100 transition-all duration-700 delay-300 ease-expo-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">London, United Kingdom</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">UCL Queen Square Institute of Neurology</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a
                      href="mailto:patrik.bey@ucl.ac.uk"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      patrik.bey@ucl.ac.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div>
            <span
              className={`inline-block text-xs font-medium text-gray-400 uppercase tracking-widest mb-4 transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              About
            </span>

            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight mb-8 transition-all duration-700 delay-100 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Dr. Patrik <span className="font-medium">Bey</span>
            </h2>

            <div
              className={`space-y-6 text-gray-600 leading-relaxed transition-all duration-700 delay-200 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p>
                As a Senior Research Fellow at UCL's Queen Square Institute of
                Neurology, I specialize in the application and analysis of complex
                AI models to high-dimensional clinical neuroimaging data. My
                research focuses on understanding the network organization of the
                human brain and its response to pathological events such as stroke.
              </p>

              <p>
                My expertise spans structural and functional neuroimaging, machine
                learning and artificial intelligence, and algorithm development and
                validation. I am particularly interested in bridging the gap between
                computational neuroscience and clinical applications, developing
                tools that can directly impact patient care.
              </p>

              <p>
                Previously, I held positions as a research fellow at Charité
                Universitätsmedizin Berlin, where I completed my PhD (Dr. rer.
                medic.) in 2025 with a dissertation on facilitating brain network
                modeling for pathological patient populations. I also have
                experience as a senior data scientist in the private sector,
                bringing a practical perspective to my academic research.
              </p>
            </div>

            {/* Education & Experience */}
            <div
              className={`mt-12 space-y-8 transition-all duration-700 delay-300 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Education */}
              <div>
                <h3 className="flex items-center gap-2 text-sm font-medium text-black mb-4">
                  <GraduationCap className="w-4 h-4" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-px bg-gray-200 relative">
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-300" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-black">
                        PhD (Dr. rer. medic.)
                      </div>
                      <div className="text-sm text-gray-500">
                        Charité Universitätsmedizin Berlin, 2025
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Dissertation: Facilitating brain network modelling for
                        pathological patient populations
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Position */}
              <div>
                <h3 className="flex items-center gap-2 text-sm font-medium text-black mb-4">
                  <Building2 className="w-4 h-4" />
                  Current Position
                </h3>
                <div className="flex gap-4">
                  <div className="w-px bg-gray-200 relative">
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-black">
                      Senior Research Fellow
                    </div>
                    <div className="text-sm text-gray-500">
                      UCL Queen Square Institute of Neurology
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Department of Translational Neuroscience and Stroke
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div
              className={`mt-12 flex flex-wrap gap-4 transition-all duration-700 delay-400 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="https://profiles.ucl.ac.uk/104267-patrik-bey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-black hover:text-black transition-colors"
              >
                UCL Profile
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=55CSb_AAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-black hover:text-black transition-colors"
              >
                Google Scholar
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Patrik-Bey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-black hover:text-black transition-colors"
              >
                ResearchGate
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
