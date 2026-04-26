import type { CalculatorLocaleCode } from "@/lib/flightCompensationCalculatorCopy";

export type AirportSuggestionRole = "from" | "to";

type AirportSuggestionCodes = Record<AirportSuggestionRole, readonly string[]>;

const airportSuggestionsByLocale: Record<CalculatorLocaleCode, AirportSuggestionCodes> = {
  pl: {
    from: ["WAW", "KRK", "GDN", "WRO", "POZ", "KTW", "WMI", "RZE"],
    to: ["LHR", "FRA", "CDG", "AMS", "IST", "DXB", "BCN", "FCO"],
  },
  en: {
    from: ["LHR", "LGW", "MAN", "DUB", "STN", "LTN", "EDI", "AMS"],
    to: ["CDG", "AMS", "FRA", "JFK", "DXB", "DUB", "BCN", "FCO"],
  },
  cs: {
    from: ["PRG", "BRQ", "OSR", "VIE", "BUD", "BER", "MUC", "FRA"],
    to: ["LHR", "CDG", "AMS", "FRA", "MAD", "BCN", "IST", "DXB"],
  },
  el: {
    from: ["ATH", "SKG", "HER", "RHO", "LCA", "FCO", "VIE", "FRA"],
    to: ["LHR", "FRA", "CDG", "AMS", "IST", "DXB", "FCO", "LCA"],
  },
  hi: {
    from: ["DEL", "BOM", "BLR", "HYD", "MAA", "LHR", "FRA", "CDG"],
    to: ["FRA", "LHR", "CDG", "AMS", "ZRH", "CPH", "DEL", "BOM"],
  },
  hu: {
    from: ["BUD", "VIE", "PRG", "FRA", "MUC", "LHR", "AMS", "CDG"],
    to: ["LHR", "FRA", "CDG", "AMS", "IST", "DXB", "BCN", "FCO"],
  },
  it: {
    from: ["FCO", "MXP", "BGY", "VCE", "NAP", "CTA", "FRA", "CDG"],
    to: ["LHR", "CDG", "AMS", "FRA", "MAD", "BCN", "DXB", "JFK"],
  },
  no: {
    from: ["OSL", "BGO", "TRD", "CPH", "ARN", "LHR", "AMS", "FRA"],
    to: ["LHR", "CPH", "ARN", "AMS", "FRA", "CDG", "BCN", "FCO"],
  },
  sk: {
    from: ["BTS", "KSC", "VIE", "PRG", "BUD", "KRK", "FRA", "MUC"],
    to: ["LHR", "FRA", "CDG", "AMS", "DUB", "BCN", "IST", "DXB"],
  },
  sv: {
    from: ["ARN", "GOT", "MMX", "CPH", "OSL", "HEL", "LHR", "AMS"],
    to: ["LHR", "CPH", "OSL", "HEL", "AMS", "FRA", "CDG", "BCN"],
  },
  tr: {
    from: ["IST", "AYT", "ESB", "ADB", "FRA", "AMS", "CDG", "LHR"],
    to: ["FRA", "AMS", "CDG", "LHR", "VIE", "BER", "IST", "AYT"],
  },
  vi: {
    from: ["HAN", "SGN", "DAD", "CDG", "FRA", "LHR", "AMS", "VIE"],
    to: ["CDG", "FRA", "LHR", "AMS", "VIE", "HAN", "SGN", "DAD"],
  },
  zh: {
    from: ["PVG", "PEK", "HKG", "CAN", "SZX", "LHR", "FRA", "CDG"],
    to: ["LHR", "FRA", "CDG", "AMS", "PVG", "PEK", "HKG", "CAN"],
  },
  lt: {
    from: ["VNO", "KUN", "PLQ", "RIX", "WAW", "CPH", "ARN", "OSL"],
    to: ["LHR", "CPH", "OSL", "ARN", "WAW", "FRA", "AMS", "VNO"],
  },
  lv: {
    from: ["RIX", "VNO", "TLL", "HEL", "WAW", "CPH", "ARN", "OSL"],
    to: ["LHR", "DUB", "CPH", "HEL", "ARN", "OSL", "FRA", "AMS"],
  },
  bg: {
    from: ["SOF", "VAR", "BOJ", "OTP", "IST", "VIE", "FRA", "LHR"],
    to: ["FRA", "VIE", "LHR", "CDG", "AMS", "IST", "SOF", "VAR"],
  },
};

export function getAirportSuggestionCodes(
  locale: CalculatorLocaleCode,
  role: AirportSuggestionRole,
) {
  return airportSuggestionsByLocale[locale]?.[role] || airportSuggestionsByLocale.pl[role];
}
