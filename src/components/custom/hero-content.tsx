"use client";
import { appConfig } from "@/config";
import React, { useState } from "react";

import { motion } from "framer-motion";
import {
  buttonFlashVariants,
  buttonPulseVariants,
  colorCycleVariants,
  flashVariants,
  glitchVariants,
  pulseVariants,
  rotateSpinVariants,
  shakeVariants,
  spinningBurgerVariants,
  titleFlashVariants,
  titleGlitchVariants,
} from "@/lib/utils";
import CopyBtn from "./copy-btn";
const HeroContent = () => {
  const [feinModeActive, setFeinModeActive] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  return (
    <>
      <div className="space-y-4">
        {/* Main Header */}
        <div className="flex flex-col  md:flex-row items-center justify-center mb-4 gap-8">
          {/* Chip Logo Container */}
          <div className="flex-shrink-0">
            <motion.img
              src={appConfig.hero.chip}
              alt="Chip Logo"
              className="w-30 h-30 object-contain rounded-2xl border-4 border-yellow-400"
              style={{
                boxShadow: "0 0 30px #FFD700, 0 0 20px #FF0000",
                filter: "saturate(2) contrast(1.3)",
              }}
              variants={rotateSpinVariants}
              animate={"animate"}
            />
          </div>

          {/* Title Text */}
          <div className="flex-1  ">
            {/* Main Title */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-yellow-400 relative tracking-wider leading-none bg-black/60 p-4 rounded-2xl border-2 border-yellow-400"
              style={{
                fontFamily: "Impact, Arial Black, sans-serif",
                textShadow:
                  "0 0 30px #FFD700, 0 0 60px #FFD700, 5px 5px 0 #FF0000, 10px 10px 0 #FFD700, 15px 15px 20px rgba(0,0,0,0.8)",
              }}
              variants={glitchVariants}
              animate="animate"
            >
              <p className="text-center py-2 pb-4">{appConfig.hero.heroIcon}</p>
              {appConfig.hero.heroTitle}
            </motion.h1>

            {/* Sub Title */}
            <motion.h1
              className="  text-6xl font-bold text-red-500 -mt-4 text-center bg-black/60 p-2 px-4 rounded-xl border-2 border-red-500"
              style={{
                fontFamily: "Impact, Arial Black, sans-serif",
                textShadow:
                  "0 0 30px #FF0000, 0 0 60px #FF0000, 3px 3px 0 #FFD700, 6px 6px 20px rgba(0,0,0,0.8)",
              }}
              variants={shakeVariants}
              animate="animate"
            >
              <motion.span variants={colorCycleVariants} animate="animate">
                COIN
              </motion.span>
            </motion.h1>

            {/* Ticker */}
            <div className="flex flex-col items-center w-full">
              <motion.div
                className="px-14 text-5xl font-bold text-yellow-400  mt-2 inline-block bg-red-500/80  py-2 rounded-full border-4 border-yellow-400"
                style={{
                  fontFamily: "Impact, Arial Black, sans-serif",
                  textShadow:
                    "0 0 40px #FFD700, 0 0 80px #FFD700, 3px 3px 0 #FF0000, 6px 6px 0 #FFD700",
                }}
                variants={flashVariants}
                animate="animate"
              >
                <motion.span variants={pulseVariants} animate="animate">
                  {appConfig.hero.heroTicker}
                </motion.span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Title Effects */}
        <div className="flex justify-center items-center mt-4 gap-8">
          {/* Glitch Text */}
          <motion.span
            className="text-3xl font-bold text-white"
            style={{
              fontFamily: "Impact, Arial Black, sans-serif",
              textShadow: "0 0 20px currentColor, 2px 2px 0 #FF0000",
            }}
            variants={titleGlitchVariants}
            animate="animate"
          >
            <motion.span variants={titleFlashVariants} animate="animate">
              {appConfig.hero.heroSpiningTitle}
            </motion.span>
          </motion.span>

          {/* Spinning Finger */}
          <motion.span
            className="text-5xl"
            style={{
              filter: "drop-shadow(0 0 20px #FFD700)",
            }}
            variants={spinningBurgerVariants}
            animate="animate"
          >
            {appConfig.hero.heroSpiningIcon}
          </motion.span>
        </div>

        {/* Control Panel */}
        <div className="flex justify-between items-center relative z-50 my-4 px-4">
          {/* Fein Mode Toggle */}
          <motion.button
            className="relative z-10 text-red-500 font-bold cursor-pointer text-sm px-4 py-2 border-2 border-yellow-400 rounded-lg overflow-hidden transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "Impact, Arial Black, sans-serif",
              background: "linear-gradient(45deg, #FF0000, #FFD700)",
              boxShadow: "0 0 20px #FFD700",
              textShadow: "1px 1px 0 #FFD700",
            }}
            variants={buttonPulseVariants}
            animate="animate"
            onClick={() => setFeinModeActive(!feinModeActive)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {feinModeActive
              ? "🔴 DEACTIVATE FEIN MODE 🔴"
              : "🟢 ACTIVATE FEIN MODE 🟢"}
          </motion.button>

          {/* Audio Toggle Button */}
          <motion.button
            className="text-red-500 font-bold cursor-pointer text-sm px-4 py-2 border-2 border-red-500 rounded-lg transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "Impact, Arial Black, sans-serif",
              background: "linear-gradient(45deg, #FFD700, #FF0000)",
              textShadow: "1px 1px 0 #FFD700",
            }}
            variants={buttonFlashVariants}
            animate="animate"
            onClick={() => setAudioEnabled(!audioEnabled)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {audioEnabled ? "🔊 SILENCE MCSOUNDS" : "🔇 AWAKEN MCSOUNDS"}
          </motion.button>
        </div>
      </div>
      <motion.div
        className="relative mb-8 pt-4 rotate-[-1deg] border-[5px] border-yellow-500 rounded-[20px] p-6 overflow-hidden shadow-[0_0_30px_theme(colors.yellow.500),_inset_0_0_20px_#0000004d] bg-[length:200%_200%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="text-[1.2rem] text-red-500 font-bold mb-2 
       shadow-[0_0_30px_theme(colors.yellow.500)"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        >
          CONTRACT ADDRESS (CA):
        </motion.div>

        <motion.div
          className="cursor-pointer select-all  bg-black text-yellow-500 p-4 rounded"
          title="Click to copy"
          whileHover={{ scale: 1.03, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          {appConfig.social_section.contractAddress}
        </motion.div>

        <motion.div
          className=" text-sm mt-2 flex items-center justify-center"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <CopyBtn />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HeroContent;
