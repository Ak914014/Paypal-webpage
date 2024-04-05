import React from "react";
import { disputes, reporting, identity } from "../assets/SVGimages";

const items = [
  {
    heading: "Disputes",
    logo: disputes,
    info: "Automate your dispute management, from initial claim to final resolution",
    list: "Get started",
  },
  {
    heading: "Reporting",
    logo: reporting,
    info: "Get transaction-level insights to help manage your day-to-day operations",
    list: "Get started",
  },
  {
    heading: "Identity",
    logo: identity,
    info: "Let your customers log in to your website using their PayPal credentials",
    list: "Get started",
  },
];

const MakePayment = () => {
  return (
    <>
      <div className="w-full h-screen ">
        <div className=" w-full font-['Segoe'] items-center justify-center h-1/2 flex px-[25vw] bg-[#F7F5F0]">
          <img
            className=" h-[24vw] "
            src="src/assets/make-payment-img.png"
            alt=""
          />
          <div className=" w-1/2 ">
            <h1 className="text-4xl font-semibold mt-6 ">Make Payments</h1>
            <div class=" h-4/5 mt-10 ">
              <div class="w-[20vw]">
                <h1 class="inline-block max-[770px]:hidden text-3xl hover:underline  cursor-pointer">
                  Payouts
                </h1>
                <div class="text-[#515354] max-[770px]:hidden mt-2 font-medium">
                  Code a solution to send mass payments to contract workers,
                  claimants, freelancers, and sellers around the world
                </div>
                <ul className="  leading-10 mt-2">
                  <li>
                    <a
                      className="text-lg font-bold hover:underline hover:text-[#2E5B83] text-[#1072EB]"
                      href=""
                    >
                      Get started
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-3/4  h-auto ml-[12vw]  mt-16">
          <h1 className="text-4xl font-semibold mt-6 ">Additional Solutions</h1>
          <div class=" flex mt-10 justify-between ">
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
                <div class="text-[#515354] max-[770px]:hidden mt-2 font-medium">
                  {item.info}
                </div>
                <ul className=" leading-10 mt-2">
                  <li>
                    <a
                      className="text-lg font-bold hover:underline hover:text-[#2E5B83] text-[#1072EB]"
                      href=""
                    >
                      {item.list}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MakePayment;
