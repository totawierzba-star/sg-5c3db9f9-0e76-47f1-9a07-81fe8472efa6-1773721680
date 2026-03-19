import LayoutIt from "../../../components/LayoutIt";
import SEO from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function AeroportoBolognaRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il codice IATA dell'aeroporto di Bologna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il codice IATA dell'aeroporto di Bologna Guglielmo Marconi è BLQ. Si trova a circa 6 km dal centro di Bologna e serve anche passeggeri da Modena, Ferrara e Ravenna."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo in ritardo da Bologna BLQ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dipende dalla distanza della rotta: fino a 1500 km → €250 (es. Londra, Parigi, Barcellona); 1500–3500 km → €400 (es. Madrid lungo, Tel Aviv); oltre 3500 km → €600. Il ritardo deve essere di almeno 3 ore all'arrivo."
        }
      },
      {
        "@type": "Question",
        "name": "Ryanair opera a Bologna BLQ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, Ryanair è uno degli operatori principali a Bologna BLQ con numerose rotte europee. In caso di ritardo o cancellazione da BLQ, hai pieno diritto al risarcimento CE 261/2004. Il reclamo si presenta sul sito Ryanair; se respinto, si escalate all'ENAC."
        }
      },
      {
        "@type": "Question",
        "name": "A chi mi rivolgo se la compagnia aerea non risponde al reclamo presentato da Bologna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se la compagnia non risponde entro 30 giorni o rifiuta ingiustificatamente il risarcimento, puoi presentare reclamo all'ENAC (Ente Nazionale per l'Aviazione Civile) tramite il portale online enac.gov.it. L'ENAC è l'autorità nazionale di vigilanza per i voli da aeroporti italiani come BLQ."
        }
      },
      {
        "@type": "Question",
        "name": "Ho preso un autobus da Modena o Ferrara per arrivare a Bologna BLQ e il volo era cancellato. Posso recuperare i costi di trasporto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì. Le spese ragionevoli di trasporto sostenute durante un ritardo o dopo una cancellazione sono rimborsabili dalla compagnia aerea separatamente dal risarcimento CE 261. Conserva tutti i biglietti e ricevute. Tuttavia, le spese di trasporto per arrivare all'aeroporto prima del volo non sono coperte dal CE 261."
        }
      },
      {
        "@type": "Question",
        "name": "Qual è la prescrizione per i reclami da Bologna BLQ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per voli in partenza dall'Italia (BLQ), la prescrizione è di 2 anni dalla data del volo. Presentare reclamo il prima possibile è sempre consigliabile."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aeroporto Bologna Guglielmo Marconi (BLQ): Risarcimento Voli 2026",
    "description": "Volo in ritardo o cancellato a Bologna BLQ? Guida completa: importi CE 261, compagnie Ryanair/easyJet/ITA, procedure ENAC e diritti passeggeri.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Bologna Guglielmo Marconi (BLQ): Risarcimento Voli 2026"
        description="Volo in ritardo o cancellato a Bologna BLQ? Guida completa: importi CE 261, compagnie Ryanair/easyJet/ITA, procedure ENAC e diritti passeggeri."
        canonical="https://claimwinger.com/it/blog/aeroporto-bologna-guglielmo-marconi-risarcimento"
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
              Aeroporto Bologna BLQ
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Aeroporti</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />8 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Bologna Guglielmo Marconi (BLQ): Risarcimento Voli 2026
          </h1>
          <p className="text-xl text-gray-600">
            Hai subito un ritardo o una cancellazione a Bologna Marconi? Il Regolamento CE 261/2004 ti garantisce fino a <strong>€600 di risarcimento</strong>. Ecco la guida completa per i passeggeri in partenza o arrivo a BLQ.
          </p>
        </header>

        {/* Airport info */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-green-900 mb-2">Aeroporto Bologna Guglielmo Marconi — dati chiave</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-green-800">
                <div><strong>Codice IATA:</strong> BLQ</div>
                <div><strong>Codice ICAO:</strong> LIPE</div>
                <div><strong>Distanza dal centro:</strong> ~6 km</div>
                <div><strong>Gestore:</strong> Aeroporto Guglielmo Marconi di Bologna S.p.A.</div>
                <div><strong>Bacino d'utenza:</strong> Bologna, Modena, Ferrara, Ravenna</div>
                <div><strong>Tipo voli:</strong> Europei, nazionali, charter</div>
              </div>
            </div>
          </div>
        </div>

        {/* Airlines */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-500" />
            Compagnie aeree a Bologna BLQ
          </h2>
          <p className="text-gray-600 mb-4">
            Bologna è uno degli aeroporti più dinamici del Nord Italia, con una forte presenza low-cost e compagnie di linea tradizionali.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">FR</span>
                Ryanair
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Ryanair è tra i principali operatori a BLQ con molte rotte verso UK, Irlanda, Spagna, Polonia e altri Paesi europei. CE 261 si applica pienamente su tutti i voli da BLQ.
              </p>
              <div className="text-xs text-gray-500">Reclami: ryanair.com → Aiuto → Reclami</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">U2</span>
                easyJet
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                easyJet opera diverse rotte da Bologna verso capitali europee. Per ritardi e cancellazioni, importi CE 261 da €250 a €400 a seconda della distanza.
              </p>
              <div className="text-xs text-gray-500">Reclami: easyjet.com → Aiuto → Rimborsi</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">AZ</span>
                ITA Airways
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                ITA Airways opera voli nazionali da BLQ (Roma FCO, Catania, Palermo). Per ritardi su voli domestici, il CE 261 si applica con importo €250 (distanze sotto 1500 km).
              </p>
              <div className="text-xs text-gray-500">Reclami: ita-airways.com → Assistenza</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">LH / AF / KL</span>
                Compagnie di linea europee
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Lufthansa (via FRA/MUC), Air France (via CDG), KLM (via AMS) operano da BLQ. Tutti i voli da aeroporti italiani → piena copertura CE 261.
              </p>
              <div className="text-xs text-gray-500">Reclami: sito della singola compagnia + ENAC in escalation</div>
            </div>
          </div>
        </section>

        {/* Compensation table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi risarcimento per le rotte principali da Bologna BLQ
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Destinazione</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza da BLQ</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Roma (FCO)</td>
                  <td className="p-3">~350 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">ITA Airways</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Londra (STN/LGW/LHR)</td>
                  <td className="p-3">~1200 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">Ryanair, easyJet</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Parigi (CDG/ORY)</td>
                  <td className="p-3">~1000 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">Air France, Ryanair</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Barcellona (BCN)</td>
                  <td className="p-3">~1260 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">Vueling, Ryanair</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Madrid (MAD)</td>
                  <td className="p-3">~1540 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                  <td className="p-3">Iberia, easyJet</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Amsterdam (AMS)</td>
                  <td className="p-3">~1060 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">KLM</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Francoforte (FRA)</td>
                  <td className="p-3">~760 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">Lufthansa</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-amber-50">
                  <td className="p-3 font-medium">Lisbona (LIS)</td>
                  <td className="p-3">~1850 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                  <td className="p-3">TAP, Ryanair</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-amber-50">
                  <td className="p-3 font-medium">Tel Aviv (TLV)</td>
                  <td className="p-3">~2360 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                  <td className="p-3">El Al, Neos</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-orange-50">
                  <td className="p-3 font-medium">New York (JFK/EWR)</td>
                  <td className="p-3">~6900 km</td>
                  <td className="p-3 font-bold text-orange-600">€600</td>
                  <td className="p-3">Neos, Norse Atlantic</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">* Distanze approssimate. L'importo si basa sulla distanza ortodromica calcolata dalla Commissione Europea.</p>
        </section>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo in ritardo da Bologna BLQ?</h3>
              <p className="text-green-100 text-sm">
                Verifica subito il tuo diritto a €250–€600. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.
              </p>
            </div>
            <a
              href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=bologna-blq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors flex items-center gap-2"
            >
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Extraordinary circumstances */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Cause di ritardo tipiche a Bologna e diritto al risarcimento
          </h2>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0 whitespace-nowrap">NON straord.</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Guasto tecnico all'aeromobile</h3>
                  <p className="text-gray-600 text-sm mt-1">La grande maggioranza dei guasti rientra nella normale gestione tecnica della compagnia. Non è circostanza straordinaria — hai diritto al risarcimento se il ritardo supera le 3 ore all'arrivo.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0 whitespace-nowrap">NON straord.</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Ritardo a cascata / rotazione aeromobile</h3>
                  <p className="text-gray-600 text-sm mt-1">Se il tuo aereo è arrivato in ritardo dal volo precedente, si tratta di un problema organizzativo della flotta — non straordinario. Il risarcimento è dovuto.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0 whitespace-nowrap">Dipende</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Nebbia nella Pianura Padana</h3>
                  <p className="text-gray-600 text-sm mt-1">Come per Milano, la nebbia è frequente in autunno-inverno nella Pianura Padana. Per essere esonerata, la compagnia deve provare che era eccezionale e imprevedibile — non una normale nebbia stagionale.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0 whitespace-nowrap">Straord.</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Sciopero controllori di volo (ENAV)</h3>
                  <p className="text-gray-600 text-sm mt-1">Uno sciopero dei controllori di volo italiani (ENAV) è circostanza straordinaria. La compagnia non è tenuta al risarcimento monetario, ma deve comunque fornire assistenza (pasti, hotel se necessario).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Procedure */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Procedura reclamo passo per passo
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Documenta tutto in aeroporto",
                content: "Conserva carta d'imbarco, fai screenshot del tabellone BLQ con il ritardo indicato, chiedi alla compagnia una comunicazione scritta con la motivazione."
              },
              {
                step: "2",
                title: "Verifica il ritardo all'arrivo (non alla partenza)",
                content: "Il CE 261 misura il ritardo all'atterraggio nella destinazione finale — quando si aprono le porte dell'aereo. Un volo partito con 4 ore di ritardo da BLQ che recupera parte del tempo conta per l'effettivo ritardo all'arrivo."
              },
              {
                step: "3",
                title: "Reclamo formale alla compagnia (entro 30-48 ore)",
                content: "Usa il modulo online della compagnia operatrice. Indica codice BLQ, numero volo, data, ritardo subito e IBAN. La compagnia ha 30 giorni per rispondere."
              },
              {
                step: "4",
                title: "Escalation ENAC se rifiutano",
                content: "Presenta reclamo su enac.gov.it allegando la risposta negativa della compagnia (o l'assenza di risposta). L'ENAC può imporre sanzioni e obbligare al pagamento."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
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

        {/* Rights summary */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            Riepilogo diritti a BLQ: ritardo vs cancellazione
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-3">In caso di RITARDO di 3+ ore</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />Risarcimento €250/€400/€600 (in base alla distanza)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />Pasti e bevande proporzionali all'attesa</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />2 telefonate/email gratuite</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />Hotel se necessario pernottare</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-bold text-orange-900 mb-3">In caso di CANCELLAZIONE</h3>
              <ul className="space-y-2 text-sm text-orange-800">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />Risarcimento €250/€400/€600 (se preavviso &lt;14 gg)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />Scelta: rimborso biglietto completo O volo alternativo</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />Pasti, comunicazioni, hotel come per il ritardo</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />Trasferimento hotel-aeroporto se necessario</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm">
              <strong>Importante:</strong> i diritti di assistenza (pasti, hotel) spettano anche in caso di circostanze straordinarie. Solo il risarcimento monetario può essere negato in quel caso — non l'assistenza.
            </p>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo?</h3>
              <p className="text-blue-200 text-sm">
                ClaimWinger si occupa di tutto: reclamo, documentazione, follow-up con la compagnia ed escalation ENAC. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.
              </p>
            </div>
            <a
              href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=bologna-blq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Aeroporto Bologna BLQ</h2>
          <div className="space-y-3">
            {[
              {
                q: "Qual è il codice IATA dell'aeroporto di Bologna?",
                a: "Il codice IATA dell'aeroporto di Bologna Guglielmo Marconi è BLQ. Si trova a circa 6 km dal centro di Bologna e serve anche passeggeri da Modena, Ferrara e Ravenna."
              },
              {
                q: "Quanto risarcimento spetta per un volo in ritardo da Bologna BLQ?",
                a: "Dipende dalla distanza della rotta: fino a 1500 km → €250 (es. Londra, Parigi, Barcellona); 1500–3500 km → €400 (es. Madrid, Lisbona, Tel Aviv); oltre 3500 km → €600 (es. New York). Il ritardo deve essere di almeno 3 ore all'arrivo."
              },
              {
                q: "Ryanair opera a Bologna BLQ?",
                a: "Sì, Ryanair è uno degli operatori principali a Bologna BLQ con numerose rotte verso UK, Irlanda, Spagna, Polonia e altri Paesi europei. In caso di ritardo o cancellazione da BLQ, hai pieno diritto al risarcimento CE 261/2004."
              },
              {
                q: "A chi mi rivolgo se la compagnia aerea non risponde al reclamo presentato da Bologna?",
                a: "Se la compagnia non risponde entro 30 giorni o rifiuta ingiustificatamente, puoi presentare reclamo all'ENAC tramite il portale online enac.gov.it. L'ENAC è l'autorità nazionale di vigilanza per i voli da aeroporti italiani come BLQ."
              },
              {
                q: "Ho preso un autobus da Modena per arrivare a BLQ e il volo era cancellato. Posso recuperare i costi?",
                a: "Sì. Le spese ragionevoli di trasporto sostenute durante un ritardo o dopo una cancellazione (es. per rientrare a casa o raggiungere un hotel) sono rimborsabili dalla compagnia aerea separatamente dal risarcimento CE 261. Conserva tutti i biglietti e ricevute."
              },
              {
                q: "Qual è la prescrizione per i reclami da Bologna BLQ?",
                a: "Per voli in partenza dall'Italia (BLQ), la prescrizione è di 2 anni dalla data del volo. Presentare reclamo il prima possibile è sempre consigliabile per avere tutta la documentazione disponibile."
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

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Articoli correlati</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                href: "/it/blog/aeroporto-milano-malpensa-ritardi",
                title: "Aeroporto Milano Malpensa: ritardi e risarcimenti",
                excerpt: "Guida completa per MXP — la più grande alternativa per il Nord Italia."
              },
              {
                href: "/it/blog/aeroporto-venezia-marco-polo-risarcimento",
                title: "Aeroporto Venezia VCE: Risarcimento Voli",
                excerpt: "Guida per VCE incluso il caso Treviso TSF e voli charter."
              },
              {
                href: "/it/blog/ryanair-italia-risarcimento",
                title: "Ryanair Italia: Guida Completa al Risarcimento",
                excerpt: "Come ottenere fino a €600 da Ryanair per ritardi e cancellazioni."
              },
              {
                href: "/it/blog/regolamento-ce-261-2004-spiegato",
                title: "Regolamento CE 261/2004 Spiegato",
                excerpt: "Guida completa ai tuoi diritti come passeggero aereo."
              }
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 hover:shadow-md transition-all"
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
