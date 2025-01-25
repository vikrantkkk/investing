import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/home.svg";
import darklogo from "../assets/svg/darklogo.svg";
import whatsappLogo from "../assets/svg/whatsapp.svg";
import CustomButton1 from "../common/CustomButton1";
import TemporaryDrawer from "../common/TemporaryDrawer";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDarkMode } from "../hooks/DarkModeContext.jsx";

const Header = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const location = useLocation();

  return (
    <header className="bg-white dark:bg-darkBackGround border-b dark:border-none fixed w-screen top-0 z-20">
      <nav className="mx-auto flex items-center justify-between md:px-10 ld:px-28 pl-4 py-4">
        <div>
          <a href="/" className="flex items-center">
            <img
              src={darkMode ? darklogo : logo}
              alt="MyBrand Logo"
              className="h-[50px] w-[167px]"
            />
          </a>
        </div>

        <div className="gap-4 justify-center md:flex hidden items-center">
          <Link to="/">
            <div
              className={`py-2 px-4 rounded-full text-[18px] leading-5 ${
                location.pathname === "/"
                  ? "text-figmaGreen bg-greenbackgrond"
                  : "text-black dark:text-white"
              }`}
            >
              Webinar
            </div>
          </Link>

          <Link to="/contact">
            <div
              className={`py-2 px-4 rounded-full text-[18px] leading-5 ${
                location.pathname === "/contact"
                  ? "text-figmaGreen bg-greenbackgrond"
                  : "text-black dark:text-white"
              }`}
            >
              Contact Us
            </div>
          </Link>
        </div>

        <div className="flex md:gap-6 items-center justify-center">
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className={`ml-4 p-2 rounded ${
              darkMode ? "text-figmaGreen" : "text-figmaGreen"
            }`}
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </button> */}
          <a
            href="https://wa.me/918949800532"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src={whatsappLogo}
              alt="WhatsApp"
              className="h-[24px] w-[24px]"
            />
          </a>

          <div className="md:block hidden">
            <a
              href={
                darkMode
                  ? "https://parang.exlyapp.com/0afdd5b0-e599-48fd-a20d-a1de748c44e7?init_booking=true&enable_discount=true"
                  : "https://parang.exlyapp.com/de2705f6-6089-4bf5-a629-a4abc083275e?init_booking=true&enable_discount=true"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton1 className="shadow-none">Sign Up</CustomButton1>
            </a>
          </div>

          <div className="md:hidden block">
            <TemporaryDrawer />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
