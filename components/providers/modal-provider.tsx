'use client'
import { CreateServerModal } from "@/components/modals/create-server-modal"
import {useState, useEffect} from'react'

interface ModalProviderProps {}

const ModalProvider:React.FC<ModalProviderProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;

}
  return (
    <>
     <CreateServerModal />
    </>
  );
}
export default ModalProvider;