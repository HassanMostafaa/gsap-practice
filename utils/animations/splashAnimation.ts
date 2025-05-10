import gsap from "gsap";

export const runSplashSequence = (titles: string[]) => {
  const ids = titles.map((_, ix) => `#splash-title-${ix}`);
  const timeline = gsap.timeline();

  timeline
    .to("#splash-screen", {
      xPercent: 110,
      skewX: 0,
      duration: 1.5,
      delay: 0.4,
    })
    .to(ids, {
      opacity: 1,
      y: 40,
      stagger: 0.4,
      delay: 0,
    })
    .to(ids, {
      opacity: 0,
      y: 60,
      duration: 0.6,
      stagger: 0.4,
      delay: 0,
    })
    .to("#splash-screen", {
      xPercent: "+=150",
      skewX: "-30",
      duration: 1.6,
      delay: 0.4,
      ease: "power4.inOut",
    })
    .from("#hero-text", {
      opacity: 0,
      x: 10,
      duration: 0.4,
    });

  return timeline;
};
