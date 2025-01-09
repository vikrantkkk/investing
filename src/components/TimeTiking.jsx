import React, { useState, useEffect } from "react";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";
import secrets from "../assets/video/secrets.mp4";
import CustomButton from "../common/CustomButton";

const TimeTiking = () => {
  // Initialize the countdown state with 5 minutes (300 seconds)
  const [time, setTime] = useState(300);

  useEffect(() => {
    // If the time is zero, reset it back to 5 minutes (300 seconds)
    if (time === 0) {
      setTime(300);
    }

    // Set up a timer that decreases the time every second
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, [time]);

  // Calculate minutes and seconds from the time in seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="relative  items-center md:dark:flex hidden justify-center min-h-screen">
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
            Hurry Up! Time is Ticking.
          </h1>
          <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
        </div>

        {/* Watch Display */}
        <div className="flex gap-20 justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="text-white font-extrabold text-[80px] md:text-[120px]">
              {String(minutes).padStart(2, "0")}
            </div>
            <div className="text-figmaGreen font-semibold text-[20px] md:text-[24px]">
              Minutes
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-white font-extrabold text-[80px] md:text-[120px]">
              {String(seconds).padStart(2, "0")}
            </div>
            <div className="text-figmaGreen font-semibold text-[20px] md:text-[24px]">
              Seconds
            </div>
          </div>
        </div>

        {/* Banner Text */}
        <div className="font-poppins p-2 font-normal text-white rounded-[8px] w-auto bg-[#A928284D]/[0.3]">
          Last Few Seats Left! Grab your seat now
        </div>

        {/* Buttons */}
        <div className="flex md:flex-row w-full flex-col justify-center md:items-start items-center md:gap-8 ld:gap-12 gap-4">
          <CustomButton />
        </div>
      </div>
    </div>
  );
};

export default TimeTiking;
