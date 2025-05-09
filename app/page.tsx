"use client";
import { HeroText } from "@/components/hero-text/HeroText";
import { SplashScreen } from "@/components/splash-screen/SplashScreen";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function Home() {
  const rootCompRef = useRef<HTMLDivElement | null>(null);
  const splashScreenText = ["Software Engineer", "CMS Developer", "Designer"];
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline1 = gsap.timeline();
      timeline1
        .from("#splash-screen", {
          xPercent: "-100",
          duration: 1,
          delay: 1,
        })
        .from(
          splashScreenText.map((_, ix) => `#splash-title-${ix}`),
          {
            opacity: 0,
            y: "-=30",
            stagger: 0.4,
          }
        )
        .to(
          splashScreenText.map((_, ix) => `#splash-title-${ix}`),
          {
            opacity: 0,
            y: "+=30",
            stagger: 0.4,
            delay: 0.8,
          }
        )
        .to("#splash-screen", {
          xPercent: "100",
          duration: 1,
          delay: 0.4,
        })
        .from("#hero-text", {
          opacity: 0,
          x: "+=10",
          duration: 0.4,
        });
    }, rootCompRef);

    return () => context.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" flex-1" ref={rootCompRef}>
      <SplashScreen />
      <HeroText />
    </div>
  );
}
