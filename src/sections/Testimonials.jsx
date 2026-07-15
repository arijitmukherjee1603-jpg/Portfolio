import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Solutions Inc.",
    content: "Working with this developer was exceptional. Their attention to detail and ability to deliver high-quality code on time exceeded our expectations. Highly recommended!",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    content: "Outstanding technical skills and great communication. They transformed our vision into a robust, scalable application. A true professional to work with.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Lead Developer",
    company: "Innovate Corp",
    content: "Their expertise in modern web technologies and problem-solving approach made our project a success. Always willing to go the extra mile.",
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder",
    company: "Digital Ventures",
    content: "Incredible work ethic and technical proficiency. They delivered beyond what we asked for and helped us achieve our business goals effectively.",
    avatar: "DK"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Project Manager",
    company: "Global Tech",
    content: "Professional, reliable, and innovative. Their contributions significantly improved our product's performance and user experience.",
    avatar: "LT"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Senior Engineer",
    company: "Code Masters",
    content: "One of the best developers I've collaborated with. Their code is clean, well-documented, and their debugging skills are top-notch.",
    avatar: "JW"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div className="relative min-h-screen text-white px-6 py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
      <div className="absolute inset-0 opacity-40" />

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              y: [null, -100],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Header */}
        <div id="testimonials" className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            What People Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Testimonials from colleagues, clients, and collaborators who have experienced my work firsthand
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0px 20px 40px rgba(0,255,255,0.1)"
              }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl relative overflow-hidden group"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-cyan-400/30 text-4xl group-hover:text-cyan-400/60 transition-colors">
                "
              </div>

              {/* Avatar */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Rating stars */}
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="text-yellow-400 text-lg"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to work together? Let's create something amazing!
          </p>
          
        </motion.div>
      </motion.div>
      {/* Glow Spread */}
<div className="absolute bottom-0 left-0 w-full h-[3px] bg-purple-500/20 "></div>
    </div>
  );
};

export default Testimonials;
