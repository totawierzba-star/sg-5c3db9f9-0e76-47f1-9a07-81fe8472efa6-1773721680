import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-dubai-risarcimento";
const title = "Aeroporto Dubai DXB: Risarcimento Voli 2026 — CE 261/2004 e diritti passeggeri";
const description = "Volo in ritardo a Dubai DXB o DWC? CE 261 si applica solo ai voli in partenza da aeroporti UE. Emirates, flydubai, regole post-Brexit, GCAA vs ENAC. Guida completa.";
const publishDate = "2026-03-19";

const faqData = [
  {
    question: "Il CE 261/2004 si applica ai voli in partenza da Dubai DXB?",
    answer: "No. Dubai non fa parte dell'UE/SEE, quindi il CE 261/2004 non si applica ai voli in PARTENZA da Dubai. Si applica invece ai voli in ARRIVO a Dubai che partono da aeroporti UE (es. Roma FCO → Dubai DXB con Emirates o ITA Airways)."
  },
  {
    question: "Ho un volo Roma–Dubai con Emirates in ritardo. Ho diritto al risarcimento CE 261?",
    answer: "Sì! Il volo parte da Roma (aeroporto UE), quindi il CE 261/2004 si applica. Emirates è un vettore extra-UE ma il regolamento copre tutti i voli in partenza da aeroporti UE, indipendentemente dalla nazionalità del vettore. Per Roma–Dubai (~5.100 km), il risarcimento è €600."
  },
  {
    question: "Ho un volo Dubai–Roma con Emirates in ritardo. Ho diritto al risarcimento?",
    answer: "No, il CE 261 non si applica. Emirates è un vettore extra-UE e il volo parte da Dubai (paese extra-UE). Potresti avere diritti in base alla normativa degli Emirati Arabi Uniti, ma sono diversi. Considera ClaimWinger che conosce anche le normative extra-UE applicabili."
  },
  {
    question: "Qual è la differenza tra DXB e DWC (Al Maktoum)?",
    answer: "DXB (Dubai International Airport) è il principale aeroporto, hub di Emirates, il più trafficato al mondo per passeggeri internazionali. DWC (Al Maktoum International Airport) è il secondo aeroporto di Dubai, attualmente usato principalmente da flydubai e cargo. Il nuovo mega-aeroporto DWC è in espansione ma DXB rimane dominante."
  },
  {
    question: "Cosa succede se perdo la coincidenza a Dubai per colpa di Emirates?",
    answer: "Se il tuo biglietto era su un unico PNR (es. Roma–Dubai–Bangkok), il ritardo si calcola sulla destinazione finale. Se il volo partiva da Roma, il CE 261 si applica e il risarcimento si basa sulla distanza totale Roma–Bangkok (~9.300 km = €600)."
  },
  {
    question: "Qual è l'autorità competente per reclami su voli Roma–Dubai?",
    answer: "Se il volo partiva dall'Italia → ENAC è l'autorità competente, anche se il vettore è Emirates. L'ENAC può aprire procedimenti contro vettori extra-UE per voli in partenza dall'Italia."
  }
];

export default function AeroportoDubaiRisarcimento() {
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
          <li><Link href="/it" className="hover:text-amber-600">Home</Link></li>
          <li className="mx-1">/</li>
          <li><Link href="/it/blog" className="hover:text-amber-600">Blog</Link></li>
          <li className="mx-1">/</li>
          <li className="text-gray-700 font-medium">Aeroporto Dubai Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded">Hub Intercontinentali</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 8 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Dubai DXB: Risarcimento Voli 2026 — CE 261/2004 e diritti passeggeri
          </h1>
          <p className="text-lg text-gray-600">
            Dubai DXB è il secondo aeroporto più trafficato al mondo. Per i passeggeri italiani che volano verso o via Dubai, le regole CE 261/2004 dipendono dall'aeroporto di partenza e dal vettore. Questa guida chiarisce quando hai diritto fino a <strong>€600 di risarcimento</strong>.
          </p>
        </header>

        {/* BANNER critico extra-UE */}
        <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-amber-900 text-lg mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" /> Regola fondamentale per Dubai (paese extra-UE)
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-100 rounded-lg p-3">
              <p className="font-semibold text-green-800 text-sm mb-1">✅ CE 261 SI APPLICA</p>
              <p className="text-green-700 text-sm">Volo <strong>in partenza da aeroporti UE</strong> verso Dubai — qualsiasi vettore (anche Emirates, flydubai).</p>
              <p className="text-green-600 text-xs mt-1">Es: Roma FCO → Dubai DXB ✓</p>
            </div>
            <div className="bg-red-100 rounded-lg p-3">
              <p className="font-semibold text-red-800 text-sm mb-1">❌ CE 261 NON SI APPLICA</p>
              <p className="text-red-700 text-sm">Volo <strong>in partenza da Dubai</strong> verso UE operato da un vettore extra-UE (Emirates, flydubai).</p>
              <p className="text-red-600 text-xs mt-1">Es: Dubai DXB → Roma FCO con Emirates ✗</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 mt-3 border border-amber-200">
            <p className="text-amber-800 text-sm font-medium">⚠️ Eccezione: Dubai DXB → Roma FCO con vettore UE (es. ITA Airways LHR→FCO codeshare su EK) → CE 261 SI applica se il vettore operativo è europeo.</p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-amber-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Roma–Dubai in ritardo o cancellato?</p>
            <p className="text-amber-100 text-sm">Hai diritto a €600. ClaimWinger verifica gratuitamente — 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-amber-600 font-bold px-6 py-3 rounded-lg hover:bg-amber-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Verifica ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Due aeroporti di Dubai */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-amber-600" /> I due aeroporti di Dubai: DXB e DWC
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-600 text-white">
                  <th className="text-left px-4 py-3">Aeroporto</th>
                  <th className="text-left px-4 py-3">Codice</th>
                  <th className="text-left px-4 py-3">Terminali</th>
                  <th className="text-left px-4 py-3">Principali vettori</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">Dubai International</td>
                  <td className="px-4 py-3 font-bold text-amber-700">DXB</td>
                  <td className="px-4 py-3 text-gray-600">T1 (partner Emirates), T2 (low cost), T3 (Emirates)</td>
                  <td className="px-4 py-3 text-gray-600">Emirates (T3), flydubai, altri</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Al Maktoum International</td>
                  <td className="px-4 py-3 font-bold text-amber-700">DWC</td>
                  <td className="px-4 py-3 text-gray-600">Terminal in espansione</td>
                  <td className="px-4 py-3 text-gray-600">flydubai, cargo, charter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm">
            La quasi totalità dei voli passeggeri dall'Italia arriva/parte da <strong>DXB</strong> (Dubai International). DWC è prevalentemente hub cargo e per flydubai su alcune rotte.
          </p>
        </section>

        {/* Risarcimento per voli dall'Italia */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-amber-600" /> Risarcimento per voli Italia–Dubai
          </h2>
          <p className="text-gray-700 mb-4">
            La distanza Roma FCO–Dubai DXB è circa 5.100 km, quindi superiore alla soglia dei 3.500 km. Per tutti i voli in partenza dall'Italia verso Dubai, il risarcimento massimo è <strong>€600</strong>.
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
                  ["Roma FCO → Dubai DXB", "~5.100 km", "Sì (parte da UE)", "€600"],
                  ["Milano MXP → Dubai DXB", "~5.200 km", "Sì (parte da UE)", "€600"],
                  ["Venezia VCE → Dubai DXB", "~4.900 km", "Sì (parte da UE)", "€600"],
                  ["Dubai DXB → Roma FCO (Emirates)", "~5.100 km", "No (vettore extra-UE da extra-UE)", "—"],
                  ["Dubai DXB → Roma FCO (ITA Airways)", "~5.100 km", "Sì (vettore UE)", "€600"],
                ].map(([route, dist, ce261, comp]) => (
                  <tr key={route} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{route}</td>
                    <td className="px-4 py-2 text-gray-600">{dist}</td>
                    <td className={`px-4 py-2 font-medium ${ce261.startsWith("Sì") ? "text-green-700" : "text-red-700"}`}>{ce261}</td>
                    <td className={`px-4 py-2 font-bold ${comp === "€600" ? "text-red-700" : "text-gray-400"}`}>{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Coincidenze via Dubai */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-amber-600" /> Coincidenze via Dubai: come calcolare il risarcimento
          </h2>
          <p className="text-gray-700 mb-4">
            Molti passeggeri italiani usano Dubai come hub di transito per raggiungere Australia, Sud-Est Asiatico o Africa orientale. La regola è semplice: se hai un <strong>unico PNR</strong> (prenotazione), il risarcimento si calcola sulla distanza totale dalla partenza alla destinazione finale.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-600 text-white">
                  <th className="text-left px-4 py-3">Percorso (stesso PNR)</th>
                  <th className="text-left px-4 py-3">Distanza totale</th>
                  <th className="text-left px-4 py-3">Risarcimento se ritardo finale ≥3h</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Roma → Dubai → Sydney", "~17.000 km", "€600"],
                  ["Milano → Dubai → Bangkok", "~9.300 km", "€600"],
                  ["Roma → Dubai → Mumbai", "~7.000 km", "€600"],
                  ["Roma → Dubai → Nairobi", "~7.300 km", "€600"],
                  ["Milano → Dubai → Singapore", "~10.900 km", "€600"],
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
              <span><strong>Attenzione PNR separati:</strong> Se hai due prenotazioni separate (es. Roma–Dubai su ITA Airways + Dubai–Sydney su Emirates con due diversi numeri di prenotazione), ogni tratta è indipendente. Se perdi il secondo volo per ritardo del primo, la seconda compagnia non è obbligata a riproteggertii gratuitamente.</span>
            </p>
          </div>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie per voli verso Dubai
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all'aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale del vettore</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ritardi per rotazione aerei</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Problemi operativi all'aeroporto di partenza UE</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura spazio aereo del Golfo (conflitti)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Tempeste di sabbia eccezionali a Dubai</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC europeo (che causa ritardo all'aeroporto di partenza UE)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Emergenze di sicurezza regionali</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-amber-600" /> Come fare reclamo per voli Italia–Dubai
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Verifica che il volo sia partito dall'Italia", text: "Solo i voli in partenza da aeroporti italiani (o UE) sono coperti. Conserva la carta d'imbarco come prova." },
              { step: "2", title: "Identifica il vettore operativo", text: "Il reclamo va al vettore che ha fisicamente fatto volare l'aereo (Emirates, ITA Airways, ecc.), non all'agente di viaggio." },
              { step: "3", title: "Invia reclamo scritto al vettore", text: "Usa il portale reclami della compagnia. Per Emirates: emirates.com/feedback. Indica numero volo, data, distanza, importo CE 261 richiesto (€600)." },
              { step: "4", title: "Escalation ENAC", text: "Se il volo partiva dall'Italia e il vettore non risponde → ENAC (enac.gov.it). ENAC ha competenza anche su vettori extra-UE per voli in partenza dall'Italia." },
              { step: "5", title: "Affida a ClaimWinger", text: "ClaimWinger gestisce anche i reclami contro Emirates e altri vettori extra-UE per voli da aeroporti italiani. 30% solo al successo." }
            ].map(item => (
              <li key={item.step} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                <span className="bg-amber-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
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
            <Info className="w-6 h-6 text-amber-600" /> Autorità competenti
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">ENAC — Italia</h3>
              <p className="text-green-700 text-sm mb-2">Competente per voli in partenza dall'Italia, anche operati da vettori extra-UE come Emirates.</p>
              <p className="text-green-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-amber-800 mb-2">GCAA — Emirati Arabi</h3>
              <p className="text-amber-700 text-sm mb-2">General Civil Aviation Authority UAE. Competente per voli da Dubai, applica normativa UAE (non CE 261).</p>
              <p className="text-amber-600 text-xs">gcaa.gov.ae — Consumer Protection</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-amber-700 to-amber-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Roma/Milano–Dubai in ritardo o cancellato?</p>
            <p className="text-amber-100 text-sm">Hai diritto a €600. ClaimWinger gestisce il reclamo anche contro Emirates. 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-amber-700 font-bold px-6 py-3 rounded-lg hover:bg-amber-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Inizia ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-amber-600" /> Domande frequenti su Dubai DXB e CE 261/2004
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
              { slug: "aeroporto-londra-risarcimento", title: "Aeroporto Londra: Risarcimento 2026 — LHR, LGW, STN" },
              { slug: "aeroporto-francoforte-risarcimento", title: "Aeroporto Francoforte FRA: Risarcimento 2026" },
              { slug: "turkish-airlines-risarcimento", title: "Turkish Airlines: Risarcimento Voli 2026" },
            ].map(a => (
              <Link key={a.slug} href={`/it/blog/${a.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-amber-300 group">
                <p className="font-semibold text-gray-800 group-hover:text-amber-600 text-sm">{a.title}</p>
                <p className="text-amber-600 text-xs mt-2 flex items-center gap-1">Leggi <ArrowRight className="w-3 h-3" /></p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}
