import { LayoutIt } from "@/components/LayoutIt";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, XCircle, CheckCircle2, Euro, Users, Plane, FileText } from "lucide-react";

export default function OverbookingNegatoImbarcoDiritti() {
  return (
    <LayoutIt>
      <SEO
        title="Overbooking e Negato Imbarco: Tutti i Tuoi Diritti e Come Ottenere Fino a 600€"
        description="Ti hanno negato l'imbarco per overbooking? Scopri i tuoi diritti secondo CE 261/2004 e come ottenere il risarcimento che ti spetta."
        url="https://lotproblem.pl/it/blog/overbooking-negato-imbarco-diritti"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Overbooking e Negato Imbarco: Guida Completa ai Diritti del Passeggero",
            "description": "Guida completa sui diritti in caso di overbooking e negato imbarco",
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
              "@id": "https://lotproblem.pl/it/blog/overbooking-negato-imbarco-diritti"
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
                "name": "Cos'è l'overbooking e perché le compagnie lo fanno?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'overbooking è la pratica di vendere più biglietti dei posti disponibili sull'aereo. Le compagnie aeree lo fanno perché statisticamente il 5-15% dei passeggeri non si presenta al volo (no-show). Vendendo più posti, massimizzano i profitti. Quando tutti si presentano, qualcuno viene escluso."
                }
              },
              {
                "@type": "Question",
                "name": "Quanto posso ottenere se mi negano l'imbarco per overbooking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dipende dalla distanza del volo: €250 per voli fino a 1.500 km, €400 per voli 1.500-3.500 km, €600 per voli oltre 3.500 km. INOLTRE hai diritto a: rimborso completo O volo alternativo, assistenza (pasti, hotel), e risarcimento per danni aggiuntivi."
                }
              },
              {
                "@type": "Question",
                "name": "La compagnia può scegliere chi escludere arbitrariamente?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Deve prima cercare volontari offrendo incentivi. Solo se non ci sono volontari può procedere al negato imbarco involontario, seguendo criteri oggettivi (check-in, classe biglietto, status frequent flyer). È illegale discriminare per razza, disabilità, età."
                }
              },
              {
                "@type": "Question",
                "name": "Devo accettare voucher invece di soldi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Hai diritto al risarcimento in contanti (o bonifico/assegno). I voucher sono validi SOLO se accetti volontariamente. Per negato imbarco involontario, la compagnia DEVE pagare in denaro se lo richiedi."
                }
              },
              {
                "@type": "Question",
                "name": "Cosa succede se perdo un evento importante (matrimonio, riunione)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oltre al risarcimento standard CE 261/2004, puoi richiedere danni aggiuntivi per perdite documentabili: biglietti evento non rimborsabili, prenotazioni hotel perse, danni professionali. Conserva tutte le prove e considera assistenza legale."
                }
              },
              {
                "@type": "Question",
                "name": "Ho prenotato con punti frequent flyer - ho comunque diritto al risarcimento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sì. Il CE 261/2004 si applica a TUTTI i passeggeri con prenotazione confermata, indipendentemente dal metodo di pagamento (soldi, punti, voucher). L'unica eccezione sono i biglietti gratuiti non disponibili al pubblico (dipendenti compagnia)."
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
            <span>Overbooking e Negato Imbarco</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Users className="h-4 w-4" />
              <time dateTime="2026-03-05">5 marzo 2026</time>
              <span className="mx-2">•</span>
              <span>15 min di lettura</span>
              <span className="mx-2">•</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">
                Diritti Passeggeri
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Overbooking e Negato Imbarco: La Guida Completa ai Tuoi Diritti
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Ti hanno negato l'imbarco perché il volo è sovraffollato? Scopri esattamente cosa ti spetta 
              secondo il Regolamento CE 261/2004 e come ottenere fino a 600€ di risarcimento più assistenza completa.
            </p>
          </header>

          {/* Alert Box */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-12">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Situazione Urgente - Agisci Subito</h3>
                <p className="text-red-800">
                  Se ti è stato appena negato l'imbarco, <strong>NON lasciare l'aeroporto</strong> senza:
                  1) Ottenere documento scritto dalla compagnia con motivazione, 2) Fotografare tabellone voli, 
                  3) Raccogliere contatti testimoni, 4) Rifiutare voucher e richiedere compensazione in denaro.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-red-600" />
              Cos'è l'Overbooking e Perché Esiste?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              L'<strong>overbooking</strong> (sovraprenotazione) è la pratica commerciale di vendere deliberatamente 
              più biglietti aerei dei posti effettivamente disponibili sull'aereo. Non è illegale, ma è strettamente 
              regolamentata dal Regolamento CE 261/2004.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="font-bold text-blue-900 mb-4">📊 Perché le Compagnie Fanno Overbooking?</h3>
              
              <div className="space-y-4 text-gray-800">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">No-Show Statistics</h4>
                    <p className="text-sm mt-1">
                      Statisticamente, il 5-15% dei passeggeri con prenotazione confermata non si presenta al volo 
                      ("no-show"). Questo varia per rotta, stagione, tipo di biglietto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Massimizzazione Profitti</h4>
                    <p className="text-sm mt-1">
                      Vendendo più posti, la compagnia riduce il rischio di volare con posti vuoti (perdita di revenue). 
                      Un aereo pieno genera più profitto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Modelli Predittivi</h4>
                    <p className="text-sm mt-1">
                      Le compagnie usano algoritmi sofisticati per prevedere quanti no-show ci saranno e vendono 
                      esattamente quella quantità extra di biglietti. Quando sbagliano, qualcuno viene escluso.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              <strong>Il problema:</strong> Quando tutti i passeggeri si presentano (più comune durante alta stagione, 
              festività, weekend), qualcuno deve rimanere a terra contro la propria volontà. Questo è il 
              <strong> negato imbarco involontario</strong>.
            </p>

            {/* CTA 1 */}
            <div className="my-12 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ti Hanno Escluso dal Volo per Overbooking?</h3>
              <p className="text-red-100 mb-6 text-lg">
                Verifica in 2 minuti se hai diritto al risarcimento e quanto puoi ottenere (fino a €600 + assistenza).
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=overbooking_denied_boarding"
                className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all shadow-lg hover:shadow-xl"
              >
                Verifica il Tuo Risarcimento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-green-600" />
              Quanto Ti Spetta per Negato Imbarco?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Il risarcimento per negato imbarco è <strong>superiore</strong> a quello per ritardo/cancellazione, 
              perché il disagio è immediato e totale. Ecco cosa ti spetta secondo l'<strong>articolo 4 del CE 261/2004</strong>:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">€250</div>
                <div className="text-sm text-gray-700 font-semibold mb-3">Voli Corti</div>
                <div className="text-xs text-gray-600">
                  ✈️ Distanza ≤ 1.500 km
                  <br />
                  <span className="text-gray-500">
                    Es: Roma-Barcellona, Milano-Parigi, Napoli-Vienna
                  </span>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">€400</div>
                <div className="text-sm text-gray-700 font-semibold mb-3">Voli Medi</div>
                <div className="text-xs text-gray-600">
                  ✈️ Distanza 1.500-3.500 km
                  <br />
                  <span className="text-gray-500">
                    Es: Roma-Mosca, Milano-Istanbul, Napoli-Marocco
                  </span>
                </div>
              </div>

              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">€600</div>
                <div className="text-sm text-gray-700 font-semibold mb-3">Voli Lunghi</div>
                <div className="text-xs text-gray-600">
                  ✈️ Distanza &gt; 3.500 km
                  <br />
                  <span className="text-gray-500">
                    Es: Roma-New York, Milano-Dubai, Napoli-Tokyo
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl my-8">
              <h3 className="font-bold text-green-900 mb-4">✅ INOLTRE Hai Diritto A:</h3>
              
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Scelta tra:</strong> rimborso completo del biglietto OPPURE volo alternativo alla prima occasione disponibile</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Assistenza completa:</strong> pasti, bevande, hotel (se necessario pernottamento), trasporto aeroporto-hotel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>2 comunicazioni gratuite:</strong> telefonate, email o fax</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Upgrade gratuito:</strong> se il volo alternativo è su classe superiore, nessun costo aggiuntivo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Danni aggiuntivi:</strong> se perdi eventi importanti, puoi chiedere ulteriore risarcimento oltre al CE 261</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <XCircle className="h-8 w-8 text-red-600" />
              Negato Imbarco Volontario vs Involontario
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Distinzione cruciale:</strong> La legge distingue tra chi rinuncia volontariamente al posto 
              (in cambio di incentivi) e chi viene escluso contro la propria volontà.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="font-bold text-green-900 mb-3">✅ Negato Imbarco Volontario</h3>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>• La compagnia chiede volontari al gate</li>
                  <li>• Offre incentivi (voucher, upgrade, soldi)</li>
                  <li>• Tu accetti consapevolmente</li>
                  <li>• Negoziabile: puoi chiedere di più</li>
                  <li>• Meno diritti rispetto all'involontario</li>
                </ul>
                <p className="text-xs text-green-800 mt-3 italic">
                  <strong>Consiglio:</strong> Se accetti, negozia: chiedi almeno €300-500 in contanti + hotel + volo alternativo garantito.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-3">❌ Negato Imbarco Involontario</h3>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>• La compagnia ti esclude contro la tua volontà</li>
                  <li>• Non ci sono abbastanza volontari</li>
                  <li>• Diritti completi CE 261/2004 garantiti</li>
                  <li>• Risarcimento €250-600 + assistenza</li>
                  <li>• Non negoziabile: è un tuo diritto legale</li>
                </ul>
                <p className="text-xs text-red-800 mt-3 italic">
                  <strong>Importante:</strong> Rifiuta voucher, esigi compensazione in contanti. È tuo diritto.
                </p>
              </div>
            </div>

            {/* CTA 2 */}
            <div className="my-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ti Hanno Offerto Solo Voucher?</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Non sei obbligato ad accettare. Hai diritto al risarcimento in denaro. Verifica quanto ti spetta.
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=overbooking_voucher_refused"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Richiedi Compensazione in Denaro
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              Criteri di Selezione: Chi Viene Escluso?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Se non ci sono abbastanza volontari, la compagnia deve seguire criteri <strong>oggettivi e non discriminatori</strong> 
              per decidere chi escludere. La legge vieta discriminazioni basate su razza, disabilità, età, genere.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl my-8">
              <h3 className="font-bold text-gray-900 mb-4">📋 Criteri Comuni (in ordine di priorità):</h3>
              
              <ol className="space-y-4 text-gray-800">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold">Orario di Check-in</h4>
                    <p className="text-sm mt-1">
                      Chi ha fatto check-in per ultimo viene escluso per primo. Eccezione: passeggeri con disabilità, 
                      minori non accompagnati, famiglie con bambini piccoli hanno priorità.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold">Classe di Biglietto e Tariffa</h4>
                    <p className="text-sm mt-1">
                      Biglietti economy scontati vengono esclusi prima di business class o tariffe flessibili. 
                      Ma questo NON riduce il tuo diritto al risarcimento!
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold">Status Frequent Flyer</h4>
                    <p className="text-sm mt-1">
                      Membri elite dei programmi fedeltà hanno priorità. Ma anche i passeggeri base hanno tutti i diritti CE 261.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold">Possibilità di Riprotezione</h4>
                    <p className="text-sm mt-1">
                      La compagnia può considerare chi ha destinazione finale più facile da raggiungere con voli alternativi. 
                      Esempio: passeggero per hub principale vs destinazione remota.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <h3 className="font-semibold text-red-900 mb-2">⚠️ Cosa NON Può Fare la Compagnia</h3>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>❌ Escludere basandosi su razza, nazionalità, origine etnica</li>
                <li>❌ Discriminare persone con disabilità (hanno priorità di imbarco)</li>
                <li>❌ Separare famiglie con bambini piccoli (&lt;12 anni)</li>
                <li>❌ Escludere donne in gravidanza senza motivo medico</li>
                <li>❌ Negare imbarco per motivi estetici o soggettivi</li>
              </ul>
              <p className="text-sm text-red-900 mt-3">
                <strong>Se sei stato discriminato:</strong> Documenta tutto, raccogli testimoni, segnala all'ENAC e considera azione legale per danni aggiuntivi.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Cosa Fare Immediatamente Se Ti Negano l'Imbarco
            </h2>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl my-8">
              <h3 className="font-bold text-gray-900 mb-4">🚨 Azioni Immediate (NON Lasciare l'Aeroporto!):</h3>
              
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Richiedi Documento Scritto</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      La compagnia DEVE fornirti un documento (art. 14 CE 261) che spiega: motivo del negato imbarco, 
                      tuoi diritti, procedura di reclamo. Se rifiutano, filmali e documenta il rifiuto.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Documenta Tutto</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Fotograa: carta d'imbarco, tabellone voli, gate chiuso, comunicazioni della compagnia. 
                      Video: annunci al gate, interazioni con staff.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Raccogli Testimoni</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Scambia contatti con altri passeggeri esclusi o presenti alla scena. Testimonianze multiple 
                      rafforzano il tuo caso, specialmente se contesti la procedura.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Rifiuta Voucher, Richiedi Denaro</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Dì chiaramente: "Richiedo compensazione in denaro secondo articolo 7 CE 261/2004, non accetto voucher." 
                      Se insistono, documenta il loro rifiuto.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    5
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scegli: Rimborso o Volo Alternativo</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Puoi richiedere: A) rimborso completo biglietto + volo di ritorno al punto di partenza (se necessario), 
                      OPPURE B) volo alternativo alla prima occasione. Chiarisci subito la tua scelta.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    6
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Esigi Assistenza Immediata</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Hai diritto a pasti, bevande, hotel (se necessario), trasporti. Se la compagnia non fornisce, 
                      provvedi tu e conserva TUTTI gli scontrini per rimborso successivo (spese ragionevoli).
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* CTA 3 */}
            <div className="my-12 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Hai Documentato Tutto? Richiedi Subito il Risarcimento</h3>
              <p className="text-green-100 mb-6 text-lg">
                Con la documentazione corretta, il 95% dei casi di negato imbarco involontario ottiene il risarcimento completo.
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=overbooking_claim_process"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
              >
                Inizia la Richiesta Ora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Casi Particolari e Situazioni Complesse
            </h2>

            <div className="space-y-6 my-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-blue-900 mb-2">🎫 Biglietti con Punti Frequent Flyer</h3>
                <p className="text-gray-800 text-sm mb-3">
                  <strong>Hai pieno diritto al risarcimento.</strong> Il CE 261/2004 si applica a TUTTI i passeggeri 
                  con prenotazione confermata, indipendentemente dal metodo di pagamento. L'unica eccezione sono biglietti 
                  completamente gratuiti non disponibili al pubblico (dipendenti compagnia in viaggio di piacere).
                </p>
                <p className="text-xs text-blue-800 italic">
                  Sentenza Corte UE C-22/11: Anche con biglietti a tariffa zero (punti), se è una prenotazione confermata, hai diritti pieni.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-blue-900 mb-2">👨‍👩‍👧‍👦 Famiglie con Bambini</h3>
                <p className="text-gray-800 text-sm mb-3">
                  Le famiglie con bambini sotto i 12 anni hanno <strong>priorità di imbarco</strong> e NON dovrebbero 
                  essere separate. Se la compagnia separa la famiglia o nega imbarco a un genitore con bambino piccolo, 
                  puoi richiedere danni aggiuntivi oltre al CE 261 per disagio psicologico del minore.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-blue-900 mb-2">♿ Passeggeri con Disabilità o Mobilità Ridotta</h3>
                <p className="text-gray-800 text-sm mb-3">
                  <strong>NON possono essere esclusi</strong> per overbooking tranne in casi di sicurezza certificati. 
                  Se ti escludono citando la disabilità senza motivo di sicurezza valido, è discriminazione illegale. 
                  Oltre al CE 261, puoi fare causa per danni e discriminazione (risarcimenti aggiuntivi significativi).
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-blue-900 mb-2">💼 Perdita di Eventi Importanti</h3>
                <p className="text-gray-800 text-sm mb-3">
                  Se il negato imbarco ti fa perdere: matrimonio, conferenza pagata, evento sportivo con biglietto, 
                  riunione lavorativa critica, puoi richiedere <strong>danni aggiuntivi</strong> documentabili oltre 
                  al CE 261. Conserva: biglietti evento, conferme hotel, email lavorative, prove delle perdite economiche.
                </p>
                <p className="text-xs text-blue-800 italic">
                  Questi danni si richiedono separatamente dal CE 261 e richiedono prove concrete delle perdite subite.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-blue-900 mb-2">🔄 Prenotazioni Multiple (Separate)</h3>
                <p className="text-gray-800 text-sm mb-3">
                  Se hai prenotato voli separati (non in unica prenotazione) e perdi la coincidenza per overbooking 
                  del primo volo, la compagnia del secondo volo NON è responsabile. Però hai pieno diritto al 
                  risarcimento per il primo volo negato. Considera assicurazione viaggio per prenotazioni separate.
                </p>
              </div>
            </div>

            {/* CTA 4 - Final */}
            <div className="my-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Non Lasciare che la Compagnia Ti Ignori</h3>
                <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                  Il 68% dei passeggeri esclusi per overbooking non richiede mai il risarcimento. Non lasciare 
                  sul tavolo fino a €600 che ti spettano di diritto + assistenza completa.
                </p>
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=final_cta_overbooking"
                  className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
                >
                  Richiedi il Tuo Risarcimento Ora
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
                <p className="text-blue-200 text-sm mt-4">
                  ✓ Procedura online in 3 minuti • ✓ Paghi solo se vinciamo • ✓ Nessun rischio
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mt-16 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Domande Frequenti (FAQ)</h2>
              
              <div className="space-y-6">
                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Cos'è l'overbooking e perché le compagnie lo fanno?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    L'overbooking è la pratica di vendere più biglietti dei posti disponibili sull'aereo. Le compagnie 
                    aeree lo fanno perché statisticamente il 5-15% dei passeggeri non si presenta al volo (no-show). 
                    Vendendo più posti, massimizzano i profitti. Quando tutti si presentano, qualcuno viene escluso.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Quanto posso ottenere se mi negano l'imbarco per overbooking?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Dipende dalla distanza del volo: €250 per voli fino a 1.500 km, €400 per voli 1.500-3.500 km, 
                    €600 per voli oltre 3.500 km. INOLTRE hai diritto a: rimborso completo O volo alternativo, 
                    assistenza (pasti, hotel), e risarcimento per danni aggiuntivi se documentabili.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    La compagnia può scegliere chi escludere arbitrariamente?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    No. Deve prima cercare volontari offrendo incentivi. Solo se non ci sono volontari può procedere 
                    al negato imbarco involontario, seguendo criteri oggettivi (check-in, classe biglietto, status 
                    frequent flyer). È illegale discriminare per razza, disabilità, età, o caratteristiche personali.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Devo accettare voucher invece di soldi?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    No. Hai diritto al risarcimento in contanti (o bonifico/assegno) secondo l'articolo 7 del CE 261/2004. 
                    I voucher sono validi SOLO se accetti volontariamente. Per negato imbarco involontario, la compagnia 
                    DEVE pagare in denaro se lo richiedi.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Cosa succede se perdo un evento importante (matrimonio, riunione)?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Oltre al risarcimento standard CE 261/2004, puoi richiedere danni aggiuntivi per perdite documentabili: 
                    biglietti evento non rimborsabili, prenotazioni hotel perse, danni professionali. Conserva tutte 
                    le prove (biglietti, email, conferme) e considera assistenza legale per quantificare i danni.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Ho prenotato con punti frequent flyer - ho comunque diritto al risarcimento?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Sì. Il CE 261/2004 si applica a TUTTI i passeggeri con prenotazione confermata, indipendentemente 
                    dal metodo di pagamento (soldi, punti, voucher). L'unica eccezione sono i biglietti gratuiti non 
                    disponibili al pubblico (es: dipendenti compagnia in viaggio di piacere).
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
                  <h3 className="font-semibold text-gray-900 mb-2">Regolamento CE 261/2004</h3>
                  <p className="text-sm text-gray-600">Guida completa ai diritti dei passeggeri</p>
                </Link>

                <Link href="/it/blog/come-presentare-reclamo-guida-completa" 
                      className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Come Presentare Reclamo</h3>
                  <p className="text-sm text-gray-600">Procedura passo-passo completa</p>
                </Link>

                <Link href="/it/blog/circostanze-straordinarie-spiegate" 
                      className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Circostanze Straordinarie</h3>
                  <p className="text-sm text-gray-600">Quando la compagnia può rifiutare</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </LayoutIt>
  );
}