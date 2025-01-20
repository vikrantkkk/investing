import React from "react";

const CustomButtonForMobile = () => {
  const handleClickHindi = () => {
    window.open(
      "https://parang.exlyapp.com/2fe56a70-ac54-468a-b871-25d191123b4a?init_booking=true&enable_discount=true",
      "_blank"
    );
  };
  const handleClickEnglish = () => {
    window.open(
      "https://parang.exlyapp.com/2eaa1e20-9706-461c-9a8f-bac2c175fd31?init_booking=true&enable_discount=true",
      "_blank"
    );
  };
  return (
    <div className="flex md:flex-row flex-col gap-4 font-bold">
         <div
        className="flex flex-col gap-2 items-center justify-center border-2 border-[#58FF29] p-4 rounded-md"
        onClick={handleClickEnglish}
      
      >
        <div className="dark:text-white">26th January 2025 | 11:00 AM</div>
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
        <div className="dark:text-white">26th January 2025 | 06:00 PM</div>
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
