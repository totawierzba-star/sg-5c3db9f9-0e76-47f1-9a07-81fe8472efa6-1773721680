import Link from "next/link";
import { CheckCircle2, Clock3, Euro, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "paris-istanbul-ucusunda-3-saat-gecikme-olursa-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-paris-istanbul-3-hour-delay&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-paris-istanbul-3-hour-delay&utm_content=text_link";

export default function TrParisIstanbulThreeHourDelayArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Paris-Istanbul ucusunda 3 saat gecikme olursa ne yapilmali?"
        description="Paris-Istanbul ucusunda 3 saat gecikme olursa ne yapilmali? Turk yolcular icin nihai varis, belge duzeni ve tazminat mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Paris-Istanbul ucusunda 3 saat gecikme olursa ne yapilmali?",
            description:
              "Paris-Istanbul ucusunda 3 saat gecikme olursa ne yapilmali? Turk yolcular icin nihai varis, belge duzeni ve tazminat mantigini anlatan net rehber.",
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
                name: "Paris-Istanbul hattinda 3 saat gecikme olursa para otomatik kesin midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. 3 saatlik esik cok guclu bir isaret olsa da, tek basina yeterli degildir. Asil analiz, yolcunun Istanbul'a gercekte ne zaman vardigi ve dosyanin hukuki kapsam mantigi ile yapilir.",
                },
              },
              {
                "@type": "Question",
                name: "En kritik saat hangisidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik saat, ucagin Paris'ten gec kalktigi an degil; yolcunun Istanbul'a gercekte ne zaman vardigidir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmalidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Boarding pass, PNR, mesajlar, uygulama ekranlari, varsa yeni rota bilgisi ve Istanbul'a gercek varis saatini gosteren kayitlar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Paris-Istanbul 3 saat gecikme</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Rota Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Paris-Istanbul ucusunda 3 saat gecikme olursa ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, Fransa-Turkiye hattinda yuksek niyetli ve cok pratik bir aramadir. Kullanici genelde “3 saat olduysa
              ne kadar gucluyum?” diye dusunur. Oysa gercek analiz,
              <strong> Istanbul'a nihai varis</strong>, <strong>belge duzeni</strong> ve
              <strong> rotanin hukuki mantigi</strong> birlikte okundugunda netlesir.
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
              <strong>Paris-Istanbul hattinda 3 saatlik gecikme cok guclu bir esiktir, ama tek basina otomatik cevap vermez.</strong>
              Asil belirleyici olan sey, Istanbul'a gercekte ne zaman vardiginiz ve dosyanin butun yapisinin nasil
              okundugudur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger 3 saat rota analizi"
            title="Paris-Istanbul 3 saat gecikme dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu hatta kullanicilar genelde sadece saat sayisina bakar. Oysa nihai varis ve belge akisi birlikte okununca dosya daha net degerlenir."
            ctaHref={CLAIM_URL}
            ctaLabel="3 saat gecikme dosyami kontrol et"
            placement="tr_paris_istanbul_3h_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Istanbul'a nihai varista 3 saate yakin veya ustunde net kayip olmasi.</li>
                <li>Mesajlar, boarding pass ve uygulama ekranlarinin korunmasi.</li>
                <li>Varsa yeni rota bilgisinin saklanmasi.</li>
                <li>Gercek varis saatinin net belgelenmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece Paris'teki kalkis farkina bakmak.</li>
                <li>3 saat kuralini tek satirlik para formulu sanmak.</li>
                <li>Istanbul'a gercek varis saatini kaydetmemek.</li>
                <li>Mesaj ve rota degisimi ekranlarini saklamamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. 3 saat kuralinda asil saat, Istanbul'a final varis saatidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen Paris'teki kalkis ekranina bakarak sonuca gitmek ister. Oysa gecikme dosyasinin asil
                agirligi, Istanbul'a ne kadar gec vardiginizla ortaya cikar. Ilk gecikme daha kucuk gorunse bile final
                variste daha buyuk zaman kaybi oluşabilir.
              </p>
              <p>
                Bu nedenle 3 saatlik esik, panodan cok final sonuca gore okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Bu hatta da saat kadar belge duzeni onemlidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanicinin elindeki en guclu malzeme genelde basittir: boarding pass, PNR, mesajlar, uygulama
                ekranlari ve varsa yeni saat bilgileri. Bunlar olmadan “3 saat oldu” cümlesi pratikte daha zayif
                kalabilir.
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
                      placement: "tr_paris_istanbul_3h_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  final varis ve belge zincirini birlikte incelemek
                </a>{" "}
                dosyanin gucunu daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En guclu “kac para dogar?” cevabi, ancak iyi olay akisi ile kurulur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Tutar odakli aramalar bu hatta da cok gucludur. Ancak kullaniciya verilecek en temiz cevap, sadece
                teorik rakam degil, dosyanin gerçekten ne kadar duzgun belgelendigiyle ilgilidir. Final varis, mesaj
                zinciri ve varsa rota degisikligi birlikte gorulmelidir.
              </p>
              <p>
                Yani iyi bir “ne kadar tazminat?” cevabi, iyi bir dosya duzeni ister.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, 3 saat gecikmeyi otomatik ve tek satirlik para formulu sanmaktir. Oysa bu hatta da
              gerçek fark, Istanbul'a final varis ve belge duzeninde ortaya cikar.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  3 saat olursa para kesin midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Cok guclu bir esik olsa da final varis ve dosyanin tum yapisi yine birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En kritik saat hangisidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik saat, Istanbul'a gercekte hangi saatte vardiginizdir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmalidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Boarding pass, PNR, mesajlar, ekran goruntuleri ve gercek varis saatini gosteren kayitlar
                  saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
