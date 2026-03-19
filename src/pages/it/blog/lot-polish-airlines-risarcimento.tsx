import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info } from "lucide-react";

const slug = "lot-polish-airlines-risarcimento";
const title = "LOT Polish Airlines: Risarcimento Voli 2026 — CE 261/2004 guida completa";
const description = "Volo LOT Polish Airlines in ritardo o cancellato? CE 261/2004, €250–€600, hub Varsavia WAW, rotte Asia e Nord America, ULC vs ENAC. Guida completa 2026.";
const publishDate = "2026-03-19";

const faqData = [
  {
    question: "Quanto risarcimento spetta per un volo LOT cancellato?",
    answer: "€250 per rotte ≤1500 km (es. Varsavia–Roma ~1.530 km, borderline), €400 per 1500–3500 km (es. WAW–Istanbul, WAW–Tel Aviv), €600 per rotte >3500 km come WAW–New York, WAW–Chicago, WAW–Tokyo o WAW–Pechino."
  },
  {
    question: "LOT Polish Airlines è soggetta al CE 261/2004?",
    answer: "Sì. LOT (Polskie Linie Lotnicze LOT S.A., codice LO) è una compagnia aerea polacca con AOC polacco. La Polonia è membro dell'UE, quindi CE 261/2004 si applica a tutti i voli LOT in partenza da aeroporti UE."
  },
  {
    question: "La neve o il ghiaccio a Varsavia danno diritto al risarcimento?",
    answer: "Dipende. LOT opera a Varsavia WAW, dove neve e ghiaccio sono fenomeni stagionali ordinari che la compagnia deve essere preparata a gestire. Se l'aeroporto ha operato normalmente e solo il volo LOT è in ritardo, molto probabilmente si tratta di problemi tecnici o operativi della compagnia, non circostanze straordinarie. Il freddo invernale a Varsavia non è imprevedibile."
  },
  {
    question: "Cosa succede se perdo la coincidenza a Varsavia per colpa di LOT?",
    answer: "Se hai una prenotazione unica (stesso PNR) e il ritardo fa perdere il volo successivo, il ritardo si calcola all'arrivo finale. Per rotte tipo Roma–Varsavia–New York, il risarcimento massimo è €600 se arrivi a New York con oltre 3 ore di ritardo."
  },
  {
    question: "LOT ha rifiutato il mio reclamo. Dove mi rivolgo?",
    answer: "Se il volo partiva dalla Polonia: ULC (Urząd Lotnictwa Cywilnego, Autorità dell'Aviazione Civile polacca). Se partiva dall'Italia: ENAC. Puoi anche affidarti a ClaimWinger che conosce le tattiche di LOT e gestisce il tutto legalmente."
  },
  {
    question: "LOT è parte del gruppo Lufthansa?",
    answer: "No. LOT Polish Airlines è una compagnia indipendente di proprietà statale polacca. Non fa parte di Lufthansa Group, IAG o Air France-KLM. Ha accordi di codeshare con vari vettori ma mantiene piena autonomia operativa."
  },
  {
    question: "Qual è il termine per presentare reclamo a LOT?",
    answer: "In Polonia il termine di prescrizione per reclami CE 261 è 3 anni. In Italia è 2 anni. È comunque consigliabile agire entro 12 mesi per avere documentazione completa e maggiori probabilità di risposta positiva."
  }
];

export default function LotPolishAirlinesRisarcimento() {
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
          <li className="text-gray-700 font-medium">LOT Polish Airlines Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">Compagnie Aeree</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 7 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            LOT Polish Airlines: Risarcimento Voli 2026 — CE 261/2004 guida completa
          </h1>
          <p className="text-lg text-gray-600">
            LOT Polish Airlines (LO) è la compagnia di bandiera polacca e uno dei principali vettori dell'Europa centrale. Collega l'Italia con la Polonia e, via Varsavia, con il Nord America e l'Asia. Se il tuo volo è in ritardo o è stato cancellato, hai diritto fino a <strong>€600 di risarcimento</strong> ai sensi del CE 261/2004.
          </p>
        </header>

        {/* CTA 1 */}
        <div className="bg-red-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo LOT Polish Airlines in ritardo o cancellato?</p>
            <p className="text-red-100 text-sm">Verifica gratuitamente il tuo diritto al risarcimento. ClaimWinger trattiene solo il <strong>30%</strong> se vinci — zero rischi.</p>
          </div>
          <a
            href={`https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-red-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Verifica ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Chi è LOT */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-red-600" /> Chi è LOT Polish Airlines
          </h2>
          <p className="text-gray-700 mb-4">
            Polskie Linie Lotnicze LOT S.A. (codice IATA: <strong>LO</strong>, codice ICAO: LOT) è la compagnia di bandiera polacca, fondata nel 1929 e tra le compagnie aeree più antiche d'Europa ancora operative. La sede è a Varsavia, con hub principale all'<strong>Aeroporto Chopina di Varsavia (WAW)</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            LOT è una compagnia <strong>di proprietà statale polacca</strong>, indipendente da tutti i grandi gruppi europei (non è membro di Lufthansa Group, IAG o Air France-KLM). È membro dell'alleanza <strong>Star Alliance</strong> insieme a Lufthansa, Swiss, Austrian, United, Air Canada e altri.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-800 text-sm font-medium flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>LOT opera rotte intercontinentali da Varsavia WAW verso New York JFK/EWR, Chicago ORD, Toronto YYZ, Los Angeles LAX, Tokyo NRT, Seoul ICN, Pechino PEK e Tel Aviv TLV. Tutte queste rotte qualificano per il risarcimento massimo di <strong>€600</strong>.</span>
            </p>
          </div>
        </section>

        {/* Importi CE 261 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-red-600" /> Importi risarcimento CE 261/2004
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Distanza rotta</th>
                  <th className="text-left px-4 py-3">Risarcimento</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg">Esempi LOT Polish Airlines</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">≤ 1.500 km</td>
                  <td className="px-4 py-3 font-bold text-green-700">€ 250</td>
                  <td className="px-4 py-3 text-gray-600">WAW–Vienna, WAW–Praga, rotte domestiche polacche</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">1.500–3.500 km</td>
                  <td className="px-4 py-3 font-bold text-yellow-700">€ 400</td>
                  <td className="px-4 py-3 text-gray-600">WAW–Roma (~1.530 km, verifica), WAW–Istanbul, WAW–Tel Aviv, WAW–Londra</td>
                </tr>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">&gt; 3.500 km (ritardo ≥4h)</td>
                  <td className="px-4 py-3 font-bold text-red-700">€ 600</td>
                  <td className="px-4 py-3 text-gray-600">WAW–New York, WAW–Chicago, WAW–Tokyo, WAW–Seoul, WAW–Pechino</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">&gt; 3.500 km (ritardo 3–4h)</td>
                  <td className="px-4 py-3 font-bold text-orange-700">€ 300</td>
                  <td className="px-4 py-3 text-gray-600">Stesse rotte, riduzione 50% se riprotezione entro 4h</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-yellow-800 text-sm flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Attenzione Roma–Varsavia:</strong> La rotta FCO–WAW è di circa 1.530 km, al confine tra €250 e €400. La distanza esatta si calcola col metodo della rotta ortodromica (great-circle). In caso di dubbio, hai diritto al beneficio del dubbio — €400.</span>
            </p>
          </div>
        </section>

        {/* Rotte intercontinentali */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-red-600" /> Rotte intercontinentali da Varsavia — €600
          </h2>
          <p className="text-gray-700 mb-4">
            Per i passeggeri italiani che volano tramite Varsavia WAW, tutte le rotte transatlantiche e verso l'Asia qualificano per il risarcimento massimo:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-4 py-3">Destinazione</th>
                  <th className="text-left px-4 py-3">Rotta</th>
                  <th className="text-left px-4 py-3">Distanza</th>
                  <th className="text-left px-4 py-3">Risarcimento</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["New York JFK", "WAW–JFK", "~7.000 km", "€600"],
                  ["New York Newark", "WAW–EWR", "~7.100 km", "€600"],
                  ["Chicago O'Hare", "WAW–ORD", "~7.700 km", "€600"],
                  ["Los Angeles", "WAW–LAX", "~9.600 km", "€600"],
                  ["Toronto", "WAW–YYZ", "~7.400 km", "€600"],
                  ["Tokyo Narita", "WAW–NRT", "~8.900 km", "€600"],
                  ["Seoul Incheon", "WAW–ICN", "~8.400 km", "€600"],
                  ["Pechino", "WAW–PEK", "~7.200 km", "€600"],
                  ["Tel Aviv", "WAW–TLV", "~2.600 km", "€400"],
                ].map(([dest, route, dist, comp]) => (
                  <tr key={route} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium">{dest}</td>
                    <td className="px-4 py-2 text-gray-600">{route}</td>
                    <td className="px-4 py-2 text-gray-600">{dist}</td>
                    <td className={`px-4 py-2 font-bold ${comp === "€600" ? "text-red-700" : "text-yellow-700"}`}>{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Neve a Varsavia — non è straordinaria */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> La neve a Varsavia non è una circostanza straordinaria
          </h2>
          <p className="text-gray-700 mb-4">
            LOT invoca spesso le condizioni meteo invernali (neve, ghiaccio, nebbia) come causa di forza maggiore. Tuttavia, la giurisprudenza europea è chiara:
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-800 font-medium mb-2">Un vettore che opera a Varsavia in inverno deve essere preparato alla neve</p>
            <p className="text-red-700 text-sm">
              Varsavia ha inverni rigidi prevedibili ogni anno. Se LOT non dispone di attrezzature adeguate per de-icing, personale addestrato o procedure di contingency, non può invocare le condizioni meteo stagionali come "circostanza straordinaria imprevedibile". La giurisprudenza della Corte di Giustizia UE (sentenza van der Lans, C-257/14) stabilisce che solo eventi tecnici <em>al di fuori del controllo normale del vettore</em> esonerano dalla responsabilità.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (hai diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Neve stagionale ordinaria a Varsavia</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all'aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale LOT</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi per rotazione aerei</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Tormenta eccezionale fuori stagione</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo per emergenze</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero controllori ATC</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Eruzioni vulcaniche che bloccano le rotte</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-red-600" /> Come fare reclamo a LOT Polish Airlines
          </h2>
          <ol className="space-y-3 mb-4">
            {[
              { step: "1", title: "Raccogli la documentazione", text: "Carta d'imbarco, prenotazione, email/SMS di notifica del ritardo o cancellazione, ricevute spese extra (cibo, hotel, taxi), boarding pass del volo sostitutivo se riprotetto." },
              { step: "2", title: "Invia reclamo scritto a LOT", text: "Usa il modulo reclami online su lot.com oppure scrivi all'ufficio reclami indicando: numero volo (es. LO386), data, aeroporto, ritardo in minuti, importo richiesto (€250/400/600) e riferimento CE 261/2004." },
              { step: "3", title: "Attendi 30 giorni lavorativi", text: "LOT ha l'obbligo di rispondere. I tempi reali variano tra 4 e 8 settimane. Conserva il numero di protocollo del reclamo." },
              { step: "4", title: "Escalation ULC o ENAC", text: "Volo da Polonia: ULC (Urząd Lotnictwa Cywilnego) — ulc.gov.pl. Volo dall'Italia: ENAC — enac.gov.it. Entrambe possono intervenire e sanzionare LOT." },
              { step: "5", title: "Affida il caso a ClaimWinger", text: "ClaimWinger conosce le procedure polacche e gestisce il reclamo per te senza anticipo. Commissione del 30% solo in caso di successo." }
            ].map(item => (
              <li key={item.step} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                <span className="bg-red-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
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
            <Info className="w-6 h-6 text-red-600" /> Autorità di vigilanza competenti
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">ULC — Polonia</h3>
              <p className="text-red-700 text-sm mb-2">Urząd Lotnictwa Cywilnego — Autorità Aviazione Civile polacca. Competente per voli in partenza dalla Polonia.</p>
              <p className="text-red-600 text-xs">ulc.gov.pl — Reclami online disponibili in polacco e inglese</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">ENAC — Italia</h3>
              <p className="text-green-700 text-sm mb-2">Competente per voli in partenza dall'Italia operati da vettori UE come LOT.</p>
              <p className="text-green-600 text-xs">enac.gov.it — Sportello reclami passeggeri</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-red-700 to-red-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo LOT in ritardo verso New York, Tokyo o Chicago?</p>
            <p className="text-red-100 text-sm">Hai diritto a €600 di risarcimento. ClaimWinger gestisce tutto senza costi anticipati — 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-700 font-bold px-6 py-3 rounded-lg hover:bg-red-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Inizia ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-red-600" /> Domande frequenti su LOT Polish Airlines e CE 261/2004
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
              { slug: "sas-scandinavian-airlines-risarcimento", title: "SAS Scandinavian Airlines: Risarcimento Voli 2026" },
              { slug: "finnair-risarcimento", title: "Finnair: Risarcimento Voli 2026 — CE 261/2004" },
              { slug: "brussels-airlines-risarcimento", title: "Brussels Airlines: Risarcimento Voli 2026" },
            ].map(a => (
              <Link
                key={a.slug}
                href={`/it/blog/${a.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-red-300 group"
              >
                <p className="font-semibold text-gray-800 group-hover:text-red-600 text-sm">{a.title}</p>
                <p className="text-red-600 text-xs mt-2 flex items-center gap-1">Leggi <ArrowRight className="w-3 h-3" /></p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}
