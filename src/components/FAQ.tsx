import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Jak zamówić nagrobek w GRANBET?', a: 'Wystarczy zadzwonić pod numer 502 480 543 lub odwiedzić nas w Kryłowie albo Hrubieszowie. Razem omówimy projekt, materiał i termin realizacji — bez żadnych zobowiązań.' },
  { q: 'Ile kosztuje nagrobek granitowy?', a: 'Cena zależy od wybranego granitu, rozmiaru i zdobień. Zapraszamy na bezpłatną konsultację — dopasujemy projekt do Twoich potrzeb i budżetu.' },
  { q: 'Jak długo czeka się na wykonanie nagrobka?', a: 'Standardowy czas realizacji wynosi 4–8 tygodni od zatwierdzenia projektu. W przypadku prostszych modeli możemy działać szybciej.' },
  { q: 'Czy GRANBET wykonuje renowacje starych nagrobków?', a: 'Tak — oferujemy pełną renowację: czyszczenie kamienia, odświeżenie napisów, wymianę uszkodzonych elementów oraz konserwację. Skontaktuj się z nami, żeby omówić zakres prac.' },
  { q: 'Gdzie znajdę zakład kamieniarski w Hrubieszowie?', a: 'Biuro handlowe GRANBET mieści się przy ul. Nowej 10 w Hrubieszowie. Zakład produkcyjny działa w Kryłowie przy trasie Hrubieszów–Dołhobyczów, około 20 km od Hrubieszowa.' },
  { q: 'Czy GRANBET obsługuje klientów z całego powiatu hrubieszowskiego?', a: 'Tak — obsługujemy klientów z Hrubieszowa, Kryłowa, Dołhobyczowa i całego powiatu hrubieszowskiego. Dowozimy i montujemy nagrobki bezpośrednio na cmentarzu.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-g-bg py-24 px-4" aria-label="Najczęściej zadawane pytania">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-playfair text-3xl md:text-4xl text-g-text tracking-wide">
          Najczęściej zadawane pytania
        </h2>
        <p className="font-inter text-lg text-g-textMuted mt-2">
          Odpowiedzi na pytania, które słyszymy najczęściej
        </p>
        <div className="w-10 h-0.5 bg-g-navy mx-auto mt-4 mb-12" />
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {faqs.map((f, i) => (
          <div key={i} className="bg-g-card border border-g-bgAlt rounded-lg overflow-hidden" data-animate="fade-in" data-animate-delay={String(i * 80)}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left font-playfair text-lg text-g-text hover:bg-g-bgAlt transition-colors"
              aria-expanded={open === i}
            >
              {f.q}
              <ChevronDown className={`w-5 h-5 text-g-navy flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-5 pb-5">
                <p className="font-inter text-base text-g-textMuted leading-relaxed">{f.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
