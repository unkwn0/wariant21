const footerLinks = [
  { label: 'Oferta', href: '#oferta' },
  { label: 'Realizacje', href: '#galeria' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Proces', href: '#proces' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Footer() {
  return (
    <footer className="bg-g-navy border-t-[3px] border-g-separator">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 py-12 px-6">
        <div>
          <span className="font-playfair font-bold text-xl text-g-light block">GRANBET</span>
          <span className="font-cormorant text-g-accent block">Zakład Kamieniarski</span>
          <p className="font-inter text-sm text-g-lightMuted mt-2">
            Tradycja od 1988 roku. Hrubieszów · Kryłów · Dołhobyczów
          </p>
        </div>

        <div>
          <h4 className="font-cormorant text-g-accent font-semibold mb-3">Menu</h4>
          <nav className="flex flex-col gap-2">
            {footerLinks.map(l => (
              <a key={l.href} href={l.href} className="font-inter text-base text-g-lightMuted hover:text-g-light transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-cormorant text-g-accent font-semibold mb-3">Kontakt</h4>
          <div className="space-y-1 font-inter text-g-lightMuted">
            <a href="tel:+48502480543" className="block hover:text-g-light transition-colors">☎ 502 480 543</a>
            <a href="tel:+48697994924" className="block hover:text-g-light transition-colors">☎ 697 994 924</a>
            <a href="mailto:granbet@vp.pl" className="block hover:text-g-light transition-colors">granbet@vp.pl</a>
            <p className="text-sm mt-2">Pon–Pt 7:00–17:00, Sob 7:00–15:00</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-6 pb-6 text-center">
        <p className="font-inter text-sm text-g-lightMuted/60">
          © {new Date().getFullYear()} GRANBET Zakład Kamieniarski. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
