import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "roma-londra-volo-ritardo-risarcimento";
const title = "Volo Roma–Londra Cancellato o in Ritardo: Risarcimento CE 261 — Guida 2026";
const description = "Volo Roma–Londra cancellato o in ritardo? Hai diritto a €250 CE 261/2004. British Airways, Ryanair, ITA, easyJet. Post-Brexit: CE 261 ancora valido da Roma. ENAC.";
const publishDate = "2026-03-23";

const faqData = [
  {
    question: "Quanto spetta per un volo Roma–Londra in ritardo?",
    answer: "Roma FCO–Londra LHR è circa 1.440 km → fascia ≤1500 km → €250 di risarcimento CE 261/2004. Il ritardo all'arrivo deve superare le 3 ore. Per Roma CIA–Londra STN (Ryanair) è circa 1.520 km → possibilmente €400: verifica la distanza esatta del tuo volo."
  },
  {
    question: "Post-Brexit: il CE 261 si applica ancora sui voli Roma–Londra?",
    answer: "Sì, ma dipende dalla direzione e dal vettore: (1) Roma → Londra con qualsiasi vettore: CE 261 si applica sempre (partenza da UE). (2) Londra → Roma con vettore UE (ITA, easyJet, Ryanair Ireland): CE 261 si applica. (3) Londra → Roma con vettore UK (British Airways, Virgin Atlantic): si applica UK261 (equivalente britannico del CE 261, stessi importi). In pratica i tuoi diritti sono protetti in tutti i casi."
  },
  {
    question: "Londra ha cinque aeroporti. Tutti coperti dal CE 261?",
    answer: "Sì. LHR (Heathrow), LGW (Gatwick), STN (Stansted), LTN (Luton) e LCY (City) sono tutti aeroporti UK nella stessa area metropolitana. Il CE 261 si applica allo stesso modo a tutti. La scelta dell'aeroporto UK dipende dal vettore: BA usa LHR, Ryanair usa STN, easyJet usa LGW/LTN, ITA usa LHR."
  },
  {
    question: "British Airways ha cancellato il mio volo Roma–Londra. Ho il CE 261 o UK261?",
    answer: "Se il volo parte da Roma FCO (UE): CE 261/2004 italiano (ENAC). Se il volo parte da Londra LHR (UK): UK261 (CAA britannica). British Airways deve rispettare entrambi: CE 261 per i voli da Roma, UK261 per i voli da Londra. Gli importi sono identici (€250 o equivalente in sterline)."
  },
  {
    question: "Ryanair vola da Roma Ciampino (CIA) verso Stansted (STN). È coperto dal CE 261?",
    answer: "Sì. Roma CIA è un aeroporto italiano nell'UE. Il CE 261 si applica a qualsiasi volo in partenza da CIA, inclusi i voli Ryanair per Londra Stansted. Ryanair (sede in Irlanda, vettore UE) è soggetta al CE 261 per i voli da aeroporti italiani."
  },
  {
    question: "Qual è l'autorità competente per un volo Roma–Londra?",
    answer: "Per i voli in partenza da Roma (FCO o CIA): ENAC (Ente Nazionale per l'Aviazione Civile). Per i voli in partenza da Londra (LHR, LGW, STN, LTN, LCY): CAA (Civil Aviation Authority UK) per UK261, oppure ENAC se il vettore è UE."
  }
];

export default function RomaLondraVoloRitardoRisarcimento() {
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
      <section className="bg-gradient-to-br from-red-800 via-red-700 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-red-200 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Rotta Roma → Londra</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Volo Roma–Londra Cancellato o in Ritardo: <span className="text-yellow-400">Fino a €250</span>
          </h1>
          <p className="text-xl text-red-100 mb-8">
            British Airways, Ryanair, ITA, easyJet: partendo da Roma hai diritto a €250 CE 261/2004. Post-Brexit: la tutela è ancora garantita. Guida 2026.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Euro className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">€250 a passeggero</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-red-200" />
              <span>Ritardo &gt; 3 ore</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Plane className="w-5 h-5 text-green-300" />
              <span>~1.440 km FCO–LHR</span>
            </div>
          </div>
          <Link
            href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            className="inline-flex items-center gap-2 bg-yellow-400 text-red-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-300 transition-colors text-lg"
          >
            Verifica il tuo rimborso gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Post-Brexit banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 flex gap-4">
          <Info className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
          <div>
            <p className="font-bold text-blue-800 mb-1">Post-Brexit: i tuoi diritti da Roma verso Londra sono invariati</p>
            <p className="text-blue-700 text-sm">
              Il Brexit non ha cambiato i diritti dei passeggeri che partono dall&apos;Italia. Il CE 261/2004 si applica a <strong>tutti</strong> i voli in partenza da Roma (FCO o CIA), indipendentemente dalla destinazione o dal vettore. Anche British Airways deve rispettare il CE 261 per i voli da Roma.
            </p>
          </div>
        </div>

        {/* Distances & amounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Distanza e Importo del Risarcimento</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-red-800 text-white">
                  <th className="px-4 py-3 text-left">Tratta</th>
                  <th className="px-4 py-3 text-center">Distanza</th>
                  <th className="px-4 py-3 text-center">Risarcimento CE 261</th>
                  <th className="px-4 py-3 text-center">Vettori</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Roma FCO → Londra LHR</td>
                  <td className="px-4 py-3 text-center">~1.440 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">BA, ITA</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Roma CIA → Londra STN</td>
                  <td className="px-4 py-3 text-center">~1.520 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€400</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Roma FCO → Londra LGW</td>
                  <td className="px-4 py-3 text-center">~1.500 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">easyJet, BA</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Roma FCO → Londra LHR (connessione NY JFK)</td>
                  <td className="px-4 py-3 text-center">~8.600 km (totale)</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€600</td>
                  <td className="px-4 py-3 text-center">BA, ITA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              <strong>Attenzione soglia Roma CIA–STN:</strong> la rotta Ciampino–Stansted supera di poco i 1.500 km → €400 invece di €250. Usa sempre il calcolatore ClaimWinger per la distanza esatta del tuo volo specifico.
            </p>
          </div>
        </section>

        {/* Carriers & airports table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vettori e Aeroporti Roma–Londra</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-red-800 text-white">
                  <th className="px-4 py-3 text-left">Compagnia</th>
                  <th className="px-4 py-3 text-center">Codice</th>
                  <th className="px-4 py-3 text-center">Da Roma</th>
                  <th className="px-4 py-3 text-center">A Londra</th>
                  <th className="px-4 py-3 text-center">Normativa applicabile</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">British Airways</td>
                  <td className="px-4 py-3 text-center">BA</td>
                  <td className="px-4 py-3 text-center">FCO</td>
                  <td className="px-4 py-3 text-center">LHR</td>
                  <td className="px-4 py-3 text-center text-blue-700">CE 261 (da Roma)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Ryanair</td>
                  <td className="px-4 py-3 text-center">FR</td>
                  <td className="px-4 py-3 text-center">CIA</td>
                  <td className="px-4 py-3 text-center">STN</td>
                  <td className="px-4 py-3 text-center text-blue-700">CE 261 (da Roma)</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">ITA Airways</td>
                  <td className="px-4 py-3 text-center">AZ</td>
                  <td className="px-4 py-3 text-center">FCO</td>
                  <td className="px-4 py-3 text-center">LHR</td>
                  <td className="px-4 py-3 text-center text-blue-700">CE 261 (da Roma)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">easyJet</td>
                  <td className="px-4 py-3 text-center">U2</td>
                  <td className="px-4 py-3 text-center">FCO</td>
                  <td className="px-4 py-3 text-center">LGW / LTN</td>
                  <td className="px-4 py-3 text-center text-blue-700">CE 261 (da Roma)</td>
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
                <li>✓ Ritardo all&apos;arrivo a Londra oltre 3 ore</li>
                <li>✓ Cancellazione con meno di 14 giorni di preavviso</li>
                <li>✓ Imbarco negato (overbooking)</li>
                <li>✓ Partenza da FCO o CIA (Italia/UE)</li>
                <li>✓ Qualsiasi vettore: BA, Ryanair, ITA, easyJet</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-blue-800">Da Londra verso Roma (post-Brexit)</h3>
              </div>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>🇬🇧 Vettore UK (BA, Virgin): UK261 (CAA)</li>
                <li>🇪🇺 Vettore UE (ITA, easyJet, Ryanair IE): CE 261 (ENAC)</li>
                <li>Importi identici in entrambi i casi</li>
                <li>Controlla il codice vettore sulla carta imbarco</li>
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
              <p className="text-sm text-gray-600">BA, Ryanair, ITA, easyJet: portale online o email. Risposta: 4–8 settimane.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. ENAC</h3>
              <p className="text-sm text-gray-600">Per voli da aeroporti italiani. Se il vettore non risponde, segnala a ENAC.</p>
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
        <section className="bg-gradient-to-r from-red-700 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Volo Roma–Londra Cancellato o in Ritardo?</h2>
          <p className="text-red-100 mb-6">
            Verifica subito se hai diritto a €250. ClaimWinger gestisce tutto il processo, anche contro British Airways. Paghi solo se otteniamo il risarcimento (30%).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-red-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-300 transition-colors"
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
