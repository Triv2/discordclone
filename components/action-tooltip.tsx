'use client'
import {useState, useEffect} from'react'
import { Tooltip,TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'

interface ActionTooltipProps {
  label:string;
  children:React.ReactNode;
  side?: "top" | "left" | "right" | "bottom";
  align?: "start" | "center" | "end";

}

export const ActionTooltip = ({
  label,
  children,
  side,
  align
}: ActionTooltipProps) => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p className="font-semibold text-sm capitalize">
            {label.toLowerCase()}
            </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
