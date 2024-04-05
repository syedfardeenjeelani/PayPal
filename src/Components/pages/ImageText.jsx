import React from "react";
import { SlArrowRightCircle } from "react-icons/sl";
import TextCards from "./TextCards";

function ImageText({ src, heading, content, button, icon }) {
  return (
    <div className="bg-gray-100  lg:h-[80vh] w-[100%] py-[50px] lg:py-0 flex justify-center flex-col items-center gap-16  ">
      <div className=" flex lg:flex-row flex-col justify-center gap-8">
        <div className="px-[40px]">
          <img
            className="lg:h-[60vh] lg:w-[38vw] rounded-lg lg:rounded-3xl"
            src={src}
            alt=""
          />
          {"  "}
        </div>

        <div className="flex  text-center lg:text-left   lg:w-[43.5vw] flex-col justify-center lg:pl-9 gap-5">
          {" "}
          <h1 className="font-semibold text-2xl  sm:text-3xl">{heading}</h1>
          <p className=" font-normal px-[16px]  sm:px-0 text-[18px]">
            {content}
          </p>
          <p className="text-blue-600 pt-[10px] sm:pl-0 pl-10  cursor-pointer items-center gap-3 md:flex hidden">
            {button}
            {icon}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageText;
