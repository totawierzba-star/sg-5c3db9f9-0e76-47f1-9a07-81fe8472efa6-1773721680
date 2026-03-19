import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function AeroportoBarisRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il codice IATA dell'aeroporto di Bari?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il codice IATA dell'aeroporto di Bari Karol Wojtyla è BRI. Si trova a circa 9 km dal centro di Bari ed è il principale aeroporto della Puglia e del Sud-est italiano. Serve anche i passeggeri di Brindisi e Taranto, oltre che di Bari."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo in ritardo da Bari BRI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dipende dalla distanza della rotta: fino a 1500 km → €250 (es. Roma, Milano, Londra Gatwick, Parigi); 1500–3500 km → €400 (es. Londra Stansted, Amsterdam, Francoforte, Berlino, Dublino). Il ritardo deve essere di almeno 3 ore all'arrivo."
        }
      },
      {
        "@type": "Question",
        "name": "Ryanair opera a Bari BRI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, Ryanair è uno dei principali operatori a Bari con numerose rotte europee e nazionali. In caso di ritardo o cancellazione su voli Ryanair da BRI, hai pieno diritto al risarcimento CE 261/2004. Il reclamo si presenta su ryanair.com; escalation all'ENAC."
        }
      },
      {
        "@type": "Question",
        "name": "Qual è la differenza tra l'aeroporto di Bari (BRI) e quello di Brindisi (BDS)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BRI (Bari) e BDS (Brindisi) sono entrambi aeroporti pugliesi gestiti da Aeroporti di Puglia. Bari è il più grande e serve il capoluogo; Brindisi serve la Puglia meridionale e il Salento. Per i risarcimenti, entrambi seguono le stesse regole CE 261/2004 — la differenza è solo geografica."
        }
      },
      {
        "@type": "Question",
        "name": "A chi mi rivolgo se la compagnia rifiuta il risarcimento da Bari?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'autorità competente per i voli da aeroporti italiani è l'ENAC (Ente Nazionale per l'Aviazione Civile). Puoi presentare reclamo su enac.gov.it allegando la risposta negativa della compagnia o la mancata risposta entro 30 giorni."
        }
      },
      {
        "@type": "Question",
        "name": "I voli verso Albania o Montenegro da Bari rientrano nel CE 261?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solo parzialmente. Il CE 261 si applica a tutti i voli da aeroporti UE (Bari è UE) indipendentemente dalla destinazione. Quindi se parti da BRI verso Tirana o Podgorica, sei coperto. Se invece torni da Tirana verso Bari su una compagnia non-UE, il CE 261 non si applica (partenza da Paese non-UE, vettore non-UE)."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aeroporto Bari Karol Wojtyla (BRI): Risarcimento Voli 2026",
    "description": "Volo in ritardo o cancellato a Bari BRI? Guida completa: CE 261/2004, importi, Ryanair/ITA/easyJet, BRI vs BDS, voli Balcani e procedura ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Bari Karol Wojtyla (BRI): Risarcimento Voli 2026"
        description="Volo in ritardo o cancellato a Bari BRI? Guida completa: CE 261/2004, importi, Ryanair/ITA/easyJet, BRI vs BDS, voli Balcani e procedura ENAC."
        canonical="https://claimwinger.com/it/blog/aeroporto-bari-karol-wojtyla-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">Aeroporto Bari BRI</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Aeroporti</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />8 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Bari Karol Wojtyla (BRI): Risarcimento Voli 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo in ritardo o cancellato a Bari? Il CE 261/2004 ti garantisce fino a <strong>€400 di risarcimento</strong> per la maggior parte delle rotte europee. Ecco la guida completa per i passeggeri di BRI.
          </p>
        </header>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-purple-900 mb-2">Aeroporto Bari Karol Wojtyla — dati chiave</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-purple-800">
                <div><strong>Codice IATA:</strong> BRI</div>
                <div><strong>Codice ICAO:</strong> LIBD</div>
                <div><strong>Posizione:</strong> ~9 km dal centro di Bari</div>
                <div><strong>Gestore:</strong> Aeroporti di Puglia S.p.A.</div>
                <div><strong>Bacino d'utenza:</strong> Bari, Brindisi, Taranto, Puglia</div>
                <div><strong>Note:</strong> Intitolato a Papa Giovanni Paolo II</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-purple-500" />
            Bari come gateway per i Balcani: CE 261 e voli verso Albania, Montenegro, Grecia
          </h2>
          <p className="text-gray-600 mb-4">
            Bari è il porto e l'aeroporto principale per i collegamenti con i Balcani. Molti passeggeri usano BRI per volare verso Albania, Montenegro, Macedonia del Nord, Serbia e Grecia. Capire quando si applica il CE 261 su queste rotte è fondamentale.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Scenario</th>
                  <th className="text-left p-3 font-semibold text-gray-700">CE 261 applicabile?</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Perché</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-green-50"><td className="p-3 font-medium">BRI → Tirana (TIA) su Ryanair/easyJet</td><td className="p-3"><span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded">SÌ</span></td><td className="p-3 text-gray-600">Partenza da UE (BRI)</td></tr>
                <tr className="bg-green-50"><td className="p-3 font-medium">BRI → Atene (ATH) su ITA/Aegean</td><td className="p-3"><span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded">SÌ</span></td><td className="p-3 text-gray-600">Partenza da UE, destinazione UE</td></tr>
                <tr className="bg-red-50"><td className="p-3 font-medium">Tirana → BRI su Air Albania</td><td className="p-3"><span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded">NO</span></td><td className="p-3 text-gray-600">Partenza da non-UE, vettore non-UE</td></tr>
                <tr className="bg-green-50"><td className="p-3 font-medium">Tirana → BRI su Ryanair</td><td className="p-3"><span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded">SÌ</span></td><td className="p-3 text-gray-600">Vettore UE (irlandese)</td></tr>
                <tr className="bg-red-50"><td className="p-3 font-medium">Podgorica → BRI su Montenegro Airlines</td><td className="p-3"><span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded">NO</span></td><td className="p-3 text-gray-600">Partenza da non-UE, vettore non-UE</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento per le rotte principali da Bari BRI
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Destinazione</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza da BRI</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma (FCO)</td><td className="p-3">~450 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">ITA Airways, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Milano (MXP/LIN)</td><td className="p-3">~820 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">ITA, Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Londra (LGW)</td><td className="p-3">~1880 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Parigi (CDG/ORY)</td><td className="p-3">~1530 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Air France, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Barcellona (BCN)</td><td className="p-3">~1580 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Vueling, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Amsterdam (AMS)</td><td className="p-3">~1830 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">KLM, Transavia</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Francoforte (FRA)</td><td className="p-3">~1570 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Lufthansa</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Berlino (BER)</td><td className="p-3">~1900 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Dublino (DUB)</td><td className="p-3">~2430 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Tirana (TIA)</td><td className="p-3">~330 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Ryanair, easyJet</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo in ritardo da Bari?</h3>
              <p className="text-purple-100 text-sm">Verifica subito il tuo diritto a €250–€400. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=bari-bri" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            BRI vs BDS: differenze per i passeggeri pugliesi
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Caratteristica</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Bari (BRI)</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Brindisi (BDS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Zona servita</td><td className="p-3">Puglia centro-nord, Basilicata</td><td className="p-3">Puglia sud, Salento</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Gestore</td><td className="p-3">Aeroporti di Puglia</td><td className="p-3">Aeroporti di Puglia</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">CE 261/2004</td><td className="p-3 text-green-600 font-semibold">Piena copertura</td><td className="p-3 text-green-600 font-semibold">Piena copertura</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Principale operatore</td><td className="p-3">Ryanair</td><td className="p-3">Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Numero rotte</td><td className="p-3">Maggiore offerta</td><td className="p-3">Minore offerta</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo da Bari BRI
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Documenta il ritardo in aeroporto", content: "Conserva carta d'imbarco. Fotografa i pannelli BRI con orario effettivo. Chiedi alla compagnia conferma scritta con motivazione del ritardo." },
              { step: "2", title: "Verifica la soglia 3 ore all'arrivo", content: "Il CE 261 si applica se il ritardo all'arrivo (apertura porte nella destinazione finale) è di 3+ ore. Non conta il ritardo alla partenza da Bari." },
              { step: "3", title: "Reclamo formale alla compagnia", content: "Usa il modulo online della compagnia operatrice. Indica codice BRI, numero volo, data, ritardo subito, importo richiesto e IBAN. La compagnia ha 30 giorni per rispondere." },
              { step: "4", title: "Escalation ENAC", content: "Se la compagnia rifiuta o non risponde, presenta reclamo su enac.gov.it. L'ENAC è l'autorità italiana di vigilanza competente per i voli da BRI." }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{item.step}</div>
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
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=bari-bri" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Aeroporto Bari BRI</h2>
          <div className="space-y-3">
            {[
              { q: "Qual è il codice IATA dell'aeroporto di Bari?", a: "Il codice IATA dell'aeroporto di Bari Karol Wojtyla è BRI. Si trova a circa 9 km dal centro di Bari ed è il principale aeroporto della Puglia." },
              { q: "Quanto risarcimento spetta per un volo in ritardo da Bari BRI?", a: "Fino a 1500 km → €250 (Roma, Milano, Tirana); 1500–3500 km → €400 (Londra, Parigi, Barcellona, Amsterdam, Francoforte, Berlino, Dublino). Il ritardo deve essere di almeno 3 ore all'arrivo." },
              { q: "Ryanair opera a Bari BRI?", a: "Sì, Ryanair è uno dei principali operatori a BRI con numerose rotte europee e nazionali. In caso di ritardo o cancellazione hai pieno diritto al CE 261/2004." },
              { q: "Qual è la differenza tra BRI e BDS (Brindisi)?", a: "BRI serve la Puglia centro-nord, BDS serve la Puglia meridionale e il Salento. Entrambi sono gestiti da Aeroporti di Puglia e seguono le stesse regole CE 261/2004." },
              { q: "A chi mi rivolgo se la compagnia rifiuta il risarcimento da Bari?", a: "L'autorità competente è l'ENAC (enac.gov.it). Presenta reclamo allegando la risposta negativa della compagnia o la mancata risposta entro 30 giorni." },
              { q: "I voli verso Albania o Montenegro da Bari rientrano nel CE 261?", a: "I voli DA Bari verso Albania o Montenegro sono coperti (partenza da UE). I voli da quei Paesi verso Bari su compagnie non-UE non sono coperti. I voli di ritorno su compagnie UE (es. Ryanair) sono coperti." }
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
              { href: "/it/blog/aeroporto-napoli-capodichino-risarcimento", title: "Aeroporto Napoli Capodichino", excerpt: "Guida al risarcimento per il principale aeroporto del Sud Italia." },
              { href: "/it/blog/aeroporto-catania-fontanarossa-risarcimento", title: "Aeroporto Catania CTA", excerpt: "Guida per CTA con il caso speciale dell'Etna." },
              { href: "/it/blog/ryanair-italia-risarcimento", title: "Ryanair Italia: Guida Completa", excerpt: "Come ottenere fino a €600 da Ryanair da BRI e altri aeroporti." },
              { href: "/it/blog/circostanze-straordinarie-spiegate", title: "Circostanze Straordinarie", excerpt: "Quando la compagnia può legalmente rifiutare il risarcimento." }
            ].map((article) => (
              <Link key={article.href} href={article.href} className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-purple-300 hover:shadow-md transition-all">
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
