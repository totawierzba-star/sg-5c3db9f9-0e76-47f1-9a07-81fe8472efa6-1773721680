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
  Phone,
} from "lucide-react";

export default function LufthansaRisarcimentoVoli() {
  return (
    <LayoutIt>
      <SEO
        title="Lufthansa Risarcimento Voli: Guida Completa 2026 — Fino a €600"
        description="Volo Lufthansa in ritardo o cancellato? Scopri come ottenere fino a €600 di risarcimento secondo CE 261/2004. Procedura passo-passo, modelli e tempi di risposta."
        url="https://problemlot.com/it/blog/lufthansa-risarcimento-voli"
      />

      {/* Schema Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Lufthansa Risarcimento Voli: Guida Completa 2026",
            "description":
              "Come ottenere risarcimento da Lufthansa per voli in ritardo o cancellati. Procedura, importi CE 261/2004 e modelli di reclamo.",
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
              "@id":
                "https://problemlot.com/it/blog/lufthansa-risarcimento-voli",
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
                name: "Lufthansa paga il risarcimento per i voli in ritardo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì, Lufthansa è obbligata a pagare il risarcimento per voli in ritardo di 3 ore o più secondo il Regolamento CE 261/2004. L'importo va da €250 a €600 in base alla distanza del volo. Lufthansa in genere risponde entro 4-8 settimane, ma spesso oppone circostanze straordinarie — è importante documentare bene il caso.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto spetta per un volo Lufthansa in ritardo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "€250 per voli fino a 1.500 km, €400 per voli tra 1.500 e 3.500 km, €600 per voli oltre 3.500 km. Per i voli intercontinentali con ritardo tra 3 e 4 ore, Lufthansa può ridurre a €300.",
                },
              },
              {
                "@type": "Question",
                name: "Come si fa reclamo a Lufthansa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Puoi presentare reclamo direttamente sul sito Lufthansa nella sezione 'Assistenza Clienti' → 'Reclami passeggeri', oppure via email a customer.relations@lufthansa.com. Allega boarding pass, conferma prenotazione e descrivi il ritardo. In alternativa, usa ClaimWinger per gestire tutto automaticamente.",
                },
              },
              {
                "@type": "Question",
                name: "Lufthansa rimborsa anche i voli operati da Eurowings o SWISS?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dipende: se hai prenotato tramite Lufthansa ma il volo era operato da Eurowings o SWISS (compagnie del Gruppo Lufthansa), il reclamo va presentato alla compagnia operante, non a Lufthansa. Verifica sempre il numero di volo e il vettore operativo sul biglietto.",
                },
              },
              {
                "@type": "Question",
                name: "Lufthansa può rifiutare il risarcimento?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì, può rifiutare invocando circostanze straordinarie (maltempo eccezionale, scioperi ATC, problemi di sicurezza). Tuttavia, guasti tecnici e problemi di rotazione dell'aereo NON sono circostanze straordinarie — in quei casi hai diritto al risarcimento anche se Lufthansa lo nega inizialmente.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto tempo ha Lufthansa per rispondere al reclamo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Lufthansa ha 6-8 settimane per rispondere. In pratica, i tempi medi si aggirano sulle 4-6 settimane per i casi semplici. Se non ricevi risposta entro 8 settimane, puoi rivolgerti all'ENAC o usare una società specializzata.",
                },
              },
              {
                "@type": "Question",
                name: "Posso chiedere risarcimento per un volo Lufthansa di 2-3 anni fa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì, in Italia il termine è 2 anni dalla data del volo. In Germania (paese di Lufthansa) il termine è 3 anni. Se il volo è partito dall'Italia, puoi richiedere fino a 2 anni fa; se dall'Irlanda (paese di registrazione), considera il diritto tedesco.",
                },
              },
              {
                "@type": "Question",
                name: "Lufthansa paga il risarcimento in contanti o voucher?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Per legge Lufthansa deve pagare in denaro (bonifico o carta di credito) se il passeggero lo richiede. Può proporre voucher o miglia come alternativa, ma tu hai il diritto di rifiutarli e richiedere il pagamento in contanti.",
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
              <li className="text-gray-900 font-medium">Lufthansa Risarcimento</li>
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
              Lufthansa Risarcimento Voli: Come Ottenere Fino a €600 [2026]
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Il tuo volo Lufthansa è arrivato in ritardo o è stato cancellato? Hai diritto a fino a{" "}
              <strong>€600 di risarcimento</strong> secondo il Regolamento CE 261/2004. Ecco la guida
              completa: procedura, importi, documenti e cosa fare se Lufthansa rifiuta.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-xl">
            <h2 className="font-bold text-yellow-900 text-lg mb-3">Risposta Rapida</h2>
            <ul className="space-y-2 text-yellow-800 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>Ritardo ≥3 ore → <strong>€250–€600</strong> in base alla distanza</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>Volo cancellato → stessi importi + rimborso biglietto o riprotezione</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>Reclamo via sito, email o tramite ClaimWinger (senza rischio)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>Tempi medi risposta Lufthansa: 4–8 settimane</span>
              </li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-blue-600 flex-shrink-0" />
              Quanto Spetta per un Volo Lufthansa in Ritardo?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Il Regolamento europeo{" "}
              <Link href="/it/blog/regolamento-ce-261-2004-spiegato" className="text-blue-600 hover:underline font-semibold">
                CE 261/2004
              </Link>{" "}
              stabilisce importi fissi che <strong>non dipendono dal prezzo del biglietto</strong> ma dalla
              distanza del volo. Lufthansa, in quanto vettore europeo con base a Francoforte, è soggetta
              alla normativa per tutti i voli in partenza da aeroporti UE e per i voli verso l'UE.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="p-4 text-left rounded-tl-xl">Distanza volo</th>
                    <th className="p-4 text-left">Ritardo all'arrivo</th>
                    <th className="p-4 text-left rounded-tr-xl">Risarcimento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-blue-50">
                    <td className="p-4 font-semibold">≤ 1.500 km</td>
                    <td className="p-4">≥ 3 ore</td>
                    <td className="p-4 font-bold text-green-700">€250</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold">1.500–3.500 km</td>
                    <td className="p-4">≥ 3 ore</td>
                    <td className="p-4 font-bold text-green-700">€400</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-blue-50">
                    <td className="p-4 font-semibold">&gt; 3.500 km (intra-UE o non-UE)</td>
                    <td className="p-4">≥ 3 ore</td>
                    <td className="p-4 font-bold text-green-700">€600</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold rounded-bl-xl">&gt; 3.500 km (extra-UE)</td>
                    <td className="p-4">3–4 ore</td>
                    <td className="p-4 font-bold text-amber-600 rounded-br-xl">€300 (ridotto 50%)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-bold text-blue-900 mb-3">Esempi di rotte Lufthansa dall'Italia</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Roma (FCO) – Francoforte (FRA)</p>
                  <p className="text-gray-600">~1.860 km → <strong className="text-green-700">€400</strong></p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Milano (MXP) – Monaco (MUC)</p>
                  <p className="text-gray-600">~640 km → <strong className="text-green-700">€250</strong></p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Roma (FCO) – New York (JFK)</p>
                  <p className="text-gray-600">~8.000 km → <strong className="text-green-700">€600</strong></p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Milano (MXP) – Chicago (ORD)</p>
                  <p className="text-gray-600">~8.600 km → <strong className="text-green-700">€600</strong></p>
                </div>
              </div>
            </div>

            {/* CTA 1 — dopo primo blocco contenuto */}
            <div className="my-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Volo Lufthansa in Ritardo o Cancellato?</h3>
                  <p className="text-blue-100 text-lg">
                    Verifica subito se hai diritto al risarcimento. ClaimWinger gestisce il reclamo per te
                    — <strong className="text-white">paghi solo se vinciamo</strong>.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=lufthansa"
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
              <FileText className="h-8 w-8 text-green-600 flex-shrink-0" />
              Come Fare Reclamo a Lufthansa: Procedura Passo-Passo
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Lufthansa dispone di un sistema di gestione reclami strutturato, ma bisogna conoscere i
              canali giusti e fornire la documentazione corretta. Ecco come procedere:
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 my-8">
              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    color: "bg-blue-600",
                    title: "Raccogli i documenti",
                    content: (
                      <ul className="text-gray-700 text-sm mt-2 space-y-1">
                        <li>• Carta d'imbarco (boarding pass) fisica o digitale</li>
                        <li>• Conferma di prenotazione con numero di volo</li>
                        <li>• Screenshot del tabellone partenze/arrivi</li>
                        <li>• Ricevute di eventuali spese sostenute (pasti, hotel, taxi)</li>
                        <li>• Eventuale comunicazione di cancellazione da Lufthansa</li>
                      </ul>
                    ),
                  },
                  {
                    num: 2,
                    color: "bg-blue-600",
                    title: "Invia il reclamo a Lufthansa",
                    content: (
                      <div className="text-gray-700 text-sm mt-2 space-y-2">
                        <p><strong>Opzione A — Online:</strong> lufthansa.com → Aiuto & Contatti → Reclami passeggeri</p>
                        <p><strong>Opzione B — Email:</strong> customer.relations@lufthansa.com</p>
                        <p><strong>Opzione C — Posta:</strong> Lufthansa Customer Relations, D-60546 Frankfurt am Main, Germania</p>
                        <p className="text-blue-600 font-semibold mt-2">✓ Specifica sempre: numero volo, data, orario previsto e effettivo di arrivo, importo richiesto e IBAN.</p>
                      </div>
                    ),
                  },
                  {
                    num: 3,
                    color: "bg-blue-600",
                    title: "Attendi la risposta (4–8 settimane)",
                    content: (
                      <p className="text-gray-700 text-sm mt-2">
                        Lufthansa risponde in media entro 4–6 settimane per casi semplici, 6–8 settimane per
                        casi più complessi (voli intercontinentali, coincidenze perse). Conserva sempre la
                        ricevuta di invio del reclamo.
                      </p>
                    ),
                  },
                  {
                    num: 4,
                    color: "bg-amber-500",
                    title: "Se Lufthansa rifiuta o non risponde",
                    content: (
                      <div className="text-gray-700 text-sm mt-2 space-y-2">
                        <p>Se Lufthansa rifiuta o non risponde entro 8 settimane, hai queste opzioni:</p>
                        <ul className="space-y-1 mt-1">
                          <li>• <strong>ENAC</strong> (Ente Nazionale Aviazione Civile) — autorità italiana</li>
                          <li>• <strong>Luftfahrt-Bundesamt</strong> (LBA) — autorità tedesca competente su Lufthansa</li>
                          <li>• <strong>ClaimWinger</strong> — gestione legale e mediazione per te</li>
                        </ul>
                      </div>
                    ),
                  },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className={`${step.color} text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg`}>
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                      {step.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-amber-500 flex-shrink-0" />
              Quando Lufthansa Può Rifiutare il Risarcimento (e Quando Sbaglia)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Lufthansa, come molte grandi compagnie, tende a invocare frequentemente le{" "}
              <Link href="/it/blog/circostanze-straordinarie-spiegate" className="text-blue-600 hover:underline font-semibold">
                circostanze straordinarie
              </Link>{" "}
              per evitare il risarcimento. Ecco cosa è legittimo e cosa non lo è:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div>
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Motivi LEGITTIMI di rifiuto
                </h3>
                <div className="space-y-3">
                  {[
                    "Maltempo eccezionale documentato (uragano, tormenta di neve)",
                    "Sciopero dei controllori del traffico aereo (ATC)",
                    "Emergenza di sicurezza (minaccia bomba, passeggero pericoloso)",
                    "Chiusura dello spazio aereo per decisione politica",
                    "Collisione con uccelli (bird strike) — caso per caso",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 bg-green-50 p-3 rounded-lg text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Motivi NON validi (hai diritto al rimborso)
                </h3>
                <div className="space-y-3">
                  {[
                    "Guasto tecnico dell'aereo (manutenzione programmata o meno)",
                    "Sciopero del personale Lufthansa (piloti, assistenti di volo)",
                    "Mancanza di equipaggio o rotazione dell'aereo",
                    "Sovraffollamento dei voli (overbooking)",
                    "Problemi informatici dei sistemi Lufthansa",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 bg-red-50 p-3 rounded-lg text-sm">
                      <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 my-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Attenzione: Il "Maltempo" Non È Sempre Circostanza Straordinaria</h3>
                  <p className="text-amber-800 text-sm">
                    Lufthansa spesso cita il maltempo anche per condizioni meteo ordinarie. La compagnia deve
                    provare che l'evento era <em>eccezionale</em> e <em>inevitabile</em>. Un temporale
                    estivo o vento normale non bastano. Se ricevi un rifiuto con questa motivazione generica,
                    considera di impugnarlo.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Plane className="h-8 w-8 text-blue-600 flex-shrink-0" />
              Gruppo Lufthansa: SWISS, Eurowings, Austrian Airlines
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Lufthansa controlla diverse compagnie. Se hai prenotato con Lufthansa ma il volo era operato
              da un'altra compagnia del gruppo, il reclamo va presentato al <strong>vettore operante</strong>,
              non a Lufthansa:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              {[
                { name: "SWISS", flag: "🇨🇭", note: "Reclamo a SWISS International Air Lines" },
                { name: "Eurowings", flag: "🇩🇪", note: "Reclamo a Eurowings GmbH" },
                { name: "Austrian Airlines", flag: "🇦🇹", note: "Reclamo a Austrian Airlines AG" },
                { name: "Brussels Airlines", flag: "🇧🇪", note: "Reclamo a Brussels Airlines" },
                { name: "Air Dolomiti", flag: "🇮🇹", note: "Reclamo a Air Dolomiti S.p.A." },
                { name: "Discover Airlines", flag: "🇩🇪", note: "ex Condor — reclamo a Discover" },
              ].map((airline) => (
                <div key={airline.name} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
                  <p className="font-bold text-gray-900 mb-1">{airline.flag} {airline.name}</p>
                  <p className="text-gray-600">{airline.note}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Come capirlo:</strong> Guarda il codice del volo sul biglietto. LH = Lufthansa,
              LX = SWISS, EW = Eurowings, OS = Austrian. Il codice determina chi deve rispondere al reclamo.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Phone className="h-8 w-8 text-blue-600 flex-shrink-0" />
              Diritti Aggiuntivi: Assistenza in Aeroporto
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Oltre al risarcimento monetario, se il tuo volo Lufthansa è in ritardo alla <em>partenza</em>,
              hai diritto all'<strong>assistenza gratuita in aeroporto</strong>:
            </p>

            <div className="space-y-3 my-6">
              {[
                { soglia: "Ritardo 2+ ore (voli ≤1.500 km)", diritto: "Pasti e bevande in proporzione all'attesa + 2 telefonate/email gratis" },
                { soglia: "Ritardo 3+ ore (voli 1.500–3.500 km)", diritto: "Pasti e bevande in proporzione all'attesa + 2 telefonate/email gratis" },
                { soglia: "Ritardo 4+ ore (voli >3.500 km)", diritto: "Pasti e bevande in proporzione all'attesa + 2 telefonate/email gratis" },
                { soglia: "Ritardo che richiede pernottamento", diritto: "Hotel + trasferimento aeroporto-hotel-aeroporto a carico di Lufthansa" },
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
              <strong>Conserva tutte le ricevute</strong> delle spese sostenute: pasti, bevande, taxi e hotel
              sono rimborsabili se Lufthansa non li ha forniti direttamente.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Tempi e Probabilità: Cosa Aspettarsi da Lufthansa
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-4 text-left rounded-tl-lg">Scenario</th>
                    <th className="p-4 text-left">Tempo medio risposta</th>
                    <th className="p-4 text-left rounded-tr-lg">Probabilità successo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4">Ritardo tecnico documentato</td>
                    <td className="p-4">4–6 settimane</td>
                    <td className="p-4 text-green-700 font-semibold">Alta (~75%)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4">Cancellazione senza preavviso</td>
                    <td className="p-4">4–8 settimane</td>
                    <td className="p-4 text-green-700 font-semibold">Alta (~80%)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4">Ritardo con citazione maltempo</td>
                    <td className="p-4">6–10 settimane</td>
                    <td className="p-4 text-amber-600 font-semibold">Media (~50%)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 rounded-bl-lg">Primo rifiuto — escalation</td>
                    <td className="p-4">2–6 mesi</td>
                    <td className="p-4 text-green-700 font-semibold rounded-br-lg">Alta con società (70%+)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA 2 — prima della FAQ */}
            <div className="my-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">Lufthansa Ha Rifiutato il Tuo Reclamo?</h3>
                <p className="text-orange-100 mb-6 text-lg">
                  Il rifiuto iniziale non è la parola finale. ClaimWinger ha un{" "}
                  <strong className="text-white">tasso di successo superiore al 70%</strong> anche sui casi
                  rifiutati da Lufthansa. Affidaci il tuo caso.
                </p>
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=lufthansa"
                  className="inline-flex items-center bg-white text-orange-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-lg"
                >
                  Impugna il Rifiuto di Lufthansa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <p className="text-orange-200 text-sm mt-4">
                  ✓ Nessun costo anticipato &nbsp;•&nbsp; ✓ Paghi solo se vinciamo &nbsp;•&nbsp; ✓ Gestione legale inclusa
                </p>
              </div>
            </div>

            {/* FAQ */}
            <section className="mt-12 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Domande Frequenti su Lufthansa e il Risarcimento
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: "Lufthansa paga il risarcimento per i voli in ritardo?",
                    a: "Sì, Lufthansa è obbligata a pagare il risarcimento per voli in ritardo di 3 ore o più secondo il Regolamento CE 261/2004. L'importo va da €250 a €600 in base alla distanza del volo. Lufthansa risponde entro 4-8 settimane, ma spesso oppone circostanze straordinarie — è importante documentare bene il caso.",
                  },
                  {
                    q: "Quanto spetta per un volo Lufthansa in ritardo?",
                    a: "€250 per voli fino a 1.500 km (es. Milano–Monaco), €400 per voli tra 1.500 e 3.500 km (es. Roma–Francoforte), €600 per voli oltre 3.500 km (es. Roma–New York). Per voli intercontinentali extra-UE con ritardo tra 3 e 4 ore, Lufthansa può ridurre a €300.",
                  },
                  {
                    q: "Come si fa reclamo a Lufthansa?",
                    a: "Puoi presentare reclamo sul sito Lufthansa nella sezione Aiuto & Contatti → Reclami, oppure via email a customer.relations@lufthansa.com. Allega boarding pass, conferma prenotazione e descrivi il ritardo. In alternativa, usa ClaimWinger per gestire tutto automaticamente.",
                  },
                  {
                    q: "Lufthansa rimborsa anche per voli operati da Eurowings o SWISS?",
                    a: "Dipende: se il volo era operato da Eurowings o SWISS, il reclamo va presentato a quella compagnia, non a Lufthansa. Verifica sempre il codice di volo: LH = Lufthansa, EW = Eurowings, LX = SWISS, OS = Austrian.",
                  },
                  {
                    q: "Lufthansa può rifiutare il risarcimento?",
                    a: "Sì, può rifiutare per circostanze straordinarie reali (maltempo eccezionale, scioperi ATC). Ma guasti tecnici, scioperi del personale Lufthansa e mancanza di equipaggio NON sono circostanze straordinarie: in questi casi hai sempre diritto al risarcimento.",
                  },
                  {
                    q: "Quanto tempo ha Lufthansa per rispondere al reclamo?",
                    a: "Lufthansa ha 6-8 settimane per rispondere. In pratica, i tempi medi sono 4-6 settimane per i casi semplici. Se non ricevi risposta entro 8 settimane, puoi rivolgerti all'ENAC o affidarti a ClaimWinger.",
                  },
                  {
                    q: "Posso chiedere risarcimento per un volo Lufthansa di 2-3 anni fa?",
                    a: "In Italia il termine di prescrizione è 2 anni dalla data del volo. In Germania (paese di Lufthansa) il termine è 3 anni. Se il volo è partito dall'Italia, hai tempo fino a 2 anni fa; se è partito dalla Germania, puoi risalire fino a 3 anni.",
                  },
                  {
                    q: "Lufthansa paga in contanti o solo in voucher?",
                    a: "Per legge Lufthansa deve pagare in denaro (bonifico o carta di credito) se lo richiedi esplicitamente. Può proporre voucher o miglia come alternativa, ma hai il diritto di rifiutarli e pretendere il pagamento in contanti.",
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

            {/* Articoli Correlati */}
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articoli Correlati</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link
                  href="/it/blog/regolamento-ce-261-2004-spiegato"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">Regolamento CE 261/2004</h3>
                  <p className="text-sm text-gray-600">Guida completa ai diritti dei passeggeri europei</p>
                </Link>
                <Link
                  href="/it/blog/circostanze-straordinarie-spiegate"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">Circostanze Straordinarie</h3>
                  <p className="text-sm text-gray-600">Quando la compagnia può rifiutare legalmente</p>
                </Link>
                <Link
                  href="/it/blog/come-presentare-reclamo-guida-completa"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
                >
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
