import Link from "next/link";
import { AlertCircle, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "iptal-edilen-ucusta-ne-zaman-tazminat-dogar";
const CLAIM_URL =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-cancel-eligibility&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-cancel-eligibility&utm_content=text_link";

export default function TrCancellationEligibilityArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Iptal edilen ucusta ne zaman tazminat dogar? EU261 rehberi"
        description="Iptal edilen bir ucusta ne zaman tazminat dogabilir? Bildirim zamani, yeni rota kalitesi ve EU261 kapsami uzerinden Turk yolcular icin net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Iptal edilen ucusta ne zaman tazminat dogar? EU261 rehberi",
            description:
              "Iptal edilen bir ucusta ne zaman tazminat dogabilir? Bildirim zamani, yeni rota kalitesi ve EU261 kapsami uzerinden Turk yolcular icin net rehber.",
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
                name: "Iptal edilen ucusta her zaman tazminat dogar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Iptalin kendisi tek basina para tazminati anlamina gelmez. Bildirimin ne zaman yapildigi, yeni rota kalitesi ve dosyanin EU261 kapsamina girip girmedigi birlikte incelenmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bildirim zamani neden bu kadar onemli?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku iptal dosyalarinda, havayolunun yolcuyu ne kadar erken ya da gec bilgilendirdigi analizde ana rol oynayabilir. Son dakika degisiklikleri ve zayif alternatifler dosyanin gucunu artirabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Yeni rota verildiyse tazminat artik olmaz mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir, otomatik olarak boyle denemez. Yeni rota verilmis olsa bile onun kalitesi, nihai varis sonucu ve tum zaman kaybi birlikte degerlendirilmelidir.",
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
            <span className="text-slate-900 dark:text-white">Iptal edilen ucusta tazminat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              EU261 Temelleri
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Iptal edilen ucusta ne zaman tazminat dogar?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Iptal edilen bir ucus, yolcu acisindan en stresli senaryolardan biridir; ama hukuki acidan da en cok
              yanlis anlasilan alanlardan biridir. Cunku soru sadece “ucus iptal oldu mu?” degildir. Asıl soru,
              <strong> havayolu ne zaman haber verdi</strong>, <strong>nasil bir yeni rota sundu</strong> ve
              <strong> finalde ne kadar zaman kaybi yaratti</strong> sorularidir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 9 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Iptal edilen bir ucusta tazminat, cogu zaman bildirim zamani, yeni rota kalitesi ve EU261
              uygunlugu birlikte guclu oldugunda gundeme gelir.</strong> Yani “iptal oldu” demek tek basina para
              tazminati var anlamina gelmez, ama dosya sanilandan cok daha guclu de olabilir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger iptal edilen ucus kontrolu"
            title="Iptal edilen ucus dosyanizi simdi kontrol edin"
            description="Bir cok yolcu makalenin sonuna kadar beklemiyor. Iptal size son dakika bildirildiyse veya verilen yeni rota zayifsa, dosyanin EU261 gucu ClaimWinger ile hemen kontrol edilebilir."
            ctaHref={CLAIM_URL}
            ctaLabel="Iptal edilen ucus formunu ac"
            placement="tr_cancel_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren durumlar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Gec veya son dakika bildirim.</li>
                <li>Zayif veya gec varisli yeni rota.</li>
                <li>Avrupa ile baglantili uygun rota yapisi.</li>
                <li>Temiz zaman cizelgesi ve havayolu yazismalari.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yanlis varsayimlar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Her iptalde para tazminati olur sanmak.</li>
                <li>Yeni rota verildiyse dosya biter diye dusunmek.</li>
                <li>Sadece “iptal maili”ne bakip karar vermek.</li>
                <li>Final zaman kaybini hesaplamamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Iptal dosyalarinda ilk soru bildirim zamanidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bircok yolcu sadece iptalin varligina odaklanir, ama gercek analizde ilk buyuk soru havayolunun bunu ne
                kadar erken haber verdigidir. Yolcuya son anda veya cok gec iletilen iptaller, dosyanin agirligini
                ciddi sekilde degistirebilir.
              </p>
              <p>
                Bu yuzden sadece bir mail screenshot&apos;i degil, bildirim zamanini ve sonra ne teklif edildigini gosteren
                temiz bir akıs gerekir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Yeni rota verilmis olsa bile dosya kapanmis sayilmaz
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En sik yanlis yorumlardan biri sudur: “beni baska bir ucusa aldilar, o zaman tazminat artik yok.”
                Oysa asıl soru, bu yeni rotanin ne kadar iyi oldugu ve finalde yolcunun ne kadar zaman kaybettigidir.
              </p>
              <p>
                Eger sunulan cozum zayifsa, gec varis yaratiyorsa veya yolculugu belirgin sekilde bozuyorsa, dosya
                hala guclu olabilir. Bu nedenle{" "}
                <a
                  href={CLAIM_URL_TEXT}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    pushClaimWingerEvent("claimwinger_cta_click", {
                      locale: "tr",
                      placement: "tr_cancel_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  somut rota analizi
                </a>{" "}
                yapmak cok daha anlamlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Belgeler sadece iptali degil, son sonucu da gostermelidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Iptal maili tek basina yetmez. PNR, boarding pass, yeni rota bilgisi, havayolu yazismalari ve final
                varis saati birlikte oldugunda dosya cizgisi netlesir. En guclu dosyalar, sadece sorunu degil,
                sonucun yolcuya etkisini de temiz sekilde gosterir.
              </p>
              <p>
                Bu ozellikle TR + Avrupa rotalarinda cok degerlidir, cunku ayni iptal farkli rota yapilarinda cok farkli
                sonuclara gidebilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, iptali tek bir olay gibi okumaktir. Oysa gercek analiz, bildirim zamani, yeni rota
              kalitesi ve final zaman kaybi birlikte okundugunda ortaya cikar.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Son dakika iptaller neden daha guclu dosya yaratabilir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku yolcuya ne kadar gec haber verildigi, iptal analizinin merkezinde yer alabilir ve dosyanin agirligini artirabilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Baska ucusa alindim, yine de para tazminati olabilir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet, otomatik olarak kapanmis sayilmaz. Yeni rotanin kalitesi ve final zaman kaybi birlikte incelenmelidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Turk yolcular icin neden cok yuksek niyetli bir konu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku iptal edilen uluslararasi ucuslarda yolcu hemen “hak dogdu mu?” sorusuna cevap arar ve TR +
                  diaspora EU pazarinda bu arama niyeti cok yuksektir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
