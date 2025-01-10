import React, { useEffect, useState } from "react";
import onedark from "../assets/svg/1dark.svg";
import twodark from "../assets/svg/2dark.svg";
import threedark from "../assets/svg/3dark.svg";
import fourdark from "../assets/svg/4dark.svg";
import one from "../assets/svg/1.svg";
import two from "../assets/svg/2.svg";
import three from "../assets/svg/3.svg";
import four from "../assets/svg/4.svg";
import rupaiya from "../assets/svg/rupaiya.svg";
import rupaiyadark from "../assets/svg/rupaiyadark.svg";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";
import CustomButton from "../common/CustomButton";
import CustomButtonForMobile from "../common/CustomButtonForMobile";
import { useDarkMode } from "../hooks/DarkModeContext";

// Array of objects with icon and text data

const WorkShop = () => {
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 300));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")} : ${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const { darkMode } = useDarkMode();

  const allIcon = [
    {
      icon: darkMode ? onedark : one,
      text1: "Enter Trades Before Big Moves Happen",
      text2:
        "Institutional trading helps you spot market trends & breakouts before they become obvious to everyone else.",
    },
    {
      icon: darkMode ? twodark : two,
      text1: "Avoid Retail Traps",
      text2:
        "Learn to stay ahead of retail traders who often buy when prices are high and sell when prices are low.",
    },
    {
      icon: darkMode ? threedark : three,
      text1: "Trade Like the Big Players",
      text2:
        "Understand the strategies used by banks, hedge funds, and institutions to stay profitable.",
    },
    {
      icon: darkMode ? fourdark : four,
      text1: "Simple, Data-Driven Approach",
      text2:
        "No need for fancy indicators or complicated charts, just focus on price, time, and volume.",
    },
  ];
  return (
    <div className="relative flex md:border-b-2 dark:border-none flex-col gap-12 h-auto w-screen md:px-4 py-8 dark:bg-darkBackGround bg-[#F1F1F1]">
      <div className="w-full md:hidden block gap-2  p-4 dark:p-0 dark:px-4 text-[18px] leading-6 bg-[#F9FAFB] dark:bg-darkBackGround justify-center items-center relative">
        <div class="relative  flex overflow-x-hidden">
          <div class="p-2 animate-marquee whitespace-nowrap">
            <span className="font-medium text-center dark:text-white">
              Call. Offer Expires In
            </span>
            <span
              className="px-4 py-1 rounded-md font-semibold text-transparent text-center"
              style={{
                background:
                  "linear-gradient(94.98deg, rgba(255, 204, 105, 0.8) -44.59%, rgba(255, 34, 34, 0.8) 154.52%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {formatTime(timeLeft)}
            </span>
            <span
              className="font-semibold text-transparent text-center"
              style={{
                background:
                  "linear-gradient(88.4deg, #1D870B -4.38%, #66D6AD 40.17%, #13B5E8 85.62%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Limited Time Offer{" "}
            </span>
            <span className="font-medium text-center dark:text-white">
              Sign Up Now And Get 50% Discount + Free E-Book + Free Consultation
              Call. Offer Expires In
            </span>
          </div>

          <div class="absolute top-0 p-2 animate-marquee2 whitespace-nowrap">
            <span className="font-medium text-center dark:text-white">
              Call. Offer Expires In
            </span>
            <span
              className="px-4 py-1 rounded-md font-semibold text-transparent text-center"
              style={{
                background:
                  "linear-gradient(94.98deg, rgba(255, 204, 105, 0.8) -44.59%, rgba(255, 34, 34, 0.8) 154.52%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {formatTime(timeLeft)}
            </span>
            <span
              className="font-semibold text-transparent text-center"
              style={{
                background:
                  "linear-gradient(88.4deg, #1D870B -4.38%, #66D6AD 40.17%, #13B5E8 85.62%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Limited Time Offer{" "}
            </span>
            <span className="font-medium text-center dark:text-white">
              Sign Up Now And Get 50% Discount + Free E-Book + Free Consultation
              Call. Offer Expires In
            </span>
          </div>
        </div>
      </div>
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
        src={darkMode ? rupaiyadark : rupaiya}
        alt="rupaiya"
        className="md:w-[100px] w-[60px] absolute md:top-10 top-64 md:right-32 right-4"
      />
    </div>
  );
};

export default WorkShop;
