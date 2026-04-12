import Link from "next/link";
import { CheckCircle2, Clock3, Euro, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "londra-bangkok-ucusunda-eu-havayolu-varsa-tazminat-ne-zaman-dogar";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-london-bangkok-eu-airline&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-london-bangkok-eu-airline&utm_content=text_link";

export default function TrLondonBangkokEuAirlineArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Londra-Bangkok ucusunda EU havayolu varsa tazminat ne zaman dogar?"
        description="Londra-Bangkok ucusunda EU havayolu varsa tazminat ne zaman dogar? Turk yolcular icin isleten tasiyici, kalkis mantigi ve Bangkok nihai varis etkisini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Londra-Bangkok ucusunda EU havayolu varsa tazminat ne zaman dogar?",
            description:
              "Londra-Bangkok ucusunda EU havayolu varsa tazminat ne zaman dogar? Turk yolcular icin isleten tasiyici, kalkis mantigi ve Bangkok nihai varis etkisini anlatan net rehber.",
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
                name: "Londra-Bangkok ucusunda EU havayolu varsa ilk neye bakilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk olarak ucusu gercekte kimin islettigine, yolcunun Bangkok'a ne zaman vardigina ve rotanin tek zincir halinde mi kurulduguna bakilmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Sadece EU havayolu ile ucuyor olmak dosyayi otomatik guclendirir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. EU havayolu detayi onemlidir ama tek basina yeterli degildir. Kalkis mantigi, isleten tasiyici, rota yapisi ve nihai varis birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu rotada hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Boarding pass, PNR, e-posta ve uygulama ekranlari, gecikme bildirimleri, varsa yeni rota detaylari ve Bangkok'a gercek varis saatini gosteren kayitlar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Londra-Bangkok EU havayolu rehberi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Rota Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Londra-Bangkok ucusunda EU havayolu varsa tazminat ne zaman dogar?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu rota, post-Brexit donemde en cok karistirilan long-haul aramalarindan biridir. Kullanici genelde
              sadece <strong>EU havayolu</strong> detayina bakar, ama dogru analiz yine
              <strong> kalkis mantigi</strong>, <strong>isleten tasiyici</strong> ve
              <strong> Bangkok nihai varis sonucu</strong> birlikte okundugunda ortaya cikar.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-12</span>
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
              <strong>Londra-Bangkok hattinda EU havayolu detayi onemlidir, ama tek basina yeterli degildir.</strong>
              Bu rotada dosyanin gucu, ucusu kimin islettigi, rotanin nasil kuruldugu ve yolcunun Bangkok&apos;a
              gercekte ne zaman vardigi uzerinden okunur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Londra-Bangkok EU havayolu analizi"
            title="Londra-Bangkok dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, sadece EU havayolu etiketine bakarak karar vermektir. Isleten tasiyici, rota zinciri ve nihai varis sonucu ciddi sekilde degistirebilir."
            ctaHref={CLAIM_URL}
            ctaLabel="Londra-Bangkok dosyami kontrol et"
            placement="tr_london_bangkok_eu_airline_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ucusu gercekte kimin islettiginin netlestirilmesi.</li>
                <li>Bangkok'a gercek varis saatinin belgelenmesi.</li>
                <li>Tek rezervasyon ve baglanti zincirinin kaydedilmesi.</li>
                <li>E-posta, uygulama ve ekran goruntulerinin korunmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece EU havayolu etiketine bakmak.</li>
                <li>Bangkok nihai varisini kaydetmemek.</li>
                <li>Isleten tasiyici ile pazarlama markasini karistirmak.</li>
                <li>Rota zincirini parcali okumak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bu hatta ilk soru: ucusu gercekte kim isletiyor?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Londra-Bangkok aramasinda kullanici genelde ilk olarak “EU havayolu ile ucuyorum” der. Ancak dosyanin
                agirligi sadece biletteki markadan cikmaz. Asil kritik soru, ucusun gercekte kim tarafindan
                isletildigi ve rotanin hangi mantikla kuruldugudur.
              </p>
              <p>
                Bu nedenle EU havayolu etiketi, tek cevap degil; daha derin inceleme gerektiren bir ilk sinyaldir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Bangkok'a nihai varis, dosyanin gercek sonucunu belirler
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bu hatta da en kritik veri, Londra cikis tahtasindaki ilk dakika degil, yolcunun Bangkok&apos;a gercekte
                ne zaman vardigidir. Ozellikle long-haul ve baglantili rotalarda kucuk gecikmeler bile tum planin
                yapisini bozabilir.
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
                      placement: "tr_london_bangkok_eu_airline_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  isleten tasiyici ve nihai varis etkisini birlikte incelemek
                </a>{" "}
                dosyanin gucunu daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Post-Brexit rotalarda etiket degil, zincir okunmalidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Londra-Bangkok gibi rotalarda en buyuk hata, dosyayi tek bir etikete indirgemektir. Oysa gercek
                sonuc, kalkis mantigi, isleten tasiyici, tek rezervasyon yapisi ve Bangkok nihai varisi birlikte
                okundugunda ortaya cikar.
              </p>
              <p>
                Iyi dosya, sadece “EU havayolu” ifadesine degil; temiz belge zinciri ve net zaman kaydina dayanir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-amber-800 dark:text-amber-300">
              <ShieldAlert className="h-6 w-6" />
              Pratik kontrol listesi
            </h2>
            <ul className="space-y-3 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <li>Boarding pass ve PNR kaydini saklayin.</li>
              <li>Ucusu kimin islettigini netlestirin.</li>
              <li>Bangkok'a gercek varis saatini not edin.</li>
              <li>Varsa yeni rota, kacan baglanti veya ek beklemeyi kaydedin.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Londra-Bangkok ucusunda EU havayolu varsa ilk neye bakilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk olarak ucusu gercekte kimin islettigine, yolcunun Bangkok&apos;a ne zaman vardigina ve rotanin tek
                  zincir halinde mi kurulduguna bakilmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Sadece EU havayolu ile ucuyor olmak dosyayi otomatik guclendirir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. EU havayolu detayi onemlidir ama tek basina yeterli degildir. Kalkis mantigi, isleten
                  tasiyici, rota yapisi ve nihai varis birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu rotada hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Boarding pass, PNR, e-posta ve uygulama ekranlari, gecikme bildirimleri, varsa yeni rota detaylari
                  ve Bangkok&apos;a gercek varis saatini gosteren kayitlar saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
