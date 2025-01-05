import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const DesAndIntro = () => {
  return (
    <section
      className=" w-[80%] mx-auto bg-gradient-to-r from-gray-100 via-gray-200
     to-gray-300 p-6 md:p-12 border-2 border-red-400 mt-11 "
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
        {/* Profile Image */}
        <div className="flex justify-center items-center">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-red-500">
            <img
              src="https://via.placeholder.com/150" // Replace with your image URL
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Introduction and Designation */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Frontend Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            I make beautiful, responsive, and dynamic web applications.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a
              href="https://github.com" // Replace with your GitHub profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com" // Replace with your LinkedIn profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 text-2xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://facebook.com" // Replace with your Facebook profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 text-2xl"
            >
              <FaFacebook />
            </a>
          </div>

          {/* Resume Download Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/resume.pdf" // Replace with the actual path to your resume file
              download
              className="btn btn-primary text-white bg-red-600 hover:bg-red-700 rounded-lg px-6 py-2 shadow-md"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesAndIntro;
