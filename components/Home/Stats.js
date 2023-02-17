import React from "react";

export default function Stats() {
  return (
    <div className="relative" id="stats">
      <div className="absolute bg-indigo-200 blur-3xl -z-0 animate-circular"></div>
      <div className="relative z-10 p-4">
        <div className="text-2xl text-emerald-500 text-center">
          <span className="text-4xl font-semibold">Stats</span> <br />
          &apos;&apos; Some cool numbers &apos;&apos;
        </div>
        <div className="flex flex-row gap-4 font-semibold justify-between w-10/12 mx-auto items-center text-center my-6">
          <div className="bg-emerald-200 px-2 w-full py-6 rounded-xl">
            <span className="text-6xl">🚀</span>
            <span className="text-center text-5xl text-emerald-900 block mt-6 mb-4 font-bold">
              16+
            </span>
            <span className="text-3xl">Products</span>
          </div>
          <div className="bg-fuchsia-200 px-2 w-full py-6 rounded-xl">
            <span className="text-6xl">👤</span>
            <span className="text-center text-5xl text-fuchsia-900 block mt-6 mb-4 font-bold">
              15K+
            </span>
            <span className="text-3xl"> Users</span>
          </div>
          <div className="bg-yellow-200 px-2 w-full py-6 rounded-xl">
            <span className="text-6xl">📸</span>
            <span className="text-center text-5xl text-yellow-900 block mt-6 mb-4 font-bold">
              150K+
            </span>
            <span className="text-3xl"> Photography</span>
          </div>
          <div className="bg-pink-200 px-2 w-full py-6 rounded-xl">
            <span className="text-6xl">🌍</span>
            <span className="text-center text-5xl text-pink-900 block mt-6 mb-4 font-bold">
              104+
            </span>
            <span className="text-3xl"> Countries</span>
          </div>
        </div>
      </div>
    </div>
  );
}
