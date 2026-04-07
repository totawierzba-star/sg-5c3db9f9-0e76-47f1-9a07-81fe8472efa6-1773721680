import { SEO } from "@/components/SEO";
import { LayoutHu } from "@/components/LayoutHu";
import { ClaimWingerHuSection } from "@/components/ClaimWingerHuSection";
import Link from "next/link";
import { Clock, Euro, CheckCircle2 } from "lucide-react";

export default function HuDelayedFlightPage() {
  return (
    <LayoutHu>
      <SEO
        title="Kesett jarat - mikor jarhat akar 600 euro karterites?"
        description="Tudja meg, mikor lehet a kesett jarat utan penzbeli karteritesre jogosult, es mikor vedik Ont az europai utasjogi szabalyok."
        url="https://problemlot.com/hu/kesett-jarat"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <section className="px-4 pb-16 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
              <Clock className="h-4 w-4" />
              Kesett jarat
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Kesett jarat utan mennyi karterites jarhat?
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              Sok esetben a vegso celallomasra erkezes kesese szamit. Ha ez legalabb 3 ora, bizonyos utvonalakon akar
              <span className="font-bold text-blue-600 dark:text-blue-400"> 600 EUR</span> is jarhat.
            </p>

            <ClaimWingerHuSection
              className="mt-8 text-left"
              badge="Kesett jarat ellenorzese"
              title="Kesett volt a jarata? Ellenorizze magyarul a ClaimWingerrel"
              description="A keses jogi ertekelesehez nem eleg a menetrend. A ClaimWinger a jarat utvonala, hossza, erkezesi kesese es a korulmenyek alapjan segit felmerni a lehetseges igenyt."
              ctaHref="https://claimwinger.com/hu/kesett-jarat"
              ctaLabel="Kesett jarat urlap megnyitasa"
            />
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Mikor szamit karral jaro kesesnek?</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                A legfontosabb kulonbseg az, hogy sok esetben nem az indulasi, hanem a vegso erkezesi kesest kell nezni.
                Az unios szabalyok szempontjabol az erkezesi ido kulcsfontossagu.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Ha a vegso celallomasra legalabb 3 oras kesessel erkezik meg, es a jarat az europai szabalyok hatalya ala esik,
                akkor penzbeli karterites is szoba johet.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Mikor vedik az europai szabalyok?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">EU-bol indulo jaratok</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Az EU-bol indulo jaratok altalaban szelesebb korben tartoznak az europai vedelmi szabalyok ala.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Legalabb 3 oras erkezesi keses</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      A 3 oras kuszob sok esetben az egyik legfontosabb feltetel a penzbeli karteritesi igenyhez.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Nem rendkivuli korulmeny</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      A jogosultsag vizsgalatanal kulon kerdes, hogy a kesest rendkivuli korulmeny okozta-e, vagy sem.
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
                  <p className="text-gray-600 dark:text-gray-300">Altalaban 1500 km-ig</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-6 text-center dark:bg-blue-900/20">
                  <Euro className="mx-auto mb-3 h-12 w-12 text-blue-600 dark:text-blue-400" />
                  <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">400 EUR</div>
                  <p className="text-gray-600 dark:text-gray-300">Kb. 1500-3500 km kozott</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-6 text-center dark:bg-blue-900/20">
                  <Euro className="mx-auto mb-3 h-12 w-12 text-blue-600 dark:text-blue-400" />
                  <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">600 EUR</div>
                  <p className="text-gray-600 dark:text-gray-300">Hosszu tavon, 3500 km felett</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link href="/hu/karteritesi-kalkulator" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                  Reszletes osszegek megtekintese →
                </Link>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white shadow-xl dark:from-blue-700 dark:to-blue-800">
              <h2 className="mb-4 text-3xl font-bold">Konkretan a sajat jarata erdekel?</h2>
              <p className="mb-6 text-xl text-blue-100">
                A legjobb kovetkezo lepes a magyar ClaimWinger urlap kitoltese, ahol a tenyleges utvonal es a keses merteke alapjan tortenik az ellenorzes.
              </p>
              <a
                href="https://claimwinger.com/hu/kesett-jarat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-colors hover:bg-gray-100"
              >
                Kesett jarat ellenorzese
              </a>
            </div>
          </div>
        </section>
      </div>
    </LayoutHu>
  );
}
