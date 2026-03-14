import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Offer from './components/Offer';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Gallery from './components/Gallery';
import FullGallery from './components/FullGallery';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useFadeIn } from './hooks/useFadeIn';
import { useEffect } from 'react';

const localBusinessLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GRANBET Zakład Kamieniarski",
  "description": "Zakład kamieniarski oferujący nagrobki granitowe, grobowce, fotoceramikę, schody i parapety. Tradycja od 1988 roku.",
  "telephone": "+48502480543",
  "email": "granbet@vp.pl",
  "url": "https://granbet.pl",
  "image": "https://granbet.pl/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ul. Hrubieszowska 33",
    "addressLocality": "Kryłów",
    "addressRegion": "lubelskie",
    "postalCode": "22-540",
    "addressCountry": "PL"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 50.6825, "longitude": 24.0083 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "07:00", "closes": "15:00" }
  ],
  "foundingDate": "1988-01-01",
  "priceRange": "$$",
  "hasMap": "https://maps.google.com/?q=Krylow+ul.+Hrubieszowska+33+gmina+Mircze",
  "review": [
    { "@type": "Review", "author": { "@type": "Person", "name": "Rodzina K." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Jesteśmy bardzo wdzięczni za pomoc i profesjonalne podejście. Nagrobek wykonany dokładnie według naszych życzeń." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Rodzina W." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Obsługa z sercem — czuliśmy się zaopiekowani na każdym etapie. Nagrobek jest piękny i trwały." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Rodzina N." }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Terminowość, jakość i ludzkie podejście na najwyższym poziomie." }
  ]
};

const faqLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Jak zamówić nagrobek w GRANBET?", "acceptedAnswer": { "@type": "Answer", "text": "Wystarczy zadzwonić pod numer 502 480 543 lub odwiedzić nas w Kryłowie albo Hrubieszowie. Razem omówimy projekt, materiał i termin realizacji." } },
    { "@type": "Question", "name": "Ile kosztuje nagrobek granitowy?", "acceptedAnswer": { "@type": "Answer", "text": "Cena zależy od wybranego granitu, rozmiaru i zdobień. Zapraszamy na bezpłatną konsultację — dopasujemy projekt do budżetu." } },
    { "@type": "Question", "name": "Jak długo czeka się na wykonanie nagrobka?", "acceptedAnswer": { "@type": "Answer", "text": "Standardowy czas realizacji wynosi 4–8 tygodni od zatwierdzenia projektu. Prostsze modele mogą być gotowe szybciej." } },
    { "@type": "Question", "name": "Czy GRANBET wykonuje renowacje starych nagrobków?", "acceptedAnswer": { "@type": "Answer", "text": "Tak — oferujemy czyszczenie, odświeżenie napisów, wymianę elementów i konserwację kamienia." } },
    { "@type": "Question", "name": "Gdzie znajdę zakład kamieniarski w Hrubieszowie?", "acceptedAnswer": { "@type": "Answer", "text": "Biuro handlowe GRANBET przy ul. Nowej 10 w Hrubieszowie. Zakład produkcyjny w Kryłowie przy trasie Hrubieszów–Dołhobyczów." } },
    { "@type": "Question", "name": "Czy GRANBET obsługuje klientów z całego powiatu hrubieszowskiego?", "acceptedAnswer": { "@type": "Answer", "text": "Tak — obsługujemy Hrubieszów, Kryłów, Dołhobyczów i cały powiat hrubieszowski. Dowozimy i montujemy nagrobki na miejscu." } }
  ]
};

const App = () => {
  useFadeIn();

  // Re-run fade-in after hydration
  useEffect(() => {
    const timer = setTimeout(() => {
      const event = new Event('scroll');
      window.dispatchEvent(event);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>GRANBET Zakład Kamieniarski | Nagrobki Hrubieszów, Kryłów, Dołhobyczów</title>
        <meta name="description" content="Zakład Kamieniarski GRANBET — nagrobki granitowe, schody, parapety, grobowce i fotoceramika. Własna produkcja od 1988 roku. Kryłów ☎ 502 480 543 | Hrubieszów ☎ 697 994 924" />
        <meta property="og:title" content="GRANBET Zakład Kamieniarski | Nagrobki i Kamieniarstwo" />
        <meta property="og:description" content="Nagrobki, grobowce, fotoceramika, schody granitowe. Tradycja od 1988 roku. Hrubieszów, Kryłów, Dołhobyczów." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://granbet.pl" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:image" content="https://granbet.pl/og-image.jpg" />
        <link rel="canonical" href="https://granbet.pl" />
        <script type="application/ld+json">{JSON.stringify(localBusinessLD)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLD)}</script>
      </Helmet>

      <Header />
      <Hero />
      <About />
      <Offer />
      <WhyUs />
      <Testimonials />
      <Process />
      <Gallery />
      <FullGallery />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </HelmetProvider>
  );
};

export default App;
