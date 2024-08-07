// src/components/Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col items-center justify-center m-7">
        <div className="flex space-x-6 mb-4 text-4xl">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="text-center">
          <h2 className="text-4xl p-5">Quick Links</h2>

          <ul className="p-2">
            <li className="p-3 text-xl font-mono transition-transform transform hover:scale-105 hover:underline">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="p-3 text-xl font-mono transition-transform transform hover:scale-105 hover:underline">
              <Link to={"/MySkills"}>My Skills</Link>
            </li>
            <li className="p-3 text-xl font-mono transition-transform transform hover:scale-105 hover:underline">
              <Link to={"/MyProjects"}>My Projects</Link>
            </li>
            <li className="p-3 text-xl font-mono transition-transform transform hover:scale-105 hover:underline">
              <Link to={"/ContactMe"}>Contact Me</Link>
            </li>
          </ul>
        </div>
        <p className="text-center text-gray-400 mt-8">
          Made With ❤️ By Nikhil Beldar.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
