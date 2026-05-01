import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

const updatedAt = "2 maja 2026 r.";

const sections = [
  {
    title: "1. Administrator danych",
    body: [
      "Administratorem danych osobowych przetwarzanych w zwiazku z korzystaniem z serwisu problemlot.com jest Claim Winger Sp. z o.o., KRS: 0001207694, NIP: 7011289798, REGON: 543436257, spolka z ograniczona odpowiedzialnoscia wpisana do Krajowego Rejestru Sadowego.",
      "Kontakt w sprawach prywatnosci: contact@claimwinger.com.",
    ],
  },
  {
    title: "2. Zakres przetwarzanych danych",
    body: [
      "W zaleznosci od sposobu korzystania z serwisu mozemy przetwarzac dane techniczne i eksploatacyjne, takie jak adres IP, identyfikatory online, identyfikatory plikow cookie, dane o urzadzeniu i przegladarce, adres URL odwiedzanej strony, zrodlo wejscia, parametry UTM, przyblizona lokalizacja wynikajaca z adresu IP, zdarzenia na stronie, klikniecia w linki oraz informacje o udzielonych zgodach.",
      "Jezeli uzytkownik przechodzi do formularza lub serwisu ClaimWinger, dalsze dane podawane w formularzu moga byc przetwarzane zgodnie z informacjami przekazywanymi w tym formularzu lub w serwisie ClaimWinger.",
    ],
  },
  {
    title: "3. Cele i podstawy przetwarzania",
    body: [
      "Dane przetwarzamy w celu zapewnienia dzialania serwisu, utrzymania bezpieczenstwa, prowadzenia podstawowych statystyk, mierzenia skutecznosci tresci i kampanii, obslugi klikniec afiliacyjnych oraz kierowania i rozliczania dzialan reklamowych.",
      "W zakresie niezbednym technicznie podstawą przetwarzania jest prawnie uzasadniony interes administratora polegajacy na zapewnieniu dzialania, bezpieczenstwa i rozwoju serwisu. W zakresie analityki, reklam, remarketingu, personalizacji reklam oraz podobnych technologii podstawą jest zgoda uzytkownika, ktora mozna wycofac w kazdym czasie.",
    ],
  },
  {
    title: "4. Reklama, remarketing i afiliacja",
    body: [
      "Po uzyskaniu zgody mozemy korzystac z narzedzi reklamowych, analitycznych i afiliacyjnych, w tym Google Ads, Google Analytics 4, Google Tag Manager, Microsoft Advertising, TikTok Ads, Ahrefs oraz innych podobnych platform sluzacych do pomiaru ruchu, konwersji, remarketingu, tworzenia grup odbiorcow, optymalizacji kampanii i rozliczania partnerstw afiliacyjnych.",
      "Platformy te moga laczyc informacje zebrane w serwisie z innymi informacjami posiadanymi przez siebie, jezeli uzytkownik wyrazil odpowiednie zgody lub jezeli wynika to z ustawien konta u danego dostawcy.",
      "Nie uruchamiamy tagow reklamowych i analitycznych przed udzieleniem zgody na takie dzialania. Domyslnie zgody dotyczace reklam, analityki, danych uzytkownika na potrzeby reklam oraz personalizacji reklam sa ustawione jako odmowione.",
    ],
  },
  {
    title: "5. Pliki cookie i podobne technologie",
    body: [
      "Serwis moze korzystac z plikow cookie, localStorage, pikseli, tagow, identyfikatorow online i podobnych technologii. Technologie niezbedne sluza m.in. do zapamietania wyboru jezyka, zapamietania decyzji o zgodach, utrzymania bezpieczenstwa oraz poprawnego dzialania strony.",
      "Technologie analityczne, reklamowe, remarketingowe i afiliacyjne sa stosowane po akceptacji zgody. Uzytkownik moze ograniczyc lub usunac pliki cookie w ustawieniach przegladarki, co moze wplynac na niektore funkcje serwisu.",
    ],
  },
  {
    title: "6. Odbiorcy danych",
    body: [
      "Dane moga byc przekazywane dostawcom hostingu, narzedzi analitycznych, reklamowych, marketingowych, afiliacyjnych, bezpieczenstwa, obslugi technicznej oraz podmiotom wspierajacym dzialanie serwisu.",
      "W szczegolnosci odbiorcami danych moga byc dostawcy tacy jak Google, Microsoft, TikTok, Ahrefs oraz inne podobne platformy, jezeli ich narzedzia zostana uruchomione po uzyskaniu zgody.",
    ],
  },
  {
    title: "7. Przekazywanie danych poza EOG",
    body: [
      "Niektorzy dostawcy technologii moga przetwarzac dane poza Europejskim Obszarem Gospodarczym. W takich przypadkach stosowane powinny byc odpowiednie mechanizmy ochrony danych, w szczegolnosci decyzje stwierdzajace odpowiedni stopien ochrony, standardowe klauzule umowne lub inne mechanizmy przewidziane przez przepisy o ochronie danych.",
    ],
  },
  {
    title: "8. Okres przechowywania",
    body: [
      "Dane przechowujemy przez okres niezbedny do realizacji opisanych celow, a nastepnie przez okres wymagany przepisami prawa lub potrzebny do ochrony roszczen. Dane zwiazane ze zgodami przechowujemy tak dlugo, jak jest to potrzebne do wykazania wyboru uzytkownika lub do czasu zmiany albo wycofania zgody.",
      "Okresy przechowywania danych przez zewnetrzne platformy, takie jak Google, Microsoft, TikTok lub Ahrefs, wynikaja z ich ustawien, polityk oraz konfiguracji narzedzi.",
    ],
  },
  {
    title: "9. Prawa uzytkownika",
    body: [
      "Uzytkownik ma prawo dostepu do danych, sprostowania danych, usuniecia danych, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz wycofania zgody w zakresie, w jakim przetwarzanie odbywa sie na podstawie zgody.",
      "Uzytkownik ma takze prawo wniesienia skargi do Prezesa Urzedu Ochrony Danych Osobowych. W celu realizacji praw mozna skontaktowac sie pod adresem contact@claimwinger.com.",
    ],
  },
  {
    title: "10. Zmiany polityki",
    body: [
      "Polityka prywatnosci moze byc aktualizowana w zwiazku ze zmianami serwisu, technologii, dostawcow lub przepisow. Aktualna wersja jest publikowana na tej stronie.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <SEO
        title="Polityka prywatnosci - ProblemLot.com"
        description="Polityka prywatnosci serwisu ProblemLot.com, w tym informacje o cookies, reklamach, remarketingu, afiliacji i Consent Mode."
        url="https://problemlot.com/polityka-prywatnosci"
        canonicalUrl="https://problemlot.com/polityka-prywatnosci"
      />

      <main className="bg-white py-12 text-slate-900 dark:bg-slate-950 dark:text-slate-100 md:py-16">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
            ProblemLot.com
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Polityka prywatnosci</h1>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Ostatnia aktualizacja: {updatedAt}</p>

          <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-5 text-sm leading-6 text-blue-950 dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-blue-100">
            Ta strona opisuje, jak przetwarzamy dane w serwisie problemlot.com, w tym dane wykorzystywane
            do analityki, pomiaru reklam, remarketingu i dzialan afiliacyjnych. Tekst ma charakter
            informacyjny i powinien byc okresowo weryfikowany pod katem aktualnej konfiguracji narzedzi.
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
    </Layout>
  );
}
