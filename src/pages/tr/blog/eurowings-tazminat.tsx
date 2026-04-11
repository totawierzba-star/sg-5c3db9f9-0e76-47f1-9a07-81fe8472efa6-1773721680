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

const SLUG = "eurowings-tazminat";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-eurowings-compensation&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-eurowings-compensation&utm_content=text_link";

export default function TrEurowingsCompensationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Eurowings tazminat: ne zaman guclu olur?"
        description="Eurowings tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, point-to-point rotalar ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Eurowings tazminat: ne zaman guclu olur?",
            description:
              "Eurowings tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, point-to-point rotalar ve nihai varis mantigini anlatan net rehber.",
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
                name: "Eurowings dosyasinda en kritik olculerden biri nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik olculerden biri nihai varistir. Kisa veya point-to-point rotalarda bile son hedefe ne kadar farkla varildigi dosyanin gucunu belirler.",
                },
              },
              {
                "@type": "Question",
                name: "Eurowings dosyasinda sadece ilk gecikme yeterli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Ilk gecikme bazen dosyanin sadece bir parcasidir. Yeni rota, toplam bekleme ve son varis sonucu birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Kisa rota oldugu icin dosya otomatik olarak zayif midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Kisa veya basit gorunen rota otomatik olarak zayif dosya anlamina gelmez. Belgelenmis nihai varis ve kaybin buyuklugu hala cok onemlidir.",
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
            <span className="text-slate-900 dark:text-white">Eurowings tazminat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Havayolu Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Eurowings tazminat: ne zaman guclu olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Eurowings aramalarinda kullanicilar genelde dosyayi “kisa rota”, “direkt ucus” veya “basit problem”
              gibi etiketlerle cok hizli okur. Oysa claim analizi, <strong>rota basit gorunse bile</strong>,
              <strong> aksakligin tipine</strong> ve <strong>nihai varis sonucuna</strong> gore degisir.
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
              <strong>Eurowings dosyasinin gucu, rotanin basit gorunmesinden cok sonucuna baglidir.</strong> Gecikme,
              iptal veya yeniden yonlendirme sonrasinda yolcunun son hedefe ne kadar farkla vardigi temel olculerden
              biridir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Eurowings analizi"
            title="Eurowings dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Eurowings dosyalarinda en buyuk hata, kisa veya point-to-point rota gordugu icin claimi fazla basit okumaktir. Nihai varis ve toplam kaybi birlikte analiz etmek gerekir."
            ctaHref={CLAIM_URL}
            ctaLabel="Eurowings dosyami analiz et"
            placement="tr_eurowings_comp_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Net sekilde belgelenmis gecikme veya iptal.</li>
                <li>Yeni rota veya ciddi bekleme ihtiyaci.</li>
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
                <li>Kisa rota diye dosyayi hafife almak.</li>
                <li>Sadece ilk gecikme dakikasina odaklanmak.</li>
                <li>Yeni rota veya toplam beklemeyi atlamak.</li>
                <li>Gercek nihai varis saatini not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Timer className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Eurowings dosyalarinda ilk soru: sonuca ne kadar etki etti?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen Eurowings gibi point-to-point markalarda dosyayi cok sade varsayar. Oysa bazen ilk
                bakista basit gorunen bir gecikme, sonuca ciddi sekilde etki eder. Yolculuk ayni gun bitse bile
                nihai varis farki claim agirligini degistirebilir.
              </p>
              <p>
                Yani “kisa rota = zayif dosya” gibi bir denklem guvenilir degildir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Gecikme, iptal ve yeni rota ayni sekilde okunmaz
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Eurowings dosyalarinda bazen sadece gecikme vardir, bazen ise yeniden yonlendirme veya iptal sonrasi
                yeni plan ortaya cikar. Bu farklar, dosyanin agirligini ciddi sekilde degistirir. Bu nedenle sadece
                ilk tabloya degil, tum sonuc zincirine bakilmalidir.
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
                      placement: "tr_eurowings_comp_article_text_link",
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
              3. Nihai varis, Eurowings dosyalarinda da kilit olculerden biridir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanicilar bazen direkt ucus oldugu icin sonucun daha kolay okunacagini varsayar. Ama direkt veya
                kisa rota olsa bile son hedefe ne zaman varildigi claimin omurgasini olusturur.
              </p>
              <p>
                Bu yuzden boarding bilgisi, yeni saatler ve gercek varis zamani birlikte saklanmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, kisa veya basit gorunen Eurowings rotasini otomatik olarak dusuk agirlikli sanmaktir.
              Karar, nihai varis ve toplam kayip mantigi ile verilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Eurowings dosyasinda en kritik olculerden biri nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik olculerden biri nihai varistir. Kisa veya point-to-point rotalarda bile son hedefe ne kadar
                  farkla varildigi dosyanin gucunu belirler.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Eurowings dosyasinda sadece ilk gecikme yeterli midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Ilk gecikme bazen dosyanin sadece bir parcasidir. Yeni rota, toplam bekleme ve son varis sonucu birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Kisa rota oldugu icin dosya otomatik olarak zayif midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Kisa veya basit gorunen rota otomatik olarak zayif dosya anlamina gelmez.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
