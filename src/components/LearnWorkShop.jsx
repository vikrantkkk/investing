import React from "react";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";
import frame1 from "../assets/png/frame1.png";
import frame2 from "../assets/png/frame2.png";
import frame3 from "../assets/png/frame3.png";
import frame4 from "../assets/png/frame4.png";
import learn from "../assets/svg/learn.svg";

const allImage = [
  {
    icon: frame1,
    text1: "How to Spot Big Trades Before They Happen",
    text2:
      "Identify where banks and hedge funds are entering the market, so you can follow and catch big market moves before they’re obvious to everyone else.",
  },
  {
    icon: frame2,
    text1: "Turn Risk Management into Your Superpower",
    text2:
      "Protect your capital with simple, actionable risk management techniques that limit losses and maximize profits.",
  },
  {
    icon: frame3,
    text1: "How to Trade Stocks for Higher Returns",
    text2:
      "Find out why stocks are better than Nifty and Bank Nifty for trading with less manipulation, fewer fake-outs, and better returns.",
  },
  {
    icon: frame4,
    text1: "Master the Order Block & Squeeze Strategies",
    text2:"Proven strategies that simplify trading and deliver up to 85% accuracy. These methods are easy to follow and designed for both beginners & experienced traders.",
  },
];
const LearnWorkShop = () => {
  return (
    <div className="relative flex md:border-b-2 flex-col md:gap-12 gap-8 w-screen  md:px-0 px-4  pb-8 h-auto bg-[#F1F1F1]">
      <div className="md:flex hidden gap-6 p-4 bg-[#F9FAFB] justify-center items-center flex-row relative">
        Call. Offer Expires In Sign Up Now And Get 50% Discount
      </div>
      <div className="md:block hidden font-poppins text-center text-[40px] leading-[60px] font-bold ">
        What You Will <span className="text-figmaGreen">Learn</span> in the{" "}
        <br />
        Workshop
        <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
      </div>
      <div className="md:mt-8 md:hidden block font-poppins text-center text-[32px] leading-[48px] font-bold ">
        What You Will <span className="text-figmaGreen">Learn</span>
        <br /> in the Workshop
        <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
      </div>
      <div className="flex justify-center w-full items-center">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {allImage.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer md:w-[500px] w-full bg-white p-6 rounded-2xl flex flex-col items-center transition-all duration-300 ease-in-out ${
                index === 1
                  ? "shadow-[rgba(0,_0,_0,_0.09)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px]"
                  : "shadow-md hover:shadow-[rgba(0,_0,_0,_0.09)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px]"
              }`}
            >
              <img
                src={item.icon}
                alt={`icon-${index}`}
                className="w-full h-[250px] object-cover mb-6 rounded-md"
              />

              <div className="flex flex-col items-start gap-4">
                <div className="font-poppins text-[20px] leading-8 text-start font-bold text-[#0E0F19]">
                  {item.text1}
                </div>
                <div className="font-poppins text-[16px] leading-6 text-start font-medium text-[#0E0F19B2]/[0.7]">
                  {item.text2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex md:flex-row w-full flex-col justify-center md:items-start items-center md:gap-8 ld:gap-12 gap-4">
        <CustomButton1
          sx={{
            width: "300px",
          }}
        >
          Join Now (English) at ₹199
        </CustomButton1>
        <CustomButton2
          sx={{
            width: "300px",
          }}
        >
          Join Now (Hindi) at ₹199
        </CustomButton2>
      </div>
      <img
        src={learn}
        alt="learn"
        className="md:w-[100px] w-[60px] absolute top-20 md:top-32 md:left-20 left-2"
      />
    </div>
  );
};

export default LearnWorkShop;
