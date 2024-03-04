"use client";
import React from "react";
import { InfiniteMovingCardsDemo } from "./movingCards";
import Title from "../../title";
// import { ImagesSliderDemo } from "./ImageSlider";

const index = () => {
  return (
    <div
      className="relative w-full h-max"
      style={{
        background: " black",
      }}
    >
      <div>
        <Title text={"TESTIMONIAL"} />
      </div>
      <div>
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
};

export default index;
