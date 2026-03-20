import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Euro, RefreshCw, CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NorwegianErstatningVsRefusjon() {
  return (
    <LayoutNo>
      <SEO 
        title="Erstatning vs. refusjon av billett hos Norwegian – hva er forskjellen?"
        description="Mange blander sammen erstatning og refusjon. Lær forskjellen, når du har rett til begge deler, og hvordan du krever dem fra Norwegian."
        url="https://problemlot.com/no/blog/norwegian-erstatning-vs-refusjon"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Erstatning vs. refusjon av billett hos Norwegian – hva er forskjellen?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>7 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Euro className="w-6 h-6" />
            Raskt svar: To separate rettigheter – du kan få begge deler
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              <strong>Erstatning</strong> og <strong>refusjon</strong> er to helt ulike rettigheter under <strong>EU-forordning 261/2004</strong> (som gjelder i Norge gjennom <strong>EØS-avtalen</strong>):
            </p>
            <ul className="ml-4 space-y-2">
              <li>💰 <strong>Erstatning (EU261):</strong> 250–600 € i straff til flyselskapet for forsinkelse/kansellering</li>
              <li>🔄 <strong>Refusjon:</strong> Du får billettprisen tilbake hvis flyet ble kansellert og du ikke vil fly</li>
              <li>✅ <strong>Du kan kreve BEGGE:</strong> Refusjon av billetten + EU261-erstatning</li>
            </ul>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <RefreshCw className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Usikker på hva du har rett til?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ClaimWinger analyserer din sak gratis og krever både refusjon og erstatning på dine vegne.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk mine rettigheter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hva er forskjellen mellom erstatning og refusjon?</h2>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="border-2 border-blue-300 bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-3 flex items-center gap-2">
                💰 Erstatning (EU261)
              </h4>
              <ul className="text-sm space-y-2">
                <li><strong>Hva det er:</strong> Økonomisk straff til flyselskapet</li>
                <li><strong>Beløp:</strong> 250 €, 400 € eller 600 € (avhengig av distanse)</li>
                <li><strong>Når gjelder det:</strong> Forsinkelse 3+ timer eller kansellering mindre enn 14 dager før avgang</li>
                <li><strong>Uavhengig av billettpris:</strong> Selv om billetten kostet 300 NOK, kan du få 600 € (7000 NOK)</li>
                <li><strong>Rettslig grunnlag:</strong> EU-forordning 261/2004 (EØS-avtalen)</li>
              </ul>
            </div>

            <div className="border-2 border-green-300 bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                🔄 Refusjon (billettpris tilbake)
              </h4>
              <ul className="text-sm space-y-2">
                <li><strong>Hva det er:</strong> Du får pengene du betalte for billetten tilbake</li>
                <li><strong>Beløp:</strong> Nøyaktig det du betalte Norwegian (f.eks. 1200 NOK)</li>
                <li><strong>Når gjelder det:</strong> Når flyet kanselleres og du ikke vil fly lenger</li>
                <li><strong>Alternativ til refusjon:</strong> Norwegian kan tilby alternativ flyvning</li>
                <li><strong>Rettslig grunnlag:</strong> EU261 Art. 8 + norsk kjøpsrett</li>
              </ul>
            </div>
          </div>

          <p>
            <strong>Eksempel:</strong>
          </p>
          <p>
            Du kjøpte en LowFare-billett Oslo–New York for 1200 NOK. Norwegian kansellerer flyet 5 dager før avgang. Du har rett til:
          </p>
          <ul>
            <li>🔄 <strong>Refusjon:</strong> 1200 NOK (billettprisen)</li>
            <li>💰 <strong>Erstatning:</strong> 600 € (~7000 NOK) under EU261</li>
            <li>🎯 <strong>Totalt:</strong> ~8200 NOK</li>
          </ul>
          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly – komplett guide 2025</Link>
          </p>

          <h2>Når har du rett til refusjon?</h2>
          <p>
            Du kan kreve <strong>full refusjon av billettprisen</strong> i følgende situasjoner:
          </p>
          <ol>
            <li><strong>Kansellering:</strong> Flyet ble kansellert og du ikke vil fly lenger</li>
            <li><strong>Lang forsinkelse (5+ timer):</strong> Du kan velge å ikke fly og få pengene tilbake</li>
            <li><strong>Mistet tilkoblingsflyg:</strong> Hvis forsinkelsen gjør at du mister det endelige målet</li>
            <li><strong>Tidsendring:</strong> Norwegian endret avgangstiden med mer enn 2 timer mindre enn 14 dager før avgang</li>
          </ol>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Viktig: Refusjon ≠ erstatning
            </h3>
            <p className="text-sm mb-0">
              Mange passasjerer tror at når de får billettprisen tilbake, har de fått "alt de har krav på". Dette er feil! Refusjon gir deg bare det du betalte. <strong>EU261-erstatning er en ekstra rett</strong> – du kan få begge deler.
            </p>
          </div>

          <h2>Når har du rett til erstatning (EU261)?</h2>
          <p>
            Du kan kreve <strong>250–600 € kompensasjon</strong> i følgende situasjoner:
          </p>
          <ol>
            <li><strong>Forsinkelse 3+ timer:</strong> Ved ankomst til destinasjonen (ikke avgang)</li>
            <li><strong>Kansellering mindre enn 14 dager før avgang:</strong> Med mindre Norwegian tilbød alternativ flyvning som kom frem mindre enn 2 timer senere</li>
            <li><strong>Nektet ombordstigning (overbooking):</strong> Norwegian hadde solgt for mange billetter</li>
          </ol>
          <p>
            <strong>Unntak:</strong> Norwegian slipper å betale hvis forsinkelsen/kanselleringen skyldtes <strong>"ekstraordinære omstendigheter"</strong> utenfor deres kontroll (ekstremvær, flygelederstreik, sikkerhetstrussel).
          </p>
          <p>
            Les mer: <Link href="/no/blog/norwegian-kansellert-fly-erstatning" className="text-blue-600 hover:underline">Norwegian kansellerte flyet – hvordan får du opptil 600 € i erstatning?</Link>
          </p>

          <h2>Kan du kreve både refusjon og erstatning samtidig?</h2>
          <p>
            <strong>Ja!</strong> Disse er to helt separate rettigheter:
          </p>
          <ul>
            <li><strong>Refusjon</strong> er din rett til å få pengene tilbake for en tjeneste du ikke fikk (billetten)</li>
            <li><strong>Erstatning</strong> er en straff til flyselskapet for å ha brutt dine passasjerrettigheter</li>
          </ul>
          <p>
            Norwegian prøver ofte å gi inntrykk av at du må velge mellom dem, men dette er feil. Du kan kreve:
          </p>
          <ol>
            <li>Refusjon av billettprisen (f.eks. 1200 NOK)</li>
            <li>EU261-erstatning (250–600 €)</li>
            <li>Utlegg for mat, hotell, transport på flyplassen (hvis applicable)</li>
          </ol>

          <h2>Hva hvis Norwegian tilbyr voucher i stedet for refusjon?</h2>
          <p>
            Norwegian tilbyr ofte voucher (gavekort) i stedet for kontant refusjon. Du har <strong>full rett til å nekte</strong> og kreve pengene på bankkonto.
          </p>
          <p>
            Les mer: <Link href="/no/blog/norwegian-voucher-i-stedet-for-penger" className="text-blue-600 hover:underline">Norwegian tilbyr voucher i stedet for penger – må du akseptere det?</Link>
          </p>

          <h2>Hvordan krever du refusjon og erstatning fra Norwegian?</h2>

          <h3>Alternativ 1: Direkte til Norwegian</h3>
          <ol>
            <li>Gå til <strong>Norwegian.com → Kundeservice</strong></li>
            <li>Krev <strong>både refusjon og erstatning</strong> i samme søknad</li>
            <li>Spesifiser:
              <ul>
                <li>"Jeg krever full refusjon av billettprisen (beløp)"</li>
                <li>"Jeg krever EU261-kompensasjon på [250/400/600] €"</li>
              </ul>
            </li>
            <li>Vent på svar (ofte 30-60 dager)</li>
          </ol>

          <h3>Alternativ 2: Bruk ClaimWinger (anbefalt)</h3>
          <ol>
            <li>Legg inn flynummer på <a href="https://claimwinger.com/no" target="_blank" rel="noopener" className="text-blue-600 hover:underline">claimwinger.com/no</a></li>
            <li>ClaimWinger analyserer automatisk hva du har rett til</li>
            <li>De krever <strong>både refusjon og erstatning</strong> på dine vegne</li>
            <li>Hvis Norwegian nekter: ClaimWingers advokater tar saken til retten</li>
            <li>Gjennomsnittlig tid: <strong>4-8 uker</strong></li>
          </ol>

          <h2>Sammenligningstabeller</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Faktor</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Refusjon</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Erstatning (EU261)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Beløp</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Det du betalte for billetten</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">250 €, 400 € eller 600 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Når gjelder det</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Kansellering eller hvis du velger å ikke fly</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Forsinkelse 3+ timer, kansellering &lt;14 dager, overbooking</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Avhengig av billettpris</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Ja (du får tilbake det du betalte)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Nei (fast beløp basert på distanse)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Rettslig grunnlag</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">EU261 Art. 8 + kjøpsrett</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">EU261 Art. 7</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Kan kombineres</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Ja, du får både refusjon og erstatning</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Ja, du får både refusjon og erstatning</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvis jeg får refusjon, mister jeg da retten til erstatning?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Nei!</strong> Disse er to separate rettigheter. Du kan få både billettprisen tilbake og EU261-kompensasjon.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian rebooket meg på et annet fly?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Da har du <strong>ikke</strong> rett til refusjon (du fløy til slutt), men du kan fortsatt kreve EU261-erstatning hvis det alternative flyet kom frem mer enn 2 timer senere.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg kreve refusjon for en forsinket flytur?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Bare hvis forsinkelsen var <strong>5+ timer</strong> og du valgte å ikke fly. Ellers har du kun rett til EU261-erstatning (ikke refusjon).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis jeg kjøpte billetten gjennom et reisebyrå?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Både refusjon og erstatning skal kreves fra <strong>flyselskapet</strong> (Norwegian), ikke reisebyrået. Du har de samme rettighetene uansett hvor du kjøpte billetten.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvordan krever ClaimWinger begge deler på mine vegne?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  ClaimWinger analyserer din sak automatisk og sender ett samlet krav til Norwegian som inkluderer både refusjon (hvis applicable) og EU261-erstatning. Du trenger ikke gjøre noe selv.
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Få både refusjon og erstatning</h3>
            <p className="text-xl mb-8 text-blue-100">
              ClaimWinger krever begge deler på dine vegne. Ingen risiko, full støtte.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
                Sjekk mine rettigheter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-blue-200 mt-4">
              ✓ No Win, No Fee | ✓ Både refusjon og erstatning | ✓ 4-8 ukers utbetaling
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Refusjon og erstatning er to helt separate rettigheter under EU261. Refusjon gir deg billettprisen tilbake hvis flyet ble kansellert, mens erstatning er en økonomisk straff til flyselskapet for forsinkelse/kansellering. Du kan kreve begge deler samtidig – ikke la Norwegian overbevise deg om at du må velge. ClaimWinger krever automatisk både refusjon og erstatning på dine vegne.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
