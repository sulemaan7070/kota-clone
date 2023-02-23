import React from "react";
import { GrFacebook } from "react-icons/gr";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
import img1 from "../assets/featured/dan_grey@2x.webp";
import img2 from "../assets/featured/the-drum-logo.webp";
import img3 from "../assets/featured/Clutch_grey@2x.webp";
import img4 from "../assets/featured/awward_grey@2x.webp";
import img5 from "../assets/featured/css-design-awards.webp";
import logo from "../assets/other/Kota_logo_white-1.svg";

function Footer() {
  const arr = [
    "Work",
    " Services",
    "Agency",
    "Blog",
    "Contact",
    "FAQs",
    "Privacy Policy",
  ];
  return (
    <footer className="bg-black/90 flex flex-row-reverse ">
      <div className=" w-[70%] mx-auto lg:w-[100%] ">
        <p className="text-pink-600 text-center">Follow</p>
        <ul className="flex justify-center items-center">
          <li className="social-icon">
            <GrFacebook />
          </li>
          <li className="social-icon">
            <FaTwitter />
          </li>
          <li className="social-icon">
            <FaPinterest />
          </li>
          <li className="social-icon">
            <FaInstagram />
          </li>
        </ul>
        <div className="flex justify-center items-center flex-col">
          <p className="text-pink-600 my-2 text-center">
            sign up to our news letter
          </p>
          <a
            className="text-white font-bold my-4 text-3xl text-center"
            href="#"
          >
            hello@kota.co.uk
          </a>
          <img className="lg:pl-20" src={logo} alt="" />
        </div>
        <div
          data-scroll-section
          className="flex flex-wrap justify-center items-center lg:flex pb-10 pt-4"
        >
          <img
            className="object-contain lg:w-[8%] w-[20%]  mx-4"
            src={img1}
            alt="dan-grey"
          />
          <img
            className="object-contain lg:w-[8%] w-[20%]   mx-4"
            src={img2}
            alt="drum"
          />
          <img
            className="object-contain lg:w-[8%] w-[20%]   mx-4"
            src={img3}
            alt="clutch"
          />
          <img
            className="object-contain lg:w-[8%] w-[20%]   mx-4"
            src={img4}
            alt="awwwards"
          />
          <img
            className="object-contain lg:w-[8%] w-[20%]   mx-4"
            src={img5}
            alt="css-deign"
          />
        </div>
      </div>
      {/* <div className="mx-10">
        <p className="text-white text-xl underline text-bold">Home</p>
        <ul className=" text-white text-xl text-bold">
          {arr.map((li, i) => {
            return <li key={i}>{li}</li>;
          })}
        </ul>
      </div> */}
    </footer>
  );
}

export default Footer;
