import React from "react";

const CustomButtonForMobile = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 font-bold">
      <div className="flex flex-col gap-2 items-center justify-center border-2 border-[#58FF29] p-4 rounded-md">
        <div>15th January 2025 | 9:00 PM</div>
        <button
          className="p-4 text-black rounded-md w-[300px] transition-all duration-300"
          style={{
            background:
              "linear-gradient(180deg, #58FF29, #31DE00, #26AD00 100%)", 
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
          Join Now (Hindi) at <span className="line-through">₹499</span> ₹199
        </button>
      </div>

      <div className="flex justify-center items-center flex-col border-2 border-[#007AFF] p-4 rounded-md">
        <div>15th January 2025 | 9:00 PM</div>
        <button
          className="p-4 text-white rounded-md w-[300px] transition-all duration-300"
          style={{
            background: "linear-gradient(180deg, #007AFF, #1064BF 100%)", 
            boxShadow:
              "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          }}
          onMouseEnter={
            (e) =>
              (e.currentTarget.style.background =
                "linear-gradient(180deg, #005FCC 0%, #0047A6 50%, #00378D 100%)") 
          }
          onMouseLeave={
            (e) =>
              (e.currentTarget.style.background =
                "linear-gradient(180deg, #007AFF 0%, #1064BF 100%)") 
          }
        >
          Join Now (English) at <span className="line-through">₹499</span> ₹199
        </button>
      </div>
    </div>
  );
};

export default CustomButtonForMobile;
