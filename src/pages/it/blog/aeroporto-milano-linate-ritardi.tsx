import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function AeroportoMilanoLinateRitardi() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il codice IATA dell'aeroporto di Milano Linate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il codice IATA dell'aeroporto di Milano Linate è LIN. Questo codice va indicato nei moduli di reclamo quando si specifica l'aeroporto di partenza o arrivo."
        }
      },
      {
        "@type": "Question",
        "name": "Quali compagnie aeree operano a Milano Linate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Milano Linate è uno scalo europeo di medio raggio. Le principali compagnie sono ITA Airways (hub principale), Lufthansa, Air France, British Airways, easyJet e altre compagnie europee. Ryanair non opera a Linate — usa Bergamo Orio al Serio (BGY)."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo in ritardo da Linate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dipende dalla distanza della rotta: voli fino a 1500 km (es. Roma, Barcellona breve) → €250; voli 1500–3500 km (es. Londra, Parigi, Madrid, Amsterdam) → €400; voli oltre 3500 km → €600. Il ritardo deve essere di almeno 3 ore all'arrivo."
        }
      },
      {
        "@type": "Question",
        "name": "Qual è la differenza tra Linate (LIN) e Malpensa (MXP)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Linate (LIN) è l'aeroporto cittadino di Milano, a circa 7 km dal centro, e ospita principalmente voli europei di linea. Malpensa (MXP) è il principale aeroporto internazionale, a 50 km da Milano, con voli intercontinentali e molte low-cost. Per i risarcimenti, entrambi seguono il CE 261/2004 — la procedura è identica."
        }
      },
      {
        "@type": "Question",
        "name": "A chi presentare il reclamo per un volo in ritardo a Linate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il reclamo va presentato alla compagnia aerea operatrice (non all'aeroporto di Linate, che non è responsabile del ritardo). Se la compagnia rifiuta o non risponde entro 30 giorni, si può escalare all'ENAC (Ente Nazionale per l'Aviazione Civile), l'autorità di vigilanza italiana."
        }
      },
      {
        "@type": "Question",
        "name": "Linate ha avuto una chiusura di 3 mesi nel 2019 — questo cambia qualcosa per i reclami attuali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. La chiusura di Linate nel 2019 (luglio-ottobre) per lavori di ristrutturazione ha influenzato le operazioni in quel periodo specifico, ma non ha nessun effetto sulle procedure di reclamo attuali. Se hai avuto un problema in quel periodo, la prescrizione è di 2 anni, quindi non è più reclamabile."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aeroporto Milano Linate (LIN): Ritardi, Cancellazioni e Risarcimenti 2026",
    "description": "Volo in ritardo o cancellato a Milano Linate (LIN)? Scopri i tuoi diritti CE 261/2004, quali compagnie operano, gli importi e come presentare reclamo.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Milano Linate (LIN): Ritardi, Cancellazioni e Risarcimenti 2026"
        description="Volo in ritardo o cancellato a Milano Linate (LIN)? Scopri i tuoi diritti CE 261/2004, quali compagnie operano, gli importi e come presentare reclamo."
        canonicalUrl="https://claimwinger.com/it/blog/aeroporto-milano-linate-ritardi"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2">
              <Link href="/it/blog" className="hover:text-blue-600">Blog</Link>
            </li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">
              Aeroporto Milano Linate
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Aeroporti</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />9 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Milano Linate (LIN): Ritardi, Cancellazioni e Risarcimenti 2026
          </h1>
          <p className="text-xl text-gray-600">
            Il volo da Linate è in ritardo o cancellato? Hai diritto a fino a <strong>€600 di risarcimento</strong> secondo il Regolamento CE 261/2004. Questa guida spiega tutto ciò che devi sapere sull'aeroporto cittadino di Milano.
          </p>
        </header>

        {/* Airport overview */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-blue-900 mb-2">Aeroporto Milano Linate — dati chiave</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-blue-800">
                <div><strong>Codice IATA:</strong> LIN</div>
                <div><strong>Codice ICAO:</strong> LIML</div>
                <div><strong>Distanza dal centro:</strong> ~7 km</div>
                <div><strong>Terminale:</strong> Unico</div>
                <div><strong>Tipo voli:</strong> Europei e nazionali</div>
                <div><strong>Gestore:</strong> SEA Milano Aeroporti</div>
              </div>
            </div>
          </div>
        </div>

        {/* Linate vs Malpensa */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-500" />
            Linate vs Malpensa: le differenze che contano per i passeggeri
          </h2>
          <p className="text-gray-600 mb-4">
            Milano ha due aeroporti principali operati dallo stesso gestore (SEA). Capire le differenze ti aiuta a sapere da dove stai volando e quale normativa si applica.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Caratteristica</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Milano Linate (LIN)</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Milano Malpensa (MXP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Distanza dal centro</td>
                  <td className="p-3">~7 km (20 min auto)</td>
                  <td className="p-3">~50 km (45-60 min auto)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Tipo di voli</td>
                  <td className="p-3">Europei di linea, nazionali</td>
                  <td className="p-3">Intercontinentali, europei, low-cost</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Compagnie principali</td>
                  <td className="p-3">ITA Airways, Lufthansa, Air France, BA, easyJet</td>
                  <td className="p-3">Ryanair, easyJet, Wizz Air, ITA, Emirates, Delta</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Voli low-cost Ryanair</td>
                  <td className="p-3 text-red-600">No (usa BGY o MXP)</td>
                  <td className="p-3 text-green-600">Sì (T2)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">CE 261/2004</td>
                  <td className="p-3 text-green-600 font-semibold">Sì — piena copertura</td>
                  <td className="p-3 text-green-600 font-semibold">Sì — piena copertura</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Autorità di vigilanza</td>
                  <td className="p-3">ENAC</td>
                  <td className="p-3">ENAC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Airlines at Linate */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Compagnie aeree a Milano Linate e come reclamare
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">AZ</span>
                ITA Airways (hub principale)
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                ITA Airways usa Linate come secondo hub dopo Fiumicino per le rotte nazionali ed europee. In caso di ritardo o cancellazione, il reclamo va presentato al servizio clienti ITA e, se non risolto, escalato all'<strong>ENAC</strong>.
              </p>
              <div className="text-xs text-gray-500">Reclami: ita-airways.com → Assistenza</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">LH</span>
                Lufthansa
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Lufthansa opera voli LIN–FRA e LIN–MUC. Per voli che partono da Linate, il CE 261 italiano si applica pienamente. Reclamo online, poi — se necessario — escalation al <strong>Luftfahrt-Bundesamt</strong> tedesco o all'ENAC.
              </p>
              <div className="text-xs text-gray-500">Reclami: lufthansa.com → Servizio clienti → Reclami</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">AF</span>
                Air France
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Air France opera LIN–CDG. Per ritardi e cancellazioni da Linate, si applica il CE 261 con importo base €250 (distanza ~580 km). L'escalation va alla <strong>DGAC</strong> francese o all'ENAC italiano.
              </p>
              <div className="text-xs text-gray-500">Reclami: airfrance.it → Assistenza → Reclamo</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full">BA</span>
                British Airways
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                BA opera LIN–LHR. Per voli che partono da Linate, si applica il <strong>CE 261</strong> (€250, distanza ~1000 km). Per voli in direzione opposta (da Londra), si applica il <strong>UK261</strong> (£220). L'escalation in Italia è l'ENAC.
              </p>
              <div className="text-xs text-gray-500">Reclami: britishairways.com → Aiuto → Feedback/Reclami</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">U2</span>
                easyJet
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                easyJet opera diverse rotte da Linate verso destinazioni europee. Gli importi variano a seconda della distanza (€250–€400). Reclamo online, escalation all'ENAC italiano o alla CAA britannica (per voli da UK).
              </p>
              <div className="text-xs text-gray-500">Reclami: easyjet.com → Aiuto → Rimborsi e risarcimenti</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-teal-100 text-teal-800 text-xs px-2 py-0.5 rounded-full">KL</span>
                KLM
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                KLM opera LIN–AMS (distanza ~840 km → €250). Per cancellazioni o ritardi, il CE 261 si applica e l'escalation va all'<strong>ILT</strong> olandese o all'ENAC.
              </p>
              <div className="text-xs text-gray-500">Reclami: klm.com → Assistenza → Rimborso</div>
            </div>
          </div>
        </section>

        {/* Compensation amounts */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento: rotte principali da Linate
          </h2>
          <p className="text-gray-600 mb-4">
            L'importo dipende dalla distanza della rotta, non dalla durata del ritardo (che deve essere almeno 3 ore all'arrivo):
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Destinazione da LIN</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Fascia</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Roma (FCO/FCO)</td>
                  <td className="p-3">~475 km</td>
                  <td className="p-3">≤1500 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">ITA Airways</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Parigi (CDG)</td>
                  <td className="p-3">~580 km</td>
                  <td className="p-3">≤1500 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">Air France, easyJet</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Londra (LHR)</td>
                  <td className="p-3">~990 km</td>
                  <td className="p-3">≤1500 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">British Airways, easyJet</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Amsterdam (AMS)</td>
                  <td className="p-3">~840 km</td>
                  <td className="p-3">≤1500 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">KLM</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Francoforte (FRA)</td>
                  <td className="p-3">~680 km</td>
                  <td className="p-3">≤1500 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">Lufthansa</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Madrid (MAD)</td>
                  <td className="p-3">~1350 km</td>
                  <td className="p-3">≤1500 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">Iberia, easyJet</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Atene (ATH)</td>
                  <td className="p-3">~1290 km</td>
                  <td className="p-3">≤1500 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">Aegean, easyJet</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-amber-50">
                  <td className="p-3 font-medium">Lisbona (LIS)</td>
                  <td className="p-3">~1660 km</td>
                  <td className="p-3">1500–3500 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                  <td className="p-3">TAP, easyJet</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-amber-50">
                  <td className="p-3 font-medium">Copenaghen (CPH)</td>
                  <td className="p-3">~1520 km</td>
                  <td className="p-3">1500–3500 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                  <td className="p-3">SAS, easyJet</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-amber-50">
                  <td className="p-3 font-medium">Tel Aviv (TLV)</td>
                  <td className="p-3">~2250 km</td>
                  <td className="p-3">1500–3500 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                  <td className="p-3">El Al, ITA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">* Le distanze sono approssimate. L'importo effettivo si basa sulla distanza ortodromica calcolata dalla Commissione Europea.</p>
        </section>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo in ritardo da Milano Linate?</h3>
              <p className="text-blue-100 text-sm">
                Verifica subito il tuo diritto a €250–€600. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.
              </p>
            </div>
            <a
              href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=linate-ritardi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Delays at Linate */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Cause frequenti di ritardo a Milano Linate
          </h2>
          <p className="text-gray-600 mb-4">
            Linate è un aeroporto relativamente compatto con una sola pista. Questa configurazione può rendere i ritardi più frequenti in certi periodi. Conoscere le cause aiuta a capire se hai diritto al risarcimento.
          </p>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0">NON straord.</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Ritardi a cascata (rotazione dell'aeromobile)</h3>
                  <p className="text-gray-600 text-sm mt-1">Il tuo aereo è in ritardo perché il volo precedente era in ritardo. Causa non straordinaria — hai diritto al risarcimento se l'arrivo accumula 3+ ore.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0">NON straord.</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Guasto tecnico all'aeromobile</h3>
                  <p className="text-gray-600 text-sm mt-1">Salvo difetti nascosti certificati, i guasti tecnici rientrano nella gestione ordinaria della compagnia. Non sono circostanze straordinarie (Corte di Giustizia UE, C-549/07).</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0">Dipende</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Nebbia densa nella Pianura Padana</h3>
                  <p className="text-gray-600 text-sm mt-1">La nebbia nella stagione invernale (ottobre–febbraio) può causare riduzione della capacità. Se si tratta di condizioni meteorologiche eccezionali e non prevedibili, la compagnia può invocare la circostanza straordinaria — ma deve dimostrarlo con documentazione meteo ufficiale.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0">Straord.</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Sciopero ATC (ENAV) o limitazioni dello spazio aereo</h3>
                  <p className="text-gray-600 text-sm mt-1">Lo sciopero dei controllori di volo italiani (ENAV) è considerato circostanza straordinaria. In questi casi, la compagnia non è tenuta al risarcimento monetario, ma mantiene l'obbligo di assistenza (pasti, hotel).</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0">NON straord.</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Saturazione degli slot in alta stagione</h3>
                  <p className="text-gray-600 text-sm mt-1">Linate ha un numero limitato di slot. Il sovraffollamento in estate e durante le festività causa ritardi gestionali — non straordinari, la compagnia deve risarcire.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Procedure */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo per voli da Linate
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "In aeroporto: documenta il ritardo",
                content: "Conserva la carta d'imbarco (o il PDF). Fai uno screenshot delle informazioni sul volo mostrate sui pannelli LIN. Se il ritardo supera 2 ore, chiedi al personale a terra di indicare per iscritto il motivo del ritardo."
              },
              {
                step: "2",
                title: "Verifica la durata del ritardo all'arrivo",
                content: "La soglia è di 3 ore calcolate all'arrivo (quando si aprono le porte dell'aereo alla destinazione), non alla partenza da Linate. Un volo partito con 4 ore di ritardo ma con recupero parziale può arrivare in 3,5 ore di ritardo — diritto al risarcimento."
              },
              {
                step: "3",
                title: "Presenta reclamo formale alla compagnia",
                content: "Usa il modulo online della compagnia aerea operatrice (non dell'aeroporto). Includi: codice IATA LIN, numero volo, data, ritardo subito e IBAN. La compagnia ha 30 giorni per rispondere."
              },
              {
                step: "4",
                title: "Escalation all'ENAC se necessario",
                content: "Se la compagnia rifiuta o non risponde, presenta reclamo all'ENAC (Ente Nazionale per l'Aviazione Civile) tramite il portale ufficiale. L'ENAC può sanzionare le compagnie e ordinare il pagamento."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.step}
                </div>
                <div className="flex-1 pb-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Useful info */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Informazioni pratiche su Linate durante l'attesa
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Servizi in aeroporto</h3>
              <p className="text-gray-600 text-sm">
                Linate ha ristoranti e bar sia prima che dopo i controlli di sicurezza. In caso di lungo ritardo, la compagnia deve fornirti voucher pasto o rimborsare spese ragionevoli. Conserva le ricevute — sono rimborsabili separatamente dal risarcimento CE 261.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Trasporti da/per Linate</h3>
              <p className="text-gray-600 text-sm">
                Linate è raggiungibile con la metropolitana M4 (aperta nel 2023), autobus ATM 73 e taxi. Se hai perso un volo per colpa della compagnia e devi rientrare a casa, conserva le ricevute del trasporto — potrebbero essere rimborsabili.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Informazioni in tempo reale</h3>
              <p className="text-gray-600 text-sm">
                Il sito dell'aeroporto (milanolinate.eu) mostra lo stato dei voli in tempo reale. Fai uno screenshot che mostri il ritardo — è un documento utile per il reclamo.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Prescrizione dei reclami</h3>
              <p className="text-gray-600 text-sm">
                Per voli da Linate (Italia), la prescrizione è di <strong>2 anni</strong> dalla data del volo. Non aspettare: le prove (screenshot, email, ricevute) si perdono con il tempo.
              </p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Risparmia tempo con ClaimWinger</h3>
              <p className="text-green-100 text-sm">
                Gestiamo il reclamo al posto tuo: modulo, follow-up, escalation ENAC. Commissione: <strong>30% solo se ottieni il risarcimento</strong>. Se non otteniamo nulla, non paghi nulla.
              </p>
            </div>
            <a
              href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=linate-ritardi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors flex items-center gap-2"
            >
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Aeroporto Milano Linate</h2>
          <div className="space-y-3">
            {[
              {
                q: "Qual è il codice IATA dell'aeroporto di Milano Linate?",
                a: "Il codice IATA dell'aeroporto di Milano Linate è LIN. Questo codice va indicato nei moduli di reclamo quando si specifica l'aeroporto di partenza o arrivo."
              },
              {
                q: "Quali compagnie aeree operano a Milano Linate?",
                a: "Milano Linate è uno scalo europeo di medio raggio. Le principali compagnie sono ITA Airways (hub principale), Lufthansa, Air France, British Airways, easyJet e altre compagnie europee. Ryanair non opera a Linate — usa Bergamo Orio al Serio (BGY)."
              },
              {
                q: "Quanto risarcimento spetta per un volo in ritardo da Linate?",
                a: "Dipende dalla distanza della rotta: voli fino a 1500 km (es. Roma, Barcellona breve) → €250; voli 1500–3500 km (es. Lisbona, Copenaghen) → €400; voli oltre 3500 km → €600. Il ritardo deve essere di almeno 3 ore all'arrivo."
              },
              {
                q: "Qual è la differenza tra Linate (LIN) e Malpensa (MXP)?",
                a: "Linate (LIN) è l'aeroporto cittadino di Milano, a circa 7 km dal centro, e ospita principalmente voli europei di linea. Malpensa (MXP) è il principale aeroporto internazionale, a 50 km da Milano, con voli intercontinentali e molte low-cost. Per i risarcimenti, entrambi seguono il CE 261/2004 — la procedura è identica."
              },
              {
                q: "A chi presentare il reclamo per un volo in ritardo a Linate?",
                a: "Il reclamo va presentato alla compagnia aerea operatrice (non all'aeroporto di Linate, che non è responsabile del ritardo). Se la compagnia rifiuta o non risponde entro 30 giorni, si può escalare all'ENAC (Ente Nazionale per l'Aviazione Civile), l'autorità di vigilanza italiana."
              },
              {
                q: "La nebbia a Milano dà sempre diritto di rifiuto alla compagnia?",
                a: "No. La compagnia deve dimostrare che la nebbia era eccezionale e non prevedibile. La nebbia autunnale-invernale nella Pianura Padana è un fenomeno ricorrente e ben documentato — difficilmente qualificabile come straordinario. La compagnia deve presentare bollettini meteo ufficiali che attestino l'eccezionalità dell'evento."
              }
            ].map((item, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related articles */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Articoli correlati</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                href: "/it/blog/aeroporto-milano-malpensa-ritardi",
                title: "Aeroporto Milano Malpensa: ritardi e risarcimenti",
                excerpt: "Guida completa per voli in ritardo o cancellati a Malpensa (MXP)."
              },
              {
                href: "/it/blog/aeroporto-bergamo-orio-al-serio-risarcimento",
                title: "Aeroporto Bergamo Orio al Serio: risarcimento",
                excerpt: "Guida ai diritti passeggeri all'aeroporto di Bergamo (BGY)."
              },
              {
                href: "/it/blog/milano-parigi-ritardo-risarcimento",
                title: "Volo Milano–Parigi in Ritardo: €250",
                excerpt: "Guida per MXP/LIN/BGY→CDG/ORY con Air France, easyJet, Ryanair."
              },
              {
                href: "/it/blog/da-quante-ore-ritardo-diritto-risarcimento",
                title: "Da Quante Ore di Ritardo Hai Diritto al Risarcimento?",
                excerpt: "La soglia delle 3 ore spiegata con esempi pratici."
              }
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition-all"
              >
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
