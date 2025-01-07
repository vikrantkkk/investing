import React from "react";

const CustomButton = () => {
  return (
    <div className="flex font-bold">
      {/* Left Button 1: Gradient Background with Box Shadow */}
      <button
        className="p-4 text-black rounded-l-md w-[300px] transition-all duration-300"
        style={{
          background: "linear-gradient(180deg, #58FF29, #31DE00, #26AD00 100%)", // Gradient for Left Button 1
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(180deg, #49E318 0%, #2FBE00 50%, #1F9D00 100%)") // Darker gradient on hover
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(180deg, #58FF29 0%, #31DE00 50%, #26AD00 100%)") // Original gradient
        }
      >
        Join Now (Hindi) at <span className="line-through">₹499</span> ₹199
      </button>

      {/* Left Button 2: Gradient Background with Box Shadow */}
      <button
        className="p-4 text-white rounded-l-md w-[300px] transition-all duration-300 ml-4" // Added margin-left for gap
        style={{
          background: "linear-gradient(180deg, #007AFF, #1064BF 100%)", // Gradient for Left Button 2 (Different Color)
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(180deg, #005FCC 0%, #0047A6 50%, #00378D 100%)") // Darker gradient on hover for Left Button 2
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(180deg, #007AFF 0%, #1064BF 100%)") // Original gradient for Left Button 2
        }
      >
        Join Now (English) at <span className="line-through">₹499</span> ₹199
      </button>
    </div>
  );
};

export default CustomButton;
