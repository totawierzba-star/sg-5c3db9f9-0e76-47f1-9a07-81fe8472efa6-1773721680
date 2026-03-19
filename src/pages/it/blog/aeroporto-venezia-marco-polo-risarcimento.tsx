import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function AeroportoVeneziaMarcoPoloRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il codice IATA dell'aeroporto di Venezia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il codice IATA dell'aeroporto di Venezia Marco Polo è VCE. L'aeroporto si trova a circa 13 km dal centro di Venezia, a Tessera (comune di Venezia). Esiste anche l'aeroporto di Treviso-Sant'Angelo (TSF), distante circa 30 km, spesso usato da Ryanair come alternativa 'Venezia'."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo in ritardo da Venezia VCE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'importo dipende dalla distanza: fino a 1500 km → €250 (es. Roma, Parigi, Londra, Amsterdam); 1500–3500 km → €400 (es. Mosca, Tel Aviv, Canarie); oltre 3500 km → €600 (es. New York, Dubai). Il ritardo deve essere di almeno 3 ore calcolate all'arrivo."
        }
      },
      {
        "@type": "Question",
        "name": "Ryanair vola da 'Venezia' ma in realtà è Treviso (TSF). Ho diritto al risarcimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, hai pieno diritto al risarcimento CE 261/2004 anche se il volo parte da Treviso TSF. L'aeroporto di Treviso è nell'UE e la normativa si applica indipendentemente da come la compagnia chiama la destinazione nel marketing. La distanza per calcolare l'importo va comunque misurata da Treviso (TSF), non da Venezia (VCE)."
        }
      },
      {
        "@type": "Question",
        "name": "L'acqua alta a Venezia può causare cancellazioni di voli? È circostanza straordinaria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'acqua alta colpisce il centro storico di Venezia, non l'aeroporto di Tessera che si trova a 13 km dalla laguna. Raramente l'acqua alta causa problemi diretti all'operatività di VCE. Se la compagnia invoca l'acqua alta come circostanza straordinaria per un ritardo, è lecito chiedere documentazione specifica che dimostri il reale impatto sull'aeroporto."
        }
      },
      {
        "@type": "Question",
        "name": "Ho perso una crociera da Venezia per colpa del volo in ritardo. Posso reclamare anche per questo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il risarcimento CE 261/2004 (€250–€600) è fisso e non dipende dal danno economico reale. Per danni consequenziali (crociera persa, hotel non rimborsabile, ecc.) puoi fare richiesta separata alla compagnia ai sensi della Convenzione di Montreal (Art. 19). Questi rimborsi non hanno un massimale fisso ma richiedono prova del danno."
        }
      },
      {
        "@type": "Question",
        "name": "Qual è il tempo di prescrizione per i reclami da Venezia VCE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per voli in partenza dall'Italia (VCE), il termine di prescrizione è di 2 anni dalla data del volo. È consigliabile presentare reclamo il prima possibile per avere tutta la documentazione disponibile."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aeroporto Venezia Marco Polo (VCE): Risarcimento Voli Ritardati e Cancellati 2026",
    "description": "Volo in ritardo o cancellato a Venezia VCE? Guida completa: importi CE 261, compagnie, TSF vs VCE, crociera persa e procedura ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Venezia Marco Polo (VCE): Risarcimento Voli Ritardati e Cancellati 2026"
        description="Volo in ritardo o cancellato a Venezia VCE? Guida completa: importi CE 261, compagnie, TSF vs VCE, crociera persa e procedura ENAC."
        canonical="https://claimwinger.com/it/blog/aeroporto-venezia-marco-polo-risarcimento"
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
              Aeroporto Venezia VCE
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Aeroporti</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />9 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Venezia Marco Polo (VCE): Risarcimento Voli Ritardati e Cancellati 2026
          </h1>
          <p className="text-xl text-gray-600">
            Hai avuto un problema con il volo a Venezia Marco Polo? Il Regolamento CE 261/2004 ti garantisce fino a <strong>€600 di risarcimento</strong> per ritardi e cancellazioni. Ecco tutto quello che devi sapere — incluso il caso Treviso (TSF).
          </p>
        </header>

        {/* Airport overview */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-green-900 mb-2">Aeroporto Venezia Marco Polo — dati chiave</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-green-800">
                <div><strong>Codice IATA:</strong> VCE</div>
                <div><strong>Codice ICAO:</strong> LIPZ</div>
                <div><strong>Posizione:</strong> Tessera, 13 km da Venezia</div>
                <div><strong>Gestore:</strong> SAVE S.p.A.</div>
                <div><strong>Tipo voli:</strong> Europei, intercontinentali, charter</td>
                <div><strong>Aeroporto alternativo:</strong> Treviso TSF (~30 km)</div>
              </div>
            </div>
          </div>
        </div>

        {/* VCE vs TSF */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            VCE vs TSF: attenzione quando prenotate "Venezia"
          </h2>
          <p className="text-gray-600 mb-4">
            Molte compagnie low-cost vendono voli come "Venezia" ma operano in realtà dall'aeroporto di <strong>Treviso-Sant'Angelo (TSF)</strong>, a circa 30 km. Questo è legale, ma può creare confusione. Ecco le differenze rilevanti per i reclami:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Caratteristica</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Venezia Marco Polo (VCE)</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Treviso Sant'Angelo (TSF)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Distanza da Venezia</td>
                  <td className="p-3">~13 km</td>
                  <td className="p-3">~30 km</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Compagnie principali</td>
                  <td className="p-3">ITA, Lufthansa, AF, BA, easyJet, Wizz Air</td>
                  <td className="p-3">Ryanair (principalmente)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">CE 261/2004</td>
                  <td className="p-3 text-green-600 font-semibold">Sì — piena copertura</td>
                  <td className="p-3 text-green-600 font-semibold">Sì — piena copertura</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Calcolo distanza per risarcimento</td>
                  <td className="p-3">Da VCE alla destinazione</td>
                  <td className="p-3">Da TSF alla destinazione</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Autorità ENAC competente</td>
                  <td className="p-3">ENAC</td>
                  <td className="p-3">ENAC</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-blue-800 text-sm">
              <strong>Caso pratico:</strong> Ryanair vende un volo "Venezia–Londra" ma parte da TSF. Se il volo è in ritardo di 3+ ore, hai diritto a €250 (distanza TSF–LTN/STN ~1000 km). Il fatto che sia "Venezia" nel marketing non cambia i tuoi diritti.
            </p>
          </div>
        </section>

        {/* Airlines at VCE */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Compagnie aeree a Venezia VCE e come reclamare
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">AZ</span>
                ITA Airways
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                ITA Airways opera voli nazionali (Roma FCO, Catania, Palermo) e alcune rotte europee da VCE. Reclamo diretto a ITA, escalation ENAC.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">U2</span>
                easyJet
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                easyJet è uno degli operatori più attivi a Venezia VCE con molte rotte europee. Reclamo online, escalation ENAC o CAA britannica.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full">W6</span>
                Wizz Air
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Wizz Air opera da VCE verso Europa orientale (Budapest, Bucarest, Varsavia, ecc.). È registrata in Ungheria ma opera nell'UE → CE 261 si applica pienamente.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">LH/AF/BA</span>
                Compagnie di linea europee
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Lufthansa, Air France, KLM, British Airways operano voli di linea da VCE verso i loro hub (FRA, CDG, AMS, LHR). Per tutti si applica CE 261 con gli importi standard.
              </p>
            </div>
          </div>
        </section>

        {/* Compensation table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi risarcimento per le rotte principali da VCE
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Destinazione</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza da VCE</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Roma (FCO)</td>
                  <td className="p-3">~520 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">ITA Airways</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Parigi (CDG)</td>
                  <td className="p-3">~1100 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">Air France, easyJet</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Londra (LGW/LHR)</td>
                  <td className="p-3">~1130 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">British Airways, easyJet</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Amsterdam (AMS)</td>
                  <td className="p-3">~1070 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">KLM</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Francoforte (FRA)</td>
                  <td className="p-3">~800 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                  <td className="p-3">Lufthansa</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Madrid (MAD)</td>
                  <td className="p-3">~1840 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                  <td className="p-3">Iberia, easyJet</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Mosca (SVO)</td>
                  <td className="p-3">~2170 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                  <td className="p-3">Aeroflot (voli sospesi 2022)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Sharm el-Sheikh (SSH)</td>
                  <td className="p-3">~2800 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                  <td className="p-3">Charter, Neos, Blue Panorama</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-orange-50">
                  <td className="p-3 font-medium">New York (JFK)</td>
                  <td className="p-3">~6870 km</td>
                  <td className="p-3 font-bold text-orange-600">€600</td>
                  <td className="p-3">Delta (stagionale)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-orange-50">
                  <td className="p-3 font-medium">Dubai (DXB)</td>
                  <td className="p-3">~4700 km</td>
                  <td className="p-3 font-bold text-orange-600">€600</td>
                  <td className="p-3">Emirates, flydubai</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo in ritardo da Venezia?</h3>
              <p className="text-green-100 text-sm">
                Verifica subito il tuo diritto a €250–€600. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.
              </p>
            </div>
            <a
              href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=venezia-vce"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors flex items-center gap-2"
            >
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Cruise connection */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Caso speciale: volo ritardato e crociera persa da Venezia
          </h2>
          <p className="text-gray-600 mb-4">
            Venezia è uno dei porti di crociera più importanti d'Europa. Ogni anno migliaia di turisti volano a VCE o TSF per imbarcarsi su una crociera. Cosa succede se il volo è in ritardo e perdi l'imbarco?
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Risarcimento CE 261/2004 (fisso)</h3>
                  <p className="text-gray-600 text-sm mt-1">Se il volo è in ritardo di 3+ ore all'arrivo, spetta il risarcimento fisso (€250–€600) indipendentemente dal danno reale. Non devi dimostrare di aver perso la crociera per ottenerlo.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Danni consequenziali (Convenzione di Montreal)</h3>
                  <p className="text-gray-600 text-sm mt-1">Per recuperare il costo della crociera persa (o la parte non goduta), devi fare una richiesta separata ai sensi dell'Art. 19 della Convenzione di Montreal. Questa non ha un importo fisso ma richiede prove documentali del danno economico.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-amber-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">!</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Documenta tutto</h3>
                  <p className="text-gray-600 text-sm mt-1">Conserva: prenotazione crociera, policy di imbarco (orario limite check-in), comunicazione ufficiale della compagnia aerea sul ritardo, ogni spesa sostenuta per raggiungere la nave in un porto successivo o per alloggio alternativo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Charter flights */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-500" />
            Voli charter da Venezia: si applica il CE 261?
          </h2>
          <p className="text-gray-600 mb-4">
            Venezia è molto attiva nei voli charter verso destinazioni turistiche (Egitto, Grecia, Turchia, Maldive). Il CE 261/2004 si applica anche ai charter, non solo ai voli di linea.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Inclusi nel CE 261
              </h3>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Voli charter da aeroporti UE (VCE, TSF)</li>
                <li>• Voli charter di compagnie UE da qualsiasi aeroporto</li>
                <li>• Pacchetti vacanza con volo charter incluso</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Esclusi dal CE 261
              </h3>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Voli privati (aviazione generale)</li>
                <li>• Voli operati a titolo gratuito</li>
                <li>• Voli charter di compagnie non-UE da aeroporti non-UE</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Procedure */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo per voli da VCE o TSF
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Documenta il ritardo o la cancellazione",
                content: "Conserva carta d'imbarco, conferma di prenotazione, e qualsiasi comunicazione della compagnia. Fai screenshot del tabellone delle partenze mostrante il ritardo o la cancellazione."
              },
              {
                step: "2",
                title: "Identifica la compagnia operatrice",
                content: "Nel caso di codeshare (es. volo venduto da KLM ma operato da Air France), il reclamo va alla compagnia operatrice (quella che fisicamente fa volare l'aereo), non a quella che ha venduto il biglietto."
              },
              {
                step: "3",
                title: "Presenta reclamo formale entro 24-48 ore",
                content: "Vai sul sito della compagnia e usa il modulo reclami. Specifica: numero volo, data, codice aeroporto (VCE o TSF), ritardo subito e IBAN per il rimborso. Nota il numero di pratica assegnato."
              },
              {
                step: "4",
                title: "Escalation ENAC se necessario",
                content: "Se la compagnia rifiuta o non risponde entro 30 giorni, presenta reclamo all'ENAC online (enac.gov.it). L'ENAC ha potere sanzionatorio sulle compagnie che violano il CE 261."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
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

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo tutto noi?</h3>
              <p className="text-blue-200 text-sm">
                ClaimWinger si occupa di reclamo, documentazione e follow-up. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>. Nessun rischio per te.
              </p>
            </div>
            <a
              href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=venezia-vce"
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Aeroporto Venezia VCE</h2>
          <div className="space-y-3">
            {[
              {
                q: "Qual è il codice IATA dell'aeroporto di Venezia?",
                a: "Il codice IATA dell'aeroporto di Venezia Marco Polo è VCE. L'aeroporto si trova a circa 13 km dal centro di Venezia, a Tessera. Esiste anche l'aeroporto di Treviso-Sant'Angelo (TSF), distante circa 30 km, spesso usato da Ryanair come alternativa 'Venezia'."
              },
              {
                q: "Quanto risarcimento spetta per un volo in ritardo da Venezia VCE?",
                a: "L'importo dipende dalla distanza: fino a 1500 km → €250 (es. Roma, Parigi, Londra, Amsterdam); 1500–3500 km → €400 (es. Madrid, Tel Aviv, Canarie); oltre 3500 km → €600 (es. New York, Dubai). Il ritardo deve essere di almeno 3 ore calcolate all'arrivo."
              },
              {
                q: "Ryanair vola da 'Venezia' ma in realtà è Treviso (TSF). Ho diritto al risarcimento?",
                a: "Sì, hai pieno diritto al risarcimento CE 261/2004 anche se il volo parte da Treviso TSF. L'aeroporto di Treviso è nell'UE e la normativa si applica indipendentemente da come la compagnia chiama la destinazione nel marketing. La distanza per calcolare l'importo va comunque misurata da Treviso (TSF), non da Venezia (VCE)."
              },
              {
                q: "L'acqua alta a Venezia può causare cancellazioni di voli? È circostanza straordinaria?",
                a: "L'acqua alta colpisce il centro storico di Venezia, non l'aeroporto di Tessera che si trova a 13 km dalla laguna. Raramente l'acqua alta causa problemi diretti all'operatività di VCE. Se la compagnia invoca l'acqua alta come circostanza straordinaria, è lecito chiedere documentazione specifica."
              },
              {
                q: "Ho perso una crociera da Venezia per colpa del volo in ritardo. Posso reclamare anche per questo?",
                a: "Il risarcimento CE 261/2004 (€250–€600) è fisso e non dipende dal danno economico reale. Per danni consequenziali (crociera persa, hotel non rimborsabile) puoi fare richiesta separata alla compagnia ai sensi della Convenzione di Montreal (Art. 19). Questi rimborsi non hanno un massimale fisso ma richiedono prova del danno."
              },
              {
                q: "Qual è il tempo di prescrizione per i reclami da Venezia VCE?",
                a: "Per voli in partenza dall'Italia (VCE o TSF), il termine di prescrizione è di 2 anni dalla data del volo. È consigliabile presentare reclamo il prima possibile per avere tutta la documentazione disponibile."
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
                href: "/it/blog/aeroporto-napoli-capodichino-risarcimento",
                title: "Aeroporto Napoli Capodichino: Risarcimenti",
                excerpt: "Guida completa ai diritti dei passeggeri all'aeroporto di Napoli."
              },
              {
                href: "/it/blog/aeroporto-roma-fiumicino-ritardi",
                title: "Aeroporto Roma Fiumicino: Ritardi e Diritti",
                excerpt: "Tutto sui ritardi all'aeroporto di Roma Fiumicino secondo CE 261/2004."
              },
              {
                href: "/it/blog/wizz-air-italia-risarcimento",
                title: "Wizz Air Italia: Risarcimento per Ritardi",
                excerpt: "Come ottenere risarcimento da Wizz Air per voli da VCE."
              },
              {
                href: "/it/blog/overbooking-negato-imbarco-diritti",
                title: "Overbooking e Negato Imbarco: Tutti i Diritti",
                excerpt: "Negato imbarco a Venezia? Scopri come ottenere fino a €600."
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
