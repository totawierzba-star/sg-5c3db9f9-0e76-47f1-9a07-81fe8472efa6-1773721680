import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Plane, MapPin } from "lucide-react";
import Link from "next/link";

export default function OpoznionyLotKrakow() {
  return (
    <Layout>
      <SEO
        title="Opóźniony lot Kraków – odszkodowanie"
        description="Twój lot z Krakowa jest opóźniony? Sprawdź czy przysługuje Ci rekompensata."
        url="https://problemlot.com/opozniony-lot-krakow"
      />

      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-muted-foreground font-semibold">Kraków Airport (KRK) / Port Lotniczy im. Jana Pawła II</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 text-balance">
              Opóźniony lot z Krakowa – sprawdź swoje odszkodowanie
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Lot z lotniska w Krakowie był opóźniony lub odwołany? Możesz mieć prawo do nawet 600 € odszkodowania zgodnie z rozporządzeniem UE 261/2004.
            </p>
            <Button size="lg" asChild>
              <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                Sprawdź odszkodowanie za lot z Krakowa
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Lotnisko w Krakowie</h2>
            
            <Card className="p-6 mb-10">
              <h3 className="font-display font-bold text-xl mb-4">Kraków Airport – Jana Pawła II (KRK)</h3>
              <p className="text-muted-foreground mb-4">
                Drugie co do wielkości lotnisko w Polsce, obsługujące około 8 milionów pasażerów rocznie. Znajduje się w Balicach, 11 km na zachód od centrum Krakowa.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="font-semibold mb-2">Najpopularniejsze linie:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ryanair</li>
                    <li>• Wizzair</li>
                    <li>• LOT Polish Airlines</li>
                    <li>• Lufthansa</li>
                    <li>• Norwegian</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Najpopularniejsze kierunki:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Londyn (wszystkie lotniska)</li>
                    <li>• Dublin, Edinburgh</li>
                    <li>• Frankfurt, Monachium</li>
                    <li>• Barcelona, Mediolan, Rzym</li>
                    <li>• Oslo, Kopenhaga</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-display font-bold text-xl mb-4">Kiedy przysługuje Ci odszkodowanie?</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Opóźnienie powyżej 3 godzin</p>
                    <p className="text-sm text-muted-foreground">Lot dotarł do miejsca docelowego z opóźnieniem przekraczającym 3 godziny</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Odwołany lot</p>
                    <p className="text-sm text-muted-foreground">Linia nie powiadomiła Cię o odwołaniu minimum 14 dni przed odlotem</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Odmowa wejścia na pokład</p>
                    <p className="text-sm text-muted-foreground">Overbooking – linia sprzedała zbyt wiele biletów</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Utracona przesiadka</p>
                    <p className="text-sm text-muted-foreground">Opóźnienie spowodowało przegapienie lotu łączącego</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Ile wynosi odszkodowanie za lot z Krakowa?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">250 €</div>
                <p className="font-semibold mb-2">Krótkie trasy</p>
                <p className="text-sm text-muted-foreground">Do 1500 km (większość lotów z Krakowa do Europy)</p>
              </Card>

              <Card className="p-6 text-center border-2 border-primary">
                <div className="text-4xl font-bold text-primary mb-2">400 €</div>
                <p className="font-semibold mb-2">Średnie trasy</p>
                <p className="text-sm text-muted-foreground">1500-3500 km (np. Wyspy Kanaryjskie, Egipt, Turcja)</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">600 €</div>
                <p className="font-semibold mb-2">Długie trasy</p>
                <p className="text-sm text-muted-foreground">Powyżej 3500 km (połączenia dalekiego zasięgu)</p>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mb-6">
              Wysokość odszkodowania nie zależy od ceny biletu – nawet za najtańszy bilet możesz otrzymać pełną rekompensatę.
            </p>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/ile-mozesz-dostac">Oblicz dokładną kwotę odszkodowania</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Popularne kierunki z Krakowa</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">
                <Plane className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Wielka Brytania</h3>
                <p className="text-sm text-muted-foreground">Londyn (wszystkie lotniska), Edinburgh, Manchester, Bristol, Liverpool</p>
              </Card>

              <Card className="p-4">
                <Plane className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Irlandia</h3>
                <p className="text-sm text-muted-foreground">Dublin, Cork</p>
              </Card>

              <Card className="p-4">
                <Plane className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Europa Zachodnia</h3>
                <p className="text-sm text-muted-foreground">Frankfurt, Monachium, Paryż, Amsterdam, Bruksela</p>
              </Card>

              <Card className="p-4">
                <Plane className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Europa Południowa</h3>
                <p className="text-sm text-muted-foreground">Barcelona, Mediolan, Rzym, Malta, Ateny</p>
              </Card>

              <Card className="p-4">
                <Plane className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Skandynawia</h3>
                <p className="text-sm text-muted-foreground">Oslo, Kopenhaga, Sztokholm, Bergen</p>
              </Card>

              <Card className="p-4">
                <Plane className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Kierunki wakacyjne</h3>
                <p className="text-sm text-muted-foreground">Alicante, Malaga, Faro, Korfu, Rodos</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">
            Problem z lotem z Krakowa?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Nie pozwól linii lotniczej uchylić się od odpowiedzialności. Sprawdź swoje prawa i otrzymaj należne odszkodowanie – bez żadnego ryzyka finansowego.
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
              <Link href="/opozniony-lot-warszawa">
                <Card className="p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <p className="font-semibold text-sm">Opóźniony lot Warszawa →</p>
                </Card>
              </Link>
              <Link href="/ile-mozesz-dostac">
                <Card className="p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <p className="font-semibold text-sm">Ile możesz dostać? →</p>
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