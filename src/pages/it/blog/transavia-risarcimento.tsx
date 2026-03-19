import LayoutIt from "../../../components/LayoutIt";
import SEO from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function TransaviaRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Transavia è soggetta al CE 261/2004?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì. Transavia opera in due varianti: Transavia France (codice TO, sede Francia) e Transavia Netherlands (codice HV, sede Paesi Bassi). Entrambe sono vettori UE. Il CE 261/2004 si applica pienamente a tutti i voli Transavia in partenza da aeroporti UE e in arrivo nell'UE."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo Transavia in ritardo dall'Italia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La quasi totalità delle rotte Transavia dall'Italia è inferiore a 1.500 km → €250. Le rotte verso Parigi ORY, Lione, Nantes, Rotterdam/L'Aia rientrano tutte nella fascia €250. Il ritardo deve essere almeno 3 ore all'arrivo."
        }
      },
      {
        "@type": "Question",
        "name": "Qual è la differenza tra Transavia France (TO) e Transavia Netherlands (HV)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Transavia France (TO) è la filiale francese del gruppo Air France-KLM e opera principalmente rotte da/verso la Francia (Parigi ORY, Lione, Nantes, Bordeaux). Transavia Netherlands (HV) è la filiale olandese e opera rotte da/verso i Paesi Bassi (Amsterdam, Rotterdam, Eindhoven). Per il reclamo CE 261, conta il vettore che ha operato il volo — verificabile sul biglietto."
        }
      },
      {
        "@type": "Question",
        "name": "Ho prenotato con Air France ma il volo era operato da Transavia: a chi reclamo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il reclamo CE 261 va sempre al vettore operativo — cioè chi ha fisicamente operato il volo. Se il boarding pass riporta 'operato da Transavia', il reclamo va a Transavia (France o Netherlands a seconda del codice). Air France, in quanto vettore commerciale, non è responsabile del volo operato da Transavia."
        }
      },
      {
        "@type": "Question",
        "name": "Come si fa il reclamo a Transavia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Accedi al sito transavia.com → sezione 'Customer Service' → 'File a complaint'. Indica numero volo (TO o HV), data, aeroporto di partenza, ritardo in ore, importo CE 261 richiesto (€250 per la maggior parte delle rotte dall'Italia) e IBAN per il pagamento."
        }
      },
      {
        "@type": "Question",
        "name": "A quale autorità mi rivolgo se Transavia rifiuta il risarcimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dipende dall'aeroporto di partenza. Per voli da aeroporti italiani: ENAC (enac.gov.it). Per voli da aeroporti francesi (Transavia France): DGAC — Direction Générale de l'Aviation Civile. Per voli da aeroporti olandesi (Transavia Netherlands): ILT — Inspectie Leefomgeving en Transport."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Transavia: Risarcimento Voli Ritardo e Cancellazione 2026",
    "description": "Volo Transavia in ritardo o cancellato? CE 261/2004, €250, Transavia France vs Netherlands, gruppo AF-KLM, ENAC e DGAC.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Transavia: Risarcimento Voli 2026 — CE 261/2004 guida completa"
        description="Volo Transavia in ritardo o cancellato? CE 261/2004, €250, Transavia France TO vs Netherlands HV, gruppo Air France-KLM, ENAC e DGAC."
        canonical="https://claimwinger.com/it/blog/transavia-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">Transavia</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Compagnie Aeree</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />7 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transavia: Risarcimento per Ritardo e Cancellazione 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo Transavia cancellato o arrivato in ritardo? Come low-cost del gruppo Air France-KLM, Transavia è pienamente soggetta al CE 261/2004. Per la quasi totalità delle rotte dall'Italia, hai diritto a <strong>€250 di risarcimento</strong>.
          </p>
        </header>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Plane className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-green-900 mb-2">Transavia — profilo CE 261</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-green-800">
                <div><strong>Transavia France:</strong> codice IATA TO, sede Parigi</div>
                <div><strong>Transavia Netherlands:</strong> codice IATA HV, sede Amsterdam</div>
                <div><strong>Gruppo:</strong> Air France-KLM (AF, KL)</div>
                <div><strong>Modello:</strong> Low-cost leisure</div>
                <div><strong>Rotte Italia:</strong> verso Francia, Paesi Bassi, Portogallo, Spagna</div>
                <div><strong>CE 261 applicabile:</strong> Sì — entrambe le entità sono vettori UE</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-green-500" />
            Transavia France vs Transavia Netherlands: chi è responsabile?
          </h2>
          <p className="text-gray-600 mb-4">
            Transavia opera con due entità giuridiche distinte, entrambe del gruppo Air France-KLM. La distinzione è importante per sapere a chi presentare il reclamo e quale autorità contattare in caso di escalation.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-green-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-100 text-green-800 text-sm font-bold px-2 py-1 rounded">TO</span>
                <h3 className="font-bold text-gray-900">Transavia France</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li><strong>Sede:</strong> Parigi, Francia (UE)</li>
                <li><strong>Hub:</strong> Parigi Orly (ORY), Lione (LYS), Nantes (NTE)</li>
                <li><strong>Rotte da Italia:</strong> verso Parigi ORY, Lione, Nantes, Bordeaux, Tolosa</li>
                <li><strong>Autorità escalation:</strong> DGAC (France) o ENAC (da IT)</li>
                <li><strong>Reclamo:</strong> transavia.com (versione .com)</li>
              </ul>
            </div>
            <div className="bg-white border border-blue-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 text-sm font-bold px-2 py-1 rounded">HV</span>
                <h3 className="font-bold text-gray-900">Transavia Netherlands</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li><strong>Sede:</strong> Amsterdam, Paesi Bassi (UE)</li>
                <li><strong>Hub:</strong> Amsterdam Schiphol (AMS), Rotterdam (RTM), Eindhoven (EIN)</li>
                <li><strong>Rotte da Italia:</strong> verso AMS/RTM/EIN da vari aeroporti italiani</li>
                <li><strong>Autorità escalation:</strong> ILT (Paesi Bassi) o ENAC (da IT)</li>
                <li><strong>Reclamo:</strong> transavia.com (versione .com/nl)</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-800 text-sm"><strong>Come riconosci il vettore?</strong> Guarda il codice volo sul boarding pass: <strong>TO</strong> = Transavia France; <strong>HV</strong> = Transavia Netherlands. Il reclamo va al vettore che ha operato il volo.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento: rotte Transavia dall'Italia
          </h2>
          <p className="text-gray-600 mb-4">
            Quasi tutte le rotte Transavia dall'Italia verso Francia e Paesi Bassi rientrano nella fascia ≤1.500 km, quindi il risarcimento è <strong>€250</strong>. È il massimo applicabile per queste tratte.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Rotta</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Vettore</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma FCO → Parigi ORY</td><td className="p-3">~1.105 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Transavia France (TO)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Milano MXP → Parigi ORY</td><td className="p-3">~825 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Transavia France (TO)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Napoli NAP → Parigi ORY</td><td className="p-3">~1.250 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Transavia France (TO)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma FCO → Lione LYS</td><td className="p-3">~785 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Transavia France (TO)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma FCO → Nantes NTE</td><td className="p-3">~1.405 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Transavia France (TO)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Milano MXP → Amsterdam AMS</td><td className="p-3">~1.060 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Transavia Netherlands (HV)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Roma FCO → Amsterdam AMS</td><td className="p-3">~1.435 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Transavia Netherlands (HV)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Bologna BLQ → Amsterdam AMS</td><td className="p-3">~1.180 km</td><td className="p-3 font-bold text-green-600">€250</td><td className="p-3">Transavia Netherlands (HV)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-800 text-sm">Tutte le rotte Transavia dall'Italia verso Francia e Paesi Bassi sono sotto 1.500 km → risarcimento <strong>€250</strong>. Non esistono rotte Transavia dirette dall'Italia oltre 3.500 km, quindi la soglia €600 non si applica.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Confusione frequente: Air France vs Transavia
          </h2>
          <p className="text-gray-600 mb-4">
            Molti passeggeri prenotano voli sul sito di Air France o su comparatori di volo, ritrovandosi poi su un aereo Transavia. Questo è normale — fanno parte dello stesso gruppo — ma cambia a chi spetta il reclamo.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs flex-shrink-0">AF</div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Ho prenotato sul sito Air France con codice AF</p>
                  <p className="text-gray-600 text-xs">Se il volo era operato da Air France (AF), reclamo ad Air France. Escalation: DGAC (da FR) o ENAC (da IT). Air France offre tipicamente voli a tariffa piena con più servizi.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xs flex-shrink-0">TO</div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Ho prenotato sul sito Air France ma il volo è operato da Transavia France (TO)</p>
                  <p className="text-gray-600 text-xs">Il reclamo CE 261 va a <strong>Transavia France</strong>, non ad Air France. Usa transavia.com. Escalation: DGAC (da FR) o ENAC (da IT).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs flex-shrink-0">HV</div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Ho prenotato su KLM o un comparatore ma il volo è operato da Transavia Netherlands (HV)</p>
                  <p className="text-gray-600 text-xs">Il reclamo va a <strong>Transavia Netherlands</strong>. Usa transavia.com. Escalation: ILT (da NL) o ENAC (da IT).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo Transavia in ritardo dall'Italia?</h3>
              <p className="text-green-100 text-sm">€250 per ritardi ≥3 ore. ClaimWinger sa come gestire i reclami a Transavia France e Netherlands — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=transavia-to-hv" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-green-500" />
            Autorità di vigilanza per i voli Transavia
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Aeroporto di partenza</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Vettore</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Autorità competente</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3">Italia (FCO, MXP, NAP, BLQ, ecc.)</td><td className="p-3">TO o HV</td><td className="p-3 font-medium">ENAC — enac.gov.it</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3">Francia (ORY, LYS, NTE, ecc.)</td><td className="p-3">TO (Transavia France)</td><td className="p-3 font-medium">DGAC — ecologie.gouv.fr/dgac</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3">Paesi Bassi (AMS, RTM, EIN)</td><td className="p-3">HV (Transavia Netherlands)</td><td className="p-3 font-medium">ILT — ilent.nl</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-500" />
            Come presentare il reclamo a Transavia
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Identifica il vettore operante", content: "Controlla il boarding pass: TO = Transavia France; HV = Transavia Netherlands. Questo determina il portale e l'autorità di escalation. Non presentare il reclamo ad Air France o KLM se il volo era operato da Transavia." },
              { step: "2", title: "Documenta il disservizio", content: "Conserva boarding pass, conferma prenotazione con numero volo TO/HV, ricevute spese extra (pasti, alloggio se hai dovuto pernottare per cancellazione). Annota l'orario di arrivo effettivo vs programmato." },
              { step: "3", title: "Reclamo online a Transavia", content: "Vai su transavia.com → 'Customer Service' → modulo di reclamo. Indica: numero volo (TO o HV), data, aeroporto di partenza, ritardo in ore, importo CE 261 richiesto (€250 per rotte da/verso Italia) e IBAN." },
              { step: "4", title: "Escalation ENAC o DGAC/ILT se necessario", content: "Se Transavia non risponde entro 30 giorni o rifiuta ingiustificatamente: per partenza da Italia → ENAC (enac.gov.it); per partenza da Francia → DGAC; per partenza dai Paesi Bassi → ILT." }
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
        </section>

        <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo a Transavia per te?</h3>
              <p className="text-emerald-100 text-sm">ClaimWinger distingue Transavia France da Transavia Netherlands e presenta il reclamo corretto. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=transavia-to-hv" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Transavia</h2>
          <div className="space-y-3">
            {[
              { q: "Transavia è soggetta al CE 261/2004?", a: "Sì. Transavia France (TO) e Transavia Netherlands (HV) sono entrambe vettori UE del gruppo Air France-KLM. Il CE 261 si applica pienamente a tutti i voli in partenza da aeroporti UE e in arrivo nell'UE." },
              { q: "Quanto risarcimento spetta per un volo Transavia in ritardo dall'Italia?", a: "€250 per tutte le rotte dall'Italia (verso Francia o Paesi Bassi, tutte sotto 1.500 km). Il ritardo deve essere almeno 3 ore all'arrivo." },
              { q: "Qual è la differenza tra Transavia France (TO) e Transavia Netherlands (HV)?", a: "Transavia France (TO) ha sede a Parigi e opera principalmente rotte verso la Francia. Transavia Netherlands (HV) ha sede ad Amsterdam e opera verso i Paesi Bassi. Per il reclamo conta il vettore operante — verificabile sul boarding pass (TO o HV)." },
              { q: "Ho prenotato con Air France ma il volo era operato da Transavia: a chi reclamo?", a: "Il reclamo CE 261 va al vettore operante. Se il boarding pass riporta 'operato da Transavia France (TO)', reclamo a Transavia France. Air France non è responsabile del volo operato da Transavia." },
              { q: "Come si fa il reclamo a Transavia?", a: "Accedi a transavia.com → 'Customer Service' → modulo reclami. Indica numero volo (TO o HV), data, aeroporto, ritardo, importo richiesto (€250) e IBAN." },
              { q: "A quale autorità mi rivolgo se Transavia rifiuta il risarcimento?", a: "Da aeroporto italiano: ENAC (enac.gov.it). Da aeroporto francese (Transavia France): DGAC. Da aeroporto olandese (Transavia Netherlands): ILT." }
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
              { href: "/it/blog/milano-parigi-ritardo-risarcimento", title: "Milano–Parigi: Ritardo e Risarcimento", excerpt: "Guida completa MXP/LIN/BGY→CDG/ORY/BVA — €250 CE 261." },
              { href: "/it/blog/easyjet-italia-risarcimento", title: "easyJet Italia: Guida Completa", excerpt: "Come ottenere €250–€400 da easyJet per ritardi e cancellazioni." },
              { href: "/it/blog/ryanair-italia-risarcimento", title: "Ryanair Italia: Guida Completa", excerpt: "Risarcimento Ryanair fino a €600 — procedura passo per passo." },
              { href: "/it/blog/da-quante-ore-ritardo-diritto-risarcimento", title: "Da Quante Ore di Ritardo Hai Diritto?", excerpt: "La regola delle 3 ore spiegata con esempi pratici." }
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
