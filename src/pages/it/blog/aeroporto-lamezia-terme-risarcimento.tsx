import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-lamezia-terme-risarcimento";
const title = "Aeroporto Lamezia Terme SUF: Risarcimento Voli 2026 — Guida CE 261";
const description = "Volo in ritardo o cancellato a Lamezia Terme SUF? CE 261/2004, fino a €400, Ryanair, easyJet, ITA Airways, Volotea. Procedura ENAC completa. Guida Calabria 2026.";
const publishDate = "2026-03-22";

const faqData = [
  {
    question: "Quanto vale il risarcimento per un volo da Lamezia Terme SUF?",
    answer: "Dipende dalla distanza: Lamezia Terme verso Milano MXP ~€250 (~500 km), verso Roma FCO ~€250 (~380 km), verso Londra STN/LGW ~€250 (~1.950 km). Attenzione: Londra supera di poco la soglia 1500 km, potrebbe essere €400 a seconda della rotta specifica. Per Dublino DUB ~€400 (~2.100 km)."
  },
  {
    question: "Lamezia Terme: è l'unico aeroporto calabrese?",
    answer: "No. La Calabria ha tre aeroporti: Lamezia Terme SUF (il principale, zona centrale), Reggio Calabria REG (zona sud, punta dello stivale) e Crotone CRV (zona est, traffico minore). SUF è di gran lunga il più grande e trafficate dei tre, con la maggior parte delle rotte internazionali e nazionali calabresi."
  },
  {
    question: "I ritardi estivi a Lamezia Terme sono circostanze straordinarie?",
    answer: "No. La congestione estiva in Calabria è prevedibile: i vettori conoscono perfettamente il picco di traffico estivo, che si ripete ogni anno. I ritardi dovuti all'alta stagione non sono circostanze straordinarie. Il vettore deve pagare il risarcimento CE 261."
  },
  {
    question: "Volo charter estivo da Lamezia Terme cancellato. Ho diritti CE 261?",
    answer: "Sì. Il CE 261/2004 si applica anche ai voli charter, purché la partenza avvenga da un aeroporto UE (come SUF). Se il volo charter è cancellato con meno di 14 giorni di preavviso senza adeguate alternative, hai diritto al risarcimento. Contatta il tour operator o il vettore operativo."
  },
  {
    question: "easyJet opera da Lamezia Terme. Posso fare reclamo CE 261?",
    answer: "Sì. easyJet (U2) è un vettore europeo soggetto al CE 261/2004. Se il tuo volo easyJet da Lamezia Terme ha subito un ritardo oltre 3 ore o è stato cancellato con meno di 14 giorni di preavviso senza adeguata alternativa, hai pieno diritto al risarcimento."
  },
  {
    question: "Qual è l'autorità competente per reclami da Lamezia Terme?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) è competente per tutti i voli in partenza dagli aeroporti italiani, incluso Lamezia Terme SUF. Puoi presentare reclamo a ENAC se il vettore non risponde o rifiuta ingiustificatamente."
  }
];

export default function AeroportoLameziaTermeRisarcimento() {
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
      <section className="bg-gradient-to-br from-orange-800 via-red-700 to-orange-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-orange-200 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Aeroporto Lamezia Terme SUF — Calabria</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Aeroporto Lamezia Terme SUF: <span className="text-yellow-400">Risarcimento Voli</span> CE 261/2004
          </h1>
          <p className="text-xl text-orange-100 mb-8">
            Volo in ritardo o cancellato da Lamezia Terme? Ryanair, easyJet, ITA Airways, Volotea: CE 261/2004 garantisce fino a €400 per passeggero. Guida pratica ENAC 2026.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Euro className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Fino a €400</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-orange-200" />
              <span>Ritardo &gt; 3 ore</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Plane className="w-5 h-5 text-green-300" />
              <span>Hub principale Calabria</span>
            </div>
          </div>
          <Link
            href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            className="inline-flex items-center gap-2 bg-yellow-400 text-orange-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-300 transition-colors text-lg"
          >
            Verifica il tuo rimborso gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Calabria airports comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aeroporti della Calabria: SUF vs REG vs CRV</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-orange-800 text-white">
                  <th className="px-4 py-3 text-left">Aeroporto</th>
                  <th className="px-4 py-3 text-center">Codice</th>
                  <th className="px-4 py-3 text-center">Zona</th>
                  <th className="px-4 py-3 text-center">Vettori principali</th>
                  <th className="px-4 py-3 text-center">Rotte</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Lamezia Terme</td>
                  <td className="px-4 py-3 text-center">SUF</td>
                  <td className="px-4 py-3 text-center">Centro Calabria</td>
                  <td className="px-4 py-3 text-center">Ryanair, easyJet, ITA, Volotea</td>
                  <td className="px-4 py-3 text-center">Nazionali + internazionali</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Reggio Calabria</td>
                  <td className="px-4 py-3 text-center">REG</td>
                  <td className="px-4 py-3 text-center">Sud (punta)</td>
                  <td className="px-4 py-3 text-center">ITA, Volotea</td>
                  <td className="px-4 py-3 text-center">Principalmente nazionali</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Crotone</td>
                  <td className="px-4 py-3 text-center">CRV</td>
                  <td className="px-4 py-3 text-center">Est Calabria</td>
                  <td className="px-4 py-3 text-center">Ryanair (stagionale)</td>
                  <td className="px-4 py-3 text-center">Stagionali limitate</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-orange-800 text-sm">
              <strong>SUF è l&apos;hub principale:</strong> Lamezia Terme gestisce oltre il 70% del traffico aereo calabrese. Se devi volare dalla Calabria verso destinazioni internazionali, SUF offre le più ampie opzioni. REG serve principalmente i collegamenti con Roma e Milano via ITA/Volotea.
            </p>
          </div>
        </section>

        {/* Amounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Importi Risarcimento dalle Principali Rotte da SUF</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-orange-800 text-white">
                  <th className="px-4 py-3 text-left">Destinazione</th>
                  <th className="px-4 py-3 text-center">Distanza da SUF</th>
                  <th className="px-4 py-3 text-center">Risarcimento CE 261</th>
                  <th className="px-4 py-3 text-center">Vettori</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Roma FCO</td>
                  <td className="px-4 py-3 text-center">~380 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">ITA, Ryanair, Volotea</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Milano MXP/BGY</td>
                  <td className="px-4 py-3 text-center">~500 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">ITA, easyJet, Ryanair</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Londra STN/LGW</td>
                  <td className="px-4 py-3 text-center">~1.950 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€400</td>
                  <td className="px-4 py-3 text-center">Ryanair, easyJet</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Dublino DUB</td>
                  <td className="px-4 py-3 text-center">~2.100 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€400</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Barcellona BCN</td>
                  <td className="px-4 py-3 text-center">~1.500 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€400</td>
                  <td className="px-4 py-3 text-center">Ryanair, Vueling</td>
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
                <li>✓ Voli regolari e charter da SUF (Calabria/UE)</li>
                <li>✓ Qualsiasi vettore: Ryanair, ITA, easyJet, Volotea</li>
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
                <li>⚠ Alta stagione estiva: NON è straordinaria</li>
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
              <p className="text-sm text-gray-600">Contatta la compagnia (Ryanair: portale, ITA: call center/email). Entro 2 anni dall&apos;evento.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. ENAC</h3>
              <p className="text-sm text-gray-600">Se la compagnia non risponde o rifiuta, presenta reclamo a ENAC (partenza da aeroporto italiano).</p>
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
        <section className="bg-gradient-to-r from-orange-700 to-red-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Volo in Ritardo o Cancellato da Lamezia Terme SUF?</h2>
          <p className="text-orange-100 mb-6">
            Verifica subito il tuo diritto al risarcimento. ClaimWinger gestisce tutto il processo contro Ryanair, easyJet, ITA e Volotea. Paghi solo se otteniamo il risarcimento (30%).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-orange-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-300 transition-colors"
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
