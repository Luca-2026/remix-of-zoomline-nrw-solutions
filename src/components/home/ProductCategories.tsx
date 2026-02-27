import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import iconArbeitsbuehne from "@/assets/icons/icon-arbeitsbuehne.png";

const categories = [
  {
    id: "scherenbuehnen",
    title: "Scherenarbeitsbühne kaufen",
    description: "Kompakte Scherenarbeitsbühnen für Indoor- und Outdoor-Einsätze. Elektrisch, Lithium-Ionen oder Diesel – ab 8.900 € netto.",
    icon: iconArbeitsbuehne,
    href: "/scherenarbeitsbuehne-kaufen-nrw",
    features: ["6-16m Arbeitshöhe", "Elektro & Li-Ion", "Indoor & Outdoor", "Ab 8.900 €"]
  },
  {
    id: "teleskopbuehnen",
    title: "Teleskopbühne kaufen",
    description: "Maximale Reichweite für anspruchsvolle Höhenarbeiten. Zoomlion Teleskopbühnen bis 68 Meter Arbeitshöhe.",
    icon: iconArbeitsbuehne,
    href: "/teleskopbuehne-kaufen-nrw",
    features: ["20-68m Arbeitshöhe", "Diesel & Elektro", "Große Reichweite", "Baustelleneinsatz"]
  },
  {
    id: "gelenkbuehnen",
    title: "Gelenkteleskopbühne kaufen",
    description: "Flexibel über und um Hindernisse arbeiten. Gelenkteleskopbühnen für schwer zugängliche Bereiche.",
    icon: iconArbeitsbuehne,
    href: "/gelenkbuehne-kaufen-nrw",
    features: ["10-26m Arbeitshöhe", "Über Hindernisse", "Flexibel einsetzbar", "Diesel & Elektro"]
  }
];

export function ProductCategories() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Arbeitsbühnen kaufen NRW"
          title="Finden Sie die passende Arbeitsbühne"
          subtitle="Scherenarbeitsbühnen, Teleskopbühnen und Gelenkbühnen – direkt vom Zoomlion Fachhändler"
        />

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-muted overflow-hidden transition-colors group-hover:bg-primary/10">
                <img 
                  src={category.icon} 
                  alt={`${category.title} NRW - Zoomlion Arbeitsbühne`}
                  className="h-14 w-14 object-contain"
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {category.features.map((feature) => (
                  <span key={feature} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center text-sm font-medium text-primary">
                Jetzt konfigurieren
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
