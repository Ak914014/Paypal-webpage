import React from "react";
import { looking } from "../assets/SVGimages";

const item = [
  "Reference",
  "PayPal.com",
  "Privacy",
  "Cookies",
  "Support",
  "Legal",
  "Contact",
];
const Looking = () => {
  return (
    <div className="w-full  bg-[#FFFFFF] ">
      <div className="flex mb-[12vw] mt-[12vw] px-[14vw]">
        <div className="w-2/3  ">
          <h1 className="text-4xl font-semibold">
            Looking for something else?
          </h1>
          <p class=" text-[#515354] max-[770px]:hidden mt-6  font-medium">
            If you need additional help, check out our support articles,
            community resources, and more.
          </p>
          <button className="mt-10 bg-[#003087] font-bold hover:bg-[#0070E0]  rounded-3xl text-white py-2 px-10">
            Find Support
          </button>
          <div className="text-lg font-semibold mt-6">
            FAQs &nbsp; Community &nbsp; Blog &nbsp; Docs &nbsp; Archive
          </div>
        </div>
        <div className="w-1/3">
          <div className="max-[770px]:hidden ">{looking}</div>
        </div>
     
      </div>
      <div className=" w-full  -mt-[6vw] mb-10">
        <ul className="ml-[40vw] max-[770px]:ml-0">
            {item.map((items, i)=>(
                <li className=" max-[770px]:ml-3 ml-10 text-lg font-semibold underline cursor-pointer inline-block">{items}</li>
            ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Looking;
