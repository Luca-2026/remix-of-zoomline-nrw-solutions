import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import logoImage from "@/assets/logo-zoomlion-nrw.png";
import { cityData } from "@/data/cities";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Info */}
          <div className="space-y-4">
            <Link to="/">
              <img 
                src={logoImage} 
                alt="Arbeitsbühne kaufen NRW - Zoomlion Fachhändler" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-secondary-foreground/80">
              Exklusiver Fachhändler für Zoomlion Arbeitsbühnen in
              Nordrhein-Westfalen. Scherenarbeitsbühnen, Teleskopbühnen und Gelenkbühnen kaufen.
            </p>
            <p className="text-xs text-secondary-foreground/60">
              Ein Unternehmen der
              <br />
              SLT Technology Group GmbH & Co. KG
            </p>
          </div>

          {/* Arbeitsbühnen */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4">Arbeitsbühnen kaufen</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/arbeitsbuehne-kaufen-nrw" className="text-secondary-foreground/80 hover:text-primary transition-colors">Alle Arbeitsbühnen</Link></li>
              <li><Link to="/scherenarbeitsbuehne-kaufen-nrw" className="text-secondary-foreground/80 hover:text-primary transition-colors">Scherenarbeitsbühnen</Link></li>
              <li><Link to="/teleskopbuehne-kaufen-nrw" className="text-secondary-foreground/80 hover:text-primary transition-colors">Teleskopbühnen</Link></li>
              <li><Link to="/gelenkbuehne-kaufen-nrw" className="text-secondary-foreground/80 hover:text-primary transition-colors">Gelenkteleskopbühnen</Link></li>
              <li><Link to="/arbeitsbuehne-sonderangebote-nrw" className="text-secondary-foreground/80 hover:text-primary transition-colors">🔥 Hot Deals / Sonderangebote</Link></li>
              <li><Link to="/arbeitsbuehne-finanzierung-nrw" className="text-secondary-foreground/80 hover:text-primary transition-colors">Finanzierungsrechner</Link></li>
              <li><Link to="/arbeitsbuehne-service-nrw" className="text-secondary-foreground/80 hover:text-primary transition-colors">Service & Ersatzteile</Link></li>
              <li><Link to="/faq" className="text-secondary-foreground/80 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Standorte & Städte */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4">
              <Link to="/arbeitsbuehne-kaufen-standorte-nrw" className="hover:text-primary transition-colors">Standorte & Städte</Link>
            </h3>
            <ul className="space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <span className="block text-secondary-foreground/80">Bonn</span>
                  <a href="tel:0228-50466061" className="text-primary hover:underline text-xs">0228 50466061</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <span className="block text-secondary-foreground/80">Krefeld</span>
                  <a href="tel:02151-4179904" className="text-primary hover:underline text-xs">02151 4179904</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span className="text-secondary-foreground/80">Mülheim a. d. Ruhr</span>
              </li>
            </ul>
            {/* Lokale SEO Stadt-Links */}
            <div className="mt-4 pt-3 border-t border-secondary-foreground/10">
              <h4 className="text-xs font-semibold mb-2 text-secondary-foreground/60">Arbeitsbühne kaufen in:</h4>
              <div className="flex flex-wrap gap-1.5">
                {cityData.map(city => (
                  <Link
                    key={city.slug}
                    to={`/arbeitsbuehne-kaufen-${city.slug}`}
                    className="text-xs text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:02151-4179904" className="text-secondary-foreground/80 hover:text-primary transition-colors">02151 4179904</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:verkauf@zoomlion-nrw.de" className="text-secondary-foreground/80 hover:text-primary transition-colors">verkauf@zoomlion-nrw.de</a>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <address className="not-italic text-secondary-foreground/80">
                  Anrather Straße 291<br />47807 Krefeld
                </address>
              </li>
            </ul>

            {/* Partner Links */}
            <div className="mt-6 pt-4 border-t border-secondary-foreground/10">
              <h4 className="text-xs font-semibold mb-3 text-secondary-foreground/60">Weitere Angebote</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.slt-rental.de" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors">
                    <ExternalLink className="h-3 w-3" />
                    Hier geht's zur Vermietung
                  </a>
                </li>
                <li>
                  <a href="https://www.baumaschinen.blog" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors">
                    <ExternalLink className="h-3 w-3" />
                    Baumaschinen Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/60">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/datenschutz" className="hover:text-secondary-foreground transition-colors">Datenschutz</Link>
            <Link to="/impressum" className="hover:text-secondary-foreground transition-colors">Impressum</Link>
            <Link to="/ueber-uns" className="hover:text-secondary-foreground transition-colors">Über uns</Link>
          </div>
          <p>© {new Date().getFullYear()} SLT Technology Group GmbH & Co. KG. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
