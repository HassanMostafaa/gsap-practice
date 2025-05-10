"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HamburgerMenuIcon } from "../hamburger-menu-icon/HamburgerMenuIcon";
import { HamburgerMenu } from "../hamburger-menu/HamburgerMenu";

export const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="w-full bg-black text-white">
      <div className="flex justify-between items-center p-4 contain bg-black text-white">
        <div className="text-2xl">N.GSAP</div>
        <div className="flex gap-8 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <HamburgerMenuIcon isOpen={isMenuOpen} toggle={toggleMenu} />
          <HamburgerMenu isOpen={isMenuOpen} />
        </div>
      </div>
    </nav>
  );
};
