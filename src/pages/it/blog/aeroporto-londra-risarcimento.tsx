import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

const slug = "aeroporto-londra-risarcimento";
const title = "Aeroporto Londra: Risarcimento Voli 2026 — LHR, LGW, STN, LCY, LTN";
const description = "Volo in ritardo da Londra Heathrow, Gatwick, Stansted, City o Luton? Post-Brexit il CE 261/2004 NON si applica ai voli in partenza dal UK. Cosa fare, UK261 e diritti dei passeggeri.";
const publishDate = "2026-03-19";

const faqData = [
  {
    question: "Il CE 261/2004 si applica ai voli in partenza da Londra?",
    answer: "No, non più. Dopo la Brexit (31 gennaio 2020, fine del periodo di transizione il 31 dicembre 2020), il CE 261/2004 europeo non si applica ai voli in partenza dal Regno Unito. Il UK ha però adottato la propria normativa equivalente chiamata 'UK261' (retained EU law), che garantisce gli stessi importi (£220/£350/£520 corrispondenti circa a €250/€400/€600 al cambio)."
  },
  {
    question: "Ho un volo da Roma FCO verso Londra LHR in ritardo — qual normativa si applica?",
    answer: "Il CE 261/2004 si applica perché il volo PARTE da un aeroporto UE (Roma). Il fatto che la destinazione sia Londra non cambia nulla: conta sempre l'aeroporto di partenza. Se arrivi a Londra con oltre 3 ore di ritardo per causa del vettore, hai diritto al risarcimento CE 261."
  },
  {
    question: "Ho un volo da Londra LHR verso Roma con un vettore europeo (es. ITA Airways) — vale il CE 261?",
    answer: "Sì! Questa è un'eccezione fondamentale post-Brexit: il CE 261/2004 si applica ai voli in partenza da un paese extra-UE SOLO SE operati da un vettore con base nell'UE verso una destinazione UE. Quindi ITA Airways LHR→FCO è coperto da CE 261. British Airways LHR→FCO è coperto da UK261 (non CE 261)."
  },
  {
    question: "Qual è la differenza tra CE 261 e UK261?",
    answer: "Gli importi UK261 sono in sterline (£220/£350/£520) e le soglie di distanza sono le stesse. L'autorità competente nel UK è la CAA (Civil Aviation Authority). Le procedure sono simili ma si applicano al diritto britannico, non europeo. I passeggeri con voli puramente UK non possono rivolgersi all'ENAC."
  },
  {
    question: "Quali sono i 5 aeroporti di Londra?",
    answer: "Londra ha 5 aeroporti: Heathrow LHR (il più grande, hub British Airways e molti vettori intercontinentali), Gatwick LGW (secondo per traffico, hub easyJet), Stansted STN (hub Ryanair), London City LCY (aeroporto business nel centro città), Luton LTN (hub Wizz Air, voli low cost)."
  },
  {
    question: "Il mio aereo ha decollato da Londra con 2 ore di ritardo e sono arrivato a Roma con 3,5 ore di ritardo — ho diritto al rimborso?",
    answer: "Se il vettore era europeo (es. ITA, Alitalia, Vueling, ecc.) → CE 261. Se era britannico (BA, easyJet su tratte da UK) → UK261. In entrambi i casi hai diritto al risarcimento se arrivi alla destinazione finale con oltre 3 ore di ritardo per cause imputabili al vettore."
  }
];

export default function AeroportoLondraRisarcimento() {
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

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
          <li className="mx-1">/</li>
          <li><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
          <li className="mx-1">/</li>
          <li className="text-gray-700 font-medium">Aeroporto Londra Risarcimento</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Hub Europei</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3" /> 8 min
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Londra: Risarcimento Voli 2026 — LHR, LGW, STN, LCY, LTN
          </h1>
          <p className="text-lg text-gray-600">
            Londra ha 5 aeroporti. Dopo la Brexit, le regole di risarcimento dipendono da <strong>dove parte il volo</strong> e <strong>qual è il vettore</strong>. Questa guida chiarisce quando si applica il CE 261/2004 europeo, quando si applica l'UK261 britannico e come ottenere fino a <strong>€600 di risarcimento</strong>.
          </p>
        </header>

        {/* BANNER Brexit critico */}
        <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-red-900 text-lg mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" /> Post-Brexit: regole cambiate per i voli da Londra
          </h2>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <p className="font-semibold text-gray-800 text-sm mb-1">✅ CE 261 (UE)</p>
              <p className="text-gray-600 text-xs">Volo <strong>parte da UE</strong> (es. Roma→Londra). Qualsiasi vettore.</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <p className="font-semibold text-gray-800 text-sm mb-1">✅ CE 261 (UE)</p>
              <p className="text-gray-600 text-xs">Volo <strong>parte da Londra</strong>, operato da <strong>vettore UE</strong> verso UE (es. ITA LHR→FCO).</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <p className="font-semibold text-gray-800 text-sm mb-1">🇬🇧 UK261</p>
              <p className="text-gray-600 text-xs">Volo <strong>parte da Londra</strong>, operato da <strong>vettore UK</strong> (BA, easyJet UK, ecc.).</p>
            </div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo in ritardo su rotta Italia–Londra?</p>
            <p className="text-blue-100 text-sm">Verifica gratuitamente il tuo diritto al risarcimento. ClaimWinger gestisce anche UK261 — 30% solo se vinci.</p>
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

        {/* 5 aeroporti di Londra */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-600" /> I 5 aeroporti di Londra: quale usare
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left px-4 py-3">Aeroporto</th>
                  <th className="text-left px-4 py-3">Codice</th>
                  <th className="text-left px-4 py-3">Distanza da centro</th>
                  <th className="text-left px-4 py-3">Principali vettori</th>
                  <th className="text-left px-4 py-3">Tipo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Heathrow", "LHR", "~23 km ovest", "British Airways, Virgin, Iberia, Lufthansa", "Intercontinentale"],
                  ["Gatwick", "LGW", "~48 km sud", "easyJet, British Airways, Norwegian", "Medio raggio + intercont."],
                  ["Stansted", "STN", "~55 km nord-est", "Ryanair, Wizz Air", "Low cost europeo"],
                  ["London City", "LCY", "~10 km est", "British Airways CityFlyer, Luxair", "Business, breve raggio"],
                  ["Luton", "LTN", "~51 km nord", "Wizz Air, easyJet, TUI", "Low cost vacanziero"],
                ].map(([name, code, dist, carriers, type]) => (
                  <tr key={code} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium">{name}</td>
                    <td className="px-4 py-2 font-bold text-blue-700">{code}</td>
                    <td className="px-4 py-2 text-gray-600 text-xs">{dist}</td>
                    <td className="px-4 py-2 text-gray-600 text-xs">{carriers}</td>
                    <td className="px-4 py-2 text-gray-600 text-xs">{type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            <strong>Attenzione:</strong> "Londra" sui siti low cost può significare STN (55 km dal centro), LTN (51 km) o LGW (48 km). Controlla sempre il codice aeroporto prima di prenotare.
          </p>
        </section>

        {/* CE 261 vs UK261 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" /> CE 261/2004 vs UK261: la guida definitiva post-Brexit
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-4 py-3">Scenario</th>
                  <th className="text-left px-4 py-3">Vettore</th>
                  <th className="text-left px-4 py-3">Normativa</th>
                  <th className="text-left px-4 py-3">Autorità</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Roma → Londra (qualsiasi)", "Qualsiasi", "CE 261/2004 ✅", "ENAC (Italia)"],
                  ["Londra → Roma", "ITA Airways (UE)", "CE 261/2004 ✅", "CAA (UK) o ENAC"],
                  ["Londra → Roma", "British Airways (UK)", "UK261 🇬🇧", "CAA (UK)"],
                  ["Londra → Roma", "Ryanair (IE, UE)", "CE 261/2004 ✅", "CAA (UK) o IAA (IE)"],
                  ["Londra → Roma", "easyJet (UK)", "UK261 🇬🇧", "CAA (UK)"],
                  ["Londra → New York", "British Airways (UK)", "UK261 🇬🇧", "CAA (UK)"],
                  ["Londra → New York", "Lufthansa (DE, UE)", "CE 261/2004 ✅", "CAA (UK) o LBA"],
                ].map(([scenario, carrier, rule, auth]) => (
                  <tr key={scenario + carrier} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{scenario}</td>
                    <td className="px-4 py-2 text-gray-600 text-sm">{carrier}</td>
                    <td className={`px-4 py-2 font-medium text-sm ${rule.includes("CE 261") ? "text-green-700" : "text-blue-700"}`}>{rule}</td>
                    <td className="px-4 py-2 text-gray-600 text-xs">{auth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Importi risarcimento */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-blue-600" /> Importi risarcimento CE 261 e UK261
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">CE 261/2004 (vettori UE)</h3>
              <div className="space-y-2">
                <div className="bg-green-50 border border-green-200 rounded p-3 flex justify-between">
                  <span className="text-sm">≤ 1.500 km</span>
                  <span className="font-bold text-green-700">€ 250</span>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded p-3 flex justify-between">
                  <span className="text-sm">1.500–3.500 km</span>
                  <span className="font-bold text-yellow-700">€ 400</span>
                </div>
                <div className="bg-red-50 border border-red-200 rounded p-3 flex justify-between">
                  <span className="text-sm">&gt; 3.500 km</span>
                  <span className="font-bold text-red-700">€ 600</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">UK261 (vettori UK da UK)</h3>
              <div className="space-y-2">
                <div className="bg-green-50 border border-green-200 rounded p-3 flex justify-between">
                  <span className="text-sm">≤ 1.500 km</span>
                  <span className="font-bold text-green-700">£ 220 (~€260)</span>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded p-3 flex justify-between">
                  <span className="text-sm">1.500–3.500 km</span>
                  <span className="font-bold text-yellow-700">£ 350 (~€415)</span>
                </div>
                <div className="bg-red-50 border border-red-200 rounded p-3 flex justify-between">
                  <span className="text-sm">&gt; 3.500 km</span>
                  <span className="font-bold text-red-700">£ 520 (~€620)</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            Gli importi UK261 in sterline possono risultare leggermente diversi in euro in base al tasso di cambio del giorno. Le soglie di distanza e le condizioni di applicazione sono identiche a CE 261.
          </p>
        </section>

        {/* Rotte dall'Italia verso Londra */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-600" /> Rotte principali Italia–Londra e risarcimenti
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-4 py-3">Rotta</th>
                  <th className="text-left px-4 py-3">Distanza</th>
                  <th className="text-left px-4 py-3">Risarcimento</th>
                  <th className="text-left px-4 py-3">Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Roma FCO ↔ Londra LHR", "~1.440 km", "€250", "Borderline — verifica distanza esatta"],
                  ["Roma FCO ↔ Londra LGW", "~1.450 km", "€250", "Borderline — alcune sentenze danno €400"],
                  ["Milano MXP ↔ Londra LHR", "~980 km", "€250", "≤1500 km confermato"],
                  ["Milano BGY ↔ Londra STN", "~990 km", "€250", "Ryanair, ≤1500 km"],
                  ["Venezia VCE ↔ Londra LHR", "~1.120 km", "€250", "≤1500 km"],
                  ["Napoli NAP ↔ Londra LGW", "~1.640 km", "€400", ">1500 km confermato"],
                  ["Palermo PMO ↔ Londra LGW", "~2.000 km", "€400", ">1500 km"],
                  ["Catania CTA ↔ Londra STN", "~2.100 km", "€400", ">1500 km"],
                ].map(([route, dist, comp, note]) => (
                  <tr key={route} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-sm">{route}</td>
                    <td className="px-4 py-2 text-gray-600">{dist}</td>
                    <td className={`px-4 py-2 font-bold ${comp === "€400" ? "text-yellow-700" : "text-green-700"}`}>{comp}</td>
                    <td className="px-4 py-2 text-gray-500 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Circostanze straordinarie */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" /> Circostanze straordinarie negli aeroporti londinesi
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">NON straordinarie (diritto al rimborso)</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Congestione traffico aereo a Heathrow (cronica)</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Guasto tecnico all'aereo</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero del personale della compagnia</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Overbooking</li>
                <li className="flex items-start gap-1"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Nebbia ordinaria di Londra (LHR ha ILS Cat III)</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">POSSONO essere straordinarie</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sciopero ATC (NATS — National Air Traffic Services)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chiusura aeroporto per emergenze di sicurezza</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Condizioni meteo eccezionali (neve insolita, tempesta)</li>
                <li className="flex items-start gap-1"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Drone spotted — blocco operazioni (verificato)</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <p className="text-blue-800 text-sm flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Heathrow LHR e la nebbia:</strong> Heathrow è dotato del sistema ILS Cat III (Instrument Landing System di categoria III), che consente l'atterraggio anche con visibilità quasi zero. La nebbia ordinaria di Londra NON è una circostanza straordinaria per LHR, a differenza di aeroporti non equipaggiati con Cat III.</span>
            </p>
          </div>
        </section>

        {/* Autorità */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" /> Autorità di vigilanza competenti
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-800 mb-2">CAA — Regno Unito</h3>
              <p className="text-blue-700 text-sm mb-2">Civil Aviation Authority. Competente per voli in partenza da aeroporti UK e per UK261.</p>
              <p className="text-blue-600 text-xs">caa.co.uk — Passenger Advice and Complaints</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">ENAC — Italia</h3>
              <p className="text-green-700 text-sm mb-2">Competente per voli in partenza dagli aeroporti italiani verso UK.</p>
              <p className="text-green-600 text-xs">enac.gov.it — Sportello reclami</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-purple-800 mb-2">ADR UK</h3>
              <p className="text-purple-700 text-sm mb-2">Alternative Dispute Resolution — schemi certificati dalla CAA per risolvere dispute senza tribunale.</p>
              <p className="text-purple-600 text-xs">CEDR, Aviation ADR, ombudsman schemes</p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Volo in ritardo su rotta Italia–Londra?</p>
            <p className="text-blue-100 text-sm">ClaimWinger gestisce sia CE 261 (voli da Italia) che UK261 (voli vettori UE da UK). Commissione 30% solo al successo.</p>
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
            <FileText className="w-6 h-6 text-blue-600" /> Domande frequenti sugli aeroporti di Londra e CE 261/2004
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

        {/* Related articles */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Articoli correlati</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "british-airways-risarcimento", title: "British Airways: Risarcimento Voli 2026 — CE 261/UK261" },
              { slug: "aeroporto-amsterdam-risarcimento", title: "Aeroporto Amsterdam AMS: Risarcimento Voli 2026" },
              { slug: "roma-londra-ritardo-risarcimento", title: "Roma–Londra volo in ritardo: guida al risarcimento" },
            ].map(a => (
              <Link
                key={a.slug}
                href={`/it/blog/${a.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-blue-300 group"
              >
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
