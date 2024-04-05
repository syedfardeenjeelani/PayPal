import React from "react";

function Footer() {
  return (
    <div className="lg:h-[30vh] h-[100vh] mt-[300px]  pb-16 lg:pb-0 lg:mt-0 flex flex-col justify-center">
      <div className="flex lg:pl-6 pl-[7px] ">
        <img
          className="w-[5rem] "
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div className="justify-center flex items-center flex-col">
        <div className="flex  w-[95vw] lg:border-gray-400 lg:border-b-[2px] pb-[10px]   justify-between">
          <div className="list-none gap-[24px] text-[18px] font-semibold text-[#012169] flex flex-col lg:flex-row ">
            <li className="hover:text-gray-500 cursor-pointer">Help</li>
            <li className="hover:text-gray-500 cursor-pointer">Contact</li>
            <li className="hover:text-gray-500 cursor-pointer">Fees</li>
            <li className="hover:text-gray-500 cursor-pointer">Security</li>
            <li className="hover:text-gray-500 cursor-pointer">Apps </li>
            <li className="hover:text-gray-500 cursor-pointer">Shops</li>
            <li className="hover:text-gray-500 cursor-pointer">Enterprise</li>
            <li className="hover:text-gray-500 cursor-pointer">Partners</li>
            <li className="hover:text-gray-500 cursor-pointer">Feedback</li>
          </div>
          <div className="hover:text-gray-500 cursor-pointer">
            <select name="flags" className="w-[3rem] outline-none" id="">
              <option value="India"> 🏳️‍⚧️</option>
              <option value="sa">🏁</option>
            </select>
          </div>
        </div>
        <div className="flex  w-[95vw] pt-[10px] flex-col lg:flex-row lg:justify-between">
          <div className="list-none lg:flex-row flex-col gap-[24px] text-[18px] font-semibold text-[#012169] flex">
            <li className="hover:text-gray-500 cursor-pointer">About</li>
            <li className="hover:text-gray-500 cursor-pointer">Newscreen</li>
            <li className="hover:text-gray-500 cursor-pointer">Jobs</li>
            <li className="hover:text-gray-500 cursor-pointer">
              Investor Relations
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              Values In Action{" "}
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              Public Policy
            </li>
            <li className="hover:text-gray-500 cursor-pointer">Sitemap</li>
          </div>
          <div className="list-none gap-[24px] text-[18px] font-semibold text-[#012169] flex">
            <li className="hover:text-gray-500 cursor-pointer">
              Accessibility
            </li>
            <li className="hover:text-gray-500 cursor-pointer">Cookies</li>
            <li className="hover:text-gray-500 cursor-pointer">Privacy</li>
            <li className="hover:text-gray-500  cursor-pointer">Legal</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
