import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import TransitionContext from "../Context/TransitionContext";

const TransitionComponent = ({ children }) => {
  const location = useLocation();
  const { toggleCompleted } = useContext(TransitionContext);
  const containerRef = useRef(null);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    const node = containerRef.current;

    // Inicio animación de salida
    gsap.to(node, {
      x: "0vw",
      autoAlpha: 0,
      duration: 0.3,
      onComplete: () => {
        // Cambiar contenido después de la salida
        setDisplayChildren(children);
        gsap.set(node, { x: "-100vw", autoAlpha: 0 });

        // Animación de entrada
        gsap.to(node, {
          x: "0vw",
          autoAlpha: 1,
          duration: 0.3,
          onComplete: () => {
            toggleCompleted(true);
            document.body.style.overflow = "auto";
          },
        });
      },
    });

    // Desactivar scroll durante transición
    toggleCompleted(false);
    document.body.style.overflow = "hidden";

    // Limpieza por si se desmonta rápido
    return () => {
      gsap.killTweensOf(node);
    };
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="min-h-screen">
      {displayChildren}
    </div>
  );
};

export default TransitionComponent;
