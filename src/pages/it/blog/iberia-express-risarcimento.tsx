import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "iberia-express-risarcimento";
const title = "Iberia Express Risarcimento: Guida Completa 2026 — Fino a €400";
const description = "Volo Iberia Express in ritardo o cancellato? Iberia Express è diversa da Iberia: guida completa CE 261/2004, differenze I2 vs IB vs VY, €250–€400, AESA vs ENAC.";
const publishDate = "2026-03-20";

const faqData = [
  {
    question: "Iberia Express è la stessa cosa di Iberia?",
    answer: "No. Iberia Express (codice I2) è una compagnia aerea separata da Iberia (codice IB), anche se entrambe fanno parte del gruppo IAG (International Airlines Group). Il reclamo CE 261 va al vettore operativo che ha effettivamente volato il tuo volo. Se il numero di volo inizia con I2, il reclamo va a Iberia Express, non a Iberia."
  },
  {
    question: "Quanto spetta per un volo Iberia Express in ritardo?",
    answer: "€250 per rotte ≤1500 km (es. Milano–Madrid ~1.400 km), €400 per rotte 1500–3500 km (es. Roma–Madrid ~1.900 km, Roma–Barcellona ~1.400 km a cavallo della soglia). La soglia è la distanza della rotta, non la distanza percorsa. Il ritardo all'arrivo deve superare le 3 ore."
  },
  {
    question: "Ho un biglietto Iberia (IB) ma l'aereo era operato da Iberia Express (I2). A chi faccio il reclamo?",
    answer: "A Iberia Express (I2). Il reclamo CE 261 va sempre al vettore operativo che ha fisicamente fatto volare l'aereo, non al vettore che ha venduto il biglietto. Se la carta d'imbarco riporta il codice I2, il reclamo è per Iberia Express."
  },
  {
    question: "Iberia Express opera rotte verso l'Italia?",
    answer: "Sì. Iberia Express opera numerose rotte spagnole verso aeroporti italiani, principalmente da/per Madrid MAD. Rotte tipiche: Madrid–Roma FCO, Madrid–Milano MXP, Madrid–Venezia VCE, Madrid–Napoli NAP, Madrid–Catania CTA. I diritti CE 261 si applicano pienamente a tutti questi voli."
  },
  {
    question: "Qual è la differenza tra Iberia Express e Vueling?",
    answer: "Entrambe fanno parte del gruppo IAG. Iberia Express (I2) si posiziona come compagnia media con servizio su rotte da Madrid, mentre Vueling (VY) è la principale low-cost del gruppo con hub a Barcellona. Se stai volando da Barcellona, probabilmente è Vueling. Da Madrid, potrebbe essere Iberia Express o Iberia."
  },
  {
    question: "Iberia Express rifiuta il mio reclamo CE 261. Cosa posso fare?",
    answer: "Se il reclamo è ingiustificatamente rifiutato, escalation ad AESA (per voli da Spagna) o ENAC (per voli da Italia). In alternativa, affida il caso a ClaimWinger che gestisce i reclami contro Iberia Express in via stragiudiziale e legale."
  }
];

export default function IberiaExpressRisarcimento() {
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
          <li className="text-gray-700 font-medium">Iberia Express Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">Compagnie Aeree</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 7 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Iberia Express Risarcimento: Guida Completa 2026 — Fino a €400
          </h1>
          <p className="text-lg text-gray-600">
            Iberia Express (codice I2) è una compagnia separata da Iberia (IB), anche se fa parte dello stesso gruppo IAG. Se il tuo volo era operato da Iberia Express e hai subito un ritardo o una cancellazione, hai diritto fino a <strong>€400 di risarcimento</strong> ai sensi del CE 261/2004. Ecco come distinguerla e come fare reclamo.
          </p>
        </header>

        {/* BANNER IAG Group */}
        <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-orange-900 text-lg mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" /> Il gruppo IAG: tre compagnie, tre entità distinte
          </h2>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 border border-orange-200 text-center">
              <p className="font-bold text-orange-700 text-lg">IB</p>
              <p className="font-semibold text-gray-800 text-sm">Iberia</p>
              <p className="text-gray-500 text-xs">Hub MAD T4-T4S. Lungo raggio, voli intercontinentali.</p>
            </div>
            <div className="bg-orange-100 rounded-lg p-3 border border-orange-300 text-center">
              <p className="font-bold text-orange-700 text-lg">I2</p>
              <p className="font-semibold text-gray-800 text-sm">Iberia Express ← questo articolo</p>
              <p className="text-gray-500 text-xs">Hub MAD. Rotte europee, feed per Iberia.</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-200 text-center">
              <p className="font-bold text-orange-700 text-lg">VY</p>
              <p className="font-semibold text-gray-800 text-sm">Vueling</p>
              <p className="text-gray-500 text-xs">Hub BCN. Low-cost europeo, molte rotte da/per Italia.</p>
            </div>
          </div>
          <p className="text-orange-800 text-sm mt-3">⚠️ Il reclamo CE 261 va al vettore <strong>operativo</strong> (chi ha fisicamente fatto volare l&apos;aereo), non alla capogruppo IAG. Controlla il numero di volo: I2 = Iberia Express, IB = Iberia, VY = Vueling.</p>
        </div>

        {/* CTA 1 */}
        <div className="bg-orange-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Iberia Express in ritardo o cancellato?</p>
            <p className="text-orange-100 text-sm">Hai diritto fino a €400. ClaimWinger verifica gratuitamente — 30% solo al successo.</p>
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

        {/* Rotte e importi */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-orange-600" /> Rotte Iberia Express Italia–Spagna e importi CE 261
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
                  ["Milano MXP → Madrid MAD", "~1.400 km", "€250"],
                  ["Roma FCO → Madrid MAD", "~1.900 km", "€400"],
                  ["Venezia VCE → Madrid MAD", "~1.840 km", "€400"],
                  ["Napoli NAP → Madrid MAD", "~1.820 km", "€400"],
                  ["Catania CTA → Madrid MAD", "~2.050 km", "€400"],
                  ["Palermo PMO → Madrid MAD", "~1.980 km", "€400"],
                  ["Roma FCO → Tenerife TFN (I2/IB)", "~3.300 km", "€400"],
                ].map(([route, dist, comp]) => (
                  <tr key={route} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{route}</td>
                    <td className="px-4 py-2 text-gray-600">{dist}</td>
                    <td className={`px-4 py-2 font-bold ${comp === "€400" ? "text-orange-700" : "text-blue-700"}`}>{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Come identificare il vettore operativo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-orange-600" /> Come identificare se il tuo volo era operato da Iberia Express
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-bold text-orange-800 mb-2">Indicatori che era Iberia Express (I2)</h3>
              <ul className="text-orange-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Numero di volo inizia con I2 (es. I2 3401)</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Carta d&apos;imbarco riporta &quot;Iberia Express&quot;</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Aereo con livrea I2 (diversa da Iberia classica)</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">Indicatori che era Iberia (IB)</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Numero di volo inizia con IB (es. IB 3411)</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Carta d&apos;imbarco riporta &quot;Iberia&quot;</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Volo intercontinentale verso America Latina</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie per Iberia Express
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all&apos;aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale Iberia Express</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi per rotazione aerei</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC (controllori del traffico aereo)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo per emergenze</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Calamità naturali imprevedibili</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-600" /> Come fare reclamo a Iberia Express
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Verifica il vettore operativo", text: "Controlla che il numero di volo inizi con I2. Se inizia con IB, il reclamo va a Iberia. Se con VY, a Vueling. Cerca il vettore operativo anche sulla conferma di prenotazione." },
              { step: "2", title: "Invia reclamo a Iberia Express", text: "Usa iberiaexpress.com → Assistenza → Reclami. Oppure tramite il portale di Iberia (flyberia.com) specificando il codice I2. Indica numero volo, data, rotta, importo CE 261 richiesto." },
              { step: "3", title: "Escalation AESA o ENAC", text: "Se il volo partiva dalla Spagna → AESA (seguridadaerea.es). Se partiva dall'Italia → ENAC (enac.gov.it). Procedi dopo 30 giorni senza risposta." },
              { step: "4", title: "Affida a ClaimWinger", text: "ClaimWinger gestisce i reclami contro Iberia Express senza anticipo — 30% solo al successo." }
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
              <h3 className="font-bold text-green-800 mb-2">AESA — Spagna</h3>
              <p className="text-green-700 text-sm mb-2">Agencia Estatal de Seguridad Aérea. Competente per voli in partenza dalla Spagna, incluso Madrid MAD.</p>
              <p className="text-green-600 text-xs">seguridadaerea.es — Derechos de los pasajeros</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-bold text-orange-800 mb-2">ENAC — Italia</h3>
              <p className="text-orange-700 text-sm mb-2">Competente per voli in partenza dall&apos;Italia, anche se il vettore è Iberia Express.</p>
              <p className="text-orange-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-orange-700 to-orange-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Iberia Express in ritardo o cancellato?</p>
            <p className="text-orange-100 text-sm">Hai diritto fino a €400. ClaimWinger gestisce il reclamo. 30% solo al successo.</p>
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
            <FileText className="w-6 h-6 text-orange-600" /> Domande frequenti su Iberia Express e CE 261/2004
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
              { slug: "iberia-risarcimento", title: "Iberia: Risarcimento Voli 2026" },
              { slug: "vueling-risarcimento", title: "Vueling: Risarcimento Voli 2026" },
              { slug: "aeroporto-madrid-risarcimento", title: "Aeroporto Madrid MAD: Risarcimento 2026" },
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
