import Link from "next/link";
import { AlertCircle, ArrowRight, Clock, Euro, Plane } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { blogArticlesTrSorted } from "@/lib/blogArticlesTr";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const claimHomeUrl =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=homepage_cta&utm_campaign=locale_launch";

export default function TrHomePage() {
  const latestArticle = blogArticlesTrSorted[0];

  return (
    <LayoutTr>
      <SEO
        title="Geciken veya iptal edilen ucus icin EU261 tazminati kontrolu"
        description="Turk yolcular ve Avrupa diasporasi icin EU261 rehberi. Geciken veya iptal edilen ucus sonrasinda tazminat, yeniden rezervasyon ve haklarinizi hizla kontrol edin."
        url="https://problemlot.com/tr"
      />

      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800">
        <section className="px-4 pb-16 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Plane className="h-4 w-4" />
              Turk yolcular ve AB diasporasi icin EU261
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Ucusunuz gecikti veya iptal mi edildi?
              <br />
              EU261 kapsaminda <span className="text-red-600 dark:text-red-400">600 EUR&apos;ya kadar</span> tazminat dogabilir.
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              Avrupa&apos;ya gidip gelen Turk yolcular icin en onemli konu sadece gecikmenin kendisi degil, EU261&apos;in
              hangi ucuslarda gecerli oldugudur. Bu sayfa temel haklari hizla ozetler, ClaimWinger ise somut dosyayi
              kontrol etmenizi saglar.
            </p>

            <ClaimWingerTrSection
              className="mt-8 text-left"
              badge="ClaimWinger Turkce tazminat formu"
              title="Turkce tazminat kontrolunu hemen baslatin"
              description="Ozellikle TR + diaspora EU rotalarinda uygunluk analizi, havayolunun menzili kadar kalkis noktasi, varis gecikmesi ve tasiyici tipine de baglidir. ClaimWinger bunu hizli kontrol etmenizi saglar."
              ctaHref={claimHomeUrl}
              ctaLabel="ClaimWinger TR sayfasini ac"
              placement="tr_home_hero"
            />
          </div>
        </section>

        <section className="border-y border-gray-200 bg-white px-4 py-16 dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto grid max-w-6xl gap-8 text-center md:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold text-red-600 dark:text-red-400">600 EUR</div>
              <div className="text-gray-600 dark:text-gray-300">Tipik en yuksek tazminat seviyesi</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-red-600 dark:text-red-400">3 saat</div>
              <div className="text-gray-600 dark:text-gray-300">Bir cok dosyada varis gecikmesi esigi</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-red-600 dark:text-red-400">TR + EU</div>
              <div className="text-gray-600 dark:text-gray-300">En guclu EU261 pazar kombinasyonlarindan biri</div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
              Hangi konuda yardimci oluyoruz?
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <Link
                href="/tr/gecikmis-ucus"
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
              >
                <Clock className="mb-4 h-12 w-12 text-red-600 dark:text-red-400" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Gecikmis Ucus</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Gecikmenin ne zaman tazminat dogurabilecegini ve varis saatinin neden kritik oldugunu anlayin.
                </p>
              </Link>

              <Link
                href="/tr/iptal-edilen-ucus"
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
              >
                <AlertCircle className="mb-4 h-12 w-12 text-red-600 dark:text-red-400" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Iptal Edilen Ucus</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Iade, yeniden rezervasyon ve olasi para tazminati arasindaki farki hizla gorun.
                </p>
              </Link>

              <Link
                href="/tr/tazminat-hesaplayici"
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
              >
                <Euro className="mb-4 h-12 w-12 text-red-600 dark:text-red-400" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Tazminat Hesaplayici</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  250, 400 ve 600 EUR seviyelerinin hangi rotalarda ortaya ciktigini gorun.
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
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">TR blogunda yeni</h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Turk yolcular ve Avrupa diasporasi icin hazirlanan, EU261, gecikme, iptal ve tazminat odakli yeni rehberler.
                  </p>
                </div>
                <Link
                  href="/tr/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition hover:text-red-700 dark:text-red-400"
                >
                  Tum yazilar
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <Link
                href={`/tr/blog/${latestArticle.slug}`}
                className="block rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
              >
                <div className="mb-3 text-sm font-medium text-red-600 dark:text-red-400">
                  {latestArticle.category}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{latestArticle.title}</h3>
                <p className="mb-5 max-w-3xl text-gray-600 dark:text-gray-300">{latestArticle.excerpt}</p>
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
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-red-600 to-red-700 p-8 text-center text-white shadow-xl dark:from-red-700 dark:to-red-800">
            <h2 className="mb-4 text-3xl font-bold">Hakkinizi bosuna bekletmeyin</h2>
            <p className="mb-6 text-xl text-red-100">
              Elinizde zaten sorunlu bir ucus varsa, en iyi sonraki adim dosyayi somut olarak kontrol etmektir.
            </p>
            <a
              href={claimHomeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                pushClaimWingerEvent("claimwinger_cta_click", {
                  locale: "tr",
                  placement: "tr_home_bottom",
                  destination: claimHomeUrl,
                })
              }
              className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-red-600 shadow-lg transition-colors hover:bg-gray-100"
            >
              Dosyami kontrol et
            </a>
            <p className="mt-4 text-sm text-red-100">On odeme yok, sadece basari halinde ucretlendirme</p>
          </div>
        </section>
      </div>
    </LayoutTr>
  );
}
