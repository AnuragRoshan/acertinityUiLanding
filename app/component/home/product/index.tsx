import React from "react";
import { ImagesSliderDemo } from "./ImageSlider";

const index = () => {
  return (
    <div
      className="relative w-full h-[100vh]"
      style={{
        background:
          " linear-gradient(90deg, rgba(0,0,0,1) 77%, rgba(6,68,6,1) 100%, rgba(16,188,16,1) 100%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className="absolute text-white w-full">
        <ImagesSliderDemo />
      </div>
    </div>
  );
};

export default index;
