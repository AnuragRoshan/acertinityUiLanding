import React from "react";
import { motion } from "framer-motion";

const title = ({ text }: { text: String }) => {
  return (
    <div>
      <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-16">
        {text}
      </motion.p>
    </div>
  );
};

export default title;
