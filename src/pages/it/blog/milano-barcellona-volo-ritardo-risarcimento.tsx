import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "milano-barcellona-volo-ritardo-risarcimento";
const title = "Volo Milano–Barcellona Cancellato o in Ritardo: Risarcimento CE 261 — Guida 2026";
const description = "Volo Milano–Barcellona cancellato o in ritardo? Hai diritto a €250 CE 261/2004. Vueling, easyJet, Ryanair, ITA Airways: procedura ENAC completa. Guida 2026.";
const publishDate = "2026-03-21";

const faqData = [
  {
    question: "Quanto spetta per un volo Milano–Barcellona in ritardo?",
    answer: "Milano MXP–Barcellona BCN è circa 900 km, quindi nella fascia ≤1500 km → €250 di risarcimento CE 261/2004. Il ritardo all'arrivo deve superare le 3 ore, oppure il volo deve essere cancellato con meno di 14 giorni di preavviso senza adeguate alternative."
  },
  {
    question: "Volo da Milano Bergamo (BGY) o Linate (LIN). Vale il CE 261?",
    answer: "Sì. BGY (Orio al Serio) e LIN (Linate) sono aeroporti italiani nell'UE, esattamente come MXP (Malpensa). Il CE 261 si applica a tutti i voli in partenza da qualsiasi aeroporto italiano. Ryanair usa BGY, easyJet usa MXP, Vueling usa MXP e BCN."
  },
  {
    question: "Vueling fa parte di IAG (come Iberia). Il reclamo va a Vueling o a Iberia?",
    answer: "Il reclamo va SEMPRE al vettore operativo, non al gruppo. Se il tuo volo è operato da Vueling (codice VY sulla carta d'imbarco), il reclamo va a Vueling. Se il volo è in codeshare Iberia ma operato da Vueling, il reclamo va a Vueling. Non importa che appartengano entrambi a IAG."
  },
  {
    question: "Barcellona ha due aeroporti?",
    answer: "No, Barcellona ha un unico aeroporto internazionale: BCN (Josep Tarradellas Barcelona-El Prat). Girona (GRO) e Reus (REU) sono aeroporti nelle vicinanze usati da alcuni low-cost, ma distano 90–100 km da Barcellona. Se hai prenotato 'Barcellona' assicurati di avere il giusto aeroporto sul biglietto."
  },
  {
    question: "Ryanair da Milano vola verso Barcellona o verso Girona?",
    answer: "Ryanair usa sia GRO (Girona, ~90 km da Barcellona) che BCN per i voli da Milano BGY. Controlla sempre il codice aeroporto sul biglietto: GRO e BCN sono aeroporti diversi. Il CE 261 si applica allo stesso modo in entrambi i casi, poiché entrambi sono aeroporti spagnoli nell'UE."
  },
  {
    question: "Qual è l'autorità competente per un volo Milano–Barcellona?",
    answer: "Per i voli in partenza dall'Italia (MXP, BGY, LIN): ENAC (Ente Nazionale per l'Aviazione Civile). Per i voli in partenza dalla Spagna (BCN → Milano): AESA (Agencia Estatal de Seguridad Aérea). Entrambe applicano il CE 261/2004."
  }
];

export default function MilanoBarcellonaVoloRitardoRisarcimento() {
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
      <section className="bg-gradient-to-br from-red-800 via-yellow-700 to-orange-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-yellow-200 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Rotta Milano → Barcellona</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Volo Milano–Barcellona Cancellato o in Ritardo: <span className="text-yellow-300">€250 di Risarcimento</span>
          </h1>
          <p className="text-xl text-yellow-100 mb-8">
            Vueling, easyJet, Ryanair, ITA Airways: partendo da Milano hai diritto a €250 CE 261/2004 per ritardi oltre 3 ore o cancellazioni. Guida 2026.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Euro className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">€250 a passeggero</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-yellow-200" />
              <span>Ritardo &gt; 3 ore</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Plane className="w-5 h-5 text-green-300" />
              <span>~900 km</span>
            </div>
          </div>
          <Link
            href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            className="inline-flex items-center gap-2 bg-yellow-300 text-red-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-200 transition-colors text-lg"
          >
            Verifica il tuo rimborso gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Airports info */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-10 flex gap-4">
          <Info className="w-6 h-6 text-orange-600 mt-0.5 shrink-0" />
          <div>
            <p className="font-bold text-orange-800 mb-1">Attenzione: Milano ha 3 aeroporti, Barcellona 1 principale</p>
            <p className="text-orange-700 text-sm">
              Milano: MXP (Malpensa), LIN (Linate), BGY (Bergamo Orio al Serio). Barcellona: BCN (El Prat) principale + GRO (Girona, ~90 km) e REU (Reus, ~100 km) usati da low-cost. Verifica sempre il codice aeroporto sul biglietto.
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
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Milano MXP → Barcellona BCN</td>
                  <td className="px-4 py-3 text-center">~900 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Milano BGY → Barcellona BCN</td>
                  <td className="px-4 py-3 text-center">~860 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Milano BGY → Girona GRO (Ryanair)</td>
                  <td className="px-4 py-3 text-center">~820 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Milano MXP → Barcellona BCN → Cancún CUN</td>
                  <td className="px-4 py-3 text-center">~9.700 km (totale)</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€600</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Carriers table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vettori sulla Rotta Milano–Barcellona</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-red-800 text-white">
                  <th className="px-4 py-3 text-left">Compagnia</th>
                  <th className="px-4 py-3 text-center">Codice</th>
                  <th className="px-4 py-3 text-center">Da Milano</th>
                  <th className="px-4 py-3 text-center">A Barcellona</th>
                  <th className="px-4 py-3 text-center">Gruppo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Vueling</td>
                  <td className="px-4 py-3 text-center">VY</td>
                  <td className="px-4 py-3 text-center">MXP</td>
                  <td className="px-4 py-3 text-center">BCN</td>
                  <td className="px-4 py-3 text-center">IAG</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">easyJet</td>
                  <td className="px-4 py-3 text-center">U2</td>
                  <td className="px-4 py-3 text-center">MXP / LIN</td>
                  <td className="px-4 py-3 text-center">BCN</td>
                  <td className="px-4 py-3 text-center">Indipendente</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Ryanair</td>
                  <td className="px-4 py-3 text-center">FR</td>
                  <td className="px-4 py-3 text-center">BGY / MXP</td>
                  <td className="px-4 py-3 text-center">BCN / GRO</td>
                  <td className="px-4 py-3 text-center">Indipendente</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">ITA Airways</td>
                  <td className="px-4 py-3 text-center">AZ</td>
                  <td className="px-4 py-3 text-center">MXP / LIN</td>
                  <td className="px-4 py-3 text-center">BCN</td>
                  <td className="px-4 py-3 text-center">Lufthansa Group (parz.)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              <strong>Vueling ≠ Iberia ≠ Iberia Express:</strong> tutti e tre fanno parte di IAG, ma sono entità legali separate con codici diversi (VY, IB, I2). Il reclamo CE 261 va sempre al vettore operativo: controlla il codice a 2 lettere sulla carta d&apos;imbarco.
            </p>
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
                <li>✓ Ritardo all&apos;arrivo a BCN/GRO oltre 3 ore</li>
                <li>✓ Cancellazione con meno di 14 giorni di preavviso</li>
                <li>✓ Imbarco negato (overbooking)</li>
                <li>✓ Partenza da MXP, BGY o LIN (Italia/UE)</li>
                <li>✓ Qualsiasi vettore UE o non-UE che parte dall&apos;Italia</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-red-800">Eccezioni e attenzioni</h3>
              </div>
              <ul className="space-y-2 text-sm text-red-700">
                <li>✗ Sciopero controllori ATC (può essere straordinario)</li>
                <li>✗ Meteo davvero eccezionale e imprevedibile</li>
                <li>⚠ Ryanair da BGY a GRO: verifica che sia davvero &quot;Barcellona&quot; sul biglietto</li>
                <li>⚠ Codeshare: il reclamo va al vettore operativo (codice sulla carta imbarco)</li>
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
              <p className="text-sm text-gray-600">Contatta Vueling, easyJet o Ryanair via portale online. Risposta attesa: 4–8 settimane.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. ENAC</h3>
              <p className="text-sm text-gray-600">Per voli da Milano. Se la compagnia non risponde entro 8 settimane, segnala a ENAC.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. ClaimWinger</h3>
              <p className="text-sm text-gray-600">Gestione completa del reclamo. Solo 30% del risarcimento, niente da pagare in anticipo.</p>
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
        <section className="bg-gradient-to-r from-red-700 to-orange-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Volo Milano–Barcellona Cancellato o in Ritardo?</h2>
          <p className="text-red-100 mb-6">
            Verifica subito se hai diritto a €250. ClaimWinger gestisce tutto il processo, anche contro Ryanair e Vueling. Paghi solo se otteniamo il risarcimento (30%).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
              className="inline-flex items-center justify-center gap-2 bg-yellow-300 text-red-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-200 transition-colors"
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
