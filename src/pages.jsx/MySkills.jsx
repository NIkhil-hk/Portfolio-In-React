import React from 'react'
import Footer from '../components/Footer'
import Skills from '../components/Skills';
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

const MySkills = () => {
  return (
    <div>
      <div style={{height:'100px'}}></div>
        <Skills/>
        <div className="justify-center flex p-4 m-10 ">
        <Link to={"/MyProjects"}>
          <button className="justify-center text-center p-5 border dark:bg-blue-950 bg-gray-800 text-white border-purple-500 shadow-2xl shadow-blue-600 dark:shadow-purple-600 rounded-xl text-2xl">
            <div className="flex font-mono">
              Go To My Projects{" "}
              <span className="mt-1 m-2">
                <FaArrowRight />
              </span>
            </div>
          </button>
        </Link>
      </div>
      
    </div>
  )
}

export default MySkills
