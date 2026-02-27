import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PlatformConfigurator } from "@/components/configurator/PlatformConfigurator";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const Scherenarbeitsbuehnen = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Start", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/" },
      { "@type": "ListItem", "position": 2, "name": "Arbeitsbühnen", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/arbeitsbuehne-kaufen-nrw" },
      { "@type": "ListItem", "position": 3, "name": "Scherenarbeitsbühnen kaufen", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/scherenarbeitsbuehne-kaufen-nrw" }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Scherenarbeitsbühne kaufen NRW – Zoomlion 6-16m",
    "description": "Scherenarbeitsbühnen von Zoomlion kaufen in NRW. Elektrisch, Diesel oder Lithium-Ionen. Arbeitshöhen von 6 bis 16 Metern. 3 Jahre Garantie.",
    "brand": { "@type": "Brand", "name": "Zoomlion" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "8900",
      "highPrice": "45000",
      "offerCount": "25",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Scherenarbeitsbühne kaufen NRW | Zoomlion 6-16m | Ab 8.900 €</title>
        <meta name="description" content="Scherenarbeitsbühne kaufen in NRW ➤ Zoomlion 6-16m Arbeitshöhe ✓ Elektro & Lithium-Ionen ✓ Ab 8.900 € ✓ 3 Jahre Garantie ✓ Indoor & Outdoor ✓ 3 Standorte: Bonn, Krefeld, Mülheim. Jetzt anfragen!" />
        <meta name="keywords" content="Scherenarbeitsbühne kaufen, Scherenarbeitsbühne kaufen NRW, Elektro Scherenbühne kaufen Köln, Scherenarbeitsbühne 8m kaufen, Scherenarbeitsbühne 10m kaufen, Scherenarbeitsbühne 12m kaufen, Scherenarbeitsbühne Indoor, Lithium Scherenarbeitsbühne, Zoomlion Scherenarbeitsbühne" />
        <link rel="canonical" href="https://www.arbeitsbuehne-kaufen-nrw.de/scherenarbeitsbuehne-kaufen-nrw" />
        <meta property="og:title" content="Scherenarbeitsbühne kaufen NRW | Zoomlion 6-16m" />
        <meta property="og:description" content="Scherenarbeitsbühnen von Zoomlion kaufen. Ab 8.900 €, 3 Jahre Garantie, 3 Standorte in NRW." />
        <meta property="og:url" content="https://www.arbeitsbuehne-kaufen-nrw.de/scherenarbeitsbuehne-kaufen-nrw" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Scherenarbeitsbühnen kaufen NRW</span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Scherenarbeitsbühne kaufen <span className="text-primary">in NRW</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Zoomlion Scherenarbeitsbühnen von 6 bis 16 Metern Arbeitshöhe – elektrisch, mit Lithium-Ionen-Akku oder Diesel. 
              Ideal für <strong>Indoor-Arbeiten in Hallen und Lagern</strong> sowie <strong>Outdoor-Einsätze auf Baustellen</strong>. 
              Ab 8.900 € netto mit 3 Jahren Garantie.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/kontakt">
                  Angebot anfordern
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:02151-4179904">
                  <Phone className="mr-2 h-4 w-4" />
                  02151 - 417 99 04
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Konfigurator */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Konfigurator"
            title="Scherenarbeitsbühne konfigurieren & anfragen"
            subtitle="Filtern Sie nach Arbeitshöhe, Antrieb und Einsatzbereich"
          />
          <PlatformConfigurator defaultCategory="scissor" />
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-bold mb-4">Scherenarbeitsbühne kaufen in Nordrhein-Westfalen</h2>
            <p>
              Sie möchten eine <strong>Scherenarbeitsbühne kaufen in NRW</strong>? Als exklusiver Zoomlion Fachhändler bieten wir 
              Ihnen ein breites Sortiment an elektrischen und dieselbetriebenen Scherenarbeitsbühnen mit Arbeitshöhen von 
              <strong> 6 bis 16 Metern</strong>. Ob für Lagerarbeiten in Düsseldorf, Hallenreinigung in Köln oder Fassadenarbeiten 
              in Bonn – wir haben die passende Scherenbühne für Ihren Einsatz.
            </p>

            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Welche Scherenarbeitsbühne für welchen Einsatz?</h3>
            <ul>
              <li><strong>Indoor-Scherenarbeitsbühne (6-8m):</strong> Elektro- oder Lithium-Ionen-Antrieb, emissionsfrei, leise, geringe Bodenbelastung – ideal für Lager, Hallen und Produktionsstätten</li>
              <li><strong>Kompakte Micro-Scherenbühne (4-7m):</strong> Schmalste Bauweise für enge Durchfahrten und niedrige Deckenhöhen</li>
              <li><strong>Outdoor-Scherenarbeitsbühne (10-16m):</strong> Diesel- oder Hybrid-Antrieb für Baustellen und Außenarbeiten</li>
              <li><strong>Raupen-Scherenarbeitsbühne:</strong> Für unebenes Gelände und schwierige Bodenverhältnisse</li>
            </ul>

            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Ihre Vorteile beim Kauf einer Scherenarbeitsbühne bei uns</h3>
            <div className="grid sm:grid-cols-2 gap-3 not-prose">
              {[
                "3 Jahre Garantie / 3.000 Betriebsstunden",
                "Ersatzteile sofort verfügbar an 3 NRW-Standorten",
                "Flexible Finanzierung & Leasing möglich",
                "Persönliche Beratung & Einweisung vor Ort",
                "CE-zertifiziert nach europäischen Normen",
                "Lieferung & Inbetriebnahme in ganz NRW"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Scherenarbeitsbühne kaufen: Städte in NRW</h3>
            <p>
              Wir liefern Scherenarbeitsbühnen in ganz Nordrhein-Westfalen: <strong>Köln, Düsseldorf, Dortmund, Essen, 
              Duisburg, Bochum, Wuppertal, Bielefeld, Bonn, Münster, Krefeld, Mülheim an der Ruhr</strong> und Umgebung. 
              Mit unseren 3 Standorten in Bonn, Krefeld und Mülheim sind wir immer in Ihrer Nähe.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scherenarbeitsbuehnen;
