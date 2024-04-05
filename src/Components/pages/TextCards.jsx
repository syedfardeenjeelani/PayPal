import React from "react";

function TextCards({ title, content, button, icon }) {
  return (
    <div className="flex flex-col items-center w-full max-w-[20.5rem] justofy-center  px-4 py-2 ">
      <div className="flex  flex-col  text-center lg:text-left  w-[16rem]">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className=" text-base">{content}</p>
        <p className="text-blue-600 cursor-pointer  pt-[10px] sm:pl-0 pl-10 flex items-center gap-3">
          {button}
          {icon}
        </p>
      </div>
    </div>
  );
}

export default TextCards;
