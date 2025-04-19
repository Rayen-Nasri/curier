'use client';
import dynamic from "next/dynamic";
import "./globals.css";

const Core = dynamic(() => import('./coreSection').then(mod => mod.CoreSection), {
  ssr: false
})

export default function Home() {
  return (
    <div className="flex items-center justify-center  h-screen">
      
      <Core />
    </div>


  );
}
