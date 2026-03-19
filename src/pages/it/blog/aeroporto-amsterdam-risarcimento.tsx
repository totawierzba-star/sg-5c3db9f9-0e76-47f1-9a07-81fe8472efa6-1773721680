import LayoutIt from "../../../components/LayoutIt";
import SEO from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function AeroportoAmsterdamRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il codice IATA dell'aeroporto di Amsterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il codice IATA dell'aeroporto di Amsterdam è AMS (Amsterdam Airport Schiphol). Si trova a circa 15 km dal centro di Amsterdam ed è uno dei principali hub d'Europa, con un unico edificio terminale articolato in pier (B, C, D, E, F, G, H)."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo in ritardo da Amsterdam AMS verso l'Italia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "€250 per le rotte verso Centro-Nord Italia (Roma FCO, Milano MXP, Venezia VCE — tutte sotto 1.500 km). €400 per le rotte verso Sud Italia (Napoli NAP, Catania CTA, Palermo PMO, Bari BRI — tutte oltre 1.500 km)."
        }
      },
      {
        "@type": "Question",
        "name": "Ho perso la coincidenza intercontinentale ad Amsterdam per colpa di KLM: ho diritto a €600?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, se il biglietto Italia→AMS→destinazione intercontinentale era su un unico itinerario e sei arrivato a destinazione con oltre 3 ore di ritardo. Le destinazioni oltre 3.500 km dall'Italia (New York, Tokyo, Singapore, Bangkok, Toronto, ecc.) danno diritto a €600."
        }
      },
      {
        "@type": "Question",
        "name": "La nebbia ad Amsterdam è una circostanza straordinaria che esclude il risarcimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. La nebbia autunnale e primaverile ad Amsterdam è una condizione climatica stagionale attesa nel delta del Reno/Mosa. Schiphol è attrezzato per operare con visibilità ridotta (ILS categoria III). Solo condizioni di nebbia eccezionalmente dense, fuori norma storica, possono costituire circostanza straordinaria."
        }
      },
      {
        "@type": "Question",
        "name": "KLM fa parte di Air France-KLM: devo reclamare a KLM o ad Air France?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il reclamo CE 261 va sempre al vettore che ha operato fisicamente il volo. Se il tuo volo aveva codice KL ed era operato da KLM, reclamo a KLM. Se era codice AF operato da Air France, reclamo ad Air France. Verifica sul boarding pass la voce 'operato da'."
        }
      },
      {
        "@type": "Question",
        "name": "A quale autorità mi rivolgo per un reclamo su un volo da Amsterdam AMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'autorità competente per i voli in partenza dai Paesi Bassi è l'ILT (Inspectie Leefomgeving en Transport, ilent.nl). Per i voli in partenza da aeroporti italiani verso Amsterdam, l'autorità è l'ENAC (enac.gov.it)."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aeroporto Amsterdam Schiphol (AMS): Risarcimento Voli 2026",
    "description": "Volo in ritardo o cancellato ad Amsterdam AMS? CE 261/2004, €250–€600, hub KLM, nebbia, coincidenze intercontinentali, ILT vs ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Amsterdam Schiphol (AMS): Risarcimento Voli 2026 — fino a €600"
        description="Volo in ritardo ad Amsterdam AMS? CE 261/2004, €250–€600, hub KLM, nebbia non è straordinaria, coincidenze intercontinentali, ILT vs ENAC."
        canonical="https://claimwinger.com/it/blog/aeroporto-amsterdam-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">Aeroporto Amsterdam AMS</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Hub Europei</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />8 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Amsterdam Schiphol (AMS): Risarcimento Voli 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo in ritardo o cancellato ad Amsterdam? Il CE 261/2004 ti garantisce da <strong>€250 a €600</strong>. Hub KLM per l'Asia e le Americhe: perdere la coincidenza a Schiphol per colpa della compagnia può valere il risarcimento massimo.
          </p>
        </header>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-blue-900 mb-2">Amsterdam Airport Schiphol — dati chiave</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-blue-800">
                <div><strong>Codice IATA:</strong> AMS</div>
                <div><strong>Codice ICAO:</strong> EHAM</div>
                <div><strong>Posizione:</strong> ~15 km dal centro di Amsterdam</div>
                <div><strong>Struttura:</strong> Unico terminale con pier B–H (no numeri di terminal)</div>
                <div><strong>Vettore principale:</strong> KLM Royal Dutch Airlines (hub)</div>
                <div><strong>Autorità CE 261:</strong> ILT — Inspectie Leefomgeving en Transport</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento: rotte AMS ↔ Italia
          </h2>
          <p className="text-gray-600 mb-4">
            Le rotte verso il Centro-Nord Italia da AMS sono sotto 1.500 km → <strong>€250</strong>. Le rotte verso il Sud Italia superano 1.500 km → <strong>€400</strong>. Per coincidenze intercontinentali perse, il risarcimento sale a <strong>€600</strong>.
          </p>
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
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma FCO → Amsterdam AMS</td><td className="p-3">~1.445 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">KLM, ITA Airways, Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Milano MXP → Amsterdam AMS</td><td className="p-3">~1.060 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">KLM, Transavia NL, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Venezia VCE → Amsterdam AMS</td><td className="p-3">~1.115 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">KLM, Transavia NL</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Bologna BLQ → Amsterdam AMS</td><td className="p-3">~1.185 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Transavia NL, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Pisa PSA → Amsterdam AMS</td><td className="p-3">~1.455 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">KLM, Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Napoli NAP → Amsterdam AMS</td><td className="p-3">~1.730 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">KLM, easyJet</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Catania CTA → Amsterdam AMS</td><td className="p-3">~2.080 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Transavia NL, Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Palermo PMO → Amsterdam AMS</td><td className="p-3">~2.130 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Transavia NL</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Bari BRI → Amsterdam AMS</td><td className="p-3">~1.940 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Transavia NL</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Euro className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 text-sm"><strong>€600 per coincidenze intercontinentali:</strong> se il tuo biglietto era Italia→AMS→New York/Toronto/Tokyo/Singapore/Bangkok/Johannesburg/ecc. su un unico itinerario, e sei arrivato con oltre 3 ore di ritardo, il risarcimento è €600.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-500" />
            Nebbia ad Amsterdam: non è una scusa valida
          </h2>
          <p className="text-gray-600 mb-4">
            Amsterdam si trova nel delta del Reno e della Mosa, una delle zone più soggette a nebbia d'Europa. KLM e altri vettori tentano spesso di invocare la nebbia come "circostanza straordinaria" per evitare il pagamento del risarcimento. Ma la nebbia stagionale ad AMS non è straordinaria.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                NON dà diritto al risarcimento
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nebbia eccezionalmente densa, fuori norma storica decennale</li>
                <li>• Tempesta con venti estremi (tipo uragano)</li>
                <li>• Chiusura d'emergenza di Schiphol dichiarata dalle autorità</li>
                <li>• Sciopero ATC esterno alla compagnia</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                DÀ diritto al risarcimento
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nebbia ordinaria autunno-primaverile ad AMS</li>
                <li>• Visibilità ridotta gestita con procedure ILS Cat III standard</li>
                <li>• Guasto tecnico all'aeromobile</li>
                <li>• Ritardo per rotazione da volo precedente</li>
                <li>• Overbooking, cancellazione commerciale</li>
                <li>• Sciopero del personale KLM</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-blue-800 text-sm"><strong>Nota tecnica:</strong> Schiphol è dotato di sistemi ILS (Instrument Landing System) di categoria III, che permettono operazioni con visibilità quasi nulla. Questo significa che KLM è equipaggiata e addestrata per operare con nebbia — la nebbia ordinaria non è imprevedibile per questo aeroporto.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-500" />
            KLM e Air France-KLM: come funziona il reclamo
          </h2>
          <p className="text-gray-600 mb-4">
            KLM fa parte del gruppo Air France-KLM e condivide voli con Air France e partner SkyTeam. Per il reclamo CE 261 conta solo il vettore operante.
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
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">KL + numero (operato da KLM)</td><td className="p-3">KLM Royal Dutch Airlines</td><td className="p-3">KLM (klm.com)</td><td className="p-3">ILT (da AMS) / ENAC (da IT)</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">KL + numero (operato da AF)</td><td className="p-3">Air France</td><td className="p-3">Air France (airfrance.it)</td><td className="p-3">DGAC (da FR) / ENAC (da IT)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">HV + numero (Transavia NL)</td><td className="p-3">Transavia Netherlands</td><td className="p-3">Transavia (transavia.com)</td><td className="p-3">ILT (da NL) / ENAC (da IT)</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">KL + numero (operato da Kenya/Delta)</td><td className="p-3">Vettore partner SkyTeam</td><td className="p-3">Il vettore operante effettivo</td><td className="p-3">Autorità del paese di partenza</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
            <p className="text-blue-800 text-xs"><strong>Regola pratica:</strong> leggi il boarding pass — il vettore operante è indicato sotto il codice volo. Se non è KLM ma un partner, il reclamo va al partner, non a KLM.</p>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-500 to-sky-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo in ritardo da/per Amsterdam AMS?</h3>
              <p className="text-blue-100 text-sm">€250–€400 per rotte Italia↔AMS. €600 se hai perso una coincidenza intercontinentale. ClaimWinger gestisce tutto — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=amsterdam-ams" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo per un volo da/per Amsterdam
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Documenta il disservizio ad AMS", content: "Conserva carta d'imbarco (pier di partenza e orario), conferma prenotazione con numero volo KL/HV/FR, ricevute spese extra. Se hai aspettato più di 2 ore, hai diritto a pasti/bevande in aeroporto — conserva le ricevute." },
              { step: "2", title: "Verifica il ritardo effettivo (soglia 3 ore)", content: "La soglia si calcola sull'arrivo a destinazione finale. Per coincidenze intercontinentali su unico biglietto, il ritardo si misura a New York, Tokyo, ecc. — non ad Amsterdam." },
              { step: "3", title: "Reclamo alla compagnia operante", content: "Per KLM: klm.com → 'Assistenza Clienti' → reclami. Per Transavia Netherlands: transavia.com. Per Ryanair/easyJet: portale rispettivo. Indica volo, data, ritardo, importo CE 261 (€250/€400/€600) e IBAN." },
              { step: "4", title: "Escalation ILT (da AMS) o ENAC (da IT)", content: "Se la compagnia non risponde entro 30 giorni o rifiuta: per partenza da AMS → ILT Inspectie Leefomgeving en Transport (ilent.nl); per partenza da aeroporti italiani → ENAC (enac.gov.it)." }
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

        <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo per te?</h3>
              <p className="text-sky-100 text-sm">ClaimWinger gestisce reclami a KLM, Transavia NL, easyJet e tutti i vettori da AMS. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=amsterdam-ams" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-sky-700 font-bold px-6 py-3 rounded-xl hover:bg-sky-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Aeroporto Amsterdam AMS</h2>
          <div className="space-y-3">
            {[
              { q: "Qual è il codice IATA dell'aeroporto di Amsterdam?", a: "AMS (Amsterdam Airport Schiphol). Ha un unico edificio terminale con pier da B a H (nessun numero di terminal). Dista ~15 km dal centro di Amsterdam, connesso direttamente con il treno Intercity." },
              { q: "Quanto risarcimento spetta per un volo in ritardo da Amsterdam verso l'Italia?", a: "€250 per Centro-Nord Italia (Roma, Milano, Venezia, Bologna, Pisa — sotto 1.500 km). €400 per Sud Italia (Napoli, Catania, Palermo, Bari — oltre 1.500 km). €600 per coincidenze intercontinentali su unico biglietto." },
              { q: "Ho perso la coincidenza intercontinentale ad Amsterdam: ho diritto a €600?", a: "Sì, se il biglietto Italia→AMS→destinazione intercontinentale era su un unico itinerario e sei arrivato con oltre 3 ore di ritardo rispetto all'orario originale. Tutte le destinazioni extraeuropee da AMS sono oltre 3.500 km dall'Italia." },
              { q: "La nebbia ad Amsterdam è una circostanza straordinaria?", a: "No. La nebbia autunnale/primaverile ad AMS è stagionale e attesa. Schiphol ha sistemi ILS Cat III per operare con bassa visibilità. Solo nebbia eccezionalmente densa fuori norma storica può escludere il risarcimento." },
              { q: "KLM fa parte di Air France-KLM: a chi faccio il reclamo?", a: "Il reclamo va al vettore operante — verifica sul boarding pass 'operated by'. Se è KLM → reclamo a KLM. Se è Air France → reclamo ad AF. Se è Transavia Netherlands → reclamo a Transavia." },
              { q: "A quale autorità mi rivolgo per un reclamo su un volo da Amsterdam?", a: "Per voli partiti da AMS: ILT (Inspectie Leefomgeving en Transport, ilent.nl). Per voli partiti da aeroporti italiani: ENAC (enac.gov.it)." }
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
              { href: "/it/blog/aeroporto-francoforte-risarcimento", title: "Aeroporto Francoforte FRA", excerpt: "Hub Lufthansa, coincidenze intercontinentali, €600, LBA vs ENAC." },
              { href: "/it/blog/aeroporto-madrid-risarcimento", title: "Aeroporto Madrid MAD", excerpt: "Hub LATAM Iberia, 4 terminal, €600 per coincidenze Sud America." },
              { href: "/it/blog/transavia-risarcimento", title: "Transavia: Risarcimento Voli", excerpt: "Transavia France TO vs Netherlands HV — guida CE 261 completa." },
              { href: "/it/blog/coincidenza-persa-risarcimento", title: "Coincidenza Persa: Guida Completa", excerpt: "Quando hai diritto al risarcimento per la coincidenza perduta." }
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
