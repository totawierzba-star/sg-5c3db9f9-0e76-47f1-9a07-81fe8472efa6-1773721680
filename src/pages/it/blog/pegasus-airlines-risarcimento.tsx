import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info } from "lucide-react";

const slug = "pegasus-airlines-risarcimento";
const title = "Pegasus Airlines: Risarcimento Voli 2026 — CE 261/2004 guida completa";
const description = "Volo Pegasus Airlines in ritardo o cancellato? CE 261/2004 per voli da/verso UE, €250–€600, hub Istanbul SAW, low cost turco, DGCA vs ENAC. Guida completa.";
const publishDate = "2026-03-19";

const faqData = [
  {
    question: "Pegasus Airlines è soggetta al CE 261/2004?",
    answer: "Parzialmente. Pegasus (PC) è un vettore turco, quindi il CE 261/2004 si applica solo ai voli IN PARTENZA da aeroporti UE verso qualsiasi destinazione. I voli in partenza dalla Turchia (es. da Istanbul SAW verso Roma) NON sono coperti dal CE 261, a meno che non sia un volo su un vettore UE."
  },
  {
    question: "Ho preso Pegasus da Roma per Istanbul — ho diritto al risarcimento?",
    answer: "Sì, se il volo partiva da Roma (aeroporto UE) e il ritardo/cancellazione si è verificato prima del decollo o ha causato un ritardo all'arrivo. Il CE 261 si applica ai voli in partenza da aeroporti UE indipendentemente dalla nazionalità del vettore."
  },
  {
    question: "Quanto risarcimento spetta per un volo Pegasus cancellato da un aeroporto italiano?",
    answer: "€250 per rotte ≤1500 km, €400 per 1500–3500 km come Roma–Istanbul (~2.100 km), €600 per rotte >3500 km. La maggior parte delle rotte Pegasus dall'Italia verso Istanbul sono nella fascia €400."
  },
  {
    question: "Il mio volo Pegasus era Istanbul-Roma — ho diritto al rimborso?",
    answer: "No. Per i voli in partenza dalla Turchia operati da un vettore turco (come Pegasus), il CE 261/2004 non si applica. La Turchia non è nell'UE/SEE. Potresti avere diritti in base alla normativa turca, ma sono diversi e più limitati."
  },
  {
    question: "Pegasus ha negato il mio imbarco da Milano — cosa posso fare?",
    answer: "L'overbooking con negato imbarco da un aeroporto UE è sempre coperto dal CE 261. Hai diritto a risarcimento immediato (€400 per la rotta MXP/BGY–Istanbul) + scelta tra rimborso o riprotezione + assistenza (pasti, hotel se necessario)."
  },
  {
    question: "Qual è l'autorità di vigilanza per reclami Pegasus su voli dall'Italia?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) — enac.gov.it. Anche se Pegasus è turca, ENAC è competente per i voli partiti dall'Italia."
  },
  {
    question: "Pegasus non risponde al mio reclamo. Quanto devo aspettare?",
    answer: "Pegasus ha l'obbligo di rispondere entro un tempo ragionevole (normalmente 6 settimane). In caso di mancata risposta o rifiuto, puoi rivolgerti all'ENAC o affidarti a ClaimWinger che gestisce il caso per te senza costi anticipati."
  }
];

export default function PegasusAirlinesRisarcimento() {
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
      <SEO title={title} description={description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><Link href="/it" className="hover:text-purple-600">Home</Link></li>
          <li className="mx-1">/</li>
          <li><Link href="/it/blog" className="hover:text-purple-600">Blog</Link></li>
          <li className="mx-1">/</li>
          <li className="text-gray-700 font-medium">Pegasus Airlines Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">Compagnie Aeree</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 7 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pegasus Airlines: Risarcimento Voli 2026 — CE 261/2004 guida completa
          </h1>
          <p className="text-lg text-gray-600">
            Pegasus Airlines (PC) è una low cost turca che collega l'Italia a Istanbul e oltre. <strong>Attenzione:</strong> il CE 261/2004 si applica solo ai voli in partenza da aeroporti europei. Se sei partito dall'Italia, hai diritto fino a <strong>€400 di risarcimento</strong>. Ecco tutto quello che devi sapere.
          </p>
        </header>

        {/* BANNER critico */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-yellow-900 text-lg mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" /> Regola fondamentale per Pegasus (vettore extra-UE)
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-100 rounded-lg p-3">
              <p className="font-semibold text-green-800 text-sm mb-1">✅ CE 261 SI APPLICA</p>
              <p className="text-green-700 text-sm">Voli in <strong>partenza da aeroporti UE/SEE</strong> (Italia, Germania, Francia, ecc.) verso qualsiasi destinazione, operati da Pegasus.</p>
              <p className="text-green-600 text-xs mt-1">Es: Roma FCO → Istanbul SAW ✓</p>
            </div>
            <div className="bg-red-100 rounded-lg p-3">
              <p className="font-semibold text-red-800 text-sm mb-1">❌ CE 261 NON SI APPLICA</p>
              <p className="text-red-700 text-sm">Voli in <strong>partenza dalla Turchia</strong> verso l'UE, operati da un vettore turco come Pegasus.</p>
              <p className="text-red-600 text-xs mt-1">Es: Istanbul SAW → Roma FCO ✗</p>
            </div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-purple-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Pegasus in ritardo da un aeroporto italiano?</p>
            <p className="text-purple-100 text-sm">Verifica gratuitamente il tuo diritto al risarcimento. ClaimWinger trattiene solo il <strong>30%</strong> se vinci — zero rischi.</p>
          </div>
          <a
            href={`https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-600 font-bold px-6 py-3 rounded-lg hover:bg-purple-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Verifica ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Chi è Pegasus */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-purple-600" /> Chi è Pegasus Airlines
          </h2>
          <p className="text-gray-700 mb-4">
            Pegasus Airlines (codice IATA: <strong>PC</strong>, codice ICAO: PGT) è una compagnia aerea low cost turca fondata nel 1990 e con sede a Istanbul. Il suo hub principale è l'<strong>Aeroporto Sabiha Gökçen (SAW)</strong>, sulla sponda asiatica di Istanbul, diverso dall'Aeroporto Internazionale Istanbul (IST) dove opera principalmente Turkish Airlines.
          </p>
          <p className="text-gray-700 mb-4">
            Pegasus è la seconda compagnia aerea turca per dimensioni dopo Turkish Airlines e opera un network europeo esteso. Dall'Italia vola regolarmente da <strong>Roma FCO, Milano MXP, Milano BGY (Bergamo), Venezia VCE, Napoli NAP, Pisa PSA, Bologna BLQ</strong> e altri aeroporti verso SAW e destinazioni turche.
          </p>
        </section>

        {/* Importi CE 261 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-purple-600" /> Importi risarcimento CE 261/2004
          </h2>
          <p className="text-gray-700 mb-3">
            Questi importi si applicano solo per voli in partenza da aeroporti UE/SEE:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Distanza rotta</th>
                  <th className="text-left px-4 py-3">Risarcimento</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg">Esempi Pegasus dall'Italia</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">≤ 1.500 km</td>
                  <td className="px-4 py-3 font-bold text-green-700">€ 250</td>
                  <td className="px-4 py-3 text-gray-600">Voli interni (non applicabile da Italia)</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">1.500–3.500 km</td>
                  <td className="px-4 py-3 font-bold text-yellow-700">€ 400</td>
                  <td className="px-4 py-3 text-gray-600">Roma–Istanbul (~2.100 km), Milano–Istanbul (~1.950 km), Venezia–Istanbul, Napoli–Istanbul</td>
                </tr>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">&gt; 3.500 km</td>
                  <td className="px-4 py-3 font-bold text-red-700">€ 600</td>
                  <td className="px-4 py-3 text-gray-600">Non applicabile per rotte dirette Italia–Turchia (tutte ≤3.500 km)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-blue-800 text-sm flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>La maggior parte delle rotte Pegasus dall'Italia verso Istanbul ricade nella fascia €400 (1.500–3.500 km). Controlla la distanza esatta della tua rotta per confermare l'importo esatto.</span>
            </p>
          </div>
        </section>

        {/* Rotte principali dall'Italia */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-purple-600" /> Rotte Pegasus dall'Italia — distanze e risarcimenti
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-4 py-3">Rotta</th>
                  <th className="text-left px-4 py-3">Distanza approx.</th>
                  <th className="text-left px-4 py-3">CE 261?</th>
                  <th className="text-left px-4 py-3">Risarcimento (ritardo ≥3h)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Roma FCO → Istanbul SAW", "~2.100 km", "Sì (parte da UE)", "€400"],
                  ["Istanbul SAW → Roma FCO", "~2.100 km", "No (parte da Turchia)", "—"],
                  ["Milano MXP → Istanbul SAW", "~1.950 km", "Sì (parte da UE)", "€400"],
                  ["Milano BGY → Istanbul SAW", "~1.950 km", "Sì (parte da UE)", "€400"],
                  ["Venezia VCE → Istanbul SAW", "~1.700 km", "Sì (parte da UE)", "€400"],
                  ["Napoli NAP → Istanbul SAW", "~2.000 km", "Sì (parte da UE)", "€400"],
                  ["Bologna BLQ → Istanbul SAW", "~1.950 km", "Sì (parte da UE)", "€400"],
                  ["Pisa PSA → Istanbul SAW", "~2.100 km", "Sì (parte da UE)", "€400"],
                ].map(([route, dist, ce261, comp]) => (
                  <tr key={route} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{route}</td>
                    <td className="px-4 py-2 text-gray-600">{dist}</td>
                    <td className={`px-4 py-2 font-medium ${ce261.startsWith("Sì") ? "text-green-700" : "text-red-700"}`}>{ce261}</td>
                    <td className={`px-4 py-2 font-bold ${comp === "€400" ? "text-yellow-700" : "text-gray-400"}`}>{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie per Pegasus
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (hai diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all'aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale Pegasus</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi per rotazione aerei</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Problemi operativi a Sabiha Gökçen SAW</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC italiano o turco</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo per emergenze</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Condizioni meteo eccezionali e imprevedibili</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Instabilità politica grave (con documentazione)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-600" /> Come fare reclamo a Pegasus Airlines
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Verifica che il volo sia partito da un aeroporto UE", text: "Se il volo era in partenza dall'Italia (o da qualsiasi paese UE/SEE), il CE 261 si applica. Conserva la carta d'imbarco come prova dell'aeroporto di partenza." },
              { step: "2", title: "Raccogli la documentazione", text: "Carta d'imbarco, prenotazione Pegasus, screenshot del ritardo (app o email), ricevute per spese extra sostenute (pasti, hotel)." },
              { step: "3", title: "Invia reclamo scritto a Pegasus", text: "Usa il modulo reclami su flypgs.com. Specifica: numero volo (es. PC1234), data, aeroporto partenza/arrivo, ritardo in minuti/ore, importo CE 261 richiesto." },
              { step: "4", title: "Attendi risposta (max 6-8 settimane)", text: "Pegasus risponde solitamente entro 4-6 settimane. Conserva il numero di protocollo del reclamo." },
              { step: "5", title: "Escalation ENAC (per voli dall'Italia)", text: "Se Pegasus non risponde o rifiuta ingiustificatamente, puoi presentare reclamo all'ENAC (enac.gov.it), competente per voli in partenza dall'Italia." },
              { step: "6", title: "Affida il caso a ClaimWinger", text: "ClaimWinger gestisce il reclamo per voli extra-UE in partenza dall'UE. Commissione del 30% solo in caso di successo, senza spese anticipate." }
            ].map(item => (
              <li key={item.step} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                <span className="bg-purple-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Autorità */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-purple-600" /> Autorità di vigilanza competenti
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-purple-800 mb-2">ENAC — Italia</h3>
              <p className="text-purple-700 text-sm mb-2">Competente per voli in partenza dagli aeroporti italiani, anche se operati da vettori extra-UE come Pegasus.</p>
              <p className="text-purple-600 text-xs">enac.gov.it — Sportello reclami passeggeri</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">DGCA — Turchia (solo per info)</h3>
              <p className="text-gray-700 text-sm mb-2">Per voli in partenza dalla Turchia, si applica la normativa turca (meno favorevole). La DGCA turca non è vincolata al CE 261.</p>
              <p className="text-gray-600 text-xs">shgm.gov.tr — Autorità Aviazione Civile turca</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Pegasus cancellato o in ritardo dall'Italia?</p>
            <p className="text-purple-100 text-sm">Hai diritto a €400 di risarcimento. ClaimWinger gestisce tutto senza costi anticipati — 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-700 font-bold px-6 py-3 rounded-lg hover:bg-purple-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Inizia ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-600" /> Domande frequenti su Pegasus Airlines e CE 261/2004
          </h2>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-lg group">
                <summary className="px-4 py-3 font-semibold text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 pt-2 text-gray-600 text-sm">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Related articles */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Articoli correlati</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "turkish-airlines-risarcimento", title: "Turkish Airlines: Risarcimento Voli 2026 — CE 261/2004" },
              { slug: "wizz-air-italia-risarcimento", title: "Wizz Air: Risarcimento Voli 2026 — CE 261/2004" },
              { slug: "volotea-risarcimento", title: "Volotea: Risarcimento Voli 2026 — CE 261/2004" },
            ].map(a => (
              <Link
                key={a.slug}
                href={`/it/blog/${a.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-purple-300 group"
              >
                <p className="font-semibold text-gray-800 group-hover:text-purple-600 text-sm">{a.title}</p>
                <p className="text-purple-600 text-xs mt-2 flex items-center gap-1">Leggi <ArrowRight className="w-3 h-3" /></p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}
