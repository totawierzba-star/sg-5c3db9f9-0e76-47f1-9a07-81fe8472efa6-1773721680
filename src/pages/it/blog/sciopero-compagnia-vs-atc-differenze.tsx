import { LayoutIt } from "@/components/LayoutIt";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Users, CheckCircle2, XCircle, Scale, Plane } from "lucide-react";

export default function ScioperoCompagniaVsATCDifferenze() {
  return (
    <LayoutIt>
      <SEO
        title="Sciopero Compagnia Aerea vs Sciopero ATC: Chi Paga il Risarcimento?"
        description="Scopri le differenze cruciali tra sciopero del personale della compagnia e sciopero dei controllori di volo. Quando hai diritto al risarcimento?"
        url="https://lotproblem.pl/it/blog/sciopero-compagnia-vs-atc-differenze"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Sciopero Compagnia Aerea vs Sciopero ATC: Differenze per il Risarcimento",
            "description": "Guida alle differenze tra scioperi interni ed esterni per i diritti al risarcimento",
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
              "@id": "https://lotproblem.pl/it/blog/sciopero-compagnia-vs-atc-differenze"
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
                "name": "Qual è la differenza tra sciopero della compagnia e sciopero ATC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sciopero della compagnia: personale interno (piloti, assistenti di volo, ground staff) della compagnia aerea stessa. Sciopero ATC: controllori del traffico aereo, personale aeroportuale, o servizi esterni alla compagnia. Questa distinzione è cruciale: il primo NON è circostanza straordinaria, il secondo SÌ."
                }
              },
              {
                "@type": "Question",
                "name": "Se Ryanair o Wizz Air fanno sciopero, ho diritto al risarcimento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sì, assolutamente. Gli scioperi del personale della compagnia aerea (piloti, cabin crew, personale di terra della compagnia) NON sono circostanze straordinarie secondo la sentenza C-294/10 della Corte UE. Hai pieno diritto al risarcimento €250-600 + assistenza."
                }
              },
              {
                "@type": "Question",
                "name": "Lo sciopero dei controllori di volo è circostanza straordinaria?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sì. Gli scioperi del personale ATC (Air Traffic Control), security aeroportuale, o servizi esterni sono considerati circostanze straordinarie. La compagnia NON deve pagare il risarcimento, MA deve comunque fornire assistenza (pasti, hotel, volo alternativo)."
                }
              },
              {
                "@type": "Question",
                "name": "Come faccio a sapere chi ha scioperato?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Controlla: 1) Comunicazioni ufficiali dell'aeroporto o ENAC, 2) Notizie stampa del giorno, 3) Social media della compagnia/aeroporto, 4) Chiedi documento scritto alla compagnia con motivo specifico. Se la compagnia dice genericamente 'sciopero' senza specificare chi, probabilmente è sciopero interno."
                }
              },
              {
                "@type": "Question",
                "name": "La compagnia può mentire sul tipo di sciopero?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Purtroppo sì, alcune lo fanno. Dicono 'sciopero ATC' quando in realtà è sciopero del loro personale. Verifica sempre: controlla notizie indipendenti, siti ENAC/Eurocontrol, e chiedi prove documentali. Se mentono e hai prove, puoi segnalare all'autorità nazionale."
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
            <span>Sciopero: Differenze</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Users className="h-4 w-4" />
              <time dateTime="2026-03-05">5 marzo 2026</time>
              <span className="mx-2">•</span>
              <span>13 min di lettura</span>
              <span className="mx-2">•</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                Regolamenti
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Sciopero Compagnia Aerea vs Sciopero ATC: Chi Deve Pagare?
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              La tua compagnia ha cancellato il volo citando "sciopero"? Scopri la differenza cruciale tra scioperi 
              interni ed esterni che determina se hai diritto ai €250-600 di risarcimento o solo all'assistenza.
            </p>
          </header>

          {/* Alert Box */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-12">
            <div className="flex items-start gap-3">
              <Scale className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-orange-900 mb-2">Distinzione Legale Fondamentale</h3>
                <p className="text-orange-800">
                  <strong>Sciopero INTERNO</strong> (personale compagnia) = <span className="text-green-700 font-bold">Hai diritto al risarcimento</span><br/>
                  <strong>Sciopero ESTERNO</strong> (ATC, aeroporto) = <span className="text-red-700 font-bold">Nessun risarcimento, solo assistenza</span>
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-blue-600" />
              La Distinzione Legale: Interno vs Esterno
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Il <strong>Regolamento CE 261/2004</strong> e la giurisprudenza della Corte di Giustizia UE hanno 
              stabilito una distinzione chiara ma spesso confusa dai passeggeri:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6" />
                  Sciopero INTERNO = Risarcimento
                </h3>
                <p className="text-sm text-gray-800 mb-4">
                  Personale della compagnia aerea stessa:
                </p>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>✅ Piloti della compagnia</li>
                  <li>✅ Assistenti di volo (cabin crew)</li>
                  <li>✅ Personale di terra della compagnia</li>
                  <li>✅ Ingegneri/meccanici della compagnia</li>
                  <li>✅ Check-in staff diretto della compagnia</li>
                </ul>
                <div className="mt-4 bg-green-100 p-3 rounded-lg">
                  <p className="text-xs text-green-900 font-semibold">
                    → Diritto PIENO: €250-600 + assistenza + rimborso/riprotezione
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <XCircle className="h-6 w-6" />
                  Sciopero ESTERNO = Solo Assistenza
                </h3>
                <p className="text-sm text-gray-800 mb-4">
                  Enti esterni alla compagnia:
                </p>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>❌ Controllori del traffico aereo (ATC/ENAV)</li>
                  <li>❌ Security aeroportuale</li>
                  <li>❌ Personale handling aeroportuale</li>
                  <li>❌ Personale pulizia aeroporto</li>
                  <li>❌ Servizi bagagli aeroportuali</li>
                </ul>
                <div className="mt-4 bg-red-100 p-3 rounded-lg">
                  <p className="text-xs text-red-900 font-semibold">
                    → SOLO assistenza: pasti, hotel, riprotezione. Nessun risarcimento monetario.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="font-bold text-blue-900 mb-3">⚖️ Fondamento Giuridico</h3>
              <p className="text-gray-800 text-sm mb-3">
                <strong>Sentenza C-294/10 (Eglitis e Ratnieks):</strong> La Corte di Giustizia UE ha stabilito 
                che gli scioperi del personale della compagnia aerea NON costituiscono circostanze straordinarie 
                perché la compagnia ha il controllo diretto sulle condizioni di lavoro e sulle relazioni sindacali 
                con i propri dipendenti.
              </p>
              <p className="text-sm text-blue-900 italic">
                "La compagnia aerea è parte nelle relazioni di lavoro con i propri dipendenti e quindi ha 
                responsabilità diretta sugli scioperi interni."
              </p>
            </div>

            {/* CTA 1 */}
            <div className="my-12 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Il Tuo Volo è Stato Cancellato per Sciopero?</h3>
              <p className="text-green-100 mb-6 text-lg">
                Verifica gratuitamente se si tratta di sciopero interno (hai diritto a €250-600) o esterno 
                (solo assistenza). Analisi in 2 minuti.
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=strike_verification"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
              >
                Verifica Tipo di Sciopero
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Plane className="h-8 w-8 text-orange-600" />
              Casi Reali: Compagnie Specifiche
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Vediamo esempi concreti con le principali compagnie aeree per capire quando hai diritto al risarcimento:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-bold">
                    RYANAIR
                  </div>
                  <span className="text-sm text-gray-600">Esempio</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-900 mb-2">✅ HAI DIRITTO AL RISARCIMENTO:</p>
                    <p className="text-sm text-gray-800">
                      <strong>Sciopero piloti Ryanair (settembre 2018, 2019, 2022):</strong> Gli scioperi del 
                      personale Ryanair sono interni alla compagnia. Hai diritto a €250-600 + assistenza + 
                      rimborso o riprotezione. Ryanair deve pagare.
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="font-semibold text-red-900 mb-2">❌ NESSUN RISARCIMENTO (solo assistenza):</p>
                    <p className="text-sm text-gray-800">
                      <strong>Sciopero controllori di volo italiani (ENAV):</strong> Se il volo Ryanair è 
                      cancellato per sciopero ATC in Italia, è circostanza straordinaria. Hai diritto solo ad 
                      assistenza (pasti, hotel), non al risarcimento monetario.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white rounded-lg px-4 py-2 font-bold">
                    WIZZ AIR
                  </div>
                  <span className="text-sm text-gray-600">Esempio</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-900 mb-2">✅ HAI DIRITTO AL RISARCIMENTO:</p>
                    <p className="text-sm text-gray-800">
                      <strong>Sciopero cabin crew Wizz Air (2022-2023):</strong> Scioperi degli assistenti di 
                      volo Wizz Air in Italia, Spagna, Portogallo = sciopero interno. Pieno diritto al risarcimento.
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="font-semibold text-red-900 mb-2">❌ NESSUN RISARCIMENTO (solo assistenza):</p>
                    <p className="text-sm text-gray-800">
                      <strong>Sciopero generale aeroporti Francia:</strong> Se tutto l'aeroporto (non solo Wizz) 
                      è bloccato da sciopero di servizi aeroportuali esterni, è circostanza straordinaria.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-600 text-white rounded-lg px-4 py-2 font-bold">
                    ITA AIRWAYS
                  </div>
                  <span className="text-sm text-gray-600">Esempio</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-900 mb-2">✅ HAI DIRITTO AL RISARCIMENTO:</p>
                    <p className="text-sm text-gray-800">
                      <strong>Sciopero piloti/assistenti ITA Airways:</strong> Qualsiasi sciopero del personale 
                      diretto di ITA (ex Alitalia) è interno. Hai pieno diritto al risarcimento €250-600.
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="font-semibold text-red-900 mb-2">❌ NESSUN RISARCIMENTO (solo assistenza):</p>
                    <p className="text-sm text-gray-800">
                      <strong>Sciopero ENAV (controllori volo Italia):</strong> Circostanza straordinaria che 
                      colpisce tutte le compagnie. Solo assistenza, nessun risarcimento monetario.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA 2 */}
            <div className="my-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">La Compagnia Ha Detto "Sciopero" Senza Specificare?</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Se la motivazione è vaga, probabilmente è sciopero interno e cercano di evitare di pagare. 
                Verifica con noi gratuitamente.
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=strike_type_unclear"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Analizza il Tuo Caso
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Come Verificare Quale Tipo di Sciopero È Avvenuto
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Le compagnie aeree spesso sono <strong>volutamente vaghe</strong> quando comunicano "sciopero" come 
              causa di cancellazione. Ecco come scoprire la verità:
            </p>

            <div className="bg-gray-50 p-6 rounded-xl my-8">
              <h3 className="font-bold text-gray-900 mb-4">🔍 Metodi di Verifica (Ordine di Affidabilità)</h3>
              
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fonti Ufficiali Indipendenti</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      <strong>ENAC</strong> (www.enac-italia.it) pubblica comunicazioni ufficiali su scioperi ATC/aeroportuali.<br/>
                      <strong>Eurocontrol</strong> (eurocontrol.int) per scioperi ATC europei.<br/>
                      <strong>Notam</strong> (notams.aim.faa.gov) per restrizioni spazio aereo.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Notizie Stampa</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Cerca su Google: "[data] sciopero [compagnia/aeroporto]". Gli scioperi interni delle compagnie 
                      sono sempre ampiamente riportati dai media (preavviso legale obbligatorio).
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Social Media e Comunicati Ufficiali</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Twitter/X della compagnia aerea e dell'aeroporto. Le compagnie di solito annunciano scioperi 
                      interni con giorni di anticipo (obbligo legale di preavviso). Se non c'è comunicazione 
                      anticipata, sospetta.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Documento Scritto dalla Compagnia</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Richiedi per iscritto (email/raccomandata) alla compagnia: "Quale specifico sciopero ha causato 
                      la cancellazione? Di quale organizzazione/sindacato? Data e orario esatto dello sciopero?" 
                      Se evitano di rispondere o sono vaghi, è sospetto.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    5
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Verifica Altri Voli</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Controlla su FlightRadar24 se altri voli della stessa compagnia sono partiti normalmente 
                      nello stesso giorno/orario. Se solo alcuni voli sono stati cancellati, probabilmente è 
                      sciopero interno (non tutti i piloti/crew aderiscono).
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <h3 className="font-semibold text-red-900 mb-2">🚨 Red Flags: Quando la Compagnia Sta Mentendo</h3>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>• La compagnia dice "sciopero" ma non specifica chi ha scioperato</li>
                <li>• Non c'è nessuna notizia di sciopero ATC/aeroportuale sui media</li>
                <li>• Altri voli della stessa compagnia sono partiti normalmente</li>
                <li>• La compagnia rifiuta di fornire documentazione scritta specifica</li>
                <li>• Lo "sciopero" non era stato annunciato in anticipo (gli scioperi legali richiedono preavviso)</li>
              </ul>
              <p className="text-sm text-red-900 mt-3 font-semibold">
                Se noti questi segnali, molto probabilmente è sciopero interno e hai diritto al risarcimento.
              </p>
            </div>

            {/* CTA 3 */}
            <div className="my-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Hai Dubbi sul Tipo di Sciopero?</h3>
              <p className="text-purple-100 mb-6 text-lg">
                Inviaci i dettagli del tuo volo e verificheremo gratuitamente se la compagnia sta cercando 
                di evitare illegittimamente il pagamento.
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=strike_verification_service"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl"
              >
                Verifica Gratuita del Caso
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Cosa Fare Se la Compagnia Rifiuta Illegittimamente
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Se hai verificato che si trattava di sciopero interno ma la compagnia rifiuta di pagare il 
              risarcimento citando "circostanze straordinarie", ecco i passi da seguire:
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl my-8">
              <h3 className="font-bold text-gray-900 mb-4">📋 Piano d'Azione Step-by-Step</h3>
              
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Raccogli Prove del Tipo di Sciopero</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Screenshot di notizie, comunicati ENAC, social media della compagnia che annunciano lo 
                      sciopero interno. Salva tutto in formato PDF con data e ora visibili.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Invia Reclamo Formale Documentato</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Scrivi alla compagnia: "La cancellazione è stata causata da sciopero del vostro personale 
                      interno [allega prove]. Secondo sentenza C-294/10, questo NON è circostanza straordinaria. 
                      Richiedo risarcimento CE 261 + assistenza."
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cita Giurisprudenza Specifica</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Menziona esplicitamente: <strong>Sentenza C-294/10 (Eglitis e Ratnieks)</strong> e 
                      <strong>Sentenza C-195/17 (Krüsemann)</strong> che confermano che scioperi interni non 
                      sono circostanze straordinarie.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Segnala all'ENAC</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Se la compagnia persiste nel rifiuto, presenta reclamo formale all'ENAC (Ente Nazionale 
                      Aviazione Civile) con tutta la documentazione. L'ENAC può sanzionare compagnie che 
                      violano sistematicamente il CE 261.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    5
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Considera Azione Legale o Servizi Specializzati</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Se tutto fallisce, puoi: A) Fare causa in piccole controversie (Giudice di Pace), 
                      B) Affidarti a società di recupero crediti aeronautici (paghi solo se vincono), 
                      C) Procedere con avvocato specializzato.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* CTA 4 - Final */}
            <div className="my-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Non Lasciare che Ti Ingannino con False Scuse</h3>
                <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                  Oltre il 40% delle compagnie aeree tenta di classificare scioperi interni come "circostanze 
                  straordinarie". Proteggi i tuoi diritti con assistenza specializzata.
                </p>
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=final_cta_strike"
                  className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
                >
                  Richiedi Assistenza Legale Gratuita
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
                <p className="text-blue-200 text-sm mt-4">
                  ✓ Verifica tipo sciopero • ✓ Analisi caso gratuita • ✓ Paghi solo se vinciamo
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mt-16 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Domande Frequenti (FAQ)</h2>
              
              <div className="space-y-6">
                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Qual è la differenza tra sciopero della compagnia e sciopero ATC?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Sciopero della compagnia: personale interno (piloti, assistenti di volo, ground staff) della 
                    compagnia aerea stessa. Sciopero ATC: controllori del traffico aereo, personale aeroportuale, 
                    o servizi esterni alla compagnia. Questa distinzione è cruciale: il primo NON è circostanza 
                    straordinaria (hai diritto al risarcimento), il secondo SÌ (solo assistenza).
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Se Ryanair o Wizz Air fanno sciopero, ho diritto al risarcimento?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Sì, assolutamente. Gli scioperi del personale della compagnia aerea (piloti, cabin crew, personale 
                    di terra della compagnia) NON sono circostanze straordinarie secondo la sentenza C-294/10 della 
                    Corte UE. Hai pieno diritto al risarcimento €250-600 + assistenza + rimborso o riprotezione.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Lo sciopero dei controllori di volo è circostanza straordinaria?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Sì. Gli scioperi del personale ATC (Air Traffic Control), security aeroportuale, handling, o altri 
                    servizi esterni alla compagnia sono considerati circostanze straordinarie. La compagnia NON deve 
                    pagare il risarcimento monetario, MA deve comunque fornire assistenza completa (pasti, hotel, volo 
                    alternativo, comunicazioni).
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Come faccio a sapere chi ha scioperato?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Controlla: 1) Comunicazioni ufficiali dell'aeroporto, ENAC o Eurocontrol, 2) Notizie stampa del 
                    giorno (gli scioperi legali sono sempre annunciati), 3) Social media della compagnia/aeroporto, 
                    4) Chiedi documento scritto alla compagnia con motivo specifico e sindacato coinvolto. Se la 
                    compagnia dice genericamente "sciopero" senza specificare chi, probabilmente è sciopero interno e 
                    stanno cercando di evitare di pagare.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    La compagnia può mentire sul tipo di sciopero?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Purtroppo sì, alcune compagnie lo fanno. Dicono "sciopero ATC" quando in realtà è sciopero del loro 
                    personale. Verifica sempre: controlla notizie indipendenti, siti ENAC/Eurocontrol, e chiedi prove 
                    documentali ufficiali. Se mentono e hai prove contrarie, puoi segnalare all'autorità nazionale 
                    (ENAC) e la compagnia rischia sanzioni.
                  </p>
                </details>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articoli Correlati</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/it/blog/circostanze-straordinarie-spiegate" 
                      className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Circostanze Straordinarie</h3>
                  <p className="text-sm text-gray-600">Quando la compagnia può rifiutare il risarcimento</p>
                </Link>

                <Link href="/it/blog/regolamento-ce-261-2004-spiegato" 
                      className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Regolamento CE 261/2004</h3>
                  <p className="text-sm text-gray-600">Guida completa ai diritti dei passeggeri</p>
                </Link>

                <Link href="/it/blog/ryanair-italia-risarcimento" 
                      className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Ryanair Italia: Risarcimento</h3>
                  <p className="text-sm text-gray-600">Come ottenere compensazione da Ryanair</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </LayoutIt>
  );
}