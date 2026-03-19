import { LayoutIt } from "@/components/LayoutIt";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, Info } from "lucide-react";

export default function DaQuanteOreRitardoDirittoRisarcimento() {
  return (
    <LayoutIt>
      <SEO
        title="Da Quante Ore di Ritardo Hai Diritto al Risarcimento? [Guida 2026]"
        description="Scopri da quante ore di ritardo scatta il diritto al risarcimento volo: €250, €400 o €600 secondo il Regolamento CE 261/2004. Risposta immediata + procedura."
        url="https://lotproblem.pl/it/blog/da-quante-ore-ritardo-diritto-risarcimento"
      />

      {/* Schema Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Da Quante Ore di Ritardo Hai Diritto al Risarcimento?",
            "description": "Guida completa: da quante ore di ritardo volo scatta il diritto al risarcimento secondo CE 261/2004. Importi, calcolo e procedura.",
            "author": {
              "@type": "Organization",
              "name": "LotProblem.pl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lotproblem.pl/og-image.png"
              }
            },
            "datePublished": "2026-03-19",
            "dateModified": "2026-03-19",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://lotproblem.pl/it/blog/da-quante-ore-ritardo-diritto-risarcimento"
            },
            "about": {
              "@type": "Thing",
              "name": "Risarcimento volo in ritardo CE 261/2004"
            }
          })
        }}
      />

      {/* Schema FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Da quante ore di ritardo ho diritto al risarcimento volo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hai diritto al risarcimento quando il tuo volo arriva a destinazione con 3 ore o più di ritardo rispetto all'orario previsto. Questa soglia è stabilita dal Regolamento europeo CE 261/2004 e vale per tutti i voli in partenza da aeroporti UE e per i voli verso l'UE operati da compagnie europee."
                }
              },
              {
                "@type": "Question",
                "name": "Quanto spetta per un volo in ritardo di 3 ore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Per un volo in ritardo di 3 ore spettano €250 per distanze fino a 1.500 km, €400 per distanze tra 1.500 e 3.500 km, e fino a €600 per distanze superiori a 3.500 km. L'importo dipende dalla distanza del volo, non dal prezzo del biglietto."
                }
              },
              {
                "@type": "Question",
                "name": "Come si calcolano le ore di ritardo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Il ritardo si calcola tra l'orario di arrivo previsto e l'orario in cui almeno una porta dell'aereo viene aperta a destinazione. NON conta l'orario di atterraggio, ma quello di apertura della porta. Il ritardo alla partenza è irrilevante: conta solo il ritardo all'arrivo."
                }
              },
              {
                "@type": "Question",
                "name": "Se il volo parte in ritardo ma arriva in orario ho diritto al risarcimento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Conta solo il ritardo all'arrivo. Se l'aereo parte tardi ma il pilota recupera in volo e arrivi con meno di 3 ore di ritardo, non hai diritto al risarcimento. Tuttavia, se il ritardo alla partenza supera 2 ore, hai comunque diritto all'assistenza (pasti, bevande)."
                }
              },
              {
                "@type": "Question",
                "name": "Il risarcimento è automatico o devo richiederlo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non è automatico: devi richiederlo attivamente. Le compagnie aeree non pagano spontaneamente. Hai generalmente 2-3 anni di tempo per presentare il reclamo (dipende dalla legislazione del paese). Puoi farlo direttamente alla compagnia oppure tramite una società specializzata come ClaimWinger."
                }
              },
              {
                "@type": "Question",
                "name": "Posso chiedere risarcimento per voli già avvenuti anni fa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sì, in molti casi. In Italia il termine di prescrizione è di 2 anni dalla data del volo. In altri paesi UE può arrivare fino a 6 anni (es. Regno Unito). Verifica sempre il termine applicabile in base al paese di partenza del volo."
                }
              },
              {
                "@type": "Question",
                "name": "Il risarcimento si riduce se il ritardo è tra 3 e 4 ore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sì, solo per voli extra-UE di oltre 3.500 km. In quel caso, se il ritardo è tra 3 e 4 ore, la compagnia può ridurre il risarcimento del 50% (€300 invece di €600). Per voli intra-UE o ritardi superiori a 4 ore, spetta sempre l'importo pieno."
                }
              },
              {
                "@type": "Question",
                "name": "Cosa succede se perdo la coincidenza per colpa del ritardo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Se i voli sono sulla stessa prenotazione e arrivi alla destinazione finale con 3 o più ore di ritardo, hai diritto al risarcimento calcolato sulla distanza totale. Se invece hai prenotazioni separate, il diritto al risarcimento si valuta per ciascun volo individualmente."
                }
              }
            ]
          })
        }}
      />

      {/* Schema HowTo per la procedura */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Come richiedere risarcimento per volo in ritardo",
            "description": "Procedura passo-passo per ottenere il risarcimento per volo in ritardo secondo CE 261/2004",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Verifica il ritardo all'arrivo",
                "text": "Controlla l'orario di arrivo effettivo (apertura porta) rispetto a quello previsto. Se è ≥3 ore, hai diritto al risarcimento."
              },
              {
                "@type": "HowToStep",
                "name": "Raccogli i documenti",
                "text": "Conserva boarding pass, conferma di prenotazione, screenshot del tabellone e scontrini di eventuali spese."
              },
              {
                "@type": "HowToStep",
                "name": "Presenta il reclamo",
                "text": "Invia richiesta formale alla compagnia aerea o usa una società specializzata come ClaimWinger per massimizzare le possibilità di successo."
              }
            ]
          })
        }}
      />

      <article className="py-12">
        <div className="container max-w-4xl mx-auto px-4">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-600">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/it" className="hover:text-blue-600">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/it/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><span>/</span></li>
              <li className="text-gray-900 font-medium">Ore di Ritardo e Risarcimento</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 flex-wrap">
              <Clock className="h-4 w-4" />
              <time dateTime="2026-03-19">19 marzo 2026</time>
              <span>•</span>
              <span>10 min di lettura</span>
              <span>•</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                AI / Featured Snippet
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Da Quante Ore di Ritardo Hai Diritto al Risarcimento?
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              La risposta rapida: <strong>3 ore</strong>. Ma ci sono dettagli fondamentali sul calcolo,
              gli importi e le eccezioni che possono fare la differenza tra ottenere o perdere fino a €600.
            </p>
          </header>

          {/* Risposta Diretta — ottimizzata per AI Overview / Featured Snippet */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-xl">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-blue-900 mb-2 text-lg">Risposta Diretta</h2>
                <p className="text-blue-800">
                  Hai diritto al risarcimento quando il tuo volo arriva a destinazione con <strong>3 ore o più di
                  ritardo</strong>. L'importo va da <strong>€250 a €600</strong> in base alla distanza del volo,
                  secondo il <Link href="/it/blog/regolamento-ce-261-2004-spiegato" className="underline hover:text-blue-600">Regolamento CE 261/2004</Link>.
                  Il ritardo di partenza non conta: si misura solo l'arrivo.
                </p>
              </div>
            </div>
          </div>

          {/* Tabella Rapida */}
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-4 text-left rounded-tl-xl">Ritardo all'arrivo</th>
                  <th className="p-4 text-left">Distanza volo</th>
                  <th className="p-4 text-left rounded-tr-xl">Risarcimento</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="p-4 font-semibold text-red-600">Meno di 3 ore</td>
                  <td className="p-4">Qualsiasi</td>
                  <td className="p-4 text-red-600 font-semibold">❌ Nessun risarcimento</td>
                </tr>
                <tr className="border-b border-gray-200 bg-blue-50">
                  <td className="p-4 font-semibold text-green-700">3 ore o più</td>
                  <td className="p-4">≤ 1.500 km</td>
                  <td className="p-4 text-green-700 font-bold">✅ €250</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="p-4 font-semibold text-green-700">3 ore o più</td>
                  <td className="p-4">1.500 – 3.500 km</td>
                  <td className="p-4 text-green-700 font-bold">✅ €400</td>
                </tr>
                <tr className="border-b border-gray-200 bg-blue-50">
                  <td className="p-4 font-semibold text-green-700">3–4 ore</td>
                  <td className="p-4">&gt; 3.500 km (extra-UE)</td>
                  <td className="p-4 text-green-700 font-bold">✅ €300 (ridotto 50%)</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-semibold text-green-700 rounded-bl-xl">4 ore o più</td>
                  <td className="p-4">&gt; 3.500 km</td>
                  <td className="p-4 text-green-700 font-bold rounded-br-xl">✅ €600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Clock className="h-8 w-8 text-blue-600 flex-shrink-0" />
              Come Si Calcola Esattamente il Ritardo?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Il calcolo del ritardo può sembrare semplice, ma ci sono <strong>tre errori comuni</strong> che
              fanno perdere il risarcimento a molti passeggeri. Ecco come farlo correttamente:
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-xl">
              <h3 className="font-bold text-yellow-900 mb-4">Regola Ufficiale CE 261/2004</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-gray-900 mb-1">Punto di partenza</p>
                  <p className="text-gray-700 text-sm">
                    L'<strong>orario di arrivo previsto</strong> indicato sul biglietto originale al momento della prenotazione.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-gray-900 mb-1">Punto di arrivo</p>
                  <p className="text-gray-700 text-sm">
                    L'orario in cui <strong>almeno una porta dell'aereo viene aperta</strong> a destinazione.
                    <span className="text-red-600 font-semibold"> NON l'atterraggio, ma l'apertura porta.</span>
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-gray-900 mb-1">Formula</p>
                  <p className="text-gray-700 text-sm font-mono bg-gray-50 p-2 rounded">
                    Ritardo = Orario apertura porta – Orario arrivo previsto
                  </p>
                  <p className="text-gray-700 text-sm mt-2">
                    Se il risultato è <strong>≥ 180 minuti (3 ore)</strong> → diritto al risarcimento.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">I 3 Errori Più Comuni nel Calcolo</h3>

            <div className="space-y-4 my-6">
              <div className="flex items-start gap-4 bg-red-50 p-5 rounded-xl">
                <span className="text-2xl flex-shrink-0">❌</span>
                <div>
                  <p className="font-bold text-red-900">Errore 1: Usare l'orario di atterraggio</p>
                  <p className="text-gray-700 text-sm mt-1">
                    L'atterraggio avviene sempre prima dell'apertura porta. La differenza può essere di 15–30 minuti,
                    sufficienti a far superare (o non superare) la soglia delle 3 ore.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-red-50 p-5 rounded-xl">
                <span className="text-2xl flex-shrink-0">❌</span>
                <div>
                  <p className="font-bold text-red-900">Errore 2: Calcolare il ritardo dalla partenza</p>
                  <p className="text-gray-700 text-sm mt-1">
                    Il regolamento guarda <em>solo</em> il ritardo all'arrivo. Un volo può partire con 4 ore di ritardo
                    e non dare diritto al risarcimento se il pilota recupera e arriva con soli 2h 50min di ritardo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-red-50 p-5 rounded-xl">
                <span className="text-2xl flex-shrink-0">❌</span>
                <div>
                  <p className="font-bold text-red-900">Errore 3: Non considerare il ritardo totale su più voli</p>
                  <p className="text-gray-700 text-sm mt-1">
                    Se hai una prenotazione con scala e perdi la coincidenza, il ritardo si calcola sulla
                    <strong> destinazione finale</strong>, non sul primo tratto. Potresti avere diritto a €600 anche
                    se il primo volo ha avuto solo 1 ora di ritardo.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA 1 — dopo il primo blocco di contenuto */}
            <div className="my-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Il Tuo Volo Ha Avuto 3+ Ore di Ritardo?</h3>
                  <p className="text-blue-100 text-lg">
                    Verifica in 2 minuti se hai diritto al risarcimento e ricevi fino a <strong className="text-white">€600</strong>
                    senza rischi — paghi solo se vinciamo.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="https://claimwinger.com/it/volo-in-ritardo?utm_source=blog&utm_medium=cta1&utm_campaign=ore-ritardo"
                    className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-lg"
                  >
                    Verifica il Tuo Ritardo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <p className="text-blue-200 text-xs mt-2 text-center">Gratis • Nessun impegno</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-green-600 flex-shrink-0" />
              Quanto Spetta Esattamente? Gli Importi nel Dettaglio
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Il <Link href="/it/blog/regolamento-ce-261-2004-spiegato" className="text-blue-600 hover:underline font-semibold">
              Regolamento CE 261/2004</Link> stabilisce importi fissi che non dipendono dal prezzo del tuo
              biglietto, ma dalla <strong>distanza percorsa</strong>:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-blue-600 mb-3">€250</div>
                <div className="text-sm font-bold text-gray-800 mb-3">Voli Brevi</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>Distanza ≤ 1.500 km</p>
                  <p className="text-gray-500 mt-2">Es: Roma–Barcellona, Milano–Parigi, Napoli–Vienna, Roma–Londra</p>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Più comune
                </div>
                <div className="text-5xl font-bold text-green-600 mb-3">€400</div>
                <div className="text-sm font-bold text-gray-800 mb-3">Voli Medi</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>Distanza 1.500–3.500 km</p>
                  <p className="text-gray-500 mt-2">Es: Roma–Istanbul, Milano–Cairo, Napoli–Mosca</p>
                </div>
              </div>

              <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-purple-600 mb-3">€600</div>
                <div className="text-sm font-bold text-gray-800 mb-3">Voli Lunghi</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>Distanza &gt; 3.500 km</p>
                  <p className="text-gray-500 mt-2">Es: Roma–New York, Milano–Dubai, Napoli–Bangkok</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 my-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Eccezione: Voli Lunghi con 3–4 Ore di Ritardo</h3>
                  <p className="text-amber-800 text-sm">
                    Per voli extra-UE di distanza superiore a 3.500 km, se il ritardo è compreso tra 3 e 4 ore,
                    la compagnia può applicare una riduzione del 50%: spettano <strong>€300 invece di €600</strong>.
                    Se il ritardo supera le 4 ore, hai sempre diritto all'importo pieno di €600.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Plane className="h-8 w-8 text-blue-600 flex-shrink-0" />
              Quando il Regolamento CE 261/2004 Si Applica
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Non tutti i voli sono coperti. Ecco le condizioni necessarie:
            </p>

            <div className="space-y-3 my-8">
              <div className="flex items-start gap-3 bg-green-50 p-4 rounded-xl">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800">
                  <strong>Voli in partenza da aeroporti UE</strong> — qualsiasi compagnia, qualsiasi destinazione
                </p>
              </div>
              <div className="flex items-start gap-3 bg-green-50 p-4 rounded-xl">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800">
                  <strong>Voli in arrivo nell'UE</strong> operati da compagnie aeree con sede in UE (es. ITA, Ryanair, Wizz Air)
                </p>
              </div>
              <div className="flex items-start gap-3 bg-green-50 p-4 rounded-xl">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800">
                  <strong>Passeggeri con prenotazione confermata</strong> che si presentano all'imbarco nei tempi previsti
                </p>
              </div>
              <div className="flex items-start gap-3 bg-red-50 p-4 rounded-xl">
                <span className="text-red-500 font-bold text-xl flex-shrink-0 mt-0.5">✗</span>
                <p className="text-gray-800">
                  Voli extra-UE → extra-UE (es. New York–Tokyo con Emirates): non coperti da CE 261/2004
                </p>
              </div>
              <div className="flex items-start gap-3 bg-red-50 p-4 rounded-xl">
                <span className="text-red-500 font-bold text-xl flex-shrink-0 mt-0.5">✗</span>
                <p className="text-gray-800">
                  Passeggeri che si presentano in ritardo all'imbarco: nessun diritto al risarcimento
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Eccezioni: Quando NON Hai Diritto al Risarcimento Nonostante 3+ Ore
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ci sono casi in cui, nonostante il ritardo di 3 ore o più, la compagnia può legalmente rifiutare
              il risarcimento:
            </p>

            <div className="space-y-4 my-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                <h3 className="font-bold text-red-900 mb-2">Circostanze Straordinarie</h3>
                <p className="text-gray-700 text-sm">
                  Maltempo eccezionale (es. uragano), scioperi del controllo del traffico aereo, instabilità
                  politica, rischi per la sicurezza. La compagnia deve <em>dimostrare</em> che l'evento era
                  imprevedibile e che ha fatto tutto il possibile. Leggi di più sulle{" "}
                  <Link href="/it/blog/circostanze-straordinarie-spiegate" className="text-red-700 hover:underline font-semibold">
                    circostanze straordinarie
                  </Link>.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                <h3 className="font-bold text-red-900 mb-2">Avviso Anticipato (oltre 14 giorni)</h3>
                <p className="text-gray-700 text-sm">
                  Se la compagnia ti ha informato del ritardo/cancellazione più di 14 giorni prima e ti ha offerto
                  alternative ragionevoli, non hai diritto al risarcimento.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                <h3 className="font-bold text-red-900 mb-2">Rifiuto di Riprotezione</h3>
                <p className="text-gray-700 text-sm">
                  Se la compagnia ti ha offerto un volo alternativo che ti avrebbe fatto arrivare con meno di 3
                  ore di ritardo e hai rifiutato, perdi il diritto al risarcimento.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Diritti Aggiuntivi Indipendenti dal Ritardo: L'Assistenza
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Anche sotto le 3 ore di ritardo, hai diritto all'<strong>assistenza</strong> se il ritardo alla
              partenza supera determinate soglie:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-4 text-left rounded-tl-lg">Ritardo alla partenza</th>
                    <th className="p-4 text-left">Distanza volo</th>
                    <th className="p-4 text-left rounded-tr-lg">Assistenza dovuta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4">2 ore o più</td>
                    <td className="p-4">≤ 1.500 km</td>
                    <td className="p-4">Pasti, bevande, 2 telefonate/email</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4">3 ore o più</td>
                    <td className="p-4">1.500–3.500 km</td>
                    <td className="p-4">Pasti, bevande, 2 telefonate/email</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4">4 ore o più</td>
                    <td className="p-4">&gt; 3.500 km</td>
                    <td className="p-4">Pasti, bevande, 2 telefonate/email</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 rounded-bl-lg">Notte in aeroporto</td>
                    <td className="p-4">Qualsiasi</td>
                    <td className="p-4 rounded-br-lg">Hotel + trasferimento</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Questa assistenza è <strong>separata e aggiuntiva</strong> rispetto al risarcimento monetario.
              Puoi chiedere entrambi.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Come Richiedere il Risarcimento: 4 Passi
            </h2>

            <div className="bg-gray-50 rounded-2xl p-8 my-8">
              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    title: "Verifica i requisiti",
                    desc: "Controlla che il ritardo all'arrivo sia ≥3 ore e che il volo rientri nel campo di applicazione del CE 261/2004 (partenza da aeroporto UE o compagnia UE in arrivo)."
                  },
                  {
                    num: 2,
                    title: "Raccogli i documenti",
                    desc: "Boarding pass (fisico o digitale), conferma di prenotazione, screenshot del tabellone, certificato di ritardo se rilasciato dalla compagnia, scontrini di eventuali spese sostenute."
                  },
                  {
                    num: 3,
                    title: "Presenta il reclamo",
                    desc: "Invia richiesta formale via email o modulo online alla compagnia, oppure usa ClaimWinger per gestire tutto automaticamente, aumentando le probabilità di successo."
                  },
                  {
                    num: 4,
                    title: "Escalation se necessario",
                    desc: "Se la compagnia rifiuta o non risponde entro 6-8 settimane, puoi contattare l'ENAC (Ente Nazionale per l'Aviazione Civile) o procedere legalmente tramite una società specializzata."
                  }
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Per una guida dettagliata consulta:{" "}
              <Link href="/it/blog/come-presentare-reclamo-guida-completa" className="text-blue-600 hover:underline font-semibold">
                Come presentare reclamo — guida completa passo a passo
              </Link>.
            </p>

            {/* CTA 2 — prima della sezione FAQ */}
            <div className="my-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">Stai Perdendo il Tuo Risarcimento?</h3>
                <p className="text-green-100 mb-6 text-lg">
                  L'<strong className="text-white">80% dei passeggeri</strong> con diritto al risarcimento non lo
                  richiede mai. Non lasciare fino a <strong className="text-white">€600</strong> sul tavolo:
                  ClaimWinger gestisce tutto al posto tuo.
                </p>
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=cta2&utm_campaign=ore-ritardo"
                  className="inline-flex items-center bg-white text-green-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Richiedi il Risarcimento Ora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <p className="text-green-200 text-sm mt-4">
                  ✓ Nessun costo anticipato &nbsp;•&nbsp; ✓ Paghi solo se vinciamo &nbsp;•&nbsp; ✓ 3 minuti per iniziare
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mt-12 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Domande Frequenti (FAQ)</h2>

              <div className="space-y-4">
                <details className="bg-white p-6 rounded-xl border border-gray-200 group">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center list-none">
                    <span>Da quante ore di ritardo ho diritto al risarcimento volo?</span>
                    <span className="text-blue-600 text-xl font-light ml-4">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Hai diritto al risarcimento quando il tuo volo arriva a destinazione con <strong>3 ore o più</strong> di
                    ritardo rispetto all'orario previsto. Questa soglia è stabilita dal Regolamento europeo CE 261/2004 e vale
                    per tutti i voli in partenza da aeroporti UE e per i voli verso l'UE operati da compagnie europee.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center list-none">
                    <span>Quanto spetta per un volo in ritardo di 3 ore?</span>
                    <span className="text-blue-600 text-xl font-light ml-4">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Per un volo in ritardo di 3 ore: <strong>€250</strong> per distanze fino a 1.500 km, <strong>€400</strong>
                    per distanze tra 1.500 e 3.500 km, e <strong>€600</strong> (o €300 ridotto) per distanze superiori a 3.500 km.
                    L'importo dipende dalla distanza, non dal prezzo del biglietto.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center list-none">
                    <span>Come si calcolano le ore di ritardo?</span>
                    <span className="text-blue-600 text-xl font-light ml-4">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Il ritardo si calcola tra l'orario di arrivo previsto sul biglietto e l'orario in cui <strong>almeno una
                    porta dell'aereo viene aperta</strong> a destinazione. NON conta l'atterraggio, ma l'apertura porta.
                    Il ritardo alla partenza è irrilevante: conta solo il ritardo all'arrivo.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center list-none">
                    <span>Se il volo parte in ritardo ma arriva in orario, ho diritto al risarcimento?</span>
                    <span className="text-blue-600 text-xl font-light ml-4">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    No. Conta solo il ritardo all'arrivo. Se l'aereo parte tardi ma il pilota recupera in volo e arrivi con
                    meno di 3 ore di ritardo, non hai diritto al risarcimento. Tuttavia, se il ritardo alla partenza supera
                    2 ore, hai comunque diritto all'assistenza (pasti, bevande).
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center list-none">
                    <span>Il risarcimento è automatico o devo richiederlo?</span>
                    <span className="text-blue-600 text-xl font-light ml-4">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Non è automatico: devi richiederlo attivamente. Le compagnie aeree non pagano spontaneamente.
                    Hai generalmente 2 anni in Italia per presentare il reclamo. Puoi farlo direttamente alla compagnia
                    oppure tramite una società specializzata come{" "}
                    <Link href="https://claimwinger.com/it/come-funziona" className="text-blue-600 hover:underline">
                      ClaimWinger
                    </Link>.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center list-none">
                    <span>Posso chiedere risarcimento per voli già avvenuti anni fa?</span>
                    <span className="text-blue-600 text-xl font-light ml-4">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Sì, in molti casi. In Italia il termine di prescrizione è di <strong>2 anni</strong> dalla data del volo.
                    In altri paesi UE può arrivare fino a 6 anni (es. Polonia). Verifica sempre il termine applicabile
                    in base al paese di partenza del volo.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center list-none">
                    <span>Il risarcimento si riduce se il ritardo è tra 3 e 4 ore?</span>
                    <span className="text-blue-600 text-xl font-light ml-4">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Solo per voli extra-UE di oltre 3.500 km. In quel caso, se il ritardo è tra 3 e 4 ore, la compagnia
                    può ridurre il risarcimento del 50% (€300 invece di €600). Per voli intra-UE o ritardi superiori a
                    4 ore, spetta sempre l'importo pieno.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center list-none">
                    <span>Cosa succede se perdo la coincidenza per colpa del ritardo?</span>
                    <span className="text-blue-600 text-xl font-light ml-4">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Se i voli sono sulla stessa prenotazione e arrivi alla destinazione finale con 3 o più ore di ritardo,
                    hai diritto al risarcimento calcolato sulla <strong>distanza totale</strong>. Se invece hai prenotazioni
                    separate, il diritto si valuta per ciascun volo individualmente.
                  </p>
                </details>
              </div>
            </section>

            {/* Articoli Correlati */}
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articoli Correlati</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link
                  href="/it/blog/ritardo-3-ore-regola-risarcimento"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">La Regola delle 3 Ore Spiegata</h3>
                  <p className="text-sm text-gray-600">Perché 3 ore e come si calcola il ritardo in ogni scenario</p>
                </Link>

                <Link
                  href="/it/blog/regolamento-ce-261-2004-spiegato"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">Regolamento CE 261/2004</h3>
                  <p className="text-sm text-gray-600">Guida completa ai diritti dei passeggeri europei</p>
                </Link>

                <Link
                  href="/it/blog/come-presentare-reclamo-guida-completa"
                  className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">Come Presentare Reclamo</h3>
                  <p className="text-sm text-gray-600">Procedura passo-passo per ottenere il risarcimento</p>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>
    </LayoutIt>
  );
}
