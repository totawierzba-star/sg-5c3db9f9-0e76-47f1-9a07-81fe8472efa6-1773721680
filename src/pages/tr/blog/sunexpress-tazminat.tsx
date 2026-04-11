import Link from "next/link";
import {
  CheckCircle2,
  PlaneTakeoff,
  ShieldAlert,
  Sparkles,
  Timer,
  XCircle,
} from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "sunexpress-tazminat";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-sunexpress-compensation&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-sunexpress-compensation&utm_content=text_link";

export default function TrSunExpressCompensationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="SunExpress tazminat: ne zaman guclu olur?"
        description="SunExpress tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, baglanti kaybi ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "SunExpress tazminat: ne zaman guclu olur?",
            description:
              "SunExpress tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, baglanti kaybi ve nihai varis mantigini anlatan net rehber.",
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
            datePublished: "2026-04-11",
            dateModified: "2026-04-11",
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
                name: "SunExpress tazminat dosyasinda en kritik olcu nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik olculerden biri nihai varistir. Gecikme, iptal veya yeni rota yuzunden yolcunun son hedefe ne kadar farkla ulastigi cok onemlidir.",
                },
              },
              {
                "@type": "Question",
                name: "SunExpress markasi tek basina dosyayi guclu yapar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Marka tek basina yeterli degildir. Asil analiz, rota yapisi, aksakligin tipi ve belgelenmis sonuc uzerinden yapilir.",
                },
              },
              {
                "@type": "Question",
                name: "Iptal ile gecikme ayni sekilde mi okunur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Iptal, gecikme ve baglanti kaybi farkli agirliklarla degerlendirilir. Yeni rota ve toplam zaman kaybi sonucu ciddi sekilde degistirebilir.",
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
            <span className="text-slate-900 dark:text-white">SunExpress tazminat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Havayolu Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              SunExpress tazminat: ne zaman guclu olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              SunExpress, Turk yolcular ve Avrupa diasporasi icin cok dogal bir havayolu aramasidir. Bu nedenle
              kullanici sadece “hak var mi?” diye degil, daha dogrudan
              <strong> “SunExpress dosyam gercekte ne kadar guclu?”</strong> diye dusunur. Cevap, marka adindan cok
              rota ve sonuca baglidir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-11</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <PlaneTakeoff className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>SunExpress dosyasinin gucu, markadan cok aksakligin sonucu ile okunur.</strong> Gecikme, iptal,
              baglanti kaybi veya yeni rota; bunlarin hepsi nihai varis ve toplam zaman kaybi ile birlikte
              degerlendirilmelidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger SunExpress analizi"
            title="SunExpress dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="SunExpress dosyalarinda en buyuk hata, sadece marka veya tek bir gecikme bilgisi uzerinden hizli karar vermektir. Nihai varis ve rota etkisini birlikte okumak gerekir."
            ctaHref={CLAIM_URL}
            ctaLabel="SunExpress dosyami analiz et"
            placement="tr_sunexpress_comp_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Net sekilde belgelenmis gecikme veya iptal.</li>
                <li>Baglanti kaybi veya yeni rota ihtiyaci.</li>
                <li>Nihai varista belirgin zaman kaybi.</li>
                <li>E-posta, SMS ve boarding kayitlarinin durmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece ilk gecikme dakikasina bakmak.</li>
                <li>Iptal varsa yeni rotayi incelememek.</li>
                <li>Baglanti zincirini tam okumamak.</li>
                <li>Gercek nihai varis saatini not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Timer className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. SunExpress dosyalarinda asil soru: sorun yolculugu ne kadar bozdu?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                SunExpress dosyalarinda kullanici bazen markaya bakip hizli bir sonuc bekler. Oysa dogru soru,
                gecikmenin veya iptalin yolculugun tamamini ne kadar bozdugudur. Bazen kucuk gorunen ilk sorun, son
                hedefe varista cok buyuk kayba donusebilir.
              </p>
              <p>
                Bu nedenle marka yalnizca baglamdir; dosyanin agirligini belirleyen sey sonucudur.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Gecikme, iptal ve baglanti kaybi birbirinden farkli agirlik tasir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                SunExpress dosyalarinda ilk bakista yalnizca bir gecikme gorunebilir. Ama baglanti kaybi, yeni rota
                veya geceleme gereksinimi devreye girdiginde toplam kayip buyur. Bu nedenle aksakligin etiketi kadar,
                yarattigi sonuc da analiz edilmelidir.
              </p>
              <p>
                Bu noktada{" "}
                <a
                  href={CLAIM_URL_TEXT}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    pushClaimWingerEvent("claimwinger_cta_click", {
                      locale: "tr",
                      placement: "tr_sunexpress_comp_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  olay zincirini ve nihai varisi birlikte analiz etmek
                </a>{" "}
                yuzeysel okumadan daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Nihai varis, SunExpress dosyalarinda ilk bakista gorundugunden daha onemlidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bircok yolcu ilk kalkis ekranina bakar, ama claimin gercek agirligi son hedefe ne zaman varildiginda
                ortaya cikar. Bazen ilk sorun kucuktur, fakat toplam seyahat sonucu ciddi sekilde bozulur.
              </p>
              <p>
                Bu nedenle son boarding bilgisi, yeni rota varsa onun ayrintilari ve gercek varis saati birlikte
                saklanmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, sadece marka ya da sadece ilk dakikalara bakmaktir. SunExpress dosyasinin gercek gucu,
              rota ve nihai varis mantigi ile anlasilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  SunExpress tazminat dosyasinda en kritik olcu nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik olculerden biri nihai varistir. Son hedefe ne zaman varildigi dosyanin agirligini ciddi
                  sekilde etkileyebilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  SunExpress markasi tek basina dosyayi guclu yapar mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Marka tek basina yeterli degildir. Asil analiz rota, aksaklik tipi ve belgelenmis sonuc uzerinden yapilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Iptal ile gecikme ayni sekilde mi okunur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Iptal, gecikme ve baglanti kaybi farkli agirliklarla degerlendirilir. Yeni rota ve toplam
                  zaman kaybi sonucu ciddi sekilde degistirebilir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
