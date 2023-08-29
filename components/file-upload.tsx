'use client'

import { UploadDropzone } from '@/lib/uploadthing'
import {useState, useEffect} from'react'

interface FileUploadProps {
  onChange:(url?:string) => void;
  value:string;
  endpoint: "messageFile" | "serverImage"
}

export const FileUpload = ({
  onChange,
  value,
  endpoint
}:FileUploadProps) => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res)=>{
        onChange(res?.[0].fileUrl);
      }}
      onUploadError={(error:Error)=>{
        console.log(error);
      }}
    />
  );
}
