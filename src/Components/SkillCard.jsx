// 1. React hooks
import { useRef } from "react";

// 2. Librerías externas
import { motion } from "framer-motion";

const SkillCard = ({ icon, label, color, url, className = "" }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      className={`group relative flex flex-col items-center justify-center 
      aspect-square w-full max-w-[110px] sm:max-w-[130px] md:max-w-[140px] 
      rounded-xl border-2 bg-gray-800/60 ${color} shadow-md backdrop-blur-md 
      transition-all duration-300 hover:shadow-xl cursor-pointer text-center p-2 ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      onClick={() => window.open(url, "_blank")}
    >
      {/* Glow animado y fondo */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-black/40 animate-border-glow z-0 pointer-events-none" />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-black/10 to-black/5 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 pointer-events-none z-0" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="text-4xl sm:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <span
          className={`text-xs sm:text-sm md:text-base font-semibold ${color}`}
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
