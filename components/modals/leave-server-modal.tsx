'use client'

import { useState } from "react";
import axios from "axios";


import { useModal } from '@/hooks/use-modal-store';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import { Check, Copy, RefreshCcw } from "lucide-react";





export const LeaveServerModal = () => {

  const { onOpen, isOpen, onClose, type, data } = useModal();
 

  const isModalOpen = isOpen && type === "leaveServer";
  const { server } = data;

  const [copied,setCopied] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

 

 


  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className= "bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Leave Server
          </DialogTitle>
        </DialogHeader>
         <div className="p-6">
         Leave Server
         </div>
      </DialogContent>
    </Dialog>
  );
}
