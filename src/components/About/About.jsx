import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-8 ">
      <div className="text-center">
        {/* Header */}
        <h2 className="text-4xl font-semibold text-primary mb-4">About Me</h2>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto ">
          I'm a MERN stack developer with a strong interest in building
          full-stack web applications that are both scalable and user-friendly.
          I enjoy working with modern technologies like React, Node.js, Express,
          and MongoDB (using Mongoose), and I'm comfortable handling both
          front-end and back-end development. I've also been learning and
          applying TypeScript to write cleaner and more reliable code, and I’ve
          worked with PostgreSQL when projects call for relational databases.
          During my university studies, I completed courses in C, C++, Java, and
          C#, which helped me build a solid foundation in programming and
          problem-solving. I'm always looking to improve my skills, explore new
          technologies, and create meaningful digital experiences through code.
        </p>
      </div>
    </div>
  );
};

export default About;
