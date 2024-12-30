import React from "react";
import { cryptos } from "../utils/Cryptos";
import cnbc from "../assets/png/cnbc.png";
import financial from "../assets/png/financial.png";
import hindustan from "../assets/png/hindustan.png";
import moneycontrol from "../assets/png/moneycontrol.png";
import tedx from "../assets/png/tedx.png";
import theprint from "../assets/png/theprint.png";
import Frame1 from "../assets/svg/Frame1.svg";
import Frame2 from "../assets/svg/Frame2.svg";
import Frame3 from "../assets/svg/Frame3.svg";
import Frame4 from "../assets/svg/Frame4.svg";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Corrected logos array with specific widths and heights
const logos = [
  { icon: cnbc, name: "cnbc" },
  { icon: tedx, name: "tedx" },
  { icon: hindustan, name: "hindustan" },
  { icon: moneycontrol, name: "moneycontrol" },
  { icon: tedx, name: "tedx" },
  { icon: theprint, name: "theprint" },
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

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1, 
  autoplay: true,
  autoplaySpeed: 0, 
  cssEase: "linear", 
  responsive: [
    {
      breakpoint: 1590,
      settings: {
        slidesToShow: 4,
        infinite: true,
        autoplay: true,
        speed: 0,
        autoplaySpeed: 0,
        cssEase: "linear",
      },
    },
  ],
};


const Featured = () => {
  return (
    <section className="md:h-[100vh] h-auto w-screen flex flex-col gap-8 ld:gap-20 md:px-0 px-4 bg-[#F1F1F1] md:border-b-2">
 
      <div className="flex gap-6 w-screen p-2 bg-[#F9FAFB] justify-center items-center">
        {cryptos.map((crypto, index) => (
          <div key={index} className="flex flex-row items-center mr-4">
            <img
              src={crypto.icon}
              alt={`${crypto.name} icon`}
              className="w-10 h-10"
            />
            <div className="ml-2 font-inter font-medium md:text-[16px] text-[14px] leading-4 md:leading-5">
              {crypto.name}
            </div>
            <div className="ml-2 font-inter font-medium md:text-[16px] text-[14px] leading-4 md:leading-5">
              {crypto.symbol}
            </div>
            <div className="ml-2 font-inter font-medium md:text-[16px] text-[14px] leading-4 md:leading-5">
              {crypto.price}
            </div>
            <div className="ml-2 font-inter font-medium md:text-[16px] text-[14px] leading-4 md:leading-5">
              {crypto.high24h}
            </div>
            <div className="ml-2 font-inter font-medium md:text-[16px] text-[14px] leading-4 md:leading-5">
              {crypto.low24h}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full items-center md:px-0 px-2">
        <div className="flex bg-white gap-8 p-8 flex-col justify-center items-center md:w-[80vw]  w-full rounded-md">
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="font-poppins font-bold text-[32px] md:text-[40px] leading-[48px] md:leading-[60px] flex justify-center">
              Featured in
            </div>
            <div className="border-2 w-[200px] border-figmaGreen " />
          </div>
          <div className="w-full md:flex hidden mt-4">
            <Slider {...sliderSettings} className="w-full">
              {logos.map((logo, index) => (
                <div key={index} className="">
                  <img
                    src={logo.icon}
                    alt={logo.name}
                    className="flex justify-between gap-16 ld:gap-12 items-center"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-full md:hidden grid mt-4 gap-16 grid-cols-2">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <img src={logo.icon} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
  
      <div className="md:flex mt-8 ld:mt-12 gap-8 ld:gap-32 w-full md:items-center md:justify-center grid grid-cols-2">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className="flex justify-center  flex-col items-center gap-4"
          >
            <img
              src={strategy.icon}
              alt="Strategy Icon"
              className="md:w-[72px]  w-[48px]"
            />
            <div className="font-poppins h-20 text-center md:w-[263px] w-full font-medium text-[#0E0F19] md:text-[16px] text-[14px] leading-6">
              {strategy.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex md:flex-row w-full flex-col justify-center md:items-start items-center md:gap-8 ld:gap-12 gap-4 mt-12">
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
