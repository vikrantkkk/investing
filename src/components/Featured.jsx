import React from "react";
import { cryptos } from "../utils/Cryptos";
import hindustan from "../assets/svg/hindustan.svg";
import cnbc from "../assets/svg/cnbc.svg";
import ted from "../assets/svg/ted.svg";
import business from "../assets/svg/business.svg";
import Frame1 from "../assets/svg/Frame1.svg";
import Frame2 from "../assets/svg/Frame2.svg";
import Frame3 from "../assets/svg/Frame3.svg";
import Frame4 from "../assets/svg/Frame4.svg";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";

// Corrected logos array with specific widths and heights
const logos = [
  { icon: business, name: "Business Standard", width: 200 },
  { icon: ted, name: "TED", width: 100 },
  { icon: hindustan, name: "Hindustan Times", width: 230 },
  { icon: cnbc, name: "CNBC", width: 230 },
];
const strategies = [
  {
    icon: Frame1,
    text: "Strategies backed by real-world results and live P&L data.",
  },
  {
    icon: Frame2,
    text: "Learn directly from a SEBI-registered analyst.",
  },
  {
    icon: Frame3,
    text: "Covers institutional trading, which retail-focused workshops ignore.",
  },
  {
    icon: Frame4,
    text: "Focused on risk management & disciplined trading systems.",
  },
];

const Featured = () => {
  return (
    <section className="h-screen w-screen flex flex-col gap-8 bg-[#F1F1F1] border-b-2">
      {/* Cryptos Section */}
      <div className="flex gap-6 p-2 bg-[#F9FAFB] justify-center items-center flex-row">
        {cryptos.map((crypto, index) => (
          <div key={index} className="flex flex-row items-center mr-4">
            <img
              src={crypto.icon}
              alt={`${crypto.name} icon`}
              className="w-10 h-10"
            />
            <div className="ml-2">{crypto.name}</div>
            <div className="ml-2">{crypto.symbol}</div>
            <div className="ml-2">{crypto.price}</div>
            <div className="ml-2">{crypto.high24h}</div>
            <div className="ml-2">{crypto.low24h}</div>
          </div>
        ))}
      </div>

      {/* Logos Section */}
      <div className="flex flex-col items-center">
        <div className="flex bg-white gap-8 p-8 flex-col justify-center items-center w-[70%] rounded-md">
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="font-poppins font-bold text-[40px] leading-[60px] flex justify-center">
              Featured in
            </div>
            <div className="border-2 w-[200px] border-figmaGreen " />
          </div>
          <div className="flex gap-6 w-full justify-center flex-row">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex flex-row justify-center items-center"
              >
                <img
                  src={logo.icon}
                  alt={logo.name}
                  style={{
                    width: `${logo.width}px`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* third section */}
      <div className="flex mt-8 gap-4 w-full items-center justify-center">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className="flex justify-center  flex-col items-center gap-4"
          >
            <img src={strategy.icon} alt="Strategy Icon" className="w-[72]" />
            <div className="font-poppins h-20 text-center w-[263px] font-medium text-[#0E0F19] text-[16px] leading-6">
              {strategy.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-8 mt-4">
        <CustomButton1
          sx={{
            width: "276px",
          }}
        >
          Join Now (English) at ₹199
        </CustomButton1>
        <CustomButton2
          sx={{
            width: "276px",
          }}
        >
          Join Now (Hindi) at ₹199
        </CustomButton2>
      </div>
    </section>
  );
};

export default Featured;
