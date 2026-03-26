import { SEO } from "@/components/SEO";
import { LayoutIt } from "@/components/LayoutIt";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle, Clock, Euro, Plane, FileText, Shield, TrendingUp } from "lucide-react";

export default function EasyJetItaliaRisarcimento() {
  return (
    <LayoutIt>
      <SEO
        title="easyJet Italia risarcimento — ritardi e cancellazioni 2026"
        description="Guida completa su come ottenere risarcimento da easyJet per voli in ritardo o cancellati in Italia. Procedure, importi fino a 600 € e diritti passeggeri CE 261/2004."
        url="https://problemlot.com/it/blog/easyjet-italia-risarcimento"
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/it" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/it/blog" className="hover:text-blue-600">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">easyJet Italia risarcimento</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Compagnie aeree
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              easyJet Italia risarcimento — ritardi e cancellazioni 2026
            </h1>
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>11 min di lettura</span>
              </div>
              <div>1° marzo 2026</div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Guida completa su come ottenere risarcimento da easyJet per voli in ritardo o cancellati in Italia. Scopri procedure, importi fino a 600 € e i tuoi diritti secondo il Regolamento CE 261/2004.
            </p>
          </header>

          {/* easyJet in Italia - Context */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">easyJet in Italia — Il terzo gigante low-cost</h2>
            
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <Plane className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">15%</div>
                  <p className="text-gray-600">Quota mercato low-cost italiano</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">20.3%</div>
                  <p className="text-gray-600">Ritardi oltre 15 min (2024)</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <AlertTriangle className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">2.6%</div>
                  <p className="text-gray-600">Voli cancellati (2024)</p>
                </div>
              </div>
            </div>

            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                <strong>easyJet è la terza compagnia low-cost in Italia</strong> dopo Ryanair e Wizz Air, con una presenza consolidata soprattutto nel Nord Italia. Con <strong>Milano Malpensa come hub principale</strong> (oltre 80 rotte), easyJet opera anche da Venezia, Napoli, Roma Fiumicino e altri aeroporti italiani.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="font-bold text-gray-900 mb-3">📊 easyJet Italia in numeri (2024-2025):</h3>
                <ul className="space-y-2">
                  <li><strong>Hub principale:</strong> Milano Malpensa (MXP) — oltre 80 destinazioni</li>
                  <li><strong>Basi secondarie:</strong> Venezia Marco Polo, Napoli Capodichino, Roma Fiumicino</li>
                  <li><strong>Flotta:</strong> ~350 aeromobili Airbus (A319, A320, A320neo, A321)</li>
                  <li><strong>Puntualità:</strong> 79.7% (leggermente meglio di Ryanair 81.7%)</li>
                  <li><strong>Cancellazioni:</strong> 2.6% (in linea con media UE)</li>
                  <li><strong>Destinazioni popolari:</strong> Londra, Parigi, Amsterdam, Barcellona, Berlino, Vienna, Zurigo</li>
                </ul>
              </div>

              <p>
                <strong>Punto forte di easyJet:</strong> migliore servizio clienti rispetto ad altri low-cost, con assistenza più accessibile e tassi di risposta più rapidi. Tuttavia, i ritardi e cancellazioni rimangono comuni, specialmente nei picchi estivi e su rotte ad alta frequenza come Milano-Londra.
              </p>
            </div>
          </section>

          {/* CTA 1 */}
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">Volo easyJet in ritardo o cancellato?</h3>
            <p className="text-blue-100 mb-6">
              Verifica gratuitamente il tuo diritto al risarcimento in 2 minuti. Fino a 600 € per passeggero.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                Verifica risarcimento gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </Card>

          {/* Quando hai diritto */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quando hai diritto al risarcimento easyJet</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-2 border-green-200 bg-green-50">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">✅ HAI DIRITTO se:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Ritardo di 3+ ore</strong> all'arrivo finale</li>
                      <li><strong>Volo cancellato</strong> con meno di 14 giorni di preavviso</li>
                      <li><strong>Negato imbarco</strong> (overbooking)</li>
                      <li><strong>Coincidenza persa</strong> per ritardo primo volo easyJet</li>
                      <li>Il problema è <strong>responsabilità della compagnia</strong></li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-red-200 bg-red-50">
                <div className="flex items-start gap-4">
                  <XCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">❌ NON hai diritto se:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Ritardo causato da <strong>maltempo grave</strong></li>
                      <li><strong>Scioperi controllori volo</strong> (ENAV, Eurocontrol)</li>
                      <li><strong>Emergenze mediche</strong> a bordo</li>
                      <li><strong>Problemi sicurezza aeroporto</strong></li>
                      <li>Cancellazione comunicata <strong>14+ giorni prima</strong></li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
              <div className="flex gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">⚠️ ATTENZIONE: "Problemi tecnici" easyJet</h3>
                  <p className="text-gray-700">
                    easyJet spesso giustifica ritardi con "problemi tecnici imprevisti" cercando di evitare pagamenti. <strong>La maggior parte dei problemi tecnici NON sono circostanze straordinarie</strong> secondo la Corte di Giustizia UE. Solo guasti completamente imprevedibili (difetti nascosti del produttore) esentano la compagnia. Manutenzione ordinaria = responsabilità easyJet.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Importi risarcimento */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">💰 Quanto risarcimento ti spetta con easyJet</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-orange-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Distanza volo</th>
                    <th className="p-4 text-left">Risarcimento</th>
                    <th className="p-4 text-left">Rotte tipiche easyJet da Italia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">Fino a 1.500 km</td>
                    <td className="p-4 text-2xl font-bold text-green-600">250 €</td>
                    <td className="p-4 text-sm">
                      Milano→Londra, Venezia→Parigi, Napoli→Madrid, Roma→Monaco, Milano→Berlino, Venezia→Amsterdam
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="p-4 font-semibold">1.500 - 3.500 km</td>
                    <td className="p-4 text-2xl font-bold text-green-600">400 €</td>
                    <td className="p-4 text-sm">
                      Milano→Tel Aviv, Venezia→Reykjavik, Napoli→Mosca, Roma→Il Cairo, Milano→Istanbul
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">Oltre 3.500 km</td>
                    <td className="p-4 text-2xl font-bold text-green-600">600 €</td>
                    <td className="p-4 text-sm">
                      (easyJet opera principalmente voli europei, raramente &gt;3.500 km)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Esempio reale:</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Scenario:</strong> Famiglia di 4 persone vola da Milano Malpensa a Londra Gatwick con easyJet</p>
                <p><strong>Problema:</strong> Volo in ritardo di 4 ore all'arrivo</p>
                <p><strong>Distanza:</strong> ~950 km (categoria sotto 1.500 km)</p>
                <p className="text-2xl font-bold text-green-600 pt-4">
                  Risarcimento totale: 4 passeggeri × 250 € = 1.000 € 🎉
                </p>
              </div>
            </div>
          </section>

          {/* Come richiedere */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📋 Come richiedere risarcimento a easyJet</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold">Opzione 1: Reclamo diretto</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">✅ Vantaggi:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Gratuito</li>
                      <li>• Ricevi 100% del risarcimento</li>
                      <li>• Assistenza clienti migliore di Ryanair/Wizz</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">❌ Svantaggi:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Solo ~38% tasso successo (vs 91% con assistenza)</li>
                      <li>• 4-8 mesi di attesa</li>
                      <li>• Devi gestire tutta la documentazione</li>
                      <li>• easyJet può rigettare con giustificazioni vaghe</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">📞 Contatti easyJet:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>📧 <strong>customer.service@easyjet.com</strong></li>
                      <li>📞 <strong>+39 02 36001589</strong> (lun-ven 9-17)</li>
                      <li>🌐 <strong>easyjet.com/it/help</strong> (modulo online)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-blue-500 bg-blue-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Opzione 2: Con ClaimWinger</h3>
                    <span className="text-sm text-blue-600 font-semibold">⭐ CONSIGLIATO</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">✅ Vantaggi:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>91% tasso successo</strong> con easyJet</li>
                      <li>• <strong>Pagamento in 45-60 giorni</strong></li>
                      <li>• Nessun costo anticipato</li>
                      <li>• Team legale specializzato</li>
                      <li>• Gestiamo anche in tribunale se necessario</li>
                      <li>• Nessun rischio finanziario</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2">💰 Costo:</h4>
                    <p className="text-sm text-gray-700">
                      <strong>25% + IVA</strong> solo se vinciamo<br/>
                      Se non otteniamo il risarcimento = 0 € per te
                    </p>
                  </div>

                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                      Inizia richiesta gratis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <h3 className="text-xl font-bold mb-2">📊 Confronto metodi — esempio 250 €</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 text-left">Metodo</th>
                      <th className="p-4 text-left">Tasso successo</th>
                      <th className="p-4 text-left">Tempo medio</th>
                      <th className="p-4 text-left">Importo netto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4 font-semibold">Reclamo diretto</td>
                      <td className="p-4">38%</td>
                      <td className="p-4">4-8 mesi</td>
                      <td className="p-4">250 € <span className="text-sm text-gray-500">(se succede)</span></td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="p-4 font-semibold">ClaimWinger</td>
                      <td className="p-4 text-green-600 font-bold">91%</td>
                      <td className="p-4 text-green-600 font-bold">45-60 giorni</td>
                      <td className="p-4 text-green-600 font-bold">~185 € (75%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
              <p className="text-gray-700">
                <strong>💡 Conclusione:</strong> Con ClaimWinger hai <strong>2.4x più probabilità di successo</strong> e ricevi il pagamento <strong>3-4x più velocemente</strong>. Anche deducendo la commissione (25%), il tuo rendimento atteso è significativamente superiore.
              </p>
            </div>
          </section>

          {/* CTA 2 */}
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Euro className="w-12 h-12" />
              <h3 className="text-2xl font-bold">Recupera il tuo risarcimento easyJet</h3>
            </div>
            <p className="text-orange-100 mb-6">
              91% di successo con easyJet. Nessun costo anticipato, paghi solo se vinciamo. Verifica gratis in 2 minuti.
            </p>
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
              <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                Verifica risarcimento easyJet
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </Card>

          {/* Documenti necessari */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📄 Documenti necessari per il reclamo</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-green-200">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  OBBLIGATORI
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Carta d'imbarco</strong><br/>
                      <span className="text-sm text-gray-600">Digitale (app easyJet) o stampata — conservala sempre!</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Conferma prenotazione</strong><br/>
                      <span className="text-sm text-gray-600">Email con codice prenotazione (6 caratteri alfanumerici)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Prova ritardo/cancellazione</strong><br/>
                      <span className="text-sm text-gray-600">Screenshot app, email easyJet, foto tabellone aeroporto</span>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-2 border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  UTILI (non obbligatori)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Ricevute spese</strong><br/>
                      <span className="text-sm text-gray-600">Hotel, pasti, trasporti durante attesa — puoi richiedere rimborso separato</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Comunicazioni easyJet</strong><br/>
                      <span className="text-sm text-gray-600">Email, SMS, notifiche app sulla cancellazione/ritardo</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Certificato ritardo</strong><br/>
                      <span className="text-sm text-gray-600">Richiedi al banco easyJet in aeroporto (se possibile)</span>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mt-6">
              <h3 className="font-bold text-gray-900 mb-2">⏰ Tempi di prescrizione in Italia</h3>
              <p className="text-gray-700 mb-4">
                Hai <strong>6 anni dalla data del volo</strong> per reclamare il risarcimento. Tuttavia, è altamente consigliato presentare il reclamo entro 3 mesi per massimizzare le probabilità di successo (documenti freschi, dettagli chiari).
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>✅ <strong>Entro 3 mesi:</strong> IDEALE (documenti freschi, massima probabilità successo)</p>
                <p>⚠️ <strong>3 mesi - 2 anni:</strong> Ancora ottimo (alcuni documenti potrebbero essere persi)</p>
                <p>🕐 <strong>2-6 anni:</strong> Possibile ma più difficile (documentazione limitata)</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">❓ Domande frequenti easyJet</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-3">1. easyJet mi ha offerto voucher — devo accettare?</h3>
                <p className="text-gray-700">
                  <strong>NO!</strong> Puoi rifiutare il voucher e richiedere denaro contante. Il voucher easyJet NON sostituisce il risarcimento CE 261/2004 — sono due cose separate. Hai diritto a:
                </p>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>1. <strong>Rimborso del biglietto</strong> (se non hai volato) OPPURE volo alternativo</li>
                  <li>2. <strong>Risarcimento CE 261</strong> (250-600 € secondo distanza)</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  Il voucher può coprire il punto 1, ma NON il punto 2. Non lasciarti ingannare!
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-3">2. Biglietto acquistato in offerta — ho diritto al risarcimento?</h3>
                <p className="text-gray-700">
                  <strong>SÌ, ASSOLUTAMENTE!</strong> Il prezzo pagato è completamente irrilevante secondo il Regolamento CE 261/2004. Anche se hai pagato 9.99 € con una super offerta easyJet, hai diritto a 250-600 € di risarcimento in caso di problemi. I tuoi diritti non dipendono dal prezzo del biglietto.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-3">3. easyJet dice "problemi tecnici imprevisti" — è valido?</h3>
                <p className="text-gray-700">
                  <strong>Quasi mai!</strong> Secondo la Corte di Giustizia dell'Unione Europea (sentenza C-549/07 Wallentin-Hermann), solo i guasti tecnici <strong>completamente imprevedibili</strong> (es. difetto nascosto del produttore, non rilevabile con manutenzione ordinaria) esentano la compagnia.
                </p>
                <p className="text-gray-700 mt-2">
                  La maggior parte dei "problemi tecnici" di easyJet ricade nella manutenzione ordinaria = <strong>responsabilità della compagnia</strong>. Se easyJet rifiuta con questa motivazione, richiedi documentazione tecnica dettagliata o procedi con assistenza legale.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-3">4. Quante volte posso reclamare con easyJet?</h3>
                <p className="text-gray-700">
                  <strong>Ogni volo è separato!</strong> Se voli 10 volte all'anno con easyJet e subisci ritardi/cancellazioni ogni volta, puoi presentare 10 reclami separati. Non c'è limite al numero di reclami che puoi fare — ogni volo ha i propri diritti secondo CE 261/2004.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-3">5. easyJet ignora il mio reclamo — cosa posso fare?</h3>
                <p className="text-gray-700">
                  Se easyJet non risponde entro <strong>6 settimane</strong> dalla presentazione del reclamo, hai diverse opzioni:
                </p>
                <ul className="mt-2 space-y-2 text-gray-700">
                  <li><strong>1. Rivolgerti a ClaimWinger:</strong> Gestiamo tutto noi, anche l'azione legale se necessaria</li>
                  <li><strong>2. ADR/Conciliazione:</strong> AirHelp+, Alternative Dispute Resolution (gratuito ma lento)</li>
                  <li><strong>3. Tribunale:</strong> Puoi citare easyJet in tribunale (consigliato con assistenza legale)</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-3">6. easyJet vs Ryanair/Wizz Air — qual è migliore per risarcimenti?</h3>
                <p className="text-gray-700">
                  <strong>Classifica servizio clienti low-cost:</strong>
                </p>
                <ol className="mt-2 space-y-2 text-gray-700">
                  <li><strong>1. easyJet</strong> — Migliore assistenza, ~38% successo reclami diretti</li>
                  <li><strong>2. Ryanair</strong> — Assistenza base, ~23% successo reclami diretti</li>
                  <li><strong>3. Wizz Air</strong> — Peggiore assistenza, ~18% successo reclami diretti</li>
                </ol>
                <p className="text-gray-700 mt-2">
                  <strong>Con assistenza legale (ClaimWinger):</strong> tassi di successo simili per tutte (87-91%), perché gestiamo noi le complessità legali.
                </p>
              </Card>
            </div>
          </section>

          {/* Final CTA */}
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Non lasciare che easyJet ignori i tuoi diritti</h2>
            <p className="text-xl text-blue-100 mb-6">
              91% di successo • Nessun costo anticipato • Pagamento in 45-60 giorni
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                  Verifica risarcimento gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              ⭐ Migliaia di passeggeri easyJet già risarciti • Garanzia soddisfatti o rimborsati
            </p>
          </Card>

          {/* Related articles */}
          <section className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 Articoli correlati</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/it/blog/ryanair-italia-risarcimento">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="text-blue-600 font-semibold mb-2">Compagnie aeree</div>
                  <h4 className="font-bold text-gray-900 mb-2">Ryanair Italia risarcimento</h4>
                  <p className="text-sm text-gray-600">Guida completa Ryanair: procedure, importi e diritti passeggeri.</p>
                </Card>
              </Link>

              <Link href="/it/blog/wizz-air-italia-risarcimento">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="text-blue-600 font-semibold mb-2">Compagnie aeree</div>
                  <h4 className="font-bold text-gray-900 mb-2">Wizz Air Italia risarcimento</h4>
                  <p className="text-sm text-gray-600">Come ottenere compensazione da Wizz Air per ritardi e cancellazioni.</p>
                </Card>
              </Link>

              <Link href="/it/blog/aeroporto-milano-malpensa-ritardi">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="text-green-600 font-semibold mb-2">Aeroporti</div>
                  <h4 className="font-bold text-gray-900 mb-2">Aeroporto Milano Malpensa ritardi</h4>
                  <p className="text-sm text-gray-600">Diritti passeggeri e risarcimenti per voli da/per Malpensa (hub easyJet).</p>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutIt>
  );
}
