import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function SasRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "SAS Scandinavian Airlines è soggetta al CE 261/2004?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì. SAS (Scandinavian Airlines, codice IATA SK) è un vettore con sede in Svezia e Danimarca, paesi UE. Il CE 261/2004 si applica a tutti i voli SAS in partenza da aeroporti UE (inclusi gli aeroporti italiani) e a tutti i voli SAS in arrivo in UE operati da SAS stessa."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo SAS in ritardo dall'Italia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tutte le rotte dirette dall'Italia verso Scandinavia (Roma/Milano verso Stoccolma, Copenaghen, Oslo) superano i 1.500 km. Il risarcimento è €400. Per coincidenze verso destinazioni extraeuropee via hub scandinavo, il risarcimento può arrivare a €600."
        }
      },
      {
        "@type": "Question",
        "name": "Ho prenotato con SAS ma il volo era operato da SAS Connect: a chi faccio il reclamo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il reclamo si presenta al vettore operativo — cioè quello che ha effettivamente operato il volo. SAS Connect (ex SAS Link) è la divisione regionale di SAS e il reclamo va a SAS stesso. Se il biglietto era 'SK' ma il volo era operato da un partner diverso (codeshare), il reclamo va al vettore operante, non a SAS."
        }
      },
      {
        "@type": "Question",
        "name": "La neve in Scandinavia è una circostanza straordinaria che esclude il risarcimento SAS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non automaticamente. La neve invernale in Scandinavia è un evento stagionale previsto e le compagnie devono prepararsi operativamente. Solo eventi eccezionali e imprevedibili (bufere straordinarie fuori norma) possono escludere il risarcimento. La neve ordinaria, il de-icing di routine o il ghiaccio standard NON esonarano SAS dalla responsabilità."
        }
      },
      {
        "@type": "Question",
        "name": "Ho perso la coincidenza intercontinentale a Copenhagen (CPH) per colpa di SAS: ho diritto a €600?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, se la destinazione finale era oltre 3.500 km (es. New York, Bangkok, Toronto) e hai raggiunto la destinazione con oltre 3 ore di ritardo rispetto all'orario originale, il risarcimento è €600. La coincidenza a CPH o ARN conta come tratta unica se era su un unico biglietto."
        }
      },
      {
        "@type": "Question",
        "name": "Qual è l'autorità a cui rivolgersi se SAS rifiuta il risarcimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per voli in partenza dall'Italia: ENAC (enac.gov.it). Per voli in partenza dalla Svezia: Transportstyrelsen. Per voli in partenza dalla Danimarca: Trafikstyrelsen. Per voli in partenza dalla Norvegia: Luftfartstilsynet (la Norvegia non è UE ma ha recepito CE 261 tramite SEE/EEA)."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SAS Scandinavian Airlines: Risarcimento Voli Ritardo e Cancellazione 2026",
    "description": "Volo SAS in ritardo o cancellato? CE 261/2004, €400–€600, SAS Connect, hub CPH/ARN, neve straordinaria vs ordinaria, ENAC e CAA scandinave.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="SAS Scandinavian Airlines: Risarcimento Voli 2026 — fino a €600"
        description="Volo SAS in ritardo o cancellato? Guida CE 261/2004: €400–€600, SAS Connect, hub Copenaghen/Stoccolma, neve vs straordinario, ENAC."
        canonicalUrl="https://claimwinger.com/it/blog/sas-scandinavian-airlines-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">SAS Scandinavian Airlines</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Compagnie Aeree</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />8 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SAS Scandinavian Airlines: Risarcimento per Ritardo e Cancellazione 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo SAS cancellato o arrivato in ritardo? Tutte le rotte dall'Italia verso la Scandinavia superano 1.500 km, quindi il risarcimento minimo è <strong>€400</strong>. Con hub intercontinentale a Copenaghen o Stoccolma, si può arrivare a <strong>€600</strong>.
          </p>
        </header>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Plane className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-blue-900 mb-2">SAS Scandinavian Airlines — profilo CE 261</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-blue-800">
                <div><strong>Codice IATA:</strong> SK</div>
                <div><strong>Hub principali:</strong> Copenaghen (CPH), Stoccolma (ARN), Oslo (OSL)</div>
                <div><strong>Sede legale:</strong> Stoccolma (Svezia) + Copenaghen (Danimarca) — UE</div>
                <div><strong>Alleanza:</strong> SkyTeam (dal 2024, ex Star Alliance)</div>
                <div><strong>Rotte Italia:</strong> Roma FCO, Milano MXP verso CPH/ARN/OSL</div>
                <div><strong>CE 261 applicabile:</strong> Sì — vettore UE + voli da aeroporti UE</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento SAS: rotte dall'Italia
          </h2>
          <p className="text-gray-600 mb-4">
            Tutte le rotte dirette dall'Italia verso la Scandinavia rientrano nella fascia 1.500–3.500 km, quindi il risarcimento base è <strong>€400</strong>. Se hai perso una coincidenza intercontinentale all'hub di Copenaghen o Stoccolma, il risarcimento sale a <strong>€600</strong>.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Rotta</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento diretto</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Con intercontinentale perso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Roma FCO → Copenaghen CPH</td><td className="p-3">~2.090 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3 font-bold text-red-500">€600 (hub CPH)</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Roma FCO → Stoccolma ARN</td><td className="p-3">~2.520 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3 font-bold text-red-500">€600 (hub ARN)</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Roma FCO → Oslo OSL</td><td className="p-3">~2.360 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3 font-bold text-red-500">€600 (hub OSL)</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Milano MXP → Copenaghen CPH</td><td className="p-3">~1.740 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3 font-bold text-red-500">€600 (hub CPH)</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Milano MXP → Stoccolma ARN</td><td className="p-3">~2.220 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3 font-bold text-red-500">€600 (hub ARN)</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Milano MXP → Oslo OSL</td><td className="p-3">~2.000 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3 font-bold text-red-500">€600 (hub OSL)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm mb-1">Quando si applica il €600?</p>
                <p className="text-red-700 text-sm">Se il tuo volo era Roma/Milano → CPH/ARN → New York/Bangkok/Toronto/Tokyo (o altra destinazione &gt;3.500 km dalla tua origine) su un unico biglietto, e sei arrivato alla destinazione finale con oltre 3 ore di ritardo rispetto all'orario previsto, il risarcimento è €600.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-500" />
            SAS Connect e codeshare: a chi fare il reclamo?
          </h2>
          <p className="text-gray-600 mb-4">
            SAS opera sotto diverse entità e condivide voli con partner. Per presentare correttamente il reclamo CE 261, devi identificare il <strong>vettore operativo</strong> — ovvero chi ha fisicamente volato l'aereo.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Codice volo</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Vettore operativo</th>
                  <th className="text-left p-3 font-semibold text-gray-700">A chi reclami</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Autorità escalation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">SK + numero (volo principale)</td><td className="p-3">SAS Scandinavian Airlines</td><td className="p-3">SAS direttamente</td><td className="p-3">ENAC (da IT) / Transportstyrelsen (da SE)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">SK + numero (volo regionale)</td><td className="p-3">SAS Connect (ex SAS Link)</td><td className="p-3">SAS (stessa entità)</td><td className="p-3">ENAC / Transportstyrelsen</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">SK + numero (in realtà LH)</td><td className="p-3">Lufthansa (codeshare)</td><td className="p-3">Lufthansa, NON SAS</td><td className="p-3">ENAC (da IT) / LBA (da DE)</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">SK + numero (in realtà altro)</td><td className="p-3">Vettore partner codeshare</td><td className="p-3">Il vettore operante effettivo</td><td className="p-3">Autorità del paese di partenza</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
            <p className="text-blue-800 text-xs"><strong>Consiglio:</strong> sul tuo biglietto o boarding pass trovi il codice volo (es. SK1234). Ma controlla anche la sezione "operato da" — se è diverso da SAS, il reclamo va al vettore indicato come operante.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Neve e condizioni meteo scandinave: quando non è straordinario
          </h2>
          <p className="text-gray-600 mb-4">
            SAS invoca spesso il meteo come "circostanza straordinaria" per non pagare i risarcimenti. Ma non tutte le condizioni meteorologiche scandinave qualificano. La Corte di Giustizia UE ha chiarito che le compagnie devono essere preparate alle condizioni stagionali tipiche dei loro hub.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                NON dà diritto al risarcimento
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li className="flex items-start gap-1.5"><span className="text-red-500 mt-0.5">✗</span>Bufera di neve eccezionale e imprevedibile, fuori norma storica</li>
                <li className="flex items-start gap-1.5"><span className="text-red-500 mt-0.5">✗</span>Chiusura aeroporto per emergenza meteorologica dichiarata con NOTAM</li>
                <li className="flex items-start gap-1.5"><span className="text-red-500 mt-0.5">✗</span>Sciopero del controllo del traffico aereo (ATC esterno)</li>
                <li className="flex items-start gap-1.5"><span className="text-red-500 mt-0.5">✗</span>Cenere vulcanica o altra emergenza imprevista</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                DÀ diritto al risarcimento
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li className="flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span>Neve invernale ordinaria (tipica di CPH/ARN/OSL)</li>
                <li className="flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span>De-icing (sbrinamento) di routine</li>
                <li className="flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span>Guasto tecnico all'aeromobile</li>
                <li className="flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span>Ritardo per rotazione — l'aereo precedente era in ritardo</li>
                <li className="flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span>Sciopero del personale SAS</li>
                <li className="flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span>Overbooking o cancellazione per motivi commerciali</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo SAS in ritardo o cancellato?</h3>
              <p className="text-blue-100 text-sm">Le rotte Italia–Scandinavia danno diritto a €400. Se hai perso una coincidenza intercontinentale, puoi arrivare a €600. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=sas-sk" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-500" />
            Autorità di vigilanza: a chi rivolgersi se SAS rifiuta
          </h2>
          <p className="text-gray-600 mb-4">
            Il paese competente dipende dall'aeroporto di partenza del tuo volo problematico.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Paese di partenza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Autorità competente</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Sito</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Italia (FCO, MXP, ecc.)</td><td className="p-3">ENAC — Ente Nazionale per l'Aviazione Civile</td><td className="p-3 text-blue-600">enac.gov.it</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Svezia (ARN, GOT)</td><td className="p-3">Transportstyrelsen</td><td className="p-3 text-blue-600">transportstyrelsen.se</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Danimarca (CPH)</td><td className="p-3">Trafikstyrelsen</td><td className="p-3 text-blue-600">trafikstyrelsen.dk</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Norvegia (OSL, BGO)</td><td className="p-3">Luftfartstilsynet (CE 261 via SEE/EEA)</td><td className="p-3 text-blue-600">luftfartstilsynet.no</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-amber-800 text-xs"><strong>Norvegia:</strong> la Norvegia non è membro UE ma ha recepito il CE 261/2004 tramite l'accordo SEE (Spazio Economico Europeo). Il risarcimento si applica pienamente per i voli da Oslo OSL operati da vettori europei o con destinazione UE.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo a SAS
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Raccogli la documentazione del volo", content: "Conserva: carta d'imbarco (o e-boarding pass), conferma di prenotazione con numero volo SK, ricevute spese extra (pasti, hotel, trasporti alternativi). Per voli con coincidenza, conserva entrambe le carte d'imbarco." },
              { step: "2", title: "Verifica il ritardo effettivo (soglia 3 ore)", content: "La soglia si calcola all'arrivo a destinazione, non alla partenza. Per voli con coincidenza su un unico biglietto, conta il ritardo rispetto all'orario originale della destinazione finale." },
              { step: "3", title: "Reclamo scritto a SAS", content: "Accedi al portale SAS (flysas.com) → sezione 'Customer Service' → 'File a complaint'. Indica numero volo SK, data, aeroporti, ritardo in ore, importo CE 261 richiesto (€400 o €600) e IBAN." },
              { step: "4", title: "Escalation se SAS rifiuta o non risponde", content: "Se SAS invoca circostanze straordinarie senza documentazione (es. 'neve' generica), contesta la risposta. Se non risponde entro 30 giorni o rifiuta ingiustificatamente, presenta reclamo all'ENAC (se la partenza era da Italia) o all'autorità del paese di partenza." }
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

        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo a SAS per te?</h3>
              <p className="text-indigo-100 text-sm">ClaimWinger conosce le tattiche di SAS per evitare i pagamenti. Gestiamo tutta la procedura — commissione: <strong>30% solo se otteniamo il risarcimento</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=sas-sk" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — SAS Scandinavian Airlines</h2>
          <div className="space-y-3">
            {[
              { q: "SAS Scandinavian Airlines è soggetta al CE 261/2004?", a: "Sì. SAS è un vettore con sede in Svezia e Danimarca (paesi UE). Il CE 261 si applica a tutti i voli SAS in partenza da aeroporti UE e a tutti i voli SAS in arrivo in UE operati da SAS." },
              { q: "Quanto risarcimento spetta per un volo SAS in ritardo dall'Italia?", a: "€400 per tutte le rotte Italia→Scandinavia (tutte oltre 1500 km). €600 se hai perso una coincidenza intercontinentale (NY, Bangkok, Toronto, ecc.) su un unico biglietto con arrivo in ritardo di oltre 3 ore." },
              { q: "Ho prenotato con SAS ma il volo era operato da SAS Connect: a chi faccio il reclamo?", a: "A SAS stesso. SAS Connect è la divisione regionale di SAS — il reclamo va all'entità SAS. Se invece il volo era operato da un partner codeshare diverso (LH, SK in realtà DY, ecc.), il reclamo va al vettore operante indicato sul boarding pass." },
              { q: "La neve in Scandinavia è una circostanza straordinaria che esclude il risarcimento SAS?", a: "No, non automaticamente. La neve invernale ordinaria a CPH/ARN/OSL è prevedibile e SAS deve prepararsi. Solo eventi eccezionali e imprevedibili (bufere straordinarie fuori norma con NOTAM) possono escludere il risarcimento." },
              { q: "Ho perso la coincidenza intercontinentale a Copenaghen per colpa di SAS: ho diritto a €600?", a: "Sì, se la destinazione finale era oltre 3.500 km dalla tua origine (es. New York, Bangkok, Toronto) su un unico biglietto, e sei arrivato con oltre 3 ore di ritardo rispetto all'orario originale." },
              { q: "Qual è l'autorità a cui rivolgersi se SAS rifiuta il risarcimento?", a: "Per voli partiti dall'Italia: ENAC (enac.gov.it). Da Svezia: Transportstyrelsen. Da Danimarca: Trafikstyrelsen. Da Norvegia: Luftfartstilsynet (CE 261 tramite accordo SEE/EEA)." }
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
              { href: "/it/blog/finnair-risarcimento", title: "Finnair: Risarcimento Voli", excerpt: "Guida CE 261 per Finnair — hub Helsinki, rotte Asia e circostanze nordiche." },
              { href: "/it/blog/swiss-risarcimento", title: "SWISS: Risarcimento Voli", excerpt: "LX — accordo CH-UE, hub Zurigo intercontinentale, BAZL vs ENAC." },
              { href: "/it/blog/lufthansa-risarcimento", title: "Lufthansa: Risarcimento Voli", excerpt: "Guida completa al risarcimento Lufthansa — hub FRA/MUC, LH Group." },
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
