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
  Mail,
  Globe
} from "lucide-react";

export default function ITAAirwaysRisarcimento() {
  return (
    <LayoutIt>
      <SEO 
        title="ITA Airways risarcimento — diritti passeggeri e procedure 2026"
        description="Tutto quello che devi sapere sui tuoi diritti con ITA Airways (ex Alitalia). Come ottenere risarcimento fino a 600 € per ritardi e cancellazioni secondo CE 261/2004."
        canonical="https://lotproblem.pl/it/blog/ita-airways-risarcimento"
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/it/blog"
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
            >
              ← Torna al Blog
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-500/30 text-blue-100 px-3 py-1 rounded-full text-sm font-medium">
                Compagnie aeree
              </span>
              <span className="text-blue-200">•</span>
              <span className="text-blue-200">10 min di lettura</span>
              <span className="text-blue-200">•</span>
              <time className="text-blue-200">1 marzo 2026</time>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              ITA Airways risarcimento — diritti passeggeri e procedure
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Tutto quello che devi sapere sui tuoi diritti con ITA Airways (ex Alitalia). Come ottenere risarcimento fino a 600 € per ritardi e cancellazioni secondo CE 261/2004.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* ITA Airways Context */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Globe className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">ITA Airways — La nuova compagnia nazionale italiana</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span><strong>Fondata:</strong> 15 ottobre 2021 (succede ad Alitalia)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span><strong>Hub principale:</strong> Roma Fiumicino (FCO)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span><strong>Flotta:</strong> ~100 aeromobili (Airbus A220, A320, A330, A350)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span><strong>Rotte:</strong> 70+ destinazioni (Italia, Europa, Nord America, Sud America, Asia)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span><strong>Alleanza:</strong> SkyTeam (codeshare con Air France, KLM, Delta)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span><strong>Proprietà:</strong> Stato italiano (fino al 2025) → Lufthansa Group (acquisizione in corso)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8 rounded-r-lg">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">ITA Airways — Performance 2024-2025</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                    <span><strong>19.2% ritardi oltre 15 minuti</strong> (leggermente sopra media UE 18.5%)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                    <span><strong>2.8% voli cancellati</strong> (in linea con media europea 2.7%)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span><strong>Miglioramento rispetto ad Alitalia:</strong> Puntualità aumentata del 12% dal 2021</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                    <span><strong>Problemi comuni:</strong> Ritardi operativi a Fiumicino, carenza equipaggio stagionale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Answer */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-xl mb-12 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Euro className="w-7 h-7" />
              ITA Airways deve pagarmi un risarcimento?
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              <strong>SÌ</strong>, se il tuo volo ITA Airways:
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
                <span>Hai <strong>perso una coincidenza</strong> per ritardo del primo volo ITA</span>
              </li>
            </ul>
            <p className="text-blue-100">
              Importo: <strong className="text-white text-xl">da 250 € a 600 €</strong> per passeggero secondo il Regolamento CE 261/2004.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">In questa guida:</h2>
            <ol className="space-y-2 text-gray-700">
              <li><a href="#quando-diritto" className="text-blue-600 hover:underline">1. Quando hai diritto al risarcimento ITA Airways</a></li>
              <li><a href="#importi" className="text-blue-600 hover:underline">2. Importi risarcimento — quanto puoi ricevere</a></li>
              <li><a href="#circostanze" className="text-blue-600 hover:underline">3. Circostanze straordinarie — quando ITA non paga</a></li>
              <li><a href="#come-richiedere" className="text-blue-600 hover:underline">4. Come richiedere il risarcimento</a></li>
              <li><a href="#documenti" className="text-blue-600 hover:underline">5. Documenti necessari</a></li>
              <li><a href="#tempi" className="text-blue-600 hover:underline">6. Tempi di prescrizione</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">7. Domande frequenti</a></li>
            </ol>
          </div>

          {/* Section 1: Quando hai diritto */}
          <div id="quando-diritto" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              1. Quando hai diritto al risarcimento ITA Airways
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ITA Airways, come compagnia aerea europea, è <strong>completamente soggetta</strong> al Regolamento CE 261/2004. Hai diritto al risarcimento in queste situazioni:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <Clock className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Ritardo di 3+ ore</h3>
                <p className="text-gray-700 mb-4">
                  Se il tuo volo ITA Airways arriva con <strong>3 o più ore di ritardo</strong> alla destinazione finale, hai diritto al risarcimento.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>IMPORTANTE:</strong> Conta il ritardo all'<strong>arrivo</strong>, non alla partenza. Anche se parti in ritardo di 1 ora ma atterri con 3+ ore di ritardo, hai diritto.
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <XCircle className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Volo cancellato</h3>
                <p className="text-gray-700 mb-4">
                  Se ITA Airways cancella il tuo volo, hai diritto al risarcimento <strong>a meno che</strong> ti abbiano avvisato con almeno 14 giorni di anticipo.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>PREAVVISO:</strong><br/>
                    • &lt;7 giorni = risarcimento completo<br/>
                    • 7-14 giorni = risarcimento se volo alternativo inadeguato<br/>
                    • &gt;14 giorni = solo rimborso
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <Users className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Negato imbarco (overbooking)</h3>
                <p className="text-gray-700 mb-4">
                  Se ITA Airways ti nega l'imbarco contro la tua volontà (overbooking), hai <strong>sempre</strong> diritto al risarcimento, indipendentemente dal preavviso.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>NOTA:</strong> ITA Airways pratica raramente l'overbooking rispetto ai low-cost, ma quando succede, il risarcimento è garantito.
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <AlertTriangle className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Coincidenza persa</h3>
                <p className="text-gray-700 mb-4">
                  Se perdi una coincidenza a causa del ritardo del primo volo ITA Airways e arrivi con 3+ ore di ritardo alla destinazione finale, hai diritto.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>ANCHE CODESHARE:</strong> Se ITA opera il primo tratto e il ritardo causa perdita coincidenza Air France/KLM/Delta, ITA è responsabile.
                  </p>
                </div>
              </Card>
            </div>

            {/* ITA vs Alitalia */}
            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-600" />
                ITA Airways vs Alitalia — Differenze per i passeggeri
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Buona notizia:</strong> ITA Airways <strong>NON ha ereditato i debiti</strong> di Alitalia. È una compagnia completamente nuova con:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Maggiore solidità finanziaria</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Migliore tasso di pagamento risarcimenti (vs vecchia Alitalia)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Flotta moderna (meno problemi tecnici)</span>
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  <span>Ma: ancora soggetta a ritardi operativi a Fiumicino (hub congestionato)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2: Importi */}
          <div id="importi" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600" />
              2. Importi risarcimento ITA Airways — quanto puoi ricevere
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              L'importo del risarcimento dipende dalla <strong>distanza del volo</strong> e dal <strong>ritardo all'arrivo</strong>:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Distanza</th>
                    <th className="p-4 text-left">Risarcimento</th>
                    <th className="p-4 text-left">Rotte tipiche ITA Airways</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50">
                    <td className="p-4">Fino a 1.500 km</td>
                    <td className="p-4 font-bold text-blue-600 text-xl">250 €</td>
                    <td className="p-4 text-sm">
                      • Roma → Milano, Venezia, Napoli<br/>
                      • Roma → Parigi, Madrid, Londra<br/>
                      • Milano → Atene, Barcellona
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="p-4">1.500 - 3.500 km</td>
                    <td className="p-4 font-bold text-blue-600 text-xl">400 €</td>
                    <td className="p-4 text-sm">
                      • Roma → Tel Aviv, Il Cairo<br/>
                      • Milano → Istanbul, Mosca<br/>
                      • Roma → Reykjavik
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="p-4">Oltre 3.500 km</td>
                    <td className="p-4 font-bold text-blue-600 text-xl">600 €</td>
                    <td className="p-4 text-sm">
                      • Roma → New York, Boston, Miami<br/>
                      • Milano → Tokyo, São Paulo<br/>
                      • Roma → Buenos Aires, Los Angeles
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg mb-8">
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                Riduzione del 50% per ritardi 3-4 ore (solo voli lunghi)
              </h3>
              <p className="text-gray-700">
                Per voli <strong>oltre 3.500 km</strong>, se il ritardo è tra 3 e 4 ore, il risarcimento si riduce del 50%:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>• Ritardo 3h-4h su Roma → New York: <strong>300 €</strong> (invece di 600 €)</li>
                <li>• Ritardo 4h+ su Roma → New York: <strong>600 €</strong> (importo pieno)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">💡 Esempi pratici — Voli ITA Airways</h3>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="font-semibold mb-2">📍 Roma Fiumicino → Parigi CDG</p>
                  <p className="mb-2">
                    Distanza: <strong>~1,100 km</strong> (sotto 1.500 km)<br/>
                    Ritardo: <strong>4 ore all'arrivo</strong><br/>
                    Risarcimento: <strong className="text-yellow-300 text-xl">250 €</strong> per passeggero
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="font-semibold mb-2">📍 Milano Linate → Tel Aviv</p>
                  <p className="mb-2">
                    Distanza: <strong>~2,600 km</strong> (1.500-3.500 km)<br/>
                    Cancellato con 5 giorni preavviso<br/>
                    Risarcimento: <strong className="text-yellow-300 text-xl">400 €</strong> per passeggero
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="font-semibold mb-2">📍 Roma FCO → New York JFK</p>
                  <p className="mb-2">
                    Distanza: <strong>~6,900 km</strong> (oltre 3.500 km)<br/>
                    Ritardo: <strong>5 ore all'arrivo</strong><br/>
                    Risarcimento: <strong className="text-yellow-300 text-xl">600 €</strong> per passeggero
                  </p>
                  <p className="text-blue-100 text-sm">
                    Per una famiglia di 4: <strong className="text-white">2.400 € totali!</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Mid-Article */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-xl shadow-xl mb-12">
            <h3 className="text-2xl font-bold mb-4">Hai avuto problemi con ITA Airways?</h3>
            <p className="text-lg mb-6">
              Verifica GRATIS se hai diritto al risarcimento. Nessun costo anticipato — paghi solo se vinci.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-8"
            >
              <a href="https://claimwinger.com/it" target="_blank" rel="noopener noreferrer">
                Verifica il tuo risarcimento →
              </a>
            </Button>
          </div>

          {/* Section 3: Circostanze straordinarie */}
          <div id="circostanze" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-blue-600" />
              3. Circostanze straordinarie — quando ITA Airways non paga
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ITA Airways <strong>non deve pagare</strong> il risarcimento se il ritardo o la cancellazione sono causati da <strong>"circostanze straordinarie"</strong> — eventi imprevedibili e fuori dal controllo della compagnia.
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
                    <span className="text-gray-700"><strong>Maltempo grave:</strong> Tempeste, neve estrema, nebbia fitta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Scioperi controllori volo:</strong> ENAV (Italia), Eurocontrol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Scioperi personale aeroportuale:</strong> Handling Fiumicino, sicurezza</span>
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
                    <span className="text-gray-700"><strong>Instabilità politica:</strong> Guerra, terrorismo, chiusure spazio aereo</span>
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
                    <span className="text-gray-700"><strong>Problemi tecnici aereo:</strong> Guasti, manutenzione ordinaria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Carenza equipaggio:</strong> Mancanza piloti/assistenti di volo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Scioperi personale ITA Airways:</strong> Piloti, assistenti volo, terra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Ritardi rotazione:</strong> Aereo in ritardo da volo precedente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Overbooking:</strong> Venduti più biglietti dei posti (raro su ITA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Ritardi operativi:</strong> Catering, pulizia, bagagli, fuel</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                ⚠️ ATTENZIONE: Scioperi ITA Airways
              </h3>
              <p className="text-gray-700 mb-3">
                Gli <strong>scioperi del personale ITA Airways</strong> (piloti, assistenti di volo) <strong>NON sono circostanze straordinarie</strong> e danno diritto al risarcimento.
              </p>
              <p className="text-gray-700">
                <strong>Eccezione:</strong> Solo scioperi di terzi (controllori volo ENAV, personale aeroportuale) esentano ITA dal pagamento.
              </p>
            </div>
          </div>

          {/* Section 4: Come richiedere */}
          <div id="come-richiedere" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              4. Come richiedere il risarcimento ITA Airways
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hai <strong>2 opzioni principali</strong> per richiedere il risarcimento da ITA Airways:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Opzione 1: Reclamo diretto a ITA Airways</h3>
                
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
                    <li>• <strong>Solo 32% tasso di successo</strong> con ITA Airways</li>
                    <li>• Tempi lunghi: 6-10 mesi di attesa</li>
                    <li>• Devi gestire tutto da solo</li>
                    <li>• ITA può rigettare con giustificazioni generiche</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">📧 Contatti ITA Airways:</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    customercare@ita-airways.com
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    +39 06 65649
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Modulo online:</strong> ita-airways.com → Customer Care
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-blue-300 bg-blue-50">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
                  ⭐ CONSIGLIATO
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Opzione 2: Con ClaimWinger</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Vantaggi:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <strong>87% tasso di successo</strong> con ITA Airways</li>
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                  <a href="https://claimwinger.com/it" target="_blank" rel="noopener noreferrer">
                    Verifica il tuo risarcimento →
                  </a>
                </Button>
              </Card>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <h3 className="text-xl font-bold p-6 bg-blue-100 text-gray-900">
                📊 Confronto metodi — esempio risarcimento 400 €
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
                      <td className="p-4 text-orange-600 font-semibold">32%</td>
                      <td className="p-4">6-10 mesi</td>
                      <td className="p-4">400 € (se succede)</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="p-4 font-semibold">Con ClaimWinger</td>
                      <td className="p-4 text-green-600 font-bold">87%</td>
                      <td className="p-4">45-60 giorni</td>
                      <td className="p-4 font-bold text-blue-600">~300 € (75%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-blue-50 text-sm text-gray-700">
                <strong>Conclusione:</strong> Con ClaimWinger hai 2.7x più probabilità di successo e ricevi il pagamento 3-4x più velocemente. L'importo netto è leggermente inferiore, ma la probabilità effettiva di ricevere denaro è molto più alta.
              </div>
            </div>
          </div>

          {/* Section 5: Documenti */}
          <div id="documenti" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              5. Documenti necessari per il reclamo
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Per richiedere il risarcimento da ITA Airways, raccogli questi documenti:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900">✅ Documenti OBBLIGATORI:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Carta d'imbarco:</strong> Fotografala o salvala digitale (app ITA Airways)
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
                      <strong>Prova del ritardo/cancellazione:</strong> Screenshot app, email ITA, foto tabellone aeroporto
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900">➕ Documenti UTILI (non obbligatori):</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Ricevute spese:</strong> Hotel, pasti, trasporti durante attesa (puoi richiedere rimborso)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Comunicazioni ITA Airways:</strong> Email, SMS, notifiche app
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Certificato ritardo:</strong> Richiedi al banco ITA Airways in aeroporto
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Section 6: Tempi */}
          <div id="tempi" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-blue-600" />
              6. Tempi di prescrizione — quanto tempo hai per reclamare?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <p className="text-lg text-gray-700">
                In Italia, hai <strong className="text-blue-600 text-xl">6 anni</strong> dalla data del volo per richiedere il risarcimento secondo il Regolamento CE 261/2004.
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
                  ❓ ITA Airways è diversa da Alitalia per i risarcimenti?
                </h3>
                <p className="text-gray-700">
                  <strong>SÌ, in meglio!</strong> ITA Airways è una compagnia nuova (2021) con maggiore solidità finanziaria. Non ha ereditato i debiti di Alitalia e ha un migliore tasso di pagamento risarcimenti. Tuttavia, i tuoi diritti CE 261/2004 sono identici.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  ❓ Posso reclamare per voli Alitalia operati nel passato?
                </h3>
                <p className="text-gray-700">
                  <strong>SÌ, ma attenzione!</strong> Per voli Alitalia prima del 15 ottobre 2021, il reclamo va alla vecchia società (in liquidazione). Tempi più lunghi e recupero meno garantito. Meglio usare servizi legali specializzati.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  ❓ Volo in codeshare con Air France/KLM — chi paga?
                </h3>
                <p className="text-gray-700">
                  Dipende chi <strong>opera il volo</strong> (non chi vende il biglietto):<br/>
                  • ITA opera = <strong>ITA responsabile</strong><br/>
                  • Air France opera = Air France responsabile<br/>
                  Controlla il numero di volo: AZ*** = ITA, AF*** = Air France, KL*** = KLM.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  ❓ Acquisto con punti Volare/MilleMiglia — ho diritto?
                </h3>
                <p className="text-gray-700">
                  <strong>SÌ!</strong> Il risarcimento CE 261 si applica <strong>anche ai biglietti premio</strong> (acquistati con punti). Non importa se hai pagato con denaro o punti — i tuoi diritti sono gli stessi.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  ❓ Ritardo a Fiumicino per "problemi operativi" — risarcibile?
                </h3>
                <p className="text-gray-700">
                  <strong>SÌ, quasi sempre!</strong> "Problemi operativi" = catering ritardo, pulizia aereo, bagagli, fuel, rotazione precedente. Questi sono <strong>responsabilità della compagnia</strong> e danno diritto al risarcimento. Non lasciarti ingannare da giustificazioni generiche!
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  ❓ Quanto tempo ci vuole per ricevere il risarcimento?
                </h3>
                <p className="text-gray-700">
                  • <strong>Reclamo diretto a ITA:</strong> 6-10 mesi (32% successo)<br/>
                  • <strong>Con ClaimWinger:</strong> 45-60 giorni (87% successo)<br/>
                  • <strong>Tribunale:</strong> 12-18 mesi (se necessario)
                </p>
              </Card>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Hai avuto problemi con ITA Airways?</h2>
            <p className="text-xl mb-6 leading-relaxed">
              Verifica GRATIS se hai diritto al risarcimento fino a 600 €. Oltre 50.000 passeggeri aiutati.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">87%</div>
                <div className="text-blue-100">Tasso di successo con ITA Airways</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">45-60</div>
                <div className="text-blue-100">Giorni per ricevere pagamento</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">0 €</div>
                <div className="text-blue-100">Costi anticipati</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-8"
              >
                <a href="https://claimwinger.com/it" target="_blank" rel="noopener noreferrer">
                  Verifica il tuo risarcimento →
                </a>
              </Button>
            </div>

            <p className="text-center text-blue-100 mt-6 text-sm">
              ✅ Nessun rischio · ✅ Nessun costo anticipato · ✅ Paghi solo se vinci
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Articoli correlati</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/it/blog/ryanair-italia-risarcimento">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-300">
                  <span className="text-sm text-blue-600 font-semibold">Compagnie aeree</span>
                  <h3 className="text-xl font-bold mt-2 mb-2 text-gray-900">
                    Ryanair Italia risarcimento
                  </h3>
                  <p className="text-gray-600">
                    Guida completa su come ottenere risarcimento da Ryanair per voli in ritardo o cancellati.
                  </p>
                </Card>
              </Link>

              <Link href="/it/blog/wizz-air-italia-risarcimento">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-300">
                  <span className="text-sm text-purple-600 font-semibold">Compagnie aeree</span>
                  <h3 className="text-xl font-bold mt-2 mb-2 text-gray-900">
                    Wizz Air Italia risarcimento
                  </h3>
                  <p className="text-gray-600">
                    Come ottenere risarcimento da Wizz Air per ritardi e cancellazioni in Italia.
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