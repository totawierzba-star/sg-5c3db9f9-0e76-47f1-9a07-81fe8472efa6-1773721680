import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info } from "lucide-react";

export default function SwissRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Il CE 261/2004 si applica ai voli SWISS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, ma con una distinzione importante. La Svizzera non è nell'UE, ma ha adottato il CE 261/2004 nell'ambito dell'Accordo bilaterale CH-UE sul trasporto aereo (2002). Quindi il CE 261 si applica: a tutti i voli SWISS da aeroporti UE, e ai voli SWISS da Zurigo (ZRH), Ginevra (GVA) e Basilea (BSL) verso destinazioni UE. I passeggeri italiani sono pienamente coperti."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo SWISS in ritardo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gli importi sono gli stessi del CE 261/2004: fino a 1500 km → €250; 1500–3500 km → €400; oltre 3500 km → €600. La rotta Roma–Zurigo (~820 km) → €250; Milano–New York via ZRH (~6500 km) → €600. Il ritardo deve essere di almeno 3 ore all'arrivo nella destinazione finale."
        }
      },
      {
        "@type": "Question",
        "name": "SWISS è la stessa cosa di Lufthansa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. SWISS International Air Lines (codice LX) è una compagnia indipendente con il proprio codice IATA, ma fa parte del gruppo Lufthansa dal 2005. Il reclamo per voli LX va presentato a SWISS — non a Lufthansa. L'autorità di vigilanza per voli da aeroporti svizzeri è il BAZL (Ufficio federale dell'aviazione civile svizzero), mentre per voli da aeroporti italiani è l'ENAC."
        }
      },
      {
        "@type": "Question",
        "name": "Ho perso la coincidenza a Zurigo per un volo SWISS in ritardo. Ho diritto al risarcimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, se hai un biglietto unico che include la coincidenza a Zurigo e l'arrivo finale è in ritardo di 3+ ore. Il risarcimento si calcola sulla distanza totale fino alla destinazione finale. Ad esempio, Roma→Zurigo→Toronto: distanza >3500 km → €600, anche se solo il primo tratto (FCO→ZRH) era in ritardo."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo ho per presentare reclamo a SWISS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per voli da aeroporti italiani, si applica la prescrizione italiana di 2 anni. Per voli da aeroporti svizzeri verso Italia, si applica la normativa svizzera — anche in questo caso il termine è generalmente di 2 anni. SWISS risponde in media entro 4–6 settimane."
        }
      },
      {
        "@type": "Question",
        "name": "SWISS opera voli da altri aeroporti italiani oltre a Milano e Roma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SWISS opera principalmente da FCO (Roma), MXP (Milano Malpensa), VCE (Venezia) e talvolta da altri aeroporti italiani in modo stagionale. Per tutti i voli da aeroporti italiani, il CE 261 si applica pienamente e l'autorità di escalation è l'ENAC."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SWISS Risarcimento: Guida Completa 2026 — CE 261 e Voli da Italia e Svizzera",
    "description": "Volo SWISS in ritardo o cancellato? Guida completa: CE 261/2004 applicabile anche da ZRH, importi, coincidenza persa a Zurigo, procedura BAZL/ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="SWISS Risarcimento: Guida Completa 2026 — CE 261 e Voli da Italia e Svizzera"
        description="Volo SWISS in ritardo o cancellato? Guida completa: CE 261/2004 applicabile anche da ZRH, importi, coincidenza persa a Zurigo, procedura BAZL/ENAC."
        canonicalUrl="https://claimwinger.com/it/blog/swiss-risarcimento"
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
              SWISS Risarcimento
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">Compagnie Aeree</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />10 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SWISS Risarcimento: Guida Completa 2026 — Fino a €600
          </h1>
          <p className="text-xl text-gray-600">
            Volo SWISS in ritardo o cancellato? Anche se la Svizzera non è nell'UE, il CE 261/2004 si applica pienamente ai voli SWISS. Scopri come ottenere fino a <strong>€600 di risarcimento</strong>.
          </p>
        </header>

        {/* Switzerland-EU key point */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-red-900 mb-2">La Svizzera non è nell'UE — ma il CE 261 si applica ugualmente</h2>
              <p className="text-red-800 text-sm leading-relaxed">
                La Svizzera ha firmato l'<strong>Accordo bilaterale CH-UE sul trasporto aereo</strong> (2002), che incorpora il CE 261/2004 nell'ordinamento svizzero. Questo significa che il CE 261 si applica a tutti i voli SWISS (LX) sia da aeroporti italiani che da aeroporti svizzeri (ZRH, GVA, BSL) verso l'UE.
              </p>
            </div>
          </div>
        </div>

        {/* CE 261 applicability matrix */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-red-500" />
            Quando si applica il CE 261 ai voli SWISS
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Scenario</th>
                  <th className="text-left p-3 font-semibold text-gray-700">CE 261 applicabile?</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-green-50 hover:bg-green-100">
                  <td className="p-3 font-medium">Volo da FCO/MXP/VCE → ZRH (SWISS)</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded">SÌ</span></td>
                  <td className="p-3 text-gray-600">Partenza da UE → CE 261 pieno</td>
                </tr>
                <tr className="bg-green-50 hover:bg-green-100">
                  <td className="p-3 font-medium">Volo da ZRH → FCO/MXP/VCE (SWISS)</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded">SÌ</span></td>
                  <td className="p-3 text-gray-600">Accordo CH-UE → CE 261 applicabile da ZRH</td>
                </tr>
                <tr className="bg-green-50 hover:bg-green-100">
                  <td className="p-3 font-medium">Volo da ZRH → New York (SWISS)</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded">SÌ</span></td>
                  <td className="p-3 text-gray-600">Vettore UE/CH da aeroporto CH → coperto</td>
                </tr>
                <tr className="bg-red-50 hover:bg-red-100">
                  <td className="p-3 font-medium">Volo da New York → ZRH (SWISS)</td>
                  <td className="p-3"><span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded">NO</span></td>
                  <td className="p-3 text-gray-600">Partenza da paese non-UE/CH su vettore UE → non coperto</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">FCO → ZRH → Toronto (SWISS, biglietto unico)</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded">SÌ — €600</span></td>
                  <td className="p-3 text-gray-600">Destinazione finale oltre 3500 km da Roma</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Zurich hub missed connection */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Coincidenza persa a Zurigo: il caso più frequente per gli italiani
          </h2>
          <p className="text-gray-600 mb-4">
            Zurigo (ZRH) è un importante hub intercontinentale. Molti passeggeri italiani usano SWISS con scalo a Zurigo per raggiungere Nord America, Asia o Africa. Se il volo Roma/Milano→Zurigo è in ritardo e fai perdere la coincidenza intercontinentale, il tuo risarcimento può essere molto più alto del previsto.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Esempio: FCO → ZRH → Tokyo (NRT)</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <p className="text-gray-700 text-sm">Biglietto unico SWISS: FCO→ZRH→NRT. Il volo FCO→ZRH ha 2 ore di ritardo.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <p className="text-gray-700 text-sm">Perdi la coincidenza ZRH→NRT. Il prossimo volo per Tokyo è l'indomani mattina.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                <p className="text-gray-700 text-sm">Arrivi a Tokyo con oltre 3 ore di ritardo rispetto all'orario originale → <strong>€600 di risarcimento</strong> (distanza FCO–NRT ~9360 km).</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-amber-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">+</span>
                <p className="text-gray-700 text-sm">SWISS deve fornirti: alloggio a Zurigo, pasto, trasferimento aeroporto-hotel e il volo alternativo per Tokyo il giorno successivo, tutto incluso.</p>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm">
              <strong>Attenzione ai doppi biglietti:</strong> se hai acquistato FCO→ZRH e ZRH→NRT come due biglietti separati (anche da SWISS), il CE 261 si applica solo al primo tratto. La coincidenza persa non rientra automaticamente nella responsabilità SWISS per il secondo volo.
            </p>
          </div>
        </section>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo SWISS in ritardo o cancellato?</h3>
              <p className="text-red-100 text-sm">
                Verifica subito il tuo diritto a €250–€600. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.
              </p>
            </div>
            <a
              href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=swiss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors flex items-center gap-2"
            >
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Routes and amounts */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Rotte SWISS dall'Italia e importi di risarcimento
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Rotta</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Roma (FCO) → Zurigo (ZRH)</td>
                  <td className="p-3">~820 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Milano (MXP) → Zurigo (ZRH)</td>
                  <td className="p-3">~260 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Venezia (VCE) → Zurigo (ZRH)</td>
                  <td className="p-3">~500 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Napoli (NAP) → Zurigo (ZRH)</td>
                  <td className="p-3">~1100 km</td>
                  <td className="p-3 font-bold text-green-600">€250</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-amber-50">
                  <td className="p-3 font-medium">FCO → ZRH → New York (JFK) — biglietto unico</td>
                  <td className="p-3">~6680 km (FCO–JFK)</td>
                  <td className="p-3 font-bold text-orange-600">€600</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-amber-50">
                  <td className="p-3 font-medium">FCO → ZRH → Tokyo (NRT) — biglietto unico</td>
                  <td className="p-3">~9360 km (FCO–NRT)</td>
                  <td className="p-3 font-bold text-orange-600">€600</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-amber-50">
                  <td className="p-3 font-medium">FCO → ZRH → São Paulo (GRU) — biglietto unico</td>
                  <td className="p-3">~9270 km (FCO–GRU)</td>
                  <td className="p-3 font-bold text-orange-600">€600</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BAZL vs ENAC */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            BAZL o ENAC: quale autorità per il tuo reclamo?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-3">ENAC (Italia)</h3>
              <p className="text-blue-800 text-sm mb-3">
                Competente per voli da aeroporti italiani (FCO, MXP, VCE, ecc.) verso Zurigo o altre destinazioni. È l'autorità di vigilanza più comoda per i passeggeri italiani.
              </p>
              <div className="text-xs text-blue-600 font-semibold">→ enac.gov.it</div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-900 mb-3">BAZL (Svizzera)</h3>
              <p className="text-red-800 text-sm mb-3">
                Ufficio federale dell'aviazione civile svizzero (Bundesamt für Zivilluftfahrt). Competente per voli da aeroporti svizzeri (ZRH, GVA, BSL). Accetta reclami anche in inglese.
              </p>
              <div className="text-xs text-red-600 font-semibold">→ bazl.admin.ch</div>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-green-800 text-sm">
              <strong>Consiglio pratico:</strong> se il tuo volo è partito dall'Italia, usa l'ENAC — è l'autorità italiana e gestisce il reclamo nella tua lingua. Se il volo è partito da Zurigo, usa il BAZL o affidati a un servizio come ClaimWinger che gestisce i rapporti internazionali.
            </p>
          </div>
        </section>

        {/* Procedure */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo a SWISS
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Verifica che sia stato un volo SWISS (LX)",
                content: "Il numero di volo deve iniziare con LX (es. LX1234). Se inizia con un altro codice ma era operato da SWISS ('operated by SWISS'), il reclamo va comunque a SWISS."
              },
              {
                step: "2",
                title: "Presenta reclamo su swiss.com",
                content: "Vai su swiss.com → Servizio clienti → Reclami. Il modulo è disponibile anche in italiano. Indica: numero prenotazione, volo, data, tipo di problema (ritardo/cancellazione), importo richiesto e IBAN."
              },
              {
                step: "3",
                title: "Attendi la risposta (4–6 settimane)",
                content: "SWISS risponde generalmente entro 4–6 settimane. Il tasso di accettazione spontanea è medio-alto rispetto ad altre compagnie. Se accettano, il bonifico arriva in 10–15 giorni."
              },
              {
                step: "4",
                title: "Escalation: ENAC o BAZL",
                content: "Se rifiutano o non rispondono: usa l'ENAC per voli da Italia, il BAZL per voli da Svizzera. Entrambi hanno procedure online gratuite."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
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

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo SWISS per te?</h3>
              <p className="text-gray-300 text-sm">
                ClaimWinger conosce le procedure SWISS e BAZL. Gestiamo tutto in italiano. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.
              </p>
            </div>
            <a
              href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=swiss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-gray-800 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — SWISS Risarcimento</h2>
          <div className="space-y-3">
            {[
              {
                q: "Il CE 261/2004 si applica ai voli SWISS?",
                a: "Sì. La Svizzera ha adottato il CE 261/2004 nell'ambito dell'Accordo bilaterale CH-UE sul trasporto aereo (2002). Il CE 261 si applica a tutti i voli SWISS da aeroporti UE e da aeroporti svizzeri (ZRH, GVA, BSL) verso l'UE."
              },
              {
                q: "Quanto risarcimento spetta per un volo SWISS in ritardo?",
                a: "Gli importi sono: fino a 1500 km → €250; 1500–3500 km → €400; oltre 3500 km → €600. La rotta Roma–Zurigo (~820 km) → €250. Coincidenza FCO→ZRH→New York su biglietto unico → €600. Il ritardo deve essere di almeno 3 ore all'arrivo."
              },
              {
                q: "SWISS è la stessa cosa di Lufthansa?",
                a: "No. SWISS International Air Lines (codice LX) è una compagnia indipendente con il proprio codice IATA, ma fa parte del gruppo Lufthansa dal 2005. Il reclamo va presentato a SWISS — non a Lufthansa."
              },
              {
                q: "Ho perso la coincidenza a Zurigo per un volo SWISS in ritardo. Ho diritto al risarcimento?",
                a: "Sì, se hai un biglietto unico. Il risarcimento si calcola sulla distanza totale fino alla destinazione finale. Ad esempio, Roma→Zurigo→Toronto: distanza >3500 km → €600, anche se solo il primo tratto era in ritardo."
              },
              {
                q: "Quanto tempo ho per presentare reclamo a SWISS?",
                a: "Per voli da aeroporti italiani, si applica la prescrizione italiana di 2 anni. Per voli da aeroporti svizzeri verso Italia, il termine è generalmente di 2 anni. SWISS risponde in media entro 4–6 settimane."
              },
              {
                q: "SWISS opera voli da altri aeroporti italiani oltre a Milano e Roma?",
                a: "SWISS opera principalmente da FCO, MXP e VCE. Per tutti i voli da aeroporti italiani, il CE 261 si applica pienamente e l'autorità di escalation è l'ENAC."
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
                excerpt: "Guida completa per il gruppo Lufthansa — hub FRA/MUC e subsidiarie."
              },
              {
                href: "/it/blog/eurowings-risarcimento",
                title: "Eurowings Risarcimento: Guida 2026",
                excerpt: "Guida per voli Eurowings (EW) — l'altra sussidiaria low-cost del gruppo LH."
              },
              {
                href: "/it/blog/klm-risarcimento",
                title: "KLM Risarcimento: Coincidenza persa a Schiphol",
                excerpt: "Come funziona il risarcimento con KLM per scali ad Amsterdam."
              },
              {
                href: "/it/blog/da-quante-ore-ritardo-diritto-risarcimento",
                title: "Da Quante Ore di Ritardo Hai Diritto al Risarcimento?",
                excerpt: "La regola delle 3 ore e come si calcola il ritardo."
              }
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-red-300 hover:shadow-md transition-all"
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
