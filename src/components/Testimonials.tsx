import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Jesteśmy bardzo wdzięczni za pomoc i profesjonalne podejście. Nagrobek wykonany dokładnie według naszych życzeń — na czas i w dobrej cenie.',
    author: 'Rodzina K., Hrubieszów',
  },
  {
    text: 'Obsługa z sercem — czuliśmy się zaopiekowani na każdym etapie. Cierpliwie doradzono nam wybór granitu i napisu. Nagrobek jest piękny i trwały.',
    author: 'Rodzina W., Kryłów',
  },
  {
    text: 'Solidny zakład kamieniarski. Terminowość, jakość i ludzkie podejście — wszystko na najwyższym poziomie. Polecamy.',
    author: 'Rodzina N., Dołhobyczów',
  },
];

export default function Testimonials() {
  return (
    <section id="opinie" className="bg-g-navy py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-playfair text-3xl md:text-4xl text-g-light tracking-wide">
          Co mówią nasi klienci
        </h2>
        <p className="font-inter text-lg text-g-lightMuted mt-2">
          Opinie rodzin, którym towarzyszyliśmy
        </p>
        <div className="w-10 h-0.5 bg-g-accent mx-auto mt-4 mb-12" />

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-g-navyDark border-l-4 border-g-accent rounded-xl p-7 text-left hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(168,196,212,0.15)] transition-all duration-[250ms]"
              data-animate="fade-in"
              data-animate-delay={String(i * 100)}
            >
              <div className="flex gap-1 mb-3" aria-label="Ocena 5 na 5 gwiazdek">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-g-accent fill-g-accent" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="font-inter text-[17px] text-g-light italic leading-relaxed mb-4">
                „{t.text}"
              </blockquote>
              <cite className="font-cormorant text-base text-g-accent font-semibold not-italic">
                — {t.author}
              </cite>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://g.page/r/PLACEHOLDER/review"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-g-accent text-g-accent px-8 min-h-[48px] rounded-lg inline-flex items-center justify-center font-inter hover:bg-g-accent hover:text-g-navyDark transition-all duration-200"
          >
            Wystaw opinię w Google →
          </a>
        </div>
      </div>
    </section>
  );
}
