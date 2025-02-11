import React from "react";
import buttonicon1 from "../assets/svg/buttonicon1.svg";
import { useWebinarData } from "../hooks/WebinarContext";
const CustomButton3 = () => {
  const { webinarData } = useWebinarData();

  const handleClick = () => {
    window.open(webinarData?.invest, "_blank");
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

  const formattedDateTime = formatDateTime(webinarData?.hindi_webinar_date_time);

  return (
    <div className="flex font-bold" onClick={handleClick}>
      {/* Left Button: Gradient Background with Box Shadow */}
      <button
        className="p-4 text-white rounded-l-md w-[300px] transition-all duration-300"
        style={{
          background: "linear-gradient(263.67deg, #007AFF, #1064BF 100%)", // Desired gradient
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
        onMouseEnter={
          (e) =>
            (e.currentTarget.style.background =
              "linear-gradient(263.67deg, #005FCC 51.67%, #0047A6 100%)") // Darker gradient on hover
        }
        onMouseLeave={
          (e) =>
            (e.currentTarget.style.background =
              "linear-gradient(263.67deg, #007AFF, #1064BF 100%)") // Original gradient
        }
      >
        Join Now (Hindi) at <span className="line-through">₹499</span> ₹199
      </button>

      {/* Right Button: Transparent with Gradient Border */}
      <button
        className="flex items-center justify-center text-black dark:text-white bg-transparent rounded-r-md w-[300px] transition-all duration-300"
        style={{
          border: "2px solid transparent", // 2px border for the right button
          borderImageSource:
            "linear-gradient(263.67deg, #007AFF, #1064BF 96.05%)", // Same gradient for the border
          borderImageSlice: 1, // Ensures the gradient is applied to the border
          borderRadius: "20px", // Border radius for the right button
        }}
      >
        <div className="flex gap-4 justify-center items-center">
          <span>
            <img
              src={buttonicon1}
              alt="buttonicon1"
              className="h-[24px] w-[24px] object-contain"
            />
          </span>
          <div className="flex flex-col justify-center items-start">
            <span className="text-[#0E0F19B2]/[0.7] dark:text-[#FFFFFFB2]/[0.7] font-normal text-[12px] leading-6">
              Date & Time
            </span>
            {/* <span>2nd February 2025 | 06:00 PM</span> */}
            <span>{formattedDateTime}</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default CustomButton3;
