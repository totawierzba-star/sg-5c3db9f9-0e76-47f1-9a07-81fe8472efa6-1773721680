import { SEO } from "@/components/SEO";
import { LayoutIt } from "@/components/LayoutIt";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { 
  Plane, 
  Clock, 
  XCircle, 
  Euro, 
  CheckCircle, 
  Users, 
  TrendingUp,
  ArrowRight,
  Shield,
  FileText,
  Zap
} from "lucide-react";

export default function HomeIt() {
  return (
    <LayoutIt>
      <SEO
        title="Volo in ritardo o cancellato? Verifica il tuo risarcimento fino a 600 €"
        description="Hai problemi con il volo? Verifica se hai diritto fino a 600 € di risarcimento per volo in ritardo o cancellato secondo il Regolamento CE 261/2004."
        url="https://lotproblem.pl/it"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Volo in Ritardo o Cancellato?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Hai diritto fino a <span className="font-bold text-yellow-300">600 €</span> di risarcimento. 
              Verifica gratuitamente in 2 minuti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Verifica il Tuo Risarcimento →
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-white text-lg px-8 py-6"
              >
                <Link href="/it/calcolatore-risarcimento">
                  Calcolatore Gratuito
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-blue-100 text-sm">
              ✓ Nessun costo anticipato  ✓ 91% di successo  ✓ Oltre 50.000 passeggeri aiutati
            </p>
          </div>
        </div>
      </section>

      {/* Problem Scenarios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Che problema hai avuto?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-blue-500">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Volo in Ritardo</h3>
              <p className="text-gray-600 mb-4">
                Arrivo con più di 3 ore di ritardo? Hai diritto a un risarcimento fino a 600 €.
              </p>
              <Link 
                href="/it/volo-in-ritardo" 
                className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
              >
                Scopri di più <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-blue-500">
              <XCircle className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Volo Cancellato</h3>
              <p className="text-gray-600 mb-4">
                Volo cancellato senza preavviso sufficiente? Richiedi il tuo risarcimento.
              </p>
              <Link 
                href="/it/volo-cancellato" 
                className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
              >
                Scopri di più <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-blue-500">
              <Plane className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Coincidenza Persa</h3>
              <p className="text-gray-600 mb-4">
                Hai perso la coincidenza a causa di un ritardo? Potresti avere diritto a un risarcimento.
              </p>
              <Link 
                href="/it/calcolatore-risarcimento" 
                className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
              >
                Verifica ora <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Compensation Amounts */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Quanto puoi ricevere?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Secondo il Regolamento CE 261/2004, l'importo dipende dalla distanza del volo
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-white">
              <Euro className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-blue-600 mb-2">250 €</div>
              <p className="text-gray-600 font-semibold mb-2">Fino a 1.500 km</p>
              <p className="text-sm text-gray-500">
                Es: Roma - Parigi, Milano - Barcellona
              </p>
            </Card>

            <Card className="p-8 text-center bg-white border-2 border-blue-500 shadow-lg transform scale-105">
              <Euro className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-blue-600 mb-2">400 €</div>
              <p className="text-gray-600 font-semibold mb-2">1.500 - 3.500 km</p>
              <p className="text-sm text-gray-500">
                Es: Roma - Mosca, Milano - Istanbul
              </p>
            </Card>

            <Card className="p-8 text-center bg-white">
              <Euro className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-blue-600 mb-2">600 €</div>
              <p className="text-gray-600 font-semibold mb-2">Oltre 3.500 km</p>
              <p className="text-sm text-gray-500">
                Es: Roma - New York, Milano - Dubai
              </p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a 
                href="https://claimwinger.com/it" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Calcola il Tuo Risarcimento Gratuitamente
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Perché scegliere ClaimWinger?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Senza Rischi</h3>
              <p className="text-gray-600 text-sm">
                Paghi solo se vinciamo. Nessun costo anticipato.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">91% di Successo</h3>
              <p className="text-gray-600 text-sm">
                Tasso di successo superiore alla media del settore.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Veloce e Semplice</h3>
              <p className="text-gray-600 text-sm">
                Verifica in 2 minuti. Ci occupiamo di tutto noi.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">50.000+ Clienti</h3>
              <p className="text-gray-600 text-sm">
                Migliaia di passeggeri soddisfatti in tutta Europa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Come funziona?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-xl mb-3">Verifica Gratuita</h3>
              <p className="text-gray-600">
                Inserisci i dettagli del tuo volo e scopri se hai diritto al risarcimento in 2 minuti.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-xl mb-3">Noi Facciamo Tutto</h3>
              <p className="text-gray-600">
                I nostri esperti legali gestiscono tutta la pratica con la compagnia aerea.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-xl mb-3">Ricevi i Soldi</h3>
              <p className="text-gray-600">
                Una volta ottenuto il risarcimento, ricevi i tuoi soldi direttamente sul conto.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a 
                href="https://claimwinger.com/it" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Inizia Ora — È Gratuito
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            I Tuoi Diritti come Passeggero
          </h2>
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Regolamento CE 261/2004</h3>
                  <p className="text-gray-600">
                    Il regolamento europeo protegge i passeggeri in caso di ritardi, cancellazioni e negato imbarco. 
                    Si applica a tutti i voli in partenza dall'UE e ai voli di compagnie europee in arrivo nell'UE.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Risarcimento Fino a 600 €</h3>
                  <p className="text-gray-600">
                    L'importo dipende dalla distanza del volo. Oltre al risarcimento, hai diritto a assistenza 
                    (pasti, bevande, hotel) se necessario.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Termine di 3 Anni</h3>
                  <p className="text-gray-600">
                    In Italia, hai fino a 3 anni dalla data del volo per richiedere il risarcimento. 
                    Non aspettare, inizia subito la tua richiesta.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Circostanze Straordinarie</h3>
                  <p className="text-gray-600">
                    Il risarcimento non è dovuto solo in caso di circostanze straordinarie (maltempo estremo, 
                    scioperi dei controllori di volo, emergenze mediche). Le compagnie aeree spesso provano 
                    a usare questa scusa ingiustamente — noi sappiamo come difendere i tuoi diritti.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Domande Frequenti
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Quanto costa il servizio?</h3>
              <p className="text-gray-600">
                Niente! Paghi solo se vinciamo. La nostra commissione (25% + IVA) viene detratta dall'importo 
                del risarcimento solo dopo che lo hai ricevuto.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Quanto tempo ci vuole?</h3>
              <p className="text-gray-600">
                In media 4-8 settimane, ma può variare a seconda della compagnia aerea. Ti teniamo sempre aggiornato 
                sullo stato della tua pratica.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Quali documenti servono?</h3>
              <p className="text-gray-600">
                Di solito bastano la carta d'imbarco e la conferma del ritardo/cancellazione. Se non li hai, 
                possiamo comunque aiutarti a recuperare le informazioni necessarie.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Funziona anche per voli charter?</h3>
              <p className="text-gray-600">
                Sì, il Regolamento CE 261/2004 si applica anche ai voli charter in partenza dall'UE o operati 
                da compagnie europee.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">La compagnia ha già rifiutato il mio reclamo. Posso ancora richiedere?</h3>
              <p className="text-gray-600">
                Assolutamente sì! Le compagnie aeree rifiutano spesso i reclami ingiustamente. Il 78% dei passeggeri 
                si arrende dopo il primo rifiuto, ma noi sappiamo come far valere i tuoi diritti.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Cosa succede se il volo era in ritardo per maltempo?</h3>
              <p className="text-gray-600">
                Dipende. Solo condizioni meteorologiche estreme che rendono impossibile il volo sono considerate 
                circostanze straordinarie. Molte compagnie abusano di questa scusa — noi verifichiamo sempre 
                i dati meteo reali.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto a Ottenere il Tuo Risarcimento?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Verifica gratuitamente se hai diritto fino a 600 € in soli 2 minuti
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
              Verifica Ora — È Gratuito →
            </a>
          </Button>
          <p className="mt-6 text-blue-100 text-sm">
            Oltre 50.000 passeggeri ci hanno scelto. 91% di successo. Nessun rischio.
          </p>
        </div>
      </section>
    </LayoutIt>
  );
}
