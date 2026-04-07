import { SEO } from "@/components/SEO";
import { LayoutHu } from "@/components/LayoutHu";
import { ClaimWingerHuSection } from "@/components/ClaimWingerHuSection";
import { blogArticlesHuSorted } from "@/lib/blogArticlesHu";
import Link from "next/link";
import { ArrowRight, AlertCircle, Clock, Euro, Plane } from "lucide-react";

export default function HuHomePage() {
  const latestArticle = blogArticlesHuSorted[0];

  return (
    <LayoutHu>
      <SEO
        title="Kesett vagy torolt jarat? Ellenorizze a legfeljebb 600 eurós karteritest"
        description="Nézze meg, hogy a kesett vagy torolt jarat utan jogosult-e akar 600 euro karteritesre az unios utasjogi szabalyok alapjan."
        url="https://problemlot.com/hu"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <section className="px-4 pb-16 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              EU utasjogok magyarul
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Kesett vagy torolt volt a jarata?
              <br />
              Lehet, hogy akar <span className="text-blue-600 dark:text-blue-400">600 EUR</span> karterites jar.
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              Az EU 261/2004 szabalyai alapjan a keses, torles vagy megtagadott beszallas utan penzbeli karterites is jarhat.
              Itt gyorsan atnezzuk az alapokat, a ClaimWinger pedig segit a tenyleges igenyellenorzesben.
            </p>

            <ClaimWingerHuSection
              className="mt-8 text-left"
              badge="ClaimWinger magyar karteritesi urlap"
              title="Inditsa el itt a magyar karteritesi ellenorzest"
              description="Ha a jarat kesett, toroltek vagy jelentosen atfoglaltak, a ClaimWinger magyar oldalan gyorsan ellenorizheti a jogosultsagot, majd ugyanitt kuldheti be az igenyt."
              ctaHref="https://claimwinger.com/hu"
              ctaLabel="Magyar ClaimWinger oldal megnyitasa"
            />
          </div>
        </section>

        <section className="border-y border-gray-200 bg-white px-4 py-16 dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto grid max-w-6xl gap-8 text-center md:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold text-blue-600 dark:text-blue-400">600 EUR</div>
              <div className="text-gray-600 dark:text-gray-300">A legmagasabb tipikus karteritesi osszeg</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-blue-600 dark:text-blue-400">3 ora</div>
              <div className="text-gray-600 dark:text-gray-300">Ennyi kesesnel kezdodik sok esetben a penzbeli igeny</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-blue-600 dark:text-blue-400">250/400/600</div>
              <div className="text-gray-600 dark:text-gray-300">A tavolsag es az utvonal alapjan tipikus savok</div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
              Miben tudunk segiteni?
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <Link
                href="/hu/kesett-jarat"
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
              >
                <Clock className="mb-4 h-12 w-12 text-blue-600 dark:text-blue-400" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  Kesett jarat
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Nezze meg, mikor szamit a keses olyan mertekunek, hogy karteritesi jogot alapozhat meg.
                </p>
              </Link>

              <Link
                href="/hu/torolt-jarat"
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
              >
                <AlertCircle className="mb-4 h-12 w-12 text-blue-600 dark:text-blue-400" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  Torolt jarat
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Tudja meg, mikor kerhet visszateritest, ujrafoglalast es mikor johet szo penzbeli karterites.
                </p>
              </Link>

              <Link
                href="/hu/karteritesi-kalkulator"
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
              >
                <Euro className="mb-4 h-12 w-12 text-blue-600 dark:text-blue-400" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  Karteritesi kalkulator
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Attekintheti, hogy a jarat tavolsaga es tipusa alapjan jellemzoen mekkora osszeg johet szoba.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {latestArticle ? (
          <section className="border-t border-gray-200 bg-slate-50 px-4 py-16 dark:border-gray-700 dark:bg-gray-900">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Legujabb a magyar blogon
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Lepesrol lepesre magyarazott utasjogi cikkek kesesrol, torlesrol es EU261-rol.
                  </p>
                </div>
                <Link
                  href="/hu/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400"
                >
                  Osszes cikk
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <Link
                href={`/hu/blog/${latestArticle.slug}`}
                className="block rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
              >
                <div className="mb-3 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {latestArticle.category}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  {latestArticle.title}
                </h3>
                <p className="mb-5 max-w-3xl text-gray-600 dark:text-gray-300">
                  {latestArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{latestArticle.date}</span>
                  <span>•</span>
                  <span>{latestArticle.readTime}</span>
                </div>
              </Link>
            </div>
          </section>
        ) : null}

        <section className="bg-white px-4 py-16 dark:bg-gray-800">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white shadow-xl dark:from-blue-700 dark:to-blue-800">
            <h2 className="mb-4 text-3xl font-bold">Ne hagyja elveszni a jogos kovetelest</h2>
            <p className="mb-6 text-xl text-blue-100">
              Ha mar tudja, hogy a jarattal gond volt, a legjobb kovetkezo lepes a konkret igenyellenorzes.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-colors hover:bg-gray-100"
            >
              Ellenorizzem a jaratomat
            </a>
            <p className="mt-4 text-sm text-blue-100">Nincs elore fizetendo dij, csak siker eseten</p>
          </div>
        </section>
      </div>
    </LayoutHu>
  );
}
