import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SecurityMetricProps {
  title: string;
  value: number;
  maxValue: number;
  type: "risk" | "safety" | "neutral";
}

const SecurityMetric = ({ title, value, maxValue, type }: SecurityMetricProps) => {
  const percentage = (value / maxValue) * 100;

  return (
    <Card className="glass-panel p-4 animate-fade-up">
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={cn(
            "absolute h-full transition-all duration-500 ease-out",
            type === "risk" && "bg-destructive",
            type === "safety" && "bg-success",
            type === "neutral" && "bg-warning"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        {value} / {maxValue}
      </p>
    </Card>
  );
};

export default SecurityMetric;