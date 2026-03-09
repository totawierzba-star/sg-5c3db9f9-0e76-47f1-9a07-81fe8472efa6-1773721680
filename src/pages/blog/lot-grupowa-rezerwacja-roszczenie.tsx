import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function LotGroupBookingClaim() {
  return (
    <Layout>
      <SEO
        title="LOT grupowa rezerwacja — zbiorowe roszczenie odszkodowawcze €250-600"
        description="Leciałeś LOT w grupie (rodzina, wycieczka, firma)? Sprawdź jak złożyć zbiorowe roszczenie o odszkodowanie €250-600 i czy każdy pasażer dostaje pełną kwotę."
        url="https://lotproblem.pl/blog/lot-grupowa-rezerwacja-roszczenie"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LOT Grupowa Rezerwacja: Zbiorowe Roszczenie
          </h1>
          <p className="text-xl text-gray-600">
            Leciałeś LOT w grupie (rodzina, wycieczka szkolna, delegacja firmowa)? Sprawdź jak złożyć zbiorowe roszczenie o odszkodowanie €250-600 za opóźniony/odwołany lot, czy każdy pasażer dostaje pełną kwotę i jak uprościć procedurę dla całej grupy.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            ✈️ Grupowa rezerwacja LOT opóźniona/odwołana?
          </p>
          <p className="text-blue-800 mb-4">
            <strong>Każdy pasażer ma OSOBNE prawo do odszkodowania €250-600!</strong> Nie dzielicie jednej kwoty — każdy dostaje pełną kwotę zależną od odległości lotu. Możecie złożyć jedno zbiorowe roszczenie dla całej grupy (łatwiejsze) lub osobne reklamacje (każdy sam).
          </p>
          <a
            href="https://claimwinger.com/pl/opozniony-lot"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sprawdź odszkodowanie dla grupy →
          </a>
        </div>

        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Czy każdy pasażer z grupy dostaje odszkodowanie?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            <strong>TAK!</strong> Zgodnie z rozporządzeniem WE 261/2004 art. 7 — odszkodowanie przysługuje KAŻDEMU pasażerowi indywidualnie, niezależnie od rodzaju rezerwacji (grupowa/indywidualna).
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Przykłady odszkodowań grupowych:</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-green-900 mb-2">Grupa 20 osób, lot WAW→LHR (1500 km), opóźnienie 4h</p>
                <p className="text-gray-700">RAZEM: 20 × 250 € = 5 000 € dla całej grupy</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-green-900 mb-2">Rodzina 4 osoby, lot WAW→JFK (6800 km), lot odwołany</p>
                <p className="text-gray-700">RAZEM: 4 × 600 € = 2 400 € dla rodziny</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak złożyć zbiorowe roszczenie?
          </h2>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Procedura krok po kroku:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-green-900">Zbierz dokumenty:</strong>
                  <p className="text-gray-700 mt-1">Booking confirmation (PNR), boarding passes wszystkich, lista pasażerów</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-green-900">Oblicz odszkodowanie:</strong>
                  <p className="text-gray-700 mt-1">≤1500 km: 250 € × osoby | 1500-3500 km: 400 € × osoby | &gt;3500 km: 600 € × osoby</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-green-900">Wyślij roszczenie:</strong>
                  <p className="text-gray-700 mt-1">customer.relations@lot.pl — jedno zbiorowe roszczenie dla całej grupy</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg font-semibold text-blue-900 mb-2">
              💡 Potrzebujesz pomocy z roszczeniem grupowym?
            </p>
            <p className="text-blue-800 mb-4">
              ClaimWinger obsługuje roszczenia grupowe (10-500+ pasażerów). Zajmują się całą procedurą i negocjacjami z LOT. Prowizja TYLKO przy sukcesie.
            </p>
            <a
              href="https://claimwinger.com/pl"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Złóż bezpłatne zgłoszenie →
            </a>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Czy każdy pasażer z grupy dostaje odszkodowanie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TAK! Każdy pasażer ma OSOBNE prawo do odszkodowania €250-600 zgodnie z WE 261/2004. Nie dzielicie jednej kwoty."
                  }
                }
              ]
            })
          }}
        />
      </article>
    </Layout>
  );
}