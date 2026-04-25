export type BlogArticleEnIrelandCategory =
  | "quickAnswers"
  | "law"
  | "airlines"
  | "airports"
  | "transatlantic"
  | "routes"
  | "lot"
  | "situations";

export type BlogArticleEnIrelandCtaPath = "/delayed-flight" | "/cancelled-flight";

export interface BlogArticleEnIreland {
  id: string;
  slug: string;
  title: string;
  category: BlogArticleEnIrelandCategory;
  cluster: string;
  focus: string;
  excerpt: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  wordCount: number;
  featured: boolean;
  ctaPath: BlogArticleEnIrelandCtaPath;
  airlineName?: string;
  routeName?: string;
  airportCode?: string;
  airportName?: string;
  nonEuCarrier?: boolean;
  uk261?: boolean;
  localAuthority?: boolean;
  limitation?: boolean;
  voucher?: boolean;
  preclearance?: boolean;
  transatlantic?: boolean;
  smallClaims?: boolean;
  ota?: boolean;
  business?: boolean;
  miles?: boolean;
  cancelledCase?: boolean;
}

const publishDate = "2026-04-25";

function article(
  slug: string,
  title: string,
  category: BlogArticleEnIrelandCategory,
  cluster: string,
  focus: string,
  options: Partial<BlogArticleEnIreland> = {},
): BlogArticleEnIreland {
  return {
    id: slug,
    slug,
    title,
    category,
    cluster,
    focus,
    excerpt:
      options.excerpt ||
      `${title}: an Ireland-focused EU261 and UK261 guide covering compensation, evidence, deadlines and ClaimWinger next steps.`,
    publishDate,
    updatedDate: publishDate,
    readTime: options.readTime || "8 min read",
    wordCount: options.wordCount || 1800,
    featured: false,
    ctaPath: "/delayed-flight",
    ...options,
  };
}

export const blogArticlesEnIreland: BlogArticleEnIreland[] = [
  article("eu261-passenger-rights-irish-travellers", "EU261 Passenger Rights - Complete Guide for Irish Travellers", "law", "Law and rights", "when EU261 applies for Irish passengers, compensation amounts and the claim process", { localAuthority: true, limitation: true, featured: true, wordCount: 2300, readTime: "10 min read" }),
  article("eu261-flights-outside-eu-ireland", "Does EU261 Apply to Flights Outside the EU? - Irish Passenger Guide", "law", "Law and rights", "Irish flights to the US, Middle East, Canaries and other non-domestic routes", { nonEuCarrier: true, transatlantic: true, featured: true }),
  article("extraordinary-circumstances-ireland-airlines", "Extraordinary Circumstances - When Irish Airlines Don't Have to Pay", "law", "Law and rights", "what airlines must prove before avoiding EU261 compensation", { featured: true }),
  article("iaa-complaints-ireland-aviation-regulator", "IAA Complaints - How to File with Ireland's Aviation Regulator", "law", "Law and rights", "how Irish passengers escalate an unresolved airline complaint to the IAA", { localAuthority: true, featured: true }),
  article("ccpc-ireland-consumer-rights-air-passengers", "CCPC Ireland - Consumer Rights for Air Passengers", "law", "Law and rights", "when the CCPC consumer route may sit alongside an EU261 airline complaint", { localAuthority: true }),
  article("eu261-claim-limitation-period-ireland", "How Long Do You Have to Claim EU261 in Ireland?", "law", "Law and rights", "Ireland's 6-year limitation period and why old flight claims can still matter", { limitation: true, featured: true }),
  article("compensation-vs-refund-ireland-eu261", "Compensation vs Refund - What Irish Passengers Can Demand", "law", "Law and rights", "the difference between statutory compensation, refund, rerouting and care rights", { voucher: true }),
  article("us-pre-clearance-dublin-eu261-applies", "US Pre-Clearance at Dublin - Does EU261 Apply Before or After?", "law", "Law and rights", "Dublin US pre-clearance, Irish jurisdiction and transatlantic compensation logic", { preclearance: true, transatlantic: true, featured: true, wordCount: 2200 }),

  article("ryanair-delayed-flight-eu261-ireland", "Ryanair Delayed Flight - EU261 Compensation Guide for Irish Passengers", "airlines", "Airlines", "Ryanair as an Irish EU carrier and high-intent delayed-flight claims", { airlineName: "Ryanair", featured: true, wordCount: 2200 }),
  article("ryanair-cancelled-flight-ireland-rights", "Ryanair Cancelled Flight Ireland - Your Rights Step by Step", "airlines", "Airlines", "refund, rerouting and compensation after a Ryanair cancellation", { airlineName: "Ryanair", ctaPath: "/cancelled-flight", cancelledCase: true, featured: true }),
  article("ryanair-rejected-claim-ireland-force-payment", "Ryanair Rejected My Claim - How to Force Payment in Ireland", "airlines", "Airlines", "what to do after a Ryanair rejection, including IAA and court options", { airlineName: "Ryanair", localAuthority: true, smallClaims: true, featured: true }),
  article("ryanair-voucher-cash-ireland-demand", "Ryanair Voucher Instead of Cash - How to Demand Real Money", "airlines", "Airlines", "why a voucher should not replace cash compensation when EU261 applies", { airlineName: "Ryanair", voucher: true }),
  article("aer-lingus-delayed-flight-eu261-compensation", "Aer Lingus Delayed Flight - EU261 Compensation Complete Guide", "airlines", "Airlines", "Aer Lingus as Ireland's EU carrier and delayed-flight compensation", { airlineName: "Aer Lingus", featured: true, wordCount: 2200 }),
  article("aer-lingus-cancelled-flight-refund-rebook", "Aer Lingus Cancelled Flight - Refund or Rebook: Your Rights", "airlines", "Airlines", "refund, rerouting and compensation after an Aer Lingus cancellation", { airlineName: "Aer Lingus", ctaPath: "/cancelled-flight", cancelledCase: true, featured: true }),
  article("aer-lingus-transatlantic-delayed-600", "Aer Lingus Transatlantic Delayed - €600 Compensation Guide", "airlines", "Airlines", "Aer Lingus long-haul routes from Dublin and Shannon where €600 can be in play", { airlineName: "Aer Lingus", transatlantic: true, preclearance: true, featured: true }),
  article("aer-lingus-rejected-claim-what-to-do", "Aer Lingus Rejected My Claim - What to Do Next", "airlines", "Airlines", "next steps after an Aer Lingus refusal or vague extraordinary-circumstances answer", { airlineName: "Aer Lingus", localAuthority: true }),
  article("aer-lingus-technical-fault-extraordinary", "Aer Lingus Technical Fault - Extraordinary Circumstance or Not?", "airlines", "Airlines", "technical faults, normal airline operations and when Aer Lingus may remain liable", { airlineName: "Aer Lingus" }),
  article("british-airways-dublin-delay-eu261-uk261", "British Airways Dublin Delay - EU261 vs UK261 After Brexit", "airlines", "Airlines", "Dublin-London direction rules after Brexit", { airlineName: "British Airways", uk261: true, featured: true }),
  article("easyjet-delay-ireland-eu261-2026", "easyJet Delay from Ireland - EU261 Compensation Guide 2026", "airlines", "Airlines", "easyJet flights from Irish airports and EU261 coverage", { airlineName: "easyJet" }),
  article("wizz-air-delay-dublin-eu261-wizz-credit", "Wizz Air Delay from Dublin - EU261 or Wizz Credit Trap?", "airlines", "Airlines", "Wizz Air, EU261 cash rights and why credit is not the same as compensation", { airlineName: "Wizz Air", voucher: true }),
  article("lufthansa-delay-ireland-eu261-always", "Lufthansa Delay from Ireland - EU261 Always Applies", "airlines", "Airlines", "Lufthansa as an EU carrier and Ireland-Germany connections", { airlineName: "Lufthansa" }),
  article("klm-delay-dublin-amsterdam-eu261", "KLM Delay from Dublin - Amsterdam Hub and EU261", "airlines", "Airlines", "Dublin-Amsterdam connections and missed onward flights on one booking", { airlineName: "KLM", routeName: "Dublin-Amsterdam" }),
  article("air-france-delay-ireland-eu261", "Air France Delay from Ireland - EU261 Complete Guide", "airlines", "Airlines", "Air France routes from Ireland and delays through Paris", { airlineName: "Air France" }),
  article("emirates-delay-dublin-eu261-applies", "Emirates Delay from Dublin - Does EU261 Apply?", "airlines", "Airlines", "Emirates as a non-EU carrier and why Dublin departure matters", { airlineName: "Emirates", nonEuCarrier: true, routeName: "Dublin-Dubai", featured: true }),
  article("turkish-airlines-delay-dublin-eu261", "Turkish Airlines Delay from Dublin - EU261 When It Applies", "airlines", "Airlines", "Turkish Airlines as a non-EU carrier and the Dublin-Istanbul direction rule", { airlineName: "Turkish Airlines", nonEuCarrier: true, routeName: "Dublin-Istanbul" }),
  article("american-airlines-delay-dublin-eu261", "American Airlines Delay from Dublin - Does EU261 Apply?", "airlines", "Airlines", "American Airlines from Dublin or Shannon and why the US return flight is different", { airlineName: "American Airlines", nonEuCarrier: true, transatlantic: true, preclearance: true, featured: true }),
  article("united-airlines-delay-dublin-eu261", "United Airlines Delay from Dublin - EU261 Guide", "airlines", "Airlines", "United routes from Dublin and the difference between Irish departure and US return", { airlineName: "United Airlines", nonEuCarrier: true, transatlantic: true, preclearance: true }),
  article("delta-airlines-delay-dublin-eu261", "Delta Airlines Delay from Dublin - EU261 When Applicable", "airlines", "Airlines", "Delta flights from Ireland and non-EU carrier EU261 rules", { airlineName: "Delta Air Lines", nonEuCarrier: true, transatlantic: true, preclearance: true }),
  article("norwegian-delay-dublin-eu261", "Norwegian Delay from Dublin - EU261 for Scandinavian Low-Cost", "airlines", "Airlines", "Norwegian, Scandinavian routes and EU261 for Irish passengers", { airlineName: "Norwegian" }),
  article("sunexpress-delay-cork-eu261", "SunExpress Delay from Cork - EU261 Guide", "airlines", "Airlines", "SunExpress routes from Cork and EU261 coverage from an Irish airport", { airlineName: "SunExpress", routeName: "Cork-Izmir" }),

  article("dublin-airport-delayed-flight-eu261", "Dublin Airport (DUB) Delayed Flight - EU261 Compensation Guide", "airports", "Airports", "delayed flights from Ireland's main airport and how EU261 applies", { airportCode: "DUB", airportName: "Dublin Airport", featured: true }),
  article("dublin-airport-cancelled-flight-rights", "Dublin Airport (DUB) Cancelled Flight - Your Rights", "airports", "Airports", "refund, rerouting and compensation when a flight from Dublin is cancelled", { airportCode: "DUB", airportName: "Dublin Airport", ctaPath: "/cancelled-flight", cancelledCase: true }),
  article("cork-airport-delayed-flight-eu261", "Cork Airport (ORK) Delayed Flight - EU261 Compensation", "airports", "Airports", "EU261 rights from Cork Airport and evidence to keep", { airportCode: "ORK", airportName: "Cork Airport", featured: true }),
  article("cork-airport-cancelled-flight-compensation", "Cork Airport (ORK) Cancelled Flight - Rights and Compensation", "airports", "Airports", "cancelled flights from Cork, rerouting options and compensation", { airportCode: "ORK", airportName: "Cork Airport", ctaPath: "/cancelled-flight", cancelledCase: true }),
  article("shannon-airport-delayed-flight-eu261", "Shannon Airport (SNN) Delayed Flight - EU261 Guide", "airports", "Airports", "Shannon delays, transatlantic flights and EU261 evidence", { airportCode: "SNN", airportName: "Shannon Airport", transatlantic: true, preclearance: true, featured: true }),
  article("shannon-airport-transatlantic-delay-600", "Shannon Airport (SNN) Transatlantic Delay - €600 Compensation", "airports", "Airports", "Shannon long-haul delays and when the €600 band applies", { airportCode: "SNN", airportName: "Shannon Airport", transatlantic: true, preclearance: true, featured: true }),
  article("ireland-west-airport-knock-delayed-eu261", "Ireland West Airport Knock (NOC) Delayed Flight - EU261", "airports", "Airports", "Knock Airport, Ryanair routes and West of Ireland passenger rights", { airportCode: "NOC", airportName: "Ireland West Airport Knock" }),
  article("belfast-international-airport-eu261-uk261", "Belfast International Airport (BFS) - EU261 or UK261?", "airports", "Airports", "border-region passengers using Belfast and the UK261 distinction", { airportCode: "BFS", airportName: "Belfast International Airport", uk261: true, featured: true }),
  article("dublin-airport-missed-connection-compensation", "Dublin Airport Missed Connection - Who Is Responsible?", "airports", "Airports", "missed connections at Dublin on one booking versus separate tickets", { airportCode: "DUB", airportName: "Dublin Airport" }),
  article("long-delay-dublin-airport-hotel-meals", "Long Delay at Dublin Airport - Hotel, Meals, Transport: Who Pays?", "airports", "Airports", "care rights during long delays at Dublin Airport", { airportCode: "DUB", airportName: "Dublin Airport" }),

  article("dublin-new-york-jfk-delayed-eu261-600", "Dublin to New York (JFK) Delayed - €600 EU261 Compensation", "transatlantic", "Transatlantic routes", "Dublin-JFK delays, Aer Lingus and US carriers, and the €600 band", { routeName: "Dublin-New York JFK", transatlantic: true, preclearance: true, nonEuCarrier: true, featured: true }),
  article("dublin-boston-delayed-eu261-600", "Dublin to Boston (BOS) Delayed - €600 EU261 Compensation", "transatlantic", "Transatlantic routes", "Dublin-Boston delays and Irish-American diaspora travel", { routeName: "Dublin-Boston", transatlantic: true, preclearance: true, nonEuCarrier: true, featured: true }),
  article("dublin-chicago-delayed-eu261-600", "Dublin to Chicago (ORD) Delayed - €600 EU261 Compensation", "transatlantic", "Transatlantic routes", "Dublin-Chicago long-haul delays and EU261 from Ireland", { routeName: "Dublin-Chicago", transatlantic: true, preclearance: true, nonEuCarrier: true }),
  article("dublin-los-angeles-delayed-eu261-600", "Dublin to Los Angeles (LAX) Delayed - Aer Lingus €600", "transatlantic", "Transatlantic routes", "Dublin-Los Angeles delays and Aer Lingus long-haul compensation", { routeName: "Dublin-Los Angeles", airlineName: "Aer Lingus", transatlantic: true, preclearance: true }),
  article("dublin-san-francisco-delayed-eu261", "Dublin to San Francisco (SFO) Delayed - €600 EU261 Guide", "transatlantic", "Transatlantic routes", "Dublin-San Francisco, tech travel and long-haul delay rights", { routeName: "Dublin-San Francisco", transatlantic: true, preclearance: true }),
  article("dublin-miami-delayed-eu261-600", "Dublin to Miami (MIA) Delayed - €600 Compensation Guide", "transatlantic", "Transatlantic routes", "Dublin-Miami leisure and long-haul delay compensation", { routeName: "Dublin-Miami", transatlantic: true, preclearance: true }),
  article("dublin-toronto-delayed-eu261-appr", "Dublin to Toronto (YYZ) Delayed - EU261 vs Canadian APPR", "transatlantic", "Transatlantic routes", "EU261 from Dublin and Canadian APPR on the return", { routeName: "Dublin-Toronto", transatlantic: true, preclearance: true, nonEuCarrier: true, featured: true }),
  article("dublin-washington-dc-delayed-eu261", "Dublin to Washington DC (IAD) Delayed - Aer Lingus €600", "transatlantic", "Transatlantic routes", "Dublin-Washington delays and Aer Lingus long-haul rights", { routeName: "Dublin-Washington DC", airlineName: "Aer Lingus", transatlantic: true, preclearance: true }),
  article("dublin-pittsburgh-delayed-eu261-2026", "Dublin to Pittsburgh Delayed - New Aer Lingus Route 2026", "transatlantic", "Transatlantic routes", "Aer Lingus Dublin-Pittsburgh 2026 route and EU261 compensation from Ireland", { routeName: "Dublin-Pittsburgh", airlineName: "Aer Lingus", transatlantic: true, preclearance: true, featured: true }),
  article("dublin-cancun-delayed-aer-lingus-eu261", "Dublin to Cancun Delayed - Aer Lingus €600 for New Route", "transatlantic", "Transatlantic routes", "Dublin-Cancun 2026 leisure route and the long-haul compensation band", { routeName: "Dublin-Cancun", airlineName: "Aer Lingus", transatlantic: true, featured: true }),
  article("shannon-new-york-delayed-eu261-600", "Shannon to New York Delayed - €600 EU261 Compensation", "transatlantic", "Transatlantic routes", "Shannon-New York delays, US pre-clearance and long-haul compensation", { routeName: "Shannon-New York", transatlantic: true, preclearance: true, nonEuCarrier: true, featured: true }),
  article("return-flight-usa-ireland-eu261-applies", "Return Flight USA to Ireland Delayed - Does EU261 Apply?", "transatlantic", "Transatlantic routes", "why the airline matters on a US-to-Ireland return flight", { transatlantic: true, nonEuCarrier: true, preclearance: true, featured: true }),
  article("non-eu-airlines-dublin-usa-eu261", "Non-EU Airlines from Dublin to USA - When EU261 Applies", "transatlantic", "Transatlantic routes", "American, United and Delta from Dublin versus return flights from the US", { transatlantic: true, nonEuCarrier: true, preclearance: true, featured: true }),
  article("long-haul-delayed-ireland-600-rights", "Long-Haul Flight Delayed from Ireland - €600 and Your Rights", "transatlantic", "Transatlantic routes", "Irish long-haul departures and the €600 compensation threshold", { transatlantic: true, preclearance: true }),

  article("dublin-london-delayed-eu261-compensation", "Dublin to London Delayed - EU261 Compensation Guide", "routes", "European routes", "Dublin-London direction rules and the EU261 versus UK261 split", { routeName: "Dublin-London", uk261: true, featured: true }),
  article("dublin-amsterdam-delayed-klm-ryanair", "Dublin to Amsterdam Delayed - KLM and Ryanair EU261", "routes", "European routes", "Dublin-Amsterdam, KLM hub connections and Ryanair delays", { routeName: "Dublin-Amsterdam", airlineName: "KLM / Ryanair" }),
  article("dublin-paris-delayed-aer-lingus-ryanair", "Dublin to Paris Delayed - Aer Lingus and Ryanair EU261", "routes", "European routes", "Dublin-Paris delays and Irish passengers' EU261 rights", { routeName: "Dublin-Paris", airlineName: "Aer Lingus / Ryanair" }),
  article("dublin-barcelona-delayed-ryanair-vueling", "Dublin to Barcelona Delayed - Ryanair and Vueling EU261", "routes", "European routes", "Dublin-Barcelona, low-cost carriers and EU261 eligibility", { routeName: "Dublin-Barcelona", airlineName: "Ryanair / Vueling" }),
  article("dublin-lanzarote-delayed-ryanair-eu261", "Dublin to Lanzarote Delayed - Ryanair EU261 Canary Islands", "routes", "European routes", "Canary Islands as EU territory and why the return is also covered", { routeName: "Dublin-Lanzarote", airlineName: "Ryanair", featured: true }),
  article("dublin-tenerife-delayed-ryanair-aer-lingus", "Dublin to Tenerife Delayed - Ryanair and Aer Lingus EU261", "routes", "European routes", "Dublin-Tenerife holidays and EU261 in the Canary Islands", { routeName: "Dublin-Tenerife", airlineName: "Ryanair / Aer Lingus" }),
  article("dublin-faro-algarve-delayed-ryanair-eu261", "Dublin to Faro (Algarve) Delayed - Ryanair EU261 Guide", "routes", "European routes", "Dublin-Faro leisure delays and compensation rules", { routeName: "Dublin-Faro", airlineName: "Ryanair" }),
  article("dublin-malaga-delayed-ryanair-aer-lingus", "Dublin to Malaga Delayed - Ryanair and Aer Lingus EU261", "routes", "European routes", "Dublin-Malaga delays and summer travel evidence", { routeName: "Dublin-Malaga", airlineName: "Ryanair / Aer Lingus" }),
  article("dublin-lisbon-delayed-tap-ryanair-eu261", "Dublin to Lisbon Delayed - TAP and Ryanair EU261", "routes", "European routes", "Dublin-Lisbon, TAP, Ryanair and EU261 claims", { routeName: "Dublin-Lisbon", airlineName: "TAP / Ryanair" }),
  article("dublin-rome-delayed-ryanair-aer-lingus", "Dublin to Rome Delayed - Ryanair and Aer Lingus EU261", "routes", "European routes", "Dublin-Rome delays and compensation amounts", { routeName: "Dublin-Rome", airlineName: "Ryanair / Aer Lingus" }),
  article("dublin-milan-delayed-ryanair-eu261", "Dublin to Milan Delayed - Ryanair EU261 Guide", "routes", "European routes", "Dublin-Milan, Ryanair and short-to-medium route compensation", { routeName: "Dublin-Milan", airlineName: "Ryanair" }),
  article("dublin-warsaw-delayed-lot-ryanair-eu261", "Dublin to Warsaw Delayed - LOT and Ryanair EU261", "routes", "European routes", "Dublin-Warsaw, LOT, Ryanair and Polish community travel from Ireland", { routeName: "Dublin-Warsaw", airlineName: "LOT / Ryanair", featured: true }),
  article("dublin-oslo-delayed-aer-lingus-2026", "Dublin to Oslo Delayed - New Aer Lingus Route 2026", "routes", "European routes", "Aer Lingus Dublin-Oslo 2026 route and EU261 claims", { routeName: "Dublin-Oslo", airlineName: "Aer Lingus", featured: true }),
  article("cork-london-delayed-aer-lingus-ryanair", "Cork to London Delayed - Aer Lingus and Ryanair EU261", "routes", "European routes", "Cork-London direction rules and EU261 from Cork", { routeName: "Cork-London", airlineName: "Aer Lingus / Ryanair", uk261: true, featured: true }),
  article("cork-nice-delayed-aer-lingus-2026", "Cork to Nice Delayed - New Aer Lingus Route 2026", "routes", "European routes", "new Cork-Nice route and compensation from Cork Airport", { routeName: "Cork-Nice", airlineName: "Aer Lingus", featured: true }),
  article("cork-prague-delayed-aer-lingus-2026", "Cork to Prague Delayed - Aer Lingus Year-Round 2026", "routes", "European routes", "Cork-Prague year-round service and EU261 from Ireland", { routeName: "Cork-Prague", airlineName: "Aer Lingus", featured: true }),
  article("dublin-dubai-delayed-emirates-eu261", "Dublin to Dubai Delayed - Emirates EU261 from Ireland", "routes", "European and non-EU routes", "Emirates from Dublin and why return from Dubai is different", { routeName: "Dublin-Dubai", airlineName: "Emirates", nonEuCarrier: true, featured: true }),
  article("dublin-istanbul-delayed-turkish-eu261", "Dublin to Istanbul Delayed - Turkish Airlines EU261", "routes", "European and non-EU routes", "Turkish Airlines from Dublin and the non-EU carrier rule", { routeName: "Dublin-Istanbul", airlineName: "Turkish Airlines", nonEuCarrier: true }),

  article("lot-polish-airlines-delay-dublin-eu261", "LOT Polish Airlines Delay from Dublin - EU261 Complete Guide", "lot", "LOT Polish Airlines Ireland", "LOT as an EU carrier and Dublin-Warsaw travel for Ireland's Polish community", { airlineName: "LOT Polish Airlines", routeName: "Dublin-Warsaw", featured: true }),
  article("lot-dublin-warsaw-delayed-compensation", "LOT Dublin to Warsaw Delayed - €250 Compensation Guide", "lot", "LOT Polish Airlines Ireland", "Dublin-Warsaw distance band, LOT and Polish diaspora claims", { airlineName: "LOT Polish Airlines", routeName: "Dublin-Warsaw", featured: true }),
  article("lot-cancelled-flight-ireland-rights", "LOT Cancelled Flight Ireland - Refund and Compensation Rights", "lot", "LOT Polish Airlines Ireland", "LOT cancellations from Ireland, refunds, rerouting and compensation", { airlineName: "LOT Polish Airlines", ctaPath: "/cancelled-flight", cancelledCase: true }),
  article("lot-rejected-compensation-ireland-force", "LOT Rejected Compensation Claim - How to Force Payment", "lot", "LOT Polish Airlines Ireland", "how Irish passengers can respond to a LOT compensation rejection", { airlineName: "LOT Polish Airlines", localAuthority: true, smallClaims: true }),
  article("lot-missed-connection-warsaw-eu261", "LOT Missed Connection Warsaw - EU261 on Single Booking", "lot", "LOT Polish Airlines Ireland", "missed connections in Warsaw on a single booking from Dublin", { airlineName: "LOT Polish Airlines", routeName: "Dublin-Warsaw connection", featured: true }),
  article("lot-dublin-new-york-warsaw-600-delayed", "LOT Dublin to New York via Warsaw - €600 If Delayed", "lot", "LOT Polish Airlines Ireland", "Dublin-Warsaw-New York on one booking and the long-haul €600 band", { airlineName: "LOT Polish Airlines", routeName: "Dublin-Warsaw-New York", transatlantic: true, featured: true }),

  article("overbooking-ireland-denied-boarding-600", "Overbooking Ireland - Denied Boarding and Up to €600 Compensation", "situations", "Special situations", "denied boarding, volunteers and forced overbooking on Irish flights", { featured: true }),
  article("downgrade-ireland-business-economy-refund", "Downgrade Ireland - Flew Economy When You Paid for Business", "situations", "Special situations", "downgrade refunds when a passenger is moved to a lower cabin", { business: true }),
  article("charter-flight-delayed-ireland-eu261", "Charter Flight Delayed Ireland - Does EU261 Apply to Holiday Flights?", "situations", "Special situations", "holiday charters from Ireland and package travel context", { featured: true }),
  article("ota-ticket-skyscanner-booking-claim-ireland", "OTA Ticket (Skyscanner, Booking, Expedia) - Does It Affect Your Claim?", "situations", "Special situations", "tickets bought via Skyscanner, Booking.com, Expedia or Travel Republic", { ota: true }),
  article("group-booking-delayed-collective-claim-ireland", "Group Booking Delayed - How to File a Collective Claim in Ireland", "situations", "Special situations", "families, sports teams, work groups and collective EU261 claims", {}),
  article("airline-bankrupt-eu261-claim-ireland", "Airline Went Bust - What Happens to Your EU261 Claim?", "situations", "Special situations", "airline insolvency and practical recovery options for Irish passengers", {}),
  article("night-delay-ireland-hotel-meals-transport", "Night Delay Ireland - Hotel, Meals and Transport: Who Pays?", "situations", "Special situations", "hotel, meals and transport during overnight delays", { featured: true }),
  article("business-travel-delay-employee-employer-ireland", "Business Travel Delay - Employee or Employer Gets Compensation?", "situations", "Special situations", "why statutory compensation usually belongs to the passenger, not the employer", { business: true }),
  article("miles-ticket-eu261-award-travel-ireland", "Miles Ticket EU261 - Does Award Travel Qualify for Compensation?", "situations", "Special situations", "Aer Club, Avios and award tickets under EU261", { miles: true }),
  article("missed-connection-dublin-one-booking-separate", "Missed Connection Dublin - One Booking vs Separate Tickets", "situations", "Special situations", "the difference between protected connections and self-transfer risk", { airportName: "Dublin Airport" }),

  article("compensation-delayed-flight-ireland-250-400-600", "How Much Compensation for a Delayed Flight from Ireland? €250, €400 or €600", "quickAnswers", "Quick answers", "the fixed EU261 compensation amounts for flights from Ireland", { featured: true, wordCount: 2100 }),
  article("hours-delay-eu261-compensation-ireland", "How Many Hours Delay for EU261 Compensation in Ireland?", "quickAnswers", "Quick answers", "the 3-hour arrival-delay rule and care rights before that threshold", { featured: true }),
  article("eu261-ryanair-ireland-applies", "Does EU261 Apply to Ryanair in Ireland?", "quickAnswers", "Quick answers", "Ryanair as an EU carrier and why Irish passengers are covered", { airlineName: "Ryanair", featured: true }),
  article("eu261-aer-lingus-applies", "Does EU261 Apply to Aer Lingus?", "quickAnswers", "Quick answers", "Aer Lingus as an EU carrier and how the rule works on long-haul routes", { airlineName: "Aer Lingus", transatlantic: true, featured: true }),
  article("eu261-american-airlines-dublin", "Does EU261 Apply to American Airlines from Dublin?", "quickAnswers", "Quick answers", "American Airlines from Dublin versus the return from the United States", { airlineName: "American Airlines", nonEuCarrier: true, transatlantic: true, preclearance: true, featured: true }),
  article("extraordinary-circumstances-eu261-ireland", "What Are Extraordinary Circumstances Under EU261?", "quickAnswers", "Quick answers", "weather, strikes, technical issues and what airlines must prove", { featured: true }),
  article("how-long-claim-eu261-ireland", "How Long Do I Have to Claim EU261 in Ireland?", "quickAnswers", "Quick answers", "Ireland's 6-year limitation period for many EU261 claims", { limitation: true, featured: true }),
  article("ryanair-wont-pay-claim-ireland", "Ryanair Won't Pay My Claim - What Can I Do in Ireland?", "quickAnswers", "Quick answers", "Ryanair refusal, IAA escalation and Irish court options", { airlineName: "Ryanair", localAuthority: true, smallClaims: true, featured: true }),
  article("eu261-claim-3-years-ago-ireland", "Can I Claim EU261 for a Flight 3 Years Ago from Ireland?", "quickAnswers", "Quick answers", "why a 3-year-old Irish claim may still be within time", { limitation: true, featured: true }),
  article("voucher-instead-cash-ryanair-ireland", "Do I Have to Accept a Voucher Instead of Cash from Ryanair?", "quickAnswers", "Quick answers", "how to reject a voucher when cash compensation is due", { airlineName: "Ryanair", voucher: true }),
  article("eu261-return-flight-usa-ireland", "Does EU261 Cover My Return Flight from the USA?", "quickAnswers", "Quick answers", "why carrier identity decides many USA-to-Ireland return claims", { transatlantic: true, nonEuCarrier: true, preclearance: true, featured: true }),
  article("iaa-complain-airline-ireland", "What Is the IAA and How Do I Complain About an Airline in Ireland?", "quickAnswers", "Quick answers", "the IAA role after an airline fails to resolve a passenger-rights complaint", { localAuthority: true, featured: true }),
  article("eu261-compensation-payout-time-ireland", "How Long Does EU261 Compensation Take to Pay Out?", "quickAnswers", "Quick answers", "realistic timelines for airline replies, payment and escalation", {}),
  article("eu261-charter-flights-ireland", "Does EU261 Apply to Charter Flights in Ireland?", "quickAnswers", "Quick answers", "holiday and charter flights from Irish airports under EU261", {}),
  article("eu261-travel-agent-ireland-claim", "Can I Claim EU261 if I Booked Through a Travel Agent?", "quickAnswers", "Quick answers", "Skyscanner, Booking.com, Expedia, Travel Republic and who the claim is against", { ota: true }),
  article("aer-lingus-hotel-overnight-delay-ireland", "Does Aer Lingus Have to Pay for Hotel if My Flight Is Delayed Overnight?", "quickAnswers", "Quick answers", "care rights during overnight delays on Aer Lingus flights", { airlineName: "Aer Lingus" }),
  article("ryanair-cancelled-14-days-before-ireland", "What Happens if Ryanair Cancels My Flight Less Than 14 Days Before?", "quickAnswers", "Quick answers", "Ryanair cancellation timing, rerouting and possible compensation", { airlineName: "Ryanair", ctaPath: "/cancelled-flight", cancelledCase: true }),
  article("sue-airline-irish-courts-eu261", "Can I Sue an Airline in the Irish Courts for EU261?", "quickAnswers", "Quick answers", "Small Claims Court, District Court and larger Irish court routes", { smallClaims: true, localAuthority: true, featured: true }),
  article("claimwinger-airhelp-flightright-ireland", "ClaimWinger vs AirHelp vs Flightright - Best for Irish Passengers?", "quickAnswers", "Quick answers", "how to compare claim companies by fee, risk and legal handling", { featured: true }),
  article("claim-company-vs-diy-ireland-eu261", "Claim Company vs DIY - What's Best for Irish EU261 Claims?", "quickAnswers", "Quick answers", "when to claim yourself and when a no-win-no-fee service can help", {}),
  article("eu261-6-years-ireland-limitation-period", "EU261 for 6 Years - Ireland's Longest Limitation Period Explained", "quickAnswers", "Quick answers", "Ireland's 6-year limitation advantage and old flight claims", { limitation: true, featured: true, wordCount: 2200 }),
  article("small-claims-court-airline-ireland", "How to File a Small Claims Court Case Against an Airline in Ireland", "quickAnswers", "Quick answers", "Ireland-specific small claims process for eligible airline disputes", { smallClaims: true, localAuthority: true, featured: true }),
];

export const blogArticlesEnIrelandSorted = [...blogArticlesEnIreland].sort((articleA, articleB) =>
  articleB.publishDate.localeCompare(articleA.publishDate) ||
  Number(articleB.featured) - Number(articleA.featured) ||
  articleA.title.localeCompare(articleB.title, "en"),
);

export function getCategoryLabelEnIreland(category: BlogArticleEnIrelandCategory | string) {
  const labels: Record<BlogArticleEnIrelandCategory, string> = {
    quickAnswers: "Quick answers",
    law: "Irish passenger rights",
    airlines: "Airlines",
    airports: "Irish airports",
    transatlantic: "Transatlantic routes",
    routes: "European routes",
    lot: "LOT Polish Airlines Ireland",
    situations: "Special situations",
  };

  return labels[category as BlogArticleEnIrelandCategory] || category;
}

export function getEnIrelandArticleBySlug(slug: string) {
  return blogArticlesEnIreland.find((article) => article.slug === slug);
}
