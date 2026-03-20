import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, UserCheck, Briefcase } from "lucide-react";
import Link from "next/link";

export default function WhoGetsCompensationNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Hvem får erstatningen — reisenden, bedriften eller reisearrangøren?"
        description="Fikk du turen betalt av sjefen eller et reisebyrå? Det er likevel DU som passasjer som har rett på 600 € i kompensasjon for forsinket fly."
        url="https://problemlot.com/no/blog/hvem-far-erstatningen-reisenden-eller-reisearrangoren"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hvem får erstatningen — reisenden eller den som betalte billetten?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>3 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Direct Answer Box */}
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
            <UserCheck className="w-6 h-6" />
            Raskt svar: Det er alltid passasjeren som får pengene!
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              I henhold til EU-forordning 261/2004 (som gjelder i Norge via EØS-avtalen), 
              tilhører retten til erstatning (250-600 €) eksklusivt <strong>den personen som opplevde forsinkelsen</strong> — altså passasjeren.
            </p>
            <p className="font-semibold text-sm">
              Dette gjelder selv om:
            </p>
            <ul className="space-y-1 ml-4 text-sm">
              <li>✅ Arbeidsgiveren din betalte for jobbreisen</li>
              <li>✅ En venn eller et familiemedlem kjøpte billetten din</li>
              <li>✅ Du booket via et reisebyrå (f.eks. Ving, TUI eller Expedia)</li>
            </ul>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl mb-12 text-center border border-blue-100 dark:border-blue-800">
          <Briefcase className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Krev din personlige erstatning</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Selv for jobbreiser er det du som opplever stresset med forsinkelsen. Krev dine 600 € raskt og enkelt.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk kravet ditt gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor får passasjeren pengene?</h2>
          <p>
            For å forstå dette, må vi skille mellom <em>refusjon</em> og <em>kompensasjon</em>. 
            EU261-lovgivningen er utformet for å kompensere for "tidstap og ulempe".
          </p>
          <ul>
            <li><strong>Refusjon for kansellert billett:</strong> Dette går tilbake til betalingskortet som ble brukt. Så hvis arbeidsgiveren betalte billetten og flyet blir kansellert (og du ikke reiser), får arbeidsgiveren pengene for billetten tilbake.</li>
            <li><strong>Kompensasjon (erstatning):</strong> Den faste satsen på 250 €, 400 € eller 600 € er en trøst for at <em>din tid</em> ble kastet bort på en flyplass. Derfor har bedriften ingenting med disse pengene å gjøre.</li>
          </ul>

          <h2>Jobbreiser: Må jeg si fra til sjefen?</h2>
          <p>
            Juridisk sett: Nei. Erstatningen er din privatsak. Noen firmaer har likevel interne personalreglement 
            (for eksempel i staten eller i enkelte store selskaper) som sier at ansatte må overføre eventuelle kompensasjoner til firmaet. 
            Det er imidlertid svært sjelden, og flyselskapet er uansett forpliktet til å betale pengene direkte til <strong>deg</strong>, ikke firmaet.
          </p>

          <h2>Reisebyråer (OTA) og pakkereiser</h2>
          <p>
            Mange nordmenn bestiller gjennom reisebyråer som Ticket, Expedia eller som en pakkereise med TUI. 
            Hvem skal du kreve pengene fra, og hvem får dem?
          </p>
          <p>
            Også her er regelen krystallklar: Erstatningskravet etter EU261 skal rettes direkte mot det <strong>opererende flyselskapet</strong> 
            (f.eks. SAS, Norwegian eller Sunclass Airlines), og det er du som passasjer som skal ha utbetalingen. Reisebyrået har verken plikt til å 
            hjelpe deg med kravet eller rett til å beholde pengene.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold mb-2">Vær forsiktig med "Reisebyrå-gebyrer"</h3>
            <p>
              Noen online reisebyråer tilbyr "hjelp" til å kreve erstatning, men de kan ta helt opp til 50% i gebyr, 
              eller bare gi deg en verdikupong for deres egen nettside. Bruk alltid spesialiserte advokattjenester som 
              ClaimWinger hvis du vil ha profesjonell hjelp.
            </p>
          </div>

          <h2>Gruppebestillinger og familier</h2>
          <p>
            Hvis en person bestiller og betaler for hele familien (f.eks. far betaler for 4 personer), 
            kan han sende inn et samlet krav for alle fire. Erstatningen vil da bli 4 x 600 € = 2400 € hvis det er en langdistanse. 
            Selskapet vil betale hele summen til kontoen som oppgis i kravet.
          </p>

          <h2>Hvorfor ClaimWinger er ideelt for jobbreiser</h2>
          <p>
            Når du er på jobbreise, har du ofte ikke tid til å sitte i timevis i telefonkø med flyselskapet. 
            Du kan registrere saken din hos ClaimWinger på to minutter. De tar seg av hele prosessen i bakgrunnen mens du jobber videre, 
            og når pengene ankommer, settes de rett inn på din private bankkonto.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
