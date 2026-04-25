import {
  buildClaimWingerBgLink,
  type ClaimWingerBgDestination,
} from "@/lib/claimwingerLinksBg";
import type { BlogArticleBg, BlogArticleBgCtaPath } from "@/lib/blogArticlesBg";

export type BgArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: "nonEu";
};

export type BgArticleFaq = {
  question: string;
  answer: string;
};

export type BgContextualLink = {
  label: string;
  href: string;
  placement: string;
  description: string;
};

export type BgArticleContent = {
  title: string;
  seoTitle: string;
  description: string;
  intro: string[];
  quickAnswer: string[];
  keyPoints: string[];
  sections: BgArticleSection[];
  faqs: BgArticleFaq[];
  ctaDestination: ClaimWingerBgDestination;
  ctaPath: BlogArticleBgCtaPath;
  ctaAnchor: string;
  contextualLinks: BgContextualLink[];
};

const delayedAnchor = "английския формуляр за закъснял полет";
const cancelledAnchor = "английския формуляр за отменен полет";

function getDestination(path: BlogArticleBgCtaPath): ClaimWingerBgDestination {
  return path === "/cancelled-flight" ? "cancelled" : "delayed";
}

function getDisruptionLabel(article: BlogArticleBg) {
  if (article.ctaPath === "/cancelled-flight" || article.title.toLowerCase().includes("отмен")) {
    return "отмяна";
  }

  if (article.title.toLowerCase().includes("овърбукинг") || article.title.toLowerCase().includes("борда")) {
    return "отказан бординг";
  }

  return "закъснение";
}

function getSubject(article: BlogArticleBg) {
  return article.routeName || article.airlineName || article.airportName || article.focus;
}

function getAmountSentence(article: BlogArticleBg) {
  const subject = getSubject(article);

  if (article.routeName) {
    return `При маршрут ${subject} сумата зависи не от цената на билета, а от разстоянието, крайната закъсняла дестинация и това дали полетът попада в EU261 или UK261.`;
  }

  if (article.airlineName) {
    return `При ${subject} най-важно е да се установи реалният оператор, посоката на полета и дали проблемът е под контрола на авиокомпанията.`;
  }

  return "Сумата се определя по фиксирани прагове: 250, 400 или 600 евро според разстоянието и приложимата правна рамка.";
}

function buildIntro(article: BlogArticleBg) {
  const disruption = getDisruptionLabel(article);
  const first =
    `Тази статия разглежда темата „${article.title}“ от гледната точка на български пътник, който иска бързо да разбере дали има реален шанс за обезщетение. Фокусът е върху ${article.focus}. В практиката по ЕО 261/2004 и UK261 не е достатъчно да се каже само, че полетът е имал проблем. Трябва да се види откъде е излетял самолетът, коя авиокомпания е била оперативен превозвач, колко е било закъснението при крайната дестинация и дали причината е била в контрола на превозвача.`;
  const second =
    `За българските пътници това е особено важно при полети от София, Варна и Бургас, както и при маршрути към Лондон, Германия, Испания, Турция, Дубай или Израел. ${getAmountSentence(article)} Ако имате документи за резервацията, бордна карта, съобщение за ${disruption} или снимка на таблото на летището, шансът за точна проверка е по-висок. Текстът по-долу обяснява правилата достъпно, но юридически прецизно, като се позовава на логиката, използвана от лицензиран правен съветник на ClaimWinger.`;

  if (article.localAuthority) {
    return [
      first,
      `${second} Когато авиокомпанията отказва или не отговаря, местният контекст също е важен: в България релевантни са ГД ГВА и, в част от потребителските казуси, КЗП.`,
    ];
  }

  if (article.limitation) {
    return [
      first,
      `${second} При стари полети трябва да се мисли и за давностния срок; за България често се работи с 5-годишна рамка по Закона за задълженията и договорите.`,
    ];
  }

  return [first, second];
}

function buildQuickAnswer(article: BlogArticleBg) {
  const answers = [
    `Краткият отговор: при ${getSubject(article)} трябва първо да проверите дали полетът е в обхвата на EU261 или UK261.`,
    "Парично обезщетение обикновено се разглежда при поне 3 часа закъснение при крайната дестинация, компенсируема отмяна или отказан бординг по вина на авиокомпанията.",
    "Възможните суми са 250, 400 или 600 евро на пътник; те не зависят от цената на билета.",
  ];

  if (article.nonEuCarrier) {
    answers.push("При неевропейски превозвач посоката е решаваща: полет от европейско летище може да е покрит, но обратен полет от Истанбул, Дубай или Доха често не е.");
  }

  if (article.uk261) {
    answers.push("При полет от Великобритания след Brexit обикновено се гледа UK261, а не класическият EU261.");
  }

  if (article.voucher) {
    answers.push("Ваучерът не трябва да замества автоматично парично обезщетение или възстановяване, ако законът ви дава право на пари.");
  }

  return answers.slice(0, 4);
}

function buildKeyPoints(article: BlogArticleBg) {
  const points = [
    "Пазете резервация, бордна карта, имейли от авиокомпанията и доказателства за реалния час на пристигане.",
    "Гледа се крайната дестинация, особено ако пътуването е било на една резервация с връзка.",
    "Храна, хотел и транспорт са отделни права от фиксираното обезщетение 250 / 400 / 600 евро.",
    "ClaimWinger може да провери случая в no-win-no-fee модел чрез английския формуляр, докато няма отделна българска версия.",
  ];

  if (article.airlineName) {
    points[1] = `При ${article.airlineName} проверете кой е бил оперативният превозвач, не само търговското име върху билета.`;
  }

  if (article.routeName) {
    points[1] = `При маршрут ${article.routeName} посоката, превозвачът и крайната закъсняла дестинация са решаващи.`;
  }

  if (article.limitation) {
    points[2] = "В България често се прилага 5-годишен давностен срок, но е разумно да действате възможно най-рано.";
  }

  if (article.uk261) {
    points[2] = "Полетите от UK след Brexit обикновено се оценяват по UK261; сумите са сходни, но правната рамка е различна.";
  }

  return points;
}

function buildNonEuSection(article: BlogArticleBg): BgArticleSection {
  return {
    title: "Задължително правило за неевропейски превозвачи",
    paragraphs: [
      `При ${article.airlineName || article.routeName || "неевропейски превозвач"} най-честата грешка е да се мисли, че една и съща авиокомпания води до един и същ резултат във всички посоки. Това не е така. EU261 защитава много силно полетите, които излитат от европейско летище, но е по-ограничен при полети от трети държави към Европа, когато операторът не е европейски.`,
      "Затова полет София към Истанбул, Дубай, Доха или Белград може да бъде напълно различен от обратния полет към България. Ако обратният полет се изпълнява от Turkish Airlines, flydubai, Qatar Airways, El Al или Air Serbia, често трябва да се търси друга правна логика, а не автоматично EU261.",
    ],
    table: "nonEu",
  };
}

function buildCoreSections(article: BlogArticleBg): BgArticleSection[] {
  const sections: BgArticleSection[] = [
    {
      title: "Кога този случай попада в EU261 или UK261?",
      paragraphs: [
        `Първата проверка при ${getSubject(article)} е правният обхват. Ако полетът излита от летище в ЕС, Великобритания, Швейцария или ЕИП, правилата обикновено могат да защитят пътника независимо от това дали авиокомпанията е европейска. Ако полетът пристига в Европа от трета държава, тогава решаващо става дали реалният превозвач е европейски или попада в сходна рамка.`,
        "При българските летища правилото е сравнително ясно: София, Варна и Бургас са в ЕС, следователно излитащите от тях полети попадат в силния обхват на ЕО 261. При полети от Лондон след Brexit обаче се работи с UK261, а при обратни полети от Турция, Дубай или Доха с неевропейски превозвач EU261 често не е приложим.",
      ],
      bullets: [
        "Полет от София, Варна или Бургас: EU261 обикновено може да се прилага.",
        "Полет от Лондон към България: след Brexit обикновено се гледа UK261.",
        "Полет от Истанбул или Дубай към България с non-EU превозвач: EU261 често не е приложим.",
      ],
    },
    {
      title: "Как се изчисляват 250, 400 или 600 евро?",
      paragraphs: [
        "Размерът на обезщетението не зависи от това дали билетът е бил евтин, купен през OTA или част от пакетна почивка. ЕО 261 използва фиксирани суми според разстоянието: 250 евро за къси маршрути, 400 евро за средни маршрути и 600 евро за дълги маршрути над 3 500 km.",
        `При ${getSubject(article)} винаги трябва да се съчетаят два въпроса: колко е разстоянието и дали проблемът достига законовия праг. При закъснение това обикновено означава поне 3 часа при крайната дестинация. При отмяна се гледа срокът на уведомление и качеството на алтернативния полет.`,
      ],
      bullets: [
        "До 1 500 km: 250 евро.",
        "1 500-3 500 km: 400 евро.",
        "Над 3 500 km: 600 евро.",
      ],
    },
    {
      title: "Какви доказателства са най-важни?",
      paragraphs: [
        "Най-силните претенции са добре документирани. Запазете потвърждение на резервацията, бордна карта, съобщения за промяна, снимки на таблото и всяка писмена причина, дадена от авиокомпанията. Ако сте платили хотел, храна или транспорт заради чакане, пазете и разписките.",
        "Не е фатално, ако не разполагате с всеки документ. Но колкото по-точно може да се възстанови хронологията на полета, толкова по-лесно се проверява дали авиокомпанията е отговорна и дали сумата трябва да бъде 250, 400 или 600 евро.",
      ],
      bullets: [
        "PNR или номер на резервация.",
        "Номер на полет и дата.",
        "Доказателство за реалния час на пристигане.",
        "Имейли, SMS-и или съобщения от приложението на авиокомпанията.",
      ],
    },
    {
      title: "Как да действате стъпка по стъпка?",
      paragraphs: [
        "Първо подредете фактите: маршрут, дата, авиокомпания, причина за проблема и реален час на пристигане. Второ, проверете дали случаят е в обхвата на EU261 или UK261. Трето, изпратете претенцията с ясна сума и доказателства или използвайте ClaimWinger, ако не искате да водите комуникацията сами.",
        "Ако авиокомпанията не отговори, отговори неясно или се позове общо на извънредни обстоятелства, не приемайте отказа като окончателен без проверка. В България при нужда могат да бъдат релевантни ГД ГВА и КЗП, а при UK полети - CAA и правилата на UK261.",
      ],
      bullets: [
        "Направете кратка хронология на случая.",
        "Проверете дали има EU261, UK261 или друга приложима рамка.",
        "Не приемайте ваучер, ако искате парично обезщетение и законът го позволява.",
        "При отказ поискайте конкретна причина, не само общо обяснение.",
      ],
    },
  ];

  if (article.nonEuCarrier) {
    sections.splice(1, 0, buildNonEuSection(article));
  }

  if (article.localAuthority) {
    sections.push({
      title: "Кога да мислите за ГД ГВА, КЗП или CAA?",
      paragraphs: [
        "ГД ГВА е българският орган, който има ключова роля при прилагането на правилата за правата на пътниците. КЗП може да бъде релевантна при част от потребителските спорове, особено когато има проблем с комуникация, продажба или подвеждащо предложение.",
        "При полети от Великобритания след Brexit логиката е различна и често се гледа UK261 и ролята на CAA. Винаги е важно първо да определите правилната юрисдикция, преди да изпращате жалба.",
      ],
    });
  }

  if (article.limitation) {
    sections.push({
      title: "Давностният срок в България",
      paragraphs: [
        "При български претенции често се работи с 5-годишен давностен срок по Закона за задълженията и договорите. Това означава, че полет от преди 3 години не е автоматично изгубен, ако все още може да се докаже маршрутът, закъснението и приложимата рамка.",
        "Въпреки това ранното действие е по-добро. С времето доказателствата се губят, имейлите се изтриват, а авиокомпаниите могат по-трудно да потвърдят детайлите.",
      ],
    });
  }

  return sections;
}

function buildFaqs(article: BlogArticleBg): BgArticleFaq[] {
  const subject = getSubject(article);
  const faqs: BgArticleFaq[] = [
    {
      question: `Мога ли да получа обезщетение при ${subject}?`,
      answer:
        "Да, ако полетът попада в EU261 или UK261, проблемът достига законовия праг и авиокомпанията няма валидно основание за освобождаване от отговорност. Най-често се гледат посоката на полета, реалният оператор и закъснението при крайната дестинация.",
    },
    {
      question: "Колко пари мога да получа?",
      answer:
        "Възможните фиксирани суми са 250, 400 или 600 евро на пътник. Точната сума зависи от разстоянието, а не от цената на билета.",
    },
    {
      question: "Какви документи са нужни?",
      answer:
        "Най-полезни са номер на резервация, бордна карта, номер на полет, дата, съобщения от авиокомпанията и доказателство за реалния час на пристигане. Ако имате разписки за хотел, храна или транспорт, запазете и тях.",
    },
    {
      question: "Трябва ли да използвам адвокат?",
      answer:
        "Не винаги. Можете да подадете иск сами, но услуга като ClaimWinger може да е полезна, ако не искате да водите комуникация с авиокомпанията или случаят вече е отказан.",
    },
  ];

  if (article.nonEuCarrier) {
    faqs[0] = {
      question: "Важи ли EU261 за неевропейска авиокомпания?",
      answer:
        "Да, ако полетът излита от европейско летище. Но при обратен полет от Истанбул, Дубай, Доха, Тел Авив или Белград с non-EU превозвач EU261 често не е приложим.",
    };
  }

  if (article.uk261) {
    faqs[0] = {
      question: "EU261 или UK261 важи при полет от Великобритания?",
      answer:
        "След Brexit полетите, които излитат от UK, обикновено се оценяват по UK261. Сумите и логиката са близки до EU261, но правната рамка вече е отделна.",
    };
  }

  if (article.voucher) {
    faqs.push({
      question: "Ако приема ваучер, губя ли право на пари?",
      answer:
        "Зависи какво точно приемате и при какви условия. Не подписвайте отказ от парично обезщетение, ако не сте сигурни, че ваучерът е най-добрият избор за вас.",
    });
  }

  return faqs.slice(0, 5);
}

function buildContextualLinks(article: BlogArticleBg): BgContextualLink[] {
  const destination = getDestination(article.ctaPath);
  const primaryHref = buildClaimWingerBgLink(destination, {
    medium: "context_link",
    campaign: article.slug,
    content: "primary_article_check",
  });
  const calculatorHref = buildClaimWingerBgLink("home", {
    medium: "context_link",
    campaign: article.slug,
    content: "general_claim_check",
  });
  const alternateHref = buildClaimWingerBgLink(article.ctaPath === "/cancelled-flight" ? "delayed" : "cancelled", {
    medium: "context_link",
    campaign: article.slug,
    content: "alternate_flow",
  });

  return [
    {
      label: article.ctaPath === "/cancelled-flight" ? "Проверете отменения полет" : "Проверете закъснелия полет",
      href: primaryHref,
      placement: `bg_article_${article.slug}_primary_context`,
      description:
        "Подходящо, ако вече имате номер на полет, дата и кратко описание на проблема.",
    },
    {
      label: "Обща проверка в ClaimWinger",
      href: calculatorHref,
      placement: `bg_article_${article.slug}_general_context`,
      description:
        "Използвайте, ако не сте сигурни дали случаят е закъснение, отмяна, overbooking или изпусната връзка.",
    },
    {
      label: article.ctaPath === "/cancelled-flight" ? "Ако случаят е закъснение" : "Ако случаят е отмяна",
      href: alternateHref,
      placement: `bg_article_${article.slug}_alternate_context`,
      description:
        "Полезно, когато проблемът е смесен: промяна в разписанието, премаршрутиране или изпусната връзка.",
    },
  ];
}

export function buildBgArticleContent(article: BlogArticleBg): BgArticleContent {
  const ctaDestination = getDestination(article.ctaPath);

  return {
    title: article.title,
    seoTitle: `${article.title} | EU261 България`,
    description: article.excerpt,
    intro: buildIntro(article),
    quickAnswer: buildQuickAnswer(article),
    keyPoints: buildKeyPoints(article),
    sections: buildCoreSections(article),
    faqs: buildFaqs(article),
    ctaDestination,
    ctaPath: article.ctaPath,
    ctaAnchor: article.ctaPath === "/cancelled-flight" ? cancelledAnchor : delayedAnchor,
    contextualLinks: buildContextualLinks(article),
  };
}
