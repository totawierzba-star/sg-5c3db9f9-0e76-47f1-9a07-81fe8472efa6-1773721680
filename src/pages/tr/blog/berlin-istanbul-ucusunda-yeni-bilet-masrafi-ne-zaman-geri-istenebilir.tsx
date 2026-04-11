import Link from "next/link";
import { CheckCircle2, ShieldAlert, Sparkles, TicketPlus, WalletCards, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "berlin-istanbul-ucusunda-yeni-bilet-masrafi-ne-zaman-geri-istenebilir";
const CLAIM_URL =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-berlin-istanbul-new-ticket-cost&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-berlin-istanbul-new-ticket-cost&utm_content=text_link";

export default function TrBerlinIstanbulNewTicketCostArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Berlin-Istanbul ucusunda yeni bilet masrafi ne zaman geri istenebilir?"
        description="Berlin-Istanbul ucusunda yeni bilet masrafi ne zaman geri istenebilir? Turk yolcular icin yeni bilet alma karari, makul secim ve belge duzenini anlatan rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Berlin-Istanbul ucusunda yeni bilet masrafi ne zaman geri istenebilir?",
            description:
              "Berlin-Istanbul ucusunda yeni bilet masrafi ne zaman geri istenebilir? Turk yolcular icin yeni bilet alma karari, makul secim ve belge duzenini anlatan rehber.",
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
                name: "Her durumda yeni bilet masrafi geri istenebilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. En guclu dosyalar, yeni biletin gercekten gerekli hale geldigi, havayolunun yeterli cozum sunmadigi ve secimin makul kaldigi durumlardir.",
                },
              },
              {
                "@type": "Question",
                name: "Yeni bilet alirken en kritik nokta nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik nokta, karar aninin mantikli olmasi ve secilen yeni biletin savunulabilir bir cozum sunmasidir. Cok pahali veya gereksiz aceleci secimler dosyayi zayiflatabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler mutlaka saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yeni bilet faturasi, rezervasyon onayi, ilk ucusun degisiklik kayitlari, havayolu mesajlari ve son hedefe gercek varis sonucunu gosteren belgeler birlikte saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Berlin-Istanbul yeni bilet masrafi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Masraf Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Berlin-Istanbul ucusunda yeni bilet masrafi ne zaman geri istenebilir?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, kullanicinin en pahali kararlardan birini vermek zorunda kaldigi andir. Ucus ciddi sekilde gecikmis
              veya iptal edilmis olabilir ve yolcu “yeni bileti kendim alayim mi?” sorusuyla kalir. Burada asil farki
              yaratan sey, <strong>yeni biletin gercekten gerekli hale gelip gelmedigi</strong>,
              <strong> secimin makullugu</strong> ve <strong>karar aninin iyi belgelenmesidir</strong>.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <TicketPlus className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Yeni bilet masrafi her durumda otomatik olarak guclu degildir, ama bazen cok savunulabilir olur.</strong>
              En cok, havayolunun yeterli cozum sunmadigi, yolcunun makul sekilde hareket ettigi ve yeni biletin gercek
              bir zorunluluktan dogdugu durumlarda guclenir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger yeni bilet analizi"
            title="Berlin-Istanbul yeni bilet masrafinizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bircok yolcu aceleyle yeni bilet alir ama sonradan bunun ne kadar savunulabilir oldugunu bilemez. ClaimWinger ile karar anini, makullugu ve belge zincirini daha net okuyabilirsiniz."
            ctaHref={CLAIM_URL}
            ctaLabel="Yeni bilet masrafimi kontrol et"
            placement="tr_berlin_istanbul_new_ticket_cost_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren unsurlar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Havayolunun yeterli veya zamaninda cozum sunmamasi.</li>
                <li>Yeni biletin makul fiyat ve rota icermesi.</li>
                <li>Karar aninin mesaj ve saatlerle belgelenmesi.</li>
                <li>`Nihai varis` etkisinin net sekilde gosterilmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Asiri pahali ve savunulmasi zor bilet secmek.</li>
                <li>Ilk havayolu tekliflerini belgelememek.</li>
                <li>Yeni bileti neden aldigini not etmemek.</li>
                <li>Son hedefe gercek varis farkini gostermemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Yeni bilet, ancak gercek bir zorunluluga donustugunde guclu hale gelir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanicinin kendi cebinden yeni bilet almasi bazen gerekli olabilir, ama bu karar otomatik olarak
                dosyayi guclu yapmaz. Asil soru, havayolunun size yeterli bir cozum sunup sunmadigi ve yeni biletin
                gercekten makul bir kacis yolu haline gelip gelmedigidir.
              </p>
              <p>
                Eger elde zamaninda, uygulanabilir ve makul bir havayolu cozumune dair ciddi eksiklik varsa, yeni
                bilet karari daha savunulabilir hale gelebilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Makul rota ve makul fiyat, yeni bilet dosyalarinda her seyi degistirir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Buradaki en kritik ayrim, yalnizca “yeni bilet aldim” demek ile neden o bileti sectiginizi gostermek
                arasindadir. Cok yuksek fiyatli, gereksiz farkli rota iceren veya aceleyle alinmis savunulmasi zor
                secimler dosyayi zayiflatabilir. Daha mantikli, yakin ve amaca uygun secimler ise daha guclu gorunur.
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
                      placement: "tr_berlin_istanbul_new_ticket_cost_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  yeni bilet kararini ve makullugu birlikte incelemek
                </a>{" "}
                masraf tarafinin daha saglam kurulmasini saglar.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <WalletCards className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Yeni bilet faturasi, ilk aksaklik ve `nihai varis` sonucu ayni dosyada bulusmalidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Guclu yeni bilet dosyasi, tek bir odeme kaydina dayanmaz. Yeni bilet faturasi, rezervasyon onayi,
                havayolunun ilk degisiklik veya iptal mesajlari, varsa sunulan alternatifler ve son hedefe gercek
                varis sonucu ayni hikayeyi anlatmalidir.
              </p>
              <p>
                Boylece yeni bilet, keyfi bir secim gibi degil; somut bir aksakliktan sonra mantikli bir cozum gibi
                gorunur.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, yeni bilet aliminin otomatik olarak geri odenecek guclu bir kalem oldugunu sanmaktir.
              Oysa asil farki, zorunluluk, makulluk ve belge zinciri yaratir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Her durumda yeni bilet masrafi geri istenebilir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. En guclu dosyalar, yeni biletin gercekten gerekli hale geldigi ve havayolunun yeterli cozum
                  sunmadigi durumlarda ortaya cikar.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Yeni bilet alirken en kritik nokta nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Secimin makul olmasi ve karar aninin iyi belgelenmesi. Asiri pahali veya gereksiz aceleci secimler
                  dosyayi zayiflatabilir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler mutlaka saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Yeni bilet faturasi, rezervasyon onayi, ilk aksaklik mesajlari ve son hedefe gercek varis sonucu
                  birlikte saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
