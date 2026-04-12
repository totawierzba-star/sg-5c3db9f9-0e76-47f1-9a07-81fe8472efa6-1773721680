import Link from "next/link";
import { CheckCircle2, Clock3, Euro, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "paris-doha-ucusunda-gecikme-tazminati-ne-zaman-dogar";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-paris-doha-delay&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-paris-doha-delay&utm_content=text_link";

export default function TrParisDohaDelayArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Paris-Doha ucusunda gecikme tazminati ne zaman dogar?"
        description="Paris-Doha ucusunda gecikme tazminati ne zaman dogar? Turk yolcular icin Gulf hub mantigi, nihai varis ve isleten tasiyici etkisini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Paris-Doha ucusunda gecikme tazminati ne zaman dogar?",
            description:
              "Paris-Doha ucusunda gecikme tazminati ne zaman dogar? Turk yolcular icin Gulf hub mantigi, nihai varis ve isleten tasiyici etkisini anlatan net rehber.",
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
            datePublished: "2026-04-12",
            dateModified: "2026-04-12",
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
                name: "Paris-Doha ucusunda gecikmede ilk neye bakilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk olarak yolcunun Doha'ya gercekte ne zaman vardigina, hangi havayolunun ucusu islettigine ve gecikmenin tum rota etkisine bakilmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu hatta Doha sadece aktarma noktasiysa yine de nihai varis onemli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. Doha bir hub oldugu icin kisa bir gecikme bile sonraki ucusu etkileyebilir. Bu nedenle rota zinciri ve final zaman kaybi birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Paris-Doha gecikme dosyasinda hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Boarding pass, PNR, e-posta ve uygulama ekranlari, gecikme bildirimleri, varsa yeni rota detaylari ve Doha'ya gercek varis saatini gosteren kayitlar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Paris-Doha gecikme rehberi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Rota Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Paris-Doha ucusunda gecikme tazminati ne zaman dogar?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Paris-Doha rotasi, hem long-haul hem de Gulf hub baglantilari nedeniyle guclu bir arama niyeti tasir.
              Bu hatta dogru analiz, sadece kalkis tahtasindaki dakika sayisina degil,
              <strong> nihai varis</strong>, <strong>isleten tasiyici</strong> ve
              <strong> baglanti zinciri etkisine</strong> bakilarak yapilir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-12</span>
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
              <strong>Paris-Doha hattinda gecikme dosyasinin kalbi, Doha'ya gercek varis saatidir.</strong>
              Doha bir hub oldugu icin kucuk bir kayma bile sonraki plani bozabilir; bu yuzden dosyanin gucu final
              zaman kaybi ve tum rota etkisi uzerinden okunur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Paris-Doha gecikme analizi"
            title="Paris-Doha gecikme dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu tip Gulf hub dosyalarinda en buyuk hata, sadece ilk segment dakikasina bakmaktir. Nihai varis, aktarma zinciri ve belge duzeni sonucu ciddi sekilde degistirebilir."
            ctaHref={CLAIM_URL}
            ctaLabel="Paris-Doha dosyami kontrol et"
            placement="tr_paris_doha_delay_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Doha'ya gercek varis saatinin net belgelenmesi.</li>
                <li>Gecikmenin tum baglanti zinciri etkisinin kaydedilmesi.</li>
                <li>Varsa kacan sonraki ucusun belgelenmesi.</li>
                <li>E-posta, uygulama ve ekran goruntulerinin korunmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece Paris kalkis dakikasina bakmak.</li>
                <li>Doha'nin hub etkisini ve sonraki plani okumamak.</li>
                <li>Isleten tasiyiciyi netlestirmemek.</li>
                <li>Yeni rota ve ek beklemeleri belgelememek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Paris-Doha dosyasinda ilk soru: Doha'ya ne zaman vardiniz?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici cogu zaman sadece Paris kalkis gecikmesine odaklanir. Oysa bu rotada asil kritik veri,
                yolcunun Doha&apos;ya gercekte ne zaman vardigidir. Cunku dosyanin agirligi, final zaman kaybi uzerinden
                daha net gorunur.
              </p>
              <p>
                Doha bir hub oldugu icin, gorunurde kucuk bir gecikme bile sonraki ucusu, bekleme suresini ve tum plani
                ciddi sekilde degistirebilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Hub mantigi ve isleten tasiyici sonucu degistirebilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Paris-Doha hattinda yuzeysel bakis yeterli olmaz. Ucusun dogrudan mi yoksa zincirli mi oldugu, hangi
                havayolunun onu gercekte islettigi ve yolculugun Doha sonrasi baska bir hedefe baglanip baglanmadigi
                sonucu etkileyebilir.
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
                      placement: "tr_paris_doha_delay_article_text_link",
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
              3. Hub rotalarda dakika onemli, ama tek basina yetmez
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gecikme dosyalarinda kullanici hakli olarak saat ve dakika sorusuna odaklanir. Ancak Paris-Doha gibi
                hatlarda bu veri, tek basina butun resmi anlatmaz. Nihai varis, yeni saatler, varsa kacan sonraki ucus
                ve belge zinciri birlikte okunmalidir.
              </p>
              <p>Iyi dosya, sadece dakikaya degil; temiz zaman kaydi ve duzenli belge yapisina dayanir.</p>
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
              <li>Doha'ya gercek varis saatini not edin.</li>
              <li>Varsa yeni rota, ek bekleme veya kacan sonraki ucusu kaydedin.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Paris-Doha ucusunda gecikmede ilk neye bakilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk olarak yolcunun Doha&apos;ya gercekte ne zaman vardigina, hangi havayolunun ucusu islettigine ve
                  gecikmenin tum rota etkisine bakilmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu hatta Doha sadece aktarma noktasiysa yine de nihai varis onemli midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet. Doha bir hub oldugu icin kisa bir gecikme bile sonraki ucusu etkileyebilir. Bu nedenle rota
                  zinciri ve final zaman kaybi birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Paris-Doha gecikme dosyasinda hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Boarding pass, PNR, e-posta ve uygulama ekranlari, gecikme bildirimleri, varsa yeni rota detaylari
                  ve Doha&apos;ya gercek varis saatini gosteren kayitlar saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
