
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CanonicalTag from "./components/CanonicalTag";

const Brandschutzberatung = lazy(() => import("./pages/Brandschutzberatung"));
const TuerenBrandschutz = lazy(() => import("./pages/TuerenBrandschutz"));
const BrandschutzkonzeptePage = lazy(() => import("./pages/BrandschutzkonzeptePage"));
const BrandschutzbegehungenPage = lazy(() => import("./pages/BrandschutzbegehungenPage"));
const SchulungenPage = lazy(() => import("./pages/SchulungenPage"));
const BrandschutzplanungPage = lazy(() => import("./pages/BrandschutzplanungPage"));
const TuerenplanungPage = lazy(() => import("./pages/TuerenplanungPage"));
const BrandschutzhelferAusbildungPage = lazy(() => import("./pages/BrandschutzhelferAusbildungPage"));
const FluchtRettungsplaenePage = lazy(() => import("./pages/FluchtRettungsplaenePage"));
const FeuerwehrEinsatzplaenePage = lazy(() => import("./pages/FeuerwehrEinsatzplaenePage"));
const BrandschutzStuttgartPage = lazy(() => import("./pages/BrandschutzStuttgartPage"));
const SabotageschutzPage = lazy(() => import("./pages/SabotageschutzPage"));
const GesamtsanierungPage = lazy(() => import("./pages/GesamtsanierungPage"));
const TuerengutachtenPage = lazy(() => import("./pages/TuerengutachtenPage"));
const SicherheitstechnikTuerenPage = lazy(() => import("./pages/SicherheitstechnikTuerenPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CanonicalTag />
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dienstleistungen/brandschutzberatung" element={<Brandschutzberatung />} />
            <Route path="/dienstleistungen/tueren-brandschutz" element={<TuerenBrandschutz />} />
            <Route path="/dienstleistungen/brandschutzkonzepte" element={<BrandschutzkonzeptePage />} />
            <Route path="/dienstleistungen/brandschutzbegehungen" element={<BrandschutzbegehungenPage />} />
            <Route path="/dienstleistungen/schulungen" element={<SchulungenPage />} />
            <Route path="/dienstleistungen/brandschutzplanung" element={<BrandschutzplanungPage />} />
            <Route path="/dienstleistungen/tuerenplanung" element={<TuerenplanungPage />} />
            <Route path="/dienstleistungen/brandschutzhelfer-ausbildung" element={<BrandschutzhelferAusbildungPage />} />
            <Route path="/dienstleistungen/flucht-und-rettungsplaene" element={<FluchtRettungsplaenePage />} />
            <Route path="/dienstleistungen/feuerwehr-einsatzplaene" element={<FeuerwehrEinsatzplaenePage />} />
            <Route path="/brandschutz-stuttgart" element={<BrandschutzStuttgartPage />} />
            <Route path="/dienstleistungen/sabotageschutz" element={<SabotageschutzPage />} />
            <Route path="/dienstleistungen/gesamtsanierung-brandschutz" element={<GesamtsanierungPage />} />
            <Route path="/dienstleistungen/tuerengutachten" element={<TuerengutachtenPage />} />
            <Route path="/dienstleistungen/sicherheitstechnik-tueren" element={<SicherheitstechnikTuerenPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
