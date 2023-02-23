import React, { useEffect } from "react";
import introImg from "../assets/other/intro-image.webp";
function Hero2() {
  useEffect(() => {
    document.getElementById("vid").play();
  }, []);
  return (
    <section>
      <div className="lg:flex">
        <div className="lg:w-[50%]">
          <img className="lg:hidden" src={introImg} alt="" />
          <video
            className="hidden lg:block"
            playsInline
            autoPlay
            muted
            loop
            id="vid"
            src="video.mp4"
          ></video>
        </div>

        <div className="lg:w-[50%]  text-black/75 lg:flex lg:justify-center lg:items-center lg:flex-col">
          <h2 className="text-2xl md:text-3xl my-10 lg:text-5xl font-bold mx-5">
            Making brands a damn site better
          </h2>
          <p className="text-lg  text-black/75 lg:text-xl mx-5">
            Let’s face it, first impressions matter. Your website’s an
            opportunity to wow your audience, so why waste it with bad design?
            Because brands win new fans when they’re brave enough to go beyond
            their creative comfort zone.
          </p>
        </div>
      </div>
      <h3 className="text-2xl  text-black/75 md:text-3xl lg:text-5xl font-bold lg:w-[70%] lg:mx-auto my-10 mx-4 lg:my-[15rem]">
        Our creative digital agency designs and develops bespoke websites with{" "}
        <br />
        <span className="text-pink-600">three things in mind;</span>
      </h3>
    </section>
  );
}

export default Hero2;
