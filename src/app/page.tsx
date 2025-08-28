"use client";
import Prophecies from "@/components/custom/prophecies";
import SocialButtons from "@/components/custom/social-btns";
import FloatingImages from "@/components/custom/floating-images";
import Footer from "@/components/custom/footer";
import Hero from "@/components/custom/hero";
import Manifesto from "@/components/custom/manifesto";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fastShakeVariants } from "@/lib/utils";

export default function Home() {
  const [feinActive, setFeinActive] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const ev = e as CustomEvent<{ active: boolean }>;
      setFeinActive(Boolean(ev.detail?.active));
    };
    window.addEventListener("fein-mode", handler as EventListener);
    return () =>
      window.removeEventListener("fein-mode", handler as EventListener);
  }, []);

  return (
    <motion.div
      variants={fastShakeVariants}
      animate={feinActive ? "animate" : "initial"}
      style={{ minHeight: "100vh" }}
    >
      <section className="divide-y-2 divide-primary w-full lg:w-2/3 mx-auto pt-16 ">
        <Hero />
        <SocialButtons />
        <Prophecies />
        <Manifesto />
        <Footer />
        <FloatingImages />
      </section>
    </motion.div>
  );
}
