import Link from "next/link";
import React from "react";

export const HeaderNav = () => {
  return (
    <nav className="w-full bg-black text-white">
      <div className="flex justify-between items-center p-4 contain bg-black text-white">
        <div className="text-2xl">N.GSAP</div>
        <div className="flex gap-8 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};
