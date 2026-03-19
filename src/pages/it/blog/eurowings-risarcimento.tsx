import LayoutIt from "../../../components/LayoutIt";
import SEO from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info } from "lucide-react";

export default function EurowingsRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Eurowings è parte di Lufthansa Group?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, Eurowings è una sussidiaria del gruppo Lufthansa. Tuttavia, è una compagnia separata con proprio codice IATA (EW) e propria struttura legale. Il reclamo per voli Eurowings va presentato a Eurowings, non a Lufthansa. L'autorità di vigilanza competente è il Luftfahrt-Bundesamt (LBA) tedesco o l'ENAC italiano se il volo parte dall'Italia."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo Eurowings in ritardo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eurowings opera principalmente rotte europee e intercontinentali a medio raggio: fino a 1500 km → €250; 1500–3500 km → €400; oltre 3500 km → €600. Il ritardo deve essere di almeno 3 ore all'arrivo. Poiché Eurowings decolla spesso da aeroporti tedeschi (CGN, DUS, STR, MUC), molti passeggeri italiani usufruiscono di voli con cambio a questi hub."
        }
      },
      {
        "@type": "Question",
        "name": "Ho un volo in codeshare: il biglietto è Lufthansa ma vola Eurowings. Chi è responsabile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La responsabilità per il CE 261/2004 spetta al vettore operativo — cioè la compagnia che fisicamente fa volare l'aereo. Se il volo fisico è operato da Eurowings (lo vedi dal numero di volo EW...), il reclamo va a Eurowings, anche se hai acquistato il biglietto da Lufthansa."
        }
      },
      {
        "@type": "Question",
        "name": "Eurowings Discover è la stessa cosa di Eurowings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Eurowings Discover (ex Condor in parte) è una compagnia separata focalizzata sui voli leisure e intercontinentali, anche se fa parte del gruppo Lufthansa. I reclami per voli EW5... (Eurowings Discover) vanno presentati a Eurowings Discover, non a Eurowings (EW). Anche Eurowings Discover è soggetta al CE 261/2004."
        }
      },
      {
        "@type": "Question",
        "name": "Eurowings opera voli da aeroporti italiani?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, Eurowings opera voli da diversi aeroporti italiani (FCO, MXP, VCE, BLQ, NAP, PMO, CTA) principalmente verso hub tedeschi (CGN/DUS/STR/MUC) e altre destinazioni europee. Per tutti i voli da aeroporti italiani, il CE 261/2004 si applica pienamente."
        }
      },
      {
        "@type": "Question",
        "name": "Se Eurowings non risponde al mio reclamo, a quale autorità mi rivolgo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se il volo è partito da un aeroporto italiano, puoi rivolgerti all'ENAC (Ente Nazionale per l'Aviazione Civile, enac.gov.it). Se il volo è partito dalla Germania, l'autorità competente è il Luftfahrt-Bundesamt (LBA). Entrambe le opzioni sono valide — scegli quella più comoda per te."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Eurowings Risarcimento: Guida Completa 2026 — Fino a €600 per Ritardi e Cancellazioni",
    "description": "Volo Eurowings in ritardo o cancellato? Guida completa: CE 261/2004, gruppo Lufthansa, codeshare EW vs LH, Eurowings Discover, procedura reclamo e LBA/ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Eurowings Risarcimento: Guida Completa 2026 — Fino a €600 per Ritardi e Cancellazioni"
        description="Volo Eurowings in ritardo o cancellato? Guida completa: CE 261/2004, gruppo Lufthansa, codeshare EW vs LH, Eurowings Discover, procedura reclamo e LBA/ENAC."
        canonical="https://claimwinger.com/it/blog/eurowings-risarcimento"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2">
              <Link href="/it/blog" className="hover:text-blue-600">Blog</Link>
            </li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">
              Eurowings Risarcimento
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Compagnie Aeree</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />10 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Eurowings Risarcimento: Guida Completa 2026 — Fino a €600
          </h1>
          <p className="text-xl text-gray-600">
            Volo Eurowings in ritardo o cancellato? Hai diritto a fino a <strong>€600 di risarcimento</strong> secondo il CE 261/2004. Questa guida chiarisce la differenza tra Eurowings e Lufthansa, spiega il codeshare e ti guida passo per passo nella procedura.
          </p>
        </header>

        {/* Quick answer */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Euro className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-purple-900 mb-2">Risposta rapida</h2>
              <p className="text-purple-800 text-sm leading-relaxed">
                Eurowings (codice <strong>EW</strong>) è soggetta al CE 261/2004 su tutti i voli da aeroporti UE e su voli verso UE operati da vettori europei. Gli importi sono: <strong>€250</strong> (fino a 1500 km), <strong>€400</strong> (1500–3500 km), <strong>€600</strong> (oltre 3500 km). Il reclamo va presentato a <strong>Eurowings</strong> — non a Lufthansa.
              </p>
            </div>
          </div>
        </div>

        {/* Lufthansa Group structure */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-purple-500" />
            Eurowings nel Lufthansa Group: chi è chi
          </h2>
          <p className="text-gray-600 mb-4">
            Il Lufthansa Group include molte compagnie. Sapere quale ha operato fisicamente il tuo volo è fondamentale per indirizzare il reclamo correttamente.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnia</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Codice IATA</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Tipo voli</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Reclamo a</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Escalation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Lufthansa</td>
                  <td className="p-3">LH</td>
                  <td className="p-3">Hub principale (FRA/MUC), intercontinentali</td>
                  <td className="p-3">Lufthansa</td>
                  <td className="p-3">LBA (Germania)</td>
                </tr>
                <tr className="bg-purple-50 hover:bg-purple-100">
                  <td className="p-3 font-medium text-purple-900">Eurowings</td>
                  <td className="p-3 text-purple-700 font-bold">EW</td>
                  <td className="p-3">Rotte europee, low-cost</td>
                  <td className="p-3 text-purple-700 font-semibold">Eurowings</td>
                  <td className="p-3">LBA o ENAC (se da IT)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Eurowings Discover</td>
                  <td className="p-3">EW5</td>
                  <td className="p-3">Leisure, intercontinentali</td>
                  <td className="p-3">Eurowings Discover</td>
                  <td className="p-3">LBA</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">SWISS</td>
                  <td className="p-3">LX</td>
                  <td className="p-3">Hub ZRH, europei e intercon.</td>
                  <td className="p-3">SWISS</td>
                  <td className="p-3">BAZL (Svizzera) o ENAC</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Austrian Airlines</td>
                  <td className="p-3">OS</td>
                  <td className="p-3">Hub VIE, europei e intercon.</td>
                  <td className="p-3">Austrian</td>
                  <td className="p-3">Austro Control o ENAC</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Brussels Airlines</td>
                  <td className="p-3">SN</td>
                  <td className="p-3">Hub BRU, europei e Africa</td>
                  <td className="p-3">Brussels Airlines</td>
                  <td className="p-3">DGTA (Belgio) o ENAC</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Air Dolomiti</td>
                  <td className="p-3">EN</td>
                  <td className="p-3">Feeder Italia→FRA/MUC</td>
                  <td className="p-3">Air Dolomiti / Lufthansa</td>
                  <td className="p-3">ENAC</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm">
              <strong>Come identificare chi ha operato il volo:</strong> controlla il numero di volo sul tuo biglietto. Se inizia con <strong>EW</strong> (es. EW1234), il vettore operativo è Eurowings. Se inizia con LH, è Lufthansa. Per EW5, è Eurowings Discover. Non lasciarti confondere dalla compagnia che ha venduto il biglietto.
            </p>
          </div>
        </section>

        {/* Codeshare explanation */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Codeshare Lufthansa/Eurowings: a chi va il reclamo?
          </h2>
          <p className="text-gray-600 mb-4">
            Molti italiani acquistano biglietti Lufthansa ma si ritrovano su un volo fisicamente operato da Eurowings. Questo succede frequentemente sulle rotte italiane verso Düsseldorf, Colonia o Stoccarda.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Guarda il numero di volo sul biglietto</h3>
                  <p className="text-gray-600 text-sm mt-1">Es. "LH 1234 (operated by Eurowings)". Il numero sul biglietto è LH ma il volo fisico è EW. Il vettore operativo è Eurowings.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Il reclamo va al vettore operativo</h3>
                  <p className="text-gray-600 text-sm mt-1">Secondo il CE 261, Art. 2(b), il vettore responsabile è quello che opera il volo fisicamente. Quindi: reclamo a Eurowings, non a Lufthansa.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Eurowings può rivalersi su Lufthansa internamente</h3>
                  <p className="text-gray-600 text-sm mt-1">Se Eurowings paga il tuo risarcimento ma la responsabilità è di Lufthansa (es. ritardo causato da un volo LH collegato), è una questione interna al gruppo. Tu devi solo sapere a chi presentare il reclamo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo Eurowings in ritardo o cancellato?</h3>
              <p className="text-purple-100 text-sm">
                Verifica subito il tuo diritto a €250–€600. ClaimWinger identifica il vettore corretto e gestisce l'intero reclamo — paghi solo il <strong>30% del risarcimento ottenuto</strong>.
              </p>
            </div>
            <a
              href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=eurowings"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors flex items-center gap-2"
            >
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Routes from Italy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Rotte Eurowings dall'Italia e importi di risarcimento
          </h2>
          <p className="text-gray-600 mb-4">
            Eurowings opera da diversi aeroporti italiani, principalmente verso hub tedeschi e destinazioni leisure europee.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Rotta</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento ritardo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Roma (FCO) → Düsseldorf (DUS)</td>
                  <td className="p-3">~1590 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Roma (FCO) → Colonia (CGN)</td>
                  <td className="p-3">~1540 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Milano (MXP) → Düsseldorf (DUS)</td>
                  <td className="p-3">~900 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Milano (MXP) → Stoccarda (STR)</td>
                  <td className="p-3">~560 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Venezia (VCE) → Düsseldorf (DUS)</td>
                  <td className="p-3">~1100 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Napoli (NAP) → Düsseldorf (DUS)</td>
                  <td className="p-3">~1820 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Catania (CTA) → Düsseldorf (DUS)</td>
                  <td className="p-3">~2040 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Palermo (PMO) → Düsseldorf (DUS)</td>
                  <td className="p-3">~1980 km</td>
                  <td className="p-3 font-bold text-amber-600">€400</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Refusal grounds */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Quando Eurowings può rifiutare — e quando non può
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs">✗</span>
                Motivi NON validi per rifiutare
              </h3>
              <ul className="space-y-2">
                {[
                  "Guasto tecnico all'aeromobile (salvo difetto nascosto certificato)",
                  "Sciopero del personale Eurowings",
                  "Mancanza di equipaggio o problemi di rotazione",
                  "Problemi IT o prenotazione",
                  "Volo sostituito con uno operato da altra compagnia del gruppo"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs">✓</span>
                Motivi potenzialmente validi
              </h3>
              <ul className="space-y-2">
                {[
                  "Sciopero controllori di volo ATC (ENAV, DFS tedesco)",
                  "Condizioni meteo eccezionali con documentazione ufficiale",
                  "Chiusura spazio aereo per emergenze sicurezza",
                  "Instabilità politica straordinaria sulla rotta",
                  "Restrizioni sanitarie governative (pandemia)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Procedure */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo a Eurowings
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Verifica chi ha operato il volo",
                content: "Controlla il numero di volo sul tuo biglietto. EW... → Eurowings. EW5... → Eurowings Discover. LH... ma 'operated by EW' → Eurowings è il vettore responsabile."
              },
              {
                step: "2",
                title: "Presenta reclamo su eurowings.com",
                content: "Vai su eurowings.com → Servizio → Reclami. Compila il modulo con numero prenotazione, volo, data, ritardo e IBAN. Il sito è disponibile anche in inglese — non è necessario il tedesco."
              },
              {
                step: "3",
                title: "Attendi la risposta (30 giorni)",
                content: "Eurowings ha tempi medi di risposta di 4–8 settimane. Se accettano, il bonifico arriva in 10–20 giorni. Se rifiutano o non rispondono, passa al passo successivo."
              },
              {
                step: "4",
                title: "Escalation: ENAC (volo da Italia) o LBA (volo da Germania)",
                content: "Per voli partiti da aeroporti italiani: reclamo all'ENAC (enac.gov.it). Per voli partiti dalla Germania: al Luftfahrt-Bundesamt (lba.de). Entrambi hanno procedure online gratuite."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.step}
                </div>
                <div className="flex-1 pb-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Response times */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tempi e probabilità di successo con Eurowings
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-purple-700 mb-1">4–8 sett.</div>
              <div className="text-sm text-gray-600">Tempo medio prima risposta</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-amber-600 mb-1">Medio</div>
              <div className="text-sm text-gray-600">Tasso accettazione spontanea</div>
              <div className="text-xs text-gray-400 mt-1">Spesso richiedono documentazione extra</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">LBA / ENAC</div>
              <div className="text-sm text-gray-600">Autorità di escalation</div>
              <div className="text-xs text-gray-400 mt-1">Entrambe efficaci</div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-blue-800 text-sm">
              <strong>Lingua del reclamo:</strong> Eurowings accetta reclami in inglese tramite il sito. Se preferisci, un servizio come ClaimWinger gestisce tutta la comunicazione senza che tu debba preoccuparti della lingua o della burocrazia tedesca.
            </p>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi evitare la burocrazia tedesca?</h3>
              <p className="text-indigo-200 text-sm">
                ClaimWinger gestisce tutto in italiano — reclamo, follow-up con Eurowings, e se necessario escalation LBA/ENAC. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.
              </p>
            </div>
            <a
              href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=eurowings"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors flex items-center gap-2"
            >
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Eurowings Risarcimento</h2>
          <div className="space-y-3">
            {[
              {
                q: "Eurowings è parte di Lufthansa Group?",
                a: "Sì, Eurowings è una sussidiaria del gruppo Lufthansa. Tuttavia, è una compagnia separata con proprio codice IATA (EW). Il reclamo per voli Eurowings va presentato a Eurowings, non a Lufthansa."
              },
              {
                q: "Quanto risarcimento spetta per un volo Eurowings in ritardo?",
                a: "Eurowings opera principalmente rotte europee: fino a 1500 km → €250; 1500–3500 km → €400; oltre 3500 km → €600. Il ritardo deve essere di almeno 3 ore all'arrivo."
              },
              {
                q: "Ho un volo in codeshare: il biglietto è Lufthansa ma vola Eurowings. Chi è responsabile?",
                a: "La responsabilità per il CE 261/2004 spetta al vettore operativo — cioè la compagnia che fisicamente fa volare l'aereo. Se il volo fisico è operato da Eurowings (numero di volo EW...), il reclamo va a Eurowings, anche se hai acquistato il biglietto da Lufthansa."
              },
              {
                q: "Eurowings Discover è la stessa cosa di Eurowings?",
                a: "No. Eurowings Discover è una compagnia separata focalizzata sui voli leisure e intercontinentali, anche se fa parte del gruppo Lufthansa. I reclami per voli EW5... vanno presentati a Eurowings Discover, non a Eurowings."
              },
              {
                q: "Eurowings opera voli da aeroporti italiani?",
                a: "Sì, Eurowings opera voli da diversi aeroporti italiani (FCO, MXP, VCE, BLQ, NAP, PMO, CTA) principalmente verso hub tedeschi. Per tutti i voli da aeroporti italiani, il CE 261/2004 si applica pienamente."
              },
              {
                q: "Se Eurowings non risponde, a quale autorità mi rivolgo?",
                a: "Se il volo è partito da un aeroporto italiano, puoi rivolgerti all'ENAC (enac.gov.it). Se il volo è partito dalla Germania, l'autorità competente è il Luftfahrt-Bundesamt (LBA). Entrambe le opzioni sono valide."
              }
            ].map((item, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Articoli correlati</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                href: "/it/blog/lufthansa-risarcimento-voli",
                title: "Lufthansa Risarcimento Voli: Guida Completa",
                excerpt: "La guida per Lufthansa — hub principale del gruppo con LH, EW, OS, LX."
              },
              {
                href: "/it/blog/da-quante-ore-ritardo-diritto-risarcimento",
                title: "Da Quante Ore di Ritardo Hai Diritto al Risarcimento?",
                excerpt: "La regola delle 3 ore spiegata con esempi pratici."
              },
              {
                href: "/it/blog/circostanze-straordinarie-spiegate",
                title: "Circostanze Straordinarie: Quando NON Spetta il Risarcimento",
                excerpt: "Quando Eurowings o altra compagnia può rifiutare legalmente."
              },
              {
                href: "/it/blog/overbooking-negato-imbarco-diritti",
                title: "Overbooking e Negato Imbarco: Tutti i Diritti",
                excerpt: "Negato imbarco su un volo Eurowings? Scopri come ottenere fino a €600."
              }
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-purple-300 hover:shadow-md transition-all"
              >
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
