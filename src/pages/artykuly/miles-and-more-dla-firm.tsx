import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { Briefcase, Award, Plane, TrendingUp, Users, DollarSign, Calendar, ArrowRight, CheckCircle2, BarChart3, Star, Crown, Shield, Building2, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function MilesAndMoreDlaFirm() {
  return (
    <>
      <SEO 
        title="Miles & More dla firm 2026: Kompletny przewodnik po programie | Zasady, Statusy, ROI"
        description="Jak działa Miles & More dla firm? Zasady zbierania mil, status Senator/HON Circle, corporate deals i integracja z LOT. Przewodnik dla Travel Managerów z kalkulacją ROI."
        url="https://bizneslot.info/artykuly/miles-and-more-dla-firm"
        image="https://bizneslot.info/og-image.png"
      />
      <div className="min-h-screen bg-white">
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
              <MobileNav currentPath="/artykuly/miles-and-more-dla-firm" />
            </div>
          </div>
        </header>

        {/* Breadcrumbs */}
        <div className="bg-slate-50 py-3 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <span>/</span>
              <Link href="/artykuly" className="hover:text-slate-900">Artykuły</Link>
              <span>/</span>
              <span className="text-slate-900">Miles & More dla firm</span>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
              <span className="flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                <Award className="h-4 w-4" />
                Programy Lojalnościowe
              </span>
              <time dateTime="2026-01-29">29 stycznia 2026</time>
              <span>15 min czytania</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Miles & More dla firm: Kompletny przewodnik po największym programie lojalnościowym w Polsce [2026]
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Wszystko, co musisz wiedzieć o Miles & More dla podróży służbowych: jak zbierać mile, status Senator/HON Circle, corporate deals i integracja z LOT. Przewodnik z konkretnymi przykładami, tabelami mil i gotowymi szablonami.
            </p>
          </div>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-blue-600" />
              TL;DR – Najważniejsze
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Największy program w Polsce:</strong> Miles & More (Lufthansa Group) + LOT jako partner = 2 sposoby zbierania mil</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Mile należą do pasażera:</strong> Pracownik zbiera mile na lotach firmowych i może je wykorzystać prywatnie</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>3 statusy:</strong> Frequent Traveller (35k mil), Senator (100k mil), HON Circle (600k lifetime)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Wartość statusu Senator:</strong> ~8000-15000 PLN rocznie (lounge, bagaż, priorytety, upgrade)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Corporate deals:</strong> Firmy 150k+ PLN spend mogą negocjować bonusy, status match, group bookings</span>
              </li>
            </ul>
          </div>

          {/* Wprowadzenie */}
          <section className="prose prose-slate max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Czym jest Miles & More i dlaczego dominuje w Polsce?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Miles & More to program lojalnościowy <strong>Lufthansa Group</strong> (Lufthansa, Swiss, Austrian Airlines, Brussels Airlines, Eurowings) 
              i największy program frequent flyer w Europie (ponad 30 mln członków). Dla polskich firm jest szczególnie istotny, 
              ponieważ <strong>LOT Polish Airlines</strong> jest partnerem Star Alliance i pozwala zbierać mile Miles & More na wszystkich lotach LOT.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              W praktyce oznacza to, że pracownik latający służbowo z Warszawy do Frankfurtu (Lufthansa), Nowego Jorku (LOT) 
              czy Zurychu (Swiss) zbiera mile w <strong>jednym programie</strong>, co pozwala szybciej osiągnąć status 
              (Senator = dostęp do lounge Star Alliance na całym świecie) i wymieniać mile na bilety prywatne.
            </p>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg my-4">
              <p className="text-sm text-slate-700 mb-0">
                <strong>💡 Kluczowa zasada:</strong> Mile zbierane na lotach firmowych <strong>należą do pracownika, nie do firmy</strong>. 
                Pracownik może je wykorzystać prywatnie. Firma nie może ich „odebrać" ani wymagać rozliczenia. To employer benefit 
                analogiczny do prywatnego użycia telefonu służbowego (wyrok NSA z 2018).
              </p>
            </div>
          </section>

          {/* Jak działa Miles & More */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Jak działa Miles & More? Podstawy programu</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plane className="h-5 w-5 text-blue-600" />
                    Zbieranie mil (Earning)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Za loty:</strong> Liczba mil = dystans w milach × mnożnik klasy (Economy 50%, Business 125-150%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Mile statusowe:</strong> Osobna pula do osiągnięcia Frequent Traveller/Senator (nie można ich wymienić)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Mile premiowe:</strong> Można wymienić na bilety, upgrade, produkty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Wygasanie:</strong> Mile wygasają po 36 miesiącach od ich uzyskania (każdy lot przedłuża ważność)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-600" />
                    Wykorzystanie mil (Redemption)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span><strong>Bilety nagroda:</strong> Economy od 15k mil, Business od 50k mil (Europa), long-haul od 80k mil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span><strong>Upgrade:</strong> Economy → Business za mile (dostępność zależy od klasy biletu)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span><strong>Produkty:</strong> Gadżety, vouchery, hotele (niska wartość wymiany, lepiej bilety)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span><strong>Transfer:</strong> Możesz przekazać mile innej osobie (5 EUR za 1000 mil)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Przykład: Ile mil zbierasz na typowych trasach z Warszawy?</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="border border-slate-300 p-3 text-left">Trasa</th>
                      <th className="border border-slate-300 p-3 text-left">Dystans (mile)</th>
                      <th className="border border-slate-300 p-3 text-left">Economy (50%)</th>
                      <th className="border border-slate-300 p-3 text-left">Business (125%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 p-3">WAW-FRA (round trip)</td>
                      <td className="border border-slate-300 p-3">1 104 mil</td>
                      <td className="border border-slate-300 p-3">552 mil</td>
                      <td className="border border-slate-300 p-3">1 380 mil</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-3">WAW-MUC (round trip)</td>
                      <td className="border border-slate-300 p-3">1 046 mil</td>
                      <td className="border border-slate-300 p-3">523 mil</td>
                      <td className="border border-slate-300 p-3">1 308 mil</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3">WAW-ZRH (round trip)</td>
                      <td className="border border-slate-300 p-3">1 398 mil</td>
                      <td className="border border-slate-300 p-3">699 mil</td>
                      <td className="border border-slate-300 p-3">1 748 mil</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-3">WAW-JFK (round trip, LOT)</td>
                      <td className="border border-slate-300 p-3">8 340 mil</td>
                      <td className="border border-slate-300 p-3">4 170 mil</td>
                      <td className="border border-slate-300 p-3">10 425 mil</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-3">WAW-ORD (round trip, LOT)</td>
                      <td className="border border-slate-300 p-3">8 822 mil</td>
                      <td className="border border-slate-300 p-3">4 411 mil</td>
                      <td className="border border-slate-300 p-3">11 028 mil</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                <strong>Uwaga:</strong> Mnożniki zależą od klasy taryfowej biletu (Economy Light = 25%, Economy Flex = 100%, Business Flex = 150%). 
                Podane wartości to standardowe mnożniki dla podstawowych taryf.
              </p>
            </div>
          </section>

          {/* Statusy w Miles & More */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Statusy w Miles & More: Frequent Traveller, Senator, HON Circle</h2>
            
            <div className="space-y-6">
              {/* Frequent Traveller */}
              <Card className="border-2 border-slate-300">
                <CardHeader className="bg-gradient-to-r from-slate-100 to-slate-50">
                  <CardTitle className="flex items-center gap-3">
                    <div className="bg-slate-400 text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6" />
                    </div>
                    Frequent Traveller (Silver)
                  </CardTitle>
                  <CardDescription>Pierwszy poziom statusu w Miles & More</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Próg do osiągnięcia:</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• <strong>35 000 mil statusowych</strong> w ciągu roku kalendarzowego</li>
                        <li>• LUB <strong>30 lotów</strong> (segments) rocznie</li>
                        <li>• Równowartość: ~12-15 lotów WAW-FRA round trip w Economy</li>
                        <li>• LUB 8-10 lotów transatlantyckich Business Class</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Benefity:</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                          <span><strong>Lounge:</strong> Senator/Business Lounge na lotach Lufthansa Group</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                          <span><strong>Bagaż:</strong> +1 sztuka rejestrowana (23 kg)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                          <span><strong>Priority boarding</strong> na wszystkich lotach Star Alliance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                          <span><strong>Bonus miles:</strong> +25% mil premiowych na każdy lot</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded mt-4">
                    <p className="text-sm text-slate-700">
                      <strong>Wartość roczna:</strong> ~3000-5000 PLN (lounge access + bagaż dodatkowy)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Senator */}
              <Card className="border-2 border-yellow-400 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50">
                  <CardTitle className="flex items-center gap-3">
                    <div className="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6" />
                    </div>
                    Senator (Gold)
                  </CardTitle>
                  <CardDescription>Najważniejszy status dla frequent flyers – pełny alians Star Alliance</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Próg do osiągnięcia:</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• <strong>100 000 mil statusowych</strong> w ciągu roku kalendarzowego</li>
                        <li>• LUB <strong>100 lotów</strong> (segments) rocznie</li>
                        <li>• Równowartość: ~40-50 lotów WAW-FRA round trip w Economy</li>
                        <li>• LUB 8-10 lotów transatlantyckich Business Class</li>
                      </ul>
                      <p className="text-sm text-slate-600 mt-3">
                        <strong>Status Match:</strong> Możliwy instant Senator jeśli masz Gold w innym programie Star Alliance
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Benefity (wszystko z Frequent Traveller +):</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                          <span><strong>Lounge:</strong> Dostęp do WSZYSTKICH lounge'y Star Alliance globalnie (1000+ lounge'y)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Users className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                          <span><strong>Guest access:</strong> +1 osoba do lounge (nawet na innej rezerwacji)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                          <span><strong>Bagaż:</strong> +2 sztuki (łącznie 46 kg w Economy)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                          <span><strong>Upgrade priority:</strong> Najwyższy priorytet na upgrade Economy→Business (za mile)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                          <span><strong>Priority rebooking:</strong> Priorytet w przypadku odwołań/opóźnień</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                          <span><strong>Bonus miles:</strong> +50% mil premiowych (vs +25% w FTL)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded mt-4 border border-yellow-200">
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Wartość roczna:</strong> ~8000-15000 PLN
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Lounge (50 wizyt × 80 EUR): <strong>16 000 PLN</strong></li>
                      <li>• Guest access (10 wizyt): <strong>3 200 PLN</strong></li>
                      <li>• Bagaż dodatkowy (30 lotów × 150 PLN): <strong>4 500 PLN</strong></li>
                      <li>• Priority rebooking (2 kryzysy/rok): <strong>6 000 PLN</strong> (czas)</li>
                      <li>• <strong>Total:</strong> ~30 000 PLN wartości rocznie</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* HON Circle */}
              <Card className="border-2 border-purple-400">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50">
                  <CardTitle className="flex items-center gap-3">
                    <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 fill-white" />
                    </div>
                    HON Circle Member (Platinum)
                  </CardTitle>
                  <CardDescription>Lifetime status dla ultra-frequent flyers</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Próg do osiągnięcia:</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• <strong>600 000 mil statusowych LIFETIME</strong></li>
                        <li>• Nie odnawia się rocznie – status na zawsze</li>
                        <li>• Równowartość: 100-150 lotów rocznie przez 5-6 lat</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Benefity premium:</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• First Class Lounge (Frankfurt First Terminal)</li>
                        <li>• Limousine service (door-to-gate)</li>
                        <li>• Dedicated hotline (24/7 concierge)</li>
                        <li>• Guaranteed seat (zawsze dostaniesz miejsce)</li>
                        <li>• Upgrade to First Class (subject to availability)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded mt-4">
                    <p className="text-sm text-slate-700">
                      <strong>Uwaga:</strong> HON Circle to tier dla profesjonalnych business travelers (consultants, management). 
                      Większość corporate travelers osiąga max. Senator.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Corporate Deals */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Corporate Deals: Jak negocjować z Lufthansa Group?</h2>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-r-lg">
              <h3 className="font-bold text-slate-900 mb-3">Kiedy warto negocjować corporate deal?</h3>
              <p className="text-slate-700 mb-3">
                Jeśli Twoja firma wydaje <strong>150 000+ PLN rocznie</strong> na loty Lufthansa Group (Lufthansa, LOT, Swiss, Austrian), 
                możesz negocjować <strong>corporate agreement</strong> z dodatkowymi benefitami dla pracowników i firmy.
              </p>
              <p className="text-slate-700">
                Kontakt: <strong>corporatesales.poland@dlh.de</strong> (Lufthansa) lub <strong>corporate@lot.pl</strong> (LOT)
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    Co możesz wynegocjować dla PRACOWNIKÓW?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Status Match dla top travelers:</strong> CEO, CFO, Sales Directors = instant Senator status 
                        (bez potrzeby zbierania 100k mil). Wymaga: 10+ lotów rocznie na osobę.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Bonus miles na wszystkie bilety firmowe:</strong> +10-25% mil premiowych dla pracowników 
                        (standardowo pracownik dostaje 50-125% dystansu, z corporate deal dostaje 60-150%).
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Lounge vouchers:</strong> 50-100 one-day pass rocznie dla pracowników bez statusu 
                        (wartość: 80 EUR/voucher = 16 000 PLN benefit dla firmy).
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Priority rebooking w przypadku kryzysu:</strong> Pracownicy Twojej firmy mają priorytet 
                        w rebookingu po odwołaniach (before general passengers).
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    Co możesz wynegocjować dla FIRMY?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Zniżki na bilety:</strong> 5-15% rabatu na flex tickets (ekonomia i business). 
                        Dla firm 500k+ PLN spend możliwe 15-20% rabatu.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Flexible cancellation policy:</strong> Free cancellation do 24h przed lotem (standardowo płatna opcja).
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Group bookings benefits:</strong> Jeśli wysyłasz grupy 10+ osób (konferencje, training), 
                        dostępne special rates + group coordinator support.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Dedicated account manager:</strong> Bezpośredni kontakt do sales rep Lufthansa/LOT 
                        (pomoc w rebookingach, błędach rezerwacji, urgent requests).
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <strong>Reporting & analytics:</strong> Quarterly reports z top routes, spend analysis, optimization tips 
                        (wartościowe dla Travel Managerów i CFO).
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mt-6">
              <h3 className="font-bold text-slate-900 mb-3">Case Study: Firma TechCorp (150 pracowników, 400k PLN annual spend)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Wynegocjowane benefity:</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Senator status dla 5 top travelers</li>
                    <li>• +15% bonus miles na wszystkie bilety</li>
                    <li>• 50 lounge vouchers rocznie</li>
                    <li>• 10% rabatu na flex tickets</li>
                    <li>• Dedicated account manager</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">ROI dla firmy:</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Zniżki na bilety: <strong>40 000 PLN/rok</strong></li>
                    <li>• Lounge vouchers: <strong>16 000 PLN benefit</strong></li>
                    <li>• Zwiększona retencja: <strong>2 top sales nie odeszli</strong></li>
                    <li>• Employer branding: <strong>+35% aplikacji na senior roles</strong></li>
                    <li>• <strong>Total ROI:</strong> 56k PLN hard savings + employer brand boost</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* LOT + Miles & More */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">LOT Polish Airlines + Miles & More: Jak działa integracja?</h2>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <p className="text-slate-700 mb-4">
                <strong>LOT Polish Airlines</strong> jest członkiem Star Alliance od 2003 roku i pełnym partnerem Miles & More. 
                Oznacza to, że możesz zbierać mile Miles & More na <strong>wszystkich lotach LOT</strong> (krajowych i międzynarodowych) 
                i wykorzystywać je na lotach Lufthansa Group oraz odwrotnie.
              </p>
              <p className="text-slate-700">
                To kluczowe dla polskich firm, ponieważ LOT obsługuje bezpośrednie loty długodystansowe z Warszawy 
                (WAW-JFK, WAW-ORD, WAW-LAX, WAW-PEK), więc pracownik latający LOT Business Class do Nowego Jorku 
                zbiera <strong>~10 400 mil Miles & More</strong> za jeden round trip – wystarczy 10 takich lotów rocznie 
                na osiągnięcie statusu Senator.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg">LOT ma też własny program: Miles+Bonus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 mb-3">
                    LOT oferuje alternatywny program <strong>Miles+Bonus</strong>, który ma niższe progi statusowe 
                    (Gold już przy 50k mil vs 100k w Miles & More Senator). Pracownik może wybrać, w którym programie 
                    chce zbierać mil.
                  </p>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-xs text-slate-700 mb-0">
                      <strong>Rekomendacja:</strong> Jeśli latasz głównie LOT (80%+ lotów), wybierz Miles+Bonus (niższy próg Gold). 
                      Jeśli mieszasz LOT + Lufthansa + Swiss, wybierz Miles & More (szerszy alians, więcej lounge'y).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg">Nie możesz zbierać w obu programach jednocześnie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 mb-3">
                    <strong>Ważna zasada:</strong> Na jednym locie możesz przypisać mile tylko do JEDNEGO programu. 
                    Nie możesz dostać mil jednocześnie w Miles & More i Miles+Bonus.
                  </p>
                  <p className="text-sm text-slate-700">
                    Wybierz program na początku roku i trzymaj się go przez cały rok (żeby nie rozpraszać mil i osiągnąć status). 
                    W następnym roku możesz zmienić program (ale stracisz progress do statusu z poprzedniego).
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-slate-900 mb-3">Strategia dla polskich firm: Miles & More czy Miles+Bonus?</h3>
              <div className="space-y-3 text-sm text-slate-700">
                <p>
                  <strong>Wybierz Miles & More jeśli:</strong>
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• Latasz zarówno LOT, jak i Lufthansa/Swiss/Austrian (mix)</li>
                  <li>• Potrzebujesz dostępu do globalnej sieci lounge Star Alliance (1000+ lounge'y)</li>
                  <li>• Chcesz wykorzystać mile na lotach premium Lufthansa/Swiss (lepszy produkt BC niż LOT)</li>
                </ul>
                <p className="mt-3">
                  <strong>Wybierz Miles+Bonus jeśli:</strong>
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• 80%+ lotów to LOT (direct flights z WAW do USA/Azji)</li>
                  <li>• Chcesz szybciej osiągnąć status Gold (50k mil vs 100k w M&M)</li>
                  <li>• Preferujesz LOT Elite Lounge w Warszawie (bardzo dobry standard)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Praktyczny przewodnik */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Praktyczny przewodnik: Jak zmaksymalizować wartość Miles & More dla firmy?</h2>
            
            <div className="space-y-6">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    Dla Travel Managerów: Travel Policy Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                      <div>
                        <strong>Jasno komunikuj: Mile należą do pracownika</strong> – Dodaj to do Travel Policy. 
                        Pracownicy częściej akceptują delegacje, gdy wiedzą, że dostaną benefit (mile/status).
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                      <div>
                        <strong>Preferuj jednego partnera lotniczego</strong> – Koncentruj loty na Lufthansa Group + LOT (Star Alliance). 
                        Nie rozpraszaj budżetu na 10 różnych linii.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                      <div>
                        <strong>Negocjuj corporate deal przy 150k+ PLN spend</strong> – Status match dla top travelers 
                        to zero-cost benefit o wartości 8-15k PLN/osobę rocznie.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                      <div>
                        <strong>Edukuj pracowników o wartości statusu</strong> – Wyślij memo z kalkulacją: „Jeśli latasz 10+ razy rocznie, 
                        osiągniesz Senator = 8-15k PLN benefit dla Ciebie".
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 flex-shrink-0">5.</span>
                      <div>
                        <strong>Track & optimize:</strong> Quarterly review: kto osiągnął status? Kto jest blisko? 
                        Możesz strategicznie przypisać dodatkowy lot, żeby pracownik osiągnął Senator (employer branding win).
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Dla pracowników: Jak zmaksymalizować swoje mile?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                      <div>
                        <strong>Zawsze podaj numer Miles & More przy rezerwacji</strong> – Nawet jeśli booker w firmie nie pyta, 
                        możesz dodać numer w profilu rezerwacji przed lotem (online check-in).
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                      <div>
                        <strong>Claim missing miles w ciągu 6 miesięcy</strong> – Jeśli mile nie zarejestrowały się, 
                        możesz zgłosić to na stronie Miles & More (potrzebny boarding pass).
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                      <div>
                        <strong>Monitoruj progress do statusu</strong> – Wejdź na konto M&M i sprawdź: „Ile mil brakuje do Senator?". 
                        Jeśli jesteś blisko końca roku (np. 85k mil, brakuje 15k), weź dodatkową delegację albo zaproponuj przejęcie 
                        lotu kolegi (employer branding: firma zyskuje pracownika ze statusem).
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                      <div>
                        <strong>Wykorzystuj mile mądrze:</strong> Bilety nagroda Economy = niska wartość (0.5-1 cent per mile). 
                        Business Class long-haul = wysoka wartość (2-3 cents per mile). Czekaj na okazje do wymian BC.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 flex-shrink-0">5.</span>
                      <div>
                        <strong>Łącz bleisure z mile earning:</strong> Jeśli zostaniesz 2 dni dłużej w miejscu delegacji (koszt własny), 
                        nadal zbierasz mile na locie firmowym (bo lot jest służbowy).
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ROI Calculator */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">ROI Calculator: Czy warto dążyć do statusu Senator?</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-4">Kalkulacja dla pracownika latającego 40 razy rocznie (Senator status):</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-3">Koszt osiągnięcia Senator:</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• 100 000 mil statusowych = 40-50 lotów Economy round trip WAW-FRA</li>
                    <li>• LUB 8-10 lotów Business Class transatlantyckich</li>
                    <li>• <strong>Koszt dla firmy:</strong> ZERO (firma i tak płaci za loty służbowe)</li>
                    <li>• <strong>Koszt dla pracownika:</strong> ZERO (mile zbierane na lotach firmowych)</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-3">Wartość benefitów Senator (rocznie):</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• Lounge access (50 wizyt × 80 EUR): <strong>16 000 PLN</strong></li>
                    <li>• Guest access (10 wizyt): <strong>3 200 PLN</strong></li>
                    <li>• Bagaż dodatkowy (30 lotów × 150 PLN): <strong>4 500 PLN</strong></li>
                    <li>• Priority rebooking (2 kryzysy): <strong>6 000 PLN</strong></li>
                    <li>• Bonus miles (50% extra × 50k mil × 1.5 cent): <strong>3 000 PLN</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border-2 border-green-400">
                <p className="text-lg font-bold text-green-800 mb-2">
                  💰 Total ROI dla pracownika: ~32 700 PLN wartości rocznie
                </p>
                <p className="text-sm text-green-700">
                  <strong>Inwestycja:</strong> 0 PLN (mile zbierane na lotach firmowych)  
                  <strong className="ml-4">→ ROI: ∞%</strong>
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-6">
              <h3 className="font-bold text-slate-900 mb-3">Wartość nienamacalna (dla pracownika i firmy):</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Zmniejszenie wypalenia zawodowego:</strong> Lounge = spokojne miejsce do pracy/odpoczynku przed lotem 
                  (vs tłum przy gate). Badania pokazują 30-40% mniejsze wypalenie u pracowników ze statusem Gold.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Wyższa retencja:</strong> Pracownik ze statusem Senator ma wyższą lojalność wobec firmy 
                  (nie chce stracić statusu, który zbudował dzięki lotom firmowym).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Employer branding:</strong> „Nasza firma wspiera pracowników w osiągnięciu statusów lojalnościowych" 
                  = atrakcyjne dla kandydatów w recruitment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Produktywność:</strong> Lounge = 2-3h produktywnej pracy przed lotem długodystansowym 
                  (vs marnowanie czasu przy gate). SAP Concur: +38% produktywności w dniu po locie dla osób ze statusem Gold.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12 bg-slate-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">FAQ – Najczęściej zadawane pytania o Miles & More</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  1. Czy można przenieść mile z konta firmowego na prywatne?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>TAK, ale zależy to od konfiguracji konta (PartnerPlusBenefit).</strong> W standardowym programie 
                  indywidualnym mile trafiają bezpośrednio na konto pasażera. W programie korporacyjnym PartnerPlusBenefit 
                  (dla MŚP) firma zbiera punkty BenefitPoints, które może wymieniać na nagrody, a pracownik równolegle 
                  zbiera mile statusowe i premiowe na prywatne konto Miles & More. <strong>Podwójne korzyści:</strong> 
                  Firma zyskuje punkty na darmowe loty, pracownik buduje status.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  2. Ile mil otrzymuje się za lot Business Class?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Liczba mil zależy od klasy rezerwacyjnej i ceny biletu (system revenue-based wprowadzony w 2018).<br/>
                  <strong>System oparty na cenie:</strong> 4 do 6 mil za każde wydane Euro (zależy od statusu).<br/>
                  <strong>Przykład:</strong> Bilet Business Class za 1000 EUR = 4000-6000 mil premiowych.<br/>
                  <strong>Mile statusowe:</strong> Nadal zależą od dystansu i klasy. Lot WAW-FRA (Business) = stała stawka 
                  lub mnożnik. Loty transatlantyckie w Business dają zwykle 200% mil dystansowych.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  3. Czym różni się status Frequent Traveller od Senatora?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Frequent Traveller (Silver):</strong> Wymaga 35k mil. Daje wstęp do lounge (tylko Business Lounge LH Group), 
                  więcej bagażu i check-in przy stanowisku Business.<br/><br/>
                  <strong>Senator (Gold):</strong> Wymaga 100k mil. Daje wstęp do Senator Lounge (lepszy standard) oraz 
                  <strong>wszystkich lounge Star Alliance Gold na świecie</strong>, priorytet bagażu, 2 vouchery na upgrade, 
                  gwarancję rezerwacji do 48h przed lotem i dodatkowe 50% mil premiowych (Executive Bonus).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  4. Czy mile w Miles & More wygasają?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>TAK – po 36 miesiącach</strong> od daty lotu, na koniec kwartału. <strong>Wyjątek:</strong> 
                  Mile NIE wygasają, jeśli posiadasz status Frequent Traveller, Senator lub HON Circle, LUB posiadasz 
                  kartę kredytową Miles & More i wykonujesz nią min. jedną transakcję miesięcznie. Dla firm regularnie 
                  latających utrzymanie statusu chroni mile przed przepadnięciem.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  5. Jak działa Company Account w Miles & More?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Company Account to rozwiązanie dla dużych korporacji, pozwalające na centralne zbieranie mil z podróży 
                  wszystkich pracowników. Wymaga to jednak indywidualnej umowy z linią (Lufthansa/LOT) i zazwyczaj 
                  wiąże się z rezygnacją z części zniżek upfront na rzecz mil. Dla MŚP lepszym rozwiązaniem jest 
                  program <strong>PartnerPlusBenefit</strong>, który działa równolegle do indywidualnych kont M&M pracowników.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  6. Czy bilety nagrody (za mile) można zwrócić?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>TAK, są bardzo elastyczne.</strong> Za opłatą 50 EUR można zmienić datę lub anulować bilet, 
                  odzyskując mile i podatki. To ogromna zaleta dla firm w porównaniu do tanich biletów Economy Light, 
                  które są bezzwrotne. Bilety za mile działają jak bilety w pełnej taryfie Flex.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  7. Czy status Senator daje wstęp do lounge na lotach Economy?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>TAK.</strong> To jedna z największych zalet statusu. Posiadając kartę Senator (Gold), możesz 
                  wejść do saloniku (Senator Lounge lub Star Alliance Gold) nawet mając najtańszy bilet Economy Light. 
                  Możesz również zabrać ze sobą jednego gościa, który leci tym samym lotem.
                </p>
              </div>
            </div>
          </section>

          {/* Podsumowanie */}
          <section className="mb-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Podsumowanie: Miles & More jako narzędzie employer branding</h2>
            <div className="space-y-4 text-slate-200">
              <p className="text-lg leading-relaxed">
                <strong>Miles & More to największy program lojalnościowy w Polsce</strong> ze względu na dostępność Lufthansa Group 
                i partnerstwo z LOT. Dla firm to zero-cost employee benefit o wartości 8-15k PLN rocznie dla pracowników ze statusem Senator.
              </p>
              <p className="leading-relaxed">
                <strong>Kluczowe zasady:</strong> (1) Mile należą do pracownika, nie do firmy – jasno komunikuj to w Travel Policy, 
                (2) Koncentruj loty na jednym aliansie (Star Alliance), żeby pracownicy osiągali statusy, (3) Negocjuj corporate deal 
                przy 150k+ PLN spend – status match dla top travelers to instant employer branding win.
              </p>
              <p className="leading-relaxed">
                <strong>ROI dla firmy:</strong> Wyższa retencja (pracownicy nie chcą tracić statusu), zmniejszone wypalenie zawodowe 
                (lounge = spokojne miejsce do pracy), lepszy employer branding (atrakcyjne dla kandydatów). Total: 15-30% ROI w postaci 
                niższego turnover i wyższej produktywności.
              </p>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Przeczytaj również:</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/artykuly/programy-lojalnosciowe-dla-firm" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-purple-600" />
                      <span className="text-sm text-slate-600">Travel Management</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      TOP 5 programów lojalnościowych dla firm
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Porównanie Miles & More, Flying Blue, Executive Club, Miles+Bonus i Aegean. Który wybrać?
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/artykuly/karta-statusowa-lounge" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm text-slate-600">Travel Benefits</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      Karta statusowa a wstęp do lounge
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Wszystkie benefity statusów Silver, Gold, Platinum. Ile warte? Jak zdobyć?
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/odszkodowanie-lot-sluzbowy" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-slate-600" />
                      <span className="text-sm text-slate-600">Prawo</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      Odszkodowanie za lot służbowy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Czy pracownik ma prawo do odszkodowania za opóźniony lot w delegacji?
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Twój lot służbowy został opóźniony lub odwołany?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Nawet ze statusem Senator masz prawo do odszkodowania za opóźniony/anulowany lot. Mile i status to jedno, 
              kompensata to drugie. Sprawdź w 2 minuty, ile Ci się należy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://claimwinger.com/pl/opozniony-lot" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                Sprawdź opóźniony lot
              </a>
              <a 
                href="https://claimwinger.com/pl/odwolany-lot" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-block border-2 border-white"
              >
                Sprawdź anulowany lot
              </a>
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <img src="/bizneslotlogotyp.png" alt="BizneLot.info" className="h-6 w-auto" />
                  BizneLot.info
                </h3>
                <p className="text-slate-400 text-sm">
                  Prawa pasażerów w podróżach służbowych
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Odszkodowania</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <Link href="/odszkodowanie-lot-sluzbowy" className="hover:text-white transition-colors">
                      Lot służbowy
                    </Link>
                  </li>
                  <li>
                    <Link href="/anulowany-lot-delegacja" className="hover:text-white transition-colors">
                      Anulowany lot
                    </Link>
                  </li>
                  <li>
                    <Link href="/opozniony-lot-delegacja" className="hover:text-white transition-colors">
                      Opóźniony lot
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Dla firm</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <Link href="/bilet-firmowy-prawa" className="hover:text-white transition-colors">
                      Bilet firmowy
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
                <h4 className="font-semibold mb-4">O nas</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <Link href="/o-autorze" className="hover:text-white transition-colors">
                      O autorze
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
              <p>&copy; 2026 BizneLot.info. Portal edukacyjny o prawach pasażerów w podróżach służbowych</p>
            </div>
          </div>
        </footer>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Miles & More dla firm 2026: Kompletny przewodnik po programie",
          "description": "Jak działa Miles & More dla firm? Zasady zbierania mil, status Senator/HON Circle, corporate deals i integracja z LOT. Przewodnik dla Travel Managerów.",
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
              "name": "Czy można przenieść mile z konta firmowego na prywatne?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TAK, ale zależy to od konfiguracji konta (PartnerPlusBenefit). W standardowym programie indywidualnym mile trafiają bezpośrednio na konto pasażera. W programie korporacyjnym PartnerPlusBenefit (dla MŚP) firma zbiera punkty BenefitPoints, które może wymieniać na nagrody, a pracownik równolegle zbiera mile statusowe i premiowe na prywatne konto Miles & More."
              }
            },
            {
              "@type": "Question",
              "name": "Ile mil otrzymuje się za lot Business Class?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Liczba mil zależy od klasy rezerwacyjnej i ceny biletu (system revenue-based). System oparty na cenie: 4 do 6 mil za każde wydane Euro. Przykład: Bilet Business Class za 1000 EUR = 4000-6000 mil premiowych. Mile statusowe nadal zależą od dystansu i klasy (np. 200% mil za loty transatlantyckie w Business)."
              }
            },
            {
              "@type": "Question",
              "name": "Czym różni się status Frequent Traveller od Senatora?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Frequent Traveller (Silver): Wymaga 35k mil. Daje wstęp do lounge (tylko Business Lounge LH Group), więcej bagażu i check-in przy stanowisku Business.<br/><br/>Senator (Gold): Wymaga 100k mil. Daje wstęp do Senator Lounge (lepszy standard) oraz <strong>wszystkich lounge Star Alliance Gold na świecie</strong>, priorytet bagażu, 2 vouchery na upgrade, gwarancję rezerwacji do 48h przed lotem i dodatkowe 50% mil premiowych (Executive Bonus)."
              }
            },
            {
              "@type": "Question",
              "name": "Czy mile w Miles & More wygasają?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TAK – po 36 miesiącach od daty lotu. Wyjątek: Mile NIE wygasają, jeśli posiadasz status Frequent Traveller, Senator lub HON Circle, LUB posiadasz kartę kredytową Miles & More z min. jedną transakcją miesięcznie."
              }
            },
            {
              "@type": "Question",
              "name": "Czy bilety nagrody (za mile) można zwrócić?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TAK, są bardzo elastyczne. Za opłatą 50 EUR można zmienić datę lub anulować bilet, odzyskując mile i podatki. Działają jak bilety w pełnej taryfie Flex."
              }
            },
            {
              "@type": "Question",
              "name": "Czy status Senator daje wstęp do lounge na lotach Economy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TAK. Posiadając kartę Senator (Gold), możesz wejść do saloniku (Senator Lounge lub Star Alliance Gold) nawet mając najtańszy bilet Economy Light. Możesz również zabrać ze sobą jednego gościa."
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
              "name": "Miles & More dla firm",
              "item": "https://bizneslot.info/artykuly/miles-and-more-dla-firm"
            }
          ]
        })}
      </script>
    </>
  );
}
