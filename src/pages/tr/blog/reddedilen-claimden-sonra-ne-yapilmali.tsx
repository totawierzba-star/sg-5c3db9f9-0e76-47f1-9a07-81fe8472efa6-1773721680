import Link from "next/link";
import { CheckCircle2, FileWarning, Gavel, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "reddedilen-claimden-sonra-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-rejected-claim-next-step&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-rejected-claim-next-step&utm_content=text_link";

export default function TrRejectedClaimArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Reddedilen claimden sonra ne yapilmali?"
        description="Claiminiz reddedildiyse sonraki adim ne olmali? Turk yolcular icin red gerekcesi, belge gucu ve dogru itiraz mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Reddedilen claimden sonra ne yapilmali?",
            description:
              "Claiminiz reddedildiyse sonraki adim ne olmali? Turk yolcular icin red gerekcesi, belge gucu ve dogru itiraz mantigini anlatan net rehber.",
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
                name: "Havayolu claimi reddettiyse dosya bitmis midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Red cevabi tek basina dosyanin bittigi anlamina gelmez. Asil soru, red gerekcesinin ne kadar somut oldugu ve sizin belgelerinizin ne kadar guclu kaldigidir.",
                },
              },
              {
                "@type": "Question",
                name: "Her red cevabina hemen itiraz etmek gerekir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Once red metnini sakin sekilde okumak, hangi gerekceye dayandigini anlamak ve sonra daha guclu bir adim planlamak genellikle daha sagliklidir.",
                },
              },
              {
                "@type": "Question",
                name: "En onemli sey nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En onemli sey, red mesajini, onceki yazismalari ve nihai varis gibi temel verileri birlikte okuyup, ayni basvuruyu degil daha guclu bir dosyayi kurmaktir.",
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
            <span className="text-slate-900 dark:text-white">Reddedilen claim</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Itiraz Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Reddedilen claimden sonra ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Red cevabi almak, bir cok yolcu icin surecin bittigi hissini yaratir. Oysa pratikte en onemli soru,
              red mailinin gercekten ne kadar guclu oldugudur. Dogru analiz,
              <strong> red gerekcesi</strong>, <strong>nihai varis ve belge gucu</strong> ile
              <strong> sonraki adimin kalitesi</strong> birlikte okundugunda yapilir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <FileWarning className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Red cevabi, dosyanin otomatik olarak bittigi anlamina gelmez.</strong> En iyi sonraki adim,
              ayni talebi tekrar gondermek degil; red gerekcesini okuyup dosyayi daha guclu kurmaktir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger red analizi"
            title="Reddedilen claiminizde sonraki en guclu adimin ne oldugunu hizli kontrol edin"
            description="Bir cok red maili ilk bakista sert gorunur ama gercekte kalip ve yuzeysel olabilir. Dosyanin gucunu red metniyle birlikte okumak daha saglam sonuc verir."
            ctaHref={CLAIM_URL}
            ctaLabel="Reddedilen dosyami kontrol et"
            placement="tr_rejected_claim_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Red gerekcesini satir satir okumak.</li>
                <li>Nihai varis ve rota belgelerini tekrar toplamak.</li>
                <li>Ayni metni degil, daha duzgun follow-up kurmak.</li>
                <li>Yazisma zincirini tek yerde saklamak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Red mailini hic okumadan paniklemek.</li>
                <li>Ayni claimi degistirmeden tekrar yollamak.</li>
                <li>Havayolunun kullandigi kalip ifadeyi kesin son sanmak.</li>
                <li>Belge tarafini guclendirmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Red mailinde asil soru, “hayir” kelimesi degil gerekcenin kalitesidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bircok kullanici red mesaji gordugu anda surecin kapandigini sanar. Oysa pratikte red mailleri bazen
                oldukca kalip, genel ve tekrar eden ifadelerden olusur. Bu nedenle ilk tepki panik degil, metni
                sakin sekilde okumak olmalidir.
              </p>
              <p>
                Gerekce ne kadar somut ve ne kadar dosyanin gercek olayina dokunuyor, asil soru budur.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Iyi sonraki adim, ayni dosyanin kopyasi degil daha guclu versiyonudur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Reddedilen claimden sonra en zayif refleks, ayni mesaji tekrar gondermektir. Daha iyi strateji,
                redde dayanak olan noktayi anlayip belgeyi, zaman cizelgesini ve talep dilini daha guclu hale
                getirmektir.
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
                      placement: "tr_rejected_claim_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  red gerekcesiyle birlikte dosyayi yeniden okumak
                </a>{" "}
                kullanicinin sonraki adimini daha anlamli hale getirir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Gavel className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Ne zaman daha sert bir sonraki adim dusunulmeli?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Her red cevabi ayni agirlikta degildir. Bazen daha net bir follow-up yeterlidir, bazen de dosya daha
                ciddi bir sonraki adima hazir hale gelmistir. Bunu belirleyen sey, red maili kadar sizin belge
                duzeniniz ve olay akisini ne kadar net kurabildiginizdir.
              </p>
              <p>
                Bu yuzden red sonrasi surecte hem hukuk dili hem de dosya disiplini daha onemli hale gelir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, red mailini kesin ve tartisilmaz final cevap sanmaktir. Oysa bir cok dosyada asil fark,
              red sonrasinda dosyanin ne kadar akilli yeniden kuruldugunda ortaya cikar.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Red cevabi geldiyse dosya biter mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Asil soru, red gerekcesinin ne kadar somut ve ne kadar ikna edici oldugudur.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ilk yapilacak sey nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Red metnini sakin sekilde okumak, gerekceyi anlamak ve dosyanin belge tarafini yeniden gozden
                  gecirmektir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Sonraki adim neye gore belirlenir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Red gerekcesi, yazisma zinciri, nihai varis verisi ve elinizdeki belgelerin ne kadar duzenli
                  oldugu birlikte okunarak belirlenir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
