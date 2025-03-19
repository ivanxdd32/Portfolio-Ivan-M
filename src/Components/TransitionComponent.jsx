import React, { useContext, useEffect } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

import TransitionContext from '../Context/TransitionContext';

const TransitionComponent = ({ children }) => {
  const location = useLocation();
  const { toggleCompleted } = useContext(TransitionContext);

  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={500}
        onEnter={(node) => {
          toggleCompleted(false);
          gsap.set(node, { autoAlpha: 0, scale: 0.6, x: '-100vw' }); // Mueve en píxeles en vez de porcentaje
          gsap
            .timeline({
              paused: true,
              onComplete: () => {
                toggleCompleted(true);
                document.body.style.overflow = 'auto'; // Reactivar scroll
              },
            })
            .to(node, { autoAlpha: 1, x: 0, duration: 0.25 })
            .to(node, { scale: 1, duration: 0.25 })
            .play();
        }}
        onExit={(node) => {
          document.body.style.overflow = 'hidden'; // Evita el scroll durante la salida
          gsap
            .timeline({ paused: true })
            .to(node, { scale: 1, duration: 0.2 })
            .to(node, { x: '100vw', autoAlpha: 0, duration: 0.2 })
            .play();
        }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
