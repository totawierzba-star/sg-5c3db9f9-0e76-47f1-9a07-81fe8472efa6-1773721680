import Link from "next/link";
import { CheckCircle2, Clock3, MapPin, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "izmir-berlin-ucusunda-gecikme-tazminati-ne-zaman-dogar";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-izmir-berlin-delay&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-izmir-berlin-delay&utm_content=text_link";

export default function TrIzmirBerlinDelayArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Izmir-Berlin ucusunda gecikme tazminati ne zaman dogar?"
        description="Izmir-Berlin ucusunda gecikme tazminati ne zaman dogabilir? Turk yolcular icin nihai varis, rota yapisi ve EU261 mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Izmir-Berlin ucusunda gecikme tazminati ne zaman dogar?",
            description:
              "Izmir-Berlin ucusunda gecikme tazminati ne zaman dogabilir? Turk yolcular icin nihai varis, rota yapisi ve EU261 mantigini anlatan net rehber.",
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
                name: "Izmir-Berlin ucusunda gecikme olursa otomatik tazminat dogar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Gecikme tek basina yeterli degildir. Asil analiz, Berlin'e nihai varis zamani, ucusu isleten tasiyici ve dosyanin hukuki kapsam mantigi birlikte okunarak yapilir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu hatta en kritik saat hangisidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik saat, ucagin Izmir'den ne zaman kalktigi degil; yolcunun Berlin'e gercekte ne zaman vardigidir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Boarding pass, PNR, havayolu mesajlari, varsa yeni rota bilgisi ve Berlin'e gercek varis saatini gosteren kayitlar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Izmir-Berlin gecikme tazminati</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Rota Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Izmir-Berlin ucusunda gecikme tazminati ne zaman dogar?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu rota, `TR + diaspora EU` icin cok degerli bir long-taildir; hem aile ziyareti hem de duzenli
              Avrupa yolculuklari burada bulusur. Kullanici genelde ilk bakista sadece gecikmenin kac saat oldugunu
              ogrenmek ister. Oysa gercek analiz, <strong>Berlin'e nihai varis</strong>,
              <strong> isleten tasiyici</strong> ve <strong>rota mantigi</strong> birlikte okundugunda ortaya cikar.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Izmir-Berlin hattinda gecikme otomatik para anlamina gelmez.</strong> Dosyanin gucu, Berlin'e
              gercekte ne zaman vardiginiz, ucusu kimin islettigi ve rota yapisinin nasil kuruldugu ile netlesir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger rota analizi"
            title="Izmir-Berlin gecikme dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu hatta kullanicilar genelde sadece Izmir kalkisini dusunur. Oysa asil farki yaratan sey, Berlin'e gercek varis ve dosyanin kapsam mantigidir."
            ctaHref={CLAIM_URL}
            ctaLabel="Izmir-Berlin dosyami kontrol et"
            placement="tr_izmir_berlin_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Berlin'e nihai varista belirgin zaman kaybi olusmasi.</li>
                <li>Ucusun kimin tarafindan isletildiginin net olmasi.</li>
                <li>Varsa baglanti ve yeniden rota bilgilerinin saklanmasi.</li>
                <li>Mesaj, boarding pass ve saat degisimi kayitlarinin korunmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece Izmir cikisina bakmak.</li>
                <li>Berlin'e gercek varis saatini kaydetmemek.</li>
                <li>Bilet markasi ile isleten tasiyiciyi karistirmak.</li>
                <li>Ilk gecikmeyi tum dosyanin cevabi sanmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bu hatta asil soru, kalkis degil Berlin'e varis sonucudur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici cogu zaman “ucak kac saat gecikti” sorusuna odaklanir. Ancak Izmir-Berlin hattinda da esas
                fark, Berlin'e nihai olarak ne kadar gec vardiginizla ortaya cikar. Ilk gecikme kucuk olabilir, ama
                son hedefe etkisi cok daha buyuk olabilir.
              </p>
              <p>Bu nedenle panodaki dakika farki tek basina yeterli degildir.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Izmir-Berlin dosyalarinda tasiyici yapisi sandiginizdan daha onemlidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bu hatta kullanicilar bazen bilette gordugu markayi tum dosyanin tek cevabi sanir. Oysa isleten
                tasiyici ve rota yapisi, dosyanin kapsam mantigini ciddi sekilde degistirebilir. Bu ozellikle
                codeshare ve karisik rota yapilarinda daha da onemlidir.
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
                      placement: "tr_izmir_berlin_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  tasiyici ve nihai varis analizini birlikte yapmak
                </a>{" "}
                daha guclu bir resim verir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock3 className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En degerli belgeler: varis saati, mesajlar ve rota degisimi
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Izmir-Berlin dosyalarinda en degerli pratik belgeler genelde cok basittir: boarding pass, PNR,
                havayolu mesajlari, uygulama ekranlari ve Berlin'e gercek varis saati. Eger yeni rota verildiyse bu
                da mutlaka saklanmalidir.
              </p>
              <p>
                Cunku claimin gucu cogu zaman teorik kurallardan cok, bu belgelerle netlesen olay akisinda gorulur.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, Izmir-Berlin hattini tek satirlik “AB disi kalkis” mantigiyla kapatmaktir. Oysa
              dosyanin gercek gucu, tasiyici ve nihai varis sonucuyla birlikte ortaya cikar.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Izmir-Berlin gecikmesinde para kesin midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Nihai varis, tasiyici ve rota mantigi birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En kritik saat hangisidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik saat, Berlin'e gercekte hangi saatte vardiginizdir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler en cok fark yaratir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  PNR, boarding pass, havayolu mesajlari, varsa yeni rota ve Berlin'e gercek varis kaydi en buyuk
                  farki yaratir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
