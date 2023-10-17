"use client";

import Image from "next/image";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-[85vh]">
        <div className="animate-fade animate-once animate-duration-1200 animate-delay-300 animate-ease-in-out">
          <Image src="/landing.png" width={800} height={600} alt="401Chain" />
        </div>
        <div id="mouse-scroll-animation" />
      </div>
      <About />
    </main>
  );
}
