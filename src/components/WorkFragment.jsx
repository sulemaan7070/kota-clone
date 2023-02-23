import React from "react";

function OneWork({ liArr, imgSrc, title, info }) {
  return (
    <div className="w-[90%] flex flex-col justify-center items-center mx-auto mt-5 lg:mt-20">
      <img className="w-[70%] lg:w-[100%] mb-2 lg:mb-4" src={imgSrc} alt="" />
      <ul className="text-pink-600 flex flex-wrap mb-2 lg:mb-4">
        {liArr.map((liText, i) => {
          return (
            <li key={i} className="work-li">
              {liText}
            </li>
          );
        })}
      </ul>
      <h3 className="text-white my-5 hover:text-pink-600 text-4xl lg:text-6xl font-bold">
        {title}
      </h3>
      <p className="text-white lg:text-base">{info}</p>
    </div>
  );
}

export default OneWork;
