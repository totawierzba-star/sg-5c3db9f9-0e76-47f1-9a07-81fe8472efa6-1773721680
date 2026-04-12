import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagaj-tesliminde-guest-name-yanlis-yazildiysa-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-guest-name-wrong&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-guest-name-wrong&utm_content=text_link";

export default function TrBaggageGuestNameWrongArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagaj tesliminde guest name yanlis yazildiysa ne yapmali?"
        description="Bagaj tesliminde guest name yanlis yazildiysa ne yapmali? Turk yolcular icin resepsiyon teyidi, isim uyumsuzlugu, oda bilgisi ve teslim zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagaj tesliminde guest name yanlis yazildiysa ne yapmali?",
            description:
              "Bagaj tesliminde guest name yanlis yazildiysa ne yapmali? Turk yolcular icin resepsiyon teyidi, isim uyumsuzlugu, oda bilgisi ve teslim zincirini anlatan net rehber.",
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
                name: "Guest name yanlissa bagaj yanlis kisiye gidebilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, isim uyumsuzlugu otelde teslim aramasini zorlastirabilir. Bu nedenle guest name, oda bilgisi ve telefon numarasi hizla teyit edilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu durumda ilk kimle gorusmek gerekir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Once resepsiyon ve gerekiyorsa vardiya sorumlusu ile gorusulmeli, sonra havayolu veya teslimi yoneten tarafla ayni bilgilerin eslestigi kontrol edilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi kayitlar saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tracking screeni, guest name dogrusu, oda bilgisi, resepsiyon notlari ve varsa arama ya da e-posta zinciri birlikte saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Guest name yanlis yazildiysa ne yapmali</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagaj tesliminde guest name yanlis yazildiysa ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Otel teslimlerinde en masum gorunen hata bazen en buyuk karisikligi yaratir: guest name yanlis,
              eksik veya farkli yazilmistir. Dogru analiz, sadece "isimde typo var" demekten degil,
              <strong> bunun resepsiyon ic aramasini nasil bozdugunu</strong>, <strong>oda ve rezervasyonla nasil
              eslestigini</strong> ve <strong>bu uyumsuzlugun belge zincirinde nasil duzeltildigini</strong>
              anlamaktan dogar.
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
              <strong>Guest name yanlissa sorun sadece yazim hatasi degil, teslim zincirinin kirilmasi olabilir.</strong>
              Bu durumda isim, oda, telefon ve tracking kaydi hizla ayni gercege cekilmelidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger guest name analizi"
            title="Isim uyumsuzlugu olan bagaj teslim dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, resepsiyonun valizi zamanla bulacagini varsaymaktir. Guest name, oda ve teslim kaydi birlikte okunursa sorun daha hizli cozulur."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_baggage_guest_name_wrong_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Dogru guest name ve rezervasyon ismini yazili teyit etmek.</li>
                <li>Oda bilgisi varsa oda numarasini eklemek.</li>
                <li>Tracking screenini ve teslim saatini saklamak.</li>
                <li>Resepsiyonla yapilan gorusmeleri not etmek.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Yanlis ismi kucuk detay gibi gormek.</li>
                <li>Sadece trackinge guvenip resepsiyon tarafini zorlamamak.</li>
                <li>Benzer soyad veya rezervasyon isimlerini kontrol etmemek.</li>
                <li>Duzeltme yapildigina dair yazi almamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">1. Guest name uyumsuzlugu neden kritiktir?</h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Otellerde bagaj aramasi genelde isim uzerinden yapilir. Isim yanlis yazildiginda bagaj otelde olsa bile
                sistemde veya resepsiyon aklinda size baglanamayabilir. Yani problem bazen teslimin yoklugu degil,
                teslimin yanlis isimle gorunmesidir.
              </p>
              <p>
                Bu nedenle isim hatasi, lojistikten cok arama mantigini bozan bir hatadir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">2. Hangi bilgileri hemen eslestirmek gerekir?</h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Dogru guest name, rezervasyon adi, oda numarasi, telefon ve trackingte gecen teslim saati ayni cizgide
                birlestirilmelidir. Resepsiyonun farkli isimle arama yapmasi veya valizi farkli kaydetmesi butun sureci
                gereksiz yere uzatabilir.
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
                      placement: "tr_baggage_guest_name_wrong_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  isim uyumsuzlugunu ve teslim kaydini birlikte incelemek
                </a>{" "}
                sorunu daha hizli netlestirebilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Duzeltme sonrasi hangi izi saklamak gerekir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En degerli sey, dogru ismin ne zaman iletildigini ve kimin bunu teyit ettigini gostermektir. Tracking
                screeni, resepsiyonla konusma notu ve varsa yazili teyit ayni dosyada tutulmalidir.
              </p>
              <p>
                Guclu dosya, sadece hatayi fark eden degil, duzeltmenin ne zaman yapildigini gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, guest name hatasini yalnizca kucuk bir typo gibi gormektir. Otel teslimlerinde bu tip
              hata, fiilen bagajin kaybolmus gibi gorunmesine yol acabilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Guest name yanlissa bagaj yanlis kisiye gidebilir mi?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet, isim uyumsuzlugu otelde teslim aramasini zorlastirabilir. Bu nedenle guest name, oda bilgisi ve telefon numarasi hizla teyit edilmelidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Bu durumda ilk kimle gorusmek gerekir?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Once resepsiyon ve gerekiyorsa vardiya sorumlusu ile gorusulmeli, sonra havayolu veya teslimi yoneten tarafla ayni bilgilerin eslestigi kontrol edilmelidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Hangi kayitlar saklanmali?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Tracking screeni, guest name dogrusu, oda bilgisi, resepsiyon notlari ve varsa arama ya da e-posta zinciri birlikte saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
