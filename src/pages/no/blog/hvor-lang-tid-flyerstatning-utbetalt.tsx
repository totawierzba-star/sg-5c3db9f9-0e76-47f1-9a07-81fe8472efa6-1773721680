import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function CompensationTimelineNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Hvor lang tid tar det å få flyerstatning utbetalt? [2025 Guide]"
        description="Forventet tidslinje: 4-8 uker med ClaimWinger, 2-6 måneder direkte til flyselskap. Lær hvordan du kan få pengene raskere."
        url="https://problemlot.com/no/blog/hvor-lang-tid-flyerstatning-utbetalt"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hvor lang tid tar det å få flyerstatning utbetalt?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              4 min lesing
            </span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Direct Answer Box */}
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
            <Clock className="w-6 h-6" />
            Raskt svar: Forventet tidslinje for utbetaling
          </h2>
          <div className="space-y-4 text-gray-800 dark:text-gray-200">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-green-950/30 p-4 rounded-lg">
                <p className="font-semibold text-green-700 dark:text-green-300 mb-2">Med ClaimWinger:</p>
                <p className="text-2xl font-bold text-green-600 mb-1">4-8 uker</p>
                <p className="text-sm">Fra du sender inn til pengene er på konto</p>
              </div>
              <div className="bg-white dark:bg-green-950/30 p-4 rounded-lg">
                <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Direkte til flyselskap:</p>
                <p className="text-2xl font-bold text-gray-600 mb-1">2-6 måneder</p>
                <p className="text-sm">Ofte lengre hvis de avslår først</p>
              </div>
            </div>
            <p className="text-sm pt-3 border-t border-green-200 dark:border-green-800">
              <strong>Tips:</strong> Flyselskaper er lovpålagt å svare innen 6 uker, men mange ignorerer denne fristen.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-8 rounded-xl mb-12 text-center">
          <TrendingUp className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Vil du ha pengene raskere?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ClaimWinger har direkte kontakt med flyselskapene og håndterer alle forhandlinger profesjonelt. 
            Du slipper unnasluntrende svar og lange ventetider.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
              Start mitt krav i dag
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Detaljert tidslinje: Fra krav til utbetaling</h2>
          <p>
            Hvor lang tid det tar å få flyerstatning avhenger av flere faktorer: hvilken metode du bruker, 
            hvilket flyselskap det gjelder, og hvor komplisert saken din er. Her er en realistisk oversikt:
          </p>

          <h3>Alternativ 1: Direkte til flyselskapet</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <ol className="space-y-3 mb-0">
              <li><strong>Dag 1-7:</strong> Du sender inn kravet via deres skjema eller kundeservice</li>
              <li><strong>Uke 2-6:</strong> Flyselskapet skal i teorien svare innen 6 uker (EU-forordning)</li>
              <li><strong>Uke 6-12:</strong> Ofte får du et standardavslag eller ingen respons</li>
              <li><strong>Uke 12-24:</strong> Du må eskalere saken, sende påminnelser, eventuelt gå til rettslige skritt</li>
            </ol>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 font-semibold">
              ⏱️ Totalt: 2-6 måneder (ofte lenger hvis avslått)
            </p>
          </div>

          <h3>Alternativ 2: Via ClaimWinger (anbefalt)</h3>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6 border border-green-200 dark:border-green-800">
            <ol className="space-y-3 mb-0">
              <li><strong>Dag 1:</strong> Du fyller ut et enkelt skjema (2 minutter)</li>
              <li><strong>Dag 2-3:</strong> ClaimWinger vurderer saken og bekrefter</li>
              <li><strong>Uke 1-4:</strong> Profesjonelle forhandlinger med flyselskapet</li>
              <li><strong>Uke 4-8:</strong> Utbetaling til din konto (ClaimWingers provisjon trekkes automatisk)</li>
            </ol>
            <p className="mt-4 text-sm text-green-700 dark:text-green-300 font-semibold">
              ⏱️ Totalt: 4-8 uker i de fleste tilfeller
            </p>
          </div>

          <h2>Hvorfor tar det så lang tid?</h2>
          <p>
            Flyselskaper har ingen økonomisk insentiv til å betale raskt. Jo lengre de venter, jo færre passasjerer 
            orker å forfølge kravet sitt. Her er de vanligste forsinkelsestaktikkene:
          </p>
          <ul>
            <li><strong>Automatiske avslag</strong> — Mange flyselskaper avslår alle krav først, i håp om at folk gir opp</li>
            <li><strong>Manglende respons</strong> — De ignorerer kravet og håper du glemmer det</li>
            <li><strong>Be om mer dokumentasjon</strong> — Selv om du har sendt alt som trengs</li>
            <li><strong>"Ekstraordinære omstendigheter"</strong> — Påstår falskt at de ikke er ansvarlige</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              Norsk lov: 6 ukers svarfrist
            </h3>
            <p>
              Ifølge EU-forordning 261/2004 (som gjelder i Norge via EØS-avtalen) skal flyselskaper svare på krav 
              innen <strong>6 uker</strong>. Men det er ingen automatiske konsekvenser hvis de ikke gjør det, 
              så mange ignorerer fristen.
            </p>
          </div>

          <h2>Hva påvirker utbetalingstiden?</h2>
          <p>Flere faktorer kan gjøre prosessen raskere eller tregere:</p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✅</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Faktorer som gjør det raskere:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Komplette dokumenter (boardingkort, bookingbekreftelse)</li>
                  <li>• Klar årsak til forsinkelse/kansellering</li>
                  <li>• Bruk av profesjonell tjeneste (ClaimWinger)</li>
                  <li>• Flyselskap med god betalingshistorikk</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⏸️</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Faktorer som gjør det tregere:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Manglende eller uklare dokumenter</li>
                  <li>• Kompliserte saker (flere forsinkelser, kodetilknyttede fly)</li>
                  <li>• Flyselskap som systematisk avslår krav</li>
                  <li>• Krav sendt midt i feriesesongen (lang saksbehandlingstid)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Flyselskap etter utbetalingshastighet (2024-2025 statistikk)</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border px-4 py-3 text-left">Flyselskap</th>
                  <th className="border px-4 py-3 text-left">Gjennomsnittlig tid</th>
                  <th className="border px-4 py-3 text-left">Vurdering</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-3">SAS</td>
                  <td className="border px-4 py-3">6-10 uker</td>
                  <td className="border px-4 py-3 text-green-600 font-semibold">Bra</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border px-4 py-3">Norwegian</td>
                  <td className="border px-4 py-3">8-12 uker</td>
                  <td className="border px-4 py-3 text-yellow-600 font-semibold">Middels</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3">Wizz Air</td>
                  <td className="border px-4 py-3">12-20 uker</td>
                  <td className="border px-4 py-3 text-orange-600 font-semibold">Treg</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border px-4 py-3">Ryanair</td>
                  <td className="border px-4 py-3">10-16 uker</td>
                  <td className="border px-4 py-3 text-orange-600 font-semibold">Treg</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Slik får du pengene raskere</h2>
          <ol>
            <li><strong>Bruk ClaimWinger</strong> — De har eksisterende relasjoner og forhandler profesjonelt</li>
            <li><strong>Send komplette dokumenter</strong> — Ikke gi flyselskapet unnskyldning for å forsinke</li>
            <li><strong>Vær tålmodig, men fast</strong> — Send påminnelser hvis du ikke hører noe på 6 uker</li>
            <li><strong>Eskaler hvis nødvendig</strong> — Kontakt Forbrukerrådet eller Luftfartstilsynet</li>
          </ol>
        </div>

        {/* FAQ */}
        <section className="mt-16 mb-12" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Ofte stilte spørsmål</h2>
          
          <div className="space-y-6">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 itemProp="name" className="text-xl font-semibold mb-3">
                Hva hvis flyselskapet ikke svarer?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 dark:text-gray-300">
                  Send en påminnelse etter 6 uker. Hvis fortsatt ingen respons, kontakt Forbrukerrådet eller ClaimWinger som kan eskalere saken juridisk. Mange flyselskaper ignorerer private krav, men svarer raskt når profesjonelle tjenester er involvert.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 itemProp="name" className="text-xl font-semibold mb-3">
                Koster det noe å bruke ClaimWinger?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 dark:text-gray-300">
                  ClaimWinger jobber på "No Win, No Fee"-basis. Du betaler bare hvis de lykkes med å få erstatningen din. Provisjonen (typisk 25-35% av erstatningen) trekkes automatisk, og resten overføres til deg. Ingen risiko eller skjulte kostnader.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 itemProp="name" className="text-xl font-semibold mb-3">
                Kan jeg få renter hvis det tar lang tid?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 dark:text-gray-300">
                  I noen tilfeller kan du kreve forsinkelsesrenter hvis flyselskapet urimelig forsinker utbetalingen. Dette varierer etter land og sak. ClaimWinger håndterer automatisk slike krav hvis de er relevante for din sak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ikke vent lenger på pengene dine
          </h2>
          <p className="text-xl mb-8 text-green-100">
            La ClaimWinger håndtere alt papirarbeid og forhandlinger. Få pengene raskere og enklere.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6">
              Start mitt krav nå
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <p className="text-sm text-green-100 mt-6">
            ⚡ 4-8 ukers utbetaling | 💰 98% suksessrate | 🔒 Ingen risiko
          </p>
        </section>
      </article>
    </LayoutNo>
  );
}