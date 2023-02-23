import React from "react";
import heroImg from "../assets/other/home-kota.webp";
import img1 from "../assets/featured/dan_grey@2x.webp";
import img2 from "../assets/featured/the-drum-logo.webp";
import img3 from "../assets/featured/Clutch_grey@2x.webp";
import img4 from "../assets/featured/awward_grey@2x.webp";
import img5 from "../assets/featured/css-design-awards.webp";

function Hero() {
  return (
    <section>
      <div className="md:flex md:w-[90%] md:mx-auto md:my-8">
        <img
          className=" mx-auto w-[70%] md:w-[30%] lg:w-[32%] mb-10 md:mb-0"
          src={heroImg}
          alt=""
        />
        <div className="w-[80%] mb-10 md:mb-0 md:w-[30rem]  mx-auto md:flex md:flex-col md:justify-center md:items-start">
          <h1 className="text-center text-black/75 md:text-left text-3xl md:text-7xl md:mb-5 font-bold">
            Rebel against boring
          </h1>
          <p className="text-center  text-black/75 md:text-left text-lg md:text-xl">
            We’re a creative web design agency based in London that crafts
            beautiful and original websites for brands who{" "}
            <span className="text-pink-600">refuse to blend in. </span>{" "}
          </p>
        </div>
      </div>
      {/**featured */}
      <div
        data-scroll-section
        className="hidden lg:flex w-[95%] mx-auto mt-[4rem] mb-[7rem]"
      >
        <img className="object-contain w-[8%] mx-4" src={img1} alt="dan-grey" />
        <img className="object-contain w-[8%] mx-4" src={img2} alt="drum" />
        <img className="object-contain w-[8%] mx-4" src={img3} alt="clutch" />
        <img className="object-contain w-[8%] mx-4" src={img4} alt="awwwards" />
        <img
          className="object-contain w-[8%] mx-4"
          src={img5}
          alt="css-deign"
        />
      </div>
      <button
        className="fixed bottom-12 right-4 rounded-3xl bg-pink-500 text-white
      hover:text-pink-600 hover:bg-white px-[1rem] lg:px-[2rem] border-[1px] transition-all hover:border-pink-500 py-2 lg:py-4"
      >
        start your project
      </button>
    </section>
  );
}

export default Hero;
