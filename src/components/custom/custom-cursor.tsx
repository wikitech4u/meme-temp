"use client";
import useCustomCursor from "@/hooks/custom-hook";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CustomCursorProps {
  emoji?: string;
  glowColor?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({
  emoji = "🎯",
  glowColor = "#ff6b6b",
}) => {
  const { mousePosition, trails, isVisible } = useCustomCursor();
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect if the device supports touch
    const hasTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0;
    setIsTouch(hasTouch);
  }, []);

  // Don’t render on touch devices
  if (isTouch || !isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[10000]">
        {/* Trails */}
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: trail.color,
              left: trail.x - 6,
              top: trail.y - 6,
            }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{
              scale: 0,
              opacity: 0,
              x: Math.random() * 30 - 15,
              y: Math.random() * 30 - 15,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.08,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Emoji cursor */}
        <motion.div
          className="absolute text-xl select-none"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {emoji}
        </motion.div>

        {/* Glow */}
        <motion.div
          className="absolute w-6 h-6 rounded-full blur-sm opacity-20"
          style={{
            backgroundColor: glowColor,
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hide default cursor only on desktop */}
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
