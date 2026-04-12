import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagaj-tamamen-kaybolursa-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-completely-lost&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-completely-lost&utm_content=text_link";

export default function TrCompletelyLostBaggageArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagaj tamamen kaybolursa ne yapilmali?"
        description="Bagaj tamamen kaybolursa ne yapilmali? Turk yolcular icin PIR, bagaj etiketi, esya listesi ve kalici kayip dosyasini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagaj tamamen kaybolursa ne yapilmali?",
            description:
              "Bagaj tamamen kaybolursa ne yapilmali? Turk yolcular icin PIR, bagaj etiketi, esya listesi ve kalici kayip dosyasini anlatan net rehber.",
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
                name: "Bagaj tamamen kaybolduysa ilk odak ne olmalidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk odak, havalimaninda veya hemen sonrasinda resmi kaydi netlestirmek, PIR numarasini saklamak ve bagaja ait belge zincirini toparlamaktir.",
                },
              },
              {
                "@type": "Question",
                name: "Esya listesi neden bu kadar onemlidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku kalici kayip dosyasinda sadece bagajin kayboldugu degil, iceriginin ne oldugu ve ne kadar net anlatildigi de onem kazanir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu konu bagaj gecikmesiyle ayni mi okunur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Gecikme dosyasi bir noktaya kadar bekleme ve takip uzerinden giderken, tamamen kayip bagaj dosyasinda belge zinciri ve icerik envanteri daha merkezi hale gelir.",
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
            <span className="text-slate-900 dark:text-white">Tamamen kayip bagaj</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagaj tamamen kaybolursa ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bazi dosyalarda bagaj sadece gecikmez; bir sure sonra yolcunun zihninde konu artik acikca 'bu valiz
              donmeyecek galiba' noktasina gelir. Dogru analiz, sadece bekleme suresinden degil, <strong>PIR
              numarasi</strong>, <strong>bagaj etiketi</strong> ve <strong>icerik listesinin ne kadar temiz
              kuruldugundan</strong> dogar.
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
              <strong>Tamamen kayip bagaj dosyasinda ilk odak, resmi kaydi sabitlemek ve bagajin icerigini duzenli sekilde dokumante etmektir.</strong>
              Bu tip dosyalarda guc, sadece 'valiz yok' demekten degil, esya listesi, bagaj etiketi ve takip akisinin
              birlikte kurulmasindan gelir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger kayip bagaj analizi"
            title="Kayip bagaj dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, sadece beklemek ve belge zincirini dagitmak olur. PIR, bagaj etiketi, esya listesi ve takip akisi birlikte okunursa dosya cok daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Kayip bagaj dosyami kontrol et"
            placement="tr_completely_lost_baggage_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>PIR numarasinin ve bagaj etiketinin saklanmasi.</li>
                <li>Bagaj iceriginin mantikli ve temiz bir liste halinde hazirlanmasi.</li>
                <li>Havayolu takibinin e-posta ve mesajlarla korunmasi.</li>
                <li>Bagajin ne zaman kayip kabul edilmeye basladigina dair akisin not edilmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>PIR numarasini veya bagaj etiketini kaybetmek.</li>
                <li>Esya listesini gelisiguzel ve asiri soyut hazirlamak.</li>
                <li>Takip e-postalarini saklamamak.</li>
                <li>Gecikme dosyasiyla kalici kayip dosyasini ayni cizgide okumak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Tamamen kayip bagaj dosyasinda sorun, sadece bekleme degildir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Geciken bagaj dosyasinda ilk odak genelde 'ne zaman gelecek' sorusudur. Ama bir sure sonra tablo
                degisir ve mesele bagajin geri donusunden cok, dosyanin kalici kayip mantigina ne kadar temiz
                tasindigi olur. Bu gecis, yolcunun belge duzenini koruyup korumadigini daha da onemli hale getirir.
              </p>
              <p>
                Bu nedenle takip sureci, sadece beklemek degil, dosyayi sistemli sekilde toplamak anlamina gelir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Esya listesi ve bagaj icerigi, bu dosyanin bel kemigidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Tamamen kayip bagaj dosyasinda havayolu tarafinin en cok baktigi unsurlardan biri, bagajin icinde ne
                oldugunun ne kadar duzenli ve makul anlatildigidir. Belirsiz, asiri kabartilmis veya daginik bir
                icerik listesi dosyayi zayiflatabilir. Temiz kategori mantigi ve makul envanter dili cok daha guclu
                olur.
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
                      placement: "tr_completely_lost_baggage_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  kayip bagaj dosyasini belge zinciriyle birlikte incelemek
                </a>{" "}
                tabloyu cok daha hizli netlestirir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Takip akisi ne kadar temizse, dosya o kadar okunabilir olur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                PIR acildiktan sonra gelen takip mailleri, uygulama ekranlari, teslimat beklentisi mesajlari ve
                havayolunun verdigi her referans ayni yerde tutulmalidir. Cunku tamamen kayip bagaj dosyasinda tek
                bir belge degil, bir surecin butunu okunur.
              </p>
              <p>
                Dagilan belge akisi, dosyanin agirligini dusurur. Toplu ve net bir akista ise neyin ne zaman
                yapildigi cok daha kolay gorunur.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, tamamen kayip bagaj dosyasini sadece uzun suren bir gecikme gibi gormektir. Oysa bu
              noktada odak, sabir kadar belge zinciri ve icerik envanteri kurabilmektir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bagaj tamamen kaybolduysa ilk odak ne olmalidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk odak, havalimaninda veya hemen sonrasinda resmi kaydi netlestirmek, PIR numarasini saklamak ve
                  bagaja ait belge zincirini toparlamaktir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Esya listesi neden bu kadar onemlidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku kalici kayip dosyasinda sadece bagajin kayboldugu degil, iceriginin ne oldugu ve ne kadar net
                  anlatildigi de onem kazanir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu konu bagaj gecikmesiyle ayni mi okunur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Gecikme dosyasi bir noktaya kadar bekleme ve takip uzerinden giderken, tamamen kayip bagaj
                  dosyasinda belge zinciri ve icerik envanteri daha merkezi hale gelir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
