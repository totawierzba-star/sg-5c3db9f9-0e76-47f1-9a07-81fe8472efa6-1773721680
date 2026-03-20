import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-copenaghen-risarcimento";
const title = "Aeroporto Copenaghen CPH: Risarcimento Voli 2026 — fino a €600";
const description = "Volo in ritardo o cancellato a Copenaghen CPH? CE 261/2004, €400–€600, hub SAS Scandinavian Airlines, Norwegian, neve non straordinaria, TBST vs ENAC. Guida completa.";
const publishDate = "2026-03-20";

const faqData = [
  {
    question: "Quanto spetta per un volo in ritardo a Copenaghen CPH?",
    answer: "La Danimarca è nell'UE, quindi CE 261/2004 si applica pienamente. La maggior parte delle rotte dall'Italia verso Copenhagen è nella fascia 1500–3500 km → €400. Per coincidenze con destinazione finale oltre 3500 km (es. Roma–Copenhagen–New York), il risarcimento è €600. Il ritardo all'arrivo deve superare le 3 ore."
  },
  {
    question: "La neve in inverno a Copenhagen è una circostanza straordinaria?",
    answer: "No. La neve in Scandinavia è un fenomeno stagionale e prevedibile. Copenhagen Airport CPH dispone di sistemi avanzati di de-icing e procedure anti-neve consolidate. SAS e le altre compagnie devono pianificare in anticipo. I tribunali europei hanno confermato che la neve ordinaria non è circostanza straordinaria."
  },
  {
    question: "SAS è finita in bancarotta. Come funziona il reclamo CE 261?",
    answer: "SAS ha completato la ristrutturazione (Chapter 11 USA / protezione danese) ed è operativa. Per voli effettuati durante la procedura concorsuale, i diritti CE 261 potrebbero essere limitati. Per voli recenti, SAS è pienamente responsabile. ClaimWinger può valutare la tua situazione specifica."
  },
  {
    question: "Ho perso la coincidenza a Copenhagen per colpa di SAS. Quanto posso richiedere?",
    answer: "Il risarcimento si calcola sulla distanza totale con un unico PNR. Es: Roma–Copenhagen–New York (~9.700 km) → €600. Se hai prenotazioni separate, ogni tratta è indipendente e il risarcimento si calcola solo sulla tratta ritardata."
  },
  {
    question: "Norwegian opera da Copenhagen. Stessi diritti di SAS?",
    answer: "Sì. Norwegian è un vettore norvegese/irlandese registrato nell'UE/SEE. CE 261/2004 si applica pienamente ai suoi voli da aeroporti UE/SEE. Gli importi e le procedure sono identici a quelli di SAS."
  },
  {
    question: "Qual è l'autorità competente per reclami su voli da Copenhagen?",
    answer: "Per voli in partenza dalla Danimarca → TBST (Trafik-, Bygge- og Boligstyrelsen, Autorità danese dei trasporti). Per voli in partenza dall'Italia → ENAC. Puoi scegliere l'autorità del paese di partenza."
  }
];

export default function AeroportoCopenaghenRisarcimento() {
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
          <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
          <li className="mx-1">/</li>
          <li><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
          <li className="mx-1">/</li>
          <li className="text-gray-700 font-medium">Aeroporto Copenaghen CPH Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Hub Europei</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 8 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Copenaghen CPH: Risarcimento Voli 2026 — fino a €600
          </h1>
          <p className="text-lg text-gray-600">
            Copenhagen Airport (CPH) è il principale hub della Scandinavia e la base di SAS Scandinavian Airlines. Se hai subito un ritardo o una cancellazione, la Danimarca è nell&apos;UE e hai diritto fino a <strong>€400–€600 di risarcimento</strong> ai sensi del CE 261/2004. Scopri come ottenerlo.
          </p>
        </header>

        {/* Info aeroporto */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-blue-900 text-lg mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Copenhagen Airport (CPH) — dati chiave
          </h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div><strong>Codice IATA:</strong> CPH</div>
            <div><strong>Nome ufficiale:</strong> Kastrup Lufthavn (Copenhagen Airport Kastrup)</div>
            <div><strong>Posizione:</strong> 8 km a est del centro di Copenaghen (confine danese-svedese)</div>
            <div><strong>Terminali:</strong> Terminal 1 (Schengen, domestici), Terminal 2 (extra-Schengen), Terminal 3 (principale, hub SAS)</div>
            <div><strong>Vettore principale:</strong> SAS Scandinavian Airlines (SK)</div>
            <div><strong>Autorità CE 261:</strong> TBST (Trafik-, Bygge- og Boligstyrelsen)</div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo in ritardo da o per Copenaghen CPH?</p>
            <p className="text-blue-100 text-sm">Hai diritto fino a €600. ClaimWinger verifica gratuitamente — 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Verifica ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Importi CE 261 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-blue-600" /> Importi di risarcimento per voli da/per Copenaghen
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
                  ["Roma FCO → Copenaghen CPH", "~2.000 km", "€400"],
                  ["Milano MXP → Copenaghen CPH", "~1.750 km", "€400"],
                  ["Venezia VCE → Copenaghen CPH", "~1.800 km", "€400"],
                  ["Napoli NAP → Copenaghen CPH", "~2.200 km", "€400"],
                  ["Roma → Copenaghen → New York JFK", "~9.700 km (totale)", "€600"],
                  ["Milano → Copenaghen → Chicago ORD", "~9.200 km (totale)", "€600"],
                  ["Roma → Copenaghen → Tokyo NRT", "~11.700 km (totale)", "€600"],
                ].map(([route, dist, comp]) => (
                  <tr key={route} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{route}</td>
                    <td className="px-4 py-2 text-gray-600">{dist}</td>
                    <td className={`px-4 py-2 font-bold ${comp === "€600" ? "text-red-700" : "text-orange-700"}`}>{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs">* Le ultime tre rotte presuppongono un unico PNR. Risarcimento basato sulla destinazione finale.</p>
        </section>

        {/* SAS e Norwegian */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-600" /> SAS, Norwegian e Ryanair a Copenaghen
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left px-4 py-3">Vettore</th>
                  <th className="text-left px-4 py-3">Codice</th>
                  <th className="text-left px-4 py-3">CE 261 applicabile?</th>
                  <th className="text-left px-4 py-3">Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["SAS Scandinavian Airlines", "SK", "Sì (vettore UE/SEE)", "Hub principale CPH. Voli Nord America, Asia, Medio Oriente."],
                  ["Norwegian Air", "DY/D8", "Sì (vettore UE/SEE)", "Basi a CPH. Lungo raggio verso USA sospeso/ridotto."],
                  ["easyJet", "U2", "Sì (vettore UE)", "Rotte europee da CPH T1."],
                  ["Ryanair", "FR", "Sì (vettore UE)", "Opera anche da Malmö (MMX, Svezia), non CPH."],
                  ["Wizz Air", "W6", "Sì (vettore UE)", "Rotte Europa Est da CPH."],
                ].map(([carrier, code, ce, note]) => (
                  <tr key={carrier} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{carrier}</td>
                    <td className="px-4 py-2 font-bold text-blue-700">{code}</td>
                    <td className="px-4 py-2 text-green-700 font-medium">{ce}</td>
                    <td className="px-4 py-2 text-gray-600 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Neve e gelo a Copenaghen: quando non è straordinaria
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> <span><strong>Neve invernale</strong> stagionale e prevedibile in Scandinavia</span></li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> <span><strong>Ghiaccio sulle piste</strong> — CPH ha procedure de-icing avanzate</span></li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all&apos;aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale SAS/Norwegian</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Bufera eccezionale e imprevedibile</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC (controllori traffico aereo)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura dello spazio aereo</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Emergenze di sicurezza aeroportuale</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Come fare reclamo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" /> Come fare reclamo per voli da/per Copenaghen CPH
          </h2>
          <ol className="space-y-3">
            {[
              { step: "1", title: "Conserva i documenti", text: "Carta d'imbarco, conferma prenotazione e prova del ritardo. Tieni anche le ricevute di pasti o hotel sostenuti per causa del ritardo." },
              { step: "2", title: "Invia reclamo al vettore", text: "Per SAS: flysas.com → Customer Service → Complaints. Indica numero volo (SK + numero), data, rotta e importo CE 261 richiesto (€400 per rotte Italia–Copenhagen). Attendi 14 giorni." },
              { step: "3", title: "Escalation TBST o ENAC", text: "Se il volo partiva dalla Danimarca → TBST (tbst.dk). Se partiva dall'Italia → ENAC (enac.gov.it). Entrambe sono autorità CE 261 competenti." },
              { step: "4", title: "Affida a ClaimWinger", text: "ClaimWinger gestisce i reclami contro SAS e Norwegian senza anticipo — 30% solo al successo." }
            ].map(item => (
              <li key={item.step} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                <span className="bg-blue-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
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
            <Info className="w-6 h-6 text-blue-600" /> Autorità competenti
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">TBST — Danimarca</h3>
              <p className="text-green-700 text-sm mb-2">Trafik-, Bygge- og Boligstyrelsen (Autorità danese dei trasporti). Competente per voli in partenza dalla Danimarca, incluso CPH.</p>
              <p className="text-green-600 text-xs">tbst.dk — Flypassagerer (Passeggeri aerei)</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-800 mb-2">ENAC — Italia</h3>
              <p className="text-blue-700 text-sm mb-2">Competente per voli in partenza dall&apos;Italia verso Copenaghen, anche se il vettore è SAS o Norwegian.</p>
              <p className="text-blue-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo per Copenaghen CPH in ritardo o cancellato?</p>
            <p className="text-blue-100 text-sm">Hai diritto fino a €600. ClaimWinger gestisce il reclamo anche contro SAS e Norwegian. 30% solo al successo.</p>
          </div>
          <a
            href={`https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center gap-2 whitespace-nowrap"
          >
            Inizia ora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" /> Domande frequenti su Copenaghen CPH e CE 261/2004
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
              { slug: "sas-scandinavian-airlines-risarcimento", title: "SAS Scandinavian Airlines: Risarcimento 2026" },
              { slug: "norwegian-risarcimento", title: "Norwegian: Risarcimento Voli 2026" },
              { slug: "aeroporto-amsterdam-risarcimento", title: "Aeroporto Amsterdam AMS: Risarcimento 2026" },
            ].map(a => (
              <Link key={a.slug} href={`/it/blog/${a.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-blue-300 group">
                <p className="font-semibold text-gray-800 group-hover:text-blue-600 text-sm">{a.title}</p>
                <p className="text-blue-600 text-xs mt-2 flex items-center gap-1">Leggi <ArrowRight className="w-3 h-3" /></p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}
