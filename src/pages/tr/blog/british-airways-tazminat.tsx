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

const SLUG = "british-airways-tazminat";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-british-airways-compensation&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-british-airways-compensation&utm_content=text_link";

export default function TrBritishAirwaysCompensationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="British Airways tazminat: ne zaman guclu olur?"
        description="British Airways tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, Heathrow baglantilari ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "British Airways tazminat: ne zaman guclu olur?",
            description:
              "British Airways tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, Heathrow baglantilari ve nihai varis mantigini anlatan net rehber.",
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
                name: "British Airways dosyasinda neden kalkis noktasi cok onemlidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku marka tek basina yeterli degildir. Ozellikle UK ve AB ile baglantili rotalarda kalkis noktasi, isleten tasiyici ve yolculugun butun yapisi birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Heathrow uzerinden baglanti bozulursa neye bakilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk gecikmeden cok, son hedefe ne kadar farkla varildigi ve yeni rota ile toplam zaman kaybinin ne oldugu onemlidir. Heathrow baglantilarinda asil agirlik burada ortaya cikar.",
                },
              },
              {
                "@type": "Question",
                name: "British Airways markasi dosyayi otomatik olarak guclu yapar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Dosyanin gucu marka ile degil, aksakligin tipi, rota zinciri, belge durumu ve nihai varis sonucu ile belirlenir.",
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
            <span className="text-slate-900 dark:text-white">British Airways tazminat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Havayolu Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              British Airways tazminat: ne zaman guclu olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              British Airways aramalarinda en sik hata, dosyayi sadece markaya veya sadece Londra baglantisina bakarak
              okumaktir. Oysa claim analizi, <strong>kalkis noktasi</strong>, <strong>rota zinciri</strong>,
              <strong> aksakligin tipi</strong> ve <strong>nihai varis sonucu</strong> ile birlikte anlam kazanir.
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
              <strong>British Airways dosyasinin gucu, markadan cok yolculugun gercek sonucuna baglidir.</strong>{" "}
              Gecikme, iptal, Heathrow uzerinden kopan baglanti veya yeniden yonlendirme; bunlarin hepsi son hedefe ne
              kadar farkla varildigi ile birlikte degerlendirilmelidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger British Airways analizi"
            title="British Airways dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="British Airways dosyalarinda en buyuk hata, sadece markaya veya ilk gecikmeye bakmaktir. Heathrow baglantisi ve nihai varis sonucu birlikte okunmalidir."
            ctaHref={CLAIM_URL}
            ctaLabel="British Airways dosyami analiz et"
            placement="tr_british_airways_comp_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Net sekilde belgelenmis gecikme veya iptal.</li>
                <li>Heathrow veya baska bir noktada kopan baglanti.</li>
                <li>Nihai varista belirgin zaman kaybi.</li>
                <li>Yeni rota, e-posta ve boarding kayitlarinin durmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Markaya bakip dosyayi otomatik guclu sanmak.</li>
                <li>Sadece ilk gecikme dakikasina odaklanmak.</li>
                <li>Heathrow baglanti etkisini eksik okumak.</li>
                <li>Gercek nihai varis saatini not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Timer className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. British Airways dosyalarinda ilk soru: rota hangi kosullarda bozuldu?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen British Airways gibi guclu bir marka gordugunde dosyanin kendiliginden net oldugunu
                dusunur. Oysa asil soru, yolculugun hangi noktada ve ne kadar bozuldugudur. Bazen ilk sorun kucuk
                gorunur ama baglanti koptugunda son hedefe varis ciddi sekilde kayar.
              </p>
              <p>
                Bu nedenle dosya, sadece ucak kalkti mi kalkmadi mi diye degil, butun yolculuk zinciri uzerinden
                okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Heathrow baglantilari sonucu buyutebilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                British Airways dosyalarinda Heathrow baglantisi kritik olabilir. Ilk gecikme tek basina kucuk
                gorunse bile, sonraki ucusun kacirilmasi veya yeniden yonlendirme ihtiyaci toplam sonucu cok daha agir
                hale getirebilir.
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
                      placement: "tr_british_airways_comp_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  baglanti zincirini ve nihai varisi birlikte analiz etmek
                </a>{" "}
                tek bir dakika bilgisinden daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Nihai varis British Airways dosyasinda kilit olculerden biridir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bircok yolcu ilk gecikmeye odaklanir, ama dosyanin asil agirligi son hedefe ne zaman vardiginda ortaya
                cikar. Bazen yeni rota, havalimaninda bekleme veya kopan baglanti nedeniyle toplam zaman kaybi buyur.
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
              En buyuk hata, British Airways markasina bakip dosyayi ya gereksizce cok guclu gormek ya da Londra
              baglantisini fazla basit okumaktir. Karar, rota ve nihai varis mantigi ile verilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  British Airways dosyasinda neden kalkis noktasi cok onemlidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku marka tek basina yeterli degildir. Ozellikle UK ve AB ile baglantili rotalarda kalkis noktasi,
                  isleten tasiyici ve yolculugun butun yapisi birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Heathrow uzerinden baglanti bozulursa neye bakilir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk gecikmeden cok, son hedefe ne kadar farkla varildigi ve yeni rota ile toplam zaman kaybinin ne
                  oldugu onemlidir. Heathrow baglantilarinda asil agirlik burada ortaya cikar.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  British Airways markasi dosyayi otomatik olarak guclu yapar mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Dosyanin gucu marka ile degil, aksakligin tipi, rota zinciri, belge durumu ve nihai varis
                  sonucu ile belirlenir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
