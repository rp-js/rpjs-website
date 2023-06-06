'use client';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { Engine, ISourceOptions, Container } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

export function BgParticles() {
  const options: ISourceOptions = {
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.5,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#fcdc00',
      },
      links: {
        color: '#fcdc00',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: 'circle',
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
      <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} className="h-full" />
    </div>
  );
}
