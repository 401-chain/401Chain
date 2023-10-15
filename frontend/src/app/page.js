"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-[4vh]">
      <div className="pl-[4vw] animate-fade-right animate-once animate-duration-1200 animate-delay-300 animate-ease-in-out">
        <Image
          src="/logo_full.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </main>
  );
}
