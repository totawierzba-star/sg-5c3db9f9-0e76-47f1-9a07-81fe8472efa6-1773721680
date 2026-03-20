import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-zurigo-risarcimento";
const title = "Aeroporto Zurigo ZRH: Risarcimento Voli 2026 — CE 261 applicabile dalla Svizzera";
const description = "Volo in ritardo o cancellato a Zurigo ZRH? CE 261/2004 si applica anche dalla Svizzera grazie all'accordo bilaterale UE. Hub Swiss (LX), €250–€600, BAZL vs ENAC. Guida completa.";
const publishDate = "2026-03-20";

const faqData = [
  {
    question: "CE 261/2004 si applica ai voli in partenza da Zurigo ZRH? La Svizzera non è nell'UE.",
    answer: "Sì! Anche se la Svizzera non è membro dell'UE, ha recepito il CE 261/2004 nel proprio ordinamento tramite l'Accordo bilaterale sul trasporto aereo tra UE e Svizzera (in vigore dal 2002). Quindi, i voli in partenza da ZRH sono pienamente coperti dal CE 261, esattamente come i voli da aeroporti UE."
  },
  {
    question: "Quanto spetta per un volo in ritardo a Zurigo ZRH?",
    answer: "€250 per rotte ≤1500 km (es. Roma–Zurigo ~880 km, Milano–Zurigo ~250 km), €400 per rotte 1500–3500 km, €600 per rotte oltre 3500 km (es. Zurigo–New York, Zurigo–Tokyo). Il ritardo all'arrivo deve superare le 3 ore."
  },
  {
    question: "Ho perso la coincidenza a Zurigo per colpa di Swiss. Quanto posso richiedere?",
    answer: "Il risarcimento si calcola sulla distanza totale con un unico PNR. Es: Roma–Zurigo–New York (~10.200 km) → €600. Swiss è nota per hub molto efficiente a ZRH, ma i ritardi sulla prima tratta possono causare missed connections anche con MCT brevi."
  },
  {
    question: "Swiss LX appartiene a Lufthansa Group come Austrian e Eurowings. Stesso meccanismo di reclamo?",
    answer: "Sì. Swiss LX fa parte del Lufthansa Group. Il reclamo CE 261 va al vettore operativo (Swiss, codice LX). In caso di codeshare LH/LX, verifica sempre chi ha fisicamente operato il volo. La procedura di reclamo è simile a quella di Lufthansa e Austrian."
  },
  {
    question: "Qual è l'autorità competente per reclami su voli da Zurigo ZRH?",
    answer: "Per voli in partenza dalla Svizzera → BAZL (Bundesamt für Zivilluftfahrt, Ufficio federale dell'aviazione civile svizzero). Per voli in partenza dall'Italia verso ZRH → ENAC. Entrambe riconoscono il CE 261 per la propria giurisdizione."
  },
  {
    question: "Swiss paga in franchi svizzeri o in euro?",
    answer: "Il CE 261/2004 stabilisce gli importi in euro (€250/€400/€600). Swiss paga in euro se il conto bancario del passeggero è in euro, oppure può convertire in franchi al tasso di cambio del giorno. Hai diritto di richiedere il pagamento in euro."
  }
];

export default function AeroportoZurigoRisarcimento() {
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
          <li><Link href="/it" className="hover:text-red-600">Home</Link></li>
          <li className="mx-1">/</li>
          <li><Link href="/it/blog" className="hover:text-red-600">Blog</Link></li>
          <li className="mx-1">/</li>
          <li className="text-gray-700 font-medium">Aeroporto Zurigo ZRH Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">Hub Europei</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 8 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Zurigo ZRH: Risarcimento Voli 2026 — CE 261 applicabile dalla Svizzera
          </h1>
          <p className="text-lg text-gray-600">
            Zurigo ZRH è il principale hub della Svizzera e la base di Swiss International Air Lines. Anche se la Svizzera non è nell&apos;UE, <strong>il CE 261/2004 si applica pienamente ai voli da ZRH</strong> grazie all&apos;accordo bilaterale UE-Svizzera. Hai diritto fino a <strong>€600 di risarcimento</strong>.
          </p>
        </header>

        {/* BANNER chiave: Svizzera e CE 261 */}
        <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-red-900 text-lg mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" /> La Svizzera e CE 261/2004: cosa sapere
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-100 rounded-lg p-3">
              <p className="font-semibold text-green-800 text-sm mb-1">✅ CE 261 SI APPLICA da ZRH</p>
              <p className="text-green-700 text-sm">La Svizzera ha recepito CE 261 tramite l&apos;Accordo bilaterale UE-CH sul trasporto aereo (2002). I voli da Zurigo ZRH sono coperti come i voli da aeroporti UE.</p>
            </div>
            <div className="bg-blue-100 rounded-lg p-3">
              <p className="font-semibold text-blue-800 text-sm mb-1">ℹ️ Autorità svizzera: BAZL</p>
              <p className="text-blue-700 text-sm">L&apos;autorità competente per voli da ZRH è il BAZL (Bundesamt für Zivilluftfahrt). Per voli da aeroporti italiani → ENAC.</p>
            </div>
          </div>
        </div>

        {/* Info aeroporto */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-600" /> Zurigo Airport (ZRH) — dati chiave
          </h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div><strong>Codice IATA:</strong> ZRH</div>
            <div><strong>Nome ufficiale:</strong> Flughafen Zürich</div>
            <div><strong>Posizione:</strong> 13 km a nord del centro di Zurigo</div>
            <div><strong>Terminali:</strong> A (Schengen), B/D/E (extra-Schengen, lungo raggio Swiss)</div>
            <div><strong>Vettore principale:</strong> Swiss International Air Lines (LX) — Lufthansa Group</div>
            <div><strong>Autorità CE 261:</strong> BAZL (Bundesamt für Zivilluftfahrt)</div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-red-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo in ritardo da o per Zurigo ZRH?</p>
            <p className="text-red-100 text-sm">CE 261 applicabile anche da Svizzera. ClaimWinger verifica gratuitamente — 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-red-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Verifica ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Importi CE 261 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-red-600" /> Importi di risarcimento per voli da/per Zurigo
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
                  ["Roma FCO → Zurigo ZRH", "~880 km", "€250"],
                  ["Milano MXP → Zurigo ZRH", "~250 km", "€250"],
                  ["Venezia VCE → Zurigo ZRH", "~600 km", "€250"],
                  ["Napoli NAP → Zurigo ZRH", "~1.200 km", "€250"],
                  ["Catania CTA → Zurigo ZRH", "~1.400 km", "€250"],
                  ["Palermo PMO → Zurigo ZRH", "~1.450 km", "€250"],
                  ["Roma → Zurigo → New York JFK", "~10.200 km (totale)", "€600"],
                  ["Milano → Zurigo → Bangkok BKK", "~10.000 km (totale)", "€600"],
                  ["Roma → Zurigo → Tokyo NRT", "~11.600 km (totale)", "€600"],
                ].map(([route, dist, comp]) => (
                  <tr key={route} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{route}</td>
                    <td className="px-4 py-2 text-gray-600">{dist}</td>
                    <td className={`px-4 py-2 font-bold ${comp === "€600" ? "text-red-700" : "text-blue-700"}`}>{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs">* Le ultime tre rotte presuppongono un unico PNR. Risarcimento basato sulla destinazione finale.</p>
        </section>

        {/* Swiss hub e coincidenze */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-red-600" /> Coincidenze via Zurigo: l&apos;hub Swiss LX
          </h2>
          <p className="text-gray-700 mb-4">
            Swiss International Air Lines utilizza ZRH come hub intercontinentale. MCT (Minimum Connection Time) a ZRH per coincidenze Swiss–Swiss: tipicamente <strong>45 minuti</strong> per voli Schengen-Schengen e <strong>60 minuti</strong> per connessioni con voli extra-Schengen. Se Swiss ti vende una coincidenza con meno tempo e la perdi, è responsabilità sua.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Codeshare LH/LX:</strong> Swiss e Lufthansa vendono molti voli in codeshare. Il reclamo CE 261 va sempre al vettore che ha fisicamente operato il volo (il vettore operativo), non al vettore commerciale che ha emesso il biglietto.</span>
            </p>
          </div>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie a Zurigo: neve e ghiaccio
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> <span><strong>Neve invernale</strong> stagionale e prevedibile in Svizzera</span></li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all&apos;aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale Swiss</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi per rotazione aerei</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Tempesta eccezionale e imprevedibile</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC (controllori del traffico aereo)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo (emergenze)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Emergenze di sicurezza aeroportuale</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-red-600" /> Come fare reclamo per voli da/per Zurigo ZRH
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Conserva i documenti di viaggio", text: "Carta d'imbarco, conferma prenotazione e prova del ritardo. Documenta anche le spese extra (pasti, hotel, taxi) con ricevute." },
              { step: "2", title: "Invia reclamo a Swiss LX", text: "Usa swiss.com → Contatto → Reclami. Indica numero volo (LX + numero), data, aeroporto di partenza, destinazione finale, importo CE 261 (€250 per rotte Italia–Zurigo). Swiss risponde tipicamente in 4–6 settimane." },
              { step: "3", title: "Escalation BAZL o ENAC", text: "Se il volo partiva dalla Svizzera → BAZL (bazl.admin.ch). Se partiva dall'Italia → ENAC (enac.gov.it). Entrambi riconoscono CE 261 per la propria giurisdizione." },
              { step: "4", title: "Affida a ClaimWinger", text: "ClaimWinger gestisce i reclami contro Swiss senza anticipo — 30% solo al successo. Swiss, come tutto il gruppo Lufthansa, risponde meglio tramite agenzie specializzate." }
            ].map(item => (
              <li key={item.step} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                <span className="bg-red-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
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
            <Info className="w-6 h-6 text-red-600" /> Autorità competenti
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">BAZL — Svizzera</h3>
              <p className="text-green-700 text-sm mb-2">Bundesamt für Zivilluftfahrt (Ufficio federale dell&apos;aviazione civile svizzero). Competente per voli in partenza dalla Svizzera, incluso ZRH. Applica CE 261 tramite accordo bilaterale UE-CH.</p>
              <p className="text-green-600 text-xs">bazl.admin.ch — Passagierrechte</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">ENAC — Italia</h3>
              <p className="text-red-700 text-sm mb-2">Competente per voli in partenza dall&apos;Italia verso Zurigo, anche se il vettore è Swiss.</p>
              <p className="text-red-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-red-700 to-red-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo per Zurigo ZRH in ritardo o cancellato?</p>
            <p className="text-red-100 text-sm">CE 261 applicabile anche dalla Svizzera. ClaimWinger gestisce il reclamo contro Swiss. 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-700 font-bold px-6 py-3 rounded-lg hover:bg-red-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Inizia ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-red-600" /> Domande frequenti su Zurigo ZRH e CE 261/2004
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
              { slug: "swiss-risarcimento", title: "SWISS: Risarcimento Voli 2026" },
              { slug: "aeroporto-vienna-risarcimento", title: "Aeroporto Vienna VIE: Risarcimento 2026" },
              { slug: "aeroporto-munich-risarcimento", title: "Aeroporto Monaco MUC: Risarcimento 2026" },
            ].map(a => (
              <Link key={a.slug} href={`/it/blog/${a.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-red-300 group">
                <p className="font-semibold text-gray-800 group-hover:text-red-600 text-sm">{a.title}</p>
                <p className="text-red-600 text-xs mt-2 flex items-center gap-1">Leggi <ArrowRight className="w-3 h-3" /></p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}
