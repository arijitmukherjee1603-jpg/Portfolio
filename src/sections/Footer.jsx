import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full backdrop-blur-xs bg-black text-white py-10 px-6">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-2xl font-bold tracking-wide">
            Arijit Mukherjee
          </h1>
          <p className="text-gray-400 mt-2 text-sm max-w-sm">
            Building scalable (highly adaptable & growth-ready) automation frameworks 
            and crafting seamless user experiences.
          </p>
        </motion.div>

        {/* Center Section - Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-6 text-gray-400"
        >
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </motion.div>

        {/* Right Section - Socials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-5 text-xl"
        >
          <a href="https://github.com/arijitmukherjee1603-jpg" className="hover:text-blue-400 transition">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/arijit-mukherjee01/" className="hover:text-blue-500 transition">
            <FiLinkedin />
          </a>
          <a href="mailto:arijitmukherjee1603@gmail.com?subject=Hiring%20Opportunity&body=Hello%20Arijit,%20I%20visited%20your%20portfolio..." className="hover:text-red-400 transition">
            <FiMail />
          </a>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="border-t border-gray-800 mt-10 pt-5 text-center text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} Arijit. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;