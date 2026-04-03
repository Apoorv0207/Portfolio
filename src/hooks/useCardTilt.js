import { useEffect, useRef } from 'react';

export function useCardTilt(strength = 12) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = container.querySelectorAll('.project-card');

    cards.forEach((card) => {
      // inject glare div
      const glare = document.createElement('div');
      glare.className = 'card-glare';
      card.appendChild(glare);

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -strength;
        const rotY = ((x - cx) / cx) * strength;
        card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-5px)`;
        card.style.transition = 'transform 0.1s ease';
        // move glare
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(0,245,255,0.08), transparent 60%)`;
        glare.style.opacity = '1';
      };

      const onLeave = () => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)';
        glare.style.opacity = '0';
      };

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);

      card._tiltCleanup = () => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
        if (glare.parentNode) glare.parentNode.removeChild(glare);
      };
    });

    return () => {
      cards.forEach((card) => card._tiltCleanup?.());
    };
  }, [strength]);

  return containerRef;
}