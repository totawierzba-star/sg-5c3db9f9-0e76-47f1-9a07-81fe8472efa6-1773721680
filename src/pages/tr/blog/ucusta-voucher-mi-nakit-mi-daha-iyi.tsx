import Link from "next/link";
import { Banknote, CheckCircle2, Gift, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "ucusta-voucher-mi-nakit-mi-daha-iyi";
const CLAIM_URL =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-voucher-vs-cash&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-voucher-vs-cash&utm_content=text_link";

export default function TrVoucherVsCashArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Ucusta voucher mi nakit mi daha iyi?"
        description="Ucus sorunu yasadiginizda voucher mi nakit mi daha iyi? Turk yolcular icin secim risklerini, esneklik farkini ve claim mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ucusta voucher mi nakit mi daha iyi?",
            description:
              "Ucus sorunu yasadiginizda voucher mi nakit mi daha iyi? Turk yolcular icin secim risklerini, esneklik farkini ve claim mantigini anlatan net rehber.",
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
                name: "Voucher teklif edilirse hemen kabul etmek mantikli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Her zaman degil. Voucher bazen pratik gorunur, ancak esneklik, son kullanim tarihi ve gercek degeri dikkatle okunmadan karar vermek risk yaratabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Nakit secenek neden daha guclu gorulebilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku nakit secenek kullaniciya daha fazla kontrol ve esneklik verir. Ozellikle seyahat planlari degisken olan yolcular icin bu onemlidir.",
                },
              },
              {
                "@type": "Question",
                name: "Voucher kabul edilirse claim tamamen biter mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Duruma gore degisir. Burada asil onemli olan, teklifin hangi kapsamda kabul edildigi ve bunun haklar uzerindeki etkisinin nasil kuruldugudur.",
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
            <span className="text-slate-900 dark:text-white">Voucher mi nakit mi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Secim Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Ucusta voucher mi nakit mi daha iyi?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ucus iptali veya uzun gecikme sonrasinda kullanicinin onune en hizli gelen sorulardan biri budur.
              Cunku voucher ilk bakista pratik gorunur. Ama gercek karar,
              <strong> esneklik</strong>, <strong>gercek deger</strong> ve <strong>haklara etkisi</strong> birlikte
              okunarak verilmelidir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Gift className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Voucher her zaman kotu degildir, ama otomatik olarak en iyi secenek de degildir.</strong>
              Nakit secenek genelde daha esnek olur. En iyi karar, teklifin kosullari ile kullanicinin gercek ihtiyaci
              birlikte okununca verilir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger teklif analizi"
            title="Voucher veya nakit teklifinin dosyaniz icin ne anlama geldigini hizli kontrol edin"
            description="Bir cok yolcu hizli karar verdigi icin sonradan daha zayif pozisyona dusebilir. Teklifin claim uzerindeki etkisini once netlestirmek daha sagliklidir."
            ctaHref={CLAIM_URL}
            ctaLabel="Teklifimi kontrol et"
            placement="tr_voucher_vs_cash_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Nakit secenegin guclu yanlari
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Daha yuksek esneklik saglar.</li>
                <li>Tek havayoluna veya tek kullanima bagli kalmazsiniz.</li>
                <li>Gercek deger daha kolay gorulur.</li>
                <li>Plan degistiginde daha rahat hareket edebilirsiniz.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Voucher tarafinda en sik riskler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Son kullanim tarihi.</li>
                <li>Tek marka veya tek hat ile sinirli olma.</li>
                <li>Gercek degerin beklenenden dusuk kalmasi.</li>
                <li>Kullanici acele karar verdigi icin kosullari atlamasi.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Voucher bazen hizli cozum gibi gorunur, ama her zaman en guclu secenek degildir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yolcu havalimaninda stres altindayken, havayolunun sundugu voucher kolay ve temiz bir cikis gibi
                gorunebilir. Ancak bu teklifin gercek degerini anlamak icin kullanim sinirlari, son tarih ve esneklik
                gibi detaylara bakmak gerekir.
              </p>
              <p>
                Bu nedenle ilk gorunen kolaylik ile uzun vadeli fayda her zaman ayni sey degildir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Nakit secenek neden cogu yolcu icin daha temiz bir zemin saglar?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Nakit secenek, kullaniciya daha fazla kontrol verir. Yeni seyahat planini farkli sekilde kurmak,
                farkli havayolu secmek veya parayi baska bir ihtiyac icin ayirmak daha kolay olur. Bu da pratik
                avantaj yaratir.
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
                      placement: "tr_voucher_vs_cash_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  teklifin claim uzerindeki etkisini incelemek
                </a>{" "}
                kullaniciya daha saglam karar zemini sunar.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Banknote className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Asil soru: size ne daha cok kontrol veriyor?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Voucher mi nakit mi sorusunda tek dogru cevap yoktur. Ama en iyi soru sudur: hangi secenek size daha
                fazla kontrol, daha gercek deger ve daha az bagimlilik veriyor? Cogu kullanici icin bu dengeyi nakit
                daha net kurar.
              </p>
              <p>
                Bu yuzden teklifin tamamini okumadan hizli kabul vermemek genellikle daha guvenlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, voucher teklifini “bedava ek avantaj” gibi okumaktir. Oysa bazen en onemli konu,
              teklifin sizi ne kadar sinirladigi ve gercek esnekliğin kimde kaldigidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Voucher her zaman kotu mudur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Ama her durumda en iyi secenek oldugu da varsayilamaz. Kosullar ve kullanici ihtiyaci birlikte
                  okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Nakit secenek neden guclu gorulur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku daha fazla esneklik, daha net deger ve daha az baglilik sunar.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Karar vermeden once neye bakilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Son kullanim tarihi, kisitlar, gercek ekonomik deger ve teklifin claim uzerindeki etkisi birlikte
                  okunmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
