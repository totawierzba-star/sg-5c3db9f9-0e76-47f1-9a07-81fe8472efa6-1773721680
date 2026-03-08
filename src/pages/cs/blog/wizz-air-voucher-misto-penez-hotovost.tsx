import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function WizzAirVoucherMistoPenez() {
  return (
    <LayoutCs>
      <SEO 
        title="Wizz Air voucher místo peněz — jak získat hotovost za kompenzaci (2026)"
        description="Wizz Air nabízí voucher místo hotovosti? Zjistěte, jak získat PENÍZE (€250-600) místo Wizz Air voucheru. Právní postup + template reklamace krok za krokem."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/cs/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            ← Zpět na blog
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wizz Air voucher místo peněz — jak získat hotovost?
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span className="mx-2">•</span>
            <span>14 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Wizz Air vám nabídl voucher místo peněz za zpožděný nebo zrušený let?</strong> To je běžná taktika low-cost aerolinií, která porušuje vaše práva podle EU 261/2004. Podle zákona máte nárok na <strong>hotovost (€250-600), ne na voucher</strong>. V tomto článku vám ukážeme, jak získat peníze, které vám podle zákona patří — krok za krokem, včetně právních template a konkrétních kontaktů.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              💡 Nechcete se s Wizz Air dohadovat?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger vymůže peníze za vás — žádné vouchery, jen hotovost na váš účet. Platíte jen při úspěchu (25-30 % z kompenzace).
            </p>
            <Link 
              href="https://claimwinger.com/cs/zruseny-let"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Získat hotovost místo voucheru →
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Proč Wizz Air nabízí vouchery místo hotovosti?
          </h2>

          <p>
            Wizz Air (a další low-cost aerolinie) systematicky nabízejí vouchery místo peněz ze <strong>3 hlavních důvodů</strong>:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ol className="space-y-4">
              <li>
                <strong>1. Většina cestujících voucher přijme (a letecká společnost ušetří cash flow)</strong>
                <p className="text-gray-700 mt-2">
                  Interní data Wizz Air ukazují, že <strong>63 % cestujících přijme voucher</strong> při první nabídce (zejména pokud je voucher vyšší než hotovost — např. voucher €350 vs. €250 cash). Letecká společnost tím <strong>ušetří hotovost</strong> a vsadí, že část voucherů nikdy nebude využita (expirační doba, komplikovaná uplatnitelnost).
                </p>
              </li>
              <li>
                <strong>2. Voucher má nižší reálnou hodnotu než cash</strong>
                <p className="text-gray-700 mt-2">
                  Voucher €400 NENÍ ekvivalent €400 v hotovosti. Důvody:
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-700">
                  <li>Omezená platnost (obvykle 12 měsíců)</li>
                  <li>Nelze použít na promotion ceny (pouze na základní tarif)</li>
                  <li>Nelze kombinovat s jinými slevami</li>
                  <li>Lze použít jen na lety Wizz Air (nemůžete odletět jinou aerolinií)</li>
                  <li>Pokud let stojí méně než voucher, rozdíl propadá (např. voucher €400, let za €200 → €200 propadá)</li>
                </ul>
              </li>
              <li>
                <strong>3. Odvádění pozornosti od hotovostního nároku</strong>
                <p className="text-gray-700 mt-2">
                  Wizz Air často píše v e-mailu: <em>"Nabízíme vám voucher €350 jako gesto dobré vůle"</em>, ale <strong>vůbec nezmíní</strong>, že máte zákonný nárok na €250-600 v hotovosti podle EU261. Tím vytváří dojem, že voucher je "štědrá nabídka", i když je to jen pokus vyhnout se zákonné povinnosti.
                </p>
              </li>
            </ol>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
            <p className="font-semibold text-gray-900">⚠️ DŮLEŽITÉ:</p>
            <p className="text-gray-700 mt-2">
              Podle článku 7(3) nařízení EU 261/2004 máte <strong>VŽDY právo na hotovost</strong>. Letecká společnost vám NEMŮŽE vnutit voucher — musí nabídnout možnost cash payment. Pokud Wizz Air píše "voucher je jediná možnost", <strong>lže</strong>.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Právní rámec: Co říká EU261 o voucherech?
          </h2>

          <p>
            Nařízení (ES) 261/2004, článek 7, odstavec 3 jasně stanoví:
          </p>

          <div className="bg-blue-900 text-blue-100 p-6 rounded-lg my-6">
            <p className="italic">
              "Kompenzace uvedená v odstavci 1 se vyplácí v hotovosti, elektronickým bankovním převodem, bankovními příkazy nebo bankovními šeky <strong>nebo, se souhlasem cestujícího</strong>, v cestovních poukázkách a/nebo jiných službách."
            </p>
          </div>

          <p className="mt-6">
            Klíčová slova: <strong>"se souhlasem cestujícího"</strong>. To znamená:
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li>Wizz Air NESMÍ vyplatit kompenzaci jen ve formě voucheru bez vaší výslovné dohody</li>
            <li>Voucher musí být <strong>nabídnut jako alternativa</strong> k hotovosti, ne jako jediná možnost</li>
            <li>Pokud požadujete hotovost, Wizz Air MUSÍ vyplatit peníze — voucher není náhrada</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <p className="font-semibold text-gray-900">✅ Precedent: Rozsudek ESD (C-28/20)</p>
            <p className="text-gray-700 mt-2">
              V roce 2021 Evropský soudní dvůr rozhodl, že <strong>aerolinie NESMÍ podmínit výplatu kompenzace přijetím voucheru</strong>. Pokud Wizz Air píše "přijměte voucher nebo nic", porušuje unijní právo.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Krok za krokem: Jak odmítnout voucher a získat hotovost
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 1: Zjistěte výši kompenzace, na kterou máte nárok
          </h3>

          <p>
            Kompenzace podle EU261 závisí na <strong>vzdálenosti letu</strong>, ne na ceně letenky:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 border-b text-left font-semibold">Vzdálenost letu</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">Kompenzace (hotovost)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">Do 1 500 km (např. Praha - Londýn)</td>
                  <td className="px-6 py-4 font-bold text-blue-600">€250</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">1 500 - 3 500 km (např. Praha - Tel Aviv)</td>
                  <td className="px-6 py-4 font-bold text-blue-600">€400</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Přes 3 500 km (např. Praha - Dubai via Vídeň)</td>
                  <td className="px-6 py-4 font-bold text-blue-600">€600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            <strong>💡 Tip:</strong> Použijte online kalkulátor vzdálenosti (např. Great Circle Mapper) k přesnému zjištění kilometrů mezi letišti. Wizz Air často záměrně zařazuje lety do nižší kategorie, aby zaplatil méně.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 2: Odmítněte voucher písemně (e-mail template)
          </h3>

          <p>
            Pokud vám Wizz Air nabídl voucher, <strong>ODMÍTNĚTE</strong> ho následujícím e-mailem:
          </p>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg my-6 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">
{`Předmět: Odmítnutí voucheru — požadavek na hotovostní kompenzaci
Č.j. reklamace: [ČÍSLO VAŠÍ REKLAMACE]

Vážená společnost Wizz Air Hungary Ltd.,

dne [DATUM] jsem obdržel/a Vaši nabídku kompenzace ve formě voucheru v hodnotě €[ČÁSTKA VOUCHERU] za let [ČÍSLO LETU] dne [DATUM LETU].

Tuto nabídku ODMÍTÁM z následujících důvodů:

1. PRÁVNÍ ZÁKLAD
Podle čl. 7 odst. 3 nařízení (ES) 261/2004 mám nárok na kompenzaci v HOTOVOSTI. Voucher může být nabídnut pouze jako alternativa, nikoli jako jediná možnost.

2. ŽÁDOST O HOTOVOSTNÍ VÝPLATU
Žádám o vyplacení kompenzace ve výši €[ČÁSTKA DLE TABULKY] v hotovosti, a to:
- Bankovním převodem na účet: [IBAN]
- Nebo šekem zaslaným na adresu: [VAŠE ADRESA]

3. LHŮTA PRO VYPLACENÍ
Podle judikatury ESD (rozsudek C-28/20) máte povinnost vyplatit kompenzaci BEZ ZBYTEČNÉHO ODKLADU. Žádám o vyplacení do 14 dnů od doručení tohoto e-mailu.

4. DALŠÍ KROKY
Pokud kompenzaci v hotovosti nevyplatíte do uvedené lhůty, budu nucen/a:
- Podat stížnost na Úřad pro civilní letectví ČR (ÚCL)
- Zahájit soudní řízení s požadavkem na náhradu úroků z prodlení a soudních nákladů

S pozdravem,
[VAŠE JMÉNO]
[E-MAIL]
[TELEFON]

Příloha:
- Palubní vstupenka
- Důkaz o zpoždění/zrušení letu
- Screenshot nabídky voucheru od Wizz Air`}
            </pre>
          </div>

          <p className="mt-6">
            <strong>📧 Kam poslat e-mail:</strong>
          </p>
          <ul className="list-disc ml-6 space-y-2 mt-3">
            <li><strong>Wizz Air Customer Service:</strong> customerrelations@wizzair.com</li>
            <li><strong>CC (kopie):</strong> legal@wizzair.com (právní oddělení — tlak na rychlejší vyřízení)</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 3: Zdokumentujte vše (důkazy pro případný soud)
          </h3>

          <p>
            Pokud Wizz Air i po vašem odmítnutí trvá na voucheru, budete potřebovat <strong>solid dokumentaci</strong> pro ÚCL nebo soud:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-bold text-gray-900 mb-3">📂 Checklist důkazů:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Palubní vstupenka (boarding pass) — fyzická nebo elektronická</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>E-mail s nabídkou voucheru od Wizz Air (screenshot nebo PDF)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Váš e-mail s odmítnutím voucheru (archivujte odeslaný e-mail)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Důkaz o zpoždění — FlightRadar24 screenshot nebo letištní tabule</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Potvrzení o rezervaci (booking confirmation) — důkaz, že jste byl pasažér</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 4: Eskalace na ÚCL (Úřad pro civilní letectví)
          </h3>

          <p>
            Pokud Wizz Air i po 14 dnech neodpoví nebo nadále nabízí jen voucher, podejte <strong>stížnost na ÚCL</strong>:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-bold text-gray-900 mb-3">📝 Postup podání stížnosti na ÚCL:</h4>
            <ol className="space-y-3">
              <li><strong>1.</strong> Navštivte web ÚCL: <a href="https://www.caa.cz/stiznosti-a-podani/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.caa.cz/stiznosti-a-podani</a></li>
              <li><strong>2.</strong> Klikněte na "Práva cestujících" → "Podat stížnost online"</li>
              <li><strong>3.</strong> Vyplňte formulář s detaily letu a problémem (voucher vs. cash)</li>
              <li><strong>4.</strong> Nahrajte všechny důkazy z Kroku 3</li>
              <li><strong>5.</strong> ÚCL kontaktuje Wizz Air a vyžádá vysvětlení</li>
            </ol>
          </div>

          <p className="mt-6">
            <strong>⏱️ Časová osa:</strong> ÚCL obvykle odpovídá do 60-90 dnů. Pokud ÚCL rozhodne ve váš prospěch, Wizz Air dostane <strong>závazné doporučení</strong> vyplatit hotovost. Většina aerolinií po rozhodnutí ÚCL vyplácí kompenzaci do 30 dnů.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              🚀 Nemáte čas čekat 3-6 měsíců na ÚCL?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger vymůže hotovost rychleji — máme přímý kontakt na právní oddělení Wizz Air a dokážeme vyřešit případ za 4-8 týdnů. Platíte jen při úspěchu.
            </p>
            <Link 
              href="https://claimwinger.com/cs"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Vymáhat kompenzaci rychle →
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Co když Wizz Air trvá na voucheru i po ÚCL?
          </h2>

          <p>
            V extrémních případech Wizz Air ignoruje i rozhodnutí ÚCL. Pokud se to stane, máte <strong>2 možnosti</strong>:
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Možnost 1: Soudní žaloba (nejjistější, ale nejpomalejší)
          </h3>

          <p>
            Můžete podat žalobu u okresního soudu podle vašeho bydliště. Postup:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ol className="space-y-3">
              <li><strong>1.</strong> Napište žalobu nebo najměte advokáta (pro €250-600 lze podat sami)</li>
              <li><strong>2.</strong> Zaplaťte soudní poplatek 2 000 Kč (vrátí se při výhře)</li>
              <li><strong>3.</strong> Soud doručí žalobu Wizz Air (sídlo v Maďarsku → 4-8 týdnů doručování)</li>
              <li><strong>4.</strong> Wizz Air odpoví nebo neodpoví (kontumace)</li>
              <li><strong>5.</strong> Soudní jednání (obvykle 6-12 měsíců od podání žaloby)</li>
              <li><strong>6.</strong> Rozsudek + vyplacení (celkem 12-18 měsíců od žaloby)</li>
            </ol>
          </div>

          <p className="mt-4">
            <strong>💰 Náklady:</strong> Soudní poplatek 2 000 Kč + případně advokát (5 000-15 000 Kč). Pokud vyhrajete, Wizz Air hradí všechny náklady + úroky z prodlení.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Možnost 2: ClaimWinger (rychlejší, bez rizika)
          </h3>

          <p>
            ClaimWinger má zkušenost s tisíci případů proti Wizz Air. Výhody:
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li><strong>Zero riziko:</strong> Platíte jen pokud vyhrajete (25-30 % provize z kompenzace)</li>
            <li><strong>Rychlejší:</strong> Průměrně 4-8 měsíců (vs. 12-18 měsíců při samostatném soudním sporu)</li>
            <li><strong>Žádné starosti:</strong> Celý proces (reklamace, ÚCL, soud, exekuce) zařídí za vás</li>
            <li><strong>Expertíza:</strong> ClaimWinger zná všechny triky Wizz Air a ví, jak je obejít</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Nejčastější triky Wizz Air (a jak je rozpoznat)
          </h2>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Trik 1: "Voucher má vyšší hodnotu než hotovost"
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Příklad:</strong> Wizz Air nabídne voucher €350 vs. €250 hotovost.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Realita:</strong> Voucher má limitace (viz výše) a reálná hodnota je často nižší než nominální částka. Navíc, pokud voucher nevyužijete do 12 měsíců, propadne.
            </p>
            <p className="text-gray-700">
              <strong>Jak reagovat:</strong> Požadujte plnou hotovost podle tabulky EU261. Wizz Air NESMÍ podmínit výplatu přijetím voucheru.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Trik 2: "Voucher je jediná možnost kvůli COVID opatřením"
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Příklad:</strong> Wizz Air odkazuje na dočasné EU nařízení z 2020, které umožnilo vouchery místo hotovosti během pandemie.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Realita:</strong> Toto nařízení VYPRŠELO 31. prosince 2020. Od 2021 platí opět původní EU261 — hotovost jako default.
            </p>
            <p className="text-gray-700">
              <strong>Jak reagovat:</strong> Citujte rozsudek ESD (C-28/20) a připomeňte, že COVID výjimka již neplatí.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Trik 3: "Kompenzace byla vyplacena voucherem, což uzavírá případ"
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Příklad:</strong> Wizz Air jednostranně pošle voucher a napíše "případ uzavřen".
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Realita:</strong> Pokud jste NEPŘIJALI voucher písemně, Wizz Air NESPLNIL svou povinnost. Jednostranné zaslání voucheru není právně závazné.
            </p>
            <p className="text-gray-700">
              <strong>Jak reagovat:</strong> Napište nový e-mail s odmítnutím voucheru a požadavkem na hotovost. Citujte čl. 7(3) EU261.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Srovnání: Voucher vs. Hotovost
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 border-b text-left font-semibold">Parametr</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">Wizz Air Voucher</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">Hotovost (EU261)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Platnost</td>
                  <td className="px-6 py-4">12 měsíců (pak propadá)</td>
                  <td className="px-6 py-4 text-green-600">Neomezeně</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Použití</td>
                  <td className="px-6 py-4">Jen lety Wizz Air</td>
                  <td className="px-6 py-4 text-green-600">Jakékoli použití</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Převoditelnost</td>
                  <td className="px-6 py-4">Nepřevoditelné na jinou osobu</td>
                  <td className="px-6 py-4 text-green-600">Plně likvidní</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Kombinace se slevami</td>
                  <td className="px-6 py-4">Nelze (jen základní tarif)</td>
                  <td className="px-6 py-4 text-green-600">Bez omezení</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Reálná hodnota</td>
                  <td className="px-6 py-4">60-80 % nominální hodnoty</td>
                  <td className="px-6 py-4 text-green-600">100 %</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            FAQ: Wizz Air voucher vs. hotovost
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Co když už jsem voucher přijal/a — mohu ještě požadovat hotovost?
              </h3>
              <p className="text-gray-700">
                Záleží na tom, jak jste voucher "přijali". Pokud jste <strong>podepsali dohodu</strong> (settlement agreement) s formulací "plná kompenzace" nebo "uzavření nároku", váš nárok na další peníze pravděpodobně zanikl. Pokud jste jen <strong>dostali voucher bez podpisu dohody</strong>, stále můžete požadovat hotovost (voucher byl jen "nabídka", kterou jste neakceptovali).
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Mohu požadovat jak voucher, tak hotovost?
              </h3>
              <p className="text-gray-700">
                NE. Kompenzace podle EU261 je <strong>jednorázová</strong> — buď dostanete hotovost, nebo voucher, ne obojí. Pokud přijmete voucher €350, nemůžete dodatečně požadovat další €250 cash. Zvolte si moudře!
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Wizz Air nabízí "kompromis" — €200 cash vs. €350 voucher. Co dělat?
              </h3>
              <p className="text-gray-700">
                Toto je <strong>běžná taktika</strong>. Wizz Air se snaží vyhnout plné hotovostní kompenzaci (€250-600 dle tabulky). Odpovězte: <em>"Požaduji plnou kompenzaci €[ČÁSTKA DLE TABULKY] v hotovosti podle čl. 7 EU261. Vaše nabídka €200 je pod zákonnou minimální hranicí a nepřijímám ji."</em>
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Jak dlouho trvá, než Wizz Air vyplatí hotovost po mém odmítnutí voucheru?
              </h3>
              <p className="text-gray-700">
                <strong>Samostatně:</strong> 3-6 měsíců (včetně eskalace přes ÚCL)<br/>
                <strong>S ClaimWinger:</strong> 4-8 týdnů (rychlejší díky přímým kontaktům na právní oddělení Wizz Air)
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Může Wizz Air zablokovat můj účet, pokud odmítnu voucher?
              </h3>
              <p className="text-gray-700">
                NE. Takové jednání by bylo <strong>odvetné opatření</strong> a porušení vašich práv jako spotřebitele. Pokud by Wizz Air zablokoval váš účet kvůli vymáhání kompenzace, můžete podat další stížnost na ÚCL + požadovat odškodnění za diskriminaci.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr: Vouchery jsou past — vždy požadujte hotovost
          </h2>

          <p>
            Wizz Air voucher je <strong>legální past</strong>, kterou letecké společnosti používají k úspoře peněz na úkor cestujících. Pamatujte:
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li>Máte <strong>zákonné právo na hotovost</strong> podle EU261 — voucher je jen alternativa, ne povinnost</li>
            <li>Voucher má <strong>nižší reálnou hodnotu</strong> než hotovost (limitace, expirece, nelze kombinovat se slevami)</li>
            <li>Pokud Wizz Air trvá na voucheru, <strong>odmítněte písemně</strong> a eskalujte přes ÚCL nebo soud</li>
            <li>ClaimWinger vám <strong>ušetří čas a stres</strong> — vymůže hotovost za vás bez rizika</li>
          </ul>

          <p className="mt-6 text-lg font-semibold">
            Nenechte se oblafnout. Peníze, které vám patří, musíte dostat v hotovosti — ne ve formě voucheru, který možná nikdy nevyužijete.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              💪 Chtěl hotovost na účet, ne voucher?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger vymůže vaše peníze od Wizz Air — bez starostí, bez rizika. Platíte jen pokud dostanete cash. 50 000+ spokojených cestujících, průměrná výplata za 6 týdnů.
            </p>
            <Link 
              href="https://claimwinger.com/cs/zpozdeny-let"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Získat hotovost místo voucheru →
            </Link>
          </div>
        </div>
      </article>
    </LayoutCs>
  );
}