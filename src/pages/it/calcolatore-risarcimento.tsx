import { SEO } from "@/components/SEO";
import { LayoutIt } from "@/components/LayoutIt";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { 
  Calculator, 
  Euro, 
  Plane,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function CalcolatoreRisarcimentoIt() {
  return (
    <LayoutIt>
      <SEO
        title="Calcolatore risarcimento volo — 250 €, 400 €, 600 € [2026]"
        description="Calcola quanto puoi ricevere per il tuo volo in ritardo o cancellato. Risarcimento fino a 600 € secondo il Regolamento CE 261/2004."
        url="https://lotproblem.pl/it/calcolatore-risarcimento"
        canonical="https://lotproblem.pl/it/calcolatore-risarcimento"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Calculator className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quanto Puoi Ricevere?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Calcola il tuo risarcimento per volo in ritardo o cancellato. 
              Fino a <span className="font-bold text-yellow-300">600 €</span> garantiti dalla legge europea.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-6"
            >
              <a 
                href="https://claimwinger.com/it" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Calcola il Tuo Risarcimento Ora →
              </a>
            </Button>
            <p className="mt-6 text-blue-100 text-sm">
              ✓ Calcolo gratuito in 2 minuti  ✓ Nessun costo anticipato  ✓ 91% di successo
            </p>
          </div>
        </div>
      </section>

      {/* Importi risarcimento */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Importi del risarcimento
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Secondo il Regolamento CE 261/2004, l'importo dipende dalla distanza del volo
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
              <Euro className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-blue-600 mb-2">250 €</div>
              <p className="text-gray-600 font-semibold mb-4">Voli fino a 1.500 km</p>
              <ul className="text-sm text-gray-500 space-y-2 text-left">
                <li>• Roma - Parigi</li>
                <li>• Milano - Barcellona</li>
                <li>• Venezia - Londra</li>
                <li>• Napoli - Vienna</li>
                <li>• Bologna - Amsterdam</li>
              </ul>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-blue-100 to-white border-2 border-blue-500 shadow-lg transform scale-105">
              <Euro className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-blue-600 mb-2">400 €</div>
              <p className="text-gray-600 font-semibold mb-4">Voli 1.500 - 3.500 km</p>
              <ul className="text-sm text-gray-500 space-y-2 text-left">
                <li>• Roma - Mosca</li>
                <li>• Milano - Istanbul</li>
                <li>• Napoli - Dubai</li>
                <li>• Venezia - Tel Aviv</li>
                <li>• Torino - Marrakech</li>
              </ul>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
              <Euro className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-blue-600 mb-2">600 €</div>
              <p className="text-gray-600 font-semibold mb-4">Voli oltre 3.500 km</p>
              <ul className="text-sm text-gray-500 space-y-2 text-left">
                <li>• Roma - New York</li>
                <li>• Milano - Bangkok</li>
                <li>• Venezia - Tokyo</li>
                <li>• Roma - Buenos Aires</li>
                <li>• Milano - Los Angeles</li>
              </ul>
            </Card>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 text-center">
            <p className="text-gray-900 font-semibold mb-2">
              💡 <strong>Nota importante:</strong>
            </p>
            <p className="text-gray-600">
              Il risarcimento è <strong>in aggiunta</strong> al rimborso del biglietto. 
              Non devi scegliere tra l'uno e l'altro - puoi ottenere entrambi!
            </p>
          </div>
        </div>
      </section>

      {/* Quando hai diritto */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Quando hai diritto al risarcimento?
          </h2>
          <div className="space-y-6">
            <Card className="p-6 bg-white">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Volo in ritardo (3+ ore)</h3>
                  <p className="text-gray-600">
                    Se il tuo volo arriva alla destinazione finale con più di 3 ore di ritardo, 
                    hai diritto al risarcimento (salvo circostanze straordinarie).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Volo cancellato</h3>
                  <p className="text-gray-600">
                    Se sei stato informato della cancellazione con meno di 14 giorni di preavviso 
                    e non ti hanno offerto un'alternativa adeguata.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Overbooking (negato imbarco)</h3>
                  <p className="text-gray-600">
                    Se ti è stato negato l'imbarco contro la tua volontà a causa di overbooking, 
                    hai diritto al risarcimento immediato.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Connessione persa</h3>
                  <p className="text-gray-600">
                    Se hai perso la coincidenza a causa di un ritardo del primo volo e arrivi 
                    alla destinazione finale con 3+ ore di ritardo.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a 
                href="https://claimwinger.com/it" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Verifica il Tuo Caso Ora →
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Come funziona il calcolo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Distanza del volo</h3>
              <p className="text-gray-600 text-sm">
                Calcoliamo la distanza totale del tuo viaggio (tutti i segmenti se con scalo)
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Ore di ritardo</h3>
              <p className="text-gray-600 text-sm">
                Verifichiamo l'orario effettivo di arrivo alla destinazione finale
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Causa del problema</h3>
              <p className="text-gray-600 text-sm">
                Determiniamo se la causa rientra nella responsabilità della compagnia
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Esempi pratici */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Esempi pratici
          </h2>
          <div className="space-y-6">
            <Card className="p-6 bg-white">
              <div className="flex items-start space-x-4">
                <Plane className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-2">Milano → Londra (ritardo 4 ore)</h3>
                  <p className="text-gray-600 mb-3">
                    Distanza: ~960 km • Ritardo: 4 ore • Causa: Problema tecnico
                  </p>
                  <div className="bg-green-50 border-2 border-green-300 rounded p-3">
                    <p className="font-bold text-green-700">
                      Risarcimento: 250 € <span className="text-sm font-normal">(volo sotto 1.500 km)</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex items-start space-x-4">
                <Plane className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-2">Roma → Dubai (cancellato, informato 5 giorni prima)</h3>
                  <p className="text-gray-600 mb-3">
                    Distanza: ~4.800 km • Preavviso: 5 giorni • Alternative offerte: No
                  </p>
                  <div className="bg-green-50 border-2 border-green-300 rounded p-3">
                    <p className="font-bold text-green-700">
                      Risarcimento: 400 € <span className="text-sm font-normal">(volo intra-EU oltre 1.500 km)</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex items-start space-x-4">
                <Plane className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-2">Venezia → New York (ritardo 5 ore)</h3>
                  <p className="text-gray-600 mb-3">
                    Distanza: ~6.500 km • Ritardo: 5 ore • Causa: Equipaggio
                  </p>
                  <div className="bg-green-50 border-2 border-green-300 rounded p-3">
                    <p className="font-bold text-green-700">
                      Risarcimento: 600 € <span className="text-sm font-normal">(volo oltre 3.500 km)</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Perché ClaimWinger */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Perché usare ClaimWinger?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <CheckCircle className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">91% di successo</h3>
              <p className="text-gray-600">
                Il nostro team legale esperto vince 91% dei casi, anche quando le compagnie rifiutano inizialmente.
              </p>
            </Card>

            <Card className="p-6">
              <CheckCircle className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Nessun rischio</h3>
              <p className="text-gray-600">
                Zero costi anticipati. Paghi solo se vinciamo (25% + IVA sul risarcimento ottenuto).
              </p>
            </Card>

            <Card className="p-6">
              <CheckCircle className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Veloce e semplice</h3>
              <p className="text-gray-600">
                Verifica gratuita in 2 minuti. Poi ci occupiamo noi di tutto: pratiche, negoziazioni, tribunale se necessario.
              </p>
            </Card>

            <Card className="p-6">
              <CheckCircle className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Esperienza provata</h3>
              <p className="text-gray-600">
                Oltre 50.000 passeggeri aiutati. Conosciamo tutte le scuse delle compagnie e come contrastarle.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
            >
              <a 
                href="https://claimwinger.com/it" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Calcola il Tuo Risarcimento Ora →
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Guide correlate */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Guide utili
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Volo in ritardo</h3>
              <p className="text-gray-600 text-sm mb-4">
                Tutto quello che devi sapere sui ritardi aerei e i tuoi diritti.
              </p>
              <Link 
                href="/it/volo-in-ritardo" 
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
              >
                Leggi la guida <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Volo cancellato</h3>
              <p className="text-gray-600 text-sm mb-4">
                Cosa fare quando il tuo volo viene cancellato e come ottenere il risarcimento.
              </p>
              <Link 
                href="/it/volo-cancellato" 
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
              >
                Leggi la guida <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Non lasciare soldi sul tavolo
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Il 78% dei passeggeri non reclama mai il risarcimento a cui ha diritto. 
            Scopri quanto puoi ottenere in 2 minuti.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-6"
          >
            <a 
              href="https://claimwinger.com/it" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Calcola Gratuitamente →
            </a>
          </Button>
          <p className="mt-6 text-blue-100 text-sm">
            ✓ 2 minuti  ✓ Nessun costo anticipato  ✓ 91% di successo  ✓ Oltre 50.000 passeggeri aiutati
          </p>
        </div>
      </section>
    </LayoutIt>
  );
}