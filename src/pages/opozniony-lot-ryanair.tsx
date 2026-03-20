import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function OpoznionyLotRyanair() {
  return (
    <Layout>
      <SEO
        title="Opóźniony lot Ryanair – odszkodowanie i prawa pasażera"
        description="Sprawdź, kiedy Ryanair musi wypłacić odszkodowanie za opóźniony lot."
        url="https://problemlot.com/opozniony-lot-ryanair"
      />

      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 text-balance">
              Opóźniony lot Ryanair – Twoje prawa i odszkodowanie
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Ryanair jest zobowiązany do wypłaty odszkodowania za opóźniony lot zgodnie z prawem UE. Sprawdź, czy przysługuje Ci nawet 600 €.
            </p>
            <Button size="lg" asChild>
              <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                Sprawdź odszkodowanie od Ryanair
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Kiedy Ryanair musi zapłacić odszkodowanie?</h2>
            
            <div className="space-y-6 mb-10">
              <Card className="p-6">
                <h3 className="font-display font-bold text-xl mb-4">Opóźnienie powyżej 3 godzin</h3>
                <p className="text-muted-foreground mb-4">
                  Jeśli Twój lot Ryanair dotarł do miejsca docelowego z opóźnieniem przekraczającym 3 godziny, masz prawo do odszkodowania finansowego zgodnie z rozporządzeniem UE 261/2004.
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
                  Ryanair często zmienia rozkład lotów. Jeśli Twój lot został odwołany bez wcześniejszego powiadomienia (minimum 14 dni), również przysługuje Ci odszkodowanie.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-display font-bold text-xl mb-4">Odmowa wejścia na pokład (overbooking)</h3>
                <p className="text-muted-foreground">
                  Gdy Ryanair sprzeda zbyt wiele biletów i odmówi Ci wejścia na pokład, masz prawo do natychmiastowej rekompensaty.
                </p>
              </Card>
            </div>

            <Card className="p-6 bg-warning/10 border-warning/30">
              <div className="flex gap-3">
                <AlertTriangle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Ważne: Ryanair często odmawia wypłaty</h3>
                  <p className="text-muted-foreground mb-4">
                    Ryanair jest znany z trudności w bezpośrednim dochodzeniu roszczeń. Linia często powołuje się na "nadzwyczajne okoliczności", nawet gdy nie mają one zastosowania.
                  </p>
                  <p className="text-sm font-semibold">
                    Dlatego warto skorzystać z pomocy prawników specjalizujących się w sprawach lotniczych.
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
            <h2 className="font-display font-bold text-3xl mb-8">Ile możesz dostać od Ryanair?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">250 €</div>
                <p className="font-semibold mb-2">Loty krótkie</p>
                <p className="text-sm text-muted-foreground">Do 1500 km (większość tras Ryanair w Europie)</p>
              </Card>

              <Card className="p-6 text-center border-2 border-primary">
                <div className="text-4xl font-bold text-primary mb-2">400 €</div>
                <p className="font-semibold mb-2">Loty średnie</p>
                <p className="text-sm text-muted-foreground">1500-3500 km (np. do Maroka, Wysp Kanaryjskich)</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">600 €</div>
                <p className="font-semibold mb-2">Loty dalekie</p>
                <p className="text-sm text-muted-foreground">Powyżej 3500 km (rzadko w ofercie Ryanair)</p>
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
            <h2 className="font-display font-bold text-3xl mb-8">Typowe trasy Ryanair z Polski</h2>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Z Warszawy (WAW/WMI)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Londyn, Dublin, Barcelona</li>
                  <li>• Mediolan, Rzym, Bruksela</li>
                  <li>• Manchester, Edinburgh</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Z Krakowa (KRK)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Londyn, Dublin, Bristol</li>
                  <li>• Bergamo, Malta</li>
                  <li>• Edynburg, Leeds</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Z Wrocławia (WRO)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Londyn Stansted, Dublin</li>
                  <li>• Liverpool, East Midlands</li>
                  <li>• Dortmund, Eindhoven</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Z Gdańska (GDN)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Londyn, Dublin, Stockholm</li>
                  <li>• Oslo, Kopenhaga</li>
                  <li>• Liverpool, Edinburgh</li>
                </ul>
              </Card>
            </div>

            <p className="text-muted-foreground text-center">
              Niezależnie od trasy, Twoje prawa jako pasażera są chronione przez prawo UE.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">
            Problem z lotem Ryanair? Jesteśmy tu, żeby pomóc
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Nie pozwól Ryanair odrzucić Twojego roszczenia. Nasi eksperci znają wszystkie taktyki linii i wiedzą, jak skutecznie wygrać sprawę.
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
              <Link href="/opozniony-lot-wizzair">
                <Card className="p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <p className="font-semibold text-sm">Opóźniony lot Wizzair →</p>
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
