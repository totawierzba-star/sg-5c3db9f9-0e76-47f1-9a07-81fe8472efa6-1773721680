import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-olbia-risarcimento";
const title = "Aeroporto Olbia Costa Smeralda (OLB): Risarcimento Voli 2026";
const description = "Volo in ritardo o cancellato a Olbia OLB? CE 261/2004, €250–€400, Ryanair/easyJet/ITA, alta stagione Costa Smeralda, congestione estiva non straordinaria, procedura ENAC.";
const publishDate = "2026-03-20";

const faqData = [
  {
    question: "Quanto spetta per un volo in ritardo a Olbia OLB?",
    answer: "Per le rotte dall'Italia continentale (Roma, Milano, Torino ecc.) la distanza è ≤1500 km → €250 di risarcimento CE 261. Per voli da città del Nord Europa (Londra, Berlino, Amsterdam) la distanza supera i 1500 km → €400. Il ritardo all'arrivo deve superare le 3 ore."
  },
  {
    question: "Il mio volo per Olbia è stato cancellato in alta stagione. Ho diritto al risarcimento?",
    answer: "Quasi certamente sì. La cancellazione di voli estivi su Olbia è spesso dovuta a overbooking o problemi operativi prevedibili, non a circostanze straordinarie. Le compagnie aeree sanno da mesi che l'estate è alta stagione a Olbia — la congestione non è imprevedibile."
  },
  {
    question: "Qual è la differenza tra Olbia OLB e Cagliari CAG?",
    answer: "Olbia (OLB) è il principale aeroporto della Sardegna settentrionale e la porta per la Costa Smeralda. Cagliari (CAG) è il principale aeroporto della Sardegna meridionale. Se la tua destinazione è Porto Cervo, Arzachena, San Teodoro o Costa Smeralda, il tuo aeroporto è OLB. Se vai a Cagliari o dintorni, è CAG."
  },
  {
    question: "Il vento a Olbia (Maestrale) è una circostanza straordinaria?",
    answer: "No. Il Maestrale è un vento tipico e prevedibile della Sardegna settentrionale, ben documentato e noto a tutte le compagnie aeree. Non costituisce circostanza straordinaria. Perché sia straordinario, il vento dovrebbe essere eccezionalmente intenso e imprevisto — non il solito maestrale estivo."
  },
  {
    question: "Ho prenotato l'estate scorsa e il volo era in ritardo. Posso ancora fare reclamo?",
    answer: "Sì, hai tempo per fare reclamo. In Italia il termine di prescrizione per i diritti CE 261 è generalmente di 2 anni (prescrizione ordinaria dei diritti contrattuali). Tuttavia, conviene agire prima: più passa il tempo, più difficile è raccogliere prove. Azioni avviate entro 1–2 anni hanno buone probabilità di successo."
  },
  {
    question: "Qual è l'autorità competente per reclami su voli da Olbia OLB?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) è l'autorità italiana competente per tutti i voli in partenza e arrivo in Italia, incluso Olbia OLB."
  }
];

export default function AeroportoOlbiaRisarcimento() {
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
          <li className="text-gray-700 font-medium">Aeroporto Olbia OLB Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Aeroporti</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 7 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Olbia Costa Smeralda (OLB): Risarcimento Voli 2026
          </h1>
          <p className="text-lg text-gray-600">
            Olbia OLB è la porta d&apos;accesso alla Costa Smeralda. In estate l&apos;aeroporto è al limite della capacità con milioni di passeggeri. Ritardi e cancellazioni sono frequenti ma <strong>non sono circostanze straordinarie</strong>. Scopri come ottenere fino a <strong>€250–€400 di risarcimento</strong> ai sensi del CE 261/2004.
          </p>
        </header>

        {/* Info aeroporto */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-green-900 text-lg mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Aeroporto Olbia Costa Smeralda (OLB) — dati chiave
          </h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div><strong>Codice IATA:</strong> OLB</div>
            <div><strong>Nome ufficiale:</strong> Aeroporto di Olbia Costa Smeralda</div>
            <div><strong>Posizione:</strong> 4 km a sud-est di Olbia</div>
            <div><strong>Stagionalità:</strong> Picco giugno–settembre (70% del traffico annuale)</div>
            <div><strong>Vettori principali:</strong> Ryanair, easyJet, Volotea, ITA Airways, British Airways (stagionale)</div>
            <div><strong>Autorità CE 261:</strong> ENAC (Ente Nazionale per l&apos;Aviazione Civile)</div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-green-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo in ritardo o cancellato a Olbia?</p>
            <p className="text-green-100 text-sm">Hai diritto fino a €400. ClaimWinger verifica gratuitamente — 30% solo al successo.</p>
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

        {/* Importi CE 261 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-600" /> Importi CE 261 per voli da/per Olbia OLB
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
                  ["Roma FCO → Olbia OLB", "~540 km", "€250"],
                  ["Milano MXP → Olbia OLB", "~650 km", "€250"],
                  ["Torino TRN → Olbia OLB", "~700 km", "€250"],
                  ["Bologna BLQ → Olbia OLB", "~600 km", "€250"],
                  ["Venezia VCE → Olbia OLB", "~750 km", "€250"],
                  ["Napoli NAP → Olbia OLB", "~390 km", "€250"],
                  ["Londra LGW → Olbia OLB", "~1.780 km", "€400"],
                  ["Amsterdam AMS → Olbia OLB", "~1.730 km", "€400"],
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

        {/* Stagionalità */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Alta stagione a Olbia: cosa devi sapere
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Congestione estiva prevedibile</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Vento Maestrale ordinario e stagionale</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all&apos;aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale della compagnia</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Maestrale eccezionalmente forte e imprevedibile</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC (controllori del traffico aereo)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Incendio nelle vicinanze che chiude le piste</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo per emergenze</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vettori */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-green-600" /> Vettori principali a Olbia OLB
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="text-left px-4 py-3">Compagnia</th>
                  <th className="text-left px-4 py-3">Principali rotte da OLB</th>
                  <th className="text-left px-4 py-3">Stagionalità</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Ryanair (FR)", "Roma, Milano BGY, Torino, Bologna, Londra", "Tutto l'anno + extra estate"],
                  ["easyJet (U2)", "Milano MXP, Torino, Venezia, Londra, Parigi", "Prevalentemente estate"],
                  ["Volotea (V7)", "Torino, Venezia, Bologna, Napoli, Parigi", "Estate"],
                  ["ITA Airways (AZ)", "Roma FCO, Milano MXP", "Tutto l'anno"],
                  ["British Airways (BA)", "Londra LHR", "Estate (stagionale)"],
                ].map(([carrier, routes, season]) => (
                  <tr key={carrier} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{carrier}</td>
                    <td className="px-4 py-2 text-gray-600 text-xs">{routes}</td>
                    <td className="px-4 py-2 text-gray-500 text-xs">{season}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-600" /> Come fare reclamo per voli da/per Olbia OLB
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Conserva i documenti", text: "Carta d'imbarco, conferma prenotazione, prova del ritardo. Documenta le spese extra (pasti, pernottamento) con ricevute." },
              { step: "2", title: "Invia reclamo alla compagnia", text: "Usa il portale reclami della compagnia (Ryanair: ryanair.com, easyJet: easyjet.com ecc.). Indica numero volo, data, rotta (es. Milano MXP → Olbia OLB), importo CE 261 richiesto (€250). Dai 14 giorni di risposta." },
              { step: "3", title: "Escalation ENAC", text: "Se la compagnia non risponde o rifiuta ingiustificatamente → ENAC (enac.gov.it). ENAC è competente per tutti i voli da/per aeroporti italiani." },
              { step: "4", title: "Affida a ClaimWinger", text: "ClaimWinger gestisce i reclami contro tutte le compagnie senza anticipo — 30% solo al successo." }
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

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo per Olbia OLB in ritardo o cancellato?</p>
            <p className="text-green-100 text-sm">Hai diritto fino a €400. ClaimWinger gestisce il reclamo. 30% solo al successo.</p>
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
            <FileText className="w-6 h-6 text-green-600" /> Domande frequenti su Olbia OLB e CE 261/2004
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
              { slug: "aeroporto-cagliari-risarcimento", title: "Aeroporto Cagliari CAG: Risarcimento 2026" },
              { slug: "ryanair-italia-risarcimento", title: "Ryanair Italia: Risarcimento Voli 2026" },
              { slug: "easyjet-italia-risarcimento", title: "easyJet Italia: Risarcimento Voli 2026" },
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
