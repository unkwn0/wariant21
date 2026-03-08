import { Check } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

function Stat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, display } = useCountUp(end, suffix);
  return (
    <div className="text-center" data-animate="fade-in">
      <span ref={ref as React.RefObject<HTMLSpanElement>} className="font-playfair text-5xl md:text-7xl text-g-accent font-bold block">
        {display}
      </span>
      <span className="font-inter text-base text-g-lightMuted mt-2 block">{label}</span>
    </div>
  );
}

const bullets = [
  '35 lat doświadczenia',
  'Setki zrealizowanych nagrobków i pomników',
  'Indywidualne podejście do każdego zlecenia',
  'Terminowość i rzetelność',
  'Obsługa Hrubieszów, Kryłów i Dołhobyczów',
];

export default function WhyUs() {
  return (
    <section className="bg-g-navyDark py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-playfair text-3xl md:text-4xl text-g-light tracking-wide">
          Dlaczego rodziny nam ufają?
        </h2>
        <p className="font-inter text-lg text-g-accent mt-2">
          Ponad 35 lat budujemy zaufanie jedną realizacją na raz
        </p>
        <div className="w-10 h-0.5 bg-g-accent mx-auto mt-4 mb-12" />

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-8">
          <Stat end={35} suffix="+" label="Lat nieprzerwanej działalności" />
          <Stat end={500} suffix="+" label="Rodzin, którym pomogliśmy" />
          <Stat end={3} suffix="" label="Miejsca, gdzie znajdziesz nas osobiście" />
          <Stat end={100} suffix="%" label="Własna produkcja pod kontrolą jakości" />
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-x-12 gap-y-3 max-w-3xl mx-auto">
          {bullets.map(b => (
            <div key={b} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-g-accent flex-shrink-0" />
              <span className="font-inter text-[17px] text-g-accent text-left">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
