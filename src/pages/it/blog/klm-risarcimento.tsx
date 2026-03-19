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

export default function KlmRisarcimento() {
  return (
    <LayoutIt>
      <SEO
        title="KLM Risarcimento: Guida Completa per Ritardi e Cancellazioni [2026]"
        description="Volo KLM in ritardo o cancellato? Scopri come ottenere fino a €600 di risarcimento. Procedura di reclamo, documenti necessari e tempi di risposta KLM."
        url="https://lotproblem.pl/it/blog/klm-risarcimento"
      />

      {/* Schema Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "KLM Risarcimento: Guida Completa per Ritardi e Cancellazioni 2026",
            "description": "Come ottenere risarcimento da KLM per voli in ritardo o cancellati secondo CE 261/2004.",
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
              "@id": "https://lotproblem.pl/it/blog/klm-risarcimento",
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
                name: "KLM paga il risarcimento per ritardi e cancellazioni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. KLM Royal Dutch Airlines è soggetta al Regolamento CE 261/2004 e deve risarcire €250–€600 per ritardi di 3 ore o più. KLM è generalmente considerata tra le compagnie più collaborative nel rispettare i diritti dei passeggeri, anche se i tempi possono variare da 4 a 10 settimane.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto spetta per un volo KLM in ritardo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "€250 per voli fino a 1.500 km, €400 per distanze tra 1.500 e 3.500 km, €600 per voli oltre 3.500 km. Per voli intercontinentali con ritardo tra 3 e 4 ore KLM può ridurre a €300.",
                },
              },
              {
                "@type": "Question",
                name: "Come si fa reclamo a KLM?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Puoi presentare reclamo sul sito klm.com nella sezione Contattaci → Reclamo per volo, oppure tramite email a customer.care@klm.com. Allega boarding pass, conferma prenotazione e specifica orario previsto e effettivo di arrivo, oltre al tuo IBAN.",
                },
              },
              {
                "@type": "Question",
                name: "KLM rimborsa anche per scali ad Amsterdam Schiphol?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. Se perdi una coincidenza a Schiphol per colpa di un ritardo KLM e arrivi alla destinazione finale con 3 ore o più di ritardo, hai diritto al risarcimento calcolato sulla distanza totale del viaggio (non solo del tratto ritardato).",
                },
              },
              {
                "@type": "Question",
                name: "Quanto tempo ha KLM per rispondere?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "KLM risponde in media entro 6–10 settimane. In caso di mancata risposta puoi rivolgerti all'ILT (Inspectie Leefomgeving en Transport), l'autorità olandese di vigilanza sull'aviazione, o affidarti a una società specializzata.",
                },
              },
              {
                "@type": "Question",
                name: "KLM può offrire miglia SkyMiles invece del risarcimento in contanti?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "KLM può proporre miglia del programma Flying Blue (condiviso con Air France) come alternativa al pagamento in euro. Hai sempre il diritto di richiedere il pagamento in contanti. Le miglia possono avere un valore conveniente solo se sei un frequente viaggiatore con KLM o Air France.",
                },
              },
              {
                "@type": "Question",
                name: "Posso chiedere risarcimento KLM per un volo di 2 anni fa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In Italia il termine è 2 anni dalla data del volo. Nei Paesi Bassi (paese di KLM) il termine è 2 anni secondo il diritto olandese. Se il volo è partito da un altro paese UE, si applica il diritto di quel paese (es. Germania: 3 anni).",
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
              <li className="text-gray-900 font-medium">KLM Risarcimento</li>
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
              KLM Risarcimento: Come Ottenere Fino a €600 per Ritardi e Cancellazioni [2026]
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Volo KLM Royal Dutch Airlines in ritardo di 3 ore o più, cancellato o con coincidenza persa
              ad Amsterdam Schiphol? Hai diritto a un risarcimento fino a <strong>€600</strong> per
              passeggero. Ecco la guida completa con procedura, documenti e tempi di risposta.
            </p>
          </header>

          {/* Quick summary */}
          <div className="bg-sky-50 border-l-4 border-sky-500 p-6 mb-8 rounded-r-xl">
            <h2 className="font-bold text-sky-900 text-lg mb-3">In Sintesi — KLM e CE 261/2004</h2>
            <ul className="space-y-2 text-sky-800 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Ritardo ≥3 ore all'arrivo → <strong>€250, €400 o €600</strong> a seconda della distanza</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Valido per tutti i voli KLM in partenza da aeroporti UE (inclusi Roma, Milano, Napoli ecc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Coincidenza persa a Schiphol per colpa KLM → risarcimento sulla distanza totale</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Termine prescrizione: 2 anni in Italia, 2 anni in Olanda</span>
              </li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-sky-600 flex-shrink-0" />
              Quanto Spetta per un Volo KLM in Ritardo?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              KLM Royal Dutch Airlines, con base all'aeroporto di Amsterdam Schiphol, è una compagnia
              europea soggetta al{" "}
              <Link href="/it/blog/regolamento-ce-261-2004-spiegato" className="text-blue-600 hover:underline font-semibold">
                Regolamento CE 261/2004
              </Link>
              . Gli importi del risarcimento dipendono esclusivamente dalla <strong>distanza del volo</strong>,
              non dal prezzo del biglietto.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="p-4 text-left rounded-tl-xl">Distanza volo</th>
                    <th className="p-4 text-left">Ritardo all'arrivo</th>
                    <th className="p-4 text-left">Risarcimento</th>
                    <th className="p-4 text-left rounded-tr-xl">Esempio rotta da Italia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-blue-50">
                    <td className="p-4 font-semibold">≤ 1.500 km</td>
                    <td className="p-4">≥ 3 ore</td>
                    <td className="p-4 font-bold text-green-700">€250</td>
                    <td className="p-4 text-gray-600">Milano–Amsterdam (~920 km)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-semibold">1.500–3.500 km</td>
                    <td className="p-4">≥ 3 ore</td>
                    <td className="p-4 font-bold text-green-700">€400</td>
                    <td className="p-4 text-gray-600">Roma–Amsterdam (~1.870 km)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-blue-50">
                    <td className="p-4 font-semibold">&gt; 3.500 km</td>
                    <td className="p-4">≥ 4 ore</td>
                    <td className="p-4 font-bold text-green-700">€600</td>
                    <td className="p-4 text-gray-600">Roma–New York via AMS</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold rounded-bl-xl">&gt; 3.500 km (extra-UE)</td>
                    <td className="p-4">3–4 ore</td>
                    <td className="p-4 font-bold text-amber-600 rounded-br-xl">€300 (ridotto 50%)</td>
                    <td className="p-4 text-gray-600">Roma–New York (ritardo 3h30)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Il Caso Più Comune: Coincidenza Persa a Schiphol
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Moltissimi passeggeri italiani transitano per l'aeroporto di Amsterdam Schiphol con KLM. Se il
              tuo volo da Roma, Milano o Napoli arriva in ritardo e perdi la coincidenza intercontinentale, il
              calcolo del risarcimento si basa sulla <strong>distanza totale fino alla destinazione finale</strong>:
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-xl">
              <h4 className="font-bold text-green-900 mb-3">Esempio Pratico</h4>
              <div className="text-gray-800 text-sm space-y-2">
                <p>• <strong>Rotta:</strong> Roma (FCO) → Amsterdam (AMS) → New York (JFK)</p>
                <p>• <strong>Volo FCO→AMS:</strong> 1 ora di ritardo</p>
                <p>• <strong>Coincidenza AMS→JFK:</strong> persa</p>
                <p>• <strong>Arrivo effettivo a New York:</strong> 7 ore dopo il previsto</p>
                <p className="font-bold text-green-800 mt-3">
                  → Distanza Roma–New York: ~8.000 km → <strong>Risarcimento: €600</strong>
                </p>
                <p className="text-green-700 text-xs">
                  (calcolato sulla distanza totale, non solo Roma–Amsterdam)
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="my-12 bg-gradient-to-br from-sky-600 to-blue-800 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Volo KLM in Ritardo o Coincidenza Persa a Schiphol?</h3>
                  <p className="text-sky-100 text-lg">
                    Verifica gratuitamente il tuo diritto al risarcimento. ClaimWinger gestisce il reclamo
                    per te: commissione del <strong className="text-white">30%</strong> solo sull'importo ottenuto.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=klm"
                    className="inline-flex items-center bg-white text-sky-700 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-all shadow-lg text-lg"
                  >
                    Verifica il Tuo Caso
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <p className="text-sky-300 text-xs mt-2 text-center">Gratis • 3 minuti</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-green-600 flex-shrink-0" />
              Come Fare Reclamo a KLM: Procedura Completa
            </h2>

            <div className="bg-gray-50 rounded-2xl p-8 my-8">
              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    title: "Documenta tutto prima di lasciare l'aeroporto",
                    body: "Fai screenshot del tabellone con gli orari effettivi, chiedi un certificato di ritardo al personale KLM al gate, conserva tutti gli scontrini (pasti, bevande, taxi, hotel) se la compagnia non ha fornito assistenza.",
                  },
                  {
                    num: 2,
                    title: "Prepara i documenti necessari",
                    body: "Boarding pass di tutti i tratti di volo (fisico o digitale), email di conferma prenotazione, documento d'identità, IBAN del conto corrente.",
                  },
                  {
                    num: 3,
                    title: "Invia il reclamo a KLM",
                    body: "Sito ufficiale: klm.com → Aiuto e contatti → Presenta un reclamo. Email: customer.care@klm.com. Specifica: numero volo(i), data, orario previsto e effettivo di arrivo alla destinazione finale, importo richiesto, IBAN.",
                  },
                  {
                    num: 4,
                    title: "Attendi risposta (6–10 settimane)",
                    body: "KLM può impiegare fino a 10 settimane per i casi più complessi. Conserva la ricevuta di invio del reclamo con data e orario.",
                  },
                  {
                    num: 5,
                    title: "Escalation se necessario",
                    body: "Se KLM non risponde o rifiuta illegittimamente: ILT (Inspectie Leefomgeving en Transport) è l'autorità olandese di vigilanza. In Italia puoi contattare l'ENAC. In alternativa, affidati a ClaimWinger per la gestione legale.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="bg-sky-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
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
              Quando KLM Può e Non Può Rifiutare il Risarcimento
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div>
                <h3 className="font-bold text-green-800 mb-3">✅ Rifiuto Legittimo</h3>
                <div className="space-y-2">
                  {[
                    "Maltempo eccezionale non prevedibile",
                    "Sciopero controllori traffico aereo",
                    "Chiusura spazio aereo (es. cenere vulcanica)",
                    "Emergenze di sicurezza",
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
                    "Sciopero personale KLM",
                    "Ritardo per rotazione aereo",
                    "Overbooking",
                    "Problemi di manutenzione programmata",
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
              <Plane className="h-8 w-8 text-sky-600 flex-shrink-0" />
              KLM e Air France: Come Distinguere Codeshare e Interline
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              KLM e Air France fanno parte del gruppo Air France-KLM ma rimangono entità giuridicamente
              distinte. Per i voli in codeshare, il reclamo va sempre al <strong>vettore operante</strong>:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full font-mono font-bold">KL</span>
                  <span className="text-gray-700">Codice KLM → reclamo a <strong>KLM Royal Dutch Airlines</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-mono font-bold">AF</span>
                  <span className="text-gray-700">Codice Air France → reclamo a <strong>Air France</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-mono font-bold">KL su AF</span>
                  <span className="text-gray-700">Biglietto AF, operato KL → reclamo a <strong>KLM</strong></span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Assistenza in Aeroporto: Diritti Aggiuntivi a Schiphol
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Indipendentemente dal ritardo di 3 ore all'arrivo, se il tuo volo KLM è in ritardo alla
              <em>partenza</em> hai diritto a:
            </p>

            <div className="space-y-3 my-6">
              {[
                { soglia: "2+ ore (voli ≤1.500 km)", diritto: "Pasti e bevande in proporzione all'attesa, 2 telefonate/email gratuite" },
                { soglia: "3+ ore (voli 1.500–3.500 km)", diritto: "Pasti e bevande, 2 telefonate/email gratuite" },
                { soglia: "4+ ore (voli >3.500 km)", diritto: "Pasti e bevande, 2 telefonate/email gratuite" },
                { soglia: "Pernottamento necessario", diritto: "Hotel + trasferimento aeroporto–hotel a carico di KLM" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-sky-50 p-4 rounded-xl text-sm">
                  <CheckCircle2 className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.soglia}</p>
                    <p className="text-gray-700 mt-0.5">{item.diritto}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA 2 — prima della FAQ */}
            <div className="my-12 bg-gradient-to-br from-teal-600 to-sky-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">KLM Non Risponde o Ha Rifiutato il Tuo Reclamo?</h3>
                <p className="text-teal-100 mb-6 text-lg">
                  ClaimWinger gestisce per te tutta la procedura: dalla prima lettera di reclamo all'azione
                  legale se necessario. Paghi solo il <strong className="text-white">30%</strong> dell'importo
                  recuperato — nessun costo se il reclamo non va a buon fine.
                </p>
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=klm"
                  className="inline-flex items-center bg-white text-teal-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition-all shadow-lg"
                >
                  Affida il Caso a ClaimWinger
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <p className="text-teal-200 text-sm mt-4">
                  ✓ Zero costi anticipati &nbsp;•&nbsp; ✓ 30% solo se vinciamo &nbsp;•&nbsp; ✓ Gestione legale inclusa
                </p>
              </div>
            </div>

            {/* FAQ */}
            <section className="mt-12 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Domande Frequenti su KLM e il Risarcimento
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "KLM paga il risarcimento per ritardi e cancellazioni?",
                    a: "Sì. KLM Royal Dutch Airlines è soggetta al Regolamento CE 261/2004 e deve risarcire €250–€600 per ritardi di 3 ore o più. KLM è generalmente collaborativa nel rispettare i diritti dei passeggeri, con tempi di risposta che variano tra 4 e 10 settimane.",
                  },
                  {
                    q: "Quanto spetta per un volo KLM in ritardo?",
                    a: "€250 per voli fino a 1.500 km (es. Milano–Amsterdam), €400 per distanze tra 1.500 e 3.500 km (es. Roma–Amsterdam), €600 per voli oltre 3.500 km (es. Roma–New York via Schiphol). Per intercontinentali con ritardo 3–4 ore, KLM può ridurre a €300.",
                  },
                  {
                    q: "Come si fa reclamo a KLM?",
                    a: "Sul sito klm.com nella sezione Aiuto → Presenta un reclamo, oppure via email a customer.care@klm.com. Allega boarding pass, conferma prenotazione e specifica orario previsto e effettivo di arrivo alla destinazione finale, più il tuo IBAN.",
                  },
                  {
                    q: "KLM rimborsa anche per coincidenze perse a Schiphol?",
                    a: "Sì. Se perdi una coincidenza a Schiphol per colpa di un ritardo KLM e arrivi alla destinazione finale con 3+ ore di ritardo, hai diritto al risarcimento calcolato sulla distanza totale del viaggio.",
                  },
                  {
                    q: "Quanto tempo ha KLM per rispondere?",
                    a: "KLM risponde in media entro 6–10 settimane. In caso di mancata risposta puoi rivolgerti all'ILT (autorità olandese) o all'ENAC in Italia, oppure a ClaimWinger per la gestione legale.",
                  },
                  {
                    q: "KLM può offrire miglia Flying Blue invece del risarcimento in contanti?",
                    a: "Può proporle, ma hai sempre il diritto di richiedere il pagamento in euro. Accettare le miglia significa rinunciare al cash — conviene solo se sei un frequente viaggiatore con KLM o Air France.",
                  },
                  {
                    q: "Posso chiedere risarcimento KLM per un volo di 2 anni fa?",
                    a: "In Italia il termine è 2 anni dalla data del volo. In Olanda (paese di KLM) è anch'esso 2 anni. Se il volo è partito da un paese UE con termini più lunghi (es. 3 anni in Germania), si applica il diritto di quel paese.",
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
                <Link href="/it/blog/air-france-risarcimento"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Air France Risarcimento</h3>
                  <p className="text-sm text-gray-600">Guida completa per il gruppo Air France-KLM</p>
                </Link>
                <Link href="/it/blog/da-quante-ore-ritardo-diritto-risarcimento"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Da Quante Ore Scatta il Risarcimento?</h3>
                  <p className="text-sm text-gray-600">La regola delle 3 ore spiegata in dettaglio</p>
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
