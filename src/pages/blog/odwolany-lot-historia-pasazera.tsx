import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function OdwolanyLotHistoriaPage() {
  return (
    <Layout>
      <SEO
        title="Mój lot został odwołany, linia odmówiła wypłaty – co zrobiłem dalej"
        description="Historia pasażera, który po odwołaniu lotu i odmowie odszkodowania przez linię lotniczą, skutecznie odzyskał rekompensatę."
        url="https://problemlot.com/blog/odwolany-lot-historia-pasazera"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Header */}
          <header className="mb-12">
            <div className="text-sm text-blue-600 font-medium mb-4">
              Blog
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Mój lot został odwołany, linia odmówiła wypłaty – co zrobiłem dalej
            </h1>
            <div className="text-gray-500 text-sm">
              Historia pasażera
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Mój lot z Warszawy do Rzymu miał wystartować w piątek wieczorem. Kilka godzin przed wylotem dostałem SMS: lot odwołany. Bez większego wyjaśnienia, bez informacji o jakiejkolwiek rekompensacie.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Na lotnisku okazało się, że nie jestem jedyny. Kilkadziesiąt osób w podobnej sytuacji. Część dostała zmianę rezerwacji, część hotel. O pieniądzach nikt nie mówił ani słowa.
            </p>

            <p className="text-gray-700 leading-relaxed mb-10">
              Kilka dni później postanowiłem złożyć reklamację.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              „Nie przysługuje panu odszkodowanie"
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Po dwóch tygodniach dostałem odpowiedź od linii lotniczej:
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50 italic text-gray-700">
              „Pański lot został odwołany z powodów operacyjnych. Odszkodowanie nie przysługuje."
            </blockquote>

            <p className="text-gray-700 leading-relaxed mb-6">
              Brzmiało to bardzo oficjalnie i bardzo ostatecznie. Problem w tym, że po krótkich poszukiwaniach okazało się, że „powody operacyjne" wcale nie zwalniają przewoźnika z odpowiedzialności.
            </p>

            <p className="text-gray-700 leading-relaxed mb-10">
              Tylko jak to udowodnić zwykłemu pasażerowi?
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Szukanie pomocy
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Nie jestem prawnikiem. Nie mam czasu na pisanie pism i analizowanie przepisów UE. Zacząłem więc szukać firm, które zajmują się odzyskiwaniem takich odszkodowań w imieniu pasażerów.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              W ten sposób trafiłem na <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ClaimWinger</a> – platformę, która zajmuje się dochodzeniem rekompensat za odwołane i opóźnione loty.
            </p>

            <p className="text-gray-700 leading-relaxed mb-10">
              Wypełnienie formularza zajęło mi kilka minut. Resztą zajęli się oni.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Efekt po kilku tygodniach
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Po niecałych dwóch miesiącach dostałem wiadomość, że linia lotnicza zgodziła się wypłacić należną rekompensatę. Pieniądze trafiły na moje konto kilka dni później.
            </p>

            <ul className="list-none space-y-3 my-8 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Nie pisałem żadnych pism.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Nie kontaktowałem się z przewoźnikiem.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Nie ryzykowałem własnych pieniędzy.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Dlaczego o tym piszę
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Bo wcześniej byłem przekonany, że takie historie kończą się zawsze tak samo: linia lotnicza wygrywa, pasażer przegrywa.
            </p>

            <p className="text-gray-700 leading-relaxed mb-10">
              Dziś wiem, że to nie musi tak wyglądać – o ile ktoś bierze na siebie ciężar walki z przewoźnikiem.
            </p>
          </div>

          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Przydatne informacje
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/opozniony-lot"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
              >
                <div className="font-medium text-gray-900 mb-1">
                  Opóźniony lot
                </div>
                <div className="text-sm text-gray-600">
                  Poznaj swoje prawa jako pasażera
                </div>
              </Link>
              <Link
                href="/ile-mozesz-dostac"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
              >
                <div className="font-medium text-gray-900 mb-1">
                  Ile możesz dostać?
                </div>
                <div className="text-sm text-gray-600">
                  Sprawdź wysokość odszkodowania
                </div>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}