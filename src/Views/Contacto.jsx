import React, { useRef } from 'react';
import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white py-20">
      <motion.h2
        className="text-3xl font-bold text-center pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Contáctame
      </motion.h2>
      <motion.p
        className="text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Envíame un mensaje.
      </motion.p>
    </section>
  );
}