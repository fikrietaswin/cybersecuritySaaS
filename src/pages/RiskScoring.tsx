import { Card } from "@/components/ui/card";
import { ChartBar, Shield, AlertTriangle, TrendingUp } from "lucide-react";
import { ChatButton } from "@/components/ChatButton";

const RiskScoring = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-background to-background/95">
      <main className="container mx-auto space-y-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Risk Scoring</h1>
            <p className="text-muted-foreground">Comprehensive risk assessment and analysis</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="glass-panel p-4 animate-fade-up">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-success" />
              <div>
                <p className="text-sm text-muted-foreground">Overall Risk</p>
                <p className="text-2xl font-bold">Low</p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-panel p-4 animate-fade-up">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-warning" />
              <div>
                <p className="text-sm text-muted-foreground">Active Threats</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-panel p-4 animate-fade-up">
            <div className="flex items-center gap-3">
              <ChartBar className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Risk Score</p>
                <p className="text-2xl font-bold">72/100</p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-panel p-4 animate-fade-up">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-success" />
              <div>
                <p className="text-sm text-muted-foreground">Improvement</p>
                <p className="text-2xl font-bold">+12%</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-panel p-6 animate-fade-up">
            <h2 className="text-xl font-semibold mb-4">Risk Factors</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Network Security</span>
                  <span className="text-success">85%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-success" style={{ width: '85%' }} />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Access Control</span>
                  <span className="text-warning">65%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-warning" style={{ width: '65%' }} />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Data Protection</span>
                  <span className="text-destructive">45%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-destructive" style={{ width: '45%' }} />
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="glass-panel p-6 animate-fade-up">
            <h2 className="text-xl font-semibold mb-4">Recent Assessments</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div>
                  <p className="font-medium">Quarterly Security Audit</p>
                  <p className="text-sm text-muted-foreground">Completed on Mar 15, 2024</p>
                </div>
                <Shield className="w-5 h-5 text-success" />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div>
                  <p className="font-medium">Vulnerability Assessment</p>
                  <p className="text-sm text-muted-foreground">Completed on Mar 1, 2024</p>
                </div>
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div>
                  <p className="font-medium">Penetration Test</p>
                  <p className="text-sm text-muted-foreground">Scheduled for Apr 1, 2024</p>
                </div>
                <ChartBar className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </Card>
        </div>
      </main>
      <ChatButton />
    </div>
  );
};

export default RiskScoring;