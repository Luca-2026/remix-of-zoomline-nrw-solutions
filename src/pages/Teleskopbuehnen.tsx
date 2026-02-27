import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PlatformConfigurator } from "@/components/configurator/PlatformConfigurator";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const Teleskopbuehnen = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Start", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/" },
      { "@type": "ListItem", "position": 2, "name": "Arbeitsbühnen", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/arbeitsbuehne-kaufen-nrw" },
      { "@type": "ListItem", "position": 3, "name": "Teleskopbühnen kaufen", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/teleskopbuehne-kaufen-nrw" }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Teleskopbühne kaufen NRW – Zoomlion 20-68m",
    "description": "Teleskoparbeitsbühnen von Zoomlion kaufen in NRW. Bis 68 Meter Arbeitshöhe. Diesel und Elektro. 3 Jahre Garantie.",
    "brand": { "@type": "Brand", "name": "Zoomlion" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "45000",
      "highPrice": "289000",
      "offerCount": "15",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Teleskopbühne kaufen NRW | Zoomlion 20-68m Arbeitshöhe</title>
        <meta name="description" content="Teleskopbühne kaufen in NRW ➤ Zoomlion 20-68m Arbeitshöhe ✓ Diesel & Elektro ✓ 3 Jahre Garantie ✓ Große Reichweite ✓ 3 Standorte: Bonn, Krefeld, Mülheim. Jetzt Angebot anfordern!" />
        <meta name="keywords" content="Teleskopbühne kaufen, Teleskopbühne kaufen NRW, Teleskoparbeitsbühne kaufen, Teleskopbühne 20m kaufen, Teleskopbühne 40m kaufen, Teleskopbühne 60m kaufen, Zoomlion Teleskopbühne, Steiger kaufen NRW" />
        <link rel="canonical" href="https://www.arbeitsbuehne-kaufen-nrw.de/teleskopbuehne-kaufen-nrw" />
        <meta property="og:title" content="Teleskopbühne kaufen NRW | Zoomlion 20-68m" />
        <meta property="og:description" content="Teleskopbühnen von Zoomlion kaufen. Bis 68m Arbeitshöhe, 3 Jahre Garantie." />
        <meta property="og:url" content="https://www.arbeitsbuehne-kaufen-nrw.de/teleskopbuehne-kaufen-nrw" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Teleskopbühnen kaufen NRW</span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Teleskopbühne kaufen <span className="text-primary">in NRW</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Zoomlion Teleskopbühnen für <strong>maximale Arbeitshöhen bis 68 Meter</strong>. 
              Ideal für Hochbau, Windkraftanlagen, Industrieanlagen und große Bauprojekte. 
              Mit Diesel- oder Elektroantrieb und 3 Jahren Garantie.
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
          <SectionHeading badge="Konfigurator" title="Teleskopbühne konfigurieren & anfragen" subtitle="Filtern Sie nach Arbeitshöhe und Antrieb" />
          <PlatformConfigurator defaultCategory="telescopic" />
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-bold mb-4">Teleskopbühne kaufen in Nordrhein-Westfalen</h2>
            <p>
              Für Arbeiten in großen Höhen sind <strong>Teleskopbühnen</strong> die erste Wahl. Mit Arbeitshöhen von 
              <strong> 20 bis 68 Metern</strong> erreichen Sie jeden Punkt – ob bei der Montage von Windkraftanlagen, 
              bei Fassadenarbeiten an Hochhäusern oder bei der Inspektion von Industrieanlagen.
            </p>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Vorteile unserer Teleskopbühnen</h3>
            <div className="grid sm:grid-cols-2 gap-3 not-prose">
              {[
                "Arbeitshöhen von 20 bis 68 Meter",
                "Große horizontale Reichweite",
                "Diesel- und Elektro-Modelle verfügbar",
                "3 Jahre Garantie / 3.000 Betriebsstunden",
                "Finanzierung & Leasing möglich",
                "Service & Ersatzteile an 3 NRW-Standorten"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Teleskopbuehnen;
