const services = [
  {
    title: "Tuinonderhoud",
    text: "Maaien, opruimen, onkruid verwijderen, borders verzorgen en uw tuin opnieuw ordelijk maken.",
  },
  {
    title: "Snoeien en hagen scheren",
    text: "Strakke hagen, vormsnoei en het terug in model brengen van struiken en beplanting.",
  },
  {
    title: "Kleine tuinwerken",
    text: "Schors aanbrengen, aanplantingen, borders opfrissen en kleinere verbeteringen rond de woning.",
  },
  {
    title: "Seizoenswerk",
    text: "Voorjaarsbeurt, zomeronderhoud, najaarsopkuis en voorbereiding van de tuin op het volgende seizoen.",
  },
];

const gallery = [
  {
    src: "/photos/werk-02.jpeg",
    alt: "Verzorgde border met schors en geschoren haag",
    label: "Haagonderhoud",
  },
  {
    src: "/photos/werk-04.jpeg",
    alt: "Aangelegde tuin met siergrind, schors en beplanting",
    label: "Borders opfrissen",
  },
  {
    src: "/photos/werk-06.jpeg",
    alt: "Nieuwe aanplanting met schors rond jonge planten",
    label: "Aanplanting",
  },
  {
    src: "/photos/werk-10.jpeg",
    alt: "Verzorgde zijtuin met schors en beplanting",
    label: "Klein tuinwerk",
  },
  {
    src: "/photos/werk-03.jpeg",
    alt: "Haag en oprit na snoeiwerk",
    label: "Snoeiwerk",
  },
  {
    src: "/photos/werk-11.jpeg",
    alt: "Onderhoudswerk met schors en jonge beplanting",
    label: "Afwerking",
  },
];

const steps = [
  "U stuurt enkele foto's of spreekt kort af wat er moet gebeuren.",
  "Er wordt praktisch bekeken wat nodig is en wanneer het past.",
  "Het werk wordt proper uitgevoerd, met aandacht voor afwerking en opruim.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Hoofdnavigatie">
        <a className="brand" href="#top" aria-label="De Rosse Tuinkabouter">
          <span className="brand-mark">DRT</span>
          <span>
            <strong>De Rosse Tuinkabouter</strong>
            <small>Tuinman in bijberoep</small>
          </span>
        </a>
        <nav>
          <a href="#diensten">Diensten</a>
          <a href="#werk">Realisaties</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-call" href="tel:+32470246463">
          0470 24 64 63
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Geetbets en omliggende gemeenten</p>
          <h1>Zelfstandige tuinman voor onderhoud en kleine tuinwerken.</h1>
          <p className="hero-text">
            De Rosse Tuinkabouter helpt particuliere tuinen opnieuw strak,
            gezond en verzorgd te krijgen. Ideaal voor hagen, snoeiwerk,
            borders, opkuis en terugkerend tuinonderhoud.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="tel:+32470246463">
              Bel voor een afspraak
            </a>
            <a className="button ghost" href="#werk">
              Bekijk resultaten
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Focus</dt>
              <dd>Tuinonderhoud</dd>
            </div>
            <div>
              <dt>Regio</dt>
              <dd>Geetbets</dd>
            </div>
            <div>
              <dt>Onderneming</dt>
              <dd>BE1010.974.679</dd>
            </div>
          </dl>
        </div>
        <div className="hero-media" aria-label="Tuinonderhoud realisatie">
          <img src="/photos/header-tuin.jpg" alt="Aangelegde tuin met wandelpad, beplanting en blauwe lucht" />
          <div className="media-note">
            <span>Voor-en-naresultaten</span>
            <strong>te volgen via Facebook en Instagram</strong>
          </div>
        </div>
      </section>

      <section className="intro-band" aria-label="Korte introductie">
        <div>
          <p className="section-kicker">Praktisch, lokaal, verzorgd</p>
          <h2>Voor wie een nette tuin wil zonder groot tuinproject.</h2>
        </div>
        <p>
          Als zelfstandige tuinman in bijberoep ligt de nadruk op duidelijke
          afspraken en haalbare werken: onderhoudsbeurten, hagen, borders,
          kleine aanpassingen en seizoensopkuis.
        </p>
      </section>

      <section className="section" id="diensten">
        <div className="section-heading">
          <p className="section-kicker">Diensten</p>
          <h2>Wat De Rosse Tuinkabouter voor uw tuin doet</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="werk">
        <div className="section-heading light">
          <p className="section-kicker">Realisaties</p>
          <h2>Werk dat zichtbaar verschil maakt</h2>
          <p>
            De aanpak is eenvoudig: snoeien, verzorgen, opfrissen en netjes
            achterlaten. De foto&apos;s geven de stijl van het werk weer.
          </p>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure key={item.src}>
              <img src={item.src} alt={item.alt} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="image-panel">
          <img src="/photos/werk-01.jpeg" alt="Hoge haag en tuin tijdens onderhoudswerk" />
        </div>
        <div className="steps-panel">
          <p className="section-kicker">Werkwijze</p>
          <h2>Snel schakelen, netjes afwerken.</h2>
          <ol>
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p>
            Beschikbaar voor kleinere werken op afspraak. Voor grotere of
            dringende opdrachten wordt eerst bekeken wat realistisch ingepland
            kan worden.
          </p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="section-kicker">Contact</p>
          <h2>Vraag vrijblijvend naar beschikbaarheid.</h2>
          <p>
            Bel rechtstreeks of stuur via sociale media enkele foto&apos;s van
            de tuin. Zo is meteen duidelijk wat er nodig is.
          </p>
          <div className="contact-actions">
            <a className="button primary" href="tel:+32470246463">
              0470 24 64 63
            </a>
            <a className="button ghost dark" href="https://wa.me/32470246463">
              WhatsApp sturen
            </a>
          </div>
        </div>
        <address className="contact-card">
          <strong>De Rosse Tuinkabouter</strong>
          <span>IJzerwegstraat 1</span>
          <span>3450 Geetbets</span>
          <span>Ondernemingsnummer BE1010.974.679</span>
          <span>Actief in Geetbets en vermoedelijk omliggende gemeenten</span>
        </address>
      </section>

      <footer>
        <span>De Rosse Tuinkabouter</span>
        <span>Tuinonderhoud en kleine tuinwerken in regio Geetbets</span>
      </footer>
    </main>
  );
}
