import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import serviceImg1 from "../assets/other/websites.webp";
import serviceImg2 from "../assets/other/branding-wogan-web.webp";
import serviceImg3 from "../assets/other/marketing.webp";
function Services() {
  const [selected, setSelected] = useState(1);
  return (
    <div
      id="service"
      className="h-[100dvh] lg:flex justify-center items-center "
    >
      <div className=" w-[90%]  lg:w-[45%] mx-auto">
        <h3 className="text-lg  text-white">our services</h3>
        <span
          onClick={() => setSelected(1)}
          className={
            selected === 1
              ? "mr-5 block my-5 text-2xl font-extrabold md:text-3xl lg:text-5xl text-white cursor-pointer"
              : "mr-5 block my-5 text-2xl font-extrabold md:text-3xl lg:text-5xl text-gray-600 cursor-pointer"
          }
        >
          Website Design & Development
        </span>
        <span
          onClick={() => setSelected(2)}
          className={
            selected === 2
              ? "mr-5 block my-5 text-2xl font-extrabold md:text-3xl lg:text-5xl text-white cursor-pointer"
              : "mr-5 block my-5 text-2xl font-extrabold md:text-3xl lg:text-5xl text-gray-600 cursor-pointer"
          }
        >
          Branding
        </span>
        <span
          onClick={() => setSelected(3)}
          className={
            selected === 3
              ? "mr-5 block my-5 text-2xl font-extrabold md:text-3xl lg:text-5xl text-white cursor-pointer"
              : "mr-5 block my-5 text-2xl font-extrabold md:text-3xl lg:text-5xl text-gray-600 cursor-pointer"
          }
        >
          Digital Marketing
        </span>
        <button className="rounded-3xl px-6 py-3 border-2 mt-5 hover:text-pink-600 hover:bg-white transition-all border-white text-white">
          {" "}
          view all services
        </button>
      </div>
      <div className=" w-[90%] mt-10 lg:mt-0 lg:w-[50%] mx-auto">
        <img
          src={
            selected === 1
              ? serviceImg1
              : selected === 2
              ? serviceImg2
              : selected === 3
              ? serviceImg3
              : null
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default Services;
