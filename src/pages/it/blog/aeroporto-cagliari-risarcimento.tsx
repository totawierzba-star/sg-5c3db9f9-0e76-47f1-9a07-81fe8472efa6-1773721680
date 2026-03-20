import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-cagliari-risarcimento";
const title = "Aeroporto Cagliari CAG: Risarcimento Voli Ritardati e Cancellati 2026";
const description = "Volo in ritardo o cancellato a Cagliari CAG? CE 261/2004, €250, Ryanair/easyJet/Volotea/ITA Airways, alta stagione estiva, procedure ENAC. Guida completa 2026.";
const publishDate = "2026-03-20";

const faqData = [
  {
    question: "Quanto spetta per un volo in ritardo a Cagliari CAG?",
    answer: "Per quasi tutte le rotte da/per Cagliari dall'Italia continentale (Roma, Milano, Torino, Bologna ecc.) la distanza è ≤1500 km → €250 di risarcimento CE 261/2004. Per voli da città del Nord Europa (Londra, Parigi, Berlino ecc.) la distanza può superare 1500 km → €400. Il ritardo all'arrivo deve superare le 3 ore."
  },
  {
    question: "Ryanair domina a Cagliari. Il risarcimento si ottiene facilmente?",
    answer: "Ryanair è nota per rifiutare spesso i reclami CE 261 addducendo 'circostanze straordinarie'. Tuttavia, in base alla giurisprudenza europea, guasti tecnici e scioperi del personale Ryanair NON sono straordinari. Se Ryanair rifiuta ingiustificatamente, ENAC o un'agenzia come ClaimWinger possono ottenere il risarcimento."
  },
  {
    question: "Il mio volo estivo per Cagliari è stato cancellato perché l'aeroporto era congestionato. Ho diritto al rimborso?",
    answer: "Probabilmente sì. La congestione estiva a Cagliari è un fenomeno prevedibile che le compagnie aeree devono pianificare. Le compagnie spesso invocano 'circostanze aeroportuali' per negare il risarcimento, ma questo argomento raramente regge in tribunale per voli estivi in aeroporti di destinazione turistica."
  },
  {
    question: "Qual è la differenza tra Cagliari CAG e Olbia OLB?",
    answer: "Cagliari (CAG) è il principale aeroporto della Sardegna meridionale, con traffico business tutto l'anno. Olbia (OLB) è il principale aeroporto della Sardegna settentrionale (Costa Smeralda), prevalentemente turistico con alta stagione giugno–settembre. Se la tua meta è la Costa Smeralda, probabilmente il tuo aeroporto è OLB, non CAG."
  },
  {
    question: "Qual è l'autorità competente per reclami su voli da Cagliari CAG?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) è l'autorità italiana competente per tutti i voli in partenza dall'Italia, incluso Cagliari CAG. Puoi presentare reclamo all'ENAC se la compagnia aerea non risponde o rifiuta ingiustificatamente."
  },
  {
    question: "Ho perso una coincidenza per Cagliari. Ho diritto al risarcimento?",
    answer: "Sì, se hai un unico PNR. Il risarcimento si calcola sulla distanza totale dalla tua partenza a Cagliari. Se il ritardo sulla prima tratta ti ha fatto perdere il volo per Cagliari e sei arrivato a destinazione con oltre 3 ore di ritardo, hai diritto al risarcimento."
  }
];

export default function AeroportoCagliariRisarcimento() {
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
          <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
          <li className="mx-1">/</li>
          <li><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
          <li className="mx-1">/</li>
          <li className="text-gray-700 font-medium">Aeroporto Cagliari CAG Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Aeroporti</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 7 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Cagliari CAG: Risarcimento Voli Ritardati e Cancellati 2026
          </h1>
          <p className="text-lg text-gray-600">
            L&apos;aeroporto di Cagliari (CAG) è il principale scalo della Sardegna. Con milioni di passeggeri all&apos;anno — soprattutto in estate — ritardi e cancellazioni sono frequenti. Scopri i tuoi diritti CE 261/2004 e come ottenere fino a <strong>€250–€400 di risarcimento</strong>.
          </p>
        </header>

        {/* Info aeroporto */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-blue-900 text-lg mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Aeroporto di Cagliari (CAG) — dati chiave
          </h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div><strong>Codice IATA:</strong> CAG</div>
            <div><strong>Nome ufficiale:</strong> Aeroporto di Cagliari-Elmas Mario Mameli</div>
            <div><strong>Posizione:</strong> 6 km a nord-ovest di Cagliari</div>
            <div><strong>Terminali:</strong> Terminal unico (T1)</div>
            <div><strong>Vettori principali:</strong> Ryanair, easyJet, Volotea, ITA Airways, Wizz Air, Transavia</div>
            <div><strong>Autorità CE 261:</strong> ENAC (Ente Nazionale per l&apos;Aviazione Civile)</div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo in ritardo o cancellato a Cagliari?</p>
            <p className="text-blue-100 text-sm">Hai diritto fino a €400. ClaimWinger verifica gratuitamente — 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Verifica ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Importi CE 261 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-blue-600" /> Importi CE 261 per voli da/per Cagliari
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
                  ["Roma FCO → Cagliari CAG", "~520 km", "€250"],
                  ["Milano MXP → Cagliari CAG", "~780 km", "€250"],
                  ["Torino TRN → Cagliari CAG", "~780 km", "€250"],
                  ["Bologna BLQ → Cagliari CAG", "~650 km", "€250"],
                  ["Venezia VCE → Cagliari CAG", "~770 km", "€250"],
                  ["Napoli NAP → Cagliari CAG", "~330 km", "€250"],
                  ["Londra LGW → Cagliari CAG", "~1.900 km", "€400"],
                  ["Berlino BER → Cagliari CAG", "~1.800 km", "€400"],
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

        {/* Alta stagione */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Alta stagione estiva: quando i ritardi aumentano
          </h2>
          <p className="text-gray-700 mb-4">
            Tra giugno e settembre il traffico a Cagliari aumenta drasticamente. Le compagnie aeree operano al massimo della capacità e i ritardi si moltiplicano. <strong>Questo non è una circostanza straordinaria</strong>: le compagnie sanno perfettamente che l&apos;estate è alta stagione e devono pianificare di conseguenza.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi per congestionamento estivo prevedibile</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all&apos;aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale della compagnia</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Vento di maestrale ordinario (prevedibile)</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Tempesta eccezionale e imprevedibile</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo per emergenze</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Incendio nelle vicinanze che causa chiusura piste</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vettori e come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-600" /> Vettori principali a Cagliari CAG
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left px-4 py-3">Compagnia</th>
                  <th className="text-left px-4 py-3">Principali rotte da CAG</th>
                  <th className="text-left px-4 py-3">Risposta reclami</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Ryanair (FR)", "Roma, Milano BGY, Torino, Bologna, Venezia, Londra", "Lenta — 4–8 settimane"],
                  ["easyJet (U2)", "Milano MXP, Torino, Venezia, Londra, Parigi", "Normale — 4–6 settimane"],
                  ["Volotea (V7)", "Torino, Venezia, Bologna, Napoli, Parigi", "Molto lenta — 6–10 settimane"],
                  ["ITA Airways (AZ)", "Roma FCO, Milano MXP", "Normale — 4–6 settimane"],
                  ["Wizz Air (W6)", "Roma, Milano, Budapest, Varsavia", "Lenta — 4–8 settimane"],
                ].map(([carrier, routes, resp]) => (
                  <tr key={carrier} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{carrier}</td>
                    <td className="px-4 py-2 text-gray-600 text-xs">{routes}</td>
                    <td className="px-4 py-2 text-gray-600 text-xs">{resp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" /> Come fare reclamo per voli da/per Cagliari
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Conserva i documenti", text: "Carta d'imbarco, conferma prenotazione, prova del ritardo (screenshot tabellone o SMS/email della compagnia). Documenta le spese extra sostenute." },
              { step: "2", title: "Invia reclamo alla compagnia", text: "Usa il portale reclami della compagnia. Indica numero volo, data, rotta (es. Roma FCO → Cagliari CAG), importo CE 261 richiesto (€250). Dai 14 giorni di risposta." },
              { step: "3", title: "Escalation ENAC", text: "Se la compagnia non risponde o rifiuta ingiustificatamente → ENAC (enac.gov.it). ENAC è competente per tutti i voli in partenza e arrivo in Italia." },
              { step: "4", title: "Affida a ClaimWinger", text: "ClaimWinger gestisce i reclami contro tutte le compagnie senza anticipo — 30% solo al successo. Particolarmente efficace per Ryanair e Volotea che tendono a ignorare i reclami diretti." }
            ].map(item => (
              <li key={item.step} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                <span className="bg-blue-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo per Cagliari CAG in ritardo o cancellato?</p>
            <p className="text-blue-100 text-sm">Hai diritto fino a €400. ClaimWinger gestisce il reclamo anche contro Ryanair e Volotea. 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Inizia ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" /> Domande frequenti su Cagliari CAG e CE 261/2004
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
              { slug: "ryanair-italia-risarcimento", title: "Ryanair Italia: Risarcimento Voli 2026" },
              { slug: "volotea-risarcimento", title: "Volotea: Risarcimento Voli 2026" },
              { slug: "aeroporto-palermo-falcone-borsellino-risarcimento", title: "Aeroporto Palermo PMO: Risarcimento 2026" },
            ].map(a => (
              <Link key={a.slug} href={`/it/blog/${a.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-blue-300 group">
                <p className="font-semibold text-gray-800 group-hover:text-blue-600 text-sm">{a.title}</p>
                <p className="text-blue-600 text-xs mt-2 flex items-center gap-1">Leggi <ArrowRight className="w-3 h-3" /></p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}
