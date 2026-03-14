import { useState, useMemo } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { LayoutGrid, List, ZoomIn } from 'lucide-react';
import { galeriaData } from '@/data/galeria';

type ViewMode = 'grid' | 'list';
const PAGE_SIZE = 24;

export default function FullGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(galeriaData.map(g => g.kategoria)));
    return ['Wszystkie', ...cats];
  }, []);

  const filtered = useMemo(
    () => activeCategory === 'Wszystkie' ? galeriaData : galeriaData.filter(g => g.kategoria === activeCategory),
    [activeCategory]
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const openLightbox = (filteredIndex: number) => {
    const item = filtered[filteredIndex];
    const globalIndex = galeriaData.findIndex(g => g.id === item.id);
    setLightboxIndex(globalIndex);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section id="galeria-pelna" className="scroll-mt-20 bg-g-bg py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-playfair text-3xl md:text-4xl text-g-text tracking-wide">
          Wszystkie realizacje
        </h2>
        <p className="font-inter text-lg text-g-textMuted mt-2">
          Pełna kolekcja naszych prac
        </p>
        <div className="w-10 h-0.5 bg-g-navy mx-auto mt-4 mb-8" />

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-inter font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-g-navy text-g-light'
                    : 'bg-g-card text-g-textMuted border border-g-separator hover:border-g-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex gap-1 bg-g-card rounded-lg p-1 border border-g-separator">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors duration-200 ${
                viewMode === 'grid' ? 'bg-g-navy text-g-light' : 'text-g-textMuted hover:text-g-navy'
              }`}
              aria-label="Widok siatki"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors duration-200 ${
                viewMode === 'list' ? 'bg-g-navy text-g-light' : 'text-g-textMuted hover:text-g-navy'
              }`}
              aria-label="Widok listy"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grid view */}
        {viewMode === 'grid' && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {visible.map((item, i) => (
              <div
                key={item.id}
                className="relative aspect-[4/3] bg-[#C8C0B4] rounded-lg overflow-hidden cursor-pointer group transition-opacity duration-300"
                onClick={() => openLightbox(i)}
                data-animate="fade-in"
                data-animate-delay={String((i % 6) * 100)}
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
        )}

        {/* List view */}
        {viewMode === 'list' && (
          <div className="flex flex-col gap-3">
            {visible.map((item, i) => (
              <div
                key={item.id}
                className="flex gap-4 items-center bg-g-card rounded-lg p-3 cursor-pointer hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                onClick={() => openLightbox(i)}
                data-animate="fade-in"
                data-animate-delay={String(i * 50)}
              >
                <div className="w-32 h-24 flex-shrink-0 bg-[#C8C0B4] rounded overflow-hidden">
                  <img
                    src={item.full}
                    alt={item.opis}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <div className="text-left">
                  <p className="font-inter text-base text-g-text">{item.opis}</p>
                  <span className="font-inter text-sm text-g-textMuted">{item.kategoria}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + PAGE_SIZE)}
              className="bg-g-navy text-g-light px-10 min-h-[52px] rounded-lg font-bold text-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 font-inter"
            >
              Załaduj więcej
            </button>
          </div>
        )}
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
