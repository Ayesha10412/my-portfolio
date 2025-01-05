import React, { useState } from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/AYESHA-KHANAM-Resume.pdf";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track mobile menu state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu visibility
  };

  return (
    <header className="bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-500 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="text-white text-2xl font-bold">
          My<span className="text-fuchsia-500">Portfolio</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-white hover:text-gray-200 transition">
            Home
          </Link>
          <Link
            to="/intro"
            className="text-white hover:text-gray-200 transition"
          >
            Introduction
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-200 transition"
          >
            About
          </Link>
          <Link
            to="/skills"
            className="text-white hover:text-gray-200 transition"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-200 transition"
          >
            Contact
          </Link>
          <Link
            to="/education"
            className="text-white hover:text-gray-200 transition"
          >
            Education
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-gray-200 transition"
          >
            Projects
          </Link>
        </nav>

        {/* Resume Download Button */}
        <div className="hidden md:block">
          <a href={resume} download>
            <button className="btn btn-primary rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg transition">
              Download Resume
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-3 px-6">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-gray-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/intro" className="hover:text-gray-200 transition">
                Introduction
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" className="hover:text-gray-200 transition">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/education" className="hover:text-gray-200 transition">
                Education
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-200 transition">
                Projects
              </Link>
            </li>
            <li>
              <a href={resume} download>
                <button className="w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg py-2">
                  Download Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
