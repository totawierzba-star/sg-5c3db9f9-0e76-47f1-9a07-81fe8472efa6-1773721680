import LayoutIt from "../../../components/LayoutIt";
import SEO from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info } from "lucide-react";

export default function RomaMadridVoloCancellato() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Se il volo Roma–Madrid è cancellato, quanto posso ottenere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La rotta Roma–Madrid (FCO/CIA→MAD) è superiore a 1500 km ma inferiore a 3500 km, quindi spettano €400 di risarcimento secondo il Regolamento CE 261/2004. Se la compagnia ti offre un volo alternativo che arriva con oltre 2 ore di ritardo rispetto all'originale, l'importo può essere ridotto del 50% a €200."
        }
      },
      {
        "@type": "Question",
        "name": "Iberia può rifiutare il risarcimento per cancellazione?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Iberia può rifiutare solo se dimostra che la cancellazione è dovuta a circostanze straordinarie (scioperi ATC, meteo eccezionale, emergenze sicurezza) che non poteva evitare anche adottando tutte le misure ragionevoli. I guasti tecnici, gli scioperi del personale Iberia e le decisioni commerciali NON sono circostanze straordinarie."
        }
      },
      {
        "@type": "Question",
        "name": "Cosa succede se perdo la coincidenza a Madrid per un volo cancellato?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se hai un unico biglietto con coincidenza a Madrid e il primo tratto viene cancellato causandoti la perdita del secondo volo, hai diritto al risarcimento per la destinazione finale. Se la destinazione finale è a oltre 3500 km da Roma, il risarcimento sale a €600. Se invece hai due biglietti separati, il diritto si calcola solo sul primo tratto."
        }
      },
      {
        "@type": "Question",
        "name": "Quali sono i miei diritti immediati in aeroporto se il volo è cancellato?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In caso di cancellazione hai diritto immediato a: (1) pasti e bevande proporzionali all'attesa, (2) due telefonate o email gratuite, (3) alloggio in hotel se necessario pernottare, (4) trasferimento aeroporto-hotel. Questi sono diritti di assistenza indipendenti dal risarcimento monetario — spettano anche se la causa è una circostanza straordinaria."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo ho per presentare reclamo per una cancellazione Roma–Madrid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per voli che partono da aeroporti italiani (FCO o CIA), si applica la prescrizione italiana: in genere 2 anni dalla data del volo cancellato. Per i voli in partenza da Madrid verso Roma, si applica la normativa spagnola: 1 anno. È comunque consigliabile presentare reclamo entro 3-6 mesi per avere la documentazione fresca."
        }
      },
      {
        "@type": "Question",
        "name": "Ryanair ha cancellato il mio volo da Ciampino a Madrid. Cosa faccio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ryanair è tenuta al rispetto del CE 261/2004 su tutti i voli da aeroporti UE. In caso di cancellazione: (1) conserva la notifica ricevuta (email/SMS), (2) decidi se accetti il rimborso completo o il volo alternativo proposto, (3) presenta reclamo tramite il sito Ryanair entro 5 anni, (4) se rifiutano, escalate all'ENAC. Per voli CIA→MAD spettano €400."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Volo Roma–Madrid Cancellato: €400 di Risarcimento — Guida Completa 2026",
    "description": "Volo Roma–Madrid cancellato? Guida completa: €400 CE 261/2004, diritti immediati in aeroporto, procedura Iberia/Ryanair/easyJet/Vueling e escalation ENAC/AESA.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Volo Roma–Madrid Cancellato: €400 di Risarcimento — Guida Completa 2026"
        description="Volo Roma–Madrid cancellato? Guida completa: €400 CE 261/2004, diritti immediati in aeroporto, procedura Iberia/Ryanair/easyJet/Vueling e escalation ENAC/AESA."
        canonical="https://claimwinger.com/it/blog/roma-madrid-volo-cancellato"
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
              Roma–Madrid Cancellato
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">Rotte</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />10 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Volo Roma–Madrid Cancellato: €400 di Risarcimento — Guida Completa 2026
          </h1>
          <p className="text-xl text-gray-600">
            Se la tua compagnia ha cancellato il volo Roma–Madrid, hai diritto a <strong>€400 di risarcimento</strong> secondo il Regolamento CE 261/2004 — più pasti, hotel e volo alternativo gratuiti. Ecco tutto quello che devi sapere.
          </p>
        </header>

        {/* Featured answer box */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Euro className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-orange-900 mb-2">Risposta immediata</h2>
              <p className="text-orange-800 text-sm leading-relaxed">
                La rotta Roma–Madrid (FCO/CIA → MAD) misura circa <strong>1365 km</strong> in linea d'aria. Rientra nella fascia <strong>1500–3500 km</strong> → <strong>€400 di risarcimento</strong> per cancellazione con meno di 14 giorni di preavviso, oppure <strong>€200</strong> se la compagnia offre un volo alternativo con arrivo entro 2 ore dall'orario originale.
              </p>
            </div>
          </div>
        </div>

        {/* Airport combinations */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-orange-500" />
            Aeroporti di Roma e Madrid: combinazioni possibili
          </h2>
          <p className="text-gray-600 mb-4">
            Quando prenoti un volo "Roma–Madrid", potresti partire da due aeroporti diversi e atterrare allo stesso hub. È importante saperlo perché la distanza e il risarcimento restano costanti.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Partenza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Arrivo</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento cancellazione</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnie principali</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Roma Fiumicino (FCO)</td>
                  <td className="p-3">Madrid Barajas (MAD)</td>
                  <td className="p-3">~1365 km</td>
                  <td className="p-3 font-bold text-orange-600">€400</td>
                  <td className="p-3">Iberia, ITA Airways, easyJet, Vueling</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Roma Ciampino (CIA)</td>
                  <td className="p-3">Madrid Barajas (MAD)</td>
                  <td className="p-3">~1370 km</td>
                  <td className="p-3 font-bold text-orange-600">€400</td>
                  <td className="p-3">Ryanair, Vueling</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">* Madrid ha un unico aeroporto principale (MAD). La distanza reale supera 1.500 km solo su alcune rotte oblique, ma rimane nella fascia €400 secondo i criteri CE 261.</p>
        </section>

        {/* Which companies operate */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Compagnie aeree sulla rotta Roma–Madrid
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">IB / I2</span>
                Iberia e Iberia Express
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Iberia (IB) opera voli di linea FCO→MAD, mentre Iberia Express (I2) copre alcune frequenze a tariffe più basse. Dal punto di vista del CE 261, entrambe rispondono alle stesse regole: reclamo ad Iberia, escalation all'<strong>AESA</strong> (aviazione civile spagnola) se necessario.
              </p>
              <div className="text-xs text-gray-500">
                Reclami: iberia.com → Servizio Clienti → Reclamo volo
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">VY</span>
                Vueling
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Vueling opera frequenti voli FCO→MAD e CIA→MAD. Pur essendo parte del gruppo IAG insieme a Iberia, è una compagnia separata. Il reclamo va presentato direttamente a Vueling — non a Iberia — salvo che Iberia sia il vettore operativo indicato sul biglietto.
              </p>
              <div className="text-xs text-gray-500">
                Reclami: vueling.com → Assistenza → Reclamo
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">FR</span>
                Ryanair
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Ryanair opera principalmente da Roma Ciampino (CIA). In caso di cancellazione, ha l'obbligo di offrire rimborso completo o volo alternativo. I reclami vanno presentati online; se respinti, si può escalare all'<strong>ENAC</strong> (dall'Italia) o all'<strong>AESA</strong> (dalla Spagna).
              </p>
              <div className="text-xs text-gray-500">
                Reclami: ryanair.com → Aiuto → Reclami
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">U2 / AZ</span>
                easyJet e ITA Airways
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                easyJet opera da FCO, ITA Airways opera da FCO con voli di linea. Per ITA, il reclamo va al servizio clienti ufficiale; l'autorità di escalation in Italia è sempre l'<strong>ENAC</strong>.
              </p>
              <div className="text-xs text-gray-500">
                Reclami: easyjet.com / ita-airways.com → Contattaci
              </div>
            </div>
          </div>
        </section>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo Roma–Madrid cancellato?</h3>
              <p className="text-orange-100 text-sm">
                Verifica subito il tuo diritto a €400. ClaimWinger gestisce tutta la procedura — paghi solo il <strong>30% del risarcimento ottenuto</strong>.
              </p>
            </div>
            <a
              href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=roma-madrid-cancellato"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-orange-600 font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors flex items-center gap-2"
            >
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Immediate rights at airport */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            Diritti immediati in aeroporto alla cancellazione
          </h2>
          <p className="text-gray-600 mb-5">
            Quando il tuo volo per Madrid viene cancellato, hai diritto a <strong>due categorie distinte</strong> di tutela: i diritti di assistenza (immediati, in aeroporto) e il risarcimento monetario (da richiedere dopo). Molti passeggeri confondono i due o rinunciano ai primi.
          </p>
          <div className="space-y-3">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-green-900">Pasti e bevande</span>
                <p className="text-green-800 text-sm mt-1">Proporzionali al tempo di attesa. Per attese superiori a 2 ore su rotte >1500 km, la compagnia deve fornire voucher pasto o rimborsare le spese ragionevoli documentate.</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-green-900">Comunicazioni gratuite</span>
                <p className="text-green-800 text-sm mt-1">Hai diritto a due telefonate, email o fax gratuiti per avvisare di ritardi o cancellazioni. Conserva le ricevute se le paghi di tasca tua.</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-green-900">Hotel e trasferimento (se necessario pernottare)</span>
                <p className="text-green-800 text-sm mt-1">Se la compagnia non ha un volo alternativo fino al giorno successivo, deve fornire alloggio in hotel vicino all'aeroporto e trasferimento a/r. Se non lo organizza, pagalo e conserva le ricevute per il rimborso.</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-green-900">Scelta: rimborso del biglietto O volo alternativo</span>
                <p className="text-green-800 text-sm mt-1">Puoi scegliere tra rimborso completo del biglietto (entro 7 giorni) o imbarco su un volo alternativo verso Madrid il prima possibile, o in una data successiva a tua scelta. Questa scelta non pregiudica il tuo diritto al risarcimento monetario.</p>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm">
              <strong>Attenzione:</strong> accettare un volo alternativo non significa rinunciare al risarcimento monetario. Sono diritti separati. Non firmare mai documenti in aeroporto che prevedano la rinuncia al risarcimento CE 261.
            </p>
          </div>
        </section>

        {/* Cancellation notice timing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Quando spetta il risarcimento: la regola dei 14 giorni
          </h2>
          <p className="text-gray-600 mb-4">
            Il CE 261/2004 distingue tre scenari in base a <strong>quando ti viene comunicata la cancellazione</strong>:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Preavviso ricevuto</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Più di 14 giorni prima</td>
                  <td className="p-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-semibold">Nessuno</span>
                  </td>
                  <td className="p-3 text-gray-600">Solo rimborso biglietto o volo alternativo</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Tra 7 e 14 giorni prima</td>
                  <td className="p-3">
                    <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-semibold">€200 (se alt. entro 4h arrivo) o €400</span>
                  </td>
                  <td className="p-3 text-gray-600">Dipende dall'orario del volo alternativo offerto</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Meno di 7 giorni prima</td>
                  <td className="p-3">
                    <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-semibold">€200 (se alt. entro 2h arrivo) o €400</span>
                  </td>
                  <td className="p-3 text-gray-600">Soglie più stringenti per il volo sostitutivo</td>
                </tr>
                <tr className="bg-orange-50 hover:bg-orange-100">
                  <td className="p-3 font-medium text-orange-900">Il giorno stesso / in aeroporto</td>
                  <td className="p-3">
                    <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded font-bold">€400</span>
                  </td>
                  <td className="p-3 text-orange-800">Nessun volo alternativo equivalente può ridurre l'importo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Extraordinary circumstances */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Circostanze straordinarie: quando Iberia o Ryanair possono rifiutare
          </h2>
          <p className="text-gray-600 mb-4">
            Le compagnie aeree possono rifiutare il risarcimento solo se dimostrano che la cancellazione è causata da <strong>circostanze straordinarie</strong> inevitabili. Sulla rotta Roma–Madrid, le situazioni più frequenti sono:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-xs font-bold">✗</span>
                Motivi NON validi (spetta il risarcimento)
              </h3>
              <ul className="space-y-2">
                {[
                  "Guasto tecnico all'aeromobile (salvo difetto nascosto non rilevabile)",
                  "Sciopero del personale Iberia, Ryanair, Vueling o easyJet",
                  "Problemi di programmazione e mancanza di equipaggio",
                  "Bassa occupazione del volo (decisione commerciale)",
                  "Volo operato da aeromobile non conforme per questioni organizzative"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-xs font-bold">✓</span>
                Motivi validi (possibile rifiuto legittimo)
              </h3>
              <ul className="space-y-2">
                {[
                  "Sciopero dei controllori di volo ATC (italiano ENAV o spagnolo ENAIRE)",
                  "Condizioni meteorologiche eccezionali (tempeste, neve intensa)",
                  "Chiusura dello spazio aereo per emergenze sicurezza",
                  "Instabilità politica straordinaria che compromette la rotta",
                  "Pandemia o emergenza sanitaria con restrizioni governative"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-blue-800 text-sm">
              <strong>Regola pratica:</strong> se la compagnia invoca una circostanza straordinaria, deve fornire documenti che lo provino (bollettino meteo ufficiale, comunicato ATC, ecc.). Non basta affermare genericamente "condizioni meteo" o "ragioni operative". Se non forniscono prove, il rifiuto è probabilmente illegittimo.
            </p>
          </div>
        </section>

        {/* Missed connection */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Cancellazione Roma–Madrid e coincidenza persa verso America Latina
          </h2>
          <p className="text-gray-600 mb-4">
            Madrid è un importante hub per i voli verso l'America Latina. Molti italiani usano la rotta Roma–Madrid come prima tappa per Buenos Aires, Bogotà, Lima, Città del Messico. Se la cancellazione del volo Roma–Madrid fa perdere la coincidenza intercontinentale, il risarcimento aumenta significativamente.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Esempio pratico: FCO → MAD → Buenos Aires (EZE)</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <p className="text-gray-700 text-sm">Biglietto unico: FCO → MAD → EZE. Iberia cancella FCO → MAD.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <p className="text-gray-700 text-sm">La destinazione finale (EZE) è a oltre 3500 km da Roma → risarcimento di <strong>€600</strong>, non €400.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                <p className="text-gray-700 text-sm">La compagnia deve riaccomodarti sulla prossima coincidenza disponibile verso Buenos Aires. Se non esiste fino al giorno dopo, ha l'obbligo di alloggio hotel.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">!</span>
                <p className="text-gray-700 text-sm"><strong>Attenzione:</strong> se hai acquistato FCO→MAD e MAD→EZE con due biglietti separati da vettori diversi, il CE 261 si applica solo al primo tratto (€400). Non hai diritto automatico alla coincidenza sul secondo volo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step by step procedure */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo: procedura passo-passo
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "In aeroporto: documenta tutto",
                content: "Fotografa i pannelli informativi, chiedi alla compagnia un documento scritto che attesti la cancellazione con la motivazione. Conserva tutti i voucher pasto o ricevute spese sostenute."
              },
              {
                step: "2",
                title: "Entro 24-48 ore: reclamo formale alla compagnia",
                content: "Presenta reclamo scritto sul sito della compagnia (Iberia, Ryanair, Vueling, easyJet, ITA). Includi: numero prenotazione, data volo, numero volo, motivazione comunicata, importo richiesto (€400) e IBAN per il bonifico. Conserva il numero di pratica."
              },
              {
                step: "3",
                title: "Entro 30 giorni: risposta della compagnia",
                content: "Le compagnie hanno 30 giorni per rispondere formalmente. Se accettano, aspetta il bonifico (10-20 giorni). Se rifiutano o non rispondono, passa al passo successivo."
              },
              {
                step: "4",
                title: "Escalation: ENAC (se partivi da Italia) o AESA (se partivi da Spagna)",
                content: "Per voli da aeroporti italiani, il reclamo va all'ENAC (Ente Nazionale per l'Aviazione Civile). Per voli da Madrid verso Roma, all'AESA spagnola. Entrambi hanno procedure online gratuite."
              },
              {
                step: "5",
                title: "Opzione alternativa: servizio specializzato",
                content: "Se non hai tempo o vuoi massimizzare le probabilità di successo, un servizio come ClaimWinger gestisce tutta la procedura in modo professionale. Paghi solo il 30% del risarcimento effettivamente ottenuto."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
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

        {/* Documents needed */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Documenti necessari per il reclamo
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Carta d'imbarco originale (boarding pass) o PDF del biglietto",
                "Conferma di prenotazione con numero di riferimento",
                "Email o SMS di notifica della cancellazione",
                "Ricevute di pasti, taxi, hotel sostenuti durante l'attesa",
                "Documento d'identità del passeggero richiedente",
                "Coordinate bancarie IBAN per il bonifico",
                "Eventuale documentazione del danno consequenziale (hotel prenotato a Madrid non rimborsabile, ecc.)"
              ].map((doc, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {doc}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-blue-800 text-sm">
              <strong>Non hai la carta d'imbarco?</strong> Non è necessariamente un problema. La conferma di prenotazione e i dati del volo spesso bastano. Molte compagnie registrano l'acquisto nel loro sistema e possono verificare il tuo check-in digitale.
            </p>
          </div>
        </section>

        {/* Timescales */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tempi di risposta delle compagnie su questa rotta
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Compagnia</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Tempo medio 1° risposta</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Tasso accettazione spontanea</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Lingua reclamo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Iberia</td>
                  <td className="p-3">2–6 settimane</td>
                  <td className="p-3">Medio (spesso richiedono documentazione extra)</td>
                  <td className="p-3">Spagnolo preferito / inglese accettato</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Ryanair</td>
                  <td className="p-3">4–10 settimane</td>
                  <td className="p-3">Basso (molti rifiuti iniziali)</td>
                  <td className="p-3">Inglese (modulo online)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Vueling</td>
                  <td className="p-3">3–8 settimane</td>
                  <td className="p-3">Medio-basso</td>
                  <td className="p-3">Spagnolo / inglese</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">easyJet</td>
                  <td className="p-3">2–5 settimane</td>
                  <td className="p-3">Medio</td>
                  <td className="p-3">Inglese (modulo online in italiano disponibile)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">ITA Airways</td>
                  <td className="p-3">3–7 settimane</td>
                  <td className="p-3">Medio</td>
                  <td className="p-3">Italiano accettato</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo per te?</h3>
              <p className="text-blue-200 text-sm">
                ClaimWinger si occupa di tutto: reclamo, documentazione, follow-up e — se necessario — escalation legale. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.
              </p>
            </div>
            <a
              href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=roma-madrid-cancellato"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Roma–Madrid cancellato</h2>
          <div className="space-y-3">
            {[
              {
                q: "Se il volo Roma–Madrid è cancellato, quanto posso ottenere?",
                a: "La rotta Roma–Madrid (FCO/CIA→MAD) è superiore a 1500 km ma inferiore a 3500 km, quindi spettano €400 di risarcimento secondo il Regolamento CE 261/2004. Se la compagnia ti offre un volo alternativo che arriva con oltre 2 ore di ritardo rispetto all'originale, l'importo può essere ridotto del 50% a €200."
              },
              {
                q: "Iberia può rifiutare il risarcimento per cancellazione?",
                a: "Iberia può rifiutare solo se dimostra che la cancellazione è dovuta a circostanze straordinarie (scioperi ATC, meteo eccezionale, emergenze sicurezza) che non poteva evitare anche adottando tutte le misure ragionevoli. I guasti tecnici, gli scioperi del personale Iberia e le decisioni commerciali NON sono circostanze straordinarie."
              },
              {
                q: "Cosa succede se perdo la coincidenza a Madrid per un volo cancellato?",
                a: "Se hai un unico biglietto con coincidenza a Madrid e il primo tratto viene cancellato causandoti la perdita del secondo volo, hai diritto al risarcimento per la destinazione finale. Se la destinazione finale è a oltre 3500 km da Roma, il risarcimento sale a €600. Se invece hai due biglietti separati, il diritto si calcola solo sul primo tratto."
              },
              {
                q: "Quali sono i miei diritti immediati in aeroporto se il volo è cancellato?",
                a: "In caso di cancellazione hai diritto immediato a: (1) pasti e bevande proporzionali all'attesa, (2) due telefonate o email gratuite, (3) alloggio in hotel se necessario pernottare, (4) trasferimento aeroporto-hotel. Questi sono diritti di assistenza indipendenti dal risarcimento monetario — spettano anche se la causa è una circostanza straordinaria."
              },
              {
                q: "Quanto tempo ho per presentare reclamo per una cancellazione Roma–Madrid?",
                a: "Per voli che partono da aeroporti italiani (FCO o CIA), si applica la prescrizione italiana: in genere 2 anni dalla data del volo cancellato. Per i voli in partenza da Madrid verso Roma, si applica la normativa spagnola: 1 anno. È comunque consigliabile presentare reclamo entro 3-6 mesi per avere la documentazione fresca."
              },
              {
                q: "Ryanair ha cancellato il mio volo da Ciampino a Madrid. Cosa faccio?",
                a: "Ryanair è tenuta al rispetto del CE 261/2004 su tutti i voli da aeroporti UE. In caso di cancellazione: (1) conserva la notifica ricevuta (email/SMS), (2) decidi se accetti il rimborso completo o il volo alternativo proposto, (3) presenta reclamo tramite il sito Ryanair entro 5 anni, (4) se rifiutano, escalate all'ENAC. Per voli CIA→MAD spettano €400."
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

        {/* Related articles */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Articoli correlati</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                href: "/it/blog/iberia-risarcimento",
                title: "Iberia Risarcimento: Guida Completa 2026",
                excerpt: "Tutto su Iberia/Iberia Express/Vueling: differenze, AESA e importi fino a €600.",
                color: "orange"
              },
              {
                href: "/it/blog/vueling-risarcimento",
                title: "Vueling Risarcimento: Fino a €600",
                excerpt: "Guida completa per reclami Vueling con procedura step-by-step.",
                color: "amber"
              },
              {
                href: "/it/blog/circostanze-straordinarie-spiegate",
                title: "Circostanze Straordinarie: Quando NON Spetta il Risarcimento",
                excerpt: "Capire quando la compagnia può rifiutare legalmente il risarcimento.",
                color: "amber"
              },
              {
                href: "/it/blog/overbooking-negato-imbarco-diritti",
                title: "Overbooking e Negato Imbarco: Tutti i Tuoi Diritti",
                excerpt: "Negato imbarco? Scopri come ottenere fino a €600.",
                color: "red"
              }
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-md transition-all"
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
