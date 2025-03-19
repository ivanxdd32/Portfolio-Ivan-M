import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion } from "framer-motion";
import "../App.css"; 

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Inicio() {
  const sectionRef = useRef(null);
  const nextSectionRef = useRef(null);

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
    }, 1000); // 🔥 Espera 1 segundo antes de iniciar ScrollTrigger (ajústalo si es necesario)

    return () => clearTimeout(timeout); // Limpieza del timeout para evitar problemas si el usuario cambia de página rápido
  }, []);

  // 🔹 Variantes para la animación de ola
  const letterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, delay: i * 0.05 }, // Efecto de ola
    }),
  };

  return (
    <div>
      <section
        ref={sectionRef}
        className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white"
      >
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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

      <section
        ref={nextSectionRef}
        className="h-screen flex items-center justify-center bg-blue-500 text-white"
      >
        <motion.h2
          className="text-3xl font-bold flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Solo se ejecuta una vez al hacer scroll
        >
          {"Bienvenido, sección en construcción.".split("").map((letra, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={letterVariants}
              custom={i}
            >
              {letra === " " ? "\u00A0" : letra}
            </motion.span>
          ))}
        </motion.h2>
      </section>
    </div>
  );
}
