import React from 'react';
import Head from 'next/head';

const LimityKlasyBiletow = () => {
  const articleData = {
    title: "Limity klasy biletów w podróży służbowej — jak ustalić",
    description: "Jak ustalić limity klasy biletów w podróży służbowej? Sprawdź zasady dla różnych grup pracowników, dystansów i budżetów firmowych.",
    slug: "limity-klasy-biletow-podroz-sluzbowa-jak-ustalic",
    cluster: "K2",
    keyword_primary: "limity klasy biletów podróż służbowa",
    keywords_secondary: "klasa biletów delegacja, zasady biletów służbowych, economy vs business travel policy",
    reading_time: "9 min",
    internal_links: ["Travel policy — co musi zawierać regulamin firmowy", "Jak napisać politykę podróży służbowych dla firmy"],
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
        "name": "Czy pracodawca może zmusić pracownika do podróży klasą ekonomiczną?",
        "acceptedAnswer": {"@type": "Answer", "text": "Tak, pracodawca może określić klasę podróży w polityce firmowej o ile jest to uzasadnione i nie dyskryminujące. Klasa ekonomiczna jest standardem w większości firm."}
      },
      {
        "@type": "Question",
        "name": "Kto może podróżować klasą biznes w delegacji?",
        "acceptedAnswer": {"@type": "Answer", "text": "Klasą biznes mogą podróżować zazwyczaj kadra zarządzająca, pracownicy na długich trasach (>4h), oraz przy podróżach nocnych lub ważnych spotkaniach biznesowych."}
      },
      {
        "@type": "Question",
        "name": "Czy można użyć mile lotnicze w podróży służbowej?",
        "acceptedAnswer": {"@type": "Answer", "text": "Tak, można użyć mile lotnicze jeśli polityka firmy na to pozwala. Warto określić zasady ich wykorzystania i czy employee zachowuje benefity z podróży."}
      },
      {
        "@type": "Question",
        "name": "Jakie są zasady upgrade klasy biletu?",
        "acceptedAnswer": {"@type": "Answer", "text": "Upgrade może być przyznany za status w programie lojalnościowym, dodatkową opłatą pracownika, lub przy braku dostępności miejsc w klasie bazowej. Zasady muszą być określone w travel policy."}
      },
      {
        "@type": "Question",
        "name": "Co się dzieje gdy brakuje miejsc w klasie ekonomicznej?",
        "acceptedAnswer": {"@type": "Answer", "text": "Gdy brakuje miejsc w klasie ekonomicznej, pracodawca może zatwierdzić wyższą klasę lub alternatywny transport. Decyzja powinna być udokumentowana i zgodna z zasadami firmy."}
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
            Ustalanie limitów klasy biletów w podróży służbowej to kluczowy element polityki podróży 
            który wpływa zarówno na komfort pracowników jak i budżet firmy. Znalezienie odpowiedniego 
            balansu między kosztami a potrzebami biznesowymi wymaga przemyślanego podejścia. 
            W tym artykule wyjaśniamy jak ustalić zasady podróżowania różnymi klasami biletów 
            dla różnych grup pracowników i sytuacji.
          </p>
          <div className="article-highlights">
            <div className="highlight-item">✓ Praktyczne zasady dla różnych grup pracowników</div>
            <div className="highlight-item">✓ Kryteria dystansu i czasu podróży</div>
            <div className="highlight-item">✓ Wyjątki i procedury awaryjne</div>
          </div>
        </header>

        <div className="key-takeaways">
          <h3>Najważniejsze informacje</h3>
          <ul>
            <li>Klasa ekonomiczna to standard dla większości podróży służbowych</li>
            <li>Klasa biznes przysługuje głównie kadrze zarządzającej i długim trasom</li>
            <li>Zasady muszą być jasne, spójne i niedyskryminujące</li>
            <li>Wyjątki od reguł wymagają szczegółowego uzasadnienia</li>
          </ul>
        </div>

        <section className="article-section">
          <h2>Dlaczego limity klasy biletów są ważne dla firmy?</h2>
          <p>
            Ustalanie limitów klasy biletów w podróży służbowej ma fundamentalne znaczenie 
            dla efektywnego zarządzania kosztami. Jasne zasady zapewniają: kontrolę budżetu 
            podróży, przejrzystość dla pracowników, spójność traktowania, minimalizację 
            nieporozumień, oraz podstawę do rozliczeń podatkowych. Bez precyzyjnie określonych 
            limitów firma ryzykuje niekontrolowane wydatki, konflikty w zespole, oraz problemy 
            z organami podatkowymi.
          </p>
          
          <div className="callout callout--info">
            <span className="callout__icon">ℹ</span>
            <div className="callout__content">
              <strong>Ważne:</strong> Zgodnie z przepisami, koszty podróży służbowych muszą być 
              ekonomicznie uzasadnione i proporcjonalne do celów biznesowych.
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>Standardowe zasady — klasa ekonomiczna jako domyślna</h2>
          <p>
            Klasa ekonomiczna powinna być standardową opcją dla większości podróży służbowych. 
            Jest to rozwiązanie ekonomicznie uzasadnione i akceptowane w większości firm. 
            Zasady dla klasy ekonomicznej powinny obejmować: rezerwacje z wyprzedzeniem 
            (minimum 7-14 dni), preferowanie bezpośrednich połączeń, standardowe bagaż 
            podręczny i rejestrowany, oraz brak dodatkowych usług (lounge, priority boarding). 
            Taka polityka zapewnia równość i kontrolę kosztów.
          </p>
        </section>

        <section className="article-section">
          <h2>Klasa biznes — dla kogo i kiedy?</h2>
          <p>
            Klasa biznes to opcja premium która powinna być dostępna dla określonych grup 
            pracowników i w określonych sytuacjach. Standardowe kryteria to: kadra zarządzająca 
            (dyrektorzy i wyżsi), podróże powyżej 4 godzin, podróże nocne (powyżej 8 godzin), 
            ważne spotkania biznesowe wymagające świeżości, oraz podróże tuż po innych 
            delegacjach (brak czasu na regenerację). Każdy wyjątek powinien być uzasadniony 
            biznesowo i udokumentowany.
          </p>
        </section>

        <section className="article-section">
          <h2>Kryteria dystansu i czasu podróży</h2>
          
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Dystans/czas</th>
                  <th>Standardowa klasa</th>
                  <th>Klasa biznes (kryteria)</th>
                  <th>Wyjątki</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Do 500 km / 1h</td>
                  <td>Economy</td>
                  <td>Nie przysługuje</td>
                  <td>Brak</td>
                </tr>
                <tr>
                  <td>500-1500 km / 2-3h</td>
                  <td>Economy</td>
                  <td>Kadra zarządzająca</td>
                  <td>Ważne spotkanie</td>
                </tr>
                <tr>
                  <td>1500-3000 km / 3-4h</td>
                  <td>Economy</td>
                  <td>Kadra zarządzająca, seniorzy</td>
                  <td>Podróż po innej delegacji</td>
                </tr>
                <tr>
                  <td>Powyżej 3000 km / 4h+</td>
                  <td>Economy</td>
                  <td>Większość pracowników</td>
                  <td>Ważny projekt</td>
                </tr>
                <tr>
                  <td>Podróże nocne / 8h+</td>
                  <td>Economy</td>
                  <td>Wszyscy pracownicy</td>
                  <td>Brak (standardowo)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="article-section">
          <h2>Struktura pracownicza — kto może lecieć wyższą klasą?</h2>
          <p>
            Struktura pracownicza jest kluczowym czynnikiem przy ustalaniu limitów klas biletów. 
            Standardowy podział to: pracownicy (entry-level, mid-level) — klasa ekonomiczna, 
            specjaliści i seniorzy — klasa ekonomiczna z możliwością business przy długich trasach, 
            menedżerowie i team leaders — klasa biznes przy trasach powyżej 3 godzin, 
            dyrektorzy i kadra C-level — klasa biznes standardowo. 
            Ważne jest aby zasady były spójne i niedyskryminujące.
          </p>
        </section>

        <section className="article-section">
          <h2>Zasady upgrade — awanse i promocje</h2>
          <p>
            Upgrade do wyższej klasy może nastąpić w kilku sytuacjach: za pomocą statusu 
            w programie lojalnościowym pracownika, za dodatkową opłatą pracownika (jeśli polityka 
            na to pozwala), przy braku dostępności miejsc w klasie bazowej, lub jako benefit 
            za wybitne osiągnięcia. Każda sytuacja wymaga jasnych procedur i dokumentacji. 
            Warto określić czy upgrade za status jest kosztem firmy czy korzyścią pracownika.
          </p>
        </section>

        <section className="article-section">
          <h2>Mile lotnicze i programy lojalnościowe</h2>
          <p>
            Wykorzystanie mile lotniczych w podróżach służbowych wymaga jasnych zasad. 
            Opcje to: mile gromadzone na koncie firmowym i wykorzystywane do upgrade'ów, 
            mile gromadzone przez pracownika z możliwością wykorzystania, lub kombinacja obu. 
            Kluczowe pytania to: kto jest właścicielem mile, kto płaci podatki od benefitów, 
            oraz jak rozliczać podróże opłacone mile. Zasady muszą być zgodne z prawem podatkowym.
          </p>
        </section>

        <section className="article-section">
          <h2>Podróże międzynarodowe — specjalne zasady</h2>
          <p>
            Podróże międzynarodowe często wymagają innych zasad niż krajowe. 
            Dodatkowe kryteria to: strefa czasowa (różnica czasu powyżej 2 godzin), 
            charakter spotkań (negocjacje kontraktów, spotkania z kluczowymi klientami), 
            długość pobytu (powyżej 3 dni), oraz warunki lokalne (niska jakość transportu). 
            Przy podróżach międzykontynentalnych klasa biznes jest często standardem nawet 
            dla specjalistów ze względu na konieczność regeneracji.
          </p>
        </section>

        <section className="article-section">
          <h2>Sytuacje awaryjne i wyjątki</h2>
          <p>
            Każda polityka musi przewidywać sytuacje awaryjne. Standardowe wyjątki to: 
            brak miejsc w klasie bazowej (upgrade automatyczny), ważne spotkanie 
            wymagające natychmiastowej podróży (brak czasu na rezerwację ekonomiczną), 
            problemy zdrowotne pracownika (wymagane zaświadczenie lekarskie), 
            oraz podróże łączone (służbowo-prywatne) gdzie część kosztów pokrywa pracownik. 
            Każdy wyjątek wymaga dokumentacji i zatwierdzenia przez przełożonego.
          </p>
        </section>

        <section className="article-section">
          <h2>Kontrola i rozliczenia</h2>
          <p>
            Efektywna kontrola limitów klas biletów wymaga odpowiednich procedur. 
            Kluczowe elementy to: system rezerwacji z blokowaniem wyższych klas, 
            wymagane pola w formularzu podróży (uzasadnienie business class), 
            procedury zatwierdzania wyjątków, regularne raportowanie kosztów, 
            oraz audyty zgodności z polityką. Warto również wprowadzić system kar 
            za nieprzestrzeganie zasad (np. częściowy zwrot kosztów).
          </p>
        </section>

        <section className="article-section">
          <h2>Przykładowa polityka klas biletów — wzór</h2>
          
          <div className="code-block">
            <strong>Przykład regulaminu:</strong><br/>
            <br/>
            <strong>1. Klasa ekonomiczna (standard):</strong><br/>
            - Wszyscy pracownicy dla podróży do 3 godzin<br/>
            - Rezerwacje minimum 7 dni przed podróżą<br/>
            - Bezpośrednie połączenia preferowane<br/>
            <br/>
            <strong>2. Klasa biznes (uzasadniona):</strong><br/>
            - Kadra zarządzająca (poziom D+)<br/>
            - Podróże powyżej 4 godzin<br/>
            - Podróże nocne<br/>
            - Ważne spotkania biznesowe (uzasadnienie wymagane)<br/>
            <br/>
            <strong>3. Procedura wyjątków:</strong><br/>
            - Wniosek z uzasadnieniem biznesowym<br/>
            - Zatwierdzenie przez Direct Report + HR<br/>
            - Dokumentacja w systemie podróży
          </div>
        </section>

        <section className="faq-section" id="faq">
          <h2>Najczęstsze pytania</h2>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy pracodawca może zmusić pracownika do podróży klasą ekonomiczną?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Tak, pracodawca może określić klasę podróży w polityce firmowej o ile jest to uzasadnione 
                  i nie dyskryminujące. Klasa ekonomiczna jest standardem w większości firm.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Kto może podróżować klasą biznes w delegacji?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Klasą biznes mogą podróżować zazwyczaj kadra zarządzająca, pracownicy na długich trasach 
                  (&gt;4h), oraz przy podróżach nocnych lub ważnych spotkaniach biznesowych.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy można użyć mile lotnicze w podróży służbowej?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Tak, można użyć mile lotnicze jeśli polityka firmy na to pozwala. Warto określić zasady 
                  ich wykorzystania i czy employee zachowuje benefity z podróży.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Jakie są zasady upgrade klasy biletu?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Upgrade może być przyznany za status w programie lojalnościowym, dodatkową opłatą 
                  pracownika, lub przy braku dostępności miejsc w klasie bazowej. Zasady muszą być określone w travel policy.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Co się dzieje gdy brakuje miejsc w klasie ekonomicznej?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Gdy brakuje miejsc w klasie ekonomicznej, pracodawca może zatwierdzić wyższą klasę 
                  lub alternatywny transport. Decyzja powinna być udokumentowana i zgodna z zasadami firmy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="article-cta">
          <h3>Chcesz zoptymalizować politykę biletów lotniczych w firmie?</h3>
          <p>
            Skontaktuj się z nami aby uzyskać profesjonalne doradztwo w zakresie ustalania limitów 
            klas biletów i optymalizacji kosztów podróży służbowych. Dostosujemy zasady do 
            specyfiki Twojej firmy i budżetu.
          </p>
          <a href="https://claimwinger.com/pl/firmy" className="cta-button">
            Doradztwo travel policy →
          </a>
          <a href="https://claimwinger.com/pl/kontakt" className="cta-button cta-button--secondary">
            Analiza kosztów podróży →
          </a>
        </div>
      </article>
    </>
  );
};

export default LimityKlasyBiletow;
