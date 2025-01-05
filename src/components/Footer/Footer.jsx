import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-8 mt-16">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg font-semibold">
          © {new Date().getFullYear()} Ayesha Khanam. All Rights Reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 mx-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 mx-4"
          >
            GitHub
          </a>
          <a
            href="mailto:k.bristi057@gmail.com"
            className="text-white hover:text-gray-200 mx-4"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
