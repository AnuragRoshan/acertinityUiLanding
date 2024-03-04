"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/app/components/ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://img.freepik.com/free-photo/young-woman-wearing-vr-headset-generated-by-ai_188544-19615.jpg?t=st=1709499546~exp=1709503146~hmac=592d8c00f54abc3ed9d9f8a9070fc546178458a7dca5566a6dab23b91ad87026&w=1060",
    "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1456428746267-a1756408f782?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider className="h-[100vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Some Of Our Popular NFTs
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        <motion.p className="font-normal text-xl md:text-xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-white py-4">
          Press → Button for slideshow
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
