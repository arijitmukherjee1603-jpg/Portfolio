import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone } from "react-icons/fi";
import emailjs from "emailjs-com";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const phone = formData.get("user_phone");

    // ✅ Name validation
    if (!/^[A-Za-z ]+$/.test(name)) {
      alert("Invalid Name ");
      return;
    }

    // ✅ Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid Email ");
      return;
    }

    // ✅ Phone validation
    if (phone && !/^[0-9]{10}$/.test(phone)) {
      alert("Invalid Phone Number ");
      return;
    }

    // ONLY AFTER VALIDATION → send email
    setLoading(true);

   emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  e.target,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
      .then(() => {
        alert("Message Sent Successfully");
        e.target.reset();
        setMessage("");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message ");
      })
      .finally(() => setLoading(false));
  };




  // 🔥 STAGGER ANIMATION
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div id="contact" className="relative min-h-[120vh] w-full flex items-center justify-center px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black  via-[#0a0a2a] to-[#12002f]" />
      <div className="absolute inset-0  bg-black/30" />

      {/* GLOW EFFECTS */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600 blur-[150px] opacity-30 rounded-full top-20 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-indigo-500 blur-[120px] opacity-20 rounded-full bottom-10 right-10"></div>

      {/* MAIN CONTAINER */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="relative grid lg:grid-cols-2 gap-10 max-w-6xl w-full z-10"
      >

        {/* LEFT SIDE */}
        <motion.div variants={item} className="text-white flex flex-col justify-center">
          <p className="bg-white/10 px-4 py-1 rounded-full w-fit text-sm mb-4 backdrop-blur-md">
            Contact Me
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Let’s Get In Touch.
          </h1>

          <p className="text-gray-400 mt-4">
            Reach out anytime — I respond fast ⚡
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={sendEmail}
          variants={item}
          className="backdrop-blur-2xl bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl space-y-5"
        >

          {/* NAME */}
          <motion.div variants={item} className="relative">
            <FiUser className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
              pattern="^[A-Za-z ]+$"
              title="Only alphabets allowed"
              className="w-full pl-10 p-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition"
            />

          </motion.div>

          {/* EMAIL */}
          <motion.div variants={item} className="relative">
            <FiMail className="absolute left-3 top-4 text-gray-400" />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Enter valid email"
              className="w-full pl-10 p-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition"
            />
          </motion.div>

          {/* PHONE */}
          <motion.div variants={item} className="relative">
            <FiPhone className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              name="user_phone"
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              maxLength="10"
              title="Enter 10 digit number"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              className="w-full pl-10 p-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition"
            />
          </motion.div>

          {/* MESSAGE */}
          <motion.div variants={item}>
            <textarea
              name="message"
              maxLength={300}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message..."
              required
              className="w-full p-3 h-32 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition resize-none"
            />
            <p className="text-right text-sm text-gray-500">
              {message.length}/300
            </p>
          </motion.div>

          {/* CHECKBOX */}
          {showPolicy && (
            <div className="mt-3 p-4 bg-white/10 border border-white/20 rounded-lg text-gray-300 text-sm max-h-40 overflow-y-auto">
              <h3 className="font-semibold text-white mb-2">Privacy Policy</h3>
              <p>
                I respect your privacy. Your personal data (Name, Email, Phone) will only be used for communication purposes.
                I do not share your data with third parties. By submitting this form, you consent to my data usage policy.
              </p>
            </div>
          )}
          <motion.div variants={item} className="flex items-center gap-2 text-gray-400 text-sm">
            <input
              type="checkbox"
              required
              onChange={(e) => setShowPolicy(e.target.checked)}
            />
            <p>I agree to Privacy Policy</p>
          </motion.div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg"
          >
            Submit Form →
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;