import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "yanlis-valizi-actiysan-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-opened-wrong-baggage&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-opened-wrong-baggage&utm_content=text_link";

export default function TrOpenedWrongBaggageArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Yanlis valizi actiysan ne yapmali?"
        description="Yanlis valizi actiysan ne yapmali? Turk yolcular icin etiket kontrolu, ilk bildirim, wrong pickup ve belge zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Yanlis valizi actiysan ne yapmali?",
            description:
              "Yanlis valizi actiysan ne yapmali? Turk yolcular icin etiket kontrolu, ilk bildirim, wrong pickup ve belge zincirini anlatan net rehber.",
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
                name: "Yanlis valizi actiysam hemen ne yapmaliyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En dogru adim, durumu fark ettiginiz anda resmi kanala bildirmek, valizi daha fazla kurcalamamak ve etiketle birlikte temiz bir teslim zinciri kurmaktir.",
                },
              },
              {
                "@type": "Question",
                name: "Valizi acmis olmak dosyayi cok zayiflatir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Asil kritik nokta ilk tepkinin ne kadar hizli ve duzgun verildigidir. Geciktirmeden bildirim yapmak ve valizi oldugu haliyle iade akisina sokmak daha saglam bir yaklasimdir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeleri saklamaliyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bagaj etiketi, boarding pass, bagaj fisi, ilk bildirim saati ve varsa olay anina dair notlar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Yanlis valizi actiysan ne yapmali</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Yanlis valizi actiysan ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, wrong pickup zincirinde kullanicinin en cok panikledigi anlardan biridir: bavul size ait degildir ve
              bunu etiket, icerik ya da ilk acilis aninda anlarsiniz. Dogru analiz, sadece <strong>yanlis bavulu fark
              etmekten</strong> degil, <strong>ilk bildirimi geciktirmemekten</strong>, <strong>valizi gereksiz yere daha
              fazla kurcalamamaktan</strong> ve <strong>etiket ile boarding pass zincirini temiz tutmaktan</strong> dogar.
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
              <strong>Yanlis valizi actiysaniz durumu fark ettiginiz anda resmi bildirim vermeniz gerekir.</strong>
              Bu dosyada guc, ilk tepkinin hizli olmasi, etiketin korunmasi ve valizin temiz bir iade akisina girmesiyle
              olusur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger opened wrong bag analizi"
            title="Yanlis valizi acma dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, panikle fazla kurcalamak ya da bildirimi geciktirmektir. Etiket, ilk bildirim ve teslim zinciri birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_opened_wrong_baggage_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Yanlisligi fark eder etmez bildirim yapmak.</li>
                <li>Bagaj etiketini ve bagaj fisini saklamak.</li>
                <li>Ilk fark etme saatini not etmek.</li>
                <li>Valizi oldugu haliyle iade akisina sokmak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Durumu anlamadan uzun sure beklemek.</li>
                <li>Etiketi kaybetmek ya da koparmak.</li>
                <li>Valizi fazla kurcalayip sonra bildirim yapmak.</li>
                <li>Resmi kayit acmadan sadece sozlu aciklama ile yetinmek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Neden asil kritik sey ilk tepkinin hizi?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Wrong pickup dosyalarinda kullanicinin ilk reaksiyonu, dosyanin ne kadar temiz okunacagini ciddi sekilde
                etkiler. Etiketi fark ettiginiz an ile resmi bildirim arasindaki sure uzadikca zincir daha bulanik hale
                gelir. Bu nedenle ana mesele "actin mi actin" sorusundan cok, "fark ettikten sonra ne yaptin" sorusudur.
              </p>
              <p>
                Hizli ve duzgun bir tepki, panigi somut bir teslim hatasi dosyasina cevirebilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ilk hangi bilgiler teyit edilmelidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bagaj etiketi, boarding pass, bagaj fisi, ilk fark etme saati ve ilk bildirim saati ayni anda
                netlestirilmelidir. Boylece konu soyut bir karisiklik degil, zaman cizgisi olan somut bir wrong pickup
                dosyasi haline gelir.
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
                      placement: "tr_opened_wrong_baggage_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  yanlis acilan valiz dosyasini birlikte incelemek
                </a>{" "}
                surecin ne kadar temiz yonetildigini daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Hangi belge zinciri en degerlidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bagaj etiketi, boarding pass, bagaj fisi, ilk bildirim kaydi ve varsa ilk fark etme anina dair notlar
                ayni timeline icinde tutulmalidir. Boylece problem soyut kalmaz; hem yanlis acilis hem de sonrasindaki
                duzeltme adimi netlesir.
              </p>
              <p>
                Guclu dosya, sadece bavulun size ait olmadigini degil, bunu fark ettikten sonra ne kadar hizli ve duzgun
                hareket ettiginizi gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, valiz acildigi icin artik dosyanin savunulamaz oldugunu sanmaktir. Asil belirleyici
              sey, ilk fark etme anindan sonra ne kadar hizli ve temiz hareket edildigidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Yanlis valizi actiysam hemen ne yapmaliyim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Resmi kanala hemen bildirim verip valizi daha fazla kurcalamadan iade akisina sokmak gerekir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Valizi acmis olmak dosyayi cok zayiflatir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Asil kritik nokta, ilk tepkinin ne kadar hizli ve duzgun verildigidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeleri saklamaliyim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bagaj etiketi, boarding pass, bagaj fisi ve ilk bildirim kaydi birlikte saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
