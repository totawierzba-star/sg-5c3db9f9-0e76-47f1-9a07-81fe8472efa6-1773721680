import { SEO } from "@/components/SEO";
import { LayoutIt } from "@/components/LayoutIt";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Euro, 
  AlertTriangle,
  FileText,
  ArrowRight,
  Plane,
  Calendar
} from "lucide-react";

export default function RyanairItaliaRisarcimento() {
  return (
    <LayoutIt>
      <SEO 
        title="Ryanair Italia risarcimento — ritardi e cancellazioni 2025"
        description="Guida completa su come ottenere risarcimento da Ryanair per voli in ritardo o cancellati in Italia. Procedure, importi fino a 600 € e diritti passeggeri CE 261/2004."
        canonical="https://lotproblem.pl/it/blog/ryanair-italia-risarcimento"
      />

      <article className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Link href="/it/blog" className="hover:text-blue-600">Blog</Link>
              <span>/</span>
              <span className="text-gray-900">Ryanair Italia risarcimento</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ryanair Italia — Come ottenere risarcimento per ritardi e cancellazioni
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                1 febbraio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                12 min di lettura
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Compagnie aeree
              </span>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              Ryanair è la compagnia aerea più utilizzata in Italia, ma anche quella con il maggior numero di reclami per ritardi e cancellazioni. Questa guida completa ti spiega come ottenere fino a 600 € di risarcimento secondo il Regolamento CE 261/2004.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* Quick Stats */}
            <Card className="bg-blue-50 border-blue-200 mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-6 w-6 text-blue-600" />
                  Ryanair in Italia — Dati chiave
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">40%</div>
                    <div className="text-sm text-gray-600">quota di mercato low-cost in Italia</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">18,3%</div>
                    <div className="text-sm text-gray-600">ritardi oltre 15 minuti (2024)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">2,4%</div>
                    <div className="text-sm text-gray-600">voli cancellati (2024)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quando spetta il risarcimento */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quando hai diritto al risarcimento Ryanair?
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Il Regolamento CE 261/2004 stabilisce che hai diritto al risarcimento quando il tuo volo Ryanair:
              </p>

              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Ritardo di 3 ore o più all'arrivo finale
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Il ritardo viene calcolato sull'apertura delle porte all'aeroporto di destinazione finale, non sulla partenza.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Cancellazione con preavviso inferiore a 14 giorni
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Se Ryanair cancella il volo con meno di 14 giorni di anticipo, hai diritto sia al volo alternativo che al risarcimento.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Negato imbarco (overbooking)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Anche con biglietto regolare e check-in puntuale, se Ryanair ti nega l'imbarco per overbooking hai diritto a risarcimento immediato.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Coincidenza persa per ritardo del primo volo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Se hai prenotato tutto in un'unica transazione e il primo volo Ryanair ritarda causando la perdita della coincidenza.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* CTA 1 */}
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Hai avuto problemi con Ryanair?</h3>
                  <p className="text-blue-100 mb-6">
                    Verifica gratuitamente se hai diritto al risarcimento. Il 89% dei nostri clienti Ryanair ottiene il pagamento entro 60 giorni.
                  </p>
                  <div className="text-center">
                    <Link
                      href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=ryanair_italia"
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                      Verifica il tuo volo Ryanair ora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Importi risarcimento */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quanto risarcimento puoi ottenere da Ryanair?
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                L'importo del risarcimento dipende esclusivamente dalla distanza del volo, non dal prezzo del biglietto:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Distanza volo</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Risarcimento</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Rotte Ryanair tipiche</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Fino a 1.500 km</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className="font-bold text-green-600 text-xl">250 €</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">
                        Roma → Barcellona, Milano → Londra, Venezia → Berlino
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">1.500 - 3.500 km</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className="font-bold text-green-600 text-xl">400 €</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">
                        Milano → Tel Aviv, Roma → Marrakech, Bergamo → Canarie
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Oltre 3.500 km</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className="font-bold text-green-600 text-xl">600 €</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">
                        Ryanair non opera rotte oltre 3.500 km dall'Italia
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-yellow-800">
                    <AlertTriangle className="h-5 w-5" />
                    Importante da sapere
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-yellow-600 font-bold">•</span>
                      <span>Il risarcimento è <strong>per passeggero</strong>, non per prenotazione</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-600 font-bold">•</span>
                      <span>Vale anche se hai pagato il biglietto 10 €</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-600 font-bold">•</span>
                      <span>È aggiuntivo al rimborso del biglietto (in caso di cancellazione)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-600 font-bold">•</span>
                      <span>Hai fino a 6 anni per reclamare (in Italia)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Circostanze straordinarie */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quando Ryanair NON deve pagare il risarcimento?
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ryanair può rifiutare il risarcimento solo se dimostra "circostanze straordinarie" - eventi fuori dal suo controllo:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-l-4 border-l-red-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <XCircle className="h-5 w-5 text-red-600" />
                      Circostanze straordinarie valide
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-red-500">•</span>
                        <span>Maltempo estremo (tempeste, neve intensa)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-500">•</span>
                        <span>Scioperi del controllo del traffico aereo</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-500">•</span>
                        <span>Emergenze mediche improvvise</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-500">•</span>
                        <span>Minacce terroristiche</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-500">•</span>
                        <span>Chiusura spazio aereo</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      NON sono circostanze straordinarie
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-green-500">•</span>
                        <span>Problemi tecnici dell'aereo</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-500">•</span>
                        <span>Scioperi del personale Ryanair</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-500">•</span>
                        <span>Carenza di equipaggio</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-500">•</span>
                        <span>Ritardi precedenti nella rotazione aereo</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-500">•</span>
                        <span>Bird strike (uccelli contro l'aereo)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    Attenzione ai rifiuti ingiustificati
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="mb-4">
                    Ryanair spesso rifiuta inizialmente il risarcimento adducendo "circostanze straordinarie" anche quando non sussistono. I motivi più comuni di rifiuto ingiustificato:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">1.</span>
                      <span><strong>"Problemi tecnici imprevisti"</strong> - La manutenzione ordinaria NON è circostanza straordinaria</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">2.</span>
                      <span><strong>"Decisioni operative"</strong> - Le scelte aziendali sono responsabilità di Ryanair</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">3.</span>
                      <span><strong>"Ritardi precedenti"</strong> - L'effetto domino non esonera dalla responsabilità</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CTA 2 */}
            <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ryanair ha rifiutato il tuo reclamo?</h3>
                <p className="text-green-100 mb-6">
                  L'89% dei rifiuti Ryanair può essere ribaltato con l'assistenza legale appropriata. Non accettare un "no" se hai ragione.
                </p>
                <div className="text-center">
                  <Link
                    href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=ryanair_italia"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Fai valere i tuoi diritti
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Come richiedere risarcimento */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Come richiedere il risarcimento a Ryanair
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Hai due opzioni per ottenere il risarcimento da Ryanair:
              </p>

              <div className="space-y-6 mb-8">
                <Card className="border-2 border-gray-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-6 w-6 text-gray-600" />
                      Opzione 1: Reclamo diretto a Ryanair
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Vantaggi:</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li className="flex gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Gratuito</span>
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Ricevi il 100% del risarcimento</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Svantaggi:</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li className="flex gap-2">
                            <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>Tasso di successo: solo 23% ottiene il pagamento</span>
                          </li>
                          <li className="flex gap-2">
                            <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>Tempo medio di risposta: 6-12 mesi (se risponde)</span>
                          </li>
                          <li className="flex gap-2">
                            <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>Ryanair spesso ignora o rifiuta senza motivo</span>
                          </li>
                          <li className="flex gap-2">
                            <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>Devi gestire tutta la documentazione legale</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-500 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <CheckCircle2 className="h-6 w-6 text-blue-600" />
                      Opzione 2: Con ClaimWinger (CONSIGLIATO)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Vantaggi:</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li className="flex gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>89% di tasso di successo</strong> con Ryanair</span>
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Pagamento medio in <strong>45-60 giorni</strong></span>
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Nessun costo anticipato - paghi solo se vinciamo</span>
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Team legale specializzato contro Ryanair</span>
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Gestiamo tutto: documentazione, negoziazione, eventuale causa</span>
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Monitoraggio caso in tempo reale</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Commissione:</h4>
                        <p className="text-gray-700">
                          25% + IVA solo in caso di successo. Se non otteniamo il risarcimento, non paghi nulla.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle>Confronto risultati</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-300">
                          <th className="text-left py-3 px-4">Metodo</th>
                          <th className="text-left py-3 px-4">Tasso successo</th>
                          <th className="text-left py-3 px-4">Tempo medio</th>
                          <th className="text-left py-3 px-4">Importo netto (su 250 €)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">Reclamo diretto</td>
                          <td className="py-3 px-4 text-red-600 font-semibold">23%</td>
                          <td className="py-3 px-4">6-12 mesi</td>
                          <td className="py-3 px-4">250 € (se succede)</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="py-3 px-4 font-semibold">Con ClaimWinger</td>
                          <td className="py-3 px-4 text-green-600 font-bold">89%</td>
                          <td className="py-3 px-4 font-semibold">45-60 giorni</td>
                          <td className="py-3 px-4 font-semibold">~185 € (75% di 250 €)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    * Statistiche basate su oltre 50.000 casi gestiti dal 2020 ad oggi
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Documentazione necessaria */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Documenti necessari per il reclamo
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Indipendentemente dal metodo scelto, avrai bisogno di:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Documenti essenziali</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Carta d'imbarco</div>
                          <div className="text-sm text-gray-600">Anche digitale va bene</div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Conferma prenotazione</div>
                          <div className="text-sm text-gray-600">Email di Ryanair con codice PNR</div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Prova del ritardo/cancellazione</div>
                          <div className="text-sm text-gray-600">Screenshot, foto tabelloni, email Ryanair</div>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Documenti utili (se disponibili)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Spese sostenute</div>
                          <div className="text-sm text-gray-600">Ricevute pasti, hotel, taxi</div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Comunicazioni Ryanair</div>
                          <div className="text-sm text-gray-600">SMS, email, notifiche app</div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Testimonianze</div>
                          <div className="text-sm text-gray-600">Altri passeggeri, foto situazione aeroporto</div>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Domande frequenti su Ryanair e risarcimenti
              </h2>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quanto tempo ho per reclamare il risarcimento?</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    <p>
                      In Italia hai <strong>6 anni</strong> dalla data del volo per richiedere il risarcimento. Tuttavia, è consigliabile agire entro 3-6 mesi per facilitare la raccolta di prove e accelerare la procedura.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Posso richiedere risarcimento per tutti i passeggeri della mia prenotazione?</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    <p>
                      Sì! Ogni passeggero ha diritto individuale al risarcimento. Se hai prenotato per 4 persone su un volo da 250 €, puoi richiedere 1.000 € totali (250 € x 4). I minori hanno gli stessi diritti degli adulti.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Ryanair mi ha offerto un voucher. Devo accettarlo?</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    <p>
                      <strong>No, non sei obbligato.</strong> Hai diritto al risarcimento in denaro secondo CE 261/2004. I voucher Ryanair hanno spesso limitazioni (scadenze, restrizioni d'uso) e non sostituiscono il risarcimento monetario. Puoi rifiutare il voucher e richiedere il pagamento in denaro.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Il mio volo è partito in orario ma è arrivato in ritardo. Ho diritto?</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    <p>
                      Sì! Ciò che conta è il ritardo all'<strong>arrivo finale</strong> (apertura porte), non alla partenza. Anche se il volo è partito puntuale, se sei arrivato con 3+ ore di ritardo hai diritto al risarcimento.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Ryanair dice che il ritardo è dovuto a maltempo. È vero?</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    <p>
                      Non sempre. Ryanair spesso adduce "maltempo" come scusa anche quando altri voli sono partiti regolarmente. Il maltempo deve essere <strong>eccezionale e documentato</strong> (chiusura aeroporto, allerta meteo ufficiale). Se altri voli sono partiti, probabilmente hai diritto al risarcimento.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Ho prenotato tramite agenzia di viaggio. Devo rivolgermi a loro?</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    <p>
                      No. Il risarcimento CE 261/2004 si richiede direttamente alla <strong>compagnia aerea</strong> (Ryanair), non all'agenzia. L'agenzia è solo intermediaria per l'acquisto del biglietto. Il contratto di trasporto è tra te e Ryanair.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Finale */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-4">Pronto a ottenere il tuo risarcimento?</h3>
                <p className="text-xl text-blue-100 mb-8">
                  Verifica gratuitamente il tuo volo Ryanair in 2 minuti. Nessun costo se non otteniamo il risarcimento.
                </p>
                <div className="text-center">
                  <Link
                    href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=ryanair_italia"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Verifica il tuo volo ora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <p className="text-sm text-blue-200 mt-6">
                  ✓ 89% di tasso di successo con Ryanair<br />
                  ✓ Pagamento medio in 60 giorni<br />
                  ✓ Oltre 50.000 passeggeri aiutati
                </p>
              </CardContent>
            </Card>

            {/* Back to blog */}
            <div className="mt-12 text-center">
              <Link href="/it/blog" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2">
                ← Torna al blog
              </Link>
            </div>
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}