import design1 from "../assets/designs/homepage-lovebrands.webp";
import design2 from "../assets/designs/homepage-tribepad.webp";
import design3 from "../assets/designs/homepage-sym.webp";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import React from "react";
import { motion } from "framer-motion";

import { useLayoutEffect, useEffect, useRef } from "react";

function WhyUs() {
  const myRef = useRef(null);
  useEffect(() => {
    const myElement = myRef.current;
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return (
    <div className="wrappper mb-32 w-[88%] mx-auto md:w-[75%] md:mx-auto">
      <div>
        <h3 ref={myRef} className=" mt-4 mb-2">
          <span className="text-pink-600 text-start">01</span>{" "}
          <span className="text-2xl md:text-3xl lg:text-5xl font-bold  text-black/75">
            Beauty
          </span>
        </h3>

        <p className=" text-lg md:text-2xl lg:text-3xl py-4">
          Developing stunning one-of-a-kind digital design that catches people’s
          eye and brings your brand to life online.
        </p>
        <img
          id="my-image"
          className="w-[85%] mx-auto rounded-lg"
          src={design1}
          alt="design1"
        />
      </div>
      {/**2 */}
      <div>
        <h3 className="mt-4 mb-2">
          <span className="text-pink-600 text-start">02</span>{" "}
          <span className="text-2xl md:text-3xl lg:text-5xl font-bold  text-black/75">
            Thought
          </span>
        </h3>

        <p className="text-lg md:text-2xl lg:text-3xl py-4">
          As a web design agency, we love to deliver meaningful and intuitive
          user experiences that build trust with your target audience.
        </p>
        <img
          className="w-[85%] mx-auto rounded-lg"
          src={design2}
          alt="design2"
        />
      </div>
      {/**3 */}
      <div>
        <h3 className="mt-4 mb-2">
          <span className="text-pink-600 text-start">03</span>{" "}
          <span className="text-2xl md:text-3xl lg:text-5xl font-bold  text-black/75">
            Impact
          </span>
        </h3>

        <p className="text-lg md:text-2xl lg:text-3xl py-4">
          Designing tailor made solutions that resonate with your customers and
          drives them to act.
        </p>
        <img
          className="w-[85%] mx-auto rounded-lg"
          src={design3}
          alt="design3"
        />
      </div>
    </div>
  );
}

export default WhyUs;
