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

export default function TurkishAirlinesRisarcimento() {
  return (
    <LayoutIt>
      <SEO
        title="Turkish Airlines Risarcimento: Guida Completa 2026 — Fino a €600"
        description="Volo Turkish Airlines in ritardo o cancellato? Scopri quando spetta il risarcimento CE 261/2004, quanto puoi ottenere e come fare reclamo passo per passo."
        url="https://problemlot.com/it/blog/turkish-airlines-risarcimento"
      />

      {/* Schema Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Turkish Airlines Risarcimento: Guida Completa 2026",
            "description":
              "Quando si applica il CE 261/2004 ai voli Turkish Airlines e come ottenere fino a €600 di risarcimento per ritardi e cancellazioni.",
            "author": { "@type": "Organization", "name": "LotProblem.pl" },
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://problemlot.com/og-image.png",
              },
            },
            "datePublished": "2026-03-19",
            "dateModified": "2026-03-19",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://problemlot.com/it/blog/turkish-airlines-risarcimento",
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
                name: "Turkish Airlines rientra nel CE 261/2004?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dipende dalla rotta. Il CE 261/2004 si applica a Turkish Airlines solo per i voli in partenza da aeroporti dell'Unione Europea (es. Roma, Milano, Napoli). Per i voli in partenza da Istanbul (IST o SAW) verso l'Italia, Turkish Airlines — essendo una compagnia extra-UE — non è soggetta al regolamento europeo, salvo accordi specifici.",
                },
              },
              {
                "@type": "Question",
                name: "Ho diritto al risarcimento per un volo Turkish Airlines da Roma a Istanbul in ritardo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. Se il volo è partito da Roma (o qualsiasi aeroporto UE), il CE 261/2004 si applica indipendentemente dalla nazionalità della compagnia. Con 3 ore o più di ritardo all'arrivo hai diritto a €250–€600 in base alla distanza.",
                },
              },
              {
                "@type": "Question",
                name: "Ho diritto al risarcimento per un volo Turkish Airlines da Istanbul a Roma in ritardo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, non automaticamente. Per i voli in partenza da Istanbul (paese non-UE) operati da Turkish Airlines (compagnia non-UE), il CE 261/2004 non si applica. Tuttavia, se hai perso una coincidenza a Istanbul per raggiungere un volo verso l'UE, potrebbero applicarsi altre tutele: consulta un esperto o contatta ClaimWinger per valutare il tuo caso.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto spetta per un volo Turkish Airlines in ritardo da un aeroporto italiano?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "€250 per voli fino a 1.500 km, €400 per voli tra 1.500 e 3.500 km (es. Roma–Istanbul è circa 2.100 km → €400), €600 per voli oltre 3.500 km. Se hai coincidenza a Istanbul per una destinazione intercontinentale e arrivi in ritardo di 3+ ore, l'importo si calcola sulla distanza totale.",
                },
              },
              {
                "@type": "Question",
                name: "Come si fa reclamo a Turkish Airlines?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Puoi presentare reclamo sul sito turkishairlines.com nella sezione Assistenza Clienti → Feedback e reclami, oppure via email a feedback@thy.com. Turkish Airlines risponde mediamente entro 4–8 settimane. In alternativa, puoi affidarti a ClaimWinger per la gestione completa del reclamo.",
                },
              },
              {
                "@type": "Question",
                name: "Turkish Airlines paga il risarcimento per i ritardi all'hub di Istanbul?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Se hai perso una coincidenza a Istanbul per colpa di un ritardo di Turkish Airlines su un volo partito dall'UE, e sei arrivato alla destinazione finale con 3+ ore di ritardo, hai diritto al risarcimento calcolato sulla distanza totale. La chiave è che il primo volo deve essere partito da un aeroporto UE.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto tempo ha Turkish Airlines per rispondere al reclamo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Turkish Airlines risponde generalmente entro 4–8 settimane. In caso di mancata risposta per voli da aeroporti italiani, puoi rivolgerti all'ENAC (Ente Nazionale per l'Aviazione Civile). La comunicazione è spesso in inglese o turco — affidarsi a ClaimWinger elimina questa barriera.",
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
              <li className="text-gray-900 font-medium">Turkish Airlines Risarcimento</li>
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
              Turkish Airlines Risarcimento: Quando Spetta e Come Ottenerlo [2026]
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Turkish Airlines è una compagnia extra-UE: il CE 261/2004 si applica <strong>solo su alcune
              rotte</strong>. Questa guida chiarisce esattamente quando hai diritto al risarcimento, quanto
              puoi ottenere e come presentare il reclamo in modo efficace.
            </p>
          </header>

          {/* Box chiave — ottimizzato per Featured Snippet */}
          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8 rounded-r-xl">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-red-900 text-lg mb-2">La Regola Fondamentale con Turkish Airlines</h2>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Volo da aeroporto UE</strong> (es. Roma, Milano, Napoli) → CE 261/2004 SI applica → diritto al risarcimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold flex-shrink-0 text-lg leading-none mt-0.5">✗</span>
                    <span><strong>Volo da Istanbul</strong> (IST/SAW) → CE 261/2004 NON si applica → tutele limitate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Plane className="h-8 w-8 text-red-600 flex-shrink-0" />
              Quando Si Applica il CE 261/2004 a Turkish Airlines?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Turkish Airlines (THY) ha sede a Istanbul e non è una compagnia europea. Il{" "}
              <Link href="/it/blog/regolamento-ce-261-2004-spiegato" className="text-blue-600 hover:underline font-semibold">
                Regolamento CE 261/2004
              </Link>{" "}
              si applica in base al <strong>luogo di partenza del volo</strong>, non alla nazionalità
              della compagnia. Ecco la mappa precisa:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-6">
                <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6" />
                  CE 261/2004 SI Applica
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold">Volo da Roma/Milano/Napoli → Istanbul</p>
                    <p className="text-gray-500">Partenza da aeroporto UE → piena tutela</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold">Volo da Roma → Dubai/Bangkok via Istanbul</p>
                    <p className="text-gray-500">Prenotazione unica, partenza da UE → tutela su tutta la rotta</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold">Volo da qualsiasi aeroporto UE operato da TK</p>
                    <p className="text-gray-500">Il codice TK non esclude la normativa europea</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
                <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  CE 261/2004 NON Si Applica
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold">Volo da Istanbul (IST/SAW) → Roma</p>
                    <p className="text-gray-500">Partenza da paese non-UE, compagnia non-UE</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold">Volo da Istanbul → qualsiasi destinazione UE</p>
                    <p className="text-gray-500">Stessa situazione: nessun diritto CE 261</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold">Prenotazioni separate: volo UE + volo da IST</p>
                    <p className="text-gray-500">Il secondo volo (da Istanbul) non è protetto</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 my-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Caso Speciale: Coincidenza Persa a Istanbul su Unica Prenotazione</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Se hai una <strong>prenotazione unica</strong> (stesso PNR) con volo Roma–Istanbul–Bangkok
                    e perdi la coincidenza a Istanbul per colpa di Turkish Airlines, hai diritto al risarcimento
                    calcolato sulla distanza totale Roma–Bangkok, perché il <em>primo volo è partito dall'UE</em>.
                    Con oltre 3.500 km totali: <strong>€600</strong>.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-blue-600 flex-shrink-0" />
              Importi del Risarcimento (Voli da Aeroporti UE)
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="p-4 text-left rounded-tl-xl">Distanza totale</th>
                    <th className="p-4 text-left">Ritardo arrivo</th>
                    <th className="p-4 text-left">Risarcimento</th>
                    <th className="p-4 text-left rounded-tr-xl">Esempio rotta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-blue-50">
                    <td className="p-4 font-semibold">≤ 1.500 km</td>
                    <td className="p-4">≥ 3 ore</td>
                    <td className="p-4 font-bold text-green-700">€250</td>
                    <td className="p-4 text-gray-600">Milano–Atene (~1.300 km)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold">1.500–3.500 km</td>
                    <td className="p-4">≥ 3 ore</td>
                    <td className="p-4 font-bold text-green-700">€400</td>
                    <td className="p-4 text-gray-600">Roma–Istanbul (~2.100 km)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-blue-50">
                    <td className="p-4 font-semibold">&gt; 3.500 km</td>
                    <td className="p-4">≥ 4 ore</td>
                    <td className="p-4 font-bold text-green-700">€600</td>
                    <td className="p-4 text-gray-600">Roma–Bangkok via IST (~9.000 km)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold rounded-bl-xl">&gt; 3.500 km (extra-UE)</td>
                    <td className="p-4">3–4 ore</td>
                    <td className="p-4 font-bold text-amber-600 rounded-br-xl">€300 (ridotto 50%)</td>
                    <td className="p-4 text-gray-600">Roma–Dubai via IST (ritardo 3h30)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h3 className="font-bold text-blue-900 mb-3">Distanza Roma–Istanbul: €400 di Risarcimento</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                La rotta Roma Fiumicino (FCO) – Istanbul (IST) è di circa <strong>2.100 km</strong>, che
                rientra nella fascia 1.500–3.500 km. Per un volo in ritardo di 3 ore o più, spettano
                <strong> €400 a passeggero</strong>. Per Milano–Istanbul (~2.300 km) l'importo è uguale.
              </p>
            </div>

            {/* CTA 1 */}
            <div className="my-12 bg-gradient-to-br from-red-700 to-red-900 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Volo Turkish Airlines da Aeroporto Italiano in Ritardo?</h3>
                  <p className="text-red-100 text-lg">
                    Se il volo è partito dall'Italia hai diritto fino a <strong className="text-white">€600</strong>.
                    ClaimWinger gestisce tutto in italiano — commissione del{" "}
                    <strong className="text-white">30%</strong> solo sull'importo ottenuto.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=turkish-airlines"
                    className="inline-flex items-center bg-white text-red-700 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-all shadow-lg text-lg"
                  >
                    Verifica il Tuo Caso
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <p className="text-red-300 text-xs mt-2 text-center">Gratis • 3 minuti</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-green-600 flex-shrink-0" />
              Come Fare Reclamo a Turkish Airlines: Procedura
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Turkish Airlines gestisce i reclami principalmente in turco e inglese. Per i passeggeri
              italiani, la barriera linguistica può essere un ostacolo. Ecco come procedere nel modo
              più efficace:
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 my-8">
              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    title: "Documenta il problema in aeroporto",
                    body: "Fai screenshot del tabellone con l'orario effettivo di arrivo, chiedi al personale TK un'attestazione del ritardo (delay certificate), conserva tutti gli scontrini per pasti, hotel o taxi sostenuti durante l'attesa.",
                  },
                  {
                    num: 2,
                    title: "Prepara i documenti",
                    body: "Boarding pass di tutti i tratti (fisico o digitale), email di conferma prenotazione con numero volo TK, documento d'identità, IBAN del conto corrente. Se hai perso una coincidenza, tieni anche la documentazione del secondo volo.",
                  },
                  {
                    num: 3,
                    title: "Invia il reclamo a Turkish Airlines",
                    body: "Sito ufficiale: turkishairlines.com → Assistenza Clienti → Feedback. Email: feedback@thy.com. Call center italiano: +39 02 6969 6969. Specifica: numero volo TK, data, aeroporto di partenza (UE), orario previsto e effettivo di arrivo, importo richiesto, IBAN.",
                  },
                  {
                    num: 4,
                    title: "Attendi risposta (4–8 settimane)",
                    body: "Turkish Airlines risponde in media entro 4–8 settimane. La risposta è spesso in inglese. Se il reclamo riguarda un volo da aeroporto italiano, puoi richiedere risposta in italiano citando il CE 261/2004.",
                  },
                  {
                    num: 5,
                    title: "Escalation se rifiutano o non rispondono",
                    body: "Per voli partiti dall'Italia: contatta l'ENAC (Ente Nazionale per l'Aviazione Civile). In alternativa, ClaimWinger gestisce tutta la corrispondenza con TK in inglese e, se necessario, procede per vie legali.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
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
              Quando Turkish Airlines Può Rifiutare il Risarcimento
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div>
                <h3 className="font-bold text-green-800 mb-3">✅ Rifiuto Legittimo</h3>
                <div className="space-y-2">
                  {[
                    "Maltempo eccezionale documentato",
                    "Sciopero ATC (controllo traffico aereo)",
                    "Chiusura spazio aereo turco per ragioni di sicurezza",
                    "Restrizioni aeroportuali imprevedibili",
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
                    "Sciopero del personale Turkish Airlines",
                    "Ritardo per rotazione aereo",
                    "Overbooking",
                    "Congestione all'hub di Istanbul",
                  ].map((item, i) => (
                    <div key={i} className="bg-red-50 p-3 rounded-lg text-sm flex items-start gap-2">
                      <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Cosa Fare se il Volo è Partito da Istanbul (Senza CE 261/2004)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Se il tuo volo è partito da Istanbul verso l'Italia e non si applica il CE 261/2004, non
              sei completamente senza tutele. Ecco le opzioni disponibili:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">🇹🇷 Normativa Turca (SHY-Passenger)</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  La Turchia ha una propria normativa sulla protezione dei passeggeri (SHY-Passenger),
                  ispirata al CE 261/2004 ma con importi diversi. Puoi presentare reclamo alla DGCA
                  (Direzione Generale dell'Aviazione Civile Turca), ma la procedura è più complessa
                  per i passeggeri italiani.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">📋 Condizioni Generali di Trasporto TK</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Turkish Airlines si impegna nelle proprie CGT a fornire assistenza in caso di ritardi
                  significativi. Puoi richiedere pasti, hotel e trasferimenti anche per voli da Istanbul,
                  anche se il risarcimento monetario fisso del CE 261/2004 non si applica.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-2">💡 Consiglio: Valuta il Tuo Caso con ClaimWinger</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ogni situazione è diversa. Se hai perso una coincidenza o hai subito un ritardo
                  significativo su un volo TK da Istanbul, vale la pena verificare gratuitamente se
                  esistono basi per un reclamo.{" "}
                  <Link href="https://claimwinger.com/it/contatti" className="text-blue-600 hover:underline font-semibold">
                    Contatta ClaimWinger
                  </Link>{" "}
                  per una valutazione senza impegno.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Assistenza in Aeroporto con Turkish Airlines
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Per i voli in partenza da aeroporti UE, Turkish Airlines deve fornire assistenza gratuita
              in caso di ritardo alla partenza:
            </p>

            <div className="space-y-3 my-6">
              {[
                { soglia: "Ritardo 2+ ore (voli ≤1.500 km)", diritto: "Pasti e bevande, 2 chiamate telefoniche o email gratuite" },
                { soglia: "Ritardo 3+ ore (voli 1.500–3.500 km)", diritto: "Pasti e bevande, 2 chiamate o email gratuite" },
                { soglia: "Ritardo 4+ ore (voli >3.500 km)", diritto: "Pasti e bevande, 2 chiamate o email gratuite" },
                { soglia: "Pernottamento necessario", diritto: "Hotel + trasferimento aeroporto–hotel a carico di Turkish Airlines" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-orange-50 p-4 rounded-xl text-sm">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.soglia}</p>
                    <p className="text-gray-700 mt-0.5">{item.diritto}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Se Turkish Airlines non ha fornito l'assistenza dovuta durante l'attesa, puoi richiedere
              il rimborso delle spese sostenute insieme al reclamo per il risarcimento. Per la procedura
              completa consulta la{" "}
              <Link href="/it/blog/come-presentare-reclamo-guida-completa" className="text-blue-600 hover:underline font-semibold">
                guida completa ai reclami
              </Link>.
            </p>

            {/* CTA 2 — prima della FAQ */}
            <div className="my-12 bg-gradient-to-br from-gray-800 to-red-900 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">
                  Difficoltà con la Lingua o la Burocrazia di Turkish Airlines?
                </h3>
                <p className="text-gray-200 mb-6 text-lg">
                  ClaimWinger comunica con TK in inglese e turco per te, gestisce il reclamo dalla A
                  alla Z e procede legalmente se necessario. Paghi solo il{" "}
                  <strong className="text-white">30%</strong> dell'importo recuperato — zero se non vinciamo.
                </p>
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=turkish-airlines"
                  className="inline-flex items-center bg-white text-gray-800 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
                >
                  Affida il Reclamo a ClaimWinger
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <p className="text-gray-400 text-sm mt-4">
                  ✓ Zero costi anticipati &nbsp;•&nbsp; ✓ 30% solo se vinciamo &nbsp;•&nbsp; ✓ Gestione in italiano
                </p>
              </div>
            </div>

            {/* FAQ */}
            <section className="mt-12 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Domande Frequenti su Turkish Airlines e il Risarcimento
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Turkish Airlines rientra nel CE 261/2004?",
                    a: "Dipende dalla rotta. Il CE 261/2004 si applica a Turkish Airlines solo per i voli in partenza da aeroporti dell'Unione Europea (es. Roma, Milano, Napoli). Per i voli in partenza da Istanbul verso l'Italia, Turkish Airlines non è soggetta al regolamento europeo.",
                  },
                  {
                    q: "Ho diritto al risarcimento per un volo Turkish Airlines da Roma a Istanbul in ritardo?",
                    a: "Sì. Se il volo è partito da Roma (o qualsiasi aeroporto UE), il CE 261/2004 si applica. Con 3 ore o più di ritardo all'arrivo hai diritto a €250–€600 in base alla distanza. Roma–Istanbul (~2.100 km) → €400.",
                  },
                  {
                    q: "Ho diritto al risarcimento per un volo Turkish Airlines da Istanbul a Roma in ritardo?",
                    a: "No, non automaticamente. Per voli in partenza da Istanbul (paese non-UE) operati da Turkish Airlines (compagnia non-UE), il CE 261/2004 non si applica. Potrebbero applicarsi le tutele della normativa turca o le CGT di Turkish Airlines.",
                  },
                  {
                    q: "Quanto spetta per un volo Turkish Airlines in ritardo da un aeroporto italiano?",
                    a: "€250 per voli fino a 1.500 km, €400 per voli tra 1.500 e 3.500 km (es. Roma–Istanbul → €400), €600 per voli oltre 3.500 km. Se hai coincidenza a Istanbul su prenotazione unica, il calcolo è sulla distanza totale.",
                  },
                  {
                    q: "Come si fa reclamo a Turkish Airlines?",
                    a: "Sul sito turkishairlines.com → Assistenza Clienti → Feedback e reclami, oppure via email a feedback@thy.com. Call center italiano: +39 02 6969 6969. Tempi medi: 4–8 settimane. La risposta è spesso in inglese.",
                  },
                  {
                    q: "Turkish Airlines paga il risarcimento per i ritardi all'hub di Istanbul?",
                    a: "Se hai perso una coincidenza a Istanbul su prenotazione unica partita da un aeroporto UE, e sei arrivato alla destinazione finale con 3+ ore di ritardo, hai diritto al risarcimento calcolato sulla distanza totale.",
                  },
                  {
                    q: "Quanto tempo ha Turkish Airlines per rispondere al reclamo?",
                    a: "Turkish Airlines risponde generalmente entro 4–8 settimane. In caso di mancata risposta per voli da aeroporti italiani, puoi rivolgerti all'ENAC. La comunicazione è spesso in inglese o turco — ClaimWinger elimina questa barriera.",
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
                <Link href="/it/blog/british-airways-risarcimento"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">British Airways Risarcimento</h3>
                  <p className="text-sm text-gray-600">Guida completa inclusa normativa post-Brexit</p>
                </Link>
                <Link href="/it/blog/da-quante-ore-ritardo-diritto-risarcimento"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Da Quante Ore Scatta il Risarcimento?</h3>
                  <p className="text-sm text-gray-600">La regola delle 3 ore spiegata chiaramente</p>
                </Link>
                <Link href="/it/blog/regolamento-ce-261-2004-spiegato"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Regolamento CE 261/2004</h3>
                  <p className="text-sm text-gray-600">Tutti i tuoi diritti come passeggero europeo</p>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>
    </LayoutIt>
  );
}
