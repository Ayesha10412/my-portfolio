import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-8 ">
      <div className="text-center">
        {/* Header */}
        <h2 className="text-4xl font-semibold text-primary mb-4">About Me</h2>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to my portfolio! I am a passionate developer with a love for
          creating intuitive and engaging digital experiences. With experience
          in both front-end and back-end development, I specialize in building
          responsive websites and web applications using modern technologies. I
          am constantly learning new skills and pushing myself to grow both
          personally and professionally.
        </p>
      </div>
    </div>
  );
};

export default About;
