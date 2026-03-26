import { SEO } from "@/components/SEO";
import { LayoutIt } from "@/components/LayoutIt";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, Info, CheckCircle, Clock, PlaneTakeoff, Euro, FileText, Users, TrendingUp, MapPin, ArrowRight } from "lucide-react";

export default function AeroportoBergamoRisarcimento() {
  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Bergamo Orio al Serio: guida al risarcimento voli"
        description="Problemi con il volo a Bergamo (BGY)? Guida completa ai diritti passeggeri e procedure per ottenere compensazione fino a 600 € per ritardi e cancellazioni."
        url="https://problemlot.com/it/blog/aeroporto-bergamo-orio-al-serio-risarcimento"
      />

      <article className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/it" className="hover:text-green-600">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/it/blog" className="hover:text-green-600">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">Aeroporto Bergamo Orio al Serio</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Aeroporti
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">8 min di lettura</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">1 marzo 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Aeroporto Bergamo Orio al Serio: guida al risarcimento voli
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Volo in ritardo o cancellato a Bergamo Orio al Serio (BGY)? Scopri i tuoi diritti e come ottenere fino a 600 € di risarcimento, specialmente con Ryanair.
            </p>
          </header>

          {/* Intro */}
          <section className="mb-12 prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              <strong>Aeroporto di Bergamo Orio al Serio</strong> (codice IATA: BGY), noto anche come "Il Caravaggio", è il <strong>terzo aeroporto più trafficato d'Italia</strong> con oltre 16 milioni di passeggeri. È famoso per essere il <strong>principale hub di Ryanair</strong> nell'Europa continentale sud.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A causa dell'alto volume di voli low-cost, i ritardi e le cancellazioni sono frequenti. La buona notizia è che il <strong>Regolamento CE 261/2004</strong> protegge i tuoi diritti, garantendo risarcimenti <strong>fino a 600 €</strong> per disagi significativi.
            </p>
          </section>

          {/* Statistiche Bergamo */}
          <section className="mb-12 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Bergamo BGY — I numeri chiave</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-green-700 mb-1">16M+</p>
                <p className="text-sm text-gray-600">Passeggeri annui</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <PlaneTakeoff className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-blue-700 mb-1">80%</p>
                <p className="text-sm text-gray-600">Voli Ryanair (Dominio totale)</p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 text-center">
                <Clock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-orange-700 mb-1">19%</p>
                <p className="text-sm text-gray-600">Ritardi &gt;15 min</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded text-sm text-gray-600">
              <p>
                <strong>📍 Posizione strategica:</strong> Bergamo serve non solo la città di Bergamo, ma è un aeroporto chiave per <strong>Milano</strong> (45km) e gran parte della Lombardia orientale.
              </p>
            </div>
          </section>

          {/* Ryanair e Bergamo */}
          <section className="mb-12">
            <div className="bg-blue-900 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold">R</div>
                Bergamo è il regno di Ryanair
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                Quasi tutti i voli da Bergamo sono operati da Ryanair. Questo significa che le regole di risarcimento sono quasi sempre quelle applicabili a Ryanair.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-5 rounded-lg">
                  <h3 className="font-bold mb-2 text-yellow-400">✅ I PRO</h3>
                  <ul className="space-y-2 text-sm text-blue-100">
                    <li>• Collegamenti diretti con tutta Europa</li>
                    <li>• Prezzi molto competitivi</li>
                    <li>• Alta frequenza di voli</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-5 rounded-lg">
                  <h3 className="font-bold mb-2 text-red-400">⚠️ I CONTRO</h3>
                  <ul className="space-y-2 text-sm text-blue-100">
                    <li>• Ritardi "a catena" frequenti a fine giornata</li>
                    <li>• Assistenza in aeroporto spesso affollata</li>
                    <li>• Politica risarcimenti rigida</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-blue-800">
                 <p className="text-sm text-blue-200">
                   👉 <strong>Hai avuto problemi con Ryanair a Bergamo?</strong> Leggi la nostra guida specifica: <Link href="/it/blog/ryanair-italia-risarcimento" className="text-yellow-400 hover:underline">Ryanair Italia risarcimento</Link>
                 </p>
              </div>
            </div>
          </section>

          {/* Quando spetta il risarcimento */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hai diritto al risarcimento se...</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:border-green-300 transition-colors">
                <Clock className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ritardo 3+ ore</h3>
                <p className="text-gray-600">
                  Il tuo volo arriva a destinazione finale con <strong>3 o più ore di ritardo</strong> rispetto all'orario previsto.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:border-red-300 transition-colors">
                <AlertCircle className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Volo Cancellato</h3>
                <p className="text-gray-600">
                  Volo cancellato con <strong>meno di 14 giorni di preavviso</strong> e nessuna alternativa adeguata offerta.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:border-orange-300 transition-colors">
                <Users className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Negato Imbarco</h3>
                <p className="text-gray-600">
                  Ti viene negato l'imbarco per <strong>overbooking</strong> (sovraprenotazione) nonostante tu abbia un biglietto valido.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:border-blue-300 transition-colors">
                <PlaneTakeoff className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Coincidenza Persa</h3>
                <p className="text-gray-600">
                  Perdi un volo in connessione a causa del ritardo del primo volo (tutti in un'unica prenotazione).
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="font-bold text-gray-900 mb-2">💰 Quanto puoi ottenere?</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-center mt-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <span className="block text-gray-500 text-sm">Voli &lt; 1.500 km</span>
                  <span className="block text-2xl font-bold text-green-600">250 €</span>
                  <span className="block text-xs text-gray-400">es. Bergamo-Londra</span>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <span className="block text-gray-500 text-sm">Voli 1.500-3.500 km</span>
                  <span className="block text-2xl font-bold text-green-600">400 €</span>
                  <span className="block text-xs text-gray-400">es. Bergamo-Tel Aviv</span>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <span className="block text-gray-500 text-sm">Voli &gt; 3.500 km</span>
                  <span className="block text-2xl font-bold text-green-600">600 €</span>
                  <span className="block text-xs text-gray-400">es. Bergamo-Dubai</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="text-center">
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=bergamo_orio"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Verifica il Tuo Risarcimento da Bergamo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </section>

          {/* Cosa fare in aeroporto */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Guida pratica: Cosa fare a Bergamo Orio al Serio</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h3 className="font-bold text-gray-900">Vai al banco informazioni o della compagnia</h3>
                  <p className="text-gray-600 text-sm">
                    A Bergamo, i banchi Ryanair e delle altre compagnie si trovano nella zona partenze. Chiedi il motivo del ritardo per iscritto se possibile.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="font-bold text-gray-900">Chiedi i voucher per cibo e bevande</h3>
                  <p className="text-gray-600 text-sm">
                    Se il ritardo supera le 2 ore, hai diritto a voucher per pasti e bevande. Non vergognarti a chiederli, è un tuo diritto! Ci sono molti bar e ristoranti a Orio al Serio dove usarli.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-bold text-gray-900">Conserva tutto</h3>
                  <p className="text-gray-600 text-sm">
                    Carta d'imbarco, scontrini di spese extra, foto del tabellone. Più prove hai, più facile sarà ottenere il risarcimento.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande frequenti su Bergamo BGY</h2>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Bus navetta da/per Milano in ritardo: ho diritto al rimborso?</h4>
                <p className="text-sm text-gray-600">
                  No, il Regolamento CE 261 non copre i trasporti terrestri come Terravision o Orio Shuttle, anche se hai perso il volo a causa loro. Copre solo i voli.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-1">Sciopero dei trasporti in Italia: volo cancellato. E il risarcimento?</h4>
                <p className="text-sm text-gray-600">
                  Se lo sciopero riguarda il personale aeroportuale o i controllori di volo (terze parti), purtroppo è considerata "circostanza straordinaria" e non c'è risarcimento. Se scioperano i piloti della compagnia, invece, SÌ, hai diritto.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-1">Nebbia a Bergamo: volo dirottato a Malpensa.</h4>
                <p className="text-sm text-gray-600">
                  La nebbia fitta è comune in inverno a Bergamo ed è considerata circostanza straordinaria (meteo avverso). Tuttavia, la compagnia deve fornirti trasporto gratuito fino alla destinazione originale (Bergamo) o a Milano centro.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Potrebbe interessarti anche</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/it/blog/aeroporto-milano-malpensa-ritardi" className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-blue-600 mb-2">Aeroporto Milano Malpensa</h3>
                <p className="text-sm text-gray-600">Guida ai risarcimenti per l'altro grande aeroporto lombardo.</p>
              </Link>
              <Link href="/it/blog/wizz-air-italia-risarcimento" className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-purple-600 mb-2">Wizz Air Italia</h3>
                <p className="text-sm text-gray-600">Tutto sui risarcimenti con Wizz Air, l'altra grande low-cost.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutIt>
  );
}
