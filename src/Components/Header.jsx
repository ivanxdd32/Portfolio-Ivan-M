import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { path: "/", label: "Sobre mí" },
  { path: "/proyectos", label: "Proyectos" },
  { path: "/contacto", label: "Contacto" },
];

export default function Header() {
  const location = useLocation();
  const [clickedLink, setClickedLink] = useState(null);

  return (
    <div className="font-sans bg-gray-900 text-white">
      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 md:pl-6 bg-gray-800 shadow-md z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl font-bold">
            Ivan<span className="text-blue-400">.dev</span>
          </h1>
        </motion.div>

        <nav>
          <ul className="flex gap-2 sm:gap-4 text-xs sm:text-base md:pr-5 relative">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path;
              const isClicked = clickedLink === path;

              return (
                <li
                  key={path}
                  className="relative group overflow-hidden rounded-md"
                  onClick={() => {
                    setClickedLink(path);
                    setTimeout(() => setClickedLink(null), 400);
                  }}
                >
                  {/* Efecto pulse */}
                  {isClicked && (
                    <motion.div
                      className="absolute inset-0 bg-blue-500 opacity-20 rounded-md z-0"
                      initial={{ scale: 0, opacity: 0.4 }}
                      animate={{ scale: 3, opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  )}

                  <Link
                    to={path}
                    className="relative z-10 inline-block px-1 py-1 rounded-md"
                  >
                    <motion.span
                      className={`transition-colors duration-300 ${
                        isActive ? "text-blue-400" : "text-white"
                      } group-hover:text-blue-400`}
                    >
                      {label}
                    </motion.span>

                    {/* Subrayado animado */}
                    <motion.div
                      className="h-[2px] bg-blue-400 mt-1 origin-left"
                      initial={false}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                      }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "left", width: "100%" }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
}
