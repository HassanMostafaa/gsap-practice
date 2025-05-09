"use client";
import { HeroText } from "@/components/hero-text/HeroText";
import { SplashScreen } from "@/components/splash-screen/SplashScreen";
import { runSplashSequence} from "@/utils/animations/splashAnimation";
import gsap from "gsap";
import {useLayoutEffect, useMemo, useRef} from "react";

export default function Home() {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const splashTitles = useMemo(
        () => ["Software Engineer", "CMS Developer", "Designer"],
        []
    );
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            runSplashSequence(splashTitles);
        }, rootRef);

        return () => context.revert();
    }, [splashTitles]);

    return (
        <div className="flex-1" ref={rootRef}>
            <SplashScreen />
            <HeroText />
        </div>
    );
}
