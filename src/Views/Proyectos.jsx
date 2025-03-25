import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "animate.css"; // Asegura que Animate.css esté importado

// Imágenes de proyectos
import tareku from "../assets/Tareku.png";
import imh4nny_hub from "../assets/Imh4nny_hub.png";
import portfolio from "../assets/Portfolio.png";

const proyectos = [
  {
    id: 1,
    nombre: "TAREKU",
    descripcion: "Descripción detallada del Proyecto 1.",
    tecnologias: ["HTML", "CSS", "JAVASCRIPT", "NODE.JS", "EXPRESS.JS", "MYSQL"],
    imagen: tareku,
    deploy: "https://tareku.onrender.com/inicio_de_sesion/login.html",
  },
  {
    id: 2,
    nombre: "IMH4NNY HUB",
    descripcion: "Descripción detallada del Proyecto 2.",
    tecnologias: ["HTML", "CSS", "JAVASCRIPT", "ANIMATE.CSS"],
    imagen: imh4nny_hub,
    deploy: "https://imh4nny.netlify.app/",
  },
  {
    id: 3,
    nombre: "PORTFOLIO",
    descripcion:
      "Este es mi portafolio web, un sitio moderno y dinámico donde muestro mis proyectos, habilidades y experiencia. Implementa animaciones fluidas y efectos visuales avanzados para una experiencia atractiva e interactiva.",
    tecnologias: ["HTML", "TAILWINDCSS", "REACT", "VITE", "FRAMER MOTION", "GSAP", "NODEMAILER", "ANIMATE.CSS"],
    imagen: portfolio,
    deploy: "http://localhost:5173/",
  },
];

const textoAnimado = "Mis Proyectos";

export default function Proyectos() {
  const [proyectoActivo, setProyectoActivo] = useState(null);
  const [animando, setAnimando] = useState(false);
  const [animandoSalida, setAnimandoSalida] = useState(false);
  const [animandoEntrada, setAnimandoEntrada] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimandoEntrada(false);
    }, 2000) // Dura 1 segundo
  }, []);

  const cerrarProyecto = () => {
    setAnimandoSalida(true);
    setTimeout(() => {
      setProyectoActivo(null);
      setAnimandoSalida(false);
    }, 800); // Espera 800ms antes de ocultar el modal
  };  

  const handleProyectoClick = (proyecto) => {
    setAnimando(true);
    setTimeout(() => {
      setProyectoActivo(proyecto);
      setAnimando(false);
    }, 800); // Espera 800ms antes de cambiar el estado
  };

  const letterVariants = {
    hidden: { opacity: 0, y: -10 }, // Inicia con opacidad 0 y un poco arriba
    visible: (i) => ({
      opacity: 1,
      y: 0, // Baja a su posición normal
      transition: { duration: 0.05, delay: 0.5 + i * 0.05 }, // Efecto ola
    }),
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white py-20 px-4 overflow-hidden">
      <motion.h2
        className="text-3xl font-bold text-center pt-4 pb-10"
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

      {!proyectoActivo ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-12 lg:px-20 cursor-pointer">
          {proyectos.map((proyecto, index) => (
            <div
              key={proyecto.id}
              className={`bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 
                ${animando ? "animate__animated animate__flipOutX" : ""}
                ${animandoEntrada ? "animate__animated animate__fadeInUp" : ""} // Aplica la animación al cargar
              `}
              style={{ animationDelay: `${index * 0.2}s` }} // Agrega un efecto de cascada
              onClick={() => handleProyectoClick(proyecto)}
            >
              <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-2">{proyecto.nombre}</h3>
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-4 
            ${animandoSalida ? "animate__animated animate__lightSpeedOutRight" : ""}`}
        >
          <div className="absolute inset-0 w-full h-full bg-cover bg-center blur-sm" style={{ backgroundImage: `url(${proyectoActivo.imagen})` }}></div>

          <motion.button
            className="absolute top-20 right-4 w-12 h-12 flex items-center z-1 cursor-pointer justify-center text-white text-2xl font-bold bg-gray-800 border border-gray-700 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300"
            onClick={() => setProyectoActivo(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>

          {/* Detalles del proyecto */}
          <motion.div
            className="relative w-full max-w-lg md:max-w-3xl p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-xl 
            bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white max-h-[80vh] overflow-y-auto 
            "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              {proyectoActivo.nombre}
            </h2>

            <p className="text-gray-300 text-lg text-center mt-3">{proyectoActivo.descripcion}</p>

            <h3 className="text-lg md:text-xl font-semibold mt-6 text-center text-gray-200">Tecnologías utilizadas:</h3>

            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {proyectoActivo.tecnologias.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm shadow-md">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={proyectoActivo.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-5 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 hover:scale-105"
            >
              🚀 Visualiza el proyecto en acción
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
