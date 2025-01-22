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
import TCS from "../assets/png/TCS.png";
import hero2 from "../assets/svg/hero2.svg";
import hero3 from "../assets/svg/hero3.svg";
import correct from "../assets/svg/correct.svg";
import { Box, Typography } from "@mui/material";
import CustomButton3 from "../common/CustomButton3";
import CustomButton4 from "../common/CustomButton4";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useDarkMode } from "../hooks/DarkModeContext";
import CustomButton from "../common/CustomButton";

const Hero = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <div
        id="hero"
        // className="flex md:flex-row  flex-col-reverse md:h-[100vh] h-auto md:px-0 px-2 w-screen  bg-[#F1F1F1]"
        className={`flex md:flex-row dark:md:hidden flex-col-reverse md:h-[100vh] h-auto xs:pt-32 pt-20  md:px-0 px-2 w-screen dark:bg-darkBackGround bg-[#F1F1F1]`}
      >
        <div className="md:w-[50vw] w-full md:h-auto h-[50vh] xs:mt-32 relative flex  justify-center items-center">
          <div className="absolute  bottom-44 ld:bottom-80  top-0 mds:left-24 md:left-44  left-0 dark:hidden z-10">
            <img src={circleLogo} alt="CEO" className="w-full mds:w-[90%]" />
          </div>
          <div className="absolute bottom-0 z-10">
            <img src={ceo} alt="CEO" className="md:h-[80vh] h-[363px] " />
          </div>
          <div className="h-auto shadow-2xl md:w-[350px] w-[200px] flex-wrap  bg-white border-2 dark:border-[#FFFFFF]/[0.1] .. dark:bg-[#0E0F19] z-10 absolute md:bottom-10 bottom-4 md:left-44 ld:left-72  left-10 rounded-md">
            <div className="flex flex-col md:gap-2 gap-1 md:p-4 p-2">
              <div className="flex flex-col font-poppins font-semibold md:text-[20px] text-[11px] md:leading-8 leading-4 dark:text-[#FFFFFFB2] text-[#0E0F19]">
                <div className="flex justify-start items-center gap-2">
                  <span>Parang Mehta</span>
                  <VerifiedIcon className="text-[#1E8BFF]" />
                </div>
                <span className="font-poppins font-medium md:text-[14px] text-[8px] md:leading-6 leading-4 dark:text-[#FFFFFFB2]/[0.7] text-[#0E0F19B2]/[0.7]">
                  Founder & CEO of Stockwiz
                </span>
              </div>

              <div className="flex flex-col md:gap-2 gap-1">
                {/* SEBI Registered Research Analyst */}
                <div className="flex items-center gap-2 font-poppins font-normal md:text-[16px] text-[10px] md:leading-6 leading-4 dark:text-[#FFFFFFB2]/[0.7] text-[#0E0F19B2]/[0.7]">
                  <img
                    src={correct}
                    alt="correct"
                    className="md:h-[24px] h-[12px] md:w-[24px] w-[12px]"
                  />
                  <div>
                    SEBI Registered Research Analyst{" "}
                    <span className="font-bold">INH000013925</span>
                  </div>
                </div>

                {/* 10+ Years Trading Experience */}
                <div className="flex items-center gap-2 font-poppins font-normal md:text-[16px] text-[10px] md:leading-6 leading-4 dark:text-[#FFFFFFB2]/[0.7] text-[#0E0F19B2]/[0.7]">
                  <img
                    src={correct}
                    alt="correct"
                    className="md:h-[24px] h-[12px] md:w-[24px] w-[12px]"
                  />
                  <div>10+ Years Trading Experience</div>
                </div>

                {/* Trained 1,00,000+ People */}
                <div className="flex items-center gap-2 font-poppins font-normal md:text-[16px] text-[10px] md:leading-6 leading-4 dark:text-[#FFFFFFB2]/[0.7] text-[#0E0F19B2]/[0.7]">
                  <img
                    src={correct}
                    alt="correct"
                    className="md:h-[24px] h-[12px] md:w-[24px] w-[12px]"
                  />
                  <div>Trained 1,00,000+ People</div>
                </div>

                {/* Institutional Trading Specialist */}
                <div className="flex items-center gap-2 font-poppins font-normal md:text-[16px] text-[10px] md:leading-6 leading-4 dark:text-[#FFFFFFB2]/[0.7] text-[#0E0F19B2]/[0.7]">
                  <img
                    src={correct}
                    alt="correct"
                    className="md:h-[24px] h-[12px] md:w-[24px] w-[12px]"
                  />
                  <div>Institutional Trading Specialist</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute  md:top-36 mds:top-28 xs:-top-10 top-4 mds:right-[9rem] md:right-[13rem] right-[16rem] z-10">
            <img src={TCS} alt="MyBrand Logo" className="md:h-[60px] h-[40px] md:w-[60px] w-[40px]" />
          </div>
          <div className="absolute top-10 mds:top-6 mds:left-[10rem] md:left-[16rem] left-[18rem] z-10">
            <img src={hero2} alt="MyBrand Logo" className="md:h-[60px] h-[40px] md:w-[60px] w-[40px]" />
          </div>
          <div className="absolute md:top-96 mds:top-64 xs:top-20 top-40 mds:left-[6rem] md:left-[11rem] xs:left-[1rem] left-[2rem]  z-10">
            <img src={hero1} alt="MyBrand Logo" className="md:h-[60px] h-[40px] md:w-[60px] w-[40px]" />
          </div>
        </div>
        <div className="md:flex-1 w-full md:h-auto h-[50vh]  flex flex-col md:gap-8 gap-2  justify-center md:items-start items-center">
          <div className="font-poppins p-2 font-normal text-figmaGreen rounded-[8px] w-auto px-4 bg-greenbackgrond">
            <span className="font-semibold text-[16px] leading-6">
              1,00,000+
            </span>{" "}
            Traders Already Joined
          </div>

          <div className="font-poppins md:block hidden md:text-[48px] text-[29px] md:leading-[70px] leading-10 font-bold">
            Crack the Code to Trade Trade
            <br /> in the <span className="text-figmaGreen">
              Stock Market
            </span>{" "}
            With
            <br /> a Proven System
          </div>
          <div className="font-poppins dark:text-white text-center md:hidden block md:text-[48px] text-[29px] md:leading-[70px] leading-10 font-bold">
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
          <div className="font-poppins text-center md:hidden block md:text-[24px] text-[18px] font-light md:leading-9 dark:text-[#F1F1F1B2]/[0.7] leading-8 text-[#0E0F19B2]/[0.7]">
            Spot Big Market Moves Before They <br /> Happen with Institutional
            Trading
          </div>
          <div className="md:flex hidden flex-col md:gap-8 gap-4">
            <CustomButton4 />
            <CustomButton3 />
          </div>
          <div className="w-full flex items-center justify-center md:hidden">
            <CustomButton />
          </div>
          <div className="md:flex hidden justify-center items-center gap-4">
            <div className="flex   p-2 gap-4 justify-center items-center text-figmaGreen bg-greenbackgrond rounded-[8px] w-auto px-4">
              <img
                src={duration1}
                alt="MyBrand Logo"
                className="h-[24px] w-[24px]"
              />
              <span className=" font-normal text-[14px] leading-5 text-[#0E0F19B2]/[0.7]">
                DURATION
              </span>{" "}
              <span className="font-semibold text-[16px] leading-6">
                2.5 HOURS
              </span>
            </div>
            <div className="flex gap-4 justify-center items-center text-figmaGreen bg-greenbackgrond rounded-[8px] w-auto px-4">
              <span className="font-poppins p-2 font-normal ">
                Last few seats left ! Grab your seat now
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`h-auto w-screen bg-darkBackGround md:dark:flex hidden pt-32 mds:pt-28 mds:px-10  px-20 relative  items-center justify-center`}
      >
        {/* Gradient background */}
        <div className="absolute top-0 right-0 left-0 h-[70%] z-0 bg-gradient-to-bl from-figmaGreen via-transparent to-transparent opacity-20"></div>

        <div className="relative flex justify-center w-full items-center overflow-hidden bg-[#FFFFFF17]/[0.09] rounded-3xl p-10">
          <div className="flex-1 flex flex-col md:gap-10 gap-2 justify-center md:items-start items-center pl-20 mds:pl-0">
            <div className="font-poppins p-2 font-normal text-figmaGreen rounded-[8px] w-auto px-4 bg-greenbackgrond">
              <span className="font-semibold text-[16px] leading-6">
                1,00,000+
              </span>{" "}
              Traders Already Joined
            </div>

            <div className="font-poppins text-white md:block hidden md:text-[48px] text-[29px] md:leading-[70px] leading-10 font-bold">
              Crack the Code to Trade Trade
              <br /> in the <span className="">Stock Market</span> With
              <br /> a Proven System
            </div>

            <div className="font-poppins text-center md:hidden block md:text-[48px] text-[29px] md:leading-[70px] leading-10 font-bold">
              Crack the Code to Trade Trade
              <br /> in the <span className="">Stock Market</span>
              <br /> With a Proven System
            </div>

            <div className="font-poppins md:block hidden md:text-[24px] text-[20px] font-light md:leading-9 leading-8 text-[#FFFFFFB2]/[0.7]">
              Spot Big Market Moves Before They Happen
              <br /> with Institutional Trading
            </div>

            <div className="font-poppins text-center md:hidden block md:text-[24px] text-[20px] font-light md:leading-9 leading-8 text-[#0E0F19B2]/[0.7]">
              Spot Big Market Moves Before They <br /> Happen with Institutional
              Trading
            </div>

            {/* Button Section */}
            <div className="md:flex hidden flex-col md:gap-8 gap-4">
              <CustomButton4 />
              <CustomButton3 />
            </div>

            <div className="flex md:hidden w-full flex-col justify-center md:items-start items-center md:gap-8 gap-4">
              <CustomButton1 sx={{ width: "300px" }}>
                Join Now (English) at ₹199
              </CustomButton1>
              <CustomButton2 sx={{ width: "300px" }}>
                Join Now (Hindi) at ₹199
              </CustomButton2>
            </div>

            {/* Duration and Seats */}
            <div className="flex justify-center items-center gap-4">
              <div className="flex p-2 gap-4 justify-center items-center text-figmaGreen bg-greenbackgrond rounded-[8px] w-auto px-4">
                <img
                  src={duration1}
                  alt="MyBrand Logo"
                  className="h-[24px] w-[24px]"
                />
                <span className="font-normal text-[14px] leading-5 text-[#0E0F19B2]/[0.7] dark:text-[#FFFFFFB2]/[0.7]">
                  DURATION
                </span>{" "}
                <span className="font-semibold text-[16px] leading-6">
                  2.5 HOURS
                </span>
              </div>

              <div className="flex gap-4 justify-center items-center text-figmaGreen bg-greenbackgrond rounded-[8px] w-auto px-4">
                <span className="font-poppins p-2 font-normal">
                  Last few seats left ! Grab your seat now
                </span>
              </div>
            </div>
          </div>

          {/* CEO Images */}
          <div className="w-[50%] flex justify-center items-center">
            <div className="absolute z-10 bottom-72 right-16 mds:-right-24">
              <img src={circleLogo} alt="CEO" className="w-[80%] mds:w-[65%] opacity-30" />
            </div>
            <div className="absolute bottom-0 z-10">
              <img src={ceo} alt="CEO" className="h-[70vh]" />
            </div>
            <div className="absolute top-32 mds:right-[31rem] right-[43rem]  z-10">
              <img
                src={hero1}
                alt="MyBrand Logo"
                className="h-[60px] w-[60px]"
              />
            </div>
            <div className="absolute top-20 right-[16rem] mds:right-[11rem]  z-10">
              <img
                src={hero2}
                alt="MyBrand Logo"
                className="h-[60px] w-[60px]"
              />
            </div>
            <div className="absolute top-60 right-[15rem] mds:right-[10rem] z-10">
              <img
                src={hero3}
                alt="MyBrand Logo"
                className="h-[60px] w-[60px]"
              />
            </div>
            <div className="h-auto shadow-2xl border-2  dark:border-[#FFFFFF]/[0.1] .. md:w-[300px] w-[173px] flex-wrap bg-white dark:bg-darkBackGround z-10 absolute  bottom-8  right-[28rem] mds:right-[15rem] rounded-md">
              <div className="flex flex-col md:gap-2 gap-1 md:p-4 p-2">
                <div className="flex flex-col font-poppins font-semibold md:text-[20px] text-[11px] md:leading-8 leading-4 text-[#0E0F19]">
                  <div className="flex justify-start items-center gap-2">
                    <span className="dark:text-white">Parang Mehta</span>
                    <VerifiedIcon className="text-[#1E8BFF]" />
                  </div>
                  <span className=" font-poppins font-medium md:text-[14px] text-[8px] md:leading-6 leading-4 text-[#FFFFFFB2]/[0.7]">
                    Founder & CEO of Stockwiz
                  </span>
                </div>
                <div className="flex flex-col md:gap-2">
                  <div className="flex justify-start items-center  font-poppins font-normal md:text-[16px] text-[8px] md:leading-6 leading-4 text-[#FFFFFFB2]/[0.7]">
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
                  <div className="flex justify-start items-center gap-2 font-poppins font-normal md:text-[16px] text-[8px] md:leading-6 leading-4 text-[#FFFFFFB2]/[0.7]">
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
                  <div className="flex justify-start items-center gap-2 font-poppins font-normal md:text-[16px] text-[8px] md:leading-6 leading-4 text-[#FFFFFFB2]/[0.7]">
                    <span>
                      {" "}
                      <img
                        src={correct}
                        alt="correct"
                        className="md:h-[24px] h-[12px] md:w-[24px] w-[12px]"
                      />
                    </span>{" "}
                    Trained 1,00,000+ People
                  </div>
                  <div className="flex justify-start items-center gap-2 font-poppins font-normal md:text-[16px] text-[8px] md:leading-6 leading-4 text-[#FFFFFFB2]/[0.7]">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
