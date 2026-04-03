import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], animId;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function Particle() {
      this.x = Math.random() * W; this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.3;
      this.size = Math.random() * 1.5 + 0.3;
      this.alpha = Math.random() * 0.6 + 0.1;
      this.char = ['0','1','{','}','<','>','/','='][Math.floor(Math.random() * 8)];
      this.isChar = Math.random() > 0.7;
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle());

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        if (p.isChar) {
          ctx.font = `${Math.floor(p.size * 6 + 6)}px JetBrains Mono`;
          ctx.fillStyle = `rgba(0,245,255,${p.alpha * 0.4})`;
          ctx.fillText(p.char, p.x, p.y);
        } else {
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,245,255,${p.alpha})`;
          ctx.fill();
        }
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef} />;
}
