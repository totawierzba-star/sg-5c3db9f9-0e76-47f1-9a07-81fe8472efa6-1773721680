import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagaj-teslim-edilmeden-havalimanindan-cikilirsa-ne-olur";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-leaving-airport-before-baggage-report&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-leaving-airport-before-baggage-report&utm_content=text_link";

export default function TrLeavingAirportBeforeBaggageArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagaj teslim edilmeden havalimanindan cikilirsa ne olur?"
        description="Bagaj teslim edilmeden havalimanindan cikilirsa ne olur? Turk yolcular icin PIR, sonradan kayit, belge zinciri ve dosya gucunu anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagaj teslim edilmeden havalimanindan cikilirsa ne olur?",
            description:
              "Bagaj teslim edilmeden havalimanindan cikilirsa ne olur? Turk yolcular icin PIR, sonradan kayit, belge zinciri ve dosya gucunu anlatan net rehber.",
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
                name: "Bagaj teslim edilmeden havalimanindan cikmak dosyayi otomatik olarak bitirir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Dosya otomatik olarak bitmez, ama cok zayiflayabilir. Cunku en guclu resmi kayit noktasi genelde havalimanindaki ilk andir.",
                },
              },
              {
                "@type": "Question",
                name: "Sonradan PIR veya kayit acmak hala mumkun olabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bazen evet, ama gec kalinan her adim dosya gucunu dusurebilir. Bu yuzden kalan belge zinciri ne kadar hizli toparlanirsa o kadar iyidir.",
                },
              },
              {
                "@type": "Question",
                name: "Havalimanindan ciktiktan sonra hangi belgeler en kritik olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Boarding pass, PNR, bagaj etiketi veya fotografi, havayolu bildirimleri ve bagaj cikmadigini gosteren zaman cizgisi cok daha onemli hale gelir.",
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
            <span className="text-slate-900 dark:text-white">Bagaj teslim edilmeden havalimanindan cikmak</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagaj teslim edilmeden havalimanindan cikilirsa ne olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, yolcunun yorgunluk, acele veya yanlis iyimserlik nedeniyle en kolay yaptigi hatalardan biridir:
              valiz ortada yoktur ama kisi 'sonra hallederim' diyerek havalimanindan ayrilir. Dogru analiz, sadece bu
              cikisin kendisinden degil, <strong>kaydin ne zaman acilmadigindan</strong>, <strong>hangi belgelerin
              elde kaldigindan</strong> ve <strong>sonradan zincirin ne kadar iyi toparlandigindan</strong> dogar.
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
              <strong>Bagaj teslim edilmeden havalimanindan cikmak dosyayi otomatik olarak bitirmez, ama ciddi sekilde zayiflatabilir.</strong>
              Bu durumda en onemli sey, kalan belgeleri hizla toparlamak ve sonradan acilabilecek resmi kaydi ne kadar
              cabuk sabitleyebileceginizi gormektir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger bagaj belge gucu analizi"
            title="Havalimanindan ciktiysaniz dosyanizin ne kadar kurtarilabilir oldugunu hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, cikistan sonra da belge toplamayi geciktirmektir. PIR, PNR, boarding pass ve zaman cizgisi birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj dosyami kontrol et"
            placement="tr_leaving_airport_before_baggage_report_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Havalimanindan ciktiktan hemen sonra kalan belgelerin toplanmasi.</li>
                <li>PIR veya esdeger kayit icin gecikmeden yeniden temas kurulmasi.</li>
                <li>Boarding pass, PNR ve bagaj etiketi izlerinin saklanmasi.</li>
                <li>Bagajin cikmadigini gosteren net zaman cizgisinin kurulmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>'Sonra cozerim' diyerek resmi kaydi ertelemek.</li>
                <li>Havalimanindan cikis sonrasi da belge toplamayi geciktirmek.</li>
                <li>Bagaj cikmadigi ana dair hic not veya ekran izi tutmamak.</li>
                <li>Dosyanin tamamen bittigini dusunup sureci birakmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Neden havalimanindaki ilk an bu kadar kritik?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bagaj dosyalarinda en guclu nokta genelde bagaj bandi ve cikis oncesi ilk dakikalardir. Cunku sorun o
                anda resmi olarak gorulebilir ve kayda baglanabilir. Bu firsat kacirildiginda dosya otomatik olarak
                yok olmaz, ama sonradan 'tam olarak ne zaman fark edildi' sorusu daha zor cevaplanir.
              </p>
              <p>
                Bu nedenle havalimanindan cikis, fiziksel bir adim olmanin otesinde belge gucunde de bir kirilma
                yaratabilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ciktiktan sonra dosya nasil toparlanir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bu noktada en onemli sey, kalan her izi tek yerde toplamak olur: boarding pass, PNR, havayolu
                mesajlari, bagaj etiketi veya fotografi, check-in kayitlari ve bagajin teslim edilmedigine dair
                olusturulabilen her not. Gec kalinan her saat, bazen bu izlerin de dagilmasina neden olur.
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
                      placement: "tr_leaving_airport_before_baggage_report_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  belge zincirini birlikte incelemek
                </a>{" "}
                dosyanin ne kadar kurtarilabilir oldugunu daha hizli gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Sonradan acilan kayit neden daha zayif gorunebilir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Sonradan acilan kayitta en buyuk sorun, olay aninin artik geride kalmis olmasidir. Bu da resmi tarafin
                gozunde olayi daha dolayli hale getirebilir. Yine de burada belirleyici olan sey, elde kalan belgelerin
                ne kadar tutarli ve ne kadar hizli toplandigidir.
              </p>
              <p>
                Yani zayiflama vardir, ama bazen iyi belge disiplini bu boslugu bir miktar kapatabilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, havalimanindan cikinca ya tamamen umudu kesmek ya da tam tersine hic acelesi yokmus
              gibi davranmaktir. Oysa bu dosyada hiz, duzen ve belge toplama refleksi cok belirleyicidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bagaj teslim edilmeden havalimanindan cikmak dosyayi otomatik olarak bitirir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Dosya otomatik olarak bitmez, ama cok zayiflayabilir. Cunku en guclu resmi kayit noktasi
                  genelde havalimanindaki ilk andir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Sonradan PIR veya kayit acmak hala mumkun olabilir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bazen evet, ama gec kalinan her adim dosya gucunu dusurebilir. Bu yuzden kalan belge zinciri ne
                  kadar hizli toparlanirsa o kadar iyidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Havalimanindan ciktiktan sonra hangi belgeler en kritik olur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Boarding pass, PNR, bagaj etiketi veya fotografi, havayolu bildirimleri ve bagaj cikmadigini gosteren
                  zaman cizgisi cok daha onemli hale gelir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
