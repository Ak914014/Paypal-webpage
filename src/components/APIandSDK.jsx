import React from "react";
import { api, sdk, wh,gitHub } from "../assets/SVGimages.jsx";

const items = [
  {
    logo: api,
    heading: "APIs",
    info: "PayPal offers APIs for new and legacy integrations.",
    list: ["REST APIs", "NVP/SOAP APIs", "Braintree GraphQL API"],
  },
  {
    logo: sdk,
    heading: "SDKs",
    info: "Try our SDKs to streamline the integration experience.",
    list: ["JavaScript SDK", "Donate SDK", "Braintree SDKs"],
  },
  {
    logo: wh,
    heading: "Event Notifications",
    info: "Stay informed of API transaction events with our notification tools.",
    list: [
      "Webhooks",
      "Instant Payment Notification (IPN)",
      "Payment Data Transfer (PDT)",
    ],
  },
];

const APIandSDK = () => {
  return (
    <div className="w-full px-[15vw] max-[770px]:px-[5vw]  bg-[#FAFAFA]">
      <div className="w-full py-20">
        <h1 className="text-4xl font-semibold mb-8">Explore our APIs & SDKs</h1>
        <div className="flex flex-wrap justify-center">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#FFFFFF] w-[19vw] max-[770px]:w-[20vw]  mx-4 my-8 pb-5 overflow-hidden rounded-xl"
            >
              <div className="bg-[#D5F4EE] max-[770px]:bg-white w-full py-3 mb-4">
                <div className="w-[4vw] h-[5vw] max-[770px]:mx-5 mx-auto">{item.logo}</div>
              </div>
              <div className=" px-4 ">
                <h2 className="text-2xl font-semibold mb-2">{item.heading}</h2>
                <p className="text-[#515354] max-[770px]:hidden  font-semibold mb-4">{item.info}</p>
                <ul className="leading-8 mt-2">
                  {item.list.map((listItem, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="text-md  font-bold hover:underline hover:text-[#2E5B83] text-[#1072EB]"
                      >
                        {listItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    <div className=" pb-[5vw] -mt-10">
      <div className="w-full  flex gap-5 bg-[#ffff] h-[5vw] rounded-3xl p-5 ">
        <div className=" h-5 flex items-center justify-around w-14 px-1 rounded-md">
        {gitHub}
        </div>
        <p className="max-[770px]:hidden text-lg font-semibold inline-block ">To browse PayPal SDKs, see our GitHub library   &nbsp; <p className=" inline-block text-[#4B8DBF]">Learn more</p></p>
      </div>
      </div>
      </div>
  );
};

export default APIandSDK;
