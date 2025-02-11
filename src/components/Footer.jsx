import React from "react";
import logo from "../assets/svg/home.svg";
import whatsappLOgo from "../assets/svg/whatsapp.svg";
import instagram from "../assets/svg/instagram.svg";
import darklogo from "../assets/svg/darklogo.svg";
import { useDarkMode } from "../hooks/DarkModeContext";
import { useLocation } from "react-router-dom";
import { useWebinarData } from "../hooks/WebinarContext";
import EastIcon from '@mui/icons-material/East';

const Footer = () => {
  const { webinarData } = useWebinarData();

  const { darkMode } = useDarkMode();
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";

  const formatDateTime = (dateString) => {
    if (!dateString) return "Date not available";

    const dateObj = new Date(dateString);
    if (isNaN(dateObj)) return "Invalid Date";

    const day = dateObj.getDate();
    const daySuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      const lastDigit = day % 10;
      return ["st", "nd", "rd"][lastDigit - 1] || "th";
    };

    const formattedDate = `${day}${daySuffix(day)} ${dateObj.toLocaleString(
      "en-US",
      // { month: "long", year: "numeric" }
      { month: "long" }
    )}`;

    const formattedTime = dateObj.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return `${formattedDate} | ${formattedTime}`;
  };

  const formattedDateTime = formatDateTime(webinarData?.webinar_date_time);

  return (
    <footer
      className={`flex flex-col justify-center items-center h-auto w-screen gap-8 pb-32 px-4 ${
        isContactPage ? "py-8" : "py-16"
      } dark:bg-[#0B0C13] bg-[#F1F1F1]`}
    >
      <div>
        <a href="/" className="flex justify-center items-center">
          <img
            src={darkMode ? darklogo : logo}
            alt="MyBrand Logo"
            className="h-[50px] w-[167px]"
          />
        </a>
      </div>
      <div className="font-bold font-inter dark:text-white text-center md:text-[50px] text-[30px] leading-[36px] md:leading-[60px]">
        StockWiz Technologies
      </div>
      <div className="flex md:flex-row flex-col gap-4 md:gap-0 justify-center items-center">
        <div className="font-inter mr-4 font-medium text-[16px] leading-4 dark:text-[#FFFFFFCC]/[0.8] text-[#000000CC]/[0.8]">
          FOLLOW US ON :
        </div>
        <div className="flex gap-4 items-center justify-center">
          <a
            href="https://wa.me/918949800532"
            target="_blank"
            className="flex  items-center"
          >
            <img
              src={whatsappLOgo}
              alt="MyBrand Logo"
              className="h-[46px] w-[46px]"
            />
          </a>
          <a
            href="https://www.instagram.com/pmtrades/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="h-[46px] w-[46px]"
            />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col md:w-[80%] w-full">
        <div className="text-center dark:text-[#FFFFFFCC]/[0.8] font-inter font-medium text-[#000000CC]/[0.8] text-[16px] leading-5">
          Disclaimer
        </div>
        <div className="text-center font-light text-[14px] leading-6 dark:text-[#FFFFFFCC]/[0.6] text-[#00000099]/[0.6]">
          The Training Programs are designed to teach investors about technical
          analysis and market psychology by providing various information and
          material including live cases and examples from the stock market. Such
          information and material is provided solely for educational and
          training purposes and does not constitute an advice, guarantee,
          invitation, or recommendation to buy, sell, trade, or invest in any
          stocks. Trading stocks involves significant risks, and past
          performance is not indicative of future results.*
        </div>
        <div className="text-center mt-2 dark:text-[#FFFFFFCC]/[0.8] font-inter font-medium text-[#000000CC]/[0.8] text-[16px] leading-5">
          Disclosure
        </div>
        <div className="text-center font-light text-[14px] leading-6 dark:text-[#FFFFFFCC]/[0.6] text-[#00000099]/[0.6]">
          Investing in securities markets is subject to market risks. Read all
          related documents carefully before investing. Registration granted by
          SEBI, membership of BASL (for Research Analysts), and certifications
          from NISM do not guarantee the performance of the intermediary or
          assure returns to investors.
        </div>
      </div>
      <div className="border-b-4 dark:hidden md:w-[90%] w-full md:gap-0 gap-4 text-[#00000033]/[0.2]" />
      <div className="flex w-[80%] gap-4 items-center justify-center flex-col">
        <div className="text-center font-light text-[14px] leading-4 dark:text-[#FFFFFFCC]/[0.7] text-[#00000033]/[0.7]">
          2024 StockWiz Technologies LLP. All rights reserved.
        </div>
        <div className="text-center font-light text-[14px] leading-6 dark:text-[#FFFFFFCC]/[0.6] text-[#00000099]/[0.6]">
          This site is not a part of the Meta™ Inc. Additionally, this site is
          not endorsed by Meta™ in any way. All content provided on this page is
          for informational and promotional purposes only. Results may vary and
          are not guaranteed. Please review our Privacy Policy and Terms of
          Service before proceeding.
        </div>
      </div>

      <div className="flex flex-col gap-3 md:hidden justify-between items-center bg-[#2ABB01] p-3 w-screen fixed z-20 bottom-0">
        <div className="flex gap-4">
          <span className="font-bold text-[24px] leading-7 text-white">
            Rs 199{" "}
            <span className="font-medium text-[20px] leading-5 line-through">
              499
            </span>
          </span>
          <div className="border-r-2" />
          <span className="font-normal tetx-[16px] leading-6 text-white">
            {/* Sunday 2nd feb, 11:00 AM */}
            {formattedDateTime}
          </span>
        </div>
        <div className="flex gap-4">
          <button
            className="py-3 px-4 font-semibold text-[16px] leading-[19px] rounded-full bg-white text-black"
            onClick={() => window.open(webinarData?.investing, "_blank", "noopener,noreferrer")}
          >
            Join Now (English)
          </button>
          <button
            className="py-3 px-4 font-semibold text-[16px] leading-[19px] rounded-full bg-white text-black"
            onClick={() => window.open(webinarData?.invest, "_blank", "noopener,noreferrer")}
          >
            Join Now (Hindi)
          </button>
        </div>
      </div>
      <div className="mx-auto gap-3 justify-between md:flex hidden items-center bg-[#2ABB01] px-28 py-4 w-screen fixed z-20 bottom-0">
        <div className="flex justify-center items-center gap-4">
          <span className="flex items-center justify-center gap-2 font-bold text-[40px] leading-[48px] text-white">
            ₹199{" "}
            <span className="font-medium text-[28px] leading-5 line-through">
              ₹499
            </span>
          </span>
          <span className="font-medium tetx-[24px] leading-8 text-white">
            {formattedDateTime}
          </span>
        </div>
        <div className="flex gap-8">
          <button
            className="flex justify-center items-center gap-4 py-3 px-8 font-semibold text-[20px] leading-[19px] rounded-md bg-white text-black hover:shadow-xl transition-all duration-300"
            onClick={() =>
              window.open(
                webinarData?.investing,
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Join Now (English) <EastIcon />
          </button>
          <button
            className="flex justify-center items-center gap-4 py-3 px-8 font-semibold text-[20px] leading-[19px] rounded-md bg-white text-black hover:shadow-xl transition-all duration-300"
            onClick={() =>
              window.open(webinarData?.invest, "_blank", "noopener,noreferrer")
            }
          >
            Join Now (Hindi) <EastIcon />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
