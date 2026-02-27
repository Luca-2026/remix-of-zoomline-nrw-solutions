export interface CityData {
  slug: string;
  name: string;
  region: string;
  nearbyStandort: string;
  nearbyStandortSlug: string;
  phone: string;
  intro: string;
  population: string;
  useCases: string[];
  districts: string[];
  nearbyCity: string;
  metaTitle: string;
  metaDescription: string;
}

export const cityData: CityData[] = [
  {
    slug: "koeln",
    name: "Köln",
    region: "Rheinland",
    nearbyStandort: "Bonn",
    nearbyStandortSlug: "bonn",
    phone: "0228 50466061",
    intro: "Als größte Stadt in NRW ist Köln ein Hotspot für Bauprojekte, Messe- und Veranstaltungstechnik sowie Gebäudeinstandhaltung. Ob am Rheinufer, in der Innenstadt oder in den Gewerbegebieten – mit Zoomlion Arbeitsbühnen sind Sie für jeden Einsatz in Köln bestens ausgestattet.",
    population: "1,08 Mio.",
    useCases: [
      "Fassadensanierung in der Kölner Altstadt und am Rheinauhafen",
      "Messe- und Eventaufbau an der Koelnmesse",
      "Wartungsarbeiten an Industrieanlagen in Köln-Niehl und Godorf",
      "Hallenarbeiten in Logistikzentren am Köln Bonn Airport"
    ],
    districts: ["Ehrenfeld", "Deutz", "Porz", "Nippes", "Kalk", "Mülheim", "Lindenthal", "Chorweiler"],
    nearbyCity: "Leverkusen, Bergisch Gladbach, Brühl, Hürth, Troisdorf",
    metaTitle: "Arbeitsbühne kaufen Köln | Scherenarbeitsbühne & Teleskopbühne",
    metaDescription: "Arbeitsbühne kaufen in Köln ➤ Scherenarbeitsbühnen ab 8.900 € ✓ Teleskopbühnen bis 68m ✓ 3 Jahre Garantie ✓ Standort Bonn in der Nähe ✓ Lieferung & Service. Jetzt anfragen!"
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    region: "Rheinland",
    nearbyStandort: "Krefeld",
    nearbyStandortSlug: "krefeld",
    phone: "02151 4179904",
    intro: "In der Landeshauptstadt Düsseldorf werden Arbeitsbühnen besonders für Fassadenarbeiten an modernen Bürogebäuden, Messeaufbauten und Instandhaltung in Hafen und Medienhafen benötigt. Unser Standort Krefeld liegt nur 25 Minuten entfernt.",
    population: "620.000",
    useCases: [
      "Fassadenreinigung und -sanierung im Medienhafen",
      "Messeaufbau und Veranstaltungstechnik an der Messe Düsseldorf",
      "Gebäudewartung in der Düsseldorfer Innenstadt und am Kö-Bogen",
      "Industriewartung im Hafen und in Düsseldorf-Reisholz"
    ],
    districts: ["Oberkassel", "Bilk", "Flingern", "Pempelfort", "Derendorf", "Gerresheim", "Benrath", "Heerdt"],
    nearbyCity: "Neuss, Meerbusch, Ratingen, Hilden, Erkrath",
    metaTitle: "Arbeitsbühne kaufen Düsseldorf | Zoomlion Fachhändler NRW",
    metaDescription: "Arbeitsbühne kaufen in Düsseldorf ➤ Zoomlion Scherenarbeitsbühnen & Teleskopbühnen ✓ Standort Krefeld in der Nähe ✓ 3 Jahre Garantie ✓ Finanzierung möglich. Jetzt Angebot anfordern!"
  },
  {
    slug: "dortmund",
    name: "Dortmund",
    region: "Ruhrgebiet",
    nearbyStandort: "Mülheim",
    nearbyStandortSlug: "muelheim",
    phone: "02151 4179904",
    intro: "Dortmund als wichtiger Industrie- und Logistikstandort im östlichen Ruhrgebiet bietet vielfältige Einsatzmöglichkeiten für Arbeitsbühnen. Von der Signal Iduna Arena bis zu den Logistikzentren im Hafen – wir liefern die passende Bühne.",
    population: "588.000",
    useCases: [
      "Wartungsarbeiten an Industrieanlagen im Dortmunder Hafen",
      "Hallenarbeiten in Logistikzentren und Lagerhallen",
      "Fassadenarbeiten an Bürogebäuden im Technologiepark",
      "Veranstaltungstechnik in der Westfalenhalle und Signal Iduna Park"
    ],
    districts: ["Hörde", "Hombruch", "Brackel", "Aplerbeck", "Lütgendortmund", "Mengede", "Eving", "Scharnhorst"],
    nearbyCity: "Unna, Schwerte, Witten, Lünen, Kamen",
    metaTitle: "Arbeitsbühne kaufen Dortmund | Scherenarbeitsbühne Ruhrgebiet",
    metaDescription: "Arbeitsbühne kaufen in Dortmund ➤ Scherenarbeitsbühnen, Teleskopbühnen & Gelenkbühnen ✓ Standort Mülheim ✓ 3 Jahre Garantie ✓ Lieferung ins Ruhrgebiet. Jetzt anfragen!"
  },
  {
    slug: "essen",
    name: "Essen",
    region: "Ruhrgebiet",
    nearbyStandort: "Mülheim",
    nearbyStandortSlug: "muelheim",
    phone: "02151 4179904",
    intro: "Essen, die Grüne Hauptstadt Europas, verbindet Industrie mit moderner Stadtentwicklung. Arbeitsbühnen werden hier sowohl für die Sanierung historischer Industriegebäude als auch für moderne Bauprojekte am Essener Krupp-Gürtel benötigt.",
    population: "583.000",
    useCases: [
      "Sanierungsarbeiten am UNESCO-Welterbe Zeche Zollverein",
      "Gebäudewartung im ThyssenKrupp Quartier",
      "Messeaufbau an der Messe Essen und Grugahalle",
      "Hallenarbeiten in Logistikzentren im Essener Süden"
    ],
    districts: ["Rüttenscheid", "Steele", "Werden", "Borbeck", "Altenessen", "Kettwig", "Bredeney", "Frohnhausen"],
    nearbyCity: "Mülheim, Oberhausen, Gelsenkirchen, Bottrop, Bochum",
    metaTitle: "Arbeitsbühne kaufen Essen | Zoomlion Hubarbeitsbühne Ruhrgebiet",
    metaDescription: "Arbeitsbühne kaufen in Essen ➤ Zoomlion Scherenarbeitsbühnen & Teleskopbühnen ✓ Standort Mülheim direkt nebenan ✓ 3 Jahre Garantie ✓ Ersatzteile vor Ort. Jetzt anfragen!"
  },
  {
    slug: "bonn",
    name: "Bonn",
    region: "Rheinland",
    nearbyStandort: "Bonn",
    nearbyStandortSlug: "bonn",
    phone: "0228 50466061",
    intro: "In der ehemaligen Bundeshauptstadt Bonn sind Arbeitsbühnen besonders für die Instandhaltung von Regierungsgebäuden, UN-Campus und den zahlreichen Bürokomplexen im Bundesviertel gefragt. Unser Standort Bonn bietet schnellsten Service.",
    population: "331.000",
    useCases: [
      "Fassadenwartung am Post Tower und WCCB",
      "Gebäudeinstandhaltung im Bundesviertel und UN-Campus",
      "Hallenarbeiten in Logistikzentren bei Bonn-Beuel",
      "Grünpflege und Baumarbeiten in den Bonner Rheinauen"
    ],
    districts: ["Bad Godesberg", "Beuel", "Hardtberg", "Zentrum", "Poppelsdorf", "Endenich", "Tannenbusch", "Duisdorf"],
    nearbyCity: "Sankt Augustin, Siegburg, Troisdorf, Königswinter, Bad Honnef",
    metaTitle: "Arbeitsbühne kaufen Bonn | Standort vor Ort ✓ Zoomlion NRW",
    metaDescription: "Arbeitsbühne kaufen in Bonn ➤ Direkt an unserem Standort Bonn ✓ Scherenarbeitsbühnen ab 8.900 € ✓ 3 Jahre Garantie ✓ Ersatzteile & Service vor Ort. Jetzt Angebot anfordern!"
  },
  {
    slug: "duisburg",
    name: "Duisburg",
    region: "Niederrhein",
    nearbyStandort: "Krefeld",
    nearbyStandortSlug: "krefeld",
    phone: "02151 4179904",
    intro: "Duisburg mit dem größten Binnenhafen Europas bietet vielfältige Einsatzgebiete für Arbeitsbühnen. Von der Hafenlogistik über Industriewartung bis zur Gebäudesanierung – mit unserem Standort Krefeld in unmittelbarer Nähe.",
    population: "498.000",
    useCases: [
      "Wartung von Hafenanlagen und Kränen am Duisburger Hafen",
      "Industrieinstandhaltung in den Hüttenwerken",
      "Gebäudesanierung im Innenhafen und der Altstadt",
      "Logistik- und Lagerhallen im Duisburger Süden"
    ],
    districts: ["Meiderich", "Hamborn", "Ruhrort", "Rheinhausen", "Homberg", "Walsum", "Marxloh", "Neudorf"],
    nearbyCity: "Moers, Oberhausen, Krefeld, Dinslaken, Mülheim",
    metaTitle: "Arbeitsbühne kaufen Duisburg | Standort Krefeld in der Nähe",
    metaDescription: "Arbeitsbühne kaufen in Duisburg ➤ Zoomlion Scherenarbeitsbühnen & Teleskopbühnen ✓ Standort Krefeld nebenan ✓ Hafenlogistik & Industrie ✓ 3 Jahre Garantie. Jetzt anfragen!"
  },
  {
    slug: "krefeld",
    name: "Krefeld",
    region: "Niederrhein",
    nearbyStandort: "Krefeld",
    nearbyStandortSlug: "krefeld",
    phone: "02151 4179904",
    intro: "Krefeld ist nicht nur Seidenstadt, sondern auch unser Hauptstandort. Hier können Sie Arbeitsbühnen direkt besichtigen, testen und kaufen. Ersatzteile und Service sind unmittelbar verfügbar – kürzeste Wege garantiert.",
    population: "228.000",
    useCases: [
      "Direktbesichtigung und Test von Arbeitsbühnen an unserem Standort",
      "Fassadenarbeiten an historischen Gebäuden in der Krefelder Innenstadt",
      "Hallenarbeiten in Gewerbe- und Industriegebieten",
      "Wartung und Reparatur mit kürzesten Anfahrtswegen"
    ],
    districts: ["Uerdingen", "Fischeln", "Hüls", "Bockum", "Oppum", "Linn", "Zentrum"],
    nearbyCity: "Meerbusch, Tönisvorst, Willich, Viersen, Kempen",
    metaTitle: "Arbeitsbühne kaufen Krefeld | Unser Hauptstandort ✓ Zoomlion",
    metaDescription: "Arbeitsbühne kaufen in Krefeld ➤ Direkt an unserem Hauptstandort ✓ Besichtigung & Test möglich ✓ Scherenarbeitsbühnen ab 8.900 € ✓ Sofort Service & Ersatzteile. Jetzt vorbeikommen!"
  },
  {
    slug: "muelheim",
    name: "Mülheim an der Ruhr",
    region: "Ruhrgebiet",
    nearbyStandort: "Mülheim",
    nearbyStandortSlug: "muelheim",
    phone: "02151 4179904",
    intro: "Mülheim an der Ruhr ist unser Standort im Herzen des Ruhrgebiets. Von hier aus versorgen wir das gesamte östliche Ruhrgebiet mit Arbeitsbühnen, Ersatzteilen und Service. Schnelle Lieferung nach Essen, Oberhausen, Bochum und Dortmund.",
    population: "172.000",
    useCases: [
      "Direktabholung von Arbeitsbühnen an unserem Standort",
      "Lieferung ins gesamte Ruhrgebiet ab Mülheim",
      "Wartung und Service für Bestandskunden im Ruhrgebiet",
      "Industrieinstandhaltung und Hallenarbeiten"
    ],
    districts: ["Saarn", "Broich", "Styrum", "Heißen", "Dümpten", "Speldorf", "Mintard"],
    nearbyCity: "Essen, Oberhausen, Ratingen, Duisburg, Bottrop",
    metaTitle: "Arbeitsbühne kaufen Mülheim/Ruhr | Standort Ruhrgebiet",
    metaDescription: "Arbeitsbühne kaufen in Mülheim an der Ruhr ➤ Unser Standort im Ruhrgebiet ✓ Lieferung nach Essen, Dortmund, Bochum ✓ 3 Jahre Garantie ✓ Service vor Ort. Jetzt anfragen!"
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cityData.find(c => c.slug === slug);
}
