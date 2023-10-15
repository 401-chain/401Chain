"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="mt-[15vh] pl-[4vw] animate-fade animate-once animate-duration-1200 animate-delay-300 animate-ease-in-out">
        <Image src="/landing.png" width={800} height={600} alt="401Chain" />
      </div>
    </main>
  );
}
