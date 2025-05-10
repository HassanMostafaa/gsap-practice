"use client";
export const SplashScreen = ({ headlines }: { headlines: string[] }) => {
  return (
    <div
      id="splash-screen"
      className="h-screen transit flex-col gap-12 flex absolute -left-[112%] top-0 w-screen skew-x-[20deg] bg-neutral-100"
    >
      {headlines.map((text, index) => (
        <h1
          className="text-3xl sm:text-7xl opacity-0 translate-y-4"
          id={`splash-title-${index}`}
          key={index}
        >
          {text}
        </h1>
      ))}
    </div>
  );
};
