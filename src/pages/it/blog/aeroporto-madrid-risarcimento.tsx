import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function AeroportoMadridRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il codice IATA dell'aeroporto di Madrid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il codice IATA dell'aeroporto di Madrid è MAD (Aeropuerto Adolfo Suárez Madrid-Barajas). È il principale aeroporto della Spagna e uno dei più trafficati d'Europa, con quattro terminal (T1, T2, T3, T4/T4S) a circa 12 km dal centro di Madrid."
        }
      },
      {
        "@type": "Question",
        "name": "Il CE 261/2004 si applica ai voli in partenza da Madrid MAD verso l'Italia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì. La Spagna è membro dell'UE, quindi il CE 261/2004 si applica pienamente a tutti i voli in partenza dall'aeroporto di Madrid MAD, indipendentemente dalla nazionalità del vettore (Iberia, Ryanair, Vueling, easyJet, ITA, ecc.)."
        }
      },
      {
        "@type": "Question",
        "name": "Ho perso la coincidenza per il Sud America a Madrid per un ritardo del volo dall'Italia: ho diritto a €600?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì. Se il tuo biglietto era Italia→MAD→Buenos Aires (o Lima, São Paulo, Mexico City, Bogotá, Santiago…) su un unico itinerario, e sei arrivato alla destinazione finale con oltre 3 ore di ritardo, il risarcimento è €600. Tutte le destinazioni latinoamericane sono oltre 3.500 km dall'Italia."
        }
      },
      {
        "@type": "Question",
        "name": "Qual è il risarcimento per un volo da Madrid MAD verso l'Italia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "€250 per tutte le rotte MAD→Italy (Roma, Milano, Venezia, Napoli, Bologna, Firenze — tutte tra 1.400 e 1.500 km circa). Il ritardo deve essere almeno 3 ore all'arrivo. Il reclamo si presenta alla compagnia operante e in caso di escalation all'AESA spagnola o all'ENAC (se il tuo volo successivo era da Italia)."
        }
      },
      {
        "@type": "Question",
        "name": "Qual è la differenza tra i terminal di Madrid MAD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Madrid ha 4 terminal principali: T1 (voli internazionali extra-Schengen non-Iberia), T2 (voli domestici e Schengen di alcuni vettori), T3 (compagnie minori), T4 e T4S (hub Iberia/Iberia Express/Vueling e partner Oneworld). Il T4 e T4S sono collegati con navetta interna. Verificare sempre il terminal di partenza sulla carta d'imbarco."
        }
      },
      {
        "@type": "Question",
        "name": "A quale autorità mi rivolgo per un reclamo su un volo da Madrid MAD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'autorità competente per i voli in partenza dalla Spagna è l'AESA (Agencia Estatal de Seguridad Aérea, aesa.gob.es). Per i voli in partenza dall'Italia verso Madrid, l'autorità è l'ENAC (enac.gov.it)."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aeroporto Madrid Adolfo Suárez Barajas (MAD): Risarcimento Voli 2026",
    "description": "Volo in ritardo o cancellato a Madrid MAD? CE 261/2004, €250–€600, hub latinoamericano Iberia, terminal T4, AESA vs ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Madrid Barajas (MAD): Risarcimento Voli 2026 — fino a €600"
        description="Volo in ritardo o cancellato a Madrid MAD? CE 261/2004, €250–€600, hub Sud America Iberia, 4 terminal, AESA vs ENAC, procedura passo per passo."
        canonical="https://claimwinger.com/it/blog/aeroporto-madrid-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">Aeroporto Madrid MAD</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">Hub Europei</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />8 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Madrid Adolfo Suárez Barajas (MAD): Risarcimento Voli 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo in ritardo o cancellato a Madrid? Il CE 261/2004 ti garantisce fino a <strong>€250 per i voli verso l'Italia</strong> e fino a <strong>€600 per i voli latinoamericani persi</strong> via hub di Madrid.
          </p>
        </header>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-red-900 mb-2">Aeropuerto Adolfo Suárez Madrid-Barajas — dati chiave</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-red-800">
                <div><strong>Codice IATA:</strong> MAD</div>
                <div><strong>Codice ICAO:</strong> LEMD</div>
                <div><strong>Posizione:</strong> ~12 km dal centro di Madrid</div>
                <div><strong>Terminal:</strong> T1, T2, T3, T4, T4S (hub Iberia)</div>
                <div><strong>Vettore principale:</strong> Iberia (IB) + Iberia Express + Vueling</div>
                <div><strong>Autorità CE 261:</strong> AESA (Agencia Estatal de Seguridad Aérea)</td></div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-red-500" />
            Madrid come hub latinoamericano: il risarcimento €600
          </h2>
          <p className="text-gray-600 mb-4">
            Madrid è il principale hub europeo per i voli verso il Sud America e l'America Latina. Iberia opera da MAD verso decine di destinazioni latinoamericane — molte delle quali raggiungibili anche dagli italiani via coincidenza. Perdere questa coincidenza per un ritardo sulla tratta Italia→MAD può valere <strong>€600 di risarcimento</strong>.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Destinazione finale (via MAD)</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza da Roma/Milano</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento se coincidenza persa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 bg-red-50"><td className="p-3 font-medium">Buenos Aires (EZE/AEP)</td><td className="p-3">~11.500 km da Roma</td><td className="p-3 font-bold text-red-600">€600</td></tr>
                <tr className="hover:bg-gray-50 bg-red-50"><td className="p-3 font-medium">São Paulo (GRU)</td><td className="p-3">~9.700 km da Roma</td><td className="p-3 font-bold text-red-600">€600</td></tr>
                <tr className="hover:bg-gray-50 bg-red-50"><td className="p-3 font-medium">Mexico City (MEX)</td><td className="p-3">~9.700 km da Roma</td><td className="p-3 font-bold text-red-600">€600</td></tr>
                <tr className="hover:bg-gray-50 bg-red-50"><td className="p-3 font-medium">Bogotá (BOG)</td><td className="p-3">~9.600 km da Roma</td><td className="p-3 font-bold text-red-600">€600</td></tr>
                <tr className="hover:bg-gray-50 bg-red-50"><td className="p-3 font-medium">Lima (LIM)</td><td className="p-3">~10.800 km da Roma</td><td className="p-3 font-bold text-red-600">€600</td></tr>
                <tr className="hover:bg-gray-50 bg-red-50"><td className="p-3 font-medium">Santiago del Cile (SCL)</td><td className="p-3">~12.400 km da Roma</td><td className="p-3 font-bold text-red-600">€600</td></tr>
                <tr className="hover:bg-gray-50 bg-red-50"><td className="p-3 font-medium">Miami / New York (MIA/JFK)</td><td className="p-3">~8.600–9.000 km da Roma</td><td className="p-3 font-bold text-red-600">€600</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-red-800 text-sm"><strong>Condizione per €600:</strong> il biglietto Italia→MAD→LATAM deve essere un unico itinerario. Il ritardo finale (all'arrivo a Buenos Aires, São Paulo, ecc.) deve essere superiore a 3 ore rispetto all'orario originale. La tratta diretta IT→MAD da sola vale €250 (rotta &lt;1500 km).</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Rotte Italia ↔ Madrid: importi di risarcimento
          </h2>
          <p className="text-gray-600 mb-4">
            Le rotte dirette tra Italia e Madrid sono tutte nella fascia 1.400–1.500 km, quindi il risarcimento per ritardo ≥3 ore è <strong>€250</strong> per entrambe le direzioni.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Rotta</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnie principali</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma FCO → Madrid MAD</td><td className="p-3">~1.430 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Iberia, ITA Airways, Ryanair, Vueling</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Milano MXP → Madrid MAD</td><td className="p-3">~1.480 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Iberia, ITA Airways, Ryanair, Vueling</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Venezia VCE → Madrid MAD</td><td className="p-3">~1.670 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Vueling, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Bologna BLQ → Madrid MAD</td><td className="p-3">~1.500 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Vueling, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Napoli NAP → Madrid MAD</td><td className="p-3">~1.695 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Vueling, Iberia Express</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Catania CTA → Madrid MAD</td><td className="p-3">~1.960 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair, Vueling</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Palermo PMO → Madrid MAD</td><td className="p-3">~2.010 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair, Vueling</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Nota: le rotte da Sud Italia (Napoli, Catania, Palermo) superano 1.500 km → €400. Roma e Milano restano sotto 1.500 km → €250.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-red-500" />
            I 4 terminal di Madrid MAD: quale usare?
          </h2>
          <p className="text-gray-600 mb-4">
            Madrid Barajas ha quattro terminal. Sapere qual è il tuo terminal è fondamentale per le coincidenze: un cambio di terminal richiede tempo e, se l'operatività è frammentata, può causare perdita di coincidenza.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">T1 — Internazionale non-Schengen</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Voli non-Schengen di vettori non-Iberia</li>
                <li>• American Airlines, British Airways (alcuni voli)</li>
                <li>• Controllo passaporti</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">T2 — Domestico e Schengen (altri vettori)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ryanair, easyJet, Wizz Air</li>
                <li>• Voli nazionali spagnoli (alcuni)</li>
                <li>• Senza controllo passaporti Schengen</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">T3 — Compagnie minori</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vettori minori e charter</li>
                <li>• Poco trafficato</li>
              </ul>
            </div>
            <div className="bg-white border border-red-200 rounded-xl p-4 border-2">
              <h3 className="font-bold text-red-800 mb-2">T4 + T4S — Hub Iberia (principale)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Iberia (IB), Iberia Express (I2), Vueling (VY)</li>
                <li>• Partner Oneworld (BA, AA, JAL, Qatar Airways)</li>
                <li>• Tutti i voli per LATAM da/verso T4S</li>
                <li>• T4 e T4S collegati da shuttle interno (~15 min)</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-amber-800 text-sm"><strong>Attenzione coincidenze T4/T4S:</strong> se devi cambiare da T4 a T4S (o viceversa) per prendere il volo per LATAM, calcola almeno 30–45 minuti. Il tempo minimo di transito a MAD per coincidenze intercontinentali è tipicamente 90–120 minuti. Se il tuo volo precedente era in ritardo e non hai avuto tempo sufficiente, la responsabilità è del vettore.</p>
          </div>
        </section>

        <div className="bg-gradient-to-r from-red-500 to-rose-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Coincidenza persa o ritardo a Madrid?</h3>
              <p className="text-red-100 text-sm">€250 per voli Italia↔Madrid. €600 se hai perso la coincidenza per LATAM. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=madrid-mad" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-red-500" />
            Compagnie aeree a Madrid MAD: rotte verso l'Italia
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">IB</span>
                Iberia
              </h3>
              <p className="text-gray-600 text-sm">Compagnia di bandiera spagnola, hub a T4. Rotte MAD↔Roma FCO, Milano MXP. Reclamo: iberia.com. Escalation: AESA (da MAD) o ENAC (da IT).</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">VY</span>
                Vueling
              </h3>
              <p className="text-gray-600 text-sm">Low-cost del gruppo IAG (come Iberia), hub a T4. Numerose rotte verso tutte le principali città italiane. Reclamo: vueling.com.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">FR</span>
                Ryanair
              </h3>
              <p className="text-gray-600 text-sm">Opera da T2. Numerose rotte MAD↔aeroporti italiani (FCO, MXP, NAP, BLQ, CTA, PMO, PSA, ecc.). Reclamo: ryanair.com.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">AZ</span>
                ITA Airways
              </h3>
              <p className="text-gray-600 text-sm">ITA opera MAD↔Roma FCO e MAD↔Milano MXP. €250 (distanza &lt;1500 km). Reclamo: ita-airways.com.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-red-500" />
            Come presentare il reclamo per un volo da/per Madrid MAD
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Documenta il disservizio", content: "Conserva: boarding pass (con terminal e orario), conferma prenotazione, ricevute spese extra sostenute in aeroporto (pasti, hotel se pernottamento necessario), comunicazioni della compagnia. Per perdita coincidenza, conserva entrambe le carte d'imbarco." },
              { step: "2", title: "Verifica il ritardo finale (3 ore)", content: "La soglia CE 261 si calcola all'arrivo a destinazione finale. Per voli con coincidenza MAD→LATAM su unico biglietto, il ritardo si misura rispetto all'orario originale di arrivo a Buenos Aires, Lima, ecc." },
              { step: "3", title: "Reclamo alla compagnia operante", content: "Identifica il vettore (IB, VY, FR, AZ, I2 ecc.) e usa il loro portale reclami. Indica: numero volo, data, MAD come aeroporto, ritardo, importo CE 261 richiesto (€250, €400 o €600 secondo distanza) e IBAN." },
              { step: "4", title: "Escalation AESA (da MAD) o ENAC (da IT)", content: "Se la compagnia rifiuta o non risponde entro 30 giorni: per voli partiti da Madrid → AESA (aesa.gob.es); per voli partiti da aeroporti italiani → ENAC (enac.gov.it)." }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{item.step}</div>
                <div className="flex-1 pb-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-r from-rose-600 to-red-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo per te?</h3>
              <p className="text-rose-100 text-sm">ClaimWinger conosce le procedure AESA e ENAC. Gestiamo tutta la pratica — commissione: <strong>30% solo se otteniamo il risarcimento</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=madrid-mad" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-rose-700 font-bold px-6 py-3 rounded-xl hover:bg-rose-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Aeroporto Madrid MAD</h2>
          <div className="space-y-3">
            {[
              { q: "Qual è il codice IATA dell'aeroporto di Madrid?", a: "Il codice IATA è MAD (Aeropuerto Adolfo Suárez Madrid-Barajas). Ha 4 terminal (T1, T2, T3, T4/T4S), con T4 come hub principale di Iberia. Dista circa 12 km dal centro di Madrid." },
              { q: "Il CE 261/2004 si applica ai voli in partenza da Madrid?", a: "Sì. La Spagna è membro UE, quindi il CE 261 si applica a tutti i voli in partenza da MAD, indipendentemente dalla nazionalità del vettore." },
              { q: "Ho perso la coincidenza per il Sud America a Madrid: ho diritto a €600?", a: "Sì, se il biglietto era Italia→MAD→destinazione LATAM su un unico itinerario e sei arrivato con oltre 3 ore di ritardo. Tutte le destinazioni latinoamericane sono oltre 3.500 km dall'Italia → €600." },
              { q: "Qual è il risarcimento per un volo da Madrid verso l'Italia?", a: "€250 per rotte MAD↔Roma FCO e MAD↔Milano MXP (entrambe sotto 1.500 km). €400 per rotte MAD↔Napoli, Catania, Palermo (tutte oltre 1.500 km)." },
              { q: "Qual è la differenza tra i terminal di Madrid MAD?", a: "T1 (non-Schengen extra-Iberia), T2 (Ryanair, easyJet, low-cost), T3 (minori), T4/T4S (hub Iberia, Vueling e partner Oneworld — tutti i voli LATAM). T4 e T4S sono collegati con navetta interna (~15 min)." },
              { q: "A quale autorità mi rivolgo per un reclamo su un volo da Madrid?", a: "Per voli partiti da Madrid: AESA (aesa.gob.es). Per voli partiti dall'Italia: ENAC (enac.gov.it)." }
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
              { href: "/it/blog/roma-madrid-volo-cancellato", title: "Roma–Madrid: Volo Cancellato", excerpt: "Guida CE 261 per la rotta FCO/CIA→MAD — €250/€400 e coincidenze intercontinentali." },
              { href: "/it/blog/aeroporto-barcellona-risarcimento", title: "Aeroporto Barcellona BCN", excerpt: "Hub catalano — guida CE 261, Vueling, Ryanair, AESA." },
              { href: "/it/blog/iberia-risarcimento", title: "Iberia: Risarcimento Voli", excerpt: "Guida completa al risarcimento Iberia — hub MAD, LATAM, IAG group." },
              { href: "/it/blog/coincidenza-persa-risarcimento", title: "Coincidenza Persa: Guida Completa", excerpt: "Quando hai diritto al risarcimento per la coincidenza perduta." }
            ].map((article) => (
              <Link key={article.href} href={article.href} className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-red-300 hover:shadow-md transition-all">
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
