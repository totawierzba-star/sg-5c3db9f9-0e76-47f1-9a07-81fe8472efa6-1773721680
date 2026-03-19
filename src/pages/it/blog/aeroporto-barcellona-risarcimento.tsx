import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function AeroportoBarcellonaRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il codice IATA dell'aeroporto di Barcellona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il codice IATA dell'aeroporto principale di Barcellona è BCN (Aeropuerto de Barcelona-El Prat Josep Tarradellas). Si trova a circa 12 km dal centro di Barcellona e ha due terminal principali: T1 (hub Vueling e vettori premium) e T2 (principalmente Ryanair)."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo in ritardo da Barcellona BCN verso l'Italia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per la maggior parte delle rotte BCN↔Italia: €250 (Roma, Milano, Venezia, Bologna, Napoli — tutte sotto 1.500 km). Eccezione: rotte verso Sud Italia (Catania, Palermo) superano 1.500 km → €400."
        }
      },
      {
        "@type": "Question",
        "name": "Qual è la differenza tra Barcellona BCN, Girona GRO e Reus REU?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BCN (El Prat) è l'aeroporto principale, a ~12 km da Barcellona. Girona GRO (usato come 'Barcellona Girona' da Ryanair) è a ~100 km da Barcellona. Reus REU (usato come 'Barcellona Reus' da Ryanair) è a ~110 km dalla città. Per il reclamo CE 261, conta l'aeroporto effettivo di partenza — non il nome commerciale."
        }
      },
      {
        "@type": "Question",
        "name": "Vueling ha la base a Barcellona BCN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì. Vueling (VY) ha il suo hub principale all'aeroporto di Barcellona El Prat, Terminal 1. Vueling fa parte del gruppo IAG (International Airlines Group) insieme a Iberia e British Airways. Il CE 261 si applica pienamente a tutti i voli Vueling in partenza da BCN."
        }
      },
      {
        "@type": "Question",
        "name": "Ho un volo 'Barcellona' ma non so se parte da BCN, GRO o REU: come faccio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Controlla il codice aeroporto sulla tua conferma di prenotazione o boarding pass. BCN = El Prat (12 km da Barcellona); GRO = Girona Barcellona (~100 km); REU = Reus (~110 km). Il reclamo CE 261 per un volo partito da GRO o REU si fa comunque con gli stessi diritti, ma il codice aeroporto è diverso."
        }
      },
      {
        "@type": "Question",
        "name": "A quale autorità mi rivolgo per un reclamo su un volo da Barcellona BCN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'autorità competente per i voli in partenza dalla Spagna è l'AESA (Agencia Estatal de Seguridad Aérea, aesa.gob.es). Per i voli in partenza da aeroporti italiani verso Barcellona, l'autorità è l'ENAC (enac.gov.it)."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aeroporto Barcellona El Prat (BCN): Risarcimento Voli 2026",
    "description": "Volo in ritardo o cancellato a Barcellona BCN? CE 261/2004, €250–€400, hub Vueling, BCN vs GRO vs REU, AESA vs ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Barcellona El Prat (BCN): Risarcimento Voli 2026"
        description="Volo in ritardo o cancellato a Barcellona BCN? CE 261/2004, €250–€400, hub Vueling, BCN vs Girona GRO vs Reus REU, AESA vs ENAC."
        canonical="https://claimwinger.com/it/blog/aeroporto-barcellona-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">Aeroporto Barcellona BCN</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Hub Europei</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />8 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Barcellona El Prat (BCN): Risarcimento Voli 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo in ritardo o cancellato a Barcellona? Il CE 261/2004 ti garantisce fino a <strong>€400 di risarcimento</strong>. Occhio alla distinzione tra BCN (El Prat), Girona (GRO) e Reus (REU): tre aeroporti, una sola guida.
          </p>
        </header>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-blue-900 mb-2">Aeropuerto Barcelona-El Prat — dati chiave</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-blue-800">
                <div><strong>Codice IATA:</strong> BCN</div>
                <div><strong>Codice ICAO:</strong> LEBL</div>
                <div><strong>Posizione:</strong> ~12 km dal centro di Barcellona</div>
                <div><strong>Terminal:</strong> T1 (Vueling/premium) + T2 (Ryanair/low-cost)</div>
                <div><strong>Vettore principale:</strong> Vueling (VY) — hub T1</div>
                <div><strong>Autorità CE 261:</strong> AESA (Agencia Estatal de Seguridad Aérea)</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            BCN vs Girona GRO vs Reus REU: quale aeroporto stai usando?
          </h2>
          <p className="text-gray-600 mb-4">
            Ryanair commercializza due aeroporti come "Barcellona": Girona (GRO) a ~100 km dalla città e Reus (REU) a ~110 km. Molti passeggeri italiani non si accorgono di questa differenza al momento della prenotazione. Per il reclamo CE 261, il codice aeroporto che conta è quello effettivo di partenza.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Aeroporto</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Codice</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza da Barcellona centro</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Vettori principali</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 bg-blue-50"><td className="p-3 font-bold">Barcelona El Prat</td><td className="p-3 font-bold text-blue-600">BCN</td><td className="p-3">~12 km</td><td className="p-3">Vueling, Iberia Express, easyJet, Air Europa, ITA</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Girona Barcelona</td><td className="p-3 font-medium text-amber-600">GRO</td><td className="p-3">~100 km</td><td className="p-3">Ryanair (principale operatore)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Reus Barcelona</td><td className="p-3 font-medium text-gray-600">REU</td><td className="p-3">~110 km</td><td className="p-3">Ryanair (stagionale)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-800 text-sm"><strong>Attenzione:</strong> se il tuo volo parte da GRO o REU, i tuoi diritti CE 261 sono identici a quelli da BCN. Ma l'autorità di escalation è sempre l'AESA (Spagna) per i voli in partenza da territorio spagnolo, indipendentemente dall'aeroporto.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento: rotte BCN ↔ Italia
          </h2>
          <p className="text-gray-600 mb-4">
            La maggior parte delle rotte tra Barcellona e l'Italia è sotto i 1.500 km → <strong>€250</strong>. Le eccezioni sono le rotte verso il Sud Italia (Catania, Palermo, Bari) che superano 1.500 km → <strong>€400</strong>.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Rotta</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma FCO → Barcellona BCN</td><td className="p-3">~1.145 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Vueling, Ryanair, ITA, Iberia</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Milano MXP → Barcellona BCN</td><td className="p-3">~735 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Vueling, Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Venezia VCE → Barcellona BCN</td><td className="p-3">~1.105 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Vueling, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Bologna BLQ → Barcellona BCN</td><td className="p-3">~895 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Vueling, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Napoli NAP → Barcellona BCN</td><td className="p-3">~1.390 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Vueling, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Pisa PSA → Barcellona BCN</td><td className="p-3">~1.155 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Vueling, Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Catania CTA → Barcellona BCN</td><td className="p-3">~1.540 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Vueling, Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Palermo PMO → Barcellona BCN</td><td className="p-3">~1.585 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Vueling, Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Bari BRI → Barcellona BCN</td><td className="p-3">~1.520 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair, Vueling</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">Le rotte da Centro-Nord Italia sono quasi tutte sotto 1.500 km → €250. Le rotte dal Sud Italia superano 1.500 km → €400.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-500" />
            Vueling: hub di Barcellona T1
          </h2>
          <p className="text-gray-600 mb-4">
            Vueling (VY) ha il suo hub principale al Terminal 1 di Barcellona El Prat ed è il vettore con il maggior numero di rotte verso l'Italia da BCN. Vueling fa parte del gruppo IAG (International Airlines Group), lo stesso di Iberia e British Airways.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-900 mb-2">Vueling (VY) — reclamo CE 261</h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li><strong>Portale:</strong> vueling.com → "Assistenza Clienti"</li>
                <li><strong>Tempi risposta:</strong> generalmente 2–4 settimane</li>
                <li><strong>Escalation IT (da aeroporto italiano):</strong> ENAC</li>
                <li><strong>Escalation ES (da BCN/GRO/REU):</strong> AESA</li>
                <li><strong>Importante:</strong> se il volo era operato da Iberia Express (I2), il reclamo va a Iberia Express, non a Vueling</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-bold text-orange-900 mb-2">Ryanair (FR) — Terminal T2 BCN</h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li><strong>Terminal a BCN:</strong> T2 (non T1)</li>
                <li><strong>Ryanair usa GRO e REU</strong> come alternativa a BCN</li>
                <li><strong>Portale reclami:</strong> ryanair.com</li>
                <li><strong>Escalation (da BCN/GRO/REU):</strong> AESA</li>
                <li><strong>Attenzione:</strong> GRO ≠ BCN per i tempi di trasporto verso la città</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo in ritardo da Barcellona BCN?</h3>
              <p className="text-blue-100 text-sm">€250 per rotte verso Centro-Nord Italia, €400 per Sud Italia. ClaimWinger gestisce tutto il reclamo — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=barcellona-bcn" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo per un volo da/per Barcellona
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Verifica il codice aeroporto (BCN, GRO o REU)", content: "Prima di tutto, controlla sulla tua conferma di prenotazione il codice aeroporto. BCN = El Prat; GRO = Girona; REU = Reus. I tuoi diritti CE 261 sono identici in tutti e tre i casi, ma il codice è necessario per il reclamo." },
              { step: "2", title: "Documenta il disservizio", content: "Conserva carta d'imbarco, conferma prenotazione con numero volo, ricevute spese extra (pasti, trasporti alternativi). Se il ritardo ha causato perdita di un altro volo, conserva anche quell'imbarco." },
              { step: "3", title: "Reclamo alla compagnia operante", content: "Usa il portale della compagnia (vueling.com, ryanair.com, easyjet.com, iberia.com, ecc.). Indica: numero volo, data, codice aeroporto (BCN/GRO/REU), ritardo in ore, importo CE 261 (€250 o €400) e IBAN." },
              { step: "4", title: "Escalation AESA (da Spagna) o ENAC (da Italia)", content: "Se la compagnia rifiuta o non risponde entro 30 giorni: per voli partiti da BCN/GRO/REU → AESA (aesa.gob.es); per voli partiti da aeroporti italiani verso Barcellona → ENAC (enac.gov.it)." }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{item.step}</div>
                <div className="flex-1 pb-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            Diritti specifici a Barcellona: assistenza in aeroporto
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-gray-600 text-sm mb-3">Il CE 261 prevede non solo il risarcimento monetario ma anche il <strong>diritto di assistenza</strong> durante l'attesa in aeroporto, indipendentemente dalla causa del ritardo:</p>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-3 border border-green-100">
                <h4 className="font-semibold text-green-800 text-xs uppercase mb-1">Ritardo ≥ 2 ore</h4>
                <p className="text-xs text-gray-600">Pasti e bevande gratuiti proporzionati all'attesa, accesso alle comunicazioni (telefonate, email)</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-100">
                <h4 className="font-semibold text-green-800 text-xs uppercase mb-1">Ritardo ≥ 5 ore</h4>
                <p className="text-xs text-gray-600">Diritto al rimborso del biglietto e ritorno al primo aeroporto se non vuoi più partire</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-100">
                <h4 className="font-semibold text-green-800 text-xs uppercase mb-1">Pernottamento necessario</h4>
                <p className="text-xs text-gray-600">Hotel + trasporto da/verso aeroporto a carico della compagnia in caso di cancellazione</p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo per te?</h3>
              <p className="text-indigo-100 text-sm">ClaimWinger gestisce reclami a Vueling, Ryanair, easyJet e tutti i vettori che operano da BCN. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=barcellona-bcn" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Aeroporto Barcellona BCN</h2>
          <div className="space-y-3">
            {[
              { q: "Qual è il codice IATA dell'aeroporto di Barcellona?", a: "BCN (Barcelona El Prat Josep Tarradellas). Ha due terminal: T1 (Vueling, Iberia Express, easyJet, vettori premium) e T2 (principalmente Ryanair). Dista ~12 km dal centro di Barcellona." },
              { q: "Quanto risarcimento spetta per un volo in ritardo da Barcellona verso l'Italia?", a: "€250 per la maggior parte delle rotte (Roma, Milano, Venezia, Bologna, Napoli — sotto 1.500 km). €400 per Catania, Palermo, Bari (oltre 1.500 km). Ritardo minimo: 3 ore all'arrivo." },
              { q: "Qual è la differenza tra BCN, Girona GRO e Reus REU?", a: "BCN è l'aeroporto principale a ~12 km da Barcellona. GRO (Girona) è a ~100 km, usato da Ryanair come 'Barcellona Girona'. REU (Reus) è a ~110 km, usato stagionalmente da Ryanair. I diritti CE 261 sono identici per tutti e tre." },
              { q: "Vueling ha la base a Barcellona BCN?", a: "Sì. Vueling ha il suo hub principale al Terminal T1 di Barcellona El Prat. Fa parte del gruppo IAG con Iberia e British Airways. CE 261 pienamente applicabile per tutti i voli Vueling da BCN." },
              { q: "Ho un volo 'Barcellona' ma non so se parte da BCN, GRO o REU?", a: "Controlla il codice aeroporto sulla conferma di prenotazione o boarding pass: BCN = El Prat, GRO = Girona, REU = Reus. I diritti CE 261 sono uguali in tutti i casi ma il codice cambia per il reclamo." },
              { q: "A quale autorità mi rivolgo per un reclamo su un volo da Barcellona?", a: "Per voli partiti da BCN/GRO/REU: AESA (aesa.gob.es). Per voli partiti da aeroporti italiani verso Barcellona: ENAC (enac.gov.it)." }
            ].map((item, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
                </summary>
                <div className="px-5 pb-5"><p className="text-gray-600 text-sm leading-relaxed">{item.a}</p></div>
              </details>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Articoli correlati</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { href: "/it/blog/aeroporto-madrid-risarcimento", title: "Aeroporto Madrid MAD", excerpt: "Hub LATAM, 4 terminal, €600 per coincidenze Sud America, AESA." },
              { href: "/it/blog/roma-madrid-volo-cancellato", title: "Roma–Madrid: Volo Cancellato", excerpt: "Guida CE 261 per la rotta FCO→MAD — €250/€400 e coincidenze." },
              { href: "/it/blog/ryanair-italia-risarcimento", title: "Ryanair Italia: Guida Completa", excerpt: "Come ottenere fino a €600 da Ryanair per ritardi e cancellazioni." },
              { href: "/it/blog/da-quante-ore-ritardo-diritto-risarcimento", title: "Da Quante Ore di Ritardo Hai Diritto?", excerpt: "La regola delle 3 ore spiegata con esempi pratici." }
            ].map((article) => (
              <Link key={article.href} href={article.href} className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{article.title}</h3>
                <p className="text-gray-500 text-xs">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </LayoutIt>
  );
}
