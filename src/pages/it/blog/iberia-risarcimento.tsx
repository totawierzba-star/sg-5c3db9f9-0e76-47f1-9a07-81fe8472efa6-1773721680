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

export default function IberiaRisarcimento() {
  return (
    <LayoutIt>
      <SEO
        title="Iberia Risarcimento: Come Ottenere Fino a €600 per Ritardi e Cancellazioni [2026]"
        description="Volo Iberia in ritardo o cancellato? Guida completa al risarcimento CE 261/2004: importi, procedura reclamo passo-passo, Iberia vs Vueling e tempi di risposta."
        url="https://lotproblem.pl/it/blog/iberia-risarcimento"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Iberia Risarcimento: Come Ottenere Fino a €600 per Ritardi e Cancellazioni 2026",
            "description": "Guida completa al risarcimento Iberia per voli in ritardo o cancellati. Procedura, importi CE 261/2004 e differenza con Iberia Express e Vueling.",
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
              "@id": "https://lotproblem.pl/it/blog/iberia-risarcimento",
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
                name: "Iberia paga il risarcimento per i voli in ritardo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. Iberia è una compagnia europea soggetta al CE 261/2004. Deve pagare €250–€600 per voli in ritardo di 3 ore o più. Iberia risponde mediamente entro 4–8 settimane, ma può invocare circostanze straordinarie — documentare bene il caso è fondamentale.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto spetta per un volo Iberia in ritardo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "€250 per voli fino a 1.500 km, €400 per voli tra 1.500 e 3.500 km, €600 per voli oltre 3.500 km. Per voli intercontinentali extra-UE con ritardo tra 3 e 4 ore, Iberia può ridurre a €300.",
                },
              },
              {
                "@type": "Question",
                name: "Come si fa reclamo a Iberia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Puoi presentare reclamo su iberia.com nella sezione Assistenza clienti → Reclami, oppure tramite email a customerrelations@iberia.es. Iberia accetta anche reclami cartacei presso i propri uffici aeroportuali.",
                },
              },
              {
                "@type": "Question",
                name: "Qual è la differenza tra Iberia, Iberia Express e Vueling?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sono tre compagnie distinte del gruppo IAG. Iberia opera voli intercontinentali e alcune rotte europee (codice IB). Iberia Express è la low-cost per rotte europee (codice I2). Vueling è un'altra low-cost IAG (codice VY). Il reclamo va sempre al vettore che ha operato il volo, non a chi ha venduto il biglietto.",
                },
              },
              {
                "@type": "Question",
                name: "Iberia rimborsa anche per scali a Madrid Barajas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. Se perdi una coincidenza a Madrid (MAD) per colpa di un ritardo Iberia e arrivi alla destinazione finale con 3+ ore di ritardo, hai diritto al risarcimento calcolato sulla distanza totale. La prenotazione deve essere unica (stesso PNR).",
                },
              },
              {
                "@type": "Question",
                name: "Iberia paga in contanti o solo in punti Iberia Plus?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Iberia può proporre punti del programma Iberia Plus come compensazione alternativa, talvolta con un bonus rispetto al valore in euro. Hai sempre il diritto di richiedere il pagamento in denaro. I punti convengono solo se sei un frequente viaggiatore con Iberia.",
                },
              },
              {
                "@type": "Question",
                name: "Posso chiedere risarcimento Iberia per un volo Roma-Madrid cancellato?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. Roma–Madrid è circa 1.950 km, quindi rientra nella fascia 1.500–3.500 km: spettano €400 per passeggero in caso di cancellazione senza preavviso di 14 giorni o ritardo di 3+ ore.",
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
              <li className="text-gray-900 font-medium">Iberia Risarcimento</li>
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
              Iberia Risarcimento: Come Ottenere Fino a €600 per Ritardi e Cancellazioni [2026]
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Volo Iberia in ritardo di 3 ore o più, cancellato o coincidenza persa a Madrid Barajas?
              Hai diritto a fino a <strong>€600 di risarcimento</strong> per passeggero. Attenzione: Iberia,
              Iberia Express e Vueling sono compagnie diverse — questa guida chiarisce tutto.
            </p>
          </header>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-xl">
            <h2 className="font-bold text-yellow-900 text-lg mb-3">Iberia, Iberia Express o Vueling? Conta il Codice Volo</h2>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              {[
                { code: "IB", name: "Iberia", note: "Voli intercontinentali e alcuni europei → reclamo a Iberia" },
                { code: "I2", name: "Iberia Express", note: "Rotte europee low-cost → reclamo a Iberia Express" },
                { code: "VY", name: "Vueling", note: "Low-cost IAG → reclamo a Vueling" },
              ].map((item) => (
                <div key={item.code} className="bg-white p-3 rounded-lg border border-yellow-200">
                  <span className="bg-yellow-200 text-yellow-900 px-2 py-0.5 rounded font-mono font-bold text-xs">{item.code}</span>
                  <p className="font-semibold text-gray-900 mt-1">{item.name}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-orange-600 flex-shrink-0" />
              Importi del Risarcimento Iberia
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Iberia è una compagnia spagnola pienamente soggetta al{" "}
              <Link href="/it/blog/regolamento-ce-261-2004-spiegato" className="text-blue-600 hover:underline font-semibold">
                Regolamento CE 261/2004
              </Link>
              . Gli importi dipendono dalla distanza del volo, non dal prezzo pagato:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="p-4 text-left rounded-tl-xl">Distanza</th>
                    <th className="p-4 text-left">Ritardo arrivo</th>
                    <th className="p-4 text-left">Risarcimento</th>
                    <th className="p-4 text-left rounded-tr-xl">Esempio rotta Italia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-orange-50">
                    <td className="p-4 font-semibold">≤ 1.500 km</td>
                    <td className="p-4">≥ 3 ore</td>
                    <td className="p-4 font-bold text-green-700">€250</td>
                    <td className="p-4 text-gray-600">Milano–Barcellona (~730 km)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold">1.500–3.500 km</td>
                    <td className="p-4">≥ 3 ore</td>
                    <td className="p-4 font-bold text-green-700">€400</td>
                    <td className="p-4 text-gray-600">Roma–Madrid (~1.950 km)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-orange-50">
                    <td className="p-4 font-semibold">&gt; 3.500 km</td>
                    <td className="p-4">≥ 4 ore</td>
                    <td className="p-4 font-bold text-green-700">€600</td>
                    <td className="p-4 text-gray-600">Roma–Buenos Aires via MAD</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold rounded-bl-xl">&gt; 3.500 km (extra-UE)</td>
                    <td className="p-4">3–4 ore</td>
                    <td className="p-4 font-bold text-amber-600 rounded-br-xl">€300 (ridotto 50%)</td>
                    <td className="p-4 text-gray-600">Roma–New York via MAD (3h30)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-6">
              <h3 className="font-bold text-orange-900 mb-3">Rotte Iberia più Comuni dall'Italia</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  { rotta: "Roma (FCO) – Madrid (MAD)", km: "~1.950 km", importo: "€400" },
                  { rotta: "Milano (MXP) – Madrid (MAD)", km: "~1.520 km", importo: "€400" },
                  { rotta: "Milano (MXP) – Barcellona (BCN)", km: "~730 km", importo: "€250" },
                  { rotta: "Napoli (NAP) – Madrid (MAD)", km: "~2.000 km", importo: "€400" },
                  { rotta: "Roma – Buenos Aires via MAD", km: ">10.000 km", importo: "€600" },
                  { rotta: "Milano – São Paulo via MAD", km: ">9.000 km", importo: "€600" },
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
            <div className="my-12 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Volo Iberia in Ritardo o Cancellato?</h3>
                  <p className="text-orange-100 text-lg">
                    Verifica in 2 minuti se hai diritto al risarcimento. ClaimWinger gestisce tutto —
                    commissione del <strong className="text-white">30%</strong> solo sull'importo ottenuto.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=iberia"
                    className="inline-flex items-center bg-white text-orange-700 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all shadow-lg text-lg"
                  >
                    Verifica il Tuo Caso
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <p className="text-orange-300 text-xs mt-2 text-center">Gratis • Nessun rischio</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-green-600 flex-shrink-0" />
              Come Fare Reclamo a Iberia: Procedura Passo-Passo
            </h2>

            <div className="bg-gray-50 rounded-2xl p-8 my-8">
              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    title: "Documenta il disservizio",
                    body: "Screenshot del tabellone con orari effettivi, richiedi attestazione del ritardo al personale Iberia al gate, conserva scontrini di pasti o hotel se Iberia non ha fornito assistenza.",
                  },
                  {
                    num: 2,
                    title: "Identifica il vettore operante",
                    body: "Controlla il codice sul biglietto: IB = Iberia, I2 = Iberia Express, VY = Vueling. Il reclamo va sempre al vettore operante, non a chi ha venduto il biglietto.",
                  },
                  {
                    num: 3,
                    title: "Invia il reclamo a Iberia",
                    body: "Sito: iberia.com → Assistenza clienti → Reclami. Email: customerrelations@iberia.es. Uffici aeroportuali: disponibili a Roma FCO, Milano MXP. Specifica: numero volo IB, data, orario previsto e effettivo arrivo, importo richiesto, IBAN.",
                  },
                  {
                    num: 4,
                    title: "Attendi risposta (4–8 settimane)",
                    body: "Iberia risponde mediamente entro 4–8 settimane. Per voli intercontinentali i tempi possono essere più lunghi. Conserva la ricevuta di invio del reclamo.",
                  },
                  {
                    num: 5,
                    title: "Escalation se necessario",
                    body: "Per voli da aeroporti italiani: ENAC. Per voli da Spagna: AESA (Agencia Estatal de Seguridad Aérea). Oppure affidati a ClaimWinger per la gestione legale completa.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
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
              Quando Iberia Può e Non Può Rifiutare
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div>
                <h3 className="font-bold text-green-800 mb-3">✅ Rifiuto Legittimo</h3>
                <div className="space-y-2">
                  {[
                    "Maltempo eccezionale (es. neve a Madrid)",
                    "Sciopero controllori traffico aereo spagnolo (ENAIRE)",
                    "Chiusura spazio aereo per emergenza",
                    "Emergenze di sicurezza documentate",
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
                    "Sciopero del personale Iberia",
                    "Rotazione aereo in ritardo",
                    "Overbooking / negato imbarco",
                    "Congestione a Madrid Barajas",
                  ].map((item, i) => (
                    <div key={i} className="bg-red-50 p-3 rounded-lg text-sm flex items-start gap-2">
                      <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Plane className="h-8 w-8 text-orange-600 flex-shrink-0" />
              Coincidenza Persa a Madrid Barajas
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Madrid Barajas (MAD) è uno degli hub più trafficati d'Europa. Molti passeggeri italiani
              transitano per Madrid per raggiungere destinazioni in America Latina. Se perdi la
              coincidenza per colpa di Iberia:
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-6 rounded-r-xl">
              <h4 className="font-bold text-orange-900 mb-3">Esempio: Roma → Madrid → Buenos Aires</h4>
              <div className="text-gray-800 text-sm space-y-2">
                <p>• <strong>Volo FCO→MAD (IB):</strong> 40 minuti di ritardo</p>
                <p>• <strong>Coincidenza MAD→EZE:</strong> persa</p>
                <p>• <strong>Prossimo volo disponibile:</strong> 9 ore dopo</p>
                <p>• <strong>Ritardo totale a Buenos Aires:</strong> 10 ore</p>
                <p className="font-bold text-orange-800 mt-3">
                  → Distanza Roma–Buenos Aires: ~11.000 km → <strong>Risarcimento: €600 a passeggero</strong>
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              La condizione chiave è che entrambi i voli siano sulla <strong>stessa prenotazione</strong>
              (stesso PNR). Se hai prenotazioni separate, il risarcimento va calcolato tratto per tratto.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Punti Iberia Plus o Contanti: Cosa Scegliere?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Iberia può proporre il pagamento in punti Iberia Plus con un bonus rispetto al valore in
              euro (es. €400 diventano 60.000 punti invece dei 40.000 standard). Valuta con attenzione:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-4 text-left rounded-tl-lg">Opzione</th>
                    <th className="p-4 text-left">Valore</th>
                    <th className="p-4 text-left rounded-tr-lg">Quando conviene</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold">Pagamento in euro</td>
                    <td className="p-4">€250 / €400 / €600</td>
                    <td className="p-4 text-green-700">Sempre, se non sei frequent flyer Iberia</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold rounded-bl-lg">Punti Iberia Plus (con bonus)</td>
                    <td className="p-4">Valore ~€0,006–0,01/punto</td>
                    <td className="p-4 text-amber-600 rounded-br-lg">Solo se voli spesso con Iberia/BA</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Hai <strong>sempre il diritto di richiedere il pagamento in denaro</strong>. Accettare i
              punti è una scelta irrevocabile — non puoi cambiarla dopo.
            </p>

            {/* CTA 2 */}
            <div className="my-12 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">Non Vuoi Gestire il Reclamo a Iberia da Solo?</h3>
                <p className="text-yellow-100 mb-6 text-lg">
                  ClaimWinger conosce le procedure Iberia e gestisce tutto in italiano: dalla lettera di
                  reclamo all'eventuale azione legale. Commissione del{" "}
                  <strong className="text-white">30%</strong> solo sull'importo recuperato — zero se non
                  vinciamo.
                </p>
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=iberia"
                  className="inline-flex items-center bg-white text-orange-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-lg"
                >
                  Affida il Reclamo a ClaimWinger
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <p className="text-yellow-200 text-sm mt-4">
                  ✓ Zero costi anticipati &nbsp;•&nbsp; ✓ 30% solo se vinciamo &nbsp;•&nbsp; ✓ Gestione legale inclusa
                </p>
              </div>
            </div>

            {/* FAQ */}
            <section className="mt-12 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Domande Frequenti su Iberia e il Risarcimento
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Iberia paga il risarcimento per i voli in ritardo?",
                    a: "Sì. Iberia è soggetta al CE 261/2004 e deve pagare €250–€600 per voli in ritardo di 3 ore o più. Risponde mediamente entro 4–8 settimane.",
                  },
                  {
                    q: "Quanto spetta per un volo Iberia in ritardo?",
                    a: "€250 per voli fino a 1.500 km (es. Milano–Barcellona), €400 per voli tra 1.500 e 3.500 km (es. Roma–Madrid → €400), €600 per voli oltre 3.500 km.",
                  },
                  {
                    q: "Come si fa reclamo a Iberia?",
                    a: "Su iberia.com → Assistenza clienti → Reclami, oppure via email a customerrelations@iberia.es. Specifica numero volo IB, data, orario arrivo previsto e effettivo, importo richiesto e IBAN.",
                  },
                  {
                    q: "Qual è la differenza tra Iberia, Iberia Express e Vueling?",
                    a: "Sono tre compagnie distinte del gruppo IAG. Iberia (IB): voli intercontinentali e alcuni europei. Iberia Express (I2): low-cost europea. Vueling (VY): low-cost IAG. Il reclamo va sempre al vettore che ha operato il volo.",
                  },
                  {
                    q: "Iberia rimborsa anche per coincidenze perse a Madrid?",
                    a: "Sì, se la prenotazione è unica (stesso PNR) e arrivi alla destinazione finale con 3+ ore di ritardo. Il risarcimento si calcola sulla distanza totale, non solo sul tratto ritardato.",
                  },
                  {
                    q: "Iberia paga in contanti o solo in punti Iberia Plus?",
                    a: "Può proporre punti Iberia Plus come alternativa, ma hai sempre il diritto di richiedere il pagamento in euro. I punti possono convenire solo se sei frequent flyer Iberia.",
                  },
                  {
                    q: "Posso chiedere risarcimento per un volo Roma–Madrid cancellato?",
                    a: "Sì. Roma–Madrid è ~1.950 km (fascia 1.500–3.500 km): spettano €400 per passeggero in caso di cancellazione senza preavviso di 14 giorni o ritardo di 3+ ore.",
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
                <Link href="/it/blog/british-airways-risarcimento"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">British Airways Risarcimento</h3>
                  <p className="text-sm text-gray-600">Guida completa per l'altro vettore IAG</p>
                </Link>
                <Link href="/it/blog/air-france-risarcimento"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Air France Risarcimento</h3>
                  <p className="text-sm text-gray-600">Come ottenere il rimborso da Air France</p>
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
