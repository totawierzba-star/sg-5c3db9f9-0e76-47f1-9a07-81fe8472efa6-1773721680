import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-trapani-risarcimento";
const title = "Aeroporto Trapani TPS (Birgi): Risarcimento Voli 2026 — Guida CE 261";
const description = "Volo in ritardo o cancellato a Trapani TPS? CE 261/2004, fino a €400, Ryanair dominante, TPS vs PMO vs CTA, stagionalità Sicilia ovest. ENAC. Guida 2026.";
const publishDate = "2026-03-22";

const faqData = [
  {
    question: "Quanto vale il risarcimento per un volo da Trapani TPS?",
    answer: "Dipende dalla distanza: Trapani verso Roma FCO ~€250 (~620 km), verso Milano MXP ~€250 (~750 km), verso Londra STN ~€250 (~2.000 km — verifica distanza esatta, potrebbe essere €400), verso Dublino DUB ~€400 (~2.200 km). Il ritardo all'arrivo deve superare le 3 ore."
  },
  {
    question: "Trapani è distinta da Palermo. Perché due aeroporti in Sicilia occidentale?",
    answer: "Trapani TPS (Birgi) e Palermo PMO (Falcone-Borsellino) sono distinti: TPS serve Trapani e la Sicilia occidentale (Marsala, Agrigento), mentre PMO è l'hub principale siciliano per voli nazionali e internazionali. TPS dista circa 15 km da Trapani e 100 km da Palermo. PMO dista 35 km da Palermo."
  },
  {
    question: "Ryanair è l'unico vettore a Trapani TPS?",
    answer: "Ryanair è storicamente il vettore dominante a Trapani, avendo costruito il traffico dell'aeroporto. Tuttavia l'offerta stagionale varia anno per anno. TPS ha visto periodi di riduzione significativa delle rotte Ryanair. Verifica sempre l'offerta attuale prima di prenotare."
  },
  {
    question: "Il vento di Scirocco a Trapani causa ritardi. È una circostanza straordinaria?",
    answer: "No. Lo Scirocco è un vento tipico del Mediterraneo, prevedibile per i vettori che operano in Sicilia. Non è una circostanza straordinaria ai sensi del CE 261. Solo condizioni meteo davvero eccezionali e imprevedibili (es. intensità record) possono essere considerate straordinarie."
  },
  {
    question: "Ho un volo charter Ryanair da Trapani cancellato. Ho diritti CE 261?",
    answer: "I voli Ryanair sono voli di linea regolari (non charter nel senso tradizionale). Il CE 261/2004 si applica pienamente. Se la cancellazione avviene con meno di 14 giorni di preavviso senza adeguata alternativa, hai diritto al risarcimento monetario più rimborso o riprotezione."
  },
  {
    question: "Qual è l'autorità competente per reclami da Trapani?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) è competente per tutti i voli in partenza dagli aeroporti italiani, incluso Trapani TPS. Puoi presentare reclamo a ENAC se il vettore non risponde entro 6–8 settimane o rifiuta ingiustificatamente il risarcimento."
  }
];

export default function AeroportoTrapaniRisarcimento() {
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
      <SEO title={title} description={description} canonical={`https://claimwinger.com/it/blog/${slug}`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-sky-700 to-cyan-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sky-200 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Aeroporto Trapani TPS — Sicilia Occidentale</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Aeroporto Trapani TPS: <span className="text-yellow-400">Risarcimento Voli</span> CE 261/2004
          </h1>
          <p className="text-xl text-sky-100 mb-8">
            Volo in ritardo o cancellato da Trapani Birgi? CE 261/2004 garantisce fino a €400 per passeggero. Guida pratica ENAC 2026.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Euro className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Fino a €400</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-sky-200" />
              <span>Ritardo &gt; 3 ore</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Plane className="w-5 h-5 text-green-300" />
              <span>Sicilia Occidentale</span>
            </div>
          </div>
          <Link
            href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-300 transition-colors text-lg"
          >
            Verifica il tuo rimborso gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Sicily airports comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aeroporti della Sicilia: TPS vs PMO vs CTA</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-4 py-3 text-left">Aeroporto</th>
                  <th className="px-4 py-3 text-center">Codice</th>
                  <th className="px-4 py-3 text-center">Zona Sicilia</th>
                  <th className="px-4 py-3 text-center">Vettori principali</th>
                  <th className="px-4 py-3 text-center">Specializzazione</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Trapani Birgi</td>
                  <td className="px-4 py-3 text-center">TPS</td>
                  <td className="px-4 py-3 text-center">Ovest</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                  <td className="px-4 py-3 text-center">Low-cost, stagionale</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Palermo Falcone-Borsellino</td>
                  <td className="px-4 py-3 text-center">PMO</td>
                  <td className="px-4 py-3 text-center">Nord-Ovest</td>
                  <td className="px-4 py-3 text-center">Ryanair, ITA, easyJet</td>
                  <td className="px-4 py-3 text-center">Hub principale Sicilia</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Catania Fontanarossa</td>
                  <td className="px-4 py-3 text-center">CTA</td>
                  <td className="px-4 py-3 text-center">Est</td>
                  <td className="px-4 py-3 text-center">Ryanair, ITA, easyJet</td>
                  <td className="px-4 py-3 text-center">Hub est, Etna, turismo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>Nota:</strong> TPS è specializzato principalmente nelle rotte Ryanair low-cost. Per voli verso più destinazioni o con più vettori, PMO e CTA offrono opzioni più ampie. Il CE 261 si applica allo stesso modo in tutti e tre gli aeroporti siciliani.
            </p>
          </div>
        </section>

        {/* Amounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Importi Risarcimento dalle Principali Rotte da TPS</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-4 py-3 text-left">Destinazione</th>
                  <th className="px-4 py-3 text-center">Distanza da TPS</th>
                  <th className="px-4 py-3 text-center">Risarcimento CE 261</th>
                  <th className="px-4 py-3 text-center">Vettori</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Roma FCO</td>
                  <td className="px-4 py-3 text-center">~620 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Milano MXP/BGY</td>
                  <td className="px-4 py-3 text-center">~750 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Londra STN</td>
                  <td className="px-4 py-3 text-center">~2.000 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€400</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Dublino DUB</td>
                  <td className="px-4 py-3 text-center">~2.200 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€400</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Bruxelles CRL</td>
                  <td className="px-4 py-3 text-center">~1.700 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€400</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* When CE261 applies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quando si Applica il CE 261/2004</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-green-800">CE 261 si applica</h3>
              </div>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ Ritardo all&apos;arrivo oltre 3 ore</li>
                <li>✓ Cancellazione con meno di 14 giorni di preavviso</li>
                <li>✓ Imbarco negato (overbooking)</li>
                <li>✓ Qualsiasi vettore da TPS (Sicilia/UE)</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-red-800">Eccezioni</h3>
              </div>
              <ul className="space-y-2 text-sm text-red-700">
                <li>✗ Circostanze straordinarie genuine e dimostrate</li>
                <li>✗ Ritardo inferiore a 3 ore all&apos;arrivo</li>
                <li>⚠ Scirocco: NON è straordinario di per sé</li>
                <li>⚠ Alta stagione: NON è straordinaria</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to claim */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Come Richiedere il Risarcimento</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Reclamo diretto</h3>
              <p className="text-sm text-gray-600">Ryanair: portale online entro 2 anni dall&apos;evento. Conserva carta d&apos;imbarco e ricevute spese.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. ENAC</h3>
              <p className="text-sm text-gray-600">Se Ryanair non risponde o rifiuta, presenta reclamo a ENAC. Processo 3–9 mesi.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. ClaimWinger</h3>
              <p className="text-sm text-gray-600">Gestione completa. 30% solo se vinciamo. Nessun rischio, nessun anticipo.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande Frequenti (FAQ)</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-700 text-sm ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA2 */}
        <section className="bg-gradient-to-r from-blue-800 to-cyan-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Volo in Ritardo o Cancellato da Trapani TPS?</h2>
          <p className="text-blue-100 mb-6">
            Verifica subito il tuo diritto al risarcimento. ClaimWinger gestisce tutto il processo contro Ryanair. Paghi solo se otteniamo il risarcimento (30%).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-300 transition-colors"
            >
              Inizia il reclamo gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/it?utm_source=blog&utm_medium=cta2&utm_campaign=${slug}`}
              className="inline-flex items-center justify-center gap-2 bg-white/20 text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/30 transition-colors"
            >
              Scopri come funziona
            </Link>
          </div>
        </section>

      </div>
    </LayoutIt>
  );
}
