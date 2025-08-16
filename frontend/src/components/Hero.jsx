import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I'm <span className="text-green-400">Madhav Deshpande</span>
      </motion.h1>
      <p className="mt-4 text-gray-300">
        MERN Stack Developer • Problem Solver • LLM tinkerer
      </p>
      <a
        href="mailto:madhavdeshpande2109@gmail.com"
        className="mt-6 inline-block bg-green-400 text-black px-5 py-2 rounded font-medium hover:bg-green-500"
      >
        Hire Me
      </a>
    </section>
  );
}
