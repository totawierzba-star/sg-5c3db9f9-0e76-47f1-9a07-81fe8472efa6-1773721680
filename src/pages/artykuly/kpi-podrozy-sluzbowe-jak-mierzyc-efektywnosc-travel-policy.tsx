import { Layout } from "@/components/Layout";
import Link from "next/link";
import { TrendingUp, Users, DollarSign, Clock, Target, BarChart3, PieChart, Activity, CheckCircle, AlertCircle, Calendar, FileText, Calculator } from "lucide-react";

export default function KPIPodrozySluzboweJakMierzycEfektywnoscTravelPolicy() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/artykuly" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-4 inline-block">
            ← Powrót do artykułów
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            KPI podróży służbowych — jak mierzyć efektywność travel policy
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              20 marca 2026
            </span>
            <span>•</span>
            <span>10 min czytania</span>
            <span>•</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm">
              Prawo lotnicze
            </span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Efektywna polityka podróży służbowych wymaga stałego monitorowania i optymalizacji. 
            Kluczowe wskaźniki efektywności (KPI) pozwalają mierzyć sukces travel policy i identyfikować 
            obszary do poprawy. Dowiedz się, które KPI są najważniejsze i jak je wdrożyć.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Dlaczego KPI są kluczowe w travel management?
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Strategiczne znaczenie KPI
                </p>
                <p className="text-blue-800 dark:text-blue-200">
                  KPI w podróżach służbowych pozwalają przekształcić travel management z 
                  centrum kosztów w strategiczną funkcję biznesową. Regularne monitorowanie 
                  wskaźników umożliwia podejmowanie decyzji opartych na danych.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            Główne korzyści z monitorowania KPI:
          </h3>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Optymalizacja kosztów:</strong> Identyfikacja nieefektywnych wydatków i możliwości oszczędności
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Zwiększenie compliance:</strong> Monitorowanie przestrzegania zasad travel policy
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Poprawa satysfakcji pracowników:</strong> Śledzenie doświadczeń podróżnych
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Wsparcie decyzji strategicznych:</strong> Dane do negocjacji z dostawcami i planowania budżetu
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Finansowe KPI podróży służbowych
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            1. Całkowity koszt podróży (TCT)
          </h3>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold">Total Cost of Travel</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Suma wszystkich kosztów związanych z podróżami służbowymi, w tym transport, 
              zakwaterowanie, diety i dodatkowe wydatki.
            </p>
            <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <p className="font-mono text-sm">
                TCT = Koszty transportu + Zakwaterowanie + Diety + Dodatkowe wydatki
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            2. Średni koszt podróży na pracownika
          </h3>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold">Average Cost Per Employee</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pomaga zidentyfikować pracowników z najwyższymi wydatkami i analizować 
              efektywność podróży w różnych działach.
            </p>
            <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <p className="font-mono text-sm">
                Średni koszt = Całkowity koszt podróży / Liczba podróżujących pracowników
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            3. Oszczędności z negocjacji
          </h3>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="font-semibold">Negotiated Savings</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Różnica między ceną standardową a ceną uzyskaną dzięki negocjacjom z 
              dostawcami (linie lotnicze, hotele, agencje travel).
            </p>
            <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <p className="font-mono text-sm">
                Oszczędności = (Cena standardowa - Cena negocjowana) / Cena standardowa × 100%
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Operacyjne KPI podróży służbowych
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            4. Wskaźnik zgodności z travel policy (Compliance Rate)
          </h3>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold">Travel Policy Compliance</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Procent rezerwacji dokonanych zgodnie z zasadami określonymi w travel policy.
            </p>
            <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <p className="font-mono text-sm">
                Compliance = (Liczba rezerwacji zgodnych z polityką / Całkowita liczba rezerwacji) × 100%
              </p>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Docelowy poziom:</strong> Powyżej 85-90% zgodności z travel policy
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            5. Średni czas rezerwacji
          </h3>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold">Average Booking Time</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Czas potrzebny pracownikowi na zarezerwowanie podróży od momentu 
              zatwierdzenia do finalizacji rezerwacji.
            </p>
            <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <p className="font-mono text-sm">
                Średni czas = Suma czasów rezerwacji / Liczba rezerwacji
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            6. Wykorzystanie preferowanych dostawców
          </h3>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold">Preferred Supplier Usage</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Procent rezerwacji dokonanych u preferowanych dostawców z którymi 
              firma ma podpisane umowy partnerskie.
            </p>
            <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <p className="font-mono text-sm">
                Wykorzystanie = (Rezerwacje u preferowanych / Całkowite rezerwacje) × 100%
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            KPI związane z pracownikami
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            7. Satysfakcja podróżnych (Traveler Satisfaction)
          </h3>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold">Employee Satisfaction Score</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ocena doświadczeń podróżnych zazwyczaj mierzona poprzez ankiety 
              po podróży (skala 1-5 lub 1-10).
            </p>
            <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <p className="font-mono text-sm">
                Satysfakcja = Suma ocen / Liczba odpowiedzi
              </p>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Poziom doskonały:</span>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">4.5-5.0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Poziom dobry:</span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">4.0-4.4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Wymaga poprawy:</span>
                <span className="text-sm font-semibold text-red-600 dark:text-red-400">poniżej 3.5</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            8. Wskaźnik bezpieczeństwa podróży
          </h3>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold">Travel Safety Index</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pomiar skuteczności programów bezpieczeństwa podróży, w tym 
              śledzenie pracowników, reagowanie na kryzysy i wsparcie medyczne.
            </p>
            <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
              <p className="font-mono text-sm mb-2">
                Kluczowe metryki:
              </p>
              <ul className="text-sm space-y-1">
                <li>• Procent podróży z aktualnym ubezpieczeniem</li>
                <li>• Czas reakcji na incydenty</li>
                <li>• Liczba zgłoszeń bezpieczeństwa</li>
                <li>• Skuteczność komunikacji kryzysowej</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Jak wdrożyć system KPI w travel management?
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
              Krok 1: Zdefiniuj cele biznesowe
            </h3>
            <p className="text-blue-800 dark:text-blue-200 mb-4">
              Zaczynij od zrozumienia strategicznych celów organizacji. Czy priorytetem jest 
              redukcja kosztów, zwiększenie produktywności, czy poprawa dobrostanu pracowników?
            </p>
            <div className="bg-white dark:bg-gray-900 p-4 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-sm font-medium mb-2">Przykładowe cele:</p>
              <ul className="text-sm space-y-1">
                <li>• Redukcja kosztów podróży o 15% w ciągu roku</li>
                <li>• Zwiększenie compliance do 90%</li>
                <li>• Poprawa satysfakcji podróżnych powyżej 4.2</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
              Krok 2: Wybierz odpowiednie narzędzia
            </h3>
            <p className="text-green-800 dark:text-green-200 mb-4">
              Zainwestuj w systemy travel management (TMS) lub expense management, które 
              automatycznie zbierają dane i generują raporty KPI.
            </p>
            <div className="bg-white dark:bg-gray-900 p-4 rounded border border-green-200 dark:border-green-700">
              <p className="text-sm font-medium mb-2">Rekomendowane narzędzia:</p>
              <ul className="text-sm space-y-1">
                <li>• Concur Travel & Expense</li>
                <li>• SAP Concur</li>
                <li>• Coupa</li>
                <li>• Egencia</li>
                <li>• Custom dashboards (Power BI, Tableau)</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
              Krok 3: Ustal częstotliwość raportowania
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200 mb-4">
              Zdefiniuj jak często będziesz analizować poszczególne KPI - miesięcznie, 
              kwartalnie czy rocznie.
            </p>
            <div className="bg-white dark:bg-gray-900 p-4 rounded border border-yellow-200 dark:border-yellow-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Dziennie:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Aktywne podróże</li>
                    <li>• Wydatki bieżące</li>
                  </ul>
                </div>
                <div>
                  <strong>Miesięcznie:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Koszty totalne</li>
                    <li>• Compliance rate</li>
                    <li>• Satysfakcja</li>
                  </ul>
                </div>
                <div>
                  <strong>Kwartalnie:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Oszczędności</li>
                    <li>• Trendy</li>
                    <li>• ROI programów</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
              Krok 4: Stwórz dashboard KPI
            </h3>
            <p className="text-purple-800 dark:text-purple-200 mb-4">
              Przygotuj wizualny dashboard z kluczowymi wskaźnikami dla różnych 
              grup interesariuszy (management, travel manager, HR).
            </p>
            <div className="bg-white dark:bg-gray-900 p-4 rounded border border-purple-200 dark:border-purple-700">
              <p className="text-sm font-medium mb-2">Elementy dashboardu:</p>
              <ul className="text-sm space-y-1">
                <li>• Wykresy trendów kosztów</li>
                <li>• Heat mapy popularności destynacji</li>
                <li>• Porównania dostawców</li>
                <li>• Alerty i powiadomienia</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Benchmarki i cele KPI
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">KPI</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Średnia branżowa</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Cel dobry</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Cel doskonały</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Compliance Rate</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">70-80%</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">85%</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">95%+</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Preferred Supplier Usage</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">60-70%</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">80%</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">90%+</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Traveler Satisfaction</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.5-4.0</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.2</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.5+</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Booking Lead Time</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7-14 dni</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">14-21 dni</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">21+ dni</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Negotiated Savings</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5-10%</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">15%</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">20%+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Najczęstsze błędy w monitorowaniu KPI
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-1">
                  Zbyt wiele wskaźników
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  Skupienie się na zbyt wielu KPI prowadzi do rozproszenia i braku 
                  możliwości podjęcia konkretnych działań. Wybierz 5-7 kluczowych wskaźników.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-1">
                  Brak kontekstu biznesowego
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  Same liczby bez odniesienia do celów biznesowych są mało użyteczne. 
                  Zawsze tłumacz KPI w kontekście strategii firmy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-1">
                  Nier regularne monitorowanie
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  Sporadyczne analizy KPI nie pozwalają na bieżące optymalizowanie. 
                  Ustal stały harmonogram raportowania.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-1">
                  Brak działań następczych
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  Zbieranie danych bez planu działania jest bezcelowe. 
                  Dla każdego KPI zdefiniuj co zrobisz gdy wynik będzie poniżej celu.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Podsumowanie
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg mb-8">
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Efektywny system KPI w podróżach służbowych przekształca travel management 
              z funkcji administracyjnej w strategiczne narzędzie biznesowe. Regularne 
              monitorowanie kluczowych wskaźników pozwala:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Optymalizować koszty i identyfikować oszczędności</span>
              </div>
              <div className="flex items-start gap-2">
                <Users className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Poprawiać doświadczenia podróżnych</span>
              </div>
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Zwiększać compliance z travel policy</span>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Wspierać decyzje strategiczne</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
              🎯 Kluczowe takeaways
            </h3>
            <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
              <li>• Zacznij od 5-7 kluczowych KPI związanych z celami biznesowymi</li>
              <li>• Zautomatyzuj zbieranie danych za pomocą TMS lub innych narzędzi</li>
              <li>• Twórz regularne raporty dla różnych grup interesariuszy</li>
              <li>• Działaj na podstawie danych - każde KPI powinno prowadzić do konkretnych działań</li>
              <li>• Review i dostosuj KPI co kwartał do zmieniających się potrzeb biznesowych</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Potrzebujesz pomocy w implementacji KPI podróży służbowych?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Specjalizujemy się w optymalizacji travel management i wdrażaniu efektywnych 
            systemów KPI. Skontaktuj się z nami, aby opracować spersonalizowaną strategię 
            monitorowania efektywności podróży służbowych w Twojej organizacji.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://claimwinger.com/business-travel-consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Konsultacja KPI podróży
            </a>
            <Link
              href="/artykuly"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg transition-colors"
            >
              Więcej artykułów
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
