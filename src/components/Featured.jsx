import React from "react";
import { cryptos } from "../utils/Cryptos";
import cnbc from "../assets/png/cnbc.png";
import cnbcdark from "../assets/png/cnbcdark.png";
import financial from "../assets/png/financial.png";
import hindustan from "../assets/png/hindustan.png";
import hindustandark from "../assets/png/hindustandark.png";
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
import { useDarkMode } from "../hooks/DarkModeContext";
import CustomButtonForMobile from "../common/CustomButtonForMobile";

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
  arrows: false,
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
        speed: 5000,
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
        speed: 5000,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        speed: 5000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        speed: 5000,
      },
    },
  ],
};

const Featured = () => {
  const { darkMode } = useDarkMode();

  const logos = [
    { icon: darkMode ? cnbcdark : cnbc, name: "cnbc" },
    { icon: tedx, name: "tedx" },
    { icon: darkMode ? hindustandark : hindustan, name: "hindustan" },
    { icon: moneycontrol, name: "moneycontrol" },
    { icon: tedx, name: "tedx" },
    { icon: theprint, name: "theprint" },
  ];

  return (
    <div className="h-auto w-screen flex flex-col gap-12 pb-8 bg-[#F1F1F1] dark:bg-darkBackGround dark:border-none md:border-b-2">
      <div className="bg-white dark:bg-darkBackGround p-2">
        <iframe
          src={
            darkMode
              ? "https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ARELIANCE%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AHDFCBANK%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ATATAMOTORS%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ABHARTIARTL%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AZOMATO%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AICICIBANK%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ADLF%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AINFY%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AJINDALSTEL%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%2C%22colorTheme%22%3A%22dark%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A44%2C%22utm_source%22%3A%22www.stockwiz.in%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22www.stockwiz.in%2F%22%7D"
              : "https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ARELIANCE%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AHDFCBANK%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ATATAMOTORS%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ABHARTIARTL%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AZOMATO%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AICICIBANK%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ADLF%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AINFY%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AJINDALSTEL%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%2C%22colorTheme%22%3A%22light%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A44%2C%22utm_source%22%3A%22www.stockwiz.in%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22www.stockwiz.in%2F%22%7D"
          }
          style={{
            width: "100%",
            height: "50px",
            border: "none",
            overflow: "hidden",
          }}
          scrolling="no"
          allowtransparency="true"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="flex flex-col w-full items-center md:px-0 px-4">
        <div className="md:flex hidden bg-white  dark:bg-darkBackGround gap-8 p-16 dark:p-0 dark:py-8 flex-col justify-center items-center md:w-[80vw] w-full rounded-md">
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="font-poppins font-bold text-[32px] md:text-[40px] leading-[48px] md:leading-[60px] flex justify-center dark:text-white">
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
        <div className="md:hidden block bg-white    dark:bg-darkBackGround gap-8 md:p-16 p-4 dark:p-0 flex-col justify-center items-center md:w-[80vw] w-full rounded-md">
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="font-poppins font-bold text-[32px] md:text-[40px] leading-[48px] md:leading-[60px] flex justify-center dark:text-white">
              Featured in
            </div>
            <div className="border-2 w-[200px] border-figmaGreen " />
          </div>
          <div className="w-full grid mt-4  grid-cols-2">
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
          </div>
        </div>
      </div>

      <div className="md:flex md:pt-10 md:pb-0 pb-6 dark:pt-0 gap-8 ld:gap-32 md:px-0 px-4 w-full md:items-center md:justify-center grid grid-cols-2">
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
            <div className="font-poppins dark:text-[#F1F1F1] h-20 text-center md:w-[263px] w-full font-medium text-[#0E0F19] md:text-[16px] text-[14px] leading-6">
              {strategy.text}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full  md:flex hidden items-center justify-center">
        <CustomButton />
      </div>
      <div className="w-full md:hidden flex items-center justify-center">
        <CustomButtonForMobile />
      </div>
    </div>
  );
};

export default Featured;
