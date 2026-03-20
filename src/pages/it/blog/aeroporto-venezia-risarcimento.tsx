import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-venezia-risarcimento";
const title = "Aeroporto Venezia VCE (Marco Polo): Risarcimento Voli 2026 — Guida CE 261";
const description = "Volo in ritardo o cancellato a Venezia VCE? CE 261/2004, fino a €600, easyJet, Ryanair, ITA Airways, Volotea. VCE vs TSF Treviso. Procedura ENAC completa.";
const publishDate = "2026-03-23";

const faqData = [
  {
    question: "Quanto vale il risarcimento per un volo da Venezia VCE?",
    answer: "Dipende dalla distanza: Venezia verso Roma FCO ~€250, verso Londra LHR ~€250 (~1.200 km), verso Dublino DUB ~€400 (~1.800 km), verso New York JFK ~€600 (~6.600 km). Il ritardo all'arrivo deve superare le 3 ore."
  },
  {
    question: "Venezia ha due aeroporti: VCE e TSF. Qual è la differenza?",
    answer: "VCE (Marco Polo) è l'aeroporto internazionale principale di Venezia, situato a circa 8 km dal centro storico. TSF (Treviso, Antonio Canova) è il secondo aeroporto dell'area veneziana, a circa 30 km da Venezia, principalmente usato da Ryanair per voli low-cost. Entrambi sono coperti dal CE 261/2004 allo stesso modo."
  },
  {
    question: "L'acqua alta a Venezia può causare problemi di accessibilità all'aeroporto. È straordinario?",
    answer: "L'acqua alta è un fenomeno noto e prevedibile a Venezia. Non costituisce circostanza straordinaria ai sensi del CE 261. I vettori che operano a VCE devono pianificare tenendo conto di questa eventualità. Problemi di accessibilità all'aeroporto dovuti all'acqua alta non esonerano il vettore dal risarcimento."
  },
  {
    question: "easyJet è il vettore principale a Venezia. Come fare reclamo?",
    answer: "easyJet (U2) gestisce i reclami CE 261 principalmente tramite il proprio portale online. Puoi anche inviare una lettera raccomandata. easyJet di solito risponde entro 4–8 settimane. Se rifiuta o non risponde, contatta ENAC o ClaimWinger."
  },
  {
    question: "Ho un volo Venezia–Barcellona con scalo a Madrid. Perdo la coincidenza. Cosa succede?",
    answer: "Se hai un unico PNR (VCE–MAD–BCN), il ritardo che causa la perdita della coincidenza porta il risarcimento alla distanza totale VCE–BCN (~1.200 km = €250). Se il ritardo sul primo tratto supera le 3 ore all'arrivo a Barcellona, hai diritto al risarcimento anche se il problema era sul tratto verso Madrid."
  },
  {
    question: "Qual è l'autorità competente per reclami dall'aeroporto di Venezia?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) è competente per tutti i voli in partenza da aeroporti italiani, incluso Venezia VCE e Treviso TSF. ENAC può intervenire se il vettore non risponde o rifiuta ingiustificatamente."
  }
];

export default function AeroportoVeneziaRisarcimento() {
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
      <section className="bg-gradient-to-br from-blue-800 via-sky-700 to-teal-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sky-200 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Aeroporto Venezia VCE — Veneto</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Aeroporto Venezia Marco Polo VCE: <span className="text-yellow-400">Risarcimento Voli</span> CE 261/2004
          </h1>
          <p className="text-xl text-sky-100 mb-8">
            Volo in ritardo o cancellato da Venezia? easyJet, Ryanair, ITA, Volotea: fino a €600 CE 261/2004 per passeggero. VCE vs TSF, guida ENAC 2026.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Euro className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Fino a €600</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-sky-200" />
              <span>Ritardo &gt; 3 ore</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Plane className="w-5 h-5 text-green-300" />
              <span>Hub del Triveneto</span>
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

        {/* VCE vs TSF */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">VCE vs TSF: Due Aeroporti nell&apos;Area Veneziana</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="px-4 py-3 text-left">Aeroporto</th>
                  <th className="px-4 py-3 text-center">Codice</th>
                  <th className="px-4 py-3 text-center">Distanza da Venezia</th>
                  <th className="px-4 py-3 text-center">Vettori principali</th>
                  <th className="px-4 py-3 text-center">CE 261</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-medium">Venezia Marco Polo</td>
                  <td className="px-4 py-3 text-center">VCE</td>
                  <td className="px-4 py-3 text-center">~8 km</td>
                  <td className="px-4 py-3 text-center">easyJet, ITA, Volotea, Air France</td>
                  <td className="px-4 py-3 text-center text-green-700 font-bold">Sì</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Treviso Antonio Canova</td>
                  <td className="px-4 py-3 text-center">TSF</td>
                  <td className="px-4 py-3 text-center">~30 km</td>
                  <td className="px-4 py-3 text-center">Ryanair (principale)</td>
                  <td className="px-4 py-3 text-center text-green-700 font-bold">Sì</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              <strong>Attenzione Ryanair "Venezia":</strong> Ryanair spesso vende biglietti con destinazione "Venezia" ma l&apos;aeroporto effettivo è Treviso TSF (~30 km da Venezia). Controlla sempre il codice aeroporto sul biglietto. Sia VCE che TSF sono coperti dal CE 261 allo stesso modo.
            </p>
          </div>
        </section>

        {/* Amounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Importi Risarcimento dalle Principali Rotte da VCE</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="px-4 py-3 text-left">Destinazione</th>
                  <th className="px-4 py-3 text-center">Distanza da VCE</th>
                  <th className="px-4 py-3 text-center">Risarcimento CE 261</th>
                  <th className="px-4 py-3 text-center">Vettori</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Roma FCO</td>
                  <td className="px-4 py-3 text-center">~500 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">ITA, Volotea</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Londra LHR/LGW/STN</td>
                  <td className="px-4 py-3 text-center">~1.100–1.300 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">easyJet, BA, Ryanair</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">Barcellona BCN</td>
                  <td className="px-4 py-3 text-center">~1.100 km</td>
                  <td className="px-4 py-3 text-center font-bold text-orange-600">€250</td>
                  <td className="px-4 py-3 text-center">Vueling, easyJet</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3">Dublino DUB</td>
                  <td className="px-4 py-3 text-center">~1.800 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€400</td>
                  <td className="px-4 py-3 text-center">Ryanair, Aer Lingus</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3">New York JFK</td>
                  <td className="px-4 py-3 text-center">~6.600 km</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">€600</td>
                  <td className="px-4 py-3 text-center">Delta, United</td>
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
                <li>✓ Qualsiasi vettore da VCE o TSF (Veneto/UE)</li>
                <li>✓ Rotte nazionali, europee e intercontinentali</li>
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
                <li>⚠ Acqua alta: NON è straordinaria di per sé</li>
                <li>⚠ Nebbia invernale: frequente, non sempre straordinaria</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to claim */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Come Richiedere il Risarcimento da Venezia</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Reclamo diretto</h3>
              <p className="text-sm text-gray-600">easyJet, Ryanair, ITA: portale online. Conserva carta imbarco e ricevute. Entro 2 anni.</p>
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
        <section className="bg-gradient-to-r from-blue-700 to-teal-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Volo in Ritardo o Cancellato da Venezia VCE?</h2>
          <p className="text-blue-100 mb-6">
            Verifica subito il tuo diritto al risarcimento. ClaimWinger gestisce tutto il processo contro easyJet, Ryanair, ITA e altri. Paghi solo se otteniamo il risarcimento (30%).
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
