import React from "react";
import buttonicon2 from "../assets/svg/buttonicon2.svg";
import { useWebinarData } from "../hooks/WebinarContext";

const CustomButton4 = () => {
  const { webinarData } = useWebinarData();

  const handleClick = () => {
    window.open(webinarData?.investing)
  };

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
      { month: "long", year: "numeric" }
    )}`;

    const formattedTime = dateObj.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return `${formattedDate} | ${formattedTime}`;
  };

  const formattedDateTime = formatDateTime(webinarData.webinar_date_time);

  return (
    <div className="flex font-bold" onClick={handleClick}>

      <button
        className="p-4 text-black rounded-l-md w-[300px] transition-all duration-300"
        style={{
          background: "linear-gradient(180deg, #58FF29, #31DE00, #26AD00 100%)", 
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
        onMouseEnter={
          (e) =>
            (e.currentTarget.style.background =
              "linear-gradient(180deg, #49E318 0%, #2FBE00 50%, #1F9D00 100%)") 
        }
        onMouseLeave={
          (e) =>
            (e.currentTarget.style.background =
              "linear-gradient(180deg, #58FF29 0%, #31DE00 50%, #26AD00 100%)") 
        }
      >
        Join Now (English) at <span className="line-through">₹499</span> ₹199
      </button>

  
      <button
        className="flex items-center justify-center text-black dark:text-white bg-transparent rounded-r-md w-[300px] transition-all duration-300"
        style={{
          border: "2px solid transparent", 
          borderImageSource:
            "linear-gradient(180deg, #58FF29, #31DE00, #26AD00 100%)", 
          borderImageSlice: 1,
          borderRadius: "20px",
        }}
      >
        <div className="flex gap-4 justify-center items-center">
          <span>
            <img
              src={buttonicon2}
              alt="buttonicon2"
              className="h-[24px] w-[24px] object-contain"
            />
          </span>
          <div className="flex flex-col justify-center items-start">
            <span className="text-[#0E0F19B2]/[0.7] dark:text-[#FFFFFFB2]/[0.7] font-normal text-[12px] leading-6">
              Date & Time
            </span>
            {/* <span>2nd February 2025 | 11:00 AM</span> */}
            <span>{formattedDateTime}</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default CustomButton4;
