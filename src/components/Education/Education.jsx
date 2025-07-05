import React from "react";
import { FaUniversity } from "react-icons/fa"; // Icon for university
import universityLogo from "../../assets/Iubat-logo.png"; // Import your logo

const Education = () => {
  return (
    <div className="container mx-auto px-16 py-16">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
        My <span className="text-primary">Education</span>
      </h1>

      {/* Education Card */}
      <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 max-w-4xl mx-auto">
        {/* Institution and Degree Information */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img
              src={universityLogo}
              alt="IUBAT Logo"
              className="w-20 h-20 object-contain"
            />
            <div className="text-gray-900">
              <h2 className="text-4xl font-semibold tracking-wide leading-tight">
                Bachelor of Science in Computer Science and Engineering
              </h2>
              <h3 className="text-lg mt-2 text-gray-500">
                IUBAT- International University of Business Agriculture and
                Technology
              </h3>
            </div>
          </div>

          {/* University Icon (You can remove this if you are using the logo) */}
          {/* <div className="text-teal-500 text-6xl">
            <FaUniversity />
          </div> */}
        </div>

        {/* Duration and CGPA */}
        <div className="flex items-center justify-between mb-6 text-gray-900">
          <p className="text-lg">
            4th Year, 11th Semester (out of 12 semesters)
          </p>
          <p className="text-xl font-semibold text-yellow-500">
            CGPA: 3.92/4.00
          </p>
        </div>

        {/* Key Focus Areas */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Focus Areas
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Data Structures & Algorithms</li>
            <li>Software Development</li>
            <li>Database Management</li>
            <li>Operating Systems</li>
            <li>System Analysis & Design</li>
            <li>Networking</li>
            <li>Web Development (React, Node.js)</li>
          </ul>
        </div>

        {/* Special Section with Quote */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-lg italic">
            “Learning is a treasure that will follow its owner everywhere.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
