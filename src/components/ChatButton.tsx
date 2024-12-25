import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { ChatDialog } from "./ChatDialog";

export const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {isOpen ? (
        <ChatDialog onClose={() => setIsOpen(false)} />
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-[#8B5CF6] hover:bg-[#7C3AED] animate-bounce"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};