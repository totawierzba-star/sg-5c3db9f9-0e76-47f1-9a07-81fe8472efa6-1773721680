import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function AeroportoTorinoRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il codice IATA dell'aeroporto di Torino?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il codice IATA dell'aeroporto di Torino Caselle è TRN. L'aeroporto si trova a circa 16 km dal centro di Torino nel comune di Caselle Torinese e serve anche i passeggeri di Asti, Cuneo e Valle d'Aosta."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo in ritardo da Torino TRN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'importo dipende dalla distanza della rotta: fino a 1500 km → €250 (es. Londra, Parigi, Barcellona, Amsterdam); 1500–3500 km → €400 (es. Madrid, Lisbona); oltre 3500 km → €600. Il ritardo deve essere di almeno 3 ore all'arrivo alla destinazione finale."
        }
      },
      {
        "@type": "Question",
        "name": "Quali compagnie aeree operano a Torino Caselle TRN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le principali compagnie a Torino TRN sono: Ryanair (numerose rotte europee), easyJet, ITA Airways (rotte nazionali), Wizz Air, Neos e compagnie charter stagionali. La scelta è minore rispetto a Milano, ma le compagnie presenti sono tutte soggette al CE 261/2004."
        }
      },
      {
        "@type": "Question",
        "name": "Il meteo alpino invernale (neve, ghiaccio) può giustificare il rifiuto del risarcimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solo se si tratta di condizioni eccezionali e imprevedibili. La neve invernale in zona alpina è un fenomeno atteso stagionalmente — difficilmente classificabile come straordinario. La compagnia deve dimostrare con documentazione meteo ufficiale che le condizioni erano fuori dall'ordinario. La normale gestione dei de-icing e le precauzioni operative sono responsabilità della compagnia."
        }
      },
      {
        "@type": "Question",
        "name": "A chi presentare il reclamo per voli da Torino TRN se la compagnia rifiuta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se la compagnia rifiuta o non risponde entro 30 giorni, puoi presentare reclamo all'ENAC (Ente Nazionale per l'Aviazione Civile) tramite il portale enac.gov.it. L'ENAC è l'autorità italiana di vigilanza per voli da aeroporti italiani come TRN."
        }
      },
      {
        "@type": "Question",
        "name": "Esiste un aeroporto alternativo a Torino?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non c'è un aeroporto alternativo immediato per Torino. I passeggeri torinesi talvolta usano Milano Malpensa (MXP, ~130 km) o Milano Linate (LIN, ~130 km) per avere più scelta di voli. Per i risarcimenti, conta sempre l'aeroporto effettivo di partenza indicato sul biglietto."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aeroporto Torino Caselle (TRN): Risarcimento Voli Ritardati e Cancellati 2026",
    "description": "Volo in ritardo o cancellato a Torino Caselle (TRN)? Guida completa ai tuoi diritti CE 261/2004: importi, compagnie, meteo alpino e procedura ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Torino Caselle (TRN): Risarcimento Voli Ritardati e Cancellati 2026"
        description="Volo in ritardo o cancellato a Torino Caselle (TRN)? Guida completa ai tuoi diritti CE 261/2004: importi, compagnie, meteo alpino e procedura ENAC."
        canonical="https://claimwinger.com/it/blog/aeroporto-torino-caselle-risarcimento"
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
              Aeroporto Torino TRN
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
            Aeroporto Torino Caselle (TRN): Risarcimento Voli Ritardati e Cancellati 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo in ritardo o cancellato a Torino Caselle? Il Regolamento CE 261/2004 ti garantisce fino a <strong>€600 di risarcimento</strong>. Ecco la guida completa per chi parte o arriva all'aeroporto di Torino.
          </p>
        </header>

        {/* Airport info box */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-green-900 mb-2">Aeroporto Torino Caselle — dati chiave</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-green-800">
                <div><strong>Codice IATA:</strong> TRN</div>
                <div><strong>Codice ICAO:</strong> LIMF</div>
                <div><strong>Posizione:</strong> Caselle Torinese, ~16 km dal centro</div>
                <div><strong>Gestore:</strong> SAGAT S.p.A.</div>
                <div><strong>Bacino d'utenza:</strong> Torino, Asti, Cuneo, Valle d'Aosta</div>
                <div><strong>Tipo voli:</strong> Europei, nazionali, charter invernali (sci)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ski charter context */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-500" />
            Torino TRN: gateway per le Alpi e voli charter sciistici
          </h2>
          <p className="text-gray-600 mb-4">
            Torino è la porta d'accesso principale alle stazioni sciistiche delle Alpi occidentali (Valle d'Aosta, Via Lattea, Bardonecchia). D'inverno, l'aeroporto gestisce molti voli charter da UK, Scandinavia e Nord Europa per le settimane bianche. Questi voli sono pienamente coperti dal CE 261/2004.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-blue-800 text-sm">
              <strong>Voli charter sciistici:</strong> anche i voli charter organizzati da tour operator (es. settimane bianche all-inclusive con volo) rientrano nel CE 261. Se il volo charter è in ritardo di 3+ ore, hai diritto al risarcimento. L'operatore di pacchetti turistici può avere responsabilità aggiuntive ai sensi della Direttiva 2015/2302/UE.
            </p>
          </div>
        </section>

        {/* Airlines */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Compagnie aeree a Torino TRN
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">FR</span>
                Ryanair
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Ryanair è il principale operatore a TRN con rotte verso UK, Irlanda, Spagna, Polonia e altre destinazioni europee. CE 261 applicabile pienamente da TRN.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">U2</span>
                easyJet
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                easyJet opera diverse rotte da Torino verso capitali europee. Per ritardi e cancellazioni: €250–€400 secondo distanza.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">AZ</span>
                ITA Airways
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                ITA opera la rotta TRN–FCO (Roma). Per ritardi o cancellazioni su questa rotta: €250 di risarcimento (distanza ~490 km).
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">NO / W6</span>
                Neos e Wizz Air
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Neos opera voli charter e di linea verso mete turistiche. Wizz Air ha alcune rotte verso Europa orientale. Entrambe sono soggette al CE 261 da TRN.
              </p>
            </div>
          </div>
        </section>

        {/* Compensation table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento per rotte principali da TRN
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Destinazione</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza da TRN</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Roma (FCO)</td>
                  <td className="p-3">~490 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">ITA Airways</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Londra (STN/LGW/LHR)</td>
                  <td className="p-3">~1080 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">Ryanair, easyJet</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Parigi (CDG/ORY)</td>
                  <td className="p-3">~620 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">Air France, Ryanair</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Barcellona (BCN)</td>
                  <td className="p-3">~900 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">Vueling, Ryanair</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Amsterdam (AMS)</td>
                  <td className="p-3">~1100 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">KLM</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Madrid (MAD)</td>
                  <td className="p-3">~1240 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">Iberia, easyJet</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-amber-50">
                  <td className="p-3 font-medium">Lisbona (LIS)</td>
                  <td className="p-3">~1650 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                  <td className="p-3">TAP, Ryanair</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-amber-50">
                  <td className="p-3 font-medium">Sharm el-Sheikh (SSH)</td>
                  <td className="p-3">~2700 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                  <td className="p-3">Neos, charter</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-orange-50">
                  <td className="p-3 font-medium">Cancún (CUN)</td>
                  <td className="p-3">~9300 km</td>
                  <td className="p-3 font-bold text-orange-600">€600</td>
                  <td className="p-3">Neos (stagionale)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo in ritardo da Torino Caselle?</h3>
              <p className="text-blue-100 text-sm">
                Verifica subito il tuo diritto a €250–€600. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.
              </p>
            </div>
            <a
              href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=torino-trn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Alpine weather */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Meteo alpino e ritardi: quando spetta il risarcimento?
          </h2>
          <p className="text-gray-600 mb-4">
            Torino è la città capoluogo più vicina alle Alpi in Italia. Questo significa che il meteo invernale può essere severo. Tuttavia, <strong>non ogni condizione meteorologica giustifica il rifiuto del risarcimento</strong>.
          </p>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0 whitespace-nowrap">HAI DIRITTO</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Neve ordinaria con ritardo per de-icing</h3>
                  <p className="text-gray-600 text-sm mt-1">Il de-icing (trattamento antighiaccio) è un'operazione standard per aeroporti in zone alpine. Il tempo necessario per il de-icing rientra nella normale gestione operativa — se causa un ritardo di 3+ ore, hai diritto al risarcimento.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0 whitespace-nowrap">HAI DIRITTO</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Nebbia invernale in Pianura Padana</h3>
                  <p className="text-gray-600 text-sm mt-1">La nebbia è un fenomeno atteso nelle aree pianeggianti del Piemonte in autunno-inverno. Non è generalmente considerata straordinaria — la compagnia deve risarcire se il ritardo supera 3 ore.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0 whitespace-nowrap">DIPENDE</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Blizzard o tempesta eccezionale</h3>
                  <p className="text-gray-600 text-sm mt-1">Un evento meteo di straordinaria intensità (es. bufera che chiude la pista) può essere circostanza straordinaria — ma la compagnia deve documentarlo con bollettini meteo ufficiali. La sola affermazione "condizioni meteo" non basta.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0 whitespace-nowrap">HAI DIRITTO</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Guasto tecnico, ritardo a cascata, mancanza equipaggio</h3>
                  <p className="text-gray-600 text-sm mt-1">Come per qualsiasi altro aeroporto, questi sono problemi organizzativi della compagnia — non circostanze straordinarie. Il risarcimento è dovuto.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Procedure */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come richiedere il risarcimento da TRN
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Documenta in aeroporto",
                content: "Conserva carta d'imbarco o e-ticket. Fotografa i pannelli informativi di TRN. Chiedi comunicazione scritta alla compagnia con motivazione del ritardo o cancellazione."
              },
              {
                step: "2",
                title: "Calcola il ritardo all'arrivo",
                content: "Il CE 261 si applica quando il ritardo all'arrivo (apertura porte nella destinazione finale) è di 3+ ore. Non conta il ritardo alla partenza da Torino."
              },
              {
                step: "3",
                title: "Reclamo formale alla compagnia",
                content: "Usa il modulo online della compagnia operatrice. Specifica codice TRN, numero volo, data e IBAN. La compagnia ha 30 giorni per rispondere."
              },
              {
                step: "4",
                title: "Escalation ENAC se necessario",
                content: "Rifiuto o silenzio dopo 30 giorni? Reclama all'ENAC su enac.gov.it. L'ENAC può sanzionare la compagnia e disporre il pagamento."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
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

        {/* Rights box */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            I tuoi diritti in sintesi
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">€250</div>
              <div className="text-sm text-green-800 font-semibold">Rotte fino a 1500 km</div>
              <div className="text-xs text-green-600 mt-1">Roma, Londra, Parigi, Barcellona, Amsterdam, Madrid</div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-amber-700 mb-1">€400</div>
              <div className="text-sm text-amber-800 font-semibold">Rotte 1500–3500 km</div>
              <div className="text-xs text-amber-600 mt-1">Lisbona, Tel Aviv, Sharm, Canarie</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-orange-700 mb-1">€600</div>
              <div className="text-sm text-orange-800 font-semibold">Rotte oltre 3500 km</div>
              <div className="text-xs text-orange-600 mt-1">Caraibi, Maldive, America, Asia</div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Soglia minima: 3 ore di ritardo all'arrivo. Cancellazione: preavviso inferiore a 14 giorni.</p>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che ClaimWinger gestisca il reclamo?</h3>
              <p className="text-green-100 text-sm">
                Ci occupiamo di tutto: modulo, documentazione, follow-up e — se necessario — escalation ENAC. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.
              </p>
            </div>
            <a
              href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=torino-trn"
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Aeroporto Torino TRN</h2>
          <div className="space-y-3">
            {[
              {
                q: "Qual è il codice IATA dell'aeroporto di Torino?",
                a: "Il codice IATA dell'aeroporto di Torino Caselle è TRN. L'aeroporto si trova a circa 16 km dal centro di Torino nel comune di Caselle Torinese."
              },
              {
                q: "Quanto risarcimento spetta per un volo in ritardo da Torino TRN?",
                a: "L'importo dipende dalla distanza della rotta: fino a 1500 km → €250 (es. Londra, Parigi, Barcellona, Amsterdam, Madrid); 1500–3500 km → €400 (es. Lisbona, Sharm); oltre 3500 km → €600. Il ritardo deve essere di almeno 3 ore all'arrivo."
              },
              {
                q: "Quali compagnie aeree operano a Torino Caselle TRN?",
                a: "Le principali compagnie a TRN sono: Ryanair (numerose rotte europee), easyJet, ITA Airways (rotte nazionali), Wizz Air, Neos e compagnie charter stagionali. Tutte sono soggette al CE 261/2004 per voli da TRN."
              },
              {
                q: "Il meteo alpino invernale può giustificare il rifiuto del risarcimento?",
                a: "Solo se si tratta di condizioni eccezionali e imprevedibili. La neve invernale in zona alpina è un fenomeno atteso stagionalmente. La compagnia deve dimostrare con documentazione meteo ufficiale che le condizioni erano fuori dall'ordinario. La normale gestione del de-icing è responsabilità della compagnia."
              },
              {
                q: "A chi presentare il reclamo se la compagnia rifiuta da Torino TRN?",
                a: "Se la compagnia rifiuta o non risponde entro 30 giorni, puoi presentare reclamo all'ENAC tramite il portale enac.gov.it. L'ENAC è l'autorità italiana di vigilanza per voli da aeroporti italiani come TRN."
              },
              {
                q: "Esiste un aeroporto alternativo a Torino?",
                a: "Non c'è un aeroporto alternativo immediato per Torino. I passeggeri torinesi talvolta usano Milano Malpensa (MXP, ~130 km) o Milano Linate (LIN). Per i risarcimenti, conta sempre l'aeroporto effettivo di partenza indicato sul biglietto."
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
                title: "Aeroporto Milano Malpensa (MXP): Ritardi",
                excerpt: "Il grande hub lombardo alternativo a Torino per voli internazionali."
              },
              {
                href: "/it/blog/aeroporto-bergamo-orio-al-serio-risarcimento",
                title: "Aeroporto Bergamo Orio al Serio (BGY)",
                excerpt: "Guida ai diritti passeggeri a Bergamo, aeroporto Ryanair."
              },
              {
                href: "/it/blog/circostanze-straordinarie-spiegate",
                title: "Circostanze Straordinarie: Quando NON Spetta il Risarcimento",
                excerpt: "Quando il meteo o altri fattori permettono il rifiuto legale."
              },
              {
                href: "/it/blog/ryanair-italia-risarcimento",
                title: "Ryanair Italia: Guida Completa al Risarcimento",
                excerpt: "Come reclamare con Ryanair per voli da TRN e altri aeroporti."
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
