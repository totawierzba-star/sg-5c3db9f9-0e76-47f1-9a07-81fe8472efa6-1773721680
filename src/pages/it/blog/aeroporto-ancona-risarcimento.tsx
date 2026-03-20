import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-ancona-risarcimento";
const title = "Aeroporto Ancona AOI (Falconara): Risarcimento Voli 2026 — Guida CE 261";
const description = "Volo in ritardo o cancellato ad Ancona AOI? CE 261/2004, fino a €400, Ryanair, Wizz Air, voli stagionali. Procedura ENAC completa. Guida 2026.";
const publishDate = "2026-03-22";

const faqData = [
  {
    question: "Quanto vale il risarcimento per un volo da Ancona AOI?",
    answer: "Dipende dalla distanza: Ancona verso Roma FCO ~€250 (≤1500 km), verso Milano MXP ~€250, verso Londra STN ~€250 (~1.350 km), verso Berlino BER ~€250 (~1.300 km), verso Bucarest OTP ~€250 (~1.400 km), verso Varsavia WAW ~€400 (~1.600 km). Il ritardo deve essere oltre 3 ore all'arrivo."
  },
  {
    question: "Ancona AOI: che aeroporto è?",
    answer: "L'Aeroporto delle Marche (AOI, Falconara Marittima) è il principale scalo delle Marche, situato a circa 15 km da Ancona. È un aeroporto medio-piccolo con traffico prevalentemente leisure e stagionale. Dista circa 50 km da Pesaro, 45 km da Fano e 35 km da Jesi."
  },
  {
    question: "Wizz Air opera ad Ancona. Posso fare reclamo CE 261 contro di loro?",
    answer: "Sì. Wizz Air è un vettore ungherese (UE), quindi il CE 261/2004 si applica pienamente ai voli operati da Wizz Air in partenza da Ancona AOI. Wizz Air ha l'obbligo di pagare il risarcimento CE 261 in caso di ritardo oltre 3 ore o cancellazione."
  },
  {
    question: "I ritardi estivi ad Ancona sono circostanze straordinarie?",
    answer: "No. La stagionalità estiva nelle Marche è prevedibile: i vettori conoscono il picco di traffico estivo. I ritardi dovuti alla congestione stagionale non sono circostanze straordinarie. Il vettore deve pagare il risarcimento CE 261."
  },
  {
    question: "L'aeroporto di Ancona è piccolo. Le compagnie rispettano il CE 261 anche qui?",
    answer: "Il CE 261/2004 si applica a tutti gli aeroporti dell'UE, indipendentemente dalle dimensioni. Anche un aeroporto regionale come Ancona AOI è coperto. I diritti dei passeggeri sono gli stessi sia che si voli da Roma Fiumicino che da Ancona Falconara."
  },
  {
    question: "Qual è l'autorità competente per reclami da Ancona AOI?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) è competente per tutti i voli in partenza dagli aeroporti italiani, incluso Ancona AOI. Se il vettore non risponde entro 6 settimane o rifiuta ingiustificatamente, puoi presentare reclamo a ENAC."
  }
];

export default function AeroportoAnconaRisarcimento() {
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
      <section className="bg-gradient-to-br from-blue-800 via-indigo-700 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Aeroporto Ancona AOI — Marche</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Aeroporto Ancona AOI: <span className="text-yellow-400">Risarcimento Voli</span> CE 261/2004
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Volo in ritardo o cancellato da Ancona Falconara? Ryanair, Wizz Air e altri vettori: il CE 261/2004 garantisce fino a €400 per passeggero. Guida pratica ENAC 2026.
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
              <span>Aeroporto delle Marche</span>
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

        {/* Airport info */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aeroporto di Ancona AOI: Informazioni Generali</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="px-4 py-3 text-left">Caratteristica</th>
                  <th className="px-4 py-3 text-left">Dettaglio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Codice IATA</td>
                  <td className="px-4 py-3">AOI</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Nome completo</td>
                  <td className="px-4 py-3">Aeroporto delle Marche (Falconara Marittima)</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Distanza da Ancona</td>
                  <td className="px-4 py-3">~15 km</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Vettori principali</td>
                  <td className="px-4 py-3">Ryanair, Wizz Air, vettori charter</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Stagionalità</td>
                  <td className="px-4 py-3">Picco estate, inverno molto ridotto</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Autorità CE 261</td>
                  <td className="px-4 py-3">ENAC (Ente Nazionale per l&apos;Aviazione Civile)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Amounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Importi Risarcimento dalle Principali Rotte da AOI</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="px-4 py-3 text-left">Destinazione</th>
                  <th className="px-4 py-3 text-center">Distanza da AOI</th>
                  <th className="px-4 py-3 text-center">Risarcimento CE 261</th>
                  <th className="px-4 py-3 text-center">Vettori</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Milano MXP/BGY</td>
                  <td className="px-4 py-3 text-center">~400 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">Ryanair, easyJet</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Londra STN/LGW</td>
                  <td className="px-4 py-3 text-center">~1.350 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">Ryanair</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Bucarest OTP</td>
                  <td className="px-4 py-3 text-center">~1.400 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">Wizz Air, Ryanair</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Varsavia WAW/WMI</td>
                  <td className="px-4 py-3 text-center">~1.600 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€400</td>
                  <td className="px-4 py-3 text-center">Ryanair, Wizz Air</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Katowice KTW</td>
                  <td className="px-4 py-3 text-center">~1.550 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€400</td>
                  <td className="px-4 py-3 text-center">Wizz Air</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>Rotte verso Est Europa:</strong> Ancona ha forti connessioni con Polonia, Romania e paesi dell&apos;Est Europa, soprattutto grazie a Wizz Air. Molte di queste rotte superano i 1.500 km → risarcimento €400.
            </p>
          </div>
        </section>

        {/* Wizz Air specific */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Wizz Air ad Ancona: Cosa Sapere</h2>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-4">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-purple-800 mb-1">Wizz Air è un vettore ungherese (UE): CE 261 applicabile</p>
                <p className="text-purple-700 text-sm">
                  Wizz Air (W6) ha sede in Ungheria ed è soggetta al CE 261/2004. Se hai un volo Wizz Air in partenza da Ancona con ritardo oltre 3 ore o cancellazione, hai pieno diritto al risarcimento. Wizz Air gestisce i reclami principalmente tramite la propria app e sito web.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-white border border-gray-200 rounded-lg p-4">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Wizz Air All-Inclusive: non influisce sul CE 261</p>
                <p className="text-gray-600 text-sm">Il tipo di tariffa acquistata (base, Plus, All-Inclusive) non influenza i diritti CE 261. Tutti i passeggeri hanno gli stessi diritti, indipendentemente dalla tariffa pagata.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-white border border-gray-200 rounded-lg p-4">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Wizz Credit vs pagamento in denaro</p>
                <p className="text-gray-600 text-sm">Wizz Air può offrire credito sulla piattaforma invece del pagamento in denaro. Hai il diritto di rifiutare e richiedere il pagamento in denaro ai sensi del CE 261.</p>
              </div>
            </div>
          </div>
        </section>

        {/* When CE261 applies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quando si Applica il CE 261/2004 da Ancona AOI</h2>
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
                <li>✓ Qualsiasi vettore (Ryanair, Wizz Air, charter)</li>
                <li>✓ Tutti i voli in partenza da AOI (Marche/UE)</li>
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
                <li>⚠ Stagionalità estiva: NON è straordinaria</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to claim */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Come Richiedere il Risarcimento da Ancona</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Reclamo diretto</h3>
              <p className="text-sm text-gray-600">Ryanair: portale online. Wizz Air: app o sito. Rispondi entro 2 anni dall&apos;evento.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. ENAC</h3>
              <p className="text-sm text-gray-600">Se la compagnia non risponde o rifiuta, presenta reclamo a ENAC (aeroporto di partenza italiano).</p>
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
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Volo in Ritardo o Cancellato da Ancona AOI?</h2>
          <p className="text-blue-100 mb-6">
            Verifica subito il tuo diritto al risarcimento. ClaimWinger gestisce tutto il processo contro Ryanair, Wizz Air e altri vettori. Paghi solo se otteniamo il risarcimento (30%).
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
