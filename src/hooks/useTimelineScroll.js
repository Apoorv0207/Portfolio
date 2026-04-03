import { useEffect, useRef } from 'react';

/**
 * Hook: Tracks scroll position relative to the timeline section
 * and updates the fill height of the timeline track line,
 * creating a "line drawing itself" effect.
 */
export function useTimelineScroll() {
  const sectionRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const fill = fillRef.current;
    if (!section || !fill) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;

      // How far we've scrolled INTO the section (0 → 1)
      const start = windowH * 0.8; // when top of section is 80% from top
      const end = windowH * 0.1;  // when bottom of section is near top

      const totalTravel = rect.height - (windowH - start - end);
      const scrolled = Math.max(0, start - rect.top);
      const progress = Math.min(1, scrolled / totalTravel);

      fill.style.height = `${progress * 100}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { sectionRef, fillRef };
}
