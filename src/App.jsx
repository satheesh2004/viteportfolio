import React, { useState,useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import satheesh from "./assets/sat.jpg"
import UI from "./assets/desigh.jpg"
import app from "./assets/Web.jpg"
import web from "./assets/app.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css";

function App() {
  const [refAbout, inViewAbout] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [refTable, inViewTable] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration
       
      once: false, // Allow animations to repeat
    });
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const services = [
    {
      title: "UI/UX Design",
      description:
        "UI/UX designs turn concepts into captivating experiences. Elevate user engagement and conversion rates with user-centric approach.",
      image: [UI ],
    },
    {
      title: "",
      description:
        "From branding to visuals,  crafting striking Websites that bring your brand to life and captivate your audience.",
      image: [app],
    },
    {
      title: "",
      description:
        "Leverage the power of cross-platform development with apps that work flawlessly on both iOS and Android. Save time and cost without compromising on quality or performance.",
      image: [web],
    },
    
    
  ];

  return (
    <div >
      <header className="header text-white font-sans flex justify-between items-center px-6 py-4 fixed top-0 left-0 w-full bg-opacity-90  z-50">
  <div className="logo text-2xl font-bold animate__animated animate__slideInUp">
    <h1 className="animate__animated animate__fadeInUp animate__delay-1s text-xl text-black">
      Portfolio
    </h1>
  </div>
  <button
    className="hamburger text-black text-3xl p-2 rounded-md focus:outline-none absolute top-4 right-6 z-50"
    onClick={toggleNavbar}
  >
    ☰
  </button>
  <nav
    className={`Navbar flex flex-col space-y-4 bg-black p-6 fixed top-0 right-0 h-full w-64 transform ${
      isNavOpen ? "translate-x-0" : "translate-x-full"
    } transition-transform duration-300 ease-in-out z-40`}
  >
    <a
      href="#home"
      className="hover:text-gray-400 p-2 border-2 rounded-md"
      onClick={() => {
        scrollToSection("home");
        toggleNavbar();
      }}
    >
      Home
    </a>
    <a
      href="#about"
      className="hover:text-gray-400 p-2 border-2 rounded-md"
      onClick={() => {
        scrollToSection("six");
        toggleNavbar();
      }}
    >
      About Me
    </a>
    <a
      href="#education"
      className="hover:text-gray-400 p-2 border-2 rounded-md"
      onClick={() => {
        scrollToSection("services");
        toggleNavbar();
      }}
    >
      Services
    </a>
    <a
      href="#abilities"
      className="hover:text-gray-400 p-2 border-2 rounded-md"
      onClick={() => {
        scrollToSection("five");
        toggleNavbar();
      }}
    >
      Abilities
    </a>
    <a
      href="#contact"
      className="hover:text-gray-400 p-2 border-2 rounded-md"
      onClick={() => {
        scrollToSection("contact");
        toggleNavbar();
      }}
    >
      Contact
    </a>
  </nav>
</header>


      <div className="container font-sans  ">
        <h1 className="name animate__animated animate__fadeInUp animate__delay-2s">SATHEESH</h1>
        <h2 className="title ">WEBFLOW DEVELOPER</h2>
        <h1 className="name animate__animated animate__fadeInUp animate__delay-2s">MENEZES</h1>
      </div>

  <div id="six">
        <div className=" text-center font-sans leading-relaxed text-black text-7xl  md:text-7xl py-10 " data-aos="fade-up" >
                              <h1 className="text-7xl  md:text-7xl" >
                          Satheesh Menezes is an <i>Indian</i>
                          <img
                            className=" img w-22 h-22 md:w-20 md:h-20 inline-block rounded-full align-middle ml-2"
                            src={satheesh}
                            alt="Satheesh"
                          />
                          <br />
                          Webflow Developer,
                        </h1>
                                              <div className=" text-gray-600 font-thin">who builds
                              websites <br />
                              that drive business <br />
                              and achieve results
                        </div>                                                                   
        </div>
  </div>



<div className=" px-6 py-10" id="five">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center" data-aos="fade-up">
    {/* ABILITIES Title */}
    <div className="name1 text-left text-xl  col-span-1 md:col-span-1 md:row-span-2">
      <p data-aos="fade-down" className="text-black-800">ABILITIES</p>
    </div>

    {/* Abilities Grid */}
    <div className="abilities grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2  " >
      <div className="para p-10 border border-black-300 gap-9 m-2 rounded-lg shadow-2xl hover:scale-105 transition duration-300">
        <h2 className="head text-lg font-bold mb-2">WEBFLOW DEVELOPMENT</h2>
        <p className="text-sm text-gray-700 font-bold">
          Custom, optimized websites are developed in Webflow, with a focus on impactful design, interactive animations, and exceptional usability.
        </p>
      </div>
      <div className="para p-10 border border-black-900 gap-9 m-2 rounded-lg shadow-2xl hover:scale-105 transition duration-300">
        <h2 className="head text-lg font-bold mb-2">USER INTERFACE</h2>
        <p className="text-sm text-gray-700 font-bold">
          Creating intuitive and visually engaging interfaces, with a focus on usability and design impact that drive meaningful results.
        </p>
      </div>
      <div className="para p-10 border border-black-900 gap-9 m-2 rounded-lg shadow-2xl hover:scale-105 transition duration-300">
        <h2 className="head text-lg font-bold mb-2">BACK-END DEVELOPMENT</h2>
        <p className="text-sm text-gray-700 font-bold">
          Developing responsive, high-performance websites with a focus on clean code and seamless user experience.
        </p>
      </div>
      <div className="para p-10 border border-black-900 gap-9 m-2 rounded-lg shadow-2xl hover:scale-105 transition duration-500">
        <h2 className="head text-lg font-bold mb-2">RESPONSIVE DEVELOPMENT</h2>
        <p className="text-sm text-gray-700 font-bold">
          Custom, optimized websites are developed in Webflow, with a focus on impactful interactive animations, and exceptional usability for every device.
        </p>
      </div>
    </div>
  </div>
</div>



<div className=" pb-28 pt-0" id="services">
<div className=" py-10 ">
      <h2 className="text-5xl font-bold text-center font-sans mb-20" data-aos="fade-up">Services</h2>
     <div className=" ">
      <div className="grid grid-cols-1  pl-11 sm:grid-cols-2 lg:grid-cols-3 gap-20 px-6 lg:px-20" data-aos="fade-up">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <img  
                src={service.image}
                alt={service.title}
                className="w-full  h-48 object-cover"
              />
              <h3 className="absolute bottom-0 left-0 right-0 bg-gray bg-opacity-100 text-black text-lg font-semibold text-center py-2">
                {service.title}
              </h3>
            </div>
            <div className="p-4">
              <p className="text-black">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>   
    </div>
</div>


<div id="home"
  className="relative h-screen w-full bg-black bg-cover bg-center" data-aos="fade-up"
  style={{ backgroundImage: `url(${satheesh})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
    {/* Title */}
    <h1 className="text-6xl font-bold mb-4" data-aos="fade-up">Webflow Development</h1>
    <p className="text-lg pt-5 uppercase tracking-widest">2025</p>

    {/* About Me Section */}
    <div className="mt-20 flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-4 md:px-20 transition-all duration-1000">
      
      <div className="md:w-2/3" data-aos="fade-up">
        <p className="text-lg text-center ml-60 pl-64 font-sans space-y-0">
          I’m a passionate and results-driven Full Stack Developer with a strong foundation in modern web
          development and a knack for creating efficient, user-friendly applications.
        </p>
      </div>
    </div>

  
  </div>



  <div id="contact">
  <div>
    <div className="font-sans text-black text-9xl p-20" data-aos="fade-up">
      Let`s Chat!
      <div
        className="line animate__animated animate__fadeInUp"
        data-aos="fade-up"
      ></div>
    </div>
  </div>
  <div className="flex flex-col lg:flex-row">
    <div className="contact mx-4 lg:mx-64 p-4 lg:p-20">
      <h1 className="flex flex-col text-3xl font-sans p-4">Social</h1>
      <div className="flex flex-col gap-2 p-4 font-sans text-xl rounded">
        <a
          href="https://www.instagram.com/__s.a.t.h.e.e.s.h__/?igsh=ZWgzb2gxZG42eDEy"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
        <svg
          className="h-8 w-8 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
        <a href="">twitter</a>
        <svg
          className="h-8 w-8 text-blue-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
        <a
          href="https://www.linkedin.com/in/satheesh-g-8b60b9298"
          target="_blank"
          rel="noopener noreferrer"
        >
          linked<i>in</i>
        </a>
        <svg
          className="h-8 w-8 text-sky-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </div>
    </div>

    <div className="contact flex-auto mx-4 lg:mx-0 p-4 lg:p-20">
      <h1 className="flex flex-col text-3xl font-sans p-4">Social</h1>
      <div className="flex flex-col gap-2 p-4 font-sans text-xl rounded">
        <a
          href="https://wa.me/9042210689"
          target="_blank"
          rel="noopener noreferrer"
        >
          phone
        </a>
        <svg
          className="h-8 w-8 text-gray-800"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
        <a
          href="mailto:satheesh20046g@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
        <svg
          className="h-8 w-8 text-gray-900"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
        </svg>
      </div>
    </div>
  </div>
</div>





<div className="absolute bottom-10 text-white flex justify-between w-full px-10 text-sm">
            <span>2024</span>
            <span className="uppercase">About More</span>
          </div>

</div>
</div>
  );
}

export default App;
