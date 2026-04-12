import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "valiz-sonradan-bulunursa-yine-masraf-istenebilir-mi";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-found-later-expenses&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-found-later-expenses&utm_content=text_link";

export default function TrBaggageFoundLaterExpensesArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Valiz sonradan bulunursa yine masraf istenebilir mi?"
        description="Valiz sonradan bulunursa yine masraf istenebilir mi? Turk yolcular icin teslim zamani, makul giderler ve fis zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Valiz sonradan bulunursa yine masraf istenebilir mi?",
            description:
              "Valiz sonradan bulunursa yine masraf istenebilir mi? Turk yolcular icin teslim zamani, makul giderler ve fis zincirini anlatan net rehber.",
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
                name: "Valiz sonradan bulunursa daha once yapilan makul giderler yine de onemli kalir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, kalabilir. Valizin sonradan bulunmasi, bagaj size ulasana kadar olusan makul ve gerekli gecici giderleri otomatik olarak anlamsizlastirmaz.",
                },
              },
              {
                "@type": "Question",
                name: "En kritik sey hangi tarih olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik sey, bagajin size gercekten ne zaman teslim edildigi ve harcamalarin bu sure icinde yapilip yapilmadigidir.",
                },
              },
              {
                "@type": "Question",
                name: "Valiz bulunduktan sonra yapilan alislar zayiflayabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. Bagaj geri geldikten sonra yapilan veya ihtiyacla zayif bag kuran harcamalar daha az savunulabilir gorunebilir.",
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
            <span className="text-slate-900 dark:text-white">Valiz sonradan bulunursa masraflar</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Valiz sonradan bulunursa yine masraf istenebilir mi?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, yolcunun bagaji gec geldikten sonra en sik sordugu sorulardan biridir: valiz geri donduyse daha once
              yapilan harcamalar artik tamamen anlamsiz mi sayilir? Dogru analiz, sadece valizin bulunup bulunmadigindan
              degil, <strong>ne zaman teslim edildiginden</strong>, <strong>harcamalarin bu sure icinde ne kadar makul
              kaldigindan</strong> ve <strong>fis zincirinin ne kadar temiz oldugundan</strong> dogar.
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
              <strong>Valizin sonradan bulunmasi, daha once yapilan makul ve gerekli gecici giderleri otomatik olarak silmez.</strong>
              Ama dosyanin gucu, bagajin gercek teslim zamani ile harcamalarin tarihi arasindaki iliskiye cok baglidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger bagaj masraf zinciri analizi"
            title="Valiz sonradan bulunsa bile masraf dosyanizin ne kadar guclu kaldigini hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, valiz bulundugu anda butun harcamalarin anlamsizlastigini sanmaktir. Teslim zamani, fisler ve ihtiyac mantigi birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Masraf dosyami kontrol et"
            placement="tr_baggage_found_later_expenses_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Bagajin gercek teslim tarihinin net olmasi.</li>
                <li>Teslim oncesi yapilan makul ve gecici harcamalar.</li>
                <li>Fis, tarih ve odeme izinin temiz sekilde korunmasi.</li>
                <li>Bagajin gec geldigini gosteren mesaj ve takip akisi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Valiz bulununca butun fisleri cope atmak.</li>
                <li>Teslim sonrasi harcamalari da ayni listeye eklemek.</li>
                <li>Gecici ihtiyacla ilgisiz alislari savunmaya calismak.</li>
                <li>Bagajin tam teslim zamanini not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Valizin bulunmasi, onceki ihtiyaci geriye donuk yok etmez
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yolcu valizine saatler veya gunler boyunca ulasamadiysa, bu sure icinde yaptigi temel ve makul alislar
                sirf valiz sonradan bulundu diye kendiliginden anlamsiz hale gelmez. Cunku degerlendirme sadece sonuca
                degil, valiz elinizde degilken ortaya cikan gercek ihtiyaca da bakar.
              </p>
              <p>
                Bu nedenle burada asil soru, 'valiz geri geldi mi' degil, 'masraf yapildiginda valiz gercekten sizde
                miydi' sorusudur.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Teslim zamani bu dosyanin bel kemigidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En kritik veri, bagajin ne zaman gercekten size ulastigidir. Cunku fisler bu zaman cizgisiyle birlikte
                okunur. Teslim oncesi yapilan temel alislar daha savunulabilir gorunurken, teslim sonrasi yapilan
                harcamalarin gucu daha zayif olabilir.
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
                      placement: "tr_baggage_found_later_expenses_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  teslim zamani ile fis zincirini birlikte incelemek
                </a>{" "}
                tabloyu daha hizli netlestirir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En cok zayiflayan kisim, teslim sonrasi ve baglam disi alislardir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bu dosyalarda sorun genelde luks alis, gec tarihli fis veya valiz geri geldikten sonra yapilan
                harcamalarda baslar. Bunlar ihtiyac cizgisinden uzaklastikca savunmasi da zorlasir. Guclu dosya,
                sadece gerekli ve zamaninda yapilan giderleri temiz sekilde ayirir.
              </p>
              <p>
                Yani ayni dosyada hem dogru hem zayif gider olabilir; farki yaratan sey ayrim gucudur.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, valiz geri gelince onceki tum makul giderlerin otomatik olarak yok sayildigini
              dusunmektir. Oysa burada belirleyici olan sey, teslim zamani ve giderlerin bu zaman cizgisindeki yeridir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Valiz sonradan bulunursa daha once yapilan makul giderler yine de onemli kalir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet, kalabilir. Valizin sonradan bulunmasi, bagaj size ulasana kadar olusan makul ve gerekli gecici
                  giderleri otomatik olarak anlamsizlastirmaz.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En kritik sey hangi tarih olur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik sey, bagajin size gercekten ne zaman teslim edildigi ve harcamalarin bu sure icinde yapilip
                  yapilmadigidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Valiz bulunduktan sonra yapilan alislar zayiflayabilir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet. Bagaj geri geldikten sonra yapilan veya ihtiyacla zayif bag kuran harcamalar daha az
                  savunulabilir gorunebilir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
