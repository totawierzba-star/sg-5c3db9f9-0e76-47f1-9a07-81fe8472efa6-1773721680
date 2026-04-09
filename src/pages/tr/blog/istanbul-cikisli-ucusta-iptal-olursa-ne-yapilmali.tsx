import Link from "next/link";
import { ArrowRightLeft, CheckCircle2, PlaneTakeoff, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "istanbul-cikisli-ucusta-iptal-olursa-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-istanbul-departure-cancellation&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-istanbul-departure-cancellation&utm_content=text_link";

export default function TrIstanbulDepartureCancellationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Istanbul cikisli ucusta iptal olursa ne yapilmali?"
        description="Istanbul cikisli ucusta iptal olursa ne yapilmali? Turk yolcular icin bildirim zamani, yeni rota ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Istanbul cikisli ucusta iptal olursa ne yapilmali?",
            description:
              "Istanbul cikisli ucusta iptal olursa ne yapilmali? Turk yolcular icin bildirim zamani, yeni rota ve nihai varis mantigini anlatan net rehber.",
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
                name: "Istanbul cikisli ucusta iptal olursa ilk ne kontrol edilmeli?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk olarak havayolunun iptali ne zaman bildirdigi, hangi yeni rotayi sundugu ve yolcunun nihai hedefe gercekte ne zaman ulasacagi kontrol edilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Iptal olmasi otomatik tazminat anlamina gelir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Iptal cok onemli bir sinyaldir ama tek basina yeterli degildir. Bildirim zamani, yeni cozumun kalitesi ve nihai varis etkisi birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler mutlaka saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Iptal mesaji, e-postalar, uygulama ekranlari, yeni rota bilgileri, boarding pass ve nihai varis zamanini gosteren tum kayitlar mutlaka saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Istanbul cikisli iptal rehberi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              GEO Iptal Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Istanbul cikisli ucusta iptal olursa ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              To bardzo mocny temat dla `TR + diaspora EU`, bo uzytkownik zwykle szuka odpowiedzi od razu po anulacji,
              jeszcze na lotnisku albo chwilę po mailu od linii. W takich sprawach kluczowe sa
              <strong> bildirim zamani</strong>, <strong>yeni rota kalitesi</strong> i
              <strong> nihai varis sonucu</strong>, a nie sam fakt, ze lot zostal anulowany.
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
              <strong>Istanbul cikisli ucusta iptal olursa ilk odak noktasi yeni cozumun kalitesi olmalidir.</strong>{" "}
              Size ne zaman haber verildigi, nasil bir alternatif sunuldugu ve hedefe gercekte ne zaman vardiginiz
              dosyanin agirligini belirler.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger iptal analizi"
            title="Istanbul cikisli iptal dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bir cok yolcu sadece iptale odaklaniyor. Oysa yeni rota, bildirim zamani ve final varis etkisi birlikte okununca dosya cok daha netlesiyor."
            ctaHref={CLAIM_URL}
            ctaLabel="Iptal dosyami kontrol et"
            placement="tr_istanbul_departure_cancel_article_embed_high"
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
                <li>Nihai hedefe gercek varisin net belgelenmesi.</li>
                <li>Iptal mesajlari, e-postalar ve app ekranlarinin korunmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece “ucus iptal oldu” bilgisinde kalmak.</li>
                <li>Yeni rotayi ve saat etkisini hic okumamak.</li>
                <li>Bildirim zamanini saklamamak.</li>
                <li>Nihai varis zamanini not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Iptal dosyasinda ilk soru: havayolu size ne teklif etti?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Iptal aninda cogu yolcu sadece ilk sokla hareket eder. Oysa iyi analiz, “size ne oldu?” sorusundan
                hemen sonra “yerine ne teklif edildi?” sorusuna gecer. Yeni ucus ayni gun mu, ertesi gun mu, cok uzun
                bekleme mi var, baglanti mi bozuldu? Asil fark burada ortaya cikar.
              </p>
              <p>
                Yani dosyanin degeri sadece bozulan planda degil, onun yerine gelen cozumde gizlidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Nihai varis, Istanbul cikisli iptal dosyalarinda son testi verir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Iptalin agirligini anlamak icin panodaki yeni saat yetmez. Yolcunun hedefe gercekte ne zaman
                ulasabildigi, claim mantiginda en net sonucu verir. Bazen teknik olarak alternatif sunulur ama pratikte
                butun gun veya daha fazlasi kaybedilir.
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
                      placement: "tr_istanbul_departure_cancel_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  bildirim zamani ile nihai varis etkisini birlikte incelemek
                </a>{" "}
                dosyanin gercek gucunu daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <ArrowRightLeft className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En degerli belgeler: iptal bildirimi, yeni rota ve final varis
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En guclu pratik dosyalar genelde cok nettir: iptal mesaji, e-posta, uygulama ekranlari, yeni rota
                bilgisi, boarding pass ve nihai varis zamani. Bu belge zinciri ne kadar temizse dosya o kadar rahat
                okunur.
              </p>
              <p>
                Cunku iyi bir iptal dosyasi, sadece neyin bozuldugunu degil; yerine ne geldigi ve bunun yolcuyu nasil
                etkiledigini de gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, iptalin tek basina sonucu otomatik belirledigini sanmaktir. Oysa Istanbul cikisli
              dosyalarda sonucu belirleyen sey, yeni rota ve final zaman kaybinin birlikte okunmasidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Iptalden sonra ilk neye bakmaliyim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Once bildirim zamani, sonra yeni rota ve final varis etkisi okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Iptal varsa para otomatik midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Iptal guclu bir sinyaldir ama tek basina yetmez; yeni cozumun kalitesi ve nihai varis de
                  birlikte degerlendirilmelidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeleri hemen saklamaliyim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Iptal mesaji, e-postalar, app ekranlari, yeni rota ve gercek varis saatini gosteren tum kayitlar
                  hemen saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
