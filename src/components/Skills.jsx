import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-4 mb-4">
        {["React","MongoDB","Node","Express","HTML","CSS","JavaScript","Bootstrap","Tailwind","EJS"].map(skill => (
          <span key={skill} className="bg-black/50 px-4 py-2 rounded-full">{skill}</span>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-2">DSA & Problem-Solving</h3>
      <p>
        Practicing algorithms and data structures for 1 year. Regularly solving competitive programming problems on LeetCode and GeeksforGeeks. Strong in problem-solving, logical thinking, and coding contests.
      </p>
    </section>
  );
};

export default Skills;
