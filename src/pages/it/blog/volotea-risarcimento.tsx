import LayoutIt from "../../../components/LayoutIt";
import SEO from "../../../components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, FileText, Info, MapPin } from "lucide-react";

export default function VoloteaRisarcimento() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Volotea è soggetta al CE 261/2004?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì. Volotea (codice IATA V7) è una compagnia aerea con sede a Barcellona (Spagna), paese UE. Il CE 261/2004 si applica a tutti i voli Volotea in partenza da aeroporti UE, inclusi gli aeroporti italiani."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto risarcimento spetta per un volo Volotea in ritardo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La quasi totalità delle rotte Volotea è sotto 1.500 km → €250. Alcune rotte più lunghe (verso Grecia, Canarie) possono superare 1.500 km → €400. Il ritardo deve essere almeno 3 ore all'arrivo."
        }
      },
      {
        "@type": "Question",
        "name": "Volotea serve molti aeroporti italiani secondari: quali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Volotea opera da numerosi aeroporti italiani minori come Venezia (VCE), Verona (VRN), Genova (GOA), Torino (TRN), Firenze (FLR), Pescara (PSR), Napoli (NAP), Palermo (PMO), Catania (CTA), Bari (BRI) e altri. Questa è la sua specializzazione: rotte tra città secondarie senza passare per i grandi hub."
        }
      },
      {
        "@type": "Question",
        "name": "Volotea è lenta a rispondere ai reclami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Volotea ha storicamente tempi di risposta più lunghi rispetto alle grandi compagnie — spesso 4-8 settimane. Se non risponde entro 30 giorni, hai diritto di procedere con l'escalation all'ENAC (se il volo è partito da un aeroporto italiano) o all'AESA (se da Spagna)."
        }
      },
      {
        "@type": "Question",
        "name": "Come si fa il reclamo a Volotea?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Accedi a volotea.com → sezione 'Assistenza' → 'Modulo di contatto' o 'Invia un reclamo'. Indica numero volo V7, data, aeroporto di partenza, ritardo in ore, importo CE 261 richiesto e IBAN per il bonifico."
        }
      },
      {
        "@type": "Question",
        "name": "A quale autorità mi rivolgo se Volotea rifiuta il risarcimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per voli in partenza da aeroporti italiani: ENAC (enac.gov.it). Per voli in partenza da aeroporti spagnoli (inclusa la Spagna continentale e le Canarie): AESA (aesa.gob.es)."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Volotea: Risarcimento Voli Ritardo e Cancellazione 2026",
    "description": "Volo Volotea in ritardo o cancellato? CE 261/2004, €250–€400, rotte aeroporti secondari italiani, tempi risposta, ENAC e AESA.",
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "author": { "@type": "Organization", "name": "ClaimWinger" },
    "publisher": { "@type": "Organization", "name": "ClaimWinger", "url": "https://claimwinger.com" }
  };

  return (
    <LayoutIt>
      <SEO
        title="Volotea: Risarcimento Voli 2026 — CE 261/2004 guida completa"
        description="Volo Volotea in ritardo o cancellato? CE 261/2004, €250–€400, aeroporti secondari italiani, tempi di risposta lunghi, ENAC e AESA."
        canonical="https://claimwinger.com/it/blog/volotea-risarcimento"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">

        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">Volotea</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Compagnie Aeree</span>
            <span className="flex items-center gap-1 text-gray-500 text-sm"><Clock className="w-4 h-4" />7 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Volotea: Risarcimento per Ritardo e Cancellazione 2026
          </h1>
          <p className="text-xl text-gray-600">
            Volo Volotea cancellato o in ritardo? Questa compagnia low-cost specializzata in rotte tra città secondarie è pienamente soggetta al CE 261/2004. Quasi tutte le rotte danno diritto a <strong>€250 di risarcimento</strong>.
          </p>
        </header>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Plane className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-blue-900 mb-2">Volotea (V7) — profilo CE 261</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-blue-800">
                <div><strong>Codice IATA:</strong> V7</div>
                <div><strong>Sede:</strong> Barcellona, Spagna (UE)</div>
                <div><strong>Modello:</strong> Low-cost rotte tra città secondarie</div>
                <div><strong>Italia:</strong> Numerosi aeroporti da VCE a PSR</div>
                <div><strong>CE 261 applicabile:</strong> Sì — vettore UE + voli da UE</div>
                <div><strong>Attenzione:</strong> Tempi risposta più lunghi della media</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-500" />
            Volotea in Italia: la specializzazione in aeroporti secondari
          </h2>
          <p className="text-gray-600 mb-4">
            Volotea si distingue dalle grandi compagnie low-cost per la sua strategia: collegare città medie e aeroporti secondari italiani direttamente tra loro, senza passare per hub come Roma o Milano. Questo rende Volotea molto comoda per tratte regionali, ma aumenta anche il rischio di ritardi per rotazione (flotta ridotta, meno voli di backup disponibili).
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Aeroporti italiani serviti da Volotea</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Venezia VCE</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Verona VRN</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Genova GOA</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Torino TRN</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Firenze FLR</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Ancona AOI</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Pescara PSR</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Napoli NAP</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Bari BRI</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Palermo PMO</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Catania CTA</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Lamezia LME</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Cagliari CAG</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Olbia OLB</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />Alghero AHO</div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-6 h-6 text-green-500" />
            Importi di risarcimento per le rotte Volotea
          </h2>
          <p className="text-gray-600 mb-4">
            Il modello di business di Volotea si concentra su tratte corte e medie. La quasi totalità è sotto 1.500 km → <strong>€250</strong>. Solo alcune rotte verso Grecia, Canarie o UK superano 1.500 km → <strong>€400</strong>.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Tipo di rotta</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Esempi</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Distanza tipica</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Risarcimento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Domestico italiano</td><td className="p-3">VCE–CAG, TRN–PMO, VRN–CTA</td><td className="p-3">400–950 km</td><td className="p-3 font-bold text-green-600">€250</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Italia–Francia/Spagna</td><td className="p-3">VRN–BCN, GOA–ORY, FLR–MAD</td><td className="p-3">750–1.300 km</td><td className="p-3 font-bold text-green-600">€250</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-3 font-medium">Italia–Grecia continentale</td><td className="p-3">NAP–ATH, BRI–ATH, VCE–SKG</td><td className="p-3">700–1.100 km</td><td className="p-3 font-bold text-green-600">€250</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Italia–Canarie (Spagna)</td><td className="p-3">VCE–TFS, VRN–LPA</td><td className="p-3">~2.700–3.000 km</td><td className="p-3 font-bold text-amber-600">€400</td></tr>
                <tr className="hover:bg-gray-50 bg-amber-50"><td className="p-3 font-medium">Italia–Grecia isole lontane</td><td className="p-3">MXP–HER (Heraklion)</td><td className="p-3">~1.650 km</td><td className="p-3 font-bold text-amber-600">€400</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">Verifica sempre la distanza effettiva della tua rotta specifica. Le distanze sopra sono indicative.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Tempi di risposta Volotea: cosa aspettarsi
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-gray-600 text-sm mb-3">
              Volotea è storicamente più lenta rispetto a Ryanair o easyJet nel gestire i reclami CE 261. Ecco cosa aspettarsi:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Primi 30 giorni: risposta iniziale</p>
                  <p className="text-gray-600 text-xs">Volotea dovrebbe rispondere entro 30 giorni. In pratica, molti reclami ricevono risposta dopo 4-8 settimane.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Risposta negativa generica</p>
                  <p className="text-gray-600 text-xs">Volotea tende a invocare circostanze straordinarie senza documentazione specifica. Se la risposta è vaga, puoi contestarla e richiedere la prova documentale dell'evento straordinario.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Escalation ENAC/AESA efficace</p>
                  <p className="text-gray-600 text-xs">L'escalation all'ENAC (da aeroporti italiani) è particolarmente efficace con Volotea. L'ENAC ha potere sanzionatorio diretto e può obbligare il pagamento.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Volo Volotea in ritardo o cancellato?</h3>
              <p className="text-blue-100 text-sm">€250 per la maggior parte delle rotte. ClaimWinger gestisce anche i casi in cui Volotea non risponde — paghi solo il <strong>30% del risarcimento ottenuto</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=volotea-v7" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2">
              Verifica gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            Come presentare il reclamo a Volotea
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Documenta il disservizio", content: "Conserva carta d'imbarco, conferma prenotazione con numero volo V7, ricevute spese extra (pasti, trasporti alternativi). Annota l'orario effettivo di arrivo vs quello programmato." },
              { step: "2", title: "Verifica la soglia del ritardo (3 ore)", content: "La soglia CE 261 si calcola sull'orario effettivo di arrivo a destinazione. Anche un ritardo alla partenza che viene in parte recuperato in volo conta — l'importante è l'ora di apertura delle porte all'arrivo." },
              { step: "3", title: "Reclamo online a Volotea", content: "Vai su volotea.com → 'Assistenza' → sezione reclami. Compila il modulo con: numero volo V7, data, aeroporto di partenza, ritardo, importo CE 261 richiesto (€250 o €400 secondo distanza) e IBAN per il pagamento." },
              { step: "4", title: "Escalation dopo 30 giorni senza risposta valida", content: "Se Volotea non risponde entro 30 giorni o dà una risposta negativa generica (senza documentare la circostanza straordinaria): per partenza da aeroporto italiano → ENAC (enac.gov.it); per partenza da Spagna → AESA (aesa.gob.es)." }
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

        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Vuoi che gestiamo il reclamo a Volotea per te?</h3>
              <p className="text-indigo-100 text-sm">ClaimWinger gestisce anche i casi Volotea con risposta lenta o negativa. Commissione: <strong>30% solo se otteniamo il risarcimento</strong>.</p>
            </div>
            <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=volotea-v7" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors flex items-center gap-2">
              Inizia ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti — Volotea</h2>
          <div className="space-y-3">
            {[
              { q: "Volotea è soggetta al CE 261/2004?", a: "Sì. Volotea (V7) ha sede a Barcellona (Spagna, UE). Il CE 261 si applica pienamente a tutti i voli Volotea in partenza da aeroporti UE, inclusi gli aeroporti italiani." },
              { q: "Quanto risarcimento spetta per un volo Volotea in ritardo?", a: "€250 per la quasi totalità delle rotte (domestico italiano, Italia-Francia/Spagna/Grecia continentale). €400 per rotte più lunghe come Italia-Canarie o Italia-Grecia isole lontane. Ritardo minimo: 3 ore all'arrivo." },
              { q: "Volotea serve molti aeroporti italiani secondari: quali?", a: "Volotea opera da VCE, VRN, GOA, TRN, FLR, AOI, PSR, NAP, BRI, PMO, CTA, LME, CAG, OLB, AHO e altri. Specializzata in rotte tra città medie senza passare per hub." },
              { q: "Volotea è lenta a rispondere ai reclami?", a: "Sì, Volotea ha storicamente tempi di risposta di 4-8 settimane. Se non risponde entro 30 giorni, puoi procedere con escalation ENAC (da aeroporti italiani) o AESA (da aeroporti spagnoli)." },
              { q: "Come si fa il reclamo a Volotea?", a: "volotea.com → 'Assistenza' → modulo reclami. Indica numero volo V7, data, aeroporto, ritardo, importo CE 261 e IBAN." },
              { q: "A quale autorità mi rivolgo se Volotea rifiuta il risarcimento?", a: "Per voli partiti da aeroporti italiani: ENAC (enac.gov.it). Per voli partiti da aeroporti spagnoli: AESA (aesa.gob.es)." }
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
              { href: "/it/blog/ryanair-italia-risarcimento", title: "Ryanair Italia: Guida Completa", excerpt: "Come ottenere fino a €600 da Ryanair per ritardi e cancellazioni." },
              { href: "/it/blog/easyjet-italia-risarcimento", title: "easyJet Italia: Guida Completa", excerpt: "CE 261/2004, €250–€400, procedura passo per passo." },
              { href: "/it/blog/aeroporto-venezia-marco-polo-risarcimento", title: "Aeroporto Venezia VCE", excerpt: "VCE vs TSF (Treviso), perdita coincidenza crociera, CE 261." },
              { href: "/it/blog/aeroporto-verona-villafranca-risarcimento", title: "Aeroporto Verona VRN", excerpt: "VRN vs VBS Brescia, Arena di Verona charter, CE 261." }
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
