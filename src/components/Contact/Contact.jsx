import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // Icons for email, phone, and whatsapp

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-16 bg-gradient-to-r from-blue-50 to-purple-100">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
        Contact <span className="text-primary">Me</span>
      </h1>

      {/* Contact Information Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Email Section */}
        <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border-2 border-transparent hover:border-teal-500 transform hover:scale-105">
          <FaEnvelope className="text-6xl text-teal-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email</h3>
          <p className="text-lg text-gray-600 mb-4">
            Reach out to me via email for any queries or collaboration.
          </p>
          <a
            href="mailto:k.bristi057@gmail.com"
            className="text-teal-500 hover:text-teal-600 underline"
          >
            k.bristi057@gmail.com
          </a>
        </div>

        {/* Phone Section */}
        <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border-2 border-transparent hover:border-teal-500 transform hover:scale-105">
          <FaPhoneAlt className="text-6xl text-teal-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Phone</h3>
          <p className="text-lg text-gray-600 mb-4">
            Feel free to call or text me for a quick chat.
          </p>
          <a
            href="tel:+8801816729732"
            className="text-teal-500 hover:text-teal-600 underline"
          >
            01816729732
          </a>
        </div>

        {/* WhatsApp Section */}
        <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border-2 border-transparent hover:border-teal-500 transform hover:scale-105">
          <FaWhatsapp className="text-6xl text-teal-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            WhatsApp
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            For quick communication, feel free to reach out via WhatsApp.
          </p>
          <a
            href="https://wa.me/8801816729732"
            className="text-teal-500 hover:text-teal-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
