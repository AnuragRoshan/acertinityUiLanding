import React from "react";
import { TabsDemo } from "./tabshow";

const index = () => {
  return (
    <div
      className=" w-full h-[150vh]"
      style={{
        background:
          " linear-gradient(90deg, rgba(0,0,0,1) 77%, rgba(6,68,6,1) 100%, rgba(16,188,16,1) 100%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className=" text-white w-full h-max">
        {/* <ImagesSliderDemo /> */}
        <TabsDemo />
      </div>
    </div>
  );
};

export default index;
