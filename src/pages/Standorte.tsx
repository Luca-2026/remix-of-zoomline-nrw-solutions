import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { locations } from "@/data/products";
import { cityData } from "@/data/cities";
import { MapPin, Phone, Mail, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bonnImage from "@/assets/locations/bonn.webp";
import krefeldImage from "@/assets/locations/krefeld.jpg";

const locationImages: Record<string, string | null> = {
  bonn: bonnImage,
  krefeld: krefeldImage,
  muelheim: null,
};

const EMAIL = "verkauf@zoomlion-nrw.de";

const Standorte = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Start", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/" },
      { "@type": "ListItem", "position": 2, "name": "Standorte – Arbeitsbühne kaufen NRW", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/arbeitsbuehne-kaufen-standorte-nrw" }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Arbeitsbühne kaufen Bonn, Krefeld, Mülheim | 3 Standorte NRW</title>
        <meta name="description" content="Arbeitsbühne kaufen an 3 Standorten in NRW ➤ Bonn ✓ Krefeld ✓ Mülheim/Ruhrgebiet ✓ Scherenarbeitsbühne kaufen ✓ Ersatzteile vor Ort ✓ Service & Beratung. Jetzt Standort finden!" />
        <meta name="keywords" content="Arbeitsbühne kaufen Bonn, Arbeitsbühne kaufen Krefeld, Arbeitsbühne kaufen Ruhrgebiet, Arbeitsbühne kaufen Köln, Arbeitsbühne kaufen Düsseldorf, Scherenarbeitsbühne kaufen NRW, Zoomlion Händler NRW" />
        <link rel="canonical" href="https://www.arbeitsbuehne-kaufen-nrw.de/arbeitsbuehne-kaufen-standorte-nrw" />
        <meta property="og:title" content="Arbeitsbühne kaufen – 3 Standorte in NRW" />
        <meta property="og:description" content="Arbeitsbühne kaufen in Bonn, Krefeld und Mülheim. Service und Ersatzteile immer in Ihrer Nähe." />
        <meta property="og:url" content="https://www.arbeitsbuehne-kaufen-nrw.de/arbeitsbuehne-kaufen-standorte-nrw" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Standorte"
            title="Arbeitsbühne kaufen – 3 Standorte in NRW"
            subtitle="Scherenarbeitsbühnen, Teleskopbühnen und Gelenkbühnen kaufen – mit Beratung, Ersatzteilen & Service vor Ort"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {locations.map((loc) => {
              const locationImage = locationImages[loc.id];
              return (
                <div key={loc.id} className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    {locationImage ? (
                      <img src={locationImage} alt={`Arbeitsbühne kaufen ${loc.city} - Zoomlion Fachhändler Standort ${loc.name}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/80">
                        <div className="text-center">
                          <Building2 className="h-12 w-12 text-primary/30 mx-auto mb-2" />
                          <p className="text-sm font-medium text-muted-foreground">{loc.mapPlaceholder}</p>
                          <p className="text-xs text-muted-foreground/70 mt-1">Bild folgt</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading text-xl font-bold mb-2">{loc.name}</h2>
                    <p className="text-muted-foreground">{loc.address}</p>
                    <p className="text-muted-foreground mb-4">{loc.city}</p>
                    <div className="space-y-2">
                      {loc.showPhone && loc.phone && (
                        <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-primary font-medium hover:underline">
                          <Phone className="h-4 w-4" /> {loc.phone}
                        </a>
                      )}
                      <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-primary font-medium hover:underline">
                        <Mail className="h-4 w-4" /> {EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lokale Stadtseiten */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-center mb-4">Arbeitsbühne kaufen in Ihrer Stadt</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Wir liefern Zoomlion Arbeitsbühnen in ganz NRW. Finden Sie Informationen zu Ihrem Standort:
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {cityData.map(city => (
              <Link
                key={city.slug}
                to={`/arbeitsbuehne-kaufen-${city.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card hover:border-primary/50 hover:text-primary transition-all text-sm font-medium hover:shadow-md"
              >
                <MapPin className="h-3.5 w-3.5" />
                {city.name}
                <ArrowRight className="h-3 w-3 opacity-0 -ml-1 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-bold mb-4">Arbeitsbühne kaufen in Ihrer Nähe – Zoomlion Fachhändler NRW</h2>
            <p>
              Mit <strong>3 Standorten in Nordrhein-Westfalen</strong> sind wir immer in Ihrer Nähe. 
              Ob Sie eine <strong>Scherenarbeitsbühne kaufen in Köln</strong>, eine <strong>Teleskopbühne kaufen in Düsseldorf</strong> oder 
              eine <strong>Gelenkbühne kaufen im Ruhrgebiet</strong> – unser Team berät Sie kompetent vor Ort.
            </p>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Regionale Abdeckung – Arbeitsbühne kaufen in:</h3>
            <ul>
              <li><strong>Standort Bonn:</strong> <Link to="/arbeitsbuehne-kaufen-koeln" className="text-primary hover:underline">Köln</Link>, <Link to="/arbeitsbuehne-kaufen-bonn" className="text-primary hover:underline">Bonn</Link>, Bergisch Gladbach, Leverkusen, Rhein-Sieg-Kreis, Aachen</li>
              <li><strong>Standort Krefeld:</strong> <Link to="/arbeitsbuehne-kaufen-duesseldorf" className="text-primary hover:underline">Düsseldorf</Link>, <Link to="/arbeitsbuehne-kaufen-duisburg" className="text-primary hover:underline">Duisburg</Link>, <Link to="/arbeitsbuehne-kaufen-krefeld" className="text-primary hover:underline">Krefeld</Link>, Mönchengladbach, Neuss</li>
              <li><strong>Standort Mülheim:</strong> <Link to="/arbeitsbuehne-kaufen-essen" className="text-primary hover:underline">Essen</Link>, <Link to="/arbeitsbuehne-kaufen-dortmund" className="text-primary hover:underline">Dortmund</Link>, <Link to="/arbeitsbuehne-kaufen-muelheim" className="text-primary hover:underline">Mülheim</Link>, Bochum, Oberhausen</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Standorte;
