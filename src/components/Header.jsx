import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/home.svg";
import whatsappLOgo from "../assets/svg/whatsapp.svg";
import CustomButton1 from "../common/CustomButton1";

const Header = () => {
  const location = useLocation(); // Get current route location

  return (
    <header className="bg-white border-b fixed w-screen top-0 z-20">
      <nav className="container mx-auto flex items-center justify-between px-10 py-4">

        <div>
          <a href="/" className="flex items-center">
            <img src={logo} alt="MyBrand Logo" className="h-[50px] w-[167px]" />
          </a>
        </div>

        <div className="flex gap-4 justify-center items-center">

          <Link to="/">
            <div
              className={`py-2 px-4 rounded-full text-[18px] leading-5 ${
                location.pathname === "/"
                  ? "text-figmaGreen bg-greenbackgrond"
                  : "text-black"
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
                  : "text-black"
              }`}
            >
              Contact Us
            </div>
          </Link>
        </div>

        <div className="flex gap-6 items-center justify-center">
          <a href="/" className="flex items-center">
            <img
              src={whatsappLOgo}
              alt="WhatsApp"
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
