'use client'
import {useState, useEffect} from'react'

interface ServerSearchProps {}

export const ServerSearch:React.FC<ServerSearchProps> = () => {

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
