import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-bruxelles-risarcimento";
const title = "Aeroporto Bruxelles BRU: Risarcimento Voli 2026 — fino a €600";
const description = "Volo in ritardo o cancellato a Bruxelles BRU? CE 261/2004, €250–€600, hub Brussels Airlines, BRU vs Charleroi CRL (Ryanair), connessioni Africa, DGTA vs ENAC. Guida 2026.";
const publishDate = "2026-03-20";

const faqData = [
  {
    question: "Quanto spetta per un volo in ritardo a Bruxelles BRU?",
    answer: "€250 per rotte ≤1500 km (es. Roma–Bruxelles ~1.430 km, Milano–Bruxelles ~900 km), €400 per rotte 1500–3500 km, €600 per rotte oltre 3500 km (es. Roma–Kinshasa via Bruxelles su un unico PNR). Il ritardo all'arrivo deve superare le 3 ore."
  },
  {
    question: "Qual è la differenza tra Bruxelles BRU e Charleroi CRL?",
    answer: "BRU (Brussels Airport) è il principale aeroporto del Belgio, hub di Brussels Airlines. CRL (Brussels South Charleroi Airport) è un aeroporto low-cost a 55 km da Bruxelles, hub principale di Ryanair in Belgio. Sono aeroporti completamente diversi! Verifica sempre il codice sul tuo biglietto. I diritti CE 261 si applicano a entrambi, ma le procedure sono separate."
  },
  {
    question: "Ho perso la coincidenza a Bruxelles per colpa di Brussels Airlines. Quanto posso richiedere?",
    answer: "Il risarcimento si calcola sulla distanza totale con un unico PNR. Es: Roma–Bruxelles–Kinshasa (~8.600 km) → €600. Brussels Airlines è il principale vettore per l'Africa subsahariana dall'Europa, con molte coincidenze a BRU."
  },
  {
    question: "Brussels Airlines fa parte del gruppo Lufthansa. Vale lo stesso per il reclamo?",
    answer: "Sì. Brussels Airlines (SN) è parte del Lufthansa Group. Il reclamo CE 261 va al vettore operativo (Brussels Airlines, codice SN). In caso di codeshare LH/SN, verifica chi ha fisicamente operato il volo prima di inviare il reclamo."
  },
  {
    question: "Qual è l'autorità competente per reclami su voli da Bruxelles BRU?",
    answer: "Per voli in partenza dal Belgio → DGTA (Direction Générale Transport Aérien, Direzione Generale Trasporto Aereo belga). Per voli in partenza dall'Italia → ENAC. Puoi rivolgerti all'autorità del paese di partenza."
  },
  {
    question: "Ho un volo Ryanair da Charleroi CRL cancellato. ENAC o DGTA?",
    answer: "Charleroi CRL è in Belgio, quindi l'autorità del paese di partenza è DGTA. Se il volo partiva da un aeroporto italiano verso CRL, ENAC è competente. Le procedure CE 261 sono identiche indipendentemente dall'aeroporto."
  }
];

export default function AeroportoBruxellesRisarcimento() {
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
          <li className="text-gray-700 font-medium">Aeroporto Bruxelles BRU Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Hub Europei</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 8 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Bruxelles BRU: Risarcimento Voli 2026 — fino a €600
          </h1>
          <p className="text-lg text-gray-600">
            Bruxelles BRU è l&apos;hub di Brussels Airlines e la porta principale verso l&apos;Africa subsahariana dall&apos;Europa. Se hai subito un ritardo o una cancellazione, hai diritto fino a <strong>€600 di risarcimento</strong> ai sensi del CE 261/2004. Guida completa su BRU, Charleroi e diritti passeggeri.
          </p>
        </header>

        {/* BRU vs CRL banner */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-yellow-900 text-lg mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" /> Attenzione: BRU e Charleroi CRL sono aeroporti diversi!
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-3 border border-yellow-200">
              <p className="font-bold text-gray-800 text-sm mb-1">✈️ Brussels Airport (BRU)</p>
              <p className="text-gray-600 text-sm">14 km da Bruxelles. Hub Brussels Airlines, easyJet, TUI, voli intercontinentali.</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-yellow-200">
              <p className="font-bold text-gray-800 text-sm mb-1">✈️ Charleroi Airport (CRL)</p>
              <p className="text-gray-600 text-sm">55 km da Bruxelles. Hub Ryanair, Wizz Air. Spesso venduto come &quot;Bruxelles Sud&quot;.</p>
            </div>
          </div>
          <p className="text-yellow-800 text-sm mt-3">⚠️ Controlla sempre il codice aeroporto sul biglietto. Un trasferimento da CRL a BRU richiede 60–90 min con bus o taxi.</p>
        </div>

        {/* Info aeroporto */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-blue-900 text-lg mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Brussels Airport (BRU) — dati chiave
          </h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div><strong>Codice IATA:</strong> BRU</div>
            <div><strong>Nome ufficiale:</strong> Brussels Airport (Zaventem)</div>
            <div><strong>Posizione:</strong> 14 km a nord-est di Bruxelles</div>
            <div><strong>Terminali:</strong> Terminal unico (pier A, B, T)</div>
            <div><strong>Vettore principale:</strong> Brussels Airlines (SN) — Lufthansa Group</div>
            <div><strong>Autorità CE 261:</strong> DGTA (Direction Générale Transport Aérien)</div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo in ritardo da o per Bruxelles BRU?</p>
            <p className="text-blue-100 text-sm">Hai diritto fino a €600. ClaimWinger verifica gratuitamente — 30% solo al successo.</p>
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
            <Euro className="w-6 h-6 text-blue-600" /> Importi di risarcimento per voli da/per Bruxelles
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
                  ["Roma FCO → Bruxelles BRU", "~1.430 km", "€250"],
                  ["Milano MXP → Bruxelles BRU", "~900 km", "€250"],
                  ["Venezia VCE → Bruxelles BRU", "~1.100 km", "€250"],
                  ["Napoli NAP → Bruxelles BRU", "~1.650 km", "€400"],
                  ["Catania CTA → Bruxelles BRU", "~1.900 km", "€400"],
                  ["Roma → Bruxelles → Kinshasa DRC", "~8.600 km (totale)", "€600"],
                  ["Milano → Bruxelles → Lagos NIG", "~7.300 km (totale)", "€600"],
                  ["Roma → Bruxelles → New York JFK", "~8.900 km (totale)", "€600"],
                ].map(([route, dist, comp]) => (
                  <tr key={route} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{route}</td>
                    <td className="px-4 py-2 text-gray-600">{dist}</td>
                    <td className={`px-4 py-2 font-bold ${comp === "€600" ? "text-red-700" : comp === "€400" ? "text-orange-700" : "text-blue-700"}`}>{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs">* Le ultime tre rotte presuppongono un unico PNR. Risarcimento basato sulla destinazione finale.</p>
        </section>

        {/* Vettori a BRU */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-600" /> Vettori principali a BRU e CRL
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left px-4 py-3">Vettore</th>
                  <th className="text-left px-4 py-3">Aeroporto</th>
                  <th className="text-left px-4 py-3">Specializzazione</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Brussels Airlines (SN)", "BRU", "Hub, Africa subsahariana, USA, voli europei"],
                  ["easyJet (U2)", "BRU", "Rotte europee, voli leisure"],
                  ["TUI fly Belgium (TB)", "BRU", "Voli charter/leisure Mediterraneo e Canarie"],
                  ["Ryanair (FR)", "CRL", "Low-cost europeo da Charleroi"],
                  ["Wizz Air (W6)", "CRL/BRU", "Europa Est, low-cost"],
                ].map(([carrier, apt, spec]) => (
                  <tr key={carrier} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{carrier}</td>
                    <td className={`px-4 py-2 font-bold ${apt === "CRL" ? "text-orange-600" : "text-blue-700"}`}>{apt}</td>
                    <td className="px-4 py-2 text-gray-600 text-xs">{spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie a Bruxelles
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all&apos;aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale Brussels Airlines</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Neve o nebbia prevedibile</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi per rotazione aerei</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC europeo</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo per emergenze</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Instabilità politica grave in destinazione Africa</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Emergenze di sicurezza aeroportuale</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" /> Come fare reclamo per voli da/per Bruxelles
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Conserva i documenti", text: "Carta d'imbarco, conferma prenotazione, prova del ritardo. Documenta le spese extra sostenute." },
              { step: "2", title: "Invia reclamo a Brussels Airlines", text: "brusselsairlines.com → Customer Care → Reclami. Indica numero volo (SN + numero), data, rotta, importo CE 261 richiesto. Attendi 14 giorni di risposta." },
              { step: "3", title: "Escalation DGTA o ENAC", text: "Se il volo partiva dal Belgio → DGTA (mobilit.belgium.be). Se partiva dall'Italia → ENAC. Entrambi sono autorità CE 261 competenti." },
              { step: "4", title: "Affida a ClaimWinger", text: "ClaimWinger gestisce i reclami contro Brussels Airlines e Ryanair senza anticipo — 30% solo al successo." }
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

        {/* Autorità */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" /> Autorità competenti
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">DGTA — Belgio</h3>
              <p className="text-green-700 text-sm mb-2">Direction Générale Transport Aérien. Competente per voli in partenza dal Belgio (BRU e CRL).</p>
              <p className="text-green-600 text-xs">mobilit.belgium.be — Transport aérien / Passagers</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-800 mb-2">ENAC — Italia</h3>
              <p className="text-blue-700 text-sm mb-2">Competente per voli in partenza dall&apos;Italia verso Bruxelles o Charleroi.</p>
              <p className="text-blue-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo per Bruxelles BRU o Charleroi CRL in ritardo?</p>
            <p className="text-blue-100 text-sm">Hai diritto fino a €600. ClaimWinger gestisce il reclamo anche contro Brussels Airlines e Ryanair. 30% solo al successo.</p>
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
            <FileText className="w-6 h-6 text-blue-600" /> Domande frequenti su Bruxelles BRU e CE 261/2004
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
              { slug: "brussels-airlines-risarcimento", title: "Brussels Airlines: Risarcimento Voli 2026" },
              { slug: "aeroporto-amsterdam-risarcimento", title: "Aeroporto Amsterdam AMS: Risarcimento 2026" },
              { slug: "aeroporto-parigi-risarcimento", title: "Aeroporto Parigi CDG/ORY: Risarcimento 2026" },
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
