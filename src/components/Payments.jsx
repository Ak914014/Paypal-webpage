import React from "react";
import { computer, card, multiparty, thirdParty } from "../assets/SVGimages";

const items = [
  {
    heading: "Online",
    logo: computer,
    info: "Build a scalable checkout solution for web and mobile with our REST APIs and JavaScript SDK",
    list: ["Checkout", "Subscriptions", "Invoicing", "Donate"],
  },
  {
    heading: "In-Person",
    logo: card,
    info: "Set up a ready-made point-of-sale solution or integrate a payment solution to your service",
    list: ["Point of Sale Solutions"],
  },
];

const item = [
  {
    heading: "Multiparty",
    logo: multiparty,
    info: "Create an onboarding and payments solution for your marketplace or payments platform",
    list: ["Build a Marketplace"],
  },
  {
    heading: "3rd-Party",
    logo: thirdParty,
    info: "Integrate PayPal with a 3rd-party shopping cart or plugin",
    list: ["Partners", "Plugins"],
  },
];

const Payments = () => {
  return (
    <div className='h-screen px-[15vw] tracking-tighter font-["Segoe "]'>
      <h1 className="text-4xl font-semibold mt-6 ">Accept Payments</h1>
      <div className="flex mt-10">
        <div class="gap-5">
          <div class="w-[50vw] flex  justify-around  ">
            {items.map((item, i) => (
              <div key={i} class="w-[20vw]">
                <div class="flex gap-4 w-full">
                  <div class="w-[20px] mt-4 inline-block text-[#1072EB]">
                    {item.logo}
                  </div>
                  <h1 class="inline-block text-3xl max-[770px]:hidden hover:underline  cursor-pointer">
                    {item.heading}
                  </h1>
                </div>
                <div class="text-[#515354] max-[770px]:hidden mt-2 font-medium">{item.info}</div>
                <ul className=" leading-10 mt-2">
                  {item.list.map((listItem, i) => (
                    <li>
                      <a
                        className="text-lg font-bold hover:underline hover:text-[#2E5B83] text-[#1072EB]"
                        href=""
                      >
                        {listItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div class="w-[50vw] flex  justify-around h-4/5 mt-10 ">
            {item.map((item, i) => (
              <div key={i} class="w-[20vw]">
                <div class="flex gap-4 w-full">
                  <div class="w-[20px] mt-4 inline-block text-[#1072EB]">
                    {item.logo}
                  </div>
                  <h1 class="inline-block max-[770px]:hidden text-3xl hover:underline  cursor-pointer">
                    {item.heading}
                  </h1>
                </div>
                <div class="text-[#515354] max-[770px]:hidden mt-2 font-medium">{item.info}</div>
                <ul className="  leading-10 mt-2">
                  {item.list.map((listItem, i) => (
                    <li>
                      <a
                        className="text-lg font-bold hover:underline hover:text-[#2E5B83] text-[#1072EB]"
                        href=""
                      >
                        {listItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3 h-4/5 inline-block">
          <img src="src/assets/accept-payment-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Payments;
