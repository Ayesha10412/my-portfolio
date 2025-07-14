import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import resume from "../assets/Ayesha-Khanam-Resume.pdf";
import image from "../assets/image.jpeg";
const DesAndIntro = () => {
  const handleOpenAndDownload = () => {
    // First, trigger the download
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Ayesha-Khanam-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.location.href = resume;
  };

  return (
    <section
      className="w-[80%] mx-auto bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300
     p-6 md:p-12  mt-11 rounded-lg shadow-lg py-8 "
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Profile Image */}
        <div className="flex justify-center items-center">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg ">
            <img
              src={image} // Replace with your image URL
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Introduction and Designation */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            MERN Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            I create beautiful, responsive, and dynamic web applications.
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

          {/* Resume Button */}
          <div className="flex justify-center md:justify-start">
            <button
              onClick={handleOpenAndDownload}
              className="btn bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg px-6 py-3 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16l4 4m0 0l4-4m-4 4V4m14 16H6"
                />
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesAndIntro;
