'use client'
import {useState, useEffect} from'react'

interface ServerSearchProps {
  data:{
    label:string;
    type: "channel" | "member";
    data:{
      icon:React.ReactNode;
      id:string;
      name:string;
    }[] | undefined 
  }[]
}

export const ServerSearch= ({ data }:ServerSearchProps) => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
    <div>
      ServerSearch
    </div>
  );
}
