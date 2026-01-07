import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Plane, MapPin } from "lucide-react";
import Link from "next/link";

export default function OpoznionyLotWarszawa() {
  return (
    <Layout>
      <SEO
        title="Opóźniony lot Warszawa – prawa pasażera i odszkodowanie"
        description="Co zrobić gdy Twój lot z Warszawy jest opóźniony? Sprawdź swoje prawa."
        url="https://problemlot.com/opozniony-lot-warszawa"
      />

      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-muted-foreground font-semibold">Lotnisko Chopina (WAW) / Modlin (WMI)</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 text-balance">
              Opóźniony lot z Warszawy – Twoje prawa i odszkodowanie
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Czy Twój lot z lotniska Chopina lub Modlina był opóźniony? Sprawdź, czy należy Ci się nawet 600 € odszkodowania zgodnie z prawem UE.
            </p>
            <Button size="lg" asChild>
              <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                Sprawdź odszkodowanie za lot z Warszawy
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Lotniska w Warszawie</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card className="p-6">
                <h3 className="font-display font-bold text-xl mb-4">Lotnisko Chopina (WAW)</h3>
                <p className="text-muted-foreground mb-4">
                  Największe lotnisko w Polsce, obsługujące ponad 18 milionów pasażerów rocznie. Hub dla LOT Polish Airlines i główna brama dla połączeń międzynarodowych.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Popularne linie:</strong> LOT, Ryanair, Wizzair, Lufthansa, Emirates</p>
                  <p><strong>Główne kierunki:</strong> Londyn, Frankfurt, Paryż, Amsterdam, Nowy Jork</p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-display font-bold text-xl mb-4">Lotnisko Modlin (WMI)</h3>
                <p className="text-muted-foreground mb-4">
                  Drugie lotnisko obsługujące Warszawę, położone 35 km na północ od centrum. Głównie loty tanich linii lotniczych.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Popularne linie:</strong> Ryanair, Wizzair</p>
                  <p><strong>Główne kierunki:</strong> Londyn, Dublin, Barcelona, Oslo, Sztokholm</p>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-display font-bold text-xl mb-4">Twoje prawa przy lotach z Warszawy</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Odszkodowanie za opóźnienie</p>
                    <p className="text-sm text-muted-foreground">250-600 € jeśli lot dotarł z opóźnieniem powyżej 3 godzin</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Odszkodowanie za odwołany lot</p>
                    <p className="text-sm text-muted-foreground">Jeśli linia nie powiadomiła Cię minimum 14 dni wcześniej</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Prawo do opieki</p>
                    <p className="text-sm text-muted-foreground">Posiłki, napoje, nocleg i transport w przypadku długiego opóźnienia</p>
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
            <h2 className="font-display font-bold text-3xl mb-8">Najczęstsze problemy na lotach z Warszawy</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-display font-bold text-xl mb-3">Opóźnienia techniczne</h3>
                <p className="text-muted-foreground">
                  Problemy techniczne samolotu NIE są "nadzwyczajnymi okolicznościami" – linia lotnicza musi wypłacić odszkodowanie.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-display font-bold text-xl mb-3">Problemy z personelem</h3>
                <p className="text-muted-foreground">
                  Brak załogi lub strajk pracowników linii lotniczej również NIE zwalnia z obowiązku wypłaty rekompensaty.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-display font-bold text-xl mb-3">Przepełnienie lotniska</h3>
                <p className="text-muted-foreground">
                  W szczycie sezonu (wakacje, święta) lotnisko Chopina może być przeciążone, co prowadzi do opóźnień. Mimo to, Twoje prawa pozostają chronione.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Popularne kierunki z Warszawy</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">
                <Plane className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Europa Zachodnia</h3>
                <p className="text-sm text-muted-foreground">Londyn, Paryż, Amsterdam, Frankfurt, Barcelona</p>
              </Card>

              <Card className="p-4">
                <Plane className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Europa Południowa</h3>
                <p className="text-sm text-muted-foreground">Rzym, Mediolan, Lizbona, Ateny, Malta</p>
              </Card>

              <Card className="p-4">
                <Plane className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Europa Północna</h3>
                <p className="text-sm text-muted-foreground">Oslo, Sztokholm, Kopenhaga, Helsinki, Reykjavik</p>
              </Card>

              <Card className="p-4">
                <Plane className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Ameryka Północna</h3>
                <p className="text-sm text-muted-foreground">Nowy Jork, Chicago, Toronto, Los Angeles</p>
              </Card>

              <Card className="p-4">
                <Plane className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Azja</h3>
                <p className="text-sm text-muted-foreground">Pekin, Tokio, Seul, Bangkok, Singapur</p>
              </Card>

              <Card className="p-4">
                <Plane className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Bliski Wschód</h3>
                <p className="text-sm text-muted-foreground">Dubaj, Abu Dhabi, Tel Awiw, Kair</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">
            Problem z lotem z Warszawy?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Niezależnie od tego, czy leciałeś z Chopina czy Modlina, Twoje prawa są chronione prawem europejskim. Sprawdź swoje odszkodowanie w 2 minuty.
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
              <Link href="/opozniony-lot-krakow">
                <Card className="p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <p className="font-semibold text-sm">Opóźniony lot Kraków →</p>
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