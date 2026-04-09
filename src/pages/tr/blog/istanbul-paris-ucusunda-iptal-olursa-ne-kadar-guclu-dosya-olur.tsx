import Link from "next/link";
import { ArrowRightLeft, CheckCircle2, MapPin, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "istanbul-paris-ucusunda-iptal-olursa-ne-kadar-guclu-dosya-olur";
const CLAIM_URL =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-istanbul-paris-cancellation&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-istanbul-paris-cancellation&utm_content=text_link";

export default function TrIstanbulParisCancellationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Istanbul-Paris ucusunda iptal olursa ne kadar guclu dosya olur?"
        description="Istanbul-Paris ucusunda iptal olursa dosya ne kadar guclu olabilir? Turk yolcular icin bildirim zamani, yeni rota ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Istanbul-Paris ucusunda iptal olursa ne kadar guclu dosya olur?",
            description:
              "Istanbul-Paris ucusunda iptal olursa dosya ne kadar guclu olabilir? Turk yolcular icin bildirim zamani, yeni rota ve nihai varis mantigini anlatan net rehber.",
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
            datePublished: "2026-04-09",
            dateModified: "2026-04-09",
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
                name: "Istanbul-Paris hattinda iptal olursa dosya otomatik guclu mudur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Iptal cok onemli bir sinyaldir, ancak tek basina yeterli degildir. Bildirim zamani, yeni rota kalitesi ve Paris'e nihai varis sonucu birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu hatta en kritik unsur nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik unsur, iptalin ne zaman bildirildigi kadar, havayolunun sundugu yeni cozumun yolcuyu Paris'e ne zaman ve nasil ulastirdigidir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmalidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Iptal mesaji, e-posta, uygulama ekranlari, yeni rota bilgisi, boarding pass ve Paris'e gercek varis saatini gosteren kayitlar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Istanbul-Paris iptal rehberi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Rota Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Istanbul-Paris ucusunda iptal olursa ne kadar guclu dosya olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu rota, hem turistik hem diaspora hem de is seyahatleri acisindan cok guclu bir arama niyeti tasir.
              Kullanici genelde sadece “iptal olduysa para var mi?” diye sorar. Oysa gercek guc,
              <strong> bildirim zamani</strong>, <strong>sunulan yeni rota</strong> ve
              <strong> Paris'e nihai varis sonucu</strong> birlikte okundugunda netlesir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Istanbul-Paris hattinda iptal, guclu bir sinyaldir ama tek basina yeterli degildir.</strong>
              Dosyanin gercek agirligi, ne zaman haber verildigi ve sizi Paris'e gercekte ne zaman ulastirdigiyle
              ortaya cikar.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Istanbul-Paris analizi"
            title="Istanbul-Paris iptal dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu hatta en buyuk hata, sadece iptalin kendisine bakmaktir. Oysa yeni rota ve final etkisi sonucu ciddi sekilde degistirebilir."
            ctaHref={CLAIM_URL}
            ctaLabel="Istanbul-Paris dosyami kontrol et"
            placement="tr_istanbul_paris_cancel_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Iptalin gec bildirilmesi.</li>
                <li>Yeni rotanin ciddi zaman kaybi yaratmasi.</li>
                <li>Paris'e nihai varisin net belgelenmesi.</li>
                <li>Mesajlar, uygulama ekranlari ve yeni bilet bilgilerinin korunmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece iptalin varligina odaklanmak.</li>
                <li>Yeni cozumun kalitesini hic okumamak.</li>
                <li>Paris'e gercek varis zamanini kaydetmemek.</li>
                <li>Bildirim saatini saklamamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bu hatta guclu dosya, takvim ve cozum birlikte okununca ortaya cikar
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici genelde 14 gun gibi takvim mantigina bakar ve oradan hizli karar vermek ister. Oysa
                Istanbul-Paris iptal dosyasinda ayni derecede onemli ikinci soru, havayolunun ne tur bir cozum
                sundugudur. Teoride “alternatif” gorunen rota, pratikte buyuk zaman kaybi yaratabilir.
              </p>
              <p>
                Bu nedenle dosya sadece tarih degil, cozum kalitesi ile birlikte okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Paris'e nihai varis, iptal dosyasinin en net olcusudur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Iptal edilen ilk ucus tek basina tum tabloyu vermez. Asil soru, yolcunun Paris'e ne zaman vardigidir.
                Yeni plan ayni gun yetisebilir, geceye kayabilir ya da ertesi gune sarkabilir. Bu fark da dosyanin
                gucunu ciddi sekilde etkiler.
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
                      placement: "tr_istanbul_paris_cancel_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  bildirim zamani ve final varisi birlikte incelemek
                </a>{" "}
                dosyanin gercek agirligini daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <ArrowRightLeft className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En guclu dosya: iptal bildirimi + yeni rota + final saat
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Istanbul-Paris iptal dosyalarinda en degerli zincir genelde nettir: iptal mesaji, uygulama ekranlari,
                e-posta, yeni rota bilgisi, boarding pass ve Paris'e gercek varis saati. Bu veriler ne kadar duzenli
                toplanirsa dosyanin okunmasi o kadar guclenir.
              </p>
              <p>
                Cunku iyi dosya, sadece neyin bozuldugunu degil, yerine neyin geldigini ve ne kadar kayip yarattigini
                da gostermelidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, sadece iptalin kendisine veya sadece bildirim gunune bakmaktir. Oysa bu hatta dosyanin
              gercek gucu, yeni rota ve Paris'e final etkide saklidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Iptal varsa para kesin midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Bildirim zamani, yeni rota kalitesi ve Paris'e gercek varis birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En kritik veri nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik veri, yeni cozumun sizi Paris'e ne kadar gec ulastirdigidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Iptal mesaji, e-posta, uygulama ekranlari, yeni rota ve Paris'e gercek varis saati birlikte
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
