import React from "react";
import { devToolsImg ,apiExe,sandBox,demoPortal } from "../assets/SVGimages";

const itmes = [
    {
        logo:demoPortal,
        heading: "Demo Portal",
        info:"Explore PayPal product experiences from the customer's perspective.",
        list:"View Demos"
    },
    {
        logo:apiExe,
        heading: "API Executor",
        info:"Try out PayPal API requests and responses in multiple programming languages.",
        list:"Try APIs"
    },
    {
        logo:sandBox,
        heading: "Sandbox Testing Guide",
        info:"Learn how to test and go live with your integration with the PayPal Sandbox.",
        list:"Learn More"
    },
]
const DevToolsAndRes = () => {
  return (
    <div className=" bg-[#FFF0D7] w-full flex  px-[13vw] py-16">
      <div className=" w-1/2 h-screen">
        <div className=" mt-10 w-full  ">
          <h1 className="text-4xl w-2/3 font-semibold mt-6 ">
            Developer Tools & Resources
          </h1>
          {devToolsImg}
        </div>
      </div>
      <div className="w-1/2">
        {itmes.map((item,i)=>(
            <div className=" mt-10 flex px-8 py-4 rounded-2xl bg-[#ffff]">
          <div className=" mt-2 max-[770px]:hidden w-1/6 inline-block ">
          {item.logo}
          </div>
          <div className=" inline-block w-4/5">
            <h1 className="text-2xl font-semibold ">{item.heading}</h1>
            <p  className="text-[#515354] text-lg leading-5 max-[770px]:hidden mt-8 ">{item.info}</p>
             <p className="text-lg font-bold mt-2 hover:underline hover:text-[#2E5B83] text-[#1072EB]">{item.list}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default DevToolsAndRes;
