import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const rotateSpinVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear" as any,
    },
  },
};

export const glitchVariants = {
  animate: {
    clipPath: [
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      "polygon(0% 2.23%, 100% 2.23%, 100% 35%, 0% 35%, 0% 65%, 100% 65%, 100% 97.77%, 0% 97.77%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ],
    textShadow: [
      "0 0 30px #FFD700, 0 0 60px #FFD700, 5px 5px 0 #FF0000, 10px 10px 0 #FFD700",
      "-3px 0 0 #FF0000, 3px 0 0 #FFD700",
      "0 0 30px #FFD700, 0 0 60px #FFD700, 5px 5px 0 #FF0000, 10px 10px 0 #FFD700",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as any,
    },
  },
};

export const shakeVariants = {
  animate: {
    x: [0, -2, 2, -1, 1, 0],
    rotate: [0, 1, -1, 0.5, -0.5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut" as any,
    },
  },
};

export const colorCycleVariants = {
  animate: {
    color: ["#FF0000", "#FFD700", "#FF6B35", "#FF0000"],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as any,
    },
  },
};

export const flashVariants = {
  animate: {
    opacity: [1, 0.3, 1, 0.7, 1],
    boxShadow: [
      "0 0 30px #FFD700",
      "0 0 50px #FFD700, 0 0 70px #FFD700",
      "0 0 30px #FFD700",
    ],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut" as any,
    },
  },
};
export const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as any,
    },
  },
};
export const titleGlitchVariants = {
  animate: {
    clipPath: [
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      "polygon(0% 1.72%, 100% 1.72%, 100% 19.58%, 0% 19.58%, 0% 56.14%, 100% 56.14%, 100% 98.28%, 0% 98.28%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ],
    textShadow: [
      "0 0 20px currentColor, 2px 2px 0 #FF0000",
      "-3px 0 0 #FF0000, 3px 0 0 #FFD700",
      "0 0 20px currentColor, 2px 2px 0 #FF0000",
    ],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut" as any,
    },
  },
};
export const titleFlashVariants = {
  animate: {
    opacity: [1, 0.98, 0.3, 0.97, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut" as any,
    },
  },
};

export const spinningBurgerVariants = {
  animate: {
    rotate: 360,
    y: [0, -10, 0, -5, 0],
    transition: {
      rotate: {
        duration: 2,
        repeat: Infinity,
        ease: "linear" as any,
      },
      y: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut" as any,
      },
    },
  },
};

// Button animation variants
export const buttonPulseVariants = {
  animate: {
    scale: [1, 1.07, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as any,
    },
  },
};

export const buttonFlashVariants = {
  animate: {
    opacity: [1, 0.3, 1, 0.7, 1],
    boxShadow: [
      "0 0 20px #FF0000",
      "0 0 40px #FF0000, 0 0 60px #FFD700",
      "0 0 20px #FF0000",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as any,
    },
  },
};

export const backgroundCycleVariants = {
  animate: {
    backgroundColor: [
      "rgba(255, 0, 0, 0.8)",
      "rgba(255, 215, 0, 0.8)",
      "rgba(255, 165, 0, 0.8)",
      "rgba(255, 0, 0, 0.8)",
    ],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as any,
    },
  },
};
export const prophecyScrollVariants = {
  animate: {
    backgroundColor: [
      "rgba(0, 0, 0, 0.3)",
      "rgba(255, 0, 0, 0.2)",
      "rgba(255, 215, 0, 0.2)",
      "rgba(0, 0, 0, 0.3)",
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut" as any,
    },
  },
};
