"use client";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

interface Props {
  isOpen: boolean;
  closeMenu: () => void;
}

export const HamburgerMenu = ({ isOpen, closeMenu }: Props) => {
  const hamburgerMenuRef = useRef<HTMLDivElement>(null);
  const tl = useRef(
    gsap.timeline({ paused: true, defaults: { ease: "power2.inOut" } })
  );

  useGSAP(
    () => {
      tl.current
        .to(hamburgerMenuRef.current, {
          top: 0,
          duration: 0.8,
        })
        .from(
          ".link-overlay",
          {
            height: "100%",
            stagger: 0.15,
            duration: 0.5,
          },
          "-=0.4"
        );
    },
    { scope: hamburgerMenuRef }
  );

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  return (
    <div
      ref={hamburgerMenuRef}
      className="w-screen h-screen fixed -top-full left-0 z-10 p-3 bg-[#c5fb45] text-black overflow-hidden"
    >
      <div className="contain h-full">
        <h2 className="text-3xl hamburger-menu-title">MENU</h2>
        <div className="links flex flex-col py-20 text-8xl max-md:text-5xl h-fit">
          {navLinks.map(({ href, label }) => (
            <div key={href} className="relative w-fit overflow-hidden">
              <span className="absolute link-overlay bottom-0 left-0 h-0 w-full bg-[#c5fb45]" />
              <Link href={href} onClick={closeMenu}>
                {label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
