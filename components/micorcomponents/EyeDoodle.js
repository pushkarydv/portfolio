import React from "react";

export default function Doodle() {
  return (
    <div className="w-44 aspect-square bg-emerald-500 absolute z-50 left-1/2 top-0 -translate-x-1/2 -translate-y-[45%] rounded-full face">
      <div className="eye w-12 aspect-square bg-white rounded-full absolute left-6 top-1/2">
        <div className="eye-parent relative w-12 aspect-square">
          <div className="eye-view h-4 aspect-[3/5] absolute -translate-x-1/2 bg-red-400 rounded-full"></div>
        </div>
      </div>
      <div className="eye w-12 aspect-square bg-white rounded-full absolute right-6 top-1/2">
        <div className="eye-parent relative w-12 aspect-square">
          <div className="eye-view h-4 aspect-[3/5] absolute -translate-x-1/2 bg-red-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
