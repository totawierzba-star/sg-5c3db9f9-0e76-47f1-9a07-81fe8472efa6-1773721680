import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info } from "lucide-react";

const slug = "air-europa-risarcimento";
const title = "Air Europa: Risarcimento Voli 2026 — CE 261/2004 guida completa";
const description = "Volo Air Europa in ritardo o cancellato? CE 261/2004, €250–€600, hub Madrid MAD, coincidenze Sudamerica, codeshare IAG, AESA vs ENAC. Tutto quello che devi sapere.";
const publishDate = "2026-03-19";

const faqData = [
  {
    question: "Quanto risarcimento spetta per un volo Air Europa cancellato?",
    answer: "€250 per rotte ≤1500 km (destinazioni europee brevi), €400 per 1500–3500 km (Europa medio-lungo raggio), €600 per rotte >3500 km come Madrid-Buenos Aires, Madrid-Bogotá o Caracas."
  },
  {
    question: "Air Europa è soggetta al CE 261/2004?",
    answer: "Sì. Air Europa (UX/AEA) è una compagnia spagnola basata a Madrid MAD, quindi soggetta al regolamento europeo per tutti i voli da/verso aeroporti UE e per i voli in partenza da paesi extra-UE operati da un vettore europeo."
  },
  {
    question: "Il codeshare con Iberia o British Airways cambia i miei diritti?",
    answer: "No. Conta il vettore operativo (chi fa volare l'aereo). Se sul tuo biglietto c'è il codice UX (Air Europa) come vettore operativo, i tuoi diritti valgono contro Air Europa, anche se hai acquistato con un codice IB o BA."
  },
  {
    question: "Air Europa è entrata in IAG — cosa cambia per i passeggeri?",
    answer: "Nel 2025 IAG ha completato l'acquisizione di Air Europa. Operativamente Air Europa mantiene il proprio certificato di operatore aereo (AOC) spagnolo, quindi i tuoi diritti CE 261 rimangono invariati. Cambia solo la struttura societaria."
  },
  {
    question: "Cosa succede se perdo il collegamento a Madrid per colpa di Air Europa?",
    answer: "Se hai una prenotazione unica (stesso PNR) e perdi il volo in connessione, il ritardo si conta all'arrivo finale. Se arrivi alla destinazione finale con oltre 3 ore di ritardo, hai diritto al risarcimento calcolato sulla distanza totale del percorso."
  },
  {
    question: "Air Europa ha risposto negativamente al mio reclamo. Cosa faccio?",
    answer: "Puoi rivolgerti all'AESA (Agencia Estatal de Seguridad Aérea) se il volo partiva dalla Spagna, oppure all'ENAC se partiva dall'Italia. In alternativa, un servizio specializzato come ClaimWinger gestisce il reclamo per te senza costi anticipati."
  },
  {
    question: "Qual è il termine per presentare reclamo a Air Europa?",
    answer: "Il termine varia per paese: 2 anni in Spagna (legge di prescrizione generale), 2 anni in Italia. Tuttavia è sempre meglio agire entro 12 mesi dall'evento per avere documentazione fresca e maggiori probabilità di successo."
  }
];

export default function AirEuropaRisarcimento() {
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
          <li className="text-gray-700 font-medium">Air Europa Risarcimento</li>
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
            Air Europa: Risarcimento Voli 2026 — CE 261/2004 guida completa
          </h1>
          <p className="text-lg text-gray-600">
            Air Europa (UX) collega l'Italia all'America Latina via Madrid. Se il tuo volo ha subito ritardo, cancellazione o overbooking, il regolamento CE 261/2004 ti garantisce fino a <strong>€600 di risarcimento</strong>. Ecco tutto quello che devi sapere.
          </p>
        </header>

        {/* CTA 1 */}
        <div className="bg-blue-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Air Europa in ritardo o cancellato?</p>
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

        {/* Chi è Air Europa */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-600" /> Chi è Air Europa
          </h2>
          <p className="text-gray-700 mb-4">
            Air Europa Líneas Aéreas S.A.U. (codice IATA: <strong>UX</strong>, codice ICAO: AEA) è una compagnia aerea spagnola fondata nel 1984 e con sede operativa all'aeroporto di Madrid-Barajas (MAD). È il terzo vettore spagnolo per dimensioni dopo Iberia e Vueling.
          </p>
          <p className="text-gray-700 mb-4">
            Nel 2025 <strong>IAG</strong> (International Airlines Group, il gruppo di British Airways e Iberia) ha completato l'acquisizione di Air Europa. Nonostante l'integrazione nel gruppo IAG, Air Europa mantiene il proprio <strong>Certificato di Operatore Aereo (AOC) spagnolo</strong> e opera con il proprio codice UX. Questo significa che i tuoi diritti CE 261/2004 si esercitano direttamente contro Air Europa.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-blue-800 text-sm font-medium flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Air Europa è il principale vettore per i collegamenti Italia-America Latina via Madrid. Molti italiani viaggiano con Alitalia/ITA o con Iberia per raggiungere MAD e poi proseguono con Air Europa verso Buenos Aires, Bogotá, Lima o Cancun.</span>
            </p>
          </div>
        </section>

        {/* Importi CE 261 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-blue-600" /> Importi risarcimento CE 261/2004
          </h2>
          <p className="text-gray-700 mb-4">
            Il regolamento CE 261/2004 stabilisce importi fissi in base alla distanza della rotta:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Distanza rotta</th>
                  <th className="text-left px-4 py-3">Risarcimento</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg">Esempi Air Europa</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">≤ 1.500 km</td>
                  <td className="px-4 py-3 font-bold text-green-700">€ 250</td>
                  <td className="px-4 py-3 text-gray-600">Roma–Madrid (voli charter/interni)</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">1.500–3.500 km</td>
                  <td className="px-4 py-3 font-bold text-yellow-700">€ 400</td>
                  <td className="px-4 py-3 text-gray-600">Madrid–Canarie, MAD–Marrakech</td>
                </tr>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">&gt; 3.500 km (ritardo ≥4h)</td>
                  <td className="px-4 py-3 font-bold text-red-700">€ 600</td>
                  <td className="px-4 py-3 text-gray-600">MAD–Buenos Aires, MAD–Bogotá, MAD–Lima, MAD–Cancun, MAD–Havana, MAD–Miami, MAD–NYC</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">&gt; 3.500 km (ritardo 3–4h)</td>
                  <td className="px-4 py-3 font-bold text-orange-700">€ 300</td>
                  <td className="px-4 py-3 text-gray-600">Stesse rotte, riduzione 50% per ritardo 3–4h</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm">
            La riduzione del 50% si applica alle rotte &gt;3.500 km quando la compagnia ti offre un volo alternativo che arriva entro 4 ore dall'orario originale.
          </p>
        </section>

        {/* Hub Madrid e rotte Sudamerica */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-600" /> Hub di Madrid e rotte verso l'America Latina
          </h2>
          <p className="text-gray-700 mb-4">
            Air Europa opera da Madrid MAD (Terminal 1) con un network focalizzato sull'America Latina, le Canarie e alcune destinazioni europee. Per i passeggeri italiani, la situazione più comune è il <strong>volo in connessione tramite MAD</strong>: si arriva da Roma, Milano, Venezia o altri scali italiani e si prosegue con Air Europa verso il continente americano.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Principali rotte intercontinentali Air Europa</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-4 py-3">Destinazione</th>
                  <th className="text-left px-4 py-3">Codice</th>
                  <th className="text-left px-4 py-3">Distanza (km)</th>
                  <th className="text-left px-4 py-3">Risarcimento max</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Buenos Aires EZE", "MAD–EZE", "10.048", "€600"],
                  ["Bogotá", "MAD–BOG", "8.538", "€600"],
                  ["Lima", "MAD–LIM", "10.198", "€600"],
                  ["São Paulo GRU", "MAD–GRU", "9.467", "€600"],
                  ["Caracas", "MAD–CCS", "7.567", "€600"],
                  ["Ciudad de México", "MAD–MEX", "9.091", "€600"],
                  ["Cancun", "MAD–CUN", "8.785", "€600"],
                  ["Miami", "MAD–MIA", "8.080", "€600"],
                  ["New York JFK", "MAD–JFK", "5.769", "€600"],
                  ["Havana", "MAD–HAV", "8.528", "€600"],
                  ["Santiago del Cile", "MAD–SCL", "11.646", "€600"],
                  ["Guayaquil", "MAD–GYE", "9.500", "€600"],
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
          <p className="text-gray-600 text-sm">
            Tutte le rotte intercontinentali Air Europa superano abbondantemente la soglia dei 3.500 km, quindi in caso di ritardo ≥3h all'arrivo finale il risarcimento è sempre €600.
          </p>
        </section>

        {/* Codeshare IAG */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" /> Codeshare IAG: chi è il vettore responsabile?
          </h2>
          <p className="text-gray-700 mb-4">
            Dal 2025, Air Europa è parte di IAG insieme a Iberia (IB), British Airways (BA), Vueling (VY) e Aer Lingus (EI). Questo crea potenziale confusione sui voli in codeshare. La regola è semplice:
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 font-medium mb-2 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Il vettore responsabile CE 261 è sempre il <strong>vettore operativo</strong> — cioè quello che fa fisicamente volare l'aereo — non il vettore marketing che vende il biglietto.</span>
            </p>
          </div>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left px-4 py-3">Biglietto emesso da</th>
                  <th className="text-left px-4 py-3">Vettore operativo</th>
                  <th className="text-left px-4 py-3">Reclamo CE 261 contro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3">Iberia (IB)</td>
                  <td className="px-4 py-3">Air Europa (UX)</td>
                  <td className="px-4 py-3 font-medium text-blue-700">Air Europa</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-4 py-3">British Airways (BA)</td>
                  <td className="px-4 py-3">Air Europa (UX)</td>
                  <td className="px-4 py-3 font-medium text-blue-700">Air Europa</td>
                </tr>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3">Air Europa (UX)</td>
                  <td className="px-4 py-3">Air Europa (UX)</td>
                  <td className="px-4 py-3 font-medium text-blue-700">Air Europa</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Air Europa (UX)</td>
                  <td className="px-4 py-3">Iberia (IB)</td>
                  <td className="px-4 py-3 font-medium text-orange-700">Iberia</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm">
            Controlla sempre il <strong>codice volo sul tuo biglietto</strong>: se inizia con UX è Air Europa. Se IB, è Iberia. Se BA, è British Airways. L'emissione del ticket da parte di un'altra compagnia del gruppo non cambia il vettore operativo.
          </p>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie: cosa vale e cosa no
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON sono straordinarie</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Problemi tecnici all'aereo (manutenzione ordinaria)</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale Air Europa</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto elettronico ai sistemi di bordo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking (sempre responsabilità della compagnia)</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi del volo precedente (rotazione)</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Problemi a terra a Madrid MAD</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo per eruzione vulcanica</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Condizioni meteo eccezionali e imprevedibili</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC (controllo traffico aereo)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Rischio di sicurezza (allarme bomba, minacce)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Passeggero che crea emergenza medica a bordo</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            Air Europa deve dimostrare con prove documentali che la causa rientra nelle circostanze straordinarie. La semplice dichiarazione "meteo avverso" non è sufficiente — serve il METAR ufficiale o l'ordinanza ATC.
          </p>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" /> Come fare reclamo ad Air Europa
          </h2>
          <p className="text-gray-700 mb-4">
            Air Europa ha un ufficio reclami dedicato sul sito web (modulo online) e accetta reclami anche via email e PEC. Tuttavia, molti passeggeri riportano tempi di risposta di <strong>4–10 settimane</strong> e rifiuti iniziali sistematici.
          </p>
          <ol className="space-y-3 mb-4">
            {[
              { step: "1", title: "Raccogli la documentazione", text: "Carta d'imbarco, prenotazione/itinerario, numero volo e data, messaggi di notifica della compagnia, ricevute spese sostenute (pasti, hotel, trasporti)." },
              { step: "2", title: "Invia reclamo formale ad Air Europa", text: "Usa il modulo online sul sito Air Europa oppure invia email a servicioalcliente@air-europa.com. Specifica il numero volo, la data, l'importo richiesto e il riferimento CE 261/2004." },
              { step: "3", title: "Attendi la risposta (massimo 6 settimane)", text: "Air Europa ha l'obbligo di rispondere entro 6 settimane. Se non risponde o rifiuta ingiustificatamente, puoi procedere con l'autorità di regolazione." },
              { step: "4", title: "Escalation all'AESA o ENAC", text: "Se il volo partiva dalla Spagna: AESA (Agencia Estatal de Seguridad Aérea). Se partiva dall'Italia: ENAC. Entrambe possono emettere ordinanze vincolanti." },
              { step: "5", title: "Affida il caso a ClaimWinger", text: "ClaimWinger gestisce l'intero processo legale per te, senza costi anticipati. Commissione del 30% solo in caso di successo." }
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
              <h3 className="font-bold text-blue-800 mb-2">AESA — Spagna</h3>
              <p className="text-blue-700 text-sm mb-2">Competente per voli in partenza da aeroporti spagnoli (incluso Madrid MAD).</p>
              <p className="text-blue-600 text-xs">aesa.gob.es — Reclami online disponibili</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">ENAC — Italia</h3>
              <p className="text-green-700 text-sm mb-2">Competente per voli in partenza da aeroporti italiani operati da vettori UE.</p>
              <p className="text-green-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            Per i passeggeri italiani che volano Roma–Madrid–Buenos Aires, la prima tratta (ROma–MAD) è spesso Iberia o ITA Airways, mentre la seconda (MAD–EZE) è Air Europa. In caso di problemi su MAD–EZE, l'autorità competente è <strong>AESA</strong>.
          </p>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Hai perso un volo Air Europa o sei arrivato tardi?</p>
            <p className="text-blue-100 text-sm">Scopri in 2 minuti quanto puoi ottenere. ClaimWinger gestisce tutto — commissione solo al successo (30%).</p>
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
            <FileText className="w-6 h-6 text-blue-600" /> Domande frequenti su Air Europa e CE 261/2004
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
              { slug: "aeroporto-madrid-risarcimento", title: "Aeroporto Madrid MAD: Risarcimento Voli 2026", color: "red" },
              { slug: "aeroporto-barcellona-risarcimento", title: "Aeroporto Barcellona BCN: Risarcimento Voli 2026", color: "blue" },
              { slug: "iberia-risarcimento", title: "Iberia: Risarcimento Voli 2026 — CE 261/2004", color: "orange" },
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
