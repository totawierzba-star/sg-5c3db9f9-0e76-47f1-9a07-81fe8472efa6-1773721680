import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-alghero-risarcimento";
const title = "Aeroporto Alghero AHO (Fertilia): Risarcimento Voli 2026 — Guida CE 261";
const description = "Volo in ritardo o cancellato ad Alghero AHO? CE 261/2004, fino a €400, Ryanair dominante, voli stagionali, alta stagione Costa Smeralda. Procedura ENAC completa.";
const publishDate = "2026-03-22";

const faqData = [
  {
    question: "Quanto vale il risarcimento per un volo da Alghero AHO?",
    answer: "Dipende dalla destinazione. Alghero verso Roma FCO ~€250 (≤1500 km), verso Londra STN ~€250 (≤1500 km), verso Berlino BER ~€250 (≤1500 km). Per destinazioni oltre 1500 km (es. Barcellona BCN ~900 km = €250, Dublino DUB ~1.900 km = €400). Usa il calcolatore ClaimWinger per la distanza esatta."
  },
  {
    question: "Alghero è l'aeroporto principale della Sardegna nord-occidentale?",
    answer: "Sì. Alghero AHO (Riviera del Corallo o Fertilia) è il principale scalo della Sardegna nord-occidentale. Per la Sardegna nord-orientale esiste Olbia OLB (Costa Smeralda), mentre Cagliari CAG serve il sud. AHO dista circa 35 km da Alghero e 30 km da Sassari."
  },
  {
    question: "I ritardi estivi ad Alghero sono circostanze straordinarie?",
    answer: "No. La congestione stagionale estiva è prevedibile e non costituisce circostanza straordinaria. Ryanair e gli altri vettori conoscono il picco di traffico estivo in Sardegna. I ritardi dovuti all'alta stagione non esonerano il vettore dal risarcimento CE 261."
  },
  {
    question: "Ryanair è l'unico vettore ad Alghero?",
    answer: "Ryanair è il vettore dominante ad Alghero con oltre il 70% dei voli, ma non è l'unico. Operano anche easyJet su alcune rotte stagionali, Volotea, e vettori charter in estate. La presenza di un unico vettore principale significa che i disservizi di Ryanair impattano fortemente l'aeroporto."
  },
  {
    question: "Il vento di Maestrale causa ritardi ad Alghero. È straordinario?",
    answer: "No. Il Maestrale è un vento caratteristico e prevedibile in Sardegna, specialmente in nord-ovest. Non è considerato circostanza straordinaria poiché i vettori che operano ad Alghero devono pianificare tenendo conto di questa condizione meteo tipica. Per essere straordinario, il vento deve essere di intensità davvero eccezionale e imprevedibile."
  },
  {
    question: "Qual è l'autorità competente per reclami da Alghero?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) è l'autorità competente per tutti i voli in partenza dagli aeroporti italiani, incluso Alghero AHO. Puoi presentare reclamo a ENAC se il vettore non risponde entro 6 settimane o rifiuta ingiustificatamente."
  }
];

export default function AeroportoAlgheroRisarcimento() {
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
      <section className="bg-gradient-to-br from-cyan-800 via-teal-700 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-cyan-200 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Aeroporto Alghero AHO — Sardegna Nord-Occidentale</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Aeroporto Alghero AHO: <span className="text-yellow-400">Risarcimento Voli</span> Fino a €400
          </h1>
          <p className="text-xl text-cyan-100 mb-8">
            Volo in ritardo o cancellato da Alghero Fertilia? Ryanair, easyJet, Volotea: il CE 261/2004 garantisce fino a €400 per passeggero. Guida pratica ENAC 2026.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Euro className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Fino a €400</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-cyan-200" />
              <span>Ritardo &gt; 3 ore</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Plane className="w-5 h-5 text-green-300" />
              <span>Ryanair dominante</span>
            </div>
          </div>
          <Link
            href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            className="inline-flex items-center gap-2 bg-yellow-400 text-cyan-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-300 transition-colors text-lg"
          >
            Verifica il tuo rimborso gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Airport info */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aeroporto di Alghero AHO: Informazioni Generali</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-cyan-800 text-white">
                  <th className="px-4 py-3 text-left">Caratteristica</th>
                  <th className="px-4 py-3 text-left">Dettaglio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Codice IATA</td>
                  <td className="px-4 py-3">AHO</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Nome completo</td>
                  <td className="px-4 py-3">Aeroporto di Alghero-Fertilia (Riviera del Corallo)</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Distanza da Alghero</td>
                  <td className="px-4 py-3">~10 km nord (Fertilia)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Distanza da Sassari</td>
                  <td className="px-4 py-3">~30 km</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Vettore principale</td>
                  <td className="px-4 py-3">Ryanair (~70% dei voli)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Stagionalità</td>
                  <td className="px-4 py-3">Picco giugno–settembre, inverno ridotto</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Autorità CE 261</td>
                  <td className="px-4 py-3">ENAC (Ente Nazionale per l&apos;Aviazione Civile)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sardinia airports comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AHO vs OLB vs CAG: Quale Aeroporto Sardo?</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-cyan-800 text-white">
                  <th className="px-4 py-3 text-left">Aeroporto</th>
                  <th className="px-4 py-3 text-center">Codice</th>
                  <th className="px-4 py-3 text-center">Zona Sardegna</th>
                  <th className="px-4 py-3 text-center">Vettore principale</th>
                  <th className="px-4 py-3 text-center">Specializzazione</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Alghero</td>
                  <td className="px-4 py-3 text-center">AHO</td>
                  <td className="px-4 py-3 text-center">Nord-Ovest</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                  <td className="px-4 py-3 text-center">Low-cost, Alghero/Sassari</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Olbia Costa Smeralda</td>
                  <td className="px-4 py-3 text-center">OLB</td>
                  <td className="px-4 py-3 text-center">Nord-Est</td>
                  <td className="px-4 py-3 text-center">easyJet / ITA</td>
                  <td className="px-4 py-3 text-center">Turismo lusso, Costa Smeralda</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Cagliari Elmas</td>
                  <td className="px-4 py-3 text-center">CAG</td>
                  <td className="px-4 py-3 text-center">Sud</td>
                  <td className="px-4 py-3 text-center">Ryanair / ITA / easyJet</td>
                  <td className="px-4 py-3 text-center">Hub principale, business</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Amounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Importi Risarcimento dalle Principali Rotte da AHO</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-cyan-800 text-white">
                  <th className="px-4 py-3 text-left">Destinazione</th>
                  <th className="px-4 py-3 text-center">Distanza da AHO</th>
                  <th className="px-4 py-3 text-center">Risarcimento CE 261</th>
                  <th className="px-4 py-3 text-center">Vettori</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Roma FCO</td>
                  <td className="px-4 py-3 text-center">~480 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">Ryanair, ITA</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Milano MXP/BGY</td>
                  <td className="px-4 py-3 text-center">~560 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">Ryanair, easyJet</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Londra STN/LGW</td>
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
                  <td className="px-4 py-3">Varsavia WAW</td>
                  <td className="px-4 py-3 text-center">~2.100 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€400</td>
                  <td className="px-4 py-3 text-center">Ryanair stagionale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Seasonal congestion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stagionalità e Ritardi: Cosa Sapere</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-800 mb-1">Estate: alta stagione, alta probabilità di ritardi</p>
                <p className="text-amber-700 text-sm">
                  Alghero registra oltre il 65% del traffico annuale tra giugno e settembre. La congestione stagionale, i ritardi a catena e la carenza di slot sono tipici. <strong>Nessuno di questi costituisce circostanza straordinaria</strong>: il vettore deve pagare il risarcimento.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>Inverno:</strong> fuori stagione Alghero ha traffico ridotto. Ryanair opera pochi voli settimanali. Le cancellazioni invernali sono più frequenti e possono essere riorganizzazioni commerciali del vettore: anche in questo caso il CE 261 si applica se la cancellazione avviene con meno di 14 giorni di preavviso.
            </p>
          </div>
        </section>

        {/* How to claim */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Come Richiedere il Risarcimento da Alghero</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Reclamo diretto</h3>
              <p className="text-sm text-gray-600">Ryanair: portale online entro 2 anni. Conserva carta d&apos;imbarco e ricevute.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. ENAC</h3>
              <p className="text-sm text-gray-600">Se il vettore rifiuta o non risponde entro 6–8 settimane, presenta reclamo a ENAC.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. ClaimWinger</h3>
              <p className="text-sm text-gray-600">Gestione completa del reclamo. 30% solo se vinciamo. Nessun rischio per te.</p>
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
        <section className="bg-gradient-to-r from-cyan-700 to-teal-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Volo in Ritardo o Cancellato da Alghero AHO?</h2>
          <p className="text-cyan-100 mb-6">
            Verifica subito il tuo diritto al risarcimento. ClaimWinger gestisce tutto il processo contro Ryanair e altri vettori. Paghi solo se otteniamo il risarcimento (30%).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-cyan-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-300 transition-colors"
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
