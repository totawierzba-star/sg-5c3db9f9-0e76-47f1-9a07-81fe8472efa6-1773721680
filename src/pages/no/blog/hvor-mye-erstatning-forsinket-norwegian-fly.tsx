import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Euro, Clock, Plane } from "lucide-react";
import Link from "next/link";

export default function NorwegianDelayCompensationNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Hvor mye erstatning får jeg for et forsinket Norwegian-fly? [2025]"
        description="Rask oversikt: Få 250-600 € i erstatning for forsinkede Norwegian-fly. Sjekk beløpet ditt basert på flydistanse og forsinkelsens lengde."
        url="https://problemlot.com/no/blog/hvor-mye-erstatning-forsinket-norwegian-fly"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hvor mye erstatning får jeg for et forsinket Norwegian-fly?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              4 min lesing
            </span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Direct Answer Box - Featured Snippet Optimized */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Euro className="w-6 h-6" />
            Rask oversikt: Erstatningsbeløp for forsinkede Norwegian-fly
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p className="font-semibold">Du har krav på erstatning hvis flyet ditt er forsinket mer enn 3 timer ved ankomst:</p>
            <ul className="space-y-2 ml-4">
              <li>• <strong>250 €</strong> — Fly under 1500 km</li>
              <li>• <strong>400 €</strong> — Fly i EU over 1500 km, eller mellom 1500-3500 km</li>
              <li>• <strong>600 €</strong> — Fly over 3500 km (f.eks. Oslo–New York)</li>
            </ul>
            <p className="text-sm mt-3 pt-3 border-t border-blue-200 dark:border-blue-800">
              <strong>Juridisk grunnlag:</strong> EU-forordning 261/2004 gjelder i Norge gjennom EØS-avtalen (Europisk Økonomisk Samarbeidsområde).
            </p>
          </div>
        </div>

        {/* CTA 1 - Early Conversion */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-xl mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Sjekk ditt krav på 2 minutter</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ClaimWinger hjelper deg med å kreve erstatning fra Norwegian. Ingen risiko — du betaler bare hvis du vinner.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Beregn min erstatning gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Når har du rett til erstatning fra Norwegian?</h2>
          <p>
            For å kunne kreve erstatning fra Norwegian for en forsinket flyvning må følgende vilkår være oppfylt:
          </p>
          <ol>
            <li><strong>Forsinkelsen er minst 3 timer</strong> — Målt ved ankomst til destinasjonen din (når døren åpnes).</li>
            <li><strong>Flyvningen startet i EU/EØS</strong> — Eller landet i EU/EØS med et europeisk flyselskap (som Norwegian).</li>
            <li><strong>Forsinkelsen skyldes ikke ekstraordinære omstendigheter</strong> — Som ekstremvær, streik av flygeledere eller sikkerhetstrusler.</li>
            <li><strong>Du møtte opp til registrering i tide</strong> — Og hadde gyldig boardingkort.</li>
          </ol>

          <h2>Detaljert tabell: Erstatningsbeløp etter distanse</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Flydistanse</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Erstatning</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Eksempel ruter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Under 1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600">250 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Oslo–København, Oslo–Stockholm, Bergen–London</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600">400 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Oslo–Barcelona, Oslo–Roma, Trondheim–Paris</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600">600 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Oslo–New York, Oslo–Bangkok, Bergen–Dubai</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Hvorfor gjelder EU-forordningen i Norge?</h2>
          <p>
            Selv om Norge ikke er medlem av EU, er landet en del av <strong>EØS-avtalen</strong> (Det europeiske økonomiske samarbeidsområdet). 
            Denne avtalen gjør at EU-forordning 261/2004 gjelder fullt ut for alle flyreiser til og fra Norge.
          </p>
          <p>
            Dette betyr at norske passasjerer har <strong>identiske rettigheter</strong> som passasjerer i EU-land når det gjelder:
          </p>
          <ul>
            <li>Økonomisk kompensasjon for forsinkelser og kanselleringer</li>
            <li>Rett til mat, drikke og overnatting ved langvarige forsinkelser</li>
            <li>Refusjon av billettprisen ved kansellerte fly</li>
          </ul>

          <h2>Norwegian og tekniske problemer</h2>
          <p>
            Norwegian kan <strong>ikke</strong> bruke tekniske feil som unnskyldning for å unngå å betale erstatning. 
            EU-domstolen har slått fast at flyselskaper har ansvar for å vedlikeholde flyene sine, og tekniske problemer 
            regnes ikke som "ekstraordinære omstendigheter".
          </p>
          <p className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-4">
            <strong>Viktig:</strong> Hvis Norwegian hevder at forsinkelsen skyldtes "tekniske problemer", har du fortsatt rett til erstatning 
            i de fleste tilfeller. Be om skriftlig dokumentasjon og kontakt ClaimWinger for hjelp.
          </p>

          <h2>Hvordan kreve erstatning fra Norwegian</h2>
          <p>Du har tre alternativer:</p>
          <ol>
            <li>
              <strong>Direkte til Norwegian</strong> — Send krav via Norwegians nettsider. Vær forberedt på lang behandlingstid (ofte 2-6 måneder).
            </li>
            <li>
              <strong>Kontakt Forbrukerrådet</strong> — De norske forbrukermyndighetene kan gi råd, men behandler ikke krav direkte.
            </li>
            <li>
              <strong>Bruk ClaimWinger (anbefalt)</strong> — Ekspertene håndterer alt papirarbeid og rettslige prosesser. Du betaler bare hvis du vinner (typisk 25-35% av erstatningen).
            </li>
          </ol>
        </div>

        {/* FAQ Section - Schema.org Optimized */}
        <section className="mt-16 mb-12" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Ofte stilte spørsmål</h2>
          
          <div className="space-y-6">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 itemProp="name" className="text-xl font-semibold mb-3 dark:text-white">
                Kan jeg få erstatning hvis jeg kjøpte lavprisbillett?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 dark:text-gray-300">
                  Ja, absolutt! Erstatningsretten er uavhengig av billettpris og billettklasse. Selv med den billigste LowFare-billetten fra Norwegian har du rett til full erstatning (250-600 €) hvis flyvningen er forsinket mer enn 3 timer.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 itemProp="name" className="text-xl font-semibold mb-3 dark:text-white">
                Hvor lang tid har jeg på meg til å kreve erstatning?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 dark:text-gray-300">
                  I Norge har du <strong>3 år</strong> fra flydatoen på deg til å kreve erstatning. Dette er lengre enn i mange andre land, så du har god tid til å samle dokumentasjon og sende inn kravet ditt.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 itemProp="name" className="text-xl font-semibold mb-3 dark:text-white">
                Hva hvis Norwegian tilbyr meg CashPoints i stedet for penger?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 dark:text-gray-300">
                  Du er <strong>ikke pålagt</strong> å akseptere CashPoints, voucher eller andre kompensasjonsformer. Du har lovfestet rett til kontant erstatning i euro. Avslå alltid voucher-tilbud og krev penger direkte inn på konto.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 itemProp="name" className="text-xl font-semibold mb-3 dark:text-white">
                Gjelder dette også for fly til/fra Norge?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 dark:text-gray-300">
                  Ja, du er beskyttet hvis: (1) Flyet starter fra en norsk flyplass (uansett flyselskap), eller (2) Flyet lander i Norge med et europeisk flyselskap som Norwegian, SAS, Ryanair, Wizz Air osv.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 2 - Final Conversion */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klar til å kreve din erstatning?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            La Norwegian-ekspertene i ClaimWinger håndtere alt papirarbeidet. Ingen risiko, du betaler bare hvis du vinner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 w-full sm:w-auto">
                Sjekk mitt krav gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            ⭐ Over 50 000 fornøyde kunder | 💰 98% suksessrate | ⚡ Rask utbetaling
          </p>
        </section>

        {/* Related Articles */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Relaterte artikler</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">
                  <Link href="/no/blog/hvor-mye-erstatning-kansellert-fly-norge" className="hover:text-blue-600">
                    Erstatning for kansellert fly i Norge
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Lær hva du har krav på hvis Norwegian kansellerer flyet ditt.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">
                  <Link href="/no/blog/hvor-lang-tid-flyerstatning-utbetalt" className="hover:text-blue-600">
                    Hvor lang tid tar utbetaling?
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Forventet tidslinje fra krav til penger på konto.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </article>
    </LayoutNo>
  );
}