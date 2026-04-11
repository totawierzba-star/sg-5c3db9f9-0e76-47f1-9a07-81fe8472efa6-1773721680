import Link from "next/link";
import { CheckCircle2, Clock3, Euro, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "istanbul-viyana-ucusunda-gecikme-tazminati-ne-zaman-dogar";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-istanbul-vienna-delay&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-istanbul-vienna-delay&utm_content=text_link";

export default function TrIstanbulViennaDelayArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Istanbul-Viyana ucusunda gecikme tazminati ne zaman dogar?"
        description="Istanbul-Viyana ucusunda gecikme tazminati ne zaman dogar? Turk yolcular icin nihai varis, rota mantigi ve claim gucunu anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Istanbul-Viyana ucusunda gecikme tazminati ne zaman dogar?",
            description:
              "Istanbul-Viyana ucusunda gecikme tazminati ne zaman dogar? Turk yolcular icin nihai varis, rota mantigi ve claim gucunu anlatan net rehber.",
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
                name: "Istanbul-Viyana ucusunda gecikmede ilk neye bakilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk olarak yolcunun Viyana'ya gercekte ne zaman vardigina, hangi havayolunun ucusu islettigine ve gecikmenin tum rota uzerindeki etkisine bakilmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Istanbul-Viyana rotasinda sadece dakika sayisi yeterli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Dakika sayisi onemlidir ama tek basina yeterli degildir. Nihai varis, rota yapisi ve hukuki kapsam birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Istanbul-Viyana gecikme dosyasinda hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Boarding pass, PNR, uygulama ve e-posta ekranlari, gecikme bildirimleri ve son hedefe gercek varis saatini gosteren kayitlar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Istanbul-Viyana gecikme rehberi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Rota Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Istanbul-Viyana ucusunda gecikme tazminati ne zaman dogar?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Istanbul-Viyana rotasi, hem is hem aile hem de aktarmali seyahatler icin guclu bir arama niyeti tasir.
              Bu hatta dogru analiz, sadece kalkis tahtasindaki dakika sayisina degil, <strong>nihai varis</strong>,
              <strong> isleten tasiyici</strong> ve <strong>tum rota etkisine</strong> bakilarak yapilir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Clock3 className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Istanbul-Viyana hattinda gecikme dosyasinin kalbi, Viyana'ya gercek varis saatidir.</strong>
              Sadece kalkistaki gecikmeye bakmak yeterli degildir; esas analiz, final zaman kaybi ve tum yolculuk
              etkisi uzerinden kurulur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Istanbul-Viyana gecikme analizi"
            title="Istanbul-Viyana gecikme dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, sadece dakikaya bakarak karar vermektir. Nihai varis, rota zinciri ve belge duzeni sonucu ciddi sekilde degistirebilir."
            ctaHref={CLAIM_URL}
            ctaLabel="Istanbul-Viyana dosyami kontrol et"
            placement="tr_istanbul_vienna_delay_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Viyana'ya gercek varis saatinin net belgelenmesi.</li>
                <li>Gecikmenin tum rota etkisinin kaydedilmesi.</li>
                <li>E-posta, uygulama ve ekran goruntulerinin saklanmasi.</li>
                <li>Yeni rota veya saat degisikligi varsa bunun da kaydi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece Istanbul kalkis gecikmesine bakmak.</li>
                <li>Isleten tasiyiciyi netlestirmemek.</li>
                <li>Viyana final saatini kaydetmemek.</li>
                <li>Mail ve uygulama bildirimlerini saklamamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Istanbul-Viyana dosyasinda ilk soru: Viyana'ya ne zaman vardiniz?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici cogu zaman sadece kalkis saatine odaklanir. Oysa bu rotada asıl kritik veri, yolcunun
                Viyana'ya gercekte ne zaman vardigidir. Cunku dosyanin agirligi, final zaman kaybi uzerinden daha net
                gorunur.
              </p>
              <p>Bu nedenle ilk bakilacak sey, ekrandaki ilk dakika degil, son varis sonucudur.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Isleten tasiyici ve rota mantigi sonucu degistirebilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Istanbul-Viyana rotasinda yuzeysel bakis yeterli olmaz. Hangi havayolunun ucusu gercekte islettigi,
                rotanin duz mu yoksa zincirli mi oldugu ve yolculugun nereye baglandigi dosyanin gucunu etkileyebilir.
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
                      placement: "tr_istanbul_vienna_delay_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  nihai varis ve rota mantigini birlikte incelemek
                </a>{" "}
                daha gercekci sonuc verir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Dakika sayisi onemli, ama tek basina yetmez
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gecikme dosyalarinda kullanicilar hakli olarak saat ve dakika sorusuna odaklanir. Ancak Istanbul-Viyana
                gibi rotalarda bu veri, tek basina butun resmi anlatmaz. Nihai varis, yeni saatler ve varsa tum rota
                etkisi birlikte okunmalidir.
              </p>
              <p>
                Kisa yol yoktur; iyi dosya, iyi zaman kaydi ve iyi belge zinciriyle guclenir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-amber-800 dark:text-amber-300">
              <ShieldAlert className="h-6 w-6" />
              Pratik kontrol listesi
            </h2>
            <ul className="space-y-3 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <li>Boarding pass ve PNR kaydini saklayin.</li>
              <li>Gecikme bildirimlerinin ekran goruntusunu alin.</li>
              <li>Viyana'ya gercek varis saatinizi not edin.</li>
              <li>Varsa yeni saat veya rota degisikliklerini kaydedin.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Istanbul-Viyana ucusunda gecikmede ilk neye bakilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk olarak yolcunun Viyana'ya gercekte ne zaman vardigina, hangi havayolunun ucusu islettigine ve
                  gecikmenin tum rota uzerindeki etkisine bakilmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Istanbul-Viyana rotasinda sadece dakika sayisi yeterli midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Dakika sayisi onemlidir ama tek basina yeterli degildir. Nihai varis, rota yapisi ve hukuki
                  kapsam birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Istanbul-Viyana gecikme dosyasinda hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Boarding pass, PNR, uygulama ve e-posta ekranlari, gecikme bildirimleri ve son hedefe gercek varis
                  saatini gosteren kayitlar mutlaka saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
