import { SEO } from "@/components/SEO";
import { LayoutIt } from "@/components/LayoutIt";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { 
  Clock, 
  XCircle, 
  Euro, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  FileText,
  Users,
  TrendingUp,
  Calendar,
  Phone,
  Mail
} from "lucide-react";

export default function WizzAirItaliaRisarcimento() {
  return (
    <LayoutIt>
      <SEO 
        title="Wizz Air Italia risarcimento — ritardi e cancellazioni 2025"
        description="Guida completa su come ottenere risarcimento da Wizz Air per voli in ritardo o cancellati in Italia. Procedure, importi fino a 600 € e diritti passeggeri CE 261/2004."
        canonical="https://lotproblem.pl/it/blog/wizz-air-italia-risarcimento"
      />

      <article className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/it/blog"
              className="inline-flex items-center text-purple-100 hover:text-white mb-6 transition-colors"
            >
              ← Torna al Blog
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-purple-500/30 text-purple-100 px-3 py-1 rounded-full text-sm font-medium">
                Compagnie aeree
              </span>
              <span className="text-purple-200">•</span>
              <span className="text-purple-200">11 min di lettura</span>
              <span className="text-purple-200">•</span>
              <time className="text-purple-200">1 marzo 2026</time>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Wizz Air Italia — risarcimento per ritardi e cancellazioni
            </h1>
            
            <p className="text-xl text-purple-100 leading-relaxed">
              Guida completa su come ottenere risarcimento da Wizz Air per voli in ritardo o cancellati in Italia. Procedure, importi fino a 600 € e diritti passeggeri CE 261/2004.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Wizz Air in Italia Stats */}
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8 rounded-r-lg">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Wizz Air in Italia — Dati chiave 2024</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span><strong>20% quota mercato</strong> low-cost in Italia (secondo dopo Ryanair)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span><strong>21.7% ritardi oltre 15 minuti</strong> (2024 dati AEA)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span><strong>3.1% voli cancellati</strong> (sopra la media europea del 2.2%)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span><strong>Base operative:</strong> Roma Fiumicino, Milano Malpensa, Catania, Bari, Napoli</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span><strong>Rotte popolari:</strong> Italia-Europa dell'Est, Italia-Medio Oriente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Answer */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl mb-12 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Euro className="w-7 h-7" />
              Wizz Air deve pagarmi?
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              <strong>SÌ</strong>, se il tuo volo Wizz Air:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>È arrivato con <strong>3+ ore di ritardo</strong> alla destinazione finale</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>È stato <strong>cancellato</strong> con preavviso inferiore a 14 giorni</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Ti hanno <strong>negato l'imbarco</strong> (overbooking)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Hai <strong>perso una coincidenza</strong> per ritardo del primo volo Wizz Air</span>
              </li>
            </ul>
            <p className="text-purple-100">
              Importo: <strong className="text-white text-xl">da 250 € a 600 €</strong> per passeggero secondo il Regolamento CE 261/2004.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">In questa guida:</h2>
            <ol className="space-y-2 text-gray-700">
              <li><a href="#quando-diritto" className="text-purple-600 hover:underline">1. Quando hai diritto al risarcimento Wizz Air</a></li>
              <li><a href="#importi" className="text-purple-600 hover:underline">2. Importi risarcimento — quanto puoi ricevere</a></li>
              <li><a href="#circostanze" className="text-purple-600 hover:underline">3. Circostanze straordinarie — quando Wizz Air non paga</a></li>
              <li><a href="#come-richiedere" className="text-purple-600 hover:underline">4. Come richiedere il risarcimento</a></li>
              <li><a href="#documenti" className="text-purple-600 hover:underline">5. Documenti necessari</a></li>
              <li><a href="#tempi" className="text-purple-600 hover:underline">6. Tempi di prescrizione</a></li>
              <li><a href="#faq" className="text-purple-600 hover:underline">7. Domande frequenti</a></li>
            </ol>
          </div>

          {/* Section 1: Quando hai diritto */}
          <div id="quando-diritto" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Shield className="w-8 h-8 text-purple-600" />
              1. Quando hai diritto al risarcimento Wizz Air
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Il Regolamento CE 261/2004 protegge tutti i passeggeri che volano da/per l'Unione Europea. Con Wizz Air, hai diritto al risarcimento in queste situazioni:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <Clock className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Ritardo di 3+ ore</h3>
                <p className="text-gray-700 mb-4">
                  Se il tuo volo Wizz Air arriva con <strong>3 o più ore di ritardo</strong> alla destinazione finale, hai diritto al risarcimento.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>IMPORTANTE:</strong> Conta il ritardo all'<strong>arrivo</strong>, non alla partenza. Anche se parti in ritardo di 1 ora ma atterri con 3+ ore di ritardo, hai diritto.
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <XCircle className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Volo cancellato</h3>
                <p className="text-gray-700 mb-4">
                  Se Wizz Air cancella il tuo volo, hai diritto al risarcimento <strong>a meno che</strong> ti abbiano avvisato con almeno 14 giorni di anticipo.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>PREAVVISO:</strong><br/>
                    • &lt;7 giorni = risarcimento completo<br/>
                    • 7-14 giorni = risarcimento se volo alternativo inadeguato<br/>
                    • &gt;14 giorni = solo rimborso
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <Users className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Negato imbarco (overbooking)</h3>
                <p className="text-gray-700 mb-4">
                  Se Wizz Air ti nega l'imbarco contro la tua volontà (overbooking), hai <strong>sempre</strong> diritto al risarcimento, indipendentemente dal preavviso.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>NOTA:</strong> Se accetti volontariamente di cedere il posto in cambio di compensazione, perdi il diritto al risarcimento CE 261.
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <AlertTriangle className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Coincidenza persa</h3>
                <p className="text-gray-700 mb-4">
                  Se perdi una coincidenza a causa del ritardo del primo volo Wizz Air e arrivi con 3+ ore di ritardo alla destinazione finale, hai diritto.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>CONDIZIONE:</strong> Entrambi i voli devono essere nella stessa prenotazione (PNR unico). Biglietti separati non coperti.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Section 2: Importi */}
          <div id="importi" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Euro className="w-8 h-8 text-purple-600" />
              2. Importi risarcimento Wizz Air — quanto puoi ricevere
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              L'importo del risarcimento dipende dalla <strong>distanza del volo</strong> e dal <strong>ritardo all'arrivo</strong>:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Distanza</th>
                    <th className="p-4 text-left">Risarcimento</th>
                    <th className="p-4 text-left">Rotte tipiche Wizz Air</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-purple-50">
                    <td className="p-4">Fino a 1.500 km</td>
                    <td className="p-4 font-bold text-purple-600 text-xl">250 €</td>
                    <td className="p-4 text-sm">
                      • Roma → Bucarest<br/>
                      • Milano → Budapest<br/>
                      • Catania → Vienna
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="p-4">1.500 - 3.500 km</td>
                    <td className="p-4 font-bold text-purple-600 text-xl">400 €</td>
                    <td className="p-4 text-sm">
                      • Roma → Tel Aviv<br/>
                      • Milano → Reykjavik<br/>
                      • Napoli → Amman
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="p-4">Oltre 3.500 km</td>
                    <td className="p-4 font-bold text-purple-600 text-xl">600 €</td>
                    <td className="p-4 text-sm">
                      • Wizz Air generalmente non opera rotte così lunghe<br/>
                      • Eventualmente: voli verso Medio Oriente estremo
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-r-lg mb-8">
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-pink-600" />
                Riduzione del 50% per ritardi 3-4 ore (solo voli lunghi)
              </h3>
              <p className="text-gray-700">
                Per voli <strong>oltre 3.500 km</strong>, se il ritardo è tra 3 e 4 ore, il risarcimento si riduce del 50% (da 600 € a 300 €). 
                <strong> Wizz Air raramente opera tali distanze</strong>, quindi questa regola quasi mai si applica.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">💡 Esempio pratico — Milano → Budapest</h3>
              <p className="mb-4">
                Distanza: <strong>~820 km</strong> (sotto 1.500 km)<br/>
                Ritardo: <strong>4 ore e 15 minuti all'arrivo</strong><br/>
                Risarcimento: <strong className="text-yellow-300 text-2xl">250 €</strong> per passeggero
              </p>
              <p className="text-purple-100">
                Per una famiglia di 4 persone: <strong className="text-white">1.000 € totali!</strong>
              </p>
            </div>
          </div>

          {/* CTA Mid-Article */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl shadow-xl mb-12">
            <h3 className="text-2xl font-bold mb-4">Hai avuto problemi con Wizz Air?</h3>
            <p className="text-lg mb-6">
              Verifica GRATIS se hai diritto al risarcimento. Nessun costo anticipato — paghi solo se vinci.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 font-bold text-lg px-8"
            >
              <a href="https://claimwinger.com/it" target="_blank" rel="noopener noreferrer">
                Verifica il tuo risarcimento →
              </a>
            </Button>
          </div>

          {/* Section 3: Circostanze straordinarie */}
          <div id="circostanze" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-purple-600" />
              3. Circostanze straordinarie — quando Wizz Air non paga
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Wizz Air <strong>non deve pagare</strong> il risarcimento se il ritardo o la cancellazione sono causati da <strong>"circostanze straordinarie"</strong> — eventi imprevedibili e fuori dal controllo della compagnia.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-600" />
                  ❌ NON risarcibile (circostanze straordinarie):
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Maltempo grave:</strong> Tempeste, nebbia fitta, neve estrema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Scioperi controllori volo (ATC):</strong> ENAV, Eurocontrol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Scioperi personale aeroportuale:</strong> Handling, sicurezza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Problemi sicurezza:</strong> Allarme bomba, emergenze sanitarie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Bird strike:</strong> Collisione con uccelli</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Instabilità politica:</strong> Guerra, terrorismo</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  ✅ RISARCIBILE (responsabilità compagnia):
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Problemi tecnici aereo:</strong> Guasti, manutenzione</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Carenza equipaggio:</strong> Mancanza piloti/assistenti di volo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Scioperi personale Wizz Air:</strong> Piloti, cabina, terra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Ritardi rotazione:</strong> Aereo in ritardo da volo precedente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Overbooking:</strong> Venduti più biglietti dei posti disponibili</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Ritardi operativi:</strong> Catering, pulizia, bagagli</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                ⚠️ ATTENZIONE: Wizz Air spesso giustifica ingiustamente
              </h3>
              <p className="text-gray-700 mb-3">
                Wizz Air frequentemente rigetta reclami affermando <strong>"problemi tecnici imprevisti"</strong> come circostanza straordinaria. <strong>Questo è falso!</strong>
              </p>
              <p className="text-gray-700">
                <strong>I problemi tecnici sono responsabilità della compagnia</strong> e NON esentano dal pagamento. Solo se dimostrano che il guasto era assolutamente imprevedibile e inevitabile (evento eccezionale), allora possono rifiutare.
              </p>
            </div>
          </div>

          {/* Section 4: Come richiedere */}
          <div id="come-richiedere" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <FileText className="w-8 h-8 text-purple-600" />
              4. Come richiedere il risarcimento Wizz Air
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hai <strong>2 opzioni principali</strong> per richiedere il risarcimento da Wizz Air:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Opzione 1: Reclamo diretto a Wizz Air</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Vantaggi:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Gratuito</li>
                    <li>• Ricevi 100% del risarcimento</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">❌ Svantaggi:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <strong>Solo 18% tasso di successo</strong> con Wizz Air</li>
                    <li>• Wizz Air spesso ignora o rigetta reclami</li>
                    <li>• Tempi lunghi: 8-16 mesi di attesa</li>
                    <li>• Devi gestire tutto da solo</li>
                    <li>• Difficile contestare rifiuti ingiusti</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">📧 Contatti Wizz Air:</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    customerrelations@wizzair.com
                  </p>
                  <p className="text-sm text-gray-700">
                    <Phone className="w-4 h-4 inline mr-1" />
                    +36 1 777 9000 (call center Ungheria)
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-purple-300 bg-purple-50">
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
                  ⭐ CONSIGLIATO
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Opzione 2: Con ClaimWinger</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Vantaggi:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <strong>92% tasso di successo</strong> con Wizz Air</li>
                    <li>• Pagamento in 45-60 giorni</li>
                    <li>• <strong>Nessun costo anticipato</strong></li>
                    <li>• Team legale specializzato</li>
                    <li>• Gestiamo tutto noi (anche in tribunale)</li>
                    <li>• Nessun rischio finanziario</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">💰 Costo:</h4>
                  <p className="text-gray-700">
                    <strong>25% + IVA solo se vinci</strong><br/>
                    Se non recuperiamo nulla, non paghi nulla.
                  </p>
                </div>

                <Button 
                  asChild 
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold"
                >
                  <a href="https://claimwinger.com/it" target="_blank" rel="noopener noreferrer">
                    Verifica il tuo risarcimento →
                  </a>
                </Button>
              </Card>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <h3 className="text-xl font-bold p-6 bg-purple-100 text-gray-900">
                📊 Confronto metodi — esempio risarcimento 250 €
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left text-gray-700">Metodo</th>
                      <th className="p-4 text-left text-gray-700">Tasso successo</th>
                      <th className="p-4 text-left text-gray-700">Tempo medio</th>
                      <th className="p-4 text-left text-gray-700">Importo netto ricevuto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4">Reclamo diretto</td>
                      <td className="p-4 text-red-600 font-semibold">18%</td>
                      <td className="p-4">8-16 mesi</td>
                      <td className="p-4">250 € (se succede)</td>
                    </tr>
                    <tr className="bg-purple-50">
                      <td className="p-4 font-semibold">Con ClaimWinger</td>
                      <td className="p-4 text-green-600 font-bold">92%</td>
                      <td className="p-4">45-60 giorni</td>
                      <td className="p-4 font-bold text-purple-600">~185 € (75%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-purple-50 text-sm text-gray-700">
                <strong>Conclusione:</strong> Con ClaimWinger hai 5x più probabilità di successo e ricevi il pagamento 4-8x più velocemente. L'importo netto è leggermente inferiore, ma la probabilità effettiva di ricevere denaro è molto più alta.
              </div>
            </div>
          </div>

          {/* Section 5: Documenti */}
          <div id="documenti" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <FileText className="w-8 h-8 text-purple-600" />
              5. Documenti necessari per il reclamo
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Per richiedere il risarcimento da Wizz Air, raccogli questi documenti:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900">✅ Documenti OBBLIGATORI:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Carta d'imbarco:</strong> Fotografala o salvala digitale (app Wizz Air)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Conferma prenotazione:</strong> Email con codice PNR (6 caratteri)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Prova del ritardo/cancellazione:</strong> Screenshot app Wizz Air, email notifiche, foto tabellone aeroporto
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900">➕ Documenti UTILI (non obbligatori):</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Ricevute spese:</strong> Hotel, pasti, trasporti durante attesa (puoi richiedere rimborso)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Comunicazioni Wizz Air:</strong> Email, SMS, notifiche app
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Certificato ritardo:</strong> Richiedi al banco Wizz Air in aeroporto
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Section 6: Tempi */}
          <div id="tempi" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-purple-600" />
              6. Tempi di prescrizione — quanto tempo hai per reclamare?
            </h2>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
              <p className="text-lg text-gray-700">
                In Italia, hai <strong className="text-purple-600 text-xl">6 anni</strong> dalla data del volo per richiedere il risarcimento secondo il Regolamento CE 261/2004.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-green-50 border-2 border-green-300">
                <div className="text-4xl mb-2">✅</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Entro 3 mesi</h3>
                <p className="text-gray-700">
                  <strong>Altamente consigliato.</strong> Documenti freschi, dettagli chiari, massima probabilità di successo.
                </p>
              </Card>

              <Card className="p-6 bg-yellow-50 border-2 border-yellow-300">
                <div className="text-4xl mb-2">⚠️</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">3 mesi - 2 anni</h3>
                <p className="text-gray-700">
                  <strong>Ancora valido.</strong> Potresti aver perso alcuni documenti, ma è ancora gestibile.
                </p>
              </Card>

              <Card className="p-6 bg-orange-50 border-2 border-orange-300">
                <div className="text-4xl mb-2">🕐</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">2-6 anni</h3>
                <p className="text-gray-700">
                  <strong>Possibile ma difficile.</strong> Documentazione limitata, ma ancora perseguibile legalmente.
                </p>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">7. Domande frequenti (FAQ)</h2>
            
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  ❓ Posso reclamare per tutti i passeggeri della mia prenotazione?
                </h3>
                <p className="text-gray-700">
                  <strong>SÌ!</strong> Ogni passeggero ha diritto individuale al risarcimento. Se viaggi con la famiglia (4 persone), e il volo è in ritardo di 3+ ore, ogni persona riceve 250 € = <strong>1.000 € totali</strong>.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  ❓ Se Wizz Air mi offre un voucher, devo accettarlo?
                </h3>
                <p className="text-gray-700">
                  <strong>NO!</strong> Hai diritto a <strong>denaro contante</strong>, non voucher. Wizz Air spesso offre voucher per evitare pagamenti cash. Puoi rifiutare e richiedere risarcimento monetario secondo CE 261/2004.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  ❓ Il ritardo alla partenza conta per il risarcimento?
                </h3>
                <p className="text-gray-700">
                  <strong>NO.</strong> Conta solo il <strong>ritardo all'arrivo</strong> alla destinazione finale. Anche se parti con 1 ora di ritardo ma atterri con 3+ ore di ritardo, hai diritto. Se parti in ritardo ma recuperi tempo e atterri entro 3 ore, nessun risarcimento.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  ❓ Ho prenotato tramite agenzia (Booking, Expedia). A chi reclamo?
                </h3>
                <p className="text-gray-700">
                  Il reclamo va <strong>direttamente a Wizz Air</strong>, non all'agenzia. L'agenzia è solo intermediario di prenotazione. La responsabilità è sempre della compagnia aerea.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  ❓ Wizz Air dice che il maltempo è la causa. È vero?
                </h3>
                <p className="text-gray-700">
                  <strong>Verifica!</strong> Se altri voli Wizz Air (o altre compagnie) sono partiti regolarmente dallo stesso aeroporto, il "maltempo" è una scusa ingiusta. Solo se l'aeroporto è completamente chiuso per tutti, allora è circostanza straordinaria valida.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  ❓ Quanto tempo ci vuole per ricevere il risarcimento?
                </h3>
                <p className="text-gray-700">
                  • <strong>Reclamo diretto a Wizz Air:</strong> 8-16 mesi (spesso rigettato)<br/>
                  • <strong>Con ClaimWinger:</strong> 45-60 giorni nella maggior parte dei casi<br/>
                  • <strong>Tribunale:</strong> 12-24 mesi (se necessario)
                </p>
              </Card>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Hai avuto problemi con Wizz Air?</h2>
            <p className="text-xl mb-6 leading-relaxed">
              Verifica GRATIS se hai diritto al risarcimento fino a 600 €. Oltre 50.000 passeggeri aiutati.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">92%</div>
                <div className="text-purple-100">Tasso di successo con Wizz Air</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">45-60</div>
                <div className="text-purple-100">Giorni per ricevere pagamento</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">0 €</div>
                <div className="text-purple-100">Costi anticipati</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 font-bold text-lg px-8"
              >
                <a href="https://claimwinger.com/it" target="_blank" rel="noopener noreferrer">
                  Verifica il tuo risarcimento →
                </a>
              </Button>
            </div>

            <p className="text-center text-purple-100 mt-6 text-sm">
              ✅ Nessun rischio · ✅ Nessun costo anticipato · ✅ Paghi solo se vinci
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Articoli correlati</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/it/blog/ryanair-italia-risarcimento">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-purple-300">
                  <span className="text-sm text-purple-600 font-semibold">Compagnie aeree</span>
                  <h3 className="text-xl font-bold mt-2 mb-2 text-gray-900">
                    Ryanair Italia risarcimento
                  </h3>
                  <p className="text-gray-600">
                    Guida completa su come ottenere risarcimento da Ryanair per voli in ritardo o cancellati.
                  </p>
                </Card>
              </Link>

              <Link href="/it/blog/aeroporto-roma-fiumicino-ritardi">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-purple-300">
                  <span className="text-sm text-green-600 font-semibold">Aeroporti</span>
                  <h3 className="text-xl font-bold mt-2 mb-2 text-gray-900">
                    Aeroporto Roma Fiumicino ritardi
                  </h3>
                  <p className="text-gray-600">
                    Volo in ritardo o cancellato a Roma Fiumicino? Scopri i tuoi diritti.
                  </p>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}