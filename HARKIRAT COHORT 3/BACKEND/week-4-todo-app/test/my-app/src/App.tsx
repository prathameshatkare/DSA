import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import "./App.css";

const engineInit = async (engine: any) => {
  await loadSlim(engine);
};

function App() {
  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: 0,
      },

      background: {
        color: "#080d18",
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 90,
          density: {
            enable: true,
          },
        },

        color: {
          value: ["#ffffff", "#9cc9ee", "#60a5fa"],
        },

        shape: {
          type: "circle",
        },

        opacity: {
          value: { min: 0.2, max: 0.8 },
        },

        size: {
          value: { min: 1, max: 3 },
        },

        links: {
          enable: true,
          distance: 140,
          color: "#9cc9ee",
          opacity: 0.18,
          width: 1,
        },

        move: {
          enable: true,
          speed: 1.5,
          random: true,
          outModes: {
            default: "out",
          },
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },

        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.5,
            },
          },
          push: {
            quantity: 4,
          },
        },
      },

      detectRetina: true,
    }),
    [],
  );

  return (
    <ParticlesProvider init={engineInit}>
      <Particles id="tsparticles" options={particlesOptions} />

      {/* Put your existing winter website JSX here */}
    </ParticlesProvider>
  );
}

export default App;
