import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
 
  {
    id: 1,
    title: "E-Commerce Automation Framework (Robot Framework)",
    company: "Self Project",
    period: "2026",
    description:
      "Built a scalable web automation framework for the SauceDemo application using Robot Framework, Python, SeleniumLibrary, and the Page Object Model (POM). Automated Login, Inventory, Cart, Checkout, and Order workflows with reusable keywords, Data-Driven Testing, Cross-Browser execution, automatic screenshots on failure, and Robot Reports. Designed the framework for Jenkins CI and Allure Reporting while managing source code with Git and GitHub.",
    technologies: [
      "Robot Framework",
      "Python",
      "SeleniumLibrary",
      "Page Object Model",
      "Data-Driven Testing",
      "Cross Browser Testing",
      "Git",
      "GitHub",
      "Jenkins",
      "Allure"
    ]
  },
  {
    id: 2,
    title: "REST API Automation Framework",
    company: "Self Project",
    period: "2026",
    description:
      "Developed a reusable API automation framework using Rest Assured, Java, TestNG, and Maven. Automated CRUD operations by validating HTTP status codes, headers, payloads, and JSON responses from Swagger APIs. Implemented reusable request specifications, assertions, and managed the project using Git and GitHub.",
    technologies: [
      "Rest Assured",
      "Java",
      "TestNG",
      "Maven",
      "Swagger UI",
      "API Testing",
      "Git",
      "GitHub"
    ]
  },
  {
    id: 3,
    title: "QA Testing Project – E-Commerce Web Application",
    company: "Self Project",
    period: "2026",
    description:
      "Executed functional, boundary, and negative testing for Registration, Login, Cart, Checkout, Payment, and Order modules. Validated REST APIs using Postman, verified response payloads, and managed defect reporting and tracking using JIRA.",
    technologies: [
      "Manual Testing",
      "API Testing",
      "Postman",
      "JIRA",
      "Functional Testing",
      "Regression Testing"
    ]
  },
  {
    id: 4,
    title: "QA Testing Project – Hospital Management System",
    company: "Self Project",
    period: "2026",
    description:
      "Designed and executed test cases for Patient Registration, Appointment Scheduling, Billing, and Doctor Management modules. Performed Functional, Smoke, Regression, and Exploratory Testing while tracking defects and validating application workflows.",
    technologies: [
      "Manual Testing",
      "Test Case Design",
      "JIRA",
      "TestRail",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Exploratory Testing"
    ]
  },
  {
    id: 5,
    title: "AI Fitness Trainer",
    company: "Final Year Project",
    period: "2025",
    description:
      "Developed a full-stack AI-powered fitness application using Next.js, Tailwind CSS, Convex, Clerk, Gemini AI, and Vapi AI. Implemented secure authentication, personalized workout generation, and voice-based AI interactions while performing functional and UI testing before deployment.",
    technologies: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Convex",
      "Gemini AI",
      "Vapi AI",
      "Clerk"
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

  return (
    <div id="exposure" className="relative min-h-screen  text-white px-6 py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
      <div className="absolute inset-0 opacity-40" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl py-1 font-bold mb-4 bg-gradient-to-r  from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Hands-on Exposure 
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg"
          >
            My Hands-on Exposure in Software Testing
          </motion.p>
        </div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative mb-12 ml-20"
            >
              {/* Timeline dot */}
              <div className="absolute -left-16 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black"></div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-cyan-400">{exp.title}</h3>
                  <span className="text-purple-400 font-medium">{exp.period}</span>
                </div>
                <h4 className="text-xl text-gray-300 mb-3">{exp.company}</h4>
                <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {/* Timeline End Border */}
<div className="absolute w-full h-1 right-1 left-1 bottom-0 w-6 h-0.5 bg-purple-500"></div>
    </div>
  );
};

export default Experience;
