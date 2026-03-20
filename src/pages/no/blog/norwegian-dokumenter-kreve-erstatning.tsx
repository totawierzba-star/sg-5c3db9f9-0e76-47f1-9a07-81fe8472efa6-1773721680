import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, CheckCircle2, Euro, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NorwegianDokumenterKreveErstatning() {
  return (
    <LayoutNo>
      <SEO 
        title="Hvilke dokumenter trenger du for å kreve erstatning fra Norwegian?"
        description="Komplett liste over nødvendige dokumenter for å kreve erstatning fra Norwegian. Boardingkort, bookingbekreftelse, bevis på forsinkelse og mer."
        url="https://problemlot.com/no/blog/norwegian-dokumenter-kreve-erstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hvilke dokumenter trenger du for å kreve erstatning fra Norwegian?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>6 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Raskt svar: 4 obligatoriske dokumenter for Norwegian-krav
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              For å kreve erstatning fra Norwegian (250-600 € under <strong>EU261/EØS-avtalen</strong>) trenger du: (1) <strong>Boardingkort</strong>, (2) <strong>Bookingbekreftelse</strong>, (3) <strong>Bevis på forsinkelse/kansellering</strong>, (4) <strong>Kvitteringer</strong> (hvis du hadde ekstra utgifter). Uten disse dokumentene vil Norwegian avslå kravet ditt — sørg for å ta vare på alt før du forlater flyplassen.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Euro className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian forsinket eller kansellert?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ClaimWinger samler alle nødvendige dokumenter for deg. Last opp boardingkort og vi håndterer resten.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-6">
              Start kravet ditt (5 min)
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Dokument 1: Boardingkort (kritisk viktig)</h2>
          <p>
            <strong>Boardingkortet</strong> er det viktigste dokumentet for å bevise at du faktisk var om bord på flyet. Uten boardingkort vil Norwegian automatisk avslå kravet ditt.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">✅ Hva må boardingkortet inneholde?</h3>
            <ul className="space-y-2">
              <li>✓ <strong>Flynummer</strong> (f.eks. DY1234)</li>
              <li>✓ <strong>Dato og tid</strong> for avgang</li>
              <li>✓ <strong>Ditt navn</strong> (passasjernavn)</li>
              <li>✓ <strong>Rute</strong> (avgangsby → ankomstby)</li>
              <li>✓ <strong>Seteplass</strong> (bevis på at du faktisk satt om bord)</li>
              <li>✓ <strong>Bookingref</strong> (PNR-kode, f.eks. ABC123)</li>
            </ul>
          </div>

          <p><strong>Hva hvis jeg mistet boardingkortet?</strong></p>
          <p>
            Hvis du ikke har boardingkortet lenger, kan du be Norwegian om en <strong>kopi av passasjerlisten</strong> (PNR-utskrift). Norwegian er lovpålagt å gi deg dette. Send e-post til <strong>kundeservice@norwegian.com</strong> med flynummer, dato og bookingref, og be om bekreftelse på at du var om bord.
          </p>

          <h2>Dokument 2: Bookingbekreftelse</h2>
          <p>
            <strong>Bookingbekreftelsen</strong> viser at du faktisk kjøpte billetten og bekrefter opprinnelig flytid. Dette dokumentet motbeviser Norwegians unnskyldninger som "flyet var ikke forsinket" eller "du fikk alternativt fly på tid".
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">📧 Hvor finner du bookingbekreftelsen?</h3>
            <ul className="space-y-2">
              <li>✓ <strong>E-post fra Norwegian</strong> (søk etter "booking confirmation" eller "bestillingsbekreftelse")</li>
              <li>✓ <strong>Norwegian-app</strong> → Mine reiser → Detaljer</li>
              <li>✓ <strong>Norwegian.com</strong> → Logg inn → Mine bookinger</li>
              <li>✓ <strong>Booking-side</strong> (hvis du kjøpte via Skyscanner, Momondo, Google Flights)</li>
            </ul>
          </div>

          <p><strong>Viktig:</strong> Bookingbekreftelsen må vise <strong>opprinnelig flytid</strong> — ikke endret tid. Hvis Norwegian endret flytiden uten varsel, er dette bevis på at de kansellerte flyet.
          </p>

          <h2>Dokument 3: Bevis på forsinkelse eller kansellering</h2>
          <p>
            Norwegian prøver ofte å nekte erstatning ved å si "flyet var ikke forsinket mer enn 3 timer". Derfor må du ha <strong>uavhengig bevis</strong> på forsinkelsestiden.
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">📸 Beste bevis på forsinkelse:</h3>
            <ol className="space-y-3">
              <li><strong>1. Skjermbilde fra flyplassmonitoren</strong> — Ta bilde av avgangstavlen som viser forsinkelsen</li>
              <li><strong>2. Skjermbilde fra Norwegian-app</strong> — Åpne appen og ta skjermbilde av forsinkelsesmeldingen</li>
              <li><strong>3. FlightRadar24-data</strong> — Søk etter flynummer og dato på flightradar24.com, ta skjermbilde av landingstid</li>
              <li><strong>4. SMS/e-post fra Norwegian</strong> — Hvis Norwegian sendte deg melding om forsinkelse/kansellering</li>
              <li><strong>5. Bilder fra flyplassen</strong> — Tidsstemplet bilde av deg på flyplassen under forsinkelsen</li>
            </ol>
          </div>

          <p>
            <strong>Viktig:</strong> Norwegian må kompensere basert på <strong>landingstid</strong>, ikke avgangstid. Hvis flyet tok av 2 timer forsinket men landet 3,5 timer forsinket, har du rett til full erstatning.
          </p>

          <h2>Dokument 4: Kvitteringer for ekstra utgifter</h2>
          <p>
            Hvis forsinkelsen førte til ekstra utgifter (hotell, måltider, transport, tapte arrangementer), må du dokumentere disse for å kreve refusjon <strong>i tillegg til</strong> EU261-erstatningen.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">🧾 Hvilke utgifter kan du kreve?</h3>
            <ul className="space-y-2">
              <li>✓ <strong>Hotell:</strong> Hvis Norwegian ikke tilbød overnatting (ta vare på hotellkvittering)</li>
              <li>✓ <strong>Måltider:</strong> Rimelige måltider mens du ventet (maks ~300 NOK per person per måltid)</li>
              <li>✓ <strong>Transport:</strong> Taxi/buss til hotell eller hjem hvis du ga opp å reise</li>
              <li>✓ <strong>Tapte arrangementer:</strong> Billetter til konsert, fotballkamp, hotell på destinasjonen</li>
              <li>✓ <strong>Ekstra arbeidsdager:</strong> Hvis forsinkelsen kostet deg arbeidsdager (krever dokumentasjon fra arbeidsgiver)</li>
            </ul>
          </div>

          <p>
            <strong>Viktig:</strong> EU261-erstatning (250-600 €) og utgiftsrefusjon er <strong>to separate krav</strong>. Du kan kreve begge samtidig. Les mer: <Link href="/no/blog/norwegian-erstatning-vs-refusjon" className="text-blue-600 hover:underline">Erstatning vs. refusjon hos Norwegian</Link>
          </p>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Viktig: Hva hvis du ikke har alle dokumentene?
            </h3>
            <p className="text-sm mb-0">
              Hvis du mangler boardingkort eller bookingbekreftelse, <strong>ikke gi opp</strong>. ClaimWinger kan hente passasjerlister, flydata og bookinghistorikk direkte fra Norwegian og flyplassystemer. Selv uten perfekte dokumenter, kan vi ofte vinne kravet ditt. <a href="https://claimwinger.com/no" className="text-blue-600 hover:underline">Start kravet ditt her</a>.
            </p>
          </div>

          <h2>Hvordan sender du dokumentene til Norwegian?</h2>
          <p>
            Når du har samlet alle dokumenter, kan du sende kravet på tre måter:
          </p>

          <ol>
            <li><strong>Norwegian.com → Kundeservice → Erstatningskrav</strong> (raskest)</li>
            <li><strong>E-post til kundeservice@norwegian.com</strong> (med vedlegg)</li>
            <li><strong>Brev til Norwegian hovedkontor</strong> (postboks 115, 1330 Fornebu)</li>
          </ol>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvordan-soke-erstatning-steg-for-steg" className="text-blue-600 hover:underline">Hvordan søker du om erstatning fra Norwegian steg for steg?</Link>
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Må jeg ha originale papirdokumenter eller holder digitale kopier?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Digitale kopier holder.</strong> Norwegian godtar skjermbilder, PDF-er og e-postbekreftelser. Du trenger ikke fysiske papirer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis jeg kjøpte billetten via tredjepart (Skyscanner, Momondo)?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Samme dokumenter gjelder.</strong> Du sender kravet direkte til Norwegian — ikke booking-siden. Bookingbekreftelsen fra tredjepart er gyldig.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan Norwegian nekte erstatning hvis jeg ikke har alle dokumentene?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Norwegian prøver ofte, men hvis du kan bevise at du var om bord (f.eks. via PNR-kode), <strong>må de betale</strong>. ClaimWinger kan hente manglende data for deg.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Må jeg oversette dokumenter til engelsk eller norsk?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Nei.</strong> Norwegian godtar dokumenter på norsk, engelsk, svensk, dansk. Hvis du har dokumenter på andre språk, trenger du kun å oversette nøkkelinformasjon (dato, flynummer, beløp).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvor lang tid har jeg på meg til å samle dokumentene?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Foreldelsesfristen i Norge er <strong>3 år</strong> fra flydatoen. Men jo raskere du søker, desto enklere er det å finne dokumenter. Les mer: <Link href="/no/blog/norwegian-foreldelsesfrist-krav" className="text-blue-600 hover:underline">Foreldelsesfrist for Norwegian-krav</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Mangler du dokumenter? ClaimWinger hjelper</h3>
            <p className="text-xl mb-8 text-indigo-100">
              Vi henter passasjerlister, flydata og bookinghistorikk direkte fra Norwegian. Selv uten perfekte dokumenter, vinner vi 98% av kravene.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 text-lg px-8 py-6">
                Start kravet ditt (5 min)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-indigo-200 mt-4">
              ✓ No Win, No Fee | ✓ Vi håndterer dokumentinnhenting | ✓ 4-8 ukers utbetaling
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            For å kreve erstatning fra Norwegian trenger du fire obligatoriske dokumenter: boardingkort, bookingbekreftelse, bevis på forsinkelse, og kvitteringer for ekstra utgifter. Uten disse dokumentene vil Norwegian avslå kravet ditt. Men hvis du mangler noe, ikke gi opp — ClaimWinger kan hente passasjerlister og flydata på dine vegne. Les også den omfattende guiden: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly — komplett guide 2025</Link>.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
