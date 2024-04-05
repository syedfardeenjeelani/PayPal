import React from "react";

function Card({ src, heading, content, button }) {
  return (
    <div className="shadow-2xl gap-5 md:w-[30vw] md:h-[84vh] py-8 z-[100]  bg-white flex flex-col  ">
      <img className="w-full md:h-[190px] object-cover px-8" src={src} alt="" />
      <div className="flex flex-col px-7 mt-4">
        <h1 className="text-[27px] font-bold">{heading}</h1>
        <p className="mt-2 text-[19px]">{content}</p>
      </div>
      <div className="flex px-7 mt-[8rem]">
        <button
          type="button"
          className="text-white bg-[#3556a4] px-[25px]  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full py-[8px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default Card;
