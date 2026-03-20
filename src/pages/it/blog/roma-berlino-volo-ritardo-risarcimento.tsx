import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "roma-berlino-volo-ritardo-risarcimento";
const title = "Volo Roma–Berlino Cancellato o in Ritardo: Risarcimento CE 261 — Guida 2026";
const description = "Volo Roma–Berlino cancellato o in ritardo? Hai diritto a €250 o €400 CE 261/2004. Ryanair, Lufthansa, ITA Airways, easyJet: procedura completa ENAC. Guida 2026.";
const publishDate = "2026-03-21";

const faqData = [
  {
    question: "Quanto spetta per un volo Roma–Berlino in ritardo?",
    answer: "Dipende dall'aeroporto di partenza e di arrivo: Roma FCO/CIA–Berlino BER è circa 1.450 km, quindi nella fascia ≤1500 km → €250 di risarcimento CE 261/2004. Il ritardo all'arrivo deve superare le 3 ore."
  },
  {
    question: "Berlino ha un solo aeroporto o più?",
    answer: "Dal 2020 Berlino ha un solo aeroporto internazionale: BER (Brandenburg Airport). I vecchi aeroporti Tegel (TXL) e Schönefeld (SXF) sono definitivamente chiusi. Tutti i voli per/da Berlino utilizzano BER."
  },
  {
    question: "Ho il volo da Roma Ciampino (CIA) con Ryanair. Vale il CE 261?",
    answer: "Sì, assolutamente. CIA è un aeroporto italiano nell'UE. Il CE 261 si applica a tutti i voli in partenza da CIA, inclusi quelli Ryanair. Roma Fiumicino (FCO) e Roma Ciampino (CIA) sono entrambi aeroporti romani, ambedue nell'UE."
  },
  {
    question: "Ryanair sostiene che il ritardo è dovuto a traffico ATC. Hanno ragione?",
    answer: "Parzialmente. La Corte di Giustizia UE ha stabilito che le restrizioni ATC (Air Traffic Control) possono essere circostanze straordinarie, ma solo se eccezionali e imprevedibili. Le normali restrizioni ATC di routine non sono sufficienti. Ryanair deve dimostrare che lo specifico ritardo ATC era davvero straordinario."
  },
  {
    question: "Ho perso il collegamento a Berlino per un altro volo internazionale. Cosa succede?",
    answer: "Se hai un unico PNR (es. Roma–Berlino–Tokyo), il risarcimento si calcola sulla distanza totale Roma–Tokyo (>3500 km = €600). Se le prenotazioni sono separate, ogni tratta è indipendente e il vettore non è responsabile della coincidenza persa."
  },
  {
    question: "Qual è l'autorità competente per un volo Roma–Berlino?",
    answer: "Per i voli in partenza dall'Italia: ENAC (Ente Nazionale per l'Aviazione Civile). Per i voli in partenza dalla Germania (Berlino → Roma): LBA (Luftfahrt-Bundesamt). Entrambe applicano il CE 261/2004."
  }
];

export default function RomaBerlinoVoloRitardoRisarcimento() {
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
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Rotta Roma → Berlino</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Volo Roma–Berlino Cancellato o in Ritardo: <span className="text-yellow-400">Fino a €250</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Ryanair, Lufthansa, ITA Airways, easyJet: partendo da Roma hai diritto a €250 CE 261/2004 per ritardi oltre 3 ore o cancellazioni. Guida 2026.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Euro className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">€250 a passeggero</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-blue-300" />
              <span>Ritardo &gt; 3 ore</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Plane className="w-5 h-5 text-green-300" />
              <span>~1.450 km</span>
            </div>
          </div>
          <Link
            href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-300 transition-colors text-lg"
          >
            Verifica il tuo rimborso gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Airport info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 flex gap-4">
          <Info className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
          <div>
            <p className="font-bold text-blue-800 mb-1">Berlino BER: l&apos;aeroporto unico dal 2020</p>
            <p className="text-blue-700 text-sm">
              Dal 3 novembre 2020 Berlino opera con un unico hub: <strong>BER (Berlin Brandenburg Airport)</strong>. Tegel (TXL) e Schönefeld (SXF) sono chiusi. Tutti i vettori — Ryanair, Lufthansa, easyJet, ITA Airways — usano BER.
            </p>
          </div>
        </div>

        {/* Distances & amounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Distanza e Importo del Risarcimento</h2>
          <p className="text-gray-700 mb-4">
            La rotta Roma–Berlino misura circa <strong>1.450 km</strong>, nella fascia ≤1.500 km del CE 261. L&apos;importo è <strong>€250 per passeggero</strong>. Attenzione: la soglia è la distanza reale del volo, non in linea d&apos;aria.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left">Tratta</th>
                  <th className="px-4 py-3 text-center">Distanza</th>
                  <th className="px-4 py-3 text-center">Risarcimento CE 261</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Roma FCO → Berlino BER</td>
                  <td className="px-4 py-3 text-center">~1.450 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Roma CIA → Berlino BER</td>
                  <td className="px-4 py-3 text-center">~1.440 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Roma FCO → Berlino BER (connessione Oslo OSL)</td>
                  <td className="px-4 py-3 text-center">~2.900 km (totale)</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€400</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Roma FCO → Berlino BER (connessione New York JFK)</td>
                  <td className="px-4 py-3 text-center">~8.300 km (totale)</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€600</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              <strong>Attenzione alla soglia 1.500 km:</strong> Roma–Berlino è circa 1.450 km, nella fascia €250. Se la rotta specifica misurasse oltre 1.500 km, l&apos;importo salirebbe a €400. Usa il calcolatore ClaimWinger per la distanza esatta del tuo volo.
            </p>
          </div>
        </section>

        {/* Carriers table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vettori sulla Rotta Roma–Berlino</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left">Compagnia</th>
                  <th className="px-4 py-3 text-center">Codice</th>
                  <th className="px-4 py-3 text-center">Da Roma</th>
                  <th className="px-4 py-3 text-center">Tipo volo</th>
                  <th className="px-4 py-3 text-center">Autorità reclamo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Ryanair</td>
                  <td className="px-4 py-3 text-center">FR</td>
                  <td className="px-4 py-3 text-center">CIA (Ciampino)</td>
                  <td className="px-4 py-3 text-center">Diretto</td>
                  <td className="px-4 py-3 text-center">ENAC</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Lufthansa</td>
                  <td className="px-4 py-3 text-center">LH</td>
                  <td className="px-4 py-3 text-center">FCO (Fiumicino)</td>
                  <td className="px-4 py-3 text-center">Diretto / via MUC/FRA</td>
                  <td className="px-4 py-3 text-center">ENAC</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">ITA Airways</td>
                  <td className="px-4 py-3 text-center">AZ</td>
                  <td className="px-4 py-3 text-center">FCO (Fiumicino)</td>
                  <td className="px-4 py-3 text-center">Diretto</td>
                  <td className="px-4 py-3 text-center">ENAC</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">easyJet</td>
                  <td className="px-4 py-3 text-center">U2</td>
                  <td className="px-4 py-3 text-center">FCO / CIA</td>
                  <td className="px-4 py-3 text-center">Diretto</td>
                  <td className="px-4 py-3 text-center">ENAC</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-700 text-sm">
              <strong>Volo in codeshare Lufthansa/ITA:</strong> se il tuo biglietto mostra un codice LH ma il volo è operato da ITA Airways (AZ), il reclamo va a <strong>ITA Airways</strong> (vettore operativo), non a Lufthansa. Controlla sempre il codice del vettore operativo sulla carta d&apos;imbarco.
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
                <li>✓ Ritardo all&apos;arrivo a BER oltre 3 ore</li>
                <li>✓ Cancellazione con meno di 14 giorni di preavviso</li>
                <li>✓ Imbarco negato (overbooking)</li>
                <li>✓ Partenza da FCO o CIA (Italia/UE)</li>
                <li>✓ Qualsiasi vettore (Ryanair, LH, ITA, U2)</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-red-800">Attenzioni specifiche</h3>
              </div>
              <ul className="space-y-2 text-sm text-red-700">
                <li>✗ Circostanze straordinarie genuine (sciopero ATC eccezionale)</li>
                <li>✗ Ritardo inferiore a 3 ore all&apos;arrivo</li>
                <li>✗ Cancellazione con oltre 14 giorni + rimborso/riprotezione adeguata</li>
                <li>⚠ Ryanair invoca spesso ATC — verifica se è eccezionale o routinario</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ryanair specific */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ryanair Roma–Berlino: Cosa Sapere</h2>
          <p className="text-gray-700 mb-4">
            Ryanair è il vettore più usato sulla Roma–Berlino, specialmente da Ciampino (CIA). Alcune particolarità:
          </p>
          <div className="space-y-3 mb-4">
            <div className="flex gap-3 items-start bg-white border border-gray-200 rounded-lg p-4">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Sciopero del personale Ryanair</p>
                <p className="text-gray-600 text-sm">La Corte UE ha stabilito che gli scioperi interni del personale Ryanair <strong>non</strong> sono circostanze straordinarie, poiché sono prevedibili e rientrano nel controllo aziendale. Ryanair deve pagare il risarcimento.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-white border border-gray-200 rounded-lg p-4">
              <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Richiesta online Ryanair</p>
                <p className="text-gray-600 text-sm">Ryanair gestisce i reclami CE 261 solo tramite il portale online. Invia la richiesta entro 2 anni dall&apos;evento. Se rifiutano o non rispondono entro 28 giorni, contatta ENAC o ClaimWinger.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-white border border-gray-200 rounded-lg p-4">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Voucher Ryanair</p>
                <p className="text-gray-600 text-sm">Ryanair spesso propone un voucher di valore simile al risarcimento. Non sei obbligato ad accettarlo: hai diritto al pagamento in denaro.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to claim */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Come Richiedere il Risarcimento</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Reclamo diretto</h3>
              <p className="text-sm text-gray-600">Contatta la compagnia direttamente. Ryanair: portale online. Lufthansa/ITA: email o modulo ufficiale.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. ENAC</h3>
              <p className="text-sm text-gray-600">Se la compagnia non risponde o rifiuta senza valide ragioni, presenta reclamo a ENAC. Processo di 3–9 mesi.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. ClaimWinger</h3>
              <p className="text-sm text-gray-600">Gestione completa. Paghi solo se vinci (30% del risarcimento). Nessun anticipo, nessun rischio.</p>
            </div>
          </div>
        </section>

        {/* Authorities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Autorità Competenti</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left">Tratta</th>
                  <th className="px-4 py-3 text-left">Autorità CE 261</th>
                  <th className="px-4 py-3 text-left">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Roma FCO/CIA → Berlino BER</td>
                  <td className="px-4 py-3 font-medium">ENAC (Italia)</td>
                  <td className="px-4 py-3 text-gray-600">Competente per voli in partenza dall&apos;Italia</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Berlino BER → Roma FCO/CIA</td>
                  <td className="px-4 py-3 font-medium">LBA (Germania)</td>
                  <td className="px-4 py-3 text-gray-600">Luftfahrt-Bundesamt competente per partenze dalla Germania</td>
                </tr>
              </tbody>
            </table>
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
        <section className="bg-gradient-to-r from-gray-700 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Volo Roma–Berlino Cancellato o in Ritardo?</h2>
          <p className="text-gray-200 mb-6">
            Verifica subito se hai diritto a €250. ClaimWinger gestisce tutto il processo, anche contro Ryanair. Paghi solo se otteniamo il risarcimento (30%).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-300 transition-colors"
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
