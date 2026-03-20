import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-brindisi-risarcimento";
const title = "Aeroporto Brindisi BDS (Salento): Risarcimento Voli 2026";
const description = "Volo in ritardo o cancellato a Brindisi BDS? CE 261/2004, €250, Ryanair/easyJet/Volotea/ITA, alta stagione Puglia, procedura ENAC. Guida completa 2026.";
const publishDate = "2026-03-20";

const faqData = [
  {
    question: "Quanto spetta per un volo in ritardo a Brindisi BDS?",
    answer: "Per quasi tutte le rotte da aeroporti italiani (Roma, Milano, Torino ecc.) la distanza è ≤1500 km → €250. Per voli da città del Nord Europa (Londra ~2.000 km, Berlino ~1.600 km) il risarcimento è €400. Il ritardo all'arrivo deve superare le 3 ore."
  },
  {
    question: "Qual è la differenza tra Brindisi BDS e Bari BRI?",
    answer: "Brindisi (BDS) è il secondo aeroporto della Puglia, specializzato in voli low-cost e charter per la zona Salento-Lecce. Bari (BRI) è il principale aeroporto pugliese, con più voli e vettori. Se la tua destinazione è Lecce, Gallipoli, Otranto o il Salento in generale, Brindisi BDS è più comodo. Per Bari città, Alberobello, Matera (MT, Basilicata), Bari BRI è più vicino."
  },
  {
    question: "Ryanair domina a Brindisi. Il risarcimento CE 261 si ottiene?",
    answer: "Sì, anche contro Ryanair. Ryanair spesso rifiuta i reclami adducendo 'circostanze straordinarie', ma guasti tecnici e scioperi del personale Ryanair non sono straordinari per la legge europea. ENAC e le agenzie come ClaimWinger riescono ad ottenere il risarcimento da Ryanair in modo efficace."
  },
  {
    question: "Il mio volo estivo da Brindisi era in ritardo di 4 ore per congestione. Posso reclamare?",
    answer: "Sì. La congestione estiva a Brindisi è prevedibile — le compagnie devono pianificare di conseguenza. Un ritardo per congestione aeroportuale prevedibile non è circostanza straordinaria. Hai diritto a €250 di risarcimento."
  },
  {
    question: "Qual è l'autorità competente per reclami su voli da Brindisi?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) è l'autorità italiana competente per tutti i voli in partenza e arrivo in Italia, incluso Brindisi BDS."
  },
  {
    question: "Ho perso una coincidenza per Brindisi su un unico PNR. Ho diritto al risarcimento?",
    answer: "Sì. Il risarcimento si calcola sulla distanza totale dal tuo aeroporto di partenza a Brindisi. Se sei arrivato a Brindisi con oltre 3 ore di ritardo per colpa di un ritardo sulla prima tratta, hai diritto al risarcimento (€250 per rotte nazionali/corto raggio)."
  }
];

export default function AeroportoBrindisiRisarcimento() {
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
          <li><Link href="/it" className="hover:text-orange-600">Home</Link></li>
          <li className="mx-1">/</li>
          <li><Link href="/it/blog" className="hover:text-orange-600">Blog</Link></li>
          <li className="mx-1">/</li>
          <li className="text-gray-700 font-medium">Aeroporto Brindisi BDS Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">Aeroporti</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 7 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Brindisi BDS (Salento): Risarcimento Voli 2026
          </h1>
          <p className="text-lg text-gray-600">
            L&apos;aeroporto del Salento di Brindisi (BDS) è la porta d&apos;accesso al Salento e alla Puglia meridionale. Con un forte picco estivo, ritardi e cancellazioni sono frequenti. Scopri i tuoi diritti CE 261/2004 e come ottenere <strong>€250 di risarcimento</strong>.
          </p>
        </header>

        {/* Info aeroporto */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-orange-900 text-lg mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Aeroporto Brindisi del Salento (BDS) — dati chiave
          </h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div><strong>Codice IATA:</strong> BDS</div>
            <div><strong>Nome ufficiale:</strong> Aeroporto del Salento Brindisi-Casale</div>
            <div><strong>Posizione:</strong> 5 km a nord di Brindisi</div>
            <div><strong>Stagionalità:</strong> Picco giugno–settembre</div>
            <div><strong>Vettori principali:</strong> Ryanair, easyJet, Volotea, ITA Airways</div>
            <div><strong>Autorità CE 261:</strong> ENAC (Ente Nazionale per l&apos;Aviazione Civile)</div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-orange-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo in ritardo o cancellato a Brindisi?</p>
            <p className="text-orange-100 text-sm">Hai diritto a €250. ClaimWinger verifica gratuitamente — 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-orange-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Verifica ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Importi CE 261 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-orange-600" /> Importi CE 261 per voli da/per Brindisi BDS
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
                  ["Roma FCO → Brindisi BDS", "~490 km", "€250"],
                  ["Milano MXP → Brindisi BDS", "~920 km", "€250"],
                  ["Torino TRN → Brindisi BDS", "~1.000 km", "€250"],
                  ["Bologna BLQ → Brindisi BDS", "~770 km", "€250"],
                  ["Venezia VCE → Brindisi BDS", "~880 km", "€250"],
                  ["Londra LGW → Brindisi BDS", "~2.000 km", "€400"],
                  ["Berlino BER → Brindisi BDS", "~1.600 km", "€400"],
                  ["Manchester MAN → Brindisi BDS", "~2.100 km", "€400"],
                ].map(([route, dist, comp]) => (
                  <tr key={route} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{route}</td>
                    <td className="px-4 py-2 text-gray-600">{dist}</td>
                    <td className={`px-4 py-2 font-bold ${comp === "€400" ? "text-orange-700" : "text-blue-700"}`}>{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* BDS vs BRI */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-orange-600" /> Brindisi BDS vs Bari BRI: quale aeroporto?
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="text-left px-4 py-3">Aeroporto</th>
                  <th className="text-left px-4 py-3">Zone di riferimento</th>
                  <th className="text-left px-4 py-3">Vettore principale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-bold text-orange-700">BDS — Brindisi</td>
                  <td className="px-4 py-3 text-gray-600">Salento, Lecce, Gallipoli, Otranto, Santa Maria di Leuca</td>
                  <td className="px-4 py-3 text-gray-600">Ryanair, easyJet, Volotea</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-bold text-purple-700">BRI — Bari</td>
                  <td className="px-4 py-3 text-gray-600">Bari città, Alberobello, Matera, Basilicata</td>
                  <td className="px-4 py-3 text-gray-600">Ryanair, easyJet, ITA Airways, Vueling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie a Brindisi
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Congestione estiva prevedibile</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Vento Tramontana ordinario</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all&apos;aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale della compagnia</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Tempesta eccezionale e imprevedibile</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC (controllori del traffico aereo)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura piste per emergenze</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-600" /> Come fare reclamo per voli da/per Brindisi BDS
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Conserva i documenti", text: "Carta d'imbarco, conferma prenotazione, prova del ritardo. Documenta le spese extra (pasti) con ricevute." },
              { step: "2", title: "Invia reclamo alla compagnia", text: "Usa il portale reclami della compagnia. Indica numero volo, data, rotta (es. Milano MXP → Brindisi BDS), importo CE 261 (€250). Attendi 14 giorni di risposta." },
              { step: "3", title: "Escalation ENAC", text: "Se la compagnia non risponde o rifiuta → ENAC (enac.gov.it). ENAC è competente per tutti i voli da aeroporti italiani." },
              { step: "4", title: "Affida a ClaimWinger", text: "ClaimWinger gestisce i reclami contro tutte le compagnie senza anticipo — 30% solo al successo." }
            ].map(item => (
              <li key={item.step} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                <span className="bg-orange-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-orange-700 to-orange-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo per Brindisi BDS in ritardo o cancellato?</p>
            <p className="text-orange-100 text-sm">Hai diritto a €250–€400. ClaimWinger gestisce il reclamo. 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-700 font-bold px-6 py-3 rounded-lg hover:bg-orange-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Inizia ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-600" /> Domande frequenti su Brindisi BDS e CE 261/2004
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
              { slug: "aeroporto-bari-karol-wojtyla-risarcimento", title: "Aeroporto Bari BRI: Risarcimento 2026" },
              { slug: "ryanair-italia-risarcimento", title: "Ryanair Italia: Risarcimento Voli 2026" },
              { slug: "aeroporto-napoli-capodichino-risarcimento", title: "Aeroporto Napoli NAP: Risarcimento 2026" },
            ].map(a => (
              <Link key={a.slug} href={`/it/blog/${a.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-orange-300 group">
                <p className="font-semibold text-gray-800 group-hover:text-orange-600 text-sm">{a.title}</p>
                <p className="text-orange-600 text-xs mt-2 flex items-center gap-1">Leggi <ArrowRight className="w-3 h-3" /></p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}
