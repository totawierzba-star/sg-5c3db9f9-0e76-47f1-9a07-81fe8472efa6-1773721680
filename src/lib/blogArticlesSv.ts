export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date?: string;
  publishDate?: string;
  readTime?: string;
  category?: string;
  color?: string;
  featured?: boolean;
  wordCount?: number;
}

export const blogArticlesSv: BlogArticle[] = [
  {
    id: "sas-forsenat-flyg-ersattning",
    title: "Ersättning för försenat SAS-flyg — Komplett guide 2025",
    slug: "sas-forsenat-flyg-ersattning",
    excerpt: "Försenat SAS-flyg? Få upp till 600 € i ersättning. Lär dig exakt hur du kräver pengarna och när du har rätt till kompensation.",
    category: "SAS",
    featured: true,
    color: "blue",
    date: "2026-03-07",
    readTime: "5 min"
  },
  {
    id: "sas-installt-flyg-ersattning",
    title: "SAS ställde in flyget — hur får du upp till 600 € i ersättning?",
    slug: "sas-installt-flyg-ersattning",
    excerpt: "Inställt SAS-flyg? Du har rätt till 250-600 € + full återbetalning. Se hur du kräver ersättning snabbt och säkert.",
    category: "SAS",
    featured: true,
    color: "red",
    date: "2026-03-07",
    readTime: "5 min"
  },
  {
    id: "sas-nekade-ersattning",
    title: "SAS nekade ersättning — vad gör du härnäst?",
    slug: "sas-nekade-ersattning",
    excerpt: "Fick du nej från SAS? Deras avslag är ofta felaktiga. Här är exakt vad du gör för att ändå få dina pengar.",
    category: "SAS",
    featured: true,
    color: "orange",
    date: "2026-03-07",
    readTime: "4 min"
  },
  {
    id: "sas-voucher-eller-pengar",
    title: "SAS erbjuder voucher istället för pengar — måste du acceptera det?",
    slug: "sas-voucher-eller-pengar",
    excerpt: "Nej! SAS kan inte tvinga dig att ta voucher istället för kontant ersättning. Lär dig hur du kräver riktiga pengar.",
    category: "SAS",
    featured: true,
    color: "green",
    date: "2026-03-07",
    readTime: "4 min"
  },
  {
    id: "sas-utbetalningstid-ersattning",
    title: "Hur lång tid tar det för SAS att betala ersättning?",
    slug: "sas-utbetalningstid-ersattning",
    excerpt: "SAS ska betala inom 7 dagar enligt EU-lag, men gör det sällan. Se realistiska tidslinjer och hur du påskyndar processen.",
    category: "SAS",
    color: "purple",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-ersattning-belopp-tabell",
    title: "Hur mycket ersättning kan du kräva från SAS? (Tabell)",
    slug: "sas-ersattning-belopp-tabell",
    excerpt: "250, 400 eller 600 €? Beror på flygsträcka och försening. Komplett tabell över ersättningsbelopp från SAS.",
    category: "SAS",
    color: "blue",
    date: "2026-03-07",
    readTime: "4 min"
  },
  {
    id: "sas-ersattning-vs-aterbetalning",
    title: "Ersättning vs. återbetalning av biljett hos SAS — vad är skillnaden?",
    slug: "sas-ersattning-vs-aterbetalning",
    excerpt: "Många blandar ihop dessa. Ersättning = straffavgift till dig. Återbetalning = pengarna för biljetten tillbaka. Du kan få båda!",
    category: "SAS",
    color: "green",
    date: "2026-03-07",
    readTime: "4 min"
  },
  {
    id: "sas-forsening-vs-installt-flyg",
    title: "SAS försening vs. inställt flyg — olika regler, olika ersättning",
    slug: "sas-forsening-vs-installt-flyg",
    excerpt: "Inställt flyg ger oftare rätt till ersättning än försening. Lär dig skillnaderna och när du har starkast rättsläge.",
    category: "SAS",
    color: "orange",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-forsenat-mer-an-3-timmar",
    title: "SAS försenat mer än 3 timmar — dina rättigheter steg för steg",
    slug: "sas-forsenat-mer-an-3-timmar",
    excerpt: "3+ timmars försening = rätt till full ersättning. Här är exakt vad du kan kräva och hur du gör det.",
    category: "SAS",
    color: "red",
    date: "2026-03-07",
    readTime: "4 min"
  },
  {
    id: "sas-installt-flyg-14-dagar",
    title: "SAS ställde in flyget mindre än 14 dagar före avgång — ersättning",
    slug: "sas-installt-flyg-14-dagar",
    excerpt: "Om SAS ställer in inom 14 dagar före avgång har du rätt till ersättning (om de inte erbjuder alternativ inom vissa tider).",
    category: "SAS",
    color: "purple",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-installt-flyg-7-dagar",
    title: "SAS ställde in flyget mindre än 7 dagar före avgång — sista minuten",
    slug: "sas-installt-flyg-7-dagar",
    excerpt: "Inställning inom 7 dagar = ännu starkare rättigheter. Se vilken ersättning du har rätt till och hur du kräver den.",
    category: "SAS",
    color: "red",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-tekniskt-fel-ersattning",
    title: "SAS tekniskt fel — får du ersättning?",
    slug: "sas-tekniskt-fel-ersattning",
    excerpt: "Ja! Tekniska fel är SAS ansvar, inte extraordinära omständigheter. Kräv full ersättning om flygningen försenas/ställs in.",
    category: "SAS",
    color: "blue",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-strajk-ersattning",
    title: "SAS strejk — när har du rätt till pengar?",
    slug: "sas-strajk-ersattning",
    excerpt: "Kabinstrejk = ingen ersättning. Flygledare- eller landningsstrejk = SAS måste betala. Här är skillnaden.",
    category: "SAS",
    color: "orange",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-forsening-med-overnattning",
    title: "SAS försening med övernattning — extra rättigheter",
    slug: "sas-forsening-med-overnattning",
    excerpt: "Om SAS försening tvingar dig övernatta har du rätt till hotell, mat och transport — utöver ersättningen på 250-600 €.",
    category: "SAS",
    color: "green",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-missat-anslutningsflyg",
    title: "Missat anslutningsflyg på grund av SAS-försening — vem betalar?",
    slug: "sas-missat-anslutningsflyg",
    excerpt: "Om SAS försenade flyget och du missade anslutningen har du rätt till ersättning för hela resan (om det var samma bokning).",
    category: "SAS",
    color: "purple",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-tidsandring",
    title: "SAS tidsändring utan förvarning — när har du rätt till ersättning?",
    slug: "sas-tidsandring",
    excerpt: "SAS ändrade tiden på ditt flyg? Om ändringen är större än 2 timmar kan du ha rätt till ersättning eller återbetalning.",
    category: "SAS",
    color: "blue",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-codeshare-lufthansa-united",
    title: "SAS codeshare med Lufthansa eller United — vem betalar ersättningen?",
    slug: "sas-codeshare-lufthansa-united",
    excerpt: "Bokade via SAS men flög med Lufthansa? Det beror på vem som opererade flygningen. Här är reglerna.",
    category: "SAS",
    color: "orange",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-forsening-i-hogsasong",
    title: "SAS försening i högsäsong — vad du behöver veta",
    slug: "sas-forsening-i-hogsasong",
    excerpt: "Sommar, jul och sportlov = fler förseningar. Men dina rättigheter är desamma! Se hur du kräver ersättning vid högtrafik.",
    category: "SAS",
    color: "red",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-stockholm-new-york-ersattning",
    title: "Ersättning för SAS Stockholm–New York (JFK/EWR) — 600 € guide",
    slug: "sas-stockholm-new-york-ersattning",
    excerpt: "Långdistansförsening ger högst ersättning (600 €). Här är exakt hur du kräver pengarna för transatlantiska SAS-flyg.",
    category: "SAS",
    color: "blue",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-stockholm-london-ersattning",
    title: "Ersättning för SAS Stockholm–London (Heathrow) — Brexit-påverkan",
    slug: "sas-stockholm-london-ersattning",
    excerpt: "Efter Brexit gäller fortfarande EU261 på SAS-flyg till London. Du har rätt till 250-400 € vid försening.",
    category: "SAS",
    color: "green",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-stockholm-chicago-ersattning",
    title: "Ersättning för SAS Stockholm–Chicago (ORD) — transatlantisk guide",
    slug: "sas-stockholm-chicago-ersattning",
    excerpt: "Stockholm–Chicago med SAS försenat? Du har rätt till 600 € om förseningen är över 3 timmar. Här är hur.",
    category: "SAS",
    color: "purple",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-stockholm-tokyo-ersattning",
    title: "Ersättning för SAS Stockholm–Tokyo (Haneda) — maximalt anspråk på 600 €",
    slug: "sas-stockholm-tokyo-ersattning",
    excerpt: "Asienresan försenad? SAS-flyg till Tokyo omfattas av EU261. Kräv 600 € vid 3+ timmars försening.",
    category: "SAS",
    color: "orange",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "sas-goteborg-landvetter-ersattning",
    title: "Ersättning för SAS Göteborg–Köpenhamn–[destination] — rättigheter vid byte",
    slug: "sas-goteborg-landvetter-ersattning",
    excerpt: "Flög från Göteborg via Köpenhamn och missade anslutningen? SAS måste ersätta om det var samma bokning.",
    category: "SAS",
    color: "blue",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "sas-malmo-sturup-ersattning",
    title: "Ersättning för SAS Malmö–[destination] — guide för Sturup-resenärer",
    slug: "sas-malmo-sturup-ersattning",
    excerpt: "Flög från Malmö med SAS? Samma EU261-regler gäller. Se hur du kräver 250-600 € vid försening/inställning.",
    category: "SAS",
    color: "red",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "sas-stockholm-oslo-kopenhamn-ersattning",
    title: "Ersättning för SAS Stockholm–Oslo eller Stockholm–Köpenhamn — inrikes Skandinavien",
    slug: "sas-stockholm-oslo-kopenhamn-ersattning",
    excerpt: "Även korta flygresor omfattas av EU261. Kräv 250 € om SAS-flyget inom Skandinavien försenas 3+ timmar.",
    category: "SAS",
    color: "green",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "sas-charter-thailand-kanarieoarna",
    title: "Ersättning för SAS på charterliknande semesterleder (Thailand, Kanarieöarna)",
    slug: "sas-charter-thailand-kanarieoarna",
    excerpt: "SAS-charter till solen? Du har samma rättigheter som reguljärflyg. Kräv ersättning vid försening eller inställning.",
    category: "SAS",
    color: "purple",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "sas-arlanda-avgangar",
    title: "SAS Arlanda-avgångar — de mest försenade rutterna och vad du kan göra",
    slug: "sas-arlanda-avgangar",
    excerpt: "Vissa SAS-rutter från Arlanda försenas oftare. Lär dig vilka och hur du säkerställer ersättning när det händer.",
    category: "SAS",
    color: "orange",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "sas-eurobonus-ersattning",
    title: "SAS EuroBonus-biljett och försening — kan du fortfarande kräva ersättning?",
    slug: "sas-eurobonus-ersattning",
    excerpt: "Ja! Även EuroBonus-resenärer har rätt till ersättning vid försening. Poäng spelar ingen roll för EU261.",
    category: "SAS",
    color: "blue",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "hur-ansoka-ersattning-sas-steg-for-steg",
    title: "Hur ansöker du om ersättning från SAS steg för steg? — guide",
    slug: "hur-ansoka-ersattning-sas-steg-for-steg",
    excerpt: "Detaljerad guide: Från att samla dokumentation till att skicka kravet och följa upp. Få dina pengar från SAS.",
    category: "SAS",
    color: "green",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "vilka-dokument-kravs-sas",
    title: "Vilka dokument behöver du för att ansöka om ersättning från SAS?",
    slug: "vilka-dokument-kravs-sas",
    excerpt: "Boardingkort, bokningsnummer och kvitton. Här är exakt vilka dokument SAS kräver för ersättning.",
    category: "SAS",
    color: "purple",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "klagomalsbrev-sas-mall",
    title: "Klagomålsbrev till SAS — mall och exempel",
    slug: "klagomalsbrev-sas-mall",
    excerpt: "Behöver du skriva till SAS? Använd vår färdiga mall för att kräva ersättning professionellt och effektivt.",
    category: "SAS",
    color: "orange",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-ignorerar-ansokan",
    title: "SAS ignorerar min ansökan — vad gör jag nu?",
    slug: "sas-ignorerar-ansokan",
    excerpt: "Om SAS inte svarar inom 6 veckor, ta det vidare till ARN eller använd ClaimWinger för att tvinga fram svar.",
    category: "SAS",
    color: "red",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "norwegian-forsenat-flyg-ersattning",
    title: "Norwegian försenat flyg — så får du 600 € (inte CashPoints!)",
    slug: "norwegian-forsenat-flyg-ersattning",
    excerpt: "Norwegian försöker ge CashPoints istället för pengar. Så undviker du det och får kontanter direkt på kontot.",
    category: "Norwegian",
    featured: true,
    color: "blue",
    date: "2026-03-07",
    readTime: "4 min"
  },
  {
    id: "norwegian-installt-flyg-ersattning",
    title: "Norwegian inställt flyg — dina 3 rättigheter",
    slug: "norwegian-installt-flyg-ersattning",
    excerpt: "Inställt Norwegian-flyg? Du har rätt till: 1) Ny biljett eller återbetalning, 2) Mat/hotell, 3) 250-600 € ersättning.",
    category: "Norwegian",
    featured: true,
    color: "red",
    date: "2026-03-07",
    readTime: "4 min"
  },
  {
    id: "norwegian-cashpoints-vs-pengar",
    title: "Norwegian CashPoints vs Kontanter — acceptera aldrig poäng!",
    slug: "norwegian-cashpoints-vs-pengar",
    excerpt: "Norwegian vill ge CashPoints istället för EU261-ersättning. Det är mot lagen! Kräv alltid kontanter.",
    category: "Norwegian",
    featured: true,
    color: "orange",
    date: "2026-03-07",
    readTime: "4 min"
  },
  {
    id: "ryanair-sverige-ersattning",
    title: "Ryanair i Sverige — ersättning för försenat och inställt flyg",
    slug: "ryanair-sverige-ersattning",
    excerpt: "Ryanair från Sverige försenat? Kräv 250-600 € enligt EU261. Här är hur du tvingar dem att betala.",
    category: "Ryanair",
    color: "blue",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "tui-ving-apollo-charter-ersattning",
    title: "TUI, Ving, Apollo charter — ersättning vid problem",
    slug: "tui-ving-apollo-charter-ersattning",
    excerpt: "Charterflyg har samma EU261-rättigheter som reguljärflyg. Så kräver du ersättning från researrangören.",
    category: "Charter",
    color: "purple",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "lufthansa-sverige-ersattning",
    title: "Lufthansa i Sverige — ersättning och passagerarrättigheter",
    slug: "lufthansa-sverige-ersattning",
    excerpt: "Lufthansa från Sverige försenat? Du har rätt till upp till 600 € enligt EU261. Guide för svenska resenärer.",
    category: "Lufthansa",
    color: "green",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "eu261-regler-sverige",
    title: "EU 261/2004 — dina rättigheter som flygpassagerare",
    slug: "eu261-regler-sverige",
    excerpt: "EU261 är lagen som ger dig rätt till ersättning. Här är den fullständiga guiden för svenska resenärer.",
    category: "Regler",
    featured: true,
    color: "blue",
    date: "2026-03-07",
    readTime: "5 min"
  },
  {
    id: "extraordinara-omstandigheter-sverige",
    title: "Extraordinära omständigheter — när slipper flygbolaget betala?",
    slug: "extraordinara-omstandigheter-sverige",
    excerpt: "Flygbolag skyller på vädret eller flygledare. Men vad räknas egentligen som extraordinärt? Här är sanningen.",
    category: "Regler",
    color: "orange",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "nekad-ombordstigning-overbokning",
    title: "Nekad ombordstigning (överbokning) — dina rättigheter och ersättning",
    slug: "nekad-ombordstigning-overbokning",
    excerpt: "Överbokat flyg och nekades ombordstigning? Du har rätt till omedelbar ersättning + alternativt flyg.",
    category: "Regler",
    color: "red",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "flyg-till-fran-usa-regler",
    title: "Flygningar till/från USA — regler för svenska passagerare",
    slug: "flyg-till-fran-usa-regler",
    excerpt: "EU261 gäller för flyg till USA från Sverige, men inte för flyg från USA till Sverige (om det är amerikanskt bolag).",
    category: "Regler",
    color: "purple",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "barn-spadbarn-ersattning",
    title: "Barn och spädbarn — ersättningsregler",
    slug: "barn-spadbarn-ersattning",
    excerpt: "Barn har samma rättigheter som vuxna. Spädbarn som flyger gratis har dock ingen rätt till ersättning.",
    category: "Regler",
    color: "green",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "affarsresa-vem-far-pengarna",
    title: "Affärsresor — vem får ersättningen?",
    slug: "affarsresa-vem-far-pengarna",
    excerpt: "Företaget betalade biljetten, men DU får ersättningen. Här är reglerna för tjänsteresor.",
    category: "Regler",
    color: "blue",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "wizz-air-sverige-ersattning",
    title: "Wizz Air i Sverige — ersättning för försenat och inställt flyg",
    slug: "wizz-air-sverige-ersattning",
    excerpt: "Wizz Air försenat från Sverige? Kräv 250-600 € enligt EU261. Så tvingar du dem att betala.",
    category: "Wizz Air",
    color: "purple",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "bromma-flygplats-ersattning",
    title: "Bromma Flygplats (BMA) — ersättning för försenat flyg",
    slug: "bromma-flygplats-ersattning",
    excerpt: "Flyg från Bromma försenat? Samma EU261-regler gäller. Kräv 250-600 € vid försening över 3 timmar.",
    category: "Flygplatser",
    color: "orange",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "norra-sverige-flyg-vinter",
    title: "Flygförseningar i norra Sverige (Luleå, Umeå, Kiruna) — vinterregler",
    slug: "norra-sverige-flyg-vinter",
    excerpt: "Vinterväder är ofta extraordinära omständigheter, men inte alltid. Här är när du fortfarande har rätt till ersättning.",
    category: "Flygplatser",
    color: "blue",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "preskriptionstid-flygersattning",
    title: "10 år på dig att kräva ersättning! — Preskriptionstid i Sverige",
    slug: "preskriptionstid-flygersattning",
    excerpt: "I Sverige har du upp till 10 år på dig att kräva flygersättning. Så även gamla förseningar kan ge pengar.",
    category: "Regler",
    color: "green",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "arn-flyg-arende",
    title: "ARN och flygersättning — varför det inte alltid räcker",
    slug: "arn-flyg-arende",
    excerpt: "Allmänna Reklamationsnämnden (ARN) är gratis men långsamt. Här är när du bör använda dem och när du bör gå vidare.",
    category: "Regler",
    color: "red",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "paketreselagen-flygersattning",
    title: "Paketreselagen + Flygersättning = Dubbel kompensation?",
    slug: "paketreselagen-flygersattning",
    excerpt: "Köpte en paketresa och flyget var försenat? Du kan ha rätt till ersättning från både researrangören OCH flygbolaget.",
    category: "Regler",
    color: "purple",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "hur-mycket-ersattning-sas-flyg-tabell",
    title: "Hur mycket ersättning får jag för ett försenat SAS-flyg?",
    slug: "hur-mycket-ersattning-sas-flyg-tabell",
    excerpt: "250, 400 eller 600 €? Beror på flygsträcka. Komplett tabell med exakta ersättningsbelopp för SAS-flyg.",
    category: "Featured",
    featured: true,
    color: "blue",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "hur-mycket-ersattning-installt-flyg",
    title: "Hur mycket ersättning får jag för ett inställt flyg i Sverige?",
    slug: "hur-mycket-ersattning-installt-flyg",
    excerpt: "Inställt flyg ger 250-600 € + full biljettersättning. Se exakt hur mycket du har rätt till baserat på din rutt.",
    category: "Featured",
    featured: true,
    color: "red",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "utbetalningstid-flygersattning-sverige",
    title: "Hur lång tid tar det att få flygersättning utbetald?",
    slug: "utbetalningstid-flygersattning-sverige",
    excerpt: "Med ClaimWinger: 4-8 veckor. Direkt till flygbolaget: 2-6 månader. Här är de realistiska tidslinjerna.",
    category: "Featured",
    featured: true,
    color: "green",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "krava-ersattning-gammalt-flyg-3-ar",
    title: "Kan jag kräva ersättning för ett flyg för 3 år sedan?",
    slug: "krava-ersattning-gammalt-flyg-3-ar",
    excerpt: "Ja! I Sverige har du upp till 10 år på dig. Även gamla förseningar kan fortfarande ge 250-600 € i ersättning.",
    category: "Featured",
    featured: true,
    color: "purple",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "flygbolaget-ignorerar-ansokan",
    title: "Vad gör jag om flygbolaget ignorerar min ansökan?",
    slug: "flygbolaget-ignorerar-ansokan",
    excerpt: "Om flygbolaget inte svarar inom 6 veckor, ta det vidare till ARN eller använd ClaimWinger för att tvinga fram svar.",
    category: "Featured",
    color: "orange",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "vem-far-ersattningen",
    title: "Vem får ersättningen — resenären eller researrangören?",
    slug: "vem-far-ersattningen",
    excerpt: "DU som passagerare har rätt till ersättningen, inte researrangören eller företaget som betalade biljetten.",
    category: "Featured",
    color: "blue",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "eu261-utanfor-europa",
    title: "Gäller EU261 för flyg utanför Europa?",
    slug: "eu261-utanfor-europa",
    excerpt: "Ja, om flygbolaget är europeiskt eller om flygningen avgår från EU/EES. Men ej för amerikanska bolag från USA.",
    category: "Featured",
    color: "green",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "behover-jag-ombud",
    title: "Behöver jag anlita ett ombud för att få flygersättning?",
    slug: "behover-jag-ombud",
    excerpt: "Nej, men ombud som ClaimWinger ökar suksessraten drastiskt och tar bort allt krångel. Här är för- och nackdelar.",
    category: "Featured",
    color: "purple",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "lonar-det-sig-ersattningsforetag",
    title: "Lönar det sig att använda ett ersättningsföretag för flygkrav?",
    slug: "lonar-det-sig-ersattningsforetag",
    excerpt: "Ja, för de flesta. ClaimWinger tar 25-30% men har 98% vinstchans (vs 40% om du gör det själv). Här är matematiken.",
    category: "Featured",
    color: "orange",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "hur-lang-tid-ansoka-sverige",
    title: "Hur lång tid har jag på mig att ansöka om flygersättning i Sverige?",
    slug: "hur-lang-tid-ansoka-sverige",
    excerpt: "I Sverige har du upp till 10 år på dig att ansöka om flygersättning enligt preskriptionslagen. Även gamla flyg kvalificerar!",
    category: "Featured",
    color: "red",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "vilka-dokument-behover-jag",
    title: "Vilka dokument behöver jag för att ansöka om ersättning för försenat flyg?",
    slug: "vilka-dokument-behover-jag",
    excerpt: "Du behöver: boardingkort, bokningsnummer (PNR) och kvitton för utlägg. Här är den kompletta checklistan.",
    category: "Featured",
    color: "blue",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "betalar-sas-ersattning-statistik",
    title: "Betalar SAS ersättning — fakta, statistik och bekräftade fall",
    slug: "betalar-sas-ersattning-statistik",
    excerpt: "Ja, SAS betalar ersättning när lagen kräver det, men ofta först efter påtryckning. Här är statistiken och hur du säkerställer utbetalning.",
    category: "Featured",
    color: "green",
    date: "2026-03-07",
    readTime: "2 min"
  },
  {
    id: "arlanda-forsenat-installat-flyg-guide",
    title: "Försening eller inställt flyg på Arlanda (ARN) — Passagerarrättigheter 2025",
    slug: "arlanda-forsenat-installat-flyg-guide",
    excerpt: "Fullständig guide för Arlanda-passagerare: Vad du har rätt till vid försening, inställning eller nekad ombordstigning. Kräv 250-600 €.",
    category: "Arlanda",
    featured: true,
    color: "blue",
    date: "2026-03-07",
    readTime: "4 min"
  },
  {
    id: "missat-anslutningsflyg-arlanda",
    title: "Missat anslutningsflyg på Arlanda (ARN) — Ersättningsguide steg för steg 2025",
    slug: "missat-anslutningsflyg-arlanda",
    excerpt: "Missade anslutningen på Arlanda pga försening? Du har rätt till ersättning för hela resan om det var samma bokning. Här är hur.",
    category: "Arlanda",
    featured: true,
    color: "red",
    date: "2026-03-07",
    readTime: "4 min"
  },
  {
    id: "arlanda-forsenade-flygbolag-statistik",
    title: "Mest försenade flygbolagen på Arlanda 2025 — Statistik och ersättningsråd",
    slug: "arlanda-forsenade-flygbolag-statistik",
    category: "Arlanda",
    excerpt: "Vilka flygbolag har flest förseningar på Arlanda? Se aktuell statistik och lär dig hur du kräver ersättning från värsta bovarna.",
    featured: true,
    color: "purple",
    date: "2026-03-07",
    readTime: "4 min"
  },
  {
    id: "arlanda-new-york-forsening-600-euro",
    title: "Arlanda till New York försenat? Få 600 € (Krav och Guide)",
    slug: "arlanda-new-york-forsening-600-euro",
    excerpt: "Transatlantiska flyg ger högst ersättning. Arlanda–New York försenat 3+ timmar = 600 €. Här är kraven och processen.",
    category: "Arlanda",
    color: "blue",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "arlanda-london-uk261-eu261-brexit",
    title: "Arlanda till London försenat? EU261 vs UK261 efter Brexit",
    slug: "arlanda-london-uk261-eu261-brexit",
    excerpt: "Efter Brexit gäller fortfarande EU261 för flyg från Arlanda till London. Du har rätt till 250 € vid 3+ timmars försening.",
    category: "Arlanda",
    color: "green",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "arlanda-dubai-eu261-ersattning",
    title: "Arlanda till Dubai försenat? När gäller EU261 för Mellanösternflyg",
    slug: "arlanda-dubai-eu261-ersattning",
    excerpt: "Flyg till Dubai från Arlanda omfattas av EU261 om det är ett europeiskt flygbolag. Kräv 400 € vid 3+ timmars försening.",
    category: "Arlanda",
    color: "orange",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "arlanda-massavbokningar-kris-rattigheter",
    title: "Massavbokningar på Arlanda (ARN) — Passagerares rättigheter vid kris",
    slug: "arlanda-massavbokningar-kris-rattigheter",
    excerpt: "Vid IT-krasch, strejk eller väderkris: Dina rättigheter till ersättning, omsorg och alternativt flyg från Arlanda.",
    category: "Arlanda",
    color: "red",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "landvetter-forsenat-installt-flyg-guide",
    title: "Försening eller inställt flyg på Landvetter (GOT) — guide för göteborgare",
    slug: "landvetter-forsenat-installt-flyg-guide",
    excerpt: "Flyger från Göteborg Landvetter? Här är dina passagerarrättigheter vid försening, inställning och överbokning. Kräv 250-600 €.",
    category: "Landvetter",
    color: "blue",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sas-norwegian-goteborg-forseningar-ersattning",
    title: "SAS och Norwegian från Göteborg — vanligaste förseningarna och ersättningar",
    slug: "sas-norwegian-goteborg-forseningar-ersattning",
    excerpt: "SAS och Norwegian dominerar Landvetter. Statistik över förseningar och hur du kräver ersättning från dessa bolag.",
    category: "Landvetter",
    color: "green",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "ryanair-wizz-air-goteborg-rattigheter",
    title: "Ryanair och Wizz Air från Göteborg — rättigheter och hur du ansöker",
    slug: "ryanair-wizz-air-goteborg-rattigheter",
    excerpt: "Lågprisbolagen på Landvetter är notoriskt svåra att få ersättning från. Här är hur du tvingar dem att betala.",
    category: "Landvetter",
    color: "purple",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "malmo-airport-forsening-ersattning",
    title: "Försening eller inställt flyg på Malmö Airport (MMX) — Ersättningsguide",
    slug: "malmo-airport-forsening-ersattning",
    excerpt: "Flygning från Malmö Sturup försenad? Du har samma rättigheter som Arlanda-passagerare. Kräv 250-600 € vid problem.",
    category: "Regionala",
    color: "orange",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "regionala-flygplatser-sverige-ersattning",
    title: "Regionala svenska flygplatser — samma rättigheter, mindre kännedom",
    slug: "regionala-flygplatser-sverige-ersattning",
    excerpt: "Bromma, Norrköping, Visby, Luleå — alla omfattas av EU261. Här är hur du kräver ersättning från mindre flygplatser.",
    category: "Regionala",
    color: "blue",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "kopenhamn-kastrup-svenska-resenarer",
    title: "Köpenhamn Kastrup (CPH) som hub för svenskar — Rättigheter vid försening",
    slug: "kopenhamn-kastrup-svenska-resenarer",
    excerpt: "Många svenskar flyger via Köpenhamn. EU261 gäller även där om det är samma bokning. Här är hur du kräver ersättning.",
    category: "Regionala",
    color: "green",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "thailand-semester-forsening-ersattning",
    title: "Semesterflygningar från Sverige till Thailand — Förseningar och Ersättning",
    slug: "thailand-semester-forsening-ersattning",
    excerpt: "Thailandsresan försenad? Du har rätt till 600 € vid 3+ timmars försening på långdistans. Här är hur du kräver pengarna.",
    category: "Populära rutter",
    color: "purple",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "kanarieoarna-sverige-forsening-krav",
    title: "Flygningar från Sverige till Kanarieöarna — Säsongsförseningar och dina krav",
    slug: "kanarieoarna-sverige-forsening-krav",
    excerpt: "Kanarieöarna = populär vinterdestination. Flyg dit försenat? Kräv 400 € enligt EU261 om förseningen är 3+ timmar.",
    category: "Populära rutter",
    color: "orange",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "spanien-grekland-sverige-flyg-problem",
    title: "Flygningar Sverige–Spanien och Grekland — Vanligaste problemen och din ersättning",
    slug: "spanien-grekland-sverige-flyg-problem",
    excerpt: "Sommarresan till Medelhavet försenad? EU261 täcker alla flyg från Sverige till Spanien och Grekland. Kräv 250-400 €.",
    category: "Populära rutter",
    color: "red",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "sverige-storbritannien-uk261-eu261",
    title: "Sverige–Storbritannien — UK261 vs EU261 efter Brexit för svenska resenärer",
    slug: "sverige-storbritannien-uk261-eu261",
    excerpt: "Efter Brexit gäller fortfarande EU261 för flyg från Sverige till UK. Du har rätt till ersättning vid försening/inställning.",
    category: "Populära rutter",
    color: "blue",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "transatlantiska-flyg-sverige-600-euro",
    title: "Transatlantiska flyg från Sverige — hur du kräver 600 € maximalt",
    slug: "transatlantiska-flyg-sverige-600-euro",
    excerpt: "USA, Kanada, Asien = 600 € ersättning vid 4+ timmars försening. Här är exakt hur du kräver maxbeloppet.",
    category: "Populära rutter",
    color: "green",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "hur-mycket-ersattning-forsenat-sas-flyg",
    title: "Hur mycket ersättning får jag för ett försenat SAS-flyg?",
    slug: "hur-mycket-ersattning-forsenat-sas-flyg",
    excerpt: "Snabbt svar: 250 € (kort), 400 € (medel), 600 € (lång distans). Se fullständig tabell och krav.",
    category: "AI Overviews",
    featured: true,
    color: "blue",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "hur-mycket-ersattning-installt-flyg-sverige",
    title: "Hur mycket ersättning får jag för ett inställt flyg i Sverige?",
    slug: "hur-mycket-ersattning-installt-flyg-sverige",
    excerpt: "Inställt flyg = 250-600 € + full biljettåterbetalning. Se exakta belopp baserat på din rutt.",
    category: "AI Overviews",
    featured: true,
    color: "red",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "hur-lang-tid-flygersattning-utbetald",
    title: "Hur lång tid tar det att få flygersättning utbetald?",
    slug: "hur-lang-tid-flygersattning-utbetald",
    excerpt: "ClaimWinger: 4-8 veckor. Direkt: 2-6 måneder. ARN: 6-12 månader. Här är realistiska tidslinjer.",
    category: "AI Overviews",
    featured: true,
    color: "green",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "krava-ersattning-flyg-3-ar-sedan",
    title: "Kan jag kräva ersättning för ett flyg för 3 år sedan?",
    slug: "krava-ersattning-flyg-3-ar-sedan",
    excerpt: "Ja! Sverige har 10 års preskriptionstid. Även gamla förseningar kan ge 250-600 €.",
    category: "AI Overviews",
    featured: true,
    color: "purple",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "flygbolaget-ignorerar-min-ansokan",
    title: "Vad gör jag om flygbolaget ignorerar min ansökan?",
    slug: "flygbolaget-ignorerar-min-ansokan",
    excerpt: "6 veckors väntan? Ta det till ARN eller använd ClaimWinger för att tvinga fram svar.",
    category: "AI Overviews",
    featured: true,
    color: "orange",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "vem-far-ersattningen-resenaren-eller-researrangor",
    title: "Vem får ersättningen — resenären eller researrangören?",
    slug: "vem-far-ersattningen-resenaren-eller-researrangor",
    excerpt: "DU som passagerare har alltid rätt till ersättningen, inte företaget eller researrangören.",
    category: "AI Overviews",
    featured: true,
    color: "blue",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "galler-eu261-flyg-utanfor-europa",
    title: "Gäller EU261 för flyg utanför Europa?",
    slug: "galler-eu261-flyg-utanfor-europa",
    excerpt: "Ja för EU-bolag eller avgång från EU. Nej för amerikanska bolag från USA.",
    category: "AI Overviews",
    featured: true,
    color: "green",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "behover-jag-anlita-ombud-flygersattning",
    title: "Behöver jag anlita ett ombud för att få flygersättning?",
    slug: "behover-jag-anlita-ombud-flygersattning",
    excerpt: "Nej, men ClaimWinger ökar vinstchansen från 40% till 98%. Här är för- och nackdelar.",
    category: "AI Overviews",
    featured: true,
    color: "purple",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "lonar-sig-ersattningsforetag-flygkrav",
    title: "Lönar det sig att använda ett ersättningsföretag för flygkrav?",
    slug: "lonar-sig-ersattningsforetag-flygkrav",
    excerpt: "Ja. ClaimWinger tar 25-30% men har 98% vinstchans vs 40% själv. Matematiken talar för sig.",
    category: "AI Overviews",
    featured: true,
    color: "orange",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "hur-lang-tid-ansoka-flygersattning-sverige",
    title: "Hur lång tid har jag på mig att ansöka om flygersättning i Sverige?",
    slug: "hur-lang-tid-ansoka-flygersattning-sverige",
    excerpt: "10 år enligt svensk preskriptionslag. Även gamla förseningar kan fortfarande ge ersättning.",
    category: "AI Overviews",
    featured: true,
    color: "red",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "vilka-dokument-ersattning-forsenat-flyg",
    title: "Vilka dokument behöver jag för att ansöka om ersättning för försenat flyg?",
    slug: "vilka-dokument-ersattning-forsenat-flyg",
    excerpt: "Boardingkort, PNR, kvitton. Komplett checklista över nödvändiga dokument.",
    category: "AI Overviews",
    featured: true,
    color: "blue",
    date: "2026-03-07",
    readTime: "3 min"
  },
  {
    id: "betalar-sas-ersattning-fakta-statistik",
    title: "Betalar SAS ersättning — fakta, statistik och bekräftade fall",
    slug: "betalar-sas-ersattning-fakta-statistik",
    excerpt: "Ja, men ofta först efter påtryckning. ARN ger medhold i 50%+ av fallen mot SAS.",
    category: "AI Overviews",
    featured: true,
    color: "green",
    date: "2026-03-07",
    readTime: "3 min"
  }
];

export const getFeaturedArticles = (): BlogArticle[] => {
  return blogArticlesSv.filter(article => article.featured);
};

export const getTotalWordCount = (): number => {
  return blogArticlesSv.reduce((acc, article) => acc + (article.wordCount || 0), 0);
};