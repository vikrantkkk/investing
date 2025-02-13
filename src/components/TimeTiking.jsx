import React, { useState, useEffect } from "react";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";
import secrets from "../assets/video/secrets.mp4";
import CustomButton from "../common/CustomButton";

const TimeTiking = () => {
  const [time, setTime] = useState(300);

  useEffect(() => {
    if (time === 0) {
      setTime(300);
    }

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="relative  items-center flex  justify-center md:min-h-screen h-auto">
      <video
        autoPlay
        loop
        muted
        controls={false}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={secrets} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col gap-12 justify-center items-center md:w-1/2 w-full text-white p-8  md:bg-black/50 bg-black/70  md:rounded-lg">
 
        <div>
          <h1 className="font-poppins font-bold text-[40px] leading-[60px] text-center">
            Hurry Up! Time is Ticking.
          </h1>
          <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
        </div>

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

        <div className="font-poppins p-2 font-normal md:text-[16px] text-[14px] text-white rounded-[8px] w-auto bg-[#A928284D]/[0.3]">
          Last Few Seats Left! Grab your seat now
        </div>

        <div className="flex md:flex-row w-full flex-col justify-center md:items-start items-center md:gap-8 ld:gap-12 gap-4">
          <CustomButton />
        </div>
      </div>
    </div>
  );
};

export default TimeTiking;
