import React from "react";
import circleLogo from "../assets/svg/circle.svg";
// import ceo from "../assets/svg/ceo.svg";
import ceo from "../assets/png/ceo.png";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";
import calendar from "../assets/svg/calendar.svg";
import clock from "../assets/svg/clock.svg";
import duration1 from "../assets/svg/duration.svg";
import globe from "../assets/svg/globe.svg";
import hero1 from "../assets/svg/hero1.svg";
import hero2 from "../assets/svg/hero2.svg";
import hero3 from "../assets/svg/hero3.svg";
import correct from "../assets/svg/correct.svg";
import { Box, Typography } from "@mui/material";
import CustomButton3 from "../common/CustomButton3";
import CustomButton4 from "../common/CustomButton4";
import VerifiedIcon from "@mui/icons-material/Verified";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex md:flex-row flex-col-reverse md:h-[100vh] h-auto md:px-0 px-2 w-screen bg-[#F1F1F1]"
    >
      <div className="md:w-[50vw] w-full md:h-auto h-[50vh] relative flex  justify-center items-center">
        <div className="absolute md:block hidden bottom-44 ld:bottom-80  left-36 md:left-44 z-10">
          <img src={circleLogo} alt="CEO" className="w-[95%] md:w-full" />
        </div>
        <div className="absolute bottom-0 z-10">
          <img src={ceo} alt="CEO" className="md:h-[80vh]  h-[363px]" />
        </div>
        <div className="h-auto shadow-2xl md:w-[300px] w-[173px] flex-wrap bg-white z-10 absolute md:bottom-10 bottom-4 md:left-44 ld:left-72 left-16 rounded-md">
          <div className="flex flex-col md:gap-2 gap-1 md:p-4 p-2">
            <div className="flex flex-col font-poppins font-semibold md:text-[20px] text-[11px] md:leading-8 leading-4 text-[#0E0F19]">
              <div className="flex justify-start items-center gap-2">
                <span>Parang Mehta</span>
                <VerifiedIcon className="text-[#1E8BFF]" />
              </div>
              <span className=" font-poppins font-medium md:text-[14px] text-[8px] md:leading-6 leading-4 text-[#0E0F19B2]/[0.7]">
                Founder & CEO of Stockwiz
              </span>
            </div>
            <div className="flex flex-col md:gap-2">
              <div className="flex justify-start items-center  font-poppins font-normal md:text-[16px] text-[8px] md:leading-6 leading-4 text-[#0E0F19B2]/[0.7]">
                <span className="w-[20%]">
                  {" "}
                  <img
                    src={correct}
                    alt="correct"
                    className="md:h-[24px] h-[12px] md:w-[24px] w-[12px]"
                  />
                </span>{" "}
                <div>
                  SEBI Registered Research Analyst{" "}
                  <span className="font-bold">INH000013925</span>
                </div>
              </div>
              <div className=" flex justify-start items-center gap-2 font-poppins font-normal md:text-[16px] text-[8px] md:leading-6 leading-4 text-[#0E0F19B2]/[0.7]">
                <span>
                  {" "}
                  <img
                    src={correct}
                    alt="correct"
                    className="md:h-[24px] h-[12px] md:w-[24px] w-[12px]"
                  />
                </span>{" "}
                10+ Years Trading Experience
              </div>
              <div className="flex justify-start items-center gap-2 font-poppins font-normal md:text-[16px] text-[8px] md:leading-6 leading-4 text-[#0E0F19B2]/[0.7]">
                <span>
                  {" "}
                  <img
                    src={correct}
                    alt="correct"
                    className="md:h-[24px] h-[12px] md:w-[24px] w-[12px]"
                  />
                </span>{" "}
                Trained 50,000+ People
              </div>
              <div className="flex justify-start items-center gap-2 font-poppins font-normal md:text-[16px] text-[8px] md:leading-6 leading-4 text-[#0E0F19B2]/[0.7]">
                <span>
                  {" "}
                  <img
                    src={correct}
                    alt="correct"
                    className="md:h-[24px] h-[12px] md:w-[24px] w-[12px]"
                  />
                </span>{" "}
                Institutional Trading Specialist
              </div>
            </div>
          </div>
        </div>
        <div className="font-poppins text-center font-semibold md:text-[16px] text-[8px] md:leading-6 leading-3 text-figmaGreen absolute md:right-10 ld:right-28 right-0 md:top-36 ld:top-64 top-24 shadow-md rounded-md flex p-2 items-center justify-center md:h-10 h-8 md:w-52 w-[120px] md:gap-4 gap-2 bg-white z-10">
          <span>
            <img src={hero1} alt="MyBrand Logo" className="h-[24px] w-[24px]" />
          </span>
          +13.20 (+4.65%)
        </div>
        <div className="font-poppins text-center font-semibold md:text-[16px] text-[8px] md:leading-6 leading-3 text-figmaGreen absolute md:left-24 ld:left-44 left-4  md:top-20 ld:top-24 top-4 shadow-md rounded-md flex p-2 items-center justify-center md:h-10 h-8 md:w-52 w-[120px] md:gap-4 gap-2 bg-white z-10">
          <span>
            <img src={hero2} alt="MyBrand Logo" className="h-[24px] w-[24px]" />
          </span>{" "}
          +29.25 (+1.85%)
        </div>
        <div className="font-poppins text-center font-semibold md:text-[16px] text-[8px] md:leading-6 leading-3 text-figmaGreen absolute md:left-16 ld:left-24 left-0 md:top-[280px] ld:top-[400px] top-40 shadow-md rounded-md flex p-2 items-center justify-center md:h-10 h-8 md:w-52 w-[120px] md:gap-4 gap-2 bg-white z-10">
          <span>
            <img src={hero3} alt="MyBrand Logo" className="h-[24px] w-[24px]" />
          </span>{" "}
          +13.20 (+4.65%)
        </div>
      </div>
      <div className="md:flex-1 w-full md:h-auto h-[50vh]  flex flex-col md:gap-8 gap-2  justify-center md:items-start items-center">
        <div className="font-poppins p-2 font-normal text-figmaGreen rounded-[8px] w-auto px-4 bg-greenbackgrond">
          <span className="font-semibold text-[16px] leading-6">100000+</span>{" "}
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
        <div className="font-poppins text-center md:hidden block md:text-[48px] text-[29px] md:leading-[70px] leading-10 font-bold">
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
        <div className="md:flex hidden flex-col md:gap-8 gap-4">
          <CustomButton4 />
          <CustomButton3 />
        </div>
        <div className="flex md:hidden w-full flex-col justify-center md:items-start items-center md:gap-8 gap-4">
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
        <div className="flex gap-4 justify-center items-center text-figmaGreen bg-greenbackgrond rounded-[8px] w-auto px-4">
          <img
            src={duration1}
            alt="MyBrand Logo"
            className="h-[24px] w-[24px]"
          />
          <span className=" font-normal text-[14px] leading-5 text-[#0E0F19B2]/[0.7]">
            DURATION
          </span>{" "}
          <span className="font-semibold text-[16px] leading-6">2.5 HOURS</span>
          <span className="font-poppins p-2 font-normal ">
            Last few seats left ! Grab your seat now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
