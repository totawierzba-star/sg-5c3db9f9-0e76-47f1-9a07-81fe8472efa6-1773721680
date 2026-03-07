import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  return (
    <LayoutSv>
      <SEO
        title="Kan jag kräva ersättning för ett flyg för 3 år sedan? (10 års regel)"
        description="Trodde du att det var för sent? I Sverige kan du kräva ersättning för flyg upp till 10 år tillbaka i tiden. Läs om preskriptionstiden här."
        image="/images/old-flight-claim.jpg"
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Kan jag kräva ersättning för ett flyg för 3 år sedan?</h1>
        
        <div className="bg-green-50 p-6 rounded-lg mb-8 border-l-4 border-green-500">
          <p className="text-xl font-semibold text-green-900 mb-2">Svar: JA!</p>
          <p className="text-gray-800">
            I Sverige är preskriptionstiden för flygersättning hela <strong>10 år</strong>. Om du hade ett försenat eller inställt flyg för 3 år sedan (eller till och med 9 år sedan), kan du fortfarande ha rätt till 600 € idag.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Sverige är unikt i Europa</h2>
        <p className="mb-4">
          Preskriptionstiden (hur länge du kan vänta med att klaga) styrs av nationell lag, inte av EU-lagen. Därför varierar det kraftigt mellan länder:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Sverige: 10 år</strong> (Allmän preskriptionstid)</li>
          <li><strong>Tyskland: 3 år</strong></li>
          <li><strong>Italien: 2 år</strong></li>
          <li><strong>Polen: 1 år</strong></li>
        </ul>
        <p className="mb-6">
          Detta innebär att om du flög från Arlanda eller Landvetter, eller med ett svenskt bolag, gäller oftast svensk lag och 10-årsregeln.
        </p>

        <h2 className="text-2xl font-bold mb-4">Gäller det alla flyg?</h2>
        <p className="mb-4">
          Det beror på vilket lands lag som tillämpas. Huvudregeln är:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Flyg FRÅN Sverige:</strong> Svensk lag (10 år) gäller oftast.</li>
          <li><strong>Flyg TILL Sverige med svenskt bolag (SAS/Norwegian SE):</strong> Svensk lag (10 år) gäller oftast.</li>
          <li><strong>Flyg TILL Sverige med utländskt bolag (t.ex. Lufthansa från Tyskland):</strong> Ofta gäller avreselandets lag (Tyskland = 3 år).</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Varför har jag inte hört detta förut?</h2>
        <p className="mb-4">
          Flygbolagen vill inte att du ska veta det. De hoppas att du glömmer bort din försening. Men pengarna tillhör dig. Har du gamla bokningsbekräftelser i din mailkorg? Sök på "SAS", "Norwegian" eller "Ryanair" i din inkorg och kolla datumen.
        </p>

        <h2 className="text-2xl font-bold mb-4">Vad behöver jag för att söka för gamla flyg?</h2>
        <p className="mb-6">
          Du behöver bokningsreferensen (PNR, 6 tecken) och helst biljettnumret. Du behöver inte ha kvar boardingkortet i pappersform, det digitala beviset i mailet räcker oftast.
        </p>

        <div className="bg-gray-100 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Har du en gammal försening i minnet?</h3>
          <p className="mb-6">Gräv fram det gamla mailet och förvandla det till kontanter idag.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="https://claimwinger.com/?utm_source=lotproblem-sv-gammalt-flyg-snippet" target="_blank" rel="noopener noreferrer">
              Kolla gamla flyg nu
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}