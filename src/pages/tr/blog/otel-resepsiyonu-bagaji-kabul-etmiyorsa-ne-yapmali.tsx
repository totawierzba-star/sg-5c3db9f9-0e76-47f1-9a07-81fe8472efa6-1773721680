import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "otel-resepsiyonu-bagaji-kabul-etmiyorsa-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-hotel-reception-refuses-baggage&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-hotel-reception-refuses-baggage&utm_content=text_link";

export default function TrHotelReceptionRefusesBaggageArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Otel resepsiyonu bagaji kabul etmiyorsa ne yapmali?"
        description="Otel resepsiyonu bagaji kabul etmiyorsa ne yapmali? Turk yolcular icin alternatif teslim noktasi, guest name, telefon teyidi ve yeniden planlamayi anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Otel resepsiyonu bagaji kabul etmiyorsa ne yapmali?",
            description:
              "Otel resepsiyonu bagaji kabul etmiyorsa ne yapmali? Turk yolcular icin alternatif teslim noktasi, guest name, telefon teyidi ve yeniden planlamayi anlatan net rehber.",
            author: { "@type": "Organization", name: "ProblemLot.com" },
            publisher: {
              "@type": "Organization",
              name: "ProblemLot.com",
              logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" },
            },
            datePublished: "2026-04-12",
            dateModified: "2026-04-12",
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://problemlot.com/tr/blog/${SLUG}` },
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
                name: "Resepsiyon bagaji almak istemezse dosya bloke olur mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir, ama teslim plani hemen yeniden kurulmalidir. Aksi halde bagaj bir sonraki asamada yeniden belirsizlige dusebilir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu durumda hangi alternatifler vardir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dogrudan yolcuya teslim, baska bir adres, farkli bir otel veya yeni bir kurye planlamasi gibi alternatifler olusabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi kayitlar saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Resepsiyonun kabul etmedigi anin notu, tracking screeni, arama kaydi, yeni adres bilgisi ve yeniden planlama yazismalari saklanmalidir.",
                },
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/tr" className="hover:text-red-600 dark:hover:text-red-400">Ana sayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/tr/blog" className="hover:text-red-600 dark:hover:text-red-400">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">Otel resepsiyonu bagaji kabul etmiyorsa ne yapmali</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Otel resepsiyonu bagaji kabul etmiyorsa ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, otele yonlenen bagaj teslimlerinde en keskin blokajlardan biridir: kurye gelir ama resepsiyon valizi
              teslim almak istemez. Dogru analiz, sadece "otel zorluk cikariyor" demekten degil, <strong>neden kabul
              etmedigini anlamaktan</strong>, <strong>alternatif teslim noktasini hizla kurmaktan</strong> ve
              <strong> bu reddin zaman cizgisinde nasil belgelendigini gostermekten</strong> dogar.
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
              <strong>Resepsiyon bagaji kabul etmiyorsa dosya bitmez, ama teslim plani hemen yeniden kurulmalidir.</strong>
              Bu anda yeni adres, dogrudan teslim veya yeni kurye planlamasi acik sekilde netlesmelidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger hotel refusal analizi"
            title="Reddedilen otel teslim dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, reddedilen teslimden sonra ne olacaginin kendiliginden netlesecegini sanmaktir. Reddin sebebi, yeni teslim noktasi ve belge zinciri birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_hotel_reception_refuses_baggage_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Resepsiyonun red anini tarih ve saatle kaydetmek.</li>
                <li>Red sebebini net sormak ve not etmek.</li>
                <li>Yeni teslim noktasini ayni gun kurmak.</li>
                <li>Arama, mesaj ve tracking screenlerini ayni dosyada tutmak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Red sebebini netlestirmeden beklemek.</li>
                <li>Yeni teslim noktasi vermeyi geciktirmek.</li>
                <li>Kurye ile resepsiyon arasindaki catiskiyi belgelememek.</li>
                <li>Eski otel bilgisinin hala aktif sanmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">1. Resepsiyon neden bagaji reddedebilir?</h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Otelin politikasi, guest name bulunamamasi, check-out sonrasi teslim, guvenlik proseduru veya ic
                sorumluluk korkusu buna neden olabilir. Yani red her zaman kotu niyet degil, bazen operasyon
                politikasidir.
              </p>
              <p>
                Burada asil mesele, reddin sonraki adimi ne kadar hizli tetikledigidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">2. Alternatif teslim plani nasil kurulmalidir?</h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Dogrudan yolcuya teslim, farkli bir adres, baska bir otel ya da farkli zaman slotu gibi secenekler
                acik sekilde netlesmelidir. Bu asamada belirsizlik ne kadar uzarsa bagaj dosyasi o kadar tekrar
                dagilmaya baslar.
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
                      placement: "tr_hotel_reception_refuses_baggage_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  reddedilen teslimi ve yeni plani birlikte incelemek
                </a>{" "}
                surecin neden takildigini daha net gosterebilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Bu red nasil belgeye donusturulur?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Tracking screeni, red saati, kimin kabul etmedigi, hangi nedenle kabul edilmedigi ve yeni planin ne
                zaman kuruldugu ayni timeline icinde tutulmalidir. Boylece sorun yalnizca "otel almadi" cumlesine
                indirgenmez.
              </p>
              <p>
                Guclu dosya, teslim blokajinin ne zaman ve nasil asildigini gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, resepsiyon reddettiyse top artik tamamen otelde diye dusunmektir. Oysa tam bu anda
              yeni teslim noktasi ve yeni timeline kurulmazsa dosya yeniden belirsizlesir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Resepsiyon bagaji almak istemezse dosya bloke olur mu?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir, ama teslim plani hemen yeniden kurulmalidir. Aksi halde bagaj bir sonraki asamada yeniden belirsizlige dusebilir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Bu durumda hangi alternatifler vardir?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Dogrudan yolcuya teslim, baska bir adres, farkli bir otel veya yeni bir kurye planlamasi gibi alternatifler olusabilir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Hangi kayitlar saklanmali?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Resepsiyonun kabul etmedigi anin notu, tracking screeni, arama kaydi, yeni adres bilgisi ve yeniden planlama yazismalari saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
