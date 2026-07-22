import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Robot from "../assets/robot.jpg";


export default function Home() {

  // SOCIAL LINKS
  const socials = [
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arijit-mukherjee-247001383/"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/arijitmukherjee1603-jpg"
    }
  ];

  // Roles (Typewriter)
  const roles = useMemo(() => [
    "SDET ENGINEER",
    "API TESTING",
    "JAVA SELENIUM",
    "AUTOMATION TESTING",
    "STLC & SDLC",
    "AGILE SCRUM",
    "SQL & DATABASE TESTING",
    "JIRA & TESTRAIL",
    "Frontend Developer"
  ], []);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // 🔥 Paragraph Typewriter
  const fullText =
    "Aspiring Software Development Engineer in Test passionate about automation, API testing, and building scalable testing frameworks to deliver high-quality, reliable software.";

  const [displayText, setDisplayText] = useState("");

  // 🔥 ROLE TYPEWRITER
  useEffect(() => {
    if (index === roles.length) return;

    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1200);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);

  }, [subIndex, index, deleting, roles]);

  // 🔥 PARAGRAPH TYPEWRITER
  useEffect(() => {
    let i = 0;

    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(fullText.substring(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, i < 60 ? 15 : 40);

      return () => clearInterval(interval);
    }, 1200);

    return () => clearTimeout(startDelay);
  }, []);

  // 🔥 STAGGER ANIMATION
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,  
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
        mass: 0.8,
      },
    },
  };

  return (
    <section id="home" className="w-full h-screen relative  overflow-hidden">

      {/*<ParticlesBackground />*/}
      <motion.div
  initial={{ scale: 1.1, opacity: 0 }}
  animate={{ scale: 1, opacity: 0.50 }}
  transition={{ duration: 2, ease: "easeOut" }}
  className="absolute inset-0 z-0"
>
  <motion.img
    src={Robot} 
    alt="background"
    className="w-full h-full mt-10 object-cover"
    animate={{
      scale: [1, 1.05, 1],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.div>

      {/*  BACKGROUND BLOBS */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-gradient-to-r from-[#0b7937] to-[#3065a6] opacity-20 blur-[160px] animate-pulse rounded-full" />
        <div className="absolute bottom-45 right-0 w-[300px] h-[300px] bg-gradient-to-r from-[#0b7937] to-[#3065a6] opacity-20 blur-[160px] animate-pulse rounded-full" />
      </div>

      {/* 🧠 CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl"
        >

          {/* 🔥 ROLE TEXT */}
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-4xl font-semibold text-gray-300 mb-4 h-12.5"
          >
            {roles[index].substring(0, subIndex)}
            <span className="animate-pulse text-cyan-400">|</span>
          </motion.div>

          {/* 🔥 HEADING */}
          <motion.h1
  variants={itemVariants}
  className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
>
            <span className="text-gray-400">Hello, I'm</span>
            <br />
            <span className="whitespace-nowrap bg-gradient-to-r from-[#00c6ff] via-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.5)]">
  Arijit Mukherjee
</span>
          </motion.h1>

          {/* 🔥 PARAGRAPH */}
          <div className="h-[120px]">
  <motion.p
    variants={itemVariants}
    className="mt-6 text-gray-400 text-lg font-semibold md:text-xl leading-relaxed"
  >
            {displayText.includes("Software Development Engineer in Test") ? (
              <>
                {displayText.split("Software Development Engineer in Test")[0]}

                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">
                  Software Development Engineer in Test
                </span>

                {displayText.split("Software Development Engineer in Test")[1]}
              </>
            ) : (
              displayText
            )}

            <span className="animate-pulse text-cyan-400">|</span>
          </motion.p>
          </div>

          {/* 🔥 BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center gap-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold shadow-lg duration-300"
            >
              View Projects
            </motion.a>

            <motion.a
              href="/ArijitMukherjee_cv_main1.pdf"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-cyan-400 font-bold duration-300"
            >
              My Resume
            </motion.a>
          </motion.div>

          {/*  SOCIAL ICONS */}
          
 {/*  SOCIAL ICONS */}

<motion.div
  variants={itemVariants}
  className="mt-10 w-full flex justify-center items-center gap-10"
>
  {socials.map((social, i) => {
    const Icon = social.icon;

    return (
      <motion.a
        key={i}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.2,
          filter: "drop-shadow(0px 0px 12px rgba(0,255,255,0.9))",
        }}
        whileTap={{ scale: 0.9 }}
       className="flex items-center justify-center w-12 h-12 text-3xl text-white"
      >
        
          <Icon />
        
      </motion.a>
    );
  })}
</motion.div>

        </motion.div>
      </div>
    </section>
  );
}