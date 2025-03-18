import React, { useRef } from 'react';
import { motion } from "framer-motion";
import "../App.css/";

export default function Inicio() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white">
      <motion.h1
        className="text-4xl font-bold pb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5}}
      >
        ¡Hola, soy <span className="text-blue-400">Ivan Martinez</span>!
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Desarrollador apasionado por la tecnología y el desarrollo web.
      </motion.p>
    </section>
  );
}