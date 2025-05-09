import gsap from "gsap";

export const runSplashSequence = (titles: string[]) => {
    const ids = titles.map((_, ix) => `#splash-title-${ix}`);
    const timeline = gsap.timeline();

    timeline
        .from("#splash-screen", {
            xPercent: -100,
            duration: 1,
            delay: 1,
        })
        .from(ids, {
            opacity: 0,
            y: -30,
            stagger: 0.4,
        })
        .to(ids, {
            opacity: 0,
            y: 30,
            stagger: 0.4,
            delay: 0.8,
        })
        .to("#splash-screen", {
            xPercent: 100,
            duration: 1,
            delay: 0.1,
        })
        .from("#hero-text", {
            opacity: 0,
            x: 10,
            duration: 0.4,
        });

    return timeline;
};
