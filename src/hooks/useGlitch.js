import { useEffect } from 'react';

export function useGlitch(containerRef) {
  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    let timeout;
    const onEnter = () => {
      container.classList.add('glitching');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        container.classList.remove('glitching');
      }, 700);
    };

    container.addEventListener('mouseenter', onEnter);
    return () => {
      container.removeEventListener('mouseenter', onEnter);
      clearTimeout(timeout);
    };
  }, [containerRef]);
}