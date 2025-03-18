import React, { useRef } from 'react';
import { motion } from "framer-motion";

export default function Projectos() {
  return (
    <section className="h-screen text-center font-sans bg-gray-900 text-white py-20">
      <motion.h2
        className="text-3xl font-bold text-center pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Mis Proyectos
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-8 py-4 px-20">
        <motion.div
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, delay: 0.4}}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold">Proyecto 1</h3>
          <p className="text-gray-400">Descripción del proyecto.</p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, delay: 0.6}}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold">Proyecto 2</h3>
          <p className="text-gray-400">Descripción del proyecto.</p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, delay: 0.8}}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold">Proyecto 3</h3>
          <p className="text-gray-400">Descripción del proyecto.</p>
        </motion.div>
      </div>
    </section>
  );
}