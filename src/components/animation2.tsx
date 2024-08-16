"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Animation2 = () => {
  return (
    <div>
      <h3 className="text-2xl font-extrabold">Animation-2</h3>
      <motion.div
        className="bg-sky-400 p-20 w-20 h-20 rounded-xl cursor-pointer"
        drag
        dragConstraints={{
          right: 20,
          left: -20,
          top: 5,
          bottom: 5,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      ></motion.div>
    </div>
  );
};

export default Animation2;
