import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const name = "ARIJIT MUKHERJEE";
const role = "SOFTWARE DEVELOPMENT ENGINEER IN TEST";

const TOTAL_DURATION = 4800; // must match exit timing

const IntroAnimations = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3400);

    const removeTimer = setTimeout(() => {
      onComplete();
    }, TOTAL_DURATION);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
          scale: isExiting ? 1.15 : 1,
          filter: isExiting ? "blur(10px)" : "blur(0px)",
        }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      >

        {/* 🔥 BACKGROUND LIGHT */}
        <motion.div
          className="absolute w-[200%] h-[300%] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent rotate-45"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        <div className="text-center z-10">

          {/* 🔥 NAME */}
          <div className="flex justify-center flex-wrap text-4xl md:text-6xl font-bold">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: i * 0.05,
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                }}
                className="bg-gradient-to-r text-white bg-clip-text text-transparent"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* 🔥 ROLE */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 text-gray-400 text-lg tracking-widest"
          >
            {role}
          </motion.p>

          {/* 🔥 LINE */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "220px", opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mx-auto mt-6 h-[3px] bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.8)]"
          />
        </div>

        {/* 🔥 AI PULSE LOADER */}
        <motion.div
          className="absolute bottom-20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
        >
          <motion.div
            className="w-3 h-3 bg-cyan-400 rounded-full"
            animate={{ scale: [1, 1.8, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />

          <motion.div
            className="absolute w-10 h-10 border border-cyan-400/40 rounded-full"
            animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          <motion.div
            className="absolute w-16 h-16 border border-cyan-400/20 rounded-full"
            animate={{ scale: [1, 2.8], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }}
          />
        </motion.div>

        {/* 🔥 PROGRESS BAR (NEW 🔥) */}
        <motion.div
          className="absolute bottom-0 left-0 h-[3px] bg-cyan-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: TOTAL_DURATION / 1400,
            ease: "linear",
          }}
          style={{
            opacity: isExiting ? 0.5 : 1,
          }}
        />

        {/* 🔥 EXIT OVERLAY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isExiting ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black z-20"
        />

      </motion.div>
    </AnimatePresence>
  );
};

export default IntroAnimations;