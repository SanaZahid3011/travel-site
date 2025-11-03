import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuIcon, setmenuIcon] = useState(false);

  const onMenuIcon = () => {
    setmenuIcon(!menuIcon);
  };
  return (
    <nav className="absolute top-9 left-0 w-full flex justify-between items-center p-6 bg-black/4 text-white shadow-lg backdrop-blur-sm z-20">
      <h1 className="text-2xl ml-[10px] font-bold sm:ml-[30px]">TravelSite</h1>
      <ul className="hidden lg:block lg:flex lg:space-x-8 ">
        <li className="hover:text-accentt cursor-pointer transition">
          {" "}
          <Link to="/home">Home</Link>
        </li>
        <li className="hover:text-accentt cursor-pointer transition">
          Zayarat pakage{" "}
        </li>
        <li className="hover:text-accentt cursor-pointer transition">
          Ashura oblige
        </li>
        <li className="hover:text-accentt cursor-pointer transition">
          Arbyenn{" "}
        </li>
        <li className="hover:text-accentt cursor-pointer transition">Umrah </li>
        <li className="hover:text-accentt cursor-pointer transition">About</li>
        <li className="hover:text-accentt mr-[20px] cursor-pointer transition">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="text-[2rem] sm:mr-[30px] lg:hidden">
        {" "}
        <i class="fa-solid fa-bars " onClick={onMenuIcon}></i>
      </div>

      <div
        className={`
    transition-all duration-700 ease-in-out overflow-hidden lg:hidden
    backdrop-blur-md bg-accentt absolute top-[92px] left-0 w-full z-50
    ${
      menuIcon
        ? "max-h-[500px] opacity-100 visible"
        : "max-h-0 opacity-0 invisible"
    }
  `}
      >
        <ul className="pl-[3rem] pt-[1rem] pb-[1rem] space-y-2 text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Our Work</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
