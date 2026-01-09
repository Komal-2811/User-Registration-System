import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AnimatedBackground = () => {
  const init = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      init={init}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: { value: 60 },
          color: { value: "#ffffff" },
          opacity: { value: 0.25 },
          size: { value: 3 },
          move: { enable: true, speed: 0.6 },
          links: {
            enable: true,
            color: "#ffffff",
            opacity: 0.2,
          },
        },
      }}
    />
  );
};

export default AnimatedBackground;
