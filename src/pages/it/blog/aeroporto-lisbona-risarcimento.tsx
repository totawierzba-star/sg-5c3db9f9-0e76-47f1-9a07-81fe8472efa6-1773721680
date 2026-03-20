import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-lisbona-risarcimento";
const title = "Aeroporto Lisbona LIS: Risarcimento Voli 2026 — fino a €600";
const description = "Volo in ritardo o cancellato a Lisbona LIS? CE 261/2004, €400–€600, hub TAP Air Portugal, connessioni Brasile e Africa lusofona, ANAC vs ENAC. Guida completa 2026.";
const publishDate = "2026-03-20";

const faqData = [
  {
    question: "Quanto spetta per un volo in ritardo a Lisbona LIS?",
    answer: "La Portogallo è nell'UE, quindi CE 261/2004 si applica pienamente. La maggior parte delle rotte dall'Italia verso Lisbona è nella fascia 1500–3500 km → €400. Per coincidenze con destinazione finale Brasile, Angola, USA (oltre 3500 km), il risarcimento è €600 se si ha un unico PNR. Il ritardo all'arrivo deve superare le 3 ore."
  },
  {
    question: "Ho perso la coincidenza a Lisbona per colpa di TAP. Quanto posso richiedere?",
    answer: "Il risarcimento si calcola sulla distanza totale con un unico PNR. Es: Roma–Lisbona–São Paulo = ~10.400 km → €600. TAP è la principale compagnia per connessioni verso il Brasile e il Portogallo anglofono e lusofono. È fondamentale avere un unico PNR per beneficiare del risarcimento sulla distanza totale."
  },
  {
    question: "TAP Air Portugal ha avuto problemi finanziari. Il reclamo CE 261 è ancora valido?",
    answer: "Sì. TAP ha completato la ristrutturazione ed è operativa. I diritti CE 261 si applicano pienamente ai voli TAP. TAP è nota per tempi di risposta molto lenti (fino a 6–8 mesi). ClaimWinger può accelerare il processo tramite procedure legali quando necessario."
  },
  {
    question: "Qual è l'autorità competente per reclami su voli da Lisbona LIS?",
    answer: "Per voli in partenza dal Portogallo → ANAC (Autoridade Nacional da Aviação Civil). Per voli in partenza dall'Italia verso Lisbona → ENAC. Puoi rivolgerti all'autorità del paese di partenza."
  },
  {
    question: "Lisbona sta costruendo un nuovo aeroporto. Cosa cambia?",
    answer: "Lisbona è in attesa di un nuovo aeroporto (attualmente in discussione tra Montijo e Alcochete). Al momento tutti i voli passeggeri transitano dall'aeroporto Humberto Delgado (LIS). Non ci sono cambiamenti previsti nel breve termine per i passeggeri."
  },
  {
    question: "TAP vola da altri aeroporti italiani oltre Roma e Milano?",
    answer: "Sì. TAP opera da Roma FCO, Milano MXP, Venezia VCE, Bologna BLQ, Napoli NAP e altri aeroporti italiani verso Lisbona, con poi connessioni transatlantiche. I diritti CE 261 si applicano a tutti questi voli in partenza dall'Italia."
  }
];

export default function AeroportoLisbonaRisarcimento() {
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
          <li><Link href="/it" className="hover:text-green-600">Home</Link></li>
          <li className="mx-1">/</li>
          <li><Link href="/it/blog" className="hover:text-green-600">Blog</Link></li>
          <li className="mx-1">/</li>
          <li className="text-gray-700 font-medium">Aeroporto Lisbona LIS Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Hub Europei</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 8 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Lisbona LIS: Risarcimento Voli 2026 — fino a €600
          </h1>
          <p className="text-lg text-gray-600">
            Lisbona LIS è il principale hub del Portogallo e la porta verso il Brasile e l&apos;Africa lusofona. Se hai subito un ritardo o una cancellazione su un volo TAP o altro vettore, hai diritto fino a <strong>€400–€600 di risarcimento</strong> ai sensi del CE 261/2004.
          </p>
        </header>

        {/* Info aeroporto */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-green-900 text-lg mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Lisbona Airport (LIS) — dati chiave
          </h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div><strong>Codice IATA:</strong> LIS</div>
            <div><strong>Nome ufficiale:</strong> Aeroporto Humberto Delgado</div>
            <div><strong>Posizione:</strong> 7 km a nord del centro di Lisbona</div>
            <div><strong>Terminali:</strong> Terminal 1 (T1) — unico terminal con pier 1, 2, 3</div>
            <div><strong>Vettore principale:</strong> TAP Air Portugal (TP)</div>
            <div><strong>Autorità CE 261:</strong> ANAC (Autoridade Nacional da Aviação Civil)</div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-green-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo in ritardo da o per Lisbona LIS?</p>
            <p className="text-green-100 text-sm">Hai diritto fino a €600. ClaimWinger verifica gratuitamente — 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Verifica ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Importi CE 261 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-600" /> Importi di risarcimento per voli da/per Lisbona
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-4 py-3">Rotta</th>
                  <th className="text-left px-4 py-3">Distanza</th>
                  <th className="text-left px-4 py-3">Risarcimento</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Roma FCO → Lisbona LIS", "~2.220 km", "€400"],
                  ["Milano MXP → Lisbona LIS", "~2.100 km", "€400"],
                  ["Venezia VCE → Lisbona LIS", "~2.200 km", "€400"],
                  ["Napoli NAP → Lisbona LIS", "~2.380 km", "€400"],
                  ["Roma → Lisbona → São Paulo GRU", "~10.400 km (totale)", "€600"],
                  ["Milano → Lisbona → Rio de Janeiro GIG", "~10.200 km (totale)", "€600"],
                  ["Roma → Lisbona → Luanda AOA (Angola)", "~8.700 km (totale)", "€600"],
                  ["Roma → Lisbona → Maputo MPM (Mozambico)", "~10.800 km (totale)", "€600"],
                  ["Roma → Lisbona → New York JFK", "~9.200 km (totale)", "€600"],
                ].map(([route, dist, comp]) => (
                  <tr key={route} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{route}</td>
                    <td className="px-4 py-2 text-gray-600">{dist}</td>
                    <td className={`px-4 py-2 font-bold ${comp === "€600" ? "text-red-700" : "text-orange-700"}`}>{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs">* Le ultime 5 rotte presuppongono un unico PNR. Risarcimento basato sulla destinazione finale.</p>
        </section>

        {/* TAP e connessioni */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-green-600" /> TAP Air Portugal: hub di Lisbona per Brasile e Africa
          </h2>
          <p className="text-gray-700 mb-4">
            TAP utilizza Lisbona come hub intercontinentale per il <strong>Brasile</strong> (São Paulo, Rio, Brasília, Recife, Porto Alegre, Fortaleza), l&apos;<strong>Africa lusofona</strong> (Angola, Mozambico, Capo Verde, São Tomé, Guinea-Bissau) e il <strong>Nord America</strong>. Tutte queste destinazioni sono oltre 3500 km da Lisbona → <strong>€600 di risarcimento</strong> in caso di ritardo su un unico PNR.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>TAP: tempi di risposta lunghi.</strong> TAP Air Portugal è nota per rispondere ai reclami CE 261 con ritardi di 4–8 mesi. Se non ottieni risposta entro 30 giorni, procedi immediatamente con escalation ANAC/ENAC o affida il caso a ClaimWinger per accelerare i tempi tramite vie legali.</span>
            </p>
          </div>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie a Lisbona
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all&apos;aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale TAP</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Vento forte ordinario (il Tejo crea turbolenza prevedibile)</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi per rotazione aerei</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Tempesta eccezionale e imprevedibile</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC europeo</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Emergenze di sicurezza aeroportuale</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-600" /> Come fare reclamo per voli da/per Lisbona LIS
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Conserva i documenti", text: "Carta d'imbarco, conferma prenotazione, prova del ritardo. Documenta le spese extra (pasti, hotel) con ricevute." },
              { step: "2", title: "Invia reclamo a TAP", text: "flytap.com → Assistenza → Reclamo. Indica numero volo (TP + numero), data, rotta, importo richiesto (€400 per rotte Italia–Lisbona). TAP risponde molto lentamente — aspettati 4–8 mesi." },
              { step: "3", title: "Escalation ANAC o ENAC", text: "Se il volo partiva dal Portogallo → ANAC (anac.pt). Se partiva dall'Italia → ENAC (enac.gov.it). Non aspettare la risposta di TAP per l'escalation — procedi dopo 30 giorni." },
              { step: "4", title: "Affida a ClaimWinger", text: "ClaimWinger gestisce i reclami contro TAP senza anticipo — 30% solo al successo. TAP risponde significativamente più velocemente tramite agenzie specializzate con azione legale." }
            ].map(item => (
              <li key={item.step} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                <span className="bg-green-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
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
            <Info className="w-6 h-6 text-green-600" /> Autorità competenti
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">ANAC — Portogallo</h3>
              <p className="text-green-700 text-sm mb-2">Autoridade Nacional da Aviação Civil. Competente per voli in partenza dal Portogallo, incluso LIS.</p>
              <p className="text-green-600 text-xs">anac.pt — Direitos dos Passageiros</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">ENAC — Italia</h3>
              <p className="text-green-700 text-sm mb-2">Competente per voli in partenza dall&apos;Italia verso Lisbona, anche se il vettore è TAP.</p>
              <p className="text-green-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo per Lisbona LIS in ritardo o cancellato?</p>
            <p className="text-green-100 text-sm">Hai diritto fino a €600. ClaimWinger gestisce il reclamo anche contro TAP. 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-700 font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Inizia ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-600" /> Domande frequenti su Lisbona LIS e CE 261/2004
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
              { slug: "tap-air-portugal-risarcimento", title: "TAP Air Portugal: Risarcimento Voli 2026" },
              { slug: "aeroporto-madrid-risarcimento", title: "Aeroporto Madrid MAD: Risarcimento 2026" },
              { slug: "aeroporto-barcellona-risarcimento", title: "Aeroporto Barcellona BCN: Risarcimento 2026" },
            ].map(a => (
              <Link key={a.slug} href={`/it/blog/${a.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-green-300 group">
                <p className="font-semibold text-gray-800 group-hover:text-green-600 text-sm">{a.title}</p>
                <p className="text-green-600 text-xs mt-2 flex items-center gap-1">Leggi <ArrowRight className="w-3 h-3" /></p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}
