import Link from "next/link";
import { CheckCircle2, PlaneTakeoff, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "pegasus-ucusunda-eu261-ne-zaman-gecerli-olur";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-pegasus-eu261&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-pegasus-eu261&utm_content=text_link";

export default function TrPegasusEu261Article() {
  return (
    <LayoutTr>
      <SEO
        title="Pegasus ucusunda EU261 ne zaman gecerli olur?"
        description="Pegasus ucuslarinda EU261 ne zaman gecerli olabilir? Turk yolcular icin kalkis noktasi, low-cost yanilgisi ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Pegasus ucusunda EU261 ne zaman gecerli olur?",
            description:
              "Pegasus ucuslarinda EU261 ne zaman gecerli olabilir? Turk yolcular icin kalkis noktasi, low-cost yanilgisi ve nihai varis mantigini anlatan net rehber.",
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
                name: "Pegasus low-cost oldugu icin EU261 hakki zayif midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Low-cost model tek basina dosyayi zayif yapmaz. En kritik nokta kalkis noktasi, rota yapisi ve yolcunun nihai varis sonucudur.",
                },
              },
              {
                "@type": "Question",
                name: "Pegasus ile Turkiye cikisli bir ucusta yine de guclu dosya olabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, olabilir. Dosyanin gucu marka yerine kalkis mantigi, baglanti zinciri ve final gecikme sonucuna bakilarak anlasilir.",
                },
              },
              {
                "@type": "Question",
                name: "Pegasus dosyalarinda en cok hangi hata yapilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En cok yapilan hata, ucusun low-cost olmasi nedeniyle hak olasiligini bastan dusuk sanmak ve nihai varis verisini yeterince belgelememektir.",
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
            <span className="text-slate-900 dark:text-white">Pegasus ve EU261</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Havayolu Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Pegasus ucusunda EU261 ne zaman gecerli olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Pegasus aramalarinda kullanicilarin en buyuk yanilgisi, low-cost modelin otomatik olarak daha zayif hak
              anlami tasidigini dusunmektir. Oysa saglikli analiz, <strong>marka veya fiyat etiketiyle</strong> degil,
              <strong> kalkis noktasi</strong>, <strong>rota zinciri</strong> ve <strong>nihai varis sonucu</strong>
              ile yapilir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 9 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <PlaneTakeoff className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Pegasus low-cost oldugu icin dosya otomatik olarak zayif sayilmaz.</strong> Asil belirleyici
              olan sey, ucusun hangi noktadan basladigi, baglanti yapisinin nasil kuruldugu ve yolcunun son hedefe ne
              kadar gec vardigidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Pegasus analizi"
            title="Pegasus dosyanizin EU261 acisindan gercekten guclu olup olmadigini kontrol edin"
            description="Pegasus dosyalarinda en buyuk hata, low-cost etiketi yuzunden dosyayi ya gereksizce kapatmak ya da fazla basite indirgemektir. Dogru analiz, rota ve final varis uzerinden yapilir."
            ctaHref={CLAIM_URL}
            ctaLabel="Pegasus dosyami analiz et"
            placement="tr_pegasus_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Kalkis noktasinin kapsam icin avantajli olmasi.</li>
                <li>Butun rota zincirinin ve baglantilarin gorunebilmesi.</li>
                <li>Nihai varista net zaman kaybi olusmasi.</li>
                <li>SMS, e-posta ve yeni rota detaylarinin saklanmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Low-cost oldugu icin bastan umudu kesmek.</li>
                <li>Sadece ilk gecikmeye bakip analizi bitirmek.</li>
                <li>Baglanti zincirini tek parca gormemek.</li>
                <li>Gercek nihai varis saatini kaydetmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Pegasus dosyalarinda en buyuk hata, low-cost etiketi uzerinden karar vermektir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Pegasus aramalarinda kullanicilar genellikle iki uca savrulur: ya dosyayi otomatik zayif sayar ya da
                sadece ucuz bilet mantigina bakarak sureci basite indirger. Oysa EU261 analizi, havayolunun fiyat
                modeli uzerinden degil, hukuki kapsam ve yolculuk sonucu uzerinden okunur.
              </p>
              <p>
                Bu nedenle “Pegasus ise zor” ya da “Pegasus ise zaten hak var” gibi kisayollar guvenilir degildir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Pegasus ucuslarinda asıl agirlik, kalkis noktasi ve tum rota zincirindedir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Tek bir boarding pass ya da tek bir mesaj, tum dosyayi aciklamaz. Ozellikle Avrupa ile temas eden ya
                da baglantili seyahate donusen Pegasus dosyalarinda, tum segmentleri birlikte gormek gerekir.
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
                      placement: "tr_pegasus_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  dosyadaki nihai varis ve gecikme yapisini
                </a>{" "}
                birlikte okumak, marka isminden cok daha degerli bilgi verir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Pegasus dosyalarinda nihai varis, ilk bakista gorundugunden daha onemlidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bazi Pegasus dosyalarinda ilk gecikme nispeten kucuk gorunur. Fakat baglanti koptugunda, yeni rota
                verildiginde veya geceleme gerektiginde asıl zaman kaybi buyur. Bu nedenle dosyanin agirligi, panoda
                yazan ilk dakika farkindan cok, yolcunun son hedefe ne zaman vardiginda netlesir.
              </p>
              <p>
                Uygulamada en degerli belgeler de tam burada ortaya cikar: yeni bilet, e-posta, SMS, boarding pass ve
                gercek varis saati.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, Pegasus dosyasini sadece low-cost kimligiyle okumaktir. Gercek sonuc, fiyat modeliyle
              degil kapsam, rota ve nihai varisle belirlenir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Pegasus oldugu icin hak ihtimali dusuk mudur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Hak ihtimali marka yerine kalkis noktasi, rota yapisi ve nihai varis sonucu uzerinden okunur.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Pegasus dosyalarinda en kritik belge hangisidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Tek bir belge yeterli olmaz. En guclu yapi, boarding pass, mesajlasma kaydi, yeni rota ve gercek
                  varis saatinin birlikte saklanmasiyla kurulur.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Pegasus baglantili seyahatlerinde neye dikkat edilmeli?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Tek segment yerine butun rota zinciri ve son hedefe ulasim zamani birlikte okunmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
