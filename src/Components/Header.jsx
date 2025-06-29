// 1. React y hooks
import { useState, useEffect } from "react";

// 2. Librerías externas
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

// Banderas disponibles
const flags = [
  { code: "es", label: "Español", src: "/flags/es.webp" },
  { code: "en", label: "English", src: "/flags/us.webp" },
  { code: "fr", label: "Français", src: "/flags/fr.webp" },
  { code: "pt", label: "Português", src: "/flags/pt.webp" },
  { code: "de", label: "Deutsch", src: "/flags/de.webp" },
  { code: "zh", label: "中文", src: "/flags/zh.webp" }, // Chino simplificado
  { code: "ar", label: "العربية", src: "/flags/ar.webp" }, // Árabe
  { code: "hi", label: "हिन्दी", src: "/flags/hi.webp" }, // Hindi
  { code: "ru", label: "Русский", src: "/flags/ru.webp" }, // Ruso
];

export default function Header() {
  const location = useLocation();
  const [clickedLink, setClickedLink] = useState(null);

  const [selectedLang, setSelectedLang] = useState(flags[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const { t, i18n } = useTranslation();

  const navLinks = [
    { path: "/", label: t("navbar.about") },
    { path: "/proyectos", label: t("navbar.projects") },
    { path: "/contacto", label: t("navbar.contact") },
  ];

  // Leer idioma guardado al iniciar
  useEffect(() => {
    const savedLangCode = localStorage.getItem("selectedLang");
    const foundLang = flags.find((f) => f.code === savedLangCode);
    if (foundLang) {
      setSelectedLang(foundLang);
      i18n.changeLanguage(foundLang.code);
    }
  }, []);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const handleSelectLang = (lang) => {
    setSelectedLang(lang);
    setShowDropdown(false);
    i18n.changeLanguage(lang.code);
    localStorage.setItem("selectedLang", lang.code);
  };

  return (
    <div className="font-sans bg-gray-900 text-white">
      <header className="fixed top-0 left-0 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:pl-6 bg-gray-800 shadow-md z-50">
        {/* Contenedor superior: Logo + idioma */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-row justify-between items-center sm:w-auto sm:flex-row gap-4 sm:justify-start sm:items-center"
        >
          {/* Logo */}
          <h1 className="text-xl font-bold flex items-center ml-3 sm:ml-0">
            IVAN<span className="text-blue-400">.DEV</span>
          </h1>

          {/* Selector de idioma */}
          <div className="relative flex items-center ml-2 mr-2.5 sm:mr-0">
            <button
              onClick={toggleDropdown}
              aria-expanded={showDropdown}
              aria-label="Select language"
              className="border border-gray-600 rounded-md p-[3px] hover:border-blue-400 transition flex items-center justify-center cursor-pointer"
            >
              <img
                src={selectedLang.src}
                alt={selectedLang.code}
                className="w-6 h-[1.5rem] object-cover rounded-sm"
              />
            </button>

            <AnimatePresence>
              {showDropdown && (
                <motion.ul
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[100px] bg-gray-800 border border-gray-600 rounded-md shadow-lg z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {flags.map((flag) => (
                    <li
                      key={flag.code}
                      onClick={() => handleSelectLang(flag)}
                      className={`flex items-center gap-2 px-3 py-2 cursor-pointer text-sm transition ${
                        flag.code === selectedLang.code
                          ? "bg-gray-700 text-blue-400"
                          : "hover:bg-gray-700"
                      }`}
                    >
                      <img
                        src={flag.src}
                        alt={flag.label}
                        className="w-5 h-4 object-cover"
                      />
                      <span className="uppercase">{flag.code}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Menú de navegación */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full sm:w-auto mt-2 sm:mt-0 flex justify-start sm:justify-end"
        >
          <ul className="w-full flex justify-around gap-8 sm:gap-4 text-xs sm:text-base md:pr-3 relative">
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
                    className="relative z-10 inline-block px-1 sm:px-4 py-1 rounded-md"
                  >
                    <motion.span
                      className={`transition-colors duration-300 ${
                        isActive ? "text-blue-400" : "text-white"
                      } group-hover:text-blue-400`}
                    >
                      {label}
                    </motion.span>

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
        </motion.nav>
      </header>
    </div>
  );
}
