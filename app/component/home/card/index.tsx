"use client";
import React from "react";
import { ThreeDCardDemo } from "./ThreeDCard";
// import { ImagesSliderDemo } from "./ImageSlider";
import Title from "../../title";

const index = () => {
  return (
    <div
      className="relative w-full min-h-[100vh] h-max "
      style={{
        background:
          " linear-gradient(90deg, rgba(0,0,0,1) 77%, rgba(6,68,6,1) 100%, rgba(16,188,16,1) 100%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div>
        <Title text={"PRODUCTS"} />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-16 p-8">
        <div>
          <ThreeDCardDemo
            image="https://images.unsplash.com/photo-1640457298166-fe3eddec2d5f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Digital Art Revolution"
            description="Experience the future of art with blockchain-powered NFT paintings."
          />
        </div>
        <div>
          <ThreeDCardDemo
            image="https://images.unsplash.com/photo-1639803812104-7fe5161508a1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Blockchain Brilliance"
            description="Unlock the potential of decentralized finance and digital currencies."
          />
        </div>
        <div>
          <ThreeDCardDemo
            image="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Gaming NFT Wonderland"
            description="Dive into immersive worlds where NFTs shape the gaming experience."
          />
        </div>
        <div>
          <ThreeDCardDemo
            image="https://images.unsplash.com/photo-1660905418996-e1d234576715?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Virtual Reality Extravaganza"
            description="Explore limitless possibilities in a virtual world enhanced by NFT technology."
          />
        </div>
      </div>
    </div>
  );
};

export default index;
