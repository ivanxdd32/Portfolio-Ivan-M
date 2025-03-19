import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Header() {
  const location = useLocation(); // Obtener la ruta actual

  return (
    <div className="font-sans bg-gray-900 text-white">
      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-800 shadow-md z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl font-bold">Portfolio</h1>
        </motion.div>
        <nav>
          <ul className="flex gap-4 text-xs sm:text-base">
            {[
              { path: "/", label: "Sobre mí" },
              { path: "/proyectos", label: "Proyectos" },
              { path: "/contacto", label: "Contacto" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`hover:text-blue-400 ${
                    location.pathname === path ? "text-blue-400" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
