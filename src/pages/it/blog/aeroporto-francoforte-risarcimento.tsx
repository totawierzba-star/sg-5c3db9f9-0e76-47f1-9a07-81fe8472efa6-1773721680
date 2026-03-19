import LayoutIt from "../../../components/LayoutIt";
import SEO from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function AeroportoFrancoforteRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il codice IATA dell'aeroporto di Francoforte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il codice IATA dell'aeroporto principale di Francoforte è FRA (Frankfurt Airport). Si trova a circa 12 km dal centro di Francoforte ed è il principale hub di Lufthansa e uno dei più trafficati d'Europa. Ha due terminal: T1 (hub Lufthansa) e T2 (altri vettori)."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo in ritardo da Francoforte FRA verso l'Italia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "€250 per le rotte verso Centro-Nord Italia (Roma FCO, Milano MXP, Venezia, Bologna — tutte sotto 1.500 km). €400 per le rotte verso Sud Italia (Napoli, Catania, Palermo, Bari — oltre 1.500 km). €600 per coincidenze intercontinentali perse su unico biglietto."
        }
      },
      {
        "@type": "Question",
        "name": "Ho perso la coincidenza intercontinentale a Francoforte per colpa di Lufthansa: ho diritto a €600?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì. Se il biglietto Italia→FRA→New York/Tokyo/Dubai/São Paulo/ecc. era su un unico itinerario e sei arrivato alla destinazione finale con oltre 3 ore di ritardo, il risarcimento è €600. Francoforte è il principale hub intercontinentale di Lufthansa."
        }
      },
      {
        "@type": "Question",
        "name": "Qual è la differenza tra Frankfurt FRA e Frankfurt Hahn HHN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Frankfurt FRA (Main) è l'aeroporto principale a ~12 km dal centro di Francoforte. Frankfurt Hahn HHN è un ex aeroporto militare a ~120 km da Francoforte, usato principalmente da Ryanair come 'Frankfurt Hahn'. Se il tuo biglietto dice 'Frankfurt' o 'Francoforte', controlla sempre il codice aeroporto: FRA ≠ HHN."
        }
      },
      {
        "@type": "Question",
        "name": "Come funziona il cambio terminal T1–T2 a Francoforte FRA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I terminal T1 e T2 di Francoforte sono collegati con lo Sky Line, una monorotaia interna. Il trasferimento T1↔T2 richiede circa 10-15 minuti. Attenzione: se il volo precedente arrivava da fuori Schengen (es. USA) e il successivo parte da T1, serve ri-passare il controllo sicurezza. Il tempo minimo di coincidenza standard a FRA è 45-90 minuti."
        }
      },
      {
        "@type": "Question",
        "name": "A quale autorità mi rivolgo per un reclamo su un volo da Francoforte FRA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'autorità competente per i voli in partenza dalla Germania è l'LBA (Luftfahrt-Bundesamt, lba.de). Per i voli in partenza da aeroporti italiani verso Francoforte, l'autorità è l'ENAC (enac.gov.it)."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aeroporto Francoforte FRA: Risarcimento Voli 2026 — fino a €600",
    "description": "Volo in ritardo o cancellato a Francoforte FRA? CE 261/2004, €250–€600, hub Lufthansa, T1 vs T2, FRA vs HHN Hahn, LBA vs ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Francoforte FRA: Risarcimento Voli 2026 — fino a €600"
        description="Volo in ritardo a Francoforte FRA? CE 261/2004, €250–€600, hub Lufthansa, T1 vs T2, FRA vs Hahn HHN, coincidenze intercontinentali, LBA vs ENAC."
        canonical="https://claimwinger.com/it/blog/aeroporto-francoforte-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">Aeroporto Francoforte FRA</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">Hub Europei</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />8 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Francoforte FRA: Risarcimento Voli 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo in ritardo o cancellato a Francoforte? Come hub intercontinentale principale di Lufthansa, FRA è il luogo dove più spesso si perdono coincidenze per Asia, Americhe e Africa. Il CE 261/2004 ti garantisce fino a <strong>€600 di risarcimento</strong>.
          </p>
        </header>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-amber-900 mb-2">Frankfurt Airport — dati chiave</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-amber-800">
                <div><strong>Codice IATA:</strong> FRA</div>
                <div><strong>Codice ICAO:</strong> EDDF</div>
                <div><strong>Posizione:</strong> ~12 km dal centro di Francoforte</div>
                <div><strong>Terminal:</strong> T1 (hub Lufthansa) + T2 (altri vettori)</div>
                <div><strong>Vettore principale:</strong> Lufthansa (LH) — hub mondiale</div>
                <div><strong>Autorità CE 261:</strong> LBA — Luftfahrt-Bundesamt</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Frankfurt FRA vs Frankfurt Hahn HHN: non è lo stesso aeroporto
          </h2>
          <p className="text-gray-600 mb-4">
            Una fonte di confusione frequente per i passeggeri italiani: Ryanair usa "Frankfurt Hahn" (HHN), un ex aeroporto militare a ~120 km da Francoforte, commercializzandolo come aeroporto di Francoforte. I due aeroporti sono distinti per il CE 261.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 border-2">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <span className="bg-amber-200 text-amber-900 text-sm font-bold px-2 py-0.5 rounded">FRA</span>
                Frankfurt Airport (Main)
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ~12 km dal centro di Francoforte</li>
                <li>• Lufthansa (T1), Air France, ITA, British Airways, ecc.</li>
                <li>• Connesso al centro con S-Bahn (15 min) e ICE</li>
                <li>• Il principale hub intercontinentale d'Europa</li>
                <li>• ~60 milioni passeggeri/anno</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-gray-200 text-gray-700 text-sm font-bold px-2 py-0.5 rounded">HHN</span>
                Frankfurt Hahn Airport
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ~120 km da Francoforte (vicino a Coblenza)</li>
                <li>• Principalmente Ryanair (voli low-cost)</li>
                <li>• Raggiungibile solo con autobus (2+ ore)</li>
                <li>• ~3 milioni passeggeri/anno (molto meno di FRA)</li>
                <li>• CE 261 si applica ugualmente da HHN</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
            <p className="text-amber-800 text-sm"><strong>Controlla il tuo biglietto:</strong> il codice aeroporto è sempre nella conferma di prenotazione e sul boarding pass. FRA = Francoforte principale; HHN = Hahn (120 km fuori città). Per il reclamo CE 261 conta il codice effettivo di partenza.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento: rotte FRA ↔ Italia
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Rotta</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento diretto</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma FCO → Francoforte FRA</td><td className="p-3">~1.095 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Lufthansa, ITA Airways</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Milano MXP → Francoforte FRA</td><td className="p-3">~690 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Lufthansa, ITA Airways</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Venezia VCE → Francoforte FRA</td><td className="p-3">~945 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Lufthansa</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Bologna BLQ → Francoforte FRA</td><td className="p-3">~820 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Lufthansa, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Torino TRN → Francoforte FRA</td><td className="p-3">~760 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Lufthansa</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Napoli NAP → Francoforte FRA</td><td className="p-3">~1.530 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Lufthansa, easyJet</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Catania CTA → Francoforte FRA</td><td className="p-3">~1.730 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair, Lufthansa</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Palermo PMO → Francoforte FRA</td><td className="p-3">~1.775 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair, Lufthansa</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-red-800 text-sm"><strong>€600 per coincidenze intercontinentali:</strong> Lufthansa opera da FRA verso New York, Chicago, Los Angeles, Tokyo, Hong Kong, Singapore, Dubai, São Paulo, Johannesburg e molte altre. Un ritardo su Italia→FRA che fa perdere la connessione intercontinentale vale €600 se su unico biglietto.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-amber-500" />
            Terminal T1 vs T2: attenzione alle coincidenze
          </h2>
          <p className="text-gray-600 mb-4">
            I due terminal di Francoforte sono collegati da Sky Line (monorotaia interna), ma il cambio richiede tempo. Se il volo in ritardo arrivava in T1 e il volo successivo partiva da T2 (o viceversa), questo può aver contribuito alla perdita della coincidenza.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">Terminal 1 (T1) — Hub Lufthansa</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lufthansa (LH), Swiss (LX), Austrian (OS)</li>
                <li>• Tutte le Star Alliance partner su voli LH</li>
                <li>• Pier A, B, C, Z</li>
                <li>• Voli intercontinentali principalmente da T1Z</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">Terminal 2 (T2) — altri vettori</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• easyJet, Ryanair (alcuni), Air France, KLM</li>
                <li>• British Airways, Iberia, Emirates, Qatar</li>
                <li>• Pier D, E (T2D, T2E)</li>
                <li>• Collegato a T1 via Sky Line (~10-15 min)</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <h4 className="font-semibold text-amber-900 mb-2 text-sm">Tempi minimi di coincidenza a FRA</h4>
            <div className="grid md:grid-cols-2 gap-3 text-xs text-gray-600">
              <div><strong>T1 → T1 (stesso terminal, Schengen):</strong> ~45 min</div>
              <div><strong>T1 → T1 (extraSchengen → Schengen):</strong> ~60-75 min</div>
              <div><strong>T1 → T2 (cambio terminal):</strong> ~60-75 min</div>
              <div><strong>T2 → T1 (cambio terminal):</strong> ~60-75 min</div>
            </div>
            <p className="text-amber-800 text-xs mt-2"><strong>Se hai meno di questi tempi</strong> per colpa del ritardo della tratta precedente, la compagnia è responsabile della coincidenza persa — indipendentemente dai tempi tecnici dell'aeroporto.</p>
          </div>
        </section>

        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Coincidenza persa o ritardo a Francoforte FRA?</h3>
              <p className="text-amber-100 text-sm">€250–€400 per rotte Italia↔FRA. €600 per coincidenze intercontinentali. ClaimWinger gestisce tutto — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=francoforte-fra" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-amber-700 font-bold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-amber-500" />
            Lufthansa Group a Francoforte: chi fa il reclamo?
          </h2>
          <p className="text-gray-600 mb-4">
            Lufthansa Group include più vettori che operano con codici diversi. Per il CE 261 conta sempre il vettore operante.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Codice volo</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Vettore</th>
                  <th className="text-left p-3 font-semibold text-gray-700">A chi reclami</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Escalation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">LH + numero</td><td className="p-3">Lufthansa</td><td className="p-3">lufthansa.com → "Servizio Clienti"</td><td className="p-3">LBA (da DE) / ENAC (da IT)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">LX + numero</td><td className="p-3">SWISS (filiale LH Group)</td><td className="p-3">swiss.com → "Contattaci"</td><td className="p-3">BAZL (da CH) / ENAC (da IT)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">OS + numero</td><td className="p-3">Austrian Airlines (filiale LH Group)</td><td className="p-3">austrian.com</td><td className="p-3">APF (da AT) / ENAC (da IT)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">EW + numero</td><td className="p-3">Eurowings (filiale LH Group)</td><td className="p-3">eurowings.com</td><td className="p-3">LBA (da DE) / ENAC (da IT)</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">LH + numero (in realtà EW/LH Regional)</td><td className="p-3">Lufthansa Regional / Eurowings Discover</td><td className="p-3">Contatta Lufthansa (capogruppo)</td><td className="p-3">LBA / ENAC</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-amber-500" />
            Come presentare il reclamo per un volo da/per Francoforte
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Verifica il codice aeroporto (FRA o HHN)", content: "Controlla il boarding pass: FRA = Frankfurt Airport Main (~12 km da Francoforte); HHN = Frankfurt Hahn (~120 km). Se il volo era HHN, il reclamo segue le stesse regole CE 261 ma con codice HHN." },
              { step: "2", title: "Documenta il disservizio", content: "Conserva boarding pass (con terminal T1 o T2), conferma prenotazione con numero volo (LH/LX/OS/EW), ricevute spese extra. Per perdita coincidenza, conserva entrambi i boarding pass e l'orario originale della connessione." },
              { step: "3", title: "Reclamo alla compagnia operante", content: "Per Lufthansa (LH): lufthansa.com → 'Feedback/Reclami'. Indica volo, data, FRA come aeroporto, ritardo in ore, importo CE 261 (€250/€400/€600) e IBAN. Per SWISS (LX): swiss.com; per Austrian (OS): austrian.com." },
              { step: "4", title: "Escalation LBA (da FRA) o ENAC (da IT)", content: "Se Lufthansa o altro vettore del gruppo rifiuta o non risponde entro 30 giorni: per partenza da FRA → LBA Luftfahrt-Bundesamt (lba.de); per partenza da aeroporti italiani → ENAC (enac.gov.it)." }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{item.step}</div>
                <div className="flex-1 pb-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-r from-orange-600 to-amber-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo per te?</h3>
              <p className="text-orange-100 text-sm">ClaimWinger conosce le procedure LBA, ENAC e tutto il Lufthansa Group. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=francoforte-fra" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-orange-700 font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Aeroporto Francoforte FRA</h2>
          <div className="space-y-3">
            {[
              { q: "Qual è il codice IATA dell'aeroporto di Francoforte?", a: "FRA (Frankfurt Airport). Ha T1 (hub Lufthansa, pier A/B/C/Z) e T2 (altri vettori, pier D/E), collegati via Sky Line. Dista ~12 km dal centro di Francoforte." },
              { q: "Quanto risarcimento spetta per un volo in ritardo da Francoforte verso l'Italia?", a: "€250 per Centro-Nord Italia (Roma, Milano, Venezia, Bologna — sotto 1.500 km). €400 per Sud Italia (Napoli, Catania, Palermo — oltre 1.500 km). €600 per coincidenze intercontinentali su unico biglietto." },
              { q: "Ho perso la coincidenza intercontinentale a Francoforte per colpa di Lufthansa: ho diritto a €600?", a: "Sì, se il biglietto Italia→FRA→destinazione intercontinentale era su un unico itinerario e sei arrivato con oltre 3 ore di ritardo. FRA è il principale hub intercontinentale di Lufthansa." },
              { q: "Qual è la differenza tra Frankfurt FRA e Frankfurt Hahn HHN?", a: "FRA è l'aeroporto principale a ~12 km da Francoforte, usato da Lufthansa e la maggior parte dei vettori. HHN (Hahn) è un aeroporto a ~120 km dalla città, usato principalmente da Ryanair. I diritti CE 261 si applicano in entrambi i casi." },
              { q: "Come funziona il cambio T1–T2 a Francoforte?", a: "T1 e T2 sono collegati da Sky Line (~10-15 min). Se devi cambiare terminal, il tempo minimo consigliato è 60-75 minuti. Se il ritardo del volo precedente ha ridotto il tempo disponibile sotto questo minimo, la compagnia è responsabile." },
              { q: "A quale autorità mi rivolgo per un reclamo su un volo da Francoforte?", a: "Per voli partiti da FRA: LBA (Luftfahrt-Bundesamt, lba.de). Per voli partiti da aeroporti italiani: ENAC (enac.gov.it)." }
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
              { href: "/it/blog/eurowings-risarcimento", title: "Eurowings: Risarcimento Voli", excerpt: "Guida completa a EW — LH Group, codeshare, LBA vs ENAC." },
              { href: "/it/blog/lufthansa-risarcimento", title: "Lufthansa: Risarcimento Voli", excerpt: "Hub FRA/MUC, LH Group, coincidenze intercontinentali, €600." },
              { href: "/it/blog/aeroporto-amsterdam-risarcimento", title: "Aeroporto Amsterdam AMS", excerpt: "Hub KLM, nebbia, coincidenze intercontinentali, ILT vs ENAC." },
              { href: "/it/blog/swiss-risarcimento", title: "SWISS: Risarcimento Voli", excerpt: "LX — accordo CH-UE, hub Zurigo, BAZL vs ENAC." }
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
