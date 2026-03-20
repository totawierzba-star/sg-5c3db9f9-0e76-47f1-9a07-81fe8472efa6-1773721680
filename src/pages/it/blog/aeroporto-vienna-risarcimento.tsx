import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-vienna-risarcimento";
const title = "Aeroporto Vienna VIE: Risarcimento Voli 2026 — fino a €600";
const description = "Volo in ritardo o cancellato a Vienna VIE? CE 261/2004, €250–€600, hub Austrian Airlines, T1 e T3, coincidenze Medio Oriente, APF vs ENAC. Guida completa 2026.";
const publishDate = "2026-03-20";

const faqData = [
  {
    question: "Quanto spetta per un volo in ritardo a Vienna VIE?",
    answer: "Dipende dalla distanza: €250 per rotte ≤1500 km (es. Roma–Vienna ~1.180 km, Milano–Vienna ~840 km), €400 per rotte 1500–3500 km, €600 per rotte oltre 3500 km (es. Roma–Tokyo via Vienna su un unico PNR). Il ritardo all'arrivo deve superare le 3 ore."
  },
  {
    question: "La neve o la nebbia a Vienna sono circostanze straordinarie?",
    answer: "No. La neve in inverno a Vienna è un fenomeno stagionale e prevedibile. L'aeroporto VIE dispone di sistemi di de-icing avanzati e procedure anti-neve consolidate. Austrian Airlines deve pianificare di conseguenza. Anche la nebbia ordinaria non costituisce circostanza straordinaria per i tribunali europei."
  },
  {
    question: "Ho perso la coincidenza a Vienna per colpa di Austrian Airlines. Quanto posso richiedere?",
    answer: "Il risarcimento si calcola sulla distanza totale dalla partenza alla destinazione finale, se hai un unico PNR. Es: Roma–Vienna–Tokyo = ~10.800 km → €600. Se hai prenotazioni separate, ogni tratta è indipendente e il risarcimento si calcola solo sulla tratta ritardata."
  },
  {
    question: "Austrian Airlines appartiene a Lufthansa Group. Questo cambia qualcosa per il risarcimento?",
    answer: "No. Il reclamo CE 261 va sempre al vettore operativo che ha fisicamente effettuato il volo (Austrian Airlines, codice OS), non alla capogruppo Lufthansa. Tuttavia, se il volo era in codeshare LH/OS, verifica chi era il vettore operativo prima di inviare il reclamo."
  },
  {
    question: "Qual è l'autorità competente per reclami su voli da Vienna VIE?",
    answer: "Per voli in partenza dall'Austria → APF (Agentur für Passagier- und Fahrgastrechte, Agenzia austriaca per i diritti dei passeggeri). Per voli in partenza dall'Italia → ENAC. Puoi scegliere l'autorità del paese di partenza o di destinazione."
  },
  {
    question: "Lauda Motion (Ryanair) opera da Vienna. I miei diritti sono gli stessi?",
    answer: "Sì. Lauda Motion (LaudaMotion, ora marchio Ryanair Austria) è un vettore austriaco registrato nell'UE. CE 261/2004 si applica pienamente ai suoi voli da aeroporti UE/SEE, con gli stessi importi (€250/€400/€600) e le stesse procedure."
  }
];

export default function AeroportoViennaRisarcimento() {
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
          <li className="text-gray-700 font-medium">Aeroporto Vienna VIE Risarcimento</li>
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
            Aeroporto Vienna VIE: Risarcimento Voli 2026 — fino a €600
          </h1>
          <p className="text-lg text-gray-600">
            Vienna VIE è il principale hub dell&apos;Austria e la porta verso l&apos;Est Europa, il Medio Oriente e l&apos;Asia Centrale per Austrian Airlines. Se hai subito un ritardo o una cancellazione, hai diritto fino a <strong>€600 di risarcimento</strong> ai sensi del CE 261/2004. Scopri come ottenerlo.
          </p>
        </header>

        {/* Info aeroporto */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-red-900 text-lg mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Vienna Airport (VIE) — dati chiave
          </h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div><strong>Codice IATA:</strong> VIE</div>
            <div><strong>Nome ufficiale:</strong> Flughafen Wien-Schwechat</div>
            <div><strong>Posizione:</strong> 18 km a est del centro di Vienna</div>
            <div><strong>Terminali:</strong> Terminal 1 (arrivi), Terminal 2 (partenze), Terminal 3 (hub Austrian Airlines + connessioni)</div>
            <div><strong>Vettore principale:</strong> Austrian Airlines (OS) — Lufthansa Group</div>
            <div><strong>Autorità CE 261:</strong> APF (Agentur für Passagier- und Fahrgastrechte)</div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-red-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo in ritardo da o per Vienna VIE?</p>
            <p className="text-red-100 text-sm">Hai diritto fino a €600. ClaimWinger verifica gratuitamente — 30% solo al successo.</p>
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
            <Euro className="w-6 h-6 text-red-600" /> Importi di risarcimento per voli da/per Vienna
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
                  ["Roma FCO → Vienna VIE", "~1.180 km", "€250"],
                  ["Milano MXP → Vienna VIE", "~840 km", "€250"],
                  ["Venezia VCE → Vienna VIE", "~680 km", "€250"],
                  ["Napoli NAP → Vienna VIE", "~1.400 km", "€250"],
                  ["Catania CTA → Vienna VIE", "~1.780 km", "€400"],
                  ["Palermo PMO → Vienna VIE", "~1.700 km", "€400"],
                  ["Roma → Vienna → Tokyo NRT", "~10.800 km (totale)", "€600"],
                  ["Milano → Vienna → Dubai DXB", "~4.700 km (totale)", "€600"],
                  ["Roma → Vienna → Bangkok BKK", "~9.600 km (totale)", "€600"],
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

        {/* Austrian Airlines e codeshare */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-red-600" /> Austrian Airlines e il Lufthansa Group: chi è responsabile?
          </h2>
          <p className="text-gray-700 mb-4">
            Austrian Airlines (OS) fa parte del Lufthansa Group insieme a Lufthansa (LH), Swiss (LX) ed Eurowings (EW). In caso di codeshare o coincidenze, è fondamentale identificare il <strong>vettore operativo</strong> (chi ha fisicamente fatto volare l&apos;aereo) — a quel vettore va il reclamo CE 261.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="text-left px-4 py-3">Situazione</th>
                  <th className="text-left px-4 py-3">Vettore operativo</th>
                  <th className="text-left px-4 py-3">A chi fare reclamo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Biglietto OS, aereo OS", "Austrian Airlines", "Austrian Airlines"],
                  ["Biglietto LH, aereo OS (codeshare)", "Austrian Airlines", "Austrian Airlines"],
                  ["Biglietto OS, aereo LH (codeshare)", "Lufthansa", "Lufthansa"],
                  ["Biglietto OS su volo Eurowings", "Eurowings", "Eurowings"],
                  ["Biglietto tour operator, aereo OS", "Austrian Airlines", "Austrian Airlines"],
                ].map(([sit, op, claim]) => (
                  <tr key={sit} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 text-sm">{sit}</td>
                    <td className="px-4 py-2 font-medium text-red-700">{op}</td>
                    <td className="px-4 py-2 font-semibold text-gray-800">{claim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie a Vienna: neve e ghiaccio
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> <span><strong>Neve invernale</strong> stagionale e prevedibile</span></li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> <span><strong>Nebbia ordinaria</strong> — VIE ha ILS Cat III</span></li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all&apos;aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale Austrian</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi per rotazione aerei</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Tormenta eccezionale e imprevedibile</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC (controllori del traffico)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura dello spazio aereo</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Emergenze di sicurezza aeroportuale</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-red-600" /> Come fare reclamo per voli da/per Vienna VIE
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Conserva tutti i documenti", text: "Carta d'imbarco, conferma prenotazione e prova del ritardo (screenshot tabellone o messaggio della compagnia). Tieni anche le ricevute di eventuali spese extra (pasti, hotel)." },
              { step: "2", title: "Invia reclamo scritto ad Austrian Airlines", text: "Usa austrian.com → Assistenza → Reclami. Indica numero volo (OS + numero), data, aeroporto di partenza, destinazione finale e importo CE 261 richiesto. Attendi 14 giorni di risposta." },
              { step: "3", title: "Escalation APF o ENAC", text: "Se il volo partiva dall'Austria → APF (apf.gv.at). Se partiva dall'Italia → ENAC (enac.gov.it). Entrambe sono autorità competenti per CE 261." },
              { step: "4", title: "Affida a ClaimWinger", text: "ClaimWinger gestisce i reclami contro Austrian Airlines senza anticipo — 30% solo al successo. Spesso le compagnie del gruppo Lufthansa rispondono più velocemente tramite agenzie specializzate." }
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
              <h3 className="font-bold text-green-800 mb-2">APF — Austria</h3>
              <p className="text-green-700 text-sm mb-2">Agentur für Passagier- und Fahrgastrechte. Competente per voli in partenza dall&apos;Austria, incluso VIE. Procedura gratuita, tempi medi 2–4 mesi.</p>
              <p className="text-green-600 text-xs">apf.gv.at — Beschwerde einreichen (presentare reclamo)</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">ENAC — Italia</h3>
              <p className="text-red-700 text-sm mb-2">Competente per voli in partenza dall&apos;Italia verso Vienna, anche se il vettore è Austrian Airlines.</p>
              <p className="text-red-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-red-700 to-red-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo per Vienna VIE in ritardo o cancellato?</p>
            <p className="text-red-100 text-sm">Hai diritto fino a €600. ClaimWinger gestisce il reclamo anche contro Austrian Airlines. 30% solo al successo.</p>
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
            <FileText className="w-6 h-6 text-red-600" /> Domande frequenti su Vienna VIE e CE 261/2004
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
              { slug: "austrian-airlines-risarcimento", title: "Austrian Airlines: Risarcimento Voli 2026" },
              { slug: "aeroporto-munich-risarcimento", title: "Aeroporto Monaco MUC: Risarcimento 2026" },
              { slug: "swiss-risarcimento", title: "SWISS: Risarcimento Voli 2026" },
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
