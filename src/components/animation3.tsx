"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Animation3 = () => {
  const boxVariant = {
    lion: {
      x: 100,
      scale: 1.5,
      backgroundColor: "yellow",
    },
    elephant: {
      x: 1000,
      screen: 0.3,
    },
  };
  return (
    <div>
      <h3 className="text-2xl font-extrabold">Animation-3 (Variants)</h3>
      <motion.div
        className="bg-sky-400 p-20 w-20 h-20 rounded-xl cursor-pointer"
        variants={boxVariant}
        initial="lion"
        animate="elephant"
      ></motion.div>
    </div>
  );
};

export default Animation3;
