"use client";
export const SplashScreen = ({ headlines }:{headlines: string[]}) => {
  return (
    <div
      id="splash-screen"
      className="h-screen transit opacity-0  flex-col gap-12 flex absolute left-0 top-0 w-screen bg-neutral-100"
    >
      {headlines.map((text, index) => (
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
