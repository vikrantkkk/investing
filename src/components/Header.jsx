import React from "react";
import logo from "../assets/svg/home.svg";
import whatsappLOgo from "../assets/svg/whatsapp.svg";
import Button from "@mui/material/Button";
import CustomButton1 from "../common/CustomButton1";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-10">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <a href="/" className="flex items-center">
            <img src={logo} alt="MyBrand Logo" className="h-[50px] w-[167px]" />
          </a>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div className="text-figmaGreen leading-5 text-[18px] bg-greenbackgrond py-2 px-4 rounded-full opacity-11">
            Webinar
          </div>
          <div className="text-[18px] font-medium w-[100px] leading-5">
            Contact Us
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <a href="/" className="flex items-center">
            <img
              src={whatsappLOgo}
              alt="MyBrand Logo"
              className="h-[24px] w-[24px]"
            />
          </a>
          <CustomButton1 className="shadow-none">Sign Up</CustomButton1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
