import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "baska-yolcu-sizin-bagajinizi-iade-ettiginde-hasar-varsa-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-returned-baggage-after-wrong-pickup-arrives-damaged&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-returned-baggage-after-wrong-pickup-arrives-damaged&utm_content=text_link";

export default function TrReturnedBaggageAfterWrongPickupDamagedArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Baska yolcu sizin bagajinizi iade ettiginde hasar varsa ne yapmali?"
        description="Baska yolcu sizin bagajinizi iade ettiginde hasar varsa ne yapmali? Turk yolcular icin wrong pickup zinciri, teslim zamani, hasar kaydi ve belge duzenini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Baska yolcu sizin bagajinizi iade ettiginde hasar varsa ne yapmali?",
            description:
              "Baska yolcu sizin bagajinizi iade ettiginde hasar varsa ne yapmali? Turk yolcular icin wrong pickup zinciri, teslim zamani, hasar kaydi ve belge duzenini anlatan net rehber.",
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
                name: "Bavul geri geldiyse ama hasarliysa ilk ne yapilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk adim, hasari hemen belgelemek, geri teslim saatini not etmek ve wrong pickup dosyasini hasar kaydiyla birlikte ayni zincirde tutmaktir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu durum normal hasarli bagaj dosyasiyla ayni mi okunur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kismen benzer, ama burada hasar tek basina degil; once wrong pickup, sonra gec teslim ve en sonunda hasar vardir. Bu nedenle zaman cizgisi cok daha onemlidir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Geri teslim saati, hasar fotograflari, bagaj etiketi, boarding pass, ilk wrong pickup bildirimi ve varsa yazili aciklamalar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">
              Baska yolcu sizin bagajinizi iade ettiginde hasar varsa ne yapmali
            </span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Baska yolcu sizin bagajinizi iade ettiginde hasar varsa ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu senaryoda kullanici iki kez sarsilir: once bavulun yanlis kisiyle ciktigini ogrenirsiniz, sonra geri
              gelen bavulun hasarli oldugunu gorursunuz. Dogru analiz, sadece <strong>hasarin kendisine</strong> degil,
              <strong> wrong pickup zincirine</strong>, <strong>geri teslim zamanina</strong> ve <strong>hasarin bu
              zaman cizgisinde ne zaman kayda girdigine</strong> bakar.
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
              <strong>Bavul geri geldiyse ama hasarliysa, hasari hemen belgelemek ve wrong pickup dosyasiyla birlikte
              okumak gerekir.</strong> Bu dosyada guc, geri teslim saati, foto kaydi ve onceki bildirim zincirinin
              ayni yerde tutulmasindan gelir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger damaged return analizi"
            title="Wrong pickup sonrasi hasarli donen bavul dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, bavul geri geldigi icin sadece hasara odaklanip onceki teslim zincirini unutmak olur. Wrong pickup, geri donus saati ve hasar birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_returned_baggage_after_wrong_pickup_damaged_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Geri teslim saatini net kaydetmek.</li>
                <li>Hasari aninda foto ile belgelemek.</li>
                <li>Wrong pickup dosyasini kapatmadan hasar kaydini eklemek.</li>
                <li>Bagaj etiketini ve boarding passi saklamak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Bavul dondu diye tum onceki kayitlari birakmak.</li>
                <li>Hasari hemen fotograflamamak.</li>
                <li>Wrong pickup ile hasar dosyasini birbirinden koparmak.</li>
                <li>Sadece sozlu aciklamayla yetinmek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Neden bu sadece "hasarli bagaj" dosyasi degildir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Cunku burada once teslim hatasi, sonra gecikmeli geri donus ve en sonda hasar vardir. Yani dosya tek
                katmanli degildir. Hasarin ne zaman ortaya ciktigi ve wrong pickup zinciriyle nasil baglandigi en kritik
                soru haline gelir.
              </p>
              <p>
                Bu nedenle geri donus anini ve bavulun durumunu ayni anda belgelemek cok onemlidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ilk hangi bilgiler teyit edilmelidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ilk wrong pickup bildirimi, geri teslim saati, bagaj etiketi, boarding pass ve hasarin ilk fotograflari
                ayni anda netlestirilmelidir. Boylece konu sadece "bavul hasarli geldi" seviyesinde kalmaz; hasarin
                teslim zincirindeki yerini de gosteren somut bir dosya kurulur.
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
                      placement: "tr_returned_baggage_after_wrong_pickup_damaged_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  wrong pickup sonrasi hasarli donen bavul dosyasini birlikte incelemek
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
                Geri teslim saati, hasar fotograflari, bagaj etiketi, boarding pass ve ilk wrong pickup bildirimi ayni
                timeline icinde tutulmalidir. Boylece problem soyut kalmaz; hem teslim hatasi hem de hasar net bir zincir
                halinde gorunur.
              </p>
              <p>
                Guclu dosya, bavulun sadece hasarli oldugunu degil, bu hasarin hangi gecikmeli teslim baglaminda ortaya
                ciktigini gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, bavul geri geldigi icin onceki wrong pickup dosyasini kapatip yalnizca hasara bakmaktir.
              Asil guc, bu iki katmani ayni dosyada tutmaktan gelir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bavul geri geldiyse ama hasarliysa ilk ne yapilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hasari hemen belgelemek ve wrong pickup dosyasiyla birlikte kayda almak gerekir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu durum normal hasarli bagaj dosyasiyla ayni mi okunur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Kismen benzer, ama burada once teslim hatasi sonra gec teslim ve en sonunda hasar vardir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Geri teslim saati, hasar fotograflari, bagaj etiketi, boarding pass ve ilk bildirim kaydi birlikte
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
