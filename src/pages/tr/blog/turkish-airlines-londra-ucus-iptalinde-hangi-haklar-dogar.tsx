import Link from "next/link";
import { ArrowRightLeft, CheckCircle2, PlaneTakeoff, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "turkish-airlines-londra-ucus-iptalinde-hangi-haklar-dogar";
const CLAIM_URL =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-turkish-airlines-london-cancelled-flight&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-turkish-airlines-london-cancelled-flight&utm_content=text_link";

export default function TrTurkishAirlinesLondonCancellationRightsArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Turkish Airlines Londra ucus iptalinde hangi haklar dogar?"
        description="Turkish Airlines Londra ucus iptalinde hangi haklar dogar? Turk yolcular icin yeni rota, UK261-EU261 mantigi ve nihai varis etkisini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Turkish Airlines Londra ucus iptalinde hangi haklar dogar?",
            description:
              "Turkish Airlines Londra ucus iptalinde hangi haklar dogar? Turk yolcular icin yeni rota, UK261-EU261 mantigi ve nihai varis etkisini anlatan net rehber.",
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
                name: "Turkish Airlines Londra ucusu iptal olursa ilk neye bakilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk olarak havayolunun iptali ne zaman bildirdigine, hangi yeni rotayi sunduguna ve yolcunun son hedefe gercekte ne zaman ulasacagina bakilmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Londra kalkisli oldugu icin hak mantigi daha guclu olur mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Londra kalkisi dosyaya guclu bir hukuki zemin verebilir. Ancak son karar yine bildirim zamani, yeni cozumun kalitesi, isleten tasiyici ve nihai varis ile verilir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu dosyada hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Iptal mesaji, e-posta, uygulama ekranlari, yeni rota bilgisi, boarding pass ve son hedefe gercek varis saatini gosteren kayitlar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Turkish Airlines Londra iptal haklari</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Havayolu Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Turkish Airlines Londra ucus iptalinde hangi haklar dogar?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu arama niyeti, `THY + London + cancellation rights` ekseninde cok gucludur, cunku kullanici ayni anda
              hem marka hem de kapsam sorusunu sorar. Dogru analiz, sadece “Turkish Airlines” ismine degil,
              <strong> bildirim zamani</strong>, <strong>yeni rota kalitesi</strong> ve
              <strong> nihai varis sonucu</strong> birlikte okundugunda ortaya cikar.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-12</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <PlaneTakeoff className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Turkish Airlines Londra cikisli bir ucusu iptal ederse ilk odak noktasi, size sunulan yeni cozumun kalitesi olmalidir.</strong>
              Sadece “ucus iptal edildi” bilgisi yetmez; asil tablo, ne zaman haber verildigi ve son hedefe gercekte ne
              zaman varildigi ile kurulur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Turkish Airlines Londra analizi"
            title="Turkish Airlines Londra iptal dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, iptali tek satirlik sonuc gibi okumaktir. Oysa yeni rota, kapsam mantigi ve belge duzeni sonucu ciddi sekilde degistirebilir."
            ctaHref={CLAIM_URL}
            ctaLabel="THY Londra dosyami kontrol et"
            placement="tr_turkish_airlines_london_cancel_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Iptalin gec bildirilmesi.</li>
                <li>Sunulan yeni rotanin ciddi zaman kaybi yaratmasi.</li>
                <li>Son hedefe nihai varisin net belgelenmesi.</li>
                <li>Mesajlar, boarding pass ve yeni rota bilgilerinin saklanmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece Turkish Airlines markasina odaklanmak.</li>
                <li>Yeni rotayi ve final etkisini okumamak.</li>
                <li>Bildirim saatini saklamamak.</li>
                <li>Son hedefe gercek varis zamanini kaydetmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bu dosyada ilk soru: size ne teklif edildi?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Turkish Airlines Londra iptal dosyalarinda kullanicinin ilk duygusu genelde karmasadir. Ancak claim
                acisindan ilk soru panik degil, havayolunun size ne sundugudur. Yeni ucus ayni gun mu, ertesi gun mu,
                ciddi bekleme mi var, farkli havalimani mi var? Butun agirlik burada belirginlesir.
              </p>
              <p>Yani iptal tek basina degil, yerine ne konuldugu ile okunmalidir.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Londra kalkisi guclu bir sinyaldir, ama tek basina yeterli degildir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Londra cikisli Turkish Airlines dosyalarinda kullanici hakli olarak `UK261 mi, EU261 mi, hangisi daha
                guclu?` diye dusunur. Kalkis noktasi dosyaya guclu bir zemin verebilir, ancak marka, isleten tasiyici
                ve rota yapisi birlikte okunmadan erken karar vermek dogru olmaz.
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
                      placement: "tr_turkish_airlines_london_cancel_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  bildirim zamani ve nihai varis etkisini birlikte incelemek
                </a>{" "}
                dosyanin gucunu daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <ArrowRightLeft className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En degerli belgeler: iptal bildirimi, yeni rota, final varis
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Turkish Airlines Londra iptal dosyasinda en guclu pratik belgeler genelde cok nettir: iptal mesaji,
                e-posta, uygulama ekranlari, yeni rota bilgisi, boarding pass ve son hedefe gercek varis saati. Bu
                zincir ne kadar duzenliyse, dosya o kadar guclu okunur.
              </p>
              <p>
                Cunku iyi iptal dosyasi, sadece hangi planin bozuldugunu degil, yerine neyin geldigi ve ne kadar kayip
                yarattigini da gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, ya sadece Turkish Airlines markasina bakmak ya da sadece Londra kalkisina bakmaktir.
              Oysa bu dosyada asil cevap, bildirim zamani, yeni rota kalitesi ve final varis etkisinde gizlidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Turkish Airlines Londra ucusu iptal olursa ilk neye bakilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk olarak havayolunun iptali ne zaman bildirdigine, hangi yeni rotayi sunduguna ve yolcunun son
                  hedefe gercekte ne zaman ulasacagina bakilmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Londra kalkisli oldugu icin hak mantigi daha guclu olur mu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Londra kalkisi dosyaya guclu bir hukuki zemin verebilir. Ancak son karar yine bildirim zamani, yeni
                  cozumun kalitesi, isleten tasiyici ve nihai varis ile verilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu dosyada hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Iptal mesaji, e-posta, uygulama ekranlari, yeni rota bilgisi, boarding pass ve son hedefe gercek
                  varis saatini gosteren kayitlar saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
