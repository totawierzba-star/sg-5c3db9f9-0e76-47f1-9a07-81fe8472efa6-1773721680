import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, XCircle, Plane, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Opóźniony lub odwołany lot – sprawdź odszkodowanie do 600 €"
        description="Masz problem z lotem? Sprawdź, czy przysługuje Ci nawet 600 € odszkodowania za opóźniony lub odwołany lot."
        url="https://problemlot.com"
      />

      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              ✈️ Odszkodowanie do 600 € za 15 minut
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance leading-tight">
              Masz problem z lotem? <br className="hidden md:block" />
              Możesz dostać do <span className="text-primary">600 €</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 text-balance max-w-3xl mx-auto">
              Opóźniony, odwołany lub utracona przesiadka? Sprawdź swoje prawa i uzyskaj odszkodowanie bez wysiłku. Płacisz tylko w przypadku sukcesu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-shadow">
                <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                  Sprawdź odszkodowanie za darmo
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg h-14 px-8">
                <Link href="/ile-mozesz-dostac">Ile mogę dostać?</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              ⚡ Sprawdzenie zajmuje 2 minuty • 💰 Bez kosztów początkowych
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Kiedy przysługuje Ci odszkodowanie?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Zgodnie z rozporządzeniem UE 261/2004 masz prawo do kompensaty w następujących sytuacjach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2">
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Opóźniony lot</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lot dotarł z opóźnieniem powyżej 3 godzin do miejsca docelowego.
              </p>
              <Link href="/opozniony-lot" className="text-primary text-sm font-medium mt-4 inline-block hover:underline">
                Dowiedz się więcej →
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2">
              <div className="bg-destructive/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <XCircle className="h-7 w-7 text-destructive" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Odwołany lot</h3>
              <p className="text-muted-foreground leading-relaxed">
                Linia lotnicza odwołała Twój lot bez odpowiedniego wcześniejszego powiadomienia.
              </p>
              <Link href="/opozniony-lot" className="text-primary text-sm font-medium mt-4 inline-block hover:underline">
                Sprawdź szczegóły →
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2">
              <div className="bg-warning/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Plane className="h-7 w-7 text-warning" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Utracona przesiadka</h3>
              <p className="text-muted-foreground leading-relaxed">
                Przegapiłeś lot łączący z powodu opóźnienia poprzedniego rejsu.
              </p>
              <Link href="/opozniony-lot" className="text-primary text-sm font-medium mt-4 inline-block hover:underline">
                Poznaj prawa →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Ile możesz otrzymać odszkodowania?
              </h2>
              <p className="text-muted-foreground text-lg">
                Kwota zależy od odległości lotu – sprawdź swoją kategorię
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 text-center border-2 hover:border-primary transition-colors bg-white">
                <div className="text-5xl font-bold text-primary mb-3">250 €</div>
                <p className="font-semibold text-lg mb-2">Loty krótkie</p>
                <p className="text-sm text-muted-foreground mb-4">Do 1500 km</p>
                <p className="text-xs text-muted-foreground">
                  np. Warszawa → Barcelona
                </p>
              </Card>

              <Card className="p-8 text-center border-4 border-primary relative overflow-hidden bg-white shadow-xl">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1">
                  NAJPOPULARNIEJSZE
                </div>
                <div className="text-5xl font-bold text-primary mb-3">400 €</div>
                <p className="font-semibold text-lg mb-2">Loty średnie</p>
                <p className="text-sm text-muted-foreground mb-4">1500-3500 km</p>
                <p className="text-xs text-muted-foreground">
                  np. Warszawa → Lizbona
                </p>
              </Card>

              <Card className="p-8 text-center border-2 hover:border-primary transition-colors bg-white">
                <div className="text-5xl font-bold text-primary mb-3">600 €</div>
                <p className="font-semibold text-lg mb-2">Loty dalekie</p>
                <p className="text-sm text-muted-foreground mb-4">Powyżej 3500 km</p>
                <p className="text-xs text-muted-foreground">
                  np. Warszawa → Nowy Jork
                </p>
              </Card>
            </div>

            <div className="text-center mt-10">
              <Button size="lg" asChild className="shadow-lg">
                <Link href="/ile-mozesz-dostac">Oblicz dokładną kwotę dla Twojego lotu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Najpopularniejsze linie lotnicze
            </h2>
            <p className="text-muted-foreground text-lg">Sprawdź swoje prawa dla konkretnego przewoźnika</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { name: "Ryanair", href: "/opozniony-lot-ryanair", color: "from-blue-500/10 to-blue-600/10" },
              { name: "Wizzair", href: "/opozniony-lot-wizzair", color: "from-purple-500/10 to-pink-600/10" },
              { name: "LOT", href: "/opozniony-lot-lot", color: "from-blue-600/10 to-blue-700/10" },
              { name: "Lufthansa", href: "/opozniony-lot-lufthansa", color: "from-yellow-500/10 to-yellow-600/10" },
            ].map((airline) => (
              <Link key={airline.name} href={airline.href}>
                <Card className={`p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border-2 hover:border-primary bg-gradient-to-br ${airline.color}`}>
                  <Plane className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-display font-bold text-lg mb-1">{airline.name}</h3>
                  <p className="text-sm text-muted-foreground">Sprawdź prawa →</p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-muted-foreground mb-4">Sprawdź również loty z konkretnych miast:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/opozniony-lot-warszawa">
                <Button variant="outline" size="sm">Warszawa</Button>
              </Link>
              <Link href="/opozniony-lot-krakow">
                <Button variant="outline" size="sm">Kraków</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Jak to działa?</h2>
              <p className="text-muted-foreground text-lg">Prosty proces w 3 krokach</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl mb-2">Sprawdź uprawnienia</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wprowadź szczegóły swojego lotu i błyskawicznie sprawdź, czy przysługuje Ci odszkodowanie. Weryfikacja zajmuje tylko 2 minuty.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl mb-2">Złóż wniosek</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nasi eksperci przejmują sprawę w całości. Zajmujemy się całą dokumentacją, negocjacjami z linią lotniczą i ewentualnymi procedurami sądowymi.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl mb-2">Otrzymaj pieniądze</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Płacisz tylko w przypadku sukcesu – brak ukrytych opłat. Gdy wygramy Twoją sprawę, otrzymujesz odszkodowanie bezpośrednio na swoje konto.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild className="shadow-lg">
                <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                  Zacznij teraz – to nic nie kosztuje
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">
              Dlaczego warto skorzystać z pomocy?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-left mt-10">
              <Card className="p-6 flex gap-4 border-2 hover:border-primary transition-colors">
                <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Bez ryzyka finansowego</h3>
                  <p className="text-sm text-muted-foreground">Płacisz tylko w przypadku wygranej sprawy. Zero ukrytych kosztów.</p>
                </div>
              </Card>

              <Card className="p-6 flex gap-4 border-2 hover:border-primary transition-colors">
                <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Doświadczeni eksperci</h3>
                  <p className="text-sm text-muted-foreground">Zespół prawników specjalizujących się w prawie lotniczym.</p>
                </div>
              </Card>

              <Card className="p-6 flex gap-4 border-2 hover:border-primary transition-colors">
                <Zap className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Szybki proces</h3>
                  <p className="text-sm text-muted-foreground">Średni czas realizacji to 8-12 tygodni od złożenia wniosku.</p>
                </div>
              </Card>

              <Card className="p-6 flex gap-4 border-2 hover:border-primary transition-colors">
                <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Wysokie wskaźniki sukcesu</h3>
                  <p className="text-sm text-muted-foreground">Profesjonalna obsługa i skuteczne dochodzenie roszczeń.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
            Gotowy, żeby odzyskać swoje pieniądze?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Sprawdzenie uprawnień zajmuje tylko 2 minuty. Nie czekaj – możesz stracić prawo do odszkodowania po 3 latach od daty lotu.
          </p>
          <Button size="lg" variant="secondary" asChild className="h-14 px-10 text-lg shadow-2xl hover:shadow-xl">
            <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
              Sprawdź darmowo swoje odszkodowanie
            </a>
          </Button>
          <p className="text-sm mt-6 opacity-75">✈️ Działa dla lotów z ostatnich 3 lat • 🌍 Wszystkie linie lotnicze</p>
        </div>
      </section>
    </Layout>
  );
}