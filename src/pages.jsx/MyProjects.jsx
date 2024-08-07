import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import proj1 from '../assets/proj1.jpg';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';

const MyProjects = () => {
  return (
    <div>
      <div style={{ height: "120px" }}></div>
        <h2 className="text-5xl font-bold text-center mb-8">My Projects</h2>
      <div className="flex flex-wrap justify-center mb-32">
        
        <a href="https://2048-game-dusky.vercel.app/" target={"_blank"} className='flex'>
        <div className="relative bg-white dark:bg-slate-700 shadow-2xl dark:shadow-purple-500 shadow-blue-700 rounded-xl p-5 px-10 m-4 flex flex-col items-center transition-transform transform hover:scale-105">
          <div className="w-64 h-90">
            <img src={proj1} alt="" className="mb-3" />
            <h1 className="text-4xl text-center">2048 Game In Flutter</h1>
            <p className="text-center text-lg text-blue-400 p-2">Click For Demo</p>
          </div>
        </div>
        </a>
        <a href="https://ecommerce-sandy-pi.vercel.app/" target={"_blank"} className='flex'>
        <div className="relative bg-white dark:bg-slate-700 shadow-2xl dark:shadow-purple-500 shadow-blue-700 rounded-xl p-5 px-10 m-4 flex flex-col items-center transition-transform transform hover:scale-105">
          <div className="w-64 h-90">
            <img src={proj2} alt="" className="mb-3" />
            <h1 className="text-4xl text-center">Ecommerce Website</h1>
            <p className="text-center text-lg text-blue-400 p-2">Click For Demo</p>
          </div>
        </div>
        </a>
        <a href="https://nikhil-hk.github.io/Portfolio/" target={"_blank"} className='flex'>
        <div className="relative bg-white dark:bg-slate-700 shadow-2xl dark:shadow-purple-500 shadow-blue-700 rounded-xl p-5 px-10 m-4 flex flex-col items-center transition-transform transform hover:scale-105">
          <div className="w-64 h-90">
            <img src={proj3} alt="" className="mb-3" />
            <h1 className="text-4xl text-center">Portfolio in HTML</h1>
            <p className="text-center text-lg text-blue-400 p-2">Click For Demo</p>
          </div>
        </div>
        </a>
        <a href="https://github.com/Nikhil-hk" target={"_blank"} className='flex'>
        <div className="relative bg-white dark:bg-slate-700 shadow-2xl dark:shadow-purple-500 shadow-blue-700 rounded-xl p-5 px-10 m-4 flex flex-col items-center transition-transform transform hover:scale-105">
          <div className="w-64 h-90">
            <img  alt="" className="mb-3" />
            <h1 className="text-4xl text-center">See My GitHub Profile</h1>
            <p className="text-center text-lg text-blue-400 p-2">Click here</p>
          </div>
        </div>
        </a>
        <div className="relative bg-white dark:bg-slate-700 shadow-2xl dark:shadow-purple-500 shadow-blue-700 rounded-xl p-10 m-4 flex flex-col items-center transition-transform transform hover:scale-105">
          <div className="w-64 h-80 text-2xl">Comming Soon</div>
        </div>
        <div className="relative bg-white dark:bg-slate-700 shadow-2xl dark:shadow-purple-500 shadow-blue-700 rounded-xl p-10 m-4 flex flex-col items-center transition-transform transform hover:scale-105">
          <div className="w-64 h-80 text-2xl">Comming Soon</div>
        </div>
      </div>
      <div className="justify-center flex p-4 m-10 ">
        <Link to={"/ContactMe"}>
          <button className="justify-center text-center p-5 border dark:bg-blue-950 bg-gray-800 text-white border-purple-500 shadow-2xl shadow-blue-600 dark:shadow-purple-600 rounded-xl text-2xl">
            <div className="flex font-mono">
              Go To Contact Me{" "}
              <span className="mt-1 m-2">
                <FaArrowRight />
              </span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyProjects;
