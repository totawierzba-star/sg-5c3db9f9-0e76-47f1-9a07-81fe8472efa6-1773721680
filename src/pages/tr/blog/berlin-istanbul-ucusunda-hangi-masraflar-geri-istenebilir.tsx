import Link from "next/link";
import { CheckCircle2, Receipt, ShieldAlert, Sparkles, Wallet, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "berlin-istanbul-ucusunda-hangi-masraflar-geri-istenebilir";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-berlin-istanbul-expenses&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-berlin-istanbul-expenses&utm_content=text_link";

export default function TrBerlinIstanbulExpensesArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Berlin-Istanbul ucusunda hangi masraflar geri istenebilir?"
        description="Berlin-Istanbul ucusunda hangi masraflar geri istenebilir? Turk yolcular icin yemek, otel, transfer ve yeni bilet masraflarini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Berlin-Istanbul ucusunda hangi masraflar geri istenebilir?",
            description:
              "Berlin-Istanbul ucusunda hangi masraflar geri istenebilir? Turk yolcular icin yemek, otel, transfer ve yeni bilet masraflarini anlatan net rehber.",
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
                name: "Her harcama otomatik olarak geri istenebilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Her masraf ayni gucte degildir. Geri istenebilir kalemlerde en onemli nokta, masrafin makul olmasi ve belgelerle desteklenmesidir.",
                },
              },
              {
                "@type": "Question",
                name: "En sik hangi masraflar ortaya cikar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En sik yemek, icecek, otel, havaalani transferi ve bazen yeni bilet ya da ek ulasim masraflari ortaya cikar.",
                },
              },
              {
                "@type": "Question",
                name: "Fis ve fatura yoksa ne olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fis ve fatura yoksa masrafi sonradan savunmak daha zor hale gelir. Bu nedenle belge duzeni burada cok kritiktir.",
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
            <span className="text-slate-900 dark:text-white">Berlin-Istanbul masraf rehberi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Masraf Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Berlin-Istanbul ucusunda hangi masraflar geri istenebilir?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, ozellikle gecikme veya iptal sonrasi kullanicinin en pratik sorularindan biridir. Cunku sorun
              buyudugunde dosya sadece ucusla ilgili olmaktan cikar; yemek, otel, transfer ve bazen yeni bilet gibi
              ek maliyetler de devreye girer. Burada asil farki yaratan sey,
              <strong> masrafin makullugu</strong>, <strong>belge duzeni</strong> ve
              <strong> gercek ihtiyacla baglantisi</strong> olur.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Wallet className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Her masraf otomatik olarak geri alinmaz, ama bircok makul gider talep edilebilir.</strong>
              Yemek, icecek, otel, transfer ve bazen yeni bilet gibi kalemler dosyaya girebilir; burada belge duzeni ve
              masrafin mantikli olmasi en kritik noktadir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger masraf analizi"
            title="Berlin-Istanbul masraf dosyanizdaki hangi kalemlerin daha guclu oldugunu hizli kontrol edin"
            description="Bir cok yolcu ya hic talep etmiyor ya da savunulmasi zor harcamalari da ekliyor. Mesele sadece harcama yapmak degil, bunu mantikli ve belgeli hale getirmektir."
            ctaHref={CLAIM_URL}
            ctaLabel="Masraf dosyami kontrol et"
            placement="tr_berlin_istanbul_expenses_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                En sik guclu kalemler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Yemek ve icecek giderleri.</li>
                <li>Otel ve geceleme masraflari.</li>
                <li>Havaalani-sehir veya otel transferi.</li>
                <li>Bazi durumlarda yeni bilet veya ek ulasim kalemleri.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Fis ve faturayi saklamamak.</li>
                <li>Asiri pahali ve savunulmasi zor harcamalar yapmak.</li>
                <li>Masrafin neden dogdugunu not etmemek.</li>
                <li>Havayolunun ne sundugunu kaydetmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Yemek ve icecek giderleri, en temel ve en sik masraf kalemidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Uzun bekleme surelerinde en hizli ortaya cikan gider kalemi yemek ve icecektir. Bu, kullanicinin en
                cok unutup sonra da belgeleyemedigi alanlardan biridir. Oysa en basit fis bile sonra buyuk fark
                yaratabilir.
              </p>
              <p>Bu nedenle havaalanindaki kucuk harcamalar bile duzenli sekilde saklanmalidir.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Otel ve transfer masraflari, gecikme gecelemeye donustugunde daha guclu hale gelir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Dosya geceye sarkiyorsa, yolcunun mantikli sekilde konaklama ve buna bagli transfer ihtiyaci dogabilir.
                Bu tip masraflar pratikte cok onemlidir, ama savunulabilmesi icin hem makul olmasi hem de belgelenmesi
                gerekir.
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
                      placement: "tr_berlin_istanbul_expenses_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  masraf kalemlerini belge zinciriyle birlikte incelemek
                </a>{" "}
                dosyanin gucunu daha netlestirir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Receipt className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En buyuk farki, fis ve fatura duzeni yaratir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Hangi kalem talep edilebilecegini bilmek kadar, bunu nasil ispatlayacaginizi bilmek de onemlidir. Fis,
                fatura, tarih, saat ve masrafin ne icin yapildigi birlikte gorunuyorsa dosya daha guclu hale gelir.
              </p>
              <p>Hatirlamaya dayali liste yerine belgeye dayali liste her zaman daha temizdir.</p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, her harcamayi ayni guc seviyesinde sanmaktir. Oysa makuliyet, ihtiyac ve belge duzeni,
              masrafin dosyadaki agirligini ciddi sekilde degistirir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Her masraf otomatik geri istenebilir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Masrafin makul olmasi, gercek ihtiyaca baglanmasi ve iyi belgelenmesi gerekir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En sik hangi kalemler ortaya cikar?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Yemek, icecek, otel, transfer ve bazen yeni bilet veya ek ulasim kalemleri en sik gorulen
                  masraflardir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Fis ve fatura yoksa ne olur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Belge yoksa masrafi sonradan savunmak daha zor hale gelir. Bu nedenle fis ve fatura duzeni burada
                  cok kritiktir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
