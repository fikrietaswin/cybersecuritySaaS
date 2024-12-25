import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
}

interface RecommendationListProps {
  recommendations: Recommendation[];
  onComplete: (id: string) => void;
}

const RecommendationList = ({ recommendations, onComplete }: RecommendationListProps) => {
  return (
    <div className="space-y-4 animate-fade-up">
      {recommendations.map((rec) => (
        <Card key={rec.id} className="threat-card">
          <div className="flex items-start gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="mt-1"
              onClick={() => onComplete(rec.id)}
            >
              {rec.completed ? (
                <CheckCircle className="w-5 h-5 text-success" />
              ) : (
                <Circle className="w-5 h-5 text-muted-foreground" />
              )}
            </Button>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium">{rec.title}</h3>
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    rec.priority === "high" && "bg-destructive/10 text-destructive",
                    rec.priority === "medium" && "bg-warning/10 text-warning",
                    rec.priority === "low" && "bg-success/10 text-success"
                  )}
                >
                  {rec.priority}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{rec.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default RecommendationList;