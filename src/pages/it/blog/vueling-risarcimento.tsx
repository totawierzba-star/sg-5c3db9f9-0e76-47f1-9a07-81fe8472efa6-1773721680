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

export default function VuelingRisarcimento() {
  return (
    <LayoutIt>
      <SEO
        title="Vueling Risarcimento: Guida Completa 2026 — Fino a €600 per Ritardi e Cancellazioni"
        description="Volo Vueling in ritardo o cancellato? Scopri come ottenere fino a €600 di risarcimento CE 261/2004. Procedura, documenti e cosa fare se Vueling non risponde."
        url="https://lotproblem.pl/it/blog/vueling-risarcimento"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Vueling Risarcimento: Guida Completa 2026",
            "description": "Come ottenere risarcimento da Vueling per voli in ritardo o cancellati secondo CE 261/2004. Procedura, importi e differenza con Iberia.",
            "author": { "@type": "Organization", "name": "LotProblem.pl" },
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": { "@type": "ImageObject", "url": "https://lotproblem.pl/og-image.png" },
            },
            "datePublished": "2026-03-19",
            "dateModified": "2026-03-19",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://lotproblem.pl/it/blog/vueling-risarcimento",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Vueling paga il risarcimento CE 261/2004?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. Vueling Airlines è una compagnia spagnola del gruppo IAG, pienamente soggetta al CE 261/2004. Deve pagare €250–€600 per voli in ritardo di 3 ore o più partiti da aeroporti UE. Vueling è nota per tempi di risposta lunghi e per opporre frequentemente circostanze straordinarie — documentare bene il caso è essenziale.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto spetta per un volo Vueling in ritardo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "€250 per voli fino a 1.500 km (es. Roma–Barcellona ~1.360 km → €250), €400 per voli tra 1.500 e 3.500 km, €600 per voli oltre 3.500 km. L'importo dipende dalla distanza, non dal prezzo low-cost del biglietto.",
                },
              },
              {
                "@type": "Question",
                name: "Come si fa reclamo a Vueling?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Puoi presentare reclamo su vueling.com nella sezione Assistenza → Modulo reclamo, oppure via email a customercare@vueling.com. Vueling risponde spesso in spagnolo o inglese — i tempi medi sono 6–12 settimane.",
                },
              },
              {
                "@type": "Question",
                name: "Vueling e Iberia: a chi va il reclamo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Il reclamo va sempre al vettore operante, non a chi ha venduto il biglietto. Se il codice volo inizia per VY è Vueling, se inizia per IB è Iberia, se inizia per I2 è Iberia Express. Controlla sempre la carta d'imbarco.",
                },
              },
              {
                "@type": "Question",
                name: "Vueling opera voli dall'Italia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. Vueling opera voli da Roma Fiumicino, Milano Malpensa, Napoli, Bologna e altri aeroporti italiani principalmente verso Barcellona (hub principale) e altre destinazioni spagnole ed europee.",
                },
              },
              {
                "@type": "Question",
                name: "Posso chiedere risarcimento per un volo Vueling Roma–Barcellona in ritardo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. Roma–Barcellona è circa 1.360 km (fascia ≤1.500 km): spettano €250 per passeggero se il ritardo all'arrivo è di 3 ore o più. Se hai prenotazione unica con scalo a Barcellona verso un'altra destinazione, il calcolo è sulla distanza totale.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto tempo ha Vueling per rispondere al reclamo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vueling impiega mediamente 6–12 settimane. È considerata tra le compagnie più lente nel rispondere ai reclami. Se non ricevi risposta entro 3 mesi, puoi contattare l'AESA (Agencia Estatal de Seguridad Aérea) o l'ENAC per voli da aeroporti italiani.",
                },
              },
            ],
          }),
        }}
      />

      <article className="py-12">
        <div className="container max-w-4xl mx-auto px-4">

          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-600">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Vueling Risarcimento</li>
            </ol>
          </nav>

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
              Vueling Risarcimento: Come Ottenere Fino a €600 [2026]
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Volo Vueling in ritardo o cancellato? Nonostante i prezzi low-cost, hai diritto a un
              risarcimento fino a <strong>€600 per passeggero</strong>. Vueling è nota per rispondere
              lentamente — questa guida ti mostra come ottenerlo in modo rapido ed efficace.
            </p>
          </header>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-xl">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-yellow-900 text-lg mb-1">Low-Cost Non Significa Meno Diritti</h2>
                <p className="text-yellow-800 text-sm">
                  Anche con un biglietto Vueling da €25, hai diritto agli stessi importi di risarcimento
                  di chi ha pagato €500. Il CE 261/2004 garantisce <strong>€250, €400 o €600 fissi</strong>,
                  indipendentemente dal prezzo del biglietto.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-yellow-600 flex-shrink-0" />
              Importi del Risarcimento Vueling
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Vueling Airlines, con base a Barcellona, è una compagnia del gruppo IAG pienamente soggetta
              al{" "}
              <Link href="/it/blog/regolamento-ce-261-2004-spiegato" className="text-blue-600 hover:underline font-semibold">
                Regolamento CE 261/2004
              </Link>
              . Gli importi sono fissi per tutti i passeggeri, indipendentemente dal prezzo pagato:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-blue-600 mb-3">€250</div>
                <div className="text-sm font-bold text-gray-800 mb-2">Voli Brevi</div>
                <div className="text-xs text-gray-600">
                  ≤ 1.500 km
                  <p className="text-gray-500 mt-2">Es: Roma–Barcellona (~1.360 km), Milano–Barcellona (~730 km)</p>
                </div>
              </div>
              <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">Più comune</div>
                <div className="text-5xl font-bold text-green-600 mb-3">€400</div>
                <div className="text-sm font-bold text-gray-800 mb-2">Voli Medi</div>
                <div className="text-xs text-gray-600">
                  1.500–3.500 km
                  <p className="text-gray-500 mt-2">Es: Napoli–Barcellona (~1.600 km), Palermo–Barcellona</p>
                </div>
              </div>
              <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-purple-600 mb-3">€600</div>
                <div className="text-sm font-bold text-gray-800 mb-2">Voli Lunghi</div>
                <div className="text-xs text-gray-600">
                  &gt; 3.500 km
                  <p className="text-gray-500 mt-2">Rotte intercontinentali operate da Vueling (raro)</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h3 className="font-bold text-blue-900 mb-3">Rotte Vueling più Frequenti dall'Italia</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  { rotta: "Roma (FCO) – Barcellona (BCN)", km: "~1.360 km", importo: "€250" },
                  { rotta: "Milano (MXP) – Barcellona (BCN)", km: "~730 km", importo: "€250" },
                  { rotta: "Napoli (NAP) – Barcellona (BCN)", km: "~1.600 km", importo: "€400" },
                  { rotta: "Bologna (BLQ) – Barcellona (BCN)", km: "~1.130 km", importo: "€250" },
                  { rotta: "Roma (FCO) – Madrid (MAD) via VY", km: "~1.950 km", importo: "€400" },
                  { rotta: "Palermo (PMO) – Barcellona (BCN)", km: "~1.700 km", importo: "€400" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-3 rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900 text-xs">{item.rotta}</p>
                      <p className="text-gray-500 text-xs">{item.km}</p>
                    </div>
                    <span className="font-bold text-green-700 text-sm">{item.importo}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA 1 */}
            <div className="my-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Volo Vueling in Ritardo o Cancellato?</h3>
                  <p className="text-yellow-100 text-lg">
                    Non aspettare mesi la risposta di Vueling. ClaimWinger gestisce il reclamo in
                    italiano — commissione del <strong className="text-white">30%</strong> solo
                    sull'importo ottenuto.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=vueling"
                    className="inline-flex items-center bg-white text-yellow-700 px-8 py-4 rounded-xl font-bold hover:bg-yellow-50 transition-all shadow-lg text-lg"
                  >
                    Verifica il Tuo Caso
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <p className="text-yellow-200 text-xs mt-2 text-center">Gratis • 3 minuti</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-green-600 flex-shrink-0" />
              Come Fare Reclamo a Vueling: Procedura Passo-Passo
            </h2>

            <div className="bg-gray-50 rounded-2xl p-8 my-8">
              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    title: "Documenta il disservizio in aeroporto",
                    body: "Fai screenshot del tabellone con gli orari effettivi di partenza e arrivo. Chiedi al personale Vueling al gate un'attestazione scritta del ritardo. Conserva tutti gli scontrini per pasti, hotel o taxi sostenuti durante l'attesa.",
                  },
                  {
                    num: 2,
                    title: "Verifica il vettore operante",
                    body: "Il codice volo VY indica Vueling. Se il codice è IB è Iberia, se è I2 è Iberia Express. Puoi avere un biglietto venduto da Iberia ma operato da Vueling — il reclamo va a Vueling. Controlla sempre la carta d'imbarco.",
                  },
                  {
                    num: 3,
                    title: "Invia il reclamo a Vueling",
                    body: "Sito: vueling.com → Assistenza → Modulo reclamo CE 261. Email: customercare@vueling.com. Specifica: numero volo VY, data, aeroporto di partenza, orario previsto e effettivo di arrivo, importo richiesto (€250/€400/€600), IBAN.",
                  },
                  {
                    num: 4,
                    title: "Attendi risposta (6–12 settimane)",
                    body: "Vueling è una delle compagnie più lente nel rispondere: spesso 2–3 mesi. Conserva la ricevuta di invio con la data. Se entro 12 settimane non ricevi risposta, procedi con l'escalation.",
                  },
                  {
                    num: 5,
                    title: "Escalation se rifiutano o non rispondono",
                    body: "Per voli da aeroporti italiani: ENAC. Per voli dalla Spagna: AESA (Agencia Estatal de Seguridad Aérea). Oppure affidati a ClaimWinger per la gestione legale, senza costi anticipati.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
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
              Quando Vueling Può e Non Può Rifiutare
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Vueling è nota per invocare spesso{" "}
              <Link href="/it/blog/circostanze-straordinarie-spiegate" className="text-blue-600 hover:underline font-semibold">
                circostanze straordinarie
              </Link>{" "}
              anche quando non ne ha diritto. Sapere cosa è legittimo ti aiuta a non arrenderti al primo rifiuto:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div>
                <h3 className="font-bold text-green-800 mb-3">✅ Rifiuto Legittimo</h3>
                <div className="space-y-2">
                  {[
                    "Maltempo eccezionale documentato",
                    "Sciopero controllori traffico aereo (ATC)",
                    "Chiusura spazio aereo per cenere vulcanica o emergenza",
                    "Minaccia di sicurezza imprevedibile",
                  ].map((item, i) => (
                    <div key={i} className="bg-green-50 p-3 rounded-lg text-sm flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-red-800 mb-3">❌ Rifiuto Non Valido (hai diritto al rimborso)</h3>
                <div className="space-y-2">
                  {[
                    "Guasto tecnico (anche imprevisto)",
                    "Sciopero del personale Vueling",
                    "Aereo in ritardo dallo scalo precedente",
                    "Overbooking",
                    "Congestione all'hub di Barcellona",
                  ].map((item, i) => (
                    <div key={i} className="bg-red-50 p-3 rounded-lg text-sm flex items-start gap-2">
                      <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 my-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Vueling e i Rifiuti "Automatici"</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Molti passeggeri segnalano che Vueling risponde con un rifiuto standard invocando
                    circostanze straordinarie senza fornire prove. Secondo il CE 261/2004, <strong>l'onere
                    della prova è sulla compagnia</strong>, non sul passeggero. Un rifiuto generico senza
                    documentazione è impugnabile con alta probabilità di successo.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Plane className="h-8 w-8 text-yellow-600 flex-shrink-0" />
              Coincidenza Persa a Barcellona con Vueling
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Barcellona El Prat (BCN) è l'hub principale di Vueling. Molti passeggeri italiani
              transitano per Barcellona per raggiungere altre destinazioni. Se perdi la coincidenza
              per colpa di Vueling:
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-xl">
              <h4 className="font-bold text-yellow-900 mb-3">Come Funziona con Coincidenze</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Prenotazione unica (stesso PNR):</strong> il risarcimento si calcola sulla distanza totale fino alla destinazione finale</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ritardo alla destinazione finale ≥3 ore:</strong> diritto al risarcimento in base alla distanza totale</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span><strong>Prenotazioni separate:</strong> ogni volo va valutato individualmente — il ritardo sul primo tratto non dà diritto automatico al risarcimento per il secondo</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Assistenza in Aeroporto con Vueling
            </h2>

            <div className="space-y-3 my-6">
              {[
                { soglia: "Ritardo 2+ ore (voli ≤1.500 km)", diritto: "Pasti e bevande in proporzione all'attesa, 2 chiamate o email gratuite" },
                { soglia: "Ritardo 3+ ore (voli 1.500–3.500 km)", diritto: "Pasti e bevande, 2 chiamate o email gratuite" },
                { soglia: "Ritardo 4+ ore (voli >3.500 km)", diritto: "Pasti e bevande, 2 chiamate o email gratuite" },
                { soglia: "Pernottamento necessario", diritto: "Hotel + trasferimento a carico di Vueling" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-yellow-50 p-4 rounded-xl text-sm">
                  <CheckCircle2 className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.soglia}</p>
                    <p className="text-gray-700 mt-0.5">{item.diritto}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Come compagnia low-cost, Vueling può essere riluttante a fornire spontaneamente
              l'assistenza. Se non viene offerta, acquista pasti o hotel di tasca tua e conserva i
              <strong> ricevute originali</strong> — sono rimborsabili insieme al risarcimento monetario.
            </p>

            {/* CTA 2 */}
            <div className="my-12 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">Vueling Ha Rifiutato il Tuo Reclamo?</h3>
                <p className="text-orange-100 mb-6 text-lg">
                  Il primo rifiuto di Vueling spesso non è definitivo. ClaimWinger impugna i rifiuti
                  ingiustificati e porta il caso in mediazione o in sede legale.
                  Paghi solo il <strong className="text-white">30%</strong> dell'importo recuperato.
                </p>
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=vueling"
                  className="inline-flex items-center bg-white text-orange-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-lg"
                >
                  Impugna il Rifiuto con ClaimWinger
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <p className="text-orange-200 text-sm mt-4">
                  ✓ Zero costi anticipati &nbsp;•&nbsp; ✓ 30% solo se vinciamo &nbsp;•&nbsp; ✓ Gestione legale inclusa
                </p>
              </div>
            </div>

            {/* FAQ */}
            <section className="mt-12 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Domande Frequenti su Vueling e il Risarcimento
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Vueling paga il risarcimento CE 261/2004?",
                    a: "Sì. Vueling Airlines è una compagnia spagnola del gruppo IAG, pienamente soggetta al CE 261/2004. Deve pagare €250–€600 per voli in ritardo di 3 ore o più partiti da aeroporti UE.",
                  },
                  {
                    q: "Quanto spetta per un volo Vueling in ritardo?",
                    a: "€250 per voli fino a 1.500 km (es. Roma–Barcellona ~1.360 km → €250), €400 per voli tra 1.500 e 3.500 km (es. Napoli–Barcellona → €400), €600 per voli oltre 3.500 km. Il prezzo low-cost del biglietto non riduce l'importo.",
                  },
                  {
                    q: "Come si fa reclamo a Vueling?",
                    a: "Su vueling.com → Assistenza → Modulo reclamo, oppure via email a customercare@vueling.com. Specifica numero volo VY, data, orario arrivo previsto e effettivo, importo richiesto e IBAN. Tempi medi: 6–12 settimane.",
                  },
                  {
                    q: "Vueling e Iberia: a chi va il reclamo?",
                    a: "Il reclamo va sempre al vettore operante. Codice VY = Vueling, IB = Iberia, I2 = Iberia Express. Controlla il codice sulla carta d'imbarco, non sul biglietto venduto.",
                  },
                  {
                    q: "Vueling opera voli dall'Italia?",
                    a: "Sì. Vueling opera da Roma Fiumicino, Milano Malpensa, Napoli, Bologna, Palermo e altri aeroporti italiani, principalmente verso Barcellona e altre destinazioni spagnole ed europee.",
                  },
                  {
                    q: "Posso chiedere risarcimento per un volo Vueling Roma–Barcellona in ritardo?",
                    a: "Sì. Roma–Barcellona è ~1.360 km (fascia ≤1.500 km): spettano €250 per passeggero se il ritardo all'arrivo è di 3 ore o più.",
                  },
                  {
                    q: "Quanto tempo ha Vueling per rispondere al reclamo?",
                    a: "Vueling impiega mediamente 6–12 settimane. È tra le più lente. Se non ricevi risposta entro 3 mesi, puoi contattare l'AESA (Spagna) o l'ENAC (per voli da Italia), oppure affidarti a ClaimWinger.",
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

            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articoli Correlati</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/it/blog/iberia-risarcimento"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Iberia Risarcimento</h3>
                  <p className="text-sm text-gray-600">Guida per l'altro vettore IAG</p>
                </Link>
                <Link href="/it/blog/ryanair-italia-risarcimento"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Ryanair Risarcimento</h3>
                  <p className="text-sm text-gray-600">La guida definitiva per Ryanair</p>
                </Link>
                <Link href="/it/blog/circostanze-straordinarie-spiegate"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Circostanze Straordinarie</h3>
                  <p className="text-sm text-gray-600">Quando il rifiuto della compagnia è legittimo</p>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>
    </LayoutIt>
  );
}
