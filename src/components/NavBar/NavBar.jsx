import React from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/AYESHA-KHANAM-Resume.pdf";
const NavBar = () => {
  return (
    <header className="bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-500 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="text-white text-2xl font-bold">BrandLogo</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-white hover:text-gray-200 transition">
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-200 transition"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-gray-200 transition"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-200 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Resume Download Button */}
        <div className="hidden md:block">
          <a
            href={resume} // Replace with the actual path to your resume file
            download
          >
            <button className="btn btn-primary rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg transition">
              Download Resume
            </button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-square btn-ghost">
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
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-gray-800 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
