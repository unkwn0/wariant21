export default function CTA() {
  return (
    <section className="bg-g-navy py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto" data-animate="fade-in">
        <p className="font-cormorant text-base text-g-accent uppercase tracking-[3px] mb-4">
          Jesteśmy tu dla Ciebie
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl text-g-light tracking-wide">
          Pomożemy Ci godnie upamiętnić bliskich
        </h2>
        <p className="font-inter text-lg text-g-lightMuted mt-4">
          Skontaktuj się z nami — telefonicznie, mailowo lub odwiedź nas osobiście w Kryłowie lub Hrubieszowie.
        </p>

        <div className="mt-6">
          <a href="tel:+48502480543" className="text-g-accent font-bold text-3xl md:text-4xl hover:text-white transition-colors font-inter block">
            ☎ 502 480 543
          </a>
          <a href="tel:+48697994924" className="text-g-lightMuted text-lg hover:text-white transition-colors font-inter block mt-2">
            Biuro Hrubieszów: ☎ 697 994 924
          </a>
        </div>

        <div className="mt-8">
          <a
            href="#kontakt"
            className="bg-transparent border-2 border-g-accent text-g-accent px-8 min-h-[52px] rounded-lg inline-flex items-center justify-center font-inter hover:bg-g-accent hover:text-g-navyDark transition-all duration-200"
          >
            Napisz do nas
          </a>
        </div>
      </div>
    </section>
  );
}
