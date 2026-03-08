import { MessageCircle, PenTool, Hammer, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  { Icon: MessageCircle, num: '01', title: 'Konsultacja', desc: 'Zadzwoń, napisz lub odwiedź nas osobiście. Wysłuchamy i doradzimy bez presji.' },
  { Icon: PenTool, num: '02', title: 'Projekt', desc: 'Wspólnie zaprojektujemy nagrobek dopasowany do Twoich oczekiwań i budżetu.' },
  { Icon: Hammer, num: '03', title: 'Realizacja', desc: 'Wykonujemy nagrobek we własnym zakładzie w Kryłowie — pełna kontrola jakości na każdym etapie.' },
  { Icon: CheckCircle, num: '04', title: 'Montaż', desc: 'Dowozimy i montujemy nagrobek na cmentarzu — pełna obsługa w cenie.' },
];

export default function Process() {
  return (
    <section id="proces" className="scroll-mt-20 bg-g-bg py-24 px-4">
      <div className="h-px bg-g-separator" />
      <div className="max-w-6xl mx-auto pt-12 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl text-g-text tracking-wide">
          Jak wygląda nasza współpraca?
        </h2>
        <p className="font-inter text-lg text-g-textMuted mt-2">
          Krok po kroku — od pierwszej rozmowy do gotowego nagrobka
        </p>
        <div className="w-10 h-0.5 bg-g-navy mx-auto mt-4 mb-12" />

        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-2">
          {steps.map((s, i) => (
            <div key={s.num} className="flex flex-col lg:flex-row items-center flex-1 gap-2">
              <div
                className="relative bg-g-card border-2 border-g-bgAlt rounded-xl p-7 flex-1 w-full hover:border-g-navy hover:bg-g-bgAlt transition-all duration-200 text-left"
                data-animate="fade-in"
                data-animate-delay={String(i * 100)}
              >
                <span className="font-playfair text-5xl text-g-navy/15 absolute top-2 right-4">{s.num}</span>
                <s.Icon className="w-8 h-8 text-g-navy mb-3" />
                <h3 className="font-playfair text-xl text-g-text font-bold mb-2">{s.title}</h3>
                <p className="font-inter text-base text-g-textMuted leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block w-6 h-6 text-g-separator flex-shrink-0 mx-2" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="tel:+48502480543"
            className="bg-g-navy text-g-light px-10 min-h-[52px] rounded-lg inline-flex items-center justify-center font-bold font-inter text-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          >
            Zadzwoń i umów konsultację
          </a>
        </div>
      </div>
    </section>
  );
}
