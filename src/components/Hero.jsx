import React from "react";
import circleLogo from "../assets/svg/circle.svg";
import ceo from "../assets/svg/ceo.svg";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";
import calendar from "../assets/svg/calendar.svg";
import clock from "../assets/svg/clock.svg";
import duration from "../assets/svg/duration.svg";
import globe from "../assets/svg/globe.svg";
import hero1 from "../assets/svg/hero1.svg";
import hero2 from "../assets/svg/hero2.svg";
import hero3 from "../assets/svg/hero3.svg";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <div id="hero" className="flex h-[100vh] w-screen bg-[#F1F1F1]">
      <div className="w-[50%] relative flex justify-center items-center">
        <div className="absolute bottom-44 left-36 z-10">
          <img src={circleLogo} alt="CEO" className="w-[95%]" />
        </div>
        <div className="absolute bottom-0 z-10">
          <img src={ceo} alt="CEO" className="h-[570px]" />
        </div>
        <div className="h-[200px] shadow-2xl w-[300px] bg-white z-10 absolute bottom-10 left-44 rounded-md">
          <div className="flex flex-col gap-2 p-4">
            <div className="font-poppins font-semibold text-[20px] leading-8 text-[#0E0F19]">
              Parang Mehta
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-poppins font-normal text-[16px] leading-6 text-[#0E0F19B2]/[0.7]">
                SEBI Registered Research Analyst INH000013925
              </div>
              <div className="font-poppins font-normal text-[16px] leading-6 text-[#0E0F19B2]/[0.7]">
                10+ Years Trading Experience
              </div>
              <div className="font-poppins font-normal text-[16px] leading-6 text-[#0E0F19B2]/[0.7]">
                Trained 50,000+ People
              </div>
            </div>
          </div>
        </div>
        <div className="font-poppins text-center font-semibold text-[16px] leading-6 text-figmaGreen absolute right-10 top-36 shadow-md rounded-md flex p-2 items-center justify-center h-10 w-52 gap-4 bg-white z-10">
          <span>
            <img src={hero1} alt="MyBrand Logo" className="h-[24px] w-[24px]" />
          </span>
          +13.20 (+4.65%)
        </div>
        <div className="font-poppins text-center font-semibold text-[16px] leading-6 text-figmaGreen absolute left-24 top-20 shadow-md rounded-md flex p-2 items-center justify-center h-10 w-52 gap-4 bg-white z-10">
          <span>
            <img src={hero2} alt="MyBrand Logo" className="h-[24px] w-[24px]" />
          </span>{" "}
          +29.25 (+1.85%)
        </div>
        <div className="font-poppins text-center font-semibold text-[16px] leading-6 text-figmaGreen absolute left-16 top-[280px] shadow-md rounded-md flex p-2 items-center justify-center h-10 w-52 gap-4 bg-white z-10">
          <span>
            <img src={hero3} alt="MyBrand Logo" className="h-[24px] w-[24px]" />
          </span>{" "}
          +13.20 (+4.65%)
        </div>
      </div>
      <div className="w-[50%] flex flex-col gap-4 justify-center">
        <div className="font-poppins p-2 font-normal text-figmaGreen rounded-[8px] w-[271px] bg-greenbackgrond">
          <span className="font-semibold text-[16px] leading-6">50000+</span>{" "}
          Traders Already Joined
        </div>

        <div className="font-poppins text-[48px] leading-[70px] font-bold">
          Crack the Code to Trade
          <br /> in the <span className="text-figmaGreen">
            Stock Market
          </span>{" "}
          With
          <br /> a Proven System
        </div>
        <div className="font-poppins text-[24px] font-light leading-9 text-[#0E0F19B2]/[0.7]">
          Spot Big Market Moves Before They Happen
          <br /> with Institutional Trading
        </div>
        <div className="flex gap-8 mt-4">
          <CustomButton1
            sx={{
              width: "276px",
            }}
          >
            Join Now (English) at ₹199S
          </CustomButton1>
          <CustomButton2
            sx={{
              width: "276px",
            }}
          >
            Join Now (Hindi) at ₹199
          </CustomButton2>
        </div>
        <div className="flex gap-4 mt-6">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <img
                src={calendar}
                alt="calendar"
                className="w-[32px] h-[32px]"
              />
              <div>
                <div className="font-poppins text-[#0E0F19B2]/[0.7] font-normal text-[12px] leading-5">
                  DATE
                </div>
                <div className="font-poppins text-[#0E0F19] font-semibold text-[16px] leading-6">
                  15th December
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img
                src={duration}
                alt="duration"
                className="w-[32px] h-[32px]"
              />
              <div>
                <div className="font-poppins text-[#0E0F19B2]/[0.7] font-normal text-[12px] leading-5">
                  DURATION
                </div>
                <div className="font-poppins text-[#0E0F19] font-semibold text-[16px] leading-6">
                  2.5 hrs
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <img src={clock} alt="clock" className="w-[32px] h-[32px]" />
              <div>
                <div className="font-poppins text-[#0E0F19B2]/[0.7] font-normal text-[12px] leading-5">
                  TIME
                </div>
                <div className="font-poppins text-[#0E0F19] font-semibold text-[16px] leading-6">
                  7:30 pm - 9:00 pm
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src={globe} alt="globe" className="w-[32px] h-[32px]" />
              <div>
                <div className="font-poppins text-[#0E0F19B2]/[0.7] font-normal text-[12px] leading-5">
                  LANGUAGE
                </div>
                <div className="font-poppins text-[#0E0F19] font-semibold text-[16px] leading-6">
                  English
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
