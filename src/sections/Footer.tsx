import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=55CSb_AAAAAJ',
    icon: ExternalLink,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/patrik-bey-a43b6985',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:patrik.bey@ucl.ac.uk',
    icon: Mail,
  },
];

const navLinks = [
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 lg:py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Logo & tagline */}
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#');
              }}
              className="text-lg font-medium text-black hover:opacity-60 transition-opacity"
            >
              Patrik Bey
            </a>
            <p className="mt-1 text-sm text-gray-400">
              Senior Research Fellow at UCL
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; {currentYear} Patrik Bey. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Queen Square Institute of Neurology, University College London
          </p>
        </div>
      </div>
    </footer>
  );
}
