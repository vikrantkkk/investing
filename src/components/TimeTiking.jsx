import React from "react";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";
import secrets from "../assets/video/secrets.mp4";

const TimeTiking = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={secrets} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="flex flex-col gap-12 justify-center items-center w-1/2 text-white p-8 bg-black/50 rounded-lg">
        {/* Title */}
        <div>
          <h1 className="font-poppins font-bold text-[40px] leading-[60px]">
            Time Ticking
          </h1>
          <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
        </div>

        {/* Watch Display */}
        <div className="flex gap-20 justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="text-white font-extrabold text-[80px] md:text-[120px]">
              12
            </div>
            <div className="text-figmaGreen font-semibold text-[20px] md:text-[24px]">
              Hours
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-white font-extrabold text-[80px] md:text-[120px]">
              34
            </div>
            <div className="text-figmaGreen font-semibold text-[20px] md:text-[24px]">
              Minutes
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-white font-extrabold text-[80px] md:text-[120px]">
              56
            </div>
            <div className="text-figmaGreen font-semibold text-[20px] md:text-[24px]">
              Seconds
            </div>
          </div>
        </div>

        {/* Banner Text */}
        <div className="font-poppins p-2 font-normal text-white rounded-[8px] w-auto bg-[#A928284D]/[0.3]">
          Last Few Seats Left ! Grab your seat now
        </div>

        {/* Buttons */}
        <div className="flex md:flex-row w-full flex-col justify-center md:items-start items-center md:gap-8 ld:gap-12 gap-4">
          <CustomButton1
            sx={{
              width: "300px",
            }}
          >
            Join Now (English) at ₹199
          </CustomButton1>
          <CustomButton2
            sx={{
              width: "300px",
            }}
          >
            Join Now (Hindi) at ₹199
          </CustomButton2>
        </div>
      </div>
    </div>
  );
};

export default TimeTiking;
