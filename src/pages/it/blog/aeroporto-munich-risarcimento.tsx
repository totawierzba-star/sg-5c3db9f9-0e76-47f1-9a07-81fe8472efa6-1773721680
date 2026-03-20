import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-munich-risarcimento";
const title = "Aeroporto Monaco MUC: Risarcimento Voli 2026 — fino a €600";
const description = "Volo in ritardo o cancellato a Monaco di Baviera MUC? CE 261/2004, €250–€600, hub Lufthansa, T1 vs T2 Satellite, nebbia non straordinaria, coincidenze intercontinentali, LBA vs ENAC.";
const publishDate = "2026-03-20";

const faqData = [
  {
    question: "Quanto spetta per un volo in ritardo a Monaco MUC?",
    answer: "Dipende dalla distanza della rotta: €250 per rotte ≤1500 km (es. Milano–Monaco, Roma–Monaco), €400 per rotte 1500–3500 km, €600 per rotte oltre 3500 km (es. Roma–Los Angeles via Monaco con Lufthansa su un unico PNR). Il ritardo all'arrivo deve superare le 3 ore."
  },
  {
    question: "La nebbia a Monaco è una circostanza straordinaria che esclude il risarcimento?",
    answer: "No. Monaco MUC dispone di sistemi ILS Cat III che consentono atterraggi con visibilità quasi zero. La nebbia è un fenomeno prevedibile e stagionale in Baviera; Lufthansa e gli altri vettori devono pianificare di conseguenza. I tribunali europei hanno ripetutamente confermato che la nebbia ordinaria non costituisce circostanza straordinaria."
  },
  {
    question: "Ho perso la coincidenza a Monaco per colpa di Lufthansa. Quanto posso richiedere?",
    answer: "Il risarcimento si calcola sulla distanza totale dalla partenza alla destinazione finale, a patto che tu abbia un unico PNR. Es: Roma–Monaco–New York = ~9.400 km → €600. Se hai prenotazioni separate, ogni tratta è indipendente."
  },
  {
    question: "Qual è la differenza tra Terminal 1 e Terminal 2 di Monaco?",
    answer: "Il Terminal 2 (T2) e il suo Satellite (T2S) sono riservati a Lufthansa e ai partner Star Alliance. Il Terminal 1 serve tutte le altre compagnie (easyJet, Ryanair vola da Memmingen FMM, non MUC). Il T2S è collegato al T2 tramite una navetta sotterranea (circa 5 minuti). Verifica quale terminal usa il tuo volo: i tempi di percorrenza sono diversi."
  },
  {
    question: "Qual è l'autorità competente per reclami su voli da Monaco MUC?",
    answer: "Per voli in partenza dalla Germania → LBA (Luftfahrt-Bundesamt, Ufficio Federale dell'Aviazione Civile tedesco). Per voli in partenza dall'Italia → ENAC. Se il tuo volo è partito dall'Italia, ENAC gestisce il reclamo anche contro vettori tedeschi come Lufthansa."
  },
  {
    question: "Ryanair opera da Monaco MUC?",
    answer: "No. Ryanair non opera da Munich Airport (MUC) ma dall'aeroporto di Memmingen (FMM), a circa 125 km da Monaco. Memmingen è spesso venduto come 'Monaco' ma è un aeroporto diverso. I diritti CE 261 si applicano comunque, ma l'aeroporto di riferimento è FMM, non MUC."
  }
];

export default function AeroportoMunichRisarcimento() {
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
          <li className="text-gray-700 font-medium">Aeroporto Monaco MUC Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">Hub Europei</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 8 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Monaco MUC: Risarcimento Voli 2026 — fino a €600
          </h1>
          <p className="text-lg text-gray-600">
            Monaco di Baviera MUC è il secondo hub di Lufthansa e uno dei più importanti d&apos;Europa per i voli intercontinentali. Se hai subito un ritardo o una cancellazione, hai diritto fino a <strong>€600 di risarcimento</strong> ai sensi del CE 261/2004. Scopri come ottenerlo.
          </p>
        </header>

        {/* Info aeroporto */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-orange-900 text-lg mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Monaco Airport (MUC) — dati chiave
          </h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div><strong>Codice IATA:</strong> MUC</div>
            <div><strong>Nome ufficiale:</strong> Flughafen München Franz Josef Strauß</div>
            <div><strong>Posizione:</strong> 28 km a nord-est di Monaco di Baviera</div>
            <div><strong>Terminali:</strong> Terminal 1, Terminal 2 (Lufthansa + Star Alliance), T2 Satellite</div>
            <div><strong>Vettore principale:</strong> Lufthansa (LH) — hub principale dopo FRA</div>
            <div><strong>Autorità CE 261:</strong> LBA (Luftfahrt-Bundesamt)</div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-orange-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo in ritardo da o per Monaco MUC?</p>
            <p className="text-orange-100 text-sm">Hai diritto fino a €600. ClaimWinger verifica gratuitamente — 30% solo al successo.</p>
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
            <Euro className="w-6 h-6 text-orange-600" /> Importi di risarcimento per voli da/per Monaco
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
                  ["Roma FCO → Monaco MUC", "~1.180 km", "€250"],
                  ["Milano MXP → Monaco MUC", "~680 km", "€250"],
                  ["Venezia VCE → Monaco MUC", "~680 km", "€250"],
                  ["Napoli NAP → Monaco MUC", "~1.400 km", "€250"],
                  ["Palermo PMO → Monaco MUC", "~1.600 km", "€400"],
                  ["Catania CTA → Monaco MUC", "~1.700 km", "€400"],
                  ["Roma → Monaco → New York JFK", "~9.400 km (totale)", "€600"],
                  ["Roma → Monaco → Tokyo NRT", "~10.800 km (totale)", "€600"],
                  ["Milano → Monaco → Chicago ORD", "~9.200 km (totale)", "€600"],
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
          <p className="text-gray-500 text-xs">* Le ultime tre rotte presuppongono un unico PNR (prenotazione). Risarcimento basato sulla destinazione finale.</p>
        </section>

        {/* Terminal di Monaco */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-orange-600" /> I terminali di Monaco MUC: T1, T2 e T2 Satellite
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="text-left px-4 py-3">Terminale</th>
                  <th className="text-left px-4 py-3">Vettori</th>
                  <th className="text-left px-4 py-3">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-bold text-orange-700">T1</td>
                  <td className="px-4 py-3 text-gray-600">Tutte le compagnie non Star Alliance: easyJet, ITA Airways, British Airways, Air France, ecc.</td>
                  <td className="px-4 py-3 text-gray-600">5 moduli (A–E). Distanza tra moduli: fino a 15 min a piedi.</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-4 py-3 font-bold text-orange-700">T2</td>
                  <td className="px-4 py-3 text-gray-600">Lufthansa (LH), Austrian (OS), Swiss (LX), United, Air Canada, Singapore Airlines e altri Star Alliance.</td>
                  <td className="px-4 py-3 text-gray-600">MCT Lufthansa–Lufthansa: 45 min. MCT T1–T2: 60 min.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-bold text-orange-700">T2 Satellite</td>
                  <td className="px-4 py-3 text-gray-600">Lufthansa lungo raggio (intercontinentale). Collegato al T2 tramite navetta sotterranea automatica.</td>
                  <td className="px-4 py-3 text-gray-600">Navetta ogni 3 min, circa 5 min di percorso. Tempo minimo T2→T2S: 15 min.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>MCT (Minimum Connection Time):</strong> Per coincidenze Lufthansa–Lufthansa nello stesso terminale, il tempo minimo è 45 minuti. Per connessioni tra T1 e T2 sono necessari almeno 60 minuti. Se Lufthansa ti vende una coincidenza con meno tempo e la perdi, è responsabilità sua.</span>
            </p>
          </div>
        </section>

        {/* MUC vs FMM */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Monaco MUC vs Memmingen FMM: attenzione alla differenza
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 text-sm">
              <strong>Ryanair non opera da Monaco MUC</strong> ma dall&apos;aeroporto di <strong>Memmingen (FMM)</strong>, spesso venduto come &quot;Monaco&quot; ma situato a 125 km dalla città. I diritti CE 261 si applicano comunque ai voli da/per FMM, ma è un aeroporto diverso con procedure ENAC separate. Verifica sempre il codice aeroporto sul biglietto.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="text-left px-4 py-3">Aeroporto</th>
                  <th className="text-left px-4 py-3">Codice</th>
                  <th className="text-left px-4 py-3">Distanza da Monaco</th>
                  <th className="text-left px-4 py-3">Principale vettore</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">Munich International Airport</td>
                  <td className="px-4 py-3 font-bold text-orange-700">MUC</td>
                  <td className="px-4 py-3 text-gray-600">28 km dal centro</td>
                  <td className="px-4 py-3 text-gray-600">Lufthansa, easyJet, ITA, BA</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Memmingen Airport (Allgäu)</td>
                  <td className="px-4 py-3 font-bold text-gray-600">FMM</td>
                  <td className="px-4 py-3 text-gray-600">~125 km dal centro</td>
                  <td className="px-4 py-3 text-gray-600">Ryanair (hub secondario)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie a Monaco: nebbia e neve
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> <span><strong>Nebbia ordinaria</strong> — MUC ha ILS Cat III, la nebbia è prevedibile</span></li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> <span><strong>Neve invernale</strong> stagionale e prevedibile</span></li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all&apos;aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale Lufthansa</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi per rotazione aerei</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Tempesta eccezionale e imprevedibile</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC (controllori del traffico aereo)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura dello spazio aereo per emergenze</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Problemi di sicurezza aeroportuale imprevedibili</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-600" /> Come fare reclamo per voli da/per Monaco MUC
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Conserva i documenti di viaggio", text: "Carta d'imbarco, conferma prenotazione e prova del ritardo (screenshot del tabellone partenze o messaggio della compagnia). Documenta anche eventuali spese sostenute (pasti, hotel, taxi)." },
              { step: "2", title: "Invia reclamo scritto alla compagnia", text: "Per Lufthansa: lufthansa.com → Customer Support. Indica numero volo (es. LH0123), data, aeroporto di partenza, destinazione finale e importo CE 261 richiesto. Dai 14 giorni di risposta." },
              { step: "3", title: "Escalation LBA o ENAC", text: "Se il volo partiva dalla Germania → LBA (lba.de). Se partiva dall'Italia → ENAC (enac.gov.it). Puoi rivolgerti all'autorità del paese di partenza." },
              { step: "4", title: "Via legale o agenzia specializzata", text: "Se LBA/ENAC non risolvono, puoi procedere per vie legali o affidarti a ClaimWinger che gestisce il contenzioso senza anticipo — 30% solo al successo." }
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

        {/* Autorità */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-orange-600" /> Autorità competenti
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">LBA — Germania</h3>
              <p className="text-green-700 text-sm mb-2">Luftfahrt-Bundesamt (Ufficio Federale dell&apos;Aviazione Civile). Competente per voli in partenza dalla Germania, incluso MUC.</p>
              <p className="text-green-600 text-xs">lba.de — Beschwerden (Reclami)</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-bold text-orange-800 mb-2">ENAC — Italia</h3>
              <p className="text-orange-700 text-sm mb-2">Competente per voli in partenza dall&apos;Italia, anche se la destinazione è Monaco MUC e il vettore è Lufthansa.</p>
              <p className="text-orange-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-orange-700 to-orange-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo per Monaco MUC in ritardo o cancellato?</p>
            <p className="text-orange-100 text-sm">Hai diritto fino a €600. ClaimWinger gestisce il reclamo anche contro Lufthansa. 30% solo al successo.</p>
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
            <FileText className="w-6 h-6 text-orange-600" /> Domande frequenti su Monaco MUC e CE 261/2004
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
              { slug: "lufthansa-risarcimento-voli", title: "Lufthansa: Risarcimento Voli 2026" },
              { slug: "aeroporto-francoforte-risarcimento", title: "Aeroporto Francoforte FRA: Risarcimento 2026" },
              { slug: "eurowings-risarcimento", title: "Eurowings: Risarcimento Voli 2026" },
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
