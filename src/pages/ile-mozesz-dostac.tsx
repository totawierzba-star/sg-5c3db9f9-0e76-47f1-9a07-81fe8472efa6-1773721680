import { SEO } from "@/components/SEO";
import { FlightCompensationCalculator } from "@/components/FlightCompensationCalculator";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Euro, Ruler, Clock } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

const calculatorFaq = [
  {
    question: "Jak działa kalkulator odszkodowania za lot?",
    answer:
      "Kalkulator analizuje trasę, dystans, typ zakłócenia i zakres EU261/UK261. Wynik pokazuje wstępną kwotę 250, 400 albo 600 euro oraz informuje, czy sprawa wymaga dodatkowej weryfikacji.",
  },
  {
    question: "Czy kalkulator sprawdza opóźnione i odwołane loty?",
    answer:
      "Tak. Narzędzie obsługuje opóźniony lot, odwołany lot, odmowę wejścia na pokład oraz utraconą przesiadkę na jednej rezerwacji.",
  },
  {
    question: "Czy wynik kalkulatora jest ostateczną decyzją?",
    answer:
      "Nie. Wynik jest szybką oceną na podstawie podanych danych. Ostateczna analiza powinna uwzględniać dokumenty rezerwacji, rzeczywisty czas przylotu i powód zakłócenia wskazany przez linię lotniczą.",
  },
  {
    question: "Kiedy można dostać 600 euro odszkodowania?",
    answer:
      "Kwota 600 euro dotyczy zwykle tras powyżej 3500 km, jeśli lot kwalifikuje się pod EU261 lub UK261 i opóźnienie przy przylocie wyniosło co najmniej 3 godziny albo doszło do kwalifikowanego odwołania.",
  },
];

const calculatorJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://problemlot.com/ile-mozesz-dostac#calculator",
      name: "Kalkulator odszkodowania za lot",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://problemlot.com/ile-mozesz-dostac",
      inLanguage: "pl-PL",
      description:
        "Darmowy kalkulator odszkodowania za opóźniony lub odwołany lot według EU261 i UK261.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      publisher: {
        "@type": "Organization",
        name: "ProblemLot.com",
        url: "https://problemlot.com",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://problemlot.com/ile-mozesz-dostac#faq",
      mainEntity: calculatorFaq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://problemlot.com/ile-mozesz-dostac#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Strona główna",
          item: "https://problemlot.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Kalkulator odszkodowania",
          item: "https://problemlot.com/ile-mozesz-dostac",
        },
      ],
    },
  ],
};

export default function IleMozeszDostac() {
  return (
    <Layout>
      <SEO
        title="Kalkulator odszkodowania za lot | Sprawdź 250, 400 lub 600 €"
        description="Darmowy kalkulator odszkodowania za opóźniony, odwołany lot, overbooking lub utraconą przesiadkę. Sprawdź kwotę według EU261 i UK261."
        url="https://problemlot.com/ile-mozesz-dostac"
        canonicalUrl="https://problemlot.com/ile-mozesz-dostac"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
        />
      </Head>

      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 text-balance">
                Kalkulator odszkodowania za lot
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Sprawdź w kilka kroków, czy za opóźniony lot, odwołany lot,
                overbooking lub utraconą przesiadkę może przysługiwać Ci 250, 400
                albo 600 euro odszkodowania według EU261 lub UK261.
              </p>
            </div>
            <div id="kalkulator" className="mt-10 text-left scroll-mt-24">
              <FlightCompensationCalculator />
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-6 text-muted-foreground">
              Wynik kalkulatora jest wstępną oceną. Po kliknięciu CTA możesz
              przejść do ClaimWinger, gdzie sprawa zostanie zweryfikowana na
              podstawie dokumentów lotu i przyczyny zakłócenia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8 text-center">Tabela odszkodowań według odległości</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="p-8 text-center border-2 hover:shadow-xl transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Euro className="h-8 w-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-3">250 €</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Ruler className="h-4 w-4 text-muted-foreground" />
                  <p className="font-semibold">Do 1500 km</p>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Wszystkie loty krótkie w obrębie Europy</p>
                <div className="text-xs text-muted-foreground">
                  <p className="mb-1"><strong>Przykłady tras:</strong></p>
                  <ul className="space-y-1">
                    <li>Warszawa → Londyn</li>
                    <li>Kraków → Barcelona</li>
                    <li>Gdańsk → Oslo</li>
                    <li>Wrocław → Paryż</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8 text-center border-2 border-primary hover:shadow-xl transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Euro className="h-8 w-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-3">400 €</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Ruler className="h-4 w-4 text-muted-foreground" />
                  <p className="font-semibold">1500-3500 km</p>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Loty średnie w Europie i poza nią</p>
                <div className="text-xs text-muted-foreground">
                  <p className="mb-1"><strong>Przykłady tras:</strong></p>
                  <ul className="space-y-1">
                    <li>Warszawa → Reykjavik</li>
                    <li>Kraków → Wyspy Kanaryjskie</li>
                    <li>Warszawa → Tel Awiw</li>
                    <li>Gdańsk → Kair</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8 text-center border-2 hover:shadow-xl transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Euro className="h-8 w-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-3">600 €</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Ruler className="h-4 w-4 text-muted-foreground" />
                  <p className="font-semibold">Powyżej 3500 km</p>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Loty międzykontynentalne</p>
                <div className="text-xs text-muted-foreground">
                  <p className="mb-1"><strong>Przykłady tras:</strong></p>
                  <ul className="space-y-1">
                    <li>Warszawa → Nowy Jork</li>
                    <li>Warszawa → Tokio</li>
                    <li>Warszawa → Bangkok</li>
                    <li>Warszawa → Los Angeles</li>
                  </ul>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-display font-bold text-xl mb-4">Ważne informacje</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <p>Wysokość odszkodowania <strong>nie zależy od ceny biletu</strong> – nawet za bilet za 50 zł możesz otrzymać 250-600 €</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <p>Odszkodowanie przysługuje <strong>każdemu pasażerowi osobno</strong> – jeśli leciała cała rodzina, wszyscy otrzymują kompensatę</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <p>Kwota jest <strong>niezależna od klasy biletu</strong> – ekonomiczna czy biznesowa to ta sama rekompensata</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <p>Odszkodowanie może być wypłacone <strong>nawet 3 lata wstecz</strong> od daty lotu</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Kiedy przysługuje odszkodowanie?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <h3 className="font-display font-bold text-xl">Opóźnienie</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Odszkodowanie przysługuje, gdy lot dotarł do miejsca docelowego z opóźnieniem:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Powyżej 3 godzin</strong> – pełna kompensata (250-600 €)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>2-3 godziny</strong> – brak odszkodowania pieniężnego, ale prawo do opieki</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Poniżej 2 godzin</strong> – brak odszkodowania</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                  <h3 className="font-display font-bold text-xl">Inne sytuacje</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Odszkodowanie przysługuje również w innych przypadkach:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Odwołany lot</strong> – bez wcześniejszego powiadomienia (min. 14 dni)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Odmowa wejścia na pokład</strong> – overbooking</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Utracona przesiadka</strong> – przegapienie lotu łączącego</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-8">Redukcja odszkodowania</h2>
            
            <Card className="p-6 bg-warning/10 border-warning/30 mb-6">
              <h3 className="font-display font-bold text-xl mb-4">Kiedy kwota może być niższa?</h3>
              <p className="text-muted-foreground mb-4">
                W niektórych sytuacjach linia lotnicza może zaoferować alternatywny lot, co zmniejsza odszkodowanie o 50%:
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="text-warning font-bold">•</span>
                  <p>Jeśli alternatywny lot dotarł <strong>mniej niż 2 godziny później</strong> (trasy do 1500 km) – odszkodowanie może być obniżone o 50%</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-warning font-bold">•</span>
                  <p>Jeśli alternatywny lot dotarł <strong>mniej niż 3 godziny później</strong> (trasy 1500-3500 km) – odszkodowanie może być obniżone o 50%</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-warning font-bold">•</span>
                  <p>Jeśli alternatywny lot dotarł <strong>mniej niż 4 godziny później</strong> (trasy powyżej 3500 km) – odszkodowanie może być obniżone o 50%</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-display font-bold text-xl mb-4">Kiedy odszkodowanie NIE przysługuje?</h3>
              <p className="text-muted-foreground mb-4">
                Linia lotnicza może odmówić wypłaty, jeśli opóźnienie było spowodowane "nadzwyczajnymi okolicznościami":
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-destructive">✕</span>
                  <span>Ekstremalne warunki pogodowe (burze, huragan, głęboki śnieg)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">✕</span>
                  <span>Strajki kontroli lotów lub pracowników lotniska</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">✕</span>
                  <span>Zagrożenia bezpieczeństwa (zagrożenie terrorystyczne)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">✕</span>
                  <span>Ograniczenia w zarządzaniu ruchem lotniczym</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                Uwaga: Problemy techniczne samolotu, braki w załodze czy strajki pracowników linii lotniczej <strong>NIE SĄ</strong> nadzwyczajnymi okolicznościami i odszkodowanie wciąż przysługuje!
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">
            Sprawdź dokładnie, ile możesz otrzymać
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Wróć do kalkulatora i przeanalizuj trasę, typ problemu oraz warunki
            EU261 lub UK261. To najprostszy sposób, żeby oszacować realną kwotę
            przed zgłoszeniem sprawy.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#kalkulator">Uruchom kalkulator odszkodowania</Link>
          </Button>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display mb-8 text-3xl font-bold">
              FAQ: kalkulator odszkodowania za lot
            </h2>
            <div className="space-y-4">
              {calculatorFaq.map((item) => (
                <Card key={item.question} className="p-6">
                  <h3 className="mb-2 text-lg font-bold">{item.question}</h3>
                  <p className="leading-7 text-muted-foreground">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-2xl mb-6">Zobacz również:</h2>
            <div className="grid sm:grid-cols-4 gap-4">
              <Link href="/opozniony-lot">
                <Card className="p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <p className="font-semibold text-sm">Opóźniony lot →</p>
                </Card>
              </Link>
              <Link href="/opozniony-lot-warszawa">
                <Card className="p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <p className="font-semibold text-sm">Loty z Warszawy →</p>
                </Card>
              </Link>
              <Link href="/opozniony-lot-krakow">
                <Card className="p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <p className="font-semibold text-sm">Loty z Krakowa →</p>
                </Card>
              </Link>
              <Link href="/">
                <Card className="p-4 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <p className="font-semibold text-sm">Strona główna →</p>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
