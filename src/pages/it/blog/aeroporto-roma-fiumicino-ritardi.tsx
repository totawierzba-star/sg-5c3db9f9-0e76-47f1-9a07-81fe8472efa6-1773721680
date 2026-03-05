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
  Calendar,
  MapPin
} from "lucide-react";

export default function AeroportoRomaFiumicinoRitardi() {
  return (
    <LayoutIt>
      <SEO 
        title="Aeroporto Roma Fiumicino ritardi e cancellazioni — Guida Risarcimento"
        description="Volo in ritardo o cancellato a Roma Fiumicino (FCO)? Scopri i tuoi diritti e come ottenere fino a 600 € di risarcimento secondo il Regolamento CE 261/2004."
        canonical="https://lotproblem.pl/it/blog/aeroporto-roma-fiumicino-ritardi"
      />

      <article className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Link href="/it/blog" className="hover:text-blue-600">Blog</Link>
              <span>/</span>
              <span className="text-gray-900">Aeroporto Roma Fiumicino</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Aeroporto Roma Fiumicino (FCO) — Risarcimento per ritardi e cancellazioni
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                2 febbraio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                10 min di lettura
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Aeroporti
              </span>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              L'Aeroporto di Roma Fiumicino "Leonardo da Vinci" è il principale scalo italiano. Se il tuo volo da o per Fiumicino ha subito ritardi o cancellazioni, potresti avere diritto fino a 600 € di risarcimento. Ecco la guida completa.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* Fiumicino Stats */}
            <Card className="bg-blue-50 border-blue-200 mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  Roma Fiumicino (FCO) — Situazione voli
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">40+ MLN</div>
                    <div className="text-sm text-gray-600">passeggeri annui</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">22%</div>
                    <div className="text-sm text-gray-600">voli con ritardo &gt; 15 min</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">ITA</div>
                    <div className="text-sm text-gray-600">principale hub (ex Alitalia)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quando spetta il risarcimento a Fiumicino */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Volo da/per Fiumicino in ritardo: i tuoi diritti
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Le regole per i voli in partenza o arrivo a Roma Fiumicino seguono il Regolamento Europeo 261/2004. Hai diritto al risarcimento se:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-t-4 border-t-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg">Voli in Partenza da FCO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      TUTTI i voli in partenza da Roma Fiumicino sono coperti dal regolamento, indipendentemente dalla compagnia aerea (anche extra-UE come American Airlines o Emirates).
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg">Voli in Arrivo a FCO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      I voli in arrivo a Roma sono coperti SE partono da un paese UE OPPURE se operati da una compagnia aerea europea (es. ITA, Ryanair, Lufthansa).
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-bold text-gray-900">Condizioni per il risarcimento:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Ritardo all'arrivo &ge; 3 ore:</strong> Conta l'orario di apertura porte a destinazione.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Cancellazione volo:</strong> Senza preavviso di almeno 14 giorni.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Overbooking:</strong> Negato imbarco nonostante prenotazione valida.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Coincidenza persa:</strong> A causa del ritardo del primo volo (unico biglietto).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Importi */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A quanto ammonta il risarcimento?
              </h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Distanza</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Importo</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Esempi da Roma</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Fino a 1.500 km</td>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">250 €</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Milano, Parigi, Barcellona, Monaco</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">1.500 - 3.500 km</td>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">400 €</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Londra, Madrid, Il Cairo, Mosca</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Oltre 3.500 km</td>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">600 €</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">New York, Dubai, Tokyo, Buenos Aires</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Problemi specifici FCO */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cause comuni di ritardo a Roma Fiumicino
              </h2>
              
              <p className="text-gray-700 mb-6">
                Non tutti i ritardi danno diritto al risarcimento. Bisogna distinguere tra responsabilità della compagnia e circostanze straordinarie.
              </p>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      RISARCIBILE: Problemi operativi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Carenza di equipaggio o superamento ore di volo</li>
                      <li>Problemi tecnici dell'aereo (manutenzione ordinaria o guasti imprevisti non eccezionali)</li>
                      <li>Ritardi nella rotazione dei voli precedenti</li>
                      <li>Scioperi del personale della compagnia aerea (piloti, hostess)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700 flex items-center gap-2">
                      <XCircle className="h-5 w-5" />
                      NON RISARCIBILE: Circostanze straordinarie
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Scioperi del personale aeroportuale (bagagli, sicurezza Fiumicino)</li>
                      <li>Scioperi dei controllori di volo (ENAV)</li>
                      <li>Maltempo grave che impedisce il volo</li>
                      <li>Problemi di sicurezza aeroportuale o chiusura piste</li>
                      <li>Bird strike (impatto con uccelli)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6 bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-2">Attenzione alla scusa del "Maltempo"</h4>
                      <p className="text-sm text-yellow-800">
                        Spesso le compagnie giustificano il ritardo con "maltempo" anche se altri aerei decollano regolarmente da Fiumicino. Se altri voli partono, probabilmente hai diritto al risarcimento. Verifica sempre!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cosa fare a Fiumicino */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Bloccato a Fiumicino? Ecco cosa fare
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-700 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Chiedi assistenza immediata</h3>
                    <p className="text-gray-600">
                      Se il ritardo supera le 2 ore, la compagnia DEVE fornirti pasti e bevande gratuiti. Chiedi i voucher al banco della compagnia o al gate.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-700 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Raccogli le prove</h3>
                    <p className="text-gray-600">
                      Fotografa il tabellone delle partenze che mostra il ritardo. Conserva carta d'imbarco e scontrini di eventuali spese extra (cibo, taxi).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-700 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Non firmare rinunce</h3>
                    <p className="text-gray-600">
                      Non accettare voucher o buoni viaggio se ti viene chiesto di rinunciare ai tuoi diritti futuri. Il risarcimento in denaro è quasi sempre più conveniente.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-700 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Verifica il tuo risarcimento</h3>
                    <p className="text-gray-600">
                      Usa il nostro calcolatore gratuito per sapere subito se hai diritto a 250, 400 o 600 euro.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Finale */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-4">Volo in ritardo a Roma Fiumicino?</h3>
                <p className="text-xl text-blue-100 mb-8">
                  Non lasciare i tuoi soldi alla compagnia aerea. Verifica gratis il tuo diritto al risarcimento.
                </p>
                <div className="text-center">
                  <Link
                    href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=roma_fiumicino"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Verifica il Tuo Risarcimento da Fiumicino
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <p className="text-sm text-blue-200 mt-6">
                  Nessun costo se non vinciamo • Verifica in 2 minuti
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