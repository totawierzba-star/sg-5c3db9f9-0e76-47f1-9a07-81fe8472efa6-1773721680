import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info } from "lucide-react";

const slug = "brussels-airlines-risarcimento";
const title = "Brussels Airlines: Risarcimento Voli 2026 — CE 261/2004 guida completa";
const description = "Volo Brussels Airlines in ritardo o cancellato? CE 261/2004, €250–€600, hub Bruxelles BRU, rotte Africa, codeshare Lufthansa Group, DGNB vs ENAC. Guida completa.";
const publishDate = "2026-03-19";

const faqData = [
  {
    question: "Quanto risarcimento spetta per un volo Brussels Airlines cancellato?",
    answer: "€250 per rotte ≤1500 km (es. Bruxelles–Roma), €400 per 1500–3500 km (es. BRU–Istanbul), €600 per rotte >3500 km come BRU–Kinshasa, BRU–Nairobi o BRU–New York."
  },
  {
    question: "Brussels Airlines è soggetta al CE 261/2004?",
    answer: "Sì. Brussels Airlines (SN) è un vettore belga con AOC belga, soggetto al CE 261/2004 per tutti i voli in partenza da aeroporti UE e per i voli da paesi extra-UE operati da un vettore europeo verso l'UE."
  },
  {
    question: "Brussels Airlines fa parte di Lufthansa Group — cambia qualcosa?",
    answer: "Lufthansa Group possiede Brussels Airlines, ma ogni compagnia del gruppo mantiene il proprio AOC nazionale. I tuoi diritti CE 261 si esercitano contro Brussels Airlines (non contro Lufthansa), se il vettore operativo è SN."
  },
  {
    question: "Cosa succede se perdo una coincidenza a Bruxelles per colpa di Brussels Airlines?",
    answer: "Se hai una prenotazione unica (stesso PNR) e il ritardo su un tratto causa la perdita del successivo, il ritardo si calcola all'arrivo alla destinazione finale. Se superi 3 ore, hai diritto al risarcimento completo sulla distanza totale."
  },
  {
    question: "Brussels Airlines ha ritardato il mio volo per Africa — posso ottenere €600?",
    answer: "Sì, se il volo copre più di 3500 km (es. BRU–Kinshasa: ~6.700 km, BRU–Nairobi: ~6.600 km, BRU–Accra: ~5.100 km) e sei arrivato con oltre 3 ore di ritardo, hai diritto a €600 di risarcimento."
  },
  {
    question: "Qual è l'autorità di vigilanza per reclami Brussels Airlines?",
    answer: "Se il volo partiva dal Belgio: DGNB (Direction Générale Transport Aérien / Directie Luchtvaart). Se partiva dall'Italia: ENAC. Entrambe possono ricevere reclami e imporre sanzioni a Brussels Airlines."
  },
  {
    question: "Brussels Airlines non risponde al mio reclamo. Quanto devo aspettare?",
    answer: "Brussels Airlines ha l'obbligo di rispondere entro 6 settimane. Trascorso questo periodo senza risposta o con rifiuto ingiustificato, puoi rivolgerti alla DGNB, all'ENAC o affidare il caso a ClaimWinger che agisce per via legale."
  }
];

export default function BrusselsAirlinesRisarcimento() {
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

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
          <li className="mx-1">/</li>
          <li><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
          <li className="mx-1">/</li>
          <li className="text-gray-700 font-medium">Brussels Airlines Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Compagnie Aeree</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 7 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Brussels Airlines: Risarcimento Voli 2026 — CE 261/2004 guida completa
          </h1>
          <p className="text-lg text-gray-600">
            Brussels Airlines (SN) è il principale vettore belga e opera il più ampio network di voli verso l'Africa subsahariana in Europa. Se il tuo volo ha subito ritardo, cancellazione o overbooking, hai diritto fino a <strong>€600 di risarcimento</strong> ai sensi del CE 261/2004.
          </p>
        </header>

        {/* CTA 1 */}
        <div className="bg-blue-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Brussels Airlines in ritardo o cancellato?</p>
            <p className="text-blue-100 text-sm">Verifica gratuitamente il tuo diritto al risarcimento. ClaimWinger trattiene solo il <strong>30%</strong> se vinci — zero rischi.</p>
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

        {/* Chi è Brussels Airlines */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-600" /> Chi è Brussels Airlines
          </h2>
          <p className="text-gray-700 mb-4">
            Brussels Airlines S.A./N.V. (codice IATA: <strong>SN</strong>, codice ICAO: BEL) è la compagnia di bandiera belga, fondata nel 2006 come fusione tra SN Brussels Airlines e Virgin Express. Ha sede all'aeroporto internazionale di Bruxelles (BRU) ed è di proprietà di <strong>Lufthansa Group</strong> dal 2017.
          </p>
          <p className="text-gray-700 mb-4">
            Brussels Airlines è nota per il suo <strong>network africano unico in Europa</strong>: opera verso oltre 20 destinazioni in Africa subsahariana incluse Kinshasa (DRC), Nairobi, Accra, Lagos, Abidjan, Dakar, Douala, Lomé e molte altre. Questo la rende la scelta principale per la diaspora africana in Europa.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-blue-800 text-sm font-medium flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Per i passeggeri italiani, la rotta tipica è <strong>Roma/Milano → Bruxelles BRU → Africa</strong>. Tutti questi voli &gt;3.500 km qualificano per €600 di risarcimento in caso di ritardo ≥3h.</span>
            </p>
          </div>
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
                  <th className="text-left px-4 py-3 rounded-tr-lg">Esempi Brussels Airlines</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">≤ 1.500 km</td>
                  <td className="px-4 py-3 font-bold text-green-700">€ 250</td>
                  <td className="px-4 py-3 text-gray-600">BRU–Roma FCO (~1.170 km), BRU–Londra</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">1.500–3.500 km</td>
                  <td className="px-4 py-3 font-bold text-yellow-700">€ 400</td>
                  <td className="px-4 py-3 text-gray-600">BRU–Istanbul, BRU–Cairo, BRU–Casablanca</td>
                </tr>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">&gt; 3.500 km (ritardo ≥4h)</td>
                  <td className="px-4 py-3 font-bold text-red-700">€ 600</td>
                  <td className="px-4 py-3 text-gray-600">BRU–Kinshasa, BRU–Nairobi, BRU–New York, BRU–Lagos</td>
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

        {/* Network Africa */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-600" /> Il network africano: €600 garantiti
          </h2>
          <p className="text-gray-700 mb-4">
            Tutte le rotte africane di Brussels Airlines superano i 3.500 km, quindi qualificano automaticamente per il risarcimento massimo di €600 in caso di ritardo ≥3h o cancellazione.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-4 py-3">Destinazione Africa</th>
                  <th className="text-left px-4 py-3">Codice</th>
                  <th className="text-left px-4 py-3">Distanza approx.</th>
                  <th className="text-left px-4 py-3">Risarcimento</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kinshasa (Congo)", "BRU–FIH", "~6.700 km", "€600"],
                  ["Nairobi (Kenya)", "BRU–NBO", "~6.600 km", "€600"],
                  ["Lagos (Nigeria)", "BRU–LOS", "~5.100 km", "€600"],
                  ["Accra (Ghana)", "BRU–ACC", "~5.100 km", "€600"],
                  ["Abidjan (Costa d'Avorio)", "BRU–ABJ", "~4.900 km", "€600"],
                  ["Dakar (Senegal)", "BRU–DKR", "~4.500 km", "€600"],
                  ["Douala (Camerun)", "BRU–DLA", "~5.500 km", "€600"],
                  ["Lomé (Togo)", "BRU–LFW", "~5.200 km", "€600"],
                  ["Conakry (Guinea)", "BRU–CKY", "~4.600 km", "€600"],
                  ["Freetown (Sierra Leone)", "BRU–FNA", "~4.800 km", "€600"],
                  ["New York JFK (USA)", "BRU–JFK", "~5.900 km", "€600"],
                  ["Washington Dulles", "BRU–IAD", "~6.100 km", "€600"],
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

        {/* Codeshare Lufthansa Group */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" /> Codeshare Lufthansa Group
          </h2>
          <p className="text-gray-700 mb-4">
            Brussels Airlines fa parte di Lufthansa Group con Lufthansa (LH), Swiss (LX), Austrian (OS) e Eurowings (EW). Molti voli SN hanno codeshare con LH o altri partner. La regola fondamentale per il CE 261:
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 font-medium flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Il reclamo va al vettore operativo</strong> (quello che fa volare fisicamente l'aereo), non al vettore marketing che ha venduto il biglietto.</span>
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left px-4 py-3">Biglietto venduto da</th>
                  <th className="text-left px-4 py-3">Vettore operativo</th>
                  <th className="text-left px-4 py-3">Reclamo CE 261 contro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3">Lufthansa (LH)</td>
                  <td className="px-4 py-3">Brussels Airlines (SN)</td>
                  <td className="px-4 py-3 font-medium text-blue-700">Brussels Airlines</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-4 py-3">Swiss (LX)</td>
                  <td className="px-4 py-3">Brussels Airlines (SN)</td>
                  <td className="px-4 py-3 font-medium text-blue-700">Brussels Airlines</td>
                </tr>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3">Brussels Airlines (SN)</td>
                  <td className="px-4 py-3">Brussels Airlines (SN)</td>
                  <td className="px-4 py-3 font-medium text-blue-700">Brussels Airlines</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Brussels Airlines (SN)</td>
                  <td className="px-4 py-3">Lufthansa (LH)</td>
                  <td className="px-4 py-3 font-medium text-orange-700">Lufthansa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie: cosa vale e cosa no
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON sono straordinarie (hai diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasti tecnici dell'aereo (manutenzione di routine)</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale Brussels Airlines</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi per rotazione aerei (volo precedente in ritardo)</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking (sempre responsabilità della compagnia)</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Problemi software/sistemi prenotazione</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo per eruzioni vulcaniche</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Condizioni meteo eccezionali (tempeste severe)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC (controllo traffico aereo)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Instabilità politica/chiusura aeroporto destinazione in Africa</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Minacce alla sicurezza (allarme bomba verificato)</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <p className="text-blue-800 text-sm flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Nota specifica rotte Africa:</strong> Brussels Airlines a volte invoca instabilità locale o chiusura aeroporti africani come circostanza straordinaria. È fondamentale che la compagnia fornisca prova documentale (NOTAM, comunicato autorità aeronautiche locali). Una semplice affermazione non è sufficiente.</span>
            </p>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" /> Come fare reclamo a Brussels Airlines
          </h2>
          <ol className="space-y-3 mb-4">
            {[
              { step: "1", title: "Documenta tutto immediatamente", text: "Conserva la carta d'imbarco, l'itinerario, messaggi SMS/email di notifica, ricevute per spese extra (cibo, hotel, trasporti). Per rotte africane, chiedi anche il numero del volo di sostituzione se sei stato riprotetto." },
              { step: "2", title: "Invia reclamo scritto a Brussels Airlines", text: "Usa il modulo reclami sul sito Brussels Airlines (brusselsairlines.com). Indica: numero volo, data, aeroporto partenza/arrivo, orario previsto vs effettivo, importo richiesto (€250/400/600) e base legale CE 261/2004." },
              { step: "3", title: "Attendi risposta (max 6 settimane)", text: "Brussels Airlines ha l'obbligo di rispondere entro 6 settimane. Molti passeggeri riportano risposte entro 3-4 settimane, ma con rifiuti sistematici per rotte africane." },
              { step: "4", title: "Escalation DGNB o ENAC", text: "Volo da Bruxelles → reclamo alla DGNB (Direction Générale Transport Aérien). Volo dall'Italia → ENAC. Entrambe possono aprire un procedimento contro la compagnia." },
              { step: "5", title: "Affida il caso a ClaimWinger", text: "ClaimWinger conosce le tattiche difensive di Brussels Airlines sulle rotte africane e gestisce tutto legalmente. Commissione 30% solo al successo, senza costi anticipati." }
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

        {/* Autorità competenti */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" /> Autorità di vigilanza competenti
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-800 mb-2">DGNB — Belgio</h3>
              <p className="text-blue-700 text-sm mb-2">Competente per voli in partenza da aeroporti belgi (incluso Bruxelles BRU). Accetta reclami online in francese, olandese o inglese.</p>
              <p className="text-blue-600 text-xs">mobilit.belgium.be — Portale reclami</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">ENAC — Italia</h3>
              <p className="text-green-700 text-sm mb-2">Competente per voli in partenza dall'Italia operati da vettori UE come Brussels Airlines.</p>
              <p className="text-green-600 text-xs">enac.gov.it — Sportello reclami passeggeri</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Brussels Airlines cancellato o in ritardo verso l'Africa?</p>
            <p className="text-blue-100 text-sm">Hai diritto a €600 di risarcimento. ClaimWinger gestisce tutto senza costi anticipati — commissione 30% solo al successo.</p>
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
            <FileText className="w-6 h-6 text-blue-600" /> Domande frequenti su Brussels Airlines e CE 261/2004
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

        {/* Related articles */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Articoli correlati</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "aeroporto-amsterdam-risarcimento", title: "Aeroporto Amsterdam AMS: Risarcimento Voli 2026" },
              { slug: "aeroporto-francoforte-risarcimento", title: "Aeroporto Francoforte FRA: Risarcimento Voli 2026" },
              { slug: "sas-scandinavian-airlines-risarcimento", title: "SAS Scandinavian Airlines: Risarcimento Voli 2026" },
            ].map(a => (
              <Link
                key={a.slug}
                href={`/it/blog/${a.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-blue-300 group"
              >
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
