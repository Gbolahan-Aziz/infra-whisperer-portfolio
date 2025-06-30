import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={init}
      options={{
        fpsLimit: 60,
        interactivity: { events: { onHover: { enable: true, mode: 'repulse' } } },
        particles: {
          color: { value: 'rgb(var(--foreground))' },
          links: { color: 'rgb(var(--foreground))', distance: 150, enable: true },
          move: { enable: true, speed: 1, outModes: 'bounce' },
          number: { density: { enable: true, area: 800 }, value: 50 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
