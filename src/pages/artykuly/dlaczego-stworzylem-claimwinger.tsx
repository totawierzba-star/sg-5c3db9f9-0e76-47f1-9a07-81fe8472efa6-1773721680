import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { Heart, Users, TrendingUp, Calendar, Clock, ArrowRight, CheckCircle2, ArrowLeft, Globe, Linkedin } from "lucide-react";

export default function DlaczegoStworzylemClaimWinger() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Dlaczego stworzyłem ClaimWinger? – kilka słów od założyciela",
        "description": "Historia powstania ClaimWinger - platformy pomagającej pasażerom odzyskiwać odszkodowania za odwołane i opóźnione loty",
        "author": {
          "@type": "Person",
          "name": "Piotr Wierzba",
          "url": "https://www.linkedin.com/in/piotr-wierzba/",
          "sameAs": [
            "https://www.linkedin.com/in/piotr-wierzba/",
            "https://piotrwierzba.online"
          ]
        },
        "publisher": {
          "@type": "Organization",
          "name": "BizneLot.info",
          "url": "https://bizneslot.info"
        },
        "datePublished": "2026-01-29",
        "dateModified": "2026-01-29",
        "mainEntityOfPage": "https://bizneslot.info/artykuly/dlaczego-stworzylem-claimwinger"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Strona główna",
            "item": "https://bizneslot.info"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Artykuły",
            "item": "https://bizneslot.info/artykuly"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Dlaczego stworzyłem ClaimWinger?",
            "item": "https://bizneslot.info/artykuly/dlaczego-stworzylem-claimwinger"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Dlaczego stworzyłem ClaimWinger? | Historia startupu LegalTech"
        description="Historia powstania ClaimWinger – automatyzacji odszkodowań lotniczych. Jak AI pomaga pasażerom walczyć z liniami lotniczymi? Kulisy budowania startupu."
        url="https://bizneslot.info/artykuly/dlaczego-stworzylem-claimwinger"
        image="https://bizneslot.info/og-image.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Header */}
        <header className="bg-slate-900 text-white py-4 sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold flex items-center gap-2">
                <img src="/bizneslotlogotyp.png" alt="BizneLot.info" className="h-8 w-auto" />
                BizneLot.info
              </Link>

              <nav className="hidden md:flex gap-6">
                <Link href="/odszkodowanie-lot-sluzbowy" className="text-slate-700 hover:text-slate-900 transition-colors">
                  Odszkodowania
                </Link>
                <Link href="/pracodawca-a-odszkodowanie" className="text-slate-700 hover:text-slate-900 transition-colors">
                  Pracodawca
                </Link>
                <Link href="/artykuly" className="text-slate-900 font-semibold">
                  Artykuły
                </Link>
                <Link href="/o-autorze" className="text-slate-700 hover:text-slate-900 transition-colors">
                  O autorze
                </Link>
              </nav>
              <MobileNav currentPath="/artykuly/dlaczego-stworzylem-claimwinger" />
            </div>
          </div>
        </header>

        {/* Breadcrumbs */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-slate-600 hover:text-slate-900">
                Strona główna
              </Link>
              <span className="text-slate-400">/</span>
              <Link href="/artykuly" className="text-slate-600 hover:text-slate-900">
                Artykuły
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-900 font-medium">Dlaczego stworzyłem ClaimWinger?</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Back Link */}
              <Link
                href="/artykuly"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Powrót do artykułów
              </Link>

              {/* Article Header */}
              <header className="mb-12">
                <div className="flex items-center gap-3 mb-4 text-sm text-slate-600">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium">
                    O nas
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime="2026-01-29">29 stycznia 2026</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>5 min czytania</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Dlaczego stworzyłem ClaimWinger? – kilka słów od założyciela
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed">
                  Osobista historia, która zainspirowała do stworzenia platformy pomagającej pasażerom odzyskiwać należne odszkodowania za problemy z lotami.
                </p>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-slate-700">
                  Nazywam się Piotr Wierzba i od kilkunastu lat zajmuję się marketingiem oraz analizą rynków cyfrowych. Przez większość tego czasu obserwowałem, jak internet zmienia sposób, w jaki konsumenci dochodzą swoich praw – od bankowości, przez e-commerce, aż po podróże.
                </p>

                <p className="text-lg leading-relaxed text-slate-700">
                  Kilka lat temu sam znalazłem się w sytuacji, która uświadomiła mi, jak bardzo niesprawiedliwy jest rynek odszkodowań lotniczych.
                </p>

                <p className="text-lg leading-relaxed text-slate-700">
                  Mój lot został odwołany w ostatniej chwili. Straciłem cały dzień, spotkanie biznesowe i pieniądze. Linia lotnicza zaproponowała zmianę rezerwacji, ale o jakiejkolwiek rekompensacie nie było mowy. Dopiero po własnych poszukiwaniach odkryłem, że zgodnie z prawem Unii Europejskiej przysługuje mi kilkaset euro odszkodowania.
                </p>

                <p className="text-lg leading-relaxed text-slate-700">
                  Tyle że jego odzyskanie okazało się koszmarem.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  System, który zniechęca pasażerów
                </h2>

                <p className="text-lg leading-relaxed text-slate-700">
                  Każdy, kto próbował dochodzić odszkodowania od linii lotniczej, zna ten schemat:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="text-lg text-slate-700">automatyczne odpowiedzi,</li>
                  <li className="text-lg text-slate-700">wielotygodniowe milczenie,</li>
                  <li className="text-lg text-slate-700">odrzucenia bez wyjaśnienia,</li>
                  <li className="text-lg text-slate-700">konieczność cytowania przepisów prawa w mailach.</li>
                </ul>

                <p className="text-lg leading-relaxed text-slate-700">
                  Większość ludzi po prostu się poddaje. I dokładnie na to liczą linie lotnicze.
                </p>

                <p className="text-lg leading-relaxed text-slate-700">
                  Właśnie wtedy zrozumiałem, że ten rynek potrzebuje narzędzia, które:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="text-lg text-slate-700">działa szybko,</li>
                  <li className="text-lg text-slate-700">zna prawo,</li>
                  <li className="text-lg text-slate-700">i bierze na siebie cały ciężar walki z przewoźnikiem.</li>
                </ul>

                <div className="bg-slate-100 border-l-4 border-slate-700 p-6 my-8 rounded-r-lg">
                  <p className="text-lg font-semibold text-slate-900 mb-2">
                    Tak powstał ClaimWinger
                  </p>
                  <p className="text-slate-700">
                    – firma, która pomaga pasażerom odzyskiwać pieniądze za odwołane i opóźnione loty bez stresu i formalności.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  Dlaczego kolejna firma? Bo poprzednie rozwiązania nie wystarczały
                </h2>

                <p className="text-lg leading-relaxed text-slate-700">
                  Na rynku już istnieją podmioty zajmujące się odszkodowaniami. Problem w tym, że wiele z nich:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="text-lg text-slate-700">działa bardzo wolno,</li>
                  <li className="text-lg text-slate-700">jest nastawionych na masową obsługę,</li>
                  <li className="text-lg text-slate-700">a komunikacja z klientem bywa słaba.</li>
                </ul>

                <p className="text-lg leading-relaxed text-slate-700">
                  Od początku chciałem, żeby ClaimWinger był inny:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="text-lg text-slate-700">bardziej przejrzysty,</li>
                  <li className="text-lg text-slate-700">bardziej nastawiony na klienta,</li>
                  <li className="text-lg text-slate-700">bardziej technologiczny.</li>
                </ul>

                <p className="text-lg leading-relaxed text-slate-700">
                  Nie interesował mnie kolejny „formularz w internecie". Chciałem zbudować system, który realnie skraca drogę między pasażerem a pieniędzmi, które mu się należą.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  Co mnie najbardziej frustruje w tej branży
                </h2>

                <p className="text-lg leading-relaxed text-slate-700">
                  Najbardziej uderza mnie to, jak wiele osób w ogóle nie wie, że:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="text-lg text-slate-700">odszkodowanie im przysługuje,</li>
                  <li className="text-lg text-slate-700">albo że linia lotnicza ich wprowadza w błąd.</li>
                </ul>

                <p className="text-lg leading-relaxed text-slate-700">
                  To nie jest niszowy problem. To są miliony pasażerów rocznie w Europie, którzy po prostu nie dostają tego, co gwarantuje im prawo.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                  <p className="text-lg font-semibold text-slate-900 mb-2">
                    Dlatego ClaimWinger to dla mnie nie tylko projekt biznesowy.
                  </p>
                  <p className="text-slate-700">
                    To sposób na przywrócenie elementarnej równowagi w relacji pasażer – linia lotnicza.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  Co dalej
                </h2>

                <p className="text-lg leading-relaxed text-slate-700">
                  Chcę, żeby za kilka lat pasażerowie traktowali odszkodowanie za lot tak samo naturalnie jak zwrot za wadliwy produkt. Bez proszenia, bez walki, bez frustracji.
                </p>

                <p className="text-lg leading-relaxed text-slate-700 font-semibold">
                  Jeśli ClaimWinger przyczyni się do tego choćby w części, to było warto.
                </p>

                {/* Author Bio */}
                <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl p-8 mt-12 border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">O autorze</h3>
                  <p className="text-lg text-slate-700 mb-6">
                    <strong>Piotr Wierzba</strong> jest przedsiębiorcą i specjalistą ds. marketingu cyfrowego. Więcej o jego doświadczeniu można znaleźć na stronie{" "}
                    <a
                      href="https://piotrwierzba.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      piotrwierzba.online
                      <Globe className="w-4 h-4" />
                    </a>
                    {" "}oraz w jego profilu zawodowym na{" "}
                    <a
                      href="https://www.linkedin.com/in/piotr-wierzba/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      LinkedIn
                      <Linkedin className="w-4 h-4" />
                    </a>.
                  </p>
                </div>

                {/* CTA Box */}
                <div className="bg-slate-900 text-white rounded-xl p-8 mt-12">
                  <h3 className="text-2xl font-bold mb-4">Czy Twój lot był opóźniony lub anulowany?</h3>
                  <p className="text-slate-200 mb-6">
                    Jeśli tak, możesz być uprawniony do odszkodowania. Sprawdź swoje prawa w ClaimWinger – to zajmie tylko 2 minuty.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://claimwinger.com/pl/odwolany-lot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-semibold"
                    >
                      Sprawdź odwołany lot
                    </a>
                    <a
                      href="https://claimwinger.com/pl/opozniony-lot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-semibold border border-slate-700"
                    >
                      Sprawdź opóźniony lot
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Przeczytaj również</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/odszkodowanie-lot-sluzbowy"
                  className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-all group"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700">
                    Odszkodowanie za lot służbowy
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Poznaj prawa pasażera w podróżach służbowych i delegacjach
                  </p>
                </Link>

                <Link
                  href="/pracodawca-a-odszkodowanie"
                  className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-all group"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700">
                    Pracodawca a odszkodowanie
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Czy firma może przejąć odszkodowanie należne pracownikowi?
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 bg-slate-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">FAQ – O ClaimWinger i misji</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                1. Czym dokładnie jest ClaimWinger?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                ClaimWinger to firma typu LegalTech (technologia w prawie), która pomaga pasażerom uzyskać odszkodowanie 
                za opóźniony lub odwołany lot. Działamy w modelu "No Win, No Fee" – pobieramy prowizję tylko wtedy, 
                gdy skutecznie wywalczymy pieniądze od linii lotniczej. Używamy AI do analizy wniosków i pogody, 
                co zwiększa szansę na sukces do 98%.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                2. Dlaczego warto skorzystać z pośrednika, a nie pisać samemu do linii?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Linie lotnicze odrzucają około 60-70% samodzielnych wniosków pasażerów, podając fałszywe powody 
                (np. "zła pogoda", gdy inne samoloty latały). ClaimWinger ma dostęp do baz danych pogodowych i lotniczych, 
                dzięki czemu możemy udowodnić winę przewoźnika. Piszemy też pisma przedsądowe i pozywamy linie w imieniu klienta. 
                Oszczędzasz czas i nerwy, a ryzyko finansowe jest po naszej stronie.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                3. Czy ClaimWinger obsługuje też loty służbowe?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>TAK, to nasza specjalizacja.</strong> Wiele firm nie wie, że odszkodowanie za lot służbowy 
                należy się pasażerowi (pracownikowi), a nie firmie płacącej za bilet. Pomagamy pracownikom uzyskać 
                należne im pieniądze (250-600 EUR), zachowując pełną dyskrecję i zgodność z RODO.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <img src="/bizneslotlogotyp.png" alt="BizneLot.info" className="h-6 w-auto" />
                  BizneLot.info
                </h3>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Główne tematy</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/odszkodowanie-lot-sluzbowy" className="hover:text-white transition-colors">
                      Odszkodowanie za lot służbowy
                    </Link>
                  </li>
                  <li>
                    <Link href="/anulowany-lot-delegacja" className="hover:text-white transition-colors">
                      Anulowany lot w delegacji
                    </Link>
                  </li>
                  <li>
                    <Link href="/pracodawca-a-odszkodowanie" className="hover:text-white transition-colors">
                      Pracodawca a odszkodowanie
                    </Link>
                  </li>
                  <li>
                    <Link href="/artykuly" className="hover:text-white transition-colors">
                      Artykuły
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Sprawdź odszkodowanie</h4>
                <p className="text-sm mb-4">
                  Skorzystaj z usług ClaimWinger, aby łatwo i szybko odzyskać należne odszkodowanie:
                </p>
                <div className="space-y-2">
                  <a
                    href="https://claimwinger.com/pl/odwolany-lot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-white transition-colors"
                  >
                    → Odwołany lot
                  </a>
                  <a
                    href="https://claimwinger.com/pl/opozniony-lot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-white transition-colors"
                  >
                    → Opóźniony lot
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-sm text-center">
              <p>© 2026 BizneLot.info – Portal edukacyjny o prawach pasażerów w podróżach służbowych</p>
            </div>
          </div>
        </footer>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Dlaczego stworzyłem ClaimWinger? Historia startupu LegalTech",
          "description": "Historia powstania ClaimWinger – automatyzacji odszkodowań lotniczych. Jak AI pomaga pasażerom walczyć z liniami lotniczymi?",
          "image": "https://bizneslot.info/og-image.png",
          "author": {
            "@type": "Person",
            "name": "Piotr Wierzba",
            "url": "https://www.linkedin.com/in/piotr-wierzba/"
          },
          "publisher": {
            "@type": "Organization",
            "name": "BizneLot.info",
            "logo": {
              "@type": "ImageObject",
              "url": "https://bizneslot.info/og-image.png"
            }
          },
          "datePublished": "2026-01-29",
          "dateModified": "2026-01-29"
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Czym dokładnie jest ClaimWinger?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ClaimWinger to firma typu LegalTech, która pomaga pasażerom uzyskać odszkodowanie za opóźniony lub odwołany lot w modelu 'No Win, No Fee'. Używamy AI do analizy wniosków."
              }
            },
            {
              "@type": "Question",
              "name": "Dlaczego warto skorzystać z pośrednika, a nie pisać samemu do linii?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Linie lotnicze odrzucają ok. 60-70% samodzielnych wniosków. ClaimWinger ma dane pogodowe i prawników, co zwiększa skuteczność. Ryzyko finansowe jest po naszej stronie."
              }
            },
            {
              "@type": "Question",
              "name": "Czy ClaimWinger obsługuje też loty służbowe?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TAK. Odszkodowanie za lot służbowy należy się pasażerowi (pracownikowi). Pomagamy uzyskać te środki (250-600 EUR)."
              }
            }
          ]
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://bizneslot.info"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Artykuły",
              "item": "https://bizneslot.info/artykuly"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Dlaczego stworzyłem ClaimWinger",
              "item": "https://bizneslot.info/artykuly/dlaczego-stworzylem-claimwinger"
            }
          ]
        })}
      </script>
    </>
  );
}
