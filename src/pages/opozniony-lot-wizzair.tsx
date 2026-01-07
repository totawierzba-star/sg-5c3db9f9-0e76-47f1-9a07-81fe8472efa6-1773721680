import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function OpoznionyLotWizzair() {
  return (
    <Layout>
      <SEO
        title="Opóźniony lot Wizzair – czy należy się odszkodowanie?"
        description="Poznaj swoje prawa przy opóźnionym locie Wizzair i sprawdź możliwość uzyskania pieniędzy."
        url="https://problemlot.com/opozniony-lot-wizzair"
      />

      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 text-balance">
              Opóźniony lot Wizzair – czy należy Ci się odszkodowanie?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Wizzair, mimo że jest tanią linią lotniczą, również musi przestrzegać prawa UE i wypłacać odszkodowania za opóźnione loty.
            </p>
            <Button size="lg" asChild>
              <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                Sprawdź swoje odszkodowanie od Wizzair
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Prawa pasażera Wizzair</h2>
            
            <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
              <h3 className="font-display font-bold text-xl mb-4">Wizzair musi wypłacić odszkodowanie gdy:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Lot opóźniony o więcej niż 3 godziny</p>
                    <p className="text-sm text-muted-foreground">Liczony do momentu dotarcia do miejsca docelowego</p>
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
                    <p className="text-sm text-muted-foreground">Nadsprzedaż biletów (overbooking)</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Utracona przesiadka</p>
                    <p className="text-sm text-muted-foreground">Jeśli opóźnienie pierwszego lotu spowodowało utratę połączenia</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-warning/10 border-warning/30">
              <div className="flex gap-3">
                <AlertTriangle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Wizzair często stosuje uniki</h3>
                  <p className="text-muted-foreground mb-4">
                    Wizzair jest jedną z linii, które najczęściej odrzucają roszczenia pasażerów, powołując się na "problemy techniczne" jako nadzwyczajne okoliczności – co w większości przypadków jest niezgodne z prawem.
                  </p>
                  <p className="text-sm font-semibold">
                    Nie daj się zniechęcić odmową – większość spraw da się wygrać z pomocą prawników.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Ile wynosi odszkodowanie od Wizzair?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">250 €</div>
                <p className="font-semibold mb-2">Krótkie trasy</p>
                <p className="text-sm text-muted-foreground">Do 1500 km (większość tras Wizzair)</p>
              </Card>

              <Card className="p-6 text-center border-2 border-primary">
                <div className="text-4xl font-bold text-primary mb-2">400 €</div>
                <p className="font-semibold mb-2">Średnie trasy</p>
                <p className="text-sm text-muted-foreground">1500-3500 km (np. Zjednoczone Emiraty Arabskie)</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">600 €</div>
                <p className="font-semibold mb-2">Długie trasy</p>
                <p className="text-sm text-muted-foreground">Powyżej 3500 km (rzadko w ofercie Wizzair)</p>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mb-6">
              Kwota nie zależy od ceny biletu – nawet jeśli zapłaciłeś 50 zł za bilet, możesz otrzymać 250 € odszkodowania.
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
            <h2 className="font-display font-bold text-3xl mb-8">Popularne trasy Wizzair z Polski</h2>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Z Warszawy (WAW)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Londyn Luton, Dortmund</li>
                  <li>• Barcelona, Rzym, Mediolan</li>
                  <li>• Reykjavik, Oslo, Kopenhaga</li>
                  <li>• Abu Dhabi, Dubaj</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Z Katowic (KTW)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Londyn Luton, Bristol</li>
                  <li>• Dortmund, Eindhoven</li>
                  <li>• Oslo, Sztokholm</li>
                  <li>• Kutaisi, Tel Awiw</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Z Gdańska (GDN)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Londyn Luton, Bristol</li>
                  <li>• Dortmund, Eindhoven</li>
                  <li>• Reykjavik, Bergen</li>
                  <li>• Tirana, Sofia</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Z Wrocławia (WRO)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Londyn Luton, Birmingham</li>
                  <li>• Dortmund, Memmingen</li>
                  <li>• Eindhoven, Bruksela</li>
                  <li>• Kijów, Charków</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">
            Nie daj się zniechęcić odmowie Wizzair
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Wizzair często odrzuca roszczenia, ale większość spraw da się wygrać. Nasi eksperci wiedzą, jak skutecznie walczyć o Twoje prawa.
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
              <Link href="/opozniony-lot-ryanair">
                <Card className="p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <p className="font-semibold text-sm">Opóźniony lot Ryanair →</p>
                </Card>
              </Link>
              <Link href="/opozniony-lot-lot">
                <Card className="p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <p className="font-semibold text-sm">Opóźniony lot LOT →</p>
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