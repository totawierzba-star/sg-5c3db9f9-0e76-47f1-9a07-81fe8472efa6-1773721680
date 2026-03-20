import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-pescara-risarcimento";
const title = "Aeroporto Pescara PSR (D'Abruzzo): Risarcimento Voli 2026 — Guida CE 261";
const description = "Volo in ritardo o cancellato a Pescara PSR? CE 261/2004, fino a €400, Ryanair dominante, voli stagionali Abruzzo. Procedura ENAC completa. Guida 2026.";
const publishDate = "2026-03-22";

const faqData = [
  {
    question: "Quanto vale il risarcimento per un volo da Pescara PSR?",
    answer: "Dipende dalla distanza: Pescara verso Roma FCO ~€250 (volo non diretto tipicamente), verso Londra STN ~€250 (~1.450 km), verso Barcellona BCN ~€250 (~1.450 km), verso Dublino DUB ~€400 (~1.900 km), verso Bruxelles CRL ~€250 (~1.400 km). Il ritardo all'arrivo deve superare le 3 ore."
  },
  {
    question: "Pescara PSR: dove si trova e chi serve?",
    answer: "L'Aeroporto d'Abruzzo (PSR) si trova a circa 4 km da Pescara ed è il principale scalo dell'Abruzzo e del Molise. Serve anche le province di Chieti, L'Aquila e Teramo. Ryanair è il vettore dominante con la maggior parte delle rotte internazionali."
  },
  {
    question: "Ryanair è l'unico vettore a Pescara?",
    answer: "Ryanair è il vettore principale a Pescara con la maggior parte delle destinazioni, ma non è l'unico. Operano anche vettori charter stagionali e occasionalmente altri low-cost. La dipendenza da Ryanair è tuttavia molto alta rispetto ad altri aeroporti italiani."
  },
  {
    question: "Quali sono i diritti CE 261 in caso di cancellazione a Pescara?",
    answer: "In caso di cancellazione con meno di 14 giorni di preavviso hai diritto a: (1) rimborso del biglietto o trasporto alternativo verso la destinazione finale, (2) assistenza (pasti, bevande, eventuale hotel), (3) risarcimento monetario €250–€600 in base alla distanza, a meno che il vettore dimostri circostanze straordinarie."
  },
  {
    question: "I ritardi estivi a Pescara sono circostanze straordinarie?",
    answer: "No. La congestione stagionale estiva in Abruzzo è prevedibile. Ryanair e gli altri vettori conoscono perfettamente il picco di traffico estivo. I ritardi dovuti all'alta stagione non sono circostanze straordinarie: il vettore deve pagare il risarcimento CE 261."
  },
  {
    question: "Qual è l'autorità competente per reclami da Pescara PSR?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) è competente per tutti i voli in partenza dagli aeroporti italiani, incluso Pescara PSR. Se il vettore non risponde entro 6–8 settimane o rifiuta ingiustificatamente, puoi presentare reclamo a ENAC."
  }
];

export default function AeroportoPescaraRisarcimento() {
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
      <SEO title={title} description={description} canonicalUrl={`https://claimwinger.com/it/blog/${slug}`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 via-teal-700 to-emerald-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Aeroporto Pescara PSR — Abruzzo</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Aeroporto Pescara PSR: <span className="text-yellow-400">Risarcimento Voli</span> CE 261/2004
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Volo in ritardo o cancellato da Pescara d&apos;Abruzzo? Ryanair e altri vettori: il CE 261/2004 garantisce fino a €400 per passeggero. Guida pratica ENAC 2026.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Euro className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Fino a €400</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-green-200" />
              <span>Ritardo &gt; 3 ore</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Plane className="w-5 h-5 text-yellow-300" />
              <span>Aeroporto d&apos;Abruzzo</span>
            </div>
          </div>
          <Link
            href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-300 transition-colors text-lg"
          >
            Verifica il tuo rimborso gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Airport info */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aeroporto di Pescara PSR: Informazioni Generali</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-800 text-white">
                  <th className="px-4 py-3 text-left">Caratteristica</th>
                  <th className="px-4 py-3 text-left">Dettaglio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Codice IATA</td>
                  <td className="px-4 py-3">PSR</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Nome completo</td>
                  <td className="px-4 py-3">Aeroporto d&apos;Abruzzo (Pescara)</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Distanza da Pescara</td>
                  <td className="px-4 py-3">~4 km</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Zona servita</td>
                  <td className="px-4 py-3">Abruzzo, Molise, Marche meridionale</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Vettore principale</td>
                  <td className="px-4 py-3">Ryanair (maggioranza voli internazionali)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Stagionalità</td>
                  <td className="px-4 py-3">Picco estate, inverno ridotto</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Autorità CE 261</td>
                  <td className="px-4 py-3">ENAC (Ente Nazionale per l&apos;Aviazione Civile)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Amounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Importi Risarcimento dalle Principali Rotte da PSR</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-800 text-white">
                  <th className="px-4 py-3 text-left">Destinazione</th>
                  <th className="px-4 py-3 text-center">Distanza da PSR</th>
                  <th className="px-4 py-3 text-center">Risarcimento CE 261</th>
                  <th className="px-4 py-3 text-center">Vettori</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Londra STN</td>
                  <td className="px-4 py-3 text-center">~1.450 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Barcellona BCN</td>
                  <td className="px-4 py-3 text-center">~1.450 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Bruxelles CRL</td>
                  <td className="px-4 py-3 text-center">~1.400 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Dublino DUB</td>
                  <td className="px-4 py-3 text-center">~1.900 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€400</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Varsavia WMI</td>
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
                <li>✓ Qualsiasi vettore da PSR (Ryanair, charter)</li>
                <li>✓ Tutti i voli in partenza dall&apos;Abruzzo (UE)</li>
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
                <li>✗ Cancellazione con oltre 14 giorni + adeguata alternativa</li>
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
              <p className="text-sm text-gray-600">Ryanair: portale online entro 2 anni dall&apos;evento. Conserva carta d&apos;imbarco e ricevute.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. ENAC</h3>
              <p className="text-sm text-gray-600">Se il vettore non risponde o rifiuta, presenta reclamo a ENAC. Processo di 3–9 mesi.</p>
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
        <section className="bg-gradient-to-r from-green-700 to-teal-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Volo in Ritardo o Cancellato da Pescara PSR?</h2>
          <p className="text-green-100 mb-6">
            Verifica subito il tuo diritto al risarcimento. ClaimWinger gestisce tutto il processo contro Ryanair e altri vettori. Paghi solo se otteniamo il risarcimento (30%).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-300 transition-colors"
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
