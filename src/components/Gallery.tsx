import { useState, useMemo } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { ZoomIn } from 'lucide-react';
import { galeriaData } from '@/data/galeria';

const PREVIEW_IDS = ['g001', 'g010', 'g019', 'g030', 'g045', 'g060'];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const previewItems = useMemo(
    () => PREVIEW_IDS.map(id => galeriaData.find(g => g.id === id)!).filter(Boolean),
    []
  );

  const openLightbox = (previewIdx: number) => {
    const item = previewItems[previewIdx];
    const globalIndex = galeriaData.findIndex(g => g.id === item.id);
    setLightboxIndex(globalIndex);
  };

  const scrollToFull = () => {
    document.getElementById('galeria-pelna')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="galeria" className="scroll-mt-20 bg-g-bgAlt py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-playfair text-3xl md:text-4xl text-g-text tracking-wide">
          Nasze realizacje
        </h2>
        <p className="font-inter text-lg text-g-textMuted mt-2">
          Każdy nagrobek to osobna historia — wykonana z szacunkiem
        </p>
        <div className="w-10 h-0.5 bg-g-navy mx-auto mt-4 mb-8" />

        {/* Preview grid – 6 items */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {previewItems.map((item, i) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] bg-[#C8C0B4] rounded-lg overflow-hidden cursor-pointer group transition-opacity duration-300"
              onClick={() => openLightbox(i)}
              data-animate="fade-in"
              data-animate-delay={String(i * 100)}
            >
              <img
                src={item.full}
                alt={item.opis}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-g-navyDark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-g-light" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g-navyDark/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm text-g-light font-inter">{item.opis}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={scrollToFull}
            className="bg-g-navy text-g-light px-10 min-h-[52px] rounded-lg font-bold text-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 font-inter"
          >
            Zobacz wszystkie realizacje →
          </button>
        </div>

        {/* Phone CTA */}
        <div className="mt-6 bg-g-navy rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-playfair text-lg text-g-light">Chcesz zamówić podobny nagrobek?</span>
          <a href="tel:+48502480543" className="text-g-accent font-bold text-2xl hover:text-white transition-colors font-inter">
            ☎ 502 480 543
          </a>
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={galeriaData.map(g => ({ src: g.full, alt: g.opis }))}
        styles={{ container: { backgroundColor: '#1E2D3A' } }}
      />
    </section>
  );
}
