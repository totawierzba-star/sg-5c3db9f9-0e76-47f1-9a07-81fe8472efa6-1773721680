import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function AeroportoGenovaRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il codice IATA dell'aeroporto di Genova?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il codice IATA dell'aeroporto di Genova è GOA (Aeroporto Cristoforo Colombo). Si trova a circa 6 km dal centro della città, su una penisola artificiale costruita nel Mar Ligure con una pista che si protende sul mare."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo in ritardo da Genova GOA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dipende dalla distanza: fino a 1500 km → €250 (Roma, Londra, Berlino, Barcellona, Parigi, Amsterdam); 1500–3500 km → €400 (Dublino). Il ritardo deve essere almeno 3 ore all'arrivo a destinazione."
        }
      },
      {
        "@type": "Question",
        "name": "I ritardi dovuti a vento tramontana o nebbia marina a Genova danno diritto al risarcimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dipende dall'intensità. Il vento tramontana ordinario non è una circostanza straordinaria — se la compagnia non gestisce adeguatamente le operazioni, il ritardo dà diritto al risarcimento. Solo eventi meteorologici eccezionali e imprevedibili (tempeste violente con NOTAM di chiusura) possono escludere il risarcimento."
        }
      },
      {
        "@type": "Question",
        "name": "La pista sul mare dell'aeroporto di Genova causa più ritardi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La pista di GOA è costruita su una piattaforma artificiale nel Mar Ligure ed è esposta a condizioni meteorologiche marine come vento e nebbia. Tuttavia, queste condizioni sono note alla compagnia — non si tratta di eventi straordinari imprevedibili. I ritardi gestibili danno comunque diritto al risarcimento CE 261."
        }
      },
      {
        "@type": "Question",
        "name": "Ho perso il traghetto per la Sardegna a causa di un ritardo aereo a Genova: ho diritto al risarcimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, se avevi una prenotazione sul traghetto come parte di un pacchetto o biglietto integrato, puoi richiedere il risarcimento CE 261 per il volo in ritardo. Se l'aereo e il traghetto erano prenotazioni separate, il risarcimento CE 261 copre comunque il disagio aereo (€250–€400), anche se non copre direttamente le spese del traghetto perso."
        }
      },
      {
        "@type": "Question",
        "name": "A chi mi rivolgo se la compagnia rifiuta il risarcimento da Genova?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'autorità competente per i voli in partenza da aeroporti italiani è l'ENAC (Ente Nazionale per l'Aviazione Civile). Puoi presentare reclamo formale su enac.gov.it allegando la risposta negativa della compagnia o la mancata risposta entro 30 giorni."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aeroporto Genova Cristoforo Colombo (GOA): Risarcimento Voli 2026",
    "description": "Volo in ritardo o cancellato a Genova GOA? Guida completa: importi CE 261, pista sul mare, vento tramontana, procedura ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Genova Cristoforo Colombo (GOA): Risarcimento Voli 2026"
        description="Volo in ritardo o cancellato a Genova GOA? Guida completa: importi CE 261, pista sul mare, vento tramontana, porto e procedura ENAC."
        canonical="https://claimwinger.com/it/blog/aeroporto-genova-cristoforo-colombo-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">Aeroporto Genova GOA</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Aeroporti</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />7 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Genova Cristoforo Colombo (GOA): Risarcimento Voli 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo in ritardo o cancellato a Genova? La pista di GOA si protende sul mare, esponendosi a vento e nebbia marina. Ma il CE 261/2004 ti garantisce fino a <strong>€400 di risarcimento</strong> anche quando le condizioni meteo sono difficili.
          </p>
        </header>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-green-900 mb-2">Aeroporto Cristoforo Colombo di Genova — dati chiave</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-green-800">
                <div><strong>Codice IATA:</strong> GOA</div>
                <div><strong>Codice ICAO:</strong> LIMJ</div>
                <div><strong>Posizione:</strong> ~6 km dal centro di Genova, penisola artificiale sul mare</div>
                <div><strong>Gestore:</strong> Aeroporto di Genova S.p.A.</div>
                <div><strong>Bacino d'utenza:</strong> Genova, Liguria, Alto Piemonte, porto di Genova</div>
                <div><strong>Collegamento:</strong> Bus Volabus verso stazione Brignole / Piazza De Ferrari</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-green-500" />
            La pista sul mare: unicità e implicazioni per i ritardi
          </h2>
          <p className="text-gray-600 mb-4">
            L'aeroporto di Genova Cristoforo Colombo è uno dei pochi al mondo con la pista costruita interamente su una piattaforma artificiale che si protende nel Mar Ligure. Questa caratteristica rende GOA esposto a condizioni meteorologiche marine che altri aeroporti italiani non sperimentano.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-2">Fattori meteo tipici a GOA</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Vento tramontana:</strong> vento nordico dagli Appennini, frequente in autunno-inverno. Può causare raffiche che complicano l'atterraggio.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Nebbia marina:</strong> il mare Ligure può generare banchi di nebbia, specialmente in primavera e autunno.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Libeccio (vento SW):</strong> vento sudoccidentale che può limitare le operazioni sulla pista in direzione mare.</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-900 mb-2">Cosa significa per il CE 261?</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Le condizioni meteomarine ordinarie a GOA sono <strong>note e prevedibili</strong> — non sono circostanze straordinarie.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Solo eventi meteorologici eccezionali (tempeste fuori norma con NOTAM) possono escludere il risarcimento.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Se la compagnia invoca il meteo come scusa per un ritardo ordinario, hai diritto a contestare e richiedere il CE 261.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm">
                <strong>Attenzione:</strong> se la compagnia ti dice "siamo esenti per motivi meteo", chiedi sempre quale evento meteorologico specifico ha causato il ritardo e se era classificato come eccezionale dalle autorità. Condizioni meteo ordinarie liguri NON esonerano dalla responsabilità.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento per le rotte principali da Genova GOA
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">€250</div>
              <div className="text-xs text-green-700 font-medium">≤ 1.500 km</div>
              <div className="text-xs text-gray-500 mt-1">La quasi totalità delle rotte da GOA</div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-600 mb-1">€400</div>
              <div className="text-xs text-amber-700 font-medium">1.500–3.500 km</div>
              <div className="text-xs text-gray-500 mt-1">Dublino, destinazioni oltre 1500 km</div>
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Destinazione</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza da GOA</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma (FCO)</td><td className="p-3">~375 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">ITA Airways</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Catania (CTA)</td><td className="p-3">~850 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Londra (LTN/LGW)</td><td className="p-3">~1.285 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Parigi (CDG/ORY)</td><td className="p-3">~945 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Air France, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Barcellona (BCN)</td><td className="p-3">~815 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Vueling, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Madrid (MAD)</td><td className="p-3">~1.280 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Iberia, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Amsterdam (AMS)</td><td className="p-3">~1.080 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">KLM, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Berlino (BER)</td><td className="p-3">~1.010 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Bruxelles (CRL)</td><td className="p-3">~955 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Manchester (MAN)</td><td className="p-3">~1.375 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Dublino (DUB)</td><td className="p-3">~1.690 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Quasi tutte le destinazioni da GOA rientrano nella fascia €250. Solo Dublino e destinazioni oltre 1.500 km raggiungono i €400. GOA non ha rotte intercontinentali dirette (€600).</p>
        </section>

        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo in ritardo da Genova?</h3>
              <p className="text-green-100 text-sm">Verifica subito il tuo diritto a €250–€400. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=genova-goa" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-green-500" />
            Genova porto e aeroporto: connessione nave–aereo
          </h2>
          <p className="text-gray-600 mb-4">
            Genova è il porto commerciale e passeggeri più importante d'Italia. Molti viaggiatori combinano un volo da/per GOA con un traghetto dal porto di Genova verso Sardegna, Corsica, Sicilia o Barcellona. Questa combinazione crea scenari particolari per il CE 261.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Scenari nave+aereo: quando si applica il CE 261?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xs">1</div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Pacchetto integrato (aereo + traghetto prenotati insieme)</p>
                  <p className="text-gray-600 text-xs">Il CE 261 copre il ritardo aereo. In più, potresti avere diritti anche per la perdita della coincidenza nave (pacchetto viaggio — Dir. 2015/2302/UE).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-xs">2</div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Prenotazioni separate (aereo e traghetto indipendenti)</p>
                  <p className="text-gray-600 text-xs">Il CE 261 copre il ritardo aereo (€250–€400). Le spese del traghetto perso non sono automaticamente coperte, ma puoi chiedere rimborso spese documentate alla compagnia aerea.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs">3</div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Volo cancellato: diritto a rimborso + riprotezione</p>
                  <p className="text-gray-600 text-xs">Se il volo è cancellato, puoi scegliere tra rimborso integrale del biglietto o riprotezione sul primo volo disponibile. Spetta anche assistenza in aeroporto (pasti, hotel se necessario).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-green-500" />
            Compagnie aeree a Genova GOA
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">FR</span>
                Ryanair
              </h3>
              <p className="text-gray-600 text-sm">Principale operatore a GOA con rotte verso UK, Spagna, Polonia, Irlanda, Sud Italia. Reclamo: ryanair.com → "Reclami". Escalation ENAC da GOA.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">U2</span>
                easyJet
              </h3>
              <p className="text-gray-600 text-sm">easyJet opera rotte da GOA verso Londra, Parigi, Berlino, Amsterdam. Reclamo: easyjet.com. Escalation ENAC o CAA (voli da UK).</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">VY</span>
                Vueling
              </h3>
              <p className="text-gray-600 text-sm">Vueling collega GOA a Barcellona. Reclamo via vueling.com. Escalation ENAC (da GOA) o AESA (su voli da Spagna).</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">AZ</span>
                ITA Airways
              </h3>
              <p className="text-gray-600 text-sm">ITA opera voli nazionali da GOA, principalmente verso Roma FCO. Distanza &lt;1500 km → €250. Reclamo: ita-airways.com.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-500" />
            Come presentare il reclamo da Genova GOA
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Documenta il disservizio in aeroporto", content: "Conserva carta d'imbarco, ricevute pasti/hotel se hai aspettato in aeroporto, screenshot delle notifiche della compagnia. Fotografa i pannelli partenze di GOA con l'orario del ritardo." },
              { step: "2", title: "Calcola il ritardo all'arrivo (soglia 3 ore)", content: "La soglia CE 261 si calcola sull'orario effettivo di apertura delle porte all'arrivo. Se la compagnia invoca il meteo come causa, verifica che si tratti di evento meteorologico eccezionale — non semplice vento tramontana ordinario." },
              { step: "3", title: "Reclamo scritto alla compagnia operatrice", content: "Usa il portale ufficiale della compagnia (ryanair.com, easyjet.com, vueling.com, ecc.). Indica volo, data, codice GOA, ritardo accertato e importo CE 261 richiesto secondo distanza." },
              { step: "4", title: "Escalation ENAC in caso di rifiuto", content: "Se la compagnia rifiuta o non risponde entro 30 giorni, presenta reclamo formale su enac.gov.it. L'ENAC ha potere sanzionatorio e può supportare la tua procedura di risarcimento." }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{item.step}</div>
                <div className="flex-1 pb-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-r from-teal-600 to-green-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo per te?</h3>
              <p className="text-teal-100 text-sm">ClaimWinger si occupa di tutto: reclamo, follow-up e escalation ENAC. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=genova-goa" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-teal-700 font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Aeroporto Genova GOA</h2>
          <div className="space-y-3">
            {[
              { q: "Qual è il codice IATA dell'aeroporto di Genova?", a: "Il codice IATA è GOA (Aeroporto Cristoforo Colombo). Si trova a ~6 km dal centro di Genova, su una piattaforma artificiale nel Mar Ligure." },
              { q: "Quanto risarcimento spetta per un volo in ritardo da Genova GOA?", a: "Per rotte ≤1500 km (Roma, Londra, Parigi, Barcellona, Amsterdam) → €250. Per rotte oltre 1500 km (Dublino) → €400. Il ritardo deve essere almeno 3 ore all'arrivo." },
              { q: "I ritardi per vento tramontana o nebbia marina a Genova danno diritto al risarcimento?", a: "Nella maggior parte dei casi sì. Il vento tramontana ordinario e la nebbia marina sono condizioni note e prevedibili a GOA — non sono circostanze straordinarie. Solo eventi meteorologici davvero eccezionali (tempeste fuori norma con NOTAM) possono esonerare la compagnia." },
              { q: "La pista sul mare di Genova causa più ritardi?", a: "La pista di GOA è esposta a condizioni marine, ma queste sono note alla compagnia e vengono gestite operativamente. I ritardi per condizioni ordinarie danno comunque diritto al risarcimento CE 261." },
              { q: "Ho perso il traghetto per la Sardegna a causa di un ritardo aereo: ho diritto al risarcimento?", a: "Sì, il CE 261 copre il ritardo aereo (€250–€400). Se traghetto e aereo erano parte di un pacchetto integrato, puoi avere diritti anche per la coincidenza persa. Se erano prenotazioni separate, il CE 261 copre il disagio aereo, ma non automaticamente le spese del traghetto perso." },
              { q: "A chi mi rivolgo se la compagnia rifiuta il risarcimento da Genova?", a: "L'ENAC (enac.gov.it) è l'autorità competente per i voli in partenza da aeroporti italiani. Puoi presentare reclamo formale allegando la risposta negativa della compagnia." }
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
              { href: "/it/blog/aeroporto-torino-caselle-risarcimento", title: "Aeroporto Torino TRN", excerpt: "Guida al risarcimento per l'aeroporto del Piemonte, charter sciistici e de-icing." },
              { href: "/it/blog/aeroporto-milano-linate-ritardi", title: "Aeroporto Milano Linate LIN", excerpt: "Guida LIN con confronto LIN vs MXP e nebbia padana." },
              { href: "/it/blog/aeroporto-pisa-galileo-galilei-risarcimento", title: "Aeroporto Pisa PSA", excerpt: "Base Ryanair in Toscana e PSA come alternativa di Firenze." },
              { href: "/it/blog/da-quante-ore-ritardo-diritto-risarcimento", title: "Da Quante Ore di Ritardo Hai Diritto?", excerpt: "La regola delle 3 ore spiegata con esempi pratici." }
            ].map((article) => (
              <Link key={article.href} href={article.href} className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 hover:shadow-md transition-all">
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
