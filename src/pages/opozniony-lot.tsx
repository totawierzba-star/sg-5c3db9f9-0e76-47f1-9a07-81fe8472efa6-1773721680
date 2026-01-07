import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, AlertCircle, Euro, FileText, Scale } from "lucide-react";
import Link from "next/link";

export default function OpoznionyLot() {
  return (
    <Layout>
      <SEO
        title="Opóźniony lot – co zrobić i ile odszkodowania?"
        description="Dowiedz się, co zrobić gdy lot jest opóźniony i kiedy należy Ci się odszkodowanie do 600 €."
        url="https://lotproblem.pl/opozniony-lot"
      />

      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 text-balance">
              Opóźniony lot – co zrobić i jakie przysługuje odszkodowanie?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Jeśli Twój lot był opóźniony o więcej niż 3 godziny, masz prawo do odszkodowania nawet do 600 € zgodnie z rozporządzeniem UE 261/2004.
            </p>
            <Button size="lg" asChild>
              <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                Sprawdź swoje odszkodowanie
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Kiedy przysługuje odszkodowanie za opóźniony lot?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Zgodnie z prawem europejskim (rozporządzenie UE 261/2004), odszkodowanie za opóźniony lot przysługuje, gdy:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Lot dotarł z opóźnieniem powyżej 3 godzin</p>
                    <p className="text-sm text-muted-foreground">Liczony do momentu otwarcia drzwi samolotu w miejscu docelowym</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Lot wyleciał z lotniska UE</p>
                    <p className="text-sm text-muted-foreground">Lub dotarł do UE samolotem linii europejskiej</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Opóźnienie nie było spowodowane nadzwyczajnymi okolicznościami</p>
                    <p className="text-sm text-muted-foreground">Np. ekstremalne warunki pogodowe, strajki kontroli lotów</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Od lotu minęły maksymalnie 3 lata</p>
                    <p className="text-sm text-muted-foreground">Roszczenia przedawniają się po 3 latach</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-display font-bold text-xl mb-4">Ile możesz otrzymać?</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">250 €</div>
                  <p className="text-sm">Do 1500 km</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">400 €</div>
                  <p className="text-sm">1500-3500 km</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">600 €</div>
                  <p className="text-sm">Powyżej 3500 km</p>
                </div>
              </div>
              <Button asChild className="mt-6 w-full">
                <Link href="/ile-mozesz-dostac">Oblicz dokładną kwotę</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Co zrobić gdy lot jest opóźniony?</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Dokumentuj wszystko</h3>
                  <p className="text-muted-foreground">
                    Zrób zdjęcia tablicy odlotów, zachowaj kartę pokładową, zbieraj potwierdzenia wydatków.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Poproś o pisemne potwierdzenie przyczyny</h3>
                  <p className="text-muted-foreground">
                    Zapytaj linię lotniczą o oficjalną przyczynę opóźnienia – to kluczowe dla sprawy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Złóż wniosek o odszkodowanie</h3>
                  <p className="text-muted-foreground">
                    Możesz zrobić to samodzielnie lub skorzystać z pomocy ekspertów, którzy załatwią wszystko za Ciebie.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button size="lg" asChild>
                <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                  Pozwól ekspertom zająć się Twoją sprawą
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Najpopularniejsze linie lotnicze</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/opozniony-lot-ryanair">
                <Card className="p-6 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <h3 className="font-display font-bold text-lg mb-2">Opóźniony lot Ryanair</h3>
                  <p className="text-sm text-muted-foreground">Sprawdź swoje prawa →</p>
                </Card>
              </Link>

              <Link href="/opozniony-lot-wizzair">
                <Card className="p-6 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <h3 className="font-display font-bold text-lg mb-2">Opóźniony lot Wizzair</h3>
                  <p className="text-sm text-muted-foreground">Sprawdź swoje prawa →</p>
                </Card>
              </Link>

              <Link href="/opozniony-lot-lot">
                <Card className="p-6 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <h3 className="font-display font-bold text-lg mb-2">Opóźniony lot LOT</h3>
                  <p className="text-sm text-muted-foreground">Sprawdź swoje prawa →</p>
                </Card>
              </Link>

              <Link href="/opozniony-lot-lufthansa">
                <Card className="p-6 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <h3 className="font-display font-bold text-lg mb-2">Opóźniony lot Lufthansa</h3>
                  <p className="text-sm text-muted-foreground">Sprawdź swoje prawa →</p>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">
            Gotowy odzyskać swoje pieniądze?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Sprawdzenie uprawnień jest darmowe i zajmuje tylko 2 minuty. Nie czekaj – masz 3 lata na zgłoszenie roszczenia.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
              Sprawdź odszkodowanie za darmo
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}