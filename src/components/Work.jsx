import React from "react";
import workImg from "../assets/other/home_work_logo.svg";
import woganCoffe from "../assets/work/Image-wogan-43.webp";
import OneWork from "./WorkFragment";
import tangerine from "../assets/work/tangerine.webp";
import yachtImg from "../assets/work/super yacht.webp";
import bellsant from "../assets/work/bellsant.webp";
import martinBuilding from "../assets/work/martinBUilding.webp";
import boounceImg from "../assets/work/bounce.webp";
import littleCoffeeImg from "../assets/work/little coffee.webp";
import matchroomImg from "../assets/work/matchroom.webp";
import jamieImg from "../assets/work/jamie oliver.webp";
import stoliImg from "../assets/work/stoli group.webp";
function Work() {
  return (
    <div className="bg-black/90 min-h-screen ">
      <div className="lg:w-[75%] mx-auto flex flex-col justify-center items-center lg:flex-row">
        <img className=" pt-10 lg:pt-15 " src={workImg} alt="" />
        <h1 className="text-3xl md:text-5xl lg:text-[5rem] font-extrabold text-white lg:pt-[26rem] lg:px-36">
          Shit-hot work for hot-shot brands
        </h1>
        {/**showcase */}
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:w-[85%] lg:mx-auto pb-[6rem]">
        {/**wogan coffee */}
        <OneWork
          imgSrc={woganCoffe}
          title={"Wogan coffee"}
          liArr={["Branding", "E-commerce", "Marketing", "Video", "web design"]}
          info="We completely transformed the image of Bristol's finest coffee company."
        />
        <OneWork
          title="Tangerine"
          info="We took on the challenge of creating the new website for tangerine, a global design pioneer."
          liArr={["webdesign", "web development"]}
          imgSrc={tangerine}
        />
        <OneWork
          title="SuperYachtsMonaco"
          info="We crafted a beautiful website for the boutique yacht brokerage, SuperYachtsMonaco."
          liArr={["webdesign", "web development"]}
          imgSrc={yachtImg}
        />
        <OneWork
          title="BellSant"
          info="We fully branded a pioneering health care in USA"
          liArr={["ART", "DIRECTIONBRANDINGWEB", "DESIGNWEB", "DEVELOPMENT"]}
          imgSrc={bellsant}
        />
        <OneWork
          title="Martin Building"
          info="We created a cutting edge platform for San Francisco-based firm Martin Building."
          liArr={["BRANDINGWEB", "DESIGNWEB", "DEVELOPMENT"]}
          imgSrc={martinBuilding}
        />
        <OneWork
          title="Bounce"
          info="We designed a highly animated and playful website for Bounce, the home of ping pong."
          liArr={["WEB DESIGNWEB", " DEVELOPMENT"]}
          imgSrc={boounceImg}
        />
        <OneWork
          title="Little's Coffee"
          info="We designed an E-Commerce platform for Little's, a family run coffee business."
          liArr={["WEB DESIGNWEB", " DEVELOPMENT", "E-COMMERCE"]}
          imgSrc={littleCoffeeImg}
        />
        <OneWork
          title="Matchroom"
          info="We put the punch into one of the biggest sports promoters in the world."
          liArr={["WEB DESIGNWEB", " DEVELOPMENT", "E-COMMERCE"]}
          imgSrc={matchroomImg}
        />
        <OneWork
          title="Jamie Oliver - 7 Ways"
          info="We created a campaign packed full of impact for Jamie's new book, 7 Ways."
          liArr={["WEB DESIGNWEB", " DEVELOPMENT", "VIDEO"]}
          imgSrc={jamieImg}
        />
        <OneWork
          title="Stoli Group"
          info="We refined this brand's positioning in the premium alcoholic beverage market."
          liArr={["BRANDING", " DEVELOPMENT", "E-COMMERCE"]}
          imgSrc={stoliImg}
        />
      </div>
    </div>
  );
}

export default Work;
