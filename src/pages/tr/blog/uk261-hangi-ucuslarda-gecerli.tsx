import Link from "next/link";
import {
  CheckCircle2,
  Globe2,
  MapPinned,
  ShieldAlert,
  Sparkles,
  XCircle,
} from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "uk261-hangi-ucuslarda-gecerli";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-uk261-scope&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-uk261-scope&utm_content=text_link";

export default function TrUk261ScopeArticle() {
  return (
    <LayoutTr>
      <SEO
        title="UK261 hangi ucuslarda gecerli? TR-UK rotalari icin net rehber"
        description="UK261 hangi ucuslarda gecerli? Turk yolcular icin Ingiltere cikisli rotalar, isleten tasiyici ve kapsam mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "UK261 hangi ucuslarda gecerli? TR-UK rotalari icin net rehber",
            description:
              "UK261 hangi ucuslarda gecerli? Turk yolcular icin Ingiltere cikisli rotalar, isleten tasiyici ve kapsam mantigini anlatan net rehber.",
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
                name: "UK261 her Ingiltere baglantili ucusta gecerli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Sadece UK ile ilgili olmak yetmez. Kalkis noktasi, isleten tasiyici ve rota yapisi birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Londra'ya gidiyorsa otomatik UK261 olur mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Varis noktasi tek basina yeterli degildir. Hangi rejimin devreye girecegi, ucusun nasil kurulduguna ve nereden basladigina gore degisir.",
                },
              },
              {
                "@type": "Question",
                name: "En kritik unsur nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik unsur, ucusun sadece UK ile ilgili olmasi degil; hangi kalkis noktasi, hangi isleten tasiyici ve hangi rota mantigi ile ilerledigidir.",
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
            <span className="text-slate-900 dark:text-white">UK261 hangi ucuslarda gecerli?</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              UK261 Kapsam Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              UK261 hangi ucuslarda gecerli?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Turk yolcular icin en karisik alanlardan biri budur, cunku UK baglantili her rota otomatik olarak ayni
              sekilde okunmaz. Dogru analizde asıl soru sudur:
              <strong> bu ucus gercekte hangi kapsam mantigi altina giriyor?</strong>
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Globe2 className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>UK261 her UK baglantili ucusta otomatik olarak devreye girmez.</strong> En guclu okuma, ucusun
              nereden kalktigi, kim tarafindan isletildigi ve tum seyahatin nasil kuruldugu birlikte incelenerek
              yapilir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger UK261 kapsam kontrolu"
            title="UK261 mi, EU261 mi, yoksa farkli bir okuma mi gerekiyor?"
            description="Ozellikle UK cikisli veya UK baglantili dosyalarda yanlis rejimle baslamak buyuk hata yaratir. ClaimWinger ile rota ve tasiyici yapisini Turkce olarak hizla kontrol edin."
            ctaHref={CLAIM_URL}
            ctaLabel="UK261 kapsam kontrolunu ac"
            placement="tr_uk261_scope_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Guclu sinyaller
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>UK cikisli rotanin net sekilde tanimlanmasi.</li>
                <li>Isleten tasiyicinin dogru ayristirilmasi.</li>
                <li>Baglantili yolculukta `nihai varis` etkisinin gorulmesi.</li>
                <li>UK261 ve EU261'in karistirilmadan okunmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yanlislar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Her Londra rotasini otomatik UK261 saymak.</li>
                <li>Varis noktasini tek basina yeterli sanmak.</li>
                <li>Sadece marka veya logo uzerinden dusunmek.</li>
                <li>Baglantili seyahati parcali okumak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <MapPinned className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. En kritik soru: ucus nereden basliyor?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                UK261 tartismasinda en buyuk hata, Londra veya genel olarak UK adini gorur gormez sonuca atlamaktir.
                Oysa dosyanin gucu genelde once <strong>kalkis noktasi</strong> uzerinden okunur. Cikis mantigi,
                claimin hangi rejim altinda degerlendirilecegini ciddi sekilde etkiler.
              </p>
              <p>
                Bu yuzden UK baglantili bir dosyayi sadece destinasyon veya marka uzerinden degil, tam rota baslangici
                uzerinden okumak gerekir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Isleten tasiyici hala cok onemlidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bircok dosyada kullanicilar sadece bilette gordugu markaya odaklanir. Oysa gercekte kimin islettigi,
                UK261 mantigini dogru okumak icin hala merkezi oneme sahiptir. Pazarlama markasi ile operasyonu yapan
                taraf ayni olmayabilir.
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
                      placement: "tr_uk261_scope_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  somut rota ve tasiyici kontrolu yapmak
                </a>{" "}
                sadece teori okumaktan daha sagliklidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. UK baglantili aktarmalarda parcaya degil, zincire bakmak gerekir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Diaspora rotalarinda baglantili ucuslar cok yaygindir. Bu nedenle ilk segmenti ayri, kalanini ayri
                okumak bazen ciddi hata yaratir. Asil deger, `nihai varis` etkisini ve tum yolculuk zincirini birlikte
                gormekte ortaya cikar.
              </p>
              <p>
                UK261 kapsam sorusunun dogru cevabi, sadece “UK var mi?” degil, “bu zincir nasil calisiyor?” sorusuna
                verilen net cevaptir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, UK baglantili her dosyayi tek kuralla okumaya calismaktir. Oysa kapsam sorusu ancak
              kalkis noktasi, isleten tasiyici ve rota zinciri birlikte degerlendirildiginde dogru cevaplanir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  UK261 her Ingiltere baglantili ucusta gecerli midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Sadece UK ile ilgili olmak yeterli degildir. Rota, kalkis noktasi ve isleten tasiyici birlikte
                  okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Londra'ya gidiyorsa otomatik UK261 olur mu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Sadece varis noktasina bakmak yeterli degildir. Cikisin nereden oldugu ve ucusun nasil
                  isletildigi belirleyicidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">En kritik unsur nedir?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik unsur, sadece UK adini gormek degil; hangi kalkis noktasi, hangi isleten tasiyici ve hangi
                  rota mantigi oldugunu netlestirmektir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
