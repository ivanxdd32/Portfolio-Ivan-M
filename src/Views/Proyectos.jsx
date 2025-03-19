import React, { useRef } from 'react';
import { delay, motion } from "framer-motion";

export default function Projectos() {

    const textoAnimado = "Mis Proyectos";

    // Animación para cada letra
    const letterVariants = {
      hidden: { opacity: 0, y: -10 }, // Inicia con opacidad 0 y un poco arriba
      visible: (i) => ({
        opacity: 1,
        y: 0, // Baja a su posición normal
        transition: { duration: 0.05, delay: 0.5 + i * 0.05 }, // Efecto ola
      }),
    };
  

  return (
    <section className="h-screen text-center font-sans bg-gray-900 text-white py-20">
      <motion.h2
        className="text-3xl font-bold text-center pt-4"
          initial="hidden"
          animate="visible"
      >
        {textoAnimado.split("").map((letra, i) => (
          <motion.span
                key={i}
                className="inline-block"
                variants={letterVariants}
                custom={i} // Pasa el índice para calcular el delay
              >
                {letra === " " ? "\u00A0" : letra} {/* Mantiene los espacios */}
              </motion.span>
          ))}
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 mt-8 py-4 px-6 sm:px-10 md:px-16 lg:px-20">
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