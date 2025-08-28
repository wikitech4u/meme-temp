"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { appConfig } from "@/config";
export default function FloatingImages() {
  return (
    <div className="fixed bottom-1 left-1/2 -translate-x-1/2 flex gap-6 pointer-events-none z-50">
      {appConfig.floating_images.images.map((img, i) => (
        <motion.div
          key={i}
          className="relative overflow-hidden rounded-lg flex items-center justify-center"
          style={{ width: 150, height: 150 }}
          animate={{
            x: ["-100%", "100%"],
            boxShadow: [
              "0 0 15px 5px rgba(255, 0, 255, 0.7)",
              "0 0 20px 8px rgba(0, 255, 255, 0.7)",
              "0 0 15px 5px rgba(255, 255, 0, 0.7)",
              "0 0 20px 8px rgba(255, 0, 255, 0.7)",
            ],
            scale: [1, 1.05, 1],
          }}
          transition={{
            x: {
              duration: 25 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
            boxShadow: {
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: {
              duration: 4 + Math.random() * 1,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={120}
            height={120}
            className="rounded-lg object-cover" // Removed absolute, inset-0, m-auto
            style={{
              filter: `
                contrast(1.2)
                saturate(1.8)
                brightness(1.1)
                drop-shadow(0 0 8px rgba(0,255,255,0.7))
                drop-shadow(0 0 5px rgba(255,0,255,0.7))
              `,
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-lg"
            animate={{
              borderColor: [
                "rgba(255,0,255,0.8)",
                "rgba(0,255,255,0.8)",
                "rgba(255,255,0,0.8)",
                "rgba(255,0,255,0.8)",
              ],
              borderWidth: [2, 4, 2],
            }}
            transition={{
              duration: 3 + Math.random() * 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ borderStyle: "solid" }}
          />
        </motion.div>
      ))}
    </div>
  );
}
