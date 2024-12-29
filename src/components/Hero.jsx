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
    <div
      id="hero"
      className="flex md:flex-row flex-col-reverse md:h-[100vh] h-auto md:px-0 px-2 w-screen bg-[#F1F1F1]"
    >
      <div className="md:w-[50%] w-full md:h-auto h-[50vh] relative flex  justify-center items-center">
        <div className="absolute md:block hidden bottom-44 left-36 z-10">
          <img src={circleLogo} alt="CEO" className="w-[95%]" />
        </div>
        <div className="absolute bottom-0 z-10">
          <img src={ceo} alt="CEO" className="md:h-[570px] h-[363px]" />
        </div>
        <div className="md:h-[200px] h-[100px] shadow-2xl md:w-[300px] w-[173px] flex-wrap bg-white z-10 absolute md:bottom-10 bottom-4 md:left-44 left-16 rounded-md">
          <div className="flex flex-col md:gap-2 md:p-4 p-2">
            <div className="font-poppins font-semibold md:text-[20px] text-[11px] md:leading-8 leading-4 text-[#0E0F19]">
              Parang Mehta
            </div>
            <div className="flex flex-col md:gap-2">
              <div className="font-poppins font-normal md:text-[16px] text-[8px] md:leading-6 leading-4 text-[#0E0F19B2]/[0.7]">
                SEBI Registered Research Analyst INH000013925
              </div>
              <div className="font-poppins font-normal md:text-[16px] text-[8px] md:leading-6 leading-4 text-[#0E0F19B2]/[0.7]">
                10+ Years Trading Experience
              </div>
              <div className="font-poppins font-normal md:text-[16px] text-[8px] md:leading-6 leading-4 text-[#0E0F19B2]/[0.7]">
                Trained 50,000+ People
              </div>
            </div>
          </div>
        </div>
        <div className="font-poppins text-center font-semibold md:text-[16px] text-[8px] md:leading-6 leading-3 text-figmaGreen absolute md:right-10 right-0 md:top-36 top-24 shadow-md rounded-md flex p-2 items-center justify-center md:h-10 h-8 md:w-52 w-[120px] md:gap-4 gap-2 bg-white z-10">
          <span>
            <img src={hero1} alt="MyBrand Logo" className="h-[24px] w-[24px]" />
          </span>
          +13.20 (+4.65%)
        </div>
        <div className="font-poppins text-center font-semibold md:text-[16px] text-[8px] md:leading-6 leading-3 text-figmaGreen absolute md:left-24 left-4 md:top-20 top-4 shadow-md rounded-md flex p-2 items-center justify-center md:h-10 h-8 md:w-52 w-[120px] md:gap-4 gap-2 bg-white z-10">
          <span>
            <img src={hero2} alt="MyBrand Logo" className="h-[24px] w-[24px]" />
          </span>{" "}
          +29.25 (+1.85%)
        </div>
        <div className="font-poppins text-center font-semibold md:text-[16px] text-[8px] md:leading-6 leading-3 text-figmaGreen absolute md:left-16 left-0 md:top-[280px] top-40 shadow-md rounded-md flex p-2 items-center justify-center md:h-10 h-8 md:w-52 w-[120px] md:gap-4 gap-2 bg-white z-10">
          <span>
            <img src={hero3} alt="MyBrand Logo" className="h-[24px] w-[24px]" />
          </span>{" "}
          +13.20 (+4.65%)
        </div>
      </div>
      <div className="md:w-[50%] w-full md:h-auto h-[50vh]  flex flex-col md:gap-4 gap-2  justify-center md:items-start items-center">
        <div className="font-poppins p-2 font-normal text-figmaGreen rounded-[8px] w-[271px] bg-greenbackgrond">
          <span className="font-semibold text-[16px] leading-6">50000+</span>{" "}
          Traders Already Joined
        </div>

        <div className="font-poppins md:block hidden md:text-[48px] text-[29px] md:leading-[70px] leading-10 font-bold">
          Crack the Code to Trade
          <br /> in the <span className="text-figmaGreen">
            Stock Market
          </span>{" "}
          With
          <br /> a Proven System
        </div>
        <div className="font-poppins text-center md:hidden block md:text-[48px] text-[28px] md:leading-[70px] leading-10 font-bold">
          Crack the Code to Trade
          <br /> in the{" "}
          <span className="text-figmaGreen">
            Stock Market <br />
          </span>{" "}
          With a Proven System
        </div>
        <div className="font-poppins md:block hidden md:text-[24px] text-[20px] font-light md:leading-9 leading-8 text-[#0E0F19B2]/[0.7]">
          Spot Big Market Moves Before They Happen
          <br /> with Institutional Trading
        </div>
        <div className="font-poppins text-center md:hidden block md:text-[24px] text-[20px] font-light md:leading-9 leading-8 text-[#0E0F19B2]/[0.7]">
          Spot Big Market Moves Before They <br /> Happen with Institutional
          Trading
        </div>
        <div className="flex md:flex-row flex-col md:gap-8 gap-4 mt-4">
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
        <div className="gap-4 mt-6 md:flex hidden">
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
