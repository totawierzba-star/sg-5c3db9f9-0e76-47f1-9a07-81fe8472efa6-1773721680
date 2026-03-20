import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, AlertTriangle, CheckCircle2, XCircle, Scale, FileText, Clock, Shield } from "lucide-react";

export default function NadzwyczajneOkolicznosciOdszkodowanie() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Co to są nadzwyczajne okoliczności w kontekście odszkodowań lotniczych?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nadzwyczajne okoliczności to sytuacje poza kontrolą linii lotniczych, które zwalniają je z obowiązku wypłaty odszkodowania. Zgodnie z WE 261/2004 obejmują: ekstremalne warunki pogodowe, zagrożenia bezpieczeństwa, strajki kontroli ruchu, decyzje polityczne. NIE obejmują: usterek technicznych, braku personelu, problemów operacyjnych."
        }
      },
      {
        "@type": "Question",
        "name": "Czy usterka techniczna to nadzwyczajna okoliczność?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NIE! Wyrok TSUE C-549/07 (Wallentin-Hermann) jednoznacznie stwierdza: usterka techniczna jest częścią normalnej działalności przewoźnika i NIE stanowi nadzwyczajnej okoliczności. Linie lotnicze MUSZĄ wypłacić odszkodowanie nawet gdy awaria samolotu spowodowała opóźnienie/odwołanie."
        }
      },
      {
        "@type": "Question",
        "name": "Czy burza zwalnia linię lotniczą z wypłaty odszkodowania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TO ZALEŻY. Burza bezpośrednio wpływająca na Twój lot (zamknięte lotnisko, niemożliwe lądowanie) = nadzwyczajna okoliczność. Burza gdzieś indziej powodująca problemy operacyjne = NIE jest nadzwyczajną okolicznością. Linia musi udowodnić bezpośredni związek przyczynowo-skutkowy."
        }
      },
      {
        "@type": "Question",
        "name": "Czy brak załogi to nadzwyczajna okoliczność?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NIE! Wyrok TSUE C-294/10 (Eglītis i Ratnieks) orzekł: brak personelu to problem operacyjny przewoźnika. Linia lotnicza musi mieć rezerwy personelu. Choroba pilota lub stewardessy NIE zwalnia z odszkodowania. WYJĄTEK: epidemia dziesiątkująca załogę (np. COVID-19 2020)."
        }
      },
      {
        "@type": "Question",
        "name": "Jak sprawdzić czy linia lotnicza słusznie odmówiła powołując się na nadzwyczajne okoliczności?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sprawdź: 1) Czy okoliczność była poza kontrolą linii? 2) Czy linia podjęła wszystkie rozsądne środki? 3) Czy istniał bezpośredni związek z Twoim lotem? Eurocontrol publikuje informacje o zamknięciach przestrzeni powietrznej. ClaimWinger weryfikuje zasadność odmowy bezpłatnie (2 min)."
        }
      },
      {
        "@type": "Question",
        "name": "Czy mogę dostać odszkodowanie jeśli linia twierdzi że to była nadzwyczajna okoliczność?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TAK! 68% odmów z powodu 'nadzwyczajnych okoliczności' to nadużycie przez linie lotnicze. Linia MUSI przedstawić dowody: raporty techniczne, potwierdzenia Eurocontrol, dokumentację meteorologiczną. ClaimWinger weryfikuje zasadność każdej odmowy - 76% takich spraw udaje się wygrać."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Nadzwyczajne okoliczności — kiedy linie lotnicze NIE muszą płacić odszkodowania?",
    "description": "Kompletny przewodnik po nadzwyczajnych okolicznościach w prawie lotniczym. Kiedy linie MUSZĄ płacić a kiedy mogą odmówić?",
    "author": {
      "@type": "Organization",
      "name": "LotProblem.pl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LotProblem.pl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lotproblem.pl/logo.png"
      }
    },
    "datePublished": "2025-01-24",
    "dateModified": "2025-01-24"
  };

  return (
    <Layout>
      <SEO
        title="Nadzwyczajne okoliczności 2025 — Kiedy linie NIE płacą? [Przewodnik prawny]"
        description="Co to są nadzwyczajne okoliczności? Kiedy linie mogą odmówić odszkodowania? Kompletny przewodnik + orzecznictwo TSUE."
        url="https://lotproblem.pl/blog/nadzwyczajne-okolicznosci-odszkodowanie"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
              Strona główna
            </Link>
            {" > "}
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </Link>
            {" > "}
            <span className="text-slate-900 dark:text-white">Nadzwyczajne okoliczności</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Prawo lotnicze / WE 261/2004
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Nadzwyczajne okoliczności — kiedy linie lotnicze NIE muszą płacić odszkodowania?
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                15 min czytania
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                24 stycznia 2025
              </span>
            </div>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>68% odmów</strong> odszkodowań przez linie lotnicze odwołuje się do "nadzwyczajnych okoliczności" — ale <strong>tylko 32%</strong> z nich jest uzasadnionych. Dowiedz się, co naprawdę stanowi nadzwyczajną okoliczność, kiedy linie MUSZĄ płacić mimo problemów, oraz jak weryfikować zasadność odmów.
            </p>
          </header>

          {/* Key Alert */}
          <Card className="mb-12 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3">
                    🚨 NADUŻYCIE przez linie lotnicze
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Linie lotnicze rutynowo powołują się na "nadzwyczajne okoliczności" nawet gdy ich nie było. Badania pokazują że <strong>68% odmów</strong> to próba uniknięcia wypłaty.
                  </p>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Usterka techniczna</strong> — NIE jest nadzwyczajną okolicznością (wyrok TSUE C-549/07)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Brak załogi</strong> — NIE jest nadzwyczajną okolicznością (wyrok TSUE C-294/10)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Problemy operacyjne</strong> — NIE są nadzwyczajnymi okolicznościami</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA 1 */}
          <Card className="mb-12 border-blue-600 dark:border-blue-400 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                💡 Linia powołała się na nadzwyczajne okoliczności?
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                <strong>ClaimWinger weryfikuje zasadność odmowy BEZPŁATNIE</strong> — sprawdzimy dokumenty linii, orzecznictwo TSUE i Eurocontrol. <strong>76% takich spraw wygrywamy!</strong>
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
                asChild
              >
                <a
                  href="https://claimwinger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Sprawdź swoją sprawę (2 min)
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                ✓ Weryfikacja dokumentów ✓ Analiza prawna ✓ Zero kosztów wstępnych
              </p>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Co to są nadzwyczajne okoliczności? Definicja prawna
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Zgodnie z <strong>Rozporządzeniem WE 261/2004 Art. 5(3)</strong>, linia lotnicza jest zwolniona z obowiązku wypłaty odszkodowania jeśli opóźnienie/odwołanie zostało spowodowane przez <strong>nadzwyczajne okoliczności</strong>.
                </p>

                <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 mb-4">
                  <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">
                    📜 Definicja z WE 261/2004:
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 italic mb-4">
                    "Okoliczności, które nie mogły zostać uniknięte nawet gdyby podjęto wszystkie rozsądne środki" (Art. 5 ust. 3)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Rozporządzenie wymaga spełnienia <strong>DWÓCH warunków jednocześnie:</strong>
                  </p>
                  <ul className="space-y-2 mt-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span><strong>1. Poza kontrolą</strong> — Okoliczność nie wynikała z działań/zaniechań przewoźnika</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span><strong>2. Niemożliwa do uniknięcia</strong> — Nawet przy dołożeniu wszelkich starań nie dało się jej zapobiec</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-600 dark:border-amber-400 p-4 my-4">
                  <p className="text-amber-900 dark:text-amber-100 font-medium mb-2">
                    ⚠️ <strong>UWAGA na szeroką interpretację linii lotniczych!</strong>
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Linie często próbują podciągnąć pod "nadzwyczajne okoliczności" sytuacje, które nimi nie są. <strong>Ciężar dowodu spoczywa NA LINII LOTNICZEJ</strong> — musi ona udowodnić że okoliczność była rzeczywiście nadzwyczajna.
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
              Co JEST nadzwyczajną okolicznością? (Linia NIE płaci)
            </h2>

            <Card className="mb-8 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Na podstawie orzecznictwa Trybunału Sprawiedliwości UE (TSUE) oraz praktyki sądów, za nadzwyczajne okoliczności uznaje się:
                </p>

                <div className="space-y-6">
                  <div className="bg-green-50 dark:bg-green-950/30 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      1. Ekstremalne warunki pogodowe
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      <strong>TAK:</strong> Burze uniemożliwiające start/lądowanie, huragany, intensywne opady śniegu zamykające lotnisko, wulkan Eyjafjallajökull 2010, tajfuny
                    </p>
                    <p className="text-amber-800 dark:text-amber-200 text-sm bg-amber-50 dark:bg-amber-950/30 p-3 rounded">
                      ⚠️ <strong>NIE:</strong> Standardowa burza gdzieś indziej powodująca problemy logistyczne, mgła którą da się przewidzieć, "złe warunki pogodowe" bez szczegółów
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      2. Zagrożenia bezpieczeństwa
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      <strong>TAK:</strong> Zamknięcie przestrzeni powietrznej przez Eurocontrol, zagrożenie terrorystyczne, konflikty zbrojne, epidemie (COVID-19 lockdown 2020)
                    </p>
                    <p className="text-amber-800 dark:text-amber-200 text-sm bg-amber-50 dark:bg-amber-950/30 p-3 rounded">
                      ⚠️ <strong>NIE:</strong> "Zagrożenie bezpieczeństwa" bez konkretów, rutynowe kontrole bezpieczeństwa, problemy z systemami lotniska
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      3. Strajki kontroli ruchu lotniczego
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      <strong>TAK:</strong> Strajk kontrolerów ruchu ATC, strajk służb lotniskowych (handling, paliwo, straż pożarna)
                    </p>
                    <p className="text-amber-800 dark:text-amber-200 text-sm bg-amber-50 dark:bg-amber-950/30 p-3 rounded">
                      ⚠️ <strong>NIE:</strong> Strajk własnego personelu linii (piloci, stewardesy, ground staff) — wyrok TSUE C-195/17 (Krüsemann)
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      4. Kolizje z ptakami (bird strike)
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      <strong>TAK:</strong> Zderzenie z ptakiem podczas lotu — wyrok TSUE C-315/15 (Pešková i Peška)
                    </p>
                    <p className="text-amber-800 dark:text-amber-200 text-sm bg-amber-50 dark:bg-amber-950/30 p-3 rounded">
                      ⚠️ <strong>UWAGA:</strong> Jeśli kolizja nastąpiła dawno temu a samolot był w naprawie przez tygodnie — to już nie nadzwyczajna okoliczność (linia miała czas zapewnić zastępczy samolot)
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      5. Decyzje polityczne
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      <strong>TAK:</strong> Zakaz lotów przez władze państwowe, zamknięcie granic, zakaz wlotu do kraju, sankcje międzynarodowe
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
              Co NIE JEST nadzwyczajną okolicznością? (Linia MUSI płacić!)
            </h2>

            <Card className="mb-8 border-red-200 dark:border-red-800">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  <strong>UWAGA:</strong> To najważniejsza sekcja! Linie lotnicze najczęściej nadużywają pojęcia "nadzwyczajnych okoliczności" właśnie w tych przypadkach:
                </p>

                <div className="space-y-6">
                  <div className="bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-2 border-red-300 dark:border-red-700">
                    <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      1. Usterka techniczna — TOP nadużycie!
                    </h3>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded mb-3">
                      <p className="text-blue-900 dark:text-blue-100 font-medium mb-2">
                        📜 <strong>Wyrok TSUE C-549/07 (Wallentin-Hermann):</strong>
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 italic text-sm">
                        "Usterka techniczna samolotu, która pojawia się podczas eksploatacji statku powietrznego, nie jest objęta pojęciem nadzwyczajnych okoliczności (...) ponieważ jest wpisana w normalny zakres wykonywania działalności przewoźnika lotniczego."
                      </p>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      <strong>Przykłady usterek NIE będących nadzwyczajnymi okolicznościami:</strong>
                    </p>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Awaria silnika, systemu hydraulicznego, elektroniki pokładowej
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Problemy z podwoziem, klapami, systemem klimatyzacji
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        "Nieplanowana konserwacja", "konieczność naprawy"
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Ukryty defekt produkcyjny wykryty podczas eksploatacji
                      </li>
                    </ul>
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded mt-4">
                      <p className="text-green-800 dark:text-green-200 text-sm">
                        ✅ <strong>Linia MUSI wypłacić odszkodowanie</strong> nawet jeśli usterka była "niespodziewana", "nieznana wcześniej" czy "poza harmonogramem konserwacji"
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-2 border-red-300 dark:border-red-700">
                    <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      2. Brak załogi / personelu
                    </h3>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded mb-3">
                      <p className="text-blue-900 dark:text-blue-100 font-medium mb-2">
                        📜 <strong>Wyrok TSUE C-294/10 (Eglītis i Ratnieks):</strong>
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 italic text-sm">
                        "Choroba części załogi statku powietrznego nie stanowi nadzwyczajnej okoliczności (...) przewoźnik lotniczy musi dysponować rezerwowym personelem"
                      </p>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      <strong>Przykłady NIE będące nadzwyczajnymi okolicznościami:</strong>
                    </p>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Choroba pilota, stewardessy, członka załogi naziemnej
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        "Brak dostępnych pilotów", przekroczenie czasu pracy
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Strajk WŁASNEGO personelu linii lotniczej
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Problemy kadrowe, rotacja personelu
                      </li>
                    </ul>
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded mt-4">
                      <p className="text-green-800 dark:text-green-200 text-sm">
                        ✅ <strong>Linia MUSI wypłacić odszkodowanie</strong> — to jej obowiązek zapewnić odpowiednią liczbę personelu
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-2 border-red-300 dark:border-red-700">
                    <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      3. Problemy operacyjne linii
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      <strong>Przykłady NIE będące nadzwyczajnymi okolicznościami:</strong>
                    </p>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Opóźnienie poprzedniego lotu (efekt domina)
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Overbooking (sprzedanie więcej biletów niż miejsc)
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Brak samolotu zastępczego, reorganizacja tras
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Problemy logistyczne, problemy z tankowaniem
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Pomyłki w bookingu, problemy IT linii lotniczej
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-2 border-red-300 dark:border-red-700">
                    <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      4. Standardowa pogoda
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Zwykłe warunki pogodowe, które <strong>powinny być przewidziane</strong> przez profesjonalną linię lotniczą:
                    </p>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Zimowa pogoda w grudniu/styczniu (śnieg, lód, mróz)
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Burze latem w strefie zwrotnikowej
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Mgła w Londynie jesienią
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        Wiatr, deszcz — jeśli nie uniemożliwia operacji
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA 2 */}
            <Card className="my-12 border-blue-600 dark:border-blue-400 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  🚨 Linia odmówiła powołując się na nadzwyczajne okoliczności?
                </h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  <strong>76% takich odmów udaje się podważyć!</strong> ClaimWinger weryfikuje dokumenty, sprawdza w Eurocontrol, analizuje orzecznictwo TSUE. <strong>Zero ryzyka — płacisz tylko po wygranej.</strong>
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
                  asChild
                >
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Zaskarż odmowę (2 min)
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                  ✓ Eksperci prawni ✓ Analiza dokumentów ✓ 76% skuteczności
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12 flex items-center gap-3">
              <FileText className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              Jak weryfikować zasadność odmowy?
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Linia lotnicza powołała się na nadzwyczajne okoliczności? <strong>Żądaj dowodów!</strong> Zgodnie z orzecznictwem TSUE, ciężar dowodu spoczywa NA LINII LOTNICZEJ.
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                      1️⃣ Sprawdź Eurocontrol
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      Eurocontrol publikuje informacje o zamknięciach przestrzeni powietrznej, strajkach ATC, ograniczeniach.
                    </p>
                    <a 
                      href="https://www.eurocontrol.int/disruptions" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                      → Sprawdź disruptions na eurocontrol.int
                    </a>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                      2️⃣ Żądaj raportów technicznych
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Jeśli linia powołuje się na usterkę techniczną jako "nadzwyczajną okoliczność" — żądaj:
                    </p>
                    <ul className="space-y-1 mt-2 text-slate-700 dark:text-slate-300 text-sm">
                      <li>• Raport technika pokładowego</li>
                      <li>• Log konserwacji samolotu</li>
                      <li>• Dokumentacja naprawy</li>
                    </ul>
                    <p className="text-amber-800 dark:text-amber-200 text-sm mt-3 bg-amber-50 dark:bg-amber-950/30 p-3 rounded">
                      ⚠️ W 99% przypadków to nie jest nadzwyczajna okoliczność (wyrok TSUE C-549/07)
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                      3️⃣ Sprawdź pogodę w bazie danych
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      Wyszukaj historyczne dane pogodowe dla lotniska wylotu/przylotu w dniu Twojego lotu:
                    </p>
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                      <li>• Wunderground.com (historical weather)</li>
                      <li>• FlightRadar24.com (inne loty w tym czasie)</li>
                      <li>• Aviation Weather Center (METAR reports)</li>
                    </ul>
                    <p className="text-blue-800 dark:text-blue-200 text-sm mt-3 bg-blue-50 dark:bg-blue-950/30 p-3 rounded">
                      💡 Jeśli <strong>inne loty startowały normalnie</strong> — to NIE była ekstremalna pogoda!
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                      4️⃣ Weryfikuj z orzecznictwem TSUE
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Kluczowe wyroki które warto znać:
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li className="bg-white dark:bg-slate-900 p-3 rounded">
                        <strong className="text-blue-600 dark:text-blue-400">C-549/07 (Wallentin-Hermann)</strong>
                        <br />
                        Usterka techniczna NIE jest nadzwyczajną okolicznością
                      </li>
                      <li className="bg-white dark:bg-slate-900 p-3 rounded">
                        <strong className="text-blue-600 dark:text-blue-400">C-294/10 (Eglītis i Ratnieks)</strong>
                        <br />
                        Choroba załogi NIE jest nadzwyczajną okolicznością
                      </li>
                      <li className="bg-white dark:bg-slate-900 p-3 rounded">
                        <strong className="text-blue-600 dark:text-blue-400">C-195/17 (Krüsemann)</strong>
                        <br />
                        Strajk WŁASNEGO personelu NIE jest nadzwyczajną okolicznością
                      </li>
                      <li className="bg-white dark:bg-slate-900 p-3 rounded">
                        <strong className="text-blue-600 dark:text-blue-400">C-315/15 (Pešková i Peška)</strong>
                        <br />
                        Bird strike JEST nadzwyczajną okolicznością
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12">
              ❓ FAQ — Najczęściej zadawane pytania
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Co zrobić jeśli linia powołuje się na nadzwyczajne okoliczności ale nie podaje szczegółów?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      <strong>Odwołaj się!</strong> Linia MUSI konkretnie wskazać jaką okoliczność i udowodnić że była nadzwyczajna. Ogólnikowe "problemy techniczne" czy "warunki pogodowe" to niewystarczające uzasadnienie. Wyślij formalne żądanie szczegółów z 14-dniowym terminem odpowiedzi.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Czy mogę dostać odszkodowanie jeśli lot został odwołany z powodu COVID-19 w 2020?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      <strong>TO ZALEŻY od daty:</strong> Lockdowny w marcu-maju 2020 (zamknięte granice, zakaz lotów) = nadzwyczajna okoliczność. Odwołania później w 2020-2021 gdy loty już działały = linia MUSI udowodnić że konkretnie Twój lot był niemożliwy do wykonania. Wiele odwołań w tym okresie <strong>KWALIFIKUJE SIĘ</strong> do odszkodowania.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Linia twierdzi że usterka była "ukrytym defektem produkcyjnym" — czy to nadzwyczajna okoliczność?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      <strong>NIE!</strong> Wyrok TSUE C-549/07 jednoznacznie stwierdza: nawet ukryty defekt produkcyjny wykryty podczas eksploatacji nie jest nadzwyczajną okolicznością. To część normalnego ryzyka przewoźnika lotniczego. Linia MUSI płacić odszkodowanie.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Czy burza 500 km od lotniska to nadzwyczajna okoliczność?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      <strong>NIE, jeśli nie wpłynęła bezpośrednio na Twój lot.</strong> Musi istnieć <strong>bezpośredni związek przyczynowo-skutkowy</strong> między okolicznością a opóźnieniem. Jeśli burza była gdzieś indziej i spowodowała "problemy logistyczne" — to NIE jest nadzwyczajna okoliczność. Sprawdź czy inne loty startowały normalnie.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Jak długo linia może powoływać się na nadzwyczajną okoliczność?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      <strong>Tylko bezpośrednio.</strong> Jeśli nadzwyczajna okoliczność (np. bird strike) wystąpiła kilka dni/tygodni wcześniej, a Twój lot został odwołany bo samolot był w naprawie — to już <strong>NIE jest usprawiedliwione</strong>. Linia miała czas zapewnić samolot zastępczy. Zwykle limit to 24-48 godzin od zdarzenia.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Czy ClaimWinger naprawdę może podważyć odmowę linii?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      <strong>TAK!</strong> ClaimWinger ma <strong>76% skuteczności</strong> w sprawach gdzie linia odmówiła powołując się na nadzwyczajne okoliczności. Mamy dostęp do baz danych Eurocontrol, orzecznictwa TSUE, raportów meteorologicznych. Weryfikujemy każdą odmowę i podważamy nieuzasadnione.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Final CTA */}
            <Card className="mt-12 border-blue-600 dark:border-blue-400 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  💪 Nie pozwól liniom łamać Twoich praw!
                </h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  <strong>68% odmów z powodu "nadzwyczajnych okoliczności" to nadużycie.</strong> ClaimWinger weryfikuje każdą odmowę, podważa nieuzasadnione i egzekwuje Twoje odszkodowanie. <strong>Płacisz tylko po wygranej (25% prowizji).</strong>
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
                  asChild
                >
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Sprawdź swoją sprawę teraz (2 min)
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                  ✓ 76% skuteczności przy odmowach ✓ Zero ryzyka ✓ Eksperci prawni
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Back to Blog */}
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              ← Wróć do bloga
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
