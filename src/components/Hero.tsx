import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90dvh] bg-g-navyDark flex items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-[rgba(30,45,58,0.55)]" />
      <div className="relative z-10 max-w-3xl mx-auto" data-animate="fade-in">
        <p className="font-cormorant text-base text-g-accent uppercase tracking-[3px] mb-4">
          Tradycja od 1988 roku
        </p>
        <h1 className="font-playfair text-5xl md:text-7xl text-g-light tracking-wide mb-2">
          GRANBET
        </h1>
        <h2 className="font-playfair text-2xl md:text-3xl text-g-bgAlt tracking-wide">
          Zakład Kamieniarski
        </h2>
        <div className="w-20 h-0.5 bg-g-accent mx-auto my-6" />
        <p className="font-inter text-lg text-g-lightMuted mb-8">
          Hrubieszów · Kryłów · Dołhobyczów
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#galeria"
            className="bg-g-navy text-g-light border-2 border-g-navy px-8 min-h-[52px] rounded-lg font-bold font-inter inline-flex items-center justify-center hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            data-animate="fade-in"
            data-animate-delay="300"
          >
            Nasze realizacje
          </a>
          <a
            href="#kontakt"
            className="bg-transparent text-g-light border-2 border-g-accent px-8 min-h-[52px] rounded-lg font-inter inline-flex items-center justify-center hover:bg-g-accent hover:text-g-navyDark transition-all duration-200"
            data-animate="fade-in"
            data-animate-delay="600"
          >
            Porozmawiajmy
          </a>
        </div>
      </div>
      <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 text-g-accent animate-bounce" />
    </section>
  );
}
