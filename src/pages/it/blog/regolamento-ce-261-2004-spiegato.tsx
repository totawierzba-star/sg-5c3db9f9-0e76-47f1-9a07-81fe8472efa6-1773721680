import { SEO } from "@/components/SEO";
import { LayoutIt } from "@/components/LayoutIt";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, BookOpen, Scale, Clock, Plane, Shield, HelpCircle, AlertTriangle, CheckCircle2, XCircle, Euro } from "lucide-react";

export default function RegolamentoCE261() {
  return (
    <LayoutIt>
      <SEO
        title="Regolamento CE 261/2004 spiegato — Guida completa 2026"
        description="Tutto quello che devi sapere sul Regolamento europeo 261/2004: diritti passeggeri, compensazioni fino a 600€ e quando si applicano."
        url="https://lotproblem.pl/it/blog/regolamento-ce-261-2004-spiegato"
      />

      <article className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/it" className="hover:text-purple-600">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/it/blog" className="hover:text-purple-600">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">Regolamento CE 261/2004</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Guide e Diritti
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Regolamento CE 261/2004 spiegato — La Carta dei Diritti del Passeggero
            </h1>
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min di lettura</span>
              </div>
              <div>1° marzo 2026</div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Hai avuto un volo in ritardo o cancellato? Il Regolamento (CE) n. 261/2004 è la legge europea che ti protegge. Scopri esattamente cosa dice, quando si applica e come garantisce risarcimenti fino a 600 €.
            </p>
          </header>

          {/* Cos'è il Regolamento */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cos'è il Regolamento CE 261/2004?</h2>
                  <p className="text-gray-700 mb-4">
                    Il <strong>Regolamento (CE) n. 261/2004</strong> del Parlamento europeo è una legge introdotta l'11 febbraio 2004 per stabilire regole comuni in materia di compensazione ed assistenza ai passeggeri in caso di negato imbarco, di cancellazione del volo o di ritardo prolungato.
                  </p>
                  <p className="text-gray-700">
                    È considerata una delle leggi a tutela dei consumatori <strong>più forti al mondo</strong>. Obbliga le compagnie aeree a compensare i passeggeri per il tempo perso, non solo a rimborsare il biglietto.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Quando si applica */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A quali voli si applica?</h2>
            <p className="text-gray-700 mb-6">
              Molti passeggeri pensano che si applichi solo alle compagnie europee. In realtà è più ampio:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Plane className="w-5 h-5 text-green-600" />
                  Voli IN PARTENZA da UE
                </h3>
                <p className="text-gray-700">
                  Si applica a <strong>TUTTI i voli</strong> in partenza da un aeroporto situato nell'Unione Europea (più Islanda, Norvegia, Svizzera).
                </p>
                <div className="mt-4 text-sm bg-green-50 p-3 rounded">
                  <strong>Esempio:</strong> Volo American Airlines da Roma a New York? <br/>
                  ✅ <strong>COPERTO</strong> (perché parte da UE)
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Plane className="w-5 h-5 text-blue-600 transform rotate-180" />
                  Voli IN ARRIVO in UE
                </h3>
                <p className="text-gray-700">
                  Si applica ai voli in arrivo in UE <strong>SOLO SE operati da una compagnia aerea comunitaria</strong> (UE).
                </p>
                <div className="mt-4 text-sm bg-blue-50 p-3 rounded">
                  <strong>Esempio 1:</strong> Lufthansa da New York a Roma? ✅ <strong>COPERTO</strong><br/>
                  <strong>Esempio 2:</strong> Delta da New York a Roma? ❌ <strong>NON COPERTO</strong>
                </div>
              </Card>
            </div>
          </section>

          {/* I tre diritti principali */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">I 3 Diritti Fondamentali</h2>
            
            <div className="space-y-8">
              {/* Diritto 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Euro className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Diritto alla Compensazione Pecuniaria</h3>
                  <p className="text-gray-700 mb-4">
                    È il pagamento in denaro (risarcimento) per il disagio subito. Non dipende dal prezzo del biglietto!
                  </p>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full text-left">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="p-3 font-semibold">Distanza</th>
                          <th className="p-3 font-semibold">Importo</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="p-3">Fino a 1.500 km</td>
                          <td className="p-3 font-bold text-green-600">250 €</td>
                        </tr>
                        <tr>
                          <td className="p-3">Tra 1.500 e 3.500 km</td>
                          <td className="p-3 font-bold text-green-600">400 €</td>
                        </tr>
                        <tr>
                          <td className="p-3">Oltre 3.500 km</td>
                          <td className="p-3 font-bold text-green-600">600 €</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Diritto 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Diritto all'Assistenza</h3>
                  <p className="text-gray-700 mb-2">
                    Se il volo è in ritardo di almeno 2 ore, la compagnia DEVE fornirti gratuitamente:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Pasti e bevande in relazione alla durata dell'attesa</li>
                    <li>Sistemazione in albergo (se necessario pernottamento)</li>
                    <li>Trasporto tra aeroporto e albergo</li>
                    <li>Due chiamate telefoniche o email</li>
                  </ul>
                </div>
              </div>

              {/* Diritto 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Diritto al Rimborso o Riprotestione</h3>
                  <p className="text-gray-700 mb-2">
                    In caso di cancellazione o ritardo &gt; 5 ore, puoi scegliere tra:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li><strong>Rimborso completo</strong> del biglietto entro 7 giorni</li>
                    <li><strong>Volo alternativo</strong> verso la destinazione finale il prima possibile</li>
                    <li>Volo alternativo in data successiva a tua scelta</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Circostanze Straordinarie */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">L'eccezione: "Circostanze Straordinarie"</h2>
            <p className="text-gray-700 mb-6">
              L'articolo 5(3) del Regolamento dice che la compagnia NON deve pagare la compensazione (i 250-600 €) se prova che l'evento è dovuto a "circostanze eccezionali che non si sarebbero potute evitare".
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-red-200 bg-red-50">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  NO Risarcimento (Eccezionali)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Maltempo grave (tempeste, nebbia fitta, neve)</li>
                  <li>• Scioperi controllori di volo (ENAV)</li>
                  <li>• Instabilità politica / rischi sicurezza</li>
                  <li>• Bird strike (impatto con volatili)</li>
                  <li>• Chiusura aeroporto o spazio aereo</li>
                </ul>
              </Card>

              <Card className="p-6 border-green-200 bg-green-50">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  SÌ Risarcimento (Non Eccezionali)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Problemi tecnici</strong> all'aereo (manutenzione)</li>
                  <li>• Carenza equipaggio / malattia piloti</li>
                  <li>• Scioperi del personale della compagnia</li>
                  <li>• Ritardi "a catena" da voli precedenti</li>
                  <li>• Problemi operativi interni</li>
                </ul>
              </Card>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-gray-800 text-sm">
                <strong>Nota Bene:</strong> Anche in caso di circostanze straordinarie, il <strong>Diritto all'Assistenza</strong> (hotel, cibo) e il <strong>Diritto al Rimborso/Riprotestione</strong> rimangono SEMPRE validi. L'eccezione riguarda solo la compensazione in denaro.
              </p>
            </div>
          </section>

          {/* Prescrizione */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tempi di prescrizione</h2>
            <p className="text-gray-700 mb-4">
              Il Regolamento non stabilisce un limite di tempo per fare reclamo; questo dipende dalle leggi nazionali di ogni paese.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded shadow text-center border">
                <div className="text-2xl mb-1">🇮🇹</div>
                <div className="font-bold">Italia</div>
                <div className="text-purple-600 font-bold">2 anni*</div>
                <div className="text-xs text-gray-500 mt-1">*spesso esteso a 10</div>
              </div>
              <div className="bg-white p-4 rounded shadow text-center border">
                <div className="text-2xl mb-1">🇪🇸</div>
                <div className="font-bold">Spagna</div>
                <div className="text-purple-600 font-bold">5 anni</div>
              </div>
              <div className="bg-white p-4 rounded shadow text-center border">
                <div className="text-2xl mb-1">🇩🇪</div>
                <div className="font-bold">Germania</div>
                <div className="text-purple-600 font-bold">3 anni</div>
              </div>
              <div className="bg-white p-4 rounded shadow text-center border">
                <div className="text-2xl mb-1">🇵🇱</div>
                <div className="font-bold">Polonia</div>
                <div className="text-purple-600 font-bold">1 anno</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              *In Italia il Codice della Navigazione prevede 2 anni, ma recenti sentenze applicano spesso la prescrizione ordinaria di 10 anni per i diritti CE 261.
            </p>
          </section>

          {/* CTA */}
          <section className="mb-12">
            <Card className="bg-purple-900 text-white p-8 text-center">
              <Scale className="w-12 h-12 mx-auto mb-4 text-purple-300" />
              <h2 className="text-3xl font-bold mb-4">Fai valere i tuoi diritti</h2>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Le compagnie aeree contano sul fatto che i passeggeri non conoscano il Regolamento CE 261. Non lasciare i tuoi soldi sul tavolo.
              </p>
              <div className="text-center">
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=ce261_guide"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Verifica il Tuo Risarcimento Ora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </Card>
          </section>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Guide specifiche per compagnia</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/it/blog/ryanair-italia-risarcimento">
                <Card className="p-4 hover:shadow-md transition-shadow text-center">
                  <span className="font-bold text-blue-600">Ryanair</span>
                </Card>
              </Link>
              <Link href="/it/blog/wizz-air-italia-risarcimento">
                <Card className="p-4 hover:shadow-md transition-shadow text-center">
                  <span className="font-bold text-purple-600">Wizz Air</span>
                </Card>
              </Link>
              <Link href="/it/blog/ita-airways-risarcimento">
                <Card className="p-4 hover:shadow-md transition-shadow text-center">
                  <span className="font-bold text-blue-800">ITA Airways</span>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutIt>
  );
}
