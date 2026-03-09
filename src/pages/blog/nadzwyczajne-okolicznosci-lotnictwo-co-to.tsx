import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CloudLightning, Plane, CheckCircle, XCircle, Clock } from "lucide-react";

export default function NadzwyczajneOkolicznosciCoTo() {
  return (
    <Layout>
      <SEO
        title="Co to są nadzwyczajne okoliczności w lotnictwie? (Featured Snippet)"
        description="Wyjaśniamy definicję nadzwyczajnych okoliczności (pogoda, strajki ATC, zderzenie z ptakiem) i ich wpływ na prawo do odszkodowania."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li className="text-blue-600 font-medium">Nadzwyczajne okoliczności</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="h-4 w-4" />
              Słownik lotniczy
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Co to są nadzwyczajne okoliczności w lotnictwie?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Zrozum kiedy linia lotnicza jest zwolniona z wypłaty odszkodowania
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                5 min czytania
              </span>
              <span>•</span>
              <span>Aktualizacja: 25.02.2025</span>
            </div>
          </header>

          <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Szybka odpowiedź
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Nadzwyczajne okoliczności</strong> to sytuacje zewnętrzne, na które linia lotnicza nie ma wpływu 
              i których nie mogła uniknąć, nawet podejmując wszelkie racjonalne środki. Wystąpienie tych okoliczności 
              <strong> zwalnia przewoźnika z obowiązku wypłaty odszkodowania</strong> (250-600 €).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-2 font-bold mb-2">
                  <CheckCircle className="text-green-400 h-5 w-5" /> TO SĄ okoliczności
                </div>
                <ul className="text-sm opacity-90 space-y-1">
                  <li>• Skrajnie zła pogoda (burze, śnieżyce)</li>
                  <li>• Strajk kontrolerów lotów (ATC)</li>
                  <li>• Zderzenie z ptakiem (bird strike)</li>
                  <li>• Zagrożenie bezpieczeństwa / terroryzm</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-2 font-bold mb-2">
                  <XCircle className="text-red-400 h-5 w-5" /> TO NIE SĄ okoliczności
                </div>
                <ul className="text-sm opacity-90 space-y-1">
                  <li>• Usterka techniczna samolotu</li>
                  <li>• Brak załogi (choroba, spóźnienie)</li>
                  <li>• Strajk własnego personelu linii</li>
                  <li>• Zwykłe problemy operacyjne</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dlaczego to pojęcie jest tak ważne?</h2>
            
            <p className="text-gray-700 mb-6">
              Pojęcie "nadzwyczajnych okoliczności" jest najważniejszym kruczkiem prawnym w rozporządzeniu EU261. 
              Linie lotnicze nagminnie nadużywają tego terminu, odrzucając reklamacje i twierdząc, że opóźnienie 
              wynikało np. z "złych warunków atmosferycznych", nawet gdy reszta lotniska funkcjonowała normalnie.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-900 mb-2">Ciężar dowodu</h3>
                  <p className="text-yellow-800">
                    To <strong>linia lotnicza ma obowiązek udowodnić</strong>, że wystąpiły nadzwyczajne 
                    okoliczności. Nie wystarczy ich oświadczenie – muszą przedstawić dowody (np. logi 
                    meteorologiczne, raporty wieży kontrolnej).
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Przykłady z życia: Co jest, a co nie jest okolicznością?</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
                <h3 className="font-bold text-gray-900 mb-2">Usterka techniczna (NIE JEST okolicznością)</h3>
                <p className="text-gray-700">
                  Trybunał Sprawiedliwości UE orzekł, że awarie techniczne (zużycie części, usterki 
                  silnika itp.) są wpisane w prowadzenie linii lotniczej i <strong>nie stanowią</strong> 
                  nadzwyczajnej okoliczności. Wyjątek: wady fabryczne uziemniające całą flotę (np. Boeing 737 MAX).
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900 mb-2">Strajki (ZALEŻY KTO STRAJKUJE)</h3>
                <p className="text-gray-700">
                  Zewnętrzne strajki (np. kontrolerów ruchu lotniczego, obsługi lotniska) <strong>SĄ</strong> 
                  okolicznością nadzwyczajną. Jednak strajk załogi samej linii lotniczej (np. pilotów Lufthansy) 
                  <strong>NIE JEST</strong> okolicznością i odszkodowanie przysługuje.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">Pogoda (ZALEŻY OD SKALI)</h3>
                <p className="text-gray-700">
                  Zwykły deszcz czy lekki śnieg zimą <strong>NIE ZWALNIAJĄ</strong> linii z odpowiedzialności 
                  (powinni być na to przygotowani). Dopiero ekstremalne zjawiska, na skutek których 
                  zamknięto lotnisko, klasyfikują się jako okoliczności nadzwyczajne.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy przy nadzwyczajnych okolicznościach dostanę hotel?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak! Nawet jeśli lot jest opóźniony z powodu burzy lub strajku ATC, linia MA OBOWIĄZEK 
                  zapewnić Ci "prawo do opieki": posiłki, napoje oraz hotel (z transferem), jeśli 
                  konieczny jest nocleg. Okoliczności zwalniają tylko z odszkodowania pieniężnego (600 €).
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Linia twierdzi, że opóźnienie to wina pogody. Co robić?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Zgłoś sprawę do ClaimWinger. Nasi specjaliści sprawdzają raporty pogodowe (METAR) 
                  oraz to, czy inne samoloty startowały w tym samym czasie. Często okazuje się, 
                  że wymówka linii była bezpodstawna i odzyskujemy pieniądze w sądzie.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 sm:p-12 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Linia odrzuciła reklamację z powodu okoliczności?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Zweryfikujmy to. W 40% przypadków wymówki linii lotniczych są nieprawdziwe.
            </p>
            <a
              href="https://claimwinger.com/pl/opozniony-lot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Darmowa weryfikacja roszczenia
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </Layout>
  );
}