import { useState } from "react";
import ThreatCard from "@/components/ThreatCard";
import SecurityMetric from "@/components/SecurityMetric";
import RecommendationList from "@/components/RecommendationList";
import { ChatButton } from "@/components/ChatButton";

const Index = () => {
  const [recommendations, setRecommendations] = useState([
    {
      id: "1",
      title: "Update Firewall Rules",
      description: "Critical security patches available for your firewall configuration",
      priority: "high" as const,
      completed: false,
    },
    {
      id: "2",
      title: "Enable 2FA",
      description: "Two-factor authentication recommended for all admin accounts",
      priority: "medium" as const,
      completed: false,
    },
    {
      id: "3",
      title: "Review Access Logs",
      description: "Routine review of system access logs recommended",
      priority: "low" as const,
      completed: false,
    },
  ]);

  const handleComplete = (id: string) => {
    setRecommendations(recommendations.map(rec => 
      rec.id === id ? { ...rec, completed: !rec.completed } : rec
    ));
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-background to-background/95">
      <main className="container mx-auto space-y-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Security Dashboard</h1>
            <p className="text-muted-foreground">Real-time threat intelligence and monitoring</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="status-indicator bg-success" />
            <span className="text-sm text-muted-foreground">System Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SecurityMetric
            title="Overall Risk Score"
            value={35}
            maxValue={100}
            type="risk"
          />
          <SecurityMetric
            title="Security Coverage"
            value={85}
            maxValue={100}
            type="safety"
          />
          <SecurityMetric
            title="Active Threats"
            value={3}
            maxValue={10}
            type="neutral"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold mb-4">Active Threats</h2>
            <ThreatCard
              level="critical"
              title="Suspicious Login Attempt"
              description="Multiple failed login attempts detected from unknown IP address"
              timestamp="2 minutes ago"
            />
            <ThreatCard
              level="warning"
              title="Outdated Security Protocol"
              description="TLS 1.0 still in use on some endpoints"
              timestamp="15 minutes ago"
            />
            <ThreatCard
              level="safe"
              title="Firewall Status"
              description="All firewall rules are up to date and properly configured"
              timestamp="1 hour ago"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
            <RecommendationList
              recommendations={recommendations}
              onComplete={handleComplete}
            />
          </div>
        </div>
      </main>
      <ChatButton />
    </div>
  );
};

export default Index;