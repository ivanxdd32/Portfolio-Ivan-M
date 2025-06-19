// src/Components/ExplosionParticles.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

export default function ExplosionParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFireworksPreset(engine);
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <Particles
        id="explosion"
        init={particlesInit}
        options={{
          preset: "fireworks",
          detectRetina: true,
          fullScreen: {
            enable: false, // 🚫 no fullscreen
          },
          emitters: {
            life: {
              duration: 0.5,
              count: 1,
            },
            rate: {
              quantity: 15, // menos partículas
              delay: 0.1,
            },
            position: {
              x: 50,
              y: 50,
            },
          },
        }}
      />
    </div>
  );
}
