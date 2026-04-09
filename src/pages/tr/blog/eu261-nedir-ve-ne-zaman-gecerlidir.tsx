import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Plane,
  ShieldAlert,
  Sparkles,
  XCircle,
} from "lucide-react";

import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "eu261-nedir-ve-ne-zaman-gecerlidir";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-eu261-foundation&utm_content=cta_high";
const CLAIM_URL_BOTTOM =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-eu261-foundation&utm_content=cta_bottom";

export default function TrEu261FoundationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="EU261 Nedir? Turk yolcular icin hangi ucuslarda gecerli?"
        description="EU261 hangi ucuslarda gecerli, Turk yolcular ve Avrupa diasporasi icin neden cok onemli, ne zaman tazminat dogabilir? Turkce temel rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "EU261 Nedir? Turk yolcular icin hangi ucuslarda gecerli?",
            description:
              "EU261 hangi ucuslarda gecerli, Turk yolcular ve Avrupa diasporasi icin neden cok onemli, ne zaman tazminat dogabilir? Turkce temel rehber.",
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
                name: "EU261 nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EU261, belirli gecikme, iptal ve denied boarding durumlarinda yolculara para tazminati, yeniden yonlendirme ve yardim haklari taniyabilen Avrupa yolcu haklari duzenidir.",
                },
              },
              {
                "@type": "Question",
                name: "Turk yolcular icin neden bu kadar onemli?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku Turkiye ile Avrupa arasinda cok yogun bir trafik vardir. Ozellikle Avrupa cikisli ucuslar, baglantili seyahatler ve AB tasiyicili dosyalar EU261 analizinde sikca guclu sonuc verebilir.",
                },
              },
              {
                "@type": "Question",
                name: "Sadece ucus gecikirse mi gecerli olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Gecikme disinda iptal edilen ucuslar ve bazi denied boarding durumlari da EU261 kapsaminda degerlendirilebilir. Ancak her dosya kendi rota ve kosullarina gore incelenmelidir.",
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
            <span className="text-slate-900 dark:text-white">EU261 nedir?</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              EU261 Temelleri
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              EU261 Nedir? Turk yolcular icin hangi ucuslarda gecerli?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Turk yolcular ve Avrupa diasporasi icin EU261, teorik bir kural setinden cok daha fazlasidir. Cunku TR
              ile Avrupa arasinda o kadar yogun bir trafik vardir ki, bircok dosyada asıl soru “ucusum sorunlu muydu?”
              degil, <strong>“bu rota EU261 kapsaminda guclu mu?”</strong> sorusudur.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 9 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Globe className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>EU261, belirli gecikme, iptal ve denied boarding dosyalarinda yolculara para tazminati ve yardim
              haklari tanimlayabilen Avrupa yolcu haklari rejimidir.</strong> Turk yolcular icin asıl kritik nokta,
              her ucusun otomatik olarak degil, rota ve tasiyici mantigina gore degerlendirilmesidir.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-red-600 to-red-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Ucusunuzun EU261 icin uygun olup olmadigini simdi kontrol edin</h2>
            <p className="mb-6 text-red-100">
              Bircok kullanici makalenin sonuna kadar gelmeden karar veriyor. Bu yuzden en dogru yer burasi: dosyanizi
              ClaimWinger ile hemen kontrol edin ve EU261 acisindan guclu olup olmadigini Turkce gorun.
            </p>
            <a
              href={CLAIM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                pushClaimWingerEvent("claimwinger_cta_click", {
                  locale: "tr",
                  placement: "tr_article_high_cta",
                  destination: CLAIM_URL,
                  page_slug: SLUG,
                })
              }
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-red-700 transition hover:bg-red-50"
            >
              ClaimWinger ile uygunlugu kontrol et
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                EU261 gucunu artiran durumlar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Avrupa&apos;dan kalkan ucuslar.</li>
                <li>AB tasiyicisi ile isleyen belirli rotalar.</li>
                <li>Nihai varista ciddi gecikme.</li>
                <li>Iptal ve zayif yeniden yonlendirme senaryolari.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yanlis varsayimlar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>“Turk havayoluysa EU261 olmaz” dusuncesi.</li>
                <li>Yalnizca kalkis gecikmesine bakmak.</li>
                <li>Sadece bilet markasina gore karar vermek.</li>
                <li>Baglantili yolculugu tek ucus gibi incelememek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. EU261 sadece Avrupa ici ucuslarla sinirli degildir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En yaygin hata, EU261&apos;i sadece Avrupa icindeki rotalarla sinirli sanmaktir. Oysa Turk yolcularin
                sik kullandigi bircok rota, kalkis noktasi veya tasiyici yapisi nedeniyle bu duzenlemeyle temas eder.
              </p>
              <p>
                Bu nedenle TR + diaspora EU pazari cok gucludur: Almanya, Hollanda, Belcika, Fransa ve Avusturya
                baglantili hatlarin sayisi yuksektir ve uygunluk analizi ciddi ticari deger tasir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Gecikmede asıl konu genelde varis anidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yolcular cogu zaman kalkis panosuna bakip karar verir. Ama bircok EU261 dosyasinda asıl onemli soru,
                varis noktasina ne zaman ulastiginizdir. Ozellikle baglantili seyahatlerde bu fark daha da belirginlesir.
              </p>
              <p>
                Bu yuzden tek bir ekran goruntusu yerine, tam yolculuk zincirini ve `nihai varis` sonucunu gosteren
                zaman cizelgesi dosyayi guclendirir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Iptal, denied boarding ve yeniden yonlendirme de oyunu degistirir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                EU261 sadece gecikme meselesi degildir. Iptal edilen ucuslar, denied boarding ve dusuk kaliteli yeniden
                yonlendirmeler de dosyanin gucunu ciddi sekilde degistirebilir.
              </p>
              <p>
                Bu nedenle “ucus bozuldu” ifadesi tek basina yeterli degildir. Gercek analizi rota, sure, tasiyici ve
                yolculugun final sonucuna birlikte bakarak yapmak gerekir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, EU261 analizini sadece havayolunun markasina veya kalkis gecikmesine indirgemektir. TR ile
              Avrupa arasindaki dosyalarda asıl deger, rota mantigi ve final varis etkisini birlikte okumakta yatar.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Turkish Airlines ucusuysa EU261 hic uygulanmaz mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir, bu cok kaba bir varsayim olur. Rotanin kalkis noktasi, tasiyici yapisi ve yolculugun tam akisi
                  birlikte incelenmelidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Sadece 3 saat kuralini bilmek yeterli mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. 3 saatlik mantik onemlidir ama tek basina yetmez. Rota, tasiyici ve final varis etkisi de
                  degerlendirilmelidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Neden Turk pazari EU261 icin bu kadar guclu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku Turkiye ile Avrupa arasinda cok yogun bir diaspora ve is/ziyaret trafigi vardir. Bu da EU261 ile
                  temas eden rota sayisini ciddi sekilde artirir.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-slate-900 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Dosyanizin EU261 acisindan guclu olup olmadigini simdi gorun</h2>
            <p className="mb-6 text-slate-300">
              Makaleyi okuduktan sonra en mantikli sonraki adim, teoriyi kendi ucusunuza uygulamaktir. ClaimWinger ile
              dosyanizi Turkce kontrol ederek zaman kaybetmeden netlik kazanabilirsiniz.
            </p>
            <a
              href={CLAIM_URL_BOTTOM}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                pushClaimWingerEvent("claimwinger_cta_click", {
                  locale: "tr",
                  placement: "tr_article_bottom_cta",
                  destination: CLAIM_URL_BOTTOM,
                  page_slug: SLUG,
                })
              }
              className="inline-flex items-center gap-2 rounded-2xl bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
            >
              ClaimWinger ile dosyami kontrol et
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
