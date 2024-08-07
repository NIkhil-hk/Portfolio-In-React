import React from "react";
import profileIMG from "../assets/avatar.jpg";
import aboutIMG from "../assets/about.avif";
import xavier from "../assets/images.jpg";
import khalsa from "../assets/images (1).jpg";

import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      <div style={{ height: "150px" }}></div>
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-mono font-bold p-10">
            Hi there! I'm Nikhil Beldar
          </h1>
          {true && (
            <TypeAnimation
              cursor={true}
              sequence={[
                500,
                "A Full-Stack Web Developer.",
                1000,
                "A Mobile App Develper",
                1000,
                "A Backend Developer",
                1000,
                "A Python Enthusiast",

                500,
              ]}
              speed={50}
              deletionSpeed={65}
              wrapper="h5"
              repeat={Infinity}
              className="font-serif text-2xl p-10"
            />
          )}
        </div>
        <div className=" w-full md:w-1/2 rounded-full  overflow-hidden items-center justify-center flex">
          <img
            src={profileIMG}
            alt="Profile"
            className="w-2/3 h-full object-cover rounded-full"
          />
        </div>

        <div className="min-h-screen mt-10">
          <div className="text-5xl font-mono font-extrabold text-center">
            About Me
          </div>
          <div className="flex justify-center m-10 flex-wrap">
            <img
              src={aboutIMG}
              alt="About"
              className="object-cover rounded-xl h-60"
            />
            <div className="py-6 text-xl">
              Hello! I’m Nikhil, a Web and App Developer based in Mumbai, with a
              passion for Cybersecurity and Data Analysis. My journey in the
              tech world began out of curiosity and has grown into a fulfilling
              career. I specialize in creating responsive, user-friendly
              websites and sleek mobile apps, always striving for excellence in
              quality and performance.
            </div>
            <div className="text-xl">
              In addition to development, I’m deeply committed to cybersecurity.
              I stay updated with the latest trends and practices to ensure that
              my projects are secure and provide peace of mind to users and
              clients. Protecting digital environments and maintaining privacy
              are top priorities in my work.
            </div>
            <div className="py-6 text-xl">
              Data analysis is another area that excites me. I love uncovering
              insights and trends from raw data, turning them into actionable
              intelligence. Whether it’s creating dynamic dashboards or
              conducting in-depth analyses, I enjoy leveraging data to drive
              informed decision-making.
            </div>
            <div className="text-xl">
              {" "}
              When I’m not coding or analyzing data, you’ll find me exploring
              the latest tech innovations, participating in hackathons, or
              sharing my knowledge through blogs and workshops. I believe in
              continuous learning and am always seeking new challenges and
              opportunities to grow.
            </div>
            <div className="py-6 text-xl">
              Feel free to browse my portfolio to see my work. If you’re
              interested in collaborating or just want to chat about tech, don’t
              hesitate to reach out. Let’s create something amazing together!
            </div>
          </div>
        </div>

        <div className="min-h-screen mt-10">
          <div className="text-5xl font-mono font-extrabold text-center">
            My Education
          </div>

          <div className="w-1/3-screen p-8 mt-10 w-full flex justify-center flex-wrap dark:bg-blue-950 bg-white dark:shadow-lg dark:shadow-black shadow-xl rounded-lg overflow-hidden">
            <div className="">
              <img src={xavier} alt="Card" className="w-80 object-cover" />
            </div>
            <div className="h-2/3 p-4">
              <p className="text-4xl font-mono font-extrabold text-center">
                Bsc IT From St Xavier's College Mumbai
              </p>
              <p className="mt-10 text-xl">
                I am pursuing Bsc IT degree from St Xavier's College. This college have offered me exposer to various other things along with tech skills.
              </p>
            </div>
          </div>
          <div className="w-1/3-screen mb-14 p-8 mt-10 w-full flex justify-center flex-wrap dark:bg-blue-950 bg-white dark:shadow-lg dark:shadow-black shadow-xl rounded-lg overflow-hidden">
            <div className="">
              <img src={khalsa} alt="Card" className="w-80 object-cover" />
            </div>
            <div className="h-2/3 p-4">
              <p className="text-4xl font-mono font-extrabold text-center">
                Jr College from Guru Nanak Khalsa College Matunga
              </p>
              <p className="mt-10 text-xl">
                I Have done my Junior College from this Guru Nanak Khalsa College. It was a awesome experience to be the part of this college.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center flex p-4 m-10 ">
        <Link to={"/MySkills"}>
          <button className="justify-center text-center p-5 border dark:bg-blue-950 bg-gray-800 text-white border-purple-500 shadow-2xl shadow-blue-600 dark:shadow-purple-600 rounded-xl text-2xl">
            <div className="flex font-mono">
              Go To My Skills{" "}
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

export default HomePage;
