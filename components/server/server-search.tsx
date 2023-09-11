'use client'
import { Search } from 'lucide-react';
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
    <>
    <button
      className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
    >
      <Search className="w-4 h-4 text-zinc-500 dark:text-zinc-400"/>
      <p>Search</p>
    </button>
    </>
  );
}
