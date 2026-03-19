import LayoutIt from "../../../components/LayoutIt";
import SEO from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function AeroportoVeronaRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il codice IATA dell'aeroporto di Verona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il codice IATA dell'aeroporto di Verona è VRN (Aeroporto Valerio Catullo di Verona Villafranca). Si trova a circa 12 km dal centro di Verona e serve anche il Lago di Garda, Vicenza e le Dolomiti."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo in ritardo da Verona VRN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dipende dalla distanza: fino a 1500 km → €250 (Roma, Londra, Berlino, Barcellona, Amsterdam); oltre 1500 km → €400 (Dublino, Edimburgo, Tel Aviv). Il ritardo deve essere almeno 3 ore all'arrivo a destinazione."
        }
      },
      {
        "@type": "Question",
        "name": "Qual è la differenza tra aeroporto di Verona VRN e Brescia VBS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Verona VRN (Valerio Catullo) è l'aeroporto principale con decine di rotte commerciali regolari, a ~12 km da Verona. Brescia VBS (Gabriele D'Annunzio, Montichiari) è a ~45 km da Brescia e ha traffico prevalentemente charter e cargo. Per la maggior parte delle destinazioni europee, VRN offre più frequenze."
        }
      },
      {
        "@type": "Question",
        "name": "I ritardi per neve o ghiaccio in inverno a Verona danno diritto al risarcimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solo in parte. La neve intensa o il ghiaccio estremo possono essere circostanze straordinarie se eccezionali. Tuttavia, il de-icing (sbrinamento) è un'operazione di routine a Verona VRN in inverno e NON esonera la compagnia dalla responsabilità — un ritardo causato da sbrinamento ordinario dà diritto al risarcimento CE 261."
        }
      },
      {
        "@type": "Question",
        "name": "Come faccio reclamo per un volo cancellato da Verona durante l'Arena di Verona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il picco estivo dell'Arena di Verona causa alta domanda sui voli. Le cancellazioni per overbooking o problemi operativi del vettore durante questi periodi sono pienamente coperte dal CE 261. Presenta reclamo alla compagnia entro 2 anni. Se risponde negativamente, escalation ENAC su enac.gov.it."
        }
      },
      {
        "@type": "Question",
        "name": "A chi mi rivolgo se la compagnia rifiuta il risarcimento da Verona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'autorità di riferimento per i voli in partenza da aeroporti italiani è l'ENAC (Ente Nazionale per l'Aviazione Civile). Puoi presentare reclamo formale su enac.gov.it allegando la risposta negativa della compagnia o la mancata risposta entro 30 giorni."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aeroporto Verona Villafranca (VRN): Risarcimento Voli 2026",
    "description": "Volo in ritardo o cancellato a Verona VRN? Guida completa: importi CE 261, VRN vs VBS Brescia, voli charter Arena, procedura ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Verona Villafranca (VRN): Risarcimento Voli 2026"
        description="Volo in ritardo o cancellato a Verona VRN? Guida completa: importi CE 261, VRN vs VBS Brescia, voli charter Arena di Verona, procedura ENAC."
        canonical="https://claimwinger.com/it/blog/aeroporto-verona-villafranca-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">Aeroporto Verona VRN</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">Aeroporti</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />8 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Verona Villafranca (VRN): Risarcimento Voli 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo in ritardo o cancellato a Verona Catullo? Il CE 261/2004 ti garantisce fino a <strong>€400 di risarcimento</strong>. Dalla stagione dell'Arena ai voli invernali sulle Dolomiti: ecco tutto quello che devi sapere.
          </p>
        </header>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-amber-900 mb-2">Aeroporto Valerio Catullo di Verona Villafranca — dati chiave</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-amber-800">
                <div><strong>Codice IATA:</strong> VRN</div>
                <div><strong>Codice ICAO:</strong> LIPX</div>
                <div><strong>Posizione:</strong> ~12 km dal centro di Verona, comune di Villafranca</div>
                <div><strong>Gestore:</strong> Aeroporto Catullo S.p.A.</div>
                <div><strong>Bacino d'utenza:</strong> Verona, Lago di Garda, Vicenza, Mantova, Dolomiti</div>
                <div><strong>Collegamento:</strong> Bus navetta per Verona centro e stazione FS</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-amber-500" />
            VRN vs VBS (Brescia): quale aeroporto scegliere?
          </h2>
          <p className="text-gray-600 mb-4">
            Il Nord-Est italiano dispone di due aeroporti nell'area Verona–Brescia–Lago di Garda: Verona VRN e Brescia Montichiari VBS. Per chi deve presentare un reclamo CE 261, la distinzione è cruciale: il risarcimento dipende dall'aeroporto di partenza effettivo.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full">VRN</span>
                  Verona Valerio Catullo
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ~12 km dal centro di Verona</li>
                  <li>• Traffico commerciale regolare e charter</li>
                  <li>• Ryanair, easyJet, Wizz Air, Lufthansa, Vueling</li>
                  <li>• Decine di rotte europee settimanali</li>
                  <li>• Alta stagione: Arena di Verona (giugno–settembre)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">VBS</span>
                  Brescia Montichiari G. D'Annunzio
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ~45 km da Brescia, ~65 km da Verona</li>
                  <li>• Traffico prevalentemente charter e cargo</li>
                  <li>• Minori frequenze di voli regolari</li>
                  <li>• Usato per tour operator in alta stagione turistica</li>
                  <li>• CE 261 si applica comunque da VBS se volo EU</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-amber-50 rounded-lg">
              <p className="text-amber-800 text-xs"><strong>Regola pratica:</strong> per il reclamo CE 261 conta l'aeroporto effettivo di partenza indicato sul tuo biglietto. Se sei partito da VRN, il reclamo si basa su VRN. Se da VBS, su VBS. In entrambi i casi l'autorità competente è l'ENAC.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento: quanto spetta da Verona VRN?
          </h2>
          <p className="text-gray-600 mb-4">
            Il CE 261/2004 prevede tre soglie di importo in base alla distanza della rotta. Quasi tutte le rotte europee da VRN rientrano nella fascia €250, con alcune eccezioni (Irlanda, Scozia, Medio Oriente) che raggiungono i €400.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">€250</div>
              <div className="text-xs text-green-700 font-medium">≤ 1.500 km</div>
              <div className="text-xs text-gray-500 mt-1">Roma, Londra, Berlino, Barcellona, Amsterdam</div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-600 mb-1">€400</div>
              <div className="text-xs text-amber-700 font-medium">1.500–3.500 km</div>
              <div className="text-xs text-gray-500 mt-1">Dublino, Edimburgo, Tel Aviv</div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-red-500 mb-1">€600</div>
              <div className="text-xs text-red-600 font-medium">&gt; 3.500 km</div>
              <div className="text-xs text-gray-500 mt-1">Voli intercontinentali (nessuna rotta diretta da VRN)</div>
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Destinazione</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza da VRN</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma (FCO)</td><td className="p-3">~410 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">ITA Airways</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Catania (CTA)</td><td className="p-3">~890 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Palermo (PMO)</td><td className="p-3">~955 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Londra (LTN/STN)</td><td className="p-3">~1.400 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Berlino (BER)</td><td className="p-3">~1.120 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Ryanair, Wizz Air</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Barcellona (BCN)</td><td className="p-3">~1.310 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Vueling, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Amsterdam (AMS)</td><td className="p-3">~1.100 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">KLM, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Madrid (MAD)</td><td className="p-3">~1.490 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Ryanair, Vueling</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Bruxelles (BRU/CRL)</td><td className="p-3">~1.020 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Ryanair, Brussels Airlines</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Varsavia (WAW)</td><td className="p-3">~1.150 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Wizz Air, LOT</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Cracovia (KRK)</td><td className="p-3">~960 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Wizz Air, Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Dublino (DUB)</td><td className="p-3">~1.760 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Edimburgo (EDI)</td><td className="p-3">~1.750 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Tel Aviv (TLV)</td><td className="p-3">~2.290 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">El Al</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">La maggioranza delle rotte da VRN verso il continente europeo è sotto 1.500 km → €250. Solo Irlanda, Scozia e Medio Oriente superano la soglia → €400.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-amber-500" />
            Stagionalità a Verona: Arena, lago e Dolomiti
          </h2>
          <p className="text-gray-600 mb-4">
            L'aeroporto di Verona ha due picchi di traffico ben distinti, che influenzano la probabilità di disservizi e il diritto al risarcimento:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-bold text-amber-900 mb-2">Estate: Arena di Verona e Lago di Garda</h3>
              <p className="text-gray-600 text-sm mb-2">
                Da giugno a settembre l'Arena di Verona ospita l'opera all'aperto, attirando turisti da tutta Europa. Il traffico a VRN aumenta significativamente con charter e voli extra. In caso di cancellazione o overbooking durante questi periodi di alta stagione, il CE 261 si applica pienamente.
              </p>
              <div className="flex items-start gap-2 mt-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-600">L'alta domanda non è una circostanza straordinaria — le cancellazioni per problemi operativi o overbooking danno diritto al risarcimento.</p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-2">Inverno: sci sulle Dolomiti e de-icing</h3>
              <p className="text-gray-600 text-sm mb-2">
                In inverno, VRN serve come gateway per le stazioni sciistiche delle Dolomiti (Cortina, Madonna di Campiglio, Bolzano). Il traffico charter sciistico è intenso da dicembre a marzo.
              </p>
              <div className="flex items-start gap-2 mt-2">
                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-600"><strong>Attenzione:</strong> il de-icing (sbrinamento) è un'operazione di routine — un ritardo causato da sbrinamento ordinario NON è una circostanza straordinaria e dà diritto al risarcimento.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-800 mb-2 text-sm">Cosa è straordinario e cosa non lo è a VRN</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-medium text-red-600 mb-1">NON dà diritto al risarcimento (circostanza straordinaria)</p>
                <ul className="text-xs text-gray-600 space-y-0.5">
                  <li>• Tromba d'aria o tempesta eccezionale e imprevedibile</li>
                  <li>• Sciopero del controllo del traffico aereo (ATC)</li>
                  <li>• Chiusura d'emergenza dell'aeroporto per evento imprevedibile</li>
                  <li>• Conflitti politici o emergenze sanitarie dichiarate</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-medium text-green-600 mb-1">DÀ diritto al risarcimento</p>
                <ul className="text-xs text-gray-600 space-y-0.5">
                  <li>• De-icing (sbrinamento) di routine</li>
                  <li>• Problemi tecnici all'aeromobile</li>
                  <li>• Cancellazione per overbooking o riorganizzazione interna</li>
                  <li>• Ritardo dovuto a equipaggio non disponibile</li>
                  <li>• Sciopero del personale della compagnia aerea</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo in ritardo da Verona VRN?</h3>
              <p className="text-amber-100 text-sm">Verifica subito il tuo diritto a €250–€400. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=verona-vrn" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-amber-700 font-bold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-amber-500" />
            Compagnie aeree a Verona VRN
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">FR</span>
                Ryanair
              </h3>
              <p className="text-gray-600 text-sm">Principale vettore a VRN con il maggior numero di rotte verso UK, Spagna, Polonia, Irlanda e Sud Italia. Reclamo: ryanair.com → "Reclami". Escalation: ENAC (voli da VRN).</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">U2</span>
                easyJet
              </h3>
              <p className="text-gray-600 text-sm">easyJet opera rotte da VRN verso Londra, Berlino, Amsterdam e destinazioni europee. Reclamo: easyjet.com. Escalation ENAC o tribunale.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full">W6</span>
                Wizz Air
              </h3>
              <p className="text-gray-600 text-sm">Wizz Air collega VRN all'Europa orientale (Budapest, Varsavia, Bucarest, Cracovia). CE 261 pienamente applicabile. Reclamo: wizzair.com.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">VY</span>
                Vueling
              </h3>
              <p className="text-gray-600 text-sm">Vueling opera rotte verso Barcellona e Madrid da VRN. Reclamo tramite vueling.com. Escalation: ENAC (da VRN) o AESA (rientro da Spagna).</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">AZ</span>
                ITA Airways
              </h3>
              <p className="text-gray-600 text-sm">ITA opera voli nazionali da VRN verso Roma FCO. Distanza &lt;1500 km → €250. Reclamo: ita-airways.com.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">LH</span>
                Lufthansa / charter
              </h3>
              <p className="text-gray-600 text-sm">Lufthansa e vettori charter (TUI, Neos) operano stagionalmente da VRN. Il CE 261 si applica a tutti i voli operati da vettori UE o in partenza dall'UE.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-amber-500" />
            Come presentare il reclamo da Verona VRN
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Documenta il problema in aeroporto", content: "Conserva carta d'imbarco, ricevute spese extra (pasti, hotel), comunicazioni via SMS o email della compagnia. Fotografa i pannelli degli arrivi/partenze di VRN con l'orario del ritardo." },
              { step: "2", title: "Verifica il ritardo effettivo all'arrivo (soglia 3 ore)", content: "La soglia CE 261 si calcola sull'orario di arrivo effettivo, non di partenza. Un volo con 4 ore di ritardo alla partenza che recupera 1 ora arriva con 3 ore — soglia esatta, diritto al risarcimento." },
              { step: "3", title: "Reclamo scritto alla compagnia", content: "Usa il portale ufficiale della compagnia (ryanair.com, easyjet.com, wizzair.com, ecc.). Indica codice volo, data, aeroporto VRN, ritardo accertato, importo richiesto secondo CE 261 e IBAN per il rimborso." },
              { step: "4", title: "Escalation ENAC se necessario", content: "Se la compagnia rifiuta o non risponde entro 30 giorni, puoi presentare reclamo formale su enac.gov.it. L'ENAC può sanzionare la compagnia e supportare la tua procedura di risarcimento." }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">{item.step}</div>
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
            Condizioni che danno diritto al risarcimento da VRN
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Ritardo</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />≥ 3 ore di ritardo all'arrivo</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />Anche ritardo per de-icing (non straordinario)</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />Problemi tecnici all'aeromobile</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Cancellazione</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />Avviso &lt;14 giorni prima</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />Overbooking</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />Riorganizzazione interna del vettore</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Imbarco negato</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />Volo pieno + passeggero con prenotazione valida</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />Risarcimento immediato + rimborso o riprotezione</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo per te?</h3>
              <p className="text-green-100 text-sm">ClaimWinger si occupa di tutto: reclamo, follow-up e escalation ENAC. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=verona-vrn" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Aeroporto Verona VRN</h2>
          <div className="space-y-3">
            {[
              { q: "Qual è il codice IATA dell'aeroporto di Verona?", a: "Il codice IATA è VRN (Aeroporto Valerio Catullo di Verona Villafranca), situato a ~12 km dal centro di Verona. Serve Verona, il Lago di Garda, Vicenza e le Dolomiti." },
              { q: "Quanto risarcimento spetta per un volo in ritardo da Verona VRN?", a: "Per rotte ≤1500 km (Roma, Londra, Berlino, Barcellona, Amsterdam) → €250. Per rotte 1500–3500 km (Dublino, Edimburgo, Tel Aviv) → €400. Il ritardo deve essere almeno 3 ore all'arrivo." },
              { q: "Qual è la differenza tra VRN (Verona) e VBS (Brescia)?", a: "Verona VRN è l'aeroporto principale con rotte commerciali regolari. Brescia VBS (Montichiari) ha traffico prevalentemente charter e cargo, con meno frequenze. Per il CE 261 conta l'aeroporto effettivo di partenza del tuo biglietto." },
              { q: "I ritardi per de-icing (sbrinamento) a Verona danno diritto al risarcimento?", a: "Sì. Il de-icing è un'operazione di routine in inverno e NON costituisce circostanza straordinaria. Un ritardo causato da sbrinamento ordinario dà pienamente diritto al risarcimento CE 261." },
              { q: "Come faccio reclamo per un volo cancellato durante l'Arena di Verona?", a: "Le cancellazioni per overbooking o problemi operativi durante l'alta stagione estiva (Arena di Verona) sono pienamente coperte dal CE 261. Presenta reclamo alla compagnia entro 2 anni. Se rifiuta, escalation ENAC su enac.gov.it." },
              { q: "A chi mi rivolgo se la compagnia rifiuta il risarcimento da Verona?", a: "L'autorità competente per i voli da aeroporti italiani è l'ENAC. Puoi presentare reclamo formale su enac.gov.it allegando la risposta negativa o la mancata risposta della compagnia entro 30 giorni." }
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
              { href: "/it/blog/aeroporto-bologna-guglielmo-marconi-risarcimento", title: "Aeroporto Bologna BLQ", excerpt: "Guida al risarcimento per l'aeroporto dell'Emilia-Romagna, nebbia padana e rotte." },
              { href: "/it/blog/aeroporto-venezia-marco-polo-risarcimento", title: "Aeroporto Venezia VCE", excerpt: "VCE vs TSF (Treviso), perdita coincidenza crociera e CE 261." },
              { href: "/it/blog/aeroporto-torino-caselle-risarcimento", title: "Aeroporto Torino TRN", excerpt: "Charter sciistici alpini, de-icing e risarcimenti da Torino Caselle." },
              { href: "/it/blog/ryanair-italia-risarcimento", title: "Ryanair Italia: Guida Completa", excerpt: "Come ottenere fino a €600 da Ryanair per ritardi e cancellazioni." }
            ].map((article) => (
              <Link key={article.href} href={article.href} className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-amber-300 hover:shadow-md transition-all">
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
