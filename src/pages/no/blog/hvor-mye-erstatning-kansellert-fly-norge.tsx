import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, XCircle, Euro, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function CancelledFlightCompensationNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Hvor mye erstatning får jeg for et kansellert fly i Norge? [2025]"
        description="Rask guide: Få 250-600 € + full refusjon ved kansellerte fly. Lær når du har rett til erstatning og hvordan du krever pengene."
        url="https://problemlot.com/no/blog/hvor-mye-erstatning-kansellert-fly-norge"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hvor mye erstatning får jeg for et kansellert fly i Norge?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>4 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Direct Answer - Featured Snippet Format */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
            <Euro className="w-6 h-6" />
            Raskt svar: Dine rettigheter ved kansellert fly
          </h2>
          <div className="space-y-4 text-gray-800 dark:text-gray-200">
            <div className="bg-white dark:bg-red-950/30 p-4 rounded-lg">
              <p className="font-semibold mb-2">Ved kansellert fly har du rett til:</p>
              <ol className="space-y-2 ml-4">
                <li><strong>1. Erstatning (250-600 €)</strong> — Hvis du fikk beskjed mindre enn 14 dager før avgang</li>
                <li><strong>2. Full refusjon av billettprisen</strong> — Eller ombooking til destinasjonen</li>
                <li><strong>3. Mat, drikke og overnatting</strong> — Hvis du må vente på flyplassen</li>
              </ol>
            </div>
            <p className="text-sm pt-2 border-t border-red-200 dark:border-red-800">
              <strong>Juridisk grunnlag:</strong> EU-forordning 261/2004 gjelder i Norge via EØS-avtalen.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl mb-12 text-center border border-red-200 dark:border-red-800">
          <XCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Ble flyet ditt kansellert?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ClaimWinger hjelper deg med å få både erstatning OG refusjon. Sjekk kravet ditt gratis på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/kansellert-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
              Krev min erstatning nå
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Erstatningsbeløp ved kansellerte fly</h2>
          <p>
            Størrelsen på erstatningen avhenger av flydistansen og hvor tidlig du fikk beskjed om kanselleringen:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Distanse</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Erstatning</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Eksempel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-3">Under 1500 km</td>
                  <td className="border px-4 py-3 font-bold text-red-600">250 €</td>
                  <td className="border px-4 py-3">Oslo–Stockholm, Bergen–Amsterdam</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border px-4 py-3">1500–3500 km</td>
                  <td className="border px-4 py-3 font-bold text-red-600">400 €</td>
                  <td className="border px-4 py-3">Oslo–Spania, Trondheim–Italia</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3">Over 3500 km</td>
                  <td className="border px-4 py-3 font-bold text-red-600">600 €</td>
                  <td className="border px-4 py-3">Oslo–New York, Oslo–Dubai</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Når har du IKKE rett til erstatning?</h2>
          <p>Du får ikke erstatning hvis:</p>
          <ul>
            <li><strong>Du fikk beskjed mer enn 14 dager før avgang</strong> — Da anses varslingsfristen for tilfredsstilt</li>
            <li><strong>Ekstraordinære omstendigheter</strong> — Som ekstremvær, flygelederstreik, sikkerhetstrusler</li>
            <li><strong>Du ikke møtte opp til registrering i tide</strong></li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Viktig: Refusjon vs. Erstatning
            </h3>
            <p className="mb-3">Dette er to forskjellige ting:</p>
            <ul className="space-y-2">
              <li><strong>Refusjon</strong> — Pengene du betalte for billetten tilbake (alltid)</li>
              <li><strong>Erstatning</strong> — Ekstra 250-600 € i kompensasjon (hvis vilkårene er oppfylt)</li>
            </ul>
            <p className="mt-3 text-sm">
              Du har krav på <strong>begge deler</strong> hvis kanselleringen var urettmessig!
            </p>
          </div>

          <h2>Hva sier norsk lov?</h2>
          <p>
            Norge er ikke medlem av EU, men er en del av <strong>EØS-avtalen</strong> (Det europeiske økonomiske samarbeidsområdet). 
            Dette betyr at EU-forordning 261/2004 gjelder fullt ut i Norge.
          </p>
          <p>
            I tillegg har Norge egne forbrukerlover som styrker dine rettigheter:
          </p>
          <ul>
            <li><strong>Forbrukerkjøpsloven</strong> — Gir deg rett til å klage på mangelfulle tjenester</li>
            <li><strong>Luftfartstilsynet</strong> — Overvåker at flyselskapene følger reglene</li>
            <li><strong>Forbrukerrådet</strong> — Gir gratis råd og veiledning</li>
          </ul>

          <h2>Slik krever du erstatning</h2>
          <p>Du har tre valg:</p>

          <div className="space-y-4 my-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-2">1. Direkte til flyselskapet</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                Send skriftlig krav via selskapets nettside eller kundeservice.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ⏱️ Forventet tid: 2-6 måneder | 📊 Suksessrate: ~30%
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-2">2. Kontakt Forbrukerrådet</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                De norske forbrukermyndighetene gir råd, men håndterer ikke krav direkte.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ⏱️ Forventet tid: Varierer | 📊 Begrensede ressurser
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-5 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <h3 className="font-semibold text-lg mb-2">3. ClaimWinger (Anbefalt) ⭐</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                Eksperter håndterer alt papirarbeid, forhandlinger og eventuelle rettssaker.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ⏱️ Forventet tid: 4-8 uker | 📊 Suksessrate: 98% | 💰 Ingen risiko (betaler kun ved seier)
              </p>
            </div>
          </div>

          <h2>Dokumenter du trenger</h2>
          <p>For å støtte kravet ditt, sørg for å ha:</p>
          <ul>
            <li>✅ Boardingkort (digital eller papir)</li>
            <li>✅ Bookingbekreftelse / E-postkvittering</li>
            <li>✅ Kansellerings-SMS eller e-post fra flyselskapet</li>
            <li>✅ Kvitteringer på utgifter (mat, hotell hvis relevant)</li>
            <li>✅ Bilder av informasjonstavler på flyplassen (valgfritt)</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <section className="mt-16 mb-12" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Ofte stilte spørsmål</h2>
          
          <div className="space-y-6">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 itemProp="name" className="text-xl font-semibold mb-3">
                Hva hvis flyselskapet tilbyr meg voucher?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 dark:text-gray-300">
                  Du er <strong>ikke pålagt å akseptere voucher</strong>. Flyselskapet må tilby deg valget mellom: (1) Full kontant refusjon, eller (2) Ombooking til destinasjonen. Du kan velge kontanter + erstatning hvis vilkårene er oppfylt.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 itemProp="name" className="text-xl font-semibold mb-3">
                Kan jeg få både refusjon og erstatning?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 dark:text-gray-300">
                  Ja! Dette er to separate rettigheter. Du får alltid refusjon av billettprisen ved kansellering. I tillegg får du erstatning (250-600 €) hvis du fikk beskjed mindre enn 14 dager før avgang og kanselleringen ikke skyldtes ekstraordinære omstendigheter.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 itemProp="name" className="text-xl font-semibold mb-3">
                Hvor lang tid har jeg på meg å kreve?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 dark:text-gray-300">
                  I Norge er foreldelsesfristen <strong>3 år</strong> fra hendelsen. Det betyr at du har god tid til å samle dokumentasjon og sende inn kravet, men det er best å gjøre det så snart som mulig mens detaljene er friske.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <section className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            La oss hjelpe deg med å få pengene tilbake
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Ingen risiko. Ingen skjulte kostnader. Du betaler bare hvis du vinner.
          </p>
          <a href="https://claimwinger.com/no/kansellert-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6">
              Start mitt krav gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <p className="text-sm text-red-200 mt-6">
            ⭐ Over 50 000 fornøyde kunder | 💰 98% suksessrate
          </p>
        </section>
      </article>
    </LayoutNo>
  );
}
