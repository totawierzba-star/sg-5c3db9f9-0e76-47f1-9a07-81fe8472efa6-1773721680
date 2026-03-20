import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "milano-dubai-ritardo-risarcimento";
const title = "Volo Milano–Dubai Cancellato o in Ritardo: €600 di Risarcimento — Guida 2026";
const description = "Volo Milano–Dubai cancellato o in ritardo? Hai diritto a €600 CE 261/2004. Emirates, flydubai, ITA Airways: procedura completa, ENAC vs GCAA. Guida 2026.";
const publishDate = "2026-03-21";

const faqData = [
  {
    question: "Quanto spetta per un volo Milano–Dubai cancellato o in ritardo?",
    answer: "Milano MXP–Dubai DXB è circa 5.250 km, quindi superiore a 3500 km → €600 di risarcimento CE 261/2004. Il ritardo all'arrivo deve superare le 3 ore, oppure il volo deve essere stato cancellato senza adeguate alternative entro 14 giorni prima della partenza."
  },
  {
    question: "Emirates è extra-UE. Il CE 261 si applica al volo Milano–Dubai?",
    answer: "Sì! Il CE 261/2004 si applica a TUTTI i voli in partenza da aeroporti UE, indipendentemente dalla nazionalità del vettore. Milano MXP è in Italia (UE), quindi Emirates deve rispettare CE 261 per i voli Milano–Dubai. Lo stesso vale per flydubai."
  },
  {
    question: "Ho un volo Dubai–Milano con Emirates in ritardo. Ho diritto al risarcimento?",
    answer: "No. Il volo parte da Dubai (Emirati Arabi Uniti, non UE) con un vettore degli Emirati. Il CE 261 non si applica. Potresti avere diritti ai sensi della normativa emiratina (GCAA), ma diversi dal CE 261. Per il volo opposto (Milano → Dubai), il CE 261 si applica pienamente."
  },
  {
    question: "Emirates mi ha offerto un voucher invece dei €600. Devo accettarlo?",
    answer: "No. Il CE 261/2004 garantisce il pagamento in denaro. Un voucher può essere accettato solo se lo accetti volontariamente e per iscritto. Hai il diritto di esigere €600 in contanti, bonifico bancario o accredito su carta di credito."
  },
  {
    question: "Ho perso una coincidenza a Dubai per il ritardo del volo Milano–Dubai. Cosa succede?",
    answer: "Se hai un unico PNR (es. Milano–Dubai–Bangkok), il risarcimento si calcola sulla distanza totale Milano–Bangkok (~9.500 km = €600). Se le prenotazioni sono separate, ogni tratta è indipendente e Emirates non è obbligata a riprotegguerti per il volo Dubai–Bangkok."
  },
  {
    question: "Qual è l'autorità competente per un volo Milano–Dubai?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) è competente per i voli in partenza dall'Italia, anche se il vettore è Emirates o flydubai. ENAC può avviare procedimenti contro vettori extra-UE per voli da aeroporti italiani."
  },
  {
    question: "Volo da Milano Linate (LIN) o Bergamo Orio al Serio (BGY) per Dubai. Il CE 261 si applica?",
    answer: "Sì. LIN e BGY sono aeroporti italiani nell'UE. Il CE 261 si applica a qualsiasi volo in partenza da questi aeroporti verso Dubai, indipendentemente dal vettore. Emirates e flydubai operano principalmente da MXP, ma la regola è la stessa."
  }
];

export default function MilanoDubaiRitardoRisarcimento() {
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Rotta Milano → Dubai</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Volo Milano–Dubai Cancellato o in Ritardo: <span className="text-yellow-400">€600 di Risarcimento</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Emirates, flydubai, ITA Airways: se parti da Milano hai diritto a €600 CE 261/2004 per ritardi oltre 3 ore o cancellazioni. Guida pratica 2026.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Euro className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Fino a €600</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-blue-300" />
              <span>Ritardo &gt; 3 ore</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Plane className="w-5 h-5 text-green-300" />
              <span>~5.250 km</span>
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

        {/* Extra-UE rule banner */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-10 flex gap-4">
          <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
          <div>
            <p className="font-bold text-green-800 mb-1">CE 261 si applica da Milano, anche con Emirates</p>
            <p className="text-green-700 text-sm">
              Emirates e flydubai sono vettori degli Emirati Arabi (extra-UE). Tuttavia, il Regolamento CE 261/2004 si applica a <strong>tutti</strong> i voli in partenza da aeroporti dell&apos;Unione Europea, indipendentemente dalla nazionalità della compagnia. Milano Malpensa (MXP) è in Italia (UE): hai pieno diritto al risarcimento CE 261.
            </p>
          </div>
        </div>

        {/* Distances & amounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Distanza e Importo del Risarcimento</h2>
          <p className="text-gray-700 mb-4">
            La rotta Milano Malpensa (MXP) — Dubai (DXB) misura circa <strong>5.250 km</strong>, ben oltre la soglia di 3.500 km prevista dal CE 261/2004. L&apos;importo standard è <strong>€600 per passeggero</strong>.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-4 py-3 text-left">Tratta</th>
                  <th className="px-4 py-3 text-center">Distanza</th>
                  <th className="px-4 py-3 text-center">Risarcimento CE 261</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Milano MXP → Dubai DXB</td>
                  <td className="px-4 py-3 text-center">~5.250 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€600</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Milano MXP → Abu Dhabi AUH</td>
                  <td className="px-4 py-3 text-center">~5.100 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€600</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Milano MXP → Dubai, connessione Bangkok BKK</td>
                  <td className="px-4 py-3 text-center">~9.500 km (totale)</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€600</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Milano MXP → Dubai, connessione Sydney SYD</td>
                  <td className="px-4 py-3 text-center">~16.000 km (totale)</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€600</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>Connessioni con unico PNR:</strong> se hai prenotato Milano–Dubai–Bangkok con un solo numero di prenotazione, il risarcimento si calcola sulla distanza totale. Il fatto che il ritardo sia avvenuto sul tratto MXP–DXB non riduce l&apos;importo.
            </p>
          </div>
        </section>

        {/* Carriers table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vettori sulla Rotta Milano–Dubai</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-4 py-3 text-left">Compagnia</th>
                  <th className="px-4 py-3 text-center">Codice</th>
                  <th className="px-4 py-3 text-center">Aeroporto Milano</th>
                  <th className="px-4 py-3 text-center">Aeroporto Dubai</th>
                  <th className="px-4 py-3 text-center">CE 261 da MXP</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Emirates</td>
                  <td className="px-4 py-3 text-center">EK</td>
                  <td className="px-4 py-3 text-center">MXP</td>
                  <td className="px-4 py-3 text-center">DXB</td>
                  <td className="px-4 py-3 text-center text-green-700 font-bold">Sì</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">flydubai</td>
                  <td className="px-4 py-3 text-center">FZ</td>
                  <td className="px-4 py-3 text-center">MXP</td>
                  <td className="px-4 py-3 text-center">DXB</td>
                  <td className="px-4 py-3 text-center text-green-700 font-bold">Sì</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">ITA Airways</td>
                  <td className="px-4 py-3 text-center">AZ</td>
                  <td className="px-4 py-3 text-center">MXP</td>
                  <td className="px-4 py-3 text-center">DXB</td>
                  <td className="px-4 py-3 text-center text-green-700 font-bold">Sì</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              <strong>flydubai e Emirates:</strong> sono due compagnie distinte con codici operativi separati (FZ e EK), sebbene abbiano una partnership stretta e condividano il terminal 3 di Dubai. Se il tuo biglietto EK è operato da FZ (codeshare), il reclamo va presentato a <strong>flydubai (FZ)</strong>, non a Emirates.
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
                <li>✓ Ritardo all&apos;arrivo oltre 3 ore</li>
                <li>✓ Cancellazione con meno di 14 giorni di preavviso</li>
                <li>✓ Imbarco negato (overbooking)</li>
                <li>✓ Volo in partenza da MXP (Italia/UE)</li>
                <li>✓ Qualsiasi vettore: Emirates, flydubai, ITA</li>
                <li>✓ Volo diretto o con scalo (unico PNR)</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-red-800">CE 261 NON si applica</h3>
              </div>
              <ul className="space-y-2 text-sm text-red-700">
                <li>✗ Volo Dubai → Milano (partenza da paese extra-UE con vettore extra-UE)</li>
                <li>✗ Circostanze straordinarie genuine (es. eruzione vulcanica)</li>
                <li>✗ Ritardo all&apos;arrivo inferiore a 3 ore</li>
                <li>✗ Cancellazione con oltre 14 giorni di preavviso + rimborso o riprotezione adeguata</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What are extraordinary circumstances */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Circostanze Straordinarie: Cosa Non lo È</h2>
          <p className="text-gray-700 mb-4">
            Emirates e flydubai invocano spesso le "circostanze straordinarie" per negare il risarcimento. La Corte di Giustizia UE ha chiarito che <strong>non sono circostanze straordinarie</strong>:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Non straordinari (risarcimento dovuto)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Guasto tecnico all&apos;aereo (anche improvviso)</li>
                <li>• Problema ai pneumatici o carrello</li>
                <li>• Manutenzione ordinaria ritardata</li>
                <li>• Carenza di personale di bordo</li>
                <li>• Ritardo del volo precedente (rotazione)</li>
                <li>• Meteo ordinario (nebbia, vento, pioggia)</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Potenzialmente straordinari (caso per caso)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Eruzione vulcanica con chiusura spazio aereo</li>
                <li>• Sciopero dei controllori del traffico aereo</li>
                <li>• Attacco terroristico o emergenza sicurezza nazionale</li>
                <li>• Chiusura improvvisa dello spazio aereo per cause politiche</li>
                <li>• Condizioni meteo eccezionali (uragano di categoria 5)</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              <strong>Sabbie del deserto e tempeste di sabbia:</strong> le tempeste di sabbia a Dubai non sono automaticamente "circostanze straordinarie" ai sensi del CE 261, poiché sono eventi prevedibili in quella regione. Emirates deve dimostrare che la tempesta specifica era eccezionale e imprevedibile, non una normale perturbazione stagionale.
            </p>
          </div>
        </section>

        {/* Immediate actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cosa Fare in Aeroporto (Lista Pratica)</h2>
          <div className="space-y-3">
            {[
              { step: "1", text: "Chiedi scritto della causa del ritardo/cancellazione al check-in o gate Emirates/flydubai" },
              { step: "2", text: "Se ritardo oltre 2 ore: esigi pasti, bevande e accesso a comunicazione (telefono/email) — art. 9 CE 261" },
              { step: "3", text: "Se ritardo oltre 5 ore: hai diritto al rimborso del biglietto invece di proseguire il viaggio" },
              { step: "4", text: "Se overnight: esigi hotel e transfer aeroporto-hotel a carico della compagnia" },
              { step: "5", text: "Fotografa i tabelloni di partenza con orario ritardato e il numero di volo" },
              { step: "6", text: "Conserva tutte le ricevute (ristorante, taxi, hotel) — in caso di rimborso spese art. 9" },
              { step: "7", text: "Non firmare nulla che contenga 'rinuncia al risarcimento' o 'accettazione voucher come soluzione finale'" }
            ].map(item => (
              <div key={item.step} className="flex gap-3 items-start bg-white border border-gray-200 rounded-lg p-4">
                <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">{item.step}</span>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </div>
            ))}
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
              <p className="text-sm text-gray-600">Contatta Emirates/flydubai/ITA direttamente. Risposta attesa: 4–12 settimane. Tasso di successo variabile.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. ENAC</h3>
              <p className="text-sm text-gray-600">Se il vettore non risponde o rifiuta, presenta reclamo a ENAC. Processo lungo (6–12 mesi), ma efficace.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. ClaimWinger</h3>
              <p className="text-sm text-gray-600">Gestione completa: reclamo, follow-up, ENAC se necessario. Paghi solo se vinci (30% del risarcimento).</p>
            </div>
          </div>
        </section>

        {/* Authorities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Autorità Competenti</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-4 py-3 text-left">Tratta</th>
                  <th className="px-4 py-3 text-left">Autorità CE 261</th>
                  <th className="px-4 py-3 text-left">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Milano MXP → Dubai DXB</td>
                  <td className="px-4 py-3 font-medium">ENAC (Italia)</td>
                  <td className="px-4 py-3 text-gray-600">Competente per tutti i voli in partenza dall&apos;Italia</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Dubai DXB → Milano MXP (Emirates)</td>
                  <td className="px-4 py-3 font-medium">GCAA (Emirati Arabi)</td>
                  <td className="px-4 py-3 text-gray-600">CE 261 non si applica; normativa emiratina diversa</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Dubai DXB → Milano MXP (ITA Airways)</td>
                  <td className="px-4 py-3 font-medium">ENAC (Italia)</td>
                  <td className="px-4 py-3 text-gray-600">Vettore UE: CE 261 si applica anche se parte da paese extra-UE</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>Eccezione ITA Airways:</strong> se voli Dubai → Milano con ITA Airways (AZ, vettore italiano/UE), il CE 261 si applica anche se la partenza è da Dubai. La norma protegge i voli operati da vettori UE da qualsiasi aeroporto del mondo verso l&apos;UE. Non vale per Emirates o flydubai (vettori extra-UE) in partenza da Dubai.
            </p>
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
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Volo Milano–Dubai Cancellato o in Ritardo?</h2>
          <p className="text-blue-100 mb-6">
            Verifica subito se hai diritto a €600. ClaimWinger gestisce tutto: reclamo, follow-up, ENAC. Paghi solo se otteniamo il risarcimento (30%).
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
