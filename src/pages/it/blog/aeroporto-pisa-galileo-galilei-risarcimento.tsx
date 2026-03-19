import LayoutIt from "../../../components/LayoutIt";
import SEO from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function AeroportoPisaRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il codice IATA dell'aeroporto di Pisa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il codice IATA dell'aeroporto di Pisa Galileo Galilei è PSA. Si trova a circa 2 km dal centro di Pisa ed è collegato alla stazione ferroviaria di Pisa Centrale con il Pisamover. Serve anche i passeggeri di Firenze, Livorno e la Toscana."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo in ritardo da Pisa PSA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dipende dalla distanza della rotta: fino a 1500 km → €250 (es. Londra, Parigi, Amsterdam, Barcellona); 1500–3500 km → €400 (es. Dublino, Edimburgo, Tel Aviv). Il ritardo deve essere di almeno 3 ore all'arrivo nella destinazione finale."
        }
      },
      {
        "@type": "Question",
        "name": "Ryanair usa Pisa come base? Quante rotte opera?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, Ryanair ha una base operativa a Pisa PSA ed è il principale operatore con decine di rotte verso tutta Europa. Essere una base Ryanair significa che ci sono aerei stanziati a Pisa, il che riduce (ma non elimina) i ritardi da rotazione. Il CE 261 si applica pienamente su tutti i voli Ryanair da PSA."
        }
      },
      {
        "&type": "Question",
        "name": "L'aeroporto di Pisa serve anche Firenze?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, PSA è spesso considerato l'aeroporto alternativo di Firenze, distante circa 80 km. Il Tuscany Airport (FLR, Peretola) ha capacità limitata. Per i risarcimenti, conta l'aeroporto effettivo di partenza: se sei partito da PSA, il reclamo si basa su PSA; se da FLR, su FLR."
        }
      },
      {
        "@type": "Question",
        "name": "A chi mi rivolgo se la compagnia rifiuta il risarcimento da Pisa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'autorità competente per i voli da aeroporti italiani è l'ENAC (Ente Nazionale per l'Aviazione Civile). Puoi presentare reclamo su enac.gov.it allegando la risposta negativa della compagnia o la mancata risposta entro 30 giorni."
        }
      },
      {
        "@type": "Question",
        "name": "Qual è la prescrizione per i reclami da Pisa PSA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per voli in partenza dall'Italia (PSA), la prescrizione è di 2 anni dalla data del volo. È consigliabile presentare reclamo il prima possibile per avere tutta la documentazione disponibile."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aeroporto Pisa Galileo Galilei (PSA): Risarcimento Voli 2026",
    "description": "Volo in ritardo o cancellato a Pisa PSA? Guida completa: importi CE 261, base Ryanair, PSA come aeroporto di Firenze, procedura ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Pisa Galileo Galilei (PSA): Risarcimento Voli 2026"
        description="Volo in ritardo o cancellato a Pisa PSA? Guida completa: importi CE 261, base Ryanair, PSA come aeroporto di Firenze, procedura ENAC."
        canonical="https://claimwinger.com/it/blog/aeroporto-pisa-galileo-galilei-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">Aeroporto Pisa PSA</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Aeroporti</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />8 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Pisa Galileo Galilei (PSA): Risarcimento Voli 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo in ritardo o cancellato a Pisa Galileo Galilei? Il CE 261/2004 ti garantisce fino a <strong>€400 di risarcimento</strong>. Questa guida copre tutto: base Ryanair, PSA come alternativa di Firenze e procedura passo per passo.
          </p>
        </header>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-blue-900 mb-2">Aeroporto Pisa Galileo Galilei — dati chiave</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-blue-800">
                <div><strong>Codice IATA:</strong> PSA</div>
                <div><strong>Codice ICAO:</strong> LIRP</div>
                <div><strong>Posizione:</strong> ~2 km dal centro di Pisa</div>
                <div><strong>Gestore:</strong> Toscana Aeroporti S.p.A.</div>
                <div><strong>Bacino d'utenza:</strong> Pisa, Firenze, Livorno, Toscana</div>
                <div><strong>Collegamento:</strong> Pisamover (monorotaia) con stazione ferroviaria</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-500" />
            PSA come aeroporto alternativo di Firenze
          </h2>
          <p className="text-gray-600 mb-4">
            Molti passeggeri toscani — specialmente quelli di Firenze — usano PSA come aeroporto principale per la maggior parte delle destinazioni low-cost, dato che il Tuscany Airport di Firenze (FLR/Peretola) ha una pista corta e traffico limitato.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Pisa PSA</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ~80 km da Firenze</li>
                  <li>• Hub Ryanair con decine di rotte</li>
                  <li>• Collegato a Firenze con autobus diretti e treno</li>
                  <li>• Pista lunga → voli intercontinentali possibili</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Firenze FLR (Peretola)</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ~5 km dal centro di Firenze</li>
                  <li>• Pista corta → solo voli regionali ed europei</li>
                  <li>• Operatori principali: ITA, Lufthansa, Air France, KLM</li>
                  <li>• In futuro: nuovo aeroporto Peretola (progetto in corso)</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-xs"><strong>Per i risarcimenti:</strong> se sei partito da PSA, il reclamo si basa su PSA; se da FLR, su FLR. L'autorità competente è sempre l'ENAC per entrambi.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-500" />
            Compagnie aeree a Pisa PSA
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">FR</span>
                Ryanair (base PSA)
              </h3>
              <p className="text-gray-600 text-sm mb-2">Ryanair ha una base operativa a Pisa — uno dei pochi aeroporti italiani con aerei stanziati. Questo significa più frequenze e potenzialmente meno ritardi da rotazione, ma il CE 261 si applica sempre in caso di problemi.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">U2</span>
                easyJet
              </h3>
              <p className="text-gray-600 text-sm mb-2">easyJet opera diverse rotte europee da PSA. Importi €250–€400 secondo distanza. Reclamo su easyjet.com.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">AZ</span>
                ITA Airways
              </h3>
              <p className="text-gray-600 text-sm mb-2">ITA opera voli nazionali da PSA (Roma, Napoli). Distanza <1500 km → €250. Reclamo su ita-airways.com.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full">W6</span>
                Wizz Air
              </h3>
              <p className="text-gray-600 text-sm mb-2">Wizz Air opera rotte PSA→Europa orientale (Budapest, Bucarest, Cracovia ecc.). CE 261 applicabile pienamente da PSA.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento per le rotte principali da Pisa PSA
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Destinazione</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza da PSA</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma (FCO)</td><td className="p-3">~300 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">ITA Airways</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Londra (STN/LGW)</td><td className="p-3">~1390 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Parigi (CDG/ORY/BVA)</td><td className="p-3">~1115 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Ryanair, Air France</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Barcellona (BCN)</td><td className="p-3">~1150 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Vueling, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Amsterdam (AMS)</td><td className="p-3">~1450 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">KLM, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Madrid (MAD)</td><td className="p-3">~1430 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Iberia, Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Dublino (DUB)</td><td className="p-3">~1780 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Edimburgo (EDI)</td><td className="p-3">~1760 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Cracovia (KRK)</td><td className="p-3">~1330 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Wizz Air, Ryanair</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Tel Aviv (TLV)</td><td className="p-3">~2275 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">El Al, Ryanair</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Le rotte da PSA verso UK continentale (Londra, Manchester) restano sotto 1500 km → €250. Le rotte verso Irlanda, Scozia e destinazioni più lontane superano 1500 km → €400.</p>
        </section>

        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo in ritardo da Pisa?</h3>
              <p className="text-blue-100 text-sm">Verifica subito il tuo diritto a €250–€400. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=pisa-psa" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo da Pisa PSA
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Documenta in aeroporto", content: "Conserva carta d'imbarco. Fotografa i pannelli informativi di PSA. Se il ritardo o cancellazione è comunicato via SMS/email dalla compagnia, conserva quella comunicazione." },
              { step: "2", title: "Verifica il ritardo all'arrivo (3 ore)", content: "La soglia CE 261 è 3 ore all'arrivo. Un volo partito con 3,5 ore di ritardo da PSA che recupera 30 minuti in volo arriva con 3 ore di ritardo — soglia raggiunta, diritto al risarcimento." },
              { step: "3", title: "Reclamo online alla compagnia", content: "Usa il modulo della compagnia operatrice (ryanair.com, easyjet.com, ita-airways.com, ecc.). Indica codice PSA, volo, data, ritardo, importo richiesto e IBAN per il bonifico." },
              { step: "4", title: "Escalation ENAC se necessario", content: "Se la compagnia rifiuta o non risponde entro 30 giorni, presenta reclamo su enac.gov.it. L'ENAC ha potere sanzionatorio sulle compagnie." }
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

        <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo per te?</h3>
              <p className="text-green-100 text-sm">ClaimWinger si occupa di tutto: reclamo, documentazione, follow-up e escalation ENAC. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=pisa-psa" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Aeroporto Pisa PSA</h2>
          <div className="space-y-3">
            {[
              { q: "Qual è il codice IATA dell'aeroporto di Pisa?", a: "Il codice IATA dell'aeroporto di Pisa Galileo Galilei è PSA. Si trova a circa 2 km dal centro di Pisa, collegato alla stazione ferroviaria con il Pisamover. Serve anche i passeggeri di Firenze e Livorno." },
              { q: "Quanto risarcimento spetta per un volo in ritardo da Pisa PSA?", a: "Fino a 1500 km → €250 (Londra, Parigi, Amsterdam, Barcellona, Madrid); 1500–3500 km → €400 (Dublino, Edimburgo, Tel Aviv). Il ritardo deve essere di almeno 3 ore all'arrivo." },
              { q: "Ryanair usa Pisa come base?", a: "Sì, Ryanair ha una base operativa a PSA con aerei stanziati. Questo garantisce più frequenze, ma il CE 261 si applica sempre in caso di ritardo o cancellazione — la base non esonera dalla responsabilità." },
              { q: "L'aeroporto di Pisa serve anche Firenze?", a: "Sì, PSA è spesso usato come aeroporto alternativo di Firenze (distante ~80 km). Per i risarcimenti, conta l'aeroporto effettivo di partenza: se sei partito da PSA, il reclamo si basa su PSA." },
              { q: "A chi mi rivolgo se la compagnia rifiuta il risarcimento da Pisa?", a: "L'autorità competente per i voli da aeroporti italiani è l'ENAC (enac.gov.it). Presenta reclamo allegando la risposta negativa della compagnia." },
              { q: "Qual è la prescrizione per i reclami da Pisa PSA?", a: "Per voli in partenza dall'Italia, la prescrizione è di 2 anni dalla data del volo. Presentare reclamo subito dopo l'evento è sempre consigliabile." }
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
              { href: "/it/blog/aeroporto-bologna-guglielmo-marconi-risarcimento", title: "Aeroporto Bologna BLQ", excerpt: "Aeroporto dell'Emilia-Romagna — guida completa al risarcimento." },
              { href: "/it/blog/aeroporto-venezia-marco-polo-risarcimento", title: "Aeroporto Venezia VCE", excerpt: "Guida per VCE inclusa la distinzione con TSF (Treviso)." },
              { href: "/it/blog/ryanair-italia-risarcimento", title: "Ryanair Italia: Guida Completa", excerpt: "Come ottenere fino a €600 da Ryanair per ritardi e cancellazioni." },
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
