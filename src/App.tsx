import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import Arbeitsbuehnen from "./pages/Arbeitsbuehnen";
import Scherenarbeitsbuehnen from "./pages/Scherenarbeitsbuehnen";
import Teleskopbuehnen from "./pages/Teleskopbuehnen";
import Gelenkbuehnen from "./pages/Gelenkbuehnen";
import HotDeals from "./pages/HotDeals";
import Service from "./pages/Service";
import Standorte from "./pages/Standorte";
import UeberUns from "./pages/UeberUns";
import Kontakt from "./pages/Kontakt";
import Finanzierung from "./pages/Finanzierung";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import FAQ from "./pages/FAQ";
import StadtSeite from "./pages/StadtSeite";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/arbeitsbuehne-kaufen-nrw" element={<Arbeitsbuehnen />} />
            <Route path="/scherenarbeitsbuehne-kaufen-nrw" element={<Scherenarbeitsbuehnen />} />
            <Route path="/teleskopbuehne-kaufen-nrw" element={<Teleskopbuehnen />} />
            <Route path="/gelenkbuehne-kaufen-nrw" element={<Gelenkbuehnen />} />
            <Route path="/arbeitsbuehne-sonderangebote-nrw" element={<HotDeals />} />
            <Route path="/arbeitsbuehne-service-nrw" element={<Service />} />
            <Route path="/arbeitsbuehne-kaufen-standorte-nrw" element={<Standorte />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/arbeitsbuehne-finanzierung-nrw" element={<Finanzierung />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/faq" element={<FAQ />} />
            {/* Lokale SEO-Stadtseiten */}
            <Route path="/arbeitsbuehne-kaufen-koeln" element={<StadtSeite />} />
            <Route path="/arbeitsbuehne-kaufen-duesseldorf" element={<StadtSeite />} />
            <Route path="/arbeitsbuehne-kaufen-dortmund" element={<StadtSeite />} />
            <Route path="/arbeitsbuehne-kaufen-essen" element={<StadtSeite />} />
            <Route path="/arbeitsbuehne-kaufen-bonn" element={<StadtSeite />} />
            <Route path="/arbeitsbuehne-kaufen-duisburg" element={<StadtSeite />} />
            <Route path="/arbeitsbuehne-kaufen-krefeld" element={<StadtSeite />} />
            <Route path="/arbeitsbuehne-kaufen-muelheim" element={<StadtSeite />} />
            {/* Redirects from old URLs */}
            <Route path="/arbeitsbuehnen" element={<Navigate to="/arbeitsbuehne-kaufen-nrw" replace />} />
            <Route path="/hot-deals" element={<Navigate to="/arbeitsbuehne-sonderangebote-nrw" replace />} />
            <Route path="/service" element={<Navigate to="/arbeitsbuehne-service-nrw" replace />} />
            <Route path="/standorte" element={<Navigate to="/arbeitsbuehne-kaufen-standorte-nrw" replace />} />
            <Route path="/finanzierung" element={<Navigate to="/arbeitsbuehne-finanzierung-nrw" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
