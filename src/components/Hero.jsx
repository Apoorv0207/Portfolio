import { useEffect, useState } from 'react';
import { useMagneticLetters } from '../hooks/useMagneticLetters';
import { useGlitch } from '../hooks/useGlitch';
const phrases = [
  'MERN Stack Developer',
  'Building Scalable APIs',
  '400+ LeetCode Problems',
  'Open to SDE Roles',
];

function useTyping() {
  const [text, setText] = useState('');

  useEffect(() => {
    let pi = 0, ci = 0, deleting = false;
    let timer;

    function type() {
      const phrase = phrases[pi];
      if (!deleting) {
        setText(phrase.slice(0, ci + 1));
        ci++;
        if (ci === phrase.length) {
          deleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        setText(phrase.slice(0, ci - 1));
        ci--;
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
      }
      timer = setTimeout(type, deleting ? 50 : 80);
    }
    type();
    return () => clearTimeout(timer);
  }, []);

  return text;
}

/** Splits a string into individually-wrapped magnetic letter spans */
function MagneticText({ text, className }) {
  return (
    <>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`magnetic-letter${className ? ' ' + className : ''}`}
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const typedText = useTyping();
  const nameRef = useMagneticLetters(130, 0.5);
  useGlitch(nameRef);
  return (
    <section id="hero">
      <div className="hero-tag">Full Stack Developer</div>

      {/* 
        FEATURE 1 — MAGNETIC HERO NAME
        Each letter of "APOORV GAUTAM" is wrapped in a span.
        The useMagneticLetters hook detects cursor proximity
        and applies a repulsion transform to each letter individually.
      */}
      <h1 className="hero-name" ref={nameRef}>
        <span className="hero-name-line">
          <MagneticText text="APOORV" />
        </span>
        <br />
        <span className="hero-name-line">
          <MagneticText text="GAUTAM" className="cyan" />
        </span>
      </h1>

      <div className="hero-typed">
        <span>{typedText}</span>
        <span className="typed-cursor" />
      </div>

      <div className="hero-btns">
        <a href="#projects" className="btn btn-solid"><span>View Projects</span></a>
        <a href="#contact" className="btn"><span>Get In Touch</span></a>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  );
}
