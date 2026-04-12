import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "havayolu-sizi-bagajinizi-alan-yolcuyla-dogrudan-iletisime-gecirmek-isterse-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-direct-contact-with-passenger-who-took-your-bag&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-direct-contact-with-passenger-who-took-your-bag&utm_content=text_link";

export default function TrDirectContactWithPassengerWhoTookYourBagArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Havayolu sizi bagajinizi alan yolcuyla dogrudan iletisime gecirmek isterse ne yapmali?"
        description="Havayolu sizi bagajinizi alan yolcuyla dogrudan iletisime gecirmek isterse ne yapmali? Turk yolcular icin wrong pickup, resmi kayit, gizlilik ve belge zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Havayolu sizi bagajinizi alan yolcuyla dogrudan iletisime gecirmek isterse ne yapmali?",
            description:
              "Havayolu sizi bagajinizi alan yolcuyla dogrudan iletisime gecirmek isterse ne yapmali? Turk yolcular icin wrong pickup, resmi kayit, gizlilik ve belge zincirini anlatan net rehber.",
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
                name: "Diger yolcuyla dogrudan konusmak yanlis mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tek basina yanlis degildir, ama resmi dosyanin yerine gecmemelidir. Iletisim varsa bile bagaj ofisi, havayolu ve varsa PIR kaydi acik kalmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Adres ve telefon paylasmali miyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Gereksiz ayrintili kisisel veri paylasmamak daha guvenlidir. Mumkunse teslim organizasyonu havayolu, havalimani veya kurye uzerinden yurutulmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Diger yolcu cevap vermezse dosya biter mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Diger yolcunun cevap vermemesi, resmi wrong pickup veya bagaj dosyasini ortadan kaldirmaz. Tam tersine, yazili takip daha da onemli hale gelir.",
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
              Havayolu sizi bagajinizi alan yolcuyla dogrudan iletisime gecirmek isterse ne yapmali
            </span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Havayolu sizi bagajinizi alan yolcuyla dogrudan iletisime gecirmek isterse ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Wrong pickup dosyalarinda bazen havayolu veya havalimani, lojistigi hizlandirmak icin sizi bavulu alan
              yolcuyla dogrudan temas ettirmek isteyebilir. Dogru analiz, sadece <strong>temasin kurulmasina</strong>
              degil, <strong>resmi kaydin acik kalmasina</strong>, <strong>kisisel verinin nasil paylasildigina</strong>
              ve <strong>tum zincirin yazili olarak izlendigine</strong> bakar.
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
              <strong>Dogrudan iletisim kurulabilir, ama bu resmi dosyanin yerine gecmemelidir.</strong> En guclu yol,
              havayolu veya bagaj ofisi kaydini acik tutarken iletisimi varsa ek lojistik kanal olarak kullanmaktir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger direct contact analizi"
            title="Diger yolcuyla iletisim kuruluyorsa bile bagaj dosyanizi resmi zeminde tutun"
            description="Bu tip dosyalarda en buyuk hata, havayolunun kurdugu temasi resmi surecin yerine koymaktir. Dogru model, yazili kayit, veri paylasimi ve teslim zincirini ayni anda korumaktir."
            ctaHref={CLAIM_URL}
            ctaLabel="Wrong pickup dosyami kontrol et"
            placement="tr_direct_contact_with_passenger_who_took_your_bag_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>PIR veya resmi bagaj kaydini acik tutmak.</li>
                <li>Dogrudan iletisim teklifinin saatini ve kimden geldiginini not etmek.</li>
                <li>Teslim ve yazisma detaylarini yazili izlere baglamak.</li>
                <li>Kisisel veri paylasimini minimumda tutmak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Resmi dosyayi kapatip her seyi yolcular arasinda birakmak.</li>
                <li>Adres ve telefon gibi verileri kontrolsuz yaymak.</li>
                <li>Sozlu anlasmalari yazili teyide cevirmemek.</li>
                <li>Teslim oldugunu varsayip sureci erken bitirmek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Neden dogrudan temas tek basina yeterli degildir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Cunku temasin kurulmasi, sorumlulugun sizden cikmasi anlamina gelmez. Yarin teslim gecikirse, diger
                yolcu vazgecerse veya adres karisikliligi olursa guclu dosya yine resmi kayitlar uzerinden okunur.
              </p>
              <p>
                Bu nedenle havayolunun veya bagaj ofisinin dosya numarasi, yazili notu ve zaman cizgisi kaybolmamalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ilk neyi teyit etmek gerekir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ilk olarak, kendi bagaj etiketinizin, PIR veya resmi referansinizin ve size yapilan iletisim teklifinin
                kimden geldigini teyit edin. Mumkunse teklifin yazili gelmesini isteyin. Boylece konu rastgele bir telefon
                trafigi yerine, kurumsal kaydi olan bir teslim girisimi olarak gorunur.
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
                      placement: "tr_direct_contact_with_passenger_who_took_your_bag_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  diger yolcuyla temas kurulan wrong pickup dosyasini birlikte incelemek
                </a>{" "}
                veri ve sorumluluk akisinin ne kadar saglam oldugunu hizla gosterir.
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
                Bagaj etiketi, boarding pass, PIR numarasi, havayolu veya bagaj ofisinin yazili notu, kurulan iletisim
                saati ve teslim gerceklestiyse onun saati ayni timeline icinde tutulmalidir. Boylece dosya "iki yolcu
                kendi aralarinda halletti" seviyesinde kalmaz.
              </p>
              <p>
                Guclu dosya, lojistigin hizlandigini ama sorumlulugun yine resmi zeminde takip edildigini gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, "madem diger yolcu bulundu, artik dosya kapandi" diye dusunmektir. Tam tersine, tam bu
              noktada resmi kaydin acik kalmasi, veri paylasiminin kontrollu olmasi ve yazili teyitler daha da onemli hale gelir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Diger yolcuyla dogrudan konusmak yanlis mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Tek basina yanlis degildir, ama resmi dosyanin yerine gecmemelidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Adres ve telefon paylasmali miyim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mumkunse minimum veri paylasin ve teslim organizasyonunu havayolu, havalimani veya kurye uzerinden
                  yurutun.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Diger yolcu cevap vermezse dosya biter mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Tam tersine, resmi takip ve yazili ispat zinciri daha da kritik hale gelir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
