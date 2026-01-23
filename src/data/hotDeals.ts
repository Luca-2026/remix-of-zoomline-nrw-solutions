import zs0607acLiImage from "@/assets/hot-deals/zs0607ac-li.png";
import zs1012acLiImage from "@/assets/hot-deals/zs1012ac-li.png";
import zmp09jImage from "@/assets/hot-deals/zmp09j.png";

export interface HotDeal {
  id: string;
  name: string;
  type: "arbeitsbuehne";
  typeLabel: string;
  subtitle: string;
  dealPrice: number;
  specs: { label: string; value: string }[];
  image: string;
  highlight?: string;
}

export const hotDeals: HotDeal[] = [
  {
    id: "deal-zs0607ac-li",
    name: "ZS0607AC-Li",
    type: "arbeitsbuehne",
    typeLabel: "7,8m Scherenarbeitsbühne",
    subtitle: "Lithium-Ionen-Akku",
    dealPrice: 12990,
    highlight: "Li-Ion Power",
    specs: [
      { label: "Arbeitshöhe", value: "7,8 m" },
      { label: "Plattformhöhe", value: "5,8 m" },
      { label: "Plattformkapazität", value: "230 kg" },
      { label: "Plattformgröße", value: "1,65 × 0,74 m" },
      { label: "Fahrgeschwindigkeit", value: "4 / 0,8 km/h" },
      { label: "Batterie", value: "135 Ah Li-Ion" },
      { label: "Bruttogewicht", value: "1.455 kg" },
    ],
    image: zs0607acLiImage,
  },
  {
    id: "deal-zs1012ac-li",
    name: "ZS1012AC-Li",
    type: "arbeitsbuehne",
    typeLabel: "11,8m Scherenarbeitsbühne",
    subtitle: "Lithium-Ionen-Akku",
    dealPrice: 16990,
    highlight: "Bestseller",
    specs: [
      { label: "Arbeitshöhe", value: "11,80 m" },
      { label: "Plattformhöhe", value: "9,80 m" },
      { label: "Plattformkapazität", value: "350 kg" },
      { label: "Plattformgröße", value: "2,30 × 1,12 m" },
      { label: "Fahrgeschwindigkeit", value: "4 / 0,8 km/h" },
      { label: "Batterie", value: "230 Ah Li-Ion" },
      { label: "Bruttogewicht", value: "2.930 kg" },
    ],
    image: zs1012acLiImage,
  },
  {
    id: "deal-zmp09j",
    name: "ZMP09J",
    type: "arbeitsbuehne",
    typeLabel: "11,2m Vertikal-Mast-Arbeitsbühne",
    subtitle: "Kompakt & Wendig",
    dealPrice: 27990,
    highlight: "Profi-Gerät",
    specs: [
      { label: "Arbeitshöhe", value: "11,2 m" },
      { label: "Plattformkapazität", value: "200 kg" },
      { label: "Max. Arbeiter", value: "2 innen / 1 außen" },
      { label: "Fahrgeschwindigkeit", value: "4,5 / 0,5 km/h" },
      { label: "Steigfähigkeit", value: "25 % (≈14°)" },
      { label: "Bruttogewicht", value: "2.990 kg" },
    ],
    image: zmp09jImage,
  },
];
