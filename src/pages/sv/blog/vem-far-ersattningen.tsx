import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VemFarErsattningen() {
  return (
    <LayoutSv>
      <SEO
        title="Vem får ersättningen — resenären eller researrangören? | ClaimWinger"
        description="Vem har rätt till pengarna vid flygförsening? Pasaageraren som flög, eller företaget som betalade biljetten? Vi reder ut begreppen enligt EU-domstolen."
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Vem får ersättningen — resenären eller researrangören?</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg font-semibold text-blue-800 mb-2">Snabbt svar:</p>
          <p className="text-blue-700">
            Enligt EU-förordning 261/2004 tillfaller ersättningen <strong>alltid passageraren som faktiskt drabbades av förseningen</strong>, oavsett vem som betalade för biljetten (t.ex. arbetsgivare eller förälder).
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Huvudregeln: Pasaageraren äger rätten</h2>
        <p className="mb-4">
          Rätten till kompensation är en personlig rättighet. Syftet med lagen är att kompensera individen för den tid och det obehag som uppstått. Därför ska pengarna gå till den person vars namn står på boardingkortet.
        </p>

        <h2 className="text-2xl font-bold mb-4">Undantag: Affärsresor och avtal</h2>
        <p className="mb-4">
          Även vid affärsresor har den anställde (resenären) grundläggande rätt till ersättningen enligt lagen.
        </p>
        <p className="mb-4">
          <strong>OBS:</strong> Många arbetsgivare har dock klausuler i anställningsavtal eller resepolicyer som säger att all kompensation i tjänsten tillfaller företaget. I sådana fall måste du som anställd begära ersättningen, men sedan redovisa den till din arbetsgivare. Flygbolaget kan dock inte neka utbetalning till dig med hänvisning till detta.
        </p>

        <h2 className="text-2xl font-bold mb-4">Paketresor och charter</h2>
        <p className="mb-6">
          Samma regel gäller för charterresor (TUI, Ving, Apollo). Även om du köpt en paketresa är det flygbolaget som är ansvarigt för förseningen, och ersättningen enligt EU261 går till passageraren, inte researrangören.
        </p>

        <div className="bg-gray-100 p-8 rounded-lg text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Osäker på vem som ska ansöka?</h3>
          <p className="mb-6">Vi hjälper dig att reda ut rättighetsfrågorna och kräva in pengarna.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=sv_who_gets_paid">
              Kontrollera din ersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
