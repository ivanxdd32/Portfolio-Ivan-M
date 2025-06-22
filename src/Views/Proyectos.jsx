import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "animate.css";

// Imágenes de proyectos
import tareku from "../assets/Tareku.png";
import imh4nny_hub from "../assets/Imh4nny_hub.png";
import portfolio from "../assets/Portfolio.png";
import imh4nny_hupdate from "../assets/Imh4nny_hubUpdate.png";
import ScientistCalc from "../assets/ScientistCalc.png";
import Clocks from "../assets/Clocks.png";

export default function Proyectos() {
  const [proyectoActivo, setProyectoActivo] = useState(null);
  const [animando, setAnimando] = useState(false);
  const [animandoSalida, setAnimandoSalida] = useState(false);
  const [animandoEntrada, setAnimandoEntrada] = useState(true);
  const [reanimarTexto, setReanimarTexto] = useState(false);
  const [animarSalida, setAnimarSalida] = useState(false);
  const { t } = useTranslation();
  const textoAnimado = t("projects.title");

  const proyectos = [
    {
      id: 1,
      key: "tareku",
      nombre: "TAREKU",
      descripcion: t("projects.tareku.description"),
      tecnologias: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "NODE.JS",
        "EXPRESS.JS",
        "MYSQL",
      ],
      imagen: tareku,
      deploy: "https://tareku.onrender.com/inicio_de_sesion/login.html",
    },
    {
      id: 2,
      key: "imh4nnyhub",
      nombre: "IMH4NNY HUB",
      descripcion: t("projects.imh4nnyhub.description"),
      tecnologias: ["HTML", "CSS", "JAVASCRIPT", "ANIMATE.CSS"],
      imagen: imh4nny_hub,
      deploy: "https://imh4nny.netlify.app/",
    },
    {
      id: 3,
      key: "portfolio",
      nombre: "PORTFOLIO",
      descripcion: t("projects.portfolio.description"),
      tecnologias: [
        "HTML",
        "TAILWINDCSS",
        "REACT",
        "VITE",
        "FRAMER MOTION",
        "GSAP",
        "NODEMAILER",
        "ANIMATE.CSS",
      ],
      imagen: portfolio,
      deploy: "https://portfolio-ivan-m.onrender.com/",
    },
    {
      id: 4,
      key: "imh4nnyhupdate",
      nombre: "IMH4NNY HUPDATE",
      descripcion: t("projects.imh4nnyhupdate.description"),
      tecnologias: [
        "HTML",
        "TAILWINDCSS",
        "REACT",
        "VITE",
        "FRAMER MOTION",
        "GSAP",
        "ANIMATE.CSS",
      ],
      imagen: imh4nny_hupdate,
      deploy: "https://imh4nny-hubupdate.onrender.com/",
    },
    {
      id: 5,
      key: "scientistcalc",
      nombre: "SCIENTISTCALC",
      descripcion: t("projects.scientistcalc.description"),
      tecnologias: [
        "HTML",
        "CSS",
        "REACT",
        "VITE",
        "TONE.JS",
        "GSAP",
        "I18NEXT",
        "FRAMER MOTION",
      ],
      imagen: ScientistCalc,
      deploy: "https://scientifical.netlify.app/",
    },
    {
      id: 6,
      key: "clocks-international-timezones",
      nombre: "CLOCKS - INTERNATIONAL TIMEZONES",
      descripcion: t("projects.clocks-international-timezones.description"),
      tecnologias: ["HTML", "CSS", "REACT", "VITE", "FRAMER MOTION"],
      imagen: Clocks,
      deploy: "https://clocks-international-timezones.netlify.app/",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setAnimandoEntrada(false);
    }, 1200);
  }, []);

  useEffect(() => {
    if (!proyectoActivo) {
      setReanimarTexto(true); // Activa reanimación cuando el modal se cierra
      setTimeout(() => setReanimarTexto(false), 10); // Forzar re-renderización
    }
  }, [proyectoActivo]);

  const cerrarProyecto = () => {
    setAnimandoSalida(true);

    setTimeout(() => {
      setProyectoActivo(null);
      setAnimandoSalida(false);

      // 🔥 Asegurar que animarSalida vuelva a false
      setAnimarSalida(false);

      // Reiniciar animación de entrada de los proyectos
      setAnimandoEntrada(false);
      setTimeout(() => setAnimandoEntrada(true), 10);
      setTimeout(() => setAnimandoEntrada(false), 1200);
    }, 200);
  };

  const cerrandoProyecto = () => {
    if (proyectoActivo) {
      cerrarProyecto();
    }
  };

  const handleProyectoClick = (proyecto) => {
    setAnimando(true);
    setAnimarSalida(true);
    setTimeout(() => {
      setProyectoActivo(proyecto);
      setAnimando(false);
    }, 0); // Espera antes de cambiar el estado
  };

  const letterVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.05, delay: 0.5 + i * 0.05 },
    }),
    hidden: (i) => ({
      opacity: 0,
      y: 10, // Se mueve hacia abajo al desaparecer
      transition: { duration: 0.05, delay: i * 0.02 },
    }),
  };

  return (
    <section className="min-h-screen flex flex-col items-center text-center bg-gray-900 text-white py-12 px-4 overflow-hidden">
      {/* Espaciador visible solo en pantallas pequeñas */}
      <div className="block sm:hidden h-16"></div>

      <motion.h2 className="text-2xl font-bold text-center pt-4 pb-8 mt-4 sm:mt-16 md:mt-16 lg:mt-12">
        {textoAnimado.split("").map((letra, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={letterVariants}
            initial="hidden"
            animate={animarSalida ? "hidden" : "visible"}
            custom={i}
          >
            {letra === " " ? "\u00A0" : letra}
          </motion.span>
        ))}
      </motion.h2>

      {/* Proyectos */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-3 gap-5 px-4 sm:px-6 md:px-10 lg:px-16 cursor-pointer 
      ${proyectoActivo ? "opacity-0 pointer-events-none" : "opacity-100"} 
      transition-opacity duration-500`}
      >
        {proyectos.map((proyecto, index) => (
          <motion.div
            key={proyecto.id}
            className={`bg-gray-800 p-3 rounded-lg shadow-lg overflow-hidden 
            ${animandoEntrada ? "animate__animated animate__bounceInUp" : ""}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => handleProyectoClick(proyecto)}
            initial={false}
            animate={{
              opacity: animarSalida ? 0 : 1,
              scale: animarSalida ? 0.9 : 1,
            }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.nombre}
              className="w-full h-36 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{proyecto.nombre}</h3>
          </motion.div>
        ))}
      </div>

      {proyectoActivo && (
        <motion.div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-4 
          ${
            animandoSalida
              ? "animate__animated animate__fadeOutUpBig"
              : "animate__animated animate__zoomInUp"
          }
          overflow-hidden`}
          style={{ overflowY: "hidden" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0 }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center blur-sm"
            style={{
              backgroundImage: `url(${proyectoActivo.imagen})`,
              overflowY: "hidden",
            }}
          ></div>

          <motion.button
            className="absolute top-18 right-6 sm:top-18 md:top-20 lg:top-20 lg:right-4 w-12 h-12 flex items-center z-10 cursor-pointer justify-center text-white text-2xl font-bold bg-gray-800 border border-gray-700 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 animate__animated animate__backInRight"
            onClick={cerrarProyecto}
            style={{ animationDelay: "0.5s" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>

          <motion.div
            className="relative w-full max-w-lg md:max-w-3xl p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-xl 
            bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white max-h-[80vh] overflow-y-auto animate__animated animate__bounceIn"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              {proyectoActivo.nombre}
            </h2>

            <p className="text-gray-300 text-lg text-center mt-3">
              {t(`projects.${proyectoActivo.key}.description`)}
            </p>

            <h3 className="text-lg md:text-xl font-semibold mt-6 text-center text-gray-200">
              {t("projects.technologiesUsed")}
            </h3>

            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {proyectoActivo.tecnologias.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm shadow-md"
                >
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
              🚀 {t("projects.viewProject")}
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
