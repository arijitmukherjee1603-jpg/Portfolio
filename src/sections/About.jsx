import React from "react";
import { motion } from "framer-motion";
import MyPic from "../assets/mypic.jpg";

// 🔥 CONTAINER (better stagger control)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12, // faster + smoother flow
      delayChildren: 0.2, // slight delay before starting
    },
  },
};

// 🔥 ITEM (spring + blur + scale combo)
const item = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 90, // lower = smoother
      damping: 18,   // controls bounce
      mass: 0.8,     // weight feel
    },
  },
};

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen bg-black text-white px-6 py-20 overflow-hidden">
      {/* 🔥 SUBTLE DARK OVERLAY */}
<div className="absolute inset-0 bg-black/40  z-0"></div>
      {/* 🔥 TOP SEPARATOR */}
<div className="absolute top-0 left-0 w-full flex justify-center z-20">
  
  
  {/* glow blur layer */}
  <div className="absolute w-3/4 h-20 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl opacity-70"></div>
  
  {/* sharp line */}
  <div className="w-3/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

</div>

      {/* 🔥 CONTENT */}
      <motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  exit="hidden"
  viewport={{ once: false, margin: "-0px" }}
  className="relative z-10 max-w-6xl mx-auto"
>
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.div variants={item} className="flex justify-center">
            <motion.div
              whileHover={{
                scale: 1.07,
                rotate: 1.5,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="w-60 h-60 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-xl"
            >
              <img
                src={MyPic}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <motion.div variants={container} className="space-y-6">

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            >
              Arijit Mukherjee
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-gray-400 tracking-widest"
            >
              SOFTWARE TEST ENGINEER
            </motion.h2>

            <motion.p
              variants={item}
              className="text-gray-400 leading-relaxed"
            >
              I build scalable automation frameworks and ensure high-quality
              software using modern testing strategies like Selenium, API testing,
              and CI/CD pipelines.
            </motion.p>

            {/* CARDS */}
            <motion.div variants={container} className="grid grid-cols-3 gap-4 ">
              {[
                { title: "Experience", value: "Fresher" },
                { title: "Specialty", value: "SDET" },
                { title: "Focus", value: "API & UI" },
              ].map((itemData, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { type: "spring", stiffness: 200 },
                  }}
                  className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-center hover:border-cyan-400"
                >
                  <p className="text-sm text-gray-400">{itemData.title}</p>
                  <p className="font-semibold">{itemData.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* BUTTONS */}
            <motion.div variants={item} className="flex gap-4">
              <motion.a
  href="#projects"
  whileHover={{
    scale: 1.08,
    boxShadow: "0px 0px 20px rgba(0,255,255,0.6)",
  }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-lg font-semibold duration-200 inline-block"
>
  View Projects
</motion.a>

              <motion.a
  href="#contact"
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 duration-200 inline-block"
>
  Contact Me
</motion.a>
            </motion.div>

          </motion.div>
        </div>

        {/* ABOUT TEXT */}
        <motion.div
          variants={item}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-400">
            I am passionate about software testing and automation, focused on
            building reliable systems and improving software quality through
            efficient testing strategies.
          </p>
        </motion.div>

      </motion.div>
      {/* 🔥 BOTTOM SEPARATOR */}
<div className="absolute bottom-0 left-0 w-full flex justify-center z-20">
  
  {/* glow blur */}
  <div className="absolute w-3/4 h-20 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl opacity-70"></div>
  
  {/* sharp line */}
  <div className="w-3/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

</div>
    </section>
  );
};

export default About;