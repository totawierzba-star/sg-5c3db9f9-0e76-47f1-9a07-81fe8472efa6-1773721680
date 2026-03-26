import { LayoutIt } from "@/components/LayoutIt";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Plane, Clock, Euro, MapPin, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function VoloITARomaNewYorkRitardi() {
  return (
    <LayoutIt>
      <SEO
        title="Volo ITA Airways Roma-New York in Ritardo: Risarcimento fino a 600€"
        description="Il tuo volo ITA Airways da Roma Fiumicino a New York JFK ha subito ritardo o cancellazione? Scopri come ottenere il risarcimento che ti spetta."
        url="https://problemlot.com/it/blog/volo-ita-roma-new-york-ritardi"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Volo ITA Airways Roma-New York: Guida Completa al Risarcimento",
            "description": "Guida ai diritti e risarcimenti per la rotta transatlantica Roma-New York con ITA Airways",
            "author": {
              "@type": "Organization",
              "name": "LotProblem.pl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://problemlot.com/og-image.png"
              }
            },
            "datePublished": "2026-03-05",
            "dateModified": "2026-03-05",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://problemlot.com/it/blog/volo-ita-roma-new-york-ritardi"
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
                "name": "Quanto risarcimento spetta per un volo Roma-New York in ritardo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Per la rotta Roma-New York (distanza >3.500 km), il risarcimento è di €600 se il ritardo all'arrivo è di 3 o più ore. Se il ritardo è tra 3 e 4 ore, la compagnia può ridurlo al 50% (€300). Oltre le 4 ore, spettano i pieni €600."
                }
              },
              {
                "@type": "Question",
                "name": "Il CE 261/2004 si applica ai voli ITA da Roma a New York?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sì. Il volo parte da un aeroporto UE (Roma Fiumicino) quindi il CE 261/2004 si applica pienamente, indipendentemente dalla compagnia. ITA Airways, essendo compagnia europea, è soggetta al regolamento su tutti i suoi voli."
                }
              },
              {
                "@type": "Question",
                "name": "Cosa fare se perdo la coincidenza a New York per il ritardo ITA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Se i voli sono su unica prenotazione, calcola il ritardo totale all'arrivo alla destinazione finale. Se supera 3 ore, hai diritto al risarcimento basato sulla distanza totale. Se hai prenotazioni separate, purtroppo il CE 261 copre solo il volo ITA in ritardo."
                }
              },
              {
                "@type": "Question",
                "name": "Quali sono i problemi più comuni sulla rotta Roma-New York?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I problemi più frequenti sono: ritardi tecnici (cambio aeromobile), ritardi per maltempo atlantico (tempeste, uragani), congestione aeroportuale a JFK (slot ritardati), problemi di crew (riposo equipaggio insufficiente). Solo maltempo eccezionale è circostanza straordinaria."
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
            <span>ITA Roma-New York Ritardi</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Plane className="h-4 w-4" />
              <time dateTime="2026-03-05">5 marzo 2026</time>
              <span className="mx-2">•</span>
              <span>11 min di lettura</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                Rotte Specifiche
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Volo ITA Airways Roma-New York in Ritardo: Diritti e Risarcimento
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Il tuo volo ITA Airways da Roma Fiumicino a New York JFK (o Newark EWR) ha subito ritardo di 3+ ore 
              o è stato cancellato? Scopri come ottenere fino a €600 di risarcimento più assistenza completa.
            </p>
          </header>

          {/* Route Info Box */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Informazioni Rotta</h3>
                <div className="grid md:grid-cols-2 gap-4 text-blue-800 text-sm">
                  <div>
                    <p><strong>Rotta:</strong> FCO (Roma Fiumicino) → JFK/EWR (New York)</p>
                    <p><strong>Distanza:</strong> ~6.900 km (Long-Haul)</p>
                    <p><strong>Durata volo:</strong> ~9-10 ore</p>
                  </div>
                  <div>
                    <p><strong>Compagnia:</strong> ITA Airways (AZ)</p>
                    <p><strong>Risarcimento:</strong> €600 (ritardo ≥4h)</p>
                    <p><strong>Riduzione 50%:</strong> €300 (ritardo 3-4h)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-green-600" />
              Quanto Risarcimento Ti Spetta?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              La rotta Roma-New York ha una distanza di circa <strong>6.900 km</strong>, quindi rientra nella 
              categoria <strong>"voli lunghi" (&gt;3.500 km)</strong> secondo il CE 261/2004. Ecco cosa ti spetta:
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl my-8 border-2 border-green-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Tabella Risarcimenti Roma → New York
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border-2 border-green-400">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-green-600" />
                      <span className="font-bold text-gray-900">Ritardo ≥ 4 ore</span>
                    </div>
                    <div className="text-3xl font-bold text-green-600">€600</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Risarcimento completo per ritardo all'arrivo di 4 o più ore. Questo è l'importo massimo 
                    previsto dal CE 261/2004 per voli extra-UE lunghi.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border-2 border-yellow-400">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-yellow-600" />
                      <span className="font-bold text-gray-900">Ritardo 3-4 ore</span>
                    </div>
                    <div className="text-3xl font-bold text-yellow-600">€300</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Per voli &gt;3.500 km verso destinazioni extra-UE, se il ritardo è tra 3 e 4 ore, la compagnia 
                    può ridurre il risarcimento del 50%. Però DEVI comunque ricevere assistenza completa.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border-2 border-red-400">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-red-600" />
                      <span className="font-bold text-gray-900">Ritardo &lt; 3 ore</span>
                    </div>
                    <div className="text-3xl font-bold text-red-600">€0</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Nessun risarcimento monetario, MA se il ritardo alla partenza supera 2 ore, hai diritto 
                    all'assistenza (pasti, bevande, comunicazioni).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Nota Importante: Regola del 50%</h3>
                  <p className="text-amber-800 text-sm">
                    L'<strong>articolo 7(2)(c)</strong> del CE 261 permette alle compagnie di ridurre del 50% il 
                    risarcimento per voli &gt;3.500 km extra-UE se il ritardo è tra 3 e 4 ore. Però questa è 
                    l'UNICA riduzione consentita. Se arrivi con 4+ ore di ritardo, spettano i pieni €600 senza 
                    possibilità di riduzione.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="my-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Il Tuo Volo Roma-New York Era in Ritardo?</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Verifica in 2 minuti se hai diritto a €300 o €600 di risarcimento. Inserisci i dettagli del volo.
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=ita_rome_nyc"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Calcola il Tuo Risarcimento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Plane className="h-8 w-8 text-blue-600" />
              Problemi Comuni sulla Rotta Roma-New York
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              La rotta transatlantica Roma-New York è una delle più trafficate d'Europa, ma presenta sfide operative 
              specifiche. Ecco i problemi più frequenti e quali danno diritto al risarcimento:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <h3 className="font-bold text-green-900">✅ HAI DIRITTO AL RISARCIMENTO</h3>
                </div>
                
                <div className="space-y-3 text-gray-800 text-sm">
                  <div>
                    <h4 className="font-semibold">1. Problemi Tecnici dell'Aeromobile</h4>
                    <p className="mt-1">
                      <strong>Esempi:</strong> Guasto motore, problemi al sistema idraulico, malfunzionamenti avionici, 
                      sostituzione aeromobile dell'ultimo minuto.<br/>
                      <strong>Perché hai diritto:</strong> Sono parte della normale gestione operativa della compagnia. 
                      Solo difetti nascosti non rilevabili sono circostanze straordinarie (raro).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">2. Ritardi Operativi di ITA Airways</h4>
                    <p className="mt-1">
                      <strong>Esempi:</strong> Ritardo da volo precedente (effetto domino), catering in ritardo, 
                      pulizia aeromobile lenta, overbooking, riorganizzazione flotta.<br/>
                      <strong>Perché hai diritto:</strong> Problemi interni di pianificazione e gestione.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">3. Problemi di Crew</h4>
                    <p className="mt-1">
                      <strong>Esempi:</strong> Equipaggio non disponibile (malattia, ritardo da volo precedente), 
                      violazione limiti di orario di volo, crew insufficiente.<br/>
                      <strong>Perché hai diritto:</strong> La compagnia è responsabile della gestione del proprio personale.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">4. Congestione Aeroportuale "Normale"</h4>
                    <p className="mt-1">
                      <strong>Esempi:</strong> Ritardo slot a JFK/EWR per traffico intenso ma gestibile, coda al decollo 
                      a Fiumicino.<br/>
                      <strong>Perché hai diritto:</strong> Il traffico normale è prevedibile e parte dell'operatività.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-red-900">❌ NESSUN RISARCIMENTO (solo assistenza)</h3>
                </div>
                
                <div className="space-y-3 text-gray-800 text-sm">
                  <div>
                    <h4 className="font-semibold">1. Maltempo Eccezionale Atlantico</h4>
                    <p className="mt-1">
                      <strong>Esempi:</strong> Uragani, tempeste violente, forti turbolenze impreviste che costringono 
                      a deviazioni o ritardi significativi.<br/>
                      <strong>Perché non hai diritto:</strong> Condizioni meteorologiche imprevedibili e inevitabili.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">2. Scioperi Esterni</h4>
                    <p className="mt-1">
                      <strong>Esempi:</strong> Sciopero ATC (controllori di volo), sciopero generale aeroporto JFK, 
                      sciopero security.<br/>
                      <strong>Perché non hai diritto:</strong> Enti esterni alla compagnia, fuori dal controllo di ITA.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">3. Restrizioni Spazio Aereo</h4>
                    <p className="mt-1">
                      <strong>Esempi:</strong> Chiusura spazio aereo per sicurezza nazionale, restrizioni FAA improvvise, 
                      emergenze di sicurezza.<br/>
                      <strong>Perché non hai diritto:</strong> Decisioni governative imprevedibili.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">4. Bird Strike Grave</h4>
                    <p className="mt-1">
                      <strong>Esempi:</strong> Impatto con uccelli che causa danni seri al motore o fusoliera, richiedendo 
                      cambio aeromobile.<br/>
                      <strong>Perché non hai diritto:</strong> Evento imprevedibile, ma SOLO se l'impatto causa danni 
                      significativi certificati.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA 2 */}
            <div className="my-12 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Non Sei Sicuro se Hai Diritto?</h3>
              <p className="text-green-100 mb-6 text-lg">
                Inviaci i dettagli del tuo volo ITA Roma-New York e analizzeremo gratuitamente se la causa del 
                ritardo ti dà diritto al risarcimento.
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=ita_case_analysis"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
              >
                Analisi Gratuita del Caso
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Coincidenze Perse a New York
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Molti passeggeri prendono il volo Roma-New York come primo tratto di un viaggio più lungo verso altre 
              destinazioni USA o Caraibi. Se perdi la coincidenza per colpa del ritardo ITA, ecco cosa ti spetta:
            </p>

            <div className="bg-blue-50 p-6 rounded-xl my-8">
              <h3 className="font-bold text-blue-900 mb-4">📋 Regole per Coincidenze Perse</h3>
              
              <div className="space-y-4 text-gray-800">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">✅ Unica Prenotazione</h4>
                  <p className="text-sm">
                    Se hai prenotato Roma → New York → Destinazione Finale in un'unica transazione (stesso PNR), 
                    il risarcimento si calcola sulla base del ritardo all'arrivo finale. Se arrivi alla destinazione 
                    finale con 3+ ore di ritardo, hai diritto al risarcimento basato sulla distanza totale.
                  </p>
                  <p className="text-xs text-blue-800 mt-2 italic">
                    <strong>Esempio:</strong> Roma → JFK → Miami. Se arrivi a Miami con 4 ore di ritardo per colpa 
                    del ritardo Roma-JFK, hai diritto a €600 (distanza totale &gt;3.500 km).
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">❌ Prenotazioni Separate</h4>
                  <p className="text-sm">
                    Se hai prenotato Roma-New York separatamente dal volo New York-Destinazione Finale, il CE 261 
                    copre SOLO il volo ITA. Se perdi il secondo volo per il ritardo del primo, ITA NON è 
                    responsabile del secondo (a meno che tu non dimostri che sapevano della coincidenza).
                  </p>
                  <p className="text-xs text-red-800 mt-2 italic">
                    <strong>Consiglio:</strong> Sempre prenotare voli con coincidenze in unica transazione, o 
                    acquistare assicurazione viaggio che copre coincidenze perse.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">⚖️ Partnership/Code-Share</h4>
                  <p className="text-sm">
                    Se il secondo volo è operato da partner ITA (es: Delta, United) ma prenotato insieme, vale la 
                    regola dell'unica prenotazione. Il risarcimento lo richiedi alla compagnia operatrice del volo 
                    in ritardo (ITA).
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Assistenza Durante il Ritardo
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Indipendentemente dalla causa del ritardo</strong> (anche circostanze straordinarie), ITA 
              Airways DEVE fornirti assistenza secondo l'articolo 9 del CE 261/2004:
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl my-8">
              <h3 className="font-bold text-gray-900 mb-4">🛟 Assistenza Obbligatoria per Voli Lunghi</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pasti e Bevande</h4>
                    <p className="text-sm text-gray-700">
                      Per ritardi &gt;2 ore alla partenza su voli lunghi: pasti in proporzione al tempo di attesa. 
                      ITA di solito fornisce voucher da usare nei ristoranti dell'aeroporto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sistemazione in Hotel</h4>
                    <p className="text-sm text-gray-700">
                      Se il volo viene posticipato al giorno successivo, ITA deve fornire hotel + trasporto 
                      aeroporto-hotel. Se non lo fanno, puoi provvedere tu e chiedere rimborso (conserva scontrini, 
                      max spesa ragionevole ~€100-150/notte).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">2 Comunicazioni Gratuite</h4>
                    <p className="text-sm text-gray-700">
                      Telefonate, email o fax. Oggi di solito forniscono Wi-Fi gratuito in aeroporto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Rimborso o Riprotezione</h4>
                    <p className="text-sm text-gray-700">
                      Puoi scegliere: A) Rimborso completo biglietto + volo di ritorno a Roma (se necessario), 
                      OPPURE B) Volo alternativo alla prima occasione disponibile. Se scegli rimborso, NON hai 
                      diritto al risarcimento CE 261.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA 3 */}
            <div className="my-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">ITA Non Ha Fornito Assistenza?</h3>
              <p className="text-purple-100 mb-6 text-lg">
                Se hai sostenuto spese per hotel, pasti o trasporti perché ITA non ha fornito assistenza, 
                puoi richiedere il rimborso. Conserva tutti gli scontrini.
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=ita_assistance_refund"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl"
              >
                Richiedi Rimborso Spese
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Come Richiedere il Risarcimento a ITA Airways
            </h2>

            <div className="bg-gray-50 p-6 rounded-xl my-8">
              <h3 className="font-bold text-gray-900 mb-4">📋 Procedura Passo-Passo</h3>
              
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Raccogli Documentazione</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Carta d'imbarco, conferma prenotazione (PNR), screenshot/foto tabellone arrivi a JFK/EWR 
                      con ritardo visibile, eventuali comunicazioni ITA (email, SMS).
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Invia Reclamo a ITA Airways</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Via modulo online su ita-airways.com sezione "Assistenza Clienti" → "Reclami" oppure 
                      via email a customercare@ita-airways.com. Specifica: numero volo, data, ritardo esatto, 
                      importo richiesto (€300 o €600), coordinate bancarie IBAN.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Attendi Risposta (6-8 settimane)</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      ITA ha generalmente 6-8 settimane per rispondere. Se accettano, riceverai bonifico. 
                      Se rifiutano citando circostanze straordinarie, chiedi prove documentali specifiche.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Escalation se Necessario</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Se ITA rifiuta ingiustamente o non risponde: 1) Contatta ENAC (autorità italiana), 
                      2) Considera società di recupero crediti specializzate (paghi solo se vincono), 
                      3) Azione legale (Giudice di Pace per importi &lt;€5.000).
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* CTA 4 - Final */}
            <div className="my-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Richiedi il Tuo Risarcimento ITA Airways Ora</h3>
                <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                  Il 72% dei passeggeri con diritto al risarcimento per voli transatlantici non lo richiede mai. 
                  Non lasciare sul tavolo fino a €600 che ti spettano legalmente.
                </p>
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=final_cta_ita_rome_nyc"
                  className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
                >
                  Inizia la Richiesta in 3 Minuti
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
                <p className="text-blue-200 text-sm mt-4">
                  ✓ Nessun pagamento anticipato • ✓ Paghi solo se vinciamo • ✓ Risposta in 24 ore
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mt-16 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Domande Frequenti (FAQ)</h2>
              
              <div className="space-y-6">
                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Quanto risarcimento spetta per un volo Roma-New York in ritardo?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Per la rotta Roma-New York (distanza &gt;3.500 km), il risarcimento è di €600 se il ritardo 
                    all'arrivo è di 4 o più ore. Se il ritardo è tra 3 e 4 ore, la compagnia può ridurlo al 50% 
                    (€300). Oltre le 4 ore, spettano i pieni €600. Questi importi sono indipendenti dal prezzo 
                    del biglietto.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Il CE 261/2004 si applica ai voli ITA da Roma a New York?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Sì, pienamente. Il volo parte da un aeroporto UE (Roma Fiumicino) quindi il CE 261/2004 si 
                    applica indipendentemente dalla destinazione. ITA Airways, essendo compagnia europea (italiana), 
                    è soggetta al regolamento su tutti i suoi voli in partenza dall'UE.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Cosa fare se perdo la coincidenza a New York per il ritardo ITA?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Se i voli sono su unica prenotazione (stesso PNR), calcola il ritardo totale all'arrivo alla 
                    destinazione finale. Se supera 3 ore, hai diritto al risarcimento basato sulla distanza totale. 
                    Se hai prenotazioni separate, purtroppo il CE 261 copre solo il volo ITA in ritardo, non la 
                    coincidenza persa.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Quali sono i problemi più comuni sulla rotta Roma-New York?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    I problemi più frequenti sono: ritardi tecnici (cambio aeromobile, manutenzione), ritardi per 
                    maltempo atlantico (solo tempeste eccezionali sono circostanze straordinarie), congestione 
                    aeroportuale a JFK (slot ritardati), problemi di crew (riposo equipaggio insufficiente). La 
                    maggior parte di questi problemi dà diritto al risarcimento.
                  </p>
                </details>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articoli Correlati</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/it/blog/ita-airways-risarcimento" 
                      className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">ITA Airways: Risarcimento Completo</h3>
                  <p className="text-sm text-gray-600">Guida generale a tutti i voli ITA</p>
                </Link>

                <Link href="/it/blog/ritardo-3-ore-regola-risarcimento" 
                      className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Regola delle 3 Ore</h3>
                  <p className="text-sm text-gray-600">Come si calcola il ritardo per il risarcimento</p>
                </Link>

                <Link href="/it/blog/aeroporto-roma-fiumicino-ritardi" 
                      className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Aeroporto Roma Fiumicino</h3>
                  <p className="text-sm text-gray-600">Guida ai ritardi dall'aeroporto FCO</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </LayoutIt>
  );
}
