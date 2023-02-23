import React, { useState } from "react";
import logo from "../assets/other/Kota_logo_white-1.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFacebook } from "react-icons/gr";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
function Header() {
  const [menu, menuState] = useState(false);
  {
    menu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }
  return (
    <header className="flex items-center w-[100%] mx-auto py-[3.5rem]  justify-end sticky top-0">
      {menu && (
        <div className="fixed  h-[100vh] w-[100%] top-0 bg-pink-500">
          <div className="justify-center mt-[10rem] items-center flex ml-10 ">
            <ul className=" text-5xl w-[100%] lg:mr-[20rem] lg:w-auto lg:text-7xl font-extrabold cursor-pointer  ">
              <li className="text-pink-700 hover:text-white">Work</li>
              <li className="text-pink-700 hover:text-white">services</li>
              <li className="text-pink-700 hover:text-white">Agency</li>
              <li className="text-pink-700 hover:text-white">Blog</li>
              <li className="text-pink-700 hover:text-white">Contact</li>
              <li className="text-pink-700 hover:text-white">Carrers</li>
            </ul>
          </div>
          <ul className="flex absolute lg:bottom-20 bottom-28  left-20 justify-center items-center">
            <li className="social-icon">
              <GrFacebook size="2rem" />
            </li>
            <li className="social-icon">
              <FaTwitter size="2rem" />
            </li>
            <li className="social-icon">
              <FaPinterest size="2rem" />
            </li>
            <li className="social-icon">
              <FaInstagram size="2rem" />
            </li>
          </ul>
        </div>
      )}
      <img
        className="absolute grayscale top-10 left-5 brightness-75 mix-blend-exclusion"
        src={logo}
        alt=""
      />
      <h2 className="mix-blend-difference hidden lg:flex text-2xl mx-2 font-bold text-black/75">
        {" "}
        Work
      </h2>
      <h2 className="mix-blend-difference hidden lg:flex  text-2xl mx-2 font-bold text-black/75">
        About
      </h2>
      <button
        onClick={() => menuState((prev) => !prev)}
        className="text-black mr-5 lg:mr-20 z-40 w-10 h-10 relative focus:outline-none "
      >
        {!menu ? <GiHamburgerMenu size="2rem" /> : <GrClose size="2rem" />}
      </button>
    </header>
  );
}

export default Header;
