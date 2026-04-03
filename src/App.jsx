import Cursor from './components/Cursor';
import { useLenis } from './hooks/useLenis';
import ParticleCanvas from './components/ParticleCanvas';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useLenis();
  useScrollReveal();
  

  return (
    <>
      <Cursor />
      <ParticleCanvas />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
