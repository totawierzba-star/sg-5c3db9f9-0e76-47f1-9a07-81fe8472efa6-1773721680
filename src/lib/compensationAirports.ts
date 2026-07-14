export type PassengerRightsArea = "eu" | "eea" | "ch" | "uk" | "other";

export type CompensationAirport = {
  code: string;
  name: { pl: string; en: string };
  city: { pl: string; en: string };
  country: string;
  lat: number;
  lon: number;
  passengerRightsArea: PassengerRightsArea;
};

export const compensationAirports = [
  {
    "code": "WAW",
    "name": {
      "pl": "Warszawa Chopina",
      "en": "Warsaw Chopin"
    },
    "city": {
      "pl": "Warszawa",
      "en": "Warsaw"
    },
    "country": "PL",
    "lat": 52.1657,
    "lon": 20.9671,
    "passengerRightsArea": "eu"
  },
  {
    "code": "WMI",
    "name": {
      "pl": "Warszawa Modlin",
      "en": "Warsaw Modlin"
    },
    "city": {
      "pl": "Warszawa",
      "en": "Warsaw"
    },
    "country": "PL",
    "lat": 52.4511,
    "lon": 20.6518,
    "passengerRightsArea": "eu"
  },
  {
    "code": "KRK",
    "name": {
      "pl": "Kraków Balice",
      "en": "Kraków Balice"
    },
    "city": {
      "pl": "Kraków",
      "en": "Kraków"
    },
    "country": "PL",
    "lat": 50.0777,
    "lon": 19.7848,
    "passengerRightsArea": "eu"
  },
  {
    "code": "GDN",
    "name": {
      "pl": "Gdańsk Rębiechowo",
      "en": "Gdańsk"
    },
    "city": {
      "pl": "Gdańsk",
      "en": "Gdańsk"
    },
    "country": "PL",
    "lat": 54.3776,
    "lon": 18.4662,
    "passengerRightsArea": "eu"
  },
  {
    "code": "WRO",
    "name": {
      "pl": "Wrocław",
      "en": "Wrocław"
    },
    "city": {
      "pl": "Wrocław",
      "en": "Wrocław"
    },
    "country": "PL",
    "lat": 51.1027,
    "lon": 16.8858,
    "passengerRightsArea": "eu"
  },
  {
    "code": "POZ",
    "name": {
      "pl": "Poznań Ławica",
      "en": "Poznań"
    },
    "city": {
      "pl": "Poznań",
      "en": "Poznań"
    },
    "country": "PL",
    "lat": 52.421,
    "lon": 16.8263,
    "passengerRightsArea": "eu"
  },
  {
    "code": "KTW",
    "name": {
      "pl": "Katowice Pyrzowice",
      "en": "Katowice"
    },
    "city": {
      "pl": "Katowice",
      "en": "Katowice"
    },
    "country": "PL",
    "lat": 50.4743,
    "lon": 19.08,
    "passengerRightsArea": "eu"
  },
  {
    "code": "RZE",
    "name": {
      "pl": "Rzeszów Jasionka",
      "en": "Rzeszów"
    },
    "city": {
      "pl": "Rzeszów",
      "en": "Rzeszów"
    },
    "country": "PL",
    "lat": 50.11,
    "lon": 22.019,
    "passengerRightsArea": "eu"
  },
  {
    "code": "LUZ",
    "name": {
      "pl": "Lublin",
      "en": "Lublin"
    },
    "city": {
      "pl": "Lublin",
      "en": "Lublin"
    },
    "country": "PL",
    "lat": 51.2403,
    "lon": 22.7136,
    "passengerRightsArea": "eu"
  },
  {
    "code": "FRA",
    "name": {
      "pl": "Frankfurt",
      "en": "Frankfurt"
    },
    "city": {
      "pl": "Frankfurt",
      "en": "Frankfurt"
    },
    "country": "DE",
    "lat": 50.0379,
    "lon": 8.5622,
    "passengerRightsArea": "eu"
  },
  {
    "code": "MUC",
    "name": {
      "pl": "Monachium",
      "en": "Munich"
    },
    "city": {
      "pl": "Monachium",
      "en": "Munich"
    },
    "country": "DE",
    "lat": 48.3538,
    "lon": 11.7861,
    "passengerRightsArea": "eu"
  },
  {
    "code": "BER",
    "name": {
      "pl": "Berlin Brandenburg",
      "en": "Berlin Brandenburg"
    },
    "city": {
      "pl": "Berlin",
      "en": "Berlin"
    },
    "country": "DE",
    "lat": 52.3667,
    "lon": 13.5033,
    "passengerRightsArea": "eu"
  },
  {
    "code": "HAM",
    "name": {
      "pl": "Hamburg",
      "en": "Hamburg"
    },
    "city": {
      "pl": "Hamburg",
      "en": "Hamburg"
    },
    "country": "DE",
    "lat": 53.6304,
    "lon": 9.9882,
    "passengerRightsArea": "eu"
  },
  {
    "code": "DUS",
    "name": {
      "pl": "Düsseldorf",
      "en": "Düsseldorf"
    },
    "city": {
      "pl": "Düsseldorf",
      "en": "Düsseldorf"
    },
    "country": "DE",
    "lat": 51.2895,
    "lon": 6.7668,
    "passengerRightsArea": "eu"
  },
  {
    "code": "CGN",
    "name": {
      "pl": "Kolonia/Bonn",
      "en": "Cologne/Bonn"
    },
    "city": {
      "pl": "Kolonia",
      "en": "Cologne"
    },
    "country": "DE",
    "lat": 50.8659,
    "lon": 7.1427,
    "passengerRightsArea": "eu"
  },
  {
    "code": "STR",
    "name": {
      "pl": "Stuttgart",
      "en": "Stuttgart"
    },
    "city": {
      "pl": "Stuttgart",
      "en": "Stuttgart"
    },
    "country": "DE",
    "lat": 48.6899,
    "lon": 9.222,
    "passengerRightsArea": "eu"
  },
  {
    "code": "CDG",
    "name": {
      "pl": "Paryż Charles de Gaulle",
      "en": "Paris Charles de Gaulle"
    },
    "city": {
      "pl": "Paryż",
      "en": "Paris"
    },
    "country": "FR",
    "lat": 49.0097,
    "lon": 2.5479,
    "passengerRightsArea": "eu"
  },
  {
    "code": "ORY",
    "name": {
      "pl": "Paryż Orly",
      "en": "Paris Orly"
    },
    "city": {
      "pl": "Paryż",
      "en": "Paris"
    },
    "country": "FR",
    "lat": 48.7233,
    "lon": 2.3794,
    "passengerRightsArea": "eu"
  },
  {
    "code": "NCE",
    "name": {
      "pl": "Nicea",
      "en": "Nice"
    },
    "city": {
      "pl": "Nicea",
      "en": "Nice"
    },
    "country": "FR",
    "lat": 43.6584,
    "lon": 7.2159,
    "passengerRightsArea": "eu"
  },
  {
    "code": "LYS",
    "name": {
      "pl": "Lyon",
      "en": "Lyon"
    },
    "city": {
      "pl": "Lyon",
      "en": "Lyon"
    },
    "country": "FR",
    "lat": 45.7256,
    "lon": 5.0811,
    "passengerRightsArea": "eu"
  },
  {
    "code": "MRS",
    "name": {
      "pl": "Marsylia",
      "en": "Marseille"
    },
    "city": {
      "pl": "Marsylia",
      "en": "Marseille"
    },
    "country": "FR",
    "lat": 43.4367,
    "lon": 5.2148,
    "passengerRightsArea": "eu"
  },
  {
    "code": "TLS",
    "name": {
      "pl": "Tuluza",
      "en": "Toulouse"
    },
    "city": {
      "pl": "Tuluza",
      "en": "Toulouse"
    },
    "country": "FR",
    "lat": 43.6293,
    "lon": 1.3638,
    "passengerRightsArea": "eu"
  },
  {
    "code": "LHR",
    "name": {
      "pl": "Londyn Heathrow",
      "en": "London Heathrow"
    },
    "city": {
      "pl": "Londyn",
      "en": "London"
    },
    "country": "GB",
    "lat": 51.47,
    "lon": -0.4543,
    "passengerRightsArea": "uk"
  },
  {
    "code": "LGW",
    "name": {
      "pl": "Londyn Gatwick",
      "en": "London Gatwick"
    },
    "city": {
      "pl": "Londyn",
      "en": "London"
    },
    "country": "GB",
    "lat": 51.1537,
    "lon": -0.1821,
    "passengerRightsArea": "uk"
  },
  {
    "code": "STN",
    "name": {
      "pl": "Londyn Stansted",
      "en": "London Stansted"
    },
    "city": {
      "pl": "Londyn",
      "en": "London"
    },
    "country": "GB",
    "lat": 51.8849,
    "lon": 0.2349,
    "passengerRightsArea": "uk"
  },
  {
    "code": "LTN",
    "name": {
      "pl": "Londyn Luton",
      "en": "London Luton"
    },
    "city": {
      "pl": "Londyn",
      "en": "London"
    },
    "country": "GB",
    "lat": 51.8747,
    "lon": -0.3683,
    "passengerRightsArea": "uk"
  },
  {
    "code": "MAN",
    "name": {
      "pl": "Manchester",
      "en": "Manchester"
    },
    "city": {
      "pl": "Manchester",
      "en": "Manchester"
    },
    "country": "GB",
    "lat": 53.3537,
    "lon": -2.275,
    "passengerRightsArea": "uk"
  },
  {
    "code": "EDI",
    "name": {
      "pl": "Edynburg",
      "en": "Edinburgh"
    },
    "city": {
      "pl": "Edynburg",
      "en": "Edinburgh"
    },
    "country": "GB",
    "lat": 55.95,
    "lon": -3.3725,
    "passengerRightsArea": "uk"
  },
  {
    "code": "DUB",
    "name": {
      "pl": "Dublin",
      "en": "Dublin"
    },
    "city": {
      "pl": "Dublin",
      "en": "Dublin"
    },
    "country": "IE",
    "lat": 53.4213,
    "lon": -6.2701,
    "passengerRightsArea": "eu"
  },
  {
    "code": "MAD",
    "name": {
      "pl": "Madryt",
      "en": "Madrid"
    },
    "city": {
      "pl": "Madryt",
      "en": "Madrid"
    },
    "country": "ES",
    "lat": 40.4936,
    "lon": -3.5668,
    "passengerRightsArea": "eu"
  },
  {
    "code": "BCN",
    "name": {
      "pl": "Barcelona",
      "en": "Barcelona"
    },
    "city": {
      "pl": "Barcelona",
      "en": "Barcelona"
    },
    "country": "ES",
    "lat": 41.2974,
    "lon": 2.0833,
    "passengerRightsArea": "eu"
  },
  {
    "code": "AGP",
    "name": {
      "pl": "Malaga",
      "en": "Malaga"
    },
    "city": {
      "pl": "Malaga",
      "en": "Malaga"
    },
    "country": "ES",
    "lat": 36.6749,
    "lon": -4.4991,
    "passengerRightsArea": "eu"
  },
  {
    "code": "PMI",
    "name": {
      "pl": "Palma de Mallorca",
      "en": "Palma de Mallorca"
    },
    "city": {
      "pl": "Palma",
      "en": "Palma"
    },
    "country": "ES",
    "lat": 39.5517,
    "lon": 2.7388,
    "passengerRightsArea": "eu"
  },
  {
    "code": "TFS",
    "name": {
      "pl": "Teneryfa Południe",
      "en": "Tenerife South"
    },
    "city": {
      "pl": "Teneryfa",
      "en": "Tenerife"
    },
    "country": "ES",
    "lat": 28.0445,
    "lon": -16.5725,
    "passengerRightsArea": "eu"
  },
  {
    "code": "LPA",
    "name": {
      "pl": "Gran Canaria",
      "en": "Gran Canaria"
    },
    "city": {
      "pl": "Las Palmas",
      "en": "Las Palmas"
    },
    "country": "ES",
    "lat": 27.9319,
    "lon": -15.3866,
    "passengerRightsArea": "eu"
  },
  {
    "code": "LIS",
    "name": {
      "pl": "Lizbona",
      "en": "Lisbon"
    },
    "city": {
      "pl": "Lizbona",
      "en": "Lisbon"
    },
    "country": "PT",
    "lat": 38.7813,
    "lon": -9.1363,
    "passengerRightsArea": "eu"
  },
  {
    "code": "OPO",
    "name": {
      "pl": "Porto",
      "en": "Porto"
    },
    "city": {
      "pl": "Porto",
      "en": "Porto"
    },
    "country": "PT",
    "lat": 41.2481,
    "lon": -8.6814,
    "passengerRightsArea": "eu"
  },
  {
    "code": "FAO",
    "name": {
      "pl": "Faro",
      "en": "Faro"
    },
    "city": {
      "pl": "Faro",
      "en": "Faro"
    },
    "country": "PT",
    "lat": 37.0144,
    "lon": -7.9659,
    "passengerRightsArea": "eu"
  },
  {
    "code": "FCO",
    "name": {
      "pl": "Rzym Fiumicino",
      "en": "Rome Fiumicino"
    },
    "city": {
      "pl": "Rzym",
      "en": "Rome"
    },
    "country": "IT",
    "lat": 41.8003,
    "lon": 12.2389,
    "passengerRightsArea": "eu"
  },
  {
    "code": "MXP",
    "name": {
      "pl": "Mediolan Malpensa",
      "en": "Milan Malpensa"
    },
    "city": {
      "pl": "Mediolan",
      "en": "Milan"
    },
    "country": "IT",
    "lat": 45.6306,
    "lon": 8.7281,
    "passengerRightsArea": "eu"
  },
  {
    "code": "BGY",
    "name": {
      "pl": "Bergamo",
      "en": "Bergamo"
    },
    "city": {
      "pl": "Bergamo",
      "en": "Bergamo"
    },
    "country": "IT",
    "lat": 45.6739,
    "lon": 9.7042,
    "passengerRightsArea": "eu"
  },
  {
    "code": "VCE",
    "name": {
      "pl": "Wenecja",
      "en": "Venice"
    },
    "city": {
      "pl": "Wenecja",
      "en": "Venice"
    },
    "country": "IT",
    "lat": 45.5053,
    "lon": 12.3519,
    "passengerRightsArea": "eu"
  },
  {
    "code": "NAP",
    "name": {
      "pl": "Neapol",
      "en": "Naples"
    },
    "city": {
      "pl": "Neapol",
      "en": "Naples"
    },
    "country": "IT",
    "lat": 40.886,
    "lon": 14.2908,
    "passengerRightsArea": "eu"
  },
  {
    "code": "CTA",
    "name": {
      "pl": "Katania",
      "en": "Catania"
    },
    "city": {
      "pl": "Katania",
      "en": "Catania"
    },
    "country": "IT",
    "lat": 37.4668,
    "lon": 15.0664,
    "passengerRightsArea": "eu"
  },
  {
    "code": "AMS",
    "name": {
      "pl": "Amsterdam Schiphol",
      "en": "Amsterdam Schiphol"
    },
    "city": {
      "pl": "Amsterdam",
      "en": "Amsterdam"
    },
    "country": "NL",
    "lat": 52.3105,
    "lon": 4.7683,
    "passengerRightsArea": "eu"
  },
  {
    "code": "BRU",
    "name": {
      "pl": "Bruksela",
      "en": "Brussels"
    },
    "city": {
      "pl": "Bruksela",
      "en": "Brussels"
    },
    "country": "BE",
    "lat": 50.9014,
    "lon": 4.4844,
    "passengerRightsArea": "eu"
  },
  {
    "code": "CRL",
    "name": {
      "pl": "Charleroi",
      "en": "Charleroi"
    },
    "city": {
      "pl": "Charleroi",
      "en": "Charleroi"
    },
    "country": "BE",
    "lat": 50.4592,
    "lon": 4.4538,
    "passengerRightsArea": "eu"
  },
  {
    "code": "LUX",
    "name": {
      "pl": "Luksemburg",
      "en": "Luxembourg"
    },
    "city": {
      "pl": "Luksemburg",
      "en": "Luxembourg"
    },
    "country": "LU",
    "lat": 49.6266,
    "lon": 6.2115,
    "passengerRightsArea": "eu"
  },
  {
    "code": "CPH",
    "name": {
      "pl": "Kopenhaga",
      "en": "Copenhagen"
    },
    "city": {
      "pl": "Kopenhaga",
      "en": "Copenhagen"
    },
    "country": "DK",
    "lat": 55.6181,
    "lon": 12.6561,
    "passengerRightsArea": "eu"
  },
  {
    "code": "ARN",
    "name": {
      "pl": "Sztokholm Arlanda",
      "en": "Stockholm Arlanda"
    },
    "city": {
      "pl": "Sztokholm",
      "en": "Stockholm"
    },
    "country": "SE",
    "lat": 59.6519,
    "lon": 17.9186,
    "passengerRightsArea": "eu"
  },
  {
    "code": "GOT",
    "name": {
      "pl": "Goteborg Landvetter",
      "en": "Gothenburg Landvetter"
    },
    "city": {
      "pl": "Goteborg",
      "en": "Gothenburg"
    },
    "country": "SE",
    "lat": 57.6628,
    "lon": 12.2798,
    "passengerRightsArea": "eu"
  },
  {
    "code": "MMX",
    "name": {
      "pl": "Malmo",
      "en": "Malmo"
    },
    "city": {
      "pl": "Malmo",
      "en": "Malmo"
    },
    "country": "SE",
    "lat": 55.5363,
    "lon": 13.3762,
    "passengerRightsArea": "eu"
  },
  {
    "code": "OSL",
    "name": {
      "pl": "Oslo Gardermoen",
      "en": "Oslo Gardermoen"
    },
    "city": {
      "pl": "Oslo",
      "en": "Oslo"
    },
    "country": "NO",
    "lat": 60.1939,
    "lon": 11.1004,
    "passengerRightsArea": "eea"
  },
  {
    "code": "BGO",
    "name": {
      "pl": "Bergen Flesland",
      "en": "Bergen Flesland"
    },
    "city": {
      "pl": "Bergen",
      "en": "Bergen"
    },
    "country": "NO",
    "lat": 60.2934,
    "lon": 5.2181,
    "passengerRightsArea": "eea"
  },
  {
    "code": "TRD",
    "name": {
      "pl": "Trondheim Vaernes",
      "en": "Trondheim Vaernes"
    },
    "city": {
      "pl": "Trondheim",
      "en": "Trondheim"
    },
    "country": "NO",
    "lat": 63.4578,
    "lon": 10.924,
    "passengerRightsArea": "eea"
  },
  {
    "code": "HEL",
    "name": {
      "pl": "Helsinki",
      "en": "Helsinki"
    },
    "city": {
      "pl": "Helsinki",
      "en": "Helsinki"
    },
    "country": "FI",
    "lat": 60.3172,
    "lon": 24.9633,
    "passengerRightsArea": "eu"
  },
  {
    "code": "KEF",
    "name": {
      "pl": "Reykjavik",
      "en": "Reykjavik"
    },
    "city": {
      "pl": "Reykjavik",
      "en": "Reykjavik"
    },
    "country": "IS",
    "lat": 63.985,
    "lon": -22.6056,
    "passengerRightsArea": "eea"
  },
  {
    "code": "RIX",
    "name": {
      "pl": "Ryga",
      "en": "Riga"
    },
    "city": {
      "pl": "Ryga",
      "en": "Riga"
    },
    "country": "LV",
    "lat": 56.9236,
    "lon": 23.9711,
    "passengerRightsArea": "eu"
  },
  {
    "code": "VNO",
    "name": {
      "pl": "Wilno",
      "en": "Vilnius"
    },
    "city": {
      "pl": "Wilno",
      "en": "Vilnius"
    },
    "country": "LT",
    "lat": 54.6341,
    "lon": 25.2858,
    "passengerRightsArea": "eu"
  },
  {
    "code": "KUN",
    "name": {
      "pl": "Kowno",
      "en": "Kaunas"
    },
    "city": {
      "pl": "Kowno",
      "en": "Kaunas"
    },
    "country": "LT",
    "lat": 54.9639,
    "lon": 24.0848,
    "passengerRightsArea": "eu"
  },
  {
    "code": "PLQ",
    "name": {
      "pl": "Połąga",
      "en": "Palanga"
    },
    "city": {
      "pl": "Połąga",
      "en": "Palanga"
    },
    "country": "LT",
    "lat": 55.9732,
    "lon": 21.0939,
    "passengerRightsArea": "eu"
  },
  {
    "code": "TLL",
    "name": {
      "pl": "Tallinn",
      "en": "Tallinn"
    },
    "city": {
      "pl": "Tallinn",
      "en": "Tallinn"
    },
    "country": "EE",
    "lat": 59.4133,
    "lon": 24.8328,
    "passengerRightsArea": "eu"
  },
  {
    "code": "PRG",
    "name": {
      "pl": "Praga",
      "en": "Prague"
    },
    "city": {
      "pl": "Praga",
      "en": "Prague"
    },
    "country": "CZ",
    "lat": 50.1008,
    "lon": 14.26,
    "passengerRightsArea": "eu"
  },
  {
    "code": "BRQ",
    "name": {
      "pl": "Brno Turany",
      "en": "Brno Turany"
    },
    "city": {
      "pl": "Brno",
      "en": "Brno"
    },
    "country": "CZ",
    "lat": 49.1513,
    "lon": 16.6944,
    "passengerRightsArea": "eu"
  },
  {
    "code": "OSR",
    "name": {
      "pl": "Ostrava",
      "en": "Ostrava"
    },
    "city": {
      "pl": "Ostrava",
      "en": "Ostrava"
    },
    "country": "CZ",
    "lat": 49.6963,
    "lon": 18.1111,
    "passengerRightsArea": "eu"
  },
  {
    "code": "VIE",
    "name": {
      "pl": "Wiedeń",
      "en": "Vienna"
    },
    "city": {
      "pl": "Wiedeń",
      "en": "Vienna"
    },
    "country": "AT",
    "lat": 48.1103,
    "lon": 16.5697,
    "passengerRightsArea": "eu"
  },
  {
    "code": "BTS",
    "name": {
      "pl": "Bratyslawa",
      "en": "Bratislava"
    },
    "city": {
      "pl": "Bratyslawa",
      "en": "Bratislava"
    },
    "country": "SK",
    "lat": 48.1702,
    "lon": 17.2127,
    "passengerRightsArea": "eu"
  },
  {
    "code": "KSC",
    "name": {
      "pl": "Koszyce",
      "en": "Kosice"
    },
    "city": {
      "pl": "Koszyce",
      "en": "Kosice"
    },
    "country": "SK",
    "lat": 48.6631,
    "lon": 21.2411,
    "passengerRightsArea": "eu"
  },
  {
    "code": "BUD",
    "name": {
      "pl": "Budapeszt",
      "en": "Budapest"
    },
    "city": {
      "pl": "Budapeszt",
      "en": "Budapest"
    },
    "country": "HU",
    "lat": 47.4369,
    "lon": 19.2556,
    "passengerRightsArea": "eu"
  },
  {
    "code": "ZRH",
    "name": {
      "pl": "Zurych",
      "en": "Zurich"
    },
    "city": {
      "pl": "Zurych",
      "en": "Zurich"
    },
    "country": "CH",
    "lat": 47.4647,
    "lon": 8.5492,
    "passengerRightsArea": "ch"
  },
  {
    "code": "GVA",
    "name": {
      "pl": "Genewa",
      "en": "Geneva"
    },
    "city": {
      "pl": "Genewa",
      "en": "Geneva"
    },
    "country": "CH",
    "lat": 46.2381,
    "lon": 6.1089,
    "passengerRightsArea": "ch"
  },
  {
    "code": "ATH",
    "name": {
      "pl": "Ateny",
      "en": "Athens"
    },
    "city": {
      "pl": "Ateny",
      "en": "Athens"
    },
    "country": "GR",
    "lat": 37.9364,
    "lon": 23.9445,
    "passengerRightsArea": "eu"
  },
  {
    "code": "SKG",
    "name": {
      "pl": "Saloniki",
      "en": "Thessaloniki"
    },
    "city": {
      "pl": "Saloniki",
      "en": "Thessaloniki"
    },
    "country": "GR",
    "lat": 40.5197,
    "lon": 22.9709,
    "passengerRightsArea": "eu"
  },
  {
    "code": "HER",
    "name": {
      "pl": "Heraklion",
      "en": "Heraklion"
    },
    "city": {
      "pl": "Heraklion",
      "en": "Heraklion"
    },
    "country": "GR",
    "lat": 35.3397,
    "lon": 25.1803,
    "passengerRightsArea": "eu"
  },
  {
    "code": "RHO",
    "name": {
      "pl": "Rodos",
      "en": "Rhodes"
    },
    "city": {
      "pl": "Rodos",
      "en": "Rhodes"
    },
    "country": "GR",
    "lat": 36.4054,
    "lon": 28.0862,
    "passengerRightsArea": "eu"
  },
  {
    "code": "OTP",
    "name": {
      "pl": "Bukareszt",
      "en": "Bucharest"
    },
    "city": {
      "pl": "Bukareszt",
      "en": "Bucharest"
    },
    "country": "RO",
    "lat": 44.5711,
    "lon": 26.085,
    "passengerRightsArea": "eu"
  },
  {
    "code": "SOF",
    "name": {
      "pl": "Sofia",
      "en": "Sofia"
    },
    "city": {
      "pl": "Sofia",
      "en": "Sofia"
    },
    "country": "BG",
    "lat": 42.6967,
    "lon": 23.4114,
    "passengerRightsArea": "eu"
  },
  {
    "code": "VAR",
    "name": {
      "pl": "Warna",
      "en": "Varna"
    },
    "city": {
      "pl": "Warna",
      "en": "Varna"
    },
    "country": "BG",
    "lat": 43.2321,
    "lon": 27.8251,
    "passengerRightsArea": "eu"
  },
  {
    "code": "BOJ",
    "name": {
      "pl": "Burgas",
      "en": "Burgas"
    },
    "city": {
      "pl": "Burgas",
      "en": "Burgas"
    },
    "country": "BG",
    "lat": 42.5696,
    "lon": 27.5152,
    "passengerRightsArea": "eu"
  },
  {
    "code": "ZAG",
    "name": {
      "pl": "Zagrzeb",
      "en": "Zagreb"
    },
    "city": {
      "pl": "Zagrzeb",
      "en": "Zagreb"
    },
    "country": "HR",
    "lat": 45.7429,
    "lon": 16.0688,
    "passengerRightsArea": "eu"
  },
  {
    "code": "SPU",
    "name": {
      "pl": "Split",
      "en": "Split"
    },
    "city": {
      "pl": "Split",
      "en": "Split"
    },
    "country": "HR",
    "lat": 43.5389,
    "lon": 16.298,
    "passengerRightsArea": "eu"
  },
  {
    "code": "LJU",
    "name": {
      "pl": "Lublana",
      "en": "Ljubljana"
    },
    "city": {
      "pl": "Lublana",
      "en": "Ljubljana"
    },
    "country": "SI",
    "lat": 46.2237,
    "lon": 14.4576,
    "passengerRightsArea": "eu"
  },
  {
    "code": "MLA",
    "name": {
      "pl": "Malta",
      "en": "Malta"
    },
    "city": {
      "pl": "Malta",
      "en": "Malta"
    },
    "country": "MT",
    "lat": 35.8575,
    "lon": 14.4775,
    "passengerRightsArea": "eu"
  },
  {
    "code": "LCA",
    "name": {
      "pl": "Larnaka",
      "en": "Larnaca"
    },
    "city": {
      "pl": "Larnaka",
      "en": "Larnaca"
    },
    "country": "CY",
    "lat": 34.8751,
    "lon": 33.6249,
    "passengerRightsArea": "eu"
  },
  {
    "code": "JFK",
    "name": {
      "pl": "Nowy Jork JFK",
      "en": "New York JFK"
    },
    "city": {
      "pl": "Nowy Jork",
      "en": "New York"
    },
    "country": "US",
    "lat": 40.6413,
    "lon": -73.7781,
    "passengerRightsArea": "other"
  },
  {
    "code": "EWR",
    "name": {
      "pl": "Nowy Jork Newark",
      "en": "New York Newark"
    },
    "city": {
      "pl": "Nowy Jork",
      "en": "New York"
    },
    "country": "US",
    "lat": 40.6895,
    "lon": -74.1745,
    "passengerRightsArea": "other"
  },
  {
    "code": "LAX",
    "name": {
      "pl": "Los Angeles",
      "en": "Los Angeles"
    },
    "city": {
      "pl": "Los Angeles",
      "en": "Los Angeles"
    },
    "country": "US",
    "lat": 33.9416,
    "lon": -118.4085,
    "passengerRightsArea": "other"
  },
  {
    "code": "ORD",
    "name": {
      "pl": "Chicago O'Hare",
      "en": "Chicago O'Hare"
    },
    "city": {
      "pl": "Chicago",
      "en": "Chicago"
    },
    "country": "US",
    "lat": 41.9742,
    "lon": -87.9073,
    "passengerRightsArea": "other"
  },
  {
    "code": "MIA",
    "name": {
      "pl": "Miami",
      "en": "Miami"
    },
    "city": {
      "pl": "Miami",
      "en": "Miami"
    },
    "country": "US",
    "lat": 25.7959,
    "lon": -80.287,
    "passengerRightsArea": "other"
  },
  {
    "code": "BOS",
    "name": {
      "pl": "Boston",
      "en": "Boston"
    },
    "city": {
      "pl": "Boston",
      "en": "Boston"
    },
    "country": "US",
    "lat": 42.3656,
    "lon": -71.0096,
    "passengerRightsArea": "other"
  },
  {
    "code": "IAD",
    "name": {
      "pl": "Waszyngton Dulles",
      "en": "Washington Dulles"
    },
    "city": {
      "pl": "Waszyngton",
      "en": "Washington"
    },
    "country": "US",
    "lat": 38.9531,
    "lon": -77.4565,
    "passengerRightsArea": "other"
  },
  {
    "code": "SFO",
    "name": {
      "pl": "San Francisco",
      "en": "San Francisco"
    },
    "city": {
      "pl": "San Francisco",
      "en": "San Francisco"
    },
    "country": "US",
    "lat": 37.6213,
    "lon": -122.379,
    "passengerRightsArea": "other"
  },
  {
    "code": "ATL",
    "name": {
      "pl": "Atlanta",
      "en": "Atlanta"
    },
    "city": {
      "pl": "Atlanta",
      "en": "Atlanta"
    },
    "country": "US",
    "lat": 33.6407,
    "lon": -84.4277,
    "passengerRightsArea": "other"
  },
  {
    "code": "YYZ",
    "name": {
      "pl": "Toronto",
      "en": "Toronto"
    },
    "city": {
      "pl": "Toronto",
      "en": "Toronto"
    },
    "country": "CA",
    "lat": 43.6777,
    "lon": -79.6248,
    "passengerRightsArea": "other"
  },
  {
    "code": "YUL",
    "name": {
      "pl": "Montreal",
      "en": "Montreal"
    },
    "city": {
      "pl": "Montreal",
      "en": "Montreal"
    },
    "country": "CA",
    "lat": 45.4706,
    "lon": -73.7408,
    "passengerRightsArea": "other"
  },
  {
    "code": "YVR",
    "name": {
      "pl": "Vancouver",
      "en": "Vancouver"
    },
    "city": {
      "pl": "Vancouver",
      "en": "Vancouver"
    },
    "country": "CA",
    "lat": 49.1967,
    "lon": -123.1815,
    "passengerRightsArea": "other"
  },
  {
    "code": "DXB",
    "name": {
      "pl": "Dubaj",
      "en": "Dubai"
    },
    "city": {
      "pl": "Dubaj",
      "en": "Dubai"
    },
    "country": "AE",
    "lat": 25.2532,
    "lon": 55.3657,
    "passengerRightsArea": "other"
  },
  {
    "code": "AUH",
    "name": {
      "pl": "Abu Zabi",
      "en": "Abu Dhabi"
    },
    "city": {
      "pl": "Abu Zabi",
      "en": "Abu Dhabi"
    },
    "country": "AE",
    "lat": 24.4331,
    "lon": 54.6511,
    "passengerRightsArea": "other"
  },
  {
    "code": "DOH",
    "name": {
      "pl": "Doha",
      "en": "Doha"
    },
    "city": {
      "pl": "Doha",
      "en": "Doha"
    },
    "country": "QA",
    "lat": 25.2736,
    "lon": 51.608,
    "passengerRightsArea": "other"
  },
  {
    "code": "TLV",
    "name": {
      "pl": "Tel Awiw",
      "en": "Tel Aviv"
    },
    "city": {
      "pl": "Tel Awiw",
      "en": "Tel Aviv"
    },
    "country": "IL",
    "lat": 32.0114,
    "lon": 34.8867,
    "passengerRightsArea": "other"
  },
  {
    "code": "IST",
    "name": {
      "pl": "Stambuł",
      "en": "Istanbul"
    },
    "city": {
      "pl": "Stambuł",
      "en": "Istanbul"
    },
    "country": "TR",
    "lat": 41.2753,
    "lon": 28.7519,
    "passengerRightsArea": "other"
  },
  {
    "code": "AYT",
    "name": {
      "pl": "Antalya",
      "en": "Antalya"
    },
    "city": {
      "pl": "Antalya",
      "en": "Antalya"
    },
    "country": "TR",
    "lat": 36.8987,
    "lon": 30.8005,
    "passengerRightsArea": "other"
  },
  {
    "code": "ESB",
    "name": {
      "pl": "Ankara",
      "en": "Ankara"
    },
    "city": {
      "pl": "Ankara",
      "en": "Ankara"
    },
    "country": "TR",
    "lat": 40.1281,
    "lon": 32.9951,
    "passengerRightsArea": "other"
  },
  {
    "code": "ADB",
    "name": {
      "pl": "Izmir",
      "en": "Izmir"
    },
    "city": {
      "pl": "Izmir",
      "en": "Izmir"
    },
    "country": "TR",
    "lat": 38.2924,
    "lon": 27.157,
    "passengerRightsArea": "other"
  },
  {
    "code": "RUH",
    "name": {
      "pl": "Rijad",
      "en": "Riyadh"
    },
    "city": {
      "pl": "Rijad",
      "en": "Riyadh"
    },
    "country": "SA",
    "lat": 24.9576,
    "lon": 46.6988,
    "passengerRightsArea": "other"
  },
  {
    "code": "AMM",
    "name": {
      "pl": "Amman",
      "en": "Amman"
    },
    "city": {
      "pl": "Amman",
      "en": "Amman"
    },
    "country": "JO",
    "lat": 31.7226,
    "lon": 35.9932,
    "passengerRightsArea": "other"
  },
  {
    "code": "CAI",
    "name": {
      "pl": "Kair",
      "en": "Cairo"
    },
    "city": {
      "pl": "Kair",
      "en": "Cairo"
    },
    "country": "EG",
    "lat": 30.1219,
    "lon": 31.4056,
    "passengerRightsArea": "other"
  },
  {
    "code": "HRG",
    "name": {
      "pl": "Hurghada",
      "en": "Hurghada"
    },
    "city": {
      "pl": "Hurghada",
      "en": "Hurghada"
    },
    "country": "EG",
    "lat": 27.1783,
    "lon": 33.7994,
    "passengerRightsArea": "other"
  },
  {
    "code": "RAK",
    "name": {
      "pl": "Marrakesz",
      "en": "Marrakech"
    },
    "city": {
      "pl": "Marrakesz",
      "en": "Marrakech"
    },
    "country": "MA",
    "lat": 31.6069,
    "lon": -8.0363,
    "passengerRightsArea": "other"
  },
  {
    "code": "CMN",
    "name": {
      "pl": "Casablanca",
      "en": "Casablanca"
    },
    "city": {
      "pl": "Casablanca",
      "en": "Casablanca"
    },
    "country": "MA",
    "lat": 33.3675,
    "lon": -7.5898,
    "passengerRightsArea": "other"
  },
  {
    "code": "TUN",
    "name": {
      "pl": "Tunis",
      "en": "Tunis"
    },
    "city": {
      "pl": "Tunis",
      "en": "Tunis"
    },
    "country": "TN",
    "lat": 36.851,
    "lon": 10.2272,
    "passengerRightsArea": "other"
  },
  {
    "code": "JNB",
    "name": {
      "pl": "Johannesburg",
      "en": "Johannesburg"
    },
    "city": {
      "pl": "Johannesburg",
      "en": "Johannesburg"
    },
    "country": "ZA",
    "lat": -26.1367,
    "lon": 28.2411,
    "passengerRightsArea": "other"
  },
  {
    "code": "CPT",
    "name": {
      "pl": "Kapsztad",
      "en": "Cape Town"
    },
    "city": {
      "pl": "Kapsztad",
      "en": "Cape Town"
    },
    "country": "ZA",
    "lat": -33.9649,
    "lon": 18.6027,
    "passengerRightsArea": "other"
  },
  {
    "code": "ADD",
    "name": {
      "pl": "Addis Abeba",
      "en": "Addis Ababa"
    },
    "city": {
      "pl": "Addis Abeba",
      "en": "Addis Ababa"
    },
    "country": "ET",
    "lat": 8.9779,
    "lon": 38.7993,
    "passengerRightsArea": "other"
  },
  {
    "code": "NBO",
    "name": {
      "pl": "Nairobi",
      "en": "Nairobi"
    },
    "city": {
      "pl": "Nairobi",
      "en": "Nairobi"
    },
    "country": "KE",
    "lat": -1.3192,
    "lon": 36.9278,
    "passengerRightsArea": "other"
  },
  {
    "code": "LOS",
    "name": {
      "pl": "Lagos",
      "en": "Lagos"
    },
    "city": {
      "pl": "Lagos",
      "en": "Lagos"
    },
    "country": "NG",
    "lat": 6.5774,
    "lon": 3.3212,
    "passengerRightsArea": "other"
  },
  {
    "code": "NRT",
    "name": {
      "pl": "Tokio Narita",
      "en": "Tokyo Narita"
    },
    "city": {
      "pl": "Tokio",
      "en": "Tokyo"
    },
    "country": "JP",
    "lat": 35.772,
    "lon": 140.3929,
    "passengerRightsArea": "other"
  },
  {
    "code": "HND",
    "name": {
      "pl": "Tokio Haneda",
      "en": "Tokyo Haneda"
    },
    "city": {
      "pl": "Tokio",
      "en": "Tokyo"
    },
    "country": "JP",
    "lat": 35.5494,
    "lon": 139.7798,
    "passengerRightsArea": "other"
  },
  {
    "code": "KIX",
    "name": {
      "pl": "Osaka Kansai",
      "en": "Osaka Kansai"
    },
    "city": {
      "pl": "Osaka",
      "en": "Osaka"
    },
    "country": "JP",
    "lat": 34.4342,
    "lon": 135.244,
    "passengerRightsArea": "other"
  },
  {
    "code": "PEK",
    "name": {
      "pl": "Pekin",
      "en": "Beijing"
    },
    "city": {
      "pl": "Pekin",
      "en": "Beijing"
    },
    "country": "CN",
    "lat": 40.0799,
    "lon": 116.6031,
    "passengerRightsArea": "other"
  },
  {
    "code": "PVG",
    "name": {
      "pl": "Szanghaj",
      "en": "Shanghai"
    },
    "city": {
      "pl": "Szanghaj",
      "en": "Shanghai"
    },
    "country": "CN",
    "lat": 31.1443,
    "lon": 121.8083,
    "passengerRightsArea": "other"
  },
  {
    "code": "CAN",
    "name": {
      "pl": "Guangzhou",
      "en": "Guangzhou"
    },
    "city": {
      "pl": "Guangzhou",
      "en": "Guangzhou"
    },
    "country": "CN",
    "lat": 23.3924,
    "lon": 113.2988,
    "passengerRightsArea": "other"
  },
  {
    "code": "SZX",
    "name": {
      "pl": "Shenzhen",
      "en": "Shenzhen"
    },
    "city": {
      "pl": "Shenzhen",
      "en": "Shenzhen"
    },
    "country": "CN",
    "lat": 22.6393,
    "lon": 113.8107,
    "passengerRightsArea": "other"
  },
  {
    "code": "HKG",
    "name": {
      "pl": "Hongkong",
      "en": "Hong Kong"
    },
    "city": {
      "pl": "Hongkong",
      "en": "Hong Kong"
    },
    "country": "HK",
    "lat": 22.308,
    "lon": 113.9185,
    "passengerRightsArea": "other"
  },
  {
    "code": "ICN",
    "name": {
      "pl": "Seul",
      "en": "Seoul"
    },
    "city": {
      "pl": "Seul",
      "en": "Seoul"
    },
    "country": "KR",
    "lat": 37.4602,
    "lon": 126.4407,
    "passengerRightsArea": "other"
  },
  {
    "code": "SIN",
    "name": {
      "pl": "Singapur",
      "en": "Singapore"
    },
    "city": {
      "pl": "Singapur",
      "en": "Singapore"
    },
    "country": "SG",
    "lat": 1.3644,
    "lon": 103.9915,
    "passengerRightsArea": "other"
  },
  {
    "code": "BKK",
    "name": {
      "pl": "Bangkok",
      "en": "Bangkok"
    },
    "city": {
      "pl": "Bangkok",
      "en": "Bangkok"
    },
    "country": "TH",
    "lat": 13.69,
    "lon": 100.7501,
    "passengerRightsArea": "other"
  },
  {
    "code": "HAN",
    "name": {
      "pl": "Hanoi Noi Bai",
      "en": "Hanoi Noi Bai"
    },
    "city": {
      "pl": "Hanoi",
      "en": "Hanoi"
    },
    "country": "VN",
    "lat": 21.2187,
    "lon": 105.8042,
    "passengerRightsArea": "other"
  },
  {
    "code": "SGN",
    "name": {
      "pl": "Ho Chi Minh City",
      "en": "Ho Chi Minh City"
    },
    "city": {
      "pl": "Ho Chi Minh City",
      "en": "Ho Chi Minh City"
    },
    "country": "VN",
    "lat": 10.8188,
    "lon": 106.6519,
    "passengerRightsArea": "other"
  },
  {
    "code": "DAD",
    "name": {
      "pl": "Da Nang",
      "en": "Da Nang"
    },
    "city": {
      "pl": "Da Nang",
      "en": "Da Nang"
    },
    "country": "VN",
    "lat": 16.0439,
    "lon": 108.1994,
    "passengerRightsArea": "other"
  },
  {
    "code": "DEL",
    "name": {
      "pl": "Delhi",
      "en": "Delhi"
    },
    "city": {
      "pl": "Delhi",
      "en": "Delhi"
    },
    "country": "IN",
    "lat": 28.5562,
    "lon": 77.1,
    "passengerRightsArea": "other"
  },
  {
    "code": "BOM",
    "name": {
      "pl": "Mumbaj",
      "en": "Mumbai"
    },
    "city": {
      "pl": "Mumbaj",
      "en": "Mumbai"
    },
    "country": "IN",
    "lat": 19.0896,
    "lon": 72.8656,
    "passengerRightsArea": "other"
  },
  {
    "code": "BLR",
    "name": {
      "pl": "Bengaluru",
      "en": "Bengaluru"
    },
    "city": {
      "pl": "Bengaluru",
      "en": "Bengaluru"
    },
    "country": "IN",
    "lat": 13.1986,
    "lon": 77.7066,
    "passengerRightsArea": "other"
  },
  {
    "code": "HYD",
    "name": {
      "pl": "Hyderabad",
      "en": "Hyderabad"
    },
    "city": {
      "pl": "Hyderabad",
      "en": "Hyderabad"
    },
    "country": "IN",
    "lat": 17.2403,
    "lon": 78.4294,
    "passengerRightsArea": "other"
  },
  {
    "code": "MAA",
    "name": {
      "pl": "Chennai",
      "en": "Chennai"
    },
    "city": {
      "pl": "Chennai",
      "en": "Chennai"
    },
    "country": "IN",
    "lat": 12.9941,
    "lon": 80.1709,
    "passengerRightsArea": "other"
  },
  {
    "code": "GRU",
    "name": {
      "pl": "São Paulo",
      "en": "São Paulo"
    },
    "city": {
      "pl": "São Paulo",
      "en": "São Paulo"
    },
    "country": "BR",
    "lat": -23.4356,
    "lon": -46.4731,
    "passengerRightsArea": "other"
  },
  {
    "code": "EZE",
    "name": {
      "pl": "Buenos Aires",
      "en": "Buenos Aires"
    },
    "city": {
      "pl": "Buenos Aires",
      "en": "Buenos Aires"
    },
    "country": "AR",
    "lat": -34.8222,
    "lon": -58.5358,
    "passengerRightsArea": "other"
  },
  {
    "code": "MEX",
    "name": {
      "pl": "Meksyk",
      "en": "Mexico City"
    },
    "city": {
      "pl": "Meksyk",
      "en": "Mexico City"
    },
    "country": "MX",
    "lat": 19.4361,
    "lon": -99.0719,
    "passengerRightsArea": "other"
  },
  {
    "code": "HAV",
    "name": {
      "pl": "Hawana",
      "en": "Havana"
    },
    "city": {
      "pl": "Hawana",
      "en": "Havana"
    },
    "country": "CU",
    "lat": 22.9892,
    "lon": -82.4091,
    "passengerRightsArea": "other"
  },
  {
    "code": "PUJ",
    "name": {
      "pl": "Punta Cana",
      "en": "Punta Cana"
    },
    "city": {
      "pl": "Punta Cana",
      "en": "Punta Cana"
    },
    "country": "DO",
    "lat": 18.5674,
    "lon": -68.3634,
    "passengerRightsArea": "other"
  },
  {
    "code": "SVO",
    "name": {
      "pl": "Moskwa Szeremietiewo",
      "en": "Moscow Sheremetyevo"
    },
    "city": {
      "pl": "Moskwa",
      "en": "Moscow"
    },
    "country": "RU",
    "lat": 55.9726,
    "lon": 37.4146,
    "passengerRightsArea": "other"
  },
  {
    "code": "TBS",
    "name": {
      "pl": "Tbilisi",
      "en": "Tbilisi"
    },
    "city": {
      "pl": "Tbilisi",
      "en": "Tbilisi"
    },
    "country": "GE",
    "lat": 41.6692,
    "lon": 44.9547,
    "passengerRightsArea": "other"
  },
  {
    "code": "EVN",
    "name": {
      "pl": "Erywań",
      "en": "Yerevan"
    },
    "city": {
      "pl": "Erywań",
      "en": "Yerevan"
    },
    "country": "AM",
    "lat": 40.1473,
    "lon": 44.3959,
    "passengerRightsArea": "other"
  },
  {
    "code": "BEG",
    "name": {
      "pl": "Belgrad",
      "en": "Belgrade"
    },
    "city": {
      "pl": "Belgrad",
      "en": "Belgrade"
    },
    "country": "RS",
    "lat": 44.8184,
    "lon": 20.3091,
    "passengerRightsArea": "other"
  },
  {
    "code": "INI",
    "name": {
      "pl": "Nisz Konstantyn Wielki",
      "en": "Nis Constantine the Great"
    },
    "city": {
      "pl": "Nisz",
      "en": "Nis"
    },
    "country": "RS",
    "lat": 43.3373,
    "lon": 21.8536,
    "passengerRightsArea": "other"
  },
  {
    "code": "TIA",
    "name": {
      "pl": "Tirana",
      "en": "Tirana"
    },
    "city": {
      "pl": "Tirana",
      "en": "Tirana"
    },
    "country": "AL",
    "lat": 41.4147,
    "lon": 19.7206,
    "passengerRightsArea": "other"
  },
  {
    "code": "SKP",
    "name": {
      "pl": "Skopje",
      "en": "Skopje"
    },
    "city": {
      "pl": "Skopje",
      "en": "Skopje"
    },
    "country": "MK",
    "lat": 41.9616,
    "lon": 21.6214,
    "passengerRightsArea": "other"
  },
  {
    "code": "KBP",
    "name": {
      "pl": "Kijów Boryspol",
      "en": "Kyiv Boryspil"
    },
    "city": {
      "pl": "Kijów",
      "en": "Kyiv"
    },
    "country": "UA",
    "lat": 50.345,
    "lon": 30.8947,
    "passengerRightsArea": "other"
  }
] satisfies CompensationAirport[];

export function isAirportInEuUkChEea(airport: CompensationAirport) {
  return airport.passengerRightsArea !== "other";
}

export function findCompensationAirport(code: string) {
  return compensationAirports.find((airport) => airport.code === code.toUpperCase());
}
