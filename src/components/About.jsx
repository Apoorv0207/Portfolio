import React from 'react';
import photo from '../assets/photo.png'; // Replace with PHOTO_LINK if using Drive

const About = () => {
  return (
    <section id="about" className="mb-16 flex flex-col md:flex-row items-center gap-8">
      <img src={photo} alt="Profile" className="w-48 h-48 rounded-full border-4 border-white shadow-lg"/>
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          I am a final-year student at Delhi Technological University, specializing in Electrical Engineering, graduating in 2026. 
          I am proficient in Monstac technologies, EJS, and Monstac only. I am also skilled in DSA and problem-solving, 
          regularly practicing contests on LeetCode and GeeksforGeeks.
        </p>
      </div>
    </section>
  );
};

export default About;
