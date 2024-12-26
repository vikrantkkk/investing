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
    <div className="container flex border-b-2 flex-col gap-8  h-[90vh] bg-[#F1F1F1]">
      {/* Heading Section */}
      <div className="mt-6 font-poppins text-center text-[40px] leading-[60px] font-bold ">
        <span className="text-figmaGreen">4 Biggest Reasons</span> For You{" "}
        <br />
        to Join the Workshop
        <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
      </div>
      {/* Cards Section */}
      <div className="flex gap-8 mt-8 justify-center">
        {allIcon.map((item, index) => (
          <div
            key={index}
            className="w-64 cursor-pointer scale-90 h-[300px] bg-white p-6 rounded-2xl shadow-md flex flex-col items-start transition-all duration-300 ease-in-out hover:shadow-[rgba(0,_0,_0,_0.09)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px]"
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
      <div className="flex justify-center gap-8 mt-4">
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
