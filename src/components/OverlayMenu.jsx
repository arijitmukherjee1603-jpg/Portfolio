import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function OverlayMenu({ isOpen, onClose }) {

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const origin = isMobile ? "95% 8%" : "50% 8%";

  // Container animation (stagger effect)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  // Item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="
    fixed inset-0 z-50 flex items-center justify-center
    lg:backdrop-blur-sm
    lg:bg-transparent
  "

          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}

          style={{
            background:
              isMobile >= 1024
                ? "linear-gradient(135deg, rgba(0,0,0,0.95), rgba(20,20,20,0.9))"
                : "#000",
            willChange: "clip-path, opacity, transform",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)"
          }}
        >

          {/*Glow background */}
          <div className="absolute w-125 h-125 bg-pink-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
          <div className="absolute w-100 h-[400px] bg-blue-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

          {/*Close Button */}
          <motion.button
            onClick={onClose}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute top-6 right-6 text-white text-4xl hover:rotate-90 transition-transform duration-300"
            aria-label="Close Menu"
          >
            <FiX />
          </motion.button>

          {/* 🔥 Menu Items */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 text-center"
          >
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Exposure",
              "Contact",
            ].map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="relative text-5xl font-bold text-white tracking-wide group"
                >
                  {/* Text */}
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r from-pink-400 to-blue-400 transition-all duration-500 ">
                    {item}
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>

        </motion.div>
      )}
    </AnimatePresence>
  );
}