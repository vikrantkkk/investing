import React from "react";
import ceo from "../assets/svg/ceo.svg";
import M from "../assets/svg/M.svg";
import P from "../assets/svg/P.svg";

const Mentor = () => {
  return (
    <div className="flex justify-center items-center md:border-b-2 gap-4  md:h-[100vh]  w-screen md:px-0 px-4 bg-[#F1F1F1]">
      <div className="bg-[#0E0F19] md:mt-0 mt-32 flex md:flex-row flex-col md:h-[36rem] h-[68rem] md:w-[75rem] px-2 md:px-0 w-full rounded-2xl">
        <div className="md:w-[50%] w-full flex">
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
            <img src={ceo} className="absolute bottom-0 md:left-16 left-0" alt="M" />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-figmaGreen  flex flex-col  md:items-start items-center font-poppins font-medium text-[24px] leading-9">
            Meet Your Mentor
          </div>
          <div className="font-poppins flex flex-col  md:items-start items-center text-[#F1F1F1] font-bold text-[40px] leading-[60px]">
            Parang Mehta
            <div className="border-2 w-[200px] border-figmaGreen my-4" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-poppins md:text-start text-center font-normal text-[16px] leading-6 text-[#F1F1F1B2]/[0.7]">
              Meet Parang Mehta, the Chairman & Managing Director of StockWiz
              Technologies and a SEBI-registered research analyst.
            </div>
            <div className="font-poppins md:text-start text-center font-normal text-[16px] leading-6 text-[#F1F1F1B2]/[0.7]">
              A CFA Level III candidate and FMVA-certified expert, Parang is a
              full-time trader, investor, and mentor who has dedicated over a
              decade to mastering the art and science of professional trading.
            </div>
            <div className="font-poppins md:text-start text-center font-normal text-[16px] leading-6 text-[#F1F1F1B2]/[0.7]">
              Having trained more than 50,000 traders, Parang has a proven track
              record of transforming retail traders into confident
              professionals. His mission is simple yet powerful: to educate,
              train, fund, and help traders achieve consistent success in the
              stock market.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
