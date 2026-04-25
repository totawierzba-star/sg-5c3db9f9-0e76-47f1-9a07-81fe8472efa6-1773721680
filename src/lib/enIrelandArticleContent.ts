import type {
  BlogArticleEnIreland,
  BlogArticleEnIrelandCtaPath,
} from "@/lib/blogArticlesEnIreland";
import {
  buildClaimWingerEnLink,
  type ClaimWingerEnDestination,
} from "@/lib/claimwingerLinksEn";
import { getEnIrelandArticleProfile } from "@/lib/enIrelandArticleProfiles";

export type EnIrelandArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: "nonEu";
};

export type EnIrelandArticleFaq = {
  question: string;
  answer: string;
};

export type EnIrelandContextualLink = {
  label: string;
  href: string;
  placement: string;
  description: string;
};

export type EnIrelandArticleContent = {
  title: string;
  seoTitle: string;
  description: string;
  intro: string[];
  quickAnswer: string[];
  keyPoints: string[];
  sections: EnIrelandArticleSection[];
  faqs: EnIrelandArticleFaq[];
  ctaDestination: ClaimWingerEnDestination;
  ctaPath: BlogArticleEnIrelandCtaPath;
  ctaAnchor: string;
  contextualLinks: EnIrelandContextualLink[];
};

const delayedAnchor = "ClaimWinger delayed-flight claim form";
const cancelledAnchor = "ClaimWinger cancelled-flight claim form";

function getDestination(path: BlogArticleEnIrelandCtaPath): ClaimWingerEnDestination {
  return path === "/cancelled-flight" ? "cancelled" : "delayed";
}

function getDisruptionLabel(article: BlogArticleEnIreland) {
  const title = article.title.toLowerCase();

  if (article.ctaPath === "/cancelled-flight" || title.includes("cancelled")) {
    return "cancellation";
  }

  if (title.includes("overbooking") || title.includes("denied boarding")) {
    return "denied boarding";
  }

  if (title.includes("missed connection")) {
    return "missed connection";
  }

  if (title.includes("downgrade")) {
    return "downgrade";
  }

  return "delay";
}

function getSubject(article: BlogArticleEnIreland) {
  return article.routeName || article.airlineName || article.airportName || article.focus;
}

function getAmountSentence(article: BlogArticleEnIreland) {
  const subject = getSubject(article);

  if (article.transatlantic) {
    return `For ${subject}, the long-haul band is usually the important one: if the route is covered and the arrival delay reaches the legal threshold, €600 per passenger can be in play.`;
  }

  if (article.routeName) {
    return `For ${subject}, the amount depends on route distance, final arrival delay and whether EU261 or UK261 applies in that direction.`;
  }

  if (article.airlineName) {
    return `For ${subject}, the key checks are the operating carrier, departure airport, final arrival delay and the airline's stated reason for the disruption.`;
  }

  if (article.airportName) {
    return `For ${subject}, the starting point is the full itinerary, not just the airport where you waited.`;
  }

  return "EU261 uses fixed compensation bands of €250, €400 and €600 based mainly on distance and the applicable legal framework.";
}

function buildIntro(article: BlogArticleEnIreland) {
  const disruption = getDisruptionLabel(article);
  const profile = getEnIrelandArticleProfile(article);
  const first =
    `This guide explains "${article.title}" from the perspective of an Irish passenger who needs a clear answer, not a maze of airline wording. The focus is ${article.focus}. The practical Irish scenario is this: ${profile.scenario} Under EU Regulation 261/2004, it is not enough to know that a flight was late or cancelled. You need to check where the flight departed, who operated it, whether the journey was on one booking, how late you arrived at the final destination and whether the airline can prove a genuine extraordinary circumstance.`;
  const second =
    `This matters in Ireland because Dublin, Cork, Shannon, Knock and Belfast can lead to different legal routes. Flights departing from Irish airports are usually assessed under EU261, while flights from Belfast or other UK airports are normally UK261 after Brexit. ${getAmountSentence(article)} ${profile.decisionPoint} Ireland also has a valuable local advantage: many EU261 claims can be pursued for up to six years, so older flights should not be dismissed too quickly. Keep your booking reference, boarding pass, airline messages about the ${disruption}, arrival-time evidence and receipts for meals, hotel or transport.`;

  if (article.preclearance) {
    return [
      first,
      `${second} For US-bound flights, Dublin and Shannon pre-clearance creates a uniquely Irish question. The practical answer is that pre-clearance does not move your departure out of Ireland: until the aircraft departs, the flight is still leaving from an Irish airport.`,
    ];
  }

  if (article.localAuthority) {
    return [
      first,
      `${second} If the airline ignores the claim or gives a vague refusal, the Irish Aviation Authority is the national enforcement body for Regulation 261/2004, while the CCPC can be relevant for broader consumer issues.`,
    ];
  }

  return [first, second];
}

function buildQuickAnswer(article: BlogArticleEnIreland) {
  const profile = getEnIrelandArticleProfile(article);
  const answers = [
    `Short answer: for ${getSubject(article)}, first check whether the itinerary is covered by EU261 or UK261.`,
    "Cash compensation is usually considered after a 3-hour arrival delay, a qualifying cancellation, or denied boarding caused by the airline.",
    "The fixed EU261 amounts are €250, €400 or €600 per passenger; they do not depend on ticket price.",
    profile.decisionPoint,
    "In Ireland, many claims can still be pursued for up to six years, which is unusually passenger-friendly compared with many EU countries.",
  ];

  if (article.nonEuCarrier) {
    answers[0] = "For a non-EU carrier, direction is decisive: flights departing from Irish airports can be covered by EU261, but many return flights from the US, Dubai or Istanbul are not.";
  }

  if (article.uk261) {
    answers[0] = "For flights departing from UK airports, including Belfast, UK261 is usually the correct framework after Brexit; flights from Dublin, Cork or Shannon are normally EU261.";
  }

  if (article.preclearance) {
    answers[1] = "US pre-clearance at Dublin or Shannon does not change the basic EU261 departure point: the flight still departs from Ireland.";
  }

  if (article.voucher) {
    answers[2] = "A voucher or credit should not automatically replace statutory cash compensation when EU261 gives you a right to money.";
  }

  return answers;
}

function buildKeyPoints(article: BlogArticleEnIreland) {
  const profile = getEnIrelandArticleProfile(article);
  const points = [
    profile.evidenceFocus,
    "For connections, the final destination matters most when the journey was on one booking.",
    "Care rights such as meals, hotel and transport are separate from the fixed €250 / €400 / €600 compensation.",
    "ClaimWinger can check the case on a no-win, no-fee basis and route the claim to the right delayed or cancelled flight flow.",
  ];

  if (article.routeName) {
    points[1] = `On ${article.routeName}, direction, carrier and the final arrival delay decide whether EU261, UK261 or another framework applies.`;
  }

  if (article.airlineName) {
    points[1] = `For ${article.airlineName}, check the operating carrier and not only the brand shown in the booking flow.`;
  }

  if (article.smallClaims) {
    points[2] = "Irish Small Claims can be relevant for eligible claims up to €2,000, but larger or unsuitable disputes may need a different court route.";
  }

  if (article.miles) {
    points[1] = "Aer Club, Avios and award tickets can still qualify if the passenger had a confirmed booking and the flight is covered.";
  }

  return points;
}

function buildNonEuSection(article: BlogArticleEnIreland): EnIrelandArticleSection {
  return {
    title: "Mandatory rule for non-EU carriers",
    paragraphs: [
      `For ${article.airlineName || article.routeName || "non-EU carriers"}, the biggest mistake is assuming that the same airline creates the same result in both directions. EU261 strongly protects departures from Irish airports, even when the operating carrier is American, United, Delta, Emirates or Turkish. The return direction can be completely different.`,
      "This is why a Dublin-to-New York flight on an American carrier can be covered, while the New York-to-Dublin return on the same non-EU airline may fall outside EU261. The operating carrier, departure airport and direction of travel have to be checked before making the claim.",
    ],
    table: "nonEu",
  };
}

function buildPreclearanceSection(): EnIrelandArticleSection {
  return {
    title: "Dublin and Shannon US pre-clearance: why Irish jurisdiction still matters",
    paragraphs: [
      "US pre-clearance lets passengers complete US immigration, customs and agriculture checks before departure. Dublin and Shannon are the only pre-clearance locations in Europe, which makes this a uniquely Irish aviation issue.",
      "For EU261 purposes, pre-clearance does not turn the journey into a domestic US flight before take-off. The passenger is still departing from an Irish airport, and a disruption before or after pre-clearance should be assessed through the normal departure-airport logic. The legal analysis still focuses on the operating carrier, delay at final destination and the reason for the disruption.",
    ],
  };
}

function buildCoreSections(article: BlogArticleEnIreland): EnIrelandArticleSection[] {
  const subject = getSubject(article);
  const profile = getEnIrelandArticleProfile(article);
  const sections: EnIrelandArticleSection[] = [
    {
      title: `What to check first for ${subject}`,
      paragraphs: [
        profile.scenario,
        `Start with the departure point. If the flight leaves Dublin, Cork, Shannon, Knock or another Irish airport, EU261 normally applies to any airline. If the flight leaves Belfast or another UK airport, UK261 is usually the relevant post-Brexit framework. If the flight arrives in Ireland from outside Europe, the operating carrier becomes crucial: EU carriers are usually covered, while non-EU carriers often are not.`,
        `For ${subject}, the question is therefore not just "was the flight delayed?" but "which legal system covers this exact direction?" ${profile.decisionPoint}`,
      ],
      bullets: [
        profile.evidenceFocus,
        "Irish airport departure: EU261 usually applies to any airline.",
        "UK airport departure: UK261 usually applies after Brexit.",
        "Non-EU carrier returning from outside Europe: EU261 often does not apply.",
      ],
    },
  ];

  if (article.nonEuCarrier) {
    sections.push(buildNonEuSection(article));
  }

  if (article.preclearance) {
    sections.push(buildPreclearanceSection());
  }

  sections.push({
    title: "How the €250, €400 and €600 compensation bands work",
    paragraphs: [
      "EU261 compensation is a fixed statutory payment. It is not a refund, discount, goodwill gesture or reimbursement of your hotel. The amount is based mainly on distance: €250 for flights up to 1,500 km, €400 for flights between 1,500 and 3,500 km, and €600 for flights over 3,500 km.",
      article.transatlantic
        ? "For Irish transatlantic routes, the €600 band is usually the central issue. The flight still needs to meet the legal threshold, and the airline can avoid payment only if it proves a valid extraordinary circumstance."
        : "For short and medium routes from Ireland, the usual practical question is whether the final arrival delay reached at least three hours, or whether a cancellation or denied boarding scenario created a separate compensation right.",
    ],
    bullets: [
      "Up to 1,500 km: €250.",
      "1,500-3,500 km: €400.",
      "Over 3,500 km: €600.",
    ],
  });

  const evidenceParagraphs = [
    "Good claims are built on a clear timeline. Save the booking reference, boarding pass, flight number, date, airline notifications, screenshots from the app or airport board, and any written reason the airline gives. For overnight disruption, keep receipts for meals, hotel and transport.",
    profile.evidenceFocus,
    "Ireland's long limitation period is a major advantage: many EU261 claims can be pursued for up to six years. If the airline does not reply or refuses without proper evidence, the IAA can be relevant for passenger-rights enforcement, the CCPC may help with wider consumer issues, and eligible claims up to €2,000 may fit the Irish Small Claims procedure. Larger or unsuitable disputes may need another route, including the District Court or Circuit Court.",
  ];

  if (article.ota) {
    evidenceParagraphs.push(
      "Because this article involves an OTA or travel agent angle, keep both the agent confirmation and the airline confirmation. EU261 compensation normally targets the operating carrier, but refund and ticket-service issues may need the seller's records too.",
    );
  }

  if (article.miles) {
    evidenceParagraphs.push(
      "Because this article involves Aer Club, Avios or award travel, keep the loyalty redemption confirmation and any taxes or fees receipt. The airline should not treat a points ticket as automatically outside EU261.",
    );
  }

  if (article.business) {
    evidenceParagraphs.push(
      "Because this article involves work travel, keep the business itinerary and any employer booking record. Statutory compensation is normally assessed as a passenger right, separate from internal expenses policy.",
    );
  }

  sections.push({
    title: "Evidence, Irish deadlines and escalation",
    paragraphs: evidenceParagraphs,
    bullets: [
      "Ask the airline for the specific operational reason, not a generic template answer.",
      "Do not treat a vague extraordinary-circumstances refusal as final without checking it.",
      "Use ClaimWinger if you want the case assessed and handled without paying upfront.",
    ],
  });

  if (article.ota) {
    sections.push({
      title: "Booked through Skyscanner, Booking.com, Expedia or Travel Republic?",
      paragraphs: [
        "Using an OTA or travel agent usually does not remove your EU261 rights. The compensation claim is normally against the operating air carrier, not the website that sold the ticket.",
        "The agent can still matter for refunds, ticket changes and communication problems, so keep both the airline confirmation and the OTA confirmation if you have them.",
      ],
    });
  }

  if (article.miles) {
    sections.push({
      title: "Aer Club, Avios and award tickets",
      paragraphs: [
        "A ticket bought with Aer Club points, Avios or another loyalty currency can still qualify for EU261 compensation. The core issue is whether the passenger had a confirmed booking on a covered flight.",
        "The airline cannot reject a valid claim simply because you used miles, points or a companion-style redemption instead of paying a normal cash fare.",
      ],
    });
  }

  if (article.business) {
    sections.push({
      title: "Business travel and who receives the money",
      paragraphs: [
        "For a work trip, fixed EU261 compensation usually belongs to the passenger who suffered the disruption, not automatically to the employer that paid for the ticket.",
        "The employer may have internal travel or expenses rules, but that is separate from the statutory claim against the operating carrier.",
      ],
    });
  }

  return sections.slice(0, 5);
}

function buildFaqs(article: BlogArticleEnIreland): EnIrelandArticleFaq[] {
  const subject = getSubject(article);
  const profile = getEnIrelandArticleProfile(article);
  const faqs: EnIrelandArticleFaq[] = [
    {
      question: `Can I claim compensation for ${subject}?`,
      answer:
        "Yes, if the flight is covered by EU261 or UK261, the disruption reaches the legal threshold and the airline cannot prove a valid extraordinary circumstance. The main checks are departure airport, operating carrier, final arrival delay and reason for the disruption.",
    },
    {
      question: profile.faqQuestion,
      answer: profile.faqAnswer,
    },
    {
      question: "How much compensation can Irish passengers get?",
      answer:
        "The fixed EU261 amounts are €250, €400 or €600 per passenger. The exact amount depends mainly on the route distance and whether the case qualifies.",
    },
    {
      question: "How long do I have to claim in Ireland?",
      answer:
        "Ireland is unusually generous: many EU261 claims can be pursued for up to six years. You should still act early because evidence gets harder to recover with time.",
    },
  ];

  if (article.nonEuCarrier) {
    faqs[0] = {
      question: "Does EU261 apply to non-EU airlines from Ireland?",
      answer:
        "Yes, when the flight departs from an Irish airport. But a return flight from the USA, Dubai or Istanbul on a non-EU carrier often falls outside EU261, so direction is critical.",
    };
  }

  if (article.uk261) {
    faqs[0] = {
      question: "Is a Belfast or UK departure covered by EU261?",
      answer:
        "Usually no. After Brexit, flights departing from UK airports are generally assessed under UK261, while flights departing from Irish airports are assessed under EU261.",
    };
  }

  if (article.preclearance) {
    faqs.push({
      question: "Does US pre-clearance in Dublin or Shannon remove EU261 rights?",
      answer:
        "No. Pre-clearance does not change the fact that the flight departs from Ireland. The case is still assessed through the normal EU261 departure-airport logic.",
    });
  }

  if (article.voucher) {
    faqs.push({
      question: "Do I have to accept a voucher instead of cash?",
      answer:
        "No, not automatically. If EU261 gives you a cash compensation right, the airline should not replace it with credit unless you knowingly agree to that outcome.",
    });
  }

  if (article.smallClaims) {
    faqs.push({
      question: "Can I use the Irish Small Claims procedure?",
      answer:
        "It may be relevant for eligible claims up to €2,000 where the conditions are met. Larger or unsuitable claims may require another Irish court route or a different escalation path.",
    });
  }

  faqs.push({
    question: "What documents should I keep?",
    answer:
      "Keep your booking reference, boarding pass, flight number, date, airline messages and proof of actual arrival time. Also keep receipts for meals, hotel or transport if you had to pay during the disruption.",
  });

  return faqs.slice(0, 5);
}

function buildContextualLinks(article: BlogArticleEnIreland): EnIrelandContextualLink[] {
  const destination = getDestination(article.ctaPath);
  const primaryHref = buildClaimWingerEnLink(destination, {
    medium: "article_context_link",
    campaign: article.slug,
    content: "primary_claim_check",
  });
  const generalHref = buildClaimWingerEnLink("home", {
    medium: "article_context_link",
    campaign: article.slug,
    content: "general_claim_check",
  });
  const alternateHref = buildClaimWingerEnLink(
    article.ctaPath === "/cancelled-flight" ? "delayed" : "cancelled",
    {
      medium: "article_context_link",
      campaign: article.slug,
      content: "alternate_disruption",
    },
  );

  return [
    {
      label: article.ctaPath === "/cancelled-flight" ? "Check a cancelled flight" : "Check a delayed flight",
      href: primaryHref,
      placement: `en_ie_article_${article.slug}_primary_context`,
      description:
        "Best if you already have the flight number, date and a short description of what happened.",
    },
    {
      label: "General ClaimWinger check",
      href: generalHref,
      placement: `en_ie_article_${article.slug}_general_context`,
      description:
        "Use this if you are not yet sure whether the case is a delay, cancellation, overbooking or missed connection.",
    },
    {
      label: article.ctaPath === "/cancelled-flight" ? "If the case was a delay" : "If the case was a cancellation",
      href: alternateHref,
      placement: `en_ie_article_${article.slug}_alternate_context`,
      description:
        "Useful for mixed cases where schedule change, rerouting or missed connection details overlap.",
    },
  ];
}

export function buildEnIrelandArticleContent(
  article: BlogArticleEnIreland,
): EnIrelandArticleContent {
  const ctaDestination = getDestination(article.ctaPath);

  return {
    title: article.title,
    seoTitle: `${article.title} | Ireland EU261`,
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
