import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Postman from "../assets/Postman.png";
import TestRail from "../assets/TestRail.png";
import Jira from "../assets/Jira.png";
import Java from "../assets/Java.png";
import Python from "../assets/Python.png";
import Selenium from "../assets/Selenium.png";
import HTML5 from "../assets/HTML5.png";
import CSS3 from "../assets/CSS3.png";
import Tailwind from "../assets/Tailwind CSS.png";
import JavaScript from "../assets/JavaScript.png";
import ReactLogo from "../assets/React.png";
import MySQL from "../assets/MySQL.png";
import TestNG from "../assets/TestNG.png";
import RestAssured from "../assets/RestAssured.png";
import Appium from "../assets/appium-logo-png_seeklogo-272824.png";
import RobotFramework from "../assets/robotframework.png";

// 🔥 SKILLS DATA
const skills = [
  { name: "Postman", img: Postman },
  { name: "TestRail", img: TestRail },
  { name: "Jira", img: Jira },
  { name: "Java", img: Java },
  { name: "Python", img: Python },
  { name: "Selenium", img: Selenium },
  { name: "HTML", img: HTML5 },
  { name: "CSS", img: CSS3 },
  { name: "Tailwind", img: Tailwind },
  { name: "JavaScript", img: JavaScript },
  { name: "React", img: ReactLogo },
  { name: "My SQL", img: MySQL },
  { name: "TestNG", img: TestNG },
  { name: "Rest Assured", img: RestAssured },
  { name: "Appium", img: Appium },
  { name: "Robot Framework", img: RobotFramework },
];

// 🔥 ANIMATION
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 80, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Skills() {
  const ref = useRef(null);

  // 🔥 KEY LINE (re-trigger animation every time)
  const isInView = useInView(ref, { once: false });

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center  justify-center overflow-hidden text-white px-6"
    >
      {/* 🔥 REAL BLUR BACKGROUND */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* 🔥 GLOW EFFECT */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[150px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[150px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mt-24 font-bold mb-16"
        >
          MY SKILLS
        </motion.h1>

        {/* GRID */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.15,
                rotateX: 10,
                rotateY: 10,
              }}
              className="relative group w-28 h-28 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-30 blur-xl rounded-2xl"></div>

              <img
                src={skill.img}
                alt={skill.name}
                className="w-14 h-14 z-10"
              />

              <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 text-sm">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔥 CLEAN PREMIUM SEPARATOR */}
<div className="w-full mt-38 bottom-0  flex justify-center items-center">
  
  <div className="w-[120%] bottom-0 flex items-center gap-4">
    
    {/* left line */}
    <div className="flex-1 mt-1 h-[5px] bg-gradient-to-r from-transparent  to-white/30"></div>

    {/* center dot */}
    <div className="w-2.5 h-2.5  rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.7)]"></div>

    {/* right line */}
    <div className="flex-1 mt-1 h-[5px] bg-linear-to-l from-transparent to-white/30"></div>

  </div>

</div>
      </div>
      
   
    </section>
  );
}