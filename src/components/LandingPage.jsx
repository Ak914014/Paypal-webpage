import React from "react";
import { watch } from "../assets/SVGimages.jsx";

export const LandingPage = () => {
  return (
    <div>
      <div className='w-full tracking-tighter h-[70vh] bg-[#111660] font-["Segoe "] px-28 py-24'>
        <h1 className=" text-3xl font-semibold max-[770px]:text-4xl text-[#97ABD3]">
          PayPal Developer
        </h1>
        <p className="  max-[770px]:text-xl text-[#F9FCFD] mt-[2vw] mr-2 leading-[4vw] font-semibold text-[3vw]">
          Build a payment solution that's right for you with PayPal for
          Developers
        </p>
        <p className="text-[#F9FCFD] mt-[2vw] max-[770px]:text-lg text-[1.4vw] w-5/6">
          Whether you're building an online, moblie or in-person payment
          solutuion, create a PayPal Developer account and find the resources
          you need to test & go live.
        </p>
        <button className="bg-[#FFC33A] p-2 px-7 mt-[2vw] text-[1.7vw]  rounded-3xl">
          Get API Credentials
        </button>
      </div>
      <div className="w-[70%]  flex gap-5 bg-[#FAFAFA] h-14 rounded-3xl mt-[3vw] ml-[15vw] p-4">
        <div className="bg-[#7252CC]  h-5 flex items-center justify-around w-14 px-1 rounded-md">
          <div className=" inline-block  text-white w-4 ">{watch}</div>
          <h1 className="   inline-block text-white text-sm">New</h1>
        </div>
        <p className="max-[770px]:hidden inline-block ">Get pre-built checkout code with our <p className=" inline-block text-[#4B8DBF]">Integration Builder .</p></p>
      </div>
    </div>
  );
};
