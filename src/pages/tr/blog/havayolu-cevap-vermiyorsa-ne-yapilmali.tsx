import Link from "next/link";
import { CheckCircle2, MailWarning, MessageSquareWarning, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "havayolu-cevap-vermiyorsa-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-airline-no-response&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-airline-no-response&utm_content=text_link";

export default function TrAirlineNoResponseArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Havayolu cevap vermiyorsa ne yapilmali?"
        description="Havayolu claiminize cevap vermiyorsa ne yapilmali? Turk yolcular icin bekleme suresi, follow-up ve sonraki adimlari anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Havayolu cevap vermiyorsa ne yapilmali?",
            description:
              "Havayolu claiminize cevap vermiyorsa ne yapilmali? Turk yolcular icin bekleme suresi, follow-up ve sonraki adimlari anlatan net rehber.",
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
                name: "Havayolundan hemen cevap gelmemesi dosyanin zayif oldugu anlamina gelir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Cevap gelmemesi tek basina dosyanin zayif oldugu anlamina gelmez. Bazen sadece surec yavas ilerler, bazen de daha duzenli bir follow-up gerekir.",
                },
              },
              {
                "@type": "Question",
                name: "Ne kadar beklemek mantiklidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tek bir sihirli gun sayisi yoktur. Ancak makul bir bekleme suresinden sonra duzenli ve belgeli bir follow-up yapmak genellikle daha saglikli olur.",
                },
              },
              {
                "@type": "Question",
                name: "Ayni mesaji tekrar tekrar yollamak iyi fikir midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Tekrarlayan ve daginik mesajlar yerine, onceki talebi referans veren net ve kisa bir follow-up daha etkilidir.",
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
            <span className="text-slate-900 dark:text-white">Cevap vermeyen havayolu</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Claim Takip Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Havayolu cevap vermiyorsa ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, claim surecinde en moral bozucu anlardan biridir. Kullanici dosyasini gonderir ama gunler gecer,
              sonra haftalar gecer ve hic ses cikmaz. Bu durumda en buyuk hata, ya panikle ayni metni tekrar tekrar
              yollamak ya da dosyayi tamamen birakmaktir. Asil ihtiyac,
              <strong> duzenli takip</strong>, <strong>net follow-up</strong> ve <strong>dogru zamanlama</strong>
              kurmaktir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <MailWarning className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Havayolunun sessiz kalmasi, dosyanin zayif oldugu anlamina gelmez.</strong> Ama bu durumda
              sureci daginik hale getirmeden, belgeli ve net bir follow-up duzeni kurmak gerekir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger takip analizi"
            title="Cevap vermeyen havayolu dosyanizda sonraki adimin ne olmasi gerektigini hizli kontrol edin"
            description="Bir cok yolcu bu noktada ya fazla bekler ya da sureci karmasiklastirir. Oysa kisa, duzenli ve belgeli bir sonraki adim daha guclu sonuc verir."
            ctaHref={CLAIM_URL}
            ctaLabel="Dosyamin sonraki adimini kontrol et"
            placement="tr_airline_no_response_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren davranislar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ilk basvurunun tarihini ve icerigini saklamak.</li>
                <li>Kisa, net ve tek follow-up gondermek.</li>
                <li>Butun yazismalari tek dosyada toplamak.</li>
                <li>Zaman cizelgesini duzenli tutmak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ayni mesajı tekrar tekrar kopyalamak.</li>
                <li>Ilk basvuru kaydini saklamamak.</li>
                <li>Takibi cok gec veya cok daginik yapmak.</li>
                <li>Bir sessizligi otomatik ret sanmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Sessizlik, her zaman ret anlamina gelmez
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen cevap gelmeyince dosyanin zayif oldugunu dusunur. Oysa pratikte havayollarinin cevap
                sureleri degisken olabilir. Bazen surec yavas ilerler, bazen de sistem sadece otomatik teyit atip
                gercek incelemeyi daha sonra yapar.
              </p>
              <p>
                Bu yuzden ilk sessizlik, otomatik olarak “hayir” anlamina gelmez.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. En iyi takip, kisa ve duzenli olandir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Follow-up gonderirken en iyi strateji, onceki basvuruyu referanslayan, net tarih veren ve talebi
                tekrar kisa sekilde hatirlatan mesajdir. Uzun, daginik ve tekrarli mailler genelde sureci
                guclendirmez.
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
                      placement: "tr_airline_no_response_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  dosyanin takip adimlarini netlestirmek
                </a>{" "}
                kullanicinin sureci daha kontrollu yonetmesine yardimci olur.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <MessageSquareWarning className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Belge duzeni, cevapsiz dosyalarda daha da onemlidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Cevap vermeyen havayolu dosyalarinda asıl guc, kimin ne zaman ne gonderdigini net gosterebilmekten
                gelir. Ilk basvuru, otomatik teyit, follow-up ve varsa diger iletisim kanallari birlikte tutulursa,
                dosya daha net okunur.
              </p>
              <p>
                Bu nedenle claim surecinde sadece ucus belgeleri degil, yazisma zinciri de ayni derecede onemlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, cevap gelmeyince ya dosyayi tamamen birakmak ya da sureci spam haline getirmektir.
              Daha iyi yol, kontrollu, belgeli ve net bir takip akisi kurmaktir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Cevap gelmiyorsa dosya zayif midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Sessizlik tek basina dosyanin zayif oldugu anlamina gelmez.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Follow-up nasil olmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Kisa, net, onceki basvuruyu referanslayan ve daginik olmayan bir takip mesaji daha etkilidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Neleri saklamak gerekir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk basvuru tarihi, otomatik cevaplar, follow-up mailleri ve tum yazisma zinciri mutlaka
                  saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
