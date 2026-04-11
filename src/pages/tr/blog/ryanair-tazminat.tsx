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

const SLUG = "ryanair-tazminat";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-ryanair-compensation&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-ryanair-compensation&utm_content=text_link";

export default function TrRyanairCompensationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Ryanair tazminat: ne zaman guclu olur?"
        description="Ryanair tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, point-to-point rotalar ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ryanair tazminat: ne zaman guclu olur?",
            description:
              "Ryanair tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, point-to-point rotalar ve nihai varis mantigini anlatan net rehber.",
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
                name: "Ryanair low-cost oldugu icin dosya daha zayif midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Low-cost etiketi dosyayi otomatik olarak zayif yapmaz. Dosyanin gucu, rota yapisi, aksakligin tipi, belge durumu ve nihai varis sonucu ile belirlenir.",
                },
              },
              {
                "@type": "Question",
                name: "Ryanair dosyalarinda neden nihai varis bu kadar onemlidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku ilk gecikme bazen kucuk gorunse bile, son hedefe gercekte ne zaman varildigi dosyanin agirligini belirler. Asil etki burada ortaya cikabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Ryanair markasi tek basina dosyayi anlamak icin yeterli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Marka tek basina yeterli degildir. Kalkis noktasi, point-to-point rota yapisi, varsa bagli bilet mantigi ve aksakligin sonucu birlikte okunmalidir.",
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
            <span className="text-slate-900 dark:text-white">Ryanair tazminat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Havayolu Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Ryanair tazminat: ne zaman guclu olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ryanair aramalarinda en sik hata, dosyayi sadece low-cost etiketine veya sadece ilk gecikmeye bakarak
              okumaktir. Oysa claim analizi, <strong>point-to-point rota yapisi</strong>, <strong>aksakligin tipi</strong>,
              <strong> kalkis noktasi</strong> ve <strong>nihai varis sonucu</strong> ile birlikte anlam kazanir.
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
              <strong>Ryanair dosyasinin gucu, markadan cok yolculugun gercek sonucuna baglidir.</strong> Gecikme,
              iptal, point-to-point rota bozulmasi veya yeniden planlama; bunlarin hepsi son hedefe ne kadar farkla
              varildigi ile birlikte degerlendirilmelidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Ryanair analizi"
            title="Ryanair dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Ryanair dosyalarinda en buyuk hata, sadece low-cost etiketi veya ilk gecikmeye bakmaktir. Point-to-point rota etkisi ve nihai varis sonucu birlikte okunmalidir."
            ctaHref={CLAIM_URL}
            ctaLabel="Ryanair dosyami analiz et"
            placement="tr_ryanair_comp_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Net sekilde belgelenmis gecikme veya iptal.</li>
                <li>Nihai varista belirgin zaman kaybi.</li>
                <li>Yeni rota veya degisen havalimaninin etkisi.</li>
                <li>E-posta, uygulama ve boarding kayitlarinin durmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Low-cost diye dosyayi zayif sanmak.</li>
                <li>Sadece ilk gecikme dakikasina odaklanmak.</li>
                <li>Degisen havalimanini veya yeni rotayi eksik okumak.</li>
                <li>Gercek nihai varis saatini not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Timer className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Ryanair dosyalarinda ilk soru: yolculuk gercekte ne kadar bozuldu?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen Ryanair gibi point-to-point ve low-cost bir marka gordugunde dosyanin otomatik olarak
                daha basit okunacagini dusunur. Oysa asil soru, aksakligin yolculugu ne kadar bozdugudur. Bazen ilk
                sorun kucuk gorunur ama yeni planlama veya farkli varis noktasi nedeniyle toplam etki buyur.
              </p>
              <p>
                Bu nedenle dosya, sadece kalkis saatine degil, yolculugun tamaminda yarattigi gercek sonuca gore
                okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Point-to-point rotalarda bile nihai varis kilit olculerden biridir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ryanair dosyalarinda ilk bakista sadece tek bir ucus gecikmis gibi gorunebilir. Ama alternatif rota,
                farkli havalimanina inis veya yeniden satin alma ihtiyaci, son hedefe varisi ciddi sekilde
                degistirebilir.
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
                      placement: "tr_ryanair_comp_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  rota etkisini ve nihai varisi birlikte analiz etmek
                </a>{" "}
                tek bir dakika bilgisinden daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Ryanair dosyalarinda marka tek basina karar verdirmez
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Low-cost marka goruldugunde kullanici bazen dosyayi zayif sanir, bazen de tam tersine fazla basit
                yorumlar. Oysa dosyanin gercek gucu, kalkis noktasi, aksakligin tipi, belge durumu ve yolculugun
                sonucunun birlikte okunmasi ile ortaya cikar.
              </p>
              <p>
                Bu yuzden e-posta bildirimleri, boarding bilgileri ve son varis zamani birlikte saklanmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, Ryanair markasina bakip dosyayi ya gereksizce zayif gormek ya da point-to-point yapisini
              fazla basit okumaktir. Karar, rota ve nihai varis mantigi ile verilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ryanair low-cost oldugu icin dosya daha zayif midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Low-cost etiketi dosyayi otomatik olarak zayif yapmaz. Dosyanin gucu, rota yapisi,
                  aksakligin tipi, belge durumu ve nihai varis sonucu ile belirlenir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ryanair dosyalarinda neden nihai varis bu kadar onemlidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku ilk gecikme bazen kucuk gorunse bile, son hedefe gercekte ne zaman varildigi dosyanin
                  agirligini belirler. Asil etki burada ortaya cikabilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ryanair markasi tek basina dosyayi anlamak icin yeterli midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Marka tek basina yeterli degildir. Kalkis noktasi, point-to-point rota yapisi, varsa bagli
                  bilet mantigi ve aksakligin sonucu birlikte okunmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
