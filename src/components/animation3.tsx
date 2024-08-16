"use client";

import React from "react";
import { motion } from "framer-motion";

const Animation3 = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <h3 className="text-2xl font-extrabold">Animation-3 (Variants)</h3>
      <motion.div
        className="max-w-44 bg-sky-400 p-20 rounded-xl cursor-pointer flex flex-col items-center gap-3"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box, i) => (
          <motion.div key={i} className="p-2 bg-white" variants={listVariant}>
            {box}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Animation3;
