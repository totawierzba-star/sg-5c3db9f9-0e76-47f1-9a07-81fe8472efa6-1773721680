import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aer-lingus-risarcimento";
const title = "Aer Lingus Risarcimento: Guida Completa 2026 — Fino a €600 per Voli da Italia";
const description = "Volo Aer Lingus in ritardo o cancellato? CE 261/2004, €400–€600, hub Dublino DUB, pre-clearance USA, coincidenze transatlantiche, CAR vs ENAC. Guida completa 2026.";
const publishDate = "2026-03-20";

const faqData = [
  {
    question: "Quanto spetta per un volo Aer Lingus in ritardo?",
    answer: "L'Irlanda è nell'UE, quindi CE 261/2004 si applica pienamente. €400 per la maggior parte delle rotte dall'Italia (Roma–Dublino ~1.970 km, Milano–Dublino ~1.620 km). €600 per coincidenze transatlantiche via Dublino su un unico PNR (es. Roma–Dublino–New York ~8.700 km)."
  },
  {
    question: "Cos'è il pre-clearance USA a Dublino? Cambia qualcosa per CE 261?",
    answer: "Il pre-clearance è una facility unica: i passeggeri in partenza da Dublino verso USA effettuano il controllo doganale e immigrazione americano direttamente a DUB, prima dell'imbarco. Non cambia nulla per i diritti CE 261: il regolamento si applica pienamente. Il vantaggio è che all'arrivo a New York, Boston o Chicago si esce direttamente senza code doganali."
  },
  {
    question: "Ho perso la coincidenza a Dublino per colpa di Aer Lingus. Quanto spetta?",
    answer: "Con un unico PNR, il risarcimento si calcola sulla distanza totale. Es: Roma–Dublino–New York JFK (~8.700 km) → €600. Attenzione: se hai prenotato separatamente il volo Roma–Dublino e poi Dublino–New York, ogni tratta è indipendente."
  },
  {
    question: "Aer Lingus fa parte di IAG come Iberia. Questo cambia qualcosa?",
    answer: "No. Il reclamo CE 261 va sempre al vettore operativo (Aer Lingus, codice EI). Il fatto che Aer Lingus faccia parte del gruppo IAG (che include anche Iberia, Vueling, British Airways) non cambia la responsabilità: è Aer Lingus a essere responsabile per i voli con codice EI."
  },
  {
    question: "Qual è l'autorità competente per reclami su voli da Dublino?",
    answer: "Per voli in partenza dall'Irlanda → CAR (Commission for Aviation Regulation). Per voli in partenza dall'Italia → ENAC. Puoi rivolgerti all'autorità del paese di partenza."
  },
  {
    question: "Aer Lingus opera anche da aeroporti italiani diversi da Roma e Milano?",
    answer: "Sì. Aer Lingus opera rotte stagionali e regolari da Venezia VCE, Napoli NAP, Bologna BLQ e altri aeroporti italiani verso Dublino. I diritti CE 261 si applicano a tutti questi voli in partenza dall'Italia."
  }
];

export default function AerLingusRisarcimento() {
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

      <nav className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><Link href="/it" className="hover:text-green-600">Home</Link></li>
          <li className="mx-1">/</li>
          <li><Link href="/it/blog" className="hover:text-green-600">Blog</Link></li>
          <li className="mx-1">/</li>
          <li className="text-gray-700 font-medium">Aer Lingus Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Compagnie Aeree</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 7 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aer Lingus Risarcimento: Guida Completa 2026 — Fino a €600 per Voli da Italia
          </h1>
          <p className="text-lg text-gray-600">
            Aer Lingus (codice EI) è la principale compagnia aerea irlandese e un hub strategico per i voli transatlantici verso USA e Canada. Se hai subito un ritardo o una cancellazione, hai diritto fino a <strong>€600 di risarcimento</strong> ai sensi del CE 261/2004. Guida completa su diritti, importi e procedura.
          </p>
        </header>

        {/* Info compagnia */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-green-900 text-lg mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" /> Aer Lingus — dati chiave
          </h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div><strong>Codice IATA:</strong> EI</div>
            <div><strong>Hub principale:</strong> Dublino DUB</div>
            <div><strong>Gruppo:</strong> IAG (International Airlines Group)</div>
            <div><strong>Alleanza:</strong> Oneworld (tramite IAG)</div>
            <div><strong>Specializzazione:</strong> Rotte transatlantiche USA/Canada via Dublino con pre-clearance</div>
            <div><strong>Autorità CE 261:</strong> CAR (Commission for Aviation Regulation) — Irlanda</div>
          </div>
        </div>

        {/* Feature pre-clearance */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-blue-900 text-lg mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Pre-clearance USA a Dublino: cosa significa per te
          </h2>
          <p className="text-blue-700 text-sm mb-3">
            Dublino Airport è uno dei pochissimi aeroporti al mondo con <strong>pre-clearance USA</strong>: i controlli di dogana e immigrazione americana vengono effettuati a DUB prima dell&apos;imbarco. Arrivi a New York, Boston o Chicago come passeggero domestico — zero code all&apos;immigrazione all&apos;arrivo.
          </p>
          <div className="bg-white rounded-lg p-3 border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Implicazione CE 261:</strong> Il pre-clearance non cambia nulla per i tuoi diritti. Se il volo Roma–Dublino è in ritardo e perdi il volo Dublino–New York (stesso PNR), il risarcimento si calcola sulla distanza totale Roma–New York (~8.700 km) = <strong>€600</strong>.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-green-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Aer Lingus in ritardo o cancellato?</p>
            <p className="text-green-100 text-sm">Hai diritto fino a €600. ClaimWinger verifica gratuitamente — 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Verifica ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Rotte e importi */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-600" /> Rotte Aer Lingus dall&apos;Italia e importi CE 261
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-4 py-3">Rotta</th>
                  <th className="text-left px-4 py-3">Distanza</th>
                  <th className="text-left px-4 py-3">Risarcimento</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Roma FCO → Dublino DUB", "~1.970 km", "€400"],
                  ["Milano MXP → Dublino DUB", "~1.620 km", "€400"],
                  ["Venezia VCE → Dublino DUB", "~1.700 km", "€400"],
                  ["Napoli NAP → Dublino DUB", "~2.100 km", "€400"],
                  ["Roma → Dublino → New York JFK", "~8.700 km (totale)", "€600"],
                  ["Roma → Dublino → Boston BOS", "~8.500 km (totale)", "€600"],
                  ["Milano → Dublino → Chicago ORD", "~9.000 km (totale)", "€600"],
                  ["Roma → Dublino → Los Angeles LAX", "~11.200 km (totale)", "€600"],
                ].map(([route, dist, comp]) => (
                  <tr key={route} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{route}</td>
                    <td className="px-4 py-2 text-gray-600">{dist}</td>
                    <td className={`px-4 py-2 font-bold ${comp === "€600" ? "text-red-700" : "text-orange-700"}`}>{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs">* Le ultime 4 rotte presuppongono un unico PNR. Risarcimento basato sulla destinazione finale.</p>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie per Aer Lingus
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all&apos;aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale Aer Lingus</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> <span>Pioggia o vento ordinario a Dublino (prevedibile)</span></li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi per rotazione aerei</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Tempesta atlantica eccezionale e imprevedibile</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC (controllori del traffico aereo)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Emergenze sicurezza aeroportuale</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-600" /> Come fare reclamo ad Aer Lingus
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Conserva i documenti", text: "Carta d'imbarco, conferma prenotazione, prova del ritardo. Documenta le spese extra (pasti, hotel) con ricevute." },
              { step: "2", title: "Invia reclamo ad Aer Lingus", text: "aerlingus.com → Customer Care → Reclami (Claims). Indica numero volo (EI + numero), data, rotta, importo CE 261 richiesto (€400 per rotte Italia–Dublino). Aer Lingus risponde tipicamente in 4–8 settimane." },
              { step: "3", title: "Escalation CAR o ENAC", text: "Se il volo partiva dall'Irlanda → CAR (car.ie). Se partiva dall'Italia → ENAC (enac.gov.it). Procedi dopo 30 giorni senza risposta." },
              { step: "4", title: "Affida a ClaimWinger", text: "ClaimWinger gestisce i reclami contro Aer Lingus senza anticipo — 30% solo al successo." }
            ].map(item => (
              <li key={item.step} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                <span className="bg-green-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
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
            <Info className="w-6 h-6 text-green-600" /> Autorità competenti
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">CAR — Irlanda</h3>
              <p className="text-green-700 text-sm mb-2">Commission for Aviation Regulation. Competente per voli in partenza dall&apos;Irlanda, incluso Dublino DUB.</p>
              <p className="text-green-600 text-xs">car.ie — Passenger Rights</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">ENAC — Italia</h3>
              <p className="text-green-700 text-sm mb-2">Competente per voli in partenza dall&apos;Italia verso Dublino, anche se il vettore è Aer Lingus.</p>
              <p className="text-green-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Aer Lingus in ritardo o cancellato?</p>
            <p className="text-green-100 text-sm">Hai diritto fino a €600. ClaimWinger gestisce il reclamo. 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-700 font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Inizia ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-600" /> Domande frequenti su Aer Lingus e CE 261/2004
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

        {/* Related */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Articoli correlati</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "british-airways-risarcimento", title: "British Airways: Risarcimento Voli 2026" },
              { slug: "iberia-express-risarcimento", title: "Iberia Express: Risarcimento Voli 2026" },
              { slug: "aeroporto-londra-risarcimento", title: "Aeroporto Londra: Risarcimento 2026" },
            ].map(a => (
              <Link key={a.slug} href={`/it/blog/${a.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-green-300 group">
                <p className="font-semibold text-gray-800 group-hover:text-green-600 text-sm">{a.title}</p>
                <p className="text-green-600 text-xs mt-2 flex items-center gap-1">Leggi <ArrowRight className="w-3 h-3" /></p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}
