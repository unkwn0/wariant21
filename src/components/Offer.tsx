import { Gem, Landmark, Camera, ArrowUpFromLine, Flame, Wrench } from 'lucide-react';

const services = [
  { Icon: Gem, title: 'Nagrobki granitowe', desc: 'Pomagamy godnie upamiętnić bliskich — tradycyjne i nowoczesne nagrobki z naturalnego granitu.' },
  { Icon: Landmark, title: 'Grobowce rodzinne', desc: 'Trwałe grobowce rodzinne i kapliczki, które służą kolejnym pokoleniom.' },
  { Icon: Camera, title: 'Fotoceramika', desc: 'Zdjęcia w krysztale i porcelanie — wizerunek bliskiej osoby zachowany na lata.' },
  { Icon: ArrowUpFromLine, title: 'Schody, parapety, blaty', desc: 'Elementy granitowe do wnętrz i ogrodów — estetyczne i trwałe.' },
  { Icon: Flame, title: 'Kominki i tarasy', desc: 'Granitowe obudowy kominków, tarasy i chodniki — elegancja naturalnego kamienia.' },
  { Icon: Wrench, title: 'Renowacje', desc: 'Przywracamy nagrobkom dawny wygląd — konserwacja i czyszczenie kamienia.' },
];

export default function Offer() {
  return (
    <section id="oferta" className="scroll-mt-20 bg-g-bgAlt py-24 px-4" aria-label="Oferta usług">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-playfair text-3xl md:text-4xl text-g-text tracking-wide">
          Jak możemy pomóc?
        </h2>
        <p className="font-inter text-lg text-g-textMuted mt-2">
          Wykonujemy z kamienia wszystko, czego potrzebujesz
        </p>
        <div className="w-10 h-0.5 bg-g-navy mx-auto mt-4 mb-12" />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 text-left">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-g-card border-l-4 border-g-navy p-6 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-l-g-accent transition-all duration-[250ms]"
              data-animate="fade-in"
              data-animate-delay={String(i * 100)}
            >
              <s.Icon className="w-8 h-8 text-g-navy mb-3" />
              <h3 className="font-playfair text-lg text-g-text font-bold mb-2">{s.title}</h3>
              <p className="font-inter text-base text-g-textMuted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
