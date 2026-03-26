import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Scale, FileText, CheckCircle2, ArrowRight, Plane, Shield, ExternalLink, Clock, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://problemlot.com/#organization",
        "name": "problemlot.com",
        "url": "https://problemlot.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://problemlot.com/og-image.png"
        },
        "description": "Portal o odszkodowaniach za opóźnione i odwołane loty — EU261/2004"
      },
      {
        "@type": "WebSite",
        "@id": "https://problemlot.com/#website",
        "url": "https://problemlot.com",
        "name": "problemlot.com",
        "description": "Odszkodowania za opóźnione i odwołane loty — do 600 € na pasażera",
        "publisher": {
          "@id": "https://problemlot.com/#organization"
        },
        "inLanguage": "pl-PL"
      },
      {
        "@type": "WebPage",
        "@id": "https://problemlot.com/#webpage",
        "url": "https://problemlot.com",
        "name": "Odszkodowanie za opóźniony lub odwołany lot — do 600 € | problemlot.com",
        "isPartOf": {
          "@id": "https://problemlot.com/#website"
        },
        "description": "Masz problem z lotem? Dowiedz się, ile odszkodowania możesz dostać za opóźniony lub odwołany lot na podstawie rozporządzenia EU261/2004.",
        "inLanguage": "pl-PL"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Ile wynosi odszkodowanie za opóźniony lot?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Odszkodowanie za opóźniony lot wynosi od 250 € do 600 € na pasażera, zależnie od długości trasy: 250 € do 1500 km, 400 € od 1500 do 3500 km, 600 € powyżej 3500 km."
            }
          },
          {
            "@type": "Question",
            "name": "Kiedy przysługuje odszkodowanie za lot?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Odszkodowanie przysługuje, gdy lot był opóźniony o ponad 3 godziny lub został odwołany z mniej niż 14-dniowym wyprzedzeniem, a linia lotnicza nie jest w stanie udowodnić nadzwyczajnych okoliczności."
            }
          },
          {
            "@type": "Question",
            "name": "Jak długo można ubiegać się o odszkodowanie za lot?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "W Polsce masz 3 lata na złożenie roszczenia. W niektórych krajach UE okres przedawnienia wynosi do 6 lat — liczy się prawo kraju, w którym linia ma siedzibę lub z którego lotniska startowałeś."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Odszkodowanie za opóźniony lub odwołany lot — do 600 € | problemlot.com"
        description="Masz problem z lotem? Sprawdź, czy należy Ci się odszkodowanie do 600 € na podstawie EU261/2004. Bezpłatna weryfikacja, bez ryzyka."
        url="https://problemlot.com"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-sm text-blue-700 mb-6">
                <Shield className="h-4 w-4" />
                Rozporządzenie EU261/2004 — Twoja ochrona jako pasażera
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Masz problem z lotem?<br />
                <span className="text-blue-600">Możesz dostać do 600 €</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Opóźniony lub odwołany lot? Rozporządzenie EU261/2004 daje Ci prawo do odszkodowania
                od 250 € do 600 € na pasażera — niezależnie od ceny biletu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-lg bg-blue-600 hover:bg-blue-700 shadow-lg"
                  onClick={() => {
                    if (typeof window !== "undefined" && window.dataLayer) {
                      window.dataLayer.push({
                        event: "outbound_cta_click",
                        cta_text: "Sprawdź odszkodowanie za darmo",
                        destination: "claimwinger.com",
                        position: "hero_primary",
                        page_path: "/"
                      });
                    }
                  }}
                >
                  <a
                    href="https://claimwinger.com/pl?utm_source=problemlot.com&utm_medium=homepage&utm_campaign=hero&utm_content=cta_primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sprawdź odszkodowanie za darmo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600"
                >
                  <Link href="/ile-mozesz-dostac">
                    Ile mogę dostać?
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Compensation amounts */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-center mb-10 text-blue-100">
              Wysokość odszkodowania — EU261/2004
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-blue-700/50 rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">250 €</div>
                <div className="text-blue-200 text-sm mb-3">na pasażera</div>
                <div className="text-white font-medium">Loty do 1 500 km</div>
                <div className="text-blue-200 text-sm mt-1">np. Warszawa–Berlin, Kraków–Londyn</div>
              </div>
              <div className="bg-blue-700/50 rounded-xl p-6 ring-2 ring-white/30">
                <div className="text-4xl font-bold mb-2">400 €</div>
                <div className="text-blue-200 text-sm mb-3">na pasażera</div>
                <div className="text-white font-medium">Loty 1 500–3 500 km</div>
                <div className="text-blue-200 text-sm mt-1">np. Warszawa–Tel Aviv, Kraków–Kair</div>
              </div>
              <div className="bg-blue-700/50 rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">600 €</div>
                <div className="text-blue-200 text-sm mb-3">na pasażera</div>
                <div className="text-white font-medium">Loty powyżej 3 500 km</div>
                <div className="text-blue-200 text-sm mt-1">np. Warszawa–Nowy Jork, –Toronto</div>
              </div>
            </div>
            <p className="text-center text-blue-200 text-sm mt-8">
              Odszkodowanie przysługuje przy opóźnieniu &gt;3h, odwołaniu lotu lub odmowie przyjęcia na pokład.
            </p>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Co musisz wiedzieć o EU261
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-slate-200">
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle className="text-xl">Opóźnienie ponad 3 godziny</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Jeśli dotarłeś do celu z opóźnieniem powyżej 3 godzin — niezależnie od powodu podróży —
                    przysługuje Ci odszkodowanie pieniężne.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <Plane className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">Odwołanie z mniej niż 14 dni</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Linia musiała poinformować Cię o odwołaniu co najmniej 14 dni wcześniej.
                    Jeśli tego nie zrobiła, odszkodowanie Ci przysługuje.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <Scale className="h-10 w-10 text-purple-600 mb-4" />
                  <CardTitle className="text-xl">Niezależnie od ceny biletu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Odszkodowanie z EU261 jest stałą kwotą — nie zależy od tego, ile zapłaciłeś za bilet
                    ani czy bilet kupił pracodawca.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Topics */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Najważniejsze informacje
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Wszystko, co musisz wiedzieć o odszkodowaniach za problemy z lotami
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/opozniony-lot" className="group">
                <Card className="border-slate-200 hover:border-blue-400 transition-all hover:shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors flex items-start justify-between">
                      Opóźniony lot
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </CardTitle>
                    <CardDescription className="text-base">
                      Kiedy opóźnienie daje prawo do odszkodowania? Ile możesz dostać i jak szybko
                      linia lotnicza musi zapłacić?
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/odwolany-lot" className="group">
                <Card className="border-slate-200 hover:border-blue-400 transition-all hover:shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors flex items-start justify-between">
                      Odwołany lot
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </CardTitle>
                    <CardDescription className="text-base">
                      Co robić, gdy lot zostaje anulowany? Jakie masz prawa do zwrotu, zmiany trasy
                      i odszkodowania pieniężnego?
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/ile-mozesz-dostac" className="group">
                <Card className="border-slate-200 hover:border-blue-400 transition-all hover:shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors flex items-start justify-between">
                      Ile możesz dostać?
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </CardTitle>
                    <CardDescription className="text-base">
                      Kalkulator odszkodowania EU261. Sprawdź konkretną kwotę na podstawie długości
                      swojej trasy i rodzaju zakłócenia.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/blog" className="group">
                <Card className="border-slate-200 hover:border-blue-400 transition-all hover:shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors flex items-start justify-between">
                      Artykuły i poradniki
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </CardTitle>
                    <CardDescription className="text-base">
                      Szczegółowe przewodniki po odszkodowaniach dla konkretnych linii lotniczych,
                      tras i sytuacji pasażerskich.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              Najczęstsze pytania
            </h2>
            <div className="space-y-6">
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Ile wynosi odszkodowanie za opóźniony lot?
                </h3>
                <p className="text-slate-600">
                  250 € za loty do 1 500 km, 400 € za loty między 1 500 a 3 500 km,
                  600 € za loty powyżej 3 500 km. Kwota jest stała — nie zależy od ceny biletu.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Kiedy przysługuje odszkodowanie za lot?
                </h3>
                <p className="text-slate-600">
                  Gdy przybyłeś do celu z opóźnieniem powyżej 3 godzin, lot został odwołany
                  z mniej niż 14-dniowym wyprzedzeniem lub odmówiono Ci wejścia na pokład.
                  Linia nie musi płacić tylko przy nadzwyczajnych okolicznościach (np. strajk kontrolerów, ekstremalna pogoda).
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Jak długo można ubiegać się o odszkodowanie za lot?
                </h3>
                <p className="text-slate-600">
                  W Polsce masz 3 lata na złożenie roszczenia. W Wielkiej Brytanii (UK261) — 6 lat.
                  Liczy się rok od daty lotu — im szybciej złożysz wniosek, tym lepiej.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <Euro className="h-12 w-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sprawdź, czy należy Ci się odszkodowanie
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Weryfikacja jest bezpłatna i zajmuje 2 minuty. Płacisz tylko wtedy,
              gdy odszkodowanie zostanie wypłacone — 30% prowizji od odzyskanej kwoty.
            </p>
            <Button
              asChild
              size="lg"
              className="text-lg bg-blue-600 hover:bg-blue-500"
              onClick={() => {
                if (typeof window !== "undefined" && window.dataLayer) {
                  window.dataLayer.push({
                    event: "outbound_cta_click",
                    cta_text: "Sprawdź odszkodowanie za darmo",
                    destination: "claimwinger.com",
                    position: "cta_section",
                    page_path: "/"
                  });
                }
              }}
            >
              <a
                href="https://claimwinger.com/pl?utm_source=problemlot.com&utm_medium=homepage&utm_campaign=cta_section&utm_content=cta_bottom"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sprawdź odszkodowanie za darmo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-slate-400 mt-4">
              Obsługiwane przez ClaimWinger — licencjonowany podmiot dochodzenia roszczeń
            </p>
          </div>
        </section>

        {/* Sister site */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-semibold text-slate-700 mb-6">Sprawdź również</h2>
            <div className="bg-white rounded-xl shadow p-6 border border-slate-200 inline-block text-left max-w-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Scale className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Wise-Flight.info</h3>
                  <p className="text-sm text-slate-500 mb-3">
                    Angielskojęzyczny portal o prawach pasażerów EU261 i UK261 — przewodniki
                    dla lotów z Europy i spoza UE.
                  </p>
                  <a
                    href="https://wise-flight.info?utm_source=problemlot.com&utm_medium=homepage&utm_campaign=sister_site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm font-medium"
                    onClick={() => {
                      if (typeof window !== "undefined" && window.dataLayer) {
                        window.dataLayer.push({
                          event: "outbound_cta_click",
                          cta_text: "Wise-Flight.info",
                          destination: "wise-flight.info",
                          position: "sister_site",
                          page_path: "/"
                        });
                      }
                    }}
                  >
                    Odwiedź wise-flight.info
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-white">problemlot.com</h3>
                <p className="text-sm text-slate-400">
                  Portal edukacyjny o odszkodowaniach za opóźnione i odwołane loty na podstawie EU261/2004.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-300 mb-4">Odszkodowania</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/opozniony-lot" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Opóźniony lot
                    </Link>
                  </li>
                  <li>
                    <Link href="/odwolany-lot" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Odwołany lot
                    </Link>
                  </li>
                  <li>
                    <Link href="/ile-mozesz-dostac" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Ile możesz dostać?
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-300 mb-4">Więcej</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Blog i artykuły
                    </Link>
                  </li>
                  <li>
                    <Link href="/o-autorze" className="text-sm text-slate-400 hover:text-white transition-colors">
                      O autorze
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://wise-flight.info"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      Wise-Flight.info (EN)
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-300 mb-4">Sprawdź odszkodowanie</h3>
                <p className="text-sm text-slate-400 mb-3">
                  Bezpłatna weryfikacja przez ClaimWinger — licencjonowany podmiot.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://claimwinger.com/pl?utm_source=problemlot.com&utm_medium=homepage&utm_campaign=footer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ClaimWinger.com
                  </a>
                </Button>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
              <p>© 2026 problemlot.com — Twój przewodnik po odszkodowaniach lotniczych EU261/2004.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
