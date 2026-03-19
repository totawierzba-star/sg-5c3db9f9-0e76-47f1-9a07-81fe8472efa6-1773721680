import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info } from "lucide-react";

export default function TapAirPortugalRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Il CE 261/2004 si applica ai voli TAP Air Portugal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, pienamente. TAP Air Portugal (codice TP) è una compagnia dell'UE con sede in Portogallo, Stato membro. Il CE 261 si applica a tutti i voli TAP da aeroporti UE e a tutti i voli TAP verso aeroporti UE operati da TAP, indipendentemente dalla provenienza."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo TAP in ritardo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gli importi sono: fino a 1500 km → €250; 1500–3500 km → €400; oltre 3500 km → €600. La rotta Roma–Lisbona (~1730 km) → €400. Milano–Lisbona (~1810 km) → €400. Con coincidenza a Lisbona verso Brasile o Africa → €600."
        }
      },
      {
        "@type": "Question",
        "name": "Lisbona è un hub per il Brasile: se perdo la coincidenza, quanto ottengo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se hai un biglietto unico IT→LIS→Brasile e perdi la coincidenza per colpa del ritardo del primo tratto, il risarcimento si calcola sulla distanza totale. Roma–São Paulo ~9300 km → €600. Roma–Rio de Janeiro ~9050 km → €600. Milano–Fortaleza ~7600 km → €600."
        }
      },
      {
        "@type": "Question",
        "name": "TAP ha spesso ritardi? Il suo tasso di puntualità è basso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TAP ha avuto periodi difficili di puntualità, in particolare durante e dopo la ristrutturazione post-pandemia (2020–2023). I dati OAG e FlightAware mostrano un tasso di puntualità mediamente inferiore alla media europea. Questo aumenta la probabilità che i passeggeri abbiano diritto al risarcimento CE 261."
        }
      },
      {
        "@type": "Question",
        "name": "Se TAP non risponde al mio reclamo, a chi mi rivolgo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per voli da aeroporti italiani → ENAC (enac.gov.it). Per voli da Lisbona o Porto → ANAC (Autoridade Nacional da Aviação Civil, anac.pt). Entrambe hanno procedure online gratuite. TAP ha storicamente tempi di risposta lunghi — spesso 8–12 settimane."
        }
      },
      {
        "@type": "Question",
        "name": "TAP opera da Milano Malpensa oltre che da Roma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, TAP opera da diversi aeroporti italiani tra cui Roma Fiumicino (FCO), Milano Malpensa (MXP), Venezia (VCE), Bologna (BLQ) e talvolta altri. Per tutti i voli da aeroporti italiani il CE 261 si applica e l'escalation è all'ENAC."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "TAP Air Portugal Risarcimento: Guida Completa 2026 — Fino a €600",
    "description": "Volo TAP in ritardo o cancellato? CE 261/2004, hub Lisbona per Brasile/Africa, importi, tempi di risposta TAP e procedura ANAC/ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="TAP Air Portugal Risarcimento: Guida Completa 2026 — Fino a €600"
        description="Volo TAP in ritardo o cancellato? CE 261/2004, hub Lisbona per Brasile/Africa, importi, tempi di risposta TAP e procedura ANAC/ENAC."
        canonical="https://claimwinger.com/it/blog/tap-air-portugal-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">TAP Air Portugal Risarcimento</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Compagnie Aeree</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />10 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            TAP Air Portugal Risarcimento: Guida Completa 2026 — Fino a €600
          </h1>
          <p className="text-xl text-gray-600">
            Volo TAP in ritardo o cancellato? Hai diritto a fino a <strong>€600 di risarcimento</strong>. Lisbona è il gateway per Brasile e Africa — se perdi la coincidenza, l'importo può salire significativamente. Ecco tutto quello che devi sapere.
          </p>
        </header>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Euro className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-green-900 mb-2">Risposta rapida</h2>
              <p className="text-green-800 text-sm leading-relaxed">
                TAP Air Portugal (codice <strong>TP</strong>) è una compagnia dell'UE — CE 261/2004 applicabile pienamente. Le rotte Italia–Lisbona (FCO/MXP→LIS) misurano 1730–1810 km → <strong>€400</strong>. Con coincidenza a Lisbona verso Brasile o Africa su biglietto unico → <strong>€600</strong>. TAP è nota per tempi di risposta lunghi — la procedura corretta è fondamentale.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-green-500" />
            Lisbona come hub intercontinentale: l'impatto sui risarcimenti
          </h2>
          <p className="text-gray-600 mb-4">
            Lisbona (LIS) è uno dei principali hub per i voli verso il Brasile, l'Africa lusofona (Angola, Mozambico, Capo Verde) e il Nord America. Molti passeggeri italiani usano TAP con scalo a Lisbona. Se il volo Italia→Lisbona è in ritardo e perdi la coincidenza intercontinentale, il risarcimento sale a €600.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-4">
            <h3 className="font-semibold text-gray-900 mb-4">Esempio: FCO → LIS → São Paulo (GRU)</h3>
            <div className="space-y-3">
              {[
                "Biglietto unico TAP: FCO→LIS→GRU. Il volo FCO→LIS ha 2h di ritardo.",
                "Perdi la coincidenza LIS→GRU. Il prossimo volo per São Paulo è 18 ore dopo.",
                "Arrivi a GRU con oltre 3 ore di ritardo → distanza FCO–GRU ~9300 km → €600.",
                "TAP deve fornire: hotel a Lisbona, pasto, trasferimento hotel-aeroporto."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className={`${i === 3 ? "bg-amber-500" : "bg-green-600"} text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0`}>{i === 3 ? "+" : i + 1}</span>
                  <p className="text-gray-700 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Destinazione finale via LIS</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza da Italia</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["São Paulo (GRU)", "~9300 km da FCO", "€600"],
                  ["Rio de Janeiro (GIG)", "~9000 km da FCO", "€600"],
                  ["Fortaleza (FOR)", "~7600 km da MXP", "€600"],
                  ["New York (JFK)", "~6800 km da FCO", "€600"],
                  ["Luanda, Angola (LAD)", "~5600 km da FCO", "€600"],
                  ["Maputo, Mozambico (MPM)", "~8400 km da FCO", "€600"],
                  ["Praia, Capo Verde (RAI)", "~3700 km da FCO", "€600"],
                ].map(([dest, dist, amount], i) => (
                  <tr key={i} className="hover:bg-gray-50 bg-orange-50">
                    <td className="p-3 font-medium">{dest}</td>
                    <td className="p-3">{dist}</td>
                    <td className="p-3 font-bold text-orange-600">{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Rotte dirette Italia–Portogallo e importi
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Rotta</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Roma (FCO) → Lisbona (LIS)</td><td className="p-3">~1730 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Fascia 1500–3500 km</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Milano (MXP) → Lisbona (LIS)</td><td className="p-3">~1810 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Fascia 1500–3500 km</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Venezia (VCE) → Lisbona (LIS)</td><td className="p-3">~1955 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Fascia 1500–3500 km</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Bologna (BLQ) → Lisbona (LIS)</td><td className="p-3">~1850 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Fascia 1500–3500 km</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Napoli (NAP) → Lisbona (LIS)</td><td className="p-3">~1840 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Fascia 1500–3500 km</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Roma (FCO) → Porto (OPO)</td><td className="p-3">~1830 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Fascia 1500–3500 km</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Tutte le rotte dirette Italia–Portogallo rientrano nella fascia €400 — nessuna è sotto 1500 km.</p>
        </section>

        <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo TAP in ritardo o cancellato?</h3>
              <p className="text-green-100 text-sm">Verifica subito il tuo diritto a €400 o €600. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=tap" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            TAP e i rifiuti di risarcimento: cosa sapere
          </h2>
          <p className="text-gray-600 mb-4">
            TAP ha attraversato una ristrutturazione significativa dopo la pandemia, con tagli al personale e riduzione della flotta. Questo ha portato a una fase di ritardi e cancellazioni più frequenti, ma anche a risposte ai reclami lente e a volte con motivazioni generiche.
          </p>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-3">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0">NON valido</span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">"Problemi operativi" o "ragioni tecniche" generiche</h3>
                <p className="text-gray-600 text-sm mt-1">TAP non può limitarsi a invocare problemi operativi senza specificare e documentare la circostanza straordinaria. I guasti tecnici e i problemi organizzativi non sono circostanze straordinarie — il risarcimento è dovuto.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-3">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0">NON valido</span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Sciopero del personale TAP</h3>
                <p className="text-gray-600 text-sm mt-1">Lo sciopero dei dipendenti TAP (piloti, assistenti di volo, personale a terra) non è una circostanza straordinaria secondo la giurisprudenza UE — è un rischio interno della compagnia. Il risarcimento è dovuto.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-3">
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0">Valido</span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Sciopero ATC (NAV Portugal o ENAV)</h3>
                <p className="text-gray-600 text-sm mt-1">Lo sciopero dei controllori di volo portoghesi (NAV Portugal) o italiani (ENAV) è circostanza straordinaria. La compagnia non è tenuta al risarcimento monetario, ma mantiene l'obbligo di assistenza.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo a TAP — procedura completa
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Documenta tutto in aeroporto", content: "Conserva carta d'imbarco, conferma di prenotazione, screenshot del pannello partenze. Chiedi alla compagnia conferma scritta del ritardo con motivazione." },
              { step: "2", title: "Reclamo su flytap.com", content: "Vai su flytap.com → Assistenza clienti → Reclamo. Specifica: numero volo TP..., data, aeroporto di partenza, ritardo e IBAN. Il modulo è disponibile in inglese e portoghese." },
              { step: "3", title: "Attendi — TAP è lenta", content: "TAP ha storicamente uno dei tempi di risposta più lunghi tra le compagnie europee: 8–14 settimane in media. Se non risponde entro 30 giorni, puoi già procedere all'escalation." },
              { step: "4", title: "Escalation: ENAC (da IT) o ANAC (da PT)", content: "Per voli da aeroporti italiani → ENAC (enac.gov.it). Per voli da Lisbona o Porto → ANAC Portogallo (anac.pt). L'ANAC è l'autorità nazionale portoghese dell'aviazione civile." }
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
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm"><strong>Nota sui tempi TAP:</strong> per la sua lentezza nelle risposte, TAP è tra le compagnie dove affidarsi a un servizio come ClaimWinger è particolarmente vantaggioso — il follow-up professionale accelera spesso i tempi di risoluzione.</p>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">TAP non risponde? Gestiamo noi.</h3>
              <p className="text-blue-200 text-sm">ClaimWinger conosce i tempi di TAP e sa come accelerare la procedura. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>. Nessun pagamento anticipato.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=tap" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — TAP Air Portugal</h2>
          <div className="space-y-3">
            {[
              { q: "Il CE 261/2004 si applica ai voli TAP Air Portugal?", a: "Sì, pienamente. TAP (TP) è una compagnia UE con sede in Portogallo. Il CE 261 si applica a tutti i voli TAP da aeroporti UE e verso aeroporti UE operati da TAP." },
              { q: "Quanto risarcimento spetta per un volo TAP in ritardo?", a: "Le rotte Italia–Lisbona (FCO/MXP→LIS, ~1730–1810 km) rientrano nella fascia 1500–3500 km → €400. Con coincidenza a Lisbona verso Brasile o Africa su biglietto unico → €600." },
              { q: "Lisbona è un hub per il Brasile: se perdo la coincidenza, quanto ottengo?", a: "Con biglietto unico IT→LIS→Brasile, il risarcimento si calcola sulla distanza totale. Roma–São Paulo ~9300 km → €600. Roma–Rio ~9000 km → €600." },
              { q: "TAP ha spesso ritardi?", a: "TAP ha avuto periodi difficili di puntualità, specialmente durante la ristrutturazione post-pandemia. Il tasso di puntualità è mediamente inferiore alla media europea, aumentando la probabilità di avere diritto al risarcimento CE 261." },
              { q: "Se TAP non risponde, a chi mi rivolgo?", a: "Per voli da aeroporti italiani → ENAC (enac.gov.it). Per voli da Lisbona o Porto → ANAC Portogallo (anac.pt). TAP ha storicamente tempi di risposta di 8–14 settimane." },
              { q: "TAP opera da Milano Malpensa oltre che da Roma?", a: "Sì, TAP opera da FCO, MXP, VCE, BLQ e talvolta altri aeroporti italiani. Per tutti i voli da aeroporti italiani il CE 261 si applica e l'escalation è all'ENAC." }
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
              { href: "/it/blog/iberia-risarcimento", title: "Iberia Risarcimento: Guida 2026", excerpt: "Coincidenza persa a Madrid verso America Latina — fino a €600." },
              { href: "/it/blog/air-france-risarcimento", title: "Air France Risarcimento", excerpt: "Hub Parigi CDG per voli intercontinentali — guida completa." },
              { href: "/it/blog/circostanze-straordinarie-spiegate", title: "Circostanze Straordinarie", excerpt: "Quando TAP o altra compagnia può rifiutare legalmente." },
              { href: "/it/blog/da-quante-ore-ritardo-diritto-risarcimento", title: "Da Quante Ore di Ritardo hai Diritto?", excerpt: "La regola delle 3 ore spiegata con esempi pratici." }
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
