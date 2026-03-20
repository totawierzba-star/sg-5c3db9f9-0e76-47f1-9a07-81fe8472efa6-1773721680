import { Locale } from "./i18n";

export interface Translations {
  common: {
    siteName: string;
    siteDescription: string;
    readMore: string;
    learnMore: string;
    backToHome: string;
    articles: string;
    author: string;
  };
  nav: {
    home: string;
    compensation: string;
    businessCompensation: string; // kept for compatibility
    yourRights: string; // kept for compatibility
    cancelledFlight: string;
    canceledFlight: string; // kept for compatibility
    delayedFlight: string;
    businessTicket: string;
    ticketRights: string; // kept for compatibility
    employerCompensation: string;
    employer: string; // kept for compatibility
    articles: string;
    about: string;
    checkClaim: string;
  };
  cta: {
    checkCompensation: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta1: string;
      cta2: string;
    };
    intro: {
      title: string;
      description: string;
    };
    features: {
      title: string;
      feature1: {
        title: string;
        description: string;
      };
      feature2: {
        title: string;
        description: string;
      };
      feature3: {
        title: string;
        description: string;
      };
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
    madeWith: string;
  };
}

export const translations: Record<Locale, Translations> = {
  pl: {
    common: {
      siteName: "BiznesLot.info",
      siteDescription: "Portal o prawach pasażerów lotniczych w podróżach służbowych",
      readMore: "Czytaj więcej",
      learnMore: "Dowiedz się więcej",
      backToHome: "Powrót do strony głównej",
      articles: "Artykuły",
      author: "O autorze",
    },
    nav: {
      home: "Strona główna",
      compensation: "Odszkodowanie",
      businessCompensation: "Odszkodowanie dla firm",
      yourRights: "Twoje prawa",
      cancelledFlight: "Anulowany lot",
      canceledFlight: "Anulowany lot",
      delayedFlight: "Opóźniony lot",
      businessTicket: "Bilet firmowy",
      ticketRights: "Prawa biletowe",
      employerCompensation: "Pracodawca", // Shortened from "Pracodawca a odszkodowanie" for nav fit
      employer: "Pracodawca",
      articles: "Artykuły",
      about: "O autorze",
      checkClaim: "Sprawdź odszkodowanie"
    },
    cta: {
      checkCompensation: "Sprawdź odszkodowanie",
    },
    home: {
      hero: {
        title: "Prawa pasażera w podróżach służbowych",
        subtitle: "Kompletny przewodnik po odszkodowaniach lotniczych dla pracowników i firm",
        cta1: "Sprawdź odszkodowanie",
        cta2: "Dowiedz się więcej"
      },
      intro: {
        title: "Dlaczego warto znać swoje prawa?",
        description: "Podróże służbowe to nie tylko wyzwania logistyczne, ale także prawne. Poznaj swoje uprawnienia i dowiedz się, jak skutecznie dochodzić swoich praw w przypadku problemów z lotami.",
      },
      features: {
        title: "Co znajdziesz na BiznesLot.info?",
        feature1: {
          title: "Pracodawca a odszkodowanie",
          description: "Dowiedz się, kto ma prawo do odszkodowania za lot służbowy i jak prawidłowo rozliczyć rekompensatę z pracodawcą.",
        },
        feature2: {
          title: "Anulowany lub opóźniony lot",
          description: "Poznaj swoje prawa w przypadku anulowanego lub opóźnionego lotu podczas delegacji służbowej.",
        },
        feature3: {
          title: "Bilet firmowy - Twoje prawa",
          description: "Sprawdź, jakie masz uprawnienia jako pasażer posiadający bilet wykupiony przez pracodawcę.",
        },
      },
      cta: {
        title: "Gotowy, by poznać swoje prawa?",
        description: "Zacznij od przeczytania naszego kompleksowego przewodnika po prawach pasażerów w podróżach służbowych.",
        button: "Poznaj swoje prawa",
      },
    },
    footer: {
      tagline: "Twój przewodnik po prawach pasażerów w podróżach służbowych",
      rights: "Wszelkie prawa zastrzeżone.",
      madeWith: "Stworzone z",
    },
  },
  en: {
    common: {
      siteName: "BusinessFlight.info",
      siteDescription: "Portal about passenger rights in business travel",
      readMore: "Read more",
      learnMore: "Learn more",
      backToHome: "Back to home",
      articles: "Articles",
      author: "About the author",
    },
    nav: {
      home: "Home",
      compensation: "Compensation",
      businessCompensation: "Business Compensation",
      yourRights: "Your Rights",
      cancelledFlight: "Cancelled Flight",
      canceledFlight: "Canceled Flight",
      delayedFlight: "Delayed Flight",
      businessTicket: "Business Ticket",
      ticketRights: "Ticket Rights",
      employerCompensation: "Employer & Compensation",
      employer: "Employer",
      articles: "Articles",
      about: "About",
      checkClaim: "Check Your Claim"
    },
    cta: {
      checkCompensation: "Check compensation",
    },
    home: {
      hero: {
        title: "Passenger Rights in Business Travel",
        subtitle: "Complete guide to flight compensation for employees and companies",
        cta1: "Check Compensation",
        cta2: "Learn More"
      },
      intro: {
        title: "Why should you know your rights?",
        description: "Business travel brings not only logistical challenges but also legal ones. Learn about your entitlements and how to effectively claim your rights in case of flight issues.",
      },
      features: {
        title: "What you'll find on BusinessFlight.info?",
        feature1: {
          title: "Employer & Compensation",
          description: "Learn who is entitled to compensation for a business flight and how to properly settle the reimbursement with your employer.",
        },
        feature2: {
          title: "Canceled or Delayed Flight",
          description: "Know your rights in case of a canceled or delayed flight during a business trip.",
        },
        feature3: {
          title: "Corporate Ticket Rights",
          description: "Check what entitlements you have as a passenger with a ticket purchased by your employer.",
        },
      },
      cta: {
        title: "Ready to know your rights?",
        description: "Start by reading our comprehensive guide to passenger rights in business travel.",
        button: "Know your rights",
      },
    },
    footer: {
      tagline: "Your guide to passenger rights in business travel",
      rights: "All rights reserved.",
      madeWith: "Made with",
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}