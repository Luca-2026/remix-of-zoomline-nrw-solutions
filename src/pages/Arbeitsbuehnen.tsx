import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PlatformConfigurator } from "@/components/configurator/PlatformConfigurator";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { cityData } from "@/data/cities";

const Arbeitsbuehnen = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Start", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/" },
      { "@type": "ListItem", "position": 2, "name": "Arbeitsbühnen kaufen NRW", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/arbeitsbuehne-kaufen-nrw" }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Zoomlion Arbeitsbühnen kaufen NRW",
    "description": "Alle Zoomlion Arbeitsbühnen zum Kauf in NRW. Scherenarbeitsbühnen, Gelenkteleskopbühnen und Teleskopbühnen bis 68m.",
    "numberOfItems": 50,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Scherenarbeitsbühnen kaufen NRW", "url": "https://www.arbeitsbuehne-kaufen-nrw.de/scherenarbeitsbuehne-kaufen-nrw" },
      { "@type": "ListItem", "position": 2, "name": "Gelenkteleskopbühnen kaufen NRW", "url": "https://www.arbeitsbuehne-kaufen-nrw.de/gelenkbuehne-kaufen-nrw" },
      { "@type": "ListItem", "position": 3, "name": "Teleskopbühnen kaufen NRW", "url": "https://www.arbeitsbuehne-kaufen-nrw.de/teleskopbuehne-kaufen-nrw" }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Arbeitsbühne kaufen NRW | Zoomlion 6-68m ✓ 3 Jahre Garantie</title>
        <meta name="description" content="Arbeitsbühne kaufen in NRW ➤ Zoomlion Scherenarbeitsbühnen, Teleskopbühnen & Gelenkbühnen ✓ 6-68m Arbeitshöhe ✓ Ab 8.900 € ✓ 3 Jahre Garantie ✓ 3 Standorte: Bonn, Krefeld, Mülheim. Jetzt konfigurieren!" />
        <meta name="keywords" content="Arbeitsbühne kaufen NRW, Scherenarbeitsbühne kaufen, Hubarbeitsbühne kaufen NRW, Teleskopbühne kaufen, Gelenkbühne kaufen, Hebebühne kaufen, Steiger kaufen NRW, Arbeitsbühne kaufen Köln, Arbeitsbühne kaufen Düsseldorf, Zoomlion Arbeitsbühne" />
        <link rel="canonical" href="https://www.arbeitsbuehne-kaufen-nrw.de/arbeitsbuehne-kaufen-nrw" />
        <meta property="og:title" content="Arbeitsbühne kaufen NRW | Zoomlion 6-68m" />
        <meta property="og:description" content="Arbeitsbühnen kaufen in NRW. Scherenarbeitsbühnen, Teleskopbühnen bis 68m, mit 3 Jahren Garantie." />
        <meta property="og:url" content="https://www.arbeitsbuehne-kaufen-nrw.de/arbeitsbuehne-kaufen-nrw" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      {/* Category Links */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Scherenarbeitsbühnen", href: "/scherenarbeitsbuehne-kaufen-nrw" },
              { label: "Teleskopbühnen", href: "/teleskopbuehne-kaufen-nrw" },
              { label: "Gelenkbühnen", href: "/gelenkbuehne-kaufen-nrw" },
              { label: "🔥 Hot Deals", href: "/arbeitsbuehne-sonderangebote-nrw" },
            ].map((cat) => (
              <Link key={cat.label} to={cat.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:border-primary/50 hover:text-primary transition-colors text-sm font-medium">
                {cat.label} <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Arbeitsbühne kaufen NRW"
            title="Arbeitsbühne kaufen in Nordrhein-Westfalen"
            subtitle="Zoomlion Scherenarbeitsbühnen, Gelenkbühnen und Teleskopbühnen – filtern, vergleichen, anfragen"
          />
          <PlatformConfigurator />
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-bold mb-4">Arbeitsbühne kaufen in NRW – Ihr Zoomlion Fachhändler</h2>
            <p>
              Sie möchten eine <strong>Arbeitsbühne kaufen in NRW</strong>? Als exklusiver <strong>Zoomlion Fachhändler in Nordrhein-Westfalen</strong> bieten wir Ihnen 
              das komplette Sortiment an Arbeitsbühnen für jeden Einsatzzweck. Von kompakten <strong>Scherenarbeitsbühnen ab 8.900 €</strong> für 
              Innenarbeiten bis zu <strong>Teleskopbühnen mit 68 Metern Arbeitshöhe</strong> für große Bauprojekte.
            </p>
            
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Arbeitsbühnen-Typen im Überblick</h3>
            <ul>
              <li><strong><Link to="/scherenarbeitsbuehne-kaufen-nrw" className="text-primary hover:underline">Scherenarbeitsbühnen kaufen</Link></strong> – 6-16m, Elektro/Li-Ion/Diesel, für Indoor & Outdoor</li>
              <li><strong><Link to="/gelenkbuehne-kaufen-nrw" className="text-primary hover:underline">Gelenkteleskopbühnen kaufen</Link></strong> – Flexibel über Hindernisse, 10-26m</li>
              <li><strong><Link to="/teleskopbuehne-kaufen-nrw" className="text-primary hover:underline">Teleskopbühnen kaufen</Link></strong> – Maximale Arbeitshöhen bis 68m</li>
              <li><strong>Raupenarbeitsbühnen</strong> – Für schwieriges Gelände</li>
              <li><strong>Mastbühnen</strong> – Kompakt und wendig für Innenräume</li>
            </ul>
            
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Warum Arbeitsbühne bei Zoomlion NRW kaufen?</h3>
            <p>
              Mit <strong>3 Jahren Garantie</strong>, <strong>Ersatzteilen vor Ort</strong> an 3 Standorten (Bonn, Krefeld, Mülheim) und 
              <strong> flexibler Finanzierung ab 0%</strong> machen wir den Kauf so einfach wie möglich. 
              Als <strong>Top 5 Hersteller weltweit</strong> steht Zoomlion für Qualität zum besten Preis-Leistungs-Verhältnis.
            </p>

            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Arbeitsbühne kaufen in Ihrer Stadt</h3>
            <p>
              Wir liefern Arbeitsbühnen in ganz NRW – finden Sie Ihre Stadt:
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {cityData.map(city => (
              <Link
                key={city.slug}
                to={`/arbeitsbuehne-kaufen-${city.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card hover:border-primary/50 hover:text-primary transition-colors text-sm"
              >
                <MapPin className="h-3 w-3" />
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Arbeitsbuehnen;
