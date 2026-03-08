import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Oferta', href: '#oferta' },
  { label: 'Realizacje', href: '#galeria' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-g-card border-b-2 border-g-separator transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="font-playfair font-bold text-xl md:text-2xl text-g-text">GRANBET</span>
          <span className="hidden sm:block font-cormorant text-sm text-g-textMuted">Zakład Kamieniarski</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="font-inter text-base text-g-text hover:text-g-navy transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Phone + hamburger */}
        <div className="flex items-center gap-3">
          <a href="tel:+48502480543" className="font-inter font-bold text-base lg:text-lg text-g-navy bg-g-bgAlt px-3 lg:px-4 py-2 rounded-lg flex items-center gap-1.5">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">502 480 543</span>
            <span className="sm:hidden">Zadzwoń</span>
          </a>
          <button
            className="lg:hidden text-g-navy p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Otwórz menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-g-card flex flex-col items-center justify-center">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-g-navy"
            aria-label="Zamknij menu"
          >
            <X className="w-8 h-8" />
          </button>
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-inter text-xl text-g-text hover:text-g-navy py-2 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
