import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info } from "lucide-react";

const slug = "condor-risarcimento";
const title = "Condor: Risarcimento Voli 2026 — CE 261/2004 guida completa";
const description = "Volo Condor in ritardo o cancellato? CE 261/2004, €250–€600, hub Francoforte FRA, voli charter verso vacanze, Caraibi e Africa, LBA vs ENAC. Guida completa.";
const publishDate = "2026-03-19";

const faqData = [
  {
    question: "Condor è soggetta al CE 261/2004?",
    answer: "Sì. Condor Flugdienst GmbH (codice DE) è una compagnia aerea tedesca con AOC tedesco. La Germania è membro dell'UE, quindi il CE 261/2004 si applica a tutti i voli Condor in partenza da aeroporti UE."
  },
  {
    question: "Quanto risarcimento spetta per un volo Condor cancellato?",
    answer: "€250 per rotte ≤1500 km, €400 per 1500–3500 km (es. FRA–Canarie), €600 per rotte >3500 km come FRA–Cancun, FRA–Punta Cana, FRA–Mombasa, FRA–Varadero, FRA–Barbados."
  },
  {
    question: "Condor è un vettore charter — vale lo stesso CE 261?",
    answer: "Assolutamente sì. Il CE 261/2004 si applica indifferentemente a voli di linea e voli charter. Non importa se hai prenotato attraverso un tour operator o direttamente con Condor: i tuoi diritti sono identici."
  },
  {
    question: "Condor ha cambiato proprietà — cosa cambia per i passeggeri?",
    answer: "Condor è stata acquisita da Attestor Capital nel 2021 dopo le vicende di insolvenza del gruppo Thomas Cook. Mantiene il proprio AOC tedesco e opera indipendentemente. I diritti CE 261 non cambiano — Condor è comunque responsabile come vettore operativo."
  },
  {
    question: "Ho acquistato il volo Condor tramite un tour operator. Il reclamo va a Condor o al TO?",
    answer: "Il reclamo CE 261 va sempre al vettore operativo (Condor), non al tour operator. Il TO può essere responsabile per altri aspetti del pacchetto vacanze (hotel, trasferimenti) ma il risarcimento per ritardo/cancellazione del volo spetta esclusivamente a Condor."
  },
  {
    question: "Qual è l'autorità di vigilanza per reclami Condor?",
    answer: "Se il volo partiva dalla Germania: LBA (Luftfahrt-Bundesamt). Se partiva dall'Italia: ENAC. Entrambe possono ricevere reclami e imporre sanzioni a Condor."
  },
  {
    question: "Quali documenti servono per fare reclamo a Condor?",
    answer: "Carta d'imbarco, conferma prenotazione o voucher tour operator con il numero volo Condor, prova del ritardo (screenshot app, email della compagnia), ricevute spese sostenute (pasti, hotel extra se necessario)."
  }
];

export default function CondorRisarcimento() {
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
          <li><Link href="/it" className="hover:text-orange-600">Home</Link></li>
          <li className="mx-1">/</li>
          <li><Link href="/it/blog" className="hover:text-orange-600">Blog</Link></li>
          <li className="mx-1">/</li>
          <li className="text-gray-700 font-medium">Condor Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">Compagnie Aeree</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 6 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Condor: Risarcimento Voli 2026 — CE 261/2004 guida completa
          </h1>
          <p className="text-lg text-gray-600">
            Condor (DE) è uno dei principali vettori charter tedeschi, specializzato in destinazioni vacanziere verso i Caraibi, il Mediterraneo e l'Africa. Se il tuo volo Condor è in ritardo o cancellato, il CE 261/2004 ti garantisce fino a <strong>€600 di risarcimento</strong> — anche se hai prenotato tramite un tour operator.
          </p>
        </header>

        {/* CTA 1 */}
        <div className="bg-orange-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Condor in ritardo o cancellato?</p>
            <p className="text-orange-100 text-sm">Verifica gratuitamente il tuo diritto al risarcimento. ClaimWinger trattiene solo il <strong>30%</strong> se vinci — zero rischi.</p>
          </div>
          <a
            href={`https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-orange-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Verifica ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Chi è Condor */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-orange-600" /> Chi è Condor
          </h2>
          <p className="text-gray-700 mb-4">
            Condor Flugdienst GmbH (codice IATA: <strong>DE</strong>, codice ICAO: CFG) è una compagnia aerea tedesca fondata nel 1956, specializzata in voli charter e leisure (vacanzieri). Ha sede a Francoforte e opera principalmente dall'<strong>Aeroporto di Francoforte FRA</strong>, con operazioni anche da Monaco (MUC), Düsseldorf (DUS), Amburgo (HAM) e altri aeroporti tedeschi.
          </p>
          <p className="text-gray-700 mb-4">
            Condor è stata a lungo parte del gruppo Thomas Cook fino al fallimento di quest'ultimo nel 2019. Nel 2021 è stata acquisita da <strong>Attestor Capital</strong> e opera ora in modo indipendente. Nonostante i cambi di proprietà, Condor mantiene il proprio AOC tedesco.
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
            <p className="text-orange-800 text-sm font-medium flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Importante per i passeggeri italiani:</strong> Condor non opera voli di linea dall'Italia. I passeggeri italiani possono incontrare Condor su voli in connessione via Francoforte, oppure su pacchetti vacanza prenotati tramite tour operator tedeschi che includono tratte Condor. In tutti i casi il CE 261/2004 si applica.</span>
            </p>
          </div>
        </section>

        {/* Charter e CE 261 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-orange-600" /> Voli charter: stessi diritti dei voli di linea
          </h2>
          <p className="text-gray-700 mb-4">
            Un malinteso comune è che i voli charter non siano coperti dal CE 261/2004. È sbagliato: il regolamento si applica a <strong>qualsiasi volo in partenza da un aeroporto UE</strong>, indipendentemente dal tipo di volo.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Diritti garantiti per voli Condor
              </h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li>✓ Risarcimento per ritardo ≥3h</li>
                <li>✓ Risarcimento per cancellazione</li>
                <li>✓ Risarcimento per overbooking / negato imbarco</li>
                <li>✓ Assistenza (pasti, hotel) per lunghe attese</li>
                <li>✓ Rimborso biglietto o riprotezione</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-800 mb-2">Chi ha diritto al risarcimento</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>✓ Prenotazione diretta con Condor</li>
                <li>✓ Biglietto acquistato tramite tour operator</li>
                <li>✓ Biglietto acquistato tramite agenzia viaggi</li>
                <li>✓ Passeggeri con biglietto premio (miles)</li>
                <li>✗ Passeggeri con biglietto gratuito (non commerciale)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Importi CE 261 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-orange-600" /> Importi risarcimento CE 261/2004
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Distanza rotta</th>
                  <th className="text-left px-4 py-3">Risarcimento</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg">Esempi Condor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">≤ 1.500 km</td>
                  <td className="px-4 py-3 font-bold text-green-700">€ 250</td>
                  <td className="px-4 py-3 text-gray-600">FRA–Palma di Maiorca, FRA–Ibiza, FRA–Rodi</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">1.500–3.500 km</td>
                  <td className="px-4 py-3 font-bold text-yellow-700">€ 400</td>
                  <td className="px-4 py-3 text-gray-600">FRA–Canarie, FRA–Marocco, FRA–Egitto Hurghada/Sharm</td>
                </tr>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">&gt; 3.500 km (ritardo ≥4h)</td>
                  <td className="px-4 py-3 font-bold text-red-700">€ 600</td>
                  <td className="px-4 py-3 text-gray-600">FRA–Cancun, FRA–Punta Cana, FRA–Mombasa, FRA–Varadero, FRA–Barbados, FRA–Mauritius</td>
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

        {/* Rotte vacanziere principali */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-orange-600" /> Principali destinazioni Condor — €600 di risarcimento
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
                  ["Cancun (Messico)", "FRA–CUN", "~9.000 km", "€600"],
                  ["Punta Cana (Rep. Dom.)", "FRA–PUJ", "~8.600 km", "€600"],
                  ["Varadero (Cuba)", "FRA–VRA", "~8.900 km", "€600"],
                  ["Barbados", "FRA–BGI", "~7.800 km", "€600"],
                  ["Mombasa (Kenya)", "FRA–MBA", "~6.700 km", "€600"],
                  ["Zanzibar (Tanzania)", "FRA–ZNZ", "~6.900 km", "€600"],
                  ["Mauritius", "FRA–MRU", "~9.300 km", "€600"],
                  ["Phuket (Tailandia)", "FRA–HKT", "~9.400 km", "€600"],
                  ["Colombo (Sri Lanka)", "FRA–CMB", "~8.600 km", "€600"],
                  ["Miami (USA)", "FRA–MIA", "~8.700 km", "€600"],
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
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie per voli charter
          </h2>
          <p className="text-gray-700 mb-4">
            Condor, come altri vettori charter, invoca spesso circostanze straordinarie per evitare i risarcimenti. Ecco cosa conta e cosa no:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (hai diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all'aereo (frequente nei charter)</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi per rotazione aerei (es. aereo in ritardo dalla destinazione precedente)</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Problemi di programmazione operativa del vettore</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale Condor</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Uragano o ciclone alla destinazione</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo per emergenze</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Eruzione vulcanica che blocca le rotte</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <p className="text-yellow-800 text-sm flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Attenzione alle stagioni uragani (Caraibi):</strong> La stagione uragani è da giugno a novembre. Se Condor invoca un uragano come circostanza straordinaria, deve essere un evento imprevedibile al momento della prenotazione. Un uragano previsto con 5-7 giorni di anticipo NON è generalmente imprevedibile.</span>
            </p>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-600" /> Come fare reclamo a Condor
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Documenta tutto", text: "Carta d'imbarco Condor (o voucher charter con numero volo DE-XXXX), conferma prenotazione, notifiche SMS/email del ritardo, ricevute per spese extra." },
              { step: "2", title: "Contatta Condor entro 6 mesi", text: "Usa il form reclami online su condor.com. Specifica: numero volo, data, ritardo in ore, importo CE 261 richiesto. Se hai prenotato tramite TO, indica anche il riferimento della prenotazione TO." },
              { step: "3", title: "Attendi la risposta", text: "Condor ha l'obbligo di rispondere. I tempi variano tra 4 e 10 settimane." },
              { step: "4", title: "Escalation LBA o ENAC", text: "Volo da Germania → LBA (Luftfahrt-Bundesamt, lba.de). Volo da Italia → ENAC (enac.gov.it)." },
              { step: "5", title: "Affida a ClaimWinger", text: "ClaimWinger conosce le procedure tedesche e gestisce l'intero iter legale. 30% di commissione solo al successo, senza spese anticipate." }
            ].map(item => (
              <li key={item.step} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                <span className="bg-orange-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
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
            <Info className="w-6 h-6 text-orange-600" /> Autorità di vigilanza competenti
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-bold text-orange-800 mb-2">LBA — Germania</h3>
              <p className="text-orange-700 text-sm mb-2">Luftfahrt-Bundesamt — Ufficio Federale dell'Aviazione. Competente per voli in partenza dalla Germania.</p>
              <p className="text-orange-600 text-xs">lba.de — Reclami passeggeri</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">ENAC — Italia</h3>
              <p className="text-green-700 text-sm mb-2">Competente per voli in partenza dall'Italia operati da vettori UE come Condor.</p>
              <p className="text-green-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-orange-700 to-orange-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Condor cancellato o in forte ritardo per le vacanze?</p>
            <p className="text-orange-100 text-sm">Hai diritto fino a €600. ClaimWinger gestisce tutto — commissione 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-700 font-bold px-6 py-3 rounded-lg hover:bg-orange-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Inizia ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-600" /> Domande frequenti su Condor e CE 261/2004
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
              { slug: "aeroporto-francoforte-risarcimento", title: "Aeroporto Francoforte FRA: Risarcimento Voli 2026" },
              { slug: "eurowings-risarcimento", title: "Eurowings: Risarcimento Voli 2026 — CE 261/2004" },
              { slug: "lot-polish-airlines-risarcimento", title: "LOT Polish Airlines: Risarcimento Voli 2026" },
            ].map(a => (
              <Link
                key={a.slug}
                href={`/it/blog/${a.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-orange-300 group"
              >
                <p className="font-semibold text-gray-800 group-hover:text-orange-600 text-sm">{a.title}</p>
                <p className="text-orange-600 text-xs mt-2 flex items-center gap-1">Leggi <ArrowRight className="w-3 h-3" /></p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}
