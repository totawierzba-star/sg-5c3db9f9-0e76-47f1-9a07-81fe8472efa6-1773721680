import Link from "next/link";
import { CheckCircle2, Clock3, Euro, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "avrupaya-ucarken-3-saat-gecikmede-ne-kadar-tazminat-alinir";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-3-hour-delay-europe&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-3-hour-delay-europe&utm_content=text_link";

export default function TrThreeHourDelayEuropeArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Avrupaya ucarken 3 saat gecikmede ne kadar tazminat alinir?"
        description="Avrupaya ucarken 3 saat gecikmede ne kadar tazminat alinabilir? Turk yolcular icin nihai varis, rota mesafesi ve EU261 mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Avrupaya ucarken 3 saat gecikmede ne kadar tazminat alinir?",
            description:
              "Avrupaya ucarken 3 saat gecikmede ne kadar tazminat alinabilir? Turk yolcular icin nihai varis, rota mesafesi ve EU261 mantigini anlatan net rehber.",
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
                name: "3 saat gecikme oldugunda tazminat otomatik olarak kesin midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. 3 saat esigi cok onemlidir, fakat tek basina yeterli degildir. Nihai varis, rota yapisi ve dosyanin EU261 kapsaminda olup olmadigi birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Tazminat miktarini ne belirler?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tazminat miktari sadece gecikme saatiyle degil, rota mesafesi ve yolculugun hukuki kapsam mantigiyla birlikte degerlendirilir.",
                },
              },
              {
                "@type": "Question",
                name: "En kritik saat hangisidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik saat, ucagin kapidan gec kalktigi an degil; yolcunun son hedefe gercekte ne zaman vardigidir.",
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
            <span className="text-slate-900 dark:text-white">3 saat gecikme ve tazminat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Gecikme Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Avrupaya ucarken 3 saat gecikmede ne kadar tazminat alinir?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, Turk yolcularin en yuksek intentli sorularindan biridir. Cunku kullanici genelde dogrudan bir rakam
              arar. Oysa dosyanin gucu, sadece “3 saat oldu” demekle kurulmaz. <strong>Nihai varis saati</strong>,
              <strong> rota mesafesi</strong> ve <strong>EU261 kapsam mantigi</strong> birlikte okunmalidir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 9 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Clock3 className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>3 saatlik gecikme cok kritik bir esiktir, ama tek basina yeterli degildir.</strong> Tazminat
              miktari ve dosyanin gercek gucu, son hedefe ne zaman vardiginiz ve rota mesafesinin nasil hesaplandigi
              ile netlesir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger 3 saat analizi"
            title="3 saat gecikmeli Avrupa ucusunuzun ne kadar guclu oldugunu hizli kontrol edin"
            description="Bir cok yolcu sadece ucagin gec kalkisina bakar. Oysa tazminat hesabinda asıl onemli olan, son hedefe gercekte ne zaman vardiginiz ve dosyanin kapsamidir."
            ctaHref={CLAIM_URL}
            ctaLabel="Geciken ucus dosyami kontrol et"
            placement="tr_three_hour_delay_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Nihai varista 3 saate yakin veya ustunde net kayip olmasi.</li>
                <li>Rota mesafesinin tazminat hesabini etkilemesi.</li>
                <li>Mesajlar, boarding pass ve yeni rota detaylarinin saklanmasi.</li>
                <li>Gercek varis saatinin belgeyle desteklenmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece kalkis panosundaki farki esas almak.</li>
                <li>“3 saat olduysa para kesindir” diye dusunmek.</li>
                <li>Rota mesafesini hic hesaba katmamak.</li>
                <li>Nihai varis saatini ispatlamamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. 3 saat esigi onemlidir, ama gercek saat nihai varista okunur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanicilarin en sik yaptigi hata, kalkis gecikmesi ile tazminat saatini ayni sey sanmaktir. Oysa
                pratikte belirleyici olan, ucagin ilk ne kadar gec kalktigi degil, yolcunun son hedefe gercekte ne
                kadar gec vardigidir.
              </p>
              <p>
                Bu nedenle 3 saat esigi, sadece panodaki dakika farki degil; final varis sonucuyla birlikte
                okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Tazminat miktari sadece saate degil, rota mesafesine de baglidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bir kullanici “3 saat geciktim, kac euro alirim?” diye sorarken aslinda iki soruyu ayni anda
                soruyordur: dosya yeterince guclu mu ve miktar hangi bantta degerlendirilecek? Burada rota mesafesi ve
                tam yolculuk yapisi devreye girer.
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
                      placement: "tr_three_hour_delay_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  dosyanin nihai varis ve rota mesafesi analizi
                </a>{" "}
                birlikte yapildiginda, kullaniciya daha gercekci bir tablo cikar.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. “Ne kadar alirim?” sorusu, dogru belge olmadan eksik kalir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Tutar odakli aramalar cok gucludur, ama dosyanin kendisi zayif belgelenmisse tek basina teorik rakam
                cok sey ifade etmez. En guclu dosyalarda boarding pass, mesajlasmalar, yeni rota bilgisi ve gercek
                varis saati birlikte saklanir.
              </p>
              <p>
                Yani iyi bir “kac euro” cevabi, once iyi bir zaman ve belge analizi ister.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, 3 saat gecikmeyi otomatik para formulu sanmaktir. Oysa gercek sonuc, nihai varis,
              rota mesafesi ve kapsam mantigi birlikte okundugunda netlesir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  3 saat gecikmede para kesin midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. 3 saat cok guclu bir esik olsa da, tek basina kesin sonuc vermez. Dosyanin kapsami ve nihai
                  varis sonucu birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En onemli saat hangisidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En onemli saat, son hedefe gercekte hangi saatte vardiginizdir. Cunku analiz orada netlesir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Tutar hesabinda en cok ne unutulur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En cok unutulan sey, rota mesafesi ve tam yolculuk yapisinin birlikte degerlendirilmesidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
