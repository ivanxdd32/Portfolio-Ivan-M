import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { motion } from "framer-motion";
import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const boxRef = useRef(null); // Referencia al div que se va a animar

  useGSAP(() => {
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 40%",
        end: "top 20%",
        scrub: true,
      },
      opacity: 1,
      y: 0,
      duration: 1,
    });
  });

  return (
    <Router>
      <div className="font-sans bg-gray-900 text-white">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-800 shadow-md z-50">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-xl font-bold">Portfolio</h1>
          </motion.div>
          <nav>
            <ul className="flex gap-4">
              <li><Link to="/" className="hover:text-blue-400">Inicio</Link></li>
              <li><Link to="/proyectos" className="hover:text-blue-400">Proyectos</Link></li>
              <li><Link to="/contacto" className="hover:text-blue-400">Contacto</Link></li>
            </ul>
          </nav>
        </header>

        {/* Contenido Principal */}
        <main className="pt-16 p-6 space-y-16">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/proyectos" element={<ProjectSection />} />
            <Route path="/contacto" element={<ContactSection />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function HeroSection() {
  return (
    <section className="text-center py-20">
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ¡Hola, soy Ivan Martinez!
      </motion.h2>
      <p className="mt-4 text-gray-400">Desarrollador apasionado por la tecnología.</p>
    </section>
  );
}

function ProjectSection() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <motion.div
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold">Proyecto 1</h3>
          <p className="text-gray-400">Descripción del proyecto.</p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold">Proyecto 2</h3>
          <p className="text-gray-400">Descripción del proyecto.</p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold">Proyecto 3</h3>
          <p className="text-gray-400">Descripción del proyecto.</p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="text-center py-20">
      <h2 className="text-3xl font-bold">Contáctame</h2>
      <p className="text-gray-400">Envíame un mensaje o sígueme en redes sociales.</p>
    </section>
  );
}


export default App;
