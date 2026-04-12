import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "yanlis-valizi-iade-ettikten-sonra-kendi-bagajiniz-hala-yoksa-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-wrong-bag-returned-own-baggage-still-missing&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-wrong-bag-returned-own-baggage-still-missing&utm_content=text_link";

export default function TrWrongBagReturnedOwnBaggageStillMissingArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Yanlis valizi iade ettikten sonra kendi bagajiniz hala yoksa ne yapmali?"
        description="Yanlis valizi iade ettikten sonra kendi bagajiniz hala yoksa ne yapmali? Turk yolcular icin wrong pickup, PIR kaydi, paralel dosya ve belge zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Yanlis valizi iade ettikten sonra kendi bagajiniz hala yoksa ne yapmali?",
            description:
              "Yanlis valizi iade ettikten sonra kendi bagajiniz hala yoksa ne yapmali? Turk yolcular icin wrong pickup, PIR kaydi, paralel dosya ve belge zincirini anlatan net rehber.",
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
                name: "Yanlis valizi iade ettim ama kendi bavulum hala yok. Ilk ne yapilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk adim, yanlis valizin iade saatini not etmek ve kendi bagajiniz icin ayri ama baglantili bir PIR veya bagaj dosyasi acildigindan emin olmaktir. Iade islemi kendi bavulunuzun kaydini otomatik kapatmaz.",
                },
              },
              {
                "@type": "Question",
                name: "Yanlis valizi iade etmek dosyayi tamamen kapatir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Yanlis valizi iade etmek sadece teslim hatasinin bir parcasini duzeltir. Kendi bavulunuz hala ortada yoksa geciken veya kayip bagaj dosyasi acik kalir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler ayni zincirde saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kendi bagaj etiketiniz, boarding pass, yanlis valizi ne zaman iade ettiginiz, varsa teslim tutanagi, PIR numarasi ve yazili mesajlar ayni zaman cizgisinde saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">
              Yanlis valizi iade ettikten sonra kendi bagajiniz hala yoksa ne yapmali
            </span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Yanlis valizi iade ettikten sonra kendi bagajiniz hala yoksa ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu senaryoda kafa karisikligi cok olur: once size ait olmayan bavulu fark eder, onu geri verir, sonra da
              kendi bagajinizin hala ortada olmadigini anlarsiniz. Dogru analiz, sadece <strong>yanlis valizin iade
              edilmesine</strong> degil, <strong>kendi bagajiniz icin ayri kayit acilmasina</strong>,
              <strong> PIR numarasina</strong> ve <strong>iki olay arasindaki belge zincirine</strong> bakar.
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
              <strong>Yanlis valizi iade etmeniz, kendi bagajinizin dosyasini otomatik kapatmaz.</strong> Tam tersine,
              bu noktada hem wrong pickup iade saatini hem de kendi bavulunuz icin acilan bagaj dosyasini ayni zincirde
              tutmak gerekir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger wrong pickup plus missing bag analizi"
            title="Yanlis valizi iade ettiniz ama kendi bavulunuz hala yoksa dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, yanlis bavul iade edilince tum sorunun kapanmis oldugunu sanmaktir. Asil kritik nokta, kendi bagajiniz icin ayri referans ve temiz bir zaman cizgisi olmasidir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj dosyami kontrol et"
            placement="tr_wrong_bag_returned_own_baggage_still_missing_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Yanlis valizi ne zaman iade ettiginizi net kaydetmek.</li>
                <li>Kendi bagajiniz icin PIR veya resmi bagaj dosyasi acildigini teyit etmek.</li>
                <li>Kendi bagaj etiketini, boarding passi ve yazili mesajlari saklamak.</li>
                <li>Iki olayi ayni timeline icinde tutmak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Yanlis valizi iade edince artik ayri bir dosya gerekmeyecegini sanmak.</li>
                <li>Kendi bagaj etiketi ile yanlis valizin bilgisini birbirine karistirmak.</li>
                <li>PIR numarasini almadan alandan ayrilmak.</li>
                <li>Sadece sozlu aciklamalara guvenmek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Neden sorun yanlis bavulu iade etmekle bitmez?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Cunku iki ayri olay vardir. Birincisi, size ait olmayan bagajin yanlislikla size ulasmasi veya sizin
                tarafinizdan alinmasidir. Ikincisi ise size ait bavulun hala teslim edilmemis olmasidir. Ilk sorun
                duzelmis olsa bile ikincisi devam ediyor olabilir.
              </p>
              <p>
                Bu nedenle "yanlis bavulu geri verdim, konu kapandi" mantigi zayiftir. Asil kritik soru, kendi
                bagajiniz icin ayri ve yazili bir kayit olusup olusmadigidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Hangi iki kayit ayni anda bulunmalidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ilk kayit, yanlis valizi ne zaman ve nasil iade ettiginize dair izdir. Bu bir teslim notu, e-posta,
                mesaj veya bagaj ofisinin verdigi yazili teyit olabilir. Ikinci kayit ise kendi bavulunuz icin acilmis
                PIR veya resmi bagaj dosyasidir.
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
                      placement: "tr_wrong_bag_returned_own_baggage_still_missing_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  wrong pickup sonrasi hala kayip gorunen kendi bagaj dosyasini birlikte incelemek
                </a>{" "}
                hangi baglantilarin eksik oldugunu hizla ortaya cikarir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En degerli belge zinciri hangisidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kendi bagaj etiketiniz, boarding pass, yanlis valizi iade ettiginiz saat, varsa teslim tutanagi, PIR
                numarasi ve bagaj ofisiyle yazismalar ayni zaman cizgisinde tutulmalidir. Boylece dosya "karisik bir
                bavul hikayesi" olarak degil, net iki asamali bir olay olarak okunur.
              </p>
              <p>
                Guclu dosya, yanlis valizin duzeltilmis oldugunu ama size ait bagajin hala eksik kaldigini acik sekilde
                gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, yanlis valiz iade edildigi anda bagaj ofisinin "tamamdir" demesiyle yetinmek ve kendi
              bavulunuz icin ayri referans istememektir. Dosyayi guclu yapan sey, bu iki olayin birbirine bagli ama ayri
              kayitlar olarak tutulmasidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Yanlis valizi iade ettim ama kendi bavulum hala yok. Ilk ne yapilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Iade saatini not edin ve kendi bagajiniz icin ayri PIR veya resmi bagaj dosyasi acildigini teyit edin.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Yanlis valizi iade etmek dosyayi tamamen kapatir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Bu sadece teslim hatasinin bir parcasini duzeltir; kendi bavulunuz hala eksikse bagaj dosyasi
                  acik kalir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler ayni zincirde saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Kendi bagaj etiketiniz, boarding pass, iade saati, varsa teslim notu, PIR numarasi ve yazili mesajlar
                  ayni timeline icinde tutulmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
