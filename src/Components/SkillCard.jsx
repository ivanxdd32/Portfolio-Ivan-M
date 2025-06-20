import { motion } from "framer-motion";
import { useRef } from "react";

const SkillCard = ({ icon, label, color, url }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    cardRef.current.style.transform = `rotateY(${x * 10}deg) rotateX(${
      y * -10
    }deg)`;
  };

  const resetTilt = () => {
    cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <motion.div
      ref={cardRef}
      className={`group relative flex flex-col items-center justify-center p-5 rounded-xl border-2 bg-gray-800/60 ${color} shadow-md backdrop-blur-md transition-all duration-300 hover:shadow-xl cursor-pointer`}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      onClick={() => window.open(url, "_blank")}
    >
      {/* Efecto de marco animado */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-black/40 animate-border-glow z-0 pointer-events-none"></div>

      {/* Glow interno al hacer hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-black/10 to-black/5 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 pointer-events-none z-0"></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-5xl mb-2 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <span className="text-lg font-semibold text-white">{label}</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
