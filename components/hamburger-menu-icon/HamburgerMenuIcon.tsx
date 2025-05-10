"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

export const HamburgerMenuIcon = ({ isOpen, toggle }: Props) => {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(topRef.current, {
          rotation: 45,
          y: 5,
          transformOrigin: "center",
          duration: 0.3,
          background: "black",
        });
        gsap.to(bottomRef.current, {
          rotation: -45,
          background: "black",
          y: -5,
          width: "100%",
          transformOrigin: "center",
          duration: 0.3,
        });
        gsap.to(containerRef.current, { zIndex: 11 });
      } else {
        gsap.to(containerRef.current, { zIndex: 9 });
        gsap.to(topRef.current, {
          background: "white",
          rotation: 0,
          y: 0,
          duration: 0.3,
        });
        gsap.to(bottomRef.current, {
          rotation: 0,
          background: "white",
          y: 0,
          width: "75%",
          duration: 0.3,
        });
      }
    },
    { dependencies: [isOpen], scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="h-8 w-8 flex gap-2 flex-col relative items-end justify-center cursor-pointer"
      onClick={toggle}
    >
      <div
        ref={topRef}
        className="w-full h-[2px] relative bg-neutral-200"
      ></div>
      <div
        ref={bottomRef}
        className="w-3/4 h-[2px] relative bg-neutral-200"
      ></div>
    </div>
  );
};
