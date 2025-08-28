"use client"
import { appConfig } from "@/config";
import React, { useState, useEffect } from "react";
import BuyBtn from "./buy-btn";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add blur effect when scrolled past 50px
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full mx-auto fixed top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/10 backdrop-blur-md border-b border-primary py-3" 
        : "bg-transparent py-4"
    }`}>
      <div className="px-6 flex flex-1 items-center justify-between">
        {/* Logo */}
        <h3 className="text-3xl sm:text-4xl font-bold">
          {appConfig.logo}
        </h3>
        <BuyBtn className="text-lg font-semibold" size={"lg"} />
      </div>
    </nav>
  );
};

export default Navbar;