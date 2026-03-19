import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info } from "lucide-react";

export default function AustrianAirlinesRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Il CE 261/2004 si applica ai voli Austrian Airlines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, pienamente. Austrian Airlines (codice OS) è una compagnia dell'UE con sede in Austria, Stato membro. Il CE 261 si applica a tutti i voli OS da aeroporti UE e a tutti i voli OS verso aeroporti UE indipendentemente dalla provenienza, se operati da Austrian."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo Austrian in ritardo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gli importi sono: fino a 1500 km → €250; 1500–3500 km → €400; oltre 3500 km → €600. La rotta Roma–Vienna (~770 km) → €250. Milano–Vienna (~570 km) → €250. Vienna è un hub intercontinentale per rotte verso Asia e Americhe, dove il risarcimento può raggiungere €600."
        }
      },
      {
        "@type": "Question",
        "name": "Ho perso una coincidenza a Vienna per colpa di un volo Austrian in ritardo. Quanto spetta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se hai un biglietto unico e perdi la coincidenza a Vienna (VIE), il risarcimento si calcola sulla distanza totale fino alla destinazione finale. Per destinazioni intercontinentali (es. Bangkok, Tokyo, New York via VIE): €600. L'importo non dipende dalla distanza del solo tratto Italia–Vienna."
        }
      },
      {
        "@type": "Question",
        "name": "Austrian Airlines e Lufthansa: a chi va il reclamo se ho un codeshare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il reclamo va sempre al vettore operativo — chi fisicamente ha fatto volare l'aereo. Se il numero di volo inizia con OS (es. OS871), il reclamo va a Austrian Airlines. Se il volo era venduto come LH ma operato da OS ('operated by Austrian'), il reclamo va comunque ad Austrian."
        }
      },
      {
        "@type": "Question",
        "name": "Se Austrian non risponde al mio reclamo, a chi mi rivolgo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se il volo è partito da un aeroporto italiano, puoi rivolgerti all'ENAC (enac.gov.it). Se il volo è partito da Vienna, l'autorità competente è Austro Control (austro-control.at) o la Rundfunk und Telekom Regulierungs-GmbH (RTR), secondo la normativa austriaca. I passeggeri italiani trovano spesso più comodo usare l'ENAC."
        }
      },
      {
        "@type": "Question",
        "name": "Austrian opera voli da quali aeroporti italiani?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Austrian Airlines opera principalmente da Roma Fiumicino (FCO) e Milano Malpensa (MXP) verso Vienna (VIE). In certi periodi opera anche da Venezia (VCE), Bologna (BLQ), Napoli (NAP) e altre città italiane. Tutti questi voli sono coperti dal CE 261/2004."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Austrian Airlines Risarcimento: Guida Completa 2026 — Fino a €600",
    "description": "Volo Austrian Airlines in ritardo o cancellato? Guida completa: CE 261/2004, coincidenza persa a Vienna, codeshare OS/LH, procedura e Austro Control/ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Austrian Airlines Risarcimento: Guida Completa 2026 — Fino a €600"
        description="Volo Austrian Airlines in ritardo o cancellato? Guida completa: CE 261/2004, coincidenza persa a Vienna, codeshare OS/LH, procedura e Austro Control/ENAC."
        canonical="https://claimwinger.com/it/blog/austrian-airlines-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">Austrian Airlines Risarcimento</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">Compagnie Aeree</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />10 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Austrian Airlines Risarcimento: Guida Completa 2026 — Fino a €600
          </h1>
          <p className="text-xl text-gray-600">
            Volo Austrian Airlines (OS) in ritardo o cancellato? Hai diritto a fino a <strong>€600 di risarcimento</strong> secondo il CE 261/2004. Questa guida copre tutto: Vienna come hub intercontinentale, codeshare con Lufthansa e procedura passo per passo.
          </p>
        </header>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Euro className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-red-900 mb-2">Risposta rapida</h2>
              <p className="text-red-800 text-sm leading-relaxed">
                Austrian Airlines (codice <strong>OS</strong>) è una compagnia dell'UE — il CE 261/2004 si applica pienamente. Importi: <strong>€250</strong> (≤1500 km), <strong>€400</strong> (1500–3500 km), <strong>€600</strong> (oltre 3500 km). Le rotte Italia–Vienna (FCO/MXP→VIE) hanno tutte distanza inferiore a 1500 km → <strong>€250</strong>. Ma se la coincidenza a Vienna porta a una destinazione intercontinentale con biglietto unico → <strong>€600</strong>.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-red-500" />
            Austrian nel gruppo Lufthansa: distinzione fondamentale
          </h2>
          <p className="text-gray-600 mb-4">
            Austrian Airlines fa parte del gruppo Lufthansa dal 2009, ma è una compagnia legalmente separata con proprio codice IATA (OS) e propria struttura. Questo è cruciale per i reclami.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Situazione</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Vettore responsabile</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Reclamo a</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Escalation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-red-50">
                  <td className="p-3 font-medium">Volo OS871 FCO→VIE (Austrian)</td>
                  <td className="p-3 text-red-700 font-semibold">Austrian Airlines</td>
                  <td className="p-3">Austrian Airlines</td>
                  <td className="p-3">ENAC o Austro Control</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Biglietto LH, volo OS ("operated by Austrian")</td>
                  <td className="p-3 text-red-700 font-semibold">Austrian Airlines</td>
                  <td className="p-3">Austrian Airlines</td>
                  <td className="p-3">ENAC o Austro Control</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Volo LH1234 FCO→FRA (Lufthansa)</td>
                  <td className="p-3">Lufthansa</td>
                  <td className="p-3">Lufthansa</td>
                  <td className="p-3">ENAC o LBA</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Volo Air Dolomiti EN→FRA (feeder per LH)</td>
                  <td className="p-3">Air Dolomiti</td>
                  <td className="p-3">Air Dolomiti / Lufthansa</td>
                  <td className="p-3">ENAC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Vienna come hub intercontinentale: quando il risarcimento sale a €600
          </h2>
          <p className="text-gray-600 mb-4">
            Vienna (VIE) è l'hub di Austrian con numerosi voli verso Asia centrale, Medio Oriente, Africa e Americhe. Per i passeggeri italiani che usano Vienna come scalo, la coincidenza persa può portare a risarcimenti molto più alti rispetto al solo tratto Italia–Vienna.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-4">
            <h3 className="font-semibold text-gray-900 mb-4">Esempio: MXP → VIE → Bangkok (BKK) — biglietto unico</h3>
            <div className="space-y-3">
              {[
                { n: "1", t: "Il volo MXP→VIE ha 90 min di ritardo. Perdi la coincidenza per Bangkok.", color: "red" },
                { n: "2", t: "Austrian ti rimette sul prossimo volo per Bangkok, che parte il giorno dopo.", color: "red" },
                { n: "3", t: "Arrivi a Bangkok con oltre 3 ore di ritardo → distanza MXP–BKK ~9250 km → €600.", color: "red" },
                { n: "+", t: "Austrian deve fornire: hotel a Vienna, pasto, trasferimento A/R aeroporto-hotel.", color: "amber" }
              ].map((item) => (
                <div key={item.n} className="flex items-start gap-3">
                  <span className={`bg-${item.color}-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0`}>{item.n}</span>
                  <p className="text-gray-700 text-sm">{item.t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Destinazione finale via VIE</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza da IT</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3">New York (JFK)</td><td className="p-3">~6800 km da FCO</td><td className="p-3 font-bold text-orange-600">€600</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3">Bangkok (BKK)</td><td className="p-3">~9000 km da MXP</td><td className="p-3 font-bold text-orange-600">€600</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3">Tokyo (NRT)</td><td className="p-3">~9700 km da FCO</td><td className="p-3 font-bold text-orange-600">€600</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3">Dubai (DXB)</td><td className="p-3">~4600 km da FCO</td><td className="p-3 font-bold text-orange-600">€600</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3">Nairobi (NBO)</td><td className="p-3">~4400 km da FCO</td><td className="p-3 font-bold text-orange-600">€600</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3">Tel Aviv (TLV)</td><td className="p-3">~2200 km da FCO</td><td className="p-3 font-bold text-amber-600">€400</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Rotte dirette Italia–Vienna e importi
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Rotta</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento ritardo 3h+</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma (FCO) → Vienna (VIE)</td><td className="p-3">~770 km</td><td className="p-3 font-bold text-green-600">€250</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Milano (MXP) → Vienna (VIE)</td><td className="p-3">~570 km</td><td className="p-3 font-bold text-green-600">€250</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Venezia (VCE) → Vienna (VIE)</td><td className="p-3">~460 km</td><td className="p-3 font-bold text-green-600">€250</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Bologna (BLQ) → Vienna (VIE)</td><td className="p-3">~680 km</td><td className="p-3 font-bold text-green-600">€250</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Napoli (NAP) → Vienna (VIE)</td><td className="p-3">~1060 km</td><td className="p-3 font-bold text-green-600">€250</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Palermo (PMO) → Vienna (VIE)</td><td className="p-3">~1340 km</td><td className="p-3 font-bold text-green-600">€250</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Catania (CTA) → Vienna (VIE)</td><td className="p-3">~1350 km</td><td className="p-3 font-bold text-green-600">€250</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Tutte le rotte dirette Italia→Vienna rientrano nella fascia ≤1500 km → €250. La fascia €400 si attiva solo su rotte più lunghe (es. Vienna→Atene ~1280 km, non si raggiunge facilmente da IT in singolo tratto).</p>
        </section>

        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo Austrian in ritardo o cancellato?</h3>
              <p className="text-red-100 text-sm">Verifica subito il tuo diritto a €250–€600. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=austrian" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Quando Austrian può rifiutare il risarcimento
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">NON valido per rifiutare</h3>
              <ul className="space-y-2">
                {["Guasto tecnico (salvo difetto nascosto certificato)", "Sciopero del personale Austrian", "Ritardo a cascata da rotazione aeromobile", "Problemi organizzativi o di gestione flotta", "Overbooking o sold-out del volo alternativo"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-red-500 font-bold flex-shrink-0">✗</span>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Potenzialmente valido</h3>
              <ul className="space-y-2">
                {["Sciopero ATC (Austro Control o ENAV)", "Meteo eccezionale con documentazione ufficiale", "Chiusura spazio aereo per emergenze sicurezza", "Instabilità politica straordinaria sulla rotta", "Pandemia o restrizioni governative documentate"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-green-600 font-bold flex-shrink-0">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo ad Austrian Airlines
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Verifica il numero di volo OS...", content: "Controlla il biglietto o la conferma di prenotazione. Se il volo inizia con OS, il vettore è Austrian. Se venduto da LH ma operato da OS, il reclamo va comunque ad Austrian." },
              { step: "2", title: "Reclamo su austrianairlines.com", content: "Vai su austrianairlines.com → Servizio clienti → Reclamo. Il modulo è disponibile in inglese e tedesco. Indica: numero volo, prenotazione, data, tipo problema, importo richiesto (€250/€400/€600) e IBAN." },
              { step: "3", title: "Attendi 30 giorni", content: "Austrian risponde generalmente entro 3–6 settimane. Il tasso di accettazione è medio: spesso richiedono documentazione aggiuntiva prima di pagare." },
              { step: "4", title: "Escalation: ENAC o Austro Control", content: "Per voli da aeroporti italiani → ENAC (enac.gov.it). Per voli da Vienna → Austro Control (austro-control.at) o Agentur für Passagier- und Fahrgastrechte (apf.gv.at), l'agenzia austriaca per i diritti dei passeggeri." }
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
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-blue-800 text-sm"><strong>APF Austria:</strong> l'Agentur für Passagier- und Fahrgastrechte (APF) è un organismo austriaco indipendente di mediazione che può intervenire prima del ricorso formale all'Austro Control. È gratuita e spesso risolve i casi più velocemente.</p>
          </div>
        </section>

        <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo Austrian per te?</h3>
              <p className="text-gray-300 text-sm">ClaimWinger conosce le procedure austriache e l'APF. Gestiamo tutto in italiano. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=austrian" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-gray-800 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Austrian Airlines</h2>
          <div className="space-y-3">
            {[
              { q: "Il CE 261/2004 si applica ai voli Austrian Airlines?", a: "Sì, pienamente. Austrian Airlines (OS) è una compagnia dell'UE con sede in Austria. Il CE 261 si applica a tutti i voli OS da aeroporti UE e a tutti i voli OS verso aeroporti UE operati da Austrian." },
              { q: "Quanto risarcimento spetta per un volo Austrian in ritardo?", a: "Gli importi sono: fino a 1500 km → €250; 1500–3500 km → €400; oltre 3500 km → €600. Le rotte Italia–Vienna hanno tutte distanza <1500 km → €250. Con coincidenza intercontinentale via VIE su biglietto unico → €600." },
              { q: "Ho perso una coincidenza a Vienna per un volo Austrian in ritardo. Quanto spetta?", a: "Se hai un biglietto unico, il risarcimento si calcola sulla distanza totale fino alla destinazione finale. Per destinazioni intercontinentali via VIE: €600. L'importo non dipende dalla sola distanza Italia–Vienna." },
              { q: "Austrian Airlines e Lufthansa: a chi va il reclamo se ho un codeshare?", a: "Il reclamo va sempre al vettore operativo. Se il numero di volo inizia con OS, il reclamo va ad Austrian Airlines, anche se il biglietto era venduto da Lufthansa." },
              { q: "Se Austrian non risponde al mio reclamo, a chi mi rivolgo?", a: "Per voli da aeroporti italiani → ENAC (enac.gov.it). Per voli da Vienna → APF (apf.gv.at) o Austro Control. I passeggeri italiani trovano spesso più comodo l'ENAC." },
              { q: "Austrian opera voli da quali aeroporti italiani?", a: "Austrian opera principalmente da FCO e MXP verso Vienna. In certi periodi anche da VCE, BLQ, NAP, PMO, CTA. Tutti coperti dal CE 261/2004." }
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
              { href: "/it/blog/lufthansa-risarcimento-voli", title: "Lufthansa Risarcimento Voli", excerpt: "Guida completa per il gruppo LH — hub FRA/MUC e subsidiarie." },
              { href: "/it/blog/swiss-risarcimento", title: "SWISS Risarcimento: Guida 2026", excerpt: "Accordo CH-UE, coincidenza persa a Zurigo, BAZL/ENAC." },
              { href: "/it/blog/eurowings-risarcimento", title: "Eurowings Risarcimento", excerpt: "La sussidiaria low-cost Lufthansa — guida completa." },
              { href: "/it/blog/klm-risarcimento", title: "KLM Risarcimento: Coincidenza a Schiphol", excerpt: "Come funziona con KLM per scali ad Amsterdam." }
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
