import Link from "next/link";
import { ArrowRightLeft, CheckCircle2, PlaneTakeoff, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "istanbul-londra-ucusunda-iptal-olursa-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-istanbul-london-cancelled-flight&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-istanbul-london-cancelled-flight&utm_content=text_link";

export default function TrIstanbulLondonCancellationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Istanbul-Londra ucusunda iptal olursa ne yapilmali?"
        description="Istanbul-Londra ucusunda iptal olursa ne yapilmali? Turk yolcular icin yeni rota, nihai varis ve claim mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Istanbul-Londra ucusunda iptal olursa ne yapilmali?",
            description:
              "Istanbul-Londra ucusunda iptal olursa ne yapilmali? Turk yolcular icin yeni rota, nihai varis ve claim mantigini anlatan net rehber.",
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
            datePublished: "2026-04-10",
            dateModified: "2026-04-10",
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
                name: "Istanbul-Londra ucusunda iptal olursa ilk neye bakilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk olarak iptalin ne zaman bildirildigine, hangi yeni rotanin sunulduguna ve yolcunun Londra'ya gercekte ne zaman varacagina bakilmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Istanbul-Londra iptali otomatik olarak tazminat anlamina gelir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Iptal guclu bir baslangictir ama tek basina yetmez. Bildirim zamani, yeni rota kalitesi ve nihai varis birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Istanbul-Londra iptal dosyasinda hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PNR, boarding pass, e-posta ve uygulama bildirimleri, yeni rota teklifleri ve Londra'ya gercek varis saatini gosteren kayitlar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Istanbul-Londra iptal rehberi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Rota Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Istanbul-Londra ucusunda iptal olursa ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Istanbul-Londra hattinda iptal aramasi, en yuksek intentli senaryolardan biridir. Bu rotada dogru
              analiz, sadece iptal bilgisine degil, <strong>bildirim zamani</strong>,
              <strong> yeni rota kalitesi</strong> ve <strong>Londra nihai varis sonucuna</strong> bakilarak yapilir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
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
              <strong>Istanbul-Londra ucusunda iptal varsa ilk odak noktasi, yerine ne sunuldugudur.</strong> Sadece
              “iptal oldu” bilgisi yetmez; asil tablo, ne zaman haber verildigi ve yolcunun Londra'ya gercekte ne
              zaman vardigi ile kurulur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Istanbul-Londra iptal analizi"
            title="Istanbul-Londra iptal dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, sadece iptal kelimesine bakarak karar vermektir. Yeni rota, final etki ve belge duzeni sonucu ciddi sekilde degistirebilir."
            ctaHref={CLAIM_URL}
            ctaLabel="Istanbul-Londra iptal dosyami kontrol et"
            placement="tr_istanbul_london_cancel_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Iptalin gec bildirilmesi.</li>
                <li>Londra'ya varisi ciddi sekilde geciktiren yeni rota.</li>
                <li>Nihai varisin net belgelenmesi.</li>
                <li>E-posta, uygulama ve ekran goruntulerinin saklanmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece iptalin varligina odaklanmak.</li>
                <li>Yeni rotayi ve toplam zaman kaybini okumamak.</li>
                <li>Londra final saatini kaydetmemek.</li>
                <li>Ilk bildirimlerden sonra belge zincirini koparmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Istanbul-Londra iptal dosyasinda ilk soru: size ne teklif edildi?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bu hatta kullanici genelde sadece iptali gorup sonuca gitmek ister. Oysa claim acisindan asil soru,
                havayolunun yerine ne sundugudur. Yeni ucus ayni gun mu, ertesi gun mu, farkli havalimanina mi iniyor,
                ek baglanti mi gerektiriyor? Butun agirlik burada belirginlesir.
              </p>
              <p>Yani iptal tek basina degil, yerine ne konuldugu ile okunmalidir.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Londra nihai varisi, sonucun en kritik testidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En kritik saat, ilk iptal maili degil; yolcunun Londra'ya gercekte ne zaman vardigidir. Bazen yeni
                cozum kagit ustunde makul gorunur ama finalde ciddi zaman kaybi yaratir.
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
                      placement: "tr_istanbul_london_cancel_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  bildirim zamani ve Londra final etkisini birlikte incelemek
                </a>{" "}
                dosyanin gercek gucunu daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <ArrowRightLeft className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Bu rotada yeni cozumun kalitesi ve UK baglami belirleyicidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Istanbul-Londra gibi yogun hatlarda havayolu size hizli bir alternatif sunabilir. Ama gercek soru,
                bunun yolcuyu ne kadar geriye attigidir. Saat farki, ekstra bekleme ve Londra'ya ulasim bicimi sonucu
                ciddi sekilde etkiler.
              </p>
              <p>Bu nedenle iyi dosya, sadece iptali degil, alternatif cozumun kalitesini de gosterir.</p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-amber-800 dark:text-amber-300">
              <ShieldAlert className="h-6 w-6" />
              Pratik kontrol listesi
            </h2>
            <ul className="space-y-3 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <li>Iptal bildiriminin saatini kaydedin.</li>
              <li>Yeni rota tekliflerinin ekran goruntusunu alin.</li>
              <li>Londra'ya gercek varis saatinizi not edin.</li>
              <li>PNR, boarding pass ve tum bildirimleri saklayin.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Istanbul-Londra ucusunda iptal olursa ilk neye bakilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk olarak iptalin ne zaman bildirildigine, hangi yeni rotanin sunulduguna ve yolcunun Londra'ya
                  gercekte ne zaman varacagina bakilmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Istanbul-Londra iptali otomatik olarak tazminat anlamina gelir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Iptal guclu bir baslangictir ama tek basina yetmez. Bildirim zamani, yeni rota kalitesi ve
                  nihai varis birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Istanbul-Londra iptal dosyasinda hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  PNR, boarding pass, e-posta ve uygulama bildirimleri, yeni rota teklifleri ve Londra'ya gercek varis
                  saatini gosteren kayitlar mutlaka saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
