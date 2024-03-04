"use client";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import { ButtonsCard } from "@/app/components/ui/tailwindcss-buttons";
import React from "react";

const index = () => {
  return (
    <div className="relative w-full h-[110vh]">
      {/* Video */}
      <video
        src="https://ik.imagekit.io/i3divn77k/Blockchain/video%20(1080p).mp4?updatedAt=1709418358040"
        playsInline
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      ></video>
      {/* Image */}
      <div className="absolute inset-0 flex flex-wrap  items-center  backdrop-blur-sm">
        <div className="h-[90vh] flex flex-col items-center justify-center mx-4 flex-1 text-white   px-4 ">
          <TextGenerateEffect
            words="This is demo landing page for block-chain website made with the help of acertinity UI"
            className="text-[3rem] text-center"
          />
          {/* <ButtonsCard> */}
          <button className="relative inline-flex items-center my-4 justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0">
              Join Now
            </span>
          </button>
          {/* </ButtonsCard> */}
        </div>
        <div className="h-[90vh] flex items-center justify-center mx-4 flex-1">
          <img
            alt=""
            src="https://ik.imagekit.io/i3divn77k/Blockchain/7742218-removebg.png?updatedAt=1709421206609"
            className="h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default index;
