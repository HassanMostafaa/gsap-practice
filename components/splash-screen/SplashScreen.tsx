import React, { useRef } from "react";

export const SplashScreen = () => {
  const splashScreenText = ["Software Engineer", "CMS Developer", "Designer"];
  const splashScreenRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={splashScreenRef}
      id="splash-screen"
      className="h-screen flex-col gap-12 flex absolute left-0 top-0 w-screen bg-neutral-100"
    >
      {splashScreenText.map((text, index) => (
        <h1
          className="text-3xl sm:text-7xl"
          id={`splash-title-${index}`}
          key={index}
        >
          {text}
        </h1>
      ))}
    </div>
  );
};
