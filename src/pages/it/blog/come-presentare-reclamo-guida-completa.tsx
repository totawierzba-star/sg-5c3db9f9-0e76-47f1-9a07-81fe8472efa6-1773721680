import { LayoutIt } from "@/components/LayoutIt";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, FileText, Clock, Euro, CheckCircle, AlertTriangle, Mail, Phone, Calendar } from "lucide-react";

export default function ComePresentareReclamoGuidaCompleta() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Come Presentare Reclamo per Volo in Ritardo o Cancellato: Guida Completa 2026",
        "description": "Guida passo-passo completa per presentare un reclamo efficace alla compagnia aerea e ottenere fino a 600€ di risarcimento per ritardi e cancellazioni.",
        "image": "https://lotproblem.pl/og-image.png",
        "datePublished": "2026-03-05",
        "dateModified": "2026-03-05",
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
        }
      },
      {
        "@type": "HowTo",
        "name": "Come presentare reclamo per volo in ritardo o cancellato",
        "description": "Procedura completa per presentare un reclamo efficace alla compagnia aerea",
        "totalTime": "PT30M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Raccogli la documentazione necessaria",
            "text": "Carta d'imbarco, biglietto, ricevute di spese extra, foto dei tabelloni, conferma scritta del motivo del ritardo dalla compagnia aerea"
          },
          {
            "@type": "HowToStep",
            "name": "Verifica l'ammissibilità",
            "text": "Controlla se il tuo volo soddisfa i requisiti del Regolamento CE 261/2004: ritardo superiore a 3 ore o cancellazione, partenza da UE o arrivo in UE con compagnia europea"
          },
          {
            "@type": "HowToStep",
            "name": "Redigi il reclamo",
            "text": "Scrivi una lettera formale includendo: dati del volo, descrizione del problema, richiesta specifica di risarcimento con importo, elenco documenti allegati"
          },
          {
            "@type": "HowToStep",
            "name": "Invia il reclamo",
            "text": "Invia tramite email certificata o raccomandata A/R all'ufficio Customer Service della compagnia aerea, conservando prova dell'invio"
          },
          {
            "@type": "HowToStep",
            "name": "Monitora e sollecita",
            "text": "Se non ricevi risposta entro 6-8 settimane, invia un sollecito formale. Se necessario, rivolgiti agli enti di tutela nazionale (ENAC in Italia) o considera assistenza legale specializzata"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quanto tempo ho per presentare il reclamo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Italia hai 2 anni dalla data del volo per presentare la richiesta di risarcimento. Negli altri paesi UE il termine varia da 1 a 6 anni. È sempre consigliabile agire il prima possibile."
            }
          },
          {
            "@type": "Question",
            "name": "Quali documenti sono indispensabili?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Documenti essenziali: carta d'imbarco, biglietto elettronico, foto dei tabelloni con gli orari, conferma scritta del motivo del ritardo dalla compagnia. Utili ma non obbligatori: ricevute di spese extra, contatti di testimoni."
            }
          },
          {
            "@type": "Question",
            "name": "Cosa succede se la compagnia rifiuta il risarcimento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Puoi rivolgerti all'ente nazionale di tutela (ENAC in Italia, APC in Francia, ecc.), utilizzare servizi di mediazione ADR, o affidare il caso a un'agenzia specializzata come ClaimWinger che gestisce anche le controversie legali."
            }
          },
          {
            "@type": "Question",
            "name": "È meglio fare da soli o usare un servizio specializzato?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fare da soli è gratis ma richiede tempo e conoscenze legali. I servizi specializzati gestiscono tutto per te, aumentano le probabilità di successo e operano su base no win-no fee (paghi solo se ottengono il risarcimento). Ideali per casi complessi o rifiuti della compagnia."
            }
          }
        ]
      }
    ]
  };

  return (
    <LayoutIt>
      <SEO
        title="Come Presentare Reclamo Volo in Ritardo o Cancellato: Guida Completa 2026 [Passo-Passo]"
        description="Guida definitiva per presentare un reclamo efficace e ottenere fino a 600€ di risarcimento per voli in ritardo o cancellati. Modelli, documenti e procedura completa."
        url="https://lotproblem.pl/it/blog/come-presentare-reclamo-guida-completa"
        schema={JSON.stringify(schemaData)}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
            <Link href="/it/blog" className="hover:underline">Blog</Link>
            <span>→</span>
            <span>Come Presentare Reclamo</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Come Presentare un Reclamo per Volo in Ritardo o Cancellato: Guida Completa Passo-Passo
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            <span>📅 Aggiornato: 5 marzo 2026</span>
            <span>⏱️ Lettura: 12 minuti</span>
            <span>📋 Guida pratica</span>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-gray-700">
              <strong>💡 Suggerimento:</strong> Questa guida ti mostra come fare tutto da solo. Se preferisci risparmiare tempo e affidare la pratica a esperti, 
              <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=guide&utm_campaign=claim_filing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold"> ClaimWinger può gestire tutto per te</a> con il sistema "no win, no fee".
            </p>
          </div>
        </header>

        {/* CTA Box 1 */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Preferisci che esperti gestiscano tutto per te?</h3>
              <p className="text-gray-700 mb-4">
                <strong>ClaimWinger</strong> si occupa di tutta la burocrazia, negozia con le compagnie aeree e ti garantisce il massimo risarcimento possibile. <strong>Paghi solo se vinciamo</strong>.
              </p>
              <a
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=guide&utm_campaign=claim_filing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Affida il Caso agli Esperti
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hai subito un <strong>ritardo significativo</strong> o una <strong>cancellazione del volo</strong>? Il Regolamento CE 261/2004 ti garantisce il diritto a un risarcimento fino a <strong>600€ a passeggero</strong>, ma devi presentare un reclamo formale alla compagnia aerea.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Questa guida ti mostra <strong>passo dopo passo</strong> come preparare e inviare un reclamo efficace, quali documenti raccogliere, come scrivere la lettera e cosa fare se la compagnia rifiuta il risarcimento.
          </p>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            Procedura Completa in 5 Passaggi
          </h2>

          {/* Step 1 */}
          <div className="mb-8">
            <div className="bg-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Raccogli la Documentazione Necessaria</h3>
                  
                  <p className="text-gray-700 mb-4">
                    Prima di presentare il reclamo, devi raccogliere <strong>prove concrete</strong> del disagio subito.
                  </p>

                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <h4 className="font-bold mb-3">📋 Documenti Essenziali (Obbligatori):</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Carta d'imbarco</strong> (boarding pass) - Prova che hai effettuato il check-in</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Biglietto elettronico</strong> (e-ticket) - Conferma della prenotazione</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Foto dei tabelloni</strong> con orari effettivi di partenza/arrivo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Conferma scritta del motivo</strong> del ritardo/cancellazione (richiedi al banco della compagnia)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold mb-3">📎 Documenti Utili (Non Obbligatori ma Consigliati):</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Ricevute di spese extra sostenute (pasti, hotel, trasporti)</li>
                      <li>• Email o SMS di notifica dalla compagnia</li>
                      <li>• Contatti di altri passeggeri come testimoni</li>
                      <li>• Screenshot di app o siti di tracking del volo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-8">
            <div className="bg-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Verifica l'Ammissibilità del Reclamo</h3>
                  
                  <p className="text-gray-700 mb-4">
                    Non tutti i voli danno diritto a risarcimento. Verifica che il tuo caso soddisfi questi <strong>requisiti fondamentali</strong>:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Hai Diritto al Risarcimento Se:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>✅ Ritardo all'arrivo ≥ 3 ore</li>
                        <li>✅ Volo cancellato senza preavviso (meno di 14 giorni)</li>
                        <li>✅ Partenza da aeroporto UE</li>
                        <li>✅ Oppure arrivo in UE con compagnia europea</li>
                        <li>✅ Check-in effettuato in tempo</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        NO Risarcimento Se:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>❌ Circostanze straordinarie (maltempo estremo, scioperi generali)</li>
                        <li>❌ Check-in in ritardo</li>
                        <li>❌ Preavviso &gt;14 giorni + alternativa ragionevole</li>
                        <li>❌ Volo charter non protetto da CE 261</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>💡 Non sei sicuro?</strong> Usa il verificatore gratuito di ClaimWinger per scoprire immediatamente se hai diritto al risarcimento e per quanto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-8">
            <div className="bg-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Redigi il Reclamo Formale</h3>
                  
                  <p className="text-gray-700 mb-4">
                    La lettera di reclamo deve essere <strong>chiara, formale e completa</strong>. Ecco la struttura da seguire:
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-4 font-mono text-sm">
                    <p className="mb-2"><strong>Oggetto:</strong> Richiesta di risarcimento ai sensi del Regolamento CE 261/2004 - Volo [Numero Volo] del [Data]</p>
                    <hr className="my-3 border-gray-300" />
                    <p className="mb-4">Spett.le [Nome Compagnia Aerea],<br/>Ufficio Customer Service</p>
                    <p className="mb-4">
                      Il/La sottoscritto/a <strong>[Tuo Nome Cognome]</strong>, codice fiscale <strong>[CF]</strong>, residente in <strong>[Indirizzo Completo]</strong>, con la presente richiede il risarcimento previsto dal Regolamento CE 261/2004 per il seguente disservizio:
                    </p>
                    <ul className="mb-4 space-y-1 pl-4">
                      <li><strong>Volo:</strong> [Numero Volo, es. FR1234]</li>
                      <li><strong>Data:</strong> [gg/mm/aaaa]</li>
                      <li><strong>Tratta:</strong> [Aeroporto Partenza] → [Aeroporto Arrivo]</li>
                      <li><strong>Orario previsto di arrivo:</strong> [HH:MM]</li>
                      <li><strong>Orario effettivo di arrivo:</strong> [HH:MM]</li>
                      <li><strong>Ritardo:</strong> [X ore e Y minuti]</li>
                      <li><strong>Codice prenotazione:</strong> [PNR]</li>
                    </ul>
                    <p className="mb-4">
                      In base all'articolo [5/7] del Regolamento CE 261/2004, richiedo il risarcimento di <strong>€ [250/400/600]</strong> per il disagio subito.
                    </p>
                    <p className="mb-4">
                      Allego la seguente documentazione:<br/>
                      • Carta d'imbarco<br/>
                      • Biglietto elettronico<br/>
                      • Fotografie dei tabelloni<br/>
                      • [Altri documenti]
                    </p>
                    <p className="mb-4">
                      Resto in attesa di un Vostro cortese riscontro entro 30 giorni.
                    </p>
                    <p>Distinti saluti,<br/>[Firma]<br/>[Nome Cognome]<br/>[Email]<br/>[Telefono]</p>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>⚠️ Importante:</strong> Mantieni un tono formale ma fermo. Non essere aggressivo, ma esponi i fatti in modo chiaro e richiedi esplicitamente l'importo dovuto secondo la normativa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-8">
            <div className="bg-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Invia il Reclamo alla Compagnia Aerea</h3>
                  
                  <p className="text-gray-700 mb-4">
                    Puoi inviare il reclamo in <strong>due modi</strong>:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-blue-600" />
                        Via Email (Consigliato)
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✅ Trova l'indirizzo Customer Service sul sito della compagnia</li>
                        <li>✅ Usa PEC se disponibile (per Italia)</li>
                        <li>✅ Allega tutti i documenti in PDF</li>
                        <li>✅ Conserva conferma di invio e lettura</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-green-600" />
                        Via Posta (Più Formale)
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✅ Raccomandata A/R per prova di ricezione</li>
                        <li>✅ Includi copie (non originali) di tutti i documenti</li>
                        <li>✅ Conserva ricevuta di spedizione</li>
                        <li>✅ Tempi più lunghi (7-10 giorni)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-4">
                    <h4 className="font-bold mb-2">📧 Indirizzi Email Customer Service Principali Compagnie:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li><strong>Ryanair:</strong> customer.relations@ryanair.com</li>
                      <li><strong>easyJet:</strong> attraverso il form online sul sito</li>
                      <li><strong>Wizz Air:</strong> customer.relations@wizzair.com</li>
                      <li><strong>ITA Airways:</strong> customer.relations@ita-airways.com</li>
                      <li><strong>Lufthansa:</strong> customer.relations@lufthansa.com</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-2">
                      ℹ️ Verifica sempre sul sito ufficiale della compagnia per l'indirizzo più aggiornato
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-8">
            <div className="bg-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Monitora e Sollecita la Risposta</h3>
                  
                  <p className="text-gray-700 mb-4">
                    Le compagnie aeree hanno <strong>fino a 6-8 settimane</strong> per rispondere al tuo reclamo.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-yellow-600" />
                        Se Non Ricevi Risposta Entro 8 Settimane:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>1️⃣ Invia un <strong>sollecito formale</strong> (stessa procedura del primo reclamo)</li>
                        <li>2️⃣ Menziona esplicitamente la mancata risposta e richiedi urgenza</li>
                        <li>3️⃣ Avverti che ti rivolgerai all'autorità nazionale competente</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        Se la Compagnia Rifiuta il Risarcimento:
                      </h4>
                      <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                        <li><strong>Rivolgiti all'ente nazionale:</strong> In Italia è l'ENAC, in Francia l'APC, ecc.</li>
                        <li><strong>Usa servizi di mediazione ADR:</strong> Organismi europei di risoluzione alternativa delle controversie</li>
                        <li><strong>Considera assistenza legale specializzata:</strong> Servizi come ClaimWinger gestiscono tutto per te, incluse le controversie</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Box 2 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Troppo Complicato? Lascia Fare a Noi
            </h2>
            <p className="text-lg mb-6 text-blue-100">
              ClaimWinger gestisce tutta la burocrazia per te: dall'analisi del caso alla negoziazione con le compagnie aeree, fino all'eventuale azione legale. <strong>Paghi solo se otteniamo il risarcimento</strong>.
            </p>
            <a
              href="https://claimwinger.com/it?utm_source=blog&utm_medium=guide&utm_campaign=claim_filing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Richiedi Assistenza Gratuita
              <ArrowRight className="w-6 h-6" />
            </a>
            <p className="text-sm text-blue-100 mt-4">
              ✅ Nessun rischio • ✅ Nessun costo anticipato • ✅ Tasso di successo 98%
            </p>
          </div>
        </div>

        {/* Errori Comuni */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            Errori Comuni da Evitare
          </h2>

          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
              <h3 className="font-bold text-lg mb-2">❌ Non Documentare Subito il Problema</h3>
              <p className="text-gray-700">
                Molti passeggeri non fotografano i tabelloni o non conservano la carta d'imbarco. <strong>Senza prove concrete è quasi impossibile vincere</strong>. Documenta tutto appena noti il problema.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
              <h3 className="font-bold text-lg mb-2">❌ Non Richiedere Conferma Scritta del Motivo</h3>
              <p className="text-gray-700">
                Le compagnie spesso danno spiegazioni verbali vaghe. <strong>Chiedi sempre una conferma scritta del motivo esatto</strong> del ritardo o cancellazione - è fondamentale per il tuo caso.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
              <h3 className="font-bold text-lg mb-2">❌ Accettare Voucher o Rimborsi Parziali Troppo Presto</h3>
              <p className="text-gray-700">
                Le compagnie spesso offrono voucher da 50-100€ sperando che tu rinunci al risarcimento legale completo (fino a 600€). <strong>Non accettare offerte insufficienti senza verificare prima a quanto hai diritto</strong>.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
              <h3 className="font-bold text-lg mb-2">❌ Usare un Tono Aggressivo o Minaccioso</h3>
              <p className="text-gray-700">
                Un reclamo scritto in modo aggressivo o con minacce legali premature può irrigidire la posizione della compagnia. <strong>Mantieni sempre un tono formale, educato ma fermo</strong>.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
              <h3 className="font-bold text-lg mb-2">❌ Aspettare Troppo Prima di Agire</h3>
              <p className="text-gray-700">
                Hai 2 anni in Italia (varia in altri paesi) ma più tempo passa, più è difficile raccogliere prove. <strong>Presenta il reclamo entro 1-3 mesi dal volo</strong> per massimizzare le probabilità di successo.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande Frequenti (FAQ)</h2>
          
          <div className="space-y-4">
            <details className="bg-white border border-gray-200 rounded-lg p-5">
              <summary className="font-bold text-lg cursor-pointer">
                Quanto tempo ho per presentare il reclamo?
              </summary>
              <p className="text-gray-700 mt-3">
                In <strong>Italia hai 2 anni</strong> dalla data del volo per presentare la richiesta di risarcimento. Negli altri paesi UE il termine varia da 1 a 6 anni (Francia: 5 anni, Germania: 3 anni, Regno Unito: 6 anni, Spagna: 5 anni). È sempre consigliabile agire il prima possibile per facilitare la raccolta della documentazione.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-5">
              <summary className="font-bold text-lg cursor-pointer">
                Quali documenti sono indispensabili?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Documenti essenziali:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Carta d'imbarco (boarding pass)</li>
                <li>Biglietto elettronico (e-ticket)</li>
                <li>Foto dei tabelloni con gli orari effettivi</li>
                <li>Conferma scritta del motivo del ritardo dalla compagnia</li>
              </ul>
              <p className="text-gray-700 mt-2">
                <strong>Utili ma non obbligatori:</strong> ricevute di spese extra, contatti di testimoni, screenshot di tracking del volo.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-5">
              <summary className="font-bold text-lg cursor-pointer">
                Cosa succede se la compagnia rifiuta il risarcimento?
              </summary>
              <p className="text-gray-700 mt-3">
                Se la compagnia nega il risarcimento, hai tre opzioni:
              </p>
              <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-2">
                <li><strong>Rivolgiti all'ente nazionale:</strong> In Italia è l'ENAC (Ente Nazionale per l'Aviazione Civile), che può mediare con la compagnia</li>
                <li><strong>Utilizzare servizi di mediazione ADR:</strong> Organismi europei di risoluzione alternativa delle controversie</li>
                <li><strong>Affidare il caso a specialisti:</strong> Servizi come ClaimWinger gestiscono anche le controversie legali complesse e aumentano drasticamente le probabilità di successo</li>
              </ol>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-5">
              <summary className="font-bold text-lg cursor-pointer">
                È meglio fare da soli o usare un servizio specializzato?
              </summary>
              <p className="text-gray-700 mt-3">
                Dipende dalla tua situazione:
              </p>
              <div className="mt-3 space-y-3">
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-green-800 mb-1">✅ Fare da soli è meglio se:</p>
                  <ul className="text-sm text-gray-700 list-disc list-inside">
                    <li>Il caso è semplice e chiaro</li>
                    <li>Hai tempo e pazienza per gestire la burocrazia</li>
                    <li>La compagnia risponde positivamente subito</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-bold text-blue-800 mb-1">✅ I servizi specializzati sono meglio se:</p>
                  <ul className="text-sm text-gray-700 list-disc list-inside">
                    <li>La compagnia nega il risarcimento o non risponde</li>
                    <li>Il caso è complesso (più passeggeri, voli in coincidenza)</li>
                    <li>Vuoi massimizzare le probabilità di successo</li>
                    <li>Non hai tempo o conoscenze legali</li>
                    <li>Vuoi evitare lo stress della negoziazione</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 mt-3">
                I servizi come ClaimWinger operano su base <strong>"no win, no fee"</strong> - paghi solo se ottengono il risarcimento, quindi non c'è rischio finanziario.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-5">
              <summary className="font-bold text-lg cursor-pointer">
                Posso richiedere il risarcimento per voli prenotati anni fa?
              </summary>
              <p className="text-gray-700 mt-3">
                Sì, <strong>purché il volo sia avvenuto entro il termine di prescrizione</strong> del paese in cui presenti il reclamo. In Italia sono 2 anni, ma in altri paesi UE può essere più lungo (fino a 6 anni nel Regno Unito). Tuttavia, più tempo passa, più diventa difficile raccogliere le prove necessarie.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-5">
              <summary className="font-bold text-lg cursor-pointer">
                La compagnia offre un voucher - devo accettarlo?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>NO, non sei obbligato ad accettare voucher</strong>. Le compagnie spesso offrono voucher di 50-100€ sperando che tu rinunci al risarcimento completo in denaro (che può arrivare fino a 600€). Valuta attentamente se l'offerta è equa rispetto ai tuoi diritti legali prima di accettare. Una volta accettato il voucher, è molto difficile richiedere il risarcimento completo successivamente.
              </p>
            </details>
          </div>
        </section>

        {/* CTA Box 3 - Final */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-8 rounded-lg mb-8">
          <div className="text-center">
            <Link
              href="https://claimwinger.com/it?utm_source=blog&utm_medium=guide&utm_campaign=claim_filing"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Inizia la Tua Richiesta di Risarcimento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Articoli Correlati</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/it/blog/regolamento-ce-261-2004-spiegato" className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-2">Regolamento CE 261/2004</h3>
              <p className="text-gray-600 text-sm">La normativa europea sui diritti dei passeggeri aerei spiegata</p>
            </Link>
            <Link href="/it/blog/ryanair-italia-risarcimento" className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-2">Risarcimento Ryanair</h3>
              <p className="text-gray-600 text-sm">Come ottenere il risarcimento da Ryanair in Italia</p>
            </Link>
            <Link href="/it/blog/aeroporto-napoli-capodichino-risarcimento" className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-2">Aeroporto Napoli Capodichino</h3>
              <p className="text-gray-600 text-sm">Diritti e risarcimenti per voli da Napoli</p>
            </Link>
            <Link href="/it/volo-in-ritardo" className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-2">Volo in Ritardo</h3>
              <p className="text-gray-600 text-sm">Cosa fare e quando hai diritto al risarcimento</p>
            </Link>
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}