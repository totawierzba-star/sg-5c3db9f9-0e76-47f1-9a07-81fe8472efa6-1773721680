import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagaj-gecikmesi-haklari";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-delayed-baggage-rights&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-delayed-baggage-rights&utm_content=text_link";

export default function TrDelayedBaggageRightsArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagaj gecikmesi haklari: bavul gec gelirse ne yapilmali?"
        description="Bagaj gecikmesi haklari nelerdir? Turk yolcular icin PIR kaydi, gerekli masraflar, belge duzeni ve EU261 ile bagaj haklari farkini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagaj gecikmesi haklari: bavul gec gelirse ne yapilmali?",
            description:
              "Bagaj gecikmesi haklari nelerdir? Turk yolcular icin PIR kaydi, gerekli masraflar, belge duzeni ve EU261 ile bagaj haklari farkini anlatan net rehber.",
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
                name: "Bagaj gecikmesi otomatik olarak EU261 tazminati dogurur mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Bagaj gecikmesi genelde klasik ucus gecikmesi tazminatiyla ayni mantikta okunmaz. Bagaj tarafinda ayri belge ve masraf zinciri cok daha kritik olur.",
                },
              },
              {
                "@type": "Question",
                name: "Havalimaninda ilk ne yapilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk olarak bagaj teslim edilmeden havalimanindan ayrilmadan once kayit acilmali, PIR veya esdeger bagaj raporu alinmali ve bagaj etiketi saklanmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bagaj gecikmesinde hangi masraflar daha guclu gorunur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En guclu masraflar genelde gerekli ve makul gecici alislardir. Fis, fatura ve gecikme kaydi olmadan bu taraf zayiflayabilir.",
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
            <span className="text-slate-900 dark:text-white">Bagaj gecikmesi haklari</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagaj gecikmesi haklari: bavul gec gelirse ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, yolcunun havaalaninda en hizli cevap aradigi sorulardan biridir, cunku ucus bitmis olsa bile sorun
              tam kapanmaz: <strong>yolcu gelmistir ama bagaj gelmemistir</strong>. Dogru analiz, sadece “ne kadar
              bekledim?” sorusundan degil, <strong>PIR kaydi</strong>, <strong>gerekli masraflar</strong> ve
              <strong> belge duzeni</strong> uzerinden kurulur.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-12</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Bagaj gecikmesi dosyasinda ilk odak noktasi, havalimaninda resmi kayit acmak ve belge zincirini korumaktir.</strong>
              Bu taraf, klasik ucus gecikmesi tazminatindan farkli okunur; en kritik sey, PIR, bagaj etiketi ve makul
              masraf fisleridir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger bagaj ve ucus sorunu analizi"
            title="Bagaj gecikmesi dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, havalimanindan cikmadan once resmi kayit acmamaktir. Bagaj sorunu ucus problemiyle karisiyorsa dosyayi birlikte okumak daha saglamdir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj dosyami kontrol et"
            placement="tr_delayed_baggage_rights_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Havalimaninda hemen PIR veya esdeger kayit acilmasi.</li>
                <li>Bagaj etiketi ve boarding pass'in saklanmasi.</li>
                <li>Gerekli ve makul gecici alislarin fislerle belgelenmesi.</li>
                <li>Bagajin ne zaman teslim edildiginin kaydedilmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Havalimanindan cikmadan once resmi kayit acmamak.</li>
                <li>Bagaj etiketini ve rapor numarasini saklamamak.</li>
                <li>Gereksiz yuksek masraflar yapmak.</li>
                <li>Bagaj sorunu ile ucus gecikmesi tarafini birbirine karistirmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bagaj gecikmesi ile klasik EU261 dosyasi ayni sey degildir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yolcu cok kolay sekilde iki farkli sorunu tek sepete koyar: ucus gecikti mi ve bagaj gec geldi mi?
                Oysa bu ikisi her zaman ayni mantikla okunmaz. Ucusun kendisi icin bir zincir, bagajin gec teslimi
                icin baska bir belge ve masraf zinciri gerekebilir.
              </p>
              <p>
                Bu nedenle bagaj dosyasinda ilk odak, dakikadan cok resmi kayit ve gecici ihtiyaclarin nasil
                belgelendiginin uzerine kurulur.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. En kritik adim: havalimaninda hemen rapor acmak
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bagaj teslim edilmeden once havalimanindan ayrilmak, dosyanin en zayif anini yaratabilir. Cunku en
                guclu pratik adim, kayip veya gec teslim kaydini aninda acmak ve bir rapor numarasi almaktir. Bu
                adim, sonradan yapilan her seyi daha savunulabilir hale getirir.
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
                      placement: "tr_delayed_baggage_rights_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  bagaj raporu ve ucus kaydini birlikte incelemek
                </a>{" "}
                dosyanin gucunu daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En degerli sey: makul gecici masraf + temiz belge duzeni
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bagaj gecikmesinde en guclu giderler genelde temel ve gerekli alislardir. Yani kullanici icin soru
                sadece “harcadim mi?” degil, “makul bir sey mi aldim ve belgesini sakladim mi?” olmalidir. Fis,
                fatura ve teslim zamani ne kadar netse, dosya o kadar saglam kurulur.
              </p>
              <p>
                Yuzeysel dosyalar genelde rapor numarasiz, fis eksik ve zaman kayitsiz kalir. Guclu dosyalar ise
                bunlari ayni zincirde toplar.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, bagaj gecikmesini normal ucus tazminati dosyasi gibi okumak veya havalimanindan cikarken
              “sonra hallederim” diye dusunmektir. Burada guc, anlik rapor ve belge duzeninden gelir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bagaj gecikmesi otomatik olarak EU261 tazminati dogurur mu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Bagaj gecikmesi genelde klasik ucus gecikmesi tazminatiyla ayni mantikta okunmaz. Bagaj
                  tarafinda ayri belge ve masraf zinciri cok daha kritik olur.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Havalimaninda ilk ne yapilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk olarak bagaj teslim edilmeden havalimanindan ayrilmadan once kayit acilmali, PIR veya esdeger
                  bagaj raporu alinmali ve bagaj etiketi saklanmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bagaj gecikmesinde hangi masraflar daha guclu gorunur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En guclu masraflar genelde gerekli ve makul gecici alislardir. Fis, fatura ve gecikme kaydi olmadan
                  bu taraf zayiflayabilir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
