import Link from "next/link";
import { CheckCircle2, GitBranchPlus, ListChecks, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "tazminat-sureci-nasil-isler";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-compensation-process&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-compensation-process&utm_content=text_link";

export default function TrCompensationProcessArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Ucus tazminat sureci nasil isler? TR yolcular icin adim adim rehber"
        description="Ucus tazminat sureci nasil isler? Turk yolcular icin ilk basvurudan havayolu cevabina, follow-up ve olasi odemeye kadar adim adim rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ucus tazminat sureci nasil isler? TR yolcular icin adim adim rehber",
            description:
              "Ucus tazminat sureci nasil isler? Turk yolcular icin ilk basvurudan havayolu cevabina, follow-up ve olasi odemeye kadar adim adim rehber.",
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
                name: "Tazminat sureci nerede baslar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Surec genelde ucus bilgileri, PNR, boarding pass, havayolu mesajlari ve nihai varis sonucunun duzenlenmesiyle baslar. Guclu baslangic, sonraki adimlari cok etkiler.",
                },
              },
              {
                "@type": "Question",
                name: "Havayolu hemen cevap vermezse surec bitmis mi olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Sessizlik surecin bittigi anlamina gelmez. Bazen duzenli follow-up, bazen de daha guclu bir sonraki adim gerekir.",
                },
              },
              {
                "@type": "Question",
                name: "En kritik nokta nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik nokta, sureci dagitmadan belge, timeline ve havayolu yazismalarini tek bir mantikla yonetmektir.",
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
            <span className="text-slate-900 dark:text-white">Tazminat sureci</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Prosedur Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Ucus tazminat sureci nasil isler?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Cogu kullanici sadece “formu doldurdum, sonra ne olacak?” sorusuyla kalir. Ama iyi bir claim sureci,
              tek bir formdan ibaret degildir. Asil farki yaratan sey, <strong>dogru baslangic</strong>,
              <strong> belgelerin duzeni</strong> ve <strong>havayolunun cevabina gore sonraki adimin bilinmesidir</strong>.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ListChecks className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Tazminat sureci genelde belge toplama, ilk basvuru, havayolu cevabi, follow-up ve olasi odeme ya da eskalasyon adimlarindan olusur.</strong>
              En guclu dosyalarda bu akisin her parcasi duzenli yonetilir; en zayif dosyalarda ise surec daginik kalir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger surec kontrolu"
            title="Dosyanizin su an surecin hangi asamasinda oldugunu hizli kontrol edin"
            description="Bir cok yolcu neyin eksik, neyin erken, neyin gec oldugunu bilmeden sureci yurutur. ClaimWinger ile basvuru akisini ve sonraki dogru adimi Turkce gorebilirsiniz."
            ctaHref={CLAIM_URL}
            ctaLabel="Surecimi kontrol et"
            placement="tr_compensation_process_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Sureci guclendiren davranislar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Belgeleri bastan toplamak.</li>
                <li>Tek ve net bir ilk basvuru yapmak.</li>
                <li>Yazisma zincirini saklamak.</li>
                <li>Takip ve sonraki adimi planli yonetmek.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Sureci zayiflatan davranislar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Eksik belgelerle acele etmek.</li>
                <li>Birden fazla daginik basvuru yapmak.</li>
                <li>Ilk sessizlikte dosyayi birakmak.</li>
                <li>Red ve follow-up adimlarini karistirmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <GitBranchPlus className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Surec genelde belgelerle baslar, form ile degil
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Cogu yolcu once formu dusunur. Oysa iyi bir surec, once dosyanin iskeletini kurmakla baslar: PNR,
                boarding pass, havayolu mesajlari, yeni rota varsa onun kaydi ve `nihai varis` sonucu.
              </p>
              <p>
                Bu temel duzen ne kadar gucluyse, sonraki adimlar o kadar temiz ilerler. Eksik baslangic, surecin geri
                kalaninda kullaniciyi tekrar tekrar ayni seylere dondurebilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ilk basvuru, sonra bekleme, sonra kontrollu takip gelir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Surec her zaman ayni hizda ilerlemez. Bazen havayolu cevap verir, bazen sessiz kalir, bazen de
                sablon bir metin yollar. Bu yuzden kullanicinin bilmesi gereken sey, her sessizlikte panik yapmak ya da
                her cevapta surecin bittigini sanmak degildir.
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
                      placement: "tr_compensation_process_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  surecin hangi asamada oldugunu netlestirmek
                </a>{" "}
                kullanicinin gereksiz acele ya da gereksiz bekleme hatasini azaltir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <ListChecks className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Odeme, red veya eskalasyon: surec burada ayrilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Iyi claim sureci, ilk basvuru sonrasinda tek yone gitmez. Dosya odemeye yaklasabilir, sablon cevap
                alabilir, red gorebilir veya daha guclu follow-up gerektirebilir. Bu ayrimlari bastan bilmek,
                kullanicinin sureci daha sakin ve kontrollu yonetmesini saglar.
              </p>
              <p>
                Yani iyi surec, sadece basvuru yapmak degil; cevap geldikten sonra da neyin ne anlama geldigini bilmekten
                olusur.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, tazminat surecini tek adimli bir form gibi gormektir. Oysa gercek fark, belge duzeni,
              yazisma takibi ve sonraki adimin dogru okunmasinda ortaya cikar.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Tazminat sureci nerede baslar?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Surec genelde ucus bilgileri, PNR, boarding pass, havayolu mesajlari ve nihai varis sonucunun
                  duzenlenmesiyle baslar. Guclu baslangic, sonraki adimlari cok etkiler.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Havayolu hemen cevap vermezse surec bitmis mi olur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Sessizlik surecin bittigi anlamina gelmez. Bazen duzenli follow-up, bazen de daha guclu bir
                  sonraki adim gerekir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">En kritik nokta nedir?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik nokta, sureci dagitmadan belge, timeline ve havayolu yazismalarini tek bir mantikla
                  yonetmektir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
