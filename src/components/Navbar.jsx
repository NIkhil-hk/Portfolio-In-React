import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from '../assets/mm.jpg';
import { FaHome, FaInfo, FaEnvelope } from 'react-icons/fa';

function Navbar({ darkMode, toggleDarkMode }) {
  // Set the initial state based on the presence of the dark mode class on the html element

  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full z-50 bg-white dark:bg-black dark:bg-opacity-40 bg-opacity-80 fixed">
      <nav className="p-4 dark:text-white">
        <div className="flex justify-between items-center">
            <div className="flex">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Link to={'/'}><img
              src={img1}
              alt={'My Photo'}
              className="w-full h-full object-cover"
            /></Link>
          </div>
          <div className="text-2xl font-bold font-mono p-4 "><Link to={'/'}>Nikhil Beldar</Link></div></div>
          <div className="flex items-center gap-4">
            {!isMobile ? (
              <ul className="flex gap-6">
                <li className="font-mono text-xl text-center border border-blue-900 dark:border-white rounded-lg p-2">
                  <Link to={'/'} className="hover:underline hover:text-purple-600">
                    Home
                  </Link>
                </li>
                <li className="font-mono text-xl text-center border border-blue-900 dark:border-white rounded-lg p-2">
                  <Link to={'/MySkills'} className="hover:underline hover:text-purple-600">
                    My Skills
                  </Link>
                </li>
                <li className="font-mono text-xl text-center border border-blue-900 dark:border-white rounded-lg p-2">
                  <Link to={'/MyProjects'} className="hover:underline hover:text-purple-600">
                    My Projects
                  </Link>
                </li>
                <li className="font-mono text-xl text-center border border-blue-900 dark:border-white rounded-lg p-2">
                  <Link to={'/ContactMe'} className="hover:underline hover:text-purple-600">
                    Contact Me
                  </Link>
                </li>
              </ul>
            ) : (
              <button
                className="p-2 rounded-md border border-blue-900 dark:border-white hover:text-purple-600"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                {openDrawer ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            )}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-blue-900 dark:border-white mx-10 hover:text-purple-600"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
        {isMobile && openDrawer && (
          <div className="mt-4 text-center">
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#"><Link onClick={() => setOpenDrawer(!openDrawer)} to={'/'}
                  className="block p-2 bg-slate-300 bg-opacity-60 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Home
                </Link></a>
              </li>
              <li>
                <Link to={'/MySkills'}
                  className="block p-2 rounded-md bg-slate-300 bg-opacity-60 hover:bg-gray-200 dark:hover:bg-gray-700"
                
                  onClick={() => setOpenDrawer(!openDrawer)}
                >
                  My Skills
                  
                </Link>
              </li>
              <li>
                <Link to={'/MyProjects'}
                  className="block p-2 rounded-md bg-slate-300 bg-opacity-60 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => setOpenDrawer(!openDrawer)}
                >
                  My Projects
                </Link>
              </li>
              <li>
                <Link to={'/ContactMe'}
                  className="block p-2 rounded-md bg-slate-300 bg-opacity-60 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => setOpenDrawer(!openDrawer)}
                >
                  Contact Me
                 
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
