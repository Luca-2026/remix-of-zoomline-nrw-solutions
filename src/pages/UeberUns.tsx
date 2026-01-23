import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TrustBadges } from "@/components/shared/TrustBadges";

const UeberUns = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Über uns - Arbeitsbühne kaufen NRW",
    "description": "Exklusiver Zoomlion Fachhändler für Arbeitsbühnen in Nordrhein-Westfalen",
    "url": "https://www.arbeitsbuehne-kaufen-nrw.de/ueber-uns",
    "mainEntity": {
      "@type": "Organization",
      "name": "Arbeitsbühne kaufen NRW",
      "legalName": "SLT Technology Group GmbH & Co. KG",
      "foundingDate": "2020",
      "areaServed": "Nordrhein-Westfalen"
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Über uns – Zoomlion Fachhändler für Arbeitsbühnen NRW</title>
        <meta 
          name="title" 
          content="Über uns – Zoomlion Fachhändler für Arbeitsbühnen NRW" 
        />
        <meta 
          name="description" 
          content="Ihr exklusiver Fachhändler für Arbeitsbühnen in Nordrhein-Westfalen ➤ 3 Standorte ✓ Erfahrenes Team ✓ Ersatzteile vor Ort ✓ Service & Beratung. Teil der SLT Technology Group." 
        />
        <meta 
          name="keywords" 
          content="Arbeitsbühne kaufen NRW Fachhändler, Zoomlion Händler Deutschland, Scherenarbeitsbühne Händler NRW, SLT Technology Group, Hubarbeitsbühne Experte" 
        />
        <link rel="canonical" href="https://www.arbeitsbuehne-kaufen-nrw.de/ueber-uns" />
        
        <meta property="og:title" content="Über uns – Arbeitsbühne kaufen NRW" />
        <meta property="og:description" content="Exklusiver Zoomlion Fachhändler für Arbeitsbühnen in NRW mit 3 Standorten." />
        <meta property="og:url" content="https://www.arbeitsbuehne-kaufen-nrw.de/ueber-uns" />
        
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading
            badge="Über uns"
            title="Ihr Partner für Arbeitsbühnen in NRW"
            subtitle="Exklusiver Zoomlion Fachhändler für Scherenarbeitsbühnen, Teleskopbühnen und Gelenkbühnen"
          />
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              Als exklusiver <strong>Zoomlion Fachhändler</strong> sind wir Ihr Ansprechpartner für 
              <strong> Arbeitsbühnen kaufen</strong> in Nordrhein-Westfalen. Mit drei Standorten in Bonn, Krefeld und 
              Mülheim an der Ruhr sind wir immer in Ihrer Nähe.
            </p>
            <p>
              Als Teil der <strong>SLT Technology Group GmbH & Co. KG</strong> verbinden wir langjährige Erfahrung 
              im Maschinenhandel mit modernem Service und kompetenter Beratung. Unser Ziel: Ihnen beim 
              Kauf von <strong>Scherenarbeitsbühnen, Teleskopbühnen und Gelenkbühnen</strong> die beste Lösung zu bieten.
            </p>
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">Warum Arbeitsbühnen bei uns kaufen?</h2>
            <ul>
              <li><strong>Top 5 Hersteller weltweit:</strong> Zoomlion gehört zu den größten Arbeitsbühnenherstellern der Welt</li>
              <li><strong>3 Jahre Garantie:</strong> Umfassender Schutz für Ihre Investition</li>
              <li><strong>Ersatzteile vor Ort:</strong> Schnelle Verfügbarkeit an allen Standorten</li>
              <li><strong>Flexible Finanzierung:</strong> Attraktive Konditionen für Ihr Budget</li>
              <li><strong>Kompetente Beratung:</strong> Erfahrene Experten für Arbeitsbühnen aller Art</li>
            </ul>
          </div>
          <TrustBadges />
        </div>
      </section>
    </Layout>
  );
};

export default UeberUns;
