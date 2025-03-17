import React, { useRef } from 'react';
import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <section className="text-center font-sans bg-gray-900 text-white py-20">
      <motion.h2
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contáctame
      </motion.h2>
      <motion.p
        className="text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Envíame un mensaje.
      </motion.p>
    </section>
  );
}