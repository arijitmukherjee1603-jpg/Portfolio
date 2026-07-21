import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import healthcareCert from "../assets/Arijit_MukherjeeTestYantra_page-0001.jpg";
import tradingCert from "../assets/Arijit_MukherjeeTestyantra2_page-0001.jpg";
import MachineLearningCert from "../assets/MachineLearning.jpeg";
import Entertainmentcert from "../assets/TestYantraCrowd_Entertentment_page-0001.jpg";
import ChatgptCert from "../assets/Chatgptcertificate.jpeg";
import PythonCert from "../assets/Comming_soon.jpeg";

const experiences = [
 
 {
    id: 1,
    title: "ChatGPT for Beginners",
    image: ChatgptCert,
    company: "Great Learning Academy",
    period: "September 2024",
    description:
      "Successfully completed the 'ChatGPT for Beginners' certification. Gained knowledge of Generative AI, prompt engineering, AI-assisted productivity, and practical applications of ChatGPT for software development, learning, and content creation.",
    technologies: [
      "ChatGPT",
      "Prompt Engineering",
      "Generative AI",
      "Artificial Intelligence"
    ]
  },

  {
    id: 2,
    title: "Summer Internship on Machine Learning",
    image: MachineLearningCert,
    company: "Think Again Lab",
    period: "August 2024 - September 2024",
    description:
      "Successfully completed a Summer Internship on Machine Learning. Acquired hands-on knowledge of machine learning concepts, data preprocessing, model development, supervised learning techniques, and real-world AI applications.",
    technologies: [
      "Machine Learning",
      "Python",
      "Artificial Intelligence",
      "Data Preprocessing",
      "Model Development"
    ]
  },

  {
    id: 3,
    image: healthcareCert,
    title: "Crowd Testing – Health Care Domain",
    company: "Test Yantra",
    period: "18 December 2025",
    description:
      "Successfully completed the Crowd Testing certification in the Health Care domain. Gained practical experience in testing healthcare applications, identifying defects, validating application workflows, and reporting software issues following quality assurance practices.",
    technologies: [
      "Crowd Testing",
      "Health Care Testing",
      "Manual Testing",
      "Bug Reporting",
      "Quality Assurance"
    ]
  },

  {
    id: 4,
    image: tradingCert,
    title: "Crowd Testing – Trading Domain",
    company: "Test Yantra",
    period: "07 February 2026",
    description:
      "Successfully completed the Crowd Testing certification in the Trading domain. Developed practical skills in testing trading applications, validating business workflows, identifying software defects, and reporting bugs in real-world testing environments.",
    technologies: [
      "Crowd Testing",
      "Trading Domain Testing",
      "Manual Testing",
      "Bug Reporting",
      "Quality Assurance"
    ]
  },

  {
    id: 5,
    title: "Crowd Testing – Entertainment Domain",
    image: Entertainmentcert,
    company: "Test Yantra",
    period: "27 February 2026",
    description:
      "Successfully completed the Crowd Testing certification in the Entertainment domain. Acquired hands-on experience in validating application functionality, executing manual test scenarios, identifying defects, and collaborating with distributed testing teams.",
    technologies: [
      "Crowd Testing",
      "Entertainment Testing",
      "Manual Testing",
      "Bug Reporting",
      "Quality Assurance"
    ]
  },

  {
  id: 6,
  title: "100 Days of Code: The Complete Python Pro Bootcamp",
  image: PythonCert,
  company: "Coursera",
  period: "2025",
  description:
    "Successfully completed the '100 Days of Code: The Complete Python Pro Bootcamp' by Dr. Angela Yu on Udemy. Developed strong Python programming skills through hands-on projects covering object-oriented programming, file handling, automation, web scraping, APIs, GUI development, databases, and software development best practices.",
  technologies: [
    "Python",
    "Object-Oriented Programming",
    "Automation",
    "Web Scraping",
    "REST APIs",
    "GUI Development",
    "SQLite",
    "Git",
    "Software Development"
  ]
}

 
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div
      id="exposure"
      className="relative min-h-screen text-white px-6 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: .8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Professional Certifications & Learning Achievements
          </motion.h1>

          <p className="text-gray-400 text-lg">
            Click any certification to preview it.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>

          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative mb-12 ml-20"
            >
              <div className="absolute -left-16 top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-black"></div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -5
                }}
                whileTap={{
                  scale: .98
                }}
                onClick={() => setSelectedCertificate(exp)}
                className="cursor-pointer bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl hover:border-cyan-400 transition"
              >
                <div className="flex justify-between flex-col md:flex-row mb-4">
                  <h3 className="text-2xl font-bold text-cyan-400">
                    {exp.title}
                  </h3>

                  <span className="text-purple-400">
                    {exp.period}
                  </span>
                </div>

                <h4 className="text-xl text-gray-300 mb-3">
                  {exp.company}
                </h4>

                <p className="text-gray-400 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-cyan-500/20 border border-cyan-500/30 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCertificate(exp);
                  }}
                  className="bg-gradient-to-r from-green-800 to-black-600 px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  View Certificate
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Popup */}

      <AnimatePresence>

        {selectedCertificate && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-6 z-[999]"

            onClick={() => setSelectedCertificate(null)}
          >

            <motion.div

              initial={{
                scale: .7,
                opacity: 0
              }}

              animate={{
                scale: 1,
                opacity: 1
              }}

              exit={{
                scale: .7,
                opacity: 0
              }}

              transition={{
                duration: .35
              }}

              onClick={(e) => e.stopPropagation()}

              className="relative bg-[#111] rounded-3xl border border-cyan-500/30 overflow-hidden max-w-5xl w-full"
            >

              <button

                onClick={() => setSelectedCertificate(null)}

                className="absolute right-5 top-5 bg-white text-black rounded-full p-2 z-50"
              >

                <X size={20} />

              </button>

              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full max-h-[80vh] object-contain bg-black"
              />

              <div className="p-6">

                <h2 className="text-3xl font-bold text-cyan-400 mb-2">
                  {selectedCertificate.title}
                </h2>

                <p className="text-purple-400 mb-4">
                  {selectedCertificate.company}
                </p>

                <p className="text-gray-300">
                  {selectedCertificate.description}
                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500"></div>

    </div>
  );
};

export default Experience;