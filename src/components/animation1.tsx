"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Animation1 = () => {
  const [isanimate, setIsAnimate] = useState<boolean>(false);
  return (
    <div>
      <h3 className="text-2xl font-extrabold">Animation-1</h3>
      <motion.div
        className="bg-sky-400 p-20 w-20 h-20 rounded-xl cursor-pointer"
        initial={{
          opacity: 0.2,
          scale: 0.1,
        }}
        animate={{
          x: isanimate ? 870 : 0,
          opacity: isanimate ? 1 : 0.5,
          scale: 1,
          rotate: isanimate ? 360 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
        onClick={() => setIsAnimate(!isanimate)}
      ></motion.div>
    </div>
  );
};

export default Animation1;
