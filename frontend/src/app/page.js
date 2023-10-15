"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-[4vh]">
        <Image
        className="ml-[4vw]"
          src="/logo_full.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
    </main>
  );
}
