import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Calendar, Clock, Shield, Scale, CheckCircle, AlertCircle, FileText, Users, Euro, Plane, ExternalLink, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function LOTPassengerRights() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jakie prawa przysługują pasażerom LOT Polish Airlines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pasażerowie LOT mają prawo do odszkodowania 250€-600€ za opóźnienie 3+ godzin, opieki na lotnisku (posiłki, komunikacja), alternatywnego transportu przy odwołaniu lotu oraz zwrotu kosztów biletu. Wszystko reguluje rozporządzenie WE 261/2004."
        }
      },
      {
        "@type": "Question",
        "name": "Co to jest rozporządzenie WE 261/2004?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WE 261/2004 to europejskie prawo chroniące pasażerów przed nieuczciwymi praktykami linii lotniczych. Gwarantuje odszkodowania za opóźnienia, odwołania i overbooking. Ma moc wyższą niż regulaminy przewoźników."
        }
      },
      {
        "@type": "Question",
        "name": "Czy LOT musi zapewnić mi posiłek podczas opóźnienia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak! Przy opóźnieniu 2+ godzin (krótkie loty) lub 3+ godzin (długie loty), LOT musi zapewnić jedzenie, napoje i dostęp do komunikacji (telefon, email). To obowiązek wynikający z WE 261/2004."
        }
      },
      {
        "@type": "Question",
        "name": "Czy mogę dostać hotel jeśli lot LOT jest opóźniony do następnego dnia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, LOT musi zapewnić bezpłatne zakwaterowanie w hotelu oraz transport z lotniska do hotelu i z powrotem, jeśli opóźnienie wymaga noclegu."
        }
      },
      {
        "@type": "Question",
        "name": "Czy LOT może odmówić wypłaty odszkodowania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LOT może odmówić tylko jeśli udowodni nadzwyczajne okoliczności (np. ekstremalna pogoda, zamknięcie lotniska). Zwykłe awarie techniczne, brak załogi czy rotacja samolotów NIE są usprawiedliwieniem."
        }
      },
      {
        "@type": "Question",
        "name": "Czy muszę przyjąć voucher od LOT zamiast odszkodowania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nie! Masz prawo żądać odszkodowania w gotówce. Voucher jest tylko opcją - LOT nie może go narzucić. Możesz odmówić i wybrać przelew bankowy."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Prawa pasażera LOT Polish Airlines — kompletny przewodnik po WE 261/2004",
    "description": "Poznaj wszystkie prawa pasażera LOT: odszkodowania, opieka na lotnisku, zwroty, alternatywny transport. Dowiedz się co gwarantuje WE 261/2004 i jak egzekwować swoje prawa.",
    "image": "https://lotproblem.pl/og-image.png",
    "author": {
      "@type": "Organization",
      "name": "LotProblem.pl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LotProblem.pl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lotproblem.pl/og-image.png"
      }
    },
    "datePublished": "2025-02-27",
    "dateModified": "2025-02-27"
  };

  return (
    <Layout>
      <SEO
        title="Prawa Pasażera LOT Polish Airlines 2025 — WE 261/2004 [Kompletny Przewodnik]"
        description="Wszystkie prawa pasażera LOT: odszkodowania 250€-600€, opieka na lotnisku, zwroty, hotel. Poznaj WE 261/2004 i skutecznie egzekwuj swoje prawa!"
        url="https://lotproblem.pl/blog/prawa-pasazera-lot-polish-airlines"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Strona główna</Link>
            <span className="mx-2">/</span>
            <Link href="/blog/odszkodowanie-lot-polish-airlines" className="hover:text-blue-600 dark:hover:text-blue-400">LOT Polish Airlines</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">Prawa pasażera</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Prawa Pasażera • WE 261/2004
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Prawa pasażera LOT Polish Airlines — kompletny przewodnik po WE 261/2004
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Poznaj wszystkie prawa chroniące Cię jako pasażera LOT: od odszkodowań 250€-600€, przez opiekę na lotnisku, po zwroty i alternatywny transport. Dowiedz się jak skutecznie egzekwować swoje prawa!
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                27 lutego 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                10 min czytania
              </span>
            </div>
          </header>

          {/* Key Rights Overview Box */}
          <div className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Shield className="w-10 h-10 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  🛡️ Twoje kluczowe prawa jako pasażer LOT:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Odszkodowanie 250€-600€</strong> za opóźnienie 3+ godzin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Opieka na lotnisku</strong> (jedzenie, napoje, komunikacja)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Hotel + transport</strong> przy opóźnieniu overnight</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Alternatywny lot</strong> lub zwrot kosztów przy odwołaniu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Zwrot pieniędzy za bilet</strong> w przypadku rezygnacji</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Odszkodowanie przy overbooking</strong> (przepełniony samolot)</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                  💡 <strong>Ważne:</strong> Te prawa gwarantuje rozporządzenie WE 261/2004 i mają moc wyższą niż regulamin LOT!
                </p>
              </div>
            </div>
          </div>

          {/* CTA #1 - After intro */}
          <div className="mb-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-xl shadow-xl text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  ✈️ LOT naruszyło Twoje prawa pasażera?
                </h3>
                <p className="text-blue-100 text-lg">
                  ClaimWinger pomoże Ci wyegzekwować wszystkie należne prawa. Zero kosztów z góry — płacisz tylko od sukcesu.
                </p>
              </div>
              <a
                href="https://claimwinger.com/pl/opozniony-lot?krok=szczegoly-lotu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg"
              >
                Złóż roszczenie teraz
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Spis treści
            </h2>
            <ul className="space-y-2 text-blue-600 dark:text-blue-400">
              <li><a href="#we261" className="hover:underline">1. Co to jest rozporządzenie WE 261/2004?</a></li>
              <li><a href="#odszkodowania" className="hover:underline">2. Prawo do odszkodowania (250€-600€)</a></li>
              <li><a href="#opieka" className="hover:underline">3. Prawo do opieki na lotnisku</a></li>
              <li><a href="#zwrot" className="hover:underline">4. Zwrot kosztów biletu</a></li>
              <li><a href="#alternatywny" className="hover:underline">5. Prawo do alternatywnego transportu</a></li>
              <li><a href="#hotel" className="hover:underline">6. Zakwaterowanie przy opóźnieniu overnight</a></li>
              <li><a href="#overbooking" className="hover:underline">7. Odszkodowanie przy overbooking</a></li>
              <li><a href="#egzekwowanie" className="hover:underline">8. Jak egzekwować swoje prawa?</a></li>
              <li><a href="#faq" className="hover:underline">9. FAQ — najczęstsze pytania</a></li>
            </ul>
          </div>

          {/* Section 1: WE 261/2004 */}
          <section id="we261" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              1. Co to jest rozporządzenie WE 261/2004?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                <strong>Rozporządzenie WE 261/2004</strong> to europejskie prawo przyjęte w 2004 roku, które chroni pasażerów linii lotniczych przed nieuczciwymi praktykami przewoźników. To prawdziwa "konstytucja" praw pasażera — ma moc <strong>wyższą niż regulaminy przewoźników</strong> i nie może być przez nie ograniczana.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  📋 Czego dotyczy WE 261/2004?
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong>Opóźnienia lotów</strong> — odszkodowania za opóźnienia 3+ godzin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong>Odwołane loty</strong> — prawo do odszkodowania lub alternatywnego lotu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong>Odmowa wejścia na pokład</strong> — overbooking (przepełniony samolot)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong>Zmarnowane przesiadki</strong> — gdy pierwszy lot spowodował utratę kolejnego</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong>Opieka na lotnisku</strong> — jedzenie, napoje, komunikacja, hotel</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  ✅ Kiedy WE 261/2004 chroni loty LOT?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Rozporządzenie obowiązuje gdy <strong>przynajmniej jeden</strong> warunek jest spełniony:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✈️ <strong>Wylot z lotniska UE</strong> (np. Warszawa → Nowy Jork, Kraków → Bangkok)</li>
                  <li>✈️ <strong>Przylot do UE linią z UE</strong> (LOT jest polską linią więc ZAWSZE objęte)</li>
                  <li>✈️ <strong>Transfer przez lotnisko UE</strong> na jednej rezerwacji</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                  ✅ <strong>LOT ZAWSZE podlega WE 261/2004</strong> na wszystkich trasach z/do Polski oraz na wszystkich trasach międzynarodowych.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  ⚠️ Dlaczego LOT tak często próbuje uniknąć wypłat?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Statystyki pokazują, że <strong>LOT odmawia 73% polskich roszczeń</strong>. Najczęstsze taktyki:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• <strong>Nadużywanie "nadzwyczajnych okoliczności"</strong> bez przedstawienia dowodów</li>
                  <li>• <strong>Oferowanie voucherów</strong> zamiast odszkodowania w gotówce</li>
                  <li>• <strong>Przedłużanie procedury</strong> licząc że pasażer się zniechęci</li>
                  <li>• <strong>Żądanie niemożliwych do uzyskania dokumentów</strong></li>
                  <li>• <strong>Całkowite ignorowanie wniosków</strong></li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                  💡 <strong>Rozwiązanie:</strong> <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ClaimWinger skutecznie kwestionuje 91% takich odmów LOT</a> i egzekwuje Twoje prawa.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Odszkodowania */}
          <section id="odszkodowania" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600 dark:text-green-400" />
              2. Prawo do odszkodowania (250€-600€)
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Najważniejsze prawo pasażera LOT to <strong>odszkodowanie finansowe</strong> za opóźniony lub odwołany lot. Wysokość zależy wyłącznie od dystansu lotu, nie od ceny biletu.
              </p>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl border-2 border-green-300 dark:border-green-700 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  💰 Wysokość odszkodowania LOT
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-green-300 dark:border-green-700">
                        <th className="p-3 text-gray-900 dark:text-white font-bold">Dystans lotu</th>
                        <th className="p-3 text-gray-900 dark:text-white font-bold">Opóźnienie</th>
                        <th className="p-3 text-gray-900 dark:text-white font-bold text-right">Kwota</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-3">Do 1,500 km</td>
                        <td className="p-3">3+ godziny</td>
                        <td className="p-3 text-right font-bold text-green-600 dark:text-green-400">250 €</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-3">1,500 - 3,500 km</td>
                        <td className="p-3">3+ godziny</td>
                        <td className="p-3 text-right font-bold text-green-600 dark:text-green-400">400 €</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-3">Powyżej 3,500 km</td>
                        <td className="p-3">4+ godziny</td>
                        <td className="p-3 text-right font-bold text-green-600 dark:text-green-400">600 €</td>
                      </tr>
                      <tr>
                        <td className="p-3">Powyżej 3,500 km</td>
                        <td className="p-3">3-4 godziny</td>
                        <td className="p-3 text-right font-bold text-green-600 dark:text-green-400">300 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    ✈️ Przykłady tras LOT — 250€
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Warszawa → Londyn (1,450 km)</li>
                    <li>• Kraków → Frankfurt (680 km)</li>
                    <li>• Gdańsk → Kopenhaga (470 km)</li>
                    <li>• Warszawa → Rzym (1,315 km)</li>
                    <li>• Wrocław → Monachium (480 km)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    ✈️ Dłuższe trasy LOT — 400€/600€
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Warszawa → Tokio (8,340 km) — <strong>600€</strong></li>
                    <li>• Kraków → Pekin (7,250 km) — <strong>600€</strong></li>
                    <li>• Warszawa → Nowy Jork (6,930 km) — <strong>600€</strong></li>
                    <li>• Gdańsk → Chicago (7,100 km) — <strong>600€</strong></li>
                    <li>• Warszawa → Tel Awiw (2,230 km) — <strong>400€</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  💰 KLUCZOWE: Cena biletu nie ma znaczenia!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Nawet jeśli kupiłeś bilet LOT za 300 zł w promocji, przysługuje Ci pełne <strong>250€-600€ odszkodowania</strong> (1,100-2,700 zł). Prawo WE 261/2004 chroni wszystkich pasażerów jednakowo.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  ✅ <strong>Przykład:</strong> Bilet promocyjny Warszawa → Londyn za 200 zł → odszkodowanie 250€ (~1,100 zł) = 5.5x więcej niż zapłaciłeś!
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Opieka na lotnisku */}
          <section id="opieka" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              3. Prawo do opieki na lotnisku
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Jeśli Twój lot LOT jest opóźniony, <strong>od pierwszej minuty opóźnienia</strong> przysługują Ci określone prawa do opieki na lotnisku. LOT MUSI je zapewnić — to nie kwestia dobrej woli, ale obowiązek prawny.
              </p>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg mb-8 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  🍽️ Co przysługuje Ci przy opóźnieniu LOT?
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Opóźnienie 2+ godziny (loty do 1,500 km):
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                        <span>Posiłki i napoje odpowiednie do czasu oczekiwania</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                        <span>Dwa połączenia telefoniczne, emaile lub faksy</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Opóźnienie 3+ godziny (loty 1,500-3,500 km):
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                        <span>Posiłki i napoje</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                        <span>Komunikacja (telefon, email)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Opóźnienie 4+ godziny (loty powyżej 3,500 km):
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                        <span>Posiłki i napoje</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                        <span>Komunikacja</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  ⚠️ Co zrobić jeśli LOT nie zapewnia opieki?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Jeśli LOT odmawia lub nie oferuje jedzenia, napojów czy voucherów:
                </p>
                <ol className="space-y-2 text-gray-700 dark:text-gray-300 list-decimal list-inside">
                  <li>Kup sam posiłki i napoje (w rozsądnych granicach)</li>
                  <li>Zachowaj WSZYSTKIE paragony i faktury</li>
                  <li>Zrób zdjęcie tablicy odlotów pokazującej opóźnienie</li>
                  <li>Dołącz koszty do roszczenia o odszkodowanie — LOT MUSI je zwrócić</li>
                </ol>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                  💡 <strong>Tip:</strong> <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ClaimWinger automatycznie doda te koszty do Twojego roszczenia</a>.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  ✅ Przykład: Co możesz kupić i dostać zwrot?
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✅ Posiłek w restauracji lotniskowej (do ~100 zł)</li>
                  <li>✅ Kawa, napoje, przekąski</li>
                  <li>✅ Połączenia telefoniczne (roaming)</li>
                  <li>✅ Internet/WiFi na lotnisku</li>
                  <li>❌ Alkohol (LOT może odmówić zwrotu)</li>
                  <li>❌ Zakupy w duty-free niezwiązane z opóźnieniem</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Zwrot kosztów */}
          <section id="zwrot" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600 dark:text-green-400" />
              4. Zwrot kosztów biletu
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                W niektórych sytuacjach masz prawo do <strong>pełnego zwrotu kosztów biletu LOT</strong> — niezależnie od rodzaju biletu (nawet najtańszy nierefundowalny!).
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-8 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  ✅ Kiedy przysługuje zwrot biletu LOT?
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Lot odwołany</strong> — możesz zrezygnować i dostać zwrot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Opóźnienie 5+ godzin</strong> — możesz zrezygnować z lotu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>LOT zaoferował alternatywny lot ale nie pasuje Ci</strong> — możesz odmówić i dostać zwrot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Zmarnowana przesiadka</strong> przez opóźnienie pierwszego lotu LOT</span>
                  </li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                  💡 <strong>Ważne:</strong> Zwrot biletu NIE wyklucza odszkodowania! Możesz dostać zwrot + 250€-600€ odszkodowania.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  💡 Zwrot vs Odszkodowanie — jaka różnica?
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b-2 border-blue-300 dark:border-blue-700">
                        <th className="p-3 text-gray-900 dark:text-white font-bold">Typ</th>
                        <th className="p-3 text-gray-900 dark:text-white font-bold">Co to jest?</th>
                        <th className="p-3 text-gray-900 dark:text-white font-bold">Kwota</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-3 font-semibold">Zwrot</td>
                        <td className="p-3">Zwrot kosztów biletu</td>
                        <td className="p-3">Cena biletu (np. 500 zł)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Odszkodowanie</td>
                        <td className="p-3">Kara dla LOT za opóźnienie</td>
                        <td className="p-3">250€-600€ (standardowa kwota)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                  ✅ <strong>Możesz dostać OBA:</strong> Zwrot 500 zł za bilet + Odszkodowanie 250€ (~1,100 zł) = Razem ~1,600 zł!
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Jak egzekwować */}
          <section id="egzekwowanie" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              8. Jak egzekwować swoje prawa?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Znajomość praw to jedno, ale <strong>skuteczne ich wyegzekwowanie</strong> to zupełnie inna sprawa. Oto sprawdzone metody:
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    1️⃣ Samodzielne roszczenie do LOT
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Zalety:</strong> Zero kosztów z góry
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Wady:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>❌ LOT odmawia 73% samodzielnych roszczeń</li>
                    <li>❌ Proces trwa 6-12 miesięcy (często dłużej)</li>
                    <li>❌ LOT używa skomplikowanego języka prawnego</li>
                    <li>❌ Musisz sam zbierać dowody i odpowiadać na pisma</li>
                    <li>❌ LOT często całkowicie ignoruje wnioski</li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                    📊 <strong>Statystyki:</strong> Tylko 27% pasażerów odzyskuje pieniądze samodzielnie.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    2️⃣ ClaimWinger — profesjonalna pomoc (REKOMENDOWANE)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Zalety:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>✅ 91% skuteczności w sprawach LOT</li>
                    <li>✅ Zero kosztów z góry (płacisz tylko 25% od wygranej)</li>
                    <li>✅ Średni czas: 8-12 tygodni</li>
                    <li>✅ Zajmuje się wszystkim za Ciebie</li>
                    <li>✅ Skutecznie kwestionuje odmowy LOT</li>
                    <li>✅ Jeśli przegrasz, nic nie płacisz</li>
                  </ul>
                  <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <strong>Przykład:</strong>
                    </p>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                      <li>• Odszkodowanie: 400€ (~1,800 zł)</li>
                      <li>• Prowizja ClaimWinger: 25% (~450 zł)</li>
                      <li>• <strong>Dostajesz: ~1,350 zł</strong></li>
                    </ul>
                  </div>
                  <a
                    href="https://claimwinger.com/pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
                  >
                    Sprawdź swoje roszczenie teraz
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    3️⃣ Skarga do Urzędu Lotnictwa Cywilnego (ULC)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Jeśli LOT ignoruje Twoje wnioski, możesz złożyć skargę do ULC:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>✅ Bezpłatne</li>
                    <li>✅ ULC może nałożyć karę na LOT</li>
                    <li>❌ Długi proces (często 6-12 miesięcy)</li>
                    <li>❌ ULC nie wypłaci Ci odszkodowania (tylko nakłada kary)</li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                    📧 <strong>Kontakt ULC:</strong> ulc@ulc.gov.pl
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    4️⃣ Pozew sądowy
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Ostateczność — warto rozważyć tylko jeśli:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>✅ Kwota sporu przekracza 10,000 zł</li>
                    <li>✅ Masz bardzo mocne dowody</li>
                    <li>❌ Koszty: opłaty sądowe, adwokat (kilka tysięcy zł)</li>
                    <li>❌ Czas: 1-2 lata</li>
                    <li>❌ Stres i niepewność</li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                    💡 <strong>Tip:</strong> W większości przypadków <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ClaimWinger jest lepszą opcją</a> — zero ryzyka, szybciej, bez stresu.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  🎯 Rekomendacja: Która metoda dla Ciebie?
                </h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Jeśli chcesz najwyższe szanse na sukces:</strong> <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-bold">Użyj ClaimWinger</a> (91% skuteczności, 8-12 tygodni)
                  </p>
                  <p>
                    <strong>Jeśli masz czas i cierpliwość:</strong> Spróbuj sam, potem ClaimWinger jeśli LOT odmówi
                  </p>
                  <p>
                    <strong>Jeśli LOT ignoruje wnioski:</strong> Skarga do ULC + ClaimWinger równolegle
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA #2 - Before FAQ */}
          <div className="mb-12 p-8 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 rounded-xl shadow-xl text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">
                ✈️ Gotowy wyegzekwować swoje prawa od LOT?
              </h3>
              <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
                Ponad 24,000 pasażerów LOT odzyskało już swoje pieniądze z ClaimWinger. Sprawdź czy Ty też masz prawo do nawet 600€!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://claimwinger.com/pl/opozniony-lot?krok=szczegoly-lotu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition-colors flex items-center gap-2 shadow-lg"
                >
                  Opóźniony lot LOT
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://claimwinger.com/pl/odwolany-lot?krok=szczegoly-lotu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition-colors flex items-center gap-2 shadow-lg"
                >
                  Odwołany lot LOT
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <p className="text-green-100 text-sm mt-4">
                Zero kosztów z góry • Płacisz tylko jeśli wygrasz (25% prowizji)
              </p>
            </div>
          </div>

          {/* Section 9: FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              9. FAQ — najczęstsze pytania o prawa pasażera LOT
            </h2>

            <div className="space-y-4">
              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Jakie prawa przysługują pasażerom LOT Polish Airlines?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Pasażerowie LOT mają prawo do: <strong>odszkodowania 250€-600€</strong> za opóźnienie 3+ godzin, <strong>opieki na lotnisku</strong> (posiłki, napoje, komunikacja), <strong>alternatywnego transportu</strong> przy odwołaniu lotu oraz <strong>zwrotu kosztów biletu</strong>. Wszystko reguluje rozporządzenie WE 261/2004.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Co to jest rozporządzenie WE 261/2004?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>WE 261/2004</strong> to europejskie prawo chroniące pasażerów przed nieuczciwymi praktykami linii lotniczych. Gwarantuje odszkodowania za opóźnienia, odwołania i overbooking. Ma moc wyższą niż regulaminy przewoźników — LOT nie może go ograniczyć swoim regulaminem.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Czy LOT musi zapewnić mi posiłek podczas opóźnienia?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Tak!</strong> Przy opóźnieniu <strong>2+ godzin</strong> (krótkie loty) lub <strong>3+ godzin</strong> (długie loty), LOT musi zapewnić jedzenie, napoje i dostęp do komunikacji (telefon, email). To obowiązek wynikający z WE 261/2004. Jeśli LOT odmawia, kup sam i zachowaj paragony — LOT musi zwrócić koszty.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Czy mogę dostać hotel jeśli lot LOT jest opóźniony do następnego dnia?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Tak, absolutnie!</strong> LOT musi zapewnić bezpłatne <strong>zakwaterowanie w hotelu</strong> oraz <strong>transport z lotniska do hotelu i z powrotem</strong>, jeśli opóźnienie wymaga noclegu. To nie kwestia dobrej woli — to obowiązek prawny. Jeśli LOT odmawia, zarezerwuj sam hotel i dołącz koszty do roszczenia.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Czy LOT może odmówić wypłaty odszkodowania?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  LOT może odmówić <strong>tylko jeśli udowodni nadzwyczajne okoliczności</strong> (np. ekstremalna pogoda, zamknięcie lotniska, zagrożenie bezpieczeństwa). Zwykłe <strong>awarie techniczne, brak załogi czy rotacja samolotów NIE są usprawiedliwieniem</strong>. Problem: LOT często nadużywa tego argumentu bez dowodów. <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ClaimWinger skutecznie kwestionuje 91% takich odmów</a>.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Czy muszę przyjąć voucher od LOT zamiast odszkodowania?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Nie!</strong> Masz prawo żądać odszkodowania w <strong>gotówce (przelew bankowy)</strong>. Voucher jest tylko opcją - LOT nie może go narzucić. Możesz odmówić i wybrać pieniądze. LOT często próbuje przekonać pasażerów do voucherów, bo są dla nich tańsze. Zawsze wybieraj gotówkę.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 p-8 rounded-xl text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              🚀 Nie pozwól LOT naruszyć Twoich praw!
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              ClaimWinger wyegzekwuje 91% odmówionych roszczeń LOT. Sprawdź swoje roszczenie za darmo — zajmuje 2 minuty!
            </p>
            <a
              href="https://claimwinger.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Sprawdź swoje prawa teraz →
            </a>
            <p className="text-blue-100 text-sm mt-4">
              ✅ Zero kosztów z góry • ✅ Płacisz tylko jeśli wygrasz • ✅ Średni czas: 8-12 tygodni
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📚 Przeczytaj również:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/odszkodowanie-lot-polish-airlines" className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Odszkodowanie LOT Polish Airlines — kompletny przewodnik</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sprawdź ile możesz dostać za opóźniony lot LOT (250€-600€) i jak skutecznie złożyć wniosek.</p>
              </Link>
              <Link href="/opozniony-lot" className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Opóźniony lot — co zrobić i ile odszkodowania?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dowiedz się, co zrobić gdy lot jest opóźniony i kiedy należy Ci się odszkodowanie do 600 €.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
