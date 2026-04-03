import { useEffect } from 'react';

/**
 * Hook: Attaches IntersectionObserver to all elements matching
 * the given selector and adds 'visible' class when they enter viewport.
 */
export function useScrollReveal(selector = '.reveal, .timeline-item, .project-card, .edu-card') {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
}
