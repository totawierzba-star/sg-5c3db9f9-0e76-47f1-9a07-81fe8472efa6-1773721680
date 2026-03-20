import React from 'react';
import Head from 'next/head';

const TravelPolicyRegulaminFirmowy = () => {
  const articleData = {
    title: "Travel policy — co musi zawierać regulamin firmowy",
    description: "Kompletna lista elementów travel policy dla firm. Sprawdź jakie klauzule, zasady i procedury musi zawierać regulamin podróży służbowych.",
    slug: "travel-policy-regulamin-firmowy-elementy",
    cluster: "K2",
    keyword_primary: "travel policy regulamin firmowy",
    keywords_secondary: "elementy travel policy, regulamin podróży służbowych wzór, klauzule polityki podróży",
    reading_time: "10 min",
    internal_links: ["Jak napisać politykę podróży służbowych dla firmy", "Limity klasy biletów w podróży służbowej — jak ustalić"],
    cta_url: "https://claimwinger.com/pl/firmy"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.description,
    "author": {"@type": "Organization", "name": "bizneslot.info"},
    "publisher": {"@type": "Organization", "name": "bizneslot.info"},
    "datePublished": "2025-03-20",
    "inLanguage": "pl-PL"
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy travel policy musi być w formie pisemnej?",
        "acceptedAnswer": {"@type": "Answer", "text": "Tak, travel policy powinna być w formie pisemnej i podpisana przez pracodawcę. Jest to podstawowy dokument prawny który reguluje prawa i obowiązki stron."}
      },
      {
        "@type": "Question",
        "name": "Jakie są najważniejsze sekcje travel policy?",
        "acceptedAnswer": {"@type": "Answer", "text": "Najważniejsze sekcje travel policy to: definicje, procedury zatwierdzania, zasady transportu, zakwaterowania, diet, rozliczeń, ubezpieczenia i odpowiedzialności."}
      },
      {
        "@type": "Question",
        "name": "Czy travel policy może być różna dla różnych pracowników?",
        "acceptedAnswer": {"@type": "Answer", "text": "Tak, travel policy może zawierać różne zasady dla różnych grup pracowników (np. kadra zarządzająca vs pracownicy), ale różnice muszą być uzasadnione i nie dyskryminujące."}
      },
      {
        "@type": "Question",
        "name": "Co się stanie jeśli pracownik naruszy travel policy?",
        "acceptedAnswer": {"@type": "Answer", "text": "Naruszenie travel policy może skutkować odmową zwrotu kosztów, karą porządkową lub w skrajnych przypadkach rozwiązaniem umowy o pracę. Konsekwencje muszą być określone w regulaminie."}
      },
      {
        "@type": "Question",
        "name": "Jak często należy aktualizować travel policy?",
        "acceptedAnswer": {"@type": "Answer", "text": "Travel policy należy aktualizować co najmniej raz w roku oraz przy każdej zmianie przepisów podatkowych, kursów walut lub zasad działania firmy."}
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{articleData.title}</title>
        <meta name="description" content={articleData.description} />
        <meta name="keywords" content={`${articleData.keyword_primary}, ${articleData.keywords_secondary}`} />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      </Head>

      <article className="article">
        <header className="article-header">
          <div className="article-meta">
            <span className="category">Travel Policy</span>
            <span className="reading-time">{articleData.reading_time} czytania</span>
          </div>
          <h1>{articleData.title}</h1>
          <p className="lead">
            Dobrze skonstruowany regulamin podróży służbowych to klucz do efektywnego zarządzania 
            delegacjami i kontroli kosztów. Travel policy musi być kompletna, jasna i zgodna 
            z przepisami prawa. W tym artykule przedstawiamy szczegółową listę wszystkich elementów 
            które musi zawierać profesjonalny regulamin podróży służbowych.
          </p>
          <div className="article-highlights">
            <div className="highlight-item">✓ Kompletna lista 12 kluczowych sekcji</div>
            <div className="highlight-item">✓ Wzory klauzul i najlepsze praktyki</div>
            <div className="highlight-item">✓ Zgodność z przepisami Kodeksu pracy</div>
          </div>
        </header>

        <div className="key-takeaways">
          <h3>Najważniejsze informacje</h3>
          <ul>
            <li>Travel policy musi zawierać 12 kluczowych sekcji dla pełnej zgodności prawnej</li>
            <li>Każda sekcja wymaga precyzyjnych definicji i jasnych procedur</li>
            <li>Regulamin musi być dostępny dla wszystkich pracowników i regularnie aktualizowany</li>
            <li>Naruszenie zasad musi mieć określone konsekwencje</li>
          </ul>
        </div>

        <section className="article-section">
          <h2>Struktura dokumentu — 12 kluczowych sekcji travel policy</h2>
          <p>
            Profesjonalna travel policy powinna mieć logiczną strukturę i zawierać 12 kluczowych sekcji. 
            Każda sekcja odgrywa istotną rolę w zapewnieniu przejrzystości i zgodności z prawem. 
            Prawidłowo skonstruowany dokument minimalizuje ryzyko sporów, ułatwia rozliczenia 
            i zapewnia jednolite traktowanie wszystkich pracowników. Poniżej przedstawiamy 
            szczegółową analizę każdej sekcji z przykładami klauzul.
          </p>
          
          <div className="callout callout--info">
            <span className="callout__icon">ℹ</span>
            <div className="callout__content">
              <strong>Ważne:</strong> Travel policy powinna być dokumentem żywym — regularnie aktualizowanym 
              i dostosowywanym do zmieniających się potrzeb firmy i przepisów prawa.
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>Sekcja 1: Definicje i zakres stosowania</h2>
          <p>
            Pierwsza sekcja musi precyzyjnie definiować kluczowe pojęcia i określać kto podlega regulaminowi. 
            Niezbędne definicje to: podróż służbowa, delegacja, delegacja krajowa/zagraniczna, 
            dieta, zaliczka, koszty bezpośrednie, oraz koszty pośrednie. Zakres stosowania powinien 
            określać czy regulamin dotyczy wszystkich pracowników czy tylko wybranych grup, 
            czy obejmuje stażystów i kontraktorów, oraz jakie są wyjątki od stosowania zasad.
          </p>
          
          <div className="code-block">
            <strong>Przykład klauzuli:</strong><br/>
            "Podróżą służbową rozumie się wykonywanie zadań służbowych poza stałym miejscem pracy 
            na polecenie pracodawcy, z potwierdzeniem w formie pisemnej lub elektronicznej."
          </div>
        </section>

        <section className="article-section">
          <h2>Sekcja 2: Procedury zatwierdzania podróży</h2>
          <p>
            Ta sekcja określa krok po kroku jak pracownik uzyskuje zgodę na delegację. Musi zawierać: 
            hierarchię zatwierdzających (kto i do jakiej kwoty może zatwierdzać), wymagane terminy 
            (np. 7 dni przed podróżą krajową, 14 dni przed zagraniczną), formy zgody, 
            wymagane dokumenty (wniosek o delegację, cel podróży, szacunkowy budżet), 
            oraz procedury awaryjne dla last minute. Warto również określić systemy elektroniczne 
            do zarządzania podróżami jeśli firma je posiada.
          </p>
        </section>

        <section className="article-section">
          <h2>Sekcja 3: Zasady transportu</h2>
          <p>
            Zasady transportu to jedna z najważniejszych sekcji travel policy. Musi określać: 
            preferowane środki transportu dla różnych dystansów, klasy podróży, preferowanych przewoźników, 
            procedury rezerwacji, zasady podróży prywatnych (blended travel), oraz zasady 
            transportu lokalnego na miejscu. Kluczowe jest ustalenie jasnych kryteriów wyboru 
            środka transportu i limity kosztów dla każdej opcji.
          </p>
        </section>

        <section className="article-section">
          <h2>Sekcja 4: Zakwaterowanie i wyżywienie</h2>
          <p>
            Sekcja zakwaterowania musi określać standardy i limity kosztów noclegów. Powinna zawierać: 
            standardy hoteli (gwiazdki, lokalizacja, udogodnienia), limity kosztów dla różnych miast, 
            procedury rezerwacji, wymagania co do wyżywienia (śniadanie w cenie, diety), 
            oraz zasady zakwaterowania u znajomych lub rodzin. Warto również określić zasady 
            wyboru apartamentów dla dłuższych delegacji.
          </p>
        </section>

        <section className="article-section">
          <h2>Sekcja 5: Diety i wydatki dzienne</h2>
          <p>
            Ta sekcja musi być zgodna z przepisami podatkowymi i określać wysokość diet. 
            Powinna zawierać: wysokość diet dla podróży krajowych i zagranicznych, zasady 
            wypłacania diet (ryczałt vs na podstawie rachunków), limity na wydatki dzienne 
            (posiłki, transport lokalny), zasady wydatków reprezentacyjnych, oraz procedury 
            rozliczania wydatków ponadlimitowych. Diety zagraniczne powinny być aktualizowane 
            zgodnie z komunikatami Ministra Finansów.
          </p>
        </section>

        <section className="article-section">
          <h2>Sekcja 6: Zaliczki i płatności</h2>
          <p>
            Sekcja zaliczek określa procedury finansowania podróży. Musi zawierać: zasady 
            przyznawania zaliczek, maksymalne kwoty zaliczek, terminy wypłaty, procedury 
            zwrotu zaliczek, zasady płatności kartą firmową, oraz procedury awaryjnych 
            wydatków. Warto również określić kwestie walutowe przy podróżach zagranicznych 
            i kursy przeliczeniowe.
          </p>
        </section>

        <section className="article-section">
          <h2>Sekcja 7: Rozliczenia i dokumentacja</h2>
          <p>
            Ta sekcja jest kluczowa dla celów podatkowych i musi być bardzo precyzyjna. 
            Powinna zawierać: terminy składania rozliczeń, wymagane dokumenty (paragony, faktury, 
            karty pokładowe), formularze rozliczeniowe, procedury zatwierdzania rozliczeń, 
            zasady archiwizacji dokumentów, oraz konsekwencje nieterminowych rozliczeń. 
            Warto również określić systemy elektroniczne do rozliczania jeśli są stosowane.
          </p>
        </section>

        <section className="article-section">
          <h2>Sekcja 8: Ubezpieczenie podróży</h2>
          <p>
            Sekcja ubezpieczenia musi określać zakres ochrony pracowników. Powinna zawierać: 
            rodzaj i zakres ubezpieczenia, procedury zgłaszania szkód, kontakty do ubezpieczyciela, 
            zasady korzystania z assistance, oraz informacje o wyłączeniach z ochrony. 
            Warto również określić ubezpieczenie dodatkowe (np. straty biznesowe, odwołanie podróży).
          </p>
        </section>

        <section className="article-section">
          <h2>Sekcja 9: Bezpieczeństwo i duty of care</h2>
          <p>
            Ta sekcja dotyczy obowiązków pracodawcy w zakresie bezpieczeństwa. Musi zawierać: 
            procedury kontaktu z pracownikiem w podróży, zasady działania w sytuacjach kryzysowych, 
            informacje o ryzykownych destynacjach, procedury ewakuacji, oraz kontakty alarmowe. 
            Jest to szczególnie ważne przy podróżach zagranicznych do niestabilnych regionów.
          </p>
        </section>

        <section className="article-section">
          <h2>Sekcja 10: Urządzenia elektroniczne i dane firmowe</h2>
          <p>
            W dobie cyfryzacji ta sekcja staje się coraz ważniejsza. Powinna określać: 
            zasady korzystania z urządzeń firmowych w podróży, zasady bezpieczeństwa danych, 
            procedury w przypadku kradzieży lub zagubienia urządzenia, zasady korzystania 
            z publicznych sieci WiFi, oraz zakazy dotyczące instalowania oprogramowania.
          </p>
        </section>

        <section className="article-section">
          <h2>Sekcja 11: Przedłużanie podróży i podróże łączone</h2>
          <p>
            Ta sekcja reguluje sytuacje szczególne. Musi zawierać: zasady przedłużania podróży 
            służbowych o czas prywatny, procedury zatwierdzania podróży łączonych (służbowych 
            z prywatnymi), zasady rozliczania kosztów w takich przypadkach, oraz zasady 
            korzystania z benefitów (mile lotnicze, programy lojalnościowe). Kluczowe jest 
            jasne oddzielenie kosztów firmowych od prywatnych.
          </p>
        </section>

        <section className="article-section">
          <h2>Sekcja 12: Odpowiedzialność i konsekwencje</h2>
          <p>
            Ostatnia sekcja musi określać konsekwencje naruszenia regulaminu. Powinna zawierać: 
            katalog naruszeń, przewidziane kary (upomnienie, kara porządkowa, odmowa zwrotu kosztów), 
            procedury postępowania dyscyplinarnego, oraz prawo do odwołania od decyzji. 
            Konsekwencje muszą być proporcjonalne i zgodne z Kodeksem pracy.
          </p>
        </section>

        <section className="article-section">
          <h2>Wzór kompletnej travel policy — checklist</h2>
          
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Sekcja</th>
                  <th>Status</th>
                  <th>Kluczowe elementy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Definicje i zakres</td>
                  <td>❓</td>
                  <td>Pojęcia, kto podlega, wyjątki</td>
                </tr>
                <tr>
                  <td>Procedury zatwierdzania</td>
                  <td>❓</td>
                  <td>Hierarchia, terminy, formularze</td>
                </tr>
                <tr>
                  <td>Zasady transportu</td>
                  <td>❓</td>
                  <td>Środki, klasy, przewoźnicy</td>
                </tr>
                <tr>
                  <td>Zakwaterowanie</td>
                  <td>❓</td>
                  <td>Standardy, limity, rezerwacje</td>
                </tr>
                <tr>
                  <td>Diety i wydatki</td>
                  <td>❓</td>
                  <td>Wysokość, wypłata, limity</td>
                </tr>
                <tr>
                  <td>Zaliczki i płatności</td>
                  <td>❓</td>
                  <td>Przyznawanie, zwrot, waluty</td>
                </tr>
                <tr>
                  <td>Rozliczenia</td>
                  <td>❓</td>
                  <td>Terminy, dokumenty, archiwizacja</td>
                </tr>
                <tr>
                  <td>Ubezpieczenie</td>
                  <td>❓</td>
                  <td>Zakres, szkody, assistance</td>
                </tr>
                <tr>
                  <td>Bezpieczeństwo</td>
                  <td>❓</td>
                  <td>Kontakt, kryzysy, ewakuacja</td>
                </tr>
                <tr>
                  <td>Urządzenia elektroniczne</td>
                  <td>❓</td>
                  <td>Bezpieczeństwo, dane, kradzież</td>
                </tr>
                <tr>
                  <td>Przedłużanie podróży</td>
                  <td>❓</td>
                  <td>Czas prywatny, podróże łączone</td>
                </tr>
                <tr>
                  <td>Odpowiedzialność</td>
                  <td>❓</td>
                  <td>Naruszenia, kary, procedury</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <h2>Najczęstsze pytania</h2>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy travel policy musi być w formie pisemnej?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Tak, travel policy powinna być w formie pisemnej i podpisana przez pracodawcę. 
                  Jest to podstawowy dokument prawny który reguluje prawa i obowiązki stron.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Jakie są najważniejsze sekcje travel policy?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Najważniejsze sekcje travel policy to: definicje, procedury zatwierdzania, zasady transportu, 
                  zakwaterowania, diet, rozliczeń, ubezpieczenia i odpowiedzialności.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy travel policy może być różna dla różnych pracowników?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Tak, travel policy może zawierać różne zasady dla różnych grup pracowników 
                  (np. kadra zarządzająca vs pracownicy), ale różnice muszą być uzasadnione i nie dyskryminujące.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Co się stanie jeśli pracownik naruszy travel policy?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Naruszenie travel policy może skutkować odmową zwrotu kosztów, karą porządkową 
                  lub w skrajnych przypadkach rozwiązaniem umowy o pracę. Konsekwencje muszą być określone w regulaminie.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Jak często należy aktualizować travel policy?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Travel policy należy aktualizować co najmniej raz w roku oraz przy każdej zmianie 
                  przepisów podatkowych, kursów walut lub zasad działania firmy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="article-cta">
          <h3>Potrzebujesz profesjonalnej travel policy dla Twojej firmy?</h3>
          <p>
            Skontaktuj się z nami aby uzyskać kompleksowe doradztwo w zakresie tworzenia 
            i optymalizacji polityki podróży służbowych. Dostosujemy regulamin do specyfiki 
            Twojej branży i potrzeb pracowników.
          </p>
          <a href="https://claimwinger.com/pl/firmy" className="cta-button">
            Doradztwo travel policy →
          </a>
          <a href="https://claimwinger.com/pl/kontakt" className="cta-button cta-button--secondary">
            Wycena indywidualna →
          </a>
        </div>
      </article>
    </>
  );
};

export default TravelPolicyRegulaminFirmowy;
