import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HotDealsSection } from "@/components/home/HotDealsSection";
import { ProductCategories } from "@/components/home/ProductCategories";
import { USPSection } from "@/components/home/USPSection";
import { FinancingTeaser } from "@/components/home/FinancingTeaser";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { LocationsTeaser } from "@/components/home/LocationsTeaser";
import { ContactTeaser } from "@/components/home/ContactTeaser";

const Index = () => {
  return (
    <Layout showCTABar={false}>
      <Helmet>
        <title>Arbeitsbühne kaufen NRW | Scherenarbeitsbühne & Teleskopbühne ✓ 3 Jahre Garantie</title>
        <meta name="description" content="Arbeitsbühne kaufen in NRW ➤ Scherenarbeitsbühnen ab 8.900 €, Teleskopbühnen bis 68m, Gelenkbühnen ✓ 3 Jahre Garantie ✓ 3 Standorte (Bonn, Krefeld, Mülheim) ✓ Finanzierung ab 0% ✓ Ersatzteile vor Ort. Jetzt Angebot anfordern!" />
        <meta name="keywords" content="Arbeitsbühne kaufen NRW, Scherenarbeitsbühne kaufen, Hubarbeitsbühne kaufen, Teleskopbühne kaufen, Gelenkbühne kaufen, Hebebühne kaufen NRW, Arbeitsbühne kaufen Köln, Arbeitsbühne kaufen Düsseldorf, Arbeitsbühne kaufen Bonn, Zoomlion Arbeitsbühne" />
        <link rel="canonical" href="https://www.arbeitsbuehne-kaufen-nrw.de/" />
        <meta property="og:title" content="Arbeitsbühne kaufen NRW | Scherenarbeitsbühne & Teleskopbühne" />
        <meta property="og:description" content="Arbeitsbühne kaufen in NRW beim Zoomlion Fachhändler. Scherenarbeitsbühnen ab 8.900 €, Teleskopbühnen bis 68m. 3 Jahre Garantie, Finanzierung möglich." />
        <meta property="og:url" content="https://www.arbeitsbuehne-kaufen-nrw.de/" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <HeroSection />
      <HotDealsSection />
      <ProductCategories />
      <USPSection />
      <FinancingTeaser />
      <ComparisonSection />
      <LocationsTeaser />
      <ContactTeaser />
    </Layout>
  );
};

export default Index;
