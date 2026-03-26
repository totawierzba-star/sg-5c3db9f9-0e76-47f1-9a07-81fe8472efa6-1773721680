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
} from "lucide-react";

export default function AirFranceRisarcimento() {
  return (
    <LayoutIt>
      <SEO
        title="Air France Risarcimento: Come Ottenere Fino a €600 per Ritardi e Cancellazioni [2026]"
        description="Volo Air France in ritardo o cancellato? Guida completa al risarcimento CE 261/2004: importi, procedura di reclamo, documenti e tempi di risposta."
        url="https://problemlot.com/it/blog/air-france-risarcimento"
      />

      {/* Schema Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Air France Risarcimento: Come Ottenere Fino a €600 per Ritardi e Cancellazioni",
            "description":
              "Guida completa al risarcimento Air France per voli in ritardo o cancellati secondo CE 261/2004.",
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
              "@id": "https://problemlot.com/it/blog/air-france-risarcimento",
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
                name: "Air France paga il risarcimento per i voli in ritardo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. Air France è soggetta al Regolamento CE 261/2004 e deve pagare €250–€600 per voli in ritardo di 3 ore o più. Air France risponde generalmente entro 4–8 settimane. In caso di rifiuto immotivato, è possibile procedere tramite l'autorità francese DGAC o rivolgersi a una società specializzata.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto spetta per un volo Air France in ritardo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "€250 per voli fino a 1.500 km, €400 per voli tra 1.500 e 3.500 km, €600 per voli oltre 3.500 km. Per voli intercontinentali con ritardo tra 3 e 4 ore Air France può ridurre a €300.",
                },
              },
              {
                "@type": "Question",
                name: "Come si presenta reclamo ad Air France?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Puoi presentare reclamo sul sito airfrance.it nella sezione 'Contattaci' → 'Reclami', oppure tramite il modulo EU261. È possibile anche affidarsi a una società come ClaimWinger per gestire tutto senza stress.",
                },
              },
              {
                "@type": "Question",
                name: "Air France rimborsa anche per i voli in codeshare con KLM?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dipende dal vettore operante. Air France e KLM fanno parte dello stesso gruppo (Air France-KLM) ma sono compagnie distinte. Se il numero di volo inizia per AF è Air France, se inizia per KL è KLM. Il reclamo va alla compagnia che ha operato il volo.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto tempo ci vuole per ricevere il risarcimento da Air France?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Air France risponde in media entro 4–8 settimane. Il pagamento, una volta approvato, arriva entro 7–14 giorni lavorativi. Se Air France non risponde entro 2 mesi, puoi rivolgerti alla DGAC (autorità francese) o a una società specializzata.",
                },
              },
              {
                "@type": "Question",
                name: "Air France paga in contanti o solo in miglia Flying Blue?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Air France può proporre miglia Flying Blue come compensazione, ma per legge devi poter scegliere il pagamento in denaro. Puoi rifiutare le miglia e richiedere il pagamento in euro tramite bonifico. Accettare le miglia significa rinunciare all'importo in contanti.",
                },
              },
              {
                "@type": "Question",
                name: "Posso chiedere risarcimento per un volo Air France cancellato per sciopero?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dipende dal tipo di sciopero. Sciopero del personale Air France (piloti, assistenti di volo, personale di terra): NON è circostanza straordinaria → hai diritto al risarcimento. Sciopero dei controllori del traffico aereo (ATC): è circostanza straordinaria → Air France può non pagare. Verifica sempre la causa reale dello sciopero.",
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
              <li className="text-gray-900 font-medium">Air France Risarcimento</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 flex-wrap">
              <Clock className="h-4 w-4" />
              <time dateTime="2026-03-19">19 marzo 2026</time>
              <span>•</span>
              <span>10 min di lettura</span>
              <span>•</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                Compagnie Aeree
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Air France Risarcimento: Come Ottenere Fino a €600 [2026]
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Volo Air France in ritardo di 3 o più ore, cancellato o con coincidenza persa? Hai diritto a un
              risarcimento fino a <strong>€600</strong> per passeggero. Ecco la guida completa: importi, come
              fare reclamo e cosa fare se Air France non risponde.
            </p>
          </header>

          {/* Risposta rapida */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-xl">
            <h2 className="font-bold text-blue-900 text-lg mb-3">In Sintesi</h2>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Ritardo ≥3 ore all'arrivo → <strong>€250, €400 o €600</strong> in base alla distanza</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Si applica anche a voli Air France che atterrano in Italia (compagnia UE)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Reclamo tramite sito Air France o tramite ClaimWinger (30% solo se vinci)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Termine di prescrizione: 2 anni in Italia, 5 anni in Francia</span>
              </li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-blue-600 flex-shrink-0" />
              Importi del Risarcimento Air France
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Come tutte le compagnie aeree europee, Air France deve rispettare il{" "}
              <Link href="/it/blog/regolamento-ce-261-2004-spiegato" className="text-blue-600 hover:underline font-semibold">
                Regolamento CE 261/2004
              </Link>
              . Gli importi sono fissi e non negoziabili: non dipendono dal prezzo del tuo biglietto né dal
              numero di ore di ritardo (purché sia almeno 3).
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-blue-600 mb-3">€250</div>
                <div className="text-sm font-bold text-gray-800 mb-2">Voli Brevi</div>
                <div className="text-xs text-gray-600">
                  Distanza ≤ 1.500 km
                  <p className="text-gray-500 mt-2">Es: Roma–Parigi CDG, Milano–Lione, Napoli–Marsiglia</p>
                </div>
              </div>
              <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Più comune
                </div>
                <div className="text-5xl font-bold text-green-600 mb-3">€400</div>
                <div className="text-sm font-bold text-gray-800 mb-2">Voli Medi</div>
                <div className="text-xs text-gray-600">
                  1.500–3.500 km
                  <p className="text-gray-500 mt-2">Es: Roma–New York via CDG (tratto lungo), Milano–Casablanca</p>
                </div>
              </div>
              <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-purple-600 mb-3">€600</div>
                <div className="text-sm font-bold text-gray-800 mb-2">Voli Lunghi</div>
                <div className="text-xs text-gray-600">
                  &gt; 3.500 km
                  <p className="text-gray-500 mt-2">Es: Roma–New York, Milano–Los Angeles, Napoli–Tokyo via CDG</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 my-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm">
                  <strong>Voli intercontinentali con ritardo 3–4 ore:</strong> Air France può applicare una
                  riduzione del 50% (€300 invece di €600) per voli extra-UE oltre 3.500 km se il ritardo è
                  compreso tra 3 e 4 ore. Con oltre 4 ore spetta sempre €600.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="my-12 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Volo Air France in Ritardo o Cancellato?</h3>
                  <p className="text-blue-100 text-lg">
                    Verifica gratuitamente se hai diritto al risarcimento. ClaimWinger gestisce tutto —
                    commissione solo del <strong className="text-white">30%</strong> sull'importo ottenuto,
                    zero se non vinciamo.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=air-france"
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
              Come Fare Reclamo ad Air France: Guida Passo-Passo
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Air France dispone di un sistema di reclami online. Segui questa procedura per massimizzare
              le probabilità di successo:
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 my-8">
              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    title: "Documenta il problema in aeroporto",
                    body: "Prima di lasciare l'aeroporto: fai uno screenshot del tabellone con l'orario effettivo di arrivo, chiedi al personale Air France un certificato di ritardo/cancellazione (non sempre lo rilasciano, ma vale la pena chiedere), e conserva tutti gli scontrini di spese extra.",
                  },
                  {
                    num: 2,
                    title: "Raccogli la documentazione necessaria",
                    body: "Boarding pass (fisico o screenshot digitale), email di conferma prenotazione con numero volo e orari, documento d'identità, IBAN del conto dove ricevere il pagamento.",
                  },
                  {
                    num: 3,
                    title: "Invia il reclamo ad Air France",
                    body: "Vai su airfrance.it → Aiuto → Reclami → Ritardo o cancellazione. Oppure scrivi a customer.care@airfrance.fr indicando: numero volo, data, orario previsto e effettivo di arrivo, importo richiesto (€250/€400/€600), IBAN.",
                  },
                  {
                    num: 4,
                    title: "Attendi la risposta (4–8 settimane)",
                    body: "Air France risponde in media entro 4–6 settimane per casi semplici. Tieni traccia della data di invio del reclamo — ti servirà in caso di escalation.",
                  },
                  {
                    num: 5,
                    title: "Escalation se rifiuta o non risponde",
                    body: "Puoi rivolgerti alla DGAC (Direction Générale de l'Aviation Civile), l'autorità francese di vigilanza su Air France, oppure affidarti a ClaimWinger per la gestione legale.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
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
              Quando Air France Può e Non Può Rifiutare
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div>
                <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Rifiuto LEGITTIMO
                </h3>
                <div className="space-y-2">
                  {[
                    "Maltempo eccezionale (non prevedibile)",
                    "Sciopero controllori traffico aereo (ATC)",
                    "Chiusura spazio aereo per emergenza",
                    "Instabilità politica / rischio sicurezza",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 bg-green-50 p-3 rounded-lg text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Rifiuto NON valido (hai diritto al rimborso)
                </h3>
                <div className="space-y-2">
                  {[
                    "Guasto tecnico dell'aereo",
                    "Sciopero del personale Air France",
                    "Rotazione aereo in ritardo",
                    "Mancanza di equipaggio disponibile",
                    "Overbooking",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 bg-red-50 p-3 rounded-lg text-sm">
                      <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Plane className="h-8 w-8 text-blue-600 flex-shrink-0" />
              Air France e KLM: Attenzione ai Codeshare
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Air France e KLM fanno parte dello stesso gruppo (Air France-KLM), ma sono compagnie
              giuridicamente distinte. Se hai prenotato con Air France ma il volo era operato da KLM —
              o viceversa — il reclamo va alla <strong>compagnia che ha operato il volo</strong>, non a
              quella che ti ha venduto il biglietto.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h3 className="font-bold text-blue-900 mb-3">Come capire chi ha operato il tuo volo</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>AF + numero</strong> (es. AF1234) → Air France ha operato → reclamo ad Air France</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>KL + numero</strong> (es. KL1234) → KLM ha operato → reclamo a KLM</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Il codice volo si trova sulla carta d'imbarco e sulla conferma di prenotazione</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Miglia Flying Blue: Accetta o Rifiuta?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Air France spesso propone il pagamento del risarcimento in <strong>miglia Flying Blue</strong>
              invece che in denaro. Puoi accettare, ma considera:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-4 text-left rounded-tl-lg">Opzione</th>
                    <th className="p-4 text-left">Valore</th>
                    <th className="p-4 text-left rounded-tr-lg">Consiglio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold">Pagamento in euro</td>
                    <td className="p-4">€250 / €400 / €600 cash</td>
                    <td className="p-4 text-green-700 font-semibold">Consigliato per la maggior parte</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold rounded-bl-lg">Miglia Flying Blue</td>
                    <td className="p-4">Valore variabile (~€0,01–0,02/miglio)</td>
                    <td className="p-4 text-amber-600 rounded-br-lg">Solo se voli spesso con AF/KLM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Hai <strong>sempre il diritto di richiedere il pagamento in denaro</strong>. Accettare le miglia
              significa rinunciare al cash — non farlo senza aver valutato il tuo utilizzo reale del programma
              fedeltà.
            </p>

            {/* CTA 2 — prima della FAQ */}
            <div className="my-12 bg-gradient-to-br from-sky-600 to-blue-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">Non Vuoi Gestire da Solo il Reclamo ad Air France?</h3>
                <p className="text-sky-100 mb-6 text-lg">
                  ClaimWinger si occupa dell'intera procedura: reclamo, follow-up, escalation e azione legale
                  se necessario. Paghi solo il <strong className="text-white">30%</strong> dell'importo ottenuto —
                  se non vinciamo, non paghi nulla.
                </p>
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=air-france"
                  className="inline-flex items-center bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
                >
                  Affida il Reclamo a ClaimWinger
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <p className="text-sky-200 text-sm mt-4">
                  ✓ Zero costi anticipati &nbsp;•&nbsp; ✓ 30% solo se vinciamo &nbsp;•&nbsp; ✓ Gestione legale inclusa
                </p>
              </div>
            </div>

            {/* FAQ */}
            <section className="mt-12 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Domande Frequenti su Air France e il Risarcimento
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Air France paga il risarcimento per i voli in ritardo?",
                    a: "Sì. Air France è soggetta al Regolamento CE 261/2004 e deve pagare €250–€600 per voli in ritardo di 3 ore o più. In caso di rifiuto immotivato, è possibile procedere tramite l'autorità francese DGAC o affidarsi a una società specializzata.",
                  },
                  {
                    q: "Quanto spetta per un volo Air France in ritardo?",
                    a: "€250 per voli fino a 1.500 km (es. Roma–Parigi), €400 per voli tra 1.500 e 3.500 km, €600 per voli oltre 3.500 km (es. Roma–New York). Per voli intercontinentali con ritardo tra 3 e 4 ore Air France può ridurre a €300.",
                  },
                  {
                    q: "Come si presenta reclamo ad Air France?",
                    a: "Tramite il sito airfrance.it → Aiuto → Reclami, oppure via email a customer.care@airfrance.fr. In alternativa puoi affidarti a ClaimWinger per gestire tutto senza stress: loro si occupano di tutta la procedura.",
                  },
                  {
                    q: "Air France rimborsa anche per i voli in codeshare con KLM?",
                    a: "Il reclamo va al vettore operante. Se il numero di volo inizia per AF è Air France, se inizia per KL è KLM. Verifica sempre sulla carta d'imbarco.",
                  },
                  {
                    q: "Quanto tempo ci vuole per ricevere il risarcimento da Air France?",
                    a: "Air France risponde in media entro 4–8 settimane. Il pagamento, una volta approvato, arriva entro 7–14 giorni lavorativi. Se non risponde entro 2 mesi, puoi rivolgerti alla DGAC o a ClaimWinger.",
                  },
                  {
                    q: "Air France paga in contanti o solo in miglia Flying Blue?",
                    a: "Può proporre miglia Flying Blue, ma hai sempre il diritto di richiedere il pagamento in denaro. Accettare le miglia significa rinunciare al cash — valuta attentamente prima di accettare.",
                  },
                  {
                    q: "Posso chiedere risarcimento per un volo Air France cancellato per sciopero?",
                    a: "Dipende: sciopero del personale Air France → NON è circostanza straordinaria → hai diritto al risarcimento. Sciopero ATC (controllori del traffico) → è circostanza straordinaria → Air France può non pagare.",
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
                <Link href="/it/blog/regolamento-ce-261-2004-spiegato"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Regolamento CE 261/2004</h3>
                  <p className="text-sm text-gray-600">I tuoi diritti come passeggero europeo</p>
                </Link>
                <Link href="/it/blog/come-presentare-reclamo-guida-completa"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Come Presentare Reclamo</h3>
                  <p className="text-sm text-gray-600">Procedura passo-passo per qualsiasi compagnia</p>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>
    </LayoutIt>
  );
}
