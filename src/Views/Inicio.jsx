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
    gsap.to(sectionRef.current, {
      opacity: 0.5, 
      scale: 0.5, 
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom 49%",
        scrub: 0.5,
        snap: {
          snapTo: "labels", // Se ancla a las secciones
          duration: 0.8, // Duración del ajuste
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
          snap: 1, // Salta a la siguiente sección automáticamente
        },
      }
    );
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white"
      >
        <motion.h1
          className="text-4xl font-bold pb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5}}
        >
          <h1 className="text-4xl font-bold">
            ¡Hola, soy <span className="text-blue-400">Ivan Martinez</span>!
          </h1>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="mt-4 text-lg text-gray-300">
            Desarrollador apasionado por la tecnología y el desarrollo web.
          </p>
        </motion.p>
      </section>

      <section
        ref={nextSectionRef}
        className="h-screen flex items-center justify-center bg-blue-500 text-white"
      >
        <h2 className="text-3xl font-bold">
          Bienvenido, sección en construccion. 🚀
        </h2>
      </section>
    </div>
  );
}
