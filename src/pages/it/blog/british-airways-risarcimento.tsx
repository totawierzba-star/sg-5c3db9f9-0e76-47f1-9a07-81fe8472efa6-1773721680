import { LayoutIt } from "@/components/LayoutIt";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Euro,
  CheckCircle2,
  AlertTriangle,
  Plane,
  FileText,
  Info,
} from "lucide-react";

export default function BritishAirwaysRisarcimento() {
  return (
    <LayoutIt>
      <SEO
        title="British Airways Risarcimento: Guida Completa 2026 — Fino a €600"
        description="Volo British Airways in ritardo o cancellato? Scopri come ottenere fino a €600 di risarcimento. Procedura, Brexit e diritti dei passeggeri italiani spiegati."
        url="https://lotproblem.pl/it/blog/british-airways-risarcimento"
      />

      {/* Schema Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "British Airways Risarcimento: Guida Completa 2026",
            "description":
              "Come ottenere risarcimento da British Airways per voli in ritardo o cancellati. Effetti della Brexit, importi CE 261/2004 e UK261, procedura reclamo.",
            "author": { "@type": "Organization", "name": "LotProblem.pl" },
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lotproblem.pl/og-image.png",
              },
            },
            "datePublished": "2026-03-19",
            "dateModified": "2026-03-19",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id":
                "https://lotproblem.pl/it/blog/british-airways-risarcimento",
            },
          }),
        }}
      />

      {/* Schema FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "British Airways paga ancora il risarcimento CE 261/2004 dopo la Brexit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì, ma dipende dalla rotta. Per voli in partenza da aeroporti italiani (o qualsiasi aeroporto UE) verso il Regno Unito, si applica ancora il CE 261/2004. Per voli in partenza dal Regno Unito verso l'Italia, si applica la normativa UK261 (quasi identica). In entrambi i casi gli importi e i diritti sono gli stessi.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto spetta per un volo British Airways in ritardo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "€250 (o £220) per voli fino a 1.500 km, €400 (o £350) per voli tra 1.500 e 3.500 km, €600 (o £520) per voli oltre 3.500 km. Gli importi in sterline si applicano ai voli partiti dal Regno Unito secondo la normativa UK261.",
                },
              },
              {
                "@type": "Question",
                name: "Come si fa reclamo a British Airways?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Puoi presentare reclamo sul sito britishairways.com nella sezione 'Contattaci' → 'Rimborsi e reclami', oppure tramite il Customer Relations Centre. BA accetta reclami online, via email e per posta. I tempi di risposta variano da 4 a 12 settimane.",
                },
              },
              {
                "@type": "Question",
                name: "British Airways risponde ai reclami in italiano?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "British Airways gestisce i reclami principalmente in inglese. Puoi scrivere in italiano, ma la risposta sarà quasi certamente in inglese. Se preferisci evitare la barriera linguistica e la burocrazia, affidarsi a ClaimWinger è un'ottima soluzione: gestiscono tutto in italiano per te.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto tempo ha British Airways per rispondere al reclamo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "British Airways risponde entro 8 settimane nella maggior parte dei casi, ma può arrivare a 12 settimane per i casi più complessi. Se non ricevi risposta, puoi rivolgerti all'ENAC (per voli partiti dall'Italia) o alla CAA (Civil Aviation Authority) nel Regno Unito.",
                },
              },
              {
                "@type": "Question",
                name: "Posso chiedere risarcimento BA per un volo di anni fa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In Italia il termine di prescrizione è 2 anni dalla data del volo. Nel Regno Unito (applicabile ai voli partiti da Londra) il termine è 6 anni per voli fino al 2020 e 2 anni per voli successivi alla Brexit secondo UK261. Verifica il termine in base al paese di partenza del volo.",
                },
              },
              {
                "@type": "Question",
                name: "British Airways paga in sterline o in euro?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dipende dalla normativa applicabile. Per voli CE 261/2004 (partenza da UE) il pagamento è in euro. Per voli UK261 (partenza dal Regno Unito) il pagamento è in sterline (£220, £350 o £520). Puoi ricevere il pagamento sul tuo conto bancario italiano anche in sterline, con cambio al tasso corrente.",
                },
              },
            ],
          }),
        }}
      />

      <article className="py-12">
        <div className="container max-w-4xl mx-auto px-4">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-600">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">British Airways Risarcimento</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 flex-wrap">
              <Clock className="h-4 w-4" />
              <time dateTime="2026-03-19">19 marzo 2026</time>
              <span>•</span>
              <span>11 min di lettura</span>
              <span>•</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                Compagnie Aeree
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              British Airways Risarcimento: Come Ottenere Fino a €600 [2026]
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Volo British Airways in ritardo di 3 ore o più, cancellato o con overbooking? Hai diritto a
              un risarcimento fino a <strong>€600 (o £520)</strong>. Attenzione: dopo la Brexit le regole
              cambiano a seconda della rotta. Questa guida chiarisce tutto.
            </p>
          </header>

          {/* Alert Brexit */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-xl">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-amber-900 text-lg mb-2">Importante: Brexit e Normativa Applicabile</h2>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Dal 2021, con l'uscita del Regno Unito dall'UE, si applicano due normative diverse a
                  seconda della rotta:<br />
                  • <strong>Volo da Italia/UE → Londra:</strong> si applica il <strong>CE 261/2004</strong> (importi in €)<br />
                  • <strong>Volo da Londra → Italia/UE:</strong> si applica il <strong>UK261</strong> (importi in £, quasi identici)<br />
                  In entrambi i casi i tuoi diritti sono sostanzialmente gli stessi.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-blue-600 flex-shrink-0" />
              Importi del Risarcimento British Airways
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Gli importi sono fissi e non dipendono dal prezzo del biglietto. Cambiano solo la valuta e
              la normativa di riferimento in base alla rotta:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="p-4 text-left rounded-tl-xl">Distanza volo</th>
                    <th className="p-4 text-left">Ritardo</th>
                    <th className="p-4 text-left">Da UE (CE 261)</th>
                    <th className="p-4 text-left rounded-tr-xl">Da UK (UK261)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-blue-50">
                    <td className="p-4 font-semibold">≤ 1.500 km</td>
                    <td className="p-4">≥ 3 ore</td>
                    <td className="p-4 font-bold text-green-700">€250</td>
                    <td className="p-4 font-bold text-green-700">£220</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold">1.500–3.500 km</td>
                    <td className="p-4">≥ 3 ore</td>
                    <td className="p-4 font-bold text-green-700">€400</td>
                    <td className="p-4 font-bold text-green-700">£350</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-blue-50">
                    <td className="p-4 font-semibold">&gt; 3.500 km</td>
                    <td className="p-4">≥ 4 ore</td>
                    <td className="p-4 font-bold text-green-700">€600</td>
                    <td className="p-4 font-bold text-green-700">£520</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold rounded-bl-xl">&gt; 3.500 km (extra)</td>
                    <td className="p-4">3–4 ore</td>
                    <td className="p-4 font-bold text-amber-600">€300 (ridotto)</td>
                    <td className="p-4 font-bold text-amber-600 rounded-br-xl">£260 (ridotto)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-bold text-blue-900 mb-3">Esempi di Rotte British Airways dall'Italia</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Roma (FCO) – Londra Heathrow (LHR)</p>
                  <p className="text-gray-600">~1.440 km → da FCO: <strong className="text-green-700">€250</strong> (CE 261)</p>
                  <p className="text-gray-600">da LHR: <strong className="text-green-700">£220</strong> (UK261)</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Milano (MXP) – Londra Heathrow (LHR)</p>
                  <p className="text-gray-600">~980 km → da MXP: <strong className="text-green-700">€250</strong></p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Roma – New York via Londra</p>
                  <p className="text-gray-600">&gt;5.000 km → <strong className="text-green-700">€600 / £520</strong></p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Napoli – Londra Gatwick (LGW)</p>
                  <p className="text-gray-600">~1.630 km → da NAP: <strong className="text-green-700">€400</strong></p>
                </div>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="my-12 bg-gradient-to-br from-blue-800 to-indigo-900 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Volo British Airways in Ritardo o Cancellato?</h3>
                  <p className="text-blue-100 text-lg">
                    Non perdere tempo con le lunghe procedure BA. ClaimWinger gestisce tutto in italiano
                    — commissione del <strong className="text-white">30%</strong> solo sull'importo ottenuto,
                    zero se non vinciamo.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=british-airways"
                    className="inline-flex items-center bg-white text-blue-800 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg text-lg"
                  >
                    Verifica il Tuo Caso
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <p className="text-blue-300 text-xs mt-2 text-center">Gratis • Nessun rischio</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-green-600 flex-shrink-0" />
              Come Fare Reclamo a British Airways: Procedura Passo-Passo
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              British Airways gestisce i reclami principalmente in inglese, il che può rappresentare una
              barriera per i passeggeri italiani. Ecco come procedere nel modo più efficace:
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 my-8">
              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    title: "Documenta subito il problema",
                    body: "In aeroporto: fai screenshot del tabellone con gli orari effettivi, chiedi al personale BA un certificato di ritardo, conserva tutti gli scontrini di spese extra (pasti, hotel, taxi), tieni la boarding pass e la conferma email.",
                  },
                  {
                    num: 2,
                    title: "Accedi al portale reclami BA",
                    body: "Vai su britishairways.com → Aiuto → Rimborsi e reclami → Compila il modulo online EU261/UK261. Oppure scrivi a British Airways Customer Relations, Waterside, PO Box 365, Harmondsworth, UB7 0GB, UK.",
                  },
                  {
                    num: 3,
                    title: "Compila il reclamo in modo completo",
                    body: "Includi: numero prenotazione (PNR), numero volo, data, orario previsto e effettivo di arrivo, motivo del reclamo (ritardo/cancellazione/overbooking), importo richiesto, IBAN o coordinate bancarie.",
                  },
                  {
                    num: 4,
                    title: "Attendi risposta (4–12 settimane)",
                    body: "BA impiega mediamente 8 settimane. Per voli intercontinentali o casi complessi può arrivare a 12 settimane. Tieni la ricevuta di invio con data.",
                  },
                  {
                    num: 5,
                    title: "Escalation se rifiutano o non rispondono",
                    body: "Per voli da Italia: ENAC (autorità italiana). Per voli da UK: CAA (Civil Aviation Authority). In alternativa, ClaimWinger gestisce tutta la procedura legale in italiano senza costi anticipati.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-700 text-sm mt-1 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-amber-500 flex-shrink-0" />
              Quando British Airways Può e Non Può Rifiutare
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div>
                <h3 className="font-bold text-green-800 mb-3">✅ Rifiuto Legittimo</h3>
                <div className="space-y-2">
                  {[
                    "Maltempo eccezionale documentato (neve, uragano)",
                    "Sciopero controllori traffico aereo (ATC/NATS)",
                    "Chiusura spazio aereo per emergenza",
                    "Instabilità politica / rischio sicurezza aeroporto",
                  ].map((item, i) => (
                    <div key={i} className="bg-green-50 p-3 rounded-lg text-sm flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-red-800 mb-3">❌ Rifiuto Non Valido</h3>
                <div className="space-y-2">
                  {[
                    "Guasto tecnico dell'aereo",
                    "Sciopero del personale BA (piloti, cabin crew)",
                    "Rotazione aereo in ritardo da scalo precedente",
                    "Overbooking / negato imbarco involontario",
                    "Problemi informatici BA",
                  ].map((item, i) => (
                    <div key={i} className="bg-red-50 p-3 rounded-lg text-sm flex items-start gap-2">
                      <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 my-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Il Caso degli Scioperi BA</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    British Airways ha avuto diversi scioperi del personale negli ultimi anni. Questi
                    <strong> non</strong> sono circostanze straordinarie secondo la giurisprudenza europea:
                    BA è responsabile delle relazioni con il proprio personale. Se il tuo volo è stato
                    cancellato per sciopero BA, hai diritto al risarcimento.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Plane className="h-8 w-8 text-blue-600 flex-shrink-0" />
              British Airways e i Voli in Codeshare con Iberia e Vueling
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              British Airways fa parte dell'<strong>International Airlines Group (IAG)</strong> insieme a
              Iberia, Vueling e Aer Lingus. Per i voli in codeshare, il reclamo va sempre al{" "}
              <strong>vettore operante</strong>:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
              <div className="space-y-3 text-sm">
                {[
                  { code: "BA", desc: "British Airways → reclamo a British Airways" },
                  { code: "IB", desc: "Iberia → reclamo a Iberia" },
                  { code: "VY", desc: "Vueling → reclamo a Vueling" },
                  { code: "EI", desc: "Aer Lingus → reclamo a Aer Lingus" },
                ].map((item) => (
                  <div key={item.code} className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-mono font-bold min-w-[3rem] text-center">
                      {item.code}
                    </span>
                    <span className="text-gray-700">{item.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-xs mt-4">
                Il codice del volo si trova sulla carta d'imbarco e sulla conferma email di prenotazione.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Assistenza in Aeroporto: Cosa Spetta con BA
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Anche se il ritardo non supera le 3 ore, se il tuo volo BA è in ritardo alla partenza hai
              diritto all'assistenza gratuita in aeroporto:
            </p>

            <div className="space-y-3 my-6">
              {[
                { soglia: "Ritardo 2+ ore (voli ≤1.500 km)", diritto: "Pasti e bevande in proporzione all'attesa, 2 chiamate telefoniche o email gratuite" },
                { soglia: "Ritardo 3+ ore (voli 1.500–3.500 km)", diritto: "Pasti e bevande in proporzione, 2 chiamate o email gratuite" },
                { soglia: "Ritardo 4+ ore (voli >3.500 km)", diritto: "Pasti e bevande, 2 chiamate o email gratuite" },
                { soglia: "Pernottamento necessario", diritto: "Hotel + trasferimento aeroporto-hotel a carico di BA" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl text-sm">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.soglia}</p>
                    <p className="text-gray-700 mt-0.5">{item.diritto}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Se BA non ha fornito l'assistenza dovuta, puoi richiedere il rimborso delle spese sostenute
              insieme al reclamo per il risarcimento. Consulta la guida su{" "}
              <Link href="/it/blog/come-presentare-reclamo-guida-completa" className="text-blue-600 hover:underline font-semibold">
                come presentare un reclamo completo
              </Link>
              .
            </p>

            {/* CTA 2 — prima della FAQ */}
            <div className="my-12 bg-gradient-to-br from-red-700 to-red-900 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">
                  Barriera Linguistica con British Airways? Nessun Problema.
                </h3>
                <p className="text-red-100 mb-6 text-lg">
                  ClaimWinger comunica con BA in inglese al posto tuo, gestisce il reclamo dalla A alla Z
                  e, se necessario, procede legalmente. Paghi solo il{" "}
                  <strong className="text-white">30%</strong> dell'importo recuperato.
                </p>
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=british-airways"
                  className="inline-flex items-center bg-white text-red-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all shadow-lg"
                >
                  Affida il Reclamo a ClaimWinger
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <p className="text-red-200 text-sm mt-4">
                  ✓ Tutto in italiano &nbsp;•&nbsp; ✓ 30% solo se vinciamo &nbsp;•&nbsp; ✓ Zero costi anticipati
                </p>
              </div>
            </div>

            {/* FAQ */}
            <section className="mt-12 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Domande Frequenti su British Airways e il Risarcimento
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "British Airways paga ancora il risarcimento CE 261/2004 dopo la Brexit?",
                    a: "Sì, ma dipende dalla rotta. Per voli in partenza da aeroporti italiani (o qualsiasi aeroporto UE) verso il Regno Unito, si applica ancora il CE 261/2004 (importi in €). Per voli in partenza dal Regno Unito verso l'Italia, si applica la normativa UK261 (importi quasi identici, in £). In entrambi i casi i tuoi diritti sono sostanzialmente gli stessi.",
                  },
                  {
                    q: "Quanto spetta per un volo British Airways in ritardo?",
                    a: "€250 / £220 per voli fino a 1.500 km (es. Roma–Londra); €400 / £350 per voli tra 1.500 e 3.500 km; €600 / £520 per voli oltre 3.500 km (es. Roma–New York via Londra). Per intercontinentali con ritardo 3-4 ore, l'importo può essere ridotto del 50%.",
                  },
                  {
                    q: "Come si fa reclamo a British Airways?",
                    a: "Sul sito britishairways.com nella sezione Aiuto → Rimborsi e reclami, compilando il modulo EU261/UK261. BA accetta reclami anche per posta (Customer Relations, Waterside, PO Box 365, Harmondsworth UB7 0GB). I tempi variano da 4 a 12 settimane.",
                  },
                  {
                    q: "British Airways risponde ai reclami in italiano?",
                    a: "BA gestisce i reclami principalmente in inglese. Puoi scrivere in italiano, ma la risposta sarà quasi certamente in inglese. Se preferisci evitare la barriera linguistica, ClaimWinger gestisce tutto in italiano per te.",
                  },
                  {
                    q: "Quanto tempo ha British Airways per rispondere al reclamo?",
                    a: "British Airways risponde entro 8 settimane nella maggior parte dei casi, ma può arrivare a 12 settimane per i casi più complessi. Se non ricevi risposta, puoi rivolgerti all'ENAC (per voli dall'Italia) o alla CAA (per voli dal UK).",
                  },
                  {
                    q: "Posso chiedere risarcimento BA per un volo di anni fa?",
                    a: "In Italia il termine di prescrizione è 2 anni dalla data del volo. Per voli partiti dal Regno Unito si applica il diritto inglese: 6 anni per voli precedenti al 2021, 2 anni per quelli successivi secondo UK261. Verifica sempre il termine in base al paese di partenza.",
                  },
                  {
                    q: "British Airways paga in sterline o in euro?",
                    a: "Dipende dalla normativa applicabile. Per voli CE 261/2004 (partenza da UE) il pagamento è in euro. Per voli UK261 (partenza dal UK) il pagamento è in sterline. Puoi ricevere il pagamento anche sul conto italiano, con conversione al tasso corrente.",
                  },
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

            {/* Articoli correlati */}
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articoli Correlati</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/it/blog/lufthansa-risarcimento-voli"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Lufthansa Risarcimento</h3>
                  <p className="text-sm text-gray-600">Guida completa al risarcimento con Lufthansa</p>
                </Link>
                <Link href="/it/blog/air-france-risarcimento"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Air France Risarcimento</h3>
                  <p className="text-sm text-gray-600">Come ottenere il rimborso da Air France</p>
                </Link>
                <Link href="/it/blog/da-quante-ore-ritardo-diritto-risarcimento"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Da Quante Ore Scatta il Risarcimento?</h3>
                  <p className="text-sm text-gray-600">La soglia delle 3 ore spiegata chiaramente</p>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>
    </LayoutIt>
  );
}
