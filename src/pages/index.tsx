import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, XCircle, Plane, Euro, FileCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Opóźniony lub odwołany lot – sprawdź odszkodowanie do 600 €"
        description="Masz problem z lotem? Sprawdź, czy przysługuje Ci nawet 600 € odszkodowania za opóźniony lub odwołany lot."
        url="https://lotproblem.pl"
      />

      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
              Masz problem z lotem? Możesz dostać do <span className="text-primary">600 €</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
              Opóźniony, odwołany lub utracona przesiadka? Sprawdź swoje prawa i uzyskaj odszkodowanie bez wysiłku.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg h-14 px-8">
                <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                  Sprawdź odszkodowanie za darmo
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg h-14 px-8">
                <Link href="/ile-mozesz-dostac">Ile mogę dostać?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Kiedy przysługuje Ci odszkodowanie?
            </h2>
            <p className="text-muted-foreground text-lg">
              Zgodnie z rozporządzeniem UE 261/2004 masz prawo do kompensaty w następujących sytuacjach:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Opóźniony lot</h3>
              <p className="text-muted-foreground">
                Lot dotarł z opóźnieniem powyżej 3 godzin do miejsca docelowego.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-destructive/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <XCircle className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Odwołany lot</h3>
              <p className="text-muted-foreground">
                Linia lotnicza odwołała Twój lot bez odpowiedniego wcześniejszego powiadomienia.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-warning/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-warning" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Utracona przesiadka</h3>
              <p className="text-muted-foreground">
                Przegapiłeś lot łączący z powodu opóźnienia poprzedniego rejsu.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Ile możesz otrzymać odszkodowania?
              </h2>
              <p className="text-muted-foreground text-lg">
                Kwota zależy od odległości lotu i opóźnienia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center border-2">
                <div className="text-4xl font-bold text-primary mb-2">250 €</div>
                <p className="font-semibold mb-2">Loty krótkie</p>
                <p className="text-sm text-muted-foreground">Do 1500 km</p>
              </Card>

              <Card className="p-6 text-center border-2 border-primary">
                <div className="text-4xl font-bold text-primary mb-2">400 €</div>
                <p className="font-semibold mb-2">Loty średnie</p>
                <p className="text-sm text-muted-foreground">1500-3500 km</p>
              </Card>

              <Card className="p-6 text-center border-2">
                <div className="text-4xl font-bold text-primary mb-2">600 €</div>
                <p className="font-semibold mb-2">Loty dalekie</p>
                <p className="text-sm text-muted-foreground">Powyżej 3500 km</p>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link href="/ile-mozesz-dostac">Oblicz dokładną kwotę</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Najpopularniejsze linie lotnicze
            </h2>
            <p className="text-muted-foreground text-lg">Sprawdź swoje prawa dla konkretnego przewoźnika</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { name: "Ryanair", href: "/opozniony-lot-ryanair" },
              { name: "Wizzair", href: "/opozniony-lot-wizzair" },
              { name: "LOT", href: "/opozniony-lot-lot" },
              { name: "Lufthansa", href: "/opozniony-lot-lufthansa" },
            ].map((airline) => (
              <Link key={airline.name} href={airline.href}>
                <Card className="p-6 text-center hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <h3 className="font-display font-bold text-lg">{airline.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">Sprawdź swoje prawa →</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Jak to działa?</h2>
              <p className="text-muted-foreground text-lg">Prosty proces w 3 krokach</p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Sprawdź uprawnienia</h3>
                  <p className="text-muted-foreground">
                    Wprowadź szczegóły swojego lotu i błyskawicznie sprawdź, czy przysługuje Ci odszkodowanie.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Złóż wniosek</h3>
                  <p className="text-muted-foreground">
                    Nasi eksperci przejmują sprawę. Zajmujemy się całą dokumentacją i negocjacjami z linią lotniczą.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Otrzymaj pieniądze</h3>
                  <p className="text-muted-foreground">
                    Płacisz tylko w przypadku sukcesu. Gdy wygramy, otrzymujesz odszkodowanie na swoje konto.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Button size="lg" asChild>
                <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                  Zacznij teraz – to nic nie kosztuje
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Dlaczego warto skorzystać z pomocy?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Bez ryzyka finansowego</h3>
                  <p className="text-sm text-muted-foreground">Płacisz tylko w przypadku wygranej sprawy</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Doświadczeni eksperci</h3>
                  <p className="text-sm text-muted-foreground">Zespół prawników lotniczych</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Szybki proces</h3>
                  <p className="text-sm text-muted-foreground">Średni czas realizacji to 8-12 tygodni</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">98% skuteczności</h3>
                  <p className="text-sm text-muted-foreground">Wysokie wskaźniki wygranych spraw</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            Gotowy, żeby odzyskać swoje pieniądze?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Sprawdzenie uprawnień zajmuje tylko 2 minuty. Nie czekaj – możesz stracić prawo do odszkodowania po 3 latach.
          </p>
          <Button size="lg" variant="secondary" asChild className="h-14 px-8 text-lg">
            <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
              Sprawdź darmowo swoje odszkodowanie
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}