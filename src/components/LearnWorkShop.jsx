import React, { useState, useEffect } from "react";
import frame1 from "../assets/png/frame1.png";
import frame2 from "../assets/png/frame2.png";
import frame3 from "../assets/png/frame3.png";
import frame4 from "../assets/png/frame4.png";
import learn from "../assets/svg/learn.svg";
import CustomButton from "../common/CustomButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const allImage = [
  {
    icon: frame1,
    text1: "How to Catch Big Moves Before They Happen",
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
    text1: "How to Avoid Nifty and Bank Nifty Traps",
    text2:
      "Find out why stocks are better than Nifty and Bank Nifty for trading with less manipulation, fewer fake-outs, and better returns.",
  },
  {
    icon: frame4,
    text1: "Master Institutional Trading Strategies",
    text2:
      "Proven strategies that simplify trading and deliver up to 85% accuracy. These methods are easy to follow and designed for both beginners & experienced traders.",
  },
];

const LearnWorkShop = () => {
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

  return (
    <div className="relative flex md:border-b-2 flex-col gap-12  w-screen  pb-8 h-auto dark:border-none dark:bg-darkBackGround bg-[#F1F1F1]">
      <div className="w-full gap-2 dark:hidden p-4 text-[18px] leading-6 bg-[#F9FAFB] justify-center items-center relative">
        <div class="relative  flex overflow-x-hidden">
          <div class="p-2 animate-marquee whitespace-nowrap">
            <span className="font-medium text-center">
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
            <span className="font-medium text-center">
              Sign Up Now And Get 50% Discount + Free E-Book + Free Consultation
              Call. Offer Expires In
            </span>
          </div>

          <div class="absolute top-0 p-2 animate-marquee2 whitespace-nowrap">
            <span className="font-medium text-center">
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
            <span className="font-medium text-center">
              Sign Up Now And Get 50% Discount + Free E-Book + Free Consultation
              Call. Offer Expires In
            </span>
          </div>
        </div>
      </div>

      <div className="md:block dark:text-white hidden font-poppins text-center text-[40px] leading-[60px] font-bold">
        What You Will <span className="text-figmaGreen">Learn</span> in the{" "}
        <br />
        Workshop
        <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
      </div>
      <div className="md:mt-8 md:hidden block font-poppins text-center dark:text-white text-[32px] leading-[48px] font-bold">
        What You Will <span className="text-figmaGreen">Learn</span>
        <br /> in the Workshop
        <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
      </div>
      <div className="flex justify-center w-full items-center px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {allImage.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer md:w-[500px] w-full border-2   dark:border-[#FFFFFF]/[0.1] .. dark:bg-[#FFFFFF26]/[0.15] bg-white p-6 rounded-2xl flex flex-col items-center transition-all duration-300 ease-in-out shadow-md hover:shadow-lg`}
            >
              <img
                src={item.icon}
                alt={`icon-${index}`}
                className="w-full h-[250px] object-cover mb-6 rounded-md"
              />
              <div className="flex flex-col items-start gap-4">
                <div className="font-poppins dark:text-[#F1F1F1] text-[20px] leading-8 text-start font-bold text-[#0E0F19]">
                  {item.text1}
                </div>
                <div className="font-poppins dark:text-[#F1F1F1]/[0.7] text-[16px] leading-6 text-start font-medium text-[#0E0F19B2]/[0.7]">
                  {item.text2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex md:flex-row w-full flex-col justify-center md:items-start items-center md:gap-8 ld:gap-12 gap-4">
        <CustomButton />
      </div>
      <img
        src={learn}
        alt="learn"
        className="md:w-[100px] w-[60px] absolute top-52 md:top-24 md:left-32 left-2"
      />
    </div>
  );
};

export default LearnWorkShop;
