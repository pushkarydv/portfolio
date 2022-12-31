import React from "react";
export default function Hero() {
  return (
    <>
      <div className="min-h-[90vh] flex flex-col justify-center items-center">
        <div className="transition-all my-4 mx-2 min-w-fit text-6xl sm:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          <p className="text-emerald-900">
            Hey.
            <span className="inline-block w-fit scale-90 animate-wobble">
              👋
            </span>
          </p>
          <p className="mt-2 font-medium text-slate-300">I&apos;m </p>
          <p className="mt-2 font-medium text_shadows">Pushkar</p>
        </div>
      </div>
    </>
  );
}
