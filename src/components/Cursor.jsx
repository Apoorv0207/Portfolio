import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const trail = document.getElementById('cursor-trail');
    let mx = 0, my = 0, tx = 0, ty = 0;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = (mx - 6) + 'px';
      cursor.style.top = (my - 6) + 'px';
    };

    document.addEventListener('mousemove', onMove);
    const interval = setInterval(() => {
      tx += (mx - tx) * 0.15;
      ty += (my - ty) * 0.15;
      trail.style.left = (tx - 18) + 'px';
      trail.style.top = (ty - 18) + 'px';
    }, 16);

    return () => {
      document.removeEventListener('mousemove', onMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-trail" />
    </>
  );
}
