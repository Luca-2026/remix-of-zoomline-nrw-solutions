import { Helmet } from "react-helmet-async";
import { useLocation, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin, CheckCircle } from "lucide-react";
import { getCityBySlug, cityData } from "@/data/cities";
import NotFound from "./NotFound";

const StadtSeite = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/arbeitsbuehne-kaufen-", "");
  const data = getCityBySlug(slug);

  if (!data) return <NotFound />;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Start", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/" },
      { "@type": "ListItem", "position": 2, "name": "Standorte", "item": "https://www.arbeitsbuehne-kaufen-nrw.de/arbeitsbuehne-kaufen-standorte-nrw" },
      { "@type": "ListItem", "position": 3, "name": `Arbeitsbühne kaufen ${data.name}`, "item": `https://www.arbeitsbuehne-kaufen-nrw.de/arbeitsbuehne-kaufen-${data.slug}` }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Zoomlion Arbeitsbühnen ${data.name} – SLT Technology Group`,
    "description": `Arbeitsbühne kaufen in ${data.name}. Scherenarbeitsbühnen, Teleskopbühnen und Gelenkbühnen vom Zoomlion Fachhändler.`,
    "telephone": data.phone,
    "email": "verkauf@zoomlion-nrw.de",
    "url": `https://www.arbeitsbuehne-kaufen-nrw.de/arbeitsbuehne-kaufen-${data.slug}`,
    "areaServed": {
      "@type": "City",
      "name": data.name,
      "containedInPlace": { "@type": "State", "name": "Nordrhein-Westfalen" }
    },
    "brand": { "@type": "Brand", "name": "Zoomlion" }
  };

  const otherCities = cityData.filter(c => c.slug !== data.slug).slice(0, 6);

  return (
    <Layout>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="keywords" content={`Arbeitsbühne kaufen ${data.name}, Scherenarbeitsbühne ${data.name}, Hubarbeitsbühne kaufen ${data.name}, Teleskopbühne ${data.name}, Hebebühne kaufen ${data.name}, Steiger kaufen ${data.name}, Zoomlion ${data.name}`} />
        <link rel="canonical" href={`https://www.arbeitsbuehne-kaufen-nrw.de/arbeitsbuehne-kaufen-${data.slug}`} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={`https://www.arbeitsbuehne-kaufen-nrw.de/arbeitsbuehne-kaufen-${data.slug}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Arbeitsbühne kaufen {data.name}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Arbeitsbühne kaufen in <span className="text-primary">{data.name}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
              {data.intro}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Nächster Standort: <strong>{data.nearbyStandort}</strong> – {data.phone}</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/kontakt">
                  Angebot anfordern
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${data.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {data.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Arbeitsbühnen-Typen */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-4">
            Arbeitsbühnen kaufen in {data.name}
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Vom Zoomlion Fachhändler – mit Beratung, Lieferung und Service in {data.region}
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Scherenarbeitsbühne",
                desc: `Kompakte Scherenarbeitsbühnen für Indoor- und Outdoor-Einsätze in ${data.name}. Elektro oder Diesel, 6-16m Arbeitshöhe.`,
                href: "/scherenarbeitsbuehne-kaufen-nrw",
                features: ["Ab 8.900 € netto", "6-16m Arbeitshöhe", "Elektro & Li-Ion"]
              },
              {
                title: "Teleskopbühne",
                desc: `Teleskopbühnen für große Höhen in ${data.name}. Bis 68 Meter Arbeitshöhe für Hochbau und Industrieprojekte.`,
                href: "/teleskopbuehne-kaufen-nrw",
                features: ["20-68m Arbeitshöhe", "Diesel & Elektro", "Große Reichweite"]
              },
              {
                title: "Gelenkteleskopbühne",
                desc: `Gelenkbühnen für schwer zugängliche Bereiche in ${data.name}. Flexibel über und um Hindernisse arbeiten.`,
                href: "/gelenkbuehne-kaufen-nrw",
                features: ["10-26m Arbeitshöhe", "Über Hindernisse", "Flexibler Einsatz"]
              }
            ].map((type) => (
              <Link key={type.title} to={type.href} className="group rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all">
                <h3 className="font-heading font-bold text-lg mb-2">{type.title} kaufen {data.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{type.desc}</p>
                <div className="space-y-1 mb-4">
                  {type.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs">
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-primary flex items-center">
                  Jetzt konfigurieren <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Einsatzbereiche */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">Typische Einsatzbereiche in {data.name}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.useCases.map((uc, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">
            Ihre Vorteile beim Arbeitsbühne kaufen in {data.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: `Standort ${data.nearbyStandort} in der Nähe`, desc: "Persönliche Beratung, Besichtigung und Abholung vor Ort" },
              { title: "3 Jahre Garantie", desc: "3.000 Betriebsstunden Garantie auf alle Zoomlion Arbeitsbühnen" },
              { title: "Ersatzteile sofort verfügbar", desc: `Original-Ersatzteile am Standort ${data.nearbyStandort} auf Lager` },
              { title: "Lieferung nach " + data.name, desc: "Wir liefern Ihre Arbeitsbühne direkt zu Ihrem Einsatzort" },
              { title: "Finanzierung & Leasing", desc: "Flexible Finanzierung ab 0% – monatliche Raten statt hoher Einmalinvestition" },
              { title: "UVV-Prüfung & Wartung", desc: `Service und Wartung für Ihre Arbeitsbühne in ${data.region}` },
            ].map((v, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm">{v.title}</h3>
                  <p className="text-xs text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-bold mb-4">
              Arbeitsbühne kaufen in {data.name} – Zoomlion Fachhändler
            </h2>
            <p>
              Sie möchten eine <strong>Arbeitsbühne kaufen in {data.name}</strong>? Als exklusiver Zoomlion Fachhändler 
              in NRW bieten wir Ihnen das komplette Sortiment an Arbeitsbühnen mit Lieferung nach {data.name} und 
              in die gesamte Region {data.region}. Mit unserem <strong>Standort {data.nearbyStandort}</strong> sind wir 
              immer in Ihrer Nähe – für Beratung, Besichtigung, Service und Ersatzteile.
            </p>
            <p>
              Unser Angebot umfasst <Link to="/scherenarbeitsbuehne-kaufen-nrw" className="text-primary hover:underline"><strong>Scherenarbeitsbühnen ab 8.900 €</strong></Link>, {" "}
              <Link to="/teleskopbuehne-kaufen-nrw" className="text-primary hover:underline"><strong>Teleskopbühnen bis 68m</strong></Link> und {" "}
              <Link to="/gelenkbuehne-kaufen-nrw" className="text-primary hover:underline"><strong>Gelenkteleskopbühnen</strong></Link>. 
              Alle Modelle mit <strong>3 Jahren Garantie</strong> und <strong>flexibler Finanzierung</strong>.
            </p>

            <h3 className="font-heading text-xl font-bold mt-6 mb-3">
              Liefergebiet ab {data.name}
            </h3>
            <p>
              Wir liefern Arbeitsbühnen in alle Stadtteile von {data.name} ({data.districts.join(", ")}) 
              sowie in die Nachbarstädte <strong>{data.nearbyCity}</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Weitere Städte */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-xl font-bold mb-6 text-center">
            Arbeitsbühne kaufen in weiteren NRW-Städten
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCities.map(c => (
              <Link
                key={c.slug}
                to={`/arbeitsbuehne-kaufen-${c.slug}`}
                className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-card hover:border-primary/50 hover:text-primary transition-colors text-sm"
              >
                <MapPin className="mr-1.5 h-3 w-3" />
                {c.name}
              </Link>
            ))}
            <Link
              to="/arbeitsbuehne-kaufen-standorte-nrw"
              className="inline-flex items-center px-4 py-2 rounded-full border border-primary bg-primary/10 text-primary text-sm font-medium"
            >
              Alle Standorte <ArrowRight className="ml-1.5 h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Arbeitsbühne kaufen in {data.name} – Jetzt anfragen
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Persönliche Beratung, schnelle Lieferung und Service vor Ort – kontaktieren Sie uns für Ihr Angebot.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/kontakt">Angebot anfordern <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:text-white">
              <a href={`tel:${data.phone.replace(/\s/g, "")}`}><Phone className="mr-2 h-4 w-4" />{data.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StadtSeite;
