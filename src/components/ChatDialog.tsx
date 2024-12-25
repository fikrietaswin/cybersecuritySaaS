import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { X, Send } from "lucide-react";

interface ChatDialogProps {
  onClose: () => void;
}

const faqQuestions = [
  "What are the current security threats?",
  "How can I improve my security posture?",
  "What's the latest vulnerability report?",
  "How do I respond to a security incident?",
];

interface Message {
  content: string;
  isUser: boolean;
}

export const ChatDialog = ({ onClose }: ChatDialogProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { content: input, isUser: true }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        content: "I'm an AI assistant here to help with security-related questions. How can I assist you today?",
        isUser: false
      }]);
    }, 1000);
    
    setInput("");
  };

  const handleFaqClick = (question: string) => {
    setMessages([...messages, { content: question, isUser: true }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        content: `Here's information about "${question}". This is a simulated response.`,
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <Card className="w-[350px] h-[500px] flex flex-col animate-fade-up shadow-xl bg-[#1A1F2C] border-[#8B5CF6]/20">
      <div className="flex items-center justify-between p-4 border-b border-[#8B5CF6]/20">
        <h3 className="font-semibold text-white">Security Assistant</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:text-white/80">
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="space-y-2">
            <p className="text-sm text-white/60">Frequently Asked Questions:</p>
            {faqQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-left h-auto whitespace-normal bg-[#2C3444] text-white border-[#8B5CF6]/20 hover:bg-[#2C3444]/80"
                onClick={() => handleFaqClick(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        )}
        
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.isUser
                  ? "bg-[#8B5CF6] text-white"
                  : "bg-[#2C3444] text-white"
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-[#8B5CF6]/20">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="resize-none bg-[#2C3444] border-[#8B5CF6]/20 text-white placeholder:text-white/60"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <Button size="icon" className="bg-[#8B5CF6] hover:bg-[#7C3AED]" onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};