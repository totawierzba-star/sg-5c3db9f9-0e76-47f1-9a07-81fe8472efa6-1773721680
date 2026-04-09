import Link from "next/link";
import { CheckCircle2, Route, ShieldAlert, Sparkles, TicketX, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "aktarmali-ucusta-tek-bilet-yoksa-ne-olur";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-no-single-ticket-connection&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-no-single-ticket-connection&utm_content=text_link";

export default function TrNoSingleTicketConnectionArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Aktarmali ucusta tek bilet yoksa ne olur?"
        description="Aktarmali ucusta tek bilet yoksa claim ne kadar degisir? Turk yolcular icin self-transfer, baglanti riski ve EU261 mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Aktarmali ucusta tek bilet yoksa ne olur?",
            description:
              "Aktarmali ucusta tek bilet yoksa claim ne kadar degisir? Turk yolcular icin self-transfer, baglanti riski ve EU261 mantigini anlatan net rehber.",
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
                name: "Tek bilet yoksa claim otomatik olarak biter mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir, otomatik olarak bitmez. Ancak dosyanin nasil okunacagi ciddi sekilde degisir. Tek rezervasyon yerine ayri biletler varsa, baglanti sorumlulugu ve risk dagilimi farkli degerlendirilir.",
                },
              },
              {
                "@type": "Question",
                name: "Self-transfer ile klasik baglanti ayni sey midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Klasik baglantida zincir daha butun okunabilirken, self-transfer yapilarinda yolcunun uzerindeki operasyonel risk daha buyuk olabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu tip dosyalarda en onemli sey nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En onemli sey, bilet yapisini dogru anlamak ve hangi segmentin hangi sorumluluk alanina girdigini netlestirmektir.",
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
            <span className="text-slate-900 dark:text-white">Tek bilet yoksa</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Aktarma Riski Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Aktarmali ucusta tek bilet yoksa ne olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu soru, ozellikle Avrupa diasporasi ve Turkiye cikisli karma rota kullanan yolcular icin cok onemlidir.
              Cunku bircok kisi iki ayri bileti klasik baglanti gibi dusunur. Oysa dosyanin gucu,
              <strong> bilet yapisi</strong>, <strong>self-transfer riski</strong> ve <strong>sorumlulugun nasil
              dagildigi</strong> birlikte okundugunda anlasilir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 9 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <TicketX className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Tek bilet yoksa dosya otomatik olarak bitmez, ama okunus mantigi ciddi sekilde degisir.</strong>
              Klasik baglanti ile ayri biletli `self-transfer` ayni sey degildir. Bu fark, claimin gucunu ve
              sorumluluk zincirini etkiler.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger bilet yapisi analizi"
            title="Aktarmali dosyanizda tek bilet olup olmamasinin ne kadar fark yarattigini kontrol edin"
            description="Bircok yolcu ayri biletli rotayi tek zincir gibi dusunur. Oysa burada sorumluluk ve risk mantigi ciddi sekilde degisebilir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bilet yapimi kontrol et"
            placement="tr_no_single_ticket_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Daha guclu okumayi destekleyen seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Bilet zincirinin nasil kuruldugunun net gorulmesi.</li>
                <li>Her segmentin hangi tasiyiciye ait oldugunun bilinmesi.</li>
                <li>Gercek baglanti riskinin belgelenmesi.</li>
                <li>Son hedefe etkisinin net sekilde kaydedilmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ayri bileti klasik baglanti sanmak.</li>
                <li>Self-transfer riskini hic hesaba katmamak.</li>
                <li>PNR ve bilet ayrişimini saklamamak.</li>
                <li>Sorumlulugu otomatik olarak tek tarafa yuklemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Ayri bilet ile klasik baglanti ayni sey degildir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yolcular bazen ayni gun icindeki iki segmenti otomatik olarak “aktarma” diye dusunur. Oysa hukuki ve
                pratik analizde en kritik sorulardan biri, bu segmentlerin ayni rezervasyon zincirine ait olup
                olmadigidir.
              </p>
              <p>
                Bu fark, claimin nasil kurulacagini ve hangi riskin kime ait oldugunu dogrudan degistirebilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Self-transfer yapilarinda kullanici uzerindeki risk daha buyuk olabilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Tek bilet olmayan yapilarda, baglanti kacarsa dosyanin okunus mantigi degisebilir. Cunku zincir butun
                bir seyahat olarak degil, ayri halkalar gibi okunabilir. Bu da kullanicinin operasyonel riskini
                artirir.
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
                      placement: "tr_no_single_ticket_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  self-transfer yapisini ve sorumluluk zincirini incelemek
                </a>{" "}
                dosyanin gercek gucunu daha dogru gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Route className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Asil soru: bilet yapisi son hedefi nasil etkiledi?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Tek bilet olmadiginda bile kullanici icin en onemli sorulardan biri, bunun son hedefe etkisinin ne
                oldugudur. Zaman kaybi, yeni bilet ihtiyaci, yeniden check-in ve ekstra masraflar bu noktada daha
                buyuk rol oynar.
              </p>
              <p>
                Bu yuzden PNR, boarding pass, ayri satin alma kayitlari ve gercek varis saati birlikte saklanmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, ayri biletli yolculugu klasik aktarma gibi okumaktir. Oysa claimin gucu burada bilet
              yapisi ve sorumluluk mantigiyla birlikte degisir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Tek bilet yoksa dosya biter mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Ama dosyanin okunus mantigi ve sorumluluk analizi ciddi sekilde degisebilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Self-transfer ile normal aktarma ayni mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Self-transfer yapilarinda kullanicinin ustlendigi risk daha buyuk olabilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  PNR, ayri bilet kayitlari, boarding pass, yeni satin alma kayitlari ve son hedefe varis saati
                  birlikte saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
