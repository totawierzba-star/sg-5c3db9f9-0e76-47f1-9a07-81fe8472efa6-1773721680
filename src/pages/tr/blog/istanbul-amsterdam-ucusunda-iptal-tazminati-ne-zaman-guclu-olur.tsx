import Link from "next/link";
import { ArrowRightLeft, CheckCircle2, PlaneTakeoff, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "istanbul-amsterdam-ucusunda-iptal-tazminati-ne-zaman-guclu-olur";
const CLAIM_URL =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-istanbul-amsterdam-cancellation&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-istanbul-amsterdam-cancellation&utm_content=text_link";

export default function TrIstanbulAmsterdamCancellationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Istanbul-Amsterdam ucusunda iptal tazminati ne zaman guclu olur?"
        description="Istanbul-Amsterdam ucusunda iptal tazminati ne zaman guclu olabilir? Turk yolcular icin bildirim zamani, yeni rota ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Istanbul-Amsterdam ucusunda iptal tazminati ne zaman guclu olur?",
            description:
              "Istanbul-Amsterdam ucusunda iptal tazminati ne zaman guclu olabilir? Turk yolcular icin bildirim zamani, yeni rota ve nihai varis mantigini anlatan net rehber.",
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
                name: "Istanbul-Amsterdam ucusunda iptal olursa otomatik tazminat dogar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Iptal tek basina yeterli degildir. Bildirim zamani, sunulan yeni rota ve yolcunun Amsterdam'a ne zaman vardigi birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu hatta en onemli unsur nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En onemli unsur, iptalin ne zaman bildirildigi kadar, havayolunun sundugu yeni cozumun yolcuyu nihai hedefe ne kadar gec ulastirdigidir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmalidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Iptal mesaji, e-posta, uygulama bildirimi, yeni rota bilgisi, boarding pass ve Amsterdam'a gercek varis saati saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Istanbul-Amsterdam iptal tazminati</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Rota Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Istanbul-Amsterdam ucusunda iptal tazminati ne zaman guclu olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu rota, hem Turk diasporasi hem de sik Avrupa yolculari icin yuksek niyetli arama alanlarindan biridir.
              Kullanici genelde “iptal olduysa ne alirim?” diye sorar. Oysa gercek analiz,
              <strong> bildirim zamani</strong>, <strong>yeni rota kalitesi</strong> ve
              <strong> Amsterdam'a nihai varis sonucu</strong> birlikte okundugunda netlesir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
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
              <strong>Istanbul-Amsterdam hattinda iptal otomatik para anlamina gelmez.</strong> Dosyanin gucu, iptalin
              ne zaman bildirildigi, hangi yeni rota teklif edildigi ve yolcunun Amsterdam'a gercekte ne zaman
              vardigi ile belirlenir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger iptal rota analizi"
            title="Istanbul-Amsterdam iptal dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu hatta en buyuk hata, sadece iptal tarihine bakmaktir. Oysa yeni rota kalitesi ve son hedefe etkisi sonucunu ciddi sekilde degistirebilir."
            ctaHref={CLAIM_URL}
            ctaLabel="Iptal dosyami kontrol et"
            placement="tr_istanbul_amsterdam_article_embed_high"
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
                <li>Amsterdam'a nihai varisin net sekilde belgelenmesi.</li>
                <li>Mesajlar ve uygulama ekranlarinin saklanmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece “iptal oldu” bilgisinde kalmak.</li>
                <li>Yeni rotayi hic degerlendirmemek.</li>
                <li>Bildirim saatini saklamamak.</li>
                <li>Amsterdam'a gercek varis zamanini kaydetmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bu hatta iptal dosyasinin agirligi, takvim kadar cozum kalitesinde gizlidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici cogu zaman 14 gun gibi takvim kurallarina odaklanir. Oysa Istanbul-Amsterdam iptal
                dosyalarinda ayni derecede onemli ikinci konu, havayolunun sundugu yeni cozumdur. Teoride alternatif
                verilip pratikte buyuk zaman kaybi yaratilan dosyalar burada cok degerlidir.
              </p>
              <p>
                Bu nedenle takvimi ve yeni rotayi birlikte okumak gerekir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Amsterdam'a nihai varis, iptal dosyasinin en kritik son testidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Iptal edilen ilk plan tek basina yeterli veri vermez. Asil agirlik, yolcunun Amsterdam'a sonunda ne
                zaman ve nasil vardiginda ortaya cikar. Yeni ucus ayni gun olabilir, geceye kayabilir veya tum plani
                ciddi sekilde bozabilir.
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
                      placement: "tr_istanbul_amsterdam_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  bildirim zamani ve nihai varis etkisini birlikte incelemek
                </a>{" "}
                dosyanin gercek gucunu daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <ArrowRightLeft className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En degerli belgeler: iptal bildirimi, yeni rota, gercek varis
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Iptal dosyalarinda en degerli pratik belgeler genelde cok basittir: iptal mesaji, e-posta, uygulama
                ekranlari, yeni rota bilgisi, boarding pass ve Amsterdam'a gercek varis saati. Bu zincir ne kadar net
                korunursa dosyanin okunmasi o kadar guclu olur.
              </p>
              <p>
                Cunku iyi iptal dosyasi, sadece neyin iptal oldugunu degil, yerine ne konuldugunu da gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, sadece iptalin varligina veya sadece bildirim tarihine bakmaktir. Oysa bu hatta
              dosyanin gucu, yeni rota ve Amsterdam'a final etkisiyle birlikte anlasilir.
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
                  Hayir. Bildirim zamani, yeni rota kalitesi ve Amsterdam'a gercek varis birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En kritik veri nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik veri, iptalin bildirim zamani ile yeni rotanin son hedefe etkisidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Iptal mesaji, e-posta, uygulama ekranlari, yeni rota ve Amsterdam'a gercek varis saati saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
