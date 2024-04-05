import React from "react";
import { paypalImag, SearchImage, menuBar } from "../assets/SVGimages.jsx";
export const Navbar = () => {
  const items = ["Docs", "APIs & SDKs", "Tools", "Support"];

  return (
    <nav className="bg-zinc-50 p-2 px-4 flex flex-wrap items-center fixed w-full ">
      <div className="flex w-full md:w-1/2">
        <div className="items-center mr-7 flex-shrink-0 ml-7 max-[650px]:ml-0 ">
          {/* Paypal logo  */}
          {paypalImag}
        </div>
        {/* Search button */}
        <div className="w-full md:w-28  hover:border-blue-300 relative inline-block border-[#0070E0] cursor-pointer text-sm border-2 ml-5 md:ml-0 mt-4 md:mt-0 sm:ml-0 max-[650px]:hidden sm:mt-0 rounded-2xl font-semibold">
          <div className="w-6 mt-1 ml-3 inline-block">{SearchImage} </div>
          <h1 className=" inline-block text-[#0070E0] ml-2 text-[16px] absolute top-2 ">
            Search
          </h1>
        </div>
        <div className=" ml-[50vw] max-[400px]:ml-20 min-[770px]:hidden  ">
          <button className=" w-[25px] ">{menuBar}</button>
        </div>
      </div>

      <div className="flex w-full max-[770px]:hidden md:w-1/2 items-center mt-4 md:mt-0">
        <div className="ml-0  max-[900px]:ml-0 ">
          <ul className="flex ">
            {items.map((itme, i) => (
              <li key={i} className="mr-6 md:mr-7   ">
                <a
                  href="/"
                  className="text-black text-[1.2vw] max-[900px]:text-[1.7vw] font-bold hover:text-gray-300"
                >
                  {itme}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Your login button */}
          <button className="bg-[#152B8E] ml-4 md:ml-10 hover:bg-[#0070E0] text-white text-[1vw] py-3 px-6 rounded-3xl focus:outline-none focus:shadow-outline">
            Login in to Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
};
