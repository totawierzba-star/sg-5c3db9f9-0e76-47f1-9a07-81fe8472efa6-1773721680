import { CheckCircle2, Clock, Euro } from "lucide-react";
import Link from "next/link";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const delayedClaimUrl =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=content_cta&utm_campaign=delayed_flight";

export default function TrDelayedFlightPage() {
  return (
    <LayoutTr>
      <SEO
        title="Gecikmis ucus: ne zaman EU261 tazminati dogabilir?"
        description="Gecikmis ucuslarda ne zaman EU261 kapsaminda tazminat dogabilecegini, 3 saatlik varis mantigini ve Turk yolcular icin en kritik noktalarni ogrenin."
        url="https://problemlot.com/tr/gecikmis-ucus"
      />

      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800">
        <section className="px-4 pb-16 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
              <Clock className="h-4 w-4" />
              Gecikmis Ucus
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Gecikmis ucusta ne zaman tazminat dogabilir?
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              Cogu dosyada sadece kalkis gecikmesi degil, varis noktasina gec ulasma suresi onemlidir. EU261
              kapsamindaki rotalarda bu fark ciddi para tazminatina donusebilir.
            </p>

            <ClaimWingerTrSection
              className="mt-8 text-left"
              badge="Gecikmis ucus kontrolu"
              title="Gecikmis ucusunuzu simdi ClaimWinger ile kontrol edin"
              description="Ozellikle Avrupa cikisli veya Avrupa ile baglantili rotalarda, gecikmenin hukuki gucu varis saatine ve tasiyici yapisina gore degisir. ClaimWinger bunu dosya bazinda hizlica kontrol eder."
              ctaHref={delayedClaimUrl}
              ctaLabel="Gecikmis ucus formunu ac"
              placement="tr_delayed_hero"
            />
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">En kritik nokta: varis gecikmesi</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Bircok yolcu sadece kalkis panosuna bakar, ama EU261 degerlendirmesinde asıl konu cogu zaman nihai
                varis anidir. Dosyanin gucu, ucusun gercek hedefe ne kadar gec ulastigina bagli olabilir.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                TR + diaspora EU rotalarinda bu nokta daha da onemlidir, cunku uygunluk sadece sureye degil, rotanin ve
                havayolunun yapisina da baglidir.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Ne zaman dosya guclenmeye baslar?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Varis gecikmesi belirginse</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      3 saat ve uzeri varis gecikmesi bircok dosyada ana esik olarak ele alinir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Ucus EU261 alanina giriyorsa</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Avrupa&apos;dan kalkis, Avrupa&apos;ya donus ve AB tasiyicisi gibi unsurlar sonucu ciddi sekilde degistirebilir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Belgeler acik ve temizse</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      PNR, boarding pass, havayolu mesajlari ve nihai varis saati dosyanin kalitesini ciddi sekilde guclendirir.
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
                  <p className="text-gray-600 dark:text-gray-300">Kisa mesafe</p>
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
                  Detayli tazminat mantigini incele →
                </Link>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-red-600 to-red-700 p-8 text-center text-white shadow-xl dark:from-red-700 dark:to-red-800">
              <h2 className="mb-4 text-3xl font-bold">Somut ucusunuzu kontrol etmek ister misiniz?</h2>
              <p className="mb-6 text-xl text-red-100">
                En iyi sonraki adim, gecikmeyi sadece sure olarak degil, dosyanin gercek uygunlugu olarak kontrol etmektir.
              </p>
              <a
                href={delayedClaimUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  pushClaimWingerEvent("claimwinger_cta_click", {
                    locale: "tr",
                    placement: "tr_delayed_bottom",
                    destination: delayedClaimUrl,
                  })
                }
                className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-red-600 shadow-lg transition-colors hover:bg-gray-100"
              >
                Gecikmis ucus dosyasini kontrol et
              </a>
            </div>
          </div>
        </section>
      </div>
    </LayoutTr>
  );
}
