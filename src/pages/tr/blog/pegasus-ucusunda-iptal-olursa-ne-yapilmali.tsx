import Link from "next/link";
import { ArrowRightLeft, CheckCircle2, PlaneTakeoff, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "pegasus-ucusunda-iptal-olursa-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-pegasus-cancelled-flight&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-pegasus-cancelled-flight&utm_content=text_link";

export default function TrPegasusCancellationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Pegasus ucusunda iptal olursa ne yapilmali?"
        description="Pegasus ucusunda iptal olursa ne yapilmali? Turk yolcular icin yeni rota, nihai varis ve claim mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Pegasus ucusunda iptal olursa ne yapilmali?",
            description:
              "Pegasus ucusunda iptal olursa ne yapilmali? Turk yolcular icin yeni rota, nihai varis ve claim mantigini anlatan net rehber.",
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
                name: "Pegasus ucusunda iptal olursa ilk neye bakilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk olarak iptalin ne zaman bildirildigine, hangi yeni rotanin sunulduguna ve yolcunun son hedefe gercekte ne zaman varacagina bakilmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Pegasus iptali otomatik olarak para dogurur mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Iptal onemli bir baslangictir, ama tek basina yeterli degildir. Bildirim zamani, yeni cozumun kalitesi ve nihai varis birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Pegasus iptal dosyasinda hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SMS, e-posta, uygulama ekranlari, yeni rota bilgileri, boarding pass ve son hedefe gercek varis saatini gosteren kayitlar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Pegasus iptal rehberi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Havayolu Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Pegasus ucusunda iptal olursa ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Pegasus aramalarinda kullanici genelde ayni anda iki soruyu sorar: “Simdi ne yapmaliyim?” ve
              “Bu dosya ne kadar guclu olabilir?” Dogru analiz, <strong>bildirim zamani</strong>,
              <strong> yeni rota kalitesi</strong> ve <strong>nihai varis sonucu</strong> birlikte okundugunda ortaya
              cikar; sadece marka veya low-cost etiketi uzerinden degil.
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
              <strong>Pegasus ucusunda iptal varsa ilk odak noktasi, yeni cozumun kalitesi olmalidir.</strong> Sadece
              “ucus iptal oldu” bilgisi yetmez; asil tablo, ne zaman haber verildigi ve yolcunun son hedefe gercekte
              ne zaman vardigi ile kurulur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Pegasus iptal analizi"
            title="Pegasus iptal dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, sadece marka adina veya iptal kelimesine bakarak karar vermektir. Yeni rota, final etki ve belge duzeni sonucu ciddi sekilde degistirebilir."
            ctaHref={CLAIM_URL}
            ctaLabel="Pegasus iptal dosyami kontrol et"
            placement="tr_pegasus_cancel_article_embed_high"
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
                <li>Nihai varisin net belgelenmesi.</li>
                <li>SMS, e-posta ve uygulama ekranlarinin saklanmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece iptalin varligina odaklanmak.</li>
                <li>Low-cost oldugu icin dosyayi bastan kapatmak.</li>
                <li>Yeni rotayi ve final etkisini okumamak.</li>
                <li>Son hedefe gercek varis zamanini kaydetmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Pegasus iptal dosyalarinda ilk soru: size ne teklif edildi?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici cogu zaman sadece iptali gorup dosyayi ya cok guclu ya da tamamen kapali sanar. Oysa claim
                acisindan ilk soru, havayolunun size ne sundugudur. Yeni ucus ayni gun mu, ertesi gun mu, ciddi
                bekleme mi var, baglanti mi bozuldu? Butun agirlik burada belirginlesir.
              </p>
              <p>
                Yani iptal tek basina degil, yerine ne konuldugu ile okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Pegasus dosyalarinda nihai varis, sonucun en kritik testidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En kritik saat, uygulamadaki ilk degisiklik degil; yolcunun son hedefe gercekte ne zaman vardigidir.
                Bazen havayolu teknik olarak alternatif sunar ama finalde buyuk zaman kaybi yaratir.
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
                      placement: "tr_pegasus_cancel_article_text_link",
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
              3. Marka tek basina karar vermez, cozum kalitesi verir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Pegasus dosyalarinda en yaygin hata, markanin low-cost olmasi nedeniyle sureci fazla basit okumaktir.
                Oysa gerçek fark, yeni ucusun toplam kaybi ne kadar buyuttugunde ve dosyanin nasil belgelendiginde
                ortaya cikar.
              </p>
              <p>
                Bu nedenle marka, ancak analizde bir katmandir; sonucu tek basina belirlemez.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-amber-800 dark:text-amber-300">
              <ShieldAlert className="h-6 w-6" />
              Pratik not
            </h2>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Iptal oldugunda sadece ilk SMS'i degil, sonraki uygulama degisikliklerini ve yeni rota ekranlarini da
              saklayin. Pegasus dosyalarinda bu kronolojik zincir sonradan cok buyuk fark yaratir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Pegasus ucusunda iptal olursa ilk neye bakilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk olarak iptalin ne zaman bildirildigine, hangi yeni rotanin sunulduguna ve yolcunun son hedefe
                  gercekte ne zaman varacagina bakilmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Pegasus iptali otomatik olarak para dogurur mu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Iptal onemli bir baslangictir, ama tek basina yeterli degildir. Bildirim zamani, yeni
                  cozumun kalitesi ve nihai varis birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Pegasus iptal dosyasinda hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  SMS, e-posta, uygulama ekranlari, yeni rota bilgileri, boarding pass ve son hedefe gercek varis
                  saatini gosteren kayitlar saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
