import { useState, FormEvent } from 'react';
import { MapPin, Phone, Clock, Mail, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    await fetch('https://formspree.io/f/PLACEHOLDER_ID', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    setSent(true);
  };

  return (
    <section id="kontakt" className="scroll-mt-20 bg-g-bg py-24 px-4" aria-label="Kontakt">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-playfair text-3xl md:text-4xl text-g-text tracking-wide">
          Skontaktuj się z nami
        </h2>
        <p className="font-inter text-lg text-g-textMuted mt-2">
          Chętnie odpowiemy na każde pytanie — bez zobowiązań
        </p>
        <div className="w-10 h-0.5 bg-g-navy mx-auto mt-4 mb-12" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left — info */}
        <div className="space-y-8" data-animate="fade-in">
          <div>
            <h3 className="font-cormorant text-xl text-g-navy font-semibold mb-3">Zakład produkcyjny</h3>
            <div className="space-y-2 font-inter text-base text-g-text">
              <p className="flex items-start gap-2"><MapPin className="w-5 h-5 text-g-navy flex-shrink-0 mt-0.5" />ul. Hrubieszowska 33, Kryłów (gm. Mircze)</p>
              <p className="flex items-start gap-2"><Phone className="w-5 h-5 text-g-navy flex-shrink-0 mt-0.5" /><a href="tel:+48502480543" className="font-bold text-g-navy">502 480 543</a></p>
              <p className="flex items-start gap-2"><Clock className="w-5 h-5 text-g-navy flex-shrink-0 mt-0.5" />Pon–Pt 7:00–17:00, Sob 7:00–15:00</p>
            </div>
          </div>

          <div>
            <h3 className="font-cormorant text-xl text-g-navy font-semibold mb-3">Biuro handlowe — Hrubieszów</h3>
            <div className="space-y-2 font-inter text-base text-g-text">
              <p className="flex items-start gap-2"><MapPin className="w-5 h-5 text-g-navy flex-shrink-0 mt-0.5" />ul. Nowa 10, Hrubieszów</p>
              <p className="flex items-start gap-2"><Phone className="w-5 h-5 text-g-navy flex-shrink-0 mt-0.5" /><a href="tel:+48697994924" className="font-bold text-g-navy">697 994 924</a></p>
            </div>
          </div>

          <div>
            <h3 className="font-cormorant text-xl text-g-navy font-semibold mb-3">Punkt obsługi — Dołhobyczów</h3>
            <div className="space-y-2 font-inter text-base text-g-text">
              <p className="flex items-start gap-2"><MapPin className="w-5 h-5 text-g-navy flex-shrink-0 mt-0.5" />ul. Spółdzielcza, Dołhobyczów</p>
            </div>
          </div>

          <p className="flex items-start gap-2 font-inter text-base text-g-text">
            <Mail className="w-5 h-5 text-g-navy flex-shrink-0 mt-0.5" />
            <a href="mailto:granbet@vp.pl">granbet@vp.pl</a>
          </p>

          {/* Static map */}
          <div className="bg-g-bgAlt rounded-xl p-6 border border-g-separator text-center">
            <MapPin className="w-12 h-12 text-g-navy mx-auto mb-2" />
            <p className="font-playfair text-lg text-g-navy">Zakład Kamieniarski GRANBET</p>
            <p className="font-inter text-sm text-g-textMuted">ul. Hrubieszowska 33, Kryłów</p>
            <a
              href="https://maps.google.com/?q=Krylow+ul.+Hrubieszowska+33+gmina+Mircze"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-g-navy text-g-light px-5 py-3 rounded-lg text-sm font-semibold font-inter hover:bg-g-navyDark transition-colors"
            >
              Otwórz w Google Maps →
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div data-animate="fade-in" data-animate-delay="200">
          {sent ? (
            <div className="bg-g-bgAlt border border-g-navy rounded-xl p-6 text-center" role="alert" aria-live="polite">
              <CheckCircle className="w-10 h-10 text-g-navy mx-auto mb-3" />
              <p className="font-playfair text-lg text-g-text">Dziękujemy! Skontaktujemy się wkrótce.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-g-card rounded-xl p-8 shadow-sm border border-g-bgAlt">
              <h3 className="font-playfair text-xl text-g-text mb-6">Napisz do nas</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-g-textMuted mb-1 block font-inter">Imię i nazwisko *</label>
                  <input name="name" type="text" required aria-required="true" placeholder="np. Jan Kowalski"
                    className="w-full bg-white text-g-text border border-g-separator rounded-lg p-3 text-[17px] font-inter focus:border-g-navy focus:outline-none focus:ring-2 focus:ring-g-navy/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-g-textMuted mb-1 block font-inter">Adres e-mail</label>
                  <input name="_replyto" type="email" placeholder="np. jan@email.pl"
                    className="w-full bg-white text-g-text border border-g-separator rounded-lg p-3 text-[17px] font-inter focus:border-g-navy focus:outline-none focus:ring-2 focus:ring-g-navy/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-g-textMuted mb-1 block font-inter">Numer telefonu</label>
                  <input name="phone" type="tel" inputMode="tel" placeholder="np. 602 123 456"
                    className="w-full bg-white text-g-text border border-g-separator rounded-lg p-3 text-[17px] font-inter focus:border-g-navy focus:outline-none focus:ring-2 focus:ring-g-navy/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-g-textMuted mb-1 block font-inter">Wiadomość *</label>
                  <textarea name="message" rows={5} required aria-required="true" placeholder="Opisz czego potrzebujesz — odpiszemy lub zadzwonimy…"
                    className="w-full bg-white text-g-text border border-g-separator rounded-lg p-3 text-[17px] font-inter focus:border-g-navy focus:outline-none focus:ring-2 focus:ring-g-navy/20 transition-colors resize-none"
                  />
                </div>
                <input name="_gotcha" type="text" className="hidden" tabIndex={-1} />
              </div>

              <button type="submit"
                className="w-full bg-g-navy text-g-light font-bold py-4 rounded-lg text-[17px] font-inter min-h-[52px] mt-6 hover:bg-g-navyDark hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                Wyślij wiadomość
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
