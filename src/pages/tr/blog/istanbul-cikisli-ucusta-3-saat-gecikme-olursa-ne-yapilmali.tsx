import Link from "next/link";
import { CheckCircle2, Clock3, FileText, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "istanbul-cikisli-ucusta-3-saat-gecikme-olursa-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-istanbul-departure-3-hour-delay&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-istanbul-departure-3-hour-delay&utm_content=text_link";

export default function TrIstanbulDepartureThreeHourDelayArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Istanbul cikisli ucusta 3 saat gecikme olursa ne yapilmali?"
        description="Istanbul cikisli ucusta 3 saat gecikme olursa ne yapilmali? Turk yolcular icin nihai varis, belge duzeni ve kapsam mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Istanbul cikisli ucusta 3 saat gecikme olursa ne yapilmali?",
            description:
              "Istanbul cikisli ucusta 3 saat gecikme olursa ne yapilmali? Turk yolcular icin nihai varis, belge duzeni ve kapsam mantigini anlatan net rehber.",
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
                name: "Istanbul cikisli ucusta 3 saat gecikme olursa ilk neye bakilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk bakilmasi gereken sey, ucagin panodaki gecikmesi degil; yolcunun nihai hedefe gercekte ne zaman vardigidir. Asil agirlik nihai varis sonucundadir.",
                },
              },
              {
                "@type": "Question",
                name: "3 saat gecikme olmasi otomatik tazminat anlamina gelir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. 3 saatlik esik cok gucludur ancak otomatik tek satirlik sonuc vermez. Kapsam, isleten tasiyici, rota yapisi ve belge zinciri birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu durumda hangi belgeler hemen saklanmalidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Boarding pass, PNR, uygulama ekranlari, SMS ve e-postalar, yeni rota kayitlari ve gercek varis zamanini gosteren tum bilgiler hemen saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Istanbul cikisli 3 saat gecikme</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              GEO Gecikme Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Istanbul cikisli ucusta 3 saat gecikme olursa ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu arama niyeti, `TR + diaspora EU` icin en guclu sinyallerden biridir. Kullanici genelde once panodaki
              gecikmeye bakar. Oysa saglam analiz; <strong>nihai varis</strong>, <strong>isleten tasiyici</strong>,
              <strong> rota yapisi</strong> ve <strong>belge zinciri</strong> birlikte okundugunda ortaya cikar.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
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
              <strong>3 saat gecikme cok guclu bir esiktir, ama ilk bakilacak sey yine de nihai varistir.</strong>{" "}
              Istanbul cikisli dosyalarda yolcunun hedefe gercekte ne zaman vardigi, hangi tasiyicinin ucusu islettigi
              ve butun olay akisinin nasil belgelendigi belirleyici olur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger 3 saat gecikme analizi"
            title="Istanbul cikisli 3 saat gecikme dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu tip dosyalarda sadece saat sayisi yetmez. Nihai varis, rota ve kanit zinciri birlikte okununca dosyanin gucu cok daha net gorulur."
            ctaHref={CLAIM_URL}
            ctaLabel="3 saat gecikme dosyami incele"
            placement="tr_istanbul_departure_3h_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Nihai varista 3 saate ulasan veya asan net zaman kaybi.</li>
                <li>Boarding pass, PNR, SMS, app ve e-posta kayitlarinin korunmasi.</li>
                <li>Varsa yeni rota ve yeniden rezervasyon bilgilerinin saklanmasi.</li>
                <li>Gecikmenin butun zaman cizelgesinin tek akista kurulabilmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece kalkis panosundaki gecikmeye odaklanmak.</li>
                <li>3 saat kuralini otomatik tazminat dugmesi sanmak.</li>
                <li>Gercek varis zamanini hic not etmemek.</li>
                <li>Mesajlari ve uygulama ekranlarini sonradan silmek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Istanbul cikisli dosyada asil saat, hedefe gercek varis saatidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bir cok yolcu once Istanbul havaalanindaki gecikmeyi gorur ve analizi orada bitirir. Oysa dosyanin
                agirligi, yolcunun varacagi yere gercekte ne zaman ulasabildigiyle olculur. Ilk gecikme ile final
                zaman kaybi ayni sey degildir.
              </p>
              <p>
                Bu nedenle 3 saat esigi, sadece kalkis anina degil; final sonuca ve butun yolculuk zincirine
                bakilarak okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Istanbul cikisli olmak tek basina yetmez; kapsam ve tasiyici mantigi da okunmalidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen sadece “Istanbul'dan kalkti, 3 saat oldu” diye dusunur. Oysa dosyanin gucu; hattin
                yapisi, ucusu isleten tasiyici ve butun rezervasyon akisi birlikte degerlendirildiginde netlesir.
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
                      placement: "tr_istanbul_departure_3h_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  nihai varis ile kapsam mantigini birlikte kontrol etmek
                </a>{" "}
                daha temiz ve daha gercekci bir sonuc verir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <FileText className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En guclu dosya, 3 saati degil zaman cizelgesini ispatlar
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Guclu bir dosya genelde ayni omurgaya sahiptir: rezervasyon kaydi, boarding pass, gecikmeyi gosteren
                app veya mail kayitlari, varsa yeni rota ve gercek varis zamani. Bu belge zinciri olmadan “3 saat”
                ifadesi zayif kalabilir.
              </p>
              <p>
                Bu yuzden en dogru ilk adim, tum saat degisimlerini ve final sonucu bir araya getiren net bir dosya
                mantigi kurmaktir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, “3 saat olduysa gerisi otomatik” diye dusunmektir. Oysa Istanbul cikisli dosyalarda da
              sonucu belirleyen sey; nihai varis, tasiyici mantigi ve belge zincirinin birlikte guclu kurulmasidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  3 saat gecikmede ilk bakilacak sey nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk bakilacak sey panodaki bilgi degil, yolcunun hedefe gercekte ne zaman vardigidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Istanbul cikisli olmak tek basina yeterli mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Tasiyici, rota yapisi ve kapsam mantigi da birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler en cok fark yaratir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  PNR, boarding pass, uygulama ekranlari, SMS/e-posta kayitlari ve gercek varis zamanini gosteren
                  belgeler en buyuk farki yaratir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
