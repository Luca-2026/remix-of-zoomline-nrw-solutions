import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PlatformConfigurator } from "@/components/configurator/PlatformConfigurator";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const Gelenkbuehnen = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Start", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/" },
      { "@type": "ListItem", "position": 2, "name": "Arbeitsbühnen", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/arbeitsbuehne-kaufen-nrw" },
      { "@type": "ListItem", "position": 3, "name": "Gelenkbühnen kaufen", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/gelenkbuehne-kaufen-nrw" }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Gelenkteleskopbühne kaufen NRW – Zoomlion 10-26m",
    "description": "Gelenkteleskopbühnen von Zoomlion kaufen in NRW. Flexibel einsetzbar bei Hindernissen. Diesel und Elektro. 3 Jahre Garantie.",
    "brand": { "@type": "Brand", "name": "Zoomlion" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "30000",
      "highPrice": "150000",
      "offerCount": "10",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Gelenkbühne kaufen NRW | Gelenkteleskopbühne Zoomlion 10-26m</title>
        <meta name="description" content="Gelenkteleskopbühne kaufen in NRW ➤ Zoomlion 10-26m ✓ Flexibel um Hindernisse herum arbeiten ✓ Elektro & Diesel ✓ 3 Jahre Garantie ✓ 3 Standorte in NRW. Jetzt anfragen!" />
        <meta name="keywords" content="Gelenkbühne kaufen, Gelenkteleskopbühne kaufen NRW, Gelenkarbeitsbühne kaufen, Knickgelenkbühne kaufen, Zoomlion Gelenkbühne, Arbeitsbühne kaufen NRW" />
        <link rel="canonical" href="https://www.arbeitsbuehne-kaufen-nrw.de/gelenkbuehne-kaufen-nrw" />
        <meta property="og:title" content="Gelenkbühne kaufen NRW | Zoomlion 10-26m" />
        <meta property="og:description" content="Gelenkteleskopbühnen von Zoomlion kaufen. Flexibel bei Hindernissen, 3 Jahre Garantie." />
        <meta property="og:url" content="https://www.arbeitsbuehne-kaufen-nrw.de/gelenkbuehne-kaufen-nrw" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Gelenkbühnen kaufen NRW</span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Gelenkteleskopbühne kaufen <span className="text-primary">in NRW</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Zoomlion Gelenkteleskopbühnen für <strong>flexibles Arbeiten über und um Hindernisse</strong>. 
              Ideal für schwer zugängliche Bereiche bei Wartung, Montage und Instandhaltung. 
              Mit Arbeitshöhen von 10 bis 26 Metern.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/kontakt">Angebot anfordern <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:02151-4179904"><Phone className="mr-2 h-4 w-4" />02151 - 417 99 04</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Konfigurator" title="Gelenkbühne konfigurieren & anfragen" subtitle="Finden Sie die passende Gelenkteleskopbühne für Ihren Einsatz" />
          <PlatformConfigurator defaultCategory="boom" />
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-bold mb-4">Gelenkteleskopbühne kaufen in Nordrhein-Westfalen</h2>
            <p>
              <strong>Gelenkteleskopbühnen</strong> sind die ideale Lösung, wenn Sie über oder um Hindernisse 
              hinweg arbeiten müssen. Die flexible Gelenkarmkonstruktion ermöglicht Einsätze an schwer 
              zugänglichen Stellen – z. B. bei der Wartung von Industrieanlagen, Fassadenarbeiten oder 
              der Montage in Produktionshallen.
            </p>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Einsatzbereiche</h3>
            <ul>
              <li><strong>Industriewartung:</strong> Flexible Positionierung über Rohrleitungen und Maschinen</li>
              <li><strong>Fassadenarbeiten:</strong> Über Vordächer und Balkone hinweg arbeiten</li>
              <li><strong>Baumaschinenmontage:</strong> Präzise Positionierung in engen Bereichen</li>
              <li><strong>Veranstaltungstechnik:</strong> Aufbau von Beleuchtung und Beschallung</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gelenkbuehnen;
