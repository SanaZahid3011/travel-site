import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import contact from "../assets/contact2.jpg";
import Footer from "./Footer";
import Whatsapp from "./Whatsapp";

import Mainpic from "./Mainpic.jsx";
import { motion } from "framer-motion";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
} from "./Animations.jsx";
import Topbar from "./Topbar.jsx";
import Navbar from "./Navbar.jsx";

const Contact = () => {
  const [form, setfrom] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    setfrom({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <Mainpic />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-10 px-4 sm:px-8 md:px-12 lg:px-20 py-10 mt-1"
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-6"
        >
          <motion.div
            variants={slideLeft}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-4 text-accentt font-primary">
              Get Started on your Holy Journey
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-amber-950 0 font-secondary">
              Let your heart travel where faith leads, step into the sacred
              beauty of Ziyarat, and feel the peace that follows every prayer.
            </p>
          </motion.div>

          <motion.div
            variants={slideRight}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[30vw] h-[30vh] sm:h-[40vh] lg:h-[50vh] rounded-3xl overflow-hidden shadow-md">
              <img
                src={contact}
                alt="Contact"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 w-full px-4"
        >
          <motion.div
            variants={slideLeft}
            className="flex flex-col lg:flex-row items-stretch border-2 border-gray-200 rounded-4xl overflow-hidden w-full max-w-4xl"
          >
            <div className="flex flex-row lg:flex-col items-center justify-around lg:justify-center bg-accentts py-6 lg:py-10 px-4 lg:px-8 gap-6 lg:gap-10">
              <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center">
                <Phone color="white" size={22} />
              </div>
              <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center">
                <Mail color="white" size={22} />
              </div>
              <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center">
                <MapPin color="white" size={22} />
              </div>
            </div>

            <div className="flex flex-col justify-between bg-accentt text-white py-8 px-8 w-full">
              <div>
                <h4 className="font-semibold text-2xl mb-1">Phone Number</h4>
                <span className="text-lg block">+923001234567</span>
              </div>
              <hr className="my-6 border-gray-300" />
              <div>
                <h4 className="font-semibold text-2xl mb-1">Email Address</h4>
                <span className="text-lg block">bujksn@gmail.com</span>
              </div>
              <hr className="my-6 border-gray-300" />
              <div>
                <h4 className="font-semibold text-2xl mb-1">Location</h4>
                <span className="text-lg block">
                  Lorem ipsum dolor sit amet consectetur
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            className="w-full max-w-lg rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm"
          >
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                required
                onChange={handlechange}
                placeholder="Enter your name"
                value={form.name}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accentt text-gray-700 placeholder-gray-400"
              />

              <input
                type="email"
                name="email"
                required
                onChange={handlechange}
                value={form.email}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accentt text-gray-700 placeholder-gray-400"
              />

              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                rows="5"
                onChange={handlechange}
                value={form.message}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accentt text-gray-700 placeholder-gray-400 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-accentt text-white font-semibold py-3 rounded-lg transition hover:bg-accentt-hover duration-300"
              >
                Send Now
              </button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>

      <Whatsapp />
      <Footer />
    </>
  );
};

export default Contact;
