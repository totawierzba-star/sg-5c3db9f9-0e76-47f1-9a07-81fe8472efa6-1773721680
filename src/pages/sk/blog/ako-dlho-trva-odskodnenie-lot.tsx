import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Hourglass, 
  CheckCircle2, 
  XCircle,
  FileText,
  ArrowRight,
  Shield,
  CalendarDays
} from "lucide-react";
import Link from "next/link";

export default function AkoDlhoTrvaOdskodnenieLOT() {
  return (
    <LayoutSk>
      <SEO
        title="Koľko Trvá Vyplatenie Odškodnenia od LOT? [Aktuálne časy 2026]"
        description="Čakáte na peniaze od LOT Polish Airlines? Zistite, ako dlho to trvá, prečo meškajú a ako urýchliť proces vyplatenia odškodnenia."
        url="https://problemlot.com/sk/blog/ako-dlho-trva-odskodnenie-lot"
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Koľko Trvá Vyplatenie Odškodnenia od LOT Polish Airlines?",
            "description": "Analýza časov vyplácania odškodnení od LOT a tipy na urýchlenie procesu.",
            "image": "https://problemlot.com/og-image.png",
            "author": {
              "@type": "Organization",
              "name": "LotProblem.pl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://problemlot.com/og-image.png"
              }
            },
            "datePublished": "2026-03-05",
            "dateModified": "2026-03-05"
          })
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Čas vyplatenia LOT</span>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Koľko Trvá Vyplatenie Odškodnenia od LOT a Čo Robiť, Keď Neplatí?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Podali ste žiadosť a stále čakáte? Pozreli sme sa na reálne dáta o rýchlosti vyplácania od LOT Polish Airlines v roku 2026.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Aktualizované: 5. marca 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Čítanie: 8 minút</span>
              </div>
            </div>
          </header>

          {/* AI Overview */}
          <div className="mb-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <Hourglass className="w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">⏱️ Priemerný čas čakania: 8 až 16 týždňov</h2>
                <p className="text-blue-100 text-lg">
                  Ak žiadate sami, proces trvá často <strong>3-6 mesiacov</strong>. S ClaimWinger je to zvyčajne <strong>8-12 týždňov</strong> vďaka právnemu tlaku.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <h3 className="font-bold text-xl mb-1">~30 dní</h3>
                <p className="text-xs text-blue-200">Ideálny scenár (zriedkavé)</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur border-2 border-green-400/50">
                <h3 className="font-bold text-xl mb-1">2-3 mesiace</h3>
                <p className="text-xs text-blue-200">Štandard s ClaimWinger</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <h3 className="font-bold text-xl mb-1">6+ mesiacov</h3>
                <p className="text-xs text-blue-200">Individuálne žiadosti</p>
              </div>
            </div>
          </div>

          {/* CTA 1 */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold mb-4 text-center">Nechce sa vám čakať mesiace?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                ClaimWinger urýchľuje proces vďaka priamemu kontaktu na právne oddelenie LOT
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="https://claimwinger.com/sk?utm_source=blog&utm_medium=article&utm_campaign=lot_cas_cta1" target="_blank" rel="noopener noreferrer">
                    Urýchliť vyplatenie <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* Content */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CalendarDays className="w-8 h-8 text-blue-600" />
              Prečo LOT mešká s výplatou?
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                LOT Polish Airlines nie je najrýchlejší platiteľ. Tu sú hlavné dôvody oneskorení:
              </p>

              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">1. Obrovské množstvo žiadostí</h3>
                  <p className="text-gray-600 dark:text-gray-400">LOT spracováva tisíce žiadostí denne. Individuálne emaily často "zapadnú" v systéme.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">2. Zámerná stratégia "vyčkávania"</h3>
                  <p className="text-gray-600 dark:text-gray-400">Aerolinky vedia, že ak neodpovedia 2 mesiace, veľa ľudí na to zabudne alebo to vzdá. Je to smutné, ale ekonomicky efektívne pre nich.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">3. Overovanie "technických porúch"</h3>
                  <p className="text-gray-600 dark:text-gray-400">LOT často čaká na technické správy od údržby, aby zistili, či môžu použiť výhovorku "mimoriadna okolnosť".</p>
                </Card>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Ako urýchliť proces?</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Používajte správne formuláre:</strong> Nepíšte voľný text, použite oficiálny reklamačný formulár LOT alebo ClaimWinger.</li>
                <li><strong>Priložte všetko naraz:</strong> Ak chýba boarding pass alebo číslo účtu (IBAN), LOT žiadosť odloží na "dopytovanie", čo pridá 4 týždne.</li>
                <li><strong>Hrozba právnych krokov:</strong> LOT reaguje rýchlejšie na žiadosti od právnych firiem (ako ClaimWinger) než na jednotlivcov, pretože vedia, že máme kapacity ísť na súd.</li>
              </ul>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Časová os procesu (Realita)</h2>
            <div className="relative border-l-4 border-blue-200 dark:border-blue-800 ml-4 pl-8 space-y-8">
              <div className="relative">
                <span className="absolute -left-12 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                <h3 className="font-bold text-xl">Podanie žiadosti</h3>
                <p className="text-gray-600 dark:text-gray-400">Okamžite po lete. Dostanete automatické potvrdenie s číslom prípadu.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-12 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                <h3 className="font-bold text-xl">Čakanie na odpoveď (30-60 dní)</h3>
                <p className="text-gray-600 dark:text-gray-400">Zákonná lehota je 30 dní, ale LOT ju často predlžuje na 60 dní s odvolaním na "veľké množstvo žiadostí".</p>
              </div>
              <div className="relative">
                <span className="absolute -left-12 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                <h3 className="font-bold text-xl">Rozhodnutie LOT (Schválenie alebo Zamietnutie)</h3>
                <p className="text-gray-600 dark:text-gray-400">Ak schvália: požiadajú o IBAN. Ak zamietnu: začína boj (ďalšie 2-4 mesiace).</p>
              </div>
              <div className="relative">
                <span className="absolute -left-12 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
                <h3 className="font-bold text-xl">Výplata peňazí (14-30 dní)</h3>
                <p className="text-gray-600 dark:text-gray-400">Od momentu schválenia trvá medzinárodný prevod z Poľska cca 2-4 týždne.</p>
              </div>
            </div>
          </section>

          {/* CTA 2 */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Nečakajte zbytočne dlho</h3>
              <p className="text-xl text-blue-100 mb-6">
                Začnite proces s ClaimWinger ešte dnes a získajte peniaze čo najskôr
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <a href="https://claimwinger.com/sk?utm_source=blog&utm_medium=article&utm_campaign=lot_cas_cta2" target="_blank" rel="noopener noreferrer">
                    Začať proces <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">❓ Často kladené otázky</h2>
            <div className="space-y-4">
              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold cursor-pointer">Čo ak LOT nepošle peniaze ani po schválení?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Stáva sa to. Ak prešlo 30 dní od sľúbenia platby, treba poslať predžalobnú výzvu. ClaimWinger to robí automaticky.</p>
              </details>
              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold cursor-pointer">Môžem sledovať stav mojej žiadosti online?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400">LOT nemá verejný tracker. Musíte im písať emaily. S ClaimWinger máte prístup do klientskej zóny, kde vidíte stav 24/7.</p>
              </details>
              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold cursor-pointer">Prepadne mi nárok, ak LOT dlho neodpovedá?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Nie, pokiaľ ste podali žiadosť v rámci premlčacej lehoty (2 roky SK, 3 roky PL). Podaním sťažnosti sa premlčanie prerušuje.</p>
              </details>
            </div>
          </section>
        </div>
      </article>
    </LayoutSk>
  );
}
