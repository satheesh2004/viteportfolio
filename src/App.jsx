import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";

function App() {
  const [refAbout, inViewAbout] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [refTable, inViewTable] = useInView({ triggerOnce: true, threshold: 0.5 });
  

  return (
    <div>
      


      <header className="header text-white font-sans flex justify-between items-center px-6 py-4 bg-black">
      {/* Logo */}
      <div className="logo text-2xl font-bold">
        <h1>Portfolio</h1>
      </div>

      {/* Hamburger Button */}
      <button
        className="hamburger text-white text-3xl p-2 rounded-md focus:outline-none absolute top-4 right-6 z-50"
        onClick={toggleNavbar}
      >
        ☰
      </button>

      {/* Navbar */}
      <nav
        className={`Navbar flex flex-col space-y-4 bg-black p-6 fixed top-0 right-0 h-full w-64 transform ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <a
          href="#home"
          className="hover:text-gray-400 p-2 border-2 rounded-md"
          onClick={toggleNavbar}
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-gray-400 p-2 border-2 rounded-md"
          onClick={toggleNavbar}
        >
          About Me
        </a>
        <a
          href="#education"
          className="hover:text-gray-400 p-2 border-2 rounded-md"
          onClick={toggleNavbar}
        >
          Education
        </a>
        <a
          href="#achievements"
          className="hover:text-gray-400 p-2 border-2 rounded-md"
          onClick={toggleNavbar}
        >
          Achievements
        </a>
        <a
          href="#contact"
          className="hover:text-gray-400 p-2 border-2 rounded-md"
          onClick={toggleNavbar}
        >
          Contact
        </a>
      </nav>
    </header>

      

            <div className="container">
            <h1 className="name">SATHEESH</h1>
            <h2 className="title">WEBFLOW DEVELOPER</h2>
            <h1 className="name">MENEZES</h1>
          </div>


      {/* About Me Section */}
      <div
        className={`third flex flex-col md:flex-row items-center md:items-start text-white text-center md:text-left px-4 md:px-20 mt-20 transition-transform duration-1000 ${
          inViewAbout ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        }`}
        ref={refAbout}
      >

        
        <div className="md:w-1/3">
          <h1 className="font-sans font-bold text-2xl mb-4">About Me</h1>
        </div>
        <div className="md:w-2/3">
          <p className="text-lg font-sans space-y-2">
            I’m a passionate and results-driven Full Stack Developer with a strong
            foundation in modern web development and a knack for creating efficient,
            user-friendly applications. My expertise spans across both frontend
            and backend technologies, allowing me to build robust and scalable
            solutions from start to finish.
          </p>
        </div>
      </div>

    
      <div
        className={`fourth flex flex-col md:flex-row items-center md:items-start text-white text-center md:text-left px-4 md:px-20 mt-20 transition-transform duration-1000 ${
          inViewTable ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        ref={refTable}
      >
        <div className="md:w-1/3">
          <h2 className="font-sans about-h2 font-bold text-xl ">What I Bring to the Table:</h2>
        </div>
        <div className="md:w-2/3 space-y-2 leading-9">
          <ul className="list-disc ml-6">
            <li>
              <strong>Frontend Proficiency:</strong> Skilled in React.js, Tailwind CSS,
              and adept at managing modern build tools like Vite.
            </li>
            <li>
              <strong>Backend Expertise:</strong> Experienced with Node.js, crafting APIs,
              and implementing server-side logic.
            </li>
            <li>
              <strong>Database Knowledge:</strong> Well-versed in databases including
              MongoDB, PostgreSQL, and MySQL for dynamic and data-driven applications.
            </li>
            <li>
              <strong>Machine Learning Integration:</strong> Successfully integrated
              machine learning models into web applications, showcasing my ability to
              bridge the gap between AI and development.
            </li>
            <li>
              <strong>JavaScript Mastery:</strong> A deep understanding of JavaScript,
              enabling me to write clean, maintainable, and efficient code.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
