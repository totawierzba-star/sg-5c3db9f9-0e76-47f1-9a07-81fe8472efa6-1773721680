import Link from "next/link";
import { CheckCircle2, Clock3, Euro, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "antalya-londra-ucusunda-3-saat-gecikme-olursa-ne-kadar-tazminat-dogar";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-antalya-london-3-hour-delay&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-antalya-london-3-hour-delay&utm_content=text_link";

export default function TrAntalyaLondonThreeHourDelayArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Antalya-Londra ucusunda 3 saat gecikme olursa ne kadar tazminat dogar?"
        description="Antalya-Londra ucusunda 3 saat gecikmede ne kadar tazminat dogabilir? Turk yolcular icin nihai varis, rota mesafesi ve UK/EU mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Antalya-Londra ucusunda 3 saat gecikme olursa ne kadar tazminat dogar?",
            description:
              "Antalya-Londra ucusunda 3 saat gecikmede ne kadar tazminat dogabilir? Turk yolcular icin nihai varis, rota mesafesi ve UK/EU mantigini anlatan net rehber.",
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
                name: "Antalya-Londra hattinda 3 saat gecikme oldugunda para otomatik midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. 3 saatlik esik cok gucludur, ancak tek basina yeterli degildir. Nihai varis, rota mantigi ve dosyanin hukuki kapsam yapisi birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu hatta en kritik saat hangisidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik saat, ucagin Antalya'dan ne zaman kalktigi degil; yolcunun Londra'ya gercekte ne zaman vardigidir.",
                },
              },
              {
                "@type": "Question",
                name: "Tutar hesabinda en cok ne gozden kacirilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En cok gozden kacirilan sey, 3 saat kuralinin tek basina tum sonucu vermedigi ve rota/varis mantiginin da birlikte degerlendirilmesi gerektigidir.",
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
            <span className="text-slate-900 dark:text-white">Antalya-Londra 3 saat gecikme</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Rota Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Antalya-Londra ucusunda 3 saat gecikme olursa ne kadar tazminat dogar?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, sezonluk Turkiye-UK trafigi ile diaspora aramalarinin kesistigi cok guclu bir long-tail sorudur.
              Kullanici genelde sadece “3 saat olduysa kac para?” sorusuna cevap arar. Oysa gercek analiz,
              <strong> Londra'ya nihai varis</strong>, <strong>rota mesafesi</strong> ve
              <strong> dosyanin UK/EU kapsam mantigi</strong> birlikte okundugunda ortaya cikar.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Clock3 className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>3 saatlik gecikme bu hatta cok guclu bir esiktir, ama tek basina tum cevabi vermez.</strong>
              Asil belirleyici olan sey, yolcunun Londra'ya gercekte ne zaman vardigi ve dosyanin hangi kapsam
              mantigiyla degerlendirildigidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger 3 saat rota analizi"
            title="Antalya-Londra 3 saat gecikme dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu hatta kullanicilar genelde sadece 3 saat esigine bakar. Oysa nihai varis, rota ve belge duzeni birlikte okununca sonuc daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="3 saat gecikme dosyami kontrol et"
            placement="tr_antalya_london_3h_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Londra'ya nihai varista 3 saate yakin veya ustunde net kayip olmasi.</li>
                <li>Mesajlar, boarding pass ve saat degisimi kayitlarinin korunmasi.</li>
                <li>Varsa yeni rota bilgisinin saklanmasi.</li>
                <li>Gercek varis saatinin net belgelenmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece kalkis dakikasina bakmak.</li>
                <li>3 saat kuralini otomatik para formulu sanmak.</li>
                <li>Londra'ya gercek varis saatini kaydetmemek.</li>
                <li>Rota ve kapsam mantigini hic dusunmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. 3 saat kuralinda asil saat, Londra'ya gercek varis saatidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen Antalya havalimanindaki ilk gecikmeyi tek veri sanir. Oysa bu hatta da asil soru,
                yolcunun Londra'ya ne kadar gec vardigidir. Ilk fark kucuk gorunebilir ama final variste daha buyuk
                bir kayip ortaya cikabilir.
              </p>
              <p>
                Bu yuzden 3 saatlik esik sadece kalkis panosuna gore degil, final sonuca gore okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Tutar sorusu, rota ve kapsam mantigindan bagimsiz degildir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                “Kac para alirim?” sorusu cok gucludur, ama tek basina sadece saat sayisiyla cevaplanmaz. Bu hatta da
                dosyanin kapsam sekli ve yolculugun nasil kuruldugu onemlidir. Kullaniciya gercekci cevap vermek icin
                teorik rakam kadar dosyanin yapisi da okunmalidir.
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
                      placement: "tr_antalya_london_3h_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  nihai varis ve rota mantigini birlikte incelemek
                </a>{" "}
                daha temiz sonuc verir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Sezonluk UK rotalarinda da hesap ayni temel mantikla okunur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Antalya-Londra hattinda kullanici bazen rotayi fazla turistik gorup dosyayi fazla basit okur. Oysa
                asil agirlik, son hedefe etkide ve bu etkinin ne kadar temiz belgelendiginde ortaya cikar. Rota tipi,
                ancak bu temel resmi tamamlayan bir katmandir.
              </p>
              <p>
                Bu nedenle sezonluk olmasi, otomatik olarak ne dusuk ne de yuksek sonuc demektir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-amber-800 dark:text-amber-300">
              <ShieldAlert className="h-6 w-6" />
              Pratik not
            </h2>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Bu tip Londra dosyalarinda sadece ilk bildirimi degil, sonraki saat degisikliklerini ve varsa yeni kapı
              ya da rota bilgisini de saklayin. Cogu zaman dosyanin gucu, bu kronolojik zincirde netlesir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Antalya-Londra hattinda 3 saat gecikme oldugunda para otomatik midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. 3 saatlik esik cok gucludur, ancak tek basina yeterli degildir. Nihai varis, rota mantigi ve
                  dosyanin hukuki kapsam yapisi birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Bu hatta en kritik saat hangisidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik saat, ucagin Antalya'dan ne zaman kalktigi degil; yolcunun Londra'ya gercekte ne zaman
                  vardigidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Tutar hesabinda en cok ne gozden kacirilir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En cok gozden kacirilan sey, 3 saat kuralinin tek basina tum sonucu vermedigi ve rota/varis mantiginin
                  da birlikte degerlendirilmesi gerektigidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
