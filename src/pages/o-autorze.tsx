import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { Briefcase, User, ArrowRight, Linkedin, Github, Mail, MapPin, Building2, Plane, Code, Heart, Globe, Scale, ArrowLeft } from "lucide-react";

export default function OAutorze() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Piotr Wierzba",
        "jobTitle": "Założyciel ClaimWinger",
        "description": "Przedsiębiorca i specjalista ds. marketingu cyfrowego, twórca platformy ClaimWinger pomagającej pasażerom w dochodzeniu odszkodowań lotniczych",
        "url": "https://problemlot.com/o-autorze",
        "sameAs": [
          "https://www.linkedin.com/in/piotr-wierzba/",
          "https://piotrwierzba.online"
        ],
        "knowsAbout": [
          "Marketing cyfrowy",
          "Prawa pasażerów lotniczych",
          "Rozporządzenie UE 261/2004",
          "Odszkodowania lotnicze"
        ]
      },
      {
        "@type": "Article",
        "headline": "Dlaczego stworzyłem ClaimWinger? – kilka słów od założyciela",
        "author": {
          "@type": "Person",
          "name": "Piotr Wierzba"
        },
        "datePublished": "2026-01-09",
        "dateModified": "2026-01-09",
        "publisher": {
          "@type": "Organization",
          "name": "problemlot.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://problemlot.com/og-image.png"
          }
        },
        "description": "Historia powstania ClaimWinger i misja ułatwienia pasażerom dochodzenia odszkodowań za opóźnione i odwołane loty",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://problemlot.com/o-autorze"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Strona główna",
            "item": "https://problemlot.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "O autorze",
            "item": "https://problemlot.com/o-autorze"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Dlaczego stworzyłem ClaimWinger? – Piotr Wierzba | problemlot.com"
        description="Historia powstania ClaimWinger od założyciela Piotra Wierzby. Odkryj, dlaczego powstała platforma ułatwiająca pasażerom dochodzenie odszkodowań lotniczych."
        url="https://problemlot.com/o-autorze"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Strona główna
            </Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-slate-100 font-medium">O autorze</span>
          </nav>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium mb-6">
              <User className="h-4 w-4" />
              Od założyciela
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              Dlaczego stworzyłem ClaimWinger?
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Historia, która zmieniła sposób, w jaki pasażerowie dochodzą swoich praw
            </p>
          </div>

          {/* Article Content */}
          <article className="prose prose-slate dark:prose-invert prose-lg max-w-none">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 shadow-sm">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
                Nazywam się <strong>Piotr Wierzba</strong> i od kilkunastu lat zajmuję się marketingiem oraz analizą rynków cyfrowych. 
                Przez większość tego czasu obserwowałem, jak internet zmienia sposób, w jaki konsumenci dochodzą swoich praw – 
                od bankowości, przez e-commerce, aż po podróże.
              </p>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                Kilka lat temu sam znalazłem się w sytuacji, która uświadomiła mi, jak bardzo <strong>niesprawiedliwy 
                jest rynek odszkodowań lotniczych</strong>.
              </p>

              <div className="bg-slate-50 dark:bg-slate-800/50 border-l-4 border-slate-900 dark:border-slate-100 p-6 my-8 rounded-r-lg">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                  Mój lot został odwołany w ostatniej chwili. Straciłem cały dzień, spotkanie biznesowe i pieniądze. 
                  Linia lotnicza zaproponowała zmianę rezerwacji, ale o jakiejkolwiek rekompensacie nie było mowy.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Dopiero po własnych poszukiwaniach odkryłem, że zgodnie z prawem Unii Europejskiej przysługuje mi 
                  kilkaset euro odszkodowania.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                Tyle że jego odzyskanie okazało się <strong>koszmarem</strong>.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-6">
                System, który zniechęca pasażerów
              </h2>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                Każdy, kto próbował dochodzić odszkodowania od linii lotniczej, zna ten schemat:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-slate-900 dark:bg-slate-100 mt-2.5"></span>
                  <span className="text-lg text-slate-700 dark:text-slate-300">automatyczne odpowiedzi,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-slate-900 dark:bg-slate-100 mt-2.5"></span>
                  <span className="text-lg text-slate-700 dark:text-slate-300">wielotygodniowe milczenie,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-slate-900 dark:bg-slate-100 mt-2.5"></span>
                  <span className="text-lg text-slate-700 dark:text-slate-300">odrzucenia bez wyjaśnienia,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-slate-900 dark:bg-slate-100 mt-2.5"></span>
                  <span className="text-lg text-slate-700 dark:text-slate-300">konieczność cytowania przepisów prawa w mailach.</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                Większość ludzi po prostu się poddaje. I dokładnie na to liczą linie lotnicze.
              </p>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                Właśnie wtedy zrozumiałem, że ten rynek potrzebuje narzędzia, które:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 text-white dark:text-slate-900 p-6 rounded-xl">
                  <p className="font-semibold text-lg">działa szybko</p>
                </div>
                <div className="bg-gradient-to-br from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 text-white dark:text-slate-900 p-6 rounded-xl">
                  <p className="font-semibold text-lg">zna prawo</p>
                </div>
                <div className="bg-gradient-to-br from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 text-white dark:text-slate-900 p-6 rounded-xl">
                  <p className="font-semibold text-lg">bierze na siebie cały ciężar walki</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                Tak powstał <strong>ClaimWinger</strong> – firma, która pomaga pasażerom odzyskiwać pieniądze za odwołane 
                i opóźnione loty bez stresu i formalności.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-6">
                Dlaczego kolejna firma? Bo poprzednie rozwiązania nie wystarczały
              </h2>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                Na rynku już istnieją podmioty zajmujące się odszkodowaniami. Problem w tym, że wiele z nich:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-slate-400 mt-2.5"></span>
                  <span className="text-lg text-slate-700 dark:text-slate-300">działa bardzo wolno,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-slate-400 mt-2.5"></span>
                  <span className="text-lg text-slate-700 dark:text-slate-300">jest nastawionych na masową obsługę,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-slate-400 mt-2.5"></span>
                  <span className="text-lg text-slate-700 dark:text-slate-300">a komunikacja z klientem bywa słaba.</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                Od początku chciałem, żeby ClaimWinger był inny:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2.5"></span>
                  <span className="text-lg text-slate-700 dark:text-slate-300"><strong>bardziej przejrzysty</strong>,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2.5"></span>
                  <span className="text-lg text-slate-700 dark:text-slate-300"><strong>bardziej nastawiony na klienta</strong>,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2.5"></span>
                  <span className="text-lg text-slate-700 dark:text-slate-300"><strong>bardziej technologiczny</strong>.</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                Nie interesował mnie kolejny „formularz w internecie".
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                Chciałem zbudować system, który <strong>realnie skraca drogę między pasażerem a pieniędzmi</strong>, które mu się należą.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-6">
                Co mnie najbardziej frustruje w tej branży
              </h2>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                Najbardziej uderza mnie to, jak wiele osób w ogóle nie wie, że:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2.5"></span>
                  <span className="text-lg text-slate-700 dark:text-slate-300">odszkodowanie im przysługuje,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2.5"></span>
                  <span className="text-lg text-slate-700 dark:text-slate-300">albo że linia lotnicza ich wprowadza w błąd.</span>
                </li>
              </ul>

              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
                  <strong>To nie jest niszowy problem.</strong>
                </p>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  To są miliony pasażerów rocznie w Europie, którzy po prostu nie dostają tego, co gwarantuje im prawo.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                Dlatego <strong>ClaimWinger to dla mnie nie tylko projekt biznesowy</strong>.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                To sposób na przywrócenie elementarnej równowagi w relacji pasażer – linia lotnicza.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-6">
                Co dalej
              </h2>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                Chcę, żeby za kilka lat pasażerowie traktowali odszkodowanie za lot tak samo naturalnie jak zwrot za wadliwy produkt.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                <strong>Bez proszenia, bez walki, bez frustracji.</strong>
              </p>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-12">
                Jeśli ClaimWinger przyczyni się do tego choćby w części, to było warto.
              </p>

              {/* Author Bio Section */}
              <div className="border-t border-slate-200 dark:border-slate-700 pt-8 mt-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  O autorze
                </h3>
                
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6">
                  <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
                    <strong>Piotr Wierzba</strong> jest przedsiębiorcą i specjalistą ds. marketingu cyfrowego. 
                    Od kilkunastu lat analizuje rynki cyfrowe i pomaga firmom w transformacji online.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://piotrwierzba.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors font-medium"
                    >
                      <Globe className="h-5 w-5" />
                      Strona osobista
                    </a>
                    
                    <a
                      href="https://www.linkedin.com/in/piotr-wierzba/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      <Linkedin className="h-5 w-5" />
                      Profil LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">
              Poznaj swoje prawa jako pasażer
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/odszkodowanie-lot-sluzbowy"
                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-slate-400 dark:hover:border-slate-600 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-slate-900 dark:group-hover:bg-slate-100 transition-colors">
                    <Scale className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-white dark:group-hover:text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                      Odszkodowanie za lot służbowy
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Podstawy prawne i prawa pasażera w podróży służbowej
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/pracodawca-a-odszkodowanie"
                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-slate-400 dark:hover:border-slate-600 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-slate-900 dark:group-hover:bg-slate-100 transition-colors">
                    <Briefcase className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-white dark:group-hover:text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                      Pracodawca a odszkodowanie
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Czy firma ma prawo do odszkodowania za lot pracownika?
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Powrót do strony głównej
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-sm font-bold text-blue-700">problemlot.com</span>
                  BizneLot.info
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Portal edukacyjny o prawach pasażerów w podróżach służbowych.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Najważniejsze tematy</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/odszkodowanie-lot-sluzbowy" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 text-sm transition-colors">
                      Odszkodowanie za lot służbowy
                    </Link>
                  </li>
                  <li>
                    <Link href="/anulowany-lot-delegacja" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 text-sm transition-colors">
                      Anulowany lot w delegacji
                    </Link>
                  </li>
                  <li>
                    <Link href="/opozniony-lot-delegacja" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 text-sm transition-colors">
                      Opóźniony lot w delegacji
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">O projekcie</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/o-autorze" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 text-sm transition-colors">
                      O autorze
                    </Link>
                  </li>
                  <li>
                    <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 text-sm transition-colors">
                      ClaimWinger.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
              <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
                © 2026 problemlot.com – Portal edukacyjny o prawach pasażerów w podróżach służbowych.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
