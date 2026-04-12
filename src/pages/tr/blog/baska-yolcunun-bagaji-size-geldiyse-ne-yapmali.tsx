import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "baska-yolcunun-bagaji-size-geldiyse-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-another-passengers-baggage-arrived-to-you&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-another-passengers-baggage-arrived-to-you&utm_content=text_link";

export default function TrAnotherPassengersBaggageArrivedToYouArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Baska yolcunun bagaji size geldiyse ne yapmali?"
        description="Baska yolcunun bagaji size geldiyse ne yapmali? Turk yolcular icin bagaj etiketi, yanlis teslim, havalimaninda ilk adimlar ve belge zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Baska yolcunun bagaji size geldiyse ne yapmali?",
            description:
              "Baska yolcunun bagaji size geldiyse ne yapmali? Turk yolcular icin bagaj etiketi, yanlis teslim, havalimaninda ilk adimlar ve belge zincirini anlatan net rehber.",
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
                name: "Yanlis bagaji eve goturmek sorun yaratir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. En dogru adim, durumu hemen havayoluna veya havalimanindaki bagaj ofisine bildirmek ve etiketi kontrol ederek yanlis valizi sizde tutmadan resmi sureci baslatmaktir.",
                },
              },
              {
                "@type": "Question",
                name: "Ilk hangi bilgileri kontrol etmeliyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bagaj etiketi, isim etiketi, ucus baglami ve sizin boarding pass bilgileriniz birlikte kontrol edilmelidir. Ama valizi acmadan ve geciktirmeden resmi kanala bildirmek en onemli noktadir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yanlis valizin etiketi, sizin boarding passiniz, bagaj fisi, varsa foto ve yaptiginiz bildirimlerin tarih-saat kaydi saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Baska yolcunun bagaji size geldiyse ne yapmali</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Baska yolcunun bagaji size geldiyse ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu senaryo ilk anda kucuk bir karisiklik gibi gorunebilir, ama aslinda iki dosyayi birden etkiler:
              sizin bagajiniz hala kayiptir ve baska bir yolcunun valizi size gecmistir. Dogru analiz, sadece
              <strong> etiketin kime ait oldugunu fark etmekten</strong> degil,
              <strong> yanlis valizi acmadan ve geciktirmeden resmi kanala bildirmekten</strong> ve
              <strong> kendi dosyanizin bagaj kaydi ile bu teslim hatasini ayni timeline icinde kurmaktan</strong>
              dogar.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-12</span>
              <span>&bull;</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Baska yolcunun bagaji size geldiyse valizi acmadan, etiketi kontrol ederek durumu hemen
              bildirmek gerekir.</strong> Bu dosyada guc, yanlis teslimin hizla fark edilmesi, resmi bildirimin acilmasi
              ve sizin kendi kayip bagaj zincirinizin ayni anda korunmasindan gelir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger wrong baggage match analizi"
            title="Yanlis bagaj teslimi dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, yanlis valizi eve goturup sonra aciklama yapmaya calismaktir. Etiket, bildirim saati ve sizin kendi bagaj dosyaniz birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_another_passengers_baggage_arrived_to_you_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Bagaj etiketini hemen kontrol etmek.</li>
                <li>Yanlis valizi acmadan resmi kanala bildirmek.</li>
                <li>Sizin boarding pass ve bagaj fisinizi saklamak.</li>
                <li>Bildirim saati ile teslim hatasini ayni timeline icinde not etmek.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Valizi acip sonra durumu bildirmek.</li>
                <li>Etiketi kontrol etmeden sadece dis gorunuse bakmak.</li>
                <li>Yanlis bagaji eve goturup bildirimi geciktirmek.</li>
                <li>Kendi kayip bagaj dosyanizi ayni anda takip etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bu neden iki ayri problemi ayni anda dogurur?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Sizin elinizde yanlis valiz vardir, ama sizin kendi bagajiniz hala size ulasmamistir. Yani burada hem
                teslim uyumsuzlugu hem de sizin adiniza aktif bir kayip veya gecikme dosyasi vardir. Bu nedenle konu
                sadece "yanlis bavul almisim" seviyesinde okunmamalidir.
              </p>
              <p>
                Dogru adim, iki zinciri ayni anda ayakta tutmaktir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ilk hangi bilgiler teyit edilmelidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yanlis valizin etiketi, isim bilgisi, ucus baglami ve sizin kendi boarding passiniz birlikte
                kontrol edilmelidir. Ama en kritik nokta, bunu geciktirmeden bagaj ofisine veya havayoluna resmi
                kanaldan bildirmektir.
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
                      placement: "tr_another_passengers_baggage_arrived_to_you_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  yanlis bagaj teslimini ve kendi kayip bagaj dosyanizi birlikte incelemek
                </a>{" "}
                surecin ne kadar temiz yonetildigini daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Hangi belge zinciri en degerlidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yanlis valizin etiketi, sizin boarding passiniz, bagaj fisiniz, yaptiginiz ilk bildirim ve varsa foto
                ayni timeline icinde tutulmalidir. Boylece durum soyut kalmaz; hangi valizin size geldigi ve siz bunu
                ne kadar hizli fark edip bildirdiginiz somutlasir.
              </p>
              <p>
                Guclu dosya, sadece hatayi degil, hataya dogru tepkinin ne kadar cabuk verildigini gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, yanlis valizi kisa sureligine normal bir karisiklik sayip eve goturmektir. Bu, sizin
              kendi bagaj dosyanizi da gereksiz yere bulandiran bir gecikmeye donebilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Yanlis bagaji eve goturmek sorun yaratir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet. En dogru adim, etiketi kontrol edip durumu hemen bagaj ofisine veya havayoluna bildirmektir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ilk hangi bilgileri kontrol etmeliyim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bagaj etiketi, isim etiketi, sizin boarding passiniz ve bagaj fisiniz birlikte kontrol edilmelidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Yanlis bagajin etiketi, sizin bagaj fisiniz, boarding passiniz ve ilk bildirim kaydi birlikte
                  saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
