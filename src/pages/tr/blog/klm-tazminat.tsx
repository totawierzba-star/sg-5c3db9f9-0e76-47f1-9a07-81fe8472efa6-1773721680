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

const SLUG = "klm-tazminat";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-klm-compensation&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-klm-compensation&utm_content=text_link";

export default function TrKlmCompensationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="KLM tazminat: ne zaman guclu olur?"
        description="KLM tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, baglanti kaybi ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "KLM tazminat: ne zaman guclu olur?",
            description:
              "KLM tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, baglanti kaybi ve nihai varis mantigini anlatan net rehber.",
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
                name: "KLM dosyasinda en kritik olculerden biri nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik olculerden biri nihai varistir. Ozellikle Amsterdam uzerinden kurulan baglantili yolculuklarda son hedefe ne kadar farkla varildigi dosyanin agirligini belirler.",
                },
              },
              {
                "@type": "Question",
                name: "KLM markasi tek basina dosyayi guclu yapar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Marka tek basina yeterli degildir. Rota yapisi, aksakligin tipi ve belgelenmis sonuc birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "KLM dosyasinda sadece ilk gecikme yeterli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Ilk gecikme bazen kucuk gorunur ama baglanti kopmasi, yeniden yonlendirme veya toplam zaman kaybi dosyayi cok daha agirlastirabilir.",
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
            <span className="text-slate-900 dark:text-white">KLM tazminat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Havayolu Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              KLM tazminat: ne zaman guclu olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              KLM aramalarinda kullanicilarin en buyuk yanilgisi, markanin hub yapisi yuzunden dosyayi otomatik olarak
              “zaten duzgun okunur” sanmaktir. Oysa claim analizi, <strong>markadan</strong> cok,
              <strong> rota zincirinden</strong>, <strong>aksakligin tipinden</strong> ve
              <strong> nihai varis sonucundan</strong> baslar.
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
              <strong>KLM dosyasinin gucu, markadan cok yolculugun sonucu ile okunur.</strong> Gecikme, iptal,
              baglanti kaybi veya yeniden yonlendirme; bunlarin hepsi son hedefe ne kadar farkla vardiginizla birlikte
              degerlendirilmelidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger KLM analizi"
            title="KLM dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="KLM dosyalarinda en buyuk hata, sadece markaya veya tek bir gecikme bilgisine bakmaktir. Nihai varis ve rota etkisini birlikte okumak gerekir."
            ctaHref={CLAIM_URL}
            ctaLabel="KLM dosyami analiz et"
            placement="tr_klm_comp_article_embed_high"
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
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece markaya bakip hizli sonuc cikarmak.</li>
                <li>Sadece ilk gecikme dakikasina odaklanmak.</li>
                <li>Amsterdam uzerinden giden zinciri tam okumamak.</li>
                <li>Gercek nihai varis saatini not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Timer className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. KLM dosyalarinda asil soru: yolculuk ne kadar bozuldu?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen hub ve legacy marka gordugunde dosyanin otomatik olarak duz okunacagini dusunur. Oysa
                gercek soru, aksakligin yolculugu ne kadar bozdugudur. Bazen ilk sorun kucuk gorunur ama baglanti
                koptugunda son hedefe varis ciddi sekilde kayar.
              </p>
              <p>
                Bu nedenle ilk bakista sade gorunen KLM dosyasi bile sonucta cok daha agir olabilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Gecikme, iptal ve baglanti kaybi farkli agirliklarla okunur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                KLM dosyalarinda bazen bir ilk gecikme gorunur, bazen iptal veya yeni rota ortaya cikar. Bu etiketlerin
                her biri farkli sonuclar uretir. Bu nedenle dosya tek bir olay olarak degil, butun aksaklik zinciri
                olarak degerlendirilmelidir.
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
                      placement: "tr_klm_comp_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  olay zincirini ve nihai varisi birlikte analiz etmek
                </a>{" "}
                tek satirlik yorumdan daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Nihai varis, KLM dosyalarinda kilit olculerden biridir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bircok yolcu ilk gecikmeye odaklanir, ama dosyanin asil agirligi son hedefe ne zaman vardiginda ortaya
                cikar. Bazen yeniden yonlendirme veya baglanti kaybi nedeniyle toplam zaman kaybi ciddi sekilde buyur.
              </p>
              <p>
                Bu yuzden son boarding bilgisi, yeni rota varsa onun ayrintilari ve gercek varis saati birlikte
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
              En buyuk hata, KLM markasina bakip dosyayi ya gereksizce cok guclu gormek ya da hub zincirini fazla
              basit okumaktir. Karar, rota ve nihai varis mantigi ile verilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  KLM dosyasinda en kritik olculerden biri nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik olculerden biri nihai varistir. Ozellikle Amsterdam uzerinden kurulan baglantili yolculuklarda son hedefe ne kadar farkla varildigi dosyanin agirligini belirler.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  KLM markasi tek basina dosyayi guclu yapar mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Marka tek basina yeterli degildir. Rota yapisi, aksakligin tipi ve belgelenmis sonuc birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  KLM dosyasinda sadece ilk gecikme yeterli midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Ilk gecikme bazen kucuk gorunur ama baglanti kopmasi, yeniden yonlendirme veya toplam zaman kaybi dosyayi cok daha agirlastirabilir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
