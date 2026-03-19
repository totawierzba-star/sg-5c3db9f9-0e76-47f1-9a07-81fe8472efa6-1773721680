import { LayoutIt } from "@/components/LayoutIt";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, MapPin } from "lucide-react";

export default function MilanoParigRitardoRisarcimento() {
  return (
    <LayoutIt>
      <SEO
        title="Volo Milano–Parigi in Ritardo: Risarcimento Fino a €250 — Guida 2026"
        description="Volo Milano–Parigi in ritardo di 3 ore o più? Scopri quanto spetta (€250), quali compagnie operano la rotta MXP/LIN/BGY→CDG/ORY e come richiedere il risarcimento."
        url="https://lotproblem.pl/it/blog/milano-parigi-ritardo-risarcimento"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Volo Milano–Parigi in Ritardo: Risarcimento e Diritti dei Passeggeri 2026",
        "description": "Guida completa al risarcimento per voli Milano–Parigi in ritardo o cancellati. Importi, compagnie e procedura CE 261/2004.",
        "author": { "@type": "Organization", "name": "LotProblem.pl" },
        "publisher": { "@type": "Organization", "name": "LotProblem.pl", "logo": { "@type": "ImageObject", "url": "https://lotproblem.pl/og-image.png" } },
        "datePublished": "2026-03-19",
        "dateModified": "2026-03-19",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://lotproblem.pl/it/blog/milano-parigi-ritardo-risarcimento" }
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Quanto spetta per un volo Milano–Parigi in ritardo di 3 ore?",
            acceptedAnswer: { "@type": "Answer", text: "Milano Malpensa–Parigi CDG è circa 630 km, nella fascia ≤1.500 km: spettano €250 per passeggero. Stesso importo per Milano Linate–Parigi CDG (~620 km) e per i voli da Bergamo Orio al Serio." }
          },
          {
            "@type": "Question",
            name: "Quali compagnie operano Milano–Parigi?",
            acceptedAnswer: { "@type": "Answer", text: "Air France (MXP/LIN→CDG), easyJet (MXP→CDG/ORY), Vueling (MXP→CDG via BCN), Ryanair (BGY→BVA/CDG). Air France è il vettore principale con più frequenze giornaliere." }
          },
          {
            "@type": "Question",
            name: "Da Milano Linate o Malpensa: cambia il risarcimento?",
            acceptedAnswer: { "@type": "Answer", text: "No. La distanza Milano Linate (LIN)–Parigi CDG è ~620 km e Milano Malpensa (MXP)–Parigi CDG è ~630 km. In entrambi i casi si è nella fascia ≤1.500 km: il risarcimento è €250 per passeggero con ritardo ≥3 ore." }
          },
          {
            "@type": "Question",
            name: "Air France paga per i voli Milano–Parigi in ritardo?",
            acceptedAnswer: { "@type": "Answer", text: "Sì. Air France è soggetta al CE 261/2004 per i voli da aeroporti milanesi. Con 3 ore o più di ritardo spettano €250. Air France risponde mediamente entro 4–8 settimane." }
          },
          {
            "@type": "Question",
            name: "Posso chiedere risarcimento per un treno perso a causa del ritardo del volo Milano–Parigi?",
            acceptedAnswer: { "@type": "Answer", text: "Il risarcimento CE 261/2004 è fisso (€250) indipendentemente dai danni conseguenti. Per il treno perso puoi provare a richiedere un rimborso separato alla compagnia citando il nesso causale, ma non è garantito dal regolamento europeo. Alcuni tribunali italiani hanno riconosciuto danni aggiuntivi." }
          },
          {
            "@type": "Question",
            name: "Quanto dura il volo Milano–Parigi?",
            acceptedAnswer: { "@type": "Answer", text: "Il volo Milano Malpensa–Parigi CDG dura mediamente 1h 45min–2h. Un ritardo di 3 ore all'arrivo è quindi significativo. Ricorda: si conta il ritardo all'arrivo (apertura porta), non alla partenza." }
          }
        ]
      }) }} />

      <article className="py-12">
        <div className="container max-w-4xl mx-auto px-4">

          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-600">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Milano–Parigi Ritardo Risarcimento</li>
            </ol>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 flex-wrap">
              <Clock className="h-4 w-4" />
              <time dateTime="2026-03-19">19 marzo 2026</time>
              <span>•</span>
              <span>9 min di lettura</span>
              <span>•</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">Rotte</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Volo Milano–Parigi in Ritardo: €250 di Risarcimento — Come Ottenerlo [2026]
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Il tuo volo da Milano verso Parigi è arrivato con 3 ore o più di ritardo o è stato
              cancellato? Hai diritto a <strong>€250 di risarcimento</strong> per passeggero secondo
              il CE 261/2004. Guida completa per tutte le compagnie e tutti gli aeroporti milanesi.
            </p>
          </header>

          {/* Featured snippet box */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-xl">
            <h2 className="font-bold text-blue-900 text-lg mb-3">Risposta Rapida: Milano–Parigi</h2>
            <ul className="space-y-2 text-blue-800 text-sm">
              {[
                "Distanza MXP–CDG: ~630 km | LIN–CDG: ~620 km | BGY–CDG: ~600 km",
                "Risarcimento: €250 per passeggero con ritardo ≥3 ore (fascia ≤1.500 km)",
                "Normativa: CE 261/2004 (partenza da aeroporto UE)",
                "Compagnie principali: Air France, easyJet, Vueling, Ryanair",
                "Termine per il reclamo: 2 anni dalla data del volo (Italia)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-blue-600 flex-shrink-0" />
              Distanze e Aeroporti: MXP, LIN e BGY verso CDG e ORY
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Milano è servita da tre aeroporti e Parigi da due. La combinazione scelta influisce sulla
              compagnia disponibile, ma <strong>non sull'importo del risarcimento</strong>: tutte le
              rotte rientrano nella fascia ≤1.500 km → €250.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="p-4 text-left rounded-tl-xl">Aeroporto Milano</th>
                    <th className="p-4 text-left">Aeroporto Parigi</th>
                    <th className="p-4 text-left">Distanza</th>
                    <th className="p-4 text-left">Compagnie principali</th>
                    <th className="p-4 text-left rounded-tr-xl">Risarcimento</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mil: "Malpensa (MXP)", par: "Charles de Gaulle (CDG)", km: "~630 km", comp: "Air France, easyJet", ris: "€250", bg: "bg-blue-50" },
                    { mil: "Malpensa (MXP)", par: "Orly (ORY)", km: "~620 km", comp: "easyJet, Transavia", ris: "€250", bg: "bg-white" },
                    { mil: "Linate (LIN)", par: "Charles de Gaulle (CDG)", km: "~620 km", comp: "Air France", ris: "€250", bg: "bg-blue-50" },
                    { mil: "Bergamo (BGY)", par: "Beauvais (BVA)", km: "~580 km", comp: "Ryanair", ris: "€250", bg: "bg-white" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-gray-200 ${row.bg}`}>
                      <td className="p-4 font-semibold">{row.mil}</td>
                      <td className="p-4">{row.par}</td>
                      <td className="p-4">{row.km}</td>
                      <td className="p-4 text-gray-600">{row.comp}</td>
                      <td className="p-4 font-bold text-green-700">{row.ris}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 my-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm">
                  <strong>Attenzione su Bergamo Beauvais:</strong> Ryanair opera BGY–BVA (Beauvais-Tillé),
                  che si trova a 85 km da Parigi. Beauvais è aeroporto francese, quindi il CE 261/2004
                  si applica pienamente. La distanza (~580 km) resta nella fascia €250.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Plane className="h-8 w-8 text-blue-600 flex-shrink-0" />
              Compagnie che Operano Milano–Parigi: Chi Contattare
            </h2>

            <div className="space-y-4 my-8">
              {[
                {
                  code: "AF", name: "Air France", rotta: "MXP/LIN → CDG",
                  note: "Vettore principale con più frequenze giornaliere. Risposta 4–8 settimane. Può proporre miglia Flying Blue — hai sempre diritto al cash.",
                  link: "/it/blog/air-france-risarcimento", color: "bg-blue-50 border-blue-200"
                },
                {
                  code: "U2", name: "easyJet", rotta: "MXP → CDG / ORY",
                  note: "Low-cost con buone frequenze. Reclamo su easyjet.com. Risposta generalmente in 4–6 settimane.",
                  link: "/it/blog/easyjet-italia-risarcimento", color: "bg-orange-50 border-orange-200"
                },
                {
                  code: "FR", name: "Ryanair", rotta: "BGY → BVA (Beauvais)",
                  note: "Destinazione Beauvais, non CDG. Risposta lenta e spesso con rifiuto. Considera ENAC o ClaimWinger.",
                  link: "/it/blog/ryanair-italia-risarcimento", color: "bg-yellow-50 border-yellow-200"
                },
                {
                  code: "TO", name: "Transavia", rotta: "MXP → ORY",
                  note: "Compagnia del gruppo Air France-KLM. Reclamo su transavia.com. Risposta 4–8 settimane.",
                  link: "/it/blog/air-france-risarcimento", color: "bg-green-50 border-green-200"
                },
              ].map((a) => (
                <div key={a.code} className={`border rounded-xl p-5 ${a.color}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-white border border-gray-300 px-2 py-0.5 rounded font-mono font-bold text-xs">{a.code}</span>
                        <span className="font-bold text-gray-900">{a.name}</span>
                        <span className="text-gray-500 text-sm">{a.rotta}</span>
                      </div>
                      <p className="text-gray-700 text-sm">{a.note}</p>
                    </div>
                    <Link href={a.link} className="text-blue-600 text-xs font-semibold hover:underline flex-shrink-0 mt-1">Guida →</Link>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA 1 */}
            <div className="my-12 bg-gradient-to-br from-blue-700 to-indigo-900 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Volo Milano–Parigi in Ritardo?</h3>
                  <p className="text-blue-100 text-lg">
                    Verifica subito il tuo diritto a <strong className="text-white">€250</strong>.
                    ClaimWinger gestisce il reclamo con qualsiasi compagnia — commissione del{" "}
                    <strong className="text-white">30%</strong> solo sull'importo ottenuto.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=milano-parigi"
                    className="inline-flex items-center bg-white text-blue-800 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg text-lg"
                  >
                    Verifica il Tuo Caso
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <p className="text-blue-300 text-xs mt-2 text-center">Gratis • 3 minuti</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-green-600 flex-shrink-0" />
              Come Calcolare le 3 Ore di Ritardo
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Il volo Milano–Parigi dura mediamente <strong>1h 45min–2h</strong>. Il ritardo si misura
              tra l'orario di arrivo previsto e l'apertura della porta dell'aereo a Parigi. Ecco due esempi:
            </p>

            <div className="space-y-4 my-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-xl">
                <h4 className="font-bold text-green-900 mb-2">✅ Caso con Diritto al Risarcimento</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>• Volo: Milano MXP → Parigi CDG (Air France AF1234)</p>
                  <p>• Arrivo previsto: 10:30</p>
                  <p>• Porta aperta effettiva: 13:45</p>
                  <p className="font-bold text-green-800 mt-2">→ Ritardo: 3h 15min → <strong>€250 di risarcimento</strong></p>
                </div>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                <h4 className="font-bold text-red-900 mb-2">❌ Caso Senza Risarcimento</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>• Volo: Milano LIN → Parigi CDG</p>
                  <p>• Arrivo previsto: 09:15</p>
                  <p>• Porta aperta effettiva: 12:00</p>
                  <p className="font-bold text-red-800 mt-2">→ Ritardo: 2h 45min → <strong>Nessun risarcimento</strong></p>
                  <p className="text-xs text-red-600">Se la partenza era in ritardo ≥2h hai comunque diritto a pasti e bevande in aeroporto</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Cause di Ritardo Comuni su Milano–Parigi
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-4 text-left rounded-tl-lg">Causa</th>
                    <th className="p-4 text-left">Risarcimento?</th>
                    <th className="p-4 text-left rounded-tr-lg">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { causa: "Guasto tecnico", ri: "✅ Sì", note: "Non è circostanza straordinaria", bg: "bg-green-50" },
                    { causa: "Sciopero personale compagnia", ri: "✅ Sì", note: "La compagnia risponde del proprio personale", bg: "bg-white" },
                    { causa: "Rotazione aereo in ritardo", ri: "✅ Sì", note: "Problema operativo interno", bg: "bg-green-50" },
                    { causa: "Congestione CDG / MXP", ri: "✅ Sì (spesso)", note: "Dipende dalla causa specifica", bg: "bg-white" },
                    { causa: "Neve o ghiaccio eccezionale", ri: "❌ No", note: "Circostanza straordinaria", bg: "bg-red-50" },
                    { causa: "Sciopero ATC (DGAC francese)", ri: "❌ No", note: "Circostanza straordinaria frequente in Francia", bg: "bg-white" },
                    { causa: "Restrizioni spazio aereo", ri: "❌ No", note: "Fuori dal controllo della compagnia", bg: "bg-red-50" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-gray-200 ${row.bg}`}>
                      <td className="p-4">{row.causa}</td>
                      <td className={`p-4 font-semibold ${row.ri.includes("✅") ? "text-green-700" : "text-red-600"}`}>{row.ri}</td>
                      <td className="p-4 text-gray-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 my-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Scioperi ATC in Francia: Attenzione</h3>
                  <p className="text-amber-800 text-sm">
                    La Francia è il paese europeo con più scioperi dei controllori del traffico aereo
                    (DGAC). Se il tuo volo Milano–Parigi è stato cancellato o ritardato per sciopero ATC
                    francese, è probabile che non spetti il risarcimento monetario. Tuttavia hai sempre
                    diritto all'<strong>assistenza</strong> (pasti, hotel se necessario) e al rimborso o
                    riprotezione in caso di cancellazione.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Milano Linate vs Malpensa: Cambia Qualcosa per il Risarcimento?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Dal punto di vista del risarcimento, no. Entrambi gli aeroporti sono aeroporti UE e la
              distanza verso Parigi è praticamente identica (~620–630 km). Cambia però:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">✈️ Milano Linate (LIN)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Principalmente Air France verso CDG</li>
                  <li>• Voli business e corporate</li>
                  <li>• Meno frequenze ma più puntuale</li>
                  <li>• Più vicino al centro di Milano</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">✈️ Milano Malpensa (MXP)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Air France + easyJet + Transavia verso CDG/ORY</li>
                  <li>• Più opzioni e tariffe competitive</li>
                  <li>• Hub intercontinentale con più coincidenze</li>
                  <li>• Più lontano dal centro (50 km)</li>
                </ul>
              </div>
            </div>

            {/* CTA 2 */}
            <div className="my-12 bg-gradient-to-br from-indigo-700 to-purple-800 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">La Compagnia Ha Rifiutato o Non Risponde?</h3>
                <p className="text-indigo-100 mb-6 text-lg">
                  ClaimWinger conosce le procedure di tutte le compagnie sulla rotta Milano–Parigi.
                  Paghi solo il <strong className="text-white">30%</strong> dell'importo recuperato —
                  zero se non vinciamo.
                </p>
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=milano-parigi"
                  className="inline-flex items-center bg-white text-indigo-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-lg"
                >
                  Richiedi i Tuoi €250
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <p className="text-indigo-200 text-sm mt-4">
                  ✓ Zero costi anticipati &nbsp;•&nbsp; ✓ 30% solo se vinciamo &nbsp;•&nbsp; ✓ Tutte le compagnie
                </p>
              </div>
            </div>

            {/* FAQ */}
            <section className="mt-12 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Domande Frequenti</h2>
              <div className="space-y-4">
                {[
                  { q: "Quanto spetta per un volo Milano–Parigi in ritardo di 3 ore?", a: "€250 per passeggero. Milano Malpensa–Parigi CDG è ~630 km, nella fascia ≤1.500 km. Stesso importo per Linate–CDG (~620 km) e Bergamo–Beauvais (~580 km)." },
                  { q: "Quali compagnie operano Milano–Parigi?", a: "Air France (MXP/LIN→CDG), easyJet (MXP→CDG/ORY), Transavia (MXP→ORY), Ryanair (BGY→BVA). Air France è il vettore principale." },
                  { q: "Da Milano Linate o Malpensa: cambia il risarcimento?", a: "No. Entrambi sono aeroporti UE con distanza da Parigi praticamente identica (~620–630 km). Il risarcimento è €250 in entrambi i casi." },
                  { q: "Air France paga per i voli Milano–Parigi in ritardo?", a: "Sì. Air France è soggetta al CE 261/2004. Con 3 ore o più di ritardo spettano €250. Risponde mediamente in 4–8 settimane." },
                  { q: "Posso chiedere risarcimento per un treno perso a causa del ritardo?", a: "Il risarcimento CE 261 è fisso (€250). Per danni aggiuntivi (treno perso, hotel) puoi provarli in sede civile, ma non sono garantiti dal regolamento europeo." },
                  { q: "Quanto dura il volo Milano–Parigi?", a: "Mediamente 1h 45min–2h. Un ritardo di 3 ore all'arrivo è quindi significativo. Si conta il ritardo all'arrivo (apertura porta), non alla partenza." },
                ].map((item, i) => (
                  <details key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center list-none">
                      <span>{item.q}</span>
                      <span className="text-blue-600 text-xl font-light ml-4">+</span>
                    </summary>
                    <p className="text-gray-700 mt-4 leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articoli Correlati</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/it/blog/air-france-risarcimento" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Air France Risarcimento</h3>
                  <p className="text-sm text-gray-600">Guida completa per Air France</p>
                </Link>
                <Link href="/it/blog/roma-londra-ritardo-risarcimento" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Roma–Londra Ritardo</h3>
                  <p className="text-sm text-gray-600">Guida alla rotta Roma–Londra</p>
                </Link>
                <Link href="/it/blog/aeroporto-milano-malpensa-ritardi" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Milano Malpensa Ritardi</h3>
                  <p className="text-sm text-gray-600">Guida all'aeroporto MXP</p>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>
    </LayoutIt>
  );
}
