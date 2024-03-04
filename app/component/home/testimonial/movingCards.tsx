"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[15rem]  rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Blockchain and NFTs are revolutionizing the way we think about ownership and digital assets.",
    name: "Satoshi Nakamoto",
    title: "The Future of Digital Ownership",
  },
  {
    quote:
      "To tokenize or not to tokenize, that is the question: Whether 'tis nobler in the mind to hodl The volatility of crypto, Or to sell and take profit against a Sea of uncertainty, And by diversifying, secure them: to trade, to invest.",
    name: "Vitalik Buterin",
    title: "Decentralizing the Future",
  },
  {
    quote:
      "All that we trade or redeem is but a blockchain transaction within a decentralized ledger.",
    name: "Anonymous",
    title: "The Power of Smart Contracts",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single token in possession of a good utility, must be in want of a decentralized ecosystem.",
    name: "Charles Hoskinson",
    title: "Building the Next Generation of Finance",
  },
  {
    quote:
      "Call me a blockchain enthusiast. Some years ago—never mind how long precisely—I discovered the potential of decentralized finance, and nothing else has interested me as much since.",
    name: "Crypto Enthusiast",
    title: "The Journey into Web3",
  },
];
