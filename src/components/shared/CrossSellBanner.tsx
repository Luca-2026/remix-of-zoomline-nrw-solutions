import { useState, useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import iconBagger from "@/assets/icons/icon-bagger.png";

export function CrossSellBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem("crosssell-dismissed");
    if (wasDismissed) {
      setDismissed(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("crosssell-dismissed", "true");
  };

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-fade-in-up">
      <div className="relative rounded-2xl border border-border bg-card p-5 shadow-2xl">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors text-muted-foreground"
          aria-label="Schließen"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
            <img src={iconBagger} alt="Bagger & Teleskoplader" className="h-10 w-10 object-contain" />
          </div>
          <div>
            <p className="font-heading font-bold text-sm mb-1">
              Sie suchen Teleskoplader oder Bagger?
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Entdecken Sie das komplette Zoomlion Baumaschinen-Programm auf unserer Schwester-Website.
            </p>
            <Button asChild size="sm" variant="outline" className="group">
              <a href="https://www.zoomlion-nrw.de" target="_blank" rel="noopener noreferrer">
                Zu zoomlion-nrw.de
                <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
