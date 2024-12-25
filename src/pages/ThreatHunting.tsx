import { Card } from "@/components/ui/card";
import { Search, Shield, AlertTriangle, Clock } from "lucide-react";
import { ChatButton } from "@/components/ChatButton";

const ThreatHunting = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-background to-background/95">
      <main className="container mx-auto space-y-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Threat Hunting</h1>
            <p className="text-muted-foreground">Proactive threat detection and investigation</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="status-indicator bg-success" />
            <span className="text-sm text-muted-foreground">Hunting Active</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-panel p-6 animate-fade-up">
            <div className="flex items-start gap-4">
              <Search className="w-6 h-6 text-primary" />
              <div>
                <h2 className="text-xl font-semibold mb-4">Active Hunts</h2>
                <div className="space-y-4">
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">Lateral Movement Detection</p>
                        <p className="text-sm text-muted-foreground">Scanning for suspicious network activity</p>
                      </div>
                      <Clock className="w-5 h-5 text-warning animate-pulse" />
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-warning animate-pulse" style={{ width: '60%' }} />
                    </div>
                  </div>
                  
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">Malware Analysis</p>
                        <p className="text-sm text-muted-foreground">Investigating potential malware signatures</p>
                      </div>
                      <Shield className="w-5 h-5 text-success" />
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-success" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="glass-panel p-6 animate-fade-up">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-primary" />
              <div>
                <h2 className="text-xl font-semibold mb-4">Recent Findings</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-destructive/10 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <div>
                      <p className="font-medium text-destructive">Suspicious PowerShell Activity</p>
                      <p className="text-sm text-muted-foreground">Detected 10 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-warning/10 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    <div>
                      <p className="font-medium text-warning">Unusual Login Pattern</p>
                      <p className="text-sm text-muted-foreground">Detected 1 hour ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                    <Shield className="w-5 h-5 text-success" />
                    <div>
                      <p className="font-medium text-success">Network Scan Complete</p>
                      <p className="text-sm text-muted-foreground">No threats found</p>
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

export default ThreatHunting;