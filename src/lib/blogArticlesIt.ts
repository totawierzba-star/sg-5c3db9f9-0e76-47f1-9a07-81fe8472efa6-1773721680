export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  color?: "blue" | "green" | "orange" | "purple" | "amber" | "red";
}

export const blogArticlesIt: BlogArticle[] = [
  {
    slug: "aeroporto-catania-fontanarossa-risarcimento",
    title: "Aeroporto Catania Fontanarossa (CTA): Risarcimento Voli 2026",
    excerpt: "Volo in ritardo o cancellato a Catania CTA? CE 261/2004, eruzione Etna e NOTAM, Ryanair/easyJet/ITA, importi €250–€400, procedura ENAC.",
    date: "2026-03-19",
    readTime: "9 min",
    category: "Aeroporti",
    featured: false,
    color: "orange"
  },
  {
    slug: "tap-air-portugal-risarcimento",
    title: "TAP Air Portugal Risarcimento: Guida Completa 2026 — Fino a €600",
    excerpt: "Volo TAP in ritardo o cancellato? CE 261/2004, hub Lisbona per Brasile/Africa, importi €400/€600, tempi di risposta e procedura ANAC/ENAC.",
    date: "2026-03-19",
    readTime: "10 min",
    category: "Compagnie Aeree",
    featured: false,
    color: "green"
  },
  {
    slug: "austrian-airlines-risarcimento",
    title: "Austrian Airlines Risarcimento: Guida Completa 2026 — Fino a €600",
    excerpt: "Volo Austrian Airlines in ritardo o cancellato? CE 261/2004, coincidenza persa a Vienna, codeshare OS/LH, procedura APF/Austro Control/ENAC.",
    date: "2026-03-19",
    readTime: "10 min",
    category: "Compagnie Aeree",
    featured: false,
    color: "red"
  },
  {
    slug: "swiss-risarcimento",
    title: "SWISS Risarcimento: Guida Completa 2026 — CE 261 e Voli da Italia e Svizzera",
    excerpt: "Volo SWISS in ritardo o cancellato? CE 261/2004 applicabile anche da ZRH, importi, coincidenza persa a Zurigo e procedura BAZL/ENAC.",
    date: "2026-03-19",
    readTime: "10 min",
    category: "Compagnie Aeree",
    featured: false,
    color: "red"
  },
  {
    slug: "eurowings-risarcimento",
    title: "Eurowings Risarcimento: Guida Completa 2026 — Fino a €600 per Ritardi e Cancellazioni",
    excerpt: "Volo Eurowings in ritardo o cancellato? Guida completa: CE 261, gruppo Lufthansa, codeshare EW vs LH, Eurowings Discover, procedura e LBA/ENAC.",
    date: "2026-03-19",
    readTime: "10 min",
    category: "Compagnie Aeree",
    featured: false,
    color: "purple"
  },
  {
    slug: "aeroporto-torino-caselle-risarcimento",
    title: "Aeroporto Torino Caselle (TRN): Risarcimento Voli Ritardati e Cancellati 2026",
    excerpt: "Volo in ritardo o cancellato a Torino Caselle (TRN)? Guida completa ai tuoi diritti CE 261/2004: importi, compagnie, meteo alpino e procedura ENAC.",
    date: "2026-03-19",
    readTime: "8 min",
    category: "Aeroporti",
    featured: false,
    color: "green"
  },
  {
    slug: "aeroporto-bologna-guglielmo-marconi-risarcimento",
    title: "Aeroporto Bologna Guglielmo Marconi (BLQ): Risarcimento Voli 2026",
    excerpt: "Volo in ritardo o cancellato a Bologna BLQ? Guida completa: importi CE 261, Ryanair/easyJet/ITA, procedure ENAC e diritti passeggeri.",
    date: "2026-03-19",
    readTime: "8 min",
    category: "Aeroporti",
    featured: false,
    color: "green"
  },
  {
    slug: "aeroporto-venezia-marco-polo-risarcimento",
    title: "Aeroporto Venezia Marco Polo (VCE): Risarcimento Voli Ritardati e Cancellati 2026",
    excerpt: "Volo in ritardo o cancellato a Venezia VCE? Guida completa: importi CE 261, compagnie, TSF vs VCE, crociera persa e procedura ENAC.",
    date: "2026-03-19",
    readTime: "9 min",
    category: "Aeroporti",
    featured: false,
    color: "green"
  },
  {
    slug: "aeroporto-milano-linate-ritardi",
    title: "Aeroporto Milano Linate (LIN): Ritardi, Cancellazioni e Risarcimenti 2026",
    excerpt: "Volo in ritardo o cancellato a Milano Linate (LIN)? Scopri i tuoi diritti CE 261/2004, quali compagnie operano, gli importi e come presentare reclamo.",
    date: "2026-03-19",
    readTime: "9 min",
    category: "Aeroporti",
    featured: false,
    color: "blue"
  },
  {
    slug: "roma-madrid-volo-cancellato",
    title: "Volo Roma–Madrid Cancellato: €400 di Risarcimento — Guida Completa 2026",
    excerpt: "Volo Roma–Madrid cancellato? Guida completa: €400 CE 261/2004, diritti immediati in aeroporto, procedura Iberia/Ryanair/easyJet/Vueling e escalation ENAC/AESA.",
    date: "2026-03-19",
    readTime: "10 min",
    category: "Rotte",
    featured: false,
    color: "orange"
  },
  {
    slug: "milano-parigi-ritardo-risarcimento",
    title: "Volo Milano–Parigi in Ritardo: €250 di Risarcimento — Guida Completa 2026",
    excerpt: "Volo Milano–Parigi in ritardo di 3 ore? Guida completa per MXP/LIN/BGY→CDG/ORY: importi, Air France, easyJet, Ryanair e procedura di reclamo.",
    date: "2026-03-19",
    readTime: "9 min",
    category: "Rotte",
    featured: false,
    color: "purple"
  },
  {
    slug: "roma-londra-ritardo-risarcimento",
    title: "Volo Roma–Londra in Ritardo: €250 di Risarcimento — Guida Completa 2026",
    excerpt: "Volo Roma–Londra in ritardo di 3 ore? Scopri quanto spetta (€250), quali compagnie operano la rotta (Ryanair, BA, easyJet, ITA) e come richiedere il risarcimento.",
    date: "2026-03-19",
    readTime: "10 min",
    category: "Rotte",
    featured: true,
    color: "purple"
  },
  {
    slug: "vueling-risarcimento",
    title: "Vueling Risarcimento: Guida Completa 2026 — Fino a €600 per Ritardi e Cancellazioni",
    excerpt: "Volo Vueling in ritardo o cancellato? Guida completa: importi, differenza con Iberia, rifiuti ingiustificati e procedura passo-passo per ottenere fino a €600.",
    date: "2026-03-19",
    readTime: "10 min",
    category: "Compagnie Aeree",
    featured: false,
    color: "amber"
  },
  {
    slug: "iberia-risarcimento",
    title: "Iberia Risarcimento: Come Ottenere Fino a €600 per Ritardi e Cancellazioni [2026]",
    excerpt: "Volo Iberia in ritardo o cancellato? Guida completa: differenza Iberia/Iberia Express/Vueling, coincidenza persa a Madrid, importi e procedura reclamo.",
    date: "2026-03-19",
    readTime: "10 min",
    category: "Compagnie Aeree",
    featured: false,
    color: "orange"
  },
  {
    slug: "norwegian-risarcimento",
    title: "Norwegian Risarcimento Voli: Guida Completa 2026 — Fino a €600",
    excerpt: "Volo Norwegian in ritardo o cancellato? Guida completa: importi, procedura reclamo e cosa fare quando Norwegian non risponde per mesi.",
    date: "2026-03-19",
    readTime: "10 min",
    category: "Compagnie Aeree",
    featured: false,
    color: "red"
  },
  {
    slug: "turkish-airlines-risarcimento",
    title: "Turkish Airlines Risarcimento: Guida Completa 2026 — Fino a €600",
    excerpt: "Volo TK in ritardo? Il CE 261/2004 si applica solo ai voli da aeroporti UE. Guida completa: quando spetta, quanto ottieni e come fare reclamo in italiano.",
    date: "2026-03-19",
    readTime: "11 min",
    category: "Compagnie Aeree",
    featured: true,
    color: "red"
  },
  {
    slug: "british-airways-risarcimento",
    title: "British Airways Risarcimento: Guida Completa 2026 — Fino a €600",
    excerpt: "Volo BA in ritardo o cancellato? Guida completa: Brexit, CE 261 vs UK261, importi in euro e sterline, procedura reclamo e barriera linguistica risolta.",
    date: "2026-03-19",
    readTime: "11 min",
    category: "Compagnie Aeree",
    featured: true,
    color: "blue"
  },
  {
    slug: "klm-risarcimento",
    title: "KLM Risarcimento: Guida Completa per Ritardi e Cancellazioni [2026]",
    excerpt: "Volo KLM in ritardo o coincidenza persa a Schiphol? Scopri come ottenere fino a €600 di risarcimento. Procedura, documenti e tempi di risposta.",
    date: "2026-03-19",
    readTime: "10 min",
    category: "Compagnie Aeree",
    featured: true,
    color: "blue"
  },
  {
    slug: "air-france-risarcimento",
    title: "Air France Risarcimento: Come Ottenere Fino a €600 per Ritardi e Cancellazioni [2026]",
    excerpt: "Volo Air France in ritardo o cancellato? Guida completa: importi CE 261/2004, procedura reclamo, differenza Air France vs KLM e cosa fare se rifiutano.",
    date: "2026-03-19",
    readTime: "10 min",
    category: "Compagnie Aeree",
    featured: true,
    color: "blue"
  },
  {
    slug: "lufthansa-risarcimento-voli",
    title: "Lufthansa Risarcimento Voli: Guida Completa 2026 — Fino a €600",
    excerpt: "Volo Lufthansa in ritardo o cancellato? Scopri come ottenere fino a €600 di risarcimento secondo CE 261/2004. Procedura, documenti, tempi di risposta e cosa fare se rifiutano.",
    date: "2026-03-19",
    readTime: "11 min",
    category: "Compagnie Aeree",
    featured: true,
    color: "orange"
  },
  {
    slug: "da-quante-ore-ritardo-diritto-risarcimento",
    title: "Da Quante Ore di Ritardo Hai Diritto al Risarcimento? [Guida 2026]",
    excerpt: "La risposta rapida: 3 ore. Ma ci sono dettagli fondamentali sul calcolo, gli importi e le eccezioni. Scopri tutto su €250, €400 e €600 secondo CE 261/2004.",
    date: "2026-03-19",
    readTime: "10 min",
    category: "Guide Pratiche",
    featured: true,
    color: "blue"
  },
  {
    slug: "aeroporto-napoli-capodichino-risarcimento",
    title: "Aeroporto di Napoli Capodichino: Risarcimenti per Ritardi e Cancellazioni",
    excerpt: "Guida completa ai diritti dei passeggeri e alle procedure di risarcimento per voli in ritardo o cancellati dall'Aeroporto di Napoli Capodichino.",
    date: "2026-03-05",
    readTime: "8 min",
    category: "Aeroporti",
    featured: true,
    color: "green"
  },
  {
    slug: "come-presentare-reclamo-guida-completa",
    title: "Come Presentare un Reclamo per Volo in Ritardo o Cancellato: Guida Completa",
    excerpt: "Guida passo-passo per presentare un reclamo efficace alla compagnia aerea e ottenere fino a 600€ di risarcimento. Modelli, documenti e procedura completa.",
    date: "2026-03-05",
    readTime: "12 min",
    category: "Guide Pratiche",
    featured: true,
    color: "purple"
  },
  {
    slug: "ryanair-italia-risarcimento",
    title: "Ryanair Italia: Guida Completa al Risarcimento per Ritardi e Cancellazioni",
    excerpt: "Scopri come ottenere fino a 600€ di risarcimento da Ryanair per voli in ritardo o cancellati. Guida completa con procedura step-by-step.",
    date: "2026-03-02",
    readTime: "8 min",
    category: "Compagnie Aeree",
    featured: true,
    color: "orange"
  },
  {
    slug: "aeroporto-roma-fiumicino-ritardi",
    title: "Aeroporto Roma Fiumicino — ritardi e diritti passeggeri",
    excerpt: "Tutto quello che devi sapere sui ritardi all'aeroporto di Roma Fiumicino: diritti, procedure e risarcimenti secondo CE 261/2004.",
    date: "2025-02-02",
    readTime: "10 min",
    category: "Aeroporti",
    featured: true,
    color: "green"
  },
  {
    slug: "wizz-air-italia-risarcimento",
    title: "Wizz Air Italia — risarcimento per ritardi e cancellazioni",
    excerpt: "Guida completa su come ottenere risarcimento da Wizz Air per voli in ritardo o cancellati in Italia. Procedure, importi fino a 600 € e diritti passeggeri CE 261/2004.",
    date: "2026-03-01",
    readTime: "11 min",
    category: "Compagnie Aeree",
    featured: true,
    color: "purple"
  },
  {
    slug: "ita-airways-risarcimento",
    title: "ITA Airways risarcimento — diritti passeggeri e procedure",
    excerpt: "Tutto quello che devi sapere sui tuoi diritti con ITA Airways (ex Alitalia). Come ottenere risarcimento fino a 600 € per ritardi e cancellazioni secondo CE 261/2004.",
    date: "2026-03-01",
    readTime: "10 min",
    category: "Compagnie Aeree",
    featured: true,
    color: "blue"
  },
  {
    slug: "aeroporto-milano-malpensa-ritardi",
    title: "Aeroporto Milano Malpensa: ritardi, cancellazioni e risarcimenti",
    excerpt: "Volo in ritardo o cancellato a Milano Malpensa (MXP)? Scopri i tuoi diritti e come ottenere fino a 600 € di risarcimento secondo il Regolamento CE 261/2004.",
    date: "2026-03-01",
    readTime: "9 min",
    category: "Aeroporti",
    featured: true,
    color: "green"
  },
  {
    slug: "aeroporto-bergamo-orio-al-serio-risarcimento",
    title: "Aeroporto Bergamo Orio al Serio: guida al risarcimento voli",
    excerpt: "Problemi con il volo a Bergamo (BGY)? Guida completa ai diritti passeggeri e procedure per ottenere compensazione fino a 600 € per ritardi e cancellazioni.",
    date: "2026-03-01",
    readTime: "8 min",
    category: "Aeroporti",
    featured: false,
    color: "green"
  },
  {
    slug: "easyjet-italia-risarcimento",
    title: "easyJet Italia risarcimento — ritardi e cancellazioni 2026",
    excerpt: "Guida completa su come ottenere risarcimento da easyJet per voli in ritardo o cancellati in Italia. Procedure, importi e diritti passeggeri.",
    date: "2026-03-01",
    readTime: "11 min",
    category: "Compagnie Aeree",
    featured: true,
    color: "orange"
  },
  {
    slug: "regolamento-ce-261-2004-spiegato",
    title: "Regolamento CE 261/2004 Spiegato: Guida Completa ai Diritti dei Passeggeri",
    excerpt: "Scopri tutto sul Regolamento CE 261/2004: quando si applica, quanto puoi ottenere e come far valere i tuoi diritti come passeggero aereo.",
    date: "2026-03-05",
    readTime: "15 min",
    category: "Regolamenti",
    featured: true,
    color: "purple"
  },
  {
    slug: "circostanze-straordinarie-spiegate",
    title: "Circostanze Straordinarie: Quando NON Spetta il Risarcimento Volo",
    excerpt: "Scopri cosa sono le circostanze straordinarie secondo il Regolamento CE 261/2004 e quando la compagnia aerea può rifiutare legalmente il risarcimento.",
    date: "2026-03-05",
    readTime: "10 min",
    category: "Regolamenti",
    featured: true,
    color: "amber"
  },
  {
    slug: "ritardo-3-ore-regola-risarcimento",
    title: "Ritardo di 3 Ore: La Regola del Risarcimento Volo Spiegata [2026]",
    excerpt: "Perché la soglia di 3 ore è fondamentale? Guida completa al calcolo del ritardo e ai tuoi diritti.",
    date: "2026-03-05",
    readTime: "12 min",
    category: "Guide Pratiche",
    color: "green"
  },
  {
    slug: "volo-ita-roma-new-york-ritardi",
    title: "Volo ITA Airways Roma-New York in Ritardo: Risarcimento fino a 600€",
    excerpt: "Guida specifica per la rotta transatlantica Roma-New York. Scopri i tuoi diritti per ritardi e cancellazioni ITA.",
    date: "2026-03-05",
    readTime: "11 min",
    category: "Compagnie Aeree",
    color: "blue"
  },
  {
    slug: "overbooking-negato-imbarco-diritti",
    title: "Overbooking e Negato Imbarco: Tutti i Tuoi Diritti",
    excerpt: "Ti hanno negato l'imbarco? Scopri la differenza tra volontario e involontario e come ottenere fino a 600€.",
    date: "2026-03-05",
    readTime: "15 min",
    category: "Guide Pratiche",
    featured: true,
    color: "red"
  },
  {
    slug: "sciopero-compagnia-vs-atc-differenze",
    title: "Sciopero Compagnia vs ATC: Chi Paga il Risarcimento?",
    excerpt: "Non tutti gli scioperi sono uguali. Scopri quando hai diritto al risarcimento e quando è circostanza straordinaria.",
    date: "2026-03-05",
    readTime: "13 min",
    category: "Regolamenti",
    color: "orange"
  }
];