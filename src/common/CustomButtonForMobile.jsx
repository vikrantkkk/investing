import React from "react";
import { useWebinarData } from "../hooks/WebinarContext";

const CustomButtonForMobile = () => {
  const { webinarData } = useWebinarData();

  const handleClickHindi = () => {
    window.open(webinarData?.invest, "_blank");
  };
  const handleClickEnglish = () => {
    window.open(webinarData?.investing, "_blank");
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

  const formattedDateTimeEng = formatDateTime(webinarData?.webinar_date_time);
  const formattedDateTimeHin = formatDateTime(
    webinarData?.hindi_webinar_date_time
  );

  return (
    <div className="flex md:flex-row flex-col gap-4 font-bold">
      <div
        className="flex flex-col gap-2 items-center justify-center border-2 border-[#58FF29] p-4 rounded-md"
        onClick={handleClickEnglish}
      >
        <div className="dark:text-white">{formattedDateTimeEng}</div>
        <button
          className="p-4 text-black rounded-md w-[300px] transition-all duration-300"
          style={{
            background:
              "linear-gradient(180deg, #58FF29, #31DE00, #26AD00 100%)",
            boxShadow:
              "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(180deg, #49E318 0%, #2FBE00 50%, #1F9D00 100%)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(180deg, #58FF29 0%, #31DE00 50%, #26AD00 100%)")
          }
        >
          Join Now (English) at <span className="line-through">₹499</span> ₹199
        </button>
      </div>
      <div
        className="flex justify-center items-center gap-2 flex-col border-2 border-[#007AFF] p-4 rounded-md"
        onClick={handleClickHindi}
      >
        <div className="dark:text-white">{formattedDateTimeHin}</div>
        <button
          className="p-4 text-white rounded-md w-[300px] transition-all duration-300"
          style={{
            background: "linear-gradient(180deg, #007AFF, #1064BF 100%)",
            boxShadow:
              "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(180deg, #005FCC 0%, #0047A6 50%, #00378D 100%)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(180deg, #007AFF 0%, #1064BF 100%)")
          }
        >
          Join Now (Hindi) at <span className="line-through">₹499</span> ₹199
        </button>
      </div>
    </div>
  );
};

export default CustomButtonForMobile;
