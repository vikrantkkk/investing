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
import CustomButton from "../common/CustomButton";

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
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Featured = () => {
  return (
    <div className="h-auto w-screen flex flex-col md:gap-12 gap-8 pb-8 bg-[#F1F1F1] md:border-b-2">
      <Slider
        {...sliderSettings}
        className="w-full gap-2 p-4 text-[18px] leading-6 bg-[#F9FAFB] justify-center items-center relative"
      >
        {cryptos.map((crypto, index) => (
          <div key={index} className="flex flex-row items-center justify-start">
            <div className="w-6 h-6 rounded-full flex justify-center items-center">
              <img
                className="rounded-full"
                src={crypto.icon}
                alt={`${crypto.name} icon`}
              />
              <span className="ml-2 font-inter font-medium md:text-[16px] text-[14px] leading-4 md:leading-5">
                {crypto.name}
              </span>
              <span className="ml-2 font-inter font-semibold md:text-[16px] text-[14px] leading-4 md:leading-5">
                {crypto.price}
              </span>
              <span
                className={`ml-2 font-inter font-normal md:text-[16px] text-[14px] leading-4 md:leading-5 ${
                  crypto.high24h >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {crypto.high24h}
              </span>
              <span
                className={`ml-2 font-inter font-normal md:text-[16px] text-[14px] leading-4 md:leading-5 ${
                  crypto.low24h >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                ({crypto.low24h})%
              </span>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex flex-col w-full items-center md:px-0 px-4">
        <div className="flex bg-white gap-8 p-16 flex-col justify-center items-center md:w-[80vw] w-full rounded-md">
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="font-poppins font-bold text-[32px] md:text-[40px] leading-[48px] md:leading-[60px] flex justify-center">
              Featured in
            </div>
            <div className="border-2 w-[200px] border-figmaGreen " />
          </div>
          <div className="w-full mt-4">
            <Slider {...sliderSettings} className="w-full">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center px-4"
                >
                  <img
                    src={logo.icon}
                    alt={logo.name}
                    className="w-24 h-24 object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="md:flex md:pt-10 gap-8 ld:gap-32 md:px-0 px-4 w-full md:items-center md:justify-center grid grid-cols-2">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className="flex justify-center flex-col items-center gap-4"
          >
            <img
              src={strategy.icon}
              alt="Strategy Icon"
              className="md:w-[72px] w-[48px] object-contain"
            />
            <div className="font-poppins h-20 text-center md:w-[263px] w-full font-medium text-[#0E0F19] md:text-[16px] text-[14px] leading-6">
              {strategy.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex md:flex-row w-full flex-col justify-center md:items-start items-center md:gap-8 gap-4">
        <CustomButton />
      </div>
    </div>
  );
};

export default Featured;
