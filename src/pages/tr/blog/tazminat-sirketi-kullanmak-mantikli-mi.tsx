import Link from "next/link";
import {
  CheckCircle2,
  Compass,
  HandCoins,
  ShieldAlert,
  Sparkles,
  XCircle,
} from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "tazminat-sirketi-kullanmak-mantikli-mi";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-compensation-company-worth-it&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-compensation-company-worth-it&utm_content=text_link";

export default function TrCompensationCompanyArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Tazminat sirketi kullanmak mantikli mi?"
        description="Tazminat sirketi kullanmak mantikli mi? Turk yolcular icin ne zaman faydali, ne zaman gereksiz olabilecegini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Tazminat sirketi kullanmak mantikli mi?",
            description:
              "Tazminat sirketi kullanmak mantikli mi? Turk yolcular icin ne zaman faydali, ne zaman gereksiz olabilecegini anlatan net rehber.",
            author: {
              "@type": "Organization",
              name: "ProblemLot.com",
            },
            publisher: {
              "@type": "Organization",
              name: "ProblemLot.com",
              logo: {
                "@type": "ImageObject",
                url: "https://problemlot.com/og-image.png",
              },
            },
            datePublished: "2026-04-10",
            dateModified: "2026-04-10",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://problemlot.com/tr/blog/${SLUG}`,
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Tazminat sirketi kullanmak her zaman daha iyi midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Her dosyada araci kullanmak otomatik olarak daha iyi sonuc anlamina gelmez. Dosyanin gucu, kullanicinin zamani ve surecin karmasikligi birlikte degerlendirilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Ne zaman daha mantikli olabilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dosya uzamis, karmasiklasmis, havayolu cevap vermemis veya kullanici sureci kendi basina takip etmek istemiyorsa daha mantikli hale gelebilir.",
                },
              },
              {
                "@type": "Question",
                name: "En buyuk hata nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En buyuk hata, ya her dosyada sirket kullanmayi zorunlu sanmak ya da belirgin sekilde zorlasmis dosyada hic destek dusunmemektir.",
                },
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/tr" className="hover:text-red-600 dark:hover:text-red-400">
              Ana sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/tr/blog" className="hover:text-red-600 dark:hover:text-red-400">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">Tazminat sirketi kullanmak mantikli mi?</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Karar Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Tazminat sirketi kullanmak mantikli mi?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu soru genelde kullanici iki uc noktada sorar: ya hic ugrasmak istemedigi icin, ya da tam tersine
              komisyon vermekten cekindigi icin. Dogru cevap tek yonlu degildir.
              <strong> Bazen mantiklidir, bazen ise gereksiz maliyet yaratir.</strong>
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <HandCoins className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Tazminat sirketi kullanmak bazen mantiklidir, ama her dosyada otomatik olarak en iyi yol degildir.</strong>
              Dosyanin gucu, kullanicinin zamani, surecin karmasikligi ve beklenen net sonuc birlikte okunmalidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger uygun yol kontrolu"
            title="Dosyaniz icin sirket destegi mi, daha hafif bir yol mu mantikli oldugunu kontrol edin"
            description="Bazi claimler sade ve nettir, bazilari ise daha fazla takip ister. ClaimWinger ile dosyanizin agirligini ve mantikli sonraki yolu hizla gorun."
            ctaHref={CLAIM_URL}
            ctaLabel="Dogru yolu kontrol et"
            placement="tr_compensation_company_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Sirket kullanmanin daha mantikli olabilecegi durumlar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Dosya uzamis ve karmasiklasmissa.</li>
                <li>Havayolu cevap vermiyor veya surekli oyalıyorsa.</li>
                <li>Kullanici sureci kendi basina takip etmek istemiyorsa.</li>
                <li>Belge zinciri var ama sureci yonetmek zor geliyorsa.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Sirket kullanmanin gereksiz kalabilecegi durumlar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Dosya sade, net ve iyi belgelenmisse.</li>
                <li>Kullanici temel sureci kendi yurutebilecek durumdaysa.</li>
                <li>Komisyon net sonucu fazla asagi cekiyorsa.</li>
                <li>Henuz cok erken asamadaki basit bir dosyaysa.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Compass className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. En dogru soru “sirket iyi mi?” degil, “bu dosya nasil bir yuk getiriyor?” olmalidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen markaya odaklanir: hangi platform, hangi isim, hangi reklam. Oysa daha gercekci soru
                sudur: bu dosya ne kadar emek, takip ve sabir istiyor? Bazi claimler sadedir ve daha hafif yurutulebilir.
                Bazilari ise redler, gecikmeler ve belge toplama nedeniyle daha agir bir surece donusur.
              </p>
              <p>
                Karar da tam burada verilir: yuksek takip isteyen dosyada destek daha mantikli olabilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Komisyon tek basina yeterli karsilastirma olmaz
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En sik hata, karari sadece yuzde uzerinden vermektir. Oysa dusuk komisyonlu ama zayif takip sunan bir
                yol bazen iyi gorundugu kadar iyi degildir. Tersi de gecerlidir: daha yuksek maliyetli bir yol, kullaniciya
                zaman ve stres tasarrufu saglayabilir.
              </p>
              <p>
                Bu nedenle{" "}
                <a
                  href={CLAIM_URL_TEXT}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    pushClaimWingerEvent("claimwinger_cta_click", {
                      locale: "tr",
                      placement: "tr_compensation_company_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  net sonuca, surec yukune ve dosya agirligina birlikte bakmak
                </a>{" "}
                daha saglikli bir karar verir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Destek ihtiyaci dosyanin seviyesine gore degisir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ilk asamadaki basit bir dosyada araci kullanmak gereksiz olabilir. Ama dosya uzadikca, havayolu cevap
                vermedikce veya red gerekceleri karmasiklastikca dis destek daha anlamli hale gelir. Yani karar sabit
                degildir; dosya olgunlastikca degisebilir.
              </p>
              <p>
                Bu yuzden “asla gerekmez” ya da “her zaman gerekir” gibi iki uclu yaklasimlar zayiftir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, ya her dosyada tazminat sirketini zorunlu sanmak ya da belirgin sekilde zorlasmis dosyada
              hic destek dusunmemektir. Karar, dosyanin yukune ve beklenen net sonuca gore verilmelidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Tazminat sirketi kullanmak her zaman daha iyi midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Dosyanin gucu, karmasikligi ve kullanicinin zamani birlikte degerlendirilmelidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ne zaman daha mantikli olabilir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Dosya uzamis, karmasiklasmis veya kullanici sureci kendi basina takip etmek istemiyorsa daha mantikli hale gelebilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">En buyuk hata nedir?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Her dosyada araci kullanmayi zorunlu sanmak veya zorlasmis bir dosyada hic destek dusunmemektir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
