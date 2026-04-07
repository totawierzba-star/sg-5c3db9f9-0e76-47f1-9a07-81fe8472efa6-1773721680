import { SEO } from "@/components/SEO";
import { LayoutHu } from "@/components/LayoutHu";
import { ClaimWingerHuSection } from "@/components/ClaimWingerHuSection";
import { Euro } from "lucide-react";

export default function HuCompensationCalculatorPage() {
  return (
    <LayoutHu>
      <SEO
        title="Karteritesi kalkulator - 250, 400 vagy 600 euro?"
        description="Nezze meg, milyen tipikus karteritesi savok lehetnek ervenyesek kesett vagy torolt jaratoknal az EU utasjogi szabalyok alapjan."
        url="https://problemlot.com/hu/karteritesi-kalkulator"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <section className="px-4 pb-16 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
              <Euro className="h-4 w-4" />
              Karteritesi kalkulator
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Mekkora osszeg johet szoba?
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              A 250, 400 es 600 euros savok csak kiindulasi pontok. A konkret jogosultsag mindig a jarat utvonalatol, kesesetol, torlesenek korulmenyeitol es a vedelmi szabalyok hatalyatol fugg.
            </p>

            <ClaimWingerHuSection
              className="mt-8 text-left"
              badge="Magyar jogosultsagi ellenorzes"
              title="Az osszegtabla utan jon a lenyeg: a sajat jarat ellenorzese"
              description="A savok alapjan mar latja, hogy mekkora osszeg lehet tipikus. A ClaimWinger kovetkezo lepeskent azt mutatja meg, hogy a sajat jarata tenyleg beleesik-e a vedett esetek korebe."
              ctaHref="https://claimwinger.com/hu"
              ctaLabel="Sajat jarat ellenorzese"
            />
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
                Tipikus karteritesi savok
              </h2>

              <div className="space-y-6">
                <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">250 EUR</h3>
                      <p className="text-gray-600 dark:text-gray-300">Rovid tav</p>
                    </div>
                    <Euro className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Jellemzoen:</strong> kb. 1500 km-ig terjedo utvonalaknal
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">400 EUR</h3>
                      <p className="text-gray-600 dark:text-gray-300">Kozepes tav</p>
                    </div>
                    <Euro className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Jellemzoen:</strong> kb. 1500-3500 km kozotti utvonalaknal
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">600 EUR</h3>
                      <p className="text-gray-600 dark:text-gray-300">Hosszu tav</p>
                    </div>
                    <Euro className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Jellemzoen:</strong> 3500 km feletti utvonalaknal
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Fontos</h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Az osszeg nem a jegyarhoz igazodik.</li>
                  <li>• A vegso jogosultsaghoz a jarat tipusa es az okok is szamitanak.</li>
                  <li>• A kesesnel sok esetben a vegso celallomasra erkezes ideje a meghatarozo.</li>
                  <li>• A torlesnel az is szamit, mennyivel korabban tajekoztattak.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutHu>
  );
}
