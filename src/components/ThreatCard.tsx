import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AlertTriangle, Shield, ShieldAlert } from "lucide-react";

interface ThreatCardProps {
  level: "critical" | "warning" | "safe";
  title: string;
  description: string;
  timestamp: string;
}

const ThreatCard = ({ level, title, description, timestamp }: ThreatCardProps) => {
  const getIcon = () => {
    switch (level) {
      case "critical":
        return <ShieldAlert className="w-5 h-5 text-destructive" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-warning" />;
      case "safe":
        return <Shield className="w-5 h-5 text-success" />;
    }
  };

  return (
    <Card className={cn(
      "threat-card animate-fade-up",
      level === "critical" && "border-destructive/50",
      level === "warning" && "border-warning/50",
      level === "safe" && "border-success/50"
    )}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">{getIcon()}</div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <time className="text-xs text-muted-foreground">{timestamp}</time>
        </div>
      </div>
    </Card>
  );
};

export default ThreatCard;