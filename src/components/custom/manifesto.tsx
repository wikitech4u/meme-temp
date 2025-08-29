"use client";
import { flashVariants, pulseVariants } from "@/lib/utils";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Manifesto = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date()); // first render after hydration
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time as HH:MM:SS
  const formatTime = (date: any) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const timeFlashVariants = {
    animate: {
      opacity: [1, 0.5, 1],
      color: ["#FF0000", "#FFD700", "#FF0000"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as any,
      },
    },
  };

  return (
    <div
      className="fixed bottom-0 left-0 w-full h-10 flex items-center z-[300] border-t-2 border-red-500"
      style={{
        fontFamily: "Impact, Arial Black, sans-serif",
        boxShadow: "0 -5px 20px #FF0000",
        background: "linear-gradient(to bottom, #FFD700, #FF0000)",
      }}
    >
      {/* Start Button Section */}
      <div className="px-4">
        <motion.button
          className="text-yellow-400 font-bold cursor-pointer bg-red-500 border-2 border-yellow-400 px-2 py-1 rounded transition-all duration-200"
          style={{ fontFamily: "inherit" }}
          variants={pulseVariants}
          animate="animate"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          🖕🏼 Start
        </motion.button>
      </div>

      {/* Programs Section */}
      <div className="flex overflow-x-auto flex-1 gap-2 px-4">
        <motion.div
          className="text-yellow-400 text-sm font-bold bg-red-500 px-2 py-1 border border-red-500 whitespace-nowrap rounded"
          variants={flashVariants}
          animate="animate"
        >
          🖕🏼 $FYH COIN
        </motion.div>
      </div>

      {/* System Tray */}
      <div className="flex items-center text-red-500 font-bold px-4 gap-2">
        {/* Tray Icons */}
        <motion.span
          className="text-lg"
          variants={pulseVariants}
          animate="animate"
        >
          🔊
        </motion.span>

        <motion.span
          className="text-lg"
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        >
          📶
        </motion.span>

        <motion.span
          className="text-lg"
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        >
          🔋
        </motion.span>

        {/* Time Display */}
        <motion.span
          className="text-sm font-bold ml-2"
          variants={timeFlashVariants}
          animate="animate"
        >
          {currentTime ? formatTime(currentTime) : "--:--:--"}
        </motion.span>
      </div>
    </div>
  );
};
export default Manifesto;
