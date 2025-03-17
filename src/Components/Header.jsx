import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Header() {
  return (
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
                    <li>
                        <Link to="/" className="hover:text-blue-400">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/proyectos" className="hover:text-blue-400">Proyectos</Link>
                    </li>
                    <li>
                        <Link to="/contacto" className="hover:text-blue-400">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  );
}