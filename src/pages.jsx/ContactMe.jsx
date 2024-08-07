import React from 'react'
import ContactForm from '../components/ContactForm'

import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div>
      
      <div style={{height:'100px'}}></div>
      <ContactForm/>
      <div className="justify-center flex p-4 m-10 ">
        <Link to={"/"}>
          <button className="justify-center text-center p-5 border dark:bg-blue-950 bg-gray-800 text-white border-purple-500 shadow-2xl shadow-blue-600 dark:shadow-purple-600 rounded-xl text-2xl">
            <div className="flex font-mono">
              Home{" "}
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

export default ContactMe
