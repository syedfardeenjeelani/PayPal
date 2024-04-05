import React from "react";
import TextCards from "./TextCards";

function ImageText2({ src, heading, content }) {
  return (
    <div className="bg-white lg:h-[110vh] w-[100%] py-[50px] lg:py-0 flex justify-center flex-col items-center gap-16  ">
      <div className=" flex lg:flex-row flex-col justify-center gap-8">
        <div className="flex  text-center lg:text-left   lg:w-[43.5vw] flex-col justify-center lg:pl-9 gap-5">
          {" "}
          <h1 className="font-semibold  text-3xl">{heading}</h1>
          <p className=" font-normal px-[16px]  sm:px-0 text-[18px]">
            {content}
          </p>
        </div>
        <div className="px-[40px]">
          <img
            className="lg:h-[60vh] lg:w-[38vw] rounded-lg lg:rounded-3xl"
            src={src}
            alt=""
          />{" "}
        </div>
      </div>
      <div className="flex  lg:pl-0 lg:flex-row flex-col lg:pr-[2.5rem] gap-[40px] ">
        <TextCards
          title="Orchestrate multiple payments partners
      "
          content="You always maintain full control of your data and configure partner access.
          
         "
        />
        <TextCards
          title="Easily create secure data connections"
          content=" 
        
          Use just a few snippets of code to securely share data with partners you choose."
        />
        <TextCards
          title="Streamline reconciliation
        
       
        "
          content="Enable separate accounts to connect and share information.
          
          "
        />
        <TextCards
          title=" Unlock new sales channels"
          content="Connect to commercial partners so you can accept payments on their website"
        />
      </div>
    </div>
  );
}

export default ImageText2;
