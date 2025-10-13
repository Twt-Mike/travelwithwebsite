
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import InfluencerTour from "./pages/InfluencerTour";
import HaggisinJapan from "./pages/HaggisinJapan";
import HaggisinJapanCherryBlossom from "./pages/HaggisinJapanCherryBlossom";
import HaggisinJapanNovember2026 from "./pages/HaggisinJapanNovember2026";
import NotFound from "./pages/NotFound";
import EditorNavHelper from "./components/EditorNavHelper";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <EditorNavHelper />
            <Routes>
              {/* Home routes with two paths */}
              <Route path="/" element={<Index />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ourtraveltreatsjpn" element={<InfluencerTour />} />
              <Route path="/haggisinjapan" element={<HaggisinJapan />} />
              <Route path="/haggisinjapancherryblossom" element={<HaggisinJapanCherryBlossom />} />
              <Route path="/haggisinjapannovember2026" element={<HaggisinJapanNovember2026 />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
