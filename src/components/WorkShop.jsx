import React from "react";
import one from "../assets/svg/1.svg";
import two from "../assets/svg/2.svg";
import three from "../assets/svg/3.svg";
import four from "../assets/svg/4.svg";
import rupaiya from "../assets/svg/rupaiya.svg";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";
import CustomButton from "../common/CustomButton";
import CustomButtonForMobile from "../common/CustomButtonForMobile";

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
    <div className="relative flex md:border-b-2 dark:border-none flex-col md:gap-12 gap-8  h-auto w-screen md:px-4 py-8 dark:bg-darkBackGround bg-[#F1F1F1]">
      {/* Heading Section */}
      <div className="font-poppins md:block hidden text-center text-[40px] leading-[60px] font-bold ">
        <span className="text-figmaGreen">4 Biggest Reasons</span>

        <span className="dark:text-white">
          {" "}
          For You <br />
          to Join the Workshop
        </span>
        <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
      </div>
      <div className="font-poppins md:hidden block text-center md:text-[40px] text-[32px] leading-[48px] md:leading-[60px] font-bold ">
        <span className="text-figmaGreen">4 Biggest Reasons</span>
        <br />{" "}
        <span className="dark:text-white">For You to Join the Workshop</span>
        <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
      </div>
      {/* Cards Section */}
      <div className="flex w-full md:gap-8  ld:gap-20  flex-wrap justify-center">
        {allIcon.map((item, index) => (
          <div
            key={index}
            className={`md:w-64 ld:w-72 w-full cursor-pointer scale-90 h-auto border-2  dark:border-[#FFFFFF]/[0.1] .. dark:bg-[#FFFFFF26]/[0.15] bg-white p-6 rounded-2xl flex flex-col items-start transition-all duration-300 ease-in-out ${
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
              <div className="font-poppins text-[20px] leading-8 text-start font-bold dark:text-[#F1F1F1] text-[#0E0F19]">
                {item.text1}
              </div>
              <div className="font-poppins text-[16px] leading-6 text-start font-medium dark:text-[#F1F1F1]/[0.7] text-[#0E0F19B2]/[0.7]">
                {item.text2}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* button section */}
      <div className="md:flex hidden md:flex-row w-full flex-col justify-center md:items-start items-center md:gap-8 gap-4">
        <CustomButton />
      </div>
      <div className="md:hidden flex md:flex-row w-full flex-col justify-center md:items-start items-center md:gap-8 gap-4">
        <CustomButtonForMobile />
      </div>
      <img
        src={rupaiya}
        alt="rupaiya"
        className="md:w-[100px] w-[60px] absolute md:top-10 top-36 md:right-32 right-2"
      />
    </div>
  );
};

export default WorkShop;
