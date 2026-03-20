import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "roma-istanbul-volo-cancellato";
const title = "Volo Roma–Istanbul Cancellato o in Ritardo: €400 di Risarcimento — Guida 2026";
const description = "Volo Roma–Istanbul cancellato o in ritardo? Hai diritto a €400 CE 261/2004. Turkish Airlines, Pegasus, ITA Airways: procedura completa, ENAC vs SHGM. Guida 2026.";
const publishDate = "2026-03-20";

const faqData = [
  {
    question: "Quanto spetta per un volo Roma–Istanbul cancellato o in ritardo?",
    answer: "Roma FCO–Istanbul IST è circa 2.100 km, quindi nella fascia 1500–3500 km → €400 di risarcimento CE 261/2004. Il ritardo all'arrivo deve superare le 3 ore, oppure il volo deve essere stato cancellato senza alternative adeguate entro 14 giorni."
  },
  {
    question: "Turkish Airlines è extra-UE. Il CE 261 si applica al volo Roma–Istanbul?",
    answer: "Sì! Il CE 261/2004 si applica a TUTTI i voli in partenza da aeroporti UE, indipendentemente dalla nazionalità del vettore. Roma FCO è in Italia (UE), quindi Turkish Airlines deve rispettare CE 261 per i voli Roma–Istanbul. Lo stesso vale per Pegasus Airlines."
  },
  {
    question: "Ho un volo Istanbul–Roma con Turkish Airlines in ritardo. Ho diritto al risarcimento?",
    answer: "No, in questo caso il CE 261 non si applica. Il volo parte da Istanbul (Turchia, non UE) con un vettore turco. Potresti avere diritti in base alla normativa turca, ma sono diversi. Per il volo opposto (Roma → Istanbul), il CE 261 si applica pienamente."
  },
  {
    question: "Turkish Airlines mi ha dato voucher invece dei €400 in contanti. Devo accettarlo?",
    answer: "No. Il CE 261/2004 garantisce il pagamento in denaro (€400 in contanti, bonifico o carta di credito). Un voucher può essere accettato solo se lo accetti volontariamente e per iscritto. Hai il diritto di rifiutare il voucher e richiedere il pagamento in denaro."
  },
  {
    question: "Ho perso una coincidenza a Istanbul per il ritardo del volo Roma–Istanbul. Cosa succede?",
    answer: "Se hai un unico PNR (es. Roma–Istanbul–Tokyo), il risarcimento si calcola sulla distanza totale Roma–Tokyo (~11.000 km = €600). Se hai prenotazioni separate, ogni tratta è indipendente e Turkish Airlines non è obbligata a riprotegguerti per il volo Istanbul–Tokyo."
  },
  {
    question: "Qual è l'autorità competente per un volo Roma–Istanbul?",
    answer: "ENAC (Ente Nazionale per l'Aviazione Civile) è competente per i voli in partenza dall'Italia, anche se il vettore è Turkish Airlines o Pegasus. ENAC può aprire procedimenti contro vettori extra-UE per voli da aeroporti italiani."
  }
];

export default function RomaIstanbulVoloCancellato() {
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
          <li><Link href="/it" className="hover:text-purple-600">Home</Link></li>
          <li className="mx-1">/</li>
          <li><Link href="/it/blog" className="hover:text-purple-600">Blog</Link></li>
          <li className="mx-1">/</li>
          <li className="text-gray-700 font-medium">Roma–Istanbul Volo Cancellato</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">Rotte</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 9 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Volo Roma–Istanbul Cancellato o in Ritardo: €400 di Risarcimento — Guida 2026
          </h1>
          <p className="text-lg text-gray-600">
            Roma FCO–Istanbul IST è una delle rotte più trafficate verso la Turchia. Se il tuo volo è stato cancellato o è arrivato in ritardo di almeno 3 ore, hai diritto a <strong>€400 di risarcimento</strong> ai sensi del CE 261/2004 — anche con Turkish Airlines o Pegasus.
          </p>
        </header>

        {/* Importo rapido */}
        <div className="bg-purple-600 text-white rounded-xl p-5 mb-8 text-center">
          <p className="text-sm text-purple-200 mb-1">Risarcimento CE 261/2004 per Roma FCO → Istanbul IST</p>
          <p className="text-5xl font-black mb-1">€400</p>
          <p className="text-purple-200 text-sm">Distanza ~2.100 km | Fascia 1500–3500 km | Ritardo ≥3 ore o cancellazione</p>
        </div>

        {/* Regola extra-UE */}
        <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-purple-900 text-lg mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" /> Turkish Airlines è extra-UE: ma il CE 261 si applica ugualmente da Roma
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-100 rounded-lg p-3">
              <p className="font-semibold text-green-800 text-sm mb-1">✅ CE 261 SI APPLICA</p>
              <p className="text-green-700 text-sm">Volo Roma FCO → Istanbul IST con <strong>qualsiasi vettore</strong> (Turkish Airlines, Pegasus, ITA Airways). Il punto chiave è l&apos;aeroporto di PARTENZA: Roma è nell&apos;UE.</p>
            </div>
            <div className="bg-red-100 rounded-lg p-3">
              <p className="font-semibold text-red-800 text-sm mb-1">❌ CE 261 NON SI APPLICA</p>
              <p className="text-red-700 text-sm">Volo Istanbul IST → Roma FCO operato da Turkish Airlines o Pegasus. Istanbul è in Turchia (non UE) e il vettore è extra-UE.</p>
            </div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-purple-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Roma–Istanbul cancellato o in ritardo?</p>
            <p className="text-purple-100 text-sm">Hai diritto a €400. ClaimWinger verifica gratuitamente — 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-600 font-bold px-6 py-3 rounded-lg hover:bg-purple-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Verifica ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Vettori sulla rotta */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-purple-600" /> Vettori sulla rotta Roma–Istanbul
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="text-left px-4 py-3">Compagnia</th>
                  <th className="text-left px-4 py-3">Codice</th>
                  <th className="text-left px-4 py-3">Aeroporto Istanbul</th>
                  <th className="text-left px-4 py-3">CE 261 da Roma?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Turkish Airlines", "TK", "IST (Istanbul Airport)", "✅ Sì"],
                  ["Pegasus Airlines", "PC", "SAW (Sabiha Gökçen)", "✅ Sì"],
                  ["ITA Airways", "AZ", "IST (Istanbul Airport)", "✅ Sì (vettore UE)"],
                ].map(([carrier, code, apt, ce]) => (
                  <tr key={carrier} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{carrier}</td>
                    <td className="px-4 py-2 font-bold text-purple-700">{code}</td>
                    <td className="px-4 py-2 text-gray-600">{apt}</td>
                    <td className="px-4 py-2 font-semibold text-green-700">{ce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Attenzione IST vs SAW:</strong> Istanbul Airport (IST) e Sabiha Gökçen (SAW) sono a 70 km di distanza. Turkish Airlines usa IST, Pegasus usa SAW. Controlla il codice aeroporto sul tuo biglietto.</span>
            </p>
          </div>
        </section>

        {/* Cosa fare immediatamente */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Volo Roma–Istanbul cancellato: cosa fare subito in aeroporto
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Non lasciare l'aeroporto senza assistenza", text: "La compagnia deve offrirti pasti/bevande, accesso a comunicazioni (telefonate o email), e se necessario hotel+trasferimento. Chiedi il voucher assistenza allo sportello della compagnia." },
              { step: "2", title: "Chiedi il rimborso o la riprotezione", text: "Puoi scegliere: rimborso completo del biglietto OPPURE riprotezione sul primo volo disponibile verso Istanbul. Non devi accettare date lontane se hai urgenza." },
              { step: "3", title: "Documenta tutto", text: "Fotografia del tabellone con la cancellazione. Tieni la carta d'imbarco e tutti i documenti. Conserva scontrini di pasti o hotel pagati di tasca propria." },
              { step: "4", title: "Invia reclamo per €400", text: "Entro 7 giorni, invia reclamo scritto alla compagnia (Turkish Airlines, Pegasus o ITA) per i €400 di risarcimento CE 261. Questo è separato dal rimborso del biglietto." }
            ].map(item => (
              <li key={item.step} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                <span className="bg-purple-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-600" /> Quando hai SEMPRE diritto ai €400
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">Hai sicuramente diritto al risarcimento se:</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Il ritardo è dovuto a guasto tecnico dell&apos;aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Il ritardo è dovuto a sciopero del personale Turkish/Pegasus</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Il volo era in overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Il ritardo è dovuto a problemi operativi della compagnia</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-bold text-yellow-800 mb-2">Situazioni discutibili (ma spesso risarcibili):</h3>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC (dipende dal tipo)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Meteo avverso (dipende dalla gravità e prevedibilità)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Problema precedente aereo su altra rotta</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Autorità */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-purple-600" /> Autorità competenti per la rotta Roma–Istanbul
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">ENAC — Italia (per voli da Roma)</h3>
              <p className="text-green-700 text-sm mb-2">Competente per i voli in partenza dall&apos;Italia. Può procedere contro Turkish Airlines e Pegasus per voli da Roma FCO.</p>
              <p className="text-green-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-purple-800 mb-2">SHGM — Turchia (per voli da Istanbul)</h3>
              <p className="text-purple-700 text-sm mb-2">Sivil Havacılık Genel Müdürlüğü. Competente per voli da Istanbul. Non applica CE 261.</p>
              <p className="text-purple-600 text-xs">shgm.gov.tr</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo Roma–Istanbul in ritardo o cancellato?</p>
            <p className="text-purple-100 text-sm">Hai diritto a €400. ClaimWinger gestisce il reclamo anche contro Turkish Airlines e Pegasus. 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-700 font-bold px-6 py-3 rounded-lg hover:bg-purple-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Inizia ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-600" /> Domande frequenti sul volo Roma–Istanbul
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
              { slug: "aeroporto-istanbul-risarcimento", title: "Aeroporto Istanbul IST/SAW: Guida 2026" },
            ].map(a => (
              <Link key={a.slug} href={`/it/blog/${a.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-purple-300 group">
                <p className="font-semibold text-gray-800 group-hover:text-purple-600 text-sm">{a.title}</p>
                <p className="text-purple-600 text-xs mt-2 flex items-center gap-1">Leggi <ArrowRight className="w-3 h-3" /></p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}
