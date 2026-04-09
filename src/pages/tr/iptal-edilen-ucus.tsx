import { AlertCircle, CheckCircle2, Euro } from "lucide-react";
import Link from "next/link";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const cancelledClaimUrl =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=content_cta&utm_campaign=cancelled_flight";

export default function TrCancelledFlightPage() {
  return (
    <LayoutTr>
      <SEO
        title="Iptal edilen ucus: iade, yeniden rezervasyon ve olasi tazminat"
        description="Iptal edilen ucuslarda iade, yeniden rezervasyon ve EU261 kapsaminda para tazminati hangi durumlarda dogabilir? Turk yolcular icin temel rehber."
        url="https://problemlot.com/tr/iptal-edilen-ucus"
      />

      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800">
        <section className="px-4 pb-16 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <AlertCircle className="h-4 w-4" />
              Iptal Edilen Ucus
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Iptal edilen ucusta hangi haklar dogabilir?
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              Iptal edilen bir ucus sadece bilet iadesi anlamina gelmez. Bazi dosyalarda yeniden rezervasyon,
              yardim-hizmet ve belirli kosullarda para tazminati da ortaya cikabilir.
            </p>

            <ClaimWingerTrSection
              className="mt-8 text-left"
              badge="Iptal edilen ucus kontrolu"
              title="Iptal edilen ucusunuzu ClaimWinger ile simdi analiz edin"
              description="Havayolu son anda iptal ettiyse, zayif bir yeni rota verdiyse veya bilgilendirme zamani sorunluysa, dosya beklenenden daha guclu olabilir. ClaimWinger bunu Turkce akista hizlica kontrol eder."
              ctaHref={cancelledClaimUrl}
              ctaLabel="Iptal edilen ucus formunu ac"
              placement="tr_cancelled_hero"
            />
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Iptal hukuken neden onemlidir?</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Iptal, yolculugu farkli bir eksene tasir: yolcu artik sadece gecikme degil, rota kalitesi, bildirim
                zamani ve alternatif ucusun niteligini de degerlendirmek zorundadir.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Ozellikle TR ile Avrupa arasindaki rotalarda bu farklar sonucu ciddi sekilde degistirebilir.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Hangi haklar ortaya cikabilir?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Iade veya yeni rota</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Yolcu cogu dosyada iade ve yeniden yonlendirme mantigi arasinda degerlendirme yapar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Yardim ve masraflar</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Bekleme uzarsa yemek, konaklama ve aktarim giderleri dosyanin parcasi haline gelebilir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Para tazminati</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      250, 400 veya 600 EUR seviyeleri, dosyanin yapisi ve EU261 uygunluguna gore gundeme gelebilir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Tipik tazminat bantlari</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-red-50 p-6 text-center dark:bg-red-900/20">
                  <Euro className="mx-auto mb-3 h-12 w-12 text-red-600 dark:text-red-400" />
                  <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">250 EUR</div>
                  <p className="text-gray-600 dark:text-gray-300">Kisa rota</p>
                </div>
                <div className="rounded-lg bg-red-50 p-6 text-center dark:bg-red-900/20">
                  <Euro className="mx-auto mb-3 h-12 w-12 text-red-600 dark:text-red-400" />
                  <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">400 EUR</div>
                  <p className="text-gray-600 dark:text-gray-300">Orta mesafe</p>
                </div>
                <div className="rounded-lg bg-red-50 p-6 text-center dark:bg-red-900/20">
                  <Euro className="mx-auto mb-3 h-12 w-12 text-red-600 dark:text-red-400" />
                  <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">600 EUR</div>
                  <p className="text-gray-600 dark:text-gray-300">Uzun mesafe</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link href="/tr/tazminat-hesaplayici" className="font-medium text-red-600 hover:underline dark:text-red-400">
                  Tazminat mantigini detayli incele →
                </Link>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-red-600 to-red-700 p-8 text-center text-white shadow-xl dark:from-red-700 dark:to-red-800">
              <h2 className="mb-4 text-3xl font-bold">Iptal edilen ucusta en iyi sonraki adim net kontroldur</h2>
              <p className="mb-6 text-xl text-red-100">
                Dosyanin gucu sadece iptal kelimesine bagli degildir. Bildirim zamani, yeni rota ve varis sonucu birlikte degerlendirilmelidir.
              </p>
              <a
                href={cancelledClaimUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  pushClaimWingerEvent("claimwinger_cta_click", {
                    locale: "tr",
                    placement: "tr_cancelled_bottom",
                    destination: cancelledClaimUrl,
                  })
                }
                className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-red-600 shadow-lg transition-colors hover:bg-gray-100"
              >
                Iptal edilen ucus dosyasini kontrol et
              </a>
            </div>
          </div>
        </section>
      </div>
    </LayoutTr>
  );
}
