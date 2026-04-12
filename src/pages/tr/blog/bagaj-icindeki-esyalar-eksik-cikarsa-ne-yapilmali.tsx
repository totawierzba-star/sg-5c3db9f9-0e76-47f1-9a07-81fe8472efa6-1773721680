import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagaj-icindeki-esyalar-eksik-cikarsa-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-items-missing&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-items-missing&utm_content=text_link";

export default function TrMissingItemsFromBaggageArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagaj icindeki esyalar eksik cikarsa ne yapilmali?"
        description="Bagaj icindeki esyalar eksik cikarsa ne yapilmali? Turk yolcular icin resmi kayit, esya listesi, foto ve belge zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagaj icindeki esyalar eksik cikarsa ne yapilmali?",
            description:
              "Bagaj icindeki esyalar eksik cikarsa ne yapilmali? Turk yolcular icin resmi kayit, esya listesi, foto ve belge zincirini anlatan net rehber.",
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
            datePublished: "2026-04-12",
            dateModified: "2026-04-12",
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
                name: "Bagaj icinden esya eksildigini fark edersem ilk ne yapmaliyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En guclu ilk adim, bunu mumkunse havalimaninda fark etmek, resmi kayit acmak, valizin durumunu foto ile belgelemek ve eksik esya listesini not etmektir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu durum hasarli bagajla ayni mi okunur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Burada odak, eksik icerigin ne oldugu, bunun ne kadar net listelendigi ve valizin teslim anindaki durumunun ne kadar iyi kaydedildigidir.",
                },
              },
              {
                "@type": "Question",
                name: "Esya listesi neden bu kadar onemlidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku bagajdan neyin eksik oldugu duzensiz veya sonradan degisen sekilde anlatilirse dosya zayiflar. Net ve tutarli liste daha guclu bir zemin kurar.",
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
            <span className="text-slate-900 dark:text-white">Bagajdan eksik esya</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagaj icindeki esyalar eksik cikarsa ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, yolcunun en fazla suphe ve stres yasadigi bagaj senaryolarindan biridir, cunku valiz size ulasmistir
              ama icerigi artik ayni degildir. Dogru analiz, sadece 'bir sey eksik' demekten degil, <strong>eksik
              esya listesinin ne kadar net oldugundan</strong>, <strong>valizin teslim anindaki durumunun nasil
              kaydedildiginden</strong> ve <strong>resmi kaydin ne kadar hizli acildigindan</strong> dogar.
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
              <strong>Bagaj icinden esya eksildiyse ilk odak, resmi kayit, eksik esya listesi ve valizin durumunu belgelemektir.</strong>
              Bu dosyalarda guc, sadece eksik oldugunu dusundugunuz seylerden degil, bunu ne kadar erken ve ne kadar
              tutarli gosterebildiginizden gelir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger bagaj icerigi analizi"
            title="Eksik esya dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, valizin durumunu foto ile kaydetmeden ve temiz esya listesi cikarmadan surece girmektir. Rapor, bagaj etiketi ve icerik listesi birlikte okunursa tablo cok daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Eksik esya dosyami kontrol et"
            placement="tr_missing_items_baggage_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Eksikligin mumkunse havalimaninda fark edilmesi ve hemen kayit acilmasi.</li>
                <li>Valizin kilit, fermuar, kapak ve genel durumunun foto ile kaydedilmesi.</li>
                <li>Eksik esyalarin tutarli ve temiz bir liste halinde yazilmasi.</li>
                <li>Bagaj etiketi ve boarding passin saklanmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Evde fark ettikten sonra baglami hic belgelememek.</li>
                <li>Eksik listeyi sonradan surekli degistirmek.</li>
                <li>Valizin nasil teslim edildigini kayda almamak.</li>
                <li>Hasar, kayip ve eksik icerik dosyalarini birbirine karistirmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bu dosyada asil soru, neyin eksik oldugu kadar nasil fark edildigidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Eksik esya dosyalarinda tartisma sadece icerik uzerinden yurumez. Valizin teslim anindaki durumu,
                fermuarin veya kilidin gorunumu, valizin acilmis hissi verip vermedigi ve eksikligin ne zaman fark
                edildigi de tabloyu etkiler. Yani guclu dosya, sadece eksik liste sunmaz; ayni zamanda baglam da
                sunar.
              </p>
              <p>
                Bu nedenle ilk andaki foto ve notlar, sonradan yazilan uzun aciklamalardan daha degerli olabilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Eksik esya listesi ne kadar temizse, dosya o kadar okunabilir olur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bu tip dosyalarda en zayif noktalardan biri, eksik oldugu soylenen esyalarin daigin, belirsiz veya
                sonradan buyuyen bir liste halinde anlatilmasidir. Temiz kategori mantigi, tutarli ifade ve mumkunse
                alisveris veya sahiplik izleri dosyayi daha okunur hale getirir.
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
                      placement: "tr_missing_items_baggage_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  eksik esya dosyasini belge zinciriyle birlikte incelemek
                </a>{" "}
                tabloyu daha hizli netlestirir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Valizin dis durumu da bu dosyada delilin parcasi olabilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bazi durumlarda sorun sadece icerik eksikligi gibi gorunur, ama valizin fermuari, kilidi veya ic
                duzeni de ek isaretler verebilir. Bu yuzden valizin kendisini foto ile kaydetmek, eksik icerik
                iddiasini baglamsiz bir sozden cikarip belgelendirilmis bir dosyaya donusturur.
              </p>
              <p>
                Hasarsiz gibi gorunen bir valizde bile teslim anina dair foto ve notlar, sonradan dosyayi toparlamakta
                cok yardimci olabilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, eksik icerik dosyasini sadece hafizadan kurmaya calismaktir. Bu tarafta guc, resmi
              kayit, valizin durumu ve tutarli esya listesinin birlikte yuruymesinden gelir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bagaj icinden esya eksildigini fark edersem ilk ne yapmaliyim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En guclu ilk adim, bunu mumkunse havalimaninda fark etmek, resmi kayit acmak, valizin durumunu foto
                  ile belgelemek ve eksik esya listesini not etmektir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu durum hasarli bagajla ayni mi okunur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Burada odak, eksik icerigin ne oldugu, bunun ne kadar net listelendigi ve valizin teslim
                  anindaki durumunun ne kadar iyi kaydedildigidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Esya listesi neden bu kadar onemlidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku bagajdan neyin eksik oldugu duzensiz veya sonradan degisen sekilde anlatilirse dosya zayiflar.
                  Net ve tutarli liste daha guclu bir zemin kurar.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
