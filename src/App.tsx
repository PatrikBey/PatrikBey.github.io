import { useEffect, useRef } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import ResearchFocus from './sections/ResearchFocus';
import Publications from './sections/Publications';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-white">
      {/* Grain overlay for texture */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        <Hero />
        <ResearchFocus />
        <Publications />
        <About />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
