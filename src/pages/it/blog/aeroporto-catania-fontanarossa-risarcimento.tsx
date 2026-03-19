import LayoutIt from "../../../components/LayoutIt";
import SEO from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function AeroportoCataniaRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual è il codice IATA dell'aeroporto di Catania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il codice IATA dell'aeroporto di Catania Fontanarossa è CTA. È il principale aeroporto della Sicilia orientale e uno dei più trafficati d'Italia, con oltre 10 milioni di passeggeri l'anno. Si trova a circa 7 km dal centro di Catania."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo in ritardo da Catania CTA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dipende dalla distanza della rotta: fino a 1500 km → €250 (es. Milano, Roma, Londra, Parigi, Barcellona, Düsseldorf, Berlino); 1500–3500 km → €400 (es. Londra Stansted in certi calcoli, Dublino, Casablanca). Il ritardo deve essere di almeno 3 ore all'arrivo."
        }
      },
      {
        "@type": "Question",
        "name": "Ryanair è il principale operatore a Catania CTA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, Ryanair è il principale operatore a Catania con decine di rotte europee e nazionali. In caso di ritardo o cancellazione su voli Ryanair da CTA, hai pieno diritto al risarcimento CE 261/2004. Reclamo su ryanair.com; escalation ENAC se rifiutano."
        }
      },
      {
        "@type": "Question",
        "name": "L'eruzione dell'Etna può causare cancellazioni di voli? È circostanza straordinaria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dipende dall'intensità dell'eruzione. Se l'eruzione produce nubi di cenere vulcanica che penetrano nello spazio aereo e rendono i voli pericolosi, l'ENAC può emettere un NOTAM (Notice to Air Missions) che chiude lo spazio aereo. In quel caso la compagnia è esonerata dal risarcimento monetario. Se però l'Etna è attivo ma le condizioni di volo sono sicure e il ritardo è causato da altri fattori, il risarcimento è dovuto."
        }
      },
      {
        "@type": "Question",
        "name": "L'aeroporto di Catania ha avuto chiusure per l'Etna in passato?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, l'aeroporto di Catania ha subito chiusure temporanee in occasione di eruzioni significative dell'Etna (es. 2002, 2015, 2021–2022). Quando viene emesso un NOTAM ufficiale di chiusura, i ritardi conseguenti sono considerati circostanza straordinaria. La compagnia deve comunque fornire assistenza (pasti, hotel)."
        }
      },
      {
        "@type": "Question",
        "name": "A chi mi rivolgo se la compagnia rifiuta il risarcimento per un volo da Catania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'autorità competente per i voli da aeroporti italiani è l'ENAC (Ente Nazionale per l'Aviazione Civile). Puoi presentare reclamo su enac.gov.it allegando la risposta negativa della compagnia o la mancata risposta entro 30 giorni."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aeroporto Catania Fontanarossa (CTA): Risarcimento Voli 2026",
    "description": "Volo in ritardo o cancellato a Catania CTA? Guida completa: CE 261/2004, eruzione Etna e circostanze straordinarie, Ryanair/easyJet/ITA, procedura ENAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Catania Fontanarossa (CTA): Risarcimento Voli 2026"
        description="Volo in ritardo o cancellato a Catania CTA? Guida completa: CE 261/2004, eruzione Etna e circostanze straordinarie, Ryanair/easyJet/ITA, procedura ENAC."
        canonical="https://claimwinger.com/it/blog/aeroporto-catania-fontanarossa-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">Aeroporto Catania CTA</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">Aeroporti</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />9 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto Catania Fontanarossa (CTA): Risarcimento Voli 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo in ritardo o cancellato a Catania? Il CE 261/2004 ti garantisce fino a <strong>€400 di risarcimento</strong> per la maggior parte delle rotte europee da CTA. Questa guida spiega anche il caso speciale dell'Etna.
          </p>
        </header>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-orange-900 mb-2">Aeroporto Catania Fontanarossa — dati chiave</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-orange-800">
                <div><strong>Codice IATA:</strong> CTA</div>
                <div><strong>Codice ICAO:</strong> LICC</div>
                <div><strong>Posizione:</strong> ~7 km dal centro di Catania</div>
                <div><strong>Gestore:</strong> SAC S.p.A. (Società Aeroporto Catania)</div>
                <div><strong>Passeggeri annui:</strong> ~10 milioni (2023)</div>
                <div><strong>Particolarità:</strong> Vicino all'Etna — chiusure occasionali per cenere vulcanica</div>
              </div>
            </div>
          </div>
        </div>

        {/* Etna section — unique content */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-500" />
            L'Etna e i voli: quando la cenere vulcanica è circostanza straordinaria
          </h2>
          <p className="text-gray-600 mb-4">
            L'aeroporto di Catania è l'unico aeroporto italiano situato a pochi chilometri da un vulcano attivo. Le eruzioni dell'Etna possono generare nubi di cenere che rendono i voli pericolosi. Ecco come distinguere i casi in cui spetta il risarcimento da quelli in cui no.
          </p>
          <div className="space-y-3">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-900 text-sm">Etna attivo ma SENZA NOTAM di chiusura → spetta il risarcimento</h3>
                <p className="text-green-800 text-sm mt-1">Se l'Etna è in attività normale o moderata e non è stato emesso un NOTAM ufficiale di chiusura dello spazio aereo di CTA, i ritardi causati dalla compagnia (guasto tecnico, rotazione, equipaggio) sono pienamente risarcibili.</p>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900 text-sm">NOTAM ufficiale di chiusura per cenere → circostanza straordinaria</h3>
                <p className="text-red-800 text-sm mt-1">Se l'ENAC emette un NOTAM che chiude lo spazio aereo di CTA per cenere vulcanica, la compagnia è esonerata dal risarcimento monetario. Deve comunque fornire assistenza (pasti, hotel, riprenotazione). La compagnia deve dimostrare l'esistenza del NOTAM.</p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 text-sm">Come verificare se c'era un NOTAM</h3>
                <p className="text-amber-800 text-sm mt-1">Puoi verificare i NOTAM storici su <strong>notams.faa.gov</strong> o sul sito dell'ENAC. Se la compagnia invoca la cenere vulcanica senza fornire il numero del NOTAM ufficiale, il rifiuto è probabilmente illegittimo.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Compagnie aeree a Catania CTA
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">FR</span>
                Ryanair (operatore principale)
              </h3>
              <p className="text-gray-600 text-sm mb-2">Ryanair è il principale operatore a CTA con rotte verso tutta Europa. CE 261 applicabile pienamente. Reclamo su ryanair.com; escalation ENAC.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">AZ</span>
                ITA Airways
              </h3>
              <p className="text-gray-600 text-sm mb-2">ITA opera voli da CTA verso Roma FCO e Milano MXP. Per ritardi: €250 (distanza <1500 km). Reclamo su ita-airways.com; escalation ENAC.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">U2</span>
                easyJet
              </h3>
              <p className="text-gray-600 text-sm mb-2">easyJet opera rotte da CTA verso destinazioni europee. Importi €250–€400 secondo distanza. Reclamo online su easyjet.com.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">LH / EW</span>
                Lufthansa / Eurowings
              </h3>
              <p className="text-gray-600 text-sm mb-2">Lufthansa e Eurowings operano CTA→FRA/MUC/DUS. Per i voli da CTA: €400 (distanza ~1800–2100 km). Reclamo alla compagnia operatrice.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento per le rotte principali da Catania CTA
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Destinazione</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza da CTA</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma (FCO)</td><td className="p-3">~825 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">ITA Airways, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Milano (MXP/LIN)</td><td className="p-3">~1100 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">ITA, Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Londra (STN/LGW)</td><td className="p-3">~2050 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Parigi (CDG/ORY/BVA)</td><td className="p-3">~1780 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Air France, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Barcellona (BCN)</td><td className="p-3">~1520 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Vueling, Ryanair</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Amsterdam (AMS)</td><td className="p-3">~2100 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">KLM, Transavia</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Francoforte (FRA)</td><td className="p-3">~1800 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Lufthansa</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Düsseldorf (DUS)</td><td className="p-3">~2040 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Eurowings</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Berlino (BER)</td><td className="p-3">~2140 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair, easyJet</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Dublino (DUB)</td><td className="p-3">~2540 km</td><td className="p-3 font-bold text-amber-600">€400</td><td className="p-3">Ryanair</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">La maggior parte delle rotte da CTA verso Nord Europa supera i 1500 km → €400. Solo le rotte verso Roma e Milano rientrano nella fascia €250.</p>
        </section>

        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo in ritardo da Catania?</h3>
              <p className="text-orange-100 text-sm">Verifica subito il tuo diritto a €250–€400. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=catania-cta" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-orange-700 font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo da Catania CTA
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Documenta il ritardo in aeroporto", content: "Conserva carta d'imbarco. Fotografa i pannelli informativi di CTA mostranti il ritardo. Chiedi conferma scritta alla compagnia con motivazione. Se si menziona l'Etna, chiedi il numero del NOTAM ufficiale." },
              { step: "2", title: "Verifica il ritardo all'arrivo (soglia 3 ore)", content: "Il CE 261 si basa sul ritardo all'arrivo (apertura porte nella destinazione finale), non alla partenza da Catania. Controlla l'orario effettivo di arrivo." },
              { step: "3", title: "Reclamo formale alla compagnia", content: "Usa il modulo online della compagnia operatrice. Indica codice CTA, numero volo, data, ritardo subito, importo richiesto e IBAN. La compagnia ha 30 giorni per rispondere." },
              { step: "4", title: "Escalation ENAC se necessario", content: "Reclamo rifiutato o silenzio dopo 30 giorni? Presenta reclamo all'ENAC su enac.gov.it. L'ENAC è l'autorità italiana competente per i voli da CTA." }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">{item.step}</div>
                <div className="flex-1 pb-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            Diritti immediati all'aeroporto di Catania in caso di ritardo
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { title: "Pasti e bevande", desc: "Voucher o rimborso spese ragionevoli proporzionali all'attesa. Conserva scontrini." },
              { title: "Comunicazioni gratuite", desc: "2 telefonate, email o fax per avvisare di ritardi. Chiedi alla compagnia." },
              { title: "Hotel + trasferimento", desc: "Se devi pernottare, la compagnia deve organizzare alloggio e transfer A/R." },
              { title: "Rimborso o riprenotazione", desc: "In caso di cancellazione: scegli tra rimborso completo biglietto o volo alternativo." }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-semibold text-green-900 text-sm mb-1">{item.title}</h3>
                <p className="text-green-800 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">Questi diritti di assistenza spettano anche in caso di circostanze straordinarie (incluse eruzioni dell'Etna). Solo il risarcimento monetario può essere negato.</p>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo per te?</h3>
              <p className="text-blue-200 text-sm">ClaimWinger si occupa di tutto: reclamo, documentazione, follow-up e escalation ENAC. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=catania-cta" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Aeroporto Catania CTA</h2>
          <div className="space-y-3">
            {[
              { q: "Qual è il codice IATA dell'aeroporto di Catania?", a: "Il codice IATA dell'aeroporto di Catania Fontanarossa è CTA. È il principale aeroporto della Sicilia orientale con oltre 10 milioni di passeggeri l'anno." },
              { q: "Quanto risarcimento spetta per un volo in ritardo da Catania CTA?", a: "Dipende dalla distanza: fino a 1500 km → €250 (Roma, Milano); 1500–3500 km → €400 (Londra, Parigi, Amsterdam, Francoforte, Berlino, Dublino, Barcellona). Il ritardo deve essere di almeno 3 ore all'arrivo." },
              { q: "Ryanair è il principale operatore a Catania CTA?", a: "Sì, Ryanair è il principale operatore con decine di rotte europee e nazionali. In caso di ritardo o cancellazione su voli Ryanair da CTA, hai pieno diritto al risarcimento CE 261/2004." },
              { q: "L'eruzione dell'Etna può causare cancellazioni? È circostanza straordinaria?", a: "Solo se l'ENAC emette un NOTAM ufficiale di chiusura per cenere vulcanica. In quel caso la compagnia è esonerata dal risarcimento monetario ma deve comunque fornire assistenza. Senza NOTAM ufficiale, il risarcimento è dovuto." },
              { q: "L'aeroporto di Catania ha avuto chiusure per l'Etna in passato?", a: "Sì, l'aeroporto ha subito chiusure temporanee durante eruzioni significative (2002, 2015, 2021–2022). Quando viene emesso un NOTAM, i ritardi conseguenti sono circostanza straordinaria." },
              { q: "A chi mi rivolgo se la compagnia rifiuta il risarcimento da Catania?", a: "L'autorità competente per i voli da aeroporti italiani è l'ENAC (enac.gov.it). Puoi presentare reclamo allegando la risposta negativa della compagnia o la mancata risposta entro 30 giorni." }
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
              { href: "/it/blog/aeroporto-napoli-capodichino-risarcimento", title: "Aeroporto Napoli Capodichino", excerpt: "Guida al risarcimento per voli dall'aeroporto di Napoli." },
              { href: "/it/blog/ryanair-italia-risarcimento", title: "Ryanair Italia: Guida Completa", excerpt: "Come ottenere fino a €600 da Ryanair per ritardi e cancellazioni." },
              { href: "/it/blog/circostanze-straordinarie-spiegate", title: "Circostanze Straordinarie", excerpt: "Quando meteo, Etna o scioperi ATC possono giustificare il rifiuto." },
              { href: "/it/blog/easyjet-italia-risarcimento", title: "easyJet Italia: Risarcimento", excerpt: "Guida completa per voli easyJet da CTA e altri aeroporti italiani." }
            ].map((article) => (
              <Link key={article.href} href={article.href} className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-md transition-all">
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
