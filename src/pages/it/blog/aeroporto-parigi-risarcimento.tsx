import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-parigi-risarcimento";
const title = "Aeroporto Parigi: Risarcimento Voli 2026 — CDG, Orly ORY, Beauvais BVA";
const description = "Volo in ritardo a Parigi Charles de Gaulle CDG, Orly ORY o Beauvais BVA? CE 261/2004, €250–€600, hub Air France, coincidenze intercontinentali, DGAC vs ENAC.";
const publishDate = "2026-03-19";

const faqData = [
  {
    question: "Quali sono gli aeroporti di Parigi?",
    answer: "Parigi ha tre aeroporti: Charles de Gaulle CDG (il principale, hub Air France, a ~25 km a nord-est), Orly ORY (a ~14 km a sud, secondo aeroporto) e Beauvais-Tillé BVA (a ~80 km da Parigi, usato principalmente da Ryanair — tecnicamente non è un aeroporto di Parigi)."
  },
  {
    question: "Beauvais BVA è davvero un aeroporto di Parigi?",
    answer: "No. Beauvais-Tillé (BVA) si trova a circa 80 km da Parigi, nella regione Picardia. Ryanair lo commercializza come 'Parigi Beauvais' ma non è servito dalla metropolitana o dalla RER parigina. Il trasferimento in bus dalla Porte Maillot impiega circa 1,5 ore. Tienilo presente quando compari i prezzi dei voli."
  },
  {
    question: "Quanto risarcimento spetta per un volo Air France cancellato da CDG?",
    answer: "€250 per rotte ≤1500 km (es. CDG–Roma ~1.100 km), €400 per 1500–3500 km (es. CDG–Istanbul), €600 per rotte >3500 km come CDG–New York, CDG–Tokyo, CDG–São Paulo o qualsiasi destinazione intercontinentale Air France."
  },
  {
    question: "Ho perso una coincidenza a CDG per colpa di Air France — ho diritto al risarcimento?",
    answer: "Sì, se la prenotazione era su un unico PNR (stesso biglietto). Il ritardo si calcola all'arrivo alla destinazione finale. Se arrivi alla destinazione finale con oltre 3 ore di ritardo, hai diritto al risarcimento calcolato sulla distanza totale del percorso."
  },
  {
    question: "Qual è l'autorità per i reclami sui voli da Parigi?",
    answer: "DGAC (Direction Générale de l'Aviation Civile) — l'autorità francese per l'aviazione civile. Per voli in partenza dall'Italia, è competente ENAC. ClaimWinger gestisce reclami contro vettori basati a CDG come Air France, Transavia France e altri."
  },
  {
    question: "La nebbia a CDG è una circostanza straordinaria?",
    answer: "No. L'aeroporto CDG è dotato di sistemi ILS Cat III che consentono atterraggi con visibilità molto ridotta. La nebbia ordinaria di Parigi non è una circostanza straordinaria. Solo eventi meteo eccezionali e imprevedibili possono essere considerati tali."
  }
];

export default function AeroportoParigiRisarcimento() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": title,
        "description": description,
        "datePublished": publishDate,
        "dateModified": publishDate,
        "author": { "@type": "Organization", "name": "ClaimWinger" },
        "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://claimwinger.com/it/blog/${slug}` }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      }
    ]
  };

  return (
    <LayoutIt>
      <SEO title={title} description={description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <nav className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
          <li className="mx-1">/</li>
          <li><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
          <li className="mx-1">/</li>
          <li className="text-gray-700 font-medium">Aeroporto Parigi Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Hub Europei</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 8 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Parigi: Risarcimento Voli 2026 — CDG, Orly ORY, Beauvais BVA
          </h1>
          <p className="text-lg text-gray-600">
            Parigi dispone di tre aeroporti. Charles de Gaulle (CDG) è il principale hub intercontinentale europeo e sede di Air France. Se il tuo volo è in ritardo o cancellato, il CE 261/2004 ti garantisce fino a <strong>€600 di risarcimento</strong>.
          </p>
        </header>

        {/* CTA 1 */}
        <div className="bg-blue-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo in ritardo da/per Parigi?</p>
            <p className="text-blue-100 text-sm">Verifica gratuitamente il tuo diritto al risarcimento. ClaimWinger trattiene solo il <strong>30%</strong> se vinci.</p>
          </div>
          <a
            href={`https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Verifica ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 aeroporti */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-600" /> I 3 aeroporti di Parigi: CDG, ORY, BVA
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left px-4 py-3">Aeroporto</th>
                  <th className="text-left px-4 py-3">Codice</th>
                  <th className="text-left px-4 py-3">Distanza da Parigi</th>
                  <th className="text-left px-4 py-3">Principali vettori</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">Charles de Gaulle</td>
                  <td className="px-4 py-3 font-bold text-blue-700">CDG</td>
                  <td className="px-4 py-3 text-gray-600">~25 km nord-est</td>
                  <td className="px-4 py-3 text-gray-600">Air France, Delta, United, Emirates, Lufthansa</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">Orly</td>
                  <td className="px-4 py-3 font-bold text-blue-700">ORY</td>
                  <td className="px-4 py-3 text-gray-600">~14 km sud</td>
                  <td className="px-4 py-3 text-gray-600">Transavia France, Air France domestico, Vueling, easyJet</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Beauvais-Tillé</td>
                  <td className="px-4 py-3 font-bold text-orange-700">BVA</td>
                  <td className="px-4 py-3 text-orange-600 font-medium">~80 km nord (non è Parigi!)</td>
                  <td className="px-4 py-3 text-gray-600">Ryanair</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm font-medium flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Attenzione Beauvais BVA:</strong> Ryanair vende i voli come "Paris Beauvais" ma l'aeroporto è a 80 km dal centro di Parigi. Il trasferimento con bus navetta Ryanair dalla/per Porte Maillot impiega 1h15–1h45. Non è raggiungibile con i mezzi pubblici parigini. Consideralo quando valuti i prezzi.</span>
            </p>
          </div>
        </section>

        {/* Terminal CDG */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" /> Terminal CDG: la mappa per le coincidenze
          </h2>
          <p className="text-gray-700 mb-4">
            CDG ha 3 terminal (T1, T2, T3) con struttura complessa. T2 da solo ha 8 sottopadiglioni (2A, 2B, 2C, 2D, 2E, 2F, 2G, 2K). I tempi di transfer tra terminal sono critici per capire se hai diritto al risarcimento per coincidenza persa.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-4 py-3">Terminal</th>
                  <th className="text-left px-4 py-3">Principali vettori</th>
                  <th className="text-left px-4 py-3">Transfer interno (min MCT)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["T1", "Lufthansa, Swiss, Star Alliance partner", "45 min (stesso T1), 90 min verso T2"],
                  ["T2A/B", "Air France Europa/domestico", "30 min (interno T2)"],
                  ["T2C/D", "Air France lungo raggio", "45 min (da T2A a T2C/D)"],
                  ["T2E/F", "Air France lungo raggio intercontinentale", "60 min (da T2A a T2E/F)"],
                  ["T2G", "Air France charter, voli cargo pax", "45 min"],
                  ["T2K (Schengen)", "Transavia, Air France Schengen", "45 min"],
                  ["T3", "Low cost (easyJet, Vueling)", "90 min (verso T2)"],
                ].map(([term, carriers, mct]) => (
                  <tr key={term} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium">{term}</td>
                    <td className="px-4 py-2 text-gray-600 text-sm">{carriers}</td>
                    <td className="px-4 py-2 text-gray-600 text-sm">{mct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm">
            MCT = Minimum Connection Time. Se il tuo tempo di connessione era superiore all'MCT ufficiale e hai comunque perso il volo per ritardo in arrivo, hai diritto al risarcimento.
          </p>
        </section>

        {/* Importi CE 261 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-blue-600" /> Importi risarcimento CE 261/2004
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Distanza rotta</th>
                  <th className="text-left px-4 py-3">Risarcimento</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg">Esempi da CDG/ORY</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">≤ 1.500 km</td>
                  <td className="px-4 py-3 font-bold text-green-700">€ 250</td>
                  <td className="px-4 py-3 text-gray-600">CDG–Roma FCO (~1.100 km), CDG–Milano MXP (~580 km), CDG–Barcellona</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">1.500–3.500 km</td>
                  <td className="px-4 py-3 font-bold text-yellow-700">€ 400</td>
                  <td className="px-4 py-3 text-gray-600">CDG–Istanbul, CDG–Cairo, CDG–Casablanca, CDG–Tel Aviv</td>
                </tr>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">&gt; 3.500 km (ritardo ≥4h)</td>
                  <td className="px-4 py-3 font-bold text-red-700">€ 600</td>
                  <td className="px-4 py-3 text-gray-600">CDG–New York, CDG–Tokyo, CDG–São Paulo, CDG–Singapore, CDG–Los Angeles</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">&gt; 3.500 km (ritardo 3–4h)</td>
                  <td className="px-4 py-3 font-bold text-orange-700">€ 300</td>
                  <td className="px-4 py-3 text-gray-600">Stesse rotte, riduzione 50% se riprotezione entro 4h</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Rotte intercontinentali Air France */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-600" /> Principali rotte intercontinentali da CDG — €600
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-4 py-3">Destinazione</th>
                  <th className="text-left px-4 py-3">Rotta</th>
                  <th className="text-left px-4 py-3">Distanza approx.</th>
                  <th className="text-left px-4 py-3">Risarcimento</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["New York JFK", "CDG–JFK", "~5.800 km", "€600"],
                  ["Los Angeles", "CDG–LAX", "~9.100 km", "€600"],
                  ["Tokyo Narita", "CDG–NRT", "~9.700 km", "€600"],
                  ["São Paulo", "CDG–GRU", "~9.400 km", "€600"],
                  ["Buenos Aires", "CDG–EZE", "~11.000 km", "€600"],
                  ["Singapore", "CDG–SIN", "~10.700 km", "€600"],
                  ["Bangkok", "CDG–BKK", "~9.300 km", "€600"],
                  ["Johannesburg", "CDG–JNB", "~9.100 km", "€600"],
                  ["Mexico City", "CDG–MEX", "~9.200 km", "€600"],
                  ["Mumbai", "CDG–BOM", "~7.000 km", "€600"],
                ].map(([dest, route, dist, comp]) => (
                  <tr key={route} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium">{dest}</td>
                    <td className="px-4 py-2 text-gray-600">{route}</td>
                    <td className="px-4 py-2 text-gray-600">{dist}</td>
                    <td className="px-4 py-2 font-bold text-red-700">{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie a CDG/ORY
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Nebbia ordinaria a CDG (ILS Cat III installato)</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale Air France</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Congestionamento CDG (frequente)</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Rotazione aerei in ritardo</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero DGAC/ATC (controllo traffico aereo)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo francese</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Tempesta eccezionale (grandine, vento estremo)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Emergenza di sicurezza aeroportuale</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <p className="text-blue-800 text-sm flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Scioperi DGAC in Francia:</strong> Gli scioperi dei controllori del traffico aereo francesi (DGAC) sono frequenti e spesso comunicati con settimane di anticipo. In questi casi la compagnia può invocare circostanza straordinaria, ma solo se il ritardo era direttamente causato dallo sciopero ATC — non da problemi di programmazione interna.</span>
            </p>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" /> Come fare reclamo per voli da/per Parigi
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Identifica il vettore operativo", text: "Controlla il codice volo: AF è Air France, TO/HV è Transavia, U2 è easyJet. Il reclamo va al vettore che ha fisicamente operato il volo." },
              { step: "2", title: "Raccogli la documentazione", text: "Carta d'imbarco, conferma prenotazione, notifiche del ritardo/cancellazione, ricevute per spese extra." },
              { step: "3", title: "Invia reclamo scritto alla compagnia", text: "Usa il portale reclami della compagnia specifica. Per Air France: airfrance.com. Per Transavia: transavia.com." },
              { step: "4", title: "Escalation DGAC o ENAC", text: "Volo da Francia → DGAC. Volo dall'Italia → ENAC. La DGAC francese può imporre sanzioni alle compagnie." },
              { step: "5", title: "Affida a ClaimWinger", text: "ClaimWinger conosce le procedure francesi e gestisce tutto per te. 30% solo al successo." }
            ].map(item => (
              <li key={item.step} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                <span className="bg-blue-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Autorità */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" /> Autorità competenti
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-800 mb-2">DGAC — Francia</h3>
              <p className="text-blue-700 text-sm mb-2">Direction Générale de l'Aviation Civile. Competente per voli in partenza da aeroporti francesi.</p>
              <p className="text-blue-600 text-xs">service-public.fr — Reclami passeggeri aerei</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">ENAC — Italia</h3>
              <p className="text-green-700 text-sm mb-2">Competente per voli in partenza dall'Italia verso Parigi operati da vettori UE.</p>
              <p className="text-green-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo da/per Parigi CDG in ritardo o cancellato?</p>
            <p className="text-blue-100 text-sm">ClaimWinger gestisce il tuo reclamo. Commissione 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Inizia ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" /> Domande frequenti sugli aeroporti di Parigi
          </h2>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-lg group">
                <summary className="px-4 py-3 font-semibold text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 pt-2 text-gray-600 text-sm">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Articoli correlati</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "air-france-risarcimento", title: "Air France: Risarcimento Voli 2026 — CE 261/2004" },
              { slug: "transavia-risarcimento", title: "Transavia: Risarcimento Voli 2026 — CE 261/2004" },
              { slug: "aeroporto-amsterdam-risarcimento", title: "Aeroporto Amsterdam AMS: Risarcimento 2026" },
            ].map(a => (
              <Link key={a.slug} href={`/it/blog/${a.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-blue-300 group">
                <p className="font-semibold text-gray-800 group-hover:text-blue-600 text-sm">{a.title}</p>
                <p className="text-blue-600 text-xs mt-2 flex items-center gap-1">Leggi <ArrowRight className="w-3 h-3" /></p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}
