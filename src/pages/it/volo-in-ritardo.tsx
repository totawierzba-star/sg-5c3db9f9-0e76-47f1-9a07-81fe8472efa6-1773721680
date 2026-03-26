import { SEO } from "@/components/SEO";
import { LayoutIt } from "@/components/LayoutIt";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { 
  Clock, 
  Euro, 
  CheckCircle, 
  AlertCircle,
  FileText,
  ArrowRight,
  Plane,
  Timer
} from "lucide-react";

export default function VoloInRitardoIt() {
  return (
    <LayoutIt>
      <SEO
        title="Volo in ritardo — cosa fare e quanto risarcimento? [2026]"
        description="Scopri cosa fare quando il volo è in ritardo e quando hai diritto al risarcimento fino a 600 €. Guida completa ai diritti dei passeggeri."
        url="https://problemlot.com/it/volo-in-ritardo"
        canonicalUrl="https://problemlot.com/it/volo-in-ritardo"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Clock className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Volo in Ritardo?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Se il tuo volo arriva con più di <span className="font-bold text-yellow-300">3 ore di ritardo</span>, 
              potresti avere diritto fino a <span className="font-bold text-yellow-300">600 €</span> di risarcimento.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-6"
            >
              <a 
                href="https://claimwinger.com/it/volo-in-ritardo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Verifica il Tuo Risarcimento Ora →
              </a>
            </Button>
            <p className="mt-6 text-orange-100 text-sm">
              ✓ Verifica gratuita in 2 minuti  ✓ Nessun costo anticipato  ✓ 91% di successo
            </p>
          </div>
        </div>
      </section>

      {/* Quando hai diritto */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Quando hai diritto al risarcimento?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-2 border-green-500">
              <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">✅ Hai diritto quando:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Il volo arriva con <strong>più di 3 ore di ritardo</strong> alla destinazione finale</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Il volo <strong>parte dall'UE</strong> o è operato da una compagnia europea</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Il ritardo è <strong>colpa della compagnia aerea</strong> (problemi tecnici, equipaggio)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Non hai già ricevuto <strong>il risarcimento</strong> per questo volo</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-red-500">
              <AlertCircle className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">❌ NON hai diritto quando:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Il ritardo è dovuto a <strong>circostanze straordinarie</strong> (maltempo estremo, scioperi ATC)</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Il volo arriva con <strong>meno di 3 ore</strong> di ritardo</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sei stato <strong>informato del ritardo</strong> almeno 14 giorni prima</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sono passati più di <strong>3 anni</strong> dalla data del volo (termine di prescrizione italiano)</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Non sei sicuro se hai diritto? Verifica gratuitamente in 2 minuti.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a 
                href="https://claimwinger.com/it/volo-in-ritardo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Verifica Ora Gratuitamente
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Importi risarcimento */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Quanto puoi ricevere?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            L'importo del risarcimento dipende dalla distanza del volo secondo il Regolamento CE 261/2004
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-white">
              <Euro className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-blue-600 mb-2">250 €</div>
              <p className="text-gray-600 font-semibold mb-2">Voli fino a 1.500 km</p>
              <p className="text-sm text-gray-500">
                Esempi: Roma - Parigi, Milano - Barcellona, Venezia - Londra
              </p>
            </Card>

            <Card className="p-8 text-center bg-white border-2 border-blue-500 shadow-lg transform scale-105">
              <Euro className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-blue-600 mb-2">400 €</div>
              <p className="text-gray-600 font-semibold mb-2">Voli 1.500 - 3.500 km</p>
              <p className="text-sm text-gray-500">
                Esempi: Roma - Mosca, Milano - Istanbul, Napoli - Dubai
              </p>
            </Card>

            <Card className="p-8 text-center bg-white">
              <Euro className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-blue-600 mb-2">600 €</div>
              <p className="text-gray-600 font-semibold mb-2">Voli oltre 3.500 km</p>
              <p className="text-sm text-gray-500">
                Esempi: Roma - New York, Milano - Bangkok, Venezia - Tokyo
              </p>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">
              💡 <strong>Nota importante:</strong> Il risarcimento è <strong>in aggiunta</strong> al rimborso del biglietto. 
              Puoi ottenere entrambi!
            </p>
          </div>
        </div>
      </section>

      {/* Cosa fare */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Cosa fare quando il volo è in ritardo?
          </h2>
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Chiedi conferma scritta del ritardo</h3>
                  <p className="text-gray-600">
                    Al banco della compagnia aerea, richiedi un documento scritto che confermi il ritardo 
                    e la motivazione. Questo sarà fondamentale per il tuo reclamo.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Conserva tutti i documenti</h3>
                  <p className="text-gray-600">
                    Carta d'imbarco, ricevute per pasti/taxi/hotel pagati autonomamente, email di conferma, 
                    screenshot del tabellone partenze. Tutto può essere utile.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Richiedi assistenza immediata</h3>
                  <p className="text-gray-600">
                    Se il ritardo supera le 2 ore, hai diritto a pasti e bevande gratuiti. 
                    Se supera le 5 ore e il volo parte il giorno dopo, hai diritto a hotel e trasporto.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Presenta il reclamo</h3>
                  <p className="text-gray-600 mb-4">
                    Hai due opzioni: farlo da solo (lungo e complicato) oppure affidarlo a ClaimWinger 
                    che gestisce tutto per te senza costi anticipati.
                  </p>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <a 
                      href="https://claimwinger.com/it/volo-in-ritardo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      ClaimWinger Fa Tutto Per Te →
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Diritti assistenza */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            I tuoi diritti durante il ritardo
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Timer className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Ritardo 2+ ore</h3>
              <p className="text-gray-600 text-sm">
                Pasti e bevande gratuiti + 2 chiamate/email
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Timer className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Ritardo 3+ ore</h3>
              <p className="text-gray-600 text-sm">
                Tutti i diritti sopra + risarcimento 250-600 €
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Timer className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Ritardo 5+ ore</h3>
              <p className="text-gray-600 text-sm">
                Tutto sopra + hotel + trasporto se necessario
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Domande Frequenti
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Il ritardo si calcola dalla partenza o dall'arrivo?</h3>
              <p className="text-gray-600">
                Dall'arrivo! Conta l'ora effettiva di apertura delle porte dell'aereo alla destinazione finale. 
                Anche se il volo parte in orario ma arriva con 3h+ di ritardo, hai diritto al risarcimento.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Cosa sono le "circostanze straordinarie"?</h3>
              <p className="text-gray-600">
                Eventi fuori dal controllo della compagnia aerea: maltempo estremo, scioperi dei controllori 
                di volo (non della compagnia!), emergenze mediche, minacce alla sicurezza. Le compagnie 
                spesso abusano di questa scusa - ClaimWinger sa come verificare e contestare.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Posso ottenere sia il rimborso che il risarcimento?</h3>
              <p className="text-gray-600">
                Sì! Sono due cose diverse. Il rimborso restituisce il costo del biglietto non utilizzato. 
                Il risarcimento (250-600 €) è una compensazione per il disagio, ed è previsto dalla legge 
                europea anche se accetti un volo alternativo.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Quanto tempo ho per presentare il reclamo?</h3>
              <p className="text-gray-600">
                In Italia, hai 3 anni dalla data del volo. Ma prima agisci, meglio è - i documenti sono 
                più facili da recuperare e le compagnie rispondono più velocemente.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">La compagnia ha rifiutato il mio reclamo. Posso ancora ottenere il risarcimento?</h3>
              <p className="text-gray-600">
                Assolutamente sì! Il 78% dei passeggeri si arrende dopo il primo rifiuto, ma ClaimWinger 
                ha un team legale esperto che sa come far valere i tuoi diritti anche contro le compagnie 
                più ostinate. Tasso di successo: 91%.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Quanto costa il servizio di ClaimWinger?</h3>
              <p className="text-gray-600">
                Niente in anticipo! Paghi solo se vinciamo (25% + IVA sul risarcimento ottenuto). 
                Se non otteniamo nulla, non paghi nulla. Zero rischio per te.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Compagnie aeree comuni */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Voli in ritardo in Italia
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Le compagnie aeree più comuni per cui gestiamo reclami dall'Italia
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Plane className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-lg mb-2">Ryanair</h3>
              <p className="text-gray-600 text-sm mb-3">
                Voli low-cost da Bergamo, Roma, Milano. Ritardi frequenti su rotte italiane.
              </p>
              <Link href="/it/blog" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                Guida Ryanair →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Plane className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-lg mb-2">Wizz Air</h3>
              <p className="text-gray-600 text-sm mb-3">
                Voli economici dall'Italia verso Est Europa. Problemi comuni con ritardi.
              </p>
              <Link href="/it/blog" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                Guida Wizz Air →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Plane className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-lg mb-2">ITA Airways</h3>
              <p className="text-gray-600 text-sm mb-3">
                Ex Alitalia. Voli nazionali e internazionali. Diritti passeggeri garantiti.
              </p>
              <Link href="/it/blog" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                Guida ITA →
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Plane className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-lg mb-2">easyJet</h3>
              <p className="text-gray-600 text-sm mb-3">
                Base Milano Malpensa. Voli europei. Alta frequenza di ritardi e cancellazioni.
              </p>
              <Link href="/it/blog" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                Guida easyJet →
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
            Non essere uno di loro.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-6"
          >
            <a 
              href="https://claimwinger.com/it/volo-in-ritardo" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Verifica Gratuitamente Ora →
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
