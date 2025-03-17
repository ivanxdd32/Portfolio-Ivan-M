import React, { useRef } from 'react';
import { motion } from "framer-motion";
import "../App.css/";

export default function Inicio() {
  return (
    <section className="text-center font-sans bg-gray-900 text-white py-20">
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ¡Hola, soy Ivan Martinez!
      </motion.h2>
      <p className="mt-4 text-xl text-gray-400">Desarrollador apasionado por la tecnología.</p>
    </section>
  );
}