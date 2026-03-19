import LayoutIt from "../../../components/LayoutIt";
import SEO from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function AeroportoPalermoRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il codice IATA dell'aeroporto di Palermo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il codice IATA dell'aeroporto di Palermo Falcone Borsellino è PMO. Si trova a circa 35 km dal centro di Palermo, nel comune di Cinisi. È il principale aeroporto della Sicilia occidentale."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo in ritardo da Palermo PMO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dipende dalla distanza della rotta: fino a 1500 km → €250 (es. Roma, Milano); 1500–3500 km → €400 (es. Londra, Parigi, Amsterdam, Francoforte, Berlino, Dublino, Barcellona). Il ritardo deve essere di almeno 3 ore all'arrivo nella destinazione finale."
        }
      },
      {
        "@type": "Question",
        "name": "Ryanair opera a Palermo PMO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, Ryanair è uno dei principali operatori a Palermo PMO con numerose rotte europee e nazionali. In caso di ritardo o cancellazione, hai pieno diritto al risarcimento CE 261/2004. Il reclamo si presenta su ryanair.com; escalation all'ENAC se rifiutano."
        }
      },
      {
        "@type": "Question",
        "name": "Qual è la differenza tra l'aeroporto di Palermo (PMO) e quello di Catania (CTA)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PMO (Palermo Falcone Borsellino) serve la Sicilia occidentale ed è distante circa 250 km da Catania. CTA (Catania Fontanarossa) serve la Sicilia orientale ed è vicino all'Etna. Per i risarcimenti, entrambi seguono le stesse regole CE 261/2004, ma CTA ha la particolarità delle chiusure per cenere vulcanica, che non riguarda PMO."
        }
      },
      {
        "@type": "Question",
        "name": "A chi mi rivolgo se la compagnia rifiuta il risarcimento da Palermo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'autorità competente per i voli da aeroporti italiani è l'ENAC. Puoi presentare reclamo su enac.gov.it allegando la risposta negativa della compagnia o la mancata risposta entro 30 giorni dalla tua richiesta."
        }
      },
      {
        "@type": "Question",
        "name": "I voli charter per le isole Eolie o la Sicilia rientrano nel CE 261?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I voli charter da Palermo PMO verso destinazioni europee o internazionali rientrano nel CE 261/2004. I voli interni alle isole siciliane (es. voli per Lampedusa) su compagnie minori rientrano nel CE 261 se il tratto supera la soglia di ritardo di 3 ore all'arrivo. Verifica sempre la compagnia operatrice."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aeroporto Palermo Falcone Borsellino (PMO): Risarcimento Voli 2026",
    "description": "Volo in ritardo o cancellato a Palermo PMO? Guida completa: importi CE 261/2004, Ryanair/ITA/easyJet, confronto con CTA, procedura ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Palermo Falcone Borsellino (PMO): Risarcimento Voli 2026"
        description="Volo in ritardo o cancellato a Palermo PMO? Guida completa: importi CE 261/2004, Ryanair/ITA/easyJet, confronto con CTA, procedura ENAC."
        canonical="https://claimwinger.com/it/blog/aeroporto-palermo-falcone-borsellino-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">Aeroporto Palermo PMO</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">Aeroporti</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />8 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Palermo Falcone Borsellino (PMO): Risarcimento Voli 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo in ritardo o cancellato a Palermo Falcone Borsellino? Hai diritto a fino a <strong>€400 di risarcimento</strong> per la maggior parte delle rotte europee. Ecco la guida completa per i passeggeri di PMO.
          </p>
        </header>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-amber-900 mb-2">Aeroporto Palermo Falcone Borsellino — dati chiave</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-amber-800">
                <div><strong>Codice IATA:</strong> PMO</div>
                <div><strong>Codice ICAO:</strong> LICJ</div>
                <div><strong>Posizione:</strong> Cinisi, ~35 km dal centro di Palermo</div>
                <div><strong>Gestore:</strong> Gesap S.p.A.</div>
                <div><strong>Bacino d'utenza:</strong> Palermo, Sicilia occidentale, Agrigento, Trapani</div>
                <div><strong>Note:</strong> Intitolato ai giudici Giovanni Falcone e Paolo Borsellino</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-amber-500" />
            Compagnie aeree a Palermo PMO
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">FR</span>
                Ryanair
              </h3>
              <p className="text-gray-600 text-sm mb-2">Ryanair è il principale operatore a PMO con rotte verso tutta Europa (UK, Germania, Spagna, Polonia, ecc.). CE 261 applicabile pienamente. Reclamo su ryanair.com.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">AZ</span>
                ITA Airways
              </h3>
              <p className="text-gray-600 text-sm mb-2">ITA Opera voli PMO→FCO (Roma) e PMO→MXP (Milano). Distanza <1500 km → €250 di risarcimento. Reclamo su ita-airways.com.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">U2</span>
                easyJet
              </h3>
              <p className="text-gray-600 text-sm mb-2">easyJet opera da PMO verso diverse capitali europee. Importi €250–€400 secondo distanza. Reclamo su easyjet.com.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">LH / EW</span>
                Lufthansa / Eurowings
              </h3>
              <p className="text-gray-600 text-sm mb-2">Lufthansa e Eurowings operano PMO→FRA/MUC/DUS. Distanza ~1800–2000 km → €400. Reclamo alla compagnia operatrice.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento per le rotte principali da PMO
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Destinazione</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza da PMO</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma (FCO)</td><td className="p-3">~990 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">ITA Airways, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Milano (MXP/LIN)</td><td className="p-3">~1290 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">ITA, Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Londra (STN/LGW)</td><td className="p-3">~2260 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Parigi (CDG/ORY/BVA)</td><td className="p-3">~1970 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Air France, Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Barcellona (BCN)</td><td className="p-3">~1610 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Vueling, Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Amsterdam (AMS)</td><td className="p-3">~2300 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">KLM, Transavia</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Francoforte (FRA)</td><td className="p-3">~1960 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Lufthansa</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Düsseldorf (DUS)</td><td className="p-3">~2200 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Eurowings</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Berlino (BER)</td><td className="p-3">~2270 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Dublino (DUB)</td><td className="p-3">~2750 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">La maggior parte delle rotte PMO→Nord Europa supera i 1500 km → €400. Solo Roma e Milano rientrano nella fascia €250.</p>
        </section>

        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo in ritardo da Palermo?</h3>
              <p className="text-amber-100 text-sm">Verifica subito il tuo diritto a €250–€400. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=palermo-pmo" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-amber-700 font-bold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            PMO vs CTA: le differenze che contano per i risarcimenti
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Caratteristica</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Palermo PMO</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Catania CTA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Zona servita</td><td className="p-3">Sicilia occidentale</td><td className="p-3">Sicilia orientale</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Distanza da Palermo/Catania</td><td className="p-3">~35 km da Palermo</td><td className="p-3">~7 km da Catania</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Rischio eruzione vulcanica</td><td className="p-3 text-green-700">No</td><td className="p-3 text-amber-700">Sì (Etna)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">CE 261/2004</td><td className="p-3 text-green-600 font-semibold">Piena copertura</td><td className="p-3 text-green-600 font-semibold">Piena copertura</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Autorità escalation</td><td className="p-3">ENAC</td><td className="p-3">ENAC</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Principale operatore</td><td className="p-3">Ryanair</td><td className="p-3">Ryanair</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Cause tipiche di ritardo a Palermo PMO
          </h2>
          <div className="space-y-3">
            {[
              { tag: "NON straord.", color: "red", title: "Guasto tecnico all'aeromobile", desc: "Non è circostanza straordinaria — hai diritto al risarcimento se il ritardo supera 3 ore all'arrivo." },
              { tag: "NON straord.", color: "red", title: "Ritardo a cascata / rotazione aeromobile", desc: "Problema organizzativo della compagnia. Non straordinario — risarcimento dovuto." },
              { tag: "NON straord.", color: "red", title: "Sciopero del personale della compagnia", desc: "Sciopero di piloti, assistenti di volo o personale a terra della compagnia non è circostanza straordinaria." },
              { tag: "Dipende", color: "amber", title: "Vento forte o maltempo nel Canale di Sicilia", desc: "Il maltempo stagionale nel Mediterraneo è prevedibile. Solo condizioni eccezionali e documentate possono essere invocate come circostanza straordinaria." },
              { tag: "Straord.", color: "green", title: "Sciopero ATC (ENAV)", desc: "Lo sciopero dei controllori italiani (ENAV) è circostanza straordinaria. Nessun risarcimento monetario, ma assistenza (pasti, hotel) garantita." }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-3">
                <span className={`bg-${item.color}-100 text-${item.color}-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0 whitespace-nowrap`}>{item.tag}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo da Palermo PMO
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Documenta il ritardo in aeroporto", content: "Conserva carta d'imbarco. Fotografa i tabelloni di PMO. Chiedi conferma scritta alla compagnia con la motivazione del ritardo o cancellazione." },
              { step: "2", title: "Calcola il ritardo all'arrivo", content: "La soglia CE 261 è 3 ore calcolate all'arrivo alla destinazione finale (quando si aprono le porte dell'aereo). Non conta il ritardo alla partenza da PMO." },
              { step: "3", title: "Reclamo formale alla compagnia (entro 48 ore)", content: "Usa il modulo online della compagnia operatrice. Indica: codice PMO, numero volo, data, ritardo, importo richiesto (€250 o €400) e IBAN." },
              { step: "4", title: "Escalation ENAC se necessario", content: "Rifiuto o silenzio dopo 30 giorni? Presenta reclamo su enac.gov.it. L'ENAC è l'autorità italiana competente per tutti i voli da PMO." }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">{item.step}</div>
                <div className="flex-1 pb-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo per te?</h3>
              <p className="text-blue-200 text-sm">ClaimWinger si occupa di tutto: reclamo, documentazione, follow-up e escalation ENAC. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=palermo-pmo" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Aeroporto Palermo PMO</h2>
          <div className="space-y-3">
            {[
              { q: "Qual è il codice IATA dell'aeroporto di Palermo?", a: "Il codice IATA dell'aeroporto di Palermo Falcone Borsellino è PMO. Si trova a circa 35 km dal centro di Palermo, nel comune di Cinisi." },
              { q: "Quanto risarcimento spetta per un volo in ritardo da Palermo PMO?", a: "Fino a 1500 km → €250 (es. Roma, Milano); 1500–3500 km → €400 (es. Londra, Parigi, Amsterdam, Berlino, Dublino, Barcellona). Il ritardo deve essere di almeno 3 ore all'arrivo." },
              { q: "Ryanair opera a Palermo PMO?", a: "Sì, Ryanair è uno dei principali operatori a PMO con numerose rotte europee. In caso di ritardo o cancellazione hai pieno diritto al CE 261/2004." },
              { q: "Qual è la differenza tra PMO e CTA?", a: "PMO serve la Sicilia occidentale, CTA la Sicilia orientale. CTA ha la particolarità delle chiusure per cenere vulcanica dell'Etna, che non riguarda PMO. Entrambi seguono le stesse regole CE 261." },
              { q: "A chi mi rivolgo se la compagnia rifiuta il risarcimento da Palermo?", a: "L'autorità competente per i voli da aeroporti italiani è l'ENAC. Puoi presentare reclamo su enac.gov.it allegando la risposta negativa della compagnia." },
              { q: "I voli charter per le isole Eolie rientrano nel CE 261?", a: "I voli charter da PMO verso destinazioni europee o internazionali rientrano nel CE 261/2004. Per tratti brevi interni (es. verso Lampedusa) vale sempre il CE 261 se il ritardo supera 3 ore all'arrivo." }
            ].map((item, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
                </summary>
                <div className="px-5 pb-5"><p className="text-gray-600 text-sm leading-relaxed">{item.a}</p></div>
              </details>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Articoli correlati</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { href: "/it/blog/aeroporto-catania-fontanarossa-risarcimento", title: "Aeroporto Catania CTA: Risarcimento", excerpt: "Guida per l'aeroporto siciliano con la particolarità dell'Etna." },
              { href: "/it/blog/aeroporto-napoli-capodichino-risarcimento", title: "Aeroporto Napoli Capodichino", excerpt: "Guida al risarcimento dall'aeroporto di Napoli." },
              { href: "/it/blog/ryanair-italia-risarcimento", title: "Ryanair Italia: Guida Completa", excerpt: "Come ottenere fino a €600 da Ryanair per ritardi e cancellazioni." },
              { href: "/it/blog/circostanze-straordinarie-spiegate", title: "Circostanze Straordinarie", excerpt: "Quando la compagnia può legalmente rifiutare il risarcimento." }
            ].map((article) => (
              <Link key={article.href} href={article.href} className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-amber-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{article.title}</h3>
                <p className="text-gray-500 text-xs">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </LayoutIt>
  );
}
