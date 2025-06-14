
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Brandschutzberatung from "./pages/Brandschutzberatung";
import TuerenBrandschutz from "./pages/TuerenBrandschutz";
import BrandschutzkonzeptePage from "./pages/BrandschutzkonzeptePage";
import BrandschutzbegehungenPage from "./pages/BrandschutzbegehungenPage";
import SchulungenPage from "./pages/SchulungenPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dienstleistungen/brandschutzberatung" element={<Brandschutzberatung />} />
          <Route path="/dienstleistungen/tueren-brandschutz" element={<TuerenBrandschutz />} />
          <Route path="/dienstleistungen/brandschutzkonzepte" element={<BrandschutzkonzeptePage />} />
          <Route path="/dienstleistungen/brandschutzbegehungen" element={<BrandschutzbegehungenPage />} />
          <Route path="/dienstleistungen/schulungen" element={<SchulungenPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
