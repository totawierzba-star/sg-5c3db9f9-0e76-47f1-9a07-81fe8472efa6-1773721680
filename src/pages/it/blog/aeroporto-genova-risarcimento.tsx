import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-genova-risarcimento";
const title = "Aeroporto Genova GOA (Cristoforo Colombo): Risarcimento Voli 2026 — CE 261";
const description = "Volo in ritardo o cancellato a Genova GOA? CE 261/2004, fino a €400, easyJet, Ryanair, ITA Airways. Pista sul mare, nebbia. Procedura ENAC completa. Guida 2026.";
const publishDate = "2026-03-23";

const faqData = [
  {
    question: "Quanto vale il risarcimento per un volo da Genova GOA?",
    answer: "Dipende dalla distanza: Genova verso Roma FCO ~€250 (~360 km), verso Milano MXP (non ci sono voli diretti in genere), verso Londra STN ~€250 (~1.100 km), verso Barcellona BCN ~€250 (~750 km), verso Dublino DUB ~€400 (~1.750 km). Il ritardo deve superare le 3 ore all'arrivo."
  },
  {
    question: "L'aeroporto di Genova ha una pista sul mare. Questo causa più ritardi?",
    answer: "Sì, la pista di Genova GOA è costruita parzialmente in mare e ha una lunghezza limitata (~3.000 m). Le condizioni meteorologiche sul Mar Ligure (vento, nebbia, mare grosso) possono influenzare le operazioni. Tuttavia, queste condizioni sono tipiche e prevedibili per GOA: non costituiscono circostanze straordinarie normalmente."
  },
  {
    question: "La nebbia a Genova è frequente. È una circostanza straordinaria?",
    answer: "La nebbia occasionale a Genova non è straordinaria, poiché è una condizione meteorologica prevedibile in questa zona. Tuttavia, la nebbia molto fitta e prolungata che va ben oltre le previsioni meteorologiche potrebbe, in casi eccezionali, qualificarsi come circostanza straordinaria. Il vettore deve dimostrarlo."
  },
  {
    question: "easyJet è il vettore principale a Genova?",
    answer: "easyJet (U2) è tra i principali vettori a Genova GOA con diverse rotte europee. Oltre a easyJet operano ITA Airways per i voli nazionali, Ryanair per alcune destinazioni e Volotea. La scelta del vettore dipende dalla destinazione."
  },
  {
    question: "Genova è piccola rispetto a Milano. Il CE 261 si applica allo stesso modo?",
    answer: "Sì. Il CE 261/2004 si applica a tutti gli aeroporti dell'UE indipendentemente dalle dimensioni. I diritti dei passeggeri partiti da Genova GOA sono identici a quelli di chi parte da Milano MXP o Roma FCO. Non ci sono differenze basate sulla dimensione dell'aeroporto."
  },
  {
    question: "Qual è l'autorità competente per reclami da Genova GOA?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) è competente per tutti i voli in partenza dagli aeroporti italiani, incluso Genova GOA. Se il vettore non risponde entro 6–8 settimane o rifiuta ingiustificatamente, presenta reclamo a ENAC."
  }
];

export default function AeroportoGenovaRisarcimento() {
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
      <section className="bg-gradient-to-br from-slate-800 via-blue-700 to-indigo-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Aeroporto Genova GOA — Liguria</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Aeroporto Genova GOA: <span className="text-yellow-400">Risarcimento Voli</span> CE 261/2004
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Volo in ritardo o cancellato da Genova Cristoforo Colombo? easyJet, Ryanair, ITA: CE 261/2004 garantisce fino a €400 per passeggero. Guida ENAC 2026.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Euro className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Fino a €400</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-blue-200" />
              <span>Ritardo &gt; 3 ore</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Plane className="w-5 h-5 text-green-300" />
              <span>Pista sul Mar Ligure</span>
            </div>
          </div>
          <Link
            href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-300 transition-colors text-lg"
          >
            Verifica il tuo rimborso gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Airport info */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aeroporto di Genova GOA: Informazioni Generali</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left">Caratteristica</th>
                  <th className="px-4 py-3 text-left">Dettaglio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Codice IATA</td>
                  <td className="px-4 py-3">GOA</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Nome completo</td>
                  <td className="px-4 py-3">Aeroporto Cristoforo Colombo di Genova</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Posizione unica</td>
                  <td className="px-4 py-3">Pista parzialmente costruita sul mare (Mar Ligure)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Distanza da Genova centro</td>
                  <td className="px-4 py-3">~7 km ovest</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Vettori principali</td>
                  <td className="px-4 py-3">easyJet, ITA Airways, Ryanair, Volotea</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Autorità CE 261</td>
                  <td className="px-4 py-3">ENAC (Ente Nazionale per l&apos;Aviazione Civile)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pista sul mare info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 flex gap-4">
          <Info className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
          <div>
            <p className="font-bold text-blue-800 mb-1">La pista sul mare non è un pretesto per i ritardi</p>
            <p className="text-blue-700 text-sm">
              L&apos;aeroporto di Genova ha una configurazione unica: la pista si estende sul Mar Ligure. I vettori che operano a GOA conoscono perfettamente le condizioni meteorologiche liguri (vento, nebbia, mare). Eventuali ritardi dovuti a condizioni meteo ordinarie non costituiscono circostanze straordinarie: hai diritto al risarcimento CE 261.
            </p>
          </div>
        </div>

        {/* Amounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Importi Risarcimento dalle Principali Rotte da GOA</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left">Destinazione</th>
                  <th className="px-4 py-3 text-center">Distanza da GOA</th>
                  <th className="px-4 py-3 text-center">Risarcimento CE 261</th>
                  <th className="px-4 py-3 text-center">Vettori</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Roma FCO</td>
                  <td className="px-4 py-3 text-center">~360 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">ITA, Volotea</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Londra LGW/STN</td>
                  <td className="px-4 py-3 text-center">~1.100 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">easyJet, Ryanair</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Barcellona BCN</td>
                  <td className="px-4 py-3 text-center">~750 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">Vueling, Volotea</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Dublino DUB</td>
                  <td className="px-4 py-3 text-center">~1.750 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€400</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Palermo PMO / Catania CTA</td>
                  <td className="px-4 py-3 text-center">~850–900 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">Volotea, Ryanair</td>
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
                <li>✓ Qualsiasi vettore da GOA (Liguria/UE)</li>
                <li>✓ Rotte nazionali e internazionali</li>
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
                <li>⚠ Nebbia ordinaria: NON è straordinaria</li>
                <li>⚠ Vento ligure tipico: NON è straordinario</li>
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
              <p className="text-sm text-gray-600">easyJet, Ryanair, ITA: portale online. Entro 2 anni dall&apos;evento. Conserva tutti i documenti.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. ENAC</h3>
              <p className="text-sm text-gray-600">Se il vettore non risponde o rifiuta, presenta reclamo a ENAC (volo da aeroporto italiano).</p>
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
        <section className="bg-gradient-to-r from-slate-700 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Volo in Ritardo o Cancellato da Genova GOA?</h2>
          <p className="text-slate-200 mb-6">
            Verifica subito il tuo diritto al risarcimento. ClaimWinger gestisce tutto il processo contro easyJet, Ryanair, ITA e Volotea. Paghi solo se otteniamo il risarcimento (30%).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-300 transition-colors"
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
