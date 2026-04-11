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

const SLUG = "wizz-air-tazminat";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-wizz-air-compensation&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-wizz-air-compensation&utm_content=text_link";

export default function TrWizzAirCompensationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Wizz Air tazminat: ne zaman guclu olur?"
        description="Wizz Air tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, app bildirimleri ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Wizz Air tazminat: ne zaman guclu olur?",
            description:
              "Wizz Air tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, app bildirimleri ve nihai varis mantigini anlatan net rehber.",
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
                name: "Wizz Air low-cost oldugu icin dosya otomatik olarak zayif midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Low-cost etiketi tek basina dosyayi zayif yapmaz. Dosyanin gucu aksakligin tipi, belge durumu, rota etkisi ve nihai varis sonucu ile belirlenir.",
                },
              },
              {
                "@type": "Question",
                name: "Wizz Air dosyalarinda uygulama ekranlari neden bu kadar onemlidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku saat degisimi, iptal, yeni rota veya alternatif teklif gibi kritik bilgiler bazen en net sekilde uygulama ekranlarinda gorulur. Bu ekranlar dosyanin okunusunu guclendirebilir.",
                },
              },
              {
                "@type": "Question",
                name: "Wizz Air markasi tek basina dosyayi anlamak icin yeterli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Marka tek basina yeterli degildir. Kalkis noktasi, rota yapisi, uygulama bildirim zinciri ve nihai varis sonucu birlikte okunmalidir.",
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
            <span className="text-slate-900 dark:text-white">Wizz Air tazminat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Havayolu Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Wizz Air tazminat: ne zaman guclu olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Wizz Air aramalarinda en sik hata, dosyayi sadece low-cost etiketine veya sadece ilk gecikmeye bakarak
              okumaktir. Oysa claim analizi, <strong>uygulama bildirim zinciri</strong>, <strong>aksakligin tipi</strong>,
              <strong> rota etkisi</strong> ve <strong>nihai varis sonucu</strong> ile birlikte anlam kazanir.
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
              <strong>Wizz Air dosyasinin gucu, markadan cok yolculugun gercek sonucuna baglidir.</strong> Gecikme,
              iptal, saat degisikligi veya yeni planlama; bunlarin hepsi son hedefe ne kadar farkla varildigi ile
              birlikte degerlendirilmelidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Wizz Air analizi"
            title="Wizz Air dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Wizz Air dosyalarinda en buyuk hata, sadece low-cost etiketine veya ilk gecikmeye bakmaktir. Uygulama bildirimleri, rota etkisi ve nihai varis sonucu birlikte okunmalidir."
            ctaHref={CLAIM_URL}
            ctaLabel="Wizz Air dosyami analiz et"
            placement="tr_wizz_air_comp_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Net sekilde belgelenmis gecikme veya iptal.</li>
                <li>App ekranlari, e-posta ve bildirim zincirinin durmasi.</li>
                <li>Nihai varista belirgin zaman kaybi.</li>
                <li>Yeni rota veya degisen planin net kaydi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Low-cost diye dosyayi zayif sanmak.</li>
                <li>Uygulama ekranlarini kaydetmemek.</li>
                <li>Sadece ilk gecikme dakikasina odaklanmak.</li>
                <li>Gercek nihai varis saatini not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Timer className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Wizz Air dosyalarinda ilk soru: yolculuk gercekte ne kadar bozuldu?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen Wizz Air gibi bir markada dosyanin ya otomatik zayif ya da cok basit oldugunu
                dusunur. Oysa asil soru, aksakligin yolculugu ne kadar bozdugudur. Bazen ilk sorun kucuk gorunur ama
                degisen planlama veya yeni rota nedeniyle toplam etki buyur.
              </p>
              <p>
                Bu nedenle dosya, sadece ilk bildirimle degil, yolculugun tamaminda yarattigi sonucla okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Wizz Air dosyalarinda uygulama zinciri sonucu netlestirir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Wizz Air kullanicisi icin bircok kritik bilgi uygulama akisinda gorunur. Saat kaymasi, yeni teklif,
                degisen rota veya iptal bilgisi bazen en temiz sekilde burada yakalanir. Bu nedenle app ekranlari
                dosyanin okunusunu ciddi sekilde guclendirebilir.
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
                      placement: "tr_wizz_air_comp_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  uygulama bildirimlerini ve nihai varisi birlikte analiz etmek
                </a>{" "}
                tek bir dakika bilgisinden daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Marka tek basina degil, sonuc ve belge duzeni belirleyicidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Low-cost marka goruldugunde kullanici bazen dosyayi zayif sanir, bazen de fazla basit yorumlar. Oysa
                dosyanin gercek gucu, aksakligin tipi, app ve e-posta kayitlari, rota etkisi ve yolculugun son
                sonucunun birlikte okunmasi ile ortaya cikar.
              </p>
              <p>
                Bu yuzden boarding bilgileri, uygulama ekranlari ve son varis zamani birlikte saklanmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, Wizz Air markasina bakip dosyayi ya gereksizce zayif gormek ya da uygulama ve rota
              zincirini fazla basit okumaktir. Karar, belge duzeni ve nihai varis mantigi ile verilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Wizz Air low-cost oldugu icin dosya otomatik olarak zayif midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Low-cost etiketi tek basina dosyayi zayif yapmaz. Dosyanin gucu aksakligin tipi, belge
                  durumu, rota etkisi ve nihai varis sonucu ile belirlenir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Wizz Air dosyalarinda uygulama ekranlari neden bu kadar onemlidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku saat degisimi, iptal, yeni rota veya alternatif teklif gibi kritik bilgiler bazen en net
                  sekilde uygulama ekranlarinda gorulur. Bu ekranlar dosyanin okunusunu guclendirebilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Wizz Air markasi tek basina dosyayi anlamak icin yeterli midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Marka tek basina yeterli degildir. Kalkis noktasi, rota yapisi, uygulama bildirim zinciri ve
                  nihai varis sonucu birlikte okunmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
