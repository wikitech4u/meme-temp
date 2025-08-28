// hooks/useCustomCursor.ts
import { useState, useEffect, useCallback } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface Trail {
  x: number;
  y: number;
  id: number;
  color: string;
}

interface UseCustomCursorReturn {
  mousePosition: MousePosition;
  trails: Trail[];
  isVisible: boolean;
}

const useCustomCursor = (): UseCustomCursorReturn => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [trails, setTrails] = useState<Trail[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const colors: string[] = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#96ceb4",
    "#feca57",
    "#ff9ff3",
    "#54a0ff",
    "#5f27cd",
    "#00d2d3",
    "#ff9f43",
  ];

  const updateMousePosition = useCallback(
    (e: MouseEvent): void => {
      const newPosition: MousePosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      setIsVisible(true);

      setTrails((prev) => {
        const newTrail: Trail = {
          x: e.clientX,
          y: e.clientY,
          id: Date.now() + Math.random(),
          color: colors[Math.floor(Math.random() * colors.length)],
        };
        return [newTrail, ...prev.slice(0, 7)];
      });
    },
    [colors]
  );

  const handleMouseEnter = useCallback((): void => setIsVisible(true), []);
  const handleMouseLeave = useCallback((): void => setIsVisible(false), []);

  useEffect(() => {
    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [updateMousePosition, handleMouseEnter, handleMouseLeave]);

  return {
    mousePosition,
    trails,
    isVisible,
  };
};

export default useCustomCursor;
