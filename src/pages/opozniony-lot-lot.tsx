import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function OpoznionyLotLOT() {
  return (
    <Layout>
      <SEO
        title="Opóźniony lot LOT – odszkodowanie i zwrot kosztów"
        description="Sprawdź, kiedy LOT musi wypłacić odszkodowanie za opóźniony lot."
        url="https://problemlot.com/opozniony-lot-lot"
      />

      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 text-balance">
              Opóźniony lot LOT Polish Airlines – Twoje prawa i odszkodowanie
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              LOT Polish Airlines jako przewoźnik UE musi przestrzegać rozporządzenia 261/2004 i wypłacać odszkodowania za opóźnione loty. Sprawdź, czy przysługuje Ci nawet 600 €.
            </p>
            <Button size="lg" asChild>
              <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                Sprawdź odszkodowanie od LOT
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Kiedy LOT musi wypłacić odszkodowanie?</h2>
            
            <div className="space-y-6 mb-10">
              <Card className="p-6">
                <h3 className="font-display font-bold text-xl mb-4">Opóźnienie powyżej 3 godzin</h3>
                <p className="text-muted-foreground mb-4">
                  Jeśli Twój lot LOT dotarł do miejsca docelowego z opóźnieniem przekraczającym 3 godziny, masz prawo do odszkodowania finansowego zgodnie z prawem europejskim.
                </p>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0" />
                  <p className="text-sm">
                    <strong>250-600 €</strong> w zależności od odległości lotu
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-display font-bold text-xl mb-4">Odwołany lot</h3>
                <p className="text-muted-foreground mb-4">
                  LOT musi wypłacić odszkodowanie, jeśli odwołał lot bez wcześniejszego powiadomienia (minimum 14 dni przed planowanym odlotem).
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-display font-bold text-xl mb-4">Odmowa wejścia na pokład</h3>
                <p className="text-muted-foreground">
                  W przypadku nadsprzedaży biletów (overbooking) i odmowy wejścia na pokład przysługuje Ci natychmiastowa rekompensata.
                </p>
              </Card>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">LOT to polski przewoźnik narodowy</h3>
                  <p className="text-muted-foreground mb-4">
                    Jako linia flagowa, LOT generalnie lepiej obsługuje roszczenia niż konkurencyjne tanie linie lotnicze. Warto jednak znać swoje prawa i nie pozwolić się zniechęcić w razie odmowy.
                  </p>
                  <p className="text-sm font-semibold">
                    Masz prawo do odszkodowania niezależnie od ceny biletu.
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
            <h2 className="font-display font-bold text-3xl mb-8">Ile możesz dostać od LOT?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">250 €</div>
                <p className="font-semibold mb-2">Loty krótkie</p>
                <p className="text-sm text-muted-foreground">Do 1500 km (większość europejskich tras LOT)</p>
              </Card>

              <Card className="p-6 text-center border-2 border-primary">
                <div className="text-4xl font-bold text-primary mb-2">400 €</div>
                <p className="font-semibold mb-2">Loty średnie</p>
                <p className="text-sm text-muted-foreground">1500-3500 km (np. Tel Awiw, Kair, Stambuł)</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">600 €</div>
                <p className="font-semibold mb-2">Loty dalekie</p>
                <p className="text-sm text-muted-foreground">Powyżej 3500 km (np. Pekin, Tokio, Nowy Jork)</p>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/ile-mozesz-dostac">Oblicz dokładną kwotę dla swojego lotu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Popularne trasy LOT Polish Airlines</h2>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Połączenia europejskie</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Londyn, Paryż, Frankfurt</li>
                  <li>• Amsterdam, Bruksela, Zurych</li>
                  <li>• Rzym, Mediolan, Barcelona</li>
                  <li>• Wiedeń, Praga, Budapeszt</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Połączenia międzykontynentalne</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Nowy Jork, Chicago, Toronto</li>
                  <li>• Tokio, Pekin, Seoul</li>
                  <li>• Tel Awiw, Kair</li>
                  <li>• Delhi, Singapur</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Z Warszawy (WAW)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Hub dla wszystkich głównych tras</li>
                  <li>• Połączenia do ponad 120 destynacji</li>
                  <li>• Loty bezpośrednie i z przesiadką</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Z innych polskich miast</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Kraków, Gdańsk, Wrocław</li>
                  <li>• Katowice, Poznań, Rzeszów</li>
                  <li>• Głównie przez hub w Warszawie</li>
                </ul>
              </Card>
            </div>

            <p className="text-muted-foreground text-center">
              Prawo do odszkodowania przysługuje na wszystkich trasach LOT objętych prawem UE.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">
            Problem z lotem LOT? Jesteśmy tu, żeby pomóc
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Nie trać czasu na skomplikowane formularze i długie procedury. Nasi eksperci załatwią wszystko za Ciebie – szybko i skutecznie.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
              Sprawdź swoje odszkodowanie teraz
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
              <Link href="/opozniony-lot-wizzair">
                <Card className="p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <p className="font-semibold text-sm">Opóźniony lot Wizzair →</p>
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