import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-istanbul-risarcimento";
const title = "Aeroporto Istanbul: Risarcimento Voli 2026 — IST, SAW e CE 261/2004";
const description = "Volo in ritardo a Istanbul IST o SAW? CE 261 si applica solo ai voli in partenza da aeroporti UE. Turkish Airlines, Pegasus, hub di transito per Asia e Africa, SHGM vs ENAC. Guida completa.";
const publishDate = "2026-03-20";

const faqData = [
  {
    question: "Il CE 261/2004 si applica ai voli in partenza da Istanbul IST?",
    answer: "No. Istanbul (Turchia) non fa parte dell'UE/SEE, quindi il CE 261/2004 non si applica ai voli in PARTENZA da Istanbul operati da vettori extra-UE. Si applica invece ai voli in PARTENZA da aeroporti UE verso Istanbul — qualsiasi vettore, anche Turkish Airlines o Pegasus."
  },
  {
    question: "Ho un volo Roma–Istanbul con Turkish Airlines in ritardo. Ho diritto al risarcimento CE 261?",
    answer: "Sì! Il volo parte da Roma (aeroporto UE), quindi il CE 261/2004 si applica. Turkish Airlines è un vettore extra-UE ma il regolamento copre tutti i voli in partenza da aeroporti UE, indipendentemente dalla nazionalità del vettore. Per Roma–Istanbul (~2.100 km), il risarcimento è €400."
  },
  {
    question: "Ho un volo Istanbul–Roma con Turkish Airlines in ritardo. Ho diritto al risarcimento?",
    answer: "No, il CE 261 non si applica. Turkish Airlines è un vettore extra-UE e il volo parte da Istanbul (Turchia, paese non UE). Potresti avere diritti in base alla normativa turca (SHGM), ma sono diversi dal CE 261. ClaimWinger può valutare le opzioni disponibili."
  },
  {
    question: "Qual è la differenza tra IST (Istanbul Airport) e SAW (Sabiha Gökçen)?",
    answer: "IST è il nuovo Istanbul Airport sul lato europeo del Bosforo, aperto nel 2019, hub principale di Turkish Airlines con oltre 80 milioni di passeggeri l'anno. SAW (Sabiha Gökçen) si trova sul lato asiatico ed è il hub di Pegasus Airlines e altre low-cost. Controlla bene il tuo biglietto: sono a circa 70 km di distanza."
  },
  {
    question: "Perdo la coincidenza a Istanbul per un ritardo del volo da Roma. Ho diritto al risarcimento?",
    answer: "Se hai un unico PNR (stessa prenotazione, es. Roma–Istanbul–Tokyo), il risarcimento si calcola sulla distanza totale Roma–Tokyo (~11.000 km = €600). Se hai due prenotazioni separate, ogni tratta è indipendente e Turkish Airlines non è obbligata a riprotegguerti gratuitamente per la seconda."
  },
  {
    question: "Qual è l'autorità competente per reclami su voli Roma–Istanbul?",
    answer: "Se il volo partiva dall'Italia → ENAC è l'autorità competente, anche se il vettore è Turkish Airlines o Pegasus. L'ENAC può aprire procedimenti contro vettori extra-UE per voli in partenza dall'Italia. Se il volo partiva da Istanbul → SHGM (autorità turca dell'aviazione civile)."
  }
];

export default function AeroportoIstanbulRisarcimento() {
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
          <li className="text-gray-700 font-medium">Aeroporto Istanbul Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">Hub Intercontinentali</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 8 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Istanbul: Risarcimento Voli 2026 — IST, SAW e CE 261/2004
          </h1>
          <p className="text-lg text-gray-600">
            Istanbul è uno dei maggiori hub di transito al mondo. Per i passeggeri italiani che volano verso o via Istanbul, i diritti CE 261/2004 dipendono dall&apos;aeroporto di partenza. Scopri quando hai diritto fino a <strong>€400–€600 di risarcimento</strong> e cosa fare in caso di ritardo o cancellazione.
          </p>
        </header>

        {/* BANNER critico extra-UE */}
        <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-red-900 text-lg mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" /> Regola fondamentale: Istanbul è in Turchia (paese extra-UE)
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-100 rounded-lg p-3">
              <p className="font-semibold text-green-800 text-sm mb-1">✅ CE 261 SI APPLICA</p>
              <p className="text-green-700 text-sm">Volo <strong>in partenza da aeroporti UE</strong> verso Istanbul — qualsiasi vettore (anche Turkish Airlines, Pegasus).</p>
              <p className="text-green-600 text-xs mt-1">Es: Roma FCO → Istanbul IST ✓</p>
            </div>
            <div className="bg-red-100 rounded-lg p-3">
              <p className="font-semibold text-red-800 text-sm mb-1">❌ CE 261 NON SI APPLICA</p>
              <p className="text-red-700 text-sm">Volo <strong>in partenza da Istanbul</strong> verso UE operato da un vettore extra-UE (Turkish Airlines, Pegasus).</p>
              <p className="text-red-600 text-xs mt-1">Es: Istanbul IST → Roma FCO con Turkish Airlines ✗</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 mt-3 border border-red-200">
            <p className="text-red-800 text-sm font-medium">⚠️ Eccezione: Istanbul IST → Roma FCO con ITA Airways (vettore UE) → CE 261 SI applica, perché il vettore operativo è europeo.</p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-red-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Roma–Istanbul in ritardo o cancellato?</p>
            <p className="text-red-100 text-sm">Hai diritto a €400. ClaimWinger verifica gratuitamente — 30% solo al successo.</p>
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

        {/* I due aeroporti di Istanbul */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-red-600" /> I due aeroporti di Istanbul: IST e SAW
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="text-left px-4 py-3">Aeroporto</th>
                  <th className="text-left px-4 py-3">Codice</th>
                  <th className="text-left px-4 py-3">Posizione</th>
                  <th className="text-left px-4 py-3">Principali vettori</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">Istanbul Airport</td>
                  <td className="px-4 py-3 font-bold text-red-700">IST</td>
                  <td className="px-4 py-3 text-gray-600">Lato europeo del Bosforo (aperto 2019)</td>
                  <td className="px-4 py-3 text-gray-600">Turkish Airlines (hub), ITA Airways, Lufthansa, easyJet</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Sabiha Gökçen</td>
                  <td className="px-4 py-3 font-bold text-red-700">SAW</td>
                  <td className="px-4 py-3 text-gray-600">Lato asiatico del Bosforo (~70 km da IST)</td>
                  <td className="px-4 py-3 text-gray-600">Pegasus Airlines (hub), Ryanair, Wizz Air</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Attenzione:</strong> IST e SAW sono a circa 70 km di distanza — non sono intercambiabili. Controlla sempre il codice aeroporto sul tuo biglietto. Un trasferimento in taxi dall&apos;uno all&apos;altro richiede 60–90 minuti con traffico.</span>
            </p>
          </div>
        </section>

        {/* Risarcimento per voli dall'Italia */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-red-600" /> Risarcimento per voli Italia–Istanbul
          </h2>
          <p className="text-gray-700 mb-4">
            Tutte le rotte dall&apos;Italia verso Istanbul cadono nella fascia 1.500–3.500 km, quindi il risarcimento standard è <strong>€400</strong> per ritardi superiori a 3 ore o cancellazioni senza preavviso adeguato.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-4 py-3">Rotta</th>
                  <th className="text-left px-4 py-3">Distanza</th>
                  <th className="text-left px-4 py-3">CE 261?</th>
                  <th className="text-left px-4 py-3">Risarcimento</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Roma FCO → Istanbul IST (Turkish Airlines)", "~2.100 km", "Sì (parte da UE)", "€400"],
                  ["Roma FCO → Istanbul IST (ITA Airways)", "~2.100 km", "Sì (parte da UE)", "€400"],
                  ["Milano MXP → Istanbul IST", "~1.900 km", "Sì (parte da UE)", "€400"],
                  ["Venezia VCE → Istanbul IST", "~1.800 km", "Sì (parte da UE)", "€400"],
                  ["Bologna BLQ → Istanbul IST", "~1.800 km", "Sì (parte da UE)", "€400"],
                  ["Istanbul IST → Roma FCO (Turkish Airlines)", "~2.100 km", "No (vettore extra-UE da extra-UE)", "—"],
                  ["Istanbul IST → Roma FCO (ITA Airways)", "~2.100 km", "Sì (vettore UE)", "€400"],
                  ["Milano BGY → Istanbul SAW (Pegasus / Ryanair)", "~1.900 km", "Sì (parte da UE)", "€400"],
                ].map(([route, dist, ce261, comp]) => (
                  <tr key={route} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{route}</td>
                    <td className="px-4 py-2 text-gray-600">{dist}</td>
                    <td className={`px-4 py-2 font-medium ${ce261.startsWith("Sì") ? "text-green-700" : "text-red-700"}`}>{ce261}</td>
                    <td className={`px-4 py-2 font-bold ${comp === "€400" ? "text-orange-700" : "text-gray-400"}`}>{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Coincidenze via Istanbul */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-red-600" /> Coincidenze via Istanbul: come calcolare il risarcimento
          </h2>
          <p className="text-gray-700 mb-4">
            Istanbul IST è uno dei principali hub di transito al mondo per Turkish Airlines, con destinazioni in Asia Centrale, Estremo Oriente, Africa e Medio Oriente. Se perdi la coincidenza per colpa del primo volo e hai un <strong>unico PNR</strong>, il risarcimento si calcola sulla distanza totale.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="text-left px-4 py-3">Percorso (stesso PNR)</th>
                  <th className="text-left px-4 py-3">Distanza totale</th>
                  <th className="text-left px-4 py-3">Risarcimento se ritardo finale ≥3h</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Roma → Istanbul → Tokyo NRT", "~11.000 km", "€600"],
                  ["Milano → Istanbul → Bangkok BKK", "~9.200 km", "€600"],
                  ["Roma → Istanbul → Nairobi NBO", "~6.200 km", "€600"],
                  ["Roma → Istanbul → Pechino PEK", "~9.600 km", "€600"],
                  ["Milano → Istanbul → Dubai DXB", "~4.700 km", "€600"],
                  ["Roma → Istanbul → Almaty ALA", "~4.500 km", "€600"],
                ].map(([route, dist, comp]) => (
                  <tr key={route} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{route}</td>
                    <td className="px-4 py-2 text-gray-600">{dist}</td>
                    <td className="px-4 py-2 font-bold text-red-700">{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Attenzione PNR separati:</strong> Se hai due prenotazioni separate (es. Roma–Istanbul su Ryanair + Istanbul–Tokyo su Turkish Airlines con codici diversi), ogni tratta è indipendente. Il ritardo del primo volo non obbliga il secondo vettore a riprotegguerti gratuitamente.</span>
            </p>
          </div>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie per voli verso Istanbul
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all&apos;aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale del vettore</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi per rotazione aerei</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Neve o ghiaccio prevedibile in inverno</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo turco (emergenze geopolitiche)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Condizioni meteo eccezionali impreviste</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC europeo all&apos;aeroporto di partenza UE</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Emergenze di sicurezza (restrizioni improvvise)</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <p className="text-yellow-800 text-sm flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Nota:</strong> La neve in inverno a Istanbul non è di per sé straordinaria. IST dispone di sistemi di de-icing avanzati. Se la compagnia invoca la neve come causa, spesso non è sufficiente per escludere il risarcimento — soprattutto se altri voli dello stesso vettore operavano normalmente.</span>
            </p>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-red-600" /> Come fare reclamo per voli Italia–Istanbul
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Verifica che il volo sia partito dall'Italia", text: "Solo i voli in partenza da aeroporti italiani (o UE) sono coperti. Conserva la carta d'imbarco come prova. Se sei partito da IST/SAW con Turkish Airlines o Pegasus, il CE 261 non si applica." },
              { step: "2", title: "Identifica il vettore operativo", text: "Il reclamo va al vettore che ha fisicamente fatto volare l'aereo (Turkish Airlines, Pegasus, ITA Airways, Ryanair ecc.), non all'agente di viaggio o tour operator." },
              { step: "3", title: "Invia reclamo scritto al vettore", text: "Usa il portale reclami della compagnia. Indica numero volo, data, distanza e importo CE 261 richiesto (€400 per rotte Italia–Istanbul). Dai 14 giorni di risposta." },
              { step: "4", title: "Escalation ENAC", text: "Se il volo partiva dall'Italia e il vettore non risponde o rifiuta ingiustificatamente → ENAC (enac.gov.it). ENAC ha competenza anche su Turkish Airlines e Pegasus per voli da aeroporti italiani." },
              { step: "5", title: "Affida a ClaimWinger", text: "ClaimWinger gestisce anche i reclami contro Turkish Airlines e Pegasus per voli da aeroporti italiani. Commissione 30% solo al successo, nessun anticipo." }
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
              <h3 className="font-bold text-green-800 mb-2">ENAC — Italia</h3>
              <p className="text-green-700 text-sm mb-2">Competente per voli in partenza dall&apos;Italia, anche operati da vettori extra-UE come Turkish Airlines o Pegasus.</p>
              <p className="text-green-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">SHGM — Turchia</h3>
              <p className="text-red-700 text-sm mb-2">Sivil Havacılık Genel Müdürlüğü (Direzione Generale Aviazione Civile turca). Competente per voli da Istanbul. Applica normativa turca, non CE 261.</p>
              <p className="text-red-600 text-xs">shgm.gov.tr — Consumer Protection</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-red-700 to-red-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Italia–Istanbul in ritardo o cancellato?</p>
            <p className="text-red-100 text-sm">Hai diritto a €400. ClaimWinger gestisce il reclamo anche contro Turkish Airlines e Pegasus. 30% solo al successo.</p>
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
            <FileText className="w-6 h-6 text-red-600" /> Domande frequenti su Istanbul IST/SAW e CE 261/2004
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
              { slug: "turkish-airlines-risarcimento", title: "Turkish Airlines: Risarcimento Voli 2026" },
              { slug: "pegasus-airlines-risarcimento", title: "Pegasus Airlines: Risarcimento Voli 2026" },
              { slug: "aeroporto-dubai-risarcimento", title: "Aeroporto Dubai DXB: Risarcimento 2026" },
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
