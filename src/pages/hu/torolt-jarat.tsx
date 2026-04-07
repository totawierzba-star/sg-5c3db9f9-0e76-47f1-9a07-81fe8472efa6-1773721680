import { SEO } from "@/components/SEO";
import { LayoutHu } from "@/components/LayoutHu";
import { ClaimWingerHuSection } from "@/components/ClaimWingerHuSection";
import Link from "next/link";
import { AlertCircle, Euro, CheckCircle2 } from "lucide-react";

export default function HuCancelledFlightPage() {
  return (
    <LayoutHu>
      <SEO
        title="Torolt jarat - visszaterites, atfoglalas es akar 600 euro karterites"
        description="Nezze meg, mikor jar visszaterites, ujrafoglalas vagy penzbeli karterites a torolt jarat utan az europai utasjogi szabalyok szerint."
        url="https://problemlot.com/hu/torolt-jarat"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <section className="px-4 pb-16 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <AlertCircle className="h-4 w-4" />
              Torolt jarat
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Torolt jarat utan milyen jogok illetik meg?
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              A torles nem csak visszateritest jelenthet. Sok esetben ujrafoglalas, ellatas es bizonyos helyzetekben
              <span className="font-bold text-blue-600 dark:text-blue-400"> penzbeli karterites</span> is jarhat.
            </p>

            <ClaimWingerHuSection
              className="mt-8 text-left"
              badge="Torolt jarat igenyellenorzes"
              title="Toroltek a jaratat? Ellenorizze a magyar ClaimWinger oldalon"
              description="Ha a legitarsasag torolte a jaratot, kesore ertesitette, vagy rossz minosegu helyettesito utvonalat adott, erdemes konkretan ellenorizni a jogosultsagot."
              ctaHref="https://claimwinger.com/hu/torolt-jarat"
              ctaLabel="Torolt jarat urlap megnyitasa"
            />
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Mit jelent jogilag a torles?</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Torolt jaratrol akkor beszelunk, ha az eredetileg tervezett jaratot a legitarsasag nem teljesiti a tervezett formaban,
                es helyette mas megoldast ajanl vagy egyaltalan nem biztosit eredeti utazast.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Fontos, hogy a torles sokszor osszemosodik a nagy menetrendvaltozassal vagy az automatikus atfoglalassal,
                de az utas szempontjabol a kovetkezmeny ugyanaz lehet: kesobb er a celallomasra, rosszabb feltetelekkel.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Milyen jogok johetnek szoba?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Visszaterites vagy atfoglalas</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Sok helyzetben valaszthat a jegyar visszateritese es egy helyettesito jarat kozott.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Ellatas es szallas</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Ha a torles miatt varakoznia kell, etel, ital, adott esetben hotel es transzfer is felmerulhet.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Penzbeli karterites</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Bizonyos esetekben 250, 400 vagy 600 euro is jarhat, ha a jarat az europai szabalyok hatalya ala esik es a korulmenyek ezt lehetove teszik.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Tipikus karteritesi savok</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-blue-50 p-6 text-center dark:bg-blue-900/20">
                  <Euro className="mx-auto mb-3 h-12 w-12 text-blue-600 dark:text-blue-400" />
                  <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">250 EUR</div>
                  <p className="text-gray-600 dark:text-gray-300">Rovid tav</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-6 text-center dark:bg-blue-900/20">
                  <Euro className="mx-auto mb-3 h-12 w-12 text-blue-600 dark:text-blue-400" />
                  <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">400 EUR</div>
                  <p className="text-gray-600 dark:text-gray-300">Kozepes tav</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-6 text-center dark:bg-blue-900/20">
                  <Euro className="mx-auto mb-3 h-12 w-12 text-blue-600 dark:text-blue-400" />
                  <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">600 EUR</div>
                  <p className="text-gray-600 dark:text-gray-300">Hosszu tav</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link href="/hu/karteritesi-kalkulator" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                  Részletes osszegek megtekintese →
                </Link>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white shadow-xl dark:from-blue-700 dark:to-blue-800">
              <h2 className="mb-4 text-3xl font-bold">A torles tenyleges kovetkezmenyei szamitanak</h2>
              <p className="mb-6 text-xl text-blue-100">
                Ha nem biztos benne, hogy ez egyszeru torles, nagy menetrendvaltozas vagy rossz minosegu atfoglalas volt, a legbiztosabb a konkret jarat ellenorzese.
              </p>
              <a
                href="https://claimwinger.com/hu/torolt-jarat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-colors hover:bg-gray-100"
              >
                Torolt jarat ellenorzese
              </a>
            </div>
          </div>
        </section>
      </div>
    </LayoutHu>
  );
}
