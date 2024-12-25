import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, Globe, Database } from "lucide-react";
import { ChatButton } from "@/components/ChatButton";

const ThreatIntelligence = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-background to-background/95">
      <main className="container mx-auto space-y-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Threat Intelligence</h1>
            <p className="text-muted-foreground">Advanced threat detection and analysis</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="status-indicator bg-success" />
            <span className="text-sm text-muted-foreground">Live Feed Active</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-panel p-6 animate-fade-up">
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-primary" />
              <div>
                <h2 className="text-xl font-semibold mb-4">Global Threat Feed</h2>
                <p className="text-muted-foreground mb-4">Real-time updates from global security feeds and threat intelligence platforms.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning" />
                    New ransomware strain detected in Eastern Europe
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-success" />
                    Banking trojan signatures updated
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning" />
                    Increased DDoS activity reported
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          
          <Card className="glass-panel p-6 animate-fade-up">
            <div className="flex items-start gap-4">
              <Database className="w-6 h-6 text-primary" />
              <div>
                <h2 className="text-xl font-semibold mb-4">Threat Indicators</h2>
                <p className="text-muted-foreground mb-4">Key indicators of compromise and attack patterns identified in your environment.</p>
                <div className="space-y-4">
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Malicious IPs</span>
                      <span className="text-sm text-destructive">12 detected</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-destructive" style={{ width: '60%' }} />
                    </div>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Suspicious URLs</span>
                      <span className="text-sm text-warning">8 detected</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-warning" style={{ width: '40%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <ChatButton />
    </div>
  );
};

export default ThreatIntelligence;