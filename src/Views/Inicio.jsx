import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaChevronDown } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiJavascript, SiPostman, SiHtml5, SiCss3 } from "react-icons/si";
import "../App.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Inicio() {
  const sectionRef = useRef(null);
  const nextSectionRef = useRef(null);

  useEffect(() => {
    gsap.to(sectionRef.current, {
      opacity: 0.5,
      scale: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom 49%",
        scrub: 0.5,
        snap: { snapTo: "labels", duration: 0.8, ease: "power1.inOut" },
      },
    });

    gsap.fromTo(
      nextSectionRef.current,
      { y: "0" },
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
  }, []);

  return (
    <div>
      {/* HERO */}
      <section ref={sectionRef} className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white">
        <motion.h1 
          className="text-4xl font-bold text-blue-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          ¡Hola, soy Ivan Martinez!
        </motion.h1>

        <motion.p 
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Desarrollador apasionado por la tecnología y el desarrollo web.
        </motion.p>

        {/* 🔽 Flecha animada indicando que hay más contenido */}
        <div className="absolute bottom-10 flex flex-col items-center">
          <motion.div
            className="flex flex-col items-center text-blue-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          >
            <p className="text-gray-400 text-sm mb-2">Ver más</p>
            <FaChevronDown className="text-3xl" />
          </motion.div>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section ref={nextSectionRef} className="h-auto py-20 flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-black to-gray-900 text-white px-6">

        {/* Lenguajes de Programación */}
        <SectionCard title="Lenguajes de Programación" color="text-yellow-400">
          <SkillCard icon={<SiJavascript />} label="JavaScript" color="text-yellow-400" />
          <SkillCard icon={<SiMysql />} label="MySQL" color="text-blue-500" />
          <SkillCard icon={<SiHtml5 />} label="HTML" color="text-red-500" />
          <SkillCard icon={<SiCss3 />} label="CSS" color="text-blue-400" />
        </SectionCard>

        {/* Frameworks y Librerías */}
        <SectionCard title="Frameworks y Librerías" color="text-blue-400">
          <SkillCard icon={<FaReact />} label="React" color="text-blue-400" />
          <SkillCard icon={<SiTailwindcss />} label="Tailwind CSS" color="text-teal-400" />
          <SkillCard icon={<FaNodeJs />} label="Node.js" color="text-green-500" />
        </SectionCard>

        {/* Herramientas y Entornos */}
        <SectionCard title="Herramientas y Entornos" color="text-green-400">
          <SkillCard icon={<FaGitAlt />} label="Git" color="text-red-500" />
          <SkillCard icon={<FaGithub />} label="GitHub" color="text-gray-400" />
          <SkillCard icon={<SiPostman />} label="Postman" color="text-orange-500" />
        </SectionCard>
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

// Componente de Tarjeta de Habilidad
const SkillCard = ({ icon, label, color }) => (
  <motion.div
    className={`flex flex-col items-center p-4 rounded-lg shadow-md bg-gray-700 ${color} hover:scale-110 hover:shadow-lg transition-transform`}
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-5xl mb-2">{icon}</div>
    <span className="text-lg">{label}</span>
  </motion.div>
);
