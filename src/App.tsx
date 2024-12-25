import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ThreatIntelligence from "./pages/ThreatIntelligence";
import RiskScoring from "./pages/RiskScoring";
import ThreatHunting from "./pages/ThreatHunting";
import VulnerabilityManagement from "./pages/VulnerabilityManagement";
import FloatingNav from "./components/FloatingNav";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/threat-intelligence" element={<ThreatIntelligence />} />
          <Route path="/risk-scoring" element={<RiskScoring />} />
          <Route path="/threat-hunting" element={<ThreatHunting />} />
          <Route path="/vulnerability-management" element={<VulnerabilityManagement />} />
        </Routes>
        <FloatingNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;