"use client";
import React from "react";
import { appConfig } from "@/config";
import { motion } from "framer-motion";
import {
  backgroundCycleVariants,
  colorCycleVariants,
  flashVariants,
  prophecyScrollVariants,
  pulseVariants,
  shakeVariants,
} from "@/lib/utils";
const Capabilities = () => {
  const [revealedTruth, setRevealedTruth] = React.useState(false);

  return (
    <div className="flex flex-col mt-8  mx-auto gap-8">
      {/* Burger of the Day */}
      <motion.div
        className="mb-4 min-h-[200px] border-4 border-yellow-400 p-4"
        style={{
          boxShadow: "0 0 30px #FFD700",
          backdropFilter: "blur(1px)",
        }}
        variants={backgroundCycleVariants}
        animate="animate"
      >
        <motion.h2
          className="text-2xl font-bold text-center mb-4"
          style={{
            fontFamily: "Impact, Arial Black, sans-serif",
            textShadow: "2px 2px 0 #FF0000",
          }}
          variants={colorCycleVariants}
          animate="animate"
        >
          🖕🏼 {appConfig.prophecies_section.title} 🖕🏼
        </motion.h2>

        <div className="relative w-full max-w-lg mx-auto mb-4 bg-black/80 rounded-xl border-2 border-yellow-400 overflow-hidden aspect-video">
          <video
            className="w-full h-full aspect-video object-contain rounded-lg bg-black"
            controls
            autoPlay
            loop
            playsInline
            style={{
              filter: "saturate(1.2) contrast(1.1) brightness(1.05)",
            }}
          >
            <source
              src={appConfig.prophecies_section.videoUrl}
              type="video/mp4"
            />
            <source
              src={appConfig.prophecies_section.videoUrl}
              type="video/quicktime"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <motion.p
          className="text-base text-center mt-4 font-bold"
          style={{
            textShadow: "2px 2px 0 #FF0000",
          }}
          variants={colorCycleVariants}
          animate="animate"
        >
          <motion.span variants={flashVariants} animate="animate">
            {appConfig.prophecies_section.videoSubTitle}
          </motion.span>
        </motion.p>
      </motion.div>

      {/* Ronald Speaks */}
      <motion.div
        className="h-96 relative border-4 border-red-500 p-4 overflow-hidden bg-yellow-400/80"
        style={{
          boxShadow: "0 0 30px #FF0000",
          backdropFilter: "blur(1px)",
        }}
        variants={shakeVariants}
        animate="animate"
      >
        <motion.h2
          className="text-2xl font-bold text-center mb-4"
          style={{
            fontFamily: "Impact, Arial Black, sans-serif",
            textShadow: "2px 2px 0 #FF0000",
          }}
          variants={colorCycleVariants}
          animate="animate"
        >
          🧠 {appConfig.prophecies_section.prophecyTitle} 🧠
        </motion.h2>

        <motion.div
          className="h-[calc(100%-3rem)] overflow-y-auto pr-4 rounded-lg p-2"
          variants={prophecyScrollVariants}
          animate="animate"
        >
          {appConfig.prophecies_section.prophecies.map((prophecy, index) => (
            <motion.p
              key={index}
              className="text-sm leading-relaxed mb-4 break-words font-bold"
              style={{
                textShadow:
                  index % 2 === 0
                    ? "2px 0 0 #FFD700, -2px 0 0 #FF0000"
                    : "3px 0 0 #FF0000, -3px 0 0 #FFD700",
              }}
              variants={colorCycleVariants}
              animate="animate"
            >
              {prophecy}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      {/* McLeaks */}
      <motion.div
        className="h-72 flex flex-col relative border-4 border-yellow-400 p-4 bg-red-500/80"
        style={{
          boxShadow: "0 0 30px #FFD700",
          backdropFilter: "blur(1px)",
        }}
        variants={pulseVariants}
        animate="animate"
      >
        <motion.h2
          className="text-2xl font-bold text-center mb-4"
          style={{
            fontFamily: "Impact, Arial Black, sans-serif",
            textShadow: "2px 2px 0 #FF0000",
          }}
          variants={colorCycleVariants}
          animate="animate"
        >
          👁️ $FYHLEAKS 👁️
        </motion.h2>

        <motion.button
          className="w-full font-bold text-base text-red-500 cursor-pointer px-3 py-3 my-2 border-2 border-red-500 bg-yellow-400 transition-all duration-300 rounded-lg"
          style={{
            fontFamily: "Impact, Arial Black, sans-serif",
            textShadow: "1px 1px 0 #FFD700",
            boxShadow: "0 0 20px #FF0000",
          }}
          variants={pulseVariants}
          animate="animate"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setRevealedTruth(!revealedTruth)}
        >
          {revealedTruth ? "HIDE BURGER TRUTH" : "REVEAL BURGER TRUTH"}
        </motion.button>

        {revealedTruth && (
          <motion.div
            className="mt-4 text-yellow-400 flex-grow overflow-y-auto text-sm font-bold p-4 bg-black/70 border-2 border-yellow-400 rounded-lg"
            style={{
              textShadow: "1px 1px 0 #FF0000",
            }}
            variants={flashVariants}
            animate="animate"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p variants={colorCycleVariants} animate="animate">
              If you stare at your reflection and say 'I'M LOVIN' IT' three
              times, your pupils will temporarily become golden arches
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Capabilities;
