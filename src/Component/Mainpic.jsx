import React from "react";
import { motion } from "framer-motion";
import bgImage2 from "../assets/heroImage/heroo10.webp";

const Mainpic = ({ children }) => {

  return (
    <motion.div
      className="relative w-full h-[45vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Image */}
      <motion.img
        src={bgImage2}
        alt="Main background"
        className="w-full h-full object-cover"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12">
        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)] z-10 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {children}
        </motion.h2>

        <motion.p
          className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 max-w-lg md:max-w-2xl drop-shadow-md"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          We’d love to assist you with your travel plans and questions.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Mainpic;
