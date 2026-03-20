import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "wizz-air-risarcimento";
const title = "Wizz Air Risarcimento: Come Ottenere €250–€600 con CE 261 — Guida 2026";
const description = "Volo Wizz Air in ritardo o cancellato? Hai diritto a €250–€600 CE 261/2004. Wizz Air W6 vs Wizz Air Abu Dhabi 5W, procedura reclamo, ENAC. Guida completa 2026.";
const publishDate = "2026-03-23";

const faqData = [
  {
    question: "Quanto spetta per un volo Wizz Air in ritardo?",
    answer: "Dipende dalla distanza: €250 per voli ≤1500 km, €400 per 1500–3500 km, €600 per >3500 km. Il ritardo all'arrivo deve superare le 3 ore o il volo deve essere cancellato con meno di 14 giorni di preavviso senza adeguata alternativa."
  },
  {
    question: "Wizz Air è un vettore ungherese. Il CE 261 si applica?",
    answer: "Sì. Wizz Air (W6) ha sede in Ungheria, paese dell'UE. Il CE 261/2004 si applica a tutti i voli Wizz Air in partenza da aeroporti UE o in arrivo nell'UE se operati da un vettore UE. Wizz Air è pienamente soggetta al CE 261."
  },
  {
    question: "Cos'è Wizz Air Abu Dhabi? È la stessa cosa di Wizz Air?",
    answer: "No. Wizz Air Abu Dhabi (5W) è un'entità separata con sede negli Emirati Arabi Uniti, non nell'UE. Il CE 261/2004 si applica ai voli 5W solo se partono da aeroporti UE. Per i voli Abu Dhabi → Italia con Wizz Air Abu Dhabi, il CE 261 NON si applica (partenza da paese extra-UE, vettore extra-UE). Per voli Italia → Abu Dhabi con 5W, il CE 261 si applica."
  },
  {
    question: "Wizz Air mi offre Wizz Credit invece del risarcimento in denaro. Devo accettarlo?",
    answer: "No. Il CE 261/2004 garantisce il pagamento in denaro (contanti, bonifico o carta di credito). Wizz Air può offrire credito sulla piattaforma come alternativa, ma puoi rifiutare e richiedere il pagamento in denaro. I Wizz Credit possono avere un valore maggiore ma scadono: valuta attentamente prima di accettare."
  },
  {
    question: "Wizz Air ha scioperi frequenti. Sono circostanze straordinarie?",
    answer: "Gli scioperi interni del personale Wizz Air (piloti, assistenti di volo) non sono circostanze straordinarie ai sensi del CE 261, in quanto sono prevedibili e rientrano nel controllo aziendale. Gli scioperi dei controllori ATC esterni possono invece qualificarsi come straordinari."
  },
  {
    question: "Qual è l'autorità competente per un reclamo Wizz Air?",
    answer: "Dipende dall'aeroporto di partenza: per voli da aeroporti italiani → ENAC; da aeroporti polacchi → ULC (Urząd Lotnictwa Cywilnego); da aeroporti ungheresi → BFT (Fogyasztóvédelmi hatóság). In Italia, ENAC è l'autorità competente per i voli in partenza da aeroporti italiani."
  }
];

export default function WizzAirRisarcimento() {
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
      <section className="bg-gradient-to-br from-purple-700 via-fuchsia-700 to-pink-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-purple-200 text-sm mb-4">
            <Plane className="w-4 h-4" />
            <span>Wizz Air W6 — Compagnia Ungherese (UE)</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Wizz Air: <span className="text-yellow-400">Risarcimento Voli</span> fino a €600
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Volo Wizz Air in ritardo o cancellato? CE 261/2004: €250–€600 per passeggero. Guida completa per ottenere il risarcimento, incluso W6 vs 5W Abu Dhabi.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Euro className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Fino a €600</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-purple-200" />
              <span>Ritardo &gt; 3 ore</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <MapPin className="w-4 h-4 text-pink-300" />
              <span>Vettore UE (Ungheria)</span>
            </div>
          </div>
          <Link
            href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            className="inline-flex items-center gap-2 bg-yellow-400 text-purple-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-300 transition-colors text-lg"
          >
            Verifica il tuo rimborso gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* W6 vs 5W */}
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-10">
          <div className="flex gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-amber-800 mb-2">Wizz Air W6 vs Wizz Air Abu Dhabi 5W: entità diverse!</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-amber-100">
                      <th className="px-3 py-2 text-left text-amber-900">Entità</th>
                      <th className="px-3 py-2 text-center text-amber-900">Codice</th>
                      <th className="px-3 py-2 text-center text-amber-900">Sede</th>
                      <th className="px-3 py-2 text-center text-amber-900">CE 261 da Italia</th>
                      <th className="px-3 py-2 text-center text-amber-900">CE 261 per Abu Dhabi→IT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-white">
                      <td className="px-3 py-2 font-medium">Wizz Air</td>
                      <td className="px-3 py-2 text-center">W6</td>
                      <td className="px-3 py-2 text-center">Ungheria (UE)</td>
                      <td className="px-3 py-2 text-center text-green-700 font-bold">Sì</td>
                      <td className="px-3 py-2 text-center text-green-700 font-bold">Sì (vettore UE)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-3 py-2 font-medium">Wizz Air Abu Dhabi</td>
                      <td className="px-3 py-2 text-center">5W</td>
                      <td className="px-3 py-2 text-center">Emirati Arabi (extra-UE)</td>
                      <td className="px-3 py-2 text-center text-green-700 font-bold">Sì (da UE)</td>
                      <td className="px-3 py-2 text-center text-red-600 font-bold">No (extra-UE da extra-UE)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Amounts table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Importi Risarcimento Wizz Air</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-purple-700 text-white">
                  <th className="px-4 py-3 text-left">Fascia di distanza</th>
                  <th className="px-4 py-3 text-center">Risarcimento CE 261</th>
                  <th className="px-4 py-3 text-left">Esempi rotte Wizz Air da Italia</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">≤ 1.500 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-gray-600">Roma–Bucarest, Milano–Katowice, Milano–Budapest</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">1.500 – 3.500 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-600">€400</td>
                  <td className="px-4 py-3 text-gray-600">Roma–Varsavia, Milano–Kaunas, Roma–Larnaca</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">&gt; 3.500 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€600</td>
                  <td className="px-4 py-3 text-gray-600">Roma–Tel Aviv (W6), Milano–Abu Dhabi (5W da Italia)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How to claim from Wizz */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Come Presentare il Reclamo a Wizz Air</h2>
          <div className="space-y-3 mb-6">
            {[
              { step: "1", text: "Accedi al sito wizzair.com o all'app Wizz Air e vai alla sezione 'Assistenza' → 'Richiesta rimborso/indennizzo CE261'" },
              { step: "2", text: "Inserisci numero di prenotazione (PNR), data del volo e codice volo Wizz Air" },
              { step: "3", text: "Seleziona 'Ritardo/Cancellazione' e carica eventuali documenti (carta imbarco, ricevute)" },
              { step: "4", text: "Scegli pagamento in denaro (non Wizz Credit) come modalità di risarcimento" },
              { step: "5", text: "Conserva il numero di ticket di supporto — Wizz Air deve rispondere entro 14 giorni per i reclami CE261" },
              { step: "6", text: "Se rifiutano o non rispondono entro 6–8 settimane: contatta ENAC (voli da Italia) o ClaimWinger" }
            ].map(item => (
              <div key={item.step} className="flex gap-3 items-start bg-white border border-gray-200 rounded-lg p-4">
                <span className="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">{item.step}</span>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* When CE261 applies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quando si Applica il CE 261/2004 con Wizz Air</h2>
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
                <li>✓ Wizz Air W6: qualsiasi rotta da/per UE</li>
                <li>✓ Wizz Air 5W: solo per rotte in partenza da aeroporti UE</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-red-800">Eccezioni</h3>
              </div>
              <ul className="space-y-2 text-sm text-red-700">
                <li>✗ 5W Abu Dhabi → Italia (extra-UE da extra-UE)</li>
                <li>✗ Sciopero ATC eccezionale e imprevedibile</li>
                <li>✗ Ritardo inferiore a 3 ore</li>
                <li>⚠ Sciopero del personale Wizz: NON è straordinario</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to claim options */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Opzioni per Ottenere il Risarcimento</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Reclamo diretto Wizz</h3>
              <p className="text-sm text-gray-600">Portale wizzair.com o app. Risposta attesa: 4–8 settimane. Scegli pagamento in denaro.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. ENAC</h3>
              <p className="text-sm text-gray-600">Per voli da aeroporti italiani. Se Wizz non risponde entro 6–8 settimane, segnala a ENAC.</p>
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
        <section className="bg-gradient-to-r from-purple-700 to-fuchsia-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Volo Wizz Air in Ritardo o Cancellato?</h2>
          <p className="text-purple-100 mb-6">
            Verifica subito se hai diritto a €250–€600. ClaimWinger gestisce tutto il processo contro Wizz Air. Paghi solo se otteniamo il risarcimento (30%).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-300 transition-colors"
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
