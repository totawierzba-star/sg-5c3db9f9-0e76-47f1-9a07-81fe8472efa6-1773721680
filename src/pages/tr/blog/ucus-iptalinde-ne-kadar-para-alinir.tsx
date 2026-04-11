import Link from "next/link";
import {
  Calculator,
  CheckCircle2,
  Coins,
  ShieldAlert,
  Sparkles,
  XCircle,
} from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "ucus-iptalinde-ne-kadar-para-alinir";
const CLAIM_URL =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-cancel-amount&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-cancel-amount&utm_content=text_link";

export default function TrCancellationAmountArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Ucus iptalinde ne kadar para alinir? 250€, 400€, 600€ rehberi"
        description="Ucus iptalinde ne kadar para alinir? Turk yolcular icin iptal tazminati, rota mesafesi, yeni ucus kalitesi ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ucus iptalinde ne kadar para alinir? 250€, 400€, 600€ rehberi",
            description:
              "Ucus iptalinde ne kadar para alinir? Turk yolcular icin iptal tazminati, rota mesafesi, yeni ucus kalitesi ve nihai varis mantigini anlatan net rehber.",
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
                name: "Ucus iptal olduysa her zaman ayni para mi alinir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Iptal dosyalarinda para miktari tek bir sabit rakam gibi dusunulmemelidir. Rota yapisi, mesafe, yeniden yonlendirme kalitesi ve nihai varis sonucu birlikte okunur.",
                },
              },
              {
                "@type": "Question",
                name: "250€, 400€, 600€ iptalde de gecerli olabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bazi uygun dosyalarda evet, ancak miktar sadece iptal olmasina bakilarak belirlenmez. Rota uzunlugu ve yolcunun sonucta nasil bir zaman kaybi yasadigi da onemlidir.",
                },
              },
              {
                "@type": "Question",
                name: "Yeni ucus verilirse para tazminati tamamen biter mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Yeni ucus verilmesi tek basina dosyayi kapatmaz. Verilen cozumun kalitesi ve nihai varis sonucu hala cok onemlidir.",
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
            <span className="text-slate-900 dark:text-white">Ucus iptalinde ne kadar para alinir?</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Iptal Tazminati
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Ucus iptalinde ne kadar para alinir?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu soru cok aranir, ama en tehlikeli noktasi sudur: kullanicilar tek bir rakam bekler. Oysa iptal
              dosyalarinda miktar, sadece “ucus iptal oldu” bilgisiyle degil; <strong>rota mesafesi</strong>,
              <strong> yeni ucusun kalitesi</strong> ve <strong>nihai varis sonucu</strong> ile okunur.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Coins className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Iptal edilen ucusta para miktari tek bir sabit rakam degildir.</strong> Bazi dosyalarda 250€,
              400€ veya 600€ mantigi devreye girebilir; ama bu, rota uzunlugu ve yolcunun sonucta nasil bir zaman kaybi
              yasadigi ile birlikte okunur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger iptal tazminati kontrolu"
            title="Iptal edilen ucusta olasi tazminat seviyenizi simdi kontrol edin"
            description="Makalenin sonuna kadar beklemeden, iptal dosyanizin gucunu ve olasi tazminat mantigini ClaimWinger ile hizla gorun."
            ctaHref={CLAIM_URL}
            ctaLabel="Iptal tazminati kontrolunu ac"
            placement="tr_cancel_amount_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Miktari netlestiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Rota uzunlugu ve mesafe mantigi.</li>
                <li>Yeniden yonlendirmenin kalitesi.</li>
                <li>Nihai varise ne kadar gec ulasildigi.</li>
                <li>Dosyanin kapsam disi olmamasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yanlis varsayimlar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Iptal olduysa herkes ayni rakami alir sanmak.</li>
                <li>Yeni ucus verildiyse para tamamen biter diye dusunmek.</li>
                <li>Sadece e-postadaki iptal kelimesine bakmak.</li>
                <li>Nihai varis etkisini hic hesaba katmamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Calculator className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Iptal dosyalarinda miktar, mesafe ile birlikte okunur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici “iptal oldu, ne kadar para alirim?” diye sorar, ama pratikte bunun cevabi rota mantigina
                baglidir. Bazi uygun dosyalarda 250€, 400€ ve 600€ seviyeleri mantikli hale gelebilir. Ancak bu sadece
                iptalin varligindan degil, ayni zamanda <strong>rota uzunlugundan</strong> beslenir.
              </p>
              <p>
                Yani para miktarini anlamak icin once “hangi kategoriye giren bir rota var?” sorusu sorulmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Yeni ucus verildiyse bile miktar sorusu bitmez
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En sik hata, yeniden yonlendirme verildiginde artik para sorusunun tamamen kapandigini sanmaktir.
                Oysa asıl soru, verilen yeni ucusun ne kadar iyi oldugu ve yolcunun <strong>nihai varise</strong> ne
                kadar farkla ulastigidir.
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
                      placement: "tr_cancel_amount_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  yeni rota ve nihai varis sonucunu birlikte analiz etmek
                </a>{" "}
                tek basina iptal kelimesine bakmaktan daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Para miktari kadar dosyanin gucu de onemlidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici dogal olarak once rakami sorar. Ama guclu lead kalitesi icin daha dogru soru sunudur:
                “Bu dosya gercekten guclu mu?” Cunku teorik miktar ne olursa olsun, eger dosya kapsam disiysa veya
                belgeler zayifsa, rakam tek basina bir sey ifade etmez.
              </p>
              <p>
                En iyi sonuc, miktari rota, yeniden yonlendirme ve belge yapisi ile birlikte okumaktan gelir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, iptal dosyasinda sadece tek bir rakam aramaktir. Oysa gercek analiz, rota mesafesi, yeni
              ucusun kalitesi ve `nihai varis` sonucunu birlikte okumayi gerektirir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ucus iptal olduysa her zaman ayni para mi alinir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Iptal dosyalarinda miktar tek bir sabit rakam gibi dusunulmemelidir. Rota, mesafe ve final
                  sonuc birlikte okunur.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  250€, 400€, 600€ iptalde de gecerli olabilir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bazi uygun dosyalarda evet, ama bu sadece iptal olmasina degil; rota uzunluguna ve yolcunun sonucta
                  nasil etkilendigine de baglidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Yeni ucus verilirse para tazminati tamamen biter mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Yeni ucusun kalitesi ve yolcunun `nihai varis` sonucu hala cok onemlidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
