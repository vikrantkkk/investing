import React from "react";
import one from "../assets/svg/01.svg";
import two from "../assets/svg/02.svg";
import three from "../assets/svg/03.svg";
import four from "../assets/svg/04.svg";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";

// Array of objects with icon and text data
const allIcon = [
  {
    icon: one,
    text1: "Enter Trades Before Big Moves Happen",
    text2:
      "Institutional trading helps you spot market trends & breakouts before they become obvious to everyone else.",
  },
  {
    icon: two,
    text1: "Avoid Retail Traps",
    text2:
      "Learn to stay ahead of retail traders who often buy when prices are high and sell when prices are low.",
  },
  {
    icon: three,
    text1: "Trade Like the Big Players",
    text2:
      "Understand the strategies used by banks, hedge funds, and institutions to stay profitable.",
  },
  {
    icon: four,
    text1: "Simple, Data-Driven Approach",
    text2:
      "No need for fancy indicators or complicated charts, just focus on price, time, and volume.",
  },
];

const WorkShop = () => {
  return (
    <div className=" flex md:border-b-2 flex-col md:gap-8 gap-4  md:h-[90vh] h-auto w-screen md:px-0 px-2 bg-[#F1F1F1]">
      <div className="mt-16 md:hidden flex  p-4 bg-[#F9FAFB] justify-center items-center flex-row">
        Sign Up Now And Get 50% Discount
      </div>
      {/* Heading Section */}
      <div className="font-poppins md:block hidden text-center text-[40px] leading-[60px] font-bold ">
        <span className="text-figmaGreen">4 Biggest Reasons</span> For You{" "}
        <br />
        to Join the Workshop
        <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
      </div>
      <div className="font-poppins md:hidden block text-center md:text-[40px] text-[32px] leading-[48px] md:leading-[60px] font-bold ">
        <span className="text-figmaGreen">4 Biggest Reasons</span> For You to
        Join the <br />
        Workshop
        <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
      </div>
      {/* Cards Section */}
      <div className="flex md:gap-8 gap-4 mt-8 flex-wrap justify-center">
        {allIcon.map((item, index) => (
          <div
            key={index}
            className={`md:w-64 w-full cursor-pointer scale-90 h-[300px] bg-white p-6 rounded-2xl flex flex-col items-start transition-all duration-300 ease-in-out ${
              index === 0
                ? "shadow-[rgba(0,_0,_0,_0.09)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px]"
                : "shadow-md hover:shadow-[rgba(0,_0,_0,_0.09)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px]"
            }`}
          >
            <img
              src={item.icon}
              alt={`icon-${index}`}
              className="w-16 h-16 mb-4"
            />
            <div className="flex flex-col gap-2">
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
      {/* button section */}
      <div className="flex md:flex-row w-full flex-col justify-center md:items-start items-center md:gap-8 gap-4 md:mt-4 mt-8">
        <CustomButton1
          sx={{
            width: "276px",
          }}
        >
          Join Now (English) at ₹199
        </CustomButton1>
        <CustomButton2
          sx={{
            width: "276px",
          }}
        >
          Join Now (Hindi) at ₹199
        </CustomButton2>
      </div>
    </div>
  );
};

export default WorkShop;
