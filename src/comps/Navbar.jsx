import React, { useEffect, useState } from "react";
import ColorToggle from "./ColorToggle";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 600) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full text-white h-[50px] flex justify-between items-center fixed z-50 ${
        scrolled ? "bg-[#120d14]" : "bg-transparent"
      }`}
    >
      <div>
        <ul className="list-none hidden sm:flex flex-row gap-4 mx-3">
          <li
            className={`${
              active === "about" ? "text-white" : "text-gray-300"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("about")}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`${
              active === "skills" ? "text-white" : "text-gray-300"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("skills")}
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            className={`${
              active === "projects" ? "text-white" : "text-gray-300"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("projects")}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            className={`${
              active === "experience" ? "text-white" : "text-gray-300"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("experience")}
          >
            <a href="#experience">Experience</a>
          </li>
          {/* <li
            className={`${
              active === "interests" ? "text-white" : "text-gray-300"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("interests")}
          >
            <a href="#interests">Interests</a>
          </li> */}
          <li
            className={`${
              active === "contact" ? "text-white" : "text-gray-300"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("contact")}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* Menu Icon */}
      <div className="sm:hidden flex flex-1 justify-start items-center mx-4">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black bg-opacity-70 absolute top-10 left-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-3">
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "about" ? "text-white" : "text-gray-300"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive("about");
              }}
            >
              <a href="#about">About</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "skills" ? "text-white" : "text-gray-300"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive("skills");
              }}
            >
              <a href="#skills">Skills</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "projects" ? "text-white" : "text-gray-300"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive("projects");
              }}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "experience" ? "text-white" : "text-gray-300"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive("experience");
              }}
            >
              <a href="#experience">Experience</a>
            </li>
            {/* <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "interests" ? "text-white" : "text-gray-300"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive("interests");
              }}
            >
              <a href="#interests">Interests</a>
            </li> */}
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "contact" ? "text-white" : "text-gray-300"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive("contact");
              }}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <ColorToggle />
    </nav>
  );
};

export default Navbar;
