import { useRef, useEffect, useState } from 'react';
import { Send, Check, Loader2 } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32 bg-gray-50/50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <span
            className={`inline-block text-xs font-medium text-gray-400 uppercase tracking-widest mb-4 transition-all duration-700 ease-expo-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Contact
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight mb-4 transition-all duration-700 delay-100 ease-expo-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Get in <span className="font-medium">Touch</span>
          </h2>
          <p
            className={`text-gray-500 transition-all duration-700 delay-200 ease-expo-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            For collaborations, speaking engagements, or research inquiries
          </p>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-6 transition-all duration-700 delay-300 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Name & Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="peer w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 text-black placeholder-transparent focus:outline-none focus:border-black transition-colors"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-2.5 text-xs text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-black"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="peer w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 text-black placeholder-transparent focus:outline-none focus:border-black transition-colors"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-2.5 text-xs text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-black"
              >
                Email
              </label>
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              id="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={4}
              className="peer w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 text-black placeholder-transparent focus:outline-none focus:border-black transition-colors resize-none"
              placeholder="Message"
            />
            <label
              htmlFor="message"
              className="absolute left-0 -top-2.5 text-xs text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-black"
            >
              Message
            </label>
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-500 ${
                isSubmitted
                  ? 'bg-green-500 text-white'
                  : 'bg-black text-white hover:bg-gray-800'
              } disabled:cursor-not-allowed`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Message Sent
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Alternative contact */}
        <div
          className={`mt-16 pt-8 border-t border-gray-200 text-center transition-all duration-700 delay-400 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm text-gray-400 mb-2">Prefer email?</p>
          <a
            href="mailto:patrik.bey@ucl.ac.uk"
            className="text-lg text-black hover:opacity-60 transition-opacity"
          >
            patrik.bey@ucl.ac.uk
          </a>
        </div>
      </div>
    </section>
  );
}
