import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-reggio-calabria-risarcimento";
const title = "Aeroporto Reggio Calabria REG: Risarcimento Voli 2026 — Guida CE 261";
const description = "Volo in ritardo o cancellato da Reggio Calabria REG? CE 261/2004, fino a €250, ITA Airways, Volotea, rotte nazionali. REG vs SUF. Procedura ENAC completa.";
const publishDate = "2026-03-22";

const faqData = [
  {
    question: "Quanto vale il risarcimento per un volo da Reggio Calabria REG?",
    answer: "Le rotte da Reggio Calabria sono principalmente nazionali e brevi: verso Roma FCO ~€250 (~460 km), verso Milano MXP ~€250 (~540 km). Le distanze sono nella fascia ≤1500 km → €250 di risarcimento CE 261/2004. Il ritardo deve superare le 3 ore all'arrivo."
  },
  {
    question: "Reggio Calabria REG: perché non ha voli internazionali?",
    answer: "L'aeroporto di Reggio Calabria (REG, Tito Minniti) ha una pista corta (1.843 m) che limita i tipi di aeromobili utilizzabili. Questo rende difficile operare voli lunghi o con grandi aerei. La vicinanza a Lamezia Terme SUF (~130 km), che offre molte più destinazioni, ha storicamente limitato lo sviluppo di REG."
  },
  {
    question: "ITA Airways è il vettore principale a Reggio Calabria?",
    answer: "Sì. ITA Airways (AZ, ex Alitalia) e Volotea sono i principali vettori a Reggio Calabria REG. ITA copre le rotte nazionali per Roma e Milano, essenziali per i collegamenti della punta dello stivale con il resto d'Italia. Entrambi sono vettori UE soggetti al CE 261."
  },
  {
    question: "Ho perso un volo di collegamento a Roma per il ritardo su Reggio–Roma. Cosa succede?",
    answer: "Se hai un unico PNR per Reggio–Roma–Berlino e il ritardo del primo tratto fa perdere la coincidenza, il risarcimento si calcola sulla distanza totale Reggio–Berlino (~1.800 km = €400). Se le prenotazioni sono separate, ogni tratta è indipendente."
  },
  {
    question: "Vento forte a Reggio Calabria (zona dello Stretto di Messina). È straordinario?",
    answer: "Il vento nella zona dello Stretto di Messina è frequente e prevedibile. I vettori che operano a REG devono pianificare tenendo conto di questa condizione tipica. Non è straordinario. Solo venti di intensità davvero eccezionale e imprevedibile potrebbero qualificarsi come circostanza straordinaria."
  },
  {
    question: "Qual è l'autorità competente per reclami da Reggio Calabria REG?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) è competente per tutti i voli in partenza dagli aeroporti italiani, incluso Reggio Calabria REG. Se ITA Airways o Volotea non rispondono entro 6–8 settimane, presenta reclamo a ENAC."
  }
];

export default function AeroportoReggioCalabriasarcimento() {
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
      <section className="bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-purple-200 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Aeroporto Reggio Calabria REG — Punta dello Stivale</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Aeroporto Reggio Calabria REG: <span className="text-yellow-400">Risarcimento Voli</span> CE 261/2004
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Volo in ritardo o cancellato da Reggio Calabria? ITA Airways, Volotea: CE 261/2004 garantisce €250 per passeggero. Guida pratica ENAC 2026.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Euro className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">€250 a passeggero</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-purple-200" />
              <span>Ritardo &gt; 3 ore</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Plane className="w-5 h-5 text-green-300" />
              <span>ITA Airways / Volotea</span>
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

        {/* Airport info */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aeroporto di Reggio Calabria REG: Informazioni Generali</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-purple-900 text-white">
                  <th className="px-4 py-3 text-left">Caratteristica</th>
                  <th className="px-4 py-3 text-left">Dettaglio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Codice IATA</td>
                  <td className="px-4 py-3">REG</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Nome completo</td>
                  <td className="px-4 py-3">Aeroporto dello Stretto Tito Minniti</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Distanza da Reggio Calabria</td>
                  <td className="px-4 py-3">~5 km (zona portuale)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Lunghezza pista</td>
                  <td className="px-4 py-3">1.843 m (limitante per voli internazionali)</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Vettori principali</td>
                  <td className="px-4 py-3">ITA Airways (AZ), Volotea (V7)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Rotte principali</td>
                  <td className="px-4 py-3">Roma FCO, Milano MXP</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Autorità CE 261</td>
                  <td className="px-4 py-3">ENAC (Ente Nazionale per l&apos;Aviazione Civile)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* REG vs SUF */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-10 flex gap-4">
          <Info className="w-6 h-6 text-purple-600 mt-0.5 shrink-0" />
          <div>
            <p className="font-bold text-purple-800 mb-1">REG vs SUF: quale aeroporto scegliere in Calabria?</p>
            <p className="text-purple-700 text-sm">
              <strong>REG</strong> è vicino a Reggio Calabria (5 km) ma ha poche destinazioni, principalmente Roma e Milano. <strong>SUF</strong> (Lamezia Terme, ~130 km da REG) ha molte più destinazioni nazionali e internazionali. Per rotte internazionali o low-cost, conviene spostarsi a Lamezia. Il CE 261 si applica allo stesso modo in entrambi.
            </p>
          </div>
        </div>

        {/* Amounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Importi Risarcimento dalle Rotte da REG</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-purple-900 text-white">
                  <th className="px-4 py-3 text-left">Destinazione</th>
                  <th className="px-4 py-3 text-center">Distanza da REG</th>
                  <th className="px-4 py-3 text-center">Risarcimento CE 261</th>
                  <th className="px-4 py-3 text-center">Vettori</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Roma FCO</td>
                  <td className="px-4 py-3 text-center">~460 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">ITA Airways, Volotea</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Milano MXP</td>
                  <td className="px-4 py-3 text-center">~540 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">ITA Airways</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Torino TRN</td>
                  <td className="px-4 py-3 text-center">~560 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">Volotea (stagionale)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              <strong>Connessioni:</strong> se hai un biglietto Reggio–Roma–Londra in unico PNR, la distanza totale (~2.400 km) porta il risarcimento a €400. Vale la distanza dell&apos;intero viaggio, non del singolo tratto.
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
                <li>✓ ITA Airways e Volotea (vettori UE)</li>
                <li>✓ Tutti i voli in partenza da REG (Calabria/UE)</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-red-800">Eccezioni</h3>
              </div>
              <ul className="space-y-2 text-sm text-red-700">
                <li>✗ Circostanze straordinarie genuine e dimostrate</li>
                <li>✗ Ritardo inferiore a 3 ore</li>
                <li>⚠ Vento dello Stretto: NON straordinario di per sé</li>
                <li>⚠ Scarsa visibilità nebbia: verifica se eccezionale</li>
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
              <p className="text-sm text-gray-600">ITA Airways: modulo online o call center. Volotea: portale web. Entro 2 anni dall&apos;evento.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. ENAC</h3>
              <p className="text-sm text-gray-600">Se il vettore non risponde o rifiuta, presenta reclamo a ENAC (volo in partenza dall&apos;Italia).</p>
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
        <section className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Volo in Ritardo o Cancellato da Reggio Calabria REG?</h2>
          <p className="text-purple-100 mb-6">
            Verifica subito il tuo diritto a €250 di risarcimento. ClaimWinger gestisce tutto il processo contro ITA Airways e Volotea. Paghi solo se otteniamo il risarcimento (30%).
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
