import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function OpoznionyLotLufthansa() {
  return (
    <Layout>
      <SEO
        title="Opóźniony lot Lufthansa – prawa pasażera"
        description="Dowiedz się, jakie odszkodowanie przysługuje przy opóźnieniu lotu Lufthansa."
        url="https://lotproblem.pl/opozniony-lot-lufthansa"
      />

      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 text-balance">
              Opóźniony lot Lufthansa – prawa pasażera i odszkodowanie
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Lufthansa jako największy niemiecki przewoźnik musi przestrzegać prawa UE. Sprawdź, czy przysługuje Ci odszkodowanie do 600 € za opóźniony lub odwołany lot.
            </p>
            <Button size="lg" asChild>
              <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                Sprawdź odszkodowanie od Lufthansa
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Kiedy Lufthansa musi wypłacić odszkodowanie?</h2>
            
            <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
              <h3 className="font-display font-bold text-xl mb-4">Lufthansa musi wypłacić odszkodowanie gdy:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Lot opóźniony o więcej niż 3 godziny</p>
                    <p className="text-sm text-muted-foreground">Czas liczony do otwarcia drzwi w miejscu docelowym</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Lot został odwołany</p>
                    <p className="text-sm text-muted-foreground">Bez wcześniejszego powiadomienia (min. 14 dni)</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Odmówiono wejścia na pokład</p>
                    <p className="text-sm text-muted-foreground">Overbooking – zbyt wiele sprzedanych biletów</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Utracona przesiadka</p>
                    <p className="text-sm text-muted-foreground">Pierwszy lot opóźniony, przez co przegapiłeś połączenie</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-display font-bold text-xl mb-4">Lufthansa Group</h3>
                <p className="text-muted-foreground mb-4">
                  Rozporządzenie UE 261/2004 obowiązuje również wszystkie linie wchodzące w skład Lufthansa Group:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Swiss International Air Lines</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Austrian Airlines</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Brussels Airlines</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Eurowings (tania linia Lufthansa Group)</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Ile wynosi odszkodowanie od Lufthansa?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">250 €</div>
                <p className="font-semibold mb-2">Krótkie trasy</p>
                <p className="text-sm text-muted-foreground">Do 1500 km (loty europejskie)</p>
              </Card>

              <Card className="p-6 text-center border-2 border-primary">
                <div className="text-4xl font-bold text-primary mb-2">400 €</div>
                <p className="font-semibold mb-2">Średnie trasy</p>
                <p className="text-sm text-muted-foreground">1500-3500 km (np. do Bliskiego Wschodu)</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">600 €</div>
                <p className="font-semibold mb-2">Długie trasy</p>
                <p className="text-sm text-muted-foreground">Powyżej 3500 km (loty długodystansowe)</p>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mb-6">
              Lufthansa często oferuje vouchery zamiast gotówki – pamiętaj, że masz prawo żądać wypłaty pieniędzy.
            </p>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/ile-mozesz-dostac">Oblicz dokładną kwotę</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Popularne trasy Lufthansa z Polski</h2>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Z Warszawy (WAW)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Frankfurt, Monachium</li>
                  <li>• Hamburg, Düsseldorf, Berlin</li>
                  <li>• Wiedeń, Zurych, Bruksela</li>
                  <li>• Połączenia długodystansowe przez Frankfurt</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Z Krakowa (KRK)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Frankfurt, Monachium</li>
                  <li>• Wiedeń (Austrian Airlines)</li>
                  <li>• Zurych (Swiss)</li>
                  <li>• Połączenia do USA i Azji</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Z Wrocławia (WRO)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Frankfurt, Monachium</li>
                  <li>• Düsseldorf, Hamburg</li>
                  <li>• Połączenia przez główne huby</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Z Gdańska (GDN)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Frankfurt, Monachium</li>
                  <li>• Hamburg, Düsseldorf</li>
                  <li>• Połączenia międzykontynentalne</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">
            Masz problem z lotem Lufthansa?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Lufthansa często próbuje rozwiązać sprawy voucherami zamiast gotówką. Nie zgadzaj się na mniej niż Ci przysługuje – nasi eksperci zadbają o Twoje prawa.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
              Sprawdź odszkodowanie teraz
            </a>
          </Button>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-2xl mb-6">Zobacz również:</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/opozniony-lot-lot">
                <Card className="p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <p className="font-semibold text-sm">Opóźniony lot LOT →</p>
                </Card>
              </Link>
              <Link href="/opozniony-lot-ryanair">
                <Card className="p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <p className="font-semibold text-sm">Opóźniony lot Ryanair →</p>
                </Card>
              </Link>
              <Link href="/opozniony-lot">
                <Card className="p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <p className="font-semibold text-sm">Ogólnie o opóźnionych lotach →</p>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}