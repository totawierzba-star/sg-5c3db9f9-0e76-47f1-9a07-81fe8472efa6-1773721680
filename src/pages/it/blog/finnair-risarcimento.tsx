import { LayoutIt } from "../../../components/LayoutIt";
import { SEO } from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function FinnairRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Finnair è soggetta al CE 261/2004?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì. Finnair (codice IATA AY) ha sede legale in Finlandia, paese membro dell'UE. Il CE 261/2004 si applica a tutti i voli Finnair in partenza da aeroporti UE (inclusi gli aeroporti italiani) e a tutti i voli Finnair in arrivo nell'UE."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo Finnair in ritardo dall'Italia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "€400 per i voli diretti Italia→Helsinki HEL (tutte le rotte da Roma e Milano superano 1.500 km). €600 se hai perso una coincidenza intercontinentale a Helsinki verso Tokyo, Seoul, Osaka, Pechino, Hong Kong o altra destinazione oltre 3.500 km, con ritardo finale superiore a 3 ore."
        }
      },
      {
        "@type": "Question",
        "name": "Ho perso il volo per Tokyo da Helsinki per colpa di Finnair: ho diritto al risarcimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì. Se il tuo biglietto era Italia→HEL→Tokyo (NRT/HND) su un unico biglietto emesso da Finnair o partner Oneworld, e sei arrivato a Tokyo con oltre 3 ore di ritardo rispetto all'orario previsto, il risarcimento è €600. Helsinki è l'hub asiatico di Finnair — questo scenario è frequente."
        }
      },
      {
        "@type": "Question",
        "name": "Il freddo e la neve a Helsinki escludono il risarcimento Finnair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, non automaticamente. Il freddo estremo e la neve invernale a Helsinki sono condizioni stagionali attese — Finnair deve prepararsi operativamente. Solo eventi meteorologici eccezionali e imprevedibili fuori norma storica possono costituire circostanze straordinarie. Il de-icing di routine, la neve ordinaria o il ghiaccio standard NON esonerano Finnair."
        }
      },
      {
        "@type": "Question",
        "name": "Ho prenotato con Finnair ma il volo era operato da un partner Oneworld: a chi faccio il reclamo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il reclamo CE 261 va sempre al vettore operativo — quello che ha fisicamente operato il volo. Controlla il boarding pass: se riporta 'operato da British Airways', il reclamo va a BA. Se il volo era effettivamente operato da Finnair con codice AY, il reclamo va a Finnair."
        }
      },
      {
        "@type": "Question",
        "name": "Qual è l'autorità a cui rivolgersi se Finnair rifiuta il risarcimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per voli in partenza dall'Italia: ENAC (enac.gov.it). Per voli in partenza dalla Finlandia: Traficom — Liikenne- ja viestintävirasto (traficom.fi). Traficom è l'autorità finlandese competente per l'applicazione del CE 261."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Finnair: Risarcimento Voli Ritardo e Cancellazione 2026 — fino a €600",
    "description": "Volo Finnair in ritardo o cancellato? CE 261/2004, €400–€600, hub Helsinki, coincidenze Asia (Tokyo, Seoul), Oneworld, Traficom vs ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Finnair: Risarcimento Voli 2026 — fino a €600 per coincidenze Asia"
        description="Volo Finnair in ritardo o cancellato? CE 261/2004, €400–€600, hub Helsinki per Asia (Tokyo, Seoul, Pechino), Oneworld, Traficom e ENAC."
        canonical="https://claimwinger.com/it/blog/finnair-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">Finnair</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Compagnie Aeree</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />8 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Finnair: Risarcimento per Ritardo e Cancellazione 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo Finnair cancellato o in ritardo? Le rotte Italia–Helsinki danno diritto a <strong>€400</strong>. Se hai perso la coincidenza per Tokyo, Seoul o Pechino, il risarcimento sale a <strong>€600</strong>.
          </p>
        </header>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Plane className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-blue-900 mb-2">Finnair (AY) — profilo CE 261</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-blue-800">
                <div><strong>Codice IATA:</strong> AY</div>
                <div><strong>Hub principale:</strong> Helsinki-Vantaa (HEL)</div>
                <div><strong>Sede legale:</strong> Helsinki, Finlandia — UE</div>
                <div><strong>Alleanza:</strong> Oneworld (BA, Iberia, JAL, AA, Qatar Airways)</div>
                <div><strong>Punto di forza:</strong> Gateway Europa→Asia (rotta polare più breve)</div>
                <div><strong>CE 261 applicabile:</strong> Sì — vettore UE + voli da aeroporti UE</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-500" />
            Finnair come gateway Asia: l'hub di Helsinki
          </h2>
          <p className="text-gray-600 mb-4">
            Finnair si posiziona come la rotta più veloce tra Europa e Asia orientale grazie alla posizione geografica di Helsinki. La tratta polare tra Europa e Giappone/Corea via HEL è circa 2 ore più breve rispetto ad altri hub europei. Questo rende Finnair molto popolare tra i passeggeri italiani che viaggiano verso l'Asia.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Rotte Asia via Helsinki HEL</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Giappone</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tokyo Narita (NRT) — ~7.580 km da HEL</li>
                  <li>• Tokyo Haneda (HND) — ~7.580 km da HEL</li>
                  <li>• Osaka (KIX) — ~8.860 km da HEL</li>
                  <li>• Nagoya (NGO) — ~8.220 km da HEL</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Asia orientale e Sud-Est</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Seoul (ICN) — ~7.250 km da HEL</li>
                  <li>• Pechino (PEK) — ~6.610 km da HEL</li>
                  <li>• Shanghai (PVG) — ~7.440 km da HEL</li>
                  <li>• Hong Kong (HKG) — ~8.280 km da HEL</li>
                  <li>• Singapore (SIN) — ~8.500 km da HEL</li>
                  <li>• Bangkok (BKK) — ~8.030 km da HEL</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-100">
              <p className="text-red-700 text-xs"><strong>Implicazione CE 261:</strong> tutte queste destinazioni superano 3.500 km dall'Italia. Se il ritardo del volo Italia→HEL ha causato la perdita della coincidenza Asia, il risarcimento è <strong>€600</strong> — non €400.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento: rotte Finnair dall'Italia
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Rotta</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento tratta</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Con coincidenza Asia persa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Roma FCO → Helsinki HEL</td><td className="p-3">~2.490 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3 font-bold text-red-500">€600</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Milano MXP → Helsinki HEL</td><td className="p-3">~2.140 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3 font-bold text-red-500">€600</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-3">Come si calcola il risarcimento con coincidenza?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">1</div>
                <p className="text-sm text-gray-600"><strong>Unico biglietto:</strong> il biglietto Roma→HEL→Tokyo deve essere un unico documento di viaggio (o itinerario emesso dallo stesso vettore/alleanza). Non funziona con prenotazioni separate.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">2</div>
                <p className="text-sm text-gray-600"><strong>Ritardo finale &gt;3 ore:</strong> il ritardo si calcola rispetto all'orario originale di arrivo a Tokyo (o altra destinazione finale), non sull'orario di arrivo a Helsinki.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">3</div>
                <p className="text-sm text-gray-600"><strong>Distanza dalla prima origine:</strong> si usa la distanza dalla tua città di partenza (Roma o Milano) alla destinazione finale (Tokyo), non da HEL. Tutte superano 3.500 km → €600.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Codeshare Oneworld: a chi presentare il reclamo?
          </h2>
          <p className="text-gray-600 mb-4">
            Finnair fa parte dell'alleanza Oneworld e condivide voli con British Airways, Iberia, Japan Airlines (JAL) e altri vettori. Questo può creare confusione su chi è il responsabile del ritardo.
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
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">AY + numero (operato da Finnair)</td><td className="p-3">Finnair</td><td className="p-3">Finnair direttamente</td><td className="p-3">ENAC (da IT) / Traficom (da FI)</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">AY + numero (operato da BA)</td><td className="p-3">British Airways</td><td className="p-3">British Airways, NON Finnair</td><td className="p-3">ENAC (da IT) / CAA (da UK)</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">AY + numero (operato da JAL)</td><td className="p-3">Japan Airlines</td><td className="p-3">JAL, NON Finnair</td><td className="p-3">ENAC (da IT) / autorità giapponese</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">BA/IB + numero (operato da Finnair)</td><td className="p-3">Finnair</td><td className="p-3">Finnair (vettore operante)</td><td className="p-3">ENAC (da IT) / Traficom (da FI)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
            <p className="text-blue-800 text-xs"><strong>Regola base:</strong> il reclamo CE 261 va sempre al <em>vettore che ha fisicamente operato il volo</em>, non a chi ha venduto il biglietto. Verifica sul boarding pass la voce "operated by".</p>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo Finnair in ritardo? Hai diritto a €400–€600</h3>
              <p className="text-blue-100 text-sm">Italia→Helsinki→Asia: se sei arrivato in ritardo di più di 3 ore, puoi avere diritto a €600. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=finnair-ay" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            Neve e freddo a Helsinki: quando non è straordinario
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-800 mb-2">Circostanza straordinaria (NO risarcimento)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bufera di neve eccezionale fuori norma storica con NOTAM</li>
                <li>• Chiusura d'emergenza dell'aeroporto HEL</li>
                <li>• Sciopero ATC esterno (non del personale Finnair)</li>
                <li>• Evento imprevedibile di forza maggiore</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-2">NON straordinario (diritto al risarcimento)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• De-icing (sbrinamento) di routine a HEL</li>
                <li>• Neve invernale ordinaria (tipica di Helsinki)</li>
                <li>• Freddo intenso prevedibile (&lt;-20°C in inverno)</li>
                <li>• Guasto tecnico all'aeromobile</li>
                <li>• Ritardo per rotazione da volo precedente</li>
                <li>• Sciopero del personale Finnair</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo a Finnair
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Raccoglie la documentazione", content: "Conserva: boarding pass (entrambi se c'era coincidenza), conferma prenotazione con numero volo AY, ricevute spese extra (pasti, hotel, trasporti alternativi acquistati per il disservizio). Per perdita coincidenza Asia, conserva anche il boarding pass del volo che non hai potuto prendere." },
              { step: "2", title: "Verifica il ritardo finale (3 ore sulla destinazione)", content: "Per i voli con coincidenza, il ritardo che conta è quello sulla destinazione finale (es. Tokyo), non su Helsinki. Calcola la differenza tra l'orario originale di arrivo a Tokyo e l'orario effettivo di arrivo." },
              { step: "3", title: "Reclamo tramite il portale Finnair", content: "Accedi a finnair.com → 'Customer Service' → 'Give us feedback'. Compila il modulo indicando: numero volo AY, data, aeroporti origine/destinazione, ritardo finale in ore, importo CE 261 richiesto (€400 diretto / €600 con coincidenza intercontinentale) e IBAN." },
              { step: "4", title: "Escalation Traficom o ENAC se necessario", content: "Se Finnair non risponde entro 30 giorni o risponde negativamente senza giustificazione valida, puoi: presentare reclamo all'ENAC se la partenza era da Italia (enac.gov.it) oppure a Traficom se la partenza era da Helsinki (traficom.fi)." }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">{item.step}</div>
                <div className="flex-1 pb-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo a Finnair per te?</h3>
              <p className="text-cyan-100 text-sm">Coincidenza Asia persa? Ritardo sulla tratta italiana? ClaimWinger gestisce tutto — commissione: <strong>30% solo se otteniamo il risarcimento</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=finnair-ay" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-cyan-700 font-bold px-6 py-3 rounded-xl hover:bg-cyan-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Finnair</h2>
          <div className="space-y-3">
            {[
              { q: "Finnair è soggetta al CE 261/2004?", a: "Sì. Finnair ha sede in Finlandia (UE). Il CE 261 si applica a tutti i voli AY in partenza da aeroporti UE e a tutti i voli Finnair in arrivo nell'UE." },
              { q: "Quanto risarcimento spetta per un volo Finnair in ritardo dall'Italia?", a: "€400 per rotte dirette Italia→HEL (tutte oltre 1500 km). €600 se hai perso una coincidenza intercontinentale (Tokyo, Seoul, Pechino, Hong Kong, Bangkok, Singapore) su unico biglietto con ritardo finale >3 ore." },
              { q: "Ho perso il volo per Tokyo da Helsinki per colpa di Finnair: ho diritto al risarcimento?", a: "Sì, €600. Se il tuo biglietto era Italia→HEL→Tokyo su un unico itinerario e sei arrivato a Tokyo con oltre 3 ore di ritardo, il risarcimento è €600." },
              { q: "Il freddo e la neve a Helsinki escludono il risarcimento Finnair?", a: "No, non automaticamente. Freddo e neve invernale a Helsinki sono condizioni stagionali attese. Solo eventi eccezionali e imprevedibili fuori norma storica possono escludere il risarcimento. De-icing di routine, neve ordinaria e freddo standard NON esonerano Finnair." },
              { q: "Ho prenotato con Finnair ma il volo era operato da un partner Oneworld: a chi reclamo?", a: "Il reclamo va al vettore che ha fisicamente operato il volo. Controlla sul boarding pass la voce 'operated by'. Se è BA → reclamo a BA. Se è Finnair → reclamo a Finnair." },
              { q: "Qual è l'autorità a cui rivolgersi se Finnair rifiuta il risarcimento?", a: "Per voli partiti dall'Italia: ENAC (enac.gov.it). Per voli partiti dalla Finlandia: Traficom (traficom.fi) — l'autorità finlandese per il CE 261." }
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
              { href: "/it/blog/sas-scandinavian-airlines-risarcimento", title: "SAS: Risarcimento Voli", excerpt: "Guida CE 261 per SAS — hub CPH/ARN, neve straordinaria vs ordinaria, €400–€600." },
              { href: "/it/blog/swiss-risarcimento", title: "SWISS: Risarcimento Voli", excerpt: "LX — accordo CH-UE, hub Zurigo intercontinentale, BAZL vs ENAC." },
              { href: "/it/blog/lufthansa-risarcimento", title: "Lufthansa: Risarcimento Voli", excerpt: "Hub FRA/MUC, coincidenze intercontinentali, LH Group." },
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
