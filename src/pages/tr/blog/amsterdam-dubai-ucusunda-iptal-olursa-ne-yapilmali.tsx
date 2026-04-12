import Link from "next/link";
import { ArrowRightLeft, CheckCircle2, PlaneTakeoff, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "amsterdam-dubai-ucusunda-iptal-olursa-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-amsterdam-dubai-cancelled-flight&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-amsterdam-dubai-cancelled-flight&utm_content=text_link";

export default function TrAmsterdamDubaiCancellationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Amsterdam-Dubai ucusunda iptal olursa ne yapilmali?"
        description="Amsterdam-Dubai ucusunda iptal olursa ne yapilmali? Turk yolcular icin yeni rota, long-haul mantigi ve nihai varis etkisini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Amsterdam-Dubai ucusunda iptal olursa ne yapilmali?",
            description:
              "Amsterdam-Dubai ucusunda iptal olursa ne yapilmali? Turk yolcular icin yeni rota, long-haul mantigi ve nihai varis etkisini anlatan net rehber.",
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
                name: "Amsterdam-Dubai ucusunda iptal olursa ilk neye bakilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk olarak havayolunun iptali ne zaman bildirdigine, hangi yeni rotayi sunduguna ve yolcunun Dubai'ye gercekte ne zaman ulasacagina bakilmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu rotada AB kalkisli olmak neden onemlidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Amsterdam cikisli oldugu icin rota hukuki acidan daha guclu okunabilir. Ancak iptal dosyasinda yine bildirim zamani, yeni cozumun kalitesi ve nihai varis sonucu birlikte degerlendirilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmalidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Iptal mesaji, e-posta, uygulama ekranlari, yeni rota bilgisi, boarding pass ve Dubai'ye gercek varis saatini gosteren kayitlar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Amsterdam-Dubai iptal rehberi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Rota Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Amsterdam-Dubai ucusunda iptal olursa ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu rota, hem tatil hem is hem de aktarmali long-haul seyahatleri nedeniyle guclu bir arama niyeti tasir.
              Kullanici genelde iki soruya ayni anda cevap arar: “simdi ne yapmaliyim?” ve “bu dosya ne kadar
              guclu olabilir?” Dogru analiz, <strong>bildirim zamani</strong>, <strong>yeni rota kalitesi</strong> ve
              <strong> Dubai&apos;ye nihai varis sonucu</strong> birlikte okundugunda ortaya cikar.
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
              <strong>Amsterdam-Dubai hattinda iptal olursa ilk odak noktasi, size sunulan yeni cozumun kalitesi olmalidir.</strong>
              Bu rota AB&apos;den ciktigi icin kapsam mantigi onemlidir, ama dosyanin gercek agirligi yine ne zaman haber
              verildigi ve Dubai&apos;ye gercekte ne zaman varildigi ile kurulur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Amsterdam-Dubai analizi"
            title="Amsterdam-Dubai iptal dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu hatta en buyuk hata, sadece iptal bilgisini okuyup long-haul oldugu icin otomatik sonuc beklemektir. Yeni rota, final varis ve belge duzeni sonucu ciddi sekilde degistirebilir."
            ctaHref={CLAIM_URL}
            ctaLabel="Amsterdam-Dubai dosyami kontrol et"
            placement="tr_amsterdam_dubai_cancel_article_embed_high"
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
                <li>Dubai'ye nihai varisin net belgelenmesi.</li>
                <li>Mesajlar, boarding pass ve yeni rota bilgilerinin saklanmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece iptalin varligina odaklanmak.</li>
                <li>Yeni rotayi ve final etkisini okumamak.</li>
                <li>Bildirim saatini saklamamak.</li>
                <li>Dubai'ye gercek varis zamanini kaydetmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bu hatta ilk soru: size ne teklif edildi?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Amsterdam-Dubai iptal dosyalarinda ilk soru panik degil, havayolunun size ne sundugudur. Yeni ucus
                ayni gun mu, ertesi gun mu, farkli bir saat mi, farkli bir tasiyici mi, ciddi bekleme mi var? Butun
                agirlik burada belirginlesir.
              </p>
              <p>
                Yani iptal tek basina degil, yerine ne konuldugu ve bunun yolculugu nasil degistirdigi ile okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Dubai'ye nihai varis, dosyanin gercek sonucunu belirler
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bu hatta da en kritik saat, kalkis panosundaki yeni zaman degil, yolcunun Dubai&apos;ye gercekte ne zaman
                vardigidir. Bazen havayolu teknik olarak alternatif sunar ama finalde buyuk zaman kaybi yaratir.
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
                      placement: "tr_amsterdam_dubai_cancel_article_text_link",
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
                Amsterdam-Dubai iptal dosyasinda en guclu pratik belgeler genelde nettir: iptal mesaji, e-posta,
                uygulama ekranlari, yeni rota bilgisi, boarding pass ve Dubai&apos;ye gercek varis saati. Bu zincir ne
                kadar duzenliyse, dosya o kadar guclu okunur.
              </p>
              <p>
                Cunku iyi iptal dosyasi, sadece hangi planin bozuldugunu degil, yerine neyin geldigi ve ne kadar kayip
                yarattigini da gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-amber-800 dark:text-amber-300">
              <ShieldAlert className="h-6 w-6" />
              Pratik kontrol listesi
            </h2>
            <ul className="space-y-3 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <li>Iptal mesajini ve uygulama ekranlarini saklayin.</li>
              <li>Sunulan yeni ucusu ve saat farkini not edin.</li>
              <li>Dubai'ye gercek varis zamanini kaydedin.</li>
              <li>Varsa otel, transfer ve yemek masraflarinin fislerini tutun.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Amsterdam-Dubai ucusunda iptal olursa ilk neye bakilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk olarak havayolunun iptali ne zaman bildirdigine, hangi yeni rotayi sunduguna ve yolcunun
                  Dubai&apos;ye gercekte ne zaman ulasacagina bakilmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu rotada AB kalkisli olmak neden onemlidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Amsterdam cikisli oldugu icin rota hukuki acidan daha guclu okunabilir. Ancak iptal dosyasinda yine
                  bildirim zamani, yeni cozumun kalitesi ve nihai varis sonucu birlikte degerlendirilmelidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmalidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Iptal mesaji, e-posta, uygulama ekranlari, yeni rota bilgisi, boarding pass ve Dubai&apos;ye gercek
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
