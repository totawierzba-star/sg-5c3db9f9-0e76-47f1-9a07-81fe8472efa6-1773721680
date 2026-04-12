import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagaj-otele-gece-geldi-sabah-yoksa-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-arrived-at-night-missing-in-morning&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-arrived-at-night-missing-in-morning&utm_content=text_link";

export default function TrBaggageArrivedAtNightMissingInMorningArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagaj otele gece geldi, sabah yoksa ne yapmali?"
        description="Bagaj otele gece geldi, sabah yoksa ne yapmali? Turk yolcular icin night shift, resepsiyon devri, teslim saati ve bagaj odasi kontrolunu anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagaj otele gece geldi, sabah yoksa ne yapmali?",
            description:
              "Bagaj otele gece geldi, sabah yoksa ne yapmali? Turk yolcular icin night shift, resepsiyon devri, teslim saati ve bagaj odasi kontrolunu anlatan net rehber.",
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
                name: "Bagaj gece teslim edildiyse ama sabah bulunamiyorsa sorun kapanmis midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Gece teslim kaydi olmasi tek basina yeterli degildir. Sabah vardiyasi, bagaj odasi ve teslim alan kisi bilgisi birlikte netlestirilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu durumda once kimle gorusmek gerekir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Resepsiyon, gece vardiyasi notlari, sabah vardiya sorumlusu ve bagaji gece teslim alan kisi bilgisi ilk kontrol edilmesi gereken noktalardir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi kayitlar saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tracking ekran goruntusu, gece teslim saati, resepsiyon devriyle ilgili notlar ve sabah yapilan gorusmeler ayni dosyada saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Bagaj otele gece geldi, sabah yoksa ne yapmali</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagaj otele gece geldi, sabah yoksa ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, hotel delivery akisinde tam vardiya degisimi kaosunu yakalayan bir senaryodur: valiz gece gelir,
              sistemde teslim gorunur, ama sabah kimse onu bulamaz. Dogru analiz, sadece "valiz kayboldu mu?"
              sorusundan degil, <strong>gece teslim saatinden</strong>, <strong>night shift ile morning shift
              arasindaki bilgi devrinden</strong> ve <strong>bagajin otel icinde hangi noktaya alindiginin nasil
              kayda baglandigindan</strong> dogar.
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
              <strong>Gece teslim kaydi olsa bile, sabah valiz bulunamiyorsa sorun kapanmis sayilmaz.</strong> Bu durumda
              gece teslim saati, vardiya devri, bagaj odasi ve teslim alan personel bilgisi ayni timeline icinde
              netlestirilmelidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger night shift analizi"
            title="Gece teslim edilmis ama sabah bulunamayan bagaj dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, gece teslim bilgisi oldugu icin her seyin net oldugunu sanmaktir. Gece vardiyasi, sabah vardiyasi ve fiili teslim zinciri birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_baggage_arrived_at_night_missing_in_morning_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Gece teslim saatini trackingten kaydetmek.</li>
                <li>Gece vardiyasinin notunu veya teslim alan kisiyi sormak.</li>
                <li>Sabah vardiyasi ile bagaj odasini birlikte kontrol etmek.</li>
                <li>Gorusme zincirini tarih ve saatle not etmek.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Gece teslim screenini kaydetmemek.</li>
                <li>Sabah sadece tek kisiden cevap alip yetinmek.</li>
                <li>Vardiya devri notlarini sormamak.</li>
                <li>Bagaj odasi veya back office kontrolu istememek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Neden gece teslimi sabah gorunmeyebilir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gece vardiyasinda teslim alinan bagaj bazen resepsiyon arkasina, bagaj odasina ya da gecici bir
                noktaya konur. Sabah vardiyasi bunu dogru devir almadiysa valiz otelde oldugu halde "yok" gibi
                gorunebilir. Yani bu senaryoda sorun lojistikten cok handoff problemidir.
              </p>
              <p>
                Bu nedenle sabah ilk cevap her zaman gercegin tam ozeti olmayabilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ilk hangi kontrol zinciri kurulmalidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Trackingteki gece teslim saati, gece vardiyasi notu, sabah vardiya sorumlusu ve bagaj odasi ayni anda
                kontrol edilmelidir. Sadece resepsiyon masasina bakmak bazen yeterli olmaz; cunku valiz fiilen otelde
                ama gorus alaninin disinda olabilir.
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
                      placement: "tr_baggage_arrived_at_night_missing_in_morning_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  gece teslim kaydini ve vardiya devrini birlikte incelemek
                </a>{" "}
                kopuklugun tam yerini daha net gosterebilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Hangi belge zinciri bu case'te en degerlidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gece teslim screeni, sabah resepsiyonla yapilan gorusme saati, varsa gece vardiyasi notu ve sonradan
                bagajin nerede bulundugu ayni timeline icinde tutulmalidir. Boylece sorun "gece geldi ama sabah yok"
                gibi soyut kalmaz.
              </p>
              <p>
                Guclu dosya, teslim aniyla sabahki belirsizlik arasindaki kopuklugu gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, ya gece teslim kaydi gordugu icin her seyin tamamlandigini sanmak ya da sabah ilk
              olumsuz cevapla yeniden kayip senaryosuna donmektir. Genelde sorun, gece-sabah bilgi devrindedir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bagaj gece teslim edildiyse ama sabah bulunamiyorsa sorun kapanmis midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Gece teslim kaydi olmasi tek basina yeterli degildir. Sabah vardiyasi, bagaj odasi ve teslim alan kisi bilgisi birlikte netlestirilmelidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu durumda once kimle gorusmek gerekir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Resepsiyon, gece vardiyasi notlari, sabah vardiya sorumlusu ve bagaji gece teslim alan kisi bilgisi ilk kontrol edilmesi gereken noktalardir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi kayitlar saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Tracking ekran goruntusu, gece teslim saati, resepsiyon devriyle ilgili notlar ve sabah yapilan gorusmeler ayni dosyada saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
