// src/Components/ExplosionParticles.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

export default function ExplosionParticles({ onComplete }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFireworksPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "fireworks",
        fullScreen: {
          enable: true,
          zIndex: 1000,
        },
        detectRetina: true,
        emitters: {
          life: {
            duration: 0.5,
            count: 1,
          },
          rate: {
            quantity: 20,
            delay: 0.1,
          },
          position: {
            x: 50,
            y: 50,
          },
        },
      }}
      style={{ position: "absolute" }}
      className="pointer-events-none"
    />
  );
}
