import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-black/50 rounded-md mb-8">
      <h1 className="text-2xl font-bold">Apoorv Gautam</h1>
      <ul className="flex gap-6">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
