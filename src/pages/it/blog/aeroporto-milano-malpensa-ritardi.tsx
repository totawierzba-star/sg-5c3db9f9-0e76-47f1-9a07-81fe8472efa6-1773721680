import { SEO } from "@/components/SEO";
import { LayoutIt } from "@/components/LayoutIt";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, Info, CheckCircle, Clock, PlaneTakeoff, Euro, FileText, Users, TrendingUp, ArrowRight } from "lucide-react";

export default function AeroportoMilanoMalpensaRitardi() {
  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Milano Malpensa: ritardi, cancellazioni e risarcimenti"
        description="Volo in ritardo o cancellato a Milano Malpensa (MXP)? Scopri i tuoi diritti e come ottenere fino a 600 € di risarcimento secondo il Regolamento CE 261/2004."
        url="https://lotproblem.pl/it/blog/aeroporto-milano-malpensa-ritardi"
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/it" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/it/blog" className="hover:text-blue-600">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">Aeroporto Milano Malpensa</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Aeroporti
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">9 min di lettura</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">1 marzo 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Aeroporto Milano Malpensa: ritardi, cancellazioni e risarcimenti
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Volo in ritardo o cancellato a Milano Malpensa (MXP)? Scopri i tuoi diritti e come ottenere fino a 600 € di risarcimento secondo il Regolamento CE 261/2004.
            </p>
          </header>

          {/* Intro */}
          <section className="mb-12 prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              <strong>Milano Malpensa</strong> (codice IATA: MXP) è il <strong>secondo aeroporto più grande d'Italia</strong> per traffico passeggeri, con oltre <strong>29 milioni di passeggeri annui</strong>. Situato a circa 40 km a nord-ovest di Milano, Malpensa è l'hub principale di <strong>easyJet Italia</strong> e serve numerose destinazioni internazionali con compagnie come ITA Airways, Lufthansa, Emirates, British Airways e molte altre.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Se il tuo volo da o per Milano Malpensa subisce un <strong>ritardo di 3+ ore</strong> o viene <strong>cancellato</strong>, potresti avere diritto a un <strong>risarcimento fino a 600 €</strong> secondo il <strong>Regolamento CE 261/2004</strong>.
            </p>
          </section>

          {/* Statistiche Malpensa */}
          <section className="mb-12 bg-blue-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Milano Malpensa — Statistiche 2024-2025</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Traffico passeggeri</h3>
                </div>
                <p className="text-3xl font-bold text-blue-600 mb-2">29,3 milioni</p>
                <p className="text-sm text-gray-600">Passeggeri annui (2024)</p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <PlaneTakeoff className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Movimenti aerei</h3>
                </div>
                <p className="text-3xl font-bold text-blue-600 mb-2">215.000+</p>
                <p className="text-sm text-gray-600">Decolli e atterraggi/anno</p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <h3 className="font-semibold text-gray-900">Ritardi</h3>
                </div>
                <p className="text-3xl font-bold text-orange-600 mb-2">21,4%</p>
                <p className="text-sm text-gray-600">Voli con ritardo &gt;15 minuti (sopra media UE 18,5%)</p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <h3 className="font-semibold text-gray-900">Cancellazioni</h3>
                </div>
                <p className="text-3xl font-bold text-red-600 mb-2">2,9%</p>
                <p className="text-sm text-gray-600">Voli cancellati (in linea con media europea 2,7%)</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm text-gray-700">
                <strong>⚠️ Nota:</strong> Malpensa ha un tasso di ritardi superiore alla media europea, principalmente a causa della <strong>congestione</strong> durante i picchi estivi (giugno-agosto) e delle <strong>condizioni meteorologiche</strong> invernali (nebbia, neve).
              </p>
            </div>
          </section>

          {/* Compagnie principali */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Compagnie aeree principali a Malpensa</h2>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-50 to-white border border-orange-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">eJ</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">easyJet Italia (Hub principale)</h3>
                    <p className="text-gray-700 mb-3">
                      Malpensa è la <strong>base principale</strong> di easyJet in Italia. La compagnia opera oltre <strong>100 rotte</strong> da MXP verso destinazioni europee e mediterranee.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✈️ Destinazioni: Londra, Parigi, Amsterdam, Barcellona, Madrid, Berlino, etc.</li>
                      <li>📊 Quota mercato Malpensa: ~35%</li>
                      <li>⚠️ Problemi comuni: Ritardi a catena, cancellazioni estive</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-white border border-green-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">AZ</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">ITA Airways</h3>
                    <p className="text-gray-700 mb-3">
                      La compagnia nazionale italiana opera <strong>voli intercontinentali</strong> da Malpensa (Americhe, Asia) e collegamenti domestici/europei.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✈️ Destinazioni long-haul: New York, Miami, Tokyo, Delhi, São Paulo</li>
                      <li>✈️ Destinazioni europee: Londra, Parigi, Francoforte, Bruxelles</li>
                      <li>📊 Focus: Business travel e long-haul</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Altre compagnie importanti</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Compagnie europee:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>✈️ Lufthansa (Monaco, Francoforte)</li>
                      <li>✈️ British Airways (Londra)</li>
                      <li>✈️ Air France (Parigi CDG)</li>
                      <li>✈️ KLM (Amsterdam)</li>
                      <li>✈️ Iberia (Madrid)</li>
                      <li>✈️ Swiss (Zurigo, Ginevra)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Compagnie extra-UE:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>✈️ Emirates (Dubai)</li>
                      <li>✈️ Qatar Airways (Doha)</li>
                      <li>✈️ Turkish Airlines (Istanbul)</li>
                      <li>✈️ Air Canada (Toronto)</li>
                      <li>✈️ Delta Air Lines (New York, Atlanta)</li>
                      <li>✈️ United Airlines (Newark)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Regole CE 261 per Malpensa */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Voli da/per Malpensa — Regole CE 261/2004</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quando hai diritto al risarcimento?</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">✅ In PARTENZA da Malpensa (MXP)</h4>
                      <p className="text-gray-700 mb-3">
                        <strong>TUTTI i voli</strong> in partenza da Malpensa sono coperti dal Regolamento CE 261/2004, <strong>indipendentemente dalla compagnia aerea</strong>.
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700 mb-2"><strong>Esempi coperti:</strong></p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>✅ Milano MXP → New York JFK (Emirates, Qatar, Delta, United) — <strong>COPERTI</strong></li>
                          <li>✅ Milano MXP → Dubai (Emirates) — <strong>COPERTO</strong></li>
                          <li>✅ Milano MXP → Istanbul (Turkish Airlines) — <strong>COPERTO</strong></li>
                          <li>✅ Milano MXP → Londra (easyJet, British Airways) — <strong>COPERTI</strong></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">⚠️ In ARRIVO a Malpensa (MXP)</h4>
                      <p className="text-gray-700 mb-3">
                        I voli in arrivo a Malpensa sono coperti <strong>SOLO SE</strong>:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">1.</span>
                          <span>Partono da un <strong>aeroporto UE</strong> (qualsiasi compagnia), OPPURE</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">2.</span>
                          <span>Sono operati da una <strong>compagnia europea</strong> (ITA Airways, easyJet, Lufthansa, Air France, KLM, British Airways, etc.)</span>
                        </li>
                      </ul>
                      <div className="mt-4 space-y-3">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-700 mb-2"><strong>✅ Esempi COPERTI in arrivo:</strong></p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>✅ New York JFK → Milano MXP (ITA Airways, Lufthansa) — compagnie UE</li>
                            <li>✅ Parigi CDG → Milano MXP (Air France, easyJet) — partenza da UE</li>
                            <li>✅ Londra LHR → Milano MXP (British Airways, easyJet) — partenza da UE + compagnia UE</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-700 mb-2"><strong>❌ Esempi NON coperti in arrivo:</strong></p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>❌ Dubai → Milano MXP (Emirates) — partenza extra-UE + compagnia extra-UE</li>
                            <li>❌ New York JFK → Milano MXP (Delta, United) — partenza extra-UE + compagnia extra-UE</li>
                            <li>❌ Doha → Milano MXP (Qatar Airways) — partenza extra-UE + compagnia extra-UE</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Importi risarcimento */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quanto risarcimento da Malpensa?</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Euro className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Importi secondo CE 261/2004</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-green-600 text-white">
                      <th className="p-4 text-left">Distanza volo</th>
                      <th className="p-4 text-left">Risarcimento</th>
                      <th className="p-4 text-left">Rotte tipiche da Milano Malpensa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-green-50">
                      <td className="p-4">
                        <span className="font-semibold text-gray-900">Fino a 1.500 km</span>
                        <p className="text-sm text-gray-600">Voli brevi</p>
                      </td>
                      <td className="p-4">
                        <span className="text-2xl font-bold text-green-600">250 €</span>
                        <p className="text-sm text-gray-600">per passeggero</p>
                      </td>
                      <td className="p-4 text-sm text-gray-700">
                        <ul className="space-y-1">
                          <li>✈️ Milano → Roma, Napoli, Palermo</li>
                          <li>✈️ Milano → Parigi, Monaco, Zurigo</li>
                          <li>✈️ Milano → Barcellona, Madrid, Lisbona</li>
                          <li>✈️ Milano → Praga, Vienna, Berlino</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="p-4">
                        <span className="font-semibold text-gray-900">1.500 - 3.500 km</span>
                        <p className="text-sm text-gray-600">Voli medi</p>
                      </td>
                      <td className="p-4">
                        <span className="text-2xl font-bold text-green-600">400 €</span>
                        <p className="text-sm text-gray-600">per passeggero</p>
                      </td>
                      <td className="p-4 text-sm text-gray-700">
                        <ul className="space-y-1">
                          <li>✈️ Milano → Londra, Amsterdam, Bruxelles</li>
                          <li>✈️ Milano → Istanbul, Tel Aviv, Il Cairo</li>
                          <li>✈️ Milano → Mosca, Dubai (alcune rotte)</li>
                          <li>✈️ Milano → Atene, Cipro, Islanda</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="p-4">
                        <span className="font-semibold text-gray-900">Oltre 3.500 km</span>
                        <p className="text-sm text-gray-600">Voli lunghi</p>
                      </td>
                      <td className="p-4">
                        <span className="text-2xl font-bold text-green-600">600 €</span>
                        <p className="text-sm text-gray-600">per passeggero</p>
                      </td>
                      <td className="p-4 text-sm text-gray-700">
                        <ul className="space-y-1">
                          <li>✈️ Milano → New York, Miami, Boston</li>
                          <li>✈️ Milano → Tokyo, Delhi, Bangkok</li>
                          <li>✈️ Milano → Dubai, Doha, Abu Dhabi</li>
                          <li>✈️ Milano → São Paulo, Buenos Aires</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>💡 Esempio famiglia:</strong> Famiglia di 4 persone con volo Milano MXP → New York JFK (ITA Airways) in ritardo di 5 ore:
                </p>
                <p className="text-lg font-bold text-blue-600">
                  4 passeggeri × 600 € = <span className="text-2xl">2.400 € totali!</span>
                </p>
              </div>
            </div>
          </section>

          {/* CTA Mid-Article */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Il tuo volo da/per Malpensa ha subito problemi?</h3>
              <p className="text-lg mb-6 text-blue-100">
                Verifica in 2 minuti se hai diritto a un risarcimento fino a 600 € per passeggero
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=milano_malpensa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Verifica il tuo risarcimento gratis
                </a>
              </Button>
              <p className="text-sm text-blue-200 mt-4">✓ Nessun costo anticipato ✓ Pagamento solo se vinci ✓ 89% tasso di successo</p>
            </div>
          </section>

          {/* Cause comuni ritardi Malpensa */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cause comuni di ritardi e cancellazioni a Malpensa</h2>
            
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  Problemi risarcibili (Responsabilità compagnia)
                </h3>
                <p className="text-gray-700 mb-4">
                  In questi casi la compagnia aerea <strong>DEVE pagare il risarcimento</strong>:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Problemi tecnici aereo</strong> — guasti, manutenzione ordinaria, problemi ricorrenti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Carenza equipaggio</strong> — mancanza piloti/assistenti di volo (comune in estate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Scioperi personale compagnia</strong> — piloti, assistenti, personale terra della specifica compagnia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Ritardi rotazione</strong> — aereo in ritardo da volo precedente (effetto domino)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Problemi operativi</strong> — catering, pulizia, bagagli, rifornimento carburante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Overbooking</strong> — venduti più biglietti dei posti disponibili</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-yellow-600" />
                  Circostanze straordinarie (Nessun risarcimento)
                </h3>
                <p className="text-gray-700 mb-4">
                  In questi casi la compagnia <strong>non è obbligata a pagare</strong> (ma deve comunque fornire assistenza):
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Maltempo grave certificato</strong> — tempeste, neve estrema, nebbia fitta (comune in inverno a MXP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Scioperi controllori volo</strong> — ENAV (Italia), Eurocontrol (Europa)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Scioperi personale aeroportuale</strong> — handling, sicurezza, dogana a Malpensa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Problemi sicurezza aeroportuale</strong> — allarme bomba, emergenze, evacuazioni</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Bird strike</strong> — impatto con uccelli (danneggia aereo gravemente)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Instabilità politica</strong> — guerre, terrorismo, chiusure spazio aereo</span>
                  </li>
                </ul>

                <div className="mt-4 p-4 bg-white rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700 font-semibold mb-2">⚠️ ATTENZIONE: Verifica sempre!</p>
                  <p className="text-sm text-gray-700">
                    Le compagnie spesso giustificano ritardi con <strong>"maltempo"</strong> anche quando altri aerei decollano regolarmente da Malpensa. Se altri voli partono nella stessa fascia oraria, probabilmente <strong>NON è circostanza straordinaria</strong> e hai diritto al risarcimento!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cosa fare a Malpensa */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bloccato a Milano Malpensa? Ecco cosa fare</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Chiedi assistenza immediata</h3>
                      <p className="text-gray-700 mb-3">
                        Se il ritardo supera le <strong>2 ore</strong>, hai diritto a:
                      </p>
                      <ul className="space-y-1 text-gray-700">
                        <li>✅ Pasti e bevande <strong>GRATUITI</strong></li>
                        <li>✅ 2 chiamate/email gratis</li>
                        <li>✅ Hotel se necessario pernottamento</li>
                        <li>✅ Trasferimenti aeroporto-hotel</li>
                      </ul>
                      <p className="text-sm text-gray-600 mt-3">
                        📍 Vai al banco della tua compagnia aerea e richiedi voucher per ristoranti/bar di Malpensa. Non pagare di tasca tua se possibile.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Raccogli tutte le prove</h3>
                      <p className="text-gray-700 mb-3">
                        Documenta tutto per supportare il reclamo:
                      </p>
                      <ul className="space-y-1 text-gray-700">
                        <li>📸 Fotografa i tabelloni partenze/arrivi che mostrano il ritardo</li>
                        <li>📱 Fai screenshot delle notifiche app della compagnia</li>
                        <li>✉️ Salva email/SMS di avvisi ritardo o cancellazione</li>
                        <li>🎫 Conserva carta d'imbarco (anche digitale)</li>
                        <li>🧾 Tieni tutte le ricevute (pasti, hotel, trasporti, taxi)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">NON firmare rinunce ai diritti</h3>
                      <p className="text-gray-700 mb-3">
                        Le compagnie potrebbero offrirti:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Voucher</strong> invece di denaro — puoi rifiutare e chiedere risarcimento in denaro</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Moduli con <strong>"rinuncio a ulteriori richieste"</strong> — NON firmare! Perderesti il diritto al risarcimento CE 261</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Verifica subito il tuo risarcimento</h3>
                      <p className="text-gray-700 mb-4">
                        Una volta a casa (o anche dall'aeroporto), verifica gratuitamente se hai diritto a 250 €, 400 € o 600 €:
                      </p>
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                        <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=milano_malpensa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Verifica gratis in 2 minuti
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Domande frequenti — Malpensa</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-lg border border-gray-200 p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Il mio volo easyJet da Malpensa ha avuto 4 ore di ritardo. Ho diritto a risarcimento?
                </summary>
                <div className="mt-4 text-gray-700 space-y-2">
                  <p>
                    <strong>SÌ, molto probabilmente.</strong> Se il volo è atterrato con <strong>3+ ore di ritardo</strong> rispetto all'orario programmato, hai diritto a risarcimento secondo CE 261/2004.
                  </p>
                  <p className="font-semibold">Importo dipende dalla distanza:</p>
                  <ul className="ml-6 space-y-1">
                    <li>• <strong>250 €</strong> se destinazione entro 1.500 km (es. Londra, Parigi, Barcellona)</li>
                    <li>• <strong>400 €</strong> se destinazione 1.500-3.500 km (es. Islanda, Cipro, Il Cairo)</li>
                  </ul>
                  <p className="mt-3">
                    <strong>ECCEZIONE:</strong> Solo se easyJet dimostra <strong>circostanze straordinarie</strong> (maltempo estremo, sciopero controllori) non pagherà. Ma problemi tecnici, carenza equipaggio, ritardi rotazione = DEVONO pagare.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg border border-gray-200 p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Nebbia a Malpensa ha causato cancellazione — è circostanza straordinaria?
                </summary>
                <div className="mt-4 text-gray-700 space-y-2">
                  <p>
                    <strong>Dipende.</strong> La nebbia è circostanza straordinaria <strong>SOLO SE</strong> così fitta da costringere l'aeroporto a sospendere TUTTE le operazioni (o la maggior parte).
                  </p>
                  <p className="font-semibold mt-3">Come verificare:</p>
                  <ul className="ml-6 space-y-1">
                    <li>✅ Se <strong>altri voli</strong> della stessa compagnia o di compagnie diverse <strong>partono regolarmente</strong> nella stessa fascia oraria → probabilmente <strong>NON è circostanza straordinaria</strong></li>
                    <li>⚠️ Se l'aeroporto chiude completamente o solo pochi voli decollano → probabilmente è circostanza straordinaria</li>
                  </ul>
                  <p className="mt-3 p-3 bg-blue-50 rounded">
                    <strong>💡 Suggerimento:</strong> Controlla online gli orari di partenza di altri voli Malpensa nello stesso periodo. Se molti voli partono, la tua compagnia deve pagare il risarcimento!
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg border border-gray-200 p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Quanto tempo ho per reclamare un volo da Malpensa?
                </summary>
                <div className="mt-4 text-gray-700 space-y-2">
                  <p>
                    In Italia, hai <strong>6 anni</strong> dalla data del volo per richiedere il risarcimento CE 261/2004.
                  </p>
                  <p className="font-semibold">Timeline consigliata:</p>
                  <ul className="ml-6 space-y-1">
                    <li>🟢 <strong>Entro 3 mesi:</strong> IDEALE — massima probabilità di successo, documenti freschi</li>
                    <li>🟡 <strong>3 mesi - 2 anni:</strong> Ancora ottimo — maggior parte documenti disponibili</li>
                    <li>🟠 <strong>2-6 anni:</strong> Possibile ma più difficile — alcuni documenti potrebbero mancare</li>
                  </ul>
                  <p className="mt-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                    <strong>⚠️ Non aspettare troppo:</strong> Prima reclami, più facile sarà recuperare documenti e prove. Inoltre, le compagnie potrebbero distruggere i dati di volo dopo alcuni anni.
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-10 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Il tuo volo da/per Milano Malpensa ha avuto problemi?</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Non lasciare che la compagnia aerea trattenga ciò che ti spetta. Verifica in 2 minuti se hai diritto a un risarcimento fino a 600 € per passeggero.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold mb-2">89%</div>
                      <div className="text-sm text-blue-200">Tasso di successo</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">45-60 giorni</div>
                      <div className="text-sm text-blue-200">Tempo medio pagamento</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">0 €</div>
                      <div className="text-sm text-blue-200">Costo anticipato</div>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-6 mb-4">
                  <a href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=milano_malpensa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Verifica il tuo risarcimento ora — Gratis
                  </a>
                </Button>
                
                <p className="text-sm text-blue-200">
                  ✓ Nessun costo se non vinciamo ✓ Gestiamo tutto noi ✓ Anche in tribunale se necessario
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Articoli correlati</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/it/blog/ryanair-italia-risarcimento" className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-blue-600 font-medium">Compagnie aeree</span>
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">Ryanair Italia risarcimento</h3>
                <p className="text-gray-600 text-sm">Come ottenere risarcimento da Ryanair per voli in ritardo o cancellati.</p>
              </Link>
              <Link href="/it/blog/ita-airways-risarcimento" className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-blue-600 font-medium">Compagnie aeree</span>
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">ITA Airways risarcimento</h3>
                <p className="text-gray-600 text-sm">Diritti passeggeri con ITA Airways (ex Alitalia) e procedure di risarcimento.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutIt>
  );
}