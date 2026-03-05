import { LayoutIt } from "@/components/LayoutIt";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle2, XCircle, Info, Plane, Calendar, FileText } from "lucide-react";

export default function CircostanzeStraordinarieSpiegate() {
  return (
    <LayoutIt>
      <SEO
        title="Circostanze Straordinarie: Quando NON Spetta il Risarcimento Volo"
        description="Scopri cosa sono le circostanze straordinarie secondo il Regolamento CE 261/2004 e quando la compagnia aerea può rifiutare legalmente il risarcimento."
        url="https://lotproblem.pl/it/blog/circostanze-straordinarie-spiegate"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Circostanze Straordinarie: Quando NON Spetta il Risarcimento Volo",
            "description": "Guida completa alle circostanze straordinarie nel diritto aereo europeo",
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
            "datePublished": "2026-03-05",
            "dateModified": "2026-03-05",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://lotproblem.pl/it/blog/circostanze-straordinarie-spiegate"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Cosa sono le circostanze straordinarie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le circostanze straordinarie sono eventi imprevedibili e inevitabili che esonerano la compagnia aerea dall'obbligo di pagare il risarcimento. Devono essere al di fuori del controllo della compagnia e impossibili da evitare anche con tutte le misure ragionevoli."
                }
              },
              {
                "@type": "Question",
                "name": "Il maltempo è sempre considerato circostanza straordinaria?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Solo condizioni meteorologiche eccezionali (uragani, tornado, tempeste violente) sono considerate straordinarie. Pioggia normale, nebbia leggera o vento moderato NON sono circostanze straordinarie e danno diritto al risarcimento."
                }
              },
              {
                "@type": "Question",
                "name": "Uno sciopero dei controllori di volo dà diritto al risarcimento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sì. Gli scioperi del personale aeroportuale o dei controllori di volo sono circostanze straordinarie, ma gli scioperi del personale della compagnia aerea stessa NON lo sono. Se Ryanair o Wizz Air fanno sciopero, hai diritto al risarcimento."
                }
              },
              {
                "@type": "Question",
                "name": "Come posso verificare se la compagnia sta mentendo sulle circostanze straordinarie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Richiedi la documentazione ufficiale che provi l'evento straordinario: report meteorologici METAR/TAF, comunicazioni ATC, documenti tecnici. La compagnia ha l'onere della prova. Se rifiuta di fornire prove, probabilmente sta mentendo."
                }
              },
              {
                "@type": "Question",
                "name": "Un problema tecnico può essere circostanza straordinaria?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Raramente. Solo difetti di fabbricazione nascosti o danni causati da sabotaggio/terrorismo sono straordinari. La manutenzione ordinaria, l'usura normale e i guasti prevedibili NON sono circostanze straordinarie."
                }
              },
              {
                "@type": "Question",
                "name": "La compagnia deve comunque fornire assistenza durante circostanze straordinarie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sì, assolutamente. Anche se le circostanze straordinarie esonerano dal pagamento del risarcimento monetario, la compagnia deve comunque fornire pasti, bevande, hotel e trasporto secondo il Regolamento CE 261/2004."
                }
              },
              {
                "@type": "Question",
                "name": "Cosa devo fare se la compagnia rifiuta il risarcimento citando circostanze straordinarie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1) Richiedi per iscritto le prove documentali dell'evento straordinario 2) Verifica i dati meteorologici e di volo pubblici 3) Se la motivazione è debole, insisti sul tuo diritto 4) Considera l'assistenza legale specializzata se necessario."
                }
              },
              {
                "@type": "Question",
                "name": "Quanto tempo ha la compagnia per rispondere sulla richiesta di risarcimento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non c'è un termine legale specifico nel CE 261/2004, ma le normative nazionali generalmente richiedono una risposta entro 6-8 settimane. Se la compagnia non risponde o rifiuta ingiustamente, puoi rivolgerti all'autorità nazionale o procedere legalmente."
                }
              }
            ]
          })
        }}
      />

      <article className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/it" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/it/blog" className="hover:text-blue-600">Blog</Link>
            <span className="mx-2">/</span>
            <span>Circostanze Straordinarie</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime="2026-03-05">5 marzo 2026</time>
              <span className="mx-2">•</span>
              <span>10 min di lettura</span>
              <span className="mx-2">•</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                Regolamenti
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Circostanze Straordinarie: Quando la Compagnia Aerea NON Deve Pagare
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Scopri cosa sono veramente le circostanze straordinarie secondo il Regolamento CE 261/2004, 
              quando si applicano e come verificare se la compagnia sta usando questa scusa illegittimamente.
            </p>
          </header>

          {/* Alert Box */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-12">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Attenzione alle Scuse False</h3>
                <p className="text-amber-800">
                  Molte compagnie aeree abusano del concetto di "circostanze straordinarie" per evitare 
                  di pagare risarcimenti legittimi. Circa il <strong>65% delle richieste rifiutate</strong> per 
                  questo motivo sono in realtà illegittime. Questa guida ti aiuterà a difenderti.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Info className="h-8 w-8 text-blue-600" />
              Cosa Sono Esattamente le Circostanze Straordinarie?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Secondo l'<strong>articolo 5(3) del Regolamento CE 261/2004</strong>, le circostanze straordinarie sono 
              eventi che soddisfano TUTTI questi criteri contemporaneamente:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <ol className="space-y-4 text-gray-800">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-lg">1.</span>
                  <span><strong>Imprevedibili:</strong> L'evento non poteva essere ragionevolmente anticipato</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-lg">2.</span>
                  <span><strong>Inevitabili:</strong> Anche adottando tutte le misure ragionevoli, l'evento non poteva essere evitato</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-lg">3.</span>
                  <span><strong>Fuori dal controllo:</strong> La compagnia aerea non aveva alcun potere di impedire l'evento</span>
                </li>
              </ol>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Se anche <strong>uno solo</strong> di questi criteri non è soddisfatto, NON si tratta di circostanze 
              straordinarie e hai <strong>diritto al risarcimento completo</strong>.
            </p>

            {/* CTA 1 */}
            <div className="my-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">La Tua Compagnia Ha Rifiutato il Risarcimento?</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Verifica gratuitamente in 2 minuti se il rifiuto è legittimo o se hai diritto alla compensazione.
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=extraordinary_circumstances"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Verifica il Tuo Diritto Ora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
              Esempi Reali di Circostanze Straordinarie Valide
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Questi sono casi in cui la compagnia aerea è effettivamente esonerata dal pagamento del risarcimento:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="font-bold text-green-900 mb-2">✅ Condizioni Meteorologiche Eccezionali</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>• Uragani, cicloni, tornado</li>
                  <li>• Tempeste violente con venti &gt;100 km/h</li>
                  <li>• Nevicate eccezionali che bloccano l'aeroporto</li>
                  <li>• Eruzioni vulcaniche (es. Eyjafjallajökull 2010)</li>
                  <li>• Fulmini che colpiscono direttamente l'aereo</li>
                </ul>
                <p className="text-sm text-green-800 mt-3 italic">
                  <strong>Nota:</strong> La pioggia normale, la nebbia leggera o il vento moderato NON sono circostanze straordinarie.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="font-bold text-green-900 mb-2">✅ Restrizioni di Sicurezza e Controllo del Traffico Aereo</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>• Scioperi dei controllori di volo (ATC)</li>
                  <li>• Chiusura dello spazio aereo per motivi di sicurezza nazionale</li>
                  <li>• Restrizioni imposte dalle autorità aeroportuali</li>
                  <li>• Guasti ai sistemi di navigazione aeroportuale</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="font-bold text-green-900 mb-2">✅ Rischi per la Sicurezza</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>• Minacce terroristiche credibili</li>
                  <li>• Sabotaggio dell'aeromobile</li>
                  <li>• Passeggero violento che causa evacuazione</li>
                  <li>• Scoperta di oggetti pericolosi a bordo</li>
                  <li>• Bird strike (impatto con uccelli) grave e imprevedibile</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="font-bold text-green-900 mb-2">✅ Problemi Tecnici Imprevedibili</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>• Difetti di fabbricazione nascosti non rilevabili</li>
                  <li>• Danni causati da sabotaggio</li>
                  <li>• Rottura improvvisa di componenti critici senza preavviso</li>
                </ul>
                <p className="text-sm text-green-800 mt-3 italic">
                  <strong>Importante:</strong> La normale manutenzione e i guasti prevedibili NON sono circostanze straordinarie.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <XCircle className="h-8 w-8 text-red-600" />
              Casi NON Considerati Circostanze Straordinarie
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Questi sono i casi più comuni in cui le compagnie aeree <strong>cercano di rifiutare illegittimamente</strong> 
              il risarcimento. Se ti è successo uno di questi, <strong>hai diritto alla compensazione</strong>:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">❌ Problemi Tecnici Ordinari</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>• Guasti meccanici durante la manutenzione di routine</li>
                  <li>• Usura normale dei componenti</li>
                  <li>• Problemi al motore prevedibili</li>
                  <li>• Malfunzionamenti del sistema informatico della compagnia</li>
                  <li>• Mancanza di pezzi di ricambio</li>
                </ul>
                <div className="mt-4 bg-red-100 p-4 rounded-lg">
                  <p className="text-sm text-red-900">
                    <strong>Sentenza della Corte di Giustizia UE (C-549/07):</strong> I problemi tecnici fanno parte 
                    della normale gestione di una compagnia aerea e NON costituiscono circostanze straordinarie, 
                    salvo casi eccezionali di difetti nascosti del produttore.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">❌ Scioperi del Personale della Compagnia</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>• Sciopero dei piloti della compagnia</li>
                  <li>• Sciopero degli assistenti di volo</li>
                  <li>• Sciopero del personale di terra della compagnia</li>
                  <li>• Controversie sindacali interne</li>
                </ul>
                <p className="text-sm text-red-900 mt-3">
                  <strong>Differenza chiave:</strong> Gli scioperi del personale della compagnia NON sono circostanze 
                  straordinarie. Solo gli scioperi esterni (ATC, aeroporto) lo sono.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">❌ Problemi Operativi della Compagnia</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>• Ritardi precedenti che causano effetto domino</li>
                  <li>• Mancanza di equipaggio disponibile</li>
                  <li>• Overbooking (vendita eccessiva di biglietti)</li>
                  <li>• Riorganizzazione dei voli per motivi commerciali</li>
                  <li>• Cancellazione per basso numero di passeggeri</li>
                  <li>• Problemi di pianificazione operativa</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">❌ Condizioni Meteorologiche Normali</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>• Pioggia normale o leggera</li>
                  <li>• Nebbia leggera (visibilità sufficiente per volare)</li>
                  <li>• Vento moderato (sotto i limiti operativi)</li>
                  <li>• Neve leggera gestibile</li>
                  <li>• Temperature estreme ma previste stagionalmente</li>
                </ul>
                <p className="text-sm text-red-900 mt-3">
                  <strong>Regola pratica:</strong> Se altri voli sono riusciti a decollare/atterrare in condizioni simili, 
                  non si tratta di circostanze straordinarie.
                </p>
              </div>
            </div>

            {/* CTA 2 */}
            <div className="my-12 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ti Hanno Rifiutato per un "Problema Tecnico"?</h3>
              <p className="text-green-100 mb-6 text-lg">
                Nel 70% dei casi, i problemi tecnici NON sono circostanze straordinarie valide. Verifica subito il tuo caso.
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=technical_issues"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
              >
                Controlla la Tua Situazione
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              Come Verificare se la Compagnia Sta Dicendo la Verità
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Le compagnie aeree hanno l'<strong>onere della prova</strong>: devono dimostrare documentalmente 
              l'esistenza delle circostanze straordinarie. Ecco come verificare:
            </p>

            <div className="bg-gray-50 p-6 rounded-xl my-8">
              <h3 className="font-bold text-gray-900 mb-4">📋 Checklist di Verifica</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Richiedi Documentazione Scritta</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Chiedi alla compagnia di fornire per iscritto le prove dell'evento straordinario: 
                      report meteorologici METAR/TAF, comunicazioni ATC, documenti tecnici certificati.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Controlla i Dati Meteorologici Pubblici</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Verifica su <strong>aviationweather.gov</strong> o <strong>ogimet.com</strong> le condizioni meteo 
                      reali al momento del volo. Se erano normali, la compagnia sta mentendo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Verifica Altri Voli</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Controlla su <strong>FlightRadar24</strong> se altri voli sono decollati/atterrati nello stesso 
                      orario. Se sì, non c'erano condizioni straordinarie.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Analizza la Risposta della Compagnia</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Se la risposta è vaga ("motivi tecnici", "maltempo") senza dettagli specifici, è molto 
                      probabilmente una scusa illegittima.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Controlla la Storia dell'Aeromobile</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Se il problema tecnico era "improvviso", verifica se lo stesso aereo ha avuto guasti simili 
                      nei giorni precedenti. Questo indica manutenzione inadeguata, non circostanze straordinarie.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Plane className="h-8 w-8 text-blue-600" />
              Casi Limite e Giurisprudenza Importante
            </h2>

            <div className="space-y-6 my-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-blue-900 mb-2">⚖️ Sentenza C-549/07 (Wallentin-Hermann)</h3>
                <p className="text-gray-800 mb-3">
                  La Corte di Giustizia UE ha stabilito che un guasto al motore causato da difetto di fabbricazione 
                  NON rilevabile con ispezioni di routine può essere considerato circostanza straordinaria.
                </p>
                <p className="text-sm text-blue-900 italic">
                  <strong>Implicazione:</strong> La compagnia deve provare che il difetto era veramente nascosto e 
                  non rilevabile. La semplice affermazione non basta.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-blue-900 mb-2">⚖️ Sentenza C-396/06 (Reimers)</h3>
                <p className="text-gray-800 mb-3">
                  Un ritardo causato dalla collisione dell'aereo con un oggetto sulla pista durante un volo precedente 
                  può essere circostanza straordinaria, MA solo se l'oggetto era imprevedibile e inevitabile.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-blue-900 mb-2">⚖️ Sentenza C-294/10 (Eglitis e Ratnieks)</h3>
                <p className="text-gray-800 mb-3">
                  Lo sciopero del personale della compagnia aerea (piloti, assistenti di volo) NON è circostanza 
                  straordinaria, anche se improvviso ("wildcat strike").
                </p>
                <p className="text-sm text-blue-900 italic">
                  <strong>Regola:</strong> La compagnia è responsabile delle azioni del proprio personale.
                </p>
              </div>
            </div>

            {/* CTA 3 */}
            <div className="my-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Hai Dubbi sul Rifiuto della Compagnia?</h3>
              <p className="text-purple-100 mb-6 text-lg">
                I nostri esperti legali analizzano gratuitamente il tuo caso e ti dicono se il rifiuto è legittimo 
                o se puoi ottenere il risarcimento.
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=legal_review"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl"
              >
                Analisi Gratuita del Caso
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Assistenza Obbligatoria Anche Durante Circostanze Straordinarie
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Punto fondamentale:</strong> Anche se le circostanze straordinarie esonerano la compagnia 
              dal pagamento del risarcimento monetario (€250-€600), la compagnia è <strong>comunque obbligata</strong> 
              a fornire assistenza secondo l'articolo 9 del CE 261/2004:
            </p>

            <div className="bg-blue-50 p-6 rounded-xl my-8">
              <h3 className="font-bold text-blue-900 mb-4">Diritti Garantiti in Ogni Caso</h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Pasti e bevande:</strong> In proporzione al tempo di attesa</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Sistemazione in hotel:</strong> Se necessario pernottamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Trasporto:</strong> Tra aeroporto e hotel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Comunicazioni:</strong> 2 telefonate, email o fax</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Riprotezione:</strong> Su volo alternativo il prima possibile o rimborso completo</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Se la compagnia nega anche l'assistenza citando circostanze straordinarie, sta violando la legge. 
              Puoi richiedere il rimborso delle spese sostenute autonomamente (conserva tutti gli scontrini!).
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Cosa Fare se la Compagnia Rifiuta Ingiustamente
            </h2>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl my-8">
              <h3 className="font-bold text-gray-900 mb-4">Piano d'Azione Step-by-Step</h3>
              
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Richiedi Motivazione Dettagliata</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Invia una raccomandata o PEC chiedendo le prove documentali specifiche dell'evento straordinario 
                      (non accettare risposte generiche).
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Raccogli Prove Indipendenti</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Ottieni report meteorologici, screenshot di FlightRadar24, testimonianze di altri passeggeri, 
                      foto/video dell'aeroporto.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contatta l'Autorità Nazionale</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      In Italia: <strong>ENAC</strong> (Ente Nazionale Aviazione Civile). Presenta reclamo formale 
                      con tutta la documentazione.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Considera l'Azione Legale</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Se la compagnia persiste nel rifiuto illegittimo, puoi procedere con causa civile o affidare 
                      il caso a società specializzate nel recupero crediti aeronautici.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* CTA 4 - Final */}
            <div className="my-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Non Lasciarti Ingannare dalle Compagnie Aeree</h3>
                <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                  Il 65% delle richieste rifiutate per "circostanze straordinarie" sono illegittime. 
                  Verifica gratuitamente il tuo caso e ottieni l'assistenza di esperti legali specializzati.
                </p>
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=final_cta_extraordinary"
                  className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
                >
                  Verifica Gratuitamente il Tuo Diritto
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
                <p className="text-blue-200 text-sm mt-4">
                  ✓ Nessun pagamento anticipato • ✓ Paghi solo in caso di successo • ✓ Risposta in 24 ore
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mt-16 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Domande Frequenti (FAQ)</h2>
              
              <div className="space-y-6">
                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Cosa sono le circostanze straordinarie?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Le circostanze straordinarie sono eventi imprevedibili e inevitabili che esonerano la compagnia 
                    aerea dall'obbligo di pagare il risarcimento. Devono essere al di fuori del controllo della 
                    compagnia e impossibili da evitare anche con tutte le misure ragionevoli.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Il maltempo è sempre considerato circostanza straordinaria?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    No. Solo condizioni meteorologiche eccezionali (uragani, tornado, tempeste violente) sono 
                    considerate straordinarie. Pioggia normale, nebbia leggera o vento moderato NON sono circostanze 
                    straordinarie e danno diritto al risarcimento.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Uno sciopero dei controllori di volo dà diritto al risarcimento?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Gli scioperi del personale aeroportuale o dei controllori di volo SONO circostanze straordinarie 
                    e non danno diritto al risarcimento. Tuttavia, gli scioperi del personale della compagnia aerea 
                    stessa (piloti, assistenti di volo) NON lo sono e danno diritto alla compensazione.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Come posso verificare se la compagnia sta mentendo sulle circostanze straordinarie?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Richiedi la documentazione ufficiale che provi l'evento straordinario: report meteorologici 
                    METAR/TAF, comunicazioni ATC, documenti tecnici. Controlla i dati meteo pubblici 
                    (aviationweather.gov) e verifica se altri voli sono partiti nello stesso orario su FlightRadar24. 
                    La compagnia ha l'onere della prova.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Un problema tecnico può essere circostanza straordinaria?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Raramente. Solo difetti di fabbricazione nascosti o danni causati da sabotaggio/terrorismo sono 
                    straordinari. La manutenzione ordinaria, l'usura normale e i guasti prevedibili NON sono 
                    circostanze straordinarie secondo la sentenza C-549/07 della Corte di Giustizia UE.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    La compagnia deve comunque fornire assistenza durante circostanze straordinarie?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Sì, assolutamente. Anche se le circostanze straordinarie esonerano dal pagamento del risarcimento 
                    monetario, la compagnia deve comunque fornire pasti, bevande, hotel, trasporto e comunicazioni 
                    secondo l'articolo 9 del Regolamento CE 261/2004.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Cosa devo fare se la compagnia rifiuta il risarcimento citando circostanze straordinarie?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    1) Richiedi per iscritto le prove documentali dell'evento straordinario 2) Verifica i dati 
                    meteorologici e di volo pubblici 3) Se la motivazione è debole, insisti sul tuo diritto 
                    4) Contatta l'ENAC o considera l'assistenza legale specializzata.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Quanto tempo ha la compagnia per rispondere sulla richiesta di risarcimento?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Non c'è un termine legale specifico nel CE 261/2004, ma le normative nazionali generalmente 
                    richiedono una risposta entro 6-8 settimane. Se la compagnia non risponde o rifiuta ingiustamente, 
                    puoi rivolgerti all'ENAC o procedere con azione legale.
                  </p>
                </details>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articoli Correlati</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/it/blog/regolamento-ce-261-2004-spiegato" 
                      className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Regolamento CE 261/2004 Spiegato</h3>
                  <p className="text-sm text-gray-600">Guida completa ai tuoi diritti come passeggero</p>
                </Link>

                <Link href="/it/blog/come-presentare-reclamo-guida-completa" 
                      className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Come Presentare un Reclamo</h3>
                  <p className="text-sm text-gray-600">Procedura passo dopo passo per ottenere il risarcimento</p>
                </Link>

                <Link href="/it/blog/ryanair-italia-risarcimento" 
                      className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Ryanair Italia: Risarcimento</h3>
                  <p className="text-sm text-gray-600">Guida specifica per voli Ryanair</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </LayoutIt>
  );
}