export default function About() {
  return (
    <section id="o-nas" className="scroll-mt-20 bg-g-bg py-24 px-4" aria-label="O firmie GRANBET">
      <div className="h-px bg-g-separator" />
      <div className="max-w-6xl mx-auto pt-12">
        <h2 className="font-playfair text-3xl md:text-4xl text-g-text text-center tracking-wide">
          O firmie GRANBET
        </h2>
        <div className="w-10 h-0.5 bg-g-navy mx-auto mt-4 mb-12" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-animate="fade-in">
            <p className="font-inter text-lg text-g-text leading-relaxed mb-4">
              Rozumiemy, że wybór nagrobka to jedna z najtrudniejszych decyzji. Dlatego od ponad 35 lat towarzyszymy rodzinom w Hrubieszowie, Kryłowie i okolicach — z szacunkiem, cierpliwością i pełnym zaangażowaniem.
            </p>
            <p className="font-inter text-lg text-g-text leading-relaxed">
              Nasz zakład produkcyjny mieści się w Kryłowie przy trasie Hrubieszów–Dołhobyczów. Każdy nagrobek wytwarzamy własnoręcznie — od projektu po montaż na cmentarzu. Biura handlowe prowadzimy w Hrubieszowie i Dołhobyczowie.
            </p>
          </div>
          <div
            className="aspect-[4/3] bg-stone-300 rounded-xl overflow-hidden flex items-center justify-center"
            role="img"
            aria-label="Zakład kamieniarski GRANBET w Kryłowie – widok warsztatu"
            data-animate="fade-in"
            data-animate-delay="200"
          >
            <span className="text-sm text-stone-500">Zdjęcie zakładu</span>
          </div>
        </div>
      </div>
    </section>
  );
}
