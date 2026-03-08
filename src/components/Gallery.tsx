import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const placeholders = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  label: `Nagrobek granitowy – realizacja GRANBET ${i + 1}`,
}));

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section id="galeria" className="scroll-mt-20 bg-g-bgAlt py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-playfair text-3xl md:text-4xl text-g-text tracking-wide">
          Nasze realizacje
        </h2>
        <p className="font-inter text-lg text-g-textMuted mt-2">
          Każdy nagrobek to osobna historia — wykonana z szacunkiem
        </p>
        <div className="w-10 h-0.5 bg-g-navy mx-auto mt-4 mb-12" />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {placeholders.slice(0, 6).map((p, i) => (
            <div
              key={p.id}
              className="relative aspect-[4/3] bg-[#C8C0B4] rounded-lg overflow-hidden cursor-pointer group"
              role="img"
              aria-label={p.label}
              onClick={() => setLightboxIndex(i)}
              data-animate="fade-in"
              data-animate-delay={String(i * 100)}
            >
              <div className="absolute inset-0 bg-g-navyDark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 group-hover:scale-[1.03] transition-transform duration-300 flex items-center justify-center">
                <span className="text-sm text-[#6E6560]">Zdjęcie realizacji {p.id}</span>
              </div>
            </div>
          ))}

          {/* Phone CTA block */}
          <div className="col-span-full bg-g-navy rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-playfair text-lg text-g-light">Chcesz zamówić podobny nagrobek?</span>
            <a href="tel:+48502480543" className="text-g-accent font-bold text-2xl hover:text-white transition-colors font-inter">
              ☎ 502 480 543
            </a>
          </div>

          {placeholders.slice(6).map((p, i) => (
            <div
              key={p.id}
              className="relative aspect-[4/3] bg-[#C8C0B4] rounded-lg overflow-hidden cursor-pointer group"
              role="img"
              aria-label={p.label}
              onClick={() => setLightboxIndex(i + 6)}
              data-animate="fade-in"
            >
              <div className="absolute inset-0 bg-g-navyDark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 group-hover:scale-[1.03] transition-transform duration-300 flex items-center justify-center">
                <span className="text-sm text-[#6E6560]">Zdjęcie realizacji {p.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={placeholders.map(p => ({ src: '/placeholder.svg', alt: p.label }))}
        styles={{ container: { backgroundColor: '#1E2D3A' } }}
      />
    </section>
  );
}
