import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion } from "framer-motion";
import SkillCard from "../Components/SkillCard";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaChevronDown,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiJavascript,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiExpress,
} from "react-icons/si";
import "../App.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Inicio() {
  const sectionRef = useRef(null);
  const nextSectionRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      gsap.to(sectionRef.current, {
        opacity: 0.5,
        scale: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 49%",
          scrub: 0.5,
          snap: {
            snapTo: "labels",
            duration: 0.8,
            ease: "power1.inOut",
          },
        },
      });

      gsap.fromTo(
        nextSectionRef.current,
        { y: "0vh" },
        {
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: nextSectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 0.3,
            snap: 1,
          },
        }
      );
    }, 1000);

    return () => clearTimeout(timeout); // Limpieza del timeout para evitar problemas si el usuario cambia de página rápido
  }, []);

  useEffect(() => {
    // Retrasa la aparición de la flecha 0.5s
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="h-screen flex flex-col lg:flex-row items-center justify-center text-white bg-gray-900 lg:bg-gray-300 px-10"
      >
        {/* Contenedor de texto alineado a la izquierda */}
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center lg:shadow-2xl"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Columna izquierda - Texto */}
          <div className="lg:p-12 lg:text-left space-y-4 lg:space-y-6 w-full h-full flex flex-col justify-center text-left lg:relative lg:bg-white lg:text-gray-800 rounded-l-lg">
            <motion.h1
              className="text-xl font-bold sm:text-3xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              ¡Hola, Soy{" "}
              <span className="text-blue-400 lg:text-blue-600">
                Ivan Martinez!
              </span>
            </motion.h1>

            <motion.p
              className="mt-4 text-md text-gray-300 sm:text-xl lg:text-gray-800 lg:pl-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Desarrollador apasionado por la tecnología, ciberseguridad y el
              desarrollo de software.
            </motion.p>

            {/* Fondo negro en la esquina inferior derecha */}
            <div
              className="absolute bottom-0 right-0 w-32 h-16 lg:bg-[#003140] lg:w-48 lg:h-20"
              style={{
                clipPath: "polygon(0% 100%, 105% 48%, 100% 105%, 0% 105%)",
              }}
            ></div>
          </div>

          {/* Columna derecha - GIF */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="Coding Gif"
              className="w-72 rounded-lg lg:rounded-none lg:rounded-r-lg lg:w-full lg:h-full"
            />
          </motion.div>
        </motion.div>

        {/* 🔽 Flecha animada indicando que hay más contenido */}
        {showArrow && (
          <div className="absolute bottom-10 flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center text-blue-600"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
              onClick={() =>
                nextSectionRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <FaChevronDown className="text-3xl" />
            </motion.div>
          </div>
        )}
      </section>

      {/* TECNOLOGÍAS */}
      <section
        ref={nextSectionRef}
        className="py-28 px-6 md:px-12 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
      >
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tecnologías y herramientas que domino
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 justify-center items-stretch max-w-6xl mx-auto">
          {/* Lenguajes de Programación */}
          <SectionCard
            title="Lenguajes de Programación"
            color="text-yellow-400"
          >
            <div className="grid grid-cols-2 gap-4">
              <SkillCard
                icon={<SiJavascript />}
                label="JavaScript"
                color="text-yellow-400"
                url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              />
              <SkillCard
                icon={<SiMysql />}
                label="MySQL"
                color="text-blue-500"
                url="https://dev.mysql.com/doc/"
              />
              <SkillCard
                icon={<SiHtml5 />}
                label="HTML"
                color="text-red-500"
                url="https://developer.mozilla.org/en-US/docs/Web/HTML"
              />
              <SkillCard
                icon={<SiCss3 />}
                label="CSS"
                color="text-blue-400"
                url="https://developer.mozilla.org/en-US/docs/Web/CSS"
              />
            </div>
          </SectionCard>

          {/* Frameworks y Librerías */}
          <SectionCard title="Frameworks y Librerías" color="text-blue-400">
            <div className="grid grid-cols-2 gap-4">
              <SkillCard
                icon={<FaReact />}
                label="React"
                color="text-blue-400"
                url="https://react.dev/"
              />
              <SkillCard
                icon={<SiTailwindcss />}
                label="TailwindCSS"
                color="text-teal-400"
                url="https://tailwindcss.com/docs"
              />
              <SkillCard
                icon={<FaNodeJs />}
                label="Node.js"
                color="text-green-500"
                url="https://nodejs.org/en/docs/"
              />
              <SkillCard
                icon={<SiExpress />}
                label="Express.js"
                color="text-gray-300"
                url="https://expressjs.com/"
              />
            </div>
          </SectionCard>

          {/* Herramientas y Entornos */}
          <SectionCard title="Herramientas y Entornos" color="text-green-400">
            <div className="grid grid-cols-2 gap-4">
              <SkillCard
                icon={<FaGitAlt />}
                label="Git"
                color="text-red-500"
                url="https://git-scm.com/doc"
              />
              <SkillCard
                icon={<FaGithub />}
                label="GitHub"
                color="text-gray-400"
                url="https://docs.github.com/en"
              />
              <SkillCard
                icon={<SiPostman />}
                label="Postman"
                color="text-orange-500"
                url="https://learning.postman.com/docs/getting-started/introduction/"
              />
            </div>
          </SectionCard>
        </div>
      </section>
    </div>
  );
}

// Componente de Sección
const SectionCard = ({ title, children, color }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-8 w-full max-w-4xl"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h3 className={`text-2xl font-semibold mb-4 ${color}`}>{title}</h3>
    <div className="flex flex-wrap justify-center gap-8">{children}</div>
  </motion.div>
);

