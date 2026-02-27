import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CTABar() {
  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-lg font-bold text-primary-foreground">
              Arbeitsbühne kaufen in NRW?
            </h3>
            <p className="text-sm text-primary-foreground/80">
              Scherenarbeitsbühne, Teleskopbühne oder Gelenkbühne – finden Sie die passende Lösung
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/arbeitsbuehne-kaufen-nrw">
                <ArrowRight className="mr-2 h-4 w-4" />
                Jetzt konfigurieren
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white">
              <Link to="/kontakt">
                <MessageSquare className="mr-2 h-4 w-4" />
                Angebot anfordern
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
