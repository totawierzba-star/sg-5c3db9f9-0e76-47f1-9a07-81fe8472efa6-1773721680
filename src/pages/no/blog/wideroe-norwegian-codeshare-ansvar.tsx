import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function WideRoeNorwegianCodeshareAnsvar() {
  return (
    <LayoutNo>
      <SEO
        title="Widerøe og Norwegian codeshare — hvem er ansvarlig ved forsinkelse?"
        description="Booket du med Norwegian, men fløy med Widerøe? Lær hvilket selskap som må betale din EU261-erstatning ved forsinkelse eller kansellering."
        canonical="https://problemlot.pl/no/blog/wideroe-norwegian-codeshare-ansvar"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Widerøe og Norwegian codeshare — hvem er ansvarlig ved forsinkelse?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2026-03-08">8. mars 2026</time>
            <span>•</span>
            <span>7 min lesing</span>
            <span>•</span>
            <span className="text-indigo-600 font-medium">Codeshare</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Du kjøper en billett på Norwegian.no fra Oslo til Svolvær. Første etappe til Bodø flys av Norwegian, men siste etappe til Svolvær flys av et grønt Widerøe-fly (codeshare). Hvis flyet blir 3 timer forsinket, starter forvirringen: <strong>Hvilket flyselskap skal betale erstatningen på 250 €?</strong> Norwegian ber deg kontakte Widerøe, mens Widerøe sier du må snakke med Norwegian.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Denne ping-pong leken er vanlig. Heldigvis er EU261 regelverket krystallklart på hvem som har ansvaret. Denne guiden rydder opp i forvirringen rundt codeshare-flyvninger i Norge.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Rask sjekk: Hvem skal du klage til?</h3>
            <p className="text-gray-700 mb-4">
              Den gyldne regelen: Erstatningskravet skal <strong>alltid rettes mot det flyselskapet som FAKTISK opererte det forsinkede flyet</strong> (Operating Carrier), uavhengig av hvem du kjøpte billetten av.
            </p>
            <p className="text-sm text-gray-600">
              Trøbbel med codeshare-krav? <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger finne ut hvem som skal betale →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Regelen om det "opererende flyselskapet"
          </h2>

          <p className="text-gray-700 mb-4">
            Når Widerøe og Norwegian selger billetter på hverandres flyvninger for å utvide nettverket sitt, kalles dette codeshare.
          </p>

          <p className="text-gray-700 mb-6">
            I henhold til EU-forordning 261/2004 er det <strong>kun det opererende flyselskapet ("operating carrier")</strong> som er juridisk ansvarlig for forsinkelsen. Det spiller ingen rolle at flynummeret begynner med "DY" (Norwegian) hvis det faktisk er et Widerøe-fly med Widerøe-ansatte som flyr.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Eksempel 1: Kjøpt hos Norwegian, fløyet av Widerøe
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Du bestilte på Norwegian.no.</li>
            <li>Flyet fra Bergen til Florø har rutenummer DY8000, men opereres av Widerøe.</li>
            <li>Flyet kanselleres pga. teknisk feil.</li>
            <li><strong>Løsning:</strong> Kravet ditt om 250 € kompensasjon MÅ sendes til <strong>Widerøe</strong>.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Eksempel 2: Kjøpt hos Widerøe, fløyet av Norwegian
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Du bestilte en reise fra Tromsø til Alicante på Wideroe.no.</li>
            <li>Første etappe til Oslo flys av Norwegian, og dette flyet blir forsinket slik at du mister tilkoblingen til Spania.</li>
            <li><strong>Løsning:</strong> Kravet ditt om 400 € kompensasjon MÅ sendes til <strong>Norwegian</strong>, siden de opererte flyet som skapte forsinkelsen.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hva skjer ved tap av tilkobling?
          </h2>

          <p className="text-gray-700 mb-6">
            Mistet tilkoblingsflyg på en gjennomgående billett med to ulike selskaper er komplisert. Hvis du ankommer sluttdestinasjonen mer enn 3 timer forsinket, skal kravet rettes mot <strong>det selskapet som forårsaket forsinkelsen på første etappe</strong>.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">⚠️ Pass på ansvarsfraskrivelsen</h3>
            <p className="text-gray-700">
              Mange opplever at Widerøe sier: "Klag til Norwegian, det var de som solgte billetten". Deretter sier Norwegian: "Klag til Widerøe, de opererte flyet". Stå på kravene: <strong>Widerøe har ansvaret hvis de fløy flyet</strong>.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Slik løser du codeshare-problemer med ClaimWinger
          </h2>

          <p className="text-gray-700 mb-6">
            Flyselskapene bruker ofte codeshare-forvirring bevisst for å trette ut passasjerene, slik at de gir opp å kreve kompensasjonen sin.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">✅ La ekspertene ta over</h3>
            <p className="text-gray-700 mb-3">
              ClaimWinger sjekker hvem som var "operating carrier" gjennom offisielle flydata. De sender de juridiske kravene til riktig selskap og aksepterer ingen ansvarsfraskrivelse.
            </p>
            <p className="text-sm text-gray-600">
              <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 font-semibold underline">Registrer kravet ditt hos ClaimWinger →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ofte stilte spørsmål (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hvordan vet jeg hvem som opererte flyet?
              </h3>
              <p className="text-gray-700">
                Sjekk bookingbekreftelsen eller boardingkortet ditt. Det vil ofte stå "Operated by Widerøe" (eller "Flyes av Widerøe") i liten skrift under rutenummeret.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hvem har ansvaret for mat og hotell ved forsinkelsen?
              </h3>
              <p className="text-gray-700">
                Rett til omsorg (hotell og mat) ligger også hos det opererende flyselskapet. Hvis Widerøe-flyet er forsinket, er det Widerøe-personalet på flyplassen som skal skaffe deg hotell, uavhengig av hvem som solgte billetten.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Påvirker codeshare erstatningsbeløpet?
              </h3>
              <p className="text-gray-700">
                Nei. EU261-satsene (250 €, 400 € eller 600 €) gjelder uansett hvem som solgte billetten, og baseres kun på den totale distansen og forsinkelsen ved ankomst.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Konklusjon
          </h2>

          <p className="text-gray-700 mb-6">
            Codeshare-samarbeidet mellom Widerøe og Norwegian er flott for tilgjengeligheten, men det kan skape forvirring når ting går galt. Husk alltid regelen om opererende flyselskap: Det er de som faktisk utfører flyvningen som skal betale EU261-erstatningen.
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Vårt råd:</strong> Ikke godta å bli sendt frem og tilbake mellom flyselskapene. La ClaimWinger kutte gjennom byråkratiet og skaffe pengene dine. <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 font-medium underline">Start prosessen gratis her →</Link>
          </p>

          <p className="text-gray-600 text-sm mt-8">
            <strong>Relaterte guider:</strong> <Link href="/no/blog/wideroe-forsinket-fly-erstatning" className="text-blue-600 hover:text-blue-700 underline">Erstatning for forsinket Widerøe-fly</Link>, <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:text-blue-700 underline">Norwegian forsinkelseerstatning — komplett guide</Link>
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}