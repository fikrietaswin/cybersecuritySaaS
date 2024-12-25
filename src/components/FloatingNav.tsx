import { Link, useLocation } from "react-router-dom";
import { Shield, Database, ChartBar, Search, Bug } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FloatingNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Shield, label: "Dashboard" },
    { path: "/threat-intelligence", icon: Database, label: "Threat Intelligence" },
    { path: "/risk-scoring", icon: ChartBar, label: "Risk Scoring" },
    { path: "/threat-hunting", icon: Search, label: "Threat Hunting" },
    { path: "/vulnerability-management", icon: Bug, label: "Vulnerability Management" },
  ];

  return (
    <TooltipProvider>
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 animate-fade-up">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Tooltip key={path}>
              <TooltipTrigger asChild>
                <Link to={path}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "rounded-full transition-colors",
                      location.pathname === path
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "hover:bg-secondary"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </nav>
    </TooltipProvider>
  );
};

export default FloatingNav;