import design1 from "../assets/designs/homepage-lovebrands.webp";
import design2 from "../assets/designs/homepage-tribepad.webp";
import design3 from "../assets/designs/homepage-sym.webp";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useEffect, useRef } from "react";

function WhyUs() {
  const imageRef = useRef(null);
  useEffect(() => {
    const id = document.getElementById("1");
    const id2 = document.getElementById("2");
    const end = document.getElementById("end");
    gsap.registerPlugin(ScrollTrigger);

    const image = imageRef.current;

    {
      /**for first div to display first image */
    }
    ScrollTrigger.create({
      trigger: id,
      start: "top center",
      end: "400px center",
      scrub: true,
      name: "first-image",

      onEnter() {
        gsap.to(image, {
          opacity: 0,
          onComplete: () => {
            image.src = design1;
            gsap.to(image, { opacity: 1 });
          },
        });
      },
      onLeave() {
        gsap.to(image, {
          opacity: 0,
          onComplete: () => {
            image.src = design2;
            gsap.to(image, { opacity: 1 });
          },
        });
      },
      repeat: -1,
    });
    {
      /**for first div to display second image */
    }
    ScrollTrigger.create({
      trigger: id2,
      start: "bottom center",
      scrub: true,
      onEnter() {
        gsap.to(image, {
          opacity: 0,
          onComplete: () => {
            image.src = design3;
            gsap.to(image, { opacity: 1 });
          },
        });
      },
      onLeave() {
        gsap.to(image, {
          opacity: 0,
          onComplete: () => {
            image.src = null;
            gsap.to(image, { opacity: 1 });
          },
        });
      },
      repeat: -1,
    });
    {
      /**to end animation in case user scrolls reverse */
    }
    ScrollTrigger.create({
      trigger: end,
      start: "top center",
      end: "-400px center",
      scrub: true,

      onEnter() {
        gsap.to(image, {
          opacity: 0,
          onComplete: () => {
            image.src = null;
            gsap.to(image, { opacity: 1 });
          },
        });
      },
      onLeave() {
        gsap.to(image, {
          opacity: 0,
          onComplete: () => {
            image.src = null;
            gsap.to(image, { opacity: 1 });
          },
        });
      },
      repeat: -1,
    });
  }, []);
  return (
    <>
      <h3
        id="end"
        className="text-2xl  text-black/75 md:text-3xl lg:text-5xl font-bold lg:w-[70%] lg:mx-auto my-10 mx-4 lg:my-[15rem]"
      >
        Our creative digital agency designs and develops bespoke websites with{" "}
        <br className="hidden lg:flex" />
        <span className="text-pink-600">three things in mind;</span>
      </h3>
      <section className="flex">
        <div className="wrappper mb-32 w-[88%] mx-auto md:w-[75%] lg:ml-3  lg:w-[50%] md:mx-auto">
          <div id="1" className="lg:h-[70dvh]">
            <h3 className=" mt-4 mb-2">
              <span className="text-pink-600 text-start">01</span>{" "}
              <span className="text-2xl md:text-3xl lg:text-5xl font-bold  text-black/75">
                Beauty
              </span>
            </h3>

            <p className=" text-lg md:text-2xl  py-4">
              Developing stunning one-of-a-kind digital design that catches
              people’s eye and brings your brand to life online.
            </p>
            <img
              id="my-image"
              className="w-[85%] mx-auto rounded-lg lg:hidden"
              src={design1}
              alt="design1"
            />
          </div>
          {/**2 */}
          <div id="2" className="lg:h-[70dvh]">
            <h3 className="mt-4 mb-2">
              <span className="text-pink-600 text-start">02</span>{" "}
              <span className="text-2xl md:text-3xl lg:text-5xl font-bold  text-black/75">
                Thought
              </span>
            </h3>

            <p className="text-lg md:text-2xl  py-4">
              As a web design agency, we love to deliver meaningful and
              intuitive user experiences that build trust with your target
              audience.
            </p>
            <img
              className="w-[85%] mx-auto rounded-lg lg:hidden"
              src={design2}
              alt="design2"
            />
          </div>
          {/**3 */}
          <div id="3" className="lg:h-[70dvh]">
            <h3 className="mt-4 mb-2">
              <span className="text-pink-600 text-start">03</span>{" "}
              <span className="text-2xl md:text-3xl lg:text-5xl font-bold  text-black/75">
                Impact
              </span>
            </h3>

            <p className="text-lg md:text-2xl  py-4">
              Designing tailor made solutions that resonate with your customers
              and drives them to act.
            </p>
            <img
              className="w-[85%] mx-auto rounded-lg lg:hidden"
              src={design3}
              alt="design3"
            />
          </div>
        </div>
        <div className="hidden w-[50%] lg:block">
          <img
            ref={imageRef}
            className="fixed w-[45%] rounded-lg top-[25%]"
            src=""
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default WhyUs;
