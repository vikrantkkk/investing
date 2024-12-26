import React from "react";
import ceo from "../assets/svg/ceo.svg";
import M from "../assets/svg/M.svg";
import P from "../assets/svg/P.svg";

const Mentor = () => {
  return (
    <div className="container flex  justify-center items-center border-b-2 gap-4 h-[100vh] bg-[#F1F1F1]">
      <div className="bg-[#0E0F19] flex h-[36rem] w-[75rem] rounded-2xl">
        <div className="w-[50%] flex">
          <div className="relative flex gap-20">
            <img
              src={P}
              className="w-[40%] mb-48  text-[#FFFFFF1F]/[0.12]"
              alt="P"
            />
            <img
              src={M}
              className="w-[40%] mb-80  text-[#FFFFFF1F]/[0.12]"
              alt="M"
            />
            <img src={ceo} className="absolute bottom-0 left-16" alt="M" />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-figmaGreen font-poppins font-medium text-[24px] leading-9">
            Meet Your Mentor
          </div>
          <div className="font-poppins text-[#F1F1F1] font-bold text-[40px] leading-[60px]">
            Parang Mehta
          </div>
          <div className="border-2 w-[200px] border-figmaGreen my-4" />
          <div className="flex flex-col gap-4">
            <div className="font-poppins font-normal text-[16px] leading-6 text-[#F1F1F1B2]/[0.7]">
              Meet Parang Mehta, the Chairman & Managing Director of StockWiz
              Technologies and a SEBI-registered research analyst.
            </div>
            <div className="font-poppins font-normal text-[16px] leading-6 text-[#F1F1F1B2]/[0.7]">
              A CFA Level III candidate and FMVA-certified expert, Parang is a
              full-time trader, investor, and mentor who has dedicated over a
              decade to mastering the art and science of professional trading.
            </div>
            <div className="font-poppins font-normal text-[16px] leading-6 text-[#F1F1F1B2]/[0.7]">
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
