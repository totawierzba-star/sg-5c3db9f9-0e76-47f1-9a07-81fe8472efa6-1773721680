import Link from "next/link";
import { Bed, CheckCircle2, Coffee, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "geciken-ucusta-otel-ve-yemek-hakki-ne-zaman-dogar";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-delay-hotel-meal-rights&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-delay-hotel-meal-rights&utm_content=text_link";

export default function TrDelayHotelMealArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Geciken ucusta otel ve yemek hakki ne zaman dogar?"
        description="Geciken ucusta otel ve yemek hakki ne zaman dogar? Turk yolcular icin bekleme suresi, geceleme ihtiyaci ve masraf belgelerini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Geciken ucusta otel ve yemek hakki ne zaman dogar?",
            description:
              "Geciken ucusta otel ve yemek hakki ne zaman dogar? Turk yolcular icin bekleme suresi, geceleme ihtiyaci ve masraf belgelerini anlatan net rehber.",
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
                name: "Her gecikmede otel ve yemek hakki dogar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Her dosyada ayni sonuc cikmaz. Bekleme suresi, gunun saati ve yolcunun geceleme ihtiyacinin gercekten dogup dogmadigi birlikte degerlendirilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yemek fisleri, otel faturasi, transfer masraflari, havayolu mesajlari ve gercek gecikme suresi birlikte saklanmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Havayolu bir sey vermediyse sonradan masraf istenebilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Duruma gore evet. Ancak burada en kritik nokta, masrafin makul olmasi ve belgelerle desteklenmesidir.",
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
            <span className="text-slate-900 dark:text-white">Otel ve yemek hakki</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Yolcu Destek Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Geciken ucusta otel ve yemek hakki ne zaman dogar?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, kullanicinin havaalaninda en hizli cevap aradigi sorulardan biridir. Cunku uzun bekleme basladiginda
              herkes ayni seyi dusunur: yemek, su, transfer veya gerekirse otel hakkim var mi? Dogru analiz,
              <strong> bekleme suresi</strong>, <strong>geceleme ihtiyaci</strong> ve <strong>masrafin makullugu</strong>
              birlikte okunarak yapilir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Bed className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Her gecikme otomatik otel hakkı dogurmaz, ama uzun ve geceye sarkan beklemelerde haklar guclenir.</strong>
              Yemek, icecek, gerekli transfer ve geceleme ihtiyaci gercekten ortaya ciktiysa belge duzeni cok onemli hale gelir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger destek analizi"
            title="Gecikme dosyanizda otel ve yemek masrafinin ne kadar guclu oldugunu kontrol edin"
            description="Bir cok yolcu masraf yapar ama belgeleri eksik sakladigi icin sonradan guc kaybeder. Bekleme, geceleme ve makul masraf mantigini birlikte okumak daha saglamdir."
            ctaHref={CLAIM_URL}
            ctaLabel="Masraf dosyami kontrol et"
            placement="tr_delay_hotel_meal_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Gecikmenin gecelemeye donusmesi.</li>
                <li>Yemek ve otel masraflarinin makul kalmasi.</li>
                <li>Fis ve fatura duzeninin eksiksiz tutulmasi.</li>
                <li>Havayolunun yardim saglamadigina dair kayitlarin saklanmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Fis ve faturalari atmamak ama sonra kaybetmek.</li>
                <li>Asiri pahali ve savunulmasi zor masraf yapmak.</li>
                <li>Havayolunun ne sundugunu kaydetmemek.</li>
                <li>Gecikmenin saatlerini duzenli not almamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Yemek ve icecek hakki, uzun beklemede pratik olarak en hizli ortaya cikar
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Uzun gecikmelerde kullanicinin ilk sorusu genelde tazminat degil, anlik destek olur. Yemek, icecek
                ve temel bekleme ihtiyaclari burada kritik hale gelir. Bu nedenle havaalaninda ilk belgelenmesi
                gereken seylerden biri, gecikmenin ne kadar uzadigi ve havayolunun ne sundugudur.
              </p>
              <p>
                Pratikte destek konusu, dosyanin sonraki ekonomik kismini da etkileyebilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Otel hakki, geceleme ihtiyaci gercekten dogdugunda guclenir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Her gecikme otel gerektirmez. Ama gecikme geceye sarkiyorsa, yeni ucus ertesi gune kaliyor ya da
                yolcunun mantikli sekilde ayni gun icinde yolculugu tamamlama imkani kalmiyorsa, otel tartismasi cok
                daha somut hale gelir.
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
                      placement: "tr_delay_hotel_meal_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  bekleme ve geceleme ihtiyacini birlikte incelemek
                </a>{" "}
                kullanicinin masraf tarafini daha guclu kurmasini saglar.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Coffee className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En kritik sey: makul masraf + belge duzeni
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bir dosyanin destek giderleri ne kadar makul ve ne kadar iyi belgelenmisse, sonradan savunulmasi o
                kadar kolay olur. Bu yuzden masraf tutari kadar, fis, fatura, otel kaydi ve transfer kaydi da
                kritiktir.
              </p>
              <p>
                Kullanici icin en guvenli yol, gereksiz luks degil savunulabilir ve mantikli harcamalar yapmaktir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, ya hic harcama kaydi tutmamak ya da gereksiz yuksek masraflarin sonradan otomatik kabul
              edilecegini sanmaktir. Burada guc, makuliyet ve belge duzeninden gelir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Her gecikmede otel hakki var mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Otel ihtiyaci genelde bekleme gecelemeye donustugunde ve ayni gun makul cozum kalmadiginda
                  daha guclu hale gelir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Fis, fatura, otel kaydi, transfer gideri, havayolu mesajlari ve gecikme saatleri birlikte
                  saklanmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Havayolu bir sey vermediyse sonradan talep edilebilir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Duruma gore evet. Ancak masrafin makul ve belgeli olmasi cok kritiktir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
