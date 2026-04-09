import Link from "next/link";
import { ArrowRightLeft, CheckCircle2, PlaneTakeoff, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "dalaman-amsterdam-ucusunda-iptal-olursa-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-dalaman-amsterdam-cancelled-flight&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-dalaman-amsterdam-cancelled-flight&utm_content=text_link";

export default function TrDalamanAmsterdamCancellationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Dalaman-Amsterdam ucusunda iptal olursa ne yapilmali?"
        description="Dalaman-Amsterdam ucusunda iptal olursa ne yapilmali? Turk yolcular icin yeni rota, nihai varis ve tazminat mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Dalaman-Amsterdam ucusunda iptal olursa ne yapilmali?",
            description:
              "Dalaman-Amsterdam ucusunda iptal olursa ne yapilmali? Turk yolcular icin yeni rota, nihai varis ve tazminat mantigini anlatan net rehber.",
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
                name: "Dalaman-Amsterdam ucusunda iptal olursa ilk neye bakilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk olarak havayolunun ne zaman bildirim yaptigina, hangi yeni rotayi sunduguna ve yolcunun Amsterdam'a gercekte ne zaman ulasacagina bakilmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Iptal varsa otomatik tazminat dogar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Iptalin kendisi cok onemlidir ama tek basina yeterli degildir. Bildirim zamani ve yeni cozumun kalitesi birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Iptal mesaji, e-posta, yeni rota bilgisi, boarding pass ve Amsterdam'a gercek varis saatini gosteren kayitlar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Dalaman-Amsterdam iptal rehberi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Rota Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Dalaman-Amsterdam ucusunda iptal olursa ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu rota, sezonluk yolculuk ile Hollanda tarafindaki diaspora ve tatil donusu aramalarini birlestiren
              guclu bir long-taildir. Kullanici genelde ayni anda iki soruyu sorar: “Simdi ne yapmaliyim?” ve
              “Bu dosya ne kadar guclu olabilir?” Dogru analiz, <strong>bildirim zamani</strong>,
              <strong> yeni rota kalitesi</strong> ve <strong>Amsterdam'a nihai varis sonucu</strong> birlikte
              okundugunda ortaya cikar.
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
              <strong>Dalaman-Amsterdam hattinda iptal olursa ilk odak noktasi, yeni cozumun kalitesi olmalidir.</strong>
              Sadece “ucus iptal oldu” bilgisi yetmez; asil tablo, ne zaman haber verildigi ve Amsterdam'a gercekte ne
              zaman varildigi ile kurulur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Dalaman-Amsterdam analizi"
            title="Dalaman-Amsterdam iptal dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu hatta en buyuk hata, iptali tek satirlik cevap sanmaktir. Oysa yeni rota, son hedefe etki ve belge duzeni sonucu ciddi sekilde degistirebilir."
            ctaHref={CLAIM_URL}
            ctaLabel="Dalaman-Amsterdam dosyami kontrol et"
            placement="tr_dalaman_amsterdam_cancel_article_embed_high"
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
                <li>Amsterdam'a nihai varisin net belgelenmesi.</li>
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
                <li>Amsterdam'a gercek varis zamanini kaydetmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bu hatta ilk soru: size ne teklif edildi?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Dalaman-Amsterdam iptal dosyalarinda kullanicinin ilk duygusu genelde sezon ortasi kaostur. Ancak
                claim acisindan ilk soru panik degil, havayolunun size ne sundugudur. Yeni ucus ayni gun mu, ertesi
                gun mu, ciddi bekleme mi var, baglanti mi bozuldu? Butun agirlik burada belirginlesir.
              </p>
              <p>
                Yani iptal tek basina degil, yerine ne konuldugu ile okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Amsterdam'a nihai varis, dosyanin gercek sonucunu belirler
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bu hatta da en kritik saat, kalkis panosundaki yeni zaman degil, yolcunun Amsterdam'a gercekte ne
                zaman vardigidir. Bazen havayolu teknik olarak alternatif sunar ama finalde buyuk zaman kaybi yaratir.
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
                      placement: "tr_dalaman_amsterdam_cancel_article_text_link",
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
              3. Sezonluk rotalarda yeni cozum kalitesi daha da kritik olabilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Dalaman-Amsterdam gibi hatlarda kullanici bazen “zaten sezonluk rota, yapacak bir sey yok” diye
                dusunur. Oysa tam tersine, sezonluk rotalarda yeni ucusun kalitesi ve bekleme suresi daha buyuk fark
                yaratabilir. Cunku sonraki alternatif her zaman ayni guclukte bulunmaz.
              </p>
              <p>
                Bu nedenle sezon faktoru, dosyayi otomatik kapatmak icin degil; yeni cozumun etkisini daha dikkatli
                okumak icin kullanilmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-amber-800 dark:text-amber-300">
              <ShieldAlert className="h-6 w-6" />
              Pratik not
            </h2>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Iptal oldugunda sadece ilk SMS'i degil, sonraki saat degisikliklerini ve yeni rota ekranlarini da
              saklayin. Sezonluk Hollanda rotalarinda dosyanin agirligi cogu zaman bu kronolojik zincir sayesinde
              netlesir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Dalaman-Amsterdam ucusunda iptal olursa ilk neye bakilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk olarak havayolunun ne zaman bildirim yaptigina, hangi yeni rotayi sunduguna ve yolcunun
                  Amsterdam'a gercekte ne zaman ulasacagina bakilmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Iptal varsa otomatik tazminat dogar mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Iptalin kendisi cok onemlidir ama tek basina yeterli degildir. Bildirim zamani ve yeni
                  cozumun kalitesi birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Iptal mesaji, e-posta, yeni rota bilgisi, boarding pass ve Amsterdam'a gercek varis saatini gosteren
                  kayitlar saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
