export type RouteKey =
  | "home"
  | "team"
  | "salon"
  | "featuredService"
  | "about"
  | "contact"
  | "booking"
  | "imprint"
  | "privacy";

export type EditorialTitle = { lead: string; accent: string };
export type ApprovalStatus = "approved" | "pending" | "replace-before-live";

export type ImageAsset = {
  src: string;
  alt: string;
  caption: string;
  source: string;
  license: string;
  approvalStatus: ApprovalStatus;
};

export type BookingStep = { number: string; title: string; copy: string };
export type Service = { number: string; slug: string; title: string; copy: string; enabled: boolean };

export type SalonConfig = {
  identity: {
    name: string;
    descriptor: string;
    owner: string;
    street: string;
    postalCode: string;
    city: string;
    country: string;
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    emailHref: string;
    year: string;
    locale: string;
  };
  preview: { enabled: boolean; label: string; note: string; noindex: boolean };
  theme: {
    canvas: string;
    surface: string;
    surfaceMuted: string;
    ink: string;
    inkSoft: string;
    accent: string;
    accentDark: string;
    accentSoft: string;
    accentLight: string;
    accentHover: string;
  };
  logo: { text: string; mark: string; subtitle: string; src: string; alt: string };
  navigation: Array<{ label: string; route: RouteKey }>;
  booking: { mode: "internal" | "external" | "phone" | "disabled"; label: string; url: string };
  links: {
    websiteUrl: string;
    directionsUrl: string;
    mapEmbedUrl: string;
    social: Array<{ label: string; href: string }>;
  };
  map: {
    mode: "consent" | "link-only" | "disabled";
    providerName: string;
    title: string;
    consentLabel: string;
    consentCopy: string;
    routeLabel: string;
  };
  hours: Array<{ label: string; time: string; status: "open" | "closed" | "unset" }>;
  hoursNote: string;
  services: Service[];
  featuredService: {
    enabled: boolean;
    slug: string;
    navLabel: string;
    eyebrow: string;
    title: EditorialTitle;
    intro: string;
    description: string;
    highlights: string[];
    image: ImageAsset;
  };
  team: Array<{ name: string; role: string; bio: string; image: ImageAsset }>;
  media: { hero: ImageAsset; salon: ImageAsset; texture: ImageAsset; team: ImageAsset; about: ImageAsset };
  history: { heading: string; intro: string; paragraphs: string[] };
  claims: {
    hero: EditorialTitle;
    intro: EditorialTitle;
    booking: EditorialTitle;
    visit: EditorialTitle;
    faq: EditorialTitle;
    final: EditorialTitle;
  };
  content: {
    home: {
      heroIntro: string;
      serviceIntro: string;
      salonIntro: string;
      processIntro: string;
      visitIntro: string;
      finalIntro: string;
      imageNote: string;
      bookingSteps: BookingStep[];
    };
    pages: Record<"team" | "salon" | "about" | "contact" | "booking", { eyebrow: string; intro: string }>;
    booking: {
      overviewKicker: string;
      overviewTitle: string;
      overviewIntro: string;
      primaryCtaLabel: string;
      note: string;
    };
  };
  faq: Array<{ question: string; answer: string }>;
  seo: { baseUrl: string; pages: Record<RouteKey, { path: string; title: string; description: string }> };
  legal: {
    imprint: {
      status: ApprovalStatus;
      owner: string;
      address: string[];
      contact: string;
      paragraphs: Array<{ title: string; copy: string }>;
    };
    privacy: {
      status: ApprovalStatus;
      responsible: string;
      paragraphs: Array<{ title: string; copy: string }>;
    };
    approvals: { legalReviewed: boolean; claimsConfirmed: boolean; assetRightsConfirmed: boolean };
  };
  reviews: { enabled: boolean; items: Array<{ quote: string; author: string; source: string }> };
};

const image = (
  src: string,
  caption: string,
  alt: string,
  source: string,
  license: string,
  approvalStatus: ApprovalStatus = "approved",
): ImageAsset => ({ src, caption, alt, source, license, approvalStatus });

const aiSource = "Original KI-generiertes Haarmotiv aus der neutralen Demo-Produktion";
const aiLicense = "Original KI-generiertes Asset; für die öffentliche Design-Demo freigegeben";

export const salonConfig: SalonConfig = {
  preview: {
    enabled: true,
    label: "DEMO-VORLAGE · ALLE INHALTE SIND PLATZHALTER",
    note: "Diese öffentliche Design-Demo stellt kein reales Unternehmen dar. Sämtliche Identitäts-, Kontakt-, Leistungs- und Rechtsangaben müssen vor einer produktiven Nutzung ersetzt und geprüft werden.",
    noindex: true,
  },
  identity: {
    name: "[SALONNAME]",
    descriptor: "[BRANCHE] · [ORT]",
    owner: "",
    street: "[MUSTERSTRASSE 00]",
    postalCode: "[PLZ]",
    city: "[ORT]",
    country: "[LAND]",
    phoneDisplay: "[TELEFON]",
    phoneHref: "",
    email: "[E-MAIL-ADRESSE]",
    emailHref: "",
    year: "[JAHR]",
    locale: "de-DE",
  },
  theme: {
    canvas: "#08090A",
    surface: "#111316",
    surfaceMuted: "#17191C",
    ink: "#F7F4ED",
    inkSoft: "#C4C0B5",
    accent: "#D9B47A",
    accentDark: "#B58F63",
    accentSoft: "#E9D0A6",
    accentLight: "#F5E7CE",
    accentHover: "#E3C28D",
  },
  logo: {
    text: "[LOGO]",
    mark: "DV",
    subtitle: "[BRANCHE · ORT]",
    src: "/images/brand-mark.svg",
    alt: "Abstraktes Signet der neutralen Demo-Vorlage",
  },
  navigation: [
    { label: "Start", route: "home" },
    { label: "Team", route: "team" },
    { label: "Salon", route: "salon" },
    { label: "[LEISTUNG]", route: "featuredService" },
    { label: "Über Uns", route: "about" },
    { label: "Öffnungszeiten/Kontakt", route: "contact" },
  ],
  booking: { mode: "internal", label: "[CTA]", url: "/termin-buchen/" },
  links: { websiteUrl: "", directionsUrl: "", mapEmbedUrl: "", social: [] },
  map: {
    mode: "disabled",
    providerName: "[KARTENANBIETER]",
    title: "[KARTENTITEL]",
    consentLabel: "[KARTE BEWUSST LADEN]",
    consentCopy: "[KURZER HINWEIS ZU ADRESSE, ROUTE, KARTENANBIETER UND KLICK-ZUSTIMMUNG]",
    routeLabel: "[ROUTENLINK]",
  },
  hours: [
    { label: "Montag", time: "[ÖFFNUNGSZEIT]", status: "unset" },
    { label: "Dienstag", time: "[ÖFFNUNGSZEIT]", status: "unset" },
    { label: "Mittwoch", time: "[ÖFFNUNGSZEIT]", status: "unset" },
    { label: "Donnerstag", time: "[ÖFFNUNGSZEIT]", status: "unset" },
    { label: "Freitag", time: "[ÖFFNUNGSZEIT]", status: "unset" },
    { label: "Samstag", time: "[ÖFFNUNGSZEIT]", status: "unset" },
    { label: "Sonntag", time: "[ÖFFNUNGSZEIT ODER RUHETAG]", status: "unset" },
  ],
  hoursNote: "[ÖFFNUNGSZEITEN VOR PRODUKTIVER NUTZUNG BESTÄTIGEN]",
  services: [
    { number: "01", slug: "leistung-01", title: "[LEISTUNG 01]", copy: "[KURZE LEISTUNGSBESCHREIBUNG 01]", enabled: true },
    { number: "02", slug: "leistung-02", title: "[LEISTUNG 02]", copy: "[KURZE LEISTUNGSBESCHREIBUNG 02]", enabled: true },
    { number: "03", slug: "leistung-03", title: "[LEISTUNG 03]", copy: "[KURZE LEISTUNGSBESCHREIBUNG 03]", enabled: true },
    { number: "04", slug: "leistung-04", title: "[LEISTUNG 04]", copy: "[KURZE LEISTUNGSBESCHREIBUNG 04]", enabled: true },
    { number: "05", slug: "leistung-05", title: "[LEISTUNG 05]", copy: "[KURZE LEISTUNGSBESCHREIBUNG 05]", enabled: true },
    { number: "06", slug: "leistung-06", title: "[LEISTUNG 06]", copy: "[KURZE LEISTUNGSBESCHREIBUNG 06]", enabled: true },
  ],
  featuredService: {
    enabled: true,
    slug: "schwerpunkt",
    navLabel: "[LEISTUNG]",
    eyebrow: "[BEREICH]",
    title: { lead: "[TITEL]", accent: "[WORT]" },
    intro: "[EINLEITUNGSTEXT ZUM SCHWERPUNKT]",
    description: "[AUSFÜHRLICHER BESCHREIBUNGSTEXT ZU ABLAUF, NUTZEN UND BERATUNG]",
    highlights: ["[VORTEIL 01]", "[VORTEIL 02]", "[VORTEIL 03]"],
    image: image("/images/team-hair-photo.webp", "KI-generierte Demo-Haarinspiration", "Original KI-generierte Haar-Inspiration: blonde, texturierte Frisur von hinten", aiSource, aiLicense),
  },
  team: [
    {
      name: "[TEAMMITGLIED 01]",
      role: "[POSITION / SCHWERPUNKT]",
      bio: "[KURZER TEAMTEXT 01]",
      image: image("/images/team-hair-photo.webp", "KI-generierte Demo-Haarinspiration", "Original KI-generierte Haar-Inspiration: blonde, texturierte Frisur von hinten; keine Darstellung eines echten Teams", aiSource, aiLicense),
    },
    {
      name: "[TEAMMITGLIED 02]",
      role: "[POSITION / SCHWERPUNKT]",
      bio: "[KURZER TEAMTEXT 02]",
      image: image("/images/about-hair-photo.webp", "KI-generierte Demo-Haarinspiration", "Original KI-generierte Haar-Inspiration: kupferfarbene Locken beim Styling; keine Darstellung eines echten Teams", aiSource, aiLicense),
    },
  ],
  media: {
    hero: image("/images/hero-hair-photo.webp", "KI-generierte Demo-Haarinspiration", "Original KI-generierte Haar-Inspiration: lange dunkle Wellen von hinten", aiSource, aiLicense),
    salon: image("/images/salon-hair-photo.webp", "KI-generierte Demo-Bob-Inspiration", "Original KI-generierte Haar-Inspiration: glänzender kastanienbrauner Bob von hinten", aiSource, aiLicense),
    texture: image("/images/extensions-hair-photo.webp", "KI-generierte Demo-Haartextur", "Original KI-generierte Haar-Inspiration: dunkle Haarsträhnen in Nahaufnahme", aiSource, aiLicense),
    team: image("/images/team-hair-photo.webp", "KI-generierte Demo-Haarinspiration", "Original KI-generierte Haar-Inspiration: blonde, texturierte Frisur von hinten", aiSource, aiLicense),
    about: image("/images/about-hair-photo.webp", "KI-generierte Demo-Haarinspiration", "Original KI-generierte Haar-Inspiration: kupferfarbene Locken beim Styling", aiSource, aiLicense),
  },
  history: {
    heading: "[ÜBERSCHRIFT ZUR HALTUNG DES SALONS]",
    intro: "[KURZER EINLEITUNGSTEXT ZU BERATUNG, HANDWERK UND HALTUNG]",
    paragraphs: [
      "[ABSATZ 01 ZUR ENTSTEHUNG ODER PHILOSOPHIE]",
      "[ABSATZ 02 ZUR ARBEITSWEISE UND BERATUNG]",
      "[ABSATZ 03 ZU TEAM, ATMOSPHÄRE ODER SCHWERPUNKTEN]",
    ],
  },
  claims: {
    hero: { lead: "[SALONNAME]", accent: "[CLAIM]" },
    intro: { lead: "Haar.", accent: "Stil. Persönlichkeit." },
    booking: { lead: "Ihr Termin.", accent: "Ihr Rhythmus." },
    visit: { lead: "Ihr Weg", accent: "zum Salon." },
    faq: { lead: "Gut zu", accent: "wissen." },
    final: { lead: "[CTA]", accent: "[AKZENTZEILE]" },
  },
  content: {
    home: {
      heroIntro: "[HERO-UNTERZEILE – KURZE POSITIONIERUNG DES SALONS]",
      serviceIntro: "[KURZER EINLEITUNGSTEXT ZU DEN BESTÄTIGTEN LEISTUNGEN]",
      salonIntro: "[KURZER BESCHREIBUNGSTEXT ZU SALON, ATMOSPHÄRE UND BERATUNG]",
      processIntro: "[KURZER TEXT ZUM ABLAUF DER TERMINANFRAGE]",
      visitIntro: "[KURZER BESUCHSTEXT MIT BESTÄTIGTER ADRESSE UND ANFAHRT]",
      finalIntro: "[KURZER ABSCHLUSSTEXT UND EINLADUNG ZUR KONTAKTAUFNAHME]",
      imageNote: "Original KI-generiertes Demo-Haarmotiv · keine Salonaufnahme",
      bookingSteps: [
        { number: "01", title: "[SCHRITT 01]", copy: "[KURZE BESCHREIBUNG SCHRITT 01]" },
        { number: "02", title: "[SCHRITT 02]", copy: "[KURZE BESCHREIBUNG SCHRITT 02]" },
        { number: "03", title: "[SCHRITT 03]", copy: "[KURZE BESCHREIBUNG SCHRITT 03]" },
      ],
    },
    pages: {
      team: { eyebrow: "[TEAM]", intro: "[KURZER EINLEITUNGSTEXT ZU TEAM UND SCHWERPUNKTEN]" },
      salon: { eyebrow: "[SALON]", intro: "[KURZER EINLEITUNGSTEXT ZU RÄUMEN UND ATMOSPHÄRE]" },
      about: { eyebrow: "[ÜBER UNS]", intro: "[KURZER EINLEITUNGSTEXT ZU HALTUNG UND GESCHICHTE]" },
      contact: { eyebrow: "[KONTAKT]", intro: "[KURZER EINLEITUNGSTEXT ZU ADRESSE, ZEITEN UND KONTAKTWEG]" },
      booking: { eyebrow: "[TERMINANFRAGE]", intro: "[KURZER EINLEITUNGSTEXT ZUM BESTÄTIGTEN TERMINWEG]" },
    },
    booking: {
      overviewKicker: "[IHR TERMIN]",
      overviewTitle: "[WUNSCH. TERMIN. NÄCHSTER SCHRITT.]",
      overviewIntro: "[KURZER TEXT ZUR TERMINANFRAGE UND ZUM BESTÄTIGTEN KONTAKTWEG]",
      primaryCtaLabel: "[DEMO-FUNKTION]",
      note: "[TERMIN-, FORMULAR- ODER KONTAKTZIEL VOR PRODUKTIVER NUTZUNG ERSETZEN UND PRÜFEN]",
    },
  },
  faq: [
    { question: "Wie kann ein Termin angefragt werden?", answer: "[ANTWORT ZUM BESTÄTIGTEN TERMINWEG]" },
    { question: "Wo befindet sich der Salon?", answer: "[ANTWORT MIT BESTÄTIGTER ADRESSE UND ROUTENHINWEIS]" },
    { question: "Welche Leistungen werden angeboten?", answer: "[ANTWORT ZU DEN BESTÄTIGTEN LEISTUNGEN]" },
    { question: "Wann ist der Salon geöffnet?", answer: "[ANTWORT MIT BESTÄTIGTEN ÖFFNUNGSZEITEN]" },
    { question: "Wann wird eine externe Karte geladen?", answer: "[ANTWORT ZU KARTENANBIETER UND KLICK-ZUSTIMMUNG]" },
  ],
  seo: {
    baseUrl: "",
    pages: {
      home: { path: "/", title: "Website-Vorlage | Demo", description: "Öffentliche Design-Demo mit vollständig austauschbaren Platzhalterinhalten." },
      team: { path: "/team/", title: "Team | Website-Vorlage Demo", description: "Öffentliche Design-Demo mit vollständig austauschbaren Platzhalterinhalten." },
      salon: { path: "/salon/", title: "Salon | Website-Vorlage Demo", description: "Öffentliche Design-Demo mit vollständig austauschbaren Platzhalterinhalten." },
      featuredService: { path: "/leistungen/schwerpunkt/", title: "Leistung | Website-Vorlage Demo", description: "Öffentliche Design-Demo mit vollständig austauschbaren Platzhalterinhalten." },
      about: { path: "/ueber-uns/", title: "Über uns | Website-Vorlage Demo", description: "Öffentliche Design-Demo mit vollständig austauschbaren Platzhalterinhalten." },
      contact: { path: "/oeffnungszeiten/", title: "Kontakt | Website-Vorlage Demo", description: "Öffentliche Design-Demo mit vollständig austauschbaren Platzhalterinhalten." },
      booking: { path: "/termin-buchen/", title: "Terminweg | Website-Vorlage Demo", description: "Öffentliche Design-Demo mit vollständig austauschbaren Platzhalterinhalten." },
      imprint: { path: "/impressum/", title: "Impressum-Platzhalter | Website-Vorlage Demo", description: "Nicht finale rechtliche Platzhalterseite einer öffentlichen Design-Demo." },
      privacy: { path: "/datenschutz/", title: "Datenschutz-Platzhalter | Website-Vorlage Demo", description: "Nicht finale rechtliche Platzhalterseite einer öffentlichen Design-Demo." },
    },
  },
  legal: {
    imprint: {
      status: "replace-before-live",
      owner: "[RECHTLICHE BETREIBERANGABE MUSS ERSETZT WERDEN]",
      address: ["[LADUNGSFÄHIGE ANSCHRIFT MUSS ERSETZT WERDEN]"],
      contact: "[RECHTLICH ERFORDERLICHE KONTAKTANGABE MUSS ERSETZT WERDEN]",
      paragraphs: [
        { title: "Demo-Hinweis", copy: "Diese Seite ist Bestandteil einer Demo-Vorlage. Vor einer produktiven Nutzung müssen sämtliche Angaben durch geprüfte Betreiberinformationen und passende Rechtstexte ersetzt werden." },
        { title: "Betreiberangaben", copy: "[NAME, RECHTSFORM, LADUNGSFÄHIGE ANSCHRIFT UND KONTAKT EINFÜGEN]" },
        { title: "Weitere Pflichtangaben", copy: "[BRANCHEN- UND RECHTSFORMABHÄNGIGE PFLICHTANGABEN RECHTLICH PRÜFEN]" },
      ],
    },
    privacy: {
      status: "replace-before-live",
      responsible: "[VERANTWORTLICHE STELLE UND KONTAKTDATEN MÜSSEN ERSETZT WERDEN]",
      paragraphs: [
        { title: "Demo-Hinweis", copy: "Diese Seite ist Bestandteil einer Demo-Vorlage. Vor einer produktiven Nutzung müssen die tatsächlichen Datenverarbeitungen geprüft und passende Datenschutzhinweise erstellt werden." },
        { title: "Verantwortliche Stelle", copy: "[VERANTWORTLICHE STELLE, ANSCHRIFT UND KONTAKT EINFÜGEN]" },
        { title: "Dienste und Rechtsgrundlagen", copy: "[EINGESETZTE DIENSTE, ZWECKE, EMPFÄNGER, SPEICHERDAUER UND RECHTSGRUNDLAGEN PRÜFEN]" },
      ],
    },
    approvals: { legalReviewed: false, claimsConfirmed: false, assetRightsConfirmed: true },
  },
  reviews: { enabled: false, items: [] },
};
