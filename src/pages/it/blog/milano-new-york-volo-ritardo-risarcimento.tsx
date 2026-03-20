import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "milano-new-york-volo-ritardo-risarcimento";
const title = "Volo Milano–New York Cancellato o in Ritardo: €600 di Risarcimento — Guida 2026";
const description = "Volo Milano–New York cancellato o in ritardo? Hai diritto a €600 CE 261/2004. Delta, United, ITA Airways, American: procedura completa ENAC. Guida 2026.";
const publishDate = "2026-03-22";

const faqData = [
  {
    question: "Quanto spetta per un volo Milano–New York in ritardo?",
    answer: "Milano MXP–New York JFK/EWR è circa 6.900 km, ben oltre i 3.500 km → €600 di risarcimento CE 261/2004 a passeggero. Il ritardo all'arrivo deve superare le 3 ore, oppure il volo deve essere cancellato con meno di 14 giorni di preavviso senza adeguata alternativa."
  },
  {
    question: "Delta Airlines è americana. Il CE 261 si applica al volo Milano–New York?",
    answer: "Sì! Il CE 261/2004 si applica a TUTTI i voli in partenza da aeroporti UE, indipendentemente dalla nazionalità del vettore. Milano MXP è in Italia (UE), quindi Delta Airlines, United Airlines e American Airlines devono rispettare CE 261 per i voli Milano–New York."
  },
  {
    question: "New York ha due aeroporti principali: JFK e EWR. Fanno differenza?",
    answer: "Per il CE 261 non fa differenza: sia JFK (John F. Kennedy, New York) che EWR (Newark Liberty, New Jersey) sono destinazioni diverse ma entrambe servono la metropolitan area di New York. La distanza da Milano è simile (~6.900 km per JFK, ~7.000 km per EWR). Il risarcimento è €600 in entrambi i casi."
  },
  {
    question: "Ho perso il volo di coincidenza a New York per un ritardo. Cosa succede?",
    answer: "Se hai un unico PNR (es. Milano–New York–Los Angeles), il risarcimento si calcola sulla distanza totale. Se il volo Milano–New York è ritardato di oltre 3 ore all'arrivo a New York, hai diritto a €600 indipendentemente dalla coincidenza persa. Il CE 261 guarda il ritardo all'arrivo della destinazione finale sul ticket."
  },
  {
    question: "Il vettore invoca le condizioni meteo sull'Atlantico. È valido?",
    answer: "Dipende: le normali condizioni meteo atlantiche (turbolenza, venti contrari) non sono circostanze straordinarie, in quanto prevedibili. Solo eventi davvero eccezionali e imprevedibili possono qualificarsi. Il vettore ha l'onere della prova: deve dimostrare l'eccezionalità."
  },
  {
    question: "Qual è l'autorità competente per un volo Milano–New York?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) è competente per i voli in partenza dall'Italia, anche se il vettore è Delta, United o American. ENAC può avviare procedimenti contro vettori extra-UE per voli da aeroporti italiani."
  },
  {
    question: "Quanto tempo ho per presentare il reclamo?",
    answer: "In Italia il termine di prescrizione per i reclami CE 261 è di 2 anni dall'evento (ritardo o cancellazione). Conserva carta d'imbarco, conferma di prenotazione e qualsiasi comunicazione della compagnia. Prima presenti il reclamo, meglio è."
  }
];

export default function MilanoNewYorkVoloRitardoRisarcimento() {
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
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Rotta Milano → New York</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Volo Milano–New York Cancellato o in Ritardo: <span className="text-yellow-400">€600 di Risarcimento</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Delta, United, ITA Airways, American Airlines: partendo da Milano hai diritto a €600 CE 261/2004 per ritardi oltre 3 ore o cancellazioni. Guida pratica 2026.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Euro className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">€600 a passeggero</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-blue-300" />
              <span>Ritardo &gt; 3 ore</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Plane className="w-5 h-5 text-green-300" />
              <span>~6.900 km</span>
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

        {/* Extra-UE rule banner */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-10 flex gap-4">
          <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
          <div>
            <p className="font-bold text-green-800 mb-1">CE 261 si applica da Milano, anche con Delta o United</p>
            <p className="text-green-700 text-sm">
              Delta, United e American Airlines sono vettori americani (extra-UE). Tuttavia il CE 261/2004 si applica a <strong>tutti</strong> i voli in partenza da aeroporti dell&apos;Unione Europea. Milano Malpensa (MXP) è in Italia (UE): hai pieno diritto a €600.
            </p>
          </div>
        </div>

        {/* Carriers table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vettori sulla Rotta Milano–New York</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 text-left">Compagnia</th>
                  <th className="px-4 py-3 text-center">Codice</th>
                  <th className="px-4 py-3 text-center">Da Milano</th>
                  <th className="px-4 py-3 text-center">A New York</th>
                  <th className="px-4 py-3 text-center">CE 261 da MXP</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Delta Air Lines</td>
                  <td className="px-4 py-3 text-center">DL</td>
                  <td className="px-4 py-3 text-center">MXP</td>
                  <td className="px-4 py-3 text-center">JFK / EWR</td>
                  <td className="px-4 py-3 text-center text-green-700 font-bold">Sì</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">United Airlines</td>
                  <td className="px-4 py-3 text-center">UA</td>
                  <td className="px-4 py-3 text-center">MXP</td>
                  <td className="px-4 py-3 text-center">EWR / JFK</td>
                  <td className="px-4 py-3 text-center text-green-700 font-bold">Sì</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">ITA Airways</td>
                  <td className="px-4 py-3 text-center">AZ</td>
                  <td className="px-4 py-3 text-center">MXP</td>
                  <td className="px-4 py-3 text-center">JFK</td>
                  <td className="px-4 py-3 text-center text-green-700 font-bold">Sì</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">American Airlines</td>
                  <td className="px-4 py-3 text-center">AA</td>
                  <td className="px-4 py-3 text-center">MXP</td>
                  <td className="px-4 py-3 text-center">JFK / PHL</td>
                  <td className="px-4 py-3 text-center text-green-700 font-bold">Sì</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              <strong>Codeshare transatlantico:</strong> molti voli Delta/ITA o United/Lufthansa sono in codeshare. Il reclamo CE 261 va sempre al <strong>vettore operativo</strong> (quello che gestisce l&apos;aereo fisicamente). Controlla il codice del vettore sulla carta d&apos;imbarco, non il codice di prenotazione.
            </p>
          </div>
        </section>

        {/* Distances & amounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Distanze e Importi Risarcimento</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 text-left">Tratta</th>
                  <th className="px-4 py-3 text-center">Distanza</th>
                  <th className="px-4 py-3 text-center">Risarcimento CE 261</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Milano MXP → New York JFK</td>
                  <td className="px-4 py-3 text-center">~6.900 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€600</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Milano MXP → Newark EWR</td>
                  <td className="px-4 py-3 text-center">~7.000 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€600</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Milano MXP → New York JFK → Los Angeles LAX</td>
                  <td className="px-4 py-3 text-center">~10.800 km (totale)</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€600</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Roma FCO → New York JFK</td>
                  <td className="px-4 py-3 text-center">~7.200 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€600</td>
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
                <li>✓ Ritardo all&apos;arrivo a JFK/EWR oltre 3 ore</li>
                <li>✓ Cancellazione con meno di 14 giorni di preavviso</li>
                <li>✓ Imbarco negato (overbooking)</li>
                <li>✓ Partenza da MXP (Italia/UE)</li>
                <li>✓ Qualsiasi vettore: Delta, United, ITA, American</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-red-800">CE 261 NON si applica</h3>
              </div>
              <ul className="space-y-2 text-sm text-red-700">
                <li>✗ New York JFK/EWR → Milano (vettore USA, partenza USA)</li>
                <li>✗ Circostanze straordinarie genuine (es. uragano di categoria 5)</li>
                <li>✗ Ritardo inferiore a 3 ore all&apos;arrivo</li>
                <li>⚠ ITA Milano→NYC da NYC: CE 261 si applica (vettore UE)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Immediate actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cosa Fare in Aeroporto</h2>
          <div className="space-y-3">
            {[
              { step: "1", text: "Chiedi scritto la motivazione del ritardo/cancellazione all'assistenza del vettore (Delta, United, ITA, American)" },
              { step: "2", text: "Se ritardo oltre 2 ore: esigi pasti e bevande a carico del vettore (art. 9 CE 261)" },
              { step: "3", text: "Se ritardo oltre 5 ore: hai diritto al rimborso del biglietto se non vuoi proseguire" },
              { step: "4", text: "Se overnight: esigi hotel e transfer aeroporto-hotel (volo annullato o rinviato al giorno dopo)" },
              { step: "5", text: "Fotografa i tabelloni con orario ritardato e il numero del volo" },
              { step: "6", text: "Conserva tutte le ricevute (ristorante, hotel, taxi) — potrai chiedere il rimborso spese art. 9" },
              { step: "7", text: "Non accettare voucher né firmare rinunce al risarcimento senza aver letto con attenzione" }
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
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Reclamo diretto</h3>
              <p className="text-sm text-gray-600">Contatta Delta/United/ITA/American tramite il loro portale o email. Risposta: 4–12 settimane.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. ENAC</h3>
              <p className="text-sm text-gray-600">Se il vettore non risponde o rifiuta, presenta reclamo a ENAC (partenza da aeroporto italiano).</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. ClaimWinger</h3>
              <p className="text-sm text-gray-600">Gestione completa. Paghi solo se vinciamo (30% del risarcimento). Nessun anticipo.</p>
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
        <section className="bg-gradient-to-r from-slate-800 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Volo Milano–New York Cancellato o in Ritardo?</h2>
          <p className="text-slate-200 mb-6">
            Verifica subito se hai diritto a €600. ClaimWinger gestisce tutto il processo, anche contro Delta, United e American Airlines. Paghi solo se otteniamo il risarcimento (30%).
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
