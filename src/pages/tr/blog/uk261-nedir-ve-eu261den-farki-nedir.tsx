import Link from "next/link";
import { CheckCircle2, Globe2, ShieldAlert, Sparkles, SplitSquareVertical, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "uk261-nedir-ve-eu261den-farki-nedir";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-uk261-foundation&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-uk261-foundation&utm_content=text_link";

export default function TrUk261FoundationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="UK261 nedir ve EU261'den farki nedir? TR–UK rotalari icin net rehber"
        description="UK261 nedir, EU261'den farki nedir ve Ingiltere–Turkiye rotalarinda hangi haklar dogabilir? Turk yolcular icin net ve pratik rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "UK261 nedir ve EU261'den farki nedir? TR–UK rotalari icin net rehber",
            description:
              "UK261 nedir, EU261'den farki nedir ve Ingiltere–Turkiye rotalarinda hangi haklar dogabilir? Turk yolcular icin net ve pratik rehber.",
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
                name: "UK261 nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "UK261, Birlesik Krallik cikisli bazi gecikme, iptal ve denied boarding durumlarinda yolculara tazminat ve yardim haklari taniyabilen yolcu haklari rejimidir.",
                },
              },
              {
                "@type": "Question",
                name: "UK261 ile EU261 ayni sey midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Mantiklari benzese de ayni rejim degildir. Ozellikle UK cikisli ve EU cikisli rotalarda hangi kurallarin devreye girdigi dikkatle okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Londra-Istanbul ucuslari neden ozel onem tasir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku burada kullanicilar sikca EU261 ile UK261'i karistirir. Oysa haklarin gucu genelde kalkis noktasi, isleten tasiyici ve nihai varis etkisine gore okunur.",
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
            <span className="text-slate-900 dark:text-white">UK261 nedir?</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              UK261 Temelleri
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              UK261 nedir ve EU261&apos;den farki nedir?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Turk yolcular icin `UK261`, ozellikle <strong>Ingiltere–Turkiye</strong> rotalarinda kritik ama cok
              karistirilan bir basliktir. En sik hata, Londra cikisli veya Londra varisli her dosyayi otomatik olarak
              `EU261` gibi okumaktir. Oysa burada asıl soru sunudur:
              <strong> bu dosyada UK261 mi, EU261 mi, yoksa ikisinin de disinda bir yapi mi var?</strong>
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 9 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Globe2 className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>UK261, Birlesik Krallik baglantili bazi dosyalarda devreye girebilen ayri bir yolcu haklari rejimidir.</strong>
              EU261 ile mantik olarak benzerlik gosterse de ayni degildir. Londra–Istanbul, Londra–Antalya ve baska
              UK baglantili rotalarda once hangi rejimin devrede oldugu netlestirilmelidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger UK261 kontrolu"
            title="Ucusunuzda UK261 mi EU261 mi devreye giriyor, simdi kontrol edin"
            description="Ozellikle UK cikisli dosyalarda en buyuk kayip, yanlis rejimle dusunmeye baslamaktir. ClaimWinger ile rota ve tasiyici yapisini Turkce olarak hizla kontrol edebilirsiniz."
            ctaHref={CLAIM_URL}
            ctaLabel="UK261 kapsam kontrolunu ac"
            placement="tr_uk261_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren okumalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>UK cikisli rotayi net tanimlamak.</li>
                <li>Isleten tasiyiciyi dogru ayirmak.</li>
                <li>`Nihai varis` etkisini gostermek.</li>
                <li>EU261 ve UK261'i karistirmadan analiz etmek.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Her Londra dosyasini otomatik EU261 sanmak.</li>
                <li>Sadece havayolu markasina bakmak.</li>
                <li>UK cikisini hukuki olarak hafife almak.</li>
                <li>Baglantili yolculugu parcali okumak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <SplitSquareVertical className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. UK261 ile EU261 benzer mantiga sahip olabilir ama ayni rejim degildir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanicilarin en sik yaptigi hata, UK261'i EU261'in basit bir kopyasi gibi dusunmektir. Oysa pratikte
                hangi yapinin devreye girdigi, dosyanin hangi cikis noktasina, hangi tasiyiciye ve hangi rota zincirine
                bagli olduguna gore okunur.
              </p>
              <p>
                Bu fark, ozellikle `Londra-Istanbul`, `Londra-Antalya` ve UK baglantili aktarmali seyahatlerde cok daha
                onemli hale gelir. Yanlis baslangic varsayimi, guclu bir dosyanin yanlis kategoriye dusmesine neden olabilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Asil soru: rota UK mantigi mi, EU mantigi mi tasiyor?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Burada sadece “ucus Londra ile ilgili” demek yetmez. Dosyanin gucu, genelde ucusun nereden kalktigi,
                hangi tasiyici tarafindan isletildigi ve butun yolculugun nasil organize edildigiyle anlasilir.
              </p>
              <p>
                Bu nedenle{" "}
                <a
                  href={CLAIM_URL_TEXT}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    pushClaimWingerEvent("claimwinger_cta_click", {
                      locale: "tr",
                      placement: "tr_uk261_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  dosyanin kapsam kontrolunu somut rota uzerinden yapmak
                </a>{" "}
                teorik tahminden cok daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. TR + UK pazari icin UK261 bilgisi lead kalitesini dogrudan artirir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Londra cikisli veya Londra baglantili dosyalar, Turk diasporasi icin en degerli ama en cok karistirilan
                alanlardan biridir. Bu yuzden `UK261` bilgisini dogru anlatmak, sadece SEO degil, ayni zamanda daha
                yuksek kaliteli lead ve daha az yanlis beklenti anlamina gelir.
              </p>
              <p>
                Ozellikle gecikme, iptal, yeniden yonlendirme ve `nihai varis` etkisi birlikte okundugunda, UK baglantili
                dosyalar cok daha net ayiklanabilir hale gelir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, Ingiltere baglantili dosyalari otomatik olarak ya sadece `EU261` ya da sadece “UK oldugu icin
              fark etmez” mantigiyla okumaktir. Oysa burada deger, rejimi dogru ayirmakta ve sonra dosyayi o mantikla
              incelemektedir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">UK261 nedir?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  UK261, Birlesik Krallik cikisli bazi gecikme, iptal ve denied boarding durumlarinda yolculara
                  tazminat ve yardim haklari taniyabilen yolcu haklari rejimidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  UK261 ile EU261 ayni sey midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Mantiklari benzese de ayni rejim degildir. Ozellikle UK cikisli ve EU cikisli rotalarda hangi
                  kurallarin devreye girdigi dikkatle okunmalidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Londra-Istanbul ucuslari neden ozel onem tasir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku burada kullanicilar sikca EU261 ile UK261&apos;i karistirir. Oysa haklarin gucu genelde kalkis
                  noktasi, isleten tasiyici ve nihai varis etkisine gore okunur.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
