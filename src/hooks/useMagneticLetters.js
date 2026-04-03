import { useEffect, useRef } from 'react';

/**
 * Hook: Magnetic repulsion effect on individual letters.
 * When cursor comes within `radius` px of a letter, it gets
 * pushed away from the cursor with a force proportional to proximity.
 */
export function useMagneticLetters(radius = 120, strength = 0.45) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = container.querySelectorAll('.magnetic-letter');

    const handleMouseMove = (e) => {
      const mx = e.clientX;
      const my = e.clientY;

      letters.forEach((letter) => {
        const rect = letter.getBoundingClientRect();
        const lx = rect.left + rect.width / 2;
        const ly = rect.top + rect.height / 2;

        const dx = mx - lx;
        const dy = my - ly;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < radius) {
          const force = (1 - dist / radius) * strength * radius;
          const angle = Math.atan2(dy, dx);
          // Push AWAY from cursor
          const tx = -Math.cos(angle) * force;
          const ty = -Math.sin(angle) * force;
          const rotate = (tx * 0.15).toFixed(2);
          letter.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px) rotate(${rotate}deg)`;
        } else {
          letter.style.transform = 'translate(0,0) rotate(0deg)';
        }
      });
    };

    const handleMouseLeave = () => {
      letters.forEach((letter) => {
        letter.style.transform = 'translate(0,0) rotate(0deg)';
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [radius, strength]);

  return containerRef;
}
