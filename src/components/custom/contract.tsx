"use client";
import React from "react";
import { motion } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { flashVariants, pulseVariants } from "@/lib/utils";
import Image from "next/image";
const Contract = () => {
  const [activeButton, setActiveButton] = React.useState("HOME DIMENSION");

  const hoverVariants = {
    hover: {
      scale: 1.1,
      rotate: 2,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col flex-wrap justify-center gap-4 my-8">
      {/* Home Dimension Button */}
      <motion.button
        className={`relative overflow-hidden cursor-pointer px-6 py-3 border-4 border-yellow-400 font-bold text-xl transition-all duration-300 ${
          activeButton === "HOME DIMENSION"
            ? "text-red-500 bg-yellow-400"
            : "text-yellow-400 bg-red-500"
        }`}
        style={{
          fontFamily: "Impact, Arial Black, sans-serif",
          transform: "skew(-5deg)",
          textShadow: "2px 2px 0 #FF0000",
          boxShadow:
            activeButton === "HOME DIMENSION"
              ? "0 0 30px #FFD700"
              : "0 0 20px #FFD700",
        }}
        variants={
          activeButton === "HOME DIMENSION" ? flashVariants : pulseVariants
        }
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        onClick={() => setActiveButton("HOME DIMENSION")}
        {...hoverVariants}
      >
        HOME DIMENSION
      </motion.button>

      {/* Official X Account Link */}
      <motion.a
        href="https://x.com/MCDC_sol"
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden cursor-pointer px-6 gap-3 py-3 border-4 border-yellow-400 font-bold text-xl text-yellow-400 bg-black flex items-center justify-center w-full sm:w-auto transition-all duration-300 no-underline"
        style={{
          fontFamily: "Impact, Arial Black, sans-serif",
          textShadow: "2px 2px 0 #FF0000",
          boxShadow: "0 0 30px #FFD700",
          marginTop: "0.5rem",
        }}
        variants={pulseVariants}
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        {...hoverVariants}
      >
        <Image src="/dex-screener.png" alt="dex icon" width={32} height={32} />
        Join The DEXSCREENER
      </motion.a>

      {/* Join the McDimension Link */}
      <motion.a
        href="https://x.com/i/communities/1931336303938867215"
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden cursor-pointer px-6 py-3 border-4 border-yellow-400 font-bold text-xl text-yellow-400 bg-red-500 flex items-center justify-center w-full sm:w-auto transition-all duration-300 no-underline"
        style={{
          fontFamily: "Impact, Arial Black, sans-serif",
          textShadow: "2px 2px 0 #FF0000",
          boxShadow: "0 0 30px #FFD700",
        }}
        variants={pulseVariants}
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        {...hoverVariants}
      >
        <X className="inline-block mr-2" size={24} />
        JOIN THE $FYH (X Community)
      </motion.a>

      {/* Telegram Link */}
      <motion.a
        href="https://t.me/mcdcportal"
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden cursor-pointer px-6 py-3 border-4 border-blue-400 font-bold text-xl text-blue-400 bg-blue-600 flex items-center justify-center w-full sm:w-auto transition-all duration-300 no-underline"
        style={{
          fontFamily: "Impact, Arial Black, sans-serif",
          textShadow: "2px 2px 0 #1E40AF",
          boxShadow: "0 0 30px #60A5FA",
        }}
        variants={pulseVariants}
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        {...hoverVariants}
      >
        <MessageCircle className="inline-block mr-2" size={24} />
        JOIN THE TELEGRAM
      </motion.a>
    </div>
  );
};

export default Contract;
