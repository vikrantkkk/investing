import React from "react";
import ceo from "../assets/png/ceo.png";
import M from "../assets/svg/M.svg";
import P from "../assets/svg/P.svg";
import mentor from "../assets/svg/mentor.svg";
import arrow from "../assets/svg/arrow.svg";

const Mentor = () => {
  return (
    <div className="flex justify-center items-center md:border-b-2 gap-8 h-auto w-screen dark:border-none md:px-0 md:py-8 px-4 dark:bg-darkBackGround bg-[#F1F1F1]">
      <div className="bg-[#0E0F19] border-2 dark:border-[#FFFFFF]/[0.1] ..  flex md:flex-row flex-col md:h-[36rem] h-auto p-4 md:w-[75rem] md:mt-0 mt-20 dark:border md:border-none w-full rounded-2xl ">
        <div className="relative md:w-[50%] w-full flex">
          <div className="relative flex gap-20">
            <img
              src={P}
              className="w-[40%] md:mb-48 mb-44  text-[#FFFFFF1F]/[0.12]"
              alt="P"
            />
            <img
              src={M}
              className="w-[40%] md:mb-80 mb-72  text-[#FFFFFF1F]/[0.12]"
              alt="M"
            />
            <img
              src={ceo}
              className="absolute bottom-0 md:left-16 left-0"
              alt="M"
            />
            <div className="flex gap-4 p-2 justify-center items-center rounded-md absolute md:bottom-32 bottom-24 md:left-10 left-0 font-poppins md:text-[14px] text-[10px] leading-5 text-white bg-gradient-to-r from-[#7d6818e4] to-[#b49829e4] md:w-80 w-60 md:h-20 h-14">
              <img
                src={mentor}
                alt="MyBrand Logo"
                className="md:h-[40px] h-32 md:w-[40px] w-[32px]"
              />
              <div className="flex flex-col md:gap-1 gap-0">
                <span>SEBI-registered research analyst</span>
                <span>INH000013925</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 flex flex-col justify-center">
          <div className="text-figmaGreen  flex flex-col  md:items-start items-center font-poppins font-medium text-[24px] leading-9">
            Meet Your Mentor
          </div>
          <div className="font-poppins flex flex-col  md:items-start items-center text-[#F1F1F1] font-bold text-[40px] leading-[60px]">
            Parang Mehta
            <div className="border-2 w-[200px] border-figmaGreen my-4" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-poppins md:text-start text-center font-normal md:text-[16px] text-[14px] leading-7 text-[#F1F1F1B2]/[0.7]">
              Meet Parang Mehta, the Chairman & Managing Director of StockWiz
              Technologies and a SEBI-Registered Research Analyst.
            </div>
            <div className="font-poppins md:text-start text-center font-normal md:text-[16px] text-[14px]  leading-7 text-[#F1F1F1B2]/[0.7]">
              A CFA Level III candidate and FMVA-certified expert, Parang is a
              full-time trader, investor, and mentor who has dedicated over a
              decade to mastering the art and science of professional trading.
            </div>
            <div className="font-poppins md:text-start text-center font-normal md:text-[16px] text-[14px]  leading-7 text-[#F1F1F1B2]/[0.7]">
              Having trained more than 100000+ traders, Parang has a proven
              track record of transforming retail traders into confident
              professionals. His mission is simple yet powerful: to educate,
              train, fund, and help traders achieve consistent success in the
              stock market.
            </div>
          </div>
          <img
            src={arrow}
            className="absolute top-10 md:right-16 "
            alt="M"
          />
        </div>
      </div>
    </div>
  );
};

export default Mentor;
