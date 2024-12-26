import React from "react";
import circleLogo from "../assets/svg/circle.svg";
import ceo from "../assets/svg/ceo.svg";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";
import calendar from "../assets/svg/calendar.svg";
import clock from "../assets/svg/clock.svg";
import duration from "../assets/svg/duration.svg";
import globe from "../assets/svg/globe.svg";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative container flex h-[100vh] bg-[#F1F1F1]"
    >
      {/* Left Section with Circle Logo as background */}
      <div className="w-[50%] relative flex justify-center items-center">
        <div
          className=""
          style={{
            backgroundImage: `url(${circleLogo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
        <div className="absolute bottom-0 z-0">
          <img src={ceo} alt="CEO" className="w-[300px]" />
        </div>
      </div>

      {/* Right Section with Text Content */}
      <div className="flex-1 flex flex-col gap-4 justify-center">
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
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {/* Date Section */}
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

            {/* Duration Section */}
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

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {/* Time Section */}
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

            {/* Language Section */}
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
    </section>
  );
};

export default Hero;
