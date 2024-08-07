import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MySkills from "./pages.jsx/MySkills";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MyProjects from "./pages.jsx/MyProjects";
import HomePage from "./pages.jsx/HomePage";
import ContactMe from "./pages.jsx/ContactMe";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
const Home = () => {
  var [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((darkMode = !darkMode));
  };

  return (
    <div className="bg-slate-200 text-black dark:bg-gray-600 dark:text-white">
      <Router>
        <div>
          <div>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
          <div>
      <ScrollToTop/>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route
                path="/MyProjects"
                element={<MyProjects></MyProjects>}
              ></Route>
              <Route path="/MySkills" element={<MySkills></MySkills>}></Route>
              <Route
                path="/ContactMe"
                element={<ContactMe></ContactMe>}
              ></Route>
            </Routes>
      
          </div>
        </div>
      <Footer/>
      </Router>
      
    </div>
  );
};

export default Home;
